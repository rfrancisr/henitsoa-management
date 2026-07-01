import { getSession } from '@/lib/session';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import {
  getSemaine,
  CLASSES_AVEC_REPARTITION,
  CLASSES_LABELS,
  MOIS_REPARTITION,
  classeSlugFromLibelle,
  type ClasseSlug,
} from '@/lib/repartition';
import RepartitionViewer from '@/components/RepartitionViewer';
import BackLink from '@/components/ui/BackLink';

export const dynamic = 'force-dynamic';

const DEFAULT_MOIS = 'Septembre';

export default async function EnseignantRepartitionPage({
  searchParams,
}: {
  searchParams: Promise<{ mois?: string; semaine?: string; classe?: string }>;
}) {
  const session = await getSession();
  if (session?.user.role !== 'ENSEIGNANT') redirect('/');

  const anneeScolaireActive = await prisma.anneeScolaire.findFirst({ where: { active: true } });

  const enseignements = await prisma.enseignement.findMany({
    where: { userId: session.user.id },
    include: { classe: { include: { niveau: true, anneeScolaire: true } } },
  });

  const ensActifs = enseignements.filter(
    e => e.classe.anneeScolaireId === anneeScolaireActive?.id,
  );

  const classesDisponibles: { slug: ClasseSlug; label: string; classeNom: string }[] = [];
  for (const e of ensActifs) {
    const slug = classeSlugFromLibelle(e.classe.niveau.libelle);
    if (slug && !classesDisponibles.find(c => c.slug === slug)) {
      classesDisponibles.push({ slug, label: CLASSES_LABELS[slug as ClasseSlug], classeNom: e.classe.libelle });
    }
  }

  if (classesDisponibles.length === 0) {
    return (
      <div>
        <BackLink href="/enseignant" label="Retour à l'accueil" />
        <div className="mb-8">
          <p className="page-eyebrow mb-1">Espace enseignant</p>
          <h1 style={{ fontSize: "32px" }}>Répartition annuelle</h1>
          <p className="text-sm mt-1" style={{ color: "var(--inkLt)" }}>Programme hebdomadaire par matière</p>
        </div>
        <div className="paper-card px-6 py-16 text-center">
          <div className="text-4xl mb-4">📋</div>
          <p className="font-medium" style={{ color: "var(--inkMd)" }}>Aucune répartition disponible pour vos classes</p>
          <p className="text-sm mt-2" style={{ color: "var(--inkLt)" }}>
            La répartition est disponible pour les classes{' '}
            {CLASSES_AVEC_REPARTITION.map(s => CLASSES_LABELS[s]).join(' et ')}.
            {ensActifs.length > 0 && (
              <> Vos classes : {ensActifs.map(e => e.classe.niveau.libelle).join(', ')}.</>
            )}
          </p>
        </div>
      </div>
    );
  }

  const params = await searchParams;
  const activeClasse = (classesDisponibles.find(c => c.slug === params.classe)?.slug)
    ?? classesDisponibles[0].slug;

  const moisActif = MOIS_REPARTITION.find(m => m.libelle === params.mois)?.libelle ?? DEFAULT_MOIS;
  const moisInfo  = MOIS_REPARTITION.find(m => m.libelle === moisActif)!;
  const semaineNum = Math.max(1, Math.min(moisInfo.nbSemaines, parseInt(params.semaine ?? '1') || 1));

  const semaine = await getSemaine(activeClasse, moisActif, semaineNum);
  const activeClasseInfo = classesDisponibles.find(c => c.slug === activeClasse)!;

  return (
    <div>
      <BackLink href="/enseignant" label="Retour à l'accueil" />
      <div className="mb-8">
        <p className="page-eyebrow mb-1">Espace enseignant</p>
        <h1 style={{ fontSize: "32px" }}>
          Répartition — {activeClasseInfo.classeNom}
        </h1>
        <p className="text-sm mt-1" style={{ color: "var(--inkLt)" }}>Programme hebdomadaire · Année 2025-2026</p>
      </div>

      {classesDisponibles.length > 1 && (
        <div className="flex gap-2 mb-4 flex-wrap">
          {classesDisponibles.map(({ slug, label }) => (
            <a
              key={slug}
              href={`/enseignant/repartition?classe=${slug}&mois=Septembre&semaine=1`}
              style={
                activeClasse === slug
                  ? { background: "var(--forest)", color: "var(--stoneLt)", borderColor: "var(--forest)" }
                  : { background: "var(--white)", color: "var(--inkMd)", borderColor: "var(--border)" }
              }
              className="px-3 py-1.5 rounded text-sm font-medium border"
            >
              {label}
            </a>
          ))}
        </div>
      )}

      <RepartitionViewer
        semaine={semaine}
        mois={MOIS_REPARTITION}
        moisActif={moisActif}
        semaineActive={semaineNum}
        classeSlug={activeClasse}
        classeLabel={activeClasseInfo.label}
        canEdit={true}
        basePath="/enseignant/repartition"
      />
    </div>
  );
}
