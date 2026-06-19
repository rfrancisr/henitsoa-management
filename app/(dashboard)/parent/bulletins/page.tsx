import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function ParentBulletinsPage({
  searchParams,
}: {
  searchParams: Promise<{ eleveId?: string }>;
}) {
  const session = await auth();
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
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Bulletins scolaires</h1>
      </div>

      {enfants.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
          <p className="text-slate-400 text-sm">Aucun enfant associé à votre compte.</p>
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
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    eleve.id === eleveId
                      ? "bg-blue-600 text-white"
                      : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {eleve.prenom} {eleve.nom}
                </a>
              ))}
            </div>
          )}

          {/* Bulletins disponibles */}
          {!derniereClasse ? (
            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
              <p className="text-slate-400 text-sm">Votre enfant n&apos;est pas encore affecté à une classe.</p>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-200">
                <h2 className="font-semibold text-slate-900">
                  {enfant?.eleve.prenom} {enfant?.eleve.nom} — {derniereClasse.classe.anneeScolaire.libelle}
                </h2>
                <p className="text-slate-500 text-xs mt-0.5">Classe : {derniereClasse.classe.libelle}</p>
              </div>
              <div className="divide-y divide-slate-100">
                {periodes.length === 0 ? (
                  <p className="px-5 py-8 text-slate-400 text-sm text-center">
                    Aucune période d&apos;évaluation disponible.
                  </p>
                ) : (
                  periodes.map((p) => (
                    <div key={p.id} className="px-5 py-4 flex items-center justify-between">
                      <div>
                        <p className="font-medium text-slate-900">{p.libelle}</p>
                        <p className="text-slate-500 text-xs">
                          {p.close ? "Clôturée" : "En cours"}
                        </p>
                      </div>
                      {p.close ? (
                        <a
                          href={`/api/bulletin?eleveId=${eleveId}&classeId=${derniereClasse.classeId}&periodeId=${p.id}`}
                          target="_blank"
                          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Télécharger
                        </a>
                      ) : (
                        <span className="text-slate-400 text-sm">Disponible après clôture</span>
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
