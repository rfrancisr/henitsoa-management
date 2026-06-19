import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function DirecteurDashboard() {
  const session = await auth();
  if (session?.user.role !== "DIRECTEUR" && session?.user.role !== "ADMIN") redirect("/");

  const anneeScolaireActive = await prisma.anneeScolaire.findFirst({
    where: { active: true },
    include: { classes: { include: { niveau: true, _count: { select: { eleves: true } } } } },
  });

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Tableau de bord — Directeur</h1>
        <p className="text-slate-500 text-sm mt-1">
          {anneeScolaireActive?.libelle ?? "Aucune année scolaire active"}
        </p>
      </div>

      {anneeScolaireActive ? (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-200">
            <h2 className="font-semibold text-slate-900">Classes de l&apos;année</h2>
          </div>
          <div className="divide-y divide-slate-100">
            {anneeScolaireActive.classes.length === 0 ? (
              <p className="px-5 py-8 text-slate-400 text-sm text-center">
                Aucune classe créée pour cette année scolaire.
              </p>
            ) : (
              anneeScolaireActive.classes.map((c) => (
                <div key={c.id} className="px-5 py-3 flex items-center justify-between">
                  <div>
                    <span className="font-medium text-slate-900">{c.libelle}</span>
                    <span className="text-slate-400 text-sm ml-2">— {c.niveau.libelle}</span>
                  </div>
                  <span className="text-sm text-slate-500">
                    {c._count.eleves} élève{c._count.eleves > 1 ? "s" : ""}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      ) : (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-amber-700 text-sm">
          Veuillez demander à l&apos;administrateur d&apos;activer une année scolaire.
        </div>
      )}
    </div>
  );
}
