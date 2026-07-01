import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ActionTile from "@/components/ActionTile";

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

export default async function ParentDashboard() {
  const session = await getSession();
  if (session?.user.role !== "PARENT") redirect("/");

  const enfants = await prisma.parentEleve.findMany({
    where: { userId: session.user.id },
    include: {
      eleve: {
        include: {
          classes: {
            include: {
              classe: { include: { niveau: true, anneeScolaire: true } },
            },
            orderBy: { anneeScolaire: { dateDebut: "desc" } },
            take: 1,
          },
        },
      },
    },
  });

  const prenom = session.user.name?.split(" ")[0] ?? "Parent";

  return (
    <div>
      {/* En-tête */}
      <div style={{ marginBottom: 36 }}>
        <p className="page-eyebrow" style={{ marginBottom: 10 }}>Espace parent</p>
        <h1 style={{ fontSize: 38, lineHeight: 1.15, marginBottom: 6 }}>
          Bonjour,{" "}
          <em style={{ color: "var(--forest)", fontStyle: "italic" }}>{prenom}.</em>
        </h1>
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
        Accès rapide
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
        <ActionTile
          href="/parent/bulletins"
          icon={IconReport}
          label="Bulletins scolaires"
          sub="Résultats, notes et appréciations"
        />
        <ActionTile
          href="/calendrier"
          icon={IconCalendar}
          label="Calendrier scolaire"
          sub="Événements, examens et vacances"
        />
      </div>

      {/* Mes enfants */}
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
        Mes enfants
      </p>

      {enfants.length === 0 ? (
        <div className="paper-card p-8 text-center">
          <p className="text-sm" style={{ color: "var(--inkLt)" }}>
            Aucun enfant associé à votre compte. Contactez l&apos;administration.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {enfants.map(({ eleve }) => {
            const derniereClasse = eleve.classes[0]?.classe;
            const initials = `${eleve.prenom.charAt(0)}${eleve.nom.charAt(0)}`;
            return (
              <div key={eleve.id} className="paper-card p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="avatar avatar-forest w-10 h-10 shrink-0"
                    style={{ fontSize: "14px" }}
                  >
                    {initials}
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: "var(--ink)" }}>
                      {eleve.prenom} {eleve.nom}
                    </p>
                    <p className="text-xs" style={{ color: "var(--inkLt)" }}>
                      {derniereClasse
                        ? `${derniereClasse.libelle} — ${derniereClasse.anneeScolaire.libelle}`
                        : "Classe non assignée"}
                    </p>
                  </div>
                </div>
                <a
                  href={`/parent/bulletins?eleveId=${eleve.id}`}
                  className="btn-primary block text-center text-sm px-3 py-2"
                >
                  Voir les bulletins
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
