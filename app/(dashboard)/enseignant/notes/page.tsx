import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import NotesClient from "./NotesClient";
import BackLink from "@/components/ui/BackLink";

export default async function NotesPage({
  searchParams,
}: {
  searchParams: Promise<{ classeId?: string; periodeId?: string }>;
}) {
  const session = await getSession();
  if (!session || !["ENSEIGNANT", "ADMIN", "DIRECTEUR"].includes(session.user.role)) {
    redirect("/");
  }

  const params = await searchParams;

  // Récupérer les classes de l'enseignant connecté (ou toutes pour admin/directeur)
  const isEnseignant = session.user.role === "ENSEIGNANT";
  const anneeScolaireActive = await prisma.anneeScolaire.findFirst({ where: { active: true } });

  const enseignements = isEnseignant
    ? await prisma.enseignement.findMany({
        where: { userId: session.user.id },
        include: { classe: { include: { niveau: true, anneeScolaire: true } }, matiere: true },
      })
    : [];

  const classesDisponibles = isEnseignant
    ? [
        ...new Map(
          enseignements
            .filter((e) => e.classe.anneeScolaireId === anneeScolaireActive?.id)
            .map((e) => [e.classe.id, e.classe])
        ).values(),
      ]
    : await prisma.classe.findMany({
        where: anneeScolaireActive ? { anneeScolaireId: anneeScolaireActive.id } : {},
        include: { niveau: true },
        orderBy: [{ niveau: { ordre: "asc" } }, { libelle: "asc" }],
      });

  const periodes = anneeScolaireActive
    ? await prisma.periodeEvaluation.findMany({
        where: { anneeScolaireId: anneeScolaireActive.id },
        orderBy: { dateDebut: "asc" },
      })
    : [];

  const classeId = params.classeId ?? classesDisponibles[0]?.id;
  const periodeId = params.periodeId ?? periodes[0]?.id;

  if (!classeId || !periodeId) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold text-stone-900 mb-2">Saisie des notes</h1>
        <p className="text-stone-500">
          {classesDisponibles.length === 0
            ? "Aucune classe assignée pour l'année en cours."
            : "Aucune période d'évaluation créée."}
        </p>
      </div>
    );
  }

  // Charger les données pour la classe + période sélectionnées
  const classeSelectionnee = await prisma.classe.findUnique({
    where: { id: classeId },
    include: {
      niveau: true,
      eleves: {
        include: {
          eleve: true,
        },
        orderBy: { eleve: { nom: "asc" } },
      },
    },
  });

  const periodeSelectionnee = await prisma.periodeEvaluation.findUnique({
    where: { id: periodeId },
  });

  // Matières disponibles pour cette classe (filtrées par enseignant si nécessaire)
  const matieresDisponibles = isEnseignant
    ? enseignements
        .filter((e) => e.classe.id === classeId)
        .map((e) => e.matiere)
    : await prisma.matiere.findMany({
        where: { niveauId: classeSelectionnee?.niveauId },
        orderBy: { libelle: "asc" },
      });

  // Notes existantes
  const notes = await prisma.note.findMany({
    where: {
      periodeId,
      eleve: { classes: { some: { classeId } } },
      matiereId: { in: matieresDisponibles.map((m) => m.id) },
    },
    include: { matiere: true },
  });

  // Appréciations
  const appreciations = await prisma.appreciationClasse.findMany({
    where: { classeId, periodeId },
  });

  return (
    <div>
      <BackLink href="/enseignant" label="Retour à l'accueil" />
      <NotesClient
        key={`${classeId}-${periodeId}`}
        classes={classesDisponibles}
        periodes={periodes}
        classeSelectionnee={classeSelectionnee}
        periodeSelectionnee={periodeSelectionnee}
        matieres={matieresDisponibles}
        notes={notes}
        appreciations={appreciations}
        selectedClasseId={classeId}
        selectedPeriodeId={periodeId}
      />
    </div>
  );
}
