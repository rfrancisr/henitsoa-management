// Client-safe types and constants — no server-only imports

export type MatiereRepartition = {
  id: string;
  matiere: string;
  topic: string;
  approche: string;
  transmission: string[];
  exercices: string[];
};

export type SemaineRepartition = {
  id: string;
  classe: string;
  mois: string;
  semaine: number;
  dateDebut: string;
  theme: string;
  sousTheme: string;
  matieres: MatiereRepartition[];
};

export type PeriodeInfo = {
  num: number;
  libelle: string;
  debut: string;
  nbSemaines: number;
};

export type MoisRepartitionInfo = {
  libelle: string;       // "Septembre", "Octobre", …
  nbSemaines: number;    // school weeks in this month
};

// Academic périodes — kept for grades, evaluations, bulletins
export const PERIODES: PeriodeInfo[] = [
  { num: 1, libelle: '1ère Période', debut: '01/09/2025', nbSemaines: 7 },
  { num: 2, libelle: '2ème Période', debut: '27/10/2025', nbSemaines: 7 },
  { num: 3, libelle: '3ème Période', debut: '05/01/2026', nbSemaines: 7 },
  { num: 4, libelle: '4ème Période', debut: '23/02/2026', nbSemaines: 6 },
  { num: 5, libelle: '5ème Période', debut: '20/04/2026', nbSemaines: 9 },
];

// Répartition months — primary navigation unit for programme
// Total: 4+4+4+2+4+4+5+2+4+3 = 36 school weeks
export const MOIS_REPARTITION: MoisRepartitionInfo[] = [
  { libelle: 'Septembre', nbSemaines: 4 },
  { libelle: 'Octobre',   nbSemaines: 4 },
  { libelle: 'Novembre',  nbSemaines: 4 },
  { libelle: 'Décembre',  nbSemaines: 2 },
  { libelle: 'Janvier',   nbSemaines: 4 },
  { libelle: 'Février',   nbSemaines: 4 },
  { libelle: 'Mars',      nbSemaines: 5 },
  { libelle: 'Avril',     nbSemaines: 2 },
  { libelle: 'Mai',       nbSemaines: 4 },
  { libelle: 'Juin',      nbSemaines: 3 },
];

export const MOIS_LABELS = MOIS_REPARTITION.map(m => m.libelle);

export function getMoisInfo(mois: string): MoisRepartitionInfo | undefined {
  return MOIS_REPARTITION.find(m => m.libelle === mois);
}

export const CLASSES_AVEC_REPARTITION = ['10eme', '9eme', '8eme', '7eme'] as const;
export type ClasseSlug = typeof CLASSES_AVEC_REPARTITION[number];

export const CLASSES_LABELS: Record<ClasseSlug, string> = {
  '10eme': '10ème (CE1)',
  '9eme':  '9ème (CE2)',
  '8eme':  '8ème (CM1)',
  '7eme':  '7ème (CM2)',
};

export const MAT_COLORS: Record<string, { border: string; badge: string; text: string; bg: string }> = {
  ARITHMÉTIQUE: { border: 'border-l-blue-500',    badge: 'bg-blue-50 text-blue-700 border border-blue-200',       text: 'text-blue-700',    bg: 'bg-blue-50' },
  MESURE:       { border: 'border-l-cyan-500',     badge: 'bg-cyan-50 text-cyan-700 border border-cyan-200',       text: 'text-cyan-700',    bg: 'bg-cyan-50' },
  GÉOMÉTRIE:    { border: 'border-l-indigo-500',   badge: 'bg-indigo-50 text-indigo-700 border border-indigo-200', text: 'text-indigo-700',  bg: 'bg-indigo-50' },
  PROBLÈME:     { border: 'border-l-violet-500',   badge: 'bg-violet-50 text-violet-700 border border-violet-200', text: 'text-violet-700',  bg: 'bg-violet-50' },
  SCIENCES:     { border: 'border-l-sky-500',      badge: 'bg-sky-50 text-sky-700 border border-sky-200',          text: 'text-sky-700',     bg: 'bg-sky-50' },
  SVT:          { border: 'border-l-sky-500',      badge: 'bg-sky-50 text-sky-700 border border-sky-200',          text: 'text-sky-700',     bg: 'bg-sky-50' },
  GÉOGRAPHIE:   { border: 'border-l-lime-600',     badge: 'bg-lime-50 text-lime-700 border border-lime-200',       text: 'text-lime-700',    bg: 'bg-lime-50' },
  TANTARA:      { border: 'border-l-amber-500',    badge: 'bg-amber-50 text-amber-700 border border-amber-200',    text: 'text-amber-700',   bg: 'bg-amber-50' },
  MALAGASY:     { border: 'border-l-red-400',      badge: 'bg-red-50 text-red-700 border border-red-200',          text: 'text-red-700',     bg: 'bg-red-50' },
  FRANÇAIS:     { border: 'border-l-orange-400',   badge: 'bg-orange-50 text-orange-700 border border-orange-200', text: 'text-orange-700',  bg: 'bg-orange-50' },
  ANGLAIS:      { border: 'border-l-yellow-500',   badge: 'bg-yellow-50 text-yellow-700 border border-yellow-200', text: 'text-yellow-700',  bg: 'bg-yellow-50' },
  FFMOM:        { border: 'border-l-violet-400',   badge: 'bg-violet-50 text-violet-700 border border-violet-200', text: 'text-violet-700',  bg: 'bg-violet-50' },
  EPS:          { border: 'border-l-teal-500',     badge: 'bg-teal-50 text-teal-700 border border-teal-200',       text: 'text-teal-700',    bg: 'bg-teal-50' },
  // Legacy
  KAJY:         { border: 'border-l-green-500',    badge: 'bg-green-50 text-green-700 border border-green-200',    text: 'text-green-700',   bg: 'bg-green-50' },
  CALCUL:       { border: 'border-l-green-500',    badge: 'bg-green-50 text-green-700 border border-green-200',    text: 'text-green-700',   bg: 'bg-green-50' },
  HETSIKA:      { border: 'border-l-orange-400',   badge: 'bg-orange-50 text-orange-700 border border-orange-200', text: 'text-orange-700',  bg: 'bg-orange-50' },
  TSIANJERY:    { border: 'border-l-fuchsia-400',  badge: 'bg-fuchsia-50 text-fuchsia-700 border border-fuchsia-200', text: 'text-fuchsia-700', bg: 'bg-fuchsia-50' },
  ARTS:         { border: 'border-l-indigo-400',   badge: 'bg-indigo-50 text-indigo-700 border border-indigo-200', text: 'text-indigo-700',  bg: 'bg-indigo-50' },
  SARY:         { border: 'border-l-teal-400',     badge: 'bg-teal-50 text-teal-700 border border-teal-200',       text: 'text-teal-700',    bg: 'bg-teal-50' },
  CU:           { border: 'border-l-sky-500',      badge: 'bg-sky-50 text-sky-700 border border-sky-200',          text: 'text-sky-700',     bg: 'bg-sky-50' },
};

export const DEFAULT_COLOR = {
  border: 'border-l-stone-300',
  badge: 'bg-stone-100 text-stone-600 border border-stone-200',
  text: 'text-stone-600',
  bg: 'bg-stone-50',
};

export function getMatColor(matiere: string) {
  return MAT_COLORS[matiere] ?? DEFAULT_COLOR;
}
