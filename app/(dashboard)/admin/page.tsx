import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function AdminDashboard() {
  const session = await getSession();
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
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight" style={{ color: "#1D1D1F" }}>Tableau de bord</h1>
        <p className="text-sm mt-1" style={{ color: "#86868b" }}>
          {anneeScolaireActive
            ? `Année scolaire : ${anneeScolaireActive.libelle}`
            : "Aucune année scolaire active"}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <StatCard label="Élèves inscrits" value={totalEleves} />
        <StatCard label="Utilisateurs actifs" value={totalUtilisateurs} />
        <StatCard label="Classes" value={totalClasses} />
      </div>

      <div className="bg-white rounded-2xl p-5" style={{ boxShadow: "0 1px 12px rgba(0,0,0,0.04)", border: "1px solid rgba(29,29,31,0.08)" }}>
        <h2 className="font-semibold mb-4 text-sm uppercase tracking-wider" style={{ color: "#1D1D1F" }}>Accès rapides</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <QuickLink href="/admin/utilisateurs" label="Utilisateurs" />
          <QuickLink href="/admin/eleves" label="Élèves" />
          <QuickLink href="/admin/classes" label="Classes" />
          <QuickLink href="/admin/periodes" label="Périodes" />
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div
      className="bg-white rounded-2xl p-5"
      style={{ boxShadow: "0 1px 12px rgba(0,0,0,0.04)", border: "1px solid rgba(201,168,76,0.30)" }}
    >
      <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#86868b" }}>{label}</p>
      <p className="text-4xl font-bold tracking-tight" style={{ color: "#1D1D1F" }}>{value}</p>
      <div className="mt-3 h-0.5 w-8 rounded-full" style={{ background: "#C9A84C" }} />
    </div>
  );
}

function QuickLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="btn-glass block p-4 rounded-xl text-sm font-medium text-center transition-all"
    >
      {label}
    </a>
  );
}
