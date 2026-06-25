import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { PERIODES, getSemaine, CLASSES_AVEC_REPARTITION } from "@/lib/repartition";
import RepartitionViewer from "@/components/RepartitionViewer";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminRepartitionPage({
  searchParams,
}: {
  searchParams: Promise<{ periode?: string; semaine?: string; classe?: string }>;
}) {
  const session = await getSession();
  if (session?.user.role !== "ADMIN") redirect("/");

  const params = await searchParams;
  const classe = params.classe && params.classe in CLASSES_AVEC_REPARTITION
    ? params.classe
    : '11eme';
  const periodeNum = Math.max(1, Math.min(5, parseInt(params.periode ?? "1") || 1));
  const semaineNum = Math.max(1, parseInt(params.semaine ?? "1") || 1);

  const data = getSemaine(periodeNum, semaineNum, classe);
  const classeLabel = CLASSES_AVEC_REPARTITION[classe];

  return (
    <div>
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-stone-900 tracking-tight">
          Répartition annuelle
        </h1>
        <p className="text-stone-400 text-sm mt-1">
          {classeLabel} — Année scolaire 2024-2025
        </p>
      </div>

      {/* Sélecteur de classe */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {Object.entries(CLASSES_AVEC_REPARTITION).map(([slug, label]) => (
          <Link
            key={slug}
            href={`/admin/repartition?classe=${slug}&periode=1&semaine=1`}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
              classe === slug
                ? 'bg-stone-900 text-white border-stone-900'
                : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400'
            }`}
          >
            {label}
          </Link>
        ))}
      </div>

      <RepartitionViewer
        periodes={PERIODES}
        selectedPeriode={periodeNum}
        selectedSemaine={semaineNum}
        semaineData={data}
        basePath={`/admin/repartition?classe=${classe}`}
        classe={classe}
      />
    </div>
  );
}
