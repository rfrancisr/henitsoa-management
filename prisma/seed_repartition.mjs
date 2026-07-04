/**
 * seed_repartition.mjs
 *
 * Génère et insère en base le contenu pédagogique pour toutes les semaines
 * des classes 11ème, 7ème, 10ème et 8ème.
 *
 * Usage: node prisma/seed_repartition.mjs [--force] [--dry-run]
 *   --force    Écrase les entrées déjà existantes
 *   --dry-run  Affiche sans insérer en base
 */

import { PrismaClient } from '../app/generated/prisma/client.js';
import { PERIODES_11EME, MOIS_11EME } from './data_11eme.js';
import { PERIODES_7EME, MOIS_7EME } from './data_7eme.js';
import { createRequire } from 'module';
import { resolve } from 'path';

// Guard: DATABASE_URL must use an absolute path.
// tsx resolves "file:./..." relative to the Prisma schema dir (prisma/),
// but Next.js resolves from the project root — so the same relative URL
// silently seeds a different file than the one the app reads.
{
  const rawUrl   = process.env.DATABASE_URL ?? '';
  const filePart = rawUrl.startsWith('file:') ? rawUrl.slice(5) : rawUrl;
  if (!rawUrl) {
    console.error('❌ DATABASE_URL non défini. Arrêt.');
    process.exit(1);
  }
  if (filePart.startsWith('./') || filePart.startsWith('../')) {
    console.error('❌ DATABASE_URL est un chemin relatif — interdit pour ce script.');
    console.error('   tsx résout "file:./..." depuis prisma/ ; Next.js depuis la racine du projet.');
    console.error('   Résultat : le seed écrit dans un fichier DB différent de celui de l\'app.');
    console.error('   Utilisez un chemin absolu :');
    console.error('     Windows : DATABASE_URL="file:D:/…/prisma/dev.db"');
    console.error('     Linux   : DATABASE_URL="file:/opt/ecole/app/prisma/dev.db"');
    process.exit(1);
  }
  console.log(`\n📁 Base de données : ${resolve(filePart)}`);
}
const _require = createRequire(import.meta.url);
const { PERIODES_10EME, MOIS_10EME } = _require('./data_10eme.js');
const { PERIODES_8EME, MOIS_8EME } = _require('./data_8eme.js');
const { PERIODES_9EME, MOIS_9EME } = _require('./data_9eme.js');
const { PERIODES_12EME, MOIS_12EME } = _require('./data_12eme.js');
const { PERIODES_GARDERIE, MOIS_GARDERIE } = _require('./data_garderie.js');
const { PERIODES_MATERNELLE, MOIS_MATERNELLE } = _require('./data_maternelle.js');

const prisma  = new PrismaClient();
const args    = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const FORCE   = args.includes('--force');

// Correspondance (période, semaine_within_période) → (mois, semaine_within_mois, dateDebut)
// Année scolaire 2025-2026
const MOIS_MAP = [
  { p:1, s:1, mois:'Septembre', n:1, date:'01/09/2025' },
  { p:1, s:2, mois:'Septembre', n:2, date:'08/09/2025' },
  { p:1, s:3, mois:'Septembre', n:3, date:'15/09/2025' },
  { p:1, s:4, mois:'Septembre', n:4, date:'22/09/2025' },
  { p:1, s:5, mois:'Octobre',   n:1, date:'29/09/2025' },
  { p:1, s:6, mois:'Octobre',   n:2, date:'06/10/2025' },
  { p:1, s:7, mois:'Octobre',   n:3, date:'13/10/2025' },
  { p:2, s:1, mois:'Octobre',   n:4, date:'27/10/2025' },
  { p:2, s:2, mois:'Novembre',  n:1, date:'03/11/2025' },
  { p:2, s:3, mois:'Novembre',  n:2, date:'10/11/2025' },
  { p:2, s:4, mois:'Novembre',  n:3, date:'17/11/2025' },
  { p:2, s:5, mois:'Novembre',  n:4, date:'24/11/2025' },
  { p:2, s:6, mois:'Décembre',  n:1, date:'01/12/2025' },
  { p:2, s:7, mois:'Décembre',  n:2, date:'08/12/2025' },
  { p:3, s:1, mois:'Janvier',   n:1, date:'05/01/2026' },
  { p:3, s:2, mois:'Janvier',   n:2, date:'12/01/2026' },
  { p:3, s:3, mois:'Janvier',   n:3, date:'19/01/2026' },
  { p:3, s:4, mois:'Janvier',   n:4, date:'26/01/2026' },
  { p:3, s:5, mois:'Février',   n:1, date:'02/02/2026' },
  { p:3, s:6, mois:'Février',   n:2, date:'09/02/2026' },
  { p:3, s:7, mois:'Février',   n:3, date:'16/02/2026' },
  { p:4, s:1, mois:'Février',   n:4, date:'23/02/2026' },
  { p:4, s:2, mois:'Mars',      n:1, date:'02/03/2026' },
  { p:4, s:3, mois:'Mars',      n:2, date:'09/03/2026' },
  { p:4, s:4, mois:'Mars',      n:3, date:'16/03/2026' },
  { p:4, s:5, mois:'Mars',      n:4, date:'23/03/2026' },
  { p:4, s:6, mois:'Mars',      n:5, date:'30/03/2026' },
  { p:5, s:1, mois:'Avril',     n:1, date:'20/04/2026' },
  { p:5, s:2, mois:'Avril',     n:2, date:'27/04/2026' },
  { p:5, s:3, mois:'Mai',       n:1, date:'04/05/2026' },
  { p:5, s:4, mois:'Mai',       n:2, date:'11/05/2026' },
  { p:5, s:5, mois:'Mai',       n:3, date:'18/05/2026' },
  { p:5, s:6, mois:'Mai',       n:4, date:'25/05/2026' },
  { p:5, s:7, mois:'Juin',      n:1, date:'01/06/2026' },
  { p:5, s:8, mois:'Juin',      n:2, date:'08/06/2026' },
  { p:5, s:9, mois:'Juin',      n:3, date:'15/06/2026' },
];

