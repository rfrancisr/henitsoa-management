import { getSession } from '@/lib/session';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import {
  PERIODES,
  getSemaine,
  CLASSES_AVEC_REPARTITION,
  CLASSES_LABELS,
  classeSlugFromLibelle,
  type ClasseSlug,
} from '@/lib/repartition';
import RepartitionViewer from '@/components/RepartitionViewer';

export const dynamic = 'force-dynamic';

export default async function EnseignantRepartitionPage({
  searchParams,
}: {
  searchParams: Promise<{ periode?: string; semaine?: string; classe?: string }>;
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

  // Trouver les classes avec une répartition disponible
  const classesDisponibles: { slug: ClasseSlug; label: string; classeNom: string }[] = [];
  for (const e of ensActifs) {
    const slug = classeSlugFromLibelle(e.classe.niveau.libelle);
    if (slug && !classesDisponibles.find(c => c.slug === slug)) {
      classesDisponibles.push({ slug, label: CLASSES_LABELS[slug], classeNom: e.classe.libelle });
    }
  }

  if (classesDisponibles.length === 0) {
    return (
      <div>
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-stone-900 tracking-tight">Répartition annuelle</h1>
          <p className="text-stone-400 text-sm mt-1">Programme hebdomadaire par matière</p>
        </div>
        <div className="bg-white rounded-2xl px-6 py-16 text-center border border-stone-100">
          <div className="text-4xl mb-4">📋</div>
          <p className="text-stone-600 font-medium">Aucune répartition disponible pour vos classes</p>
          <p className="text-stone-400 text-sm mt-2">
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

  const periodeNum = Math.max(1, Math.min(5, parseInt(params.periode ?? '1') || 1));
  const periodeInfo = PERIODES.find(p => p.num === periodeNum)!;
  const semaineNum  = Math.max(1, Math.min(periodeInfo.nbSemaines, parseInt(params.semaine ?? '1') || 1));

  const semaine = await getSemaine(activeClasse, periodeNum, semaineNum);
  const activeClasseInfo = classesDisponibles.find(c => c.slug === activeClasse)!;

  return (
    <div>
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-stone-900 tracking-tight">
          Répartition — {activeClasseInfo.classeNom}
        </h1>
        <p className="text-stone-400 text-sm mt-1">Programme hebdomadaire · Année 2025-2026</p>
      </div>

      {classesDisponibles.length > 1 && (
        <div className="flex gap-2 mb-4 flex-wrap">
          {classesDisponibles.map(({ slug, label }) => (
            <a
              key={slug}
              href={`/enseignant/repartition?classe=${slug}&periode=1&semaine=1`}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                activeClasse === slug
                  ? 'bg-stone-900 text-white border-stone-900'
                  : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400'
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      )}

      <RepartitionViewer
        semaine={semaine}
        periodes={PERIODES}
        periodeActive={periodeNum}
        semaineActive={semaineNum}
        classeSlug={activeClasse}
        classeLabel={activeClasseInfo.label}
        canEdit={true}
        basePath="/enseignant/repartition"
      />
    </div>
  );
}
