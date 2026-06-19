import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ClassesClient from "./ClassesClient";

export default async function ClassesPage() {
  const session = await auth();
  if (session?.user.role !== "ADMIN" && session?.user.role !== "DIRECTEUR") redirect("/");

  const [niveaux, anneesScolaires, enseignants] = await Promise.all([
    prisma.niveau.findMany({ orderBy: { ordre: "asc" } }),
    prisma.anneeScolaire.findMany({ orderBy: { dateDebut: "desc" } }),
    prisma.user.findMany({
      where: { role: "ENSEIGNANT", actif: true },
      orderBy: [{ nom: "asc" }],
      select: { id: true, nom: true, prenom: true },
    }),
  ]);

  const anneeScolaireActive = anneesScolaires.find((a) => a.active);

  const classes = await prisma.classe.findMany({
    where: anneeScolaireActive ? { anneeScolaireId: anneeScolaireActive.id } : {},
    include: {
      niveau: true,
      anneeScolaire: true,
      _count: { select: { eleves: true } },
      enseignements: {
        include: {
          user: { select: { id: true, nom: true, prenom: true } },
          matiere: { include: { niveau: true } },
        },
      },
    },
    orderBy: [{ niveau: { ordre: "asc" } }, { libelle: "asc" }],
  });

  const matieres = await prisma.matiere.findMany({
    include: { niveau: true },
    orderBy: [{ niveau: { ordre: "asc" } }, { libelle: "asc" }],
  });

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Classes</h1>
        <p className="text-slate-500 text-sm mt-1">
          {anneeScolaireActive?.libelle ?? "Aucune année scolaire active"}
        </p>
      </div>
      <ClassesClient
        classes={classes}
        niveaux={niveaux}
        anneesScolaires={anneesScolaires}
        enseignants={enseignants}
        matieres={matieres}
        anneeScolaireActiveId={anneeScolaireActive?.id ?? null}
      />
    </div>
  );
}
