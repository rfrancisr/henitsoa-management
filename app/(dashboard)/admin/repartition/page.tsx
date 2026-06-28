import { getSession } from '@/lib/session';
import { redirect } from 'next/navigation';
import { PERIODES, getSemaine, CLASSES_AVEC_REPARTITION, CLASSES_LABELS } from '@/lib/repartition';
import RepartitionViewer from '@/components/RepartitionViewer';

export const dynamic = 'force-dynamic';

export default async function AdminRepartitionPage({
  searchParams,
}: {
  searchParams: Promise<{ periode?: string; semaine?: string; classe?: string }>;
}) {
  const session = await getSession();
  if (session?.user.role !== 'ADMIN') redirect('/');

  const params = await searchParams;

  const classe = (CLASSES_AVEC_REPARTITION as readonly string[]).includes(params.classe ?? '')
    ? params.classe!
    : '10eme';
  const periodeNum = Math.max(1, Math.min(5, parseInt(params.periode ?? '1') || 1));
  const periodeInfo = PERIODES.find(p => p.num === periodeNum)!;
  const semaineNum  = Math.max(1, Math.min(periodeInfo.nbSemaines, parseInt(params.semaine ?? '1') || 1));

  const semaine = await getSemaine(classe, periodeNum, semaineNum);
  const classeLabel = CLASSES_LABELS[classe as keyof typeof CLASSES_LABELS] ?? classe;

  return (
    <div>
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-stone-900 tracking-tight">Répartition annuelle</h1>
        <p className="text-stone-400 text-sm mt-1">Année scolaire 2025-2026</p>
      </div>

      {/* Sélecteur de classe */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {CLASSES_AVEC_REPARTITION.map(slug => (
          <a
            key={slug}
            href={`/admin/repartition?classe=${slug}&periode=1&semaine=1`}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
              classe === slug
                ? 'bg-stone-900 text-white border-stone-900'
                : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400'
            }`}
          >
            {CLASSES_LABELS[slug]}
          </a>
        ))}
      </div>

      <RepartitionViewer
        semaine={semaine}
        periodes={PERIODES}
        periodeActive={periodeNum}
        semaineActive={semaineNum}
        classeSlug={classe}
        classeLabel={classeLabel}
        canEdit={true}
        basePath="/admin/repartition"
      />
    </div>
  );
}
