'server-only';
import { prisma } from '@/lib/prisma';

export type {
  MatiereRepartition,
  SemaineRepartition,
  PeriodeInfo,
  ClasseSlug,
} from '@/lib/repartition-types';

export {
  CLASSES_AVEC_REPARTITION,
  CLASSES_LABELS,
  PERIODES,
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
  periode: number,
  semaine: number,
): Promise<SemaineRepartition | null> {
  const row = await prisma.repartitionSemaine.findUnique({
    where: { classe_periode_semaine: { classe, periode, semaine } },
    include: { matieres: { orderBy: { matiere: 'asc' } } },
  });
  if (!row) return null;
  return {
    id: row.id,
    classe: row.classe,
    periode: row.periode,
    semaine: row.semaine,
    dateDebut: row.dateDebut,
    theme: row.theme,
    sousTheme: row.sousTheme,
    matieres: row.matieres.map(deserialize),
  };
}

export function classeSlugFromLibelle(libelle: string): ClasseSlug | null {
  const l = libelle.toLowerCase().replace(/[^0-9]/g, '');
  if (l === '10') return '10eme';
  if (l === '9') return '9eme';
  return null;
}
