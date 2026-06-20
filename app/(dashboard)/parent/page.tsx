import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

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

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-stone-900 tracking-tight">Mes enfants</h1>
      </div>

      {enfants.length === 0 ? (
        <div
          className="bg-white rounded-2xl p-8 text-center"
          style={{ border: "1px solid rgba(232,212,138,0.3)" }}
        >
          <p className="text-stone-300 text-sm">
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
                className="bg-white rounded-2xl p-5"
                style={{ border: "1px solid rgba(232,212,138,0.3)", boxShadow: "0 1px 12px rgba(0,0,0,0.04)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full font-bold flex items-center justify-center text-sm shrink-0"
                    style={{ background: "rgba(201,168,76,0.12)", color: "#9A7428" }}
                  >
                    {eleve.prenom.charAt(0)}{eleve.nom.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900">
                      {eleve.prenom} {eleve.nom}
                    </p>
                    <p className="text-stone-400 text-xs">
                      {derniereClasse
                        ? `${derniereClasse.libelle} — ${derniereClasse.anneeScolaire.libelle}`
                        : "Classe non assignée"}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`/parent/bulletins?eleveId=${eleve.id}`}
                    className="btn-glass flex-1 text-center text-sm font-medium px-3 py-2 rounded-xl"
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
