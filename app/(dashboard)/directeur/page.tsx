import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function DirecteurDashboard() {
  const session = await getSession();
  if (session?.user.role !== "DIRECTEUR" && session?.user.role !== "ADMIN") redirect("/");

  const anneeScolaireActive = await prisma.anneeScolaire.findFirst({
    where: { active: true },
    include: { classes: { include: { niveau: true, _count: { select: { eleves: true } } } } },
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-stone-900 tracking-tight">Tableau de bord — Directeur</h1>
        <p className="text-stone-400 text-sm mt-1">
          {anneeScolaireActive?.libelle ?? "Aucune année scolaire active"}
        </p>
      </div>

      {anneeScolaireActive ? (
        <div
          className="bg-white rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(232,212,138,0.3)", boxShadow: "0 1px 12px rgba(0,0,0,0.04)" }}
        >
          <div className="px-5 py-4 border-b border-stone-100">
            <h2 className="font-semibold text-stone-900 text-sm">Classes de l&apos;année</h2>
          </div>
          <div className="divide-y divide-stone-50">
            {anneeScolaireActive.classes.length === 0 ? (
              <p className="px-5 py-8 text-stone-300 text-sm text-center">
                Aucune classe créée pour cette année scolaire.
              </p>
            ) : (
              anneeScolaireActive.classes.map((c) => (
                <div key={c.id} className="px-5 py-3 flex items-center justify-between">
                  <div>
                    <span className="font-medium text-stone-900">{c.libelle}</span>
                    <span className="text-stone-400 text-sm ml-2">— {c.niveau.libelle}</span>
                  </div>
                  <span className="text-sm text-stone-400">
                    {c._count.eleves} élève{c._count.eleves > 1 ? "s" : ""}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      ) : (
        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 text-amber-700 text-sm">
          Veuillez demander à l&apos;administrateur d&apos;activer une année scolaire.
        </div>
      )}
    </div>
  );
}
