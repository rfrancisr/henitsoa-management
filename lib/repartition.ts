'server-only';
import { prisma } from '@/lib/prisma';
import type { ClasseSlug } from '@/lib/repartition-types';

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

export function classeSlugFromLibelle(libelle: string): ClasseSlug | null {
  const lower = libelle.toLowerCase();
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
