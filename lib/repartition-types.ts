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
// Année scolaire 2026-2027 (Arrêté 19538/2026).
export const PERIODES: PeriodeInfo[] = [
  { num: 1, libelle: '1ère Période', debut: '07/09/2026', nbSemaines: 8 },
  { num: 2, libelle: '2ème Période', debut: '09/11/2026', nbSemaines: 7 },
  { num: 3, libelle: '3ème Période', debut: '04/01/2027', nbSemaines: 8 },
  { num: 4, libelle: '4ème Période', debut: '01/03/2027', nbSemaines: 8 },
  { num: 5, libelle: '5ème Période', debut: '10/05/2027', nbSemaines: 8 },
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

// Classes migrated to a uniform 4-semaines/mois programme (Septembre→Juin).
// Other classes keep the legacy irregular week counts above until they're migrated too.
const CLASSES_MOIS_UNIFORME = new Set(['7eme', '8eme', '9eme', '10eme', '11eme', '12eme', 'garderie', 'maternelle', 'jardindenfant']);

export const MOIS_REPARTITION_UNIFORME: MoisRepartitionInfo[] =
  MOIS_REPARTITION.map(m => ({ libelle: m.libelle, nbSemaines: 4 }));

export function getMoisRepartitionForClasse(classe: string): MoisRepartitionInfo[] {
  return CLASSES_MOIS_UNIFORME.has(classe) ? MOIS_REPARTITION_UNIFORME : MOIS_REPARTITION;
}

export const CLASSES_AVEC_REPARTITION = ['garderie', 'jardindenfant', 'maternelle', '12eme', '11eme', '10eme', '9eme', '8eme', '7eme'] as const;
export type ClasseSlug = typeof CLASSES_AVEC_REPARTITION[number];

export const CLASSES_LABELS: Record<ClasseSlug, string> = {
  'garderie':      'Garderie',
  'jardindenfant': 'Jardin d\'Enfants',
  'maternelle':    'Maternelle',
  '12eme': '12ème',
  '11eme': '11ème',
  '10eme': '10ème',
  '9eme':  '9ème',
  '8eme':  '8ème',
  '7eme':  '7ème',
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
  // 11ème
  'HYGIÈNE':          { border: 'border-l-rose-400',    badge: 'bg-rose-50 text-rose-700 border border-rose-200',        text: 'text-rose-700',    bg: 'bg-rose-50' },
  'I.C':              { border: 'border-l-blue-700',    badge: 'bg-blue-100 text-blue-800 border border-blue-300',       text: 'text-blue-800',    bg: 'bg-blue-100' },
  'MORAL':            { border: 'border-l-amber-500',   badge: 'bg-amber-50 text-amber-700 border border-amber-200',     text: 'text-amber-700',   bg: 'bg-amber-50' },
  'CONTE':            { border: 'border-l-yellow-600',  badge: 'bg-yellow-50 text-yellow-800 border border-yellow-200',  text: 'text-yellow-800',  bg: 'bg-yellow-50' },
  'LECTURE-ÉCRITURE': { border: 'border-l-emerald-500', badge: 'bg-emerald-50 text-emerald-700 border border-emerald-200', text: 'text-emerald-700', bg: 'bg-emerald-50' },
  'NUMÉRATION':       { border: 'border-l-sky-600',     badge: 'bg-sky-100 text-sky-800 border border-sky-300',          text: 'text-sky-800',     bg: 'bg-sky-100' },
  'MATHS':            { border: 'border-l-blue-600',    badge: 'bg-blue-100 text-blue-800 border border-blue-200',       text: 'text-blue-800',    bg: 'bg-blue-100' },
  'LANGAGE':          { border: 'border-l-orange-400',  badge: 'bg-orange-50 text-orange-700 border border-orange-200',  text: 'text-orange-700',  bg: 'bg-orange-50' },
  'VAKITENY':         { border: 'border-l-red-400',     badge: 'bg-red-50 text-red-700 border border-red-200',           text: 'text-red-700',     bg: 'bg-red-50' },
  'ENVIRONNEMENT':    { border: 'border-l-lime-500',    badge: 'bg-lime-50 text-lime-700 border border-lime-200',        text: 'text-lime-700',    bg: 'bg-lime-50' },
  'DESSIN':           { border: 'border-l-pink-400',    badge: 'bg-pink-50 text-pink-700 border border-pink-200',        text: 'text-pink-700',    bg: 'bg-pink-50' },
  'CHANT':            { border: 'border-l-indigo-400',  badge: 'bg-indigo-50 text-indigo-700 border border-indigo-200',  text: 'text-indigo-700',  bg: 'bg-indigo-50' },
  'RÉCITATION':       { border: 'border-l-fuchsia-500', badge: 'bg-fuchsia-50 text-fuchsia-700 border border-fuchsia-200', text: 'text-fuchsia-700', bg: 'bg-fuchsia-50' },
  'T.M':              { border: 'border-l-stone-500',   badge: 'bg-stone-100 text-stone-700 border border-stone-300',    text: 'text-stone-700',   bg: 'bg-stone-100' },
  // Garderie
  'DESSIN DIRIGÉ': { border: 'border-l-purple-400',   badge: 'bg-purple-50 text-purple-700 border border-purple-200',   text: 'text-purple-700',   bg: 'bg-purple-50' },
  // Jardin d'Enfant & Maternelle
  'GRAPHISME':        { border: 'border-l-pink-400',    badge: 'bg-pink-50 text-pink-700 border border-pink-200',          text: 'text-pink-700',    bg: 'bg-pink-50' },
  'PRE-LECTURE':      { border: 'border-l-emerald-500', badge: 'bg-emerald-50 text-emerald-700 border border-emerald-200', text: 'text-emerald-700', bg: 'bg-emerald-50' },
  'PRE-ECRITURE':     { border: 'border-l-teal-500',    badge: 'bg-teal-50 text-teal-700 border border-teal-200',          text: 'text-teal-700',    bg: 'bg-teal-50' },
  'PRE-CALCUL':       { border: 'border-l-blue-500',    badge: 'bg-blue-50 text-blue-700 border border-blue-200',          text: 'text-blue-700',    bg: 'bg-blue-50' },
  'PRE-MATHS':        { border: 'border-l-cyan-500',    badge: 'bg-cyan-50 text-cyan-700 border border-cyan-200',          text: 'text-cyan-700',    bg: 'bg-cyan-50' },
  'PRE-MATHEMATIQUE': { border: 'border-l-cyan-600',    badge: 'bg-cyan-100 text-cyan-800 border border-cyan-300',         text: 'text-cyan-800',    bg: 'bg-cyan-100' },
  'ESPACE PHYSIQUE':  { border: 'border-l-teal-500',    badge: 'bg-teal-50 text-teal-700 border border-teal-200',          text: 'text-teal-700',    bg: 'bg-teal-50' },
  'ESPACE SENSORIEL': { border: 'border-l-yellow-500',  badge: 'bg-yellow-50 text-yellow-700 border border-yellow-200',    text: 'text-yellow-700',  bg: 'bg-yellow-50' },
  'EXERCICE SENSORIEL':{ border: 'border-l-yellow-500', badge: 'bg-yellow-50 text-yellow-700 border border-yellow-200',    text: 'text-yellow-700',  bg: 'bg-yellow-50' },
  'ART PLASTIQUE':    { border: 'border-l-rose-400',    badge: 'bg-rose-50 text-rose-700 border border-rose-200',          text: 'text-rose-700',    bg: 'bg-rose-50' },
  'TRAVAIL MANUEL':   { border: 'border-l-stone-500',   badge: 'bg-stone-100 text-stone-700 border border-stone-300',      text: 'text-stone-700',   bg: 'bg-stone-100' },
  'DESSIN COLORIAGE': { border: 'border-l-pink-500',    badge: 'bg-pink-50 text-pink-700 border border-pink-200',          text: 'text-pink-700',    bg: 'bg-pink-50' },
  'LES COULEURS':     { border: 'border-l-orange-400',  badge: 'bg-orange-50 text-orange-700 border border-orange-200',    text: 'text-orange-700',  bg: 'bg-orange-50' },
  // 12ème
  'LECTURE':          { border: 'border-l-emerald-600', badge: 'bg-emerald-100 text-emerald-800 border border-emerald-300', text: 'text-emerald-800', bg: 'bg-emerald-100' },
  'ÉCRITURE':         { border: 'border-l-teal-500',    badge: 'bg-teal-50 text-teal-700 border border-teal-200',        text: 'text-teal-700',    bg: 'bg-teal-50' },
  'PRE-MATH':         { border: 'border-l-cyan-500',    badge: 'bg-cyan-50 text-cyan-700 border border-cyan-200',        text: 'text-cyan-700',    bg: 'bg-cyan-50' },
  'MORALE':           { border: 'border-l-violet-400',  badge: 'bg-violet-50 text-violet-700 border border-violet-200',  text: 'text-violet-700',  bg: 'bg-violet-50' },
  'RECITATION':       { border: 'border-l-fuchsia-400', badge: 'bg-fuchsia-50 text-fuchsia-700 border border-fuchsia-200', text: 'text-fuchsia-700', bg: 'bg-fuchsia-50' },
  'TRAVAUX MANUELS':  { border: 'border-l-stone-400',   badge: 'bg-stone-50 text-stone-600 border border-stone-200',     text: 'text-stone-600',   bg: 'bg-stone-50' },
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

// Certaines classes détaillent Malagasy et Français en plusieurs matières
// distinctes (une par ligne réelle de l'Excel : VAKITENY, TSIPELINA, LECTURE...).
// Pour le téléchargement PDF, l'enseignant choisit "Malagasy" ou "Français" en un
// clic et récupère le contenu de toutes les sous-matières regroupé dans un seul PDF.
export const MATIERE_GROUPES: Record<string, Record<string, string[]>> = {
  '9eme': {
    'CALCUL':   ['ARITHMETIQUE', 'MESURE', 'GEOMETRIE'],
    'MALAGASY': ['VAKITENY', 'TSIPELINA', 'FITSIPIKA', 'FANAZARANA HANORATRA', 'FANIT', 'F.TE'],
    'FRANÇAIS': ['LECTURE', 'LANGUE', 'VOCABULAIRE', 'ORTHOGRAPHE', 'CONJUGAISON', 'GRAMMAIRE', 'EXPRESSION ORALE', 'EXPRESSION ECRITE'],
  },
  '10eme': {
    'CALCUL':   ['ARITHMÉTIQUE', 'MESURE', 'GEOMETRIE', 'PROBLEME'],
    'MALAGASY': ['F HITENY', 'VAKITENY', 'TSIPELINA', 'FITSIPIKA', 'SORAKALIANA'],
    'FRANÇAIS': ['LECTURE', 'ORTHOGRAPHE', 'GRAMMAIRE', 'VOCABULAIRE', 'LANGAGE', 'CONJUGAISON', 'ÉCRITURE'],
  },
  '8eme': {
    'CALCUL':   ['ARITHMÉTIQUE', 'GÉOMÉTRIE', 'MESURE'],
    'MALAGASY': ['VAKITENY', 'F/B', 'TSIPELINA', 'FITSIPIKA'],
    'FRANÇAIS': ['LANGAGE', 'LECTURE', 'VOCABULAIRE', 'GRAMMAIRE', 'ORTHOGRAPHE', 'CONJUGAISON'],
  },
  '7eme': {
    'MALAGASY': ['FITSIPIKA', 'TSIPELINA'],
  },
};

// Nom du groupe (ex: "MALAGASY") auquel appartient une sous-matière pour cette classe,
// ou null si la matière n'appartient à aucun groupe (elle reste autonome).
export function getMatiereGroupLabel(classe: string, matiere: string): string | null {
  const groups = MATIERE_GROUPES[classe];
  if (!groups) return null;
  for (const [label, membres] of Object.entries(groups)) {
    if (membres.includes(matiere)) return label;
  }
  return null;
}

// Options du menu de téléchargement : les sous-matières d'un même groupe sont
// fusionnées en une seule entrée (le nom du groupe), les autres matières restent telles quelles.
export function getDownloadOptions(classe: string, matieres: string[]): string[] {
  const options: string[] = [];
  const vus = new Set<string>();
  for (const mat of matieres) {
    const cle = getMatiereGroupLabel(classe, mat) ?? mat;
    if (!vus.has(cle)) { vus.add(cle); options.push(cle); }
  }
  return options;
}

// Traduit une sélection du menu (groupe ou matière autonome) en la liste des
// matières réelles à inclure dans le PDF.
export function resolveMatiereSelection(classe: string, selection: string): string[] {
  return MATIERE_GROUPES[classe]?.[selection] ?? [selection];
}

// Recherche client-side dans la grille des matières d'une semaine : une matière
// correspond si son nom, son sujet, ou le nom de son groupe (ex: "Malagasy" pour
// VAKITENY) contient le texte recherché.
export function matiereMatchesSearch(
  mat: { matiere: string; topic: string },
  classe: string,
  query: string
): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  if (mat.matiere.toLowerCase().includes(q)) return true;
  if (mat.topic.toLowerCase().includes(q)) return true;
  const groupLabel = getMatiereGroupLabel(classe, mat.matiere);
  return groupLabel ? groupLabel.toLowerCase().includes(q) : false;
}
