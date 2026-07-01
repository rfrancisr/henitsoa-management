import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ClassesClient from "./ClassesClient";
import BackLink from "@/components/ui/BackLink";

export default async function ClassesPage() {
  const session = await getSession();
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
      <BackLink />
      <div style={{ marginBottom: 28 }}>
        <p style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "var(--inkLt)", marginBottom: 6 }}>
          Administration — Début d&apos;année
        </p>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 28, fontWeight: 400, color: "var(--ink)", marginBottom: 4 }}>
          Classes
        </h1>
        <p style={{ fontSize: 14, color: "var(--inkLt)" }}>
          {classes.length} classe{classes.length !== 1 ? "s" : ""} ·{" "}
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
