import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

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
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-stone-900 tracking-tight">Bulletins scolaires</h1>
      </div>

      {enfants.length === 0 ? (
        <div
          className="bg-white rounded-2xl p-8 text-center"
          style={{ border: "1px solid rgba(232,212,138,0.3)" }}
        >
          <p className="text-stone-300 text-sm">Aucun enfant associé à votre compte.</p>
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
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    eleve.id === eleveId
                      ? "btn-gold"
                      : "bg-white border border-stone-200 text-stone-600 hover:bg-stone-50"
                  }`}
                >
                  {eleve.prenom} {eleve.nom}
                </a>
              ))}
            </div>
          )}

          {/* Bulletins disponibles */}
          {!derniereClasse ? (
            <div
              className="bg-white rounded-2xl p-8 text-center"
              style={{ border: "1px solid rgba(232,212,138,0.3)" }}
            >
              <p className="text-stone-300 text-sm">Votre enfant n&apos;est pas encore affecté à une classe.</p>
            </div>
          ) : (
            <div
              className="bg-white rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(232,212,138,0.3)", boxShadow: "0 1px 12px rgba(0,0,0,0.04)" }}
            >
              <div className="px-5 py-4 border-b border-stone-100">
                <h2 className="font-semibold text-stone-900">
                  {enfant?.eleve.prenom} {enfant?.eleve.nom} — {derniereClasse.classe.anneeScolaire.libelle}
                </h2>
                <p className="text-stone-400 text-xs mt-0.5">Classe : {derniereClasse.classe.libelle}</p>
              </div>
              <div className="divide-y divide-stone-50">
                {periodes.length === 0 ? (
                  <p className="px-5 py-8 text-stone-300 text-sm text-center">
                    Aucune période d&apos;évaluation disponible.
                  </p>
                ) : (
                  periodes.map((p) => (
                    <div key={p.id} className="px-5 py-4 flex items-center justify-between">
                      <div>
                        <p className="font-medium text-stone-900">{p.libelle}</p>
                        <p className="text-stone-400 text-xs">
                          {p.close ? "Clôturée" : "En cours"}
                        </p>
                      </div>
                      {p.close ? (
                        <a
                          href={`/api/bulletin?eleveId=${eleveId}&classeId=${derniereClasse.classeId}&periodeId=${p.id}`}
                          target="_blank"
                          className="btn-gold flex items-center gap-2 text-sm px-4 py-2 rounded-xl"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Télécharger
                        </a>
                      ) : (
                        <span className="text-stone-300 text-sm">Disponible après clôture</span>
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
