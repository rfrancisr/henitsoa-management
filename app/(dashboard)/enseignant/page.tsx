import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function EnseignantDashboard() {
  const session = await auth();
  if (session?.user.role !== "ENSEIGNANT") redirect("/");

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

  const anneeScolaireActive = await prisma.anneeScolaire.findFirst({
    where: { active: true },
  });

  const enseignementsActifs = enseignements.filter(
    (e) => e.classe.anneeScolaireId === anneeScolaireActive?.id
  );

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">
          Bonjour, {session.user.name}
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          {anneeScolaireActive?.libelle ?? "Aucune année scolaire active"}
        </p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-200">
          <h2 className="font-semibold text-slate-900">Mes classes cette année</h2>
        </div>
        <div className="divide-y divide-slate-100">
          {enseignementsActifs.length === 0 ? (
            <p className="px-5 py-8 text-slate-400 text-sm text-center">
              Aucune classe assignée pour l&apos;année en cours.
            </p>
          ) : (
            enseignementsActifs.map((e) => (
              <div key={`${e.classeId}-${e.matiereId}`} className="px-5 py-4 flex items-center justify-between">
                <div>
                  <p className="font-medium text-slate-900">{e.classe.libelle}</p>
                  <p className="text-slate-500 text-sm">{e.matiere.libelle} · coeff. {e.matiere.coefficient}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-slate-400">{e.classe._count.eleves} élèves</span>
                  <a
                    href={`/enseignant/notes?classeId=${e.classeId}&matiereId=${e.matiereId}`}
                    className="text-sm font-medium text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    Saisir les notes
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
