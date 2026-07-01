import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ActionTile from "@/components/ActionTile";

const IconPen = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9"/>
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
  </svg>
);

const IconList = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <line x1="8" y1="6" x2="21" y2="6"/>
    <line x1="8" y1="12" x2="21" y2="12"/>
    <line x1="8" y1="18" x2="21" y2="18"/>
    <line x1="3" y1="6" x2="3.01" y2="6"/>
    <line x1="3" y1="12" x2="3.01" y2="12"/>
    <line x1="3" y1="18" x2="3.01" y2="18"/>
  </svg>
);

const IconCalendar = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

export default async function EnseignantDashboard() {
  const session = await getSession();
  if (session?.user.role !== "ENSEIGNANT") redirect("/");

  const anneeScolaireActive = await prisma.anneeScolaire.findFirst({
    where: { active: true },
  });

  const enseignements = await prisma.enseignement.findMany({
    where: { userId: session.user.id },
    include: {
      matiere: true,
      classe: {
        include: {
          niveau: true,
          _count: { select: { eleves: true } },
          anneeScolaire: true,
        },
      },
    },
  });

  const enseignementsActifs = enseignements.filter(
    (e) => e.classe.anneeScolaireId === anneeScolaireActive?.id
  );

  const prenom = session.user.name?.split(" ")[0] ?? "Enseignant";

  return (
    <div>
      {/* En-tête */}
      <div style={{ marginBottom: 36 }}>
        <p className="page-eyebrow" style={{ marginBottom: 10 }}>Espace enseignant</p>
        <h1 style={{ fontSize: 38, lineHeight: 1.15, marginBottom: 6 }}>
          Bonjour,{" "}
          <em style={{ color: "var(--forest)", fontStyle: "italic" }}>{prenom}.</em>
        </h1>
        <p style={{ fontSize: 14, color: "var(--inkLt)" }}>
          {anneeScolaireActive?.libelle ?? "Aucune année scolaire active"}
        </p>
      </div>

      {/* Actions rapides */}
      <p
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 1.4,
          textTransform: "uppercase",
          color: "var(--inkLt)",
          marginBottom: 14,
          paddingBottom: 8,
          borderBottom: "1px solid var(--borderLt)",
        }}
      >
        Que souhaitez-vous faire ?
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
        <ActionTile
          href="/enseignant/notes"
          icon={IconPen}
          label="Saisir les notes"
          sub="Mettre à jour les résultats des élèves"
        />
        <ActionTile
          href="/enseignant/repartition"
          icon={IconList}
          label="Répartition annuelle"
          sub="Programme hebdomadaire par matière"
        />
        <ActionTile
          href="/calendrier"
          icon={IconCalendar}
          label="Calendrier scolaire"
          sub="Événements, examens et vacances"
        />
      </div>

      {/* Mes classes */}
      <p
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 1.4,
          textTransform: "uppercase",
          color: "var(--inkLt)",
          marginBottom: 14,
          paddingBottom: 8,
          borderBottom: "1px solid var(--borderLt)",
        }}
      >
        Mes classes cette année
      </p>

      <div className="paper-card overflow-hidden">
        {enseignementsActifs.length === 0 ? (
          <p className="px-5 py-8 text-sm text-center" style={{ color: "var(--inkLt)" }}>
            Aucune classe assignée pour l&apos;année en cours.
          </p>
        ) : (
          <div>
            {enseignementsActifs.map((e) => (
              <div
                key={`${e.classeId}-${e.matiereId}`}
                className="px-5 py-4 flex items-center justify-between"
                style={{ borderBottom: "1px solid var(--borderLt)" }}
              >
                <div>
                  <p className="font-medium" style={{ color: "var(--ink)" }}>{e.classe.libelle}</p>
                  <p className="text-sm" style={{ color: "var(--inkLt)" }}>
                    {e.matiere.libelle} · coeff. {e.matiere.coefficient}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm" style={{ color: "var(--inkLt)" }}>
                    {e.classe._count.eleves} élèves
                  </span>
                  <a
                    href={`/enseignant/notes?classeId=${e.classeId}`}
                    className="btn-secondary text-sm font-medium px-3 py-1.5"
                  >
                    Saisir les notes
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
