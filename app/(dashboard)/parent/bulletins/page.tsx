import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import BackLink from "@/components/ui/BackLink";

export default async function ParentBulletinsPage({
  searchParams,
}: {
  searchParams: Promise<{ eleveId?: string }>;
}) {
  const session = await getSession();
  if (session?.user.role !== "PARENT") redirect("/");

  const params = await searchParams;

  const enfants = await prisma.parentEleve.findMany({
    where: { userId: session.user.id },
    include: {
      eleve: {
        include: {
          classes: {
            include: { classe: { include: { anneeScolaire: true } } },
            orderBy: { anneeScolaire: { dateDebut: "desc" } },
          },
        },
      },
    },
  });

  const eleveId = params.eleveId ?? enfants[0]?.eleveId;
  const enfant = enfants.find((e) => e.eleveId === eleveId);
  const derniereClasse = enfant?.eleve.classes[0];

  const periodes = derniereClasse
    ? await prisma.periodeEvaluation.findMany({
        where: { anneeScolaireId: derniereClasse.classe.anneeScolaireId },
        orderBy: { dateDebut: "asc" },
      })
    : [];

  return (
    <div>
      <BackLink href="/parent" label="Retour à l'accueil" />
      <div className="mb-8">
        <p className="page-eyebrow mb-1">Espace parent</p>
        <h1 style={{ fontSize: "32px" }}>Bulletins scolaires</h1>
      </div>

      {enfants.length === 0 ? (
        <div className="paper-card p-8 text-center">
          <p className="text-sm" style={{ color: "var(--inkLt)" }}>Aucun enfant associé à votre compte.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Sélecteur enfant */}
          {enfants.length > 1 && (
            <div className="flex gap-3">
              {enfants.map(({ eleve }) => (
                <a
                  key={eleve.id}
                  href={`/parent/bulletins?eleveId=${eleve.id}`}
                  className={eleve.id === eleveId ? "btn-primary px-4 py-2 text-sm" : "btn-secondary px-4 py-2 text-sm"}
                >
                  {eleve.prenom} {eleve.nom}
                </a>
              ))}
            </div>
          )}

          {/* Bulletins disponibles */}
          {!derniereClasse ? (
            <div className="paper-card p-8 text-center">
              <p className="text-sm" style={{ color: "var(--inkLt)" }}>Votre enfant n&apos;est pas encore affecté à une classe.</p>
            </div>
          ) : (
            <div className="paper-card overflow-hidden">
              <div className="px-5 py-4" style={{ borderBottom: "1px solid var(--borderLt)" }}>
                <h2 className="font-semibold" style={{ color: "var(--ink)" }}>
                  {enfant?.eleve.prenom} {enfant?.eleve.nom} — {derniereClasse.classe.anneeScolaire.libelle}
                </h2>
                <p className="text-xs mt-0.5" style={{ color: "var(--inkLt)" }}>Classe : {derniereClasse.classe.libelle}</p>
              </div>
              <div>
                {periodes.length === 0 ? (
                  <p className="px-5 py-8 text-sm text-center" style={{ color: "var(--inkLt)" }}>
                    Aucune période d&apos;évaluation disponible.
                  </p>
                ) : (
                  periodes.map((p) => (
                    <div key={p.id} className="px-5 py-4 flex items-center justify-between" style={{ borderBottom: "1px solid var(--borderLt)" }}>
                      <div>
                        <p className="font-medium" style={{ color: "var(--ink)" }}>{p.libelle}</p>
                        <p className="text-xs" style={{ color: "var(--inkLt)" }}>
                          {p.close ? "Clôturée" : "En cours"}
                        </p>
                      </div>
                      {p.close ? (
                        <div className="flex items-center gap-2">
                          <a
                            href={`/api/bulletin?eleveId=${eleveId}&classeId=${derniereClasse.classeId}&periodeId=${p.id}&format=html`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary flex items-center gap-2 text-sm px-4 py-2"
                          >
                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            Voir
                          </a>
                          <a
                            href={`/api/bulletin?eleveId=${eleveId}&classeId=${derniereClasse.classeId}&periodeId=${p.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary flex items-center gap-2 text-sm px-4 py-2"
                          >
                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            PDF
                          </a>
                        </div>
                      ) : (
                        <span className="text-sm" style={{ color: "var(--stoneDk)" }}>Disponible après clôture</span>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
