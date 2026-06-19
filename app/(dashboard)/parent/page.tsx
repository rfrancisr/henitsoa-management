import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function ParentDashboard() {
  const session = await auth();
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

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Mes enfants</h1>
      </div>

      {enfants.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
          <p className="text-slate-400 text-sm">
            Aucun enfant associé à votre compte. Contactez l&apos;administration.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {enfants.map(({ eleve }) => {
            const derniereClasse = eleve.classes[0]?.classe;
            return (
              <div
                key={eleve.id}
                className="bg-white rounded-xl border border-slate-200 p-5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm">
                    {eleve.prenom.charAt(0)}{eleve.nom.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      {eleve.prenom} {eleve.nom}
                    </p>
                    <p className="text-slate-500 text-xs">
                      {derniereClasse
                        ? `${derniereClasse.libelle} — ${derniereClasse.anneeScolaire.libelle}`
                        : "Classe non assignée"}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`/parent/bulletins?eleveId=${eleve.id}`}
                    className="flex-1 text-center text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg transition-colors"
                  >
                    Voir les bulletins
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