function getMoisEntry(periodeNum, semaineNum) {
  return MOIS_MAP.find(e => e.p === periodeNum && e.s === semaineNum);
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONSTRUCTION DES DONNÉES
// ═══════════════════════════════════════════════════════════════════════════════

function buildEntries11eme(sem)     { return sem.matieres || []; }

function buildEntries7eme(sem)      { return sem.matieres || []; }

function buildEntries10eme(sem)     { return sem.matieres || []; }

function buildEntries8eme(sem)      { return sem.matieres || []; }

function buildEntries9eme(sem)      { return sem.matieres || []; }
function buildEntries12eme(sem)     { return sem.matieres || []; }
function buildEntriesGarderie(sem)  { return sem.matieres || []; }
function buildEntriesMaternelle(sem) { return sem.matieres || []; }

// ═══════════════════════════════════════════════════════════════════════════════
// INSERTION EN BASE
// ═══════════════════════════════════════════════════════════════════════════════

async function insererSemaine(classe, mois, semaineDansMois, dateDebut, theme, sousTheme, matieres) {
  if (DRY_RUN) {
    console.log(`  [DRY-RUN] ${mois} S${semaineDansMois} — ${matieres.length} matières`);
    return;
  }

  const existing = await prisma.repartitionSemaine.findUnique({
    where: { classe_mois_semaine: { classe, mois, semaine: semaineDansMois } },
  });

  if (existing && !FORCE) {
    process.stdout.write('⏭  ');
    return;
  }
  if (existing && FORCE) {
    await prisma.repartitionSemaine.delete({ where: { id: existing.id } });
  }

  await prisma.repartitionSemaine.create({
    data: {
      classe,
      mois,
      semaine:   semaineDansMois,
      dateDebut,
      theme,
      sousTheme: sousTheme ?? '',
      matieres: {
        create: matieres.map(m => ({
          matiere:      m.matiere,
          topic:        m.topic        ?? '',
          approche:     m.approche     ?? '',
          transmission: JSON.stringify(m.transmission ?? []),
          exercices:    JSON.stringify(m.exercices    ?? []),
        })),
      },
    },
  });
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════════════════════════

async function main() {
  console.log('\n🚀 Génération de la répartition hebdomadaire\n');
  if (DRY_RUN) console.log('⚠️  Mode DRY-RUN\n');

  const CLASSES = [
    { slug: '11eme',    periodes: PERIODES_11EME,   build: buildEntries11eme    },
    { slug: '7eme',     periodes: PERIODES_7EME,    build: buildEntries7eme     },
    { slug: '10eme',    periodes: PERIODES_10EME,   build: buildEntries10eme    },
    { slug: '8eme',     periodes: PERIODES_8EME,    build: buildEntries8eme     },
    { slug: '9eme',     periodes: PERIODES_9EME,    build: buildEntries9eme     },
    { slug: '12eme',    periodes: PERIODES_12EME,   build: buildEntries12eme    },
    { slug: 'garderie', periodes: PERIODES_GARDERIE,build: buildEntriesGarderie },
    { slug: 'maternelle', periodes: PERIODES_MATERNELLE, build: buildEntriesMaternelle },
  ];

  let total = 0, ok = 0, skip = 0;

  for (const { slug, periodes, build } of CLASSES) {
    console.log(`\n📚 Classe ${slug}`);
    for (const periode of periodes) {
      process.stdout.write(`  P${periode.num} [`);
      for (const sem of periode.semaines) {
        const entry = getMoisEntry(periode.num, sem.n);
        if (!entry) {
          console.error(`\n    WARN: pas de mapping mois pour P${periode.num}S${sem.n}`);
          continue;
        }
        const matieres = build(sem);
        total++;
        try {
          await insererSemaine(
            slug,
            entry.mois,
            entry.n,
            entry.date,
            sem.theme,
            sem.sous,
            matieres,
          );
          process.stdout.write('✓');
          ok++;
        } catch (err) {
          process.stdout.write('✗');
          console.error(`\n    Erreur ${entry.mois} S${entry.n}:`, err.message);
        }
      }
      console.log(']');
    }
  }

  // ─── 12ème Octobre–Juin (données mensuelles pré-remplies) ─────────────────
  console.log('\n📚 Classe 12eme (Octobre–Juin)');
  for (const { mois, data } of MOIS_12EME) {
    process.stdout.write(`  ${mois} [`);
    for (const sem of data) {
      const matieres = (sem.matieres || []).map(m => ({
        matiere:      m.matiere      ?? '',
        topic:        m.topic        ?? '',
        approche:     m.approche     ?? '',
        transmission: m.activites    ?? m.transmission ?? [],
        exercices:    m.exercices    ?? [],
      }));
      const dateDebut = sem.dates
        ? sem.dates.replace(/\s*[–—-]\s*.+$/, '').trim()
        : '';
      total++;
      try {
        await insererSemaine('12eme', mois, sem.n, dateDebut, sem.theme, '', matieres);
        process.stdout.write('✓');
        ok++;
      } catch (err) {
        process.stdout.write('✗');
        console.error(`\n    Erreur 12eme ${mois} S${sem.n}:`, err.message);
      }
    }
    console.log(']');
  }

  // ─── 11ème Octobre–Juin (données mensuelles pré-remplies) ─────────────────
  console.log('\n📚 Classe 11eme (Octobre–Juin)');
  for (const { mois, data } of MOIS_11EME) {
    process.stdout.write(`  ${mois} [`);
    for (const sem of data) {
      const matieres = (sem.matieres || []).map(m => ({
        matiere:      m.matiere      ?? '',
        topic:        m.topic        ?? '',
        approche:     m.approche     ?? '',
        transmission: m.activites    ?? m.transmission ?? [],
        exercices:    m.exercices    ?? [],
      }));
      total++;
      try {
        await insererSemaine('11eme', mois, sem.n, sem.dateDebut, sem.theme, sem.sous ?? '', matieres);
        process.stdout.write('✓');
        ok++;
      } catch (err) {
        process.stdout.write('✗');
        console.error(`\n    Erreur 11eme ${mois} S${sem.n}:`, err.message);
      }
    }
    console.log(']');
  }

  // ─── 10ème Octobre–Juin (données mensuelles pré-remplies) ─────────────────
  console.log('\n📚 Classe 10eme (Octobre–Juin)');
  for (const { mois, data } of MOIS_10EME) {
    process.stdout.write(`  ${mois} [`);
    for (const sem of data) {
      const matieres = (sem.matieres || []).map(m => ({
        matiere:      m.matiere      ?? '',
        topic:        m.topic        ?? '',
        approche:     m.approche     ?? '',
        transmission: m.transmission ?? [],
        exercices:    m.exercices    ?? [],
      }));
      total++;
      try {
        await insererSemaine('10eme', mois, sem.n, sem.dateDebut, sem.theme, sem.sous ?? '', matieres);
        process.stdout.write('✓');
        ok++;
      } catch (err) {
        process.stdout.write('✗');
        console.error(`\n    Erreur 10eme ${mois} S${sem.n}:`, err.message);
      }
    }
    console.log(']');
  }

  // ─── 9ème Octobre–Juin (données mensuelles pré-remplies) ──────────────────
  console.log('\n📚 Classe 9eme (Octobre–Juin)');
  for (const { mois, data } of MOIS_9EME) {
    process.stdout.write(`  ${mois} [`);
    for (const sem of data) {
      const matieres = (sem.matieres || []).map(m => ({
        matiere:      m.matiere      ?? '',
        topic:        m.topic        ?? '',
        approche:     m.approche     ?? '',
        transmission: m.transmission ?? [],
        exercices:    m.exercices    ?? [],
      }));
      total++;
      try {
        await insererSemaine('9eme', mois, sem.n, sem.dateDebut, sem.theme, sem.sous ?? '', matieres);
        process.stdout.write('✓');
        ok++;
      } catch (err) {
        process.stdout.write('✗');
        console.error(`\n    Erreur 9eme ${mois} S${sem.n}:`, err.message);
      }
    }
    console.log(']');
  }

  // ─── 8ème Octobre–Juin (données mensuelles pré-remplies) ──────────────────
  console.log('\n📚 Classe 8eme (Octobre–Juin)');
  for (const { mois, data } of MOIS_8EME) {
    process.stdout.write(`  ${mois} [`);
    for (const sem of data) {
      const matieres = (sem.matieres || []).map(m => ({
        matiere:      m.matiere      ?? '',
        topic:        m.topic        ?? '',
        approche:     m.approche     ?? '',
        transmission: m.transmission ?? [],
        exercices:    m.exercices    ?? [],
      }));
      total++;
      try {
        await insererSemaine('8eme', mois, sem.n, sem.dateDebut, sem.theme, sem.sous ?? '', matieres);
        process.stdout.write('✓');
        ok++;
      } catch (err) {
        process.stdout.write('✗');
        console.error(`\n    Erreur 8eme ${mois} S${sem.n}:`, err.message);
      }
    }
    console.log(']');
  }

  // ─── 7ème Octobre–Mars (données mensuelles pré-remplies) ──────────────────
  // L'Excel source 7ème s'arrête à Mars (pas de feuilles Avril/Mai/Juin).
  console.log('\n📚 Classe 7eme (Octobre–Mars)');
  for (const { mois, data } of MOIS_7EME) {
    process.stdout.write(`  ${mois} [`);
    for (const sem of data) {
      const matieres = (sem.matieres || []).map(m => ({
        matiere:      m.matiere      ?? '',
        topic:        m.topic        ?? '',
        approche:     m.approche     ?? '',
        transmission: m.transmission ?? [],
        exercices:    m.exercices    ?? [],
      }));
      total++;
      try {
        await insererSemaine('7eme', mois, sem.n, sem.dateDebut, sem.theme, sem.sous ?? '', matieres);
        process.stdout.write('✓');
        ok++;
      } catch (err) {
        process.stdout.write('✗');
        console.error(`\n    Erreur 7eme ${mois} S${sem.n}:`, err.message);
      }
    }
    console.log(']');
  }

  // ─── Garderie Octobre–Juin (données mensuelles pré-remplies) ──────────────
  console.log('\n📚 Classe garderie (Octobre–Juin)');
  for (const { mois, data } of MOIS_GARDERIE) {
    process.stdout.write(`  ${mois} [`);
    for (const sem of data) {
      const matieres = (sem.matieres || []).map(m => ({
        matiere:      m.matiere      ?? '',
        topic:        m.topic        ?? '',
        approche:     m.approche     ?? '',
        transmission: m.transmission ?? [],
        exercices:    m.exercices    ?? [],
      }));
      total++;
      try {
        await insererSemaine('garderie', mois, sem.n, sem.dateDebut, sem.theme, sem.sous ?? '', matieres);
        process.stdout.write('✓');
        ok++;
      } catch (err) {
        process.stdout.write('✗');
        console.error(`\n    Erreur garderie ${mois} S${sem.n}:`, err.message);
      }
    }
    console.log(']');
  }

  // ─── Maternelle Octobre–Juin (données mensuelles pré-remplies) ────────────
  console.log('\n📚 Classe maternelle (Octobre–Juin)');
  for (const { mois, data } of MOIS_MATERNELLE) {
    process.stdout.write(`  ${mois} [`);
    for (const sem of data) {
      const matieres = (sem.matieres || []).map(m => ({
        matiere:      m.matiere      ?? '',
        topic:        m.topic        ?? '',
        approche:     m.approche     ?? '',
        transmission: m.transmission ?? [],
        exercices:    m.exercices    ?? [],
      }));
      total++;
      try {
        await insererSemaine('maternelle', mois, sem.n, sem.dateDebut, sem.theme, sem.sous ?? '', matieres);
        process.stdout.write('✓');
        ok++;
      } catch (err) {
        process.stdout.write('✗');
        console.error(`\n    Erreur maternelle ${mois} S${sem.n}:`, err.message);
      }
    }
    console.log(']');
  }

  console.log(`\n✨ Terminé — ${ok}/${total} semaines insérées (${skip} ignorées)\n`);
  await prisma.$disconnect();
}

main().catch(async err => {
  console.error(err);
  await prisma.$disconnect();
  process.exit(1);
});
