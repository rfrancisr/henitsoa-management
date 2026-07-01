import { getSession } from '@/lib/session';
import { redirect } from 'next/navigation';
import { getSemaine, CLASSES_AVEC_REPARTITION, CLASSES_LABELS, MOIS_REPARTITION } from '@/lib/repartition';
import RepartitionViewer from '@/components/RepartitionViewer';
import BackLink from '@/components/ui/BackLink';

export const dynamic = 'force-dynamic';

const DEFAULT_MOIS = 'Septembre';

export default async function AdminRepartitionPage({
  searchParams,
}: {
  searchParams: Promise<{ mois?: string; semaine?: string; classe?: string }>;
}) {
  const session = await getSession();
  if (session?.user.role !== 'ADMIN') redirect('/');

  const params = await searchParams;

  const classe = (CLASSES_AVEC_REPARTITION as readonly string[]).includes(params.classe ?? '')
    ? params.classe!
    : '10eme';

  const moisActif = MOIS_REPARTITION.find(m => m.libelle === params.mois)?.libelle ?? DEFAULT_MOIS;
  const moisInfo  = MOIS_REPARTITION.find(m => m.libelle === moisActif)!;
  const semaineNum = Math.max(1, Math.min(moisInfo.nbSemaines, parseInt(params.semaine ?? '1') || 1));

  const semaine = await getSemaine(classe, moisActif, semaineNum);
  const classeLabel = CLASSES_LABELS[classe as keyof typeof CLASSES_LABELS] ?? classe;

  return (
    <div>
      <BackLink />
      <div className="mb-8 mt-5">
        <p className="page-eyebrow mb-1">Administration — Rentrée</p>
        <h1 style={{ fontSize: "28px" }}>Répartition annuelle</h1>
        <p className="mt-2" style={{ color: "var(--inkLt)", fontSize: "14px" }}>
          Programme hebdomadaire par classe
        </p>
      </div>

      <div className="flex gap-2 mb-4 flex-wrap">
        {CLASSES_AVEC_REPARTITION.map(slug => (
          <a
            key={slug}
            href={`/admin/repartition?classe=${slug}&mois=Septembre&semaine=1`}
            style={
              classe === slug
                ? { background: "var(--forest)", color: "var(--stoneLt)", borderColor: "var(--forest)" }
                : { background: "var(--white)", color: "var(--inkMd)", borderColor: "var(--border)" }
            }
            className="px-3 py-1.5 rounded text-sm font-medium border"
          >
            {CLASSES_LABELS[slug]}
          </a>
        ))}
      </div>

      <RepartitionViewer
        semaine={semaine}
        mois={MOIS_REPARTITION}
        moisActif={moisActif}
        semaineActive={semaineNum}
        classeSlug={classe}
        classeLabel={classeLabel}
        canEdit={true}
        basePath="/admin/repartition"
      />
    </div>
  );
}
