import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ElevesClient from "./ElevesClient";
import BackLink from "@/components/ui/BackLink";

export default async function ElevesPage() {
  const session = await getSession();
  if (session?.user.role !== "ADMIN" && session?.user.role !== "DIRECTEUR") redirect("/");

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

  const actifs = eleves.filter((e) => e.actif).length;

  return (
    <div>
      <BackLink />
      <div style={{ marginBottom: 28 }}>
        <p style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "var(--inkLt)", marginBottom: 6 }}>
          Administration — Rentrée
        </p>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 28, fontWeight: 400, color: "var(--ink)", marginBottom: 4 }}>
          Élèves
        </h1>
        <p style={{ fontSize: 14, color: "var(--inkLt)" }}>
          {actifs} élève{actifs !== 1 ? "s" : ""} inscrit{actifs !== 1 ? "s" : ""} ·
          Ajoutez ou modifiez les fiches et associez chaque élève à un parent
        </p>
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
