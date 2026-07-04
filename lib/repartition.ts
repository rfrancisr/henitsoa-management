'server-only';
import { prisma } from '@/lib/prisma';
import type { ClasseSlug } from '@/lib/repartition-types';
import { MOIS_REPARTITION } from '@/lib/repartition-types';

export type {
  MatiereRepartition,
  SemaineRepartition,
  PeriodeInfo,
  MoisRepartitionInfo,
  ClasseSlug,
} from '@/lib/repartition-types';

export {
  CLASSES_AVEC_REPARTITION,
  CLASSES_LABELS,
  PERIODES,
  MOIS_REPARTITION,
  MOIS_LABELS,
  getMoisInfo,
  getMoisRepartitionForClasse,
  MAT_COLORS,
  DEFAULT_COLOR,
  getMatColor,
} from '@/lib/repartition-types';

import type { MatiereRepartition, SemaineRepartition } from '@/lib/repartition-types';

// ─── Fonctions DB ─────────────────────────────────────────────────────────────

function deserialize(row: {
  id: string;
  matiere: string;
  topic: string;
  approche: string;
  transmission: string;
  exercices: string;
}): MatiereRepartition {
  return {
    id: row.id,
    matiere: row.matiere,
    topic: row.topic,
    approche: row.approche,
    transmission: JSON.parse(row.transmission) as string[],
    exercices: JSON.parse(row.exercices) as string[],
  };
}

export async function getSemaine(
  classe: string,
  mois: string,
  semaine: number,
): Promise<SemaineRepartition | null> {
  const row = await prisma.repartitionSemaine.findUnique({
    where: { classe_mois_semaine: { classe, mois, semaine } },
    include: { matieres: { orderBy: { matiere: 'asc' } } },
  });
  if (!row) return null;
  return {
    id: row.id,
    classe: row.classe,
    mois: row.mois,
    semaine: row.semaine,
    dateDebut: row.dateDebut,
    theme: row.theme,
    sousTheme: row.sousTheme,
    matieres: row.matieres.map(deserialize),
  };
}

export async function getMoisComplet(
  classe: string,
  mois: string,
): Promise<SemaineRepartition[]> {
  const moisInfo = MOIS_REPARTITION.find(m => m.libelle === mois);
  if (!moisInfo) return [];

  const rows = await prisma.repartitionSemaine.findMany({
    where: { classe, mois },
    include: { matieres: { orderBy: { matiere: 'asc' } } },
    orderBy: { semaine: 'asc' },
  });

  return Array.from({ length: moisInfo.nbSemaines }, (_, i) => {
    const s = i + 1;
    const row = rows.find(r => r.semaine === s);
    if (row) {
      return {
        id: row.id,
        classe: row.classe,
        mois: row.mois,
        semaine: row.semaine,
        dateDebut: row.dateDebut,
        theme: row.theme,
        sousTheme: row.sousTheme,
        matieres: row.matieres.map(deserialize),
      };
    }
    return {
      id: `empty-${classe}-${mois}-${s}`,
      classe,
      mois,
      semaine: s,
      dateDebut: '',
      theme: '—',
      sousTheme: '',
      matieres: [],
    };
  });
}

export function classeSlugFromLibelle(libelle: string): ClasseSlug | null {
  const lower = libelle.toLowerCase();
  if (lower.includes('garderie')) return 'garderie';
  if (lower.includes('jardin')) return 'jardindenfant';
  if (lower.includes('maternelle')) return 'maternelle';
  const l = lower.replace(/[^0-9]/g, '');
  if (l === '10') return '10eme';
  if (l === '9')  return '9eme';
  if (l === '8')  return '8eme';
  if (l === '7')  return '7eme';
  if (l === '11') return '11eme';
  if (l === '12') return '12eme';
  return null;
}
