import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import PerformanceClient from "./PerformanceClient";
import BackLink from "@/components/ui/BackLink";

const HOME: Record<string, string> = { ADMIN: "/admin", PARENT: "/parent", ENSEIGNANT: "/enseignant" };

export default async function PerformancePage({
  searchParams,
}: {
  searchParams: Promise<{ e?: string; c?: string }>;
}) {
  const session = await getSession();
  if (!session) redirect("/login");

  const role = session.user.role;
  const userId = session.user.id;
  const { e: selectedEleveId, c: selectedClasseId } = await searchParams;

  const anneeScolaire = await prisma.anneeScolaire.findFirst({ where: { active: true } });

  const includeClasse = anneeScolaire
    ? { where: { anneeScolaireId: anneeScolaire.id }, include: { classe: { include: { niveau: true } } } }
    : { include: { classe: { include: { niveau: true } } } };

  let eleves: {
    id: string;
    nom: string;
    prenom: string;
    actif: boolean;
    classes: { classe: { libelle: string; niveau: { libelle: string } } }[];
  }[] = [];

  let classes: { id: string; libelle: string; niveau: { libelle: string } }[] = [];

  if (role === "ADMIN") {
    const classeWhereFilter =
      selectedClasseId && anneeScolaire
        ? { classes: { some: { classeId: selectedClasseId, anneeScolaireId: anneeScolaire.id } } }
        : {};

    const classesQuery: Promise<{ id: string; libelle: string; niveau: { libelle: string } }[]> =
      anneeScolaire
        ? prisma.classe.findMany({
            where: { anneeScolaireId: anneeScolaire.id },
            include: { niveau: true },
            orderBy: { libelle: "asc" },
          })
        : Promise.resolve([]);

    [eleves, classes] = await Promise.all([
      prisma.eleve.findMany({
        where: { actif: true, ...classeWhereFilter },
        include: { classes: includeClasse },
        orderBy: [{ nom: "asc" }, { prenom: "asc" }],
      }),
      classesQuery,
    ]);
  } else if (role === "PARENT") {
    eleves = await prisma.eleve.findMany({
      where: { actif: true, parents: { some: { userId } } },
      include: { classes: includeClasse },
      orderBy: [{ nom: "asc" }, { prenom: "asc" }],
    });
  } else if (role === "ENSEIGNANT") {
    const ensClasseIds = (
      await prisma.enseignement.findMany({ where: { userId }, select: { classeId: true } })
    ).map((e) => e.classeId);
    const uniqueClasseIds = [...new Set(ensClasseIds)];

    const activeClasseIds =
      selectedClasseId && uniqueClasseIds.includes(selectedClasseId)
        ? [selectedClasseId]
        : uniqueClasseIds;

    const [elevesClasses, classesList] = await Promise.all([
      prisma.eleveClasse.findMany({
        where: {
          classeId: { in: activeClasseIds },
          ...(anneeScolaire ? { anneeScolaireId: anneeScolaire.id } : {}),
        },
        include: { eleve: { include: { classes: includeClasse } } },
      }),
      prisma.classe.findMany({
        where: { id: { in: uniqueClasseIds } },
        include: { niveau: true },
        orderBy: { libelle: "asc" },
      }),
    ]);

    classes = classesList;
    const seen = new Set<string>();
    for (const ec of elevesClasses) {
      if (ec.eleve.actif && !seen.has(ec.eleve.id)) {
        seen.add(ec.eleve.id);
        eleves.push(ec.eleve);
      }
    }
    eleves.sort((a, b) => a.nom.localeCompare(b.nom) || a.prenom.localeCompare(b.prenom));
  } else {
    redirect("/");
  }

  // ── Données de performance de l'élève sélectionné ─────────────────────────

  let performance: {
    periodes: { id: string; libelle: string; dateDebut: Date; dateFin: Date }[];
    notes: { periodeId: string; matiereId: string; valeur: number; matiere: { libelle: string; coefficient: number } }[];
    appreciations: { periodeId: string; texte: string; mention: string }[];
  } | null = null;

  if (selectedEleveId && anneeScolaire) {
    const [notes, periodes, appreciations] = await Promise.all([
      prisma.note.findMany({
        where: { eleveId: selectedEleveId, periode: { anneeScolaireId: anneeScolaire.id } },
        include: { matiere: true, periode: true },
        orderBy: { periode: { dateDebut: "asc" } },
      }),
      prisma.periodeEvaluation.findMany({
        where: { anneeScolaireId: anneeScolaire.id },
        orderBy: { dateDebut: "asc" },
      }),
      prisma.appreciationClasse.findMany({
        where: { eleveId: selectedEleveId, periode: { anneeScolaireId: anneeScolaire.id } },
        include: { periode: true },
      }),
    ]);
    performance = { notes, periodes, appreciations };
  }

  const autoSelectId =
    !selectedEleveId && eleves.length === 1 ? eleves[0].id : null;

  return (
    <div>
      <BackLink href={HOME[role] ?? "/"} />
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-stone-900">Performance des élèves</h1>
        <p className="text-stone-500 text-sm mt-1">
          {anneeScolaire?.libelle ?? "Aucune année scolaire active"}
        </p>
      </div>
      <PerformanceClient
        eleves={eleves}
        selectedEleveId={selectedEleveId ?? autoSelectId}
        performance={performance}
        role={role}
        classes={classes}
        selectedClasseId={selectedClasseId ?? null}
      />
    </div>
  );
}
