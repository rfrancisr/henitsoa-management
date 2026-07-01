import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ActionTile from "@/components/ActionTile";

const IconStudent = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const IconReport = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14,2 14,8 20,8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
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

const IconChart = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
    <line x1="2" y1="20" x2="22" y2="20"/>
  </svg>
);

export default async function DirecteurDashboard() {
  const session = await getSession();
  if (session?.user.role !== "DIRECTEUR" && session?.user.role !== "ADMIN") redirect("/");

  const [anneeScolaireActive, totalEleves, totalEnseignants] = await Promise.all([
    prisma.anneeScolaire.findFirst({
      where: { active: true },
      include: { classes: true },
    }),
    prisma.eleve.count({ where: { actif: true } }),
    prisma.user.count({ where: { role: "ENSEIGNANT", actif: true } }),
  ]);

  const totalClasses = anneeScolaireActive?.classes.length ?? 0;
  const prenom = session?.user.name?.split(" ")[0] ?? "Directeur";

  const stats = [
    { val: totalEleves, lbl: "Élèves actifs" },
    { val: totalEnseignants, lbl: "Enseignants" },
    { val: totalClasses, lbl: "Classes" },
  ];

  return (
    <div>
      {/* En-tête */}
      <div style={{ marginBottom: 36 }}>
        <p className="page-eyebrow" style={{ marginBottom: 10 }}>École Henitsoa · Direction</p>
        <h1 style={{ fontSize: 38, lineHeight: 1.15, marginBottom: 6 }}>
          Bonjour,{" "}
          <em style={{ color: "var(--forest)", fontStyle: "italic" }}>{prenom}.</em>
        </h1>
        <p style={{ fontSize: 14, color: "var(--inkLt)" }}>
          {anneeScolaireActive?.libelle ?? "Aucune année scolaire active"}
        </p>
      </div>

      {!anneeScolaireActive && (
        <div
          className="paper-card p-5 text-sm mb-8"
          style={{ borderLeft: "4px solid var(--amber)", color: "var(--amber)" }}
        >
          Veuillez demander à l&apos;administrateur d&apos;activer une année scolaire.
        </div>
      )}

      {/* Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          borderTop: "1px solid var(--border)",
          borderLeft: "1px solid var(--border)",
          marginBottom: 36, overflowX: "auto",
        }}
      >
        {stats.map((s) => (
          <div
            key={s.lbl}
            style={{
              padding: "16px 18px",
              borderRight: "1px solid var(--border)",
              borderBottom: "1px solid var(--border)",
              background: "var(--white)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 28,
                color: "var(--forest)",
                lineHeight: 1,
                marginBottom: 4,
              }}
            >
              {s.val}
            </div>
            <div
              style={{
                fontSize: 11.5,
                color: "var(--inkLt)",
                fontWeight: 500,
                letterSpacing: 0.4,
                textTransform: "uppercase",
              }}
            >
              {s.lbl}
            </div>
          </div>
        ))}
      </div>

      {/* Section label */}
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

      {/* ActionTiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <ActionTile
          href="/directeur/eleves"
          icon={IconStudent}
          label="Registre des élèves"
          sub="Liste complète · dossiers et affectations"
        />
        <ActionTile
          href="/directeur/bulletins"
          icon={IconReport}
          label="Bulletins de notes"
          sub="PDF et classement par période"
        />
        <ActionTile
          href="/calendrier"
          icon={IconCalendar}
          label="Calendrier scolaire"
          sub="Événements, examens et vacances"
        />
        <ActionTile
          href="/performance"
          icon={IconChart}
          label="Performance des élèves"
          sub="Statistiques et moyennes par classe"
        />
      </div>
    </div>
  );
}
