import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ElevesClient from "../../admin/eleves/ElevesClient";

export default async function DirecteurElevesPage() {
  const session = await getSession();
  if (!session || !["ADMIN", "DIRECTEUR"].includes(session.user.role)) redirect("/");

  const [eleves, parents, anneeScolaireActive] = await Promise.all([
    prisma.eleve.findMany({
      orderBy: [{ nom: "asc" }, { prenom: "asc" }],
      include: {
        parents: { include: { user: { select: { id: true, nom: true, prenom: true, email: true } } } },
        classes: {
          include: { classe: { include: { niveau: true } }, anneeScolaire: true },
          orderBy: { anneeScolaire: { dateDebut: "desc" } },
          take: 1,
        },
      },
    }),
    prisma.user.findMany({
      where: { role: "PARENT", actif: true },
      orderBy: [{ nom: "asc" }],
      select: { id: true, nom: true, prenom: true, email: true },
    }),
    prisma.anneeScolaire.findFirst({ where: { active: true } }),
  ]);

  const classes = anneeScolaireActive
    ? await prisma.classe.findMany({
        where: { anneeScolaireId: anneeScolaireActive.id },
        include: { niveau: true },
        orderBy: [{ niveau: { ordre: "asc" } }, { libelle: "asc" }],
      })
    : [];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-stone-900">Élèves</h1>
          <p className="text-stone-500 text-sm mt-1">
            {eleves.filter((e) => e.actif).length} élève(s) actif(s)
          </p>
        </div>
      </div>
      <ElevesClient
        eleves={eleves}
        parents={parents}
        classes={classes}
        anneeScolaireId={anneeScolaireActive?.id ?? null}
      />
    </div>
  );
}
