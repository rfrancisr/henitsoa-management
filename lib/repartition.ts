'server-only';
import fs from 'fs';
import path from 'path';

const DIR = path.join(process.cwd(), 'repartition', 'output');

// ─── Types ────────────────────────────────────────────────────────────────────

export type Exercice = {
  numero: number;
  type: 'observation' | 'application' | 'probleme' | 'creation' | 'redaction' | 'oral' | 'calcul' | 'memorisation';
  enonce: string;
  correction: string;
  difficulte: 'facile' | 'moyen' | 'difficile';
};

export type EtapeDeveloppement = {
  etape: number;
  titre: string;
  duree: string;
  enseignant: string;
  tableau?: string;
  eleves: string;
};

export type Introduction = {
  mise_en_situation: string;
  objectifs: string[];
  materiel: string[];
};

export type Evaluation = {
  question: string;
  reponse_attendue: string;
  criteres_reussite: string[];
};

export type Seance = {
  heure_debut: string;
  heure_fin: string;
  matiere: string;
  titre: string;
  introduction: Introduction;
  developpement: EtapeDeveloppement[];
  exercices: Exercice[];
  evaluation: Evaluation;
};

export type Jour = {
  date: string;
  jour: string;
  seances: Seance[];
};

export type SemaineData = {
  classe: string;
  periode: number;
  libelle: string;
  numero_semaine: number;
  date_debut_semaine: string;
  theme_semaine: string;
  sous_theme_semaine?: string;
  heures_par_matiere: Record<string, string>;
  jours: Jour[];
};

export type PeriodeInfo = {
  num: number;
  libelle: string;
  nbSemaines: number;
  debut: string;
  fin: string;
};

// ─── Constantes ───────────────────────────────────────────────────────────────

export const PERIODES: PeriodeInfo[] = [
  { num: 1, libelle: '1ère Période', nbSemaines: 7, debut: '09/09/2024', fin: '25/10/2024' },
  { num: 2, libelle: '2ème Période', nbSemaines: 7, debut: '04/11/2024', fin: '20/12/2024' },
  { num: 3, libelle: '3ème Période', nbSemaines: 7, debut: '06/01/2025', fin: '21/02/2025' },
  { num: 4, libelle: '4ème Période', nbSemaines: 6, debut: '03/03/2025', fin: '11/04/2025' },
  { num: 5, libelle: '5ème Période', nbSemaines: 9, debut: '20/04/2025', fin: '20/06/2025' },
];

export const CLASSES_AVEC_REPARTITION: Record<string, string> = {
  '11eme': '11ème (CP)',
  '7eme':  '7ème (CM2)',
};

// ─── Lecture des fichiers ──────────────────────────────────────────────────────

function getClasseDir(classe: string): string {
  return path.join(DIR, classe);
}

export function getSemaine(
  periode: number,
  semaine: number,
  classe = '11eme',
): SemaineData | null {
  const fpath = path.join(
    getClasseDir(classe),
    `periode-${periode}-semaine-${semaine}.json`,
  );
  if (!fs.existsSync(fpath)) return null;
  try {
    return JSON.parse(fs.readFileSync(fpath, 'utf8')) as SemaineData;
  } catch {
    return null;
  }
}

export function classeSlugFromLibelle(libelle: string): string | null {
  const normalized = libelle.toLowerCase().replace(/[éèê]/g, 'e').replace(/\s+/g, '');
  for (const slug of Object.keys(CLASSES_AVEC_REPARTITION)) {
    const num = slug.replace('eme', '');
    if (normalized.includes(num + 'e') || normalized.includes(num + 'eme')) return slug;
  }
  return null;
}
