import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function AdminDashboard() {
  const session = await auth();
  if (session?.user.role !== "ADMIN") redirect("/");

  const [totalEleves, totalUtilisateurs, totalClasses] = await Promise.all([
    prisma.eleve.count({ where: { actif: true } }),
    prisma.user.count({ where: { actif: true } }),
    prisma.classe.count(),
  ]);

  const anneeScolaireActive = await prisma.anneeScolaire.findFirst({
    where: { active: true },
  });

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Tableau de bord</h1>
        <p className="text-slate-500 text-sm mt-1">
          {anneeScolaireActive
            ? `Année scolaire : ${anneeScolaireActive.libelle}`
            : "Aucune année scolaire active"}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <StatCard label="Élèves inscrits" value={totalEleves} color="blue" />
        <StatCard label="Utilisateurs actifs" value={totalUtilisateurs} color="purple" />
        <StatCard label="Classes" value={totalClasses} color="green" />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <h2 className="font-semibold text-slate-900 mb-4">Accès rapides</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <QuickLink href="/admin/utilisateurs" label="Gérer les utilisateurs" />
          <QuickLink href="/admin/eleves" label="Gérer les élèves" />
          <QuickLink href="/admin/classes" label="Gérer les classes" />
          <QuickLink href="/admin/periodes" label="Gérer les périodes" />
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: "blue" | "purple" | "green";
}) {
  const colors = {
    blue: "bg-blue-50 text-blue-700",
    purple: "bg-purple-50 text-purple-700",
    green: "bg-green-50 text-green-700",
  };
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5">
      <p className="text-sm text-slate-500 mb-1">{label}</p>
      <p className={`text-3xl font-bold ${colors[color]}`}>{value}</p>
    </div>
  );
}

function QuickLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="block p-4 rounded-lg bg-slate-50 hover:bg-blue-50 hover:text-blue-700 text-slate-700 text-sm font-medium transition-colors text-center border border-slate-200"
    >
      {label}
    </a>
  );
}
