import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function EnseignantDashboard() {
  const session = await getSession();
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
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-stone-900 tracking-tight">
          Bonjour, {session.user.name}
        </h1>
        <p className="text-stone-400 text-sm mt-1">
          {anneeScolaireActive?.libelle ?? "Aucune année scolaire active"}
        </p>
      </div>

      <div
        className="bg-white rounded-2xl overflow-hidden"
        style={{ border: "1px solid rgba(232,212,138,0.3)", boxShadow: "0 1px 12px rgba(0,0,0,0.04)" }}
      >
        <div className="px-5 py-4 border-b border-stone-100">
          <h2 className="font-semibold text-stone-900 text-sm">Mes classes cette année</h2>
        </div>
        <div className="divide-y divide-stone-50">
          {enseignementsActifs.length === 0 ? (
            <p className="px-5 py-8 text-stone-300 text-sm text-center">
              Aucune classe assignée pour l&apos;année en cours.
            </p>
          ) : (
            enseignementsActifs.map((e) => (
              <div key={`${e.classeId}-${e.matiereId}`} className="px-5 py-4 flex items-center justify-between">
                <div>
                  <p className="font-medium text-stone-900">{e.classe.libelle}</p>
                  <p className="text-stone-400 text-sm">{e.matiere.libelle} · coeff. {e.matiere.coefficient}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-stone-300">{e.classe._count.eleves} élèves</span>
                  <a
                    href={`/enseignant/notes?classeId=${e.classeId}&matiereId=${e.matiereId}`}
                    className="btn-glass text-sm font-medium px-3 py-1.5 rounded-lg"
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
