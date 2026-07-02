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
import { PERIODES_11EME } from './data_11eme.js';
import { PERIODES_7EME } from './data_7eme.js';
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
const { PERIODES_10EME }  = _require('./data_10eme.js');
const { PERIODES_8EME }   = _require('./data_8eme.js');
const { PERIODES_9EME }   = _require('./data_9eme.js');
const { PERIODES_12EME, MOIS_12EME } = _require('./data_12eme.js');
const { PERIODES_GARDERIE } = _require('./data_garderie.js');

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
// GÉNÉRATEURS PAR MATIÈRE — 11ème (6-7 ans)
// ═══════════════════════════════════════════════════════════════════════════════

function gen11_MALAGASY(topic) {
  const isLettre = /^[A-ZÀ-Ü]{1,3}(-[A-ZÀ-Ü]{1,3})?$/.test(topic.split(' ')[0]);
  if (topic.startsWith('Révision')) return genRevision('MALAGASY', '11eme', topic);

  if (isLettre) {
    const lettre = topic.split(' ')[0];
    return {
      approche: `Introduire la lettre "${lettre}" par son et par forme, en partant de mots connus des élèves (noms de personnes, objets de la classe). Utiliser la méthode syllabique : son → syllabe → mot → phrase courte.`,
      transmission: [
        `Présenter la lettre "${lettre}" au tableau en majuscule et minuscule, nommer son son en malgache`,
        `Jeu de reconnaissance : trouver des objets/prénoms qui commencent par "${lettre}"`,
        `Former des syllabes avec "${lettre}" et les voyelles connues, les lire en chœur`,
        `Écrire la lettre sur l'ardoise, puis dans le cahier avec des exemples de mots`,
      ],
      exercices: [
        `Entourer tous les "${lettre}" dans une phrase écrite au tableau`,
        `Relier l'image au mot qui commence par "${lettre}"`,
        `Compléter les mots lacunaires : _olo, _asa, _ro...`,
        `Écrire 3 mots avec la lettre "${lettre}" et les lire à voix haute`,
      ],
    };
  }

  return {
    approche: `Aborder "${topic}" en partant d'une chanson ou comptine connue des élèves. Faire verbaliser ce qu'ils connaissent déjà avant d'introduire les éléments nouveaux. Alterner oral et écrit.`,
    transmission: [
      `Réciter ou chanter ensemble le texte/la comptine du thème de la semaine`,
      `Expliquer le sens des mots nouveaux avec des images et des gestes`,
      `Lire le texte ligne par ligne, les élèves répètent après l'enseignant`,
      `Copier les mots-clés dans le cahier et les illustrer par un dessin`,
    ],
    exercices: [
      `Répéter le texte/la comptine par groupes de 3 élèves`,
      `Associer chaque image à sa légende écrite au tableau`,
      `Remettre des mots dans le bon ordre pour former une phrase`,
      `Dicter 4 mots du thème à copier et illustrer`,
    ],
  };
}

function gen11_KAJY(topic) {
  if (topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('KAJY', '11eme', topic);
  return {
    approche: `Enseigner "${topic}" en manipulant des objets concrets (cailloux, grains de riz, bâtonnets). Partir du réel avant d'abstraire. Les élèves de 11ème apprennent les mathématiques par le toucher et la vue.`,
    transmission: [
      `Démontrer le concept avec des objets manipulables devant la classe`,
      `Faire compter, regrouper ou ordonner les objets par les élèves au tableau`,
      `Écrire les chiffres/l'opération au tableau et l'expliquer étape par étape`,
      `Exercice guidé collectif : résoudre 3 exemples ensemble avant le travail individuel`,
    ],
    exercices: [
      `Compter et écrire le nombre d'objets dessinés (3 séries de 4 images)`,
      `Compléter les opérations : 3 + __ = 7, 8 - __ = 5 (5 exercices)`,
      `Résoudre un problème avec du contexte local : "Rivo a 4 mangues, il en mange 2..."`,
      `Ordonner 5 nombres du plus petit au plus grand`,
    ],
  };
}

function gen11_FRANÇAIS(topic) {
  if (topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('FRANÇAIS', '11eme', topic);
  return {
    approche: `Introduire "${topic}" à travers des situations de communication réelles. Les élèves de 11ème ont besoin de répétitions et d'actions concrètes pour mémoriser. Prioriser l'oral avant l'écrit.`,
    transmission: [
      `Mettre en scène la situation : l'enseignant joue un dialogue simple illustrant le thème`,
      `Répéter les phrases-clés en chœur (3 fois), puis par rangée, puis individuellement`,
      `Afficher des images + légendes au tableau, les élèves associent en pointant`,
      `Mini jeu de rôle par paires : reproduire la situation avec les phrases apprises`,
    ],
    exercices: [
      `Répéter les 4 phrases-modèles à voix haute devant la classe`,
      `Compléter les bulles de BD : "Bonjour, je m'appelle ___"`,
      `Relier chaque image à la bonne phrase parmi 4 propositions`,
      `Copier les 3 phrases modèles dans le cahier en les illustrant`,
    ],
  };
}

function gen11_FFMOM(topic) {
  if (topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('FFMOM', '11eme', topic);
  return {
    approche: `Aborder "${topic}" par le questionnement : demander aux élèves ce qu'ils font à la maison, ce qu'ils ont observé. Créer un débat simple pour faire émerger les bonnes pratiques avant de les formaliser.`,
    transmission: [
      `Poser la question centrale du thème et recueillir les réponses des élèves`,
      `Raconter une courte histoire illustrant la bonne pratique ou valeur`,
      `Afficher au tableau les règles ou comportements à retenir (3 maximum)`,
      `Jeu de rôle : jouer la "bonne" puis la "mauvaise" situation et identifier la différence`,
    ],
    exercices: [
      `Dessiner une scène illustrant le bon comportement lié au thème`,
      `Vrai/Faux : 5 affirmations sur le thème à valider ou corriger`,
      `Compléter la phrase : "Je dois ___ parce que ___" (3 fois)`,
      `Réciter la règle/valeur clé de la semaine à voix haute devant la classe`,
    ],
  };
}

function gen11_HETSIKA(topic) {
  if (topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('HETSIKA', '11eme', topic);
  return {
    approche: `L'activité pratique "${topic}" se fait par observation et imitation. Montrer d'abord en entier, puis décomposer en étapes simples. Les élèves participent progressivement.`,
    transmission: [
      `Démontrer l'activité complète une fois sans s'interrompre`,
      `Recommencer en expliquant chaque étape et en invitant les élèves à observer`,
      `Faire participer 2-3 volontaires pour montrer aux autres`,
      `Faire réaliser l'activité en groupes sous la supervision de l'enseignant`,
    ],
    exercices: [
      `Réaliser l'activité individuellement ou en binôme`,
      `Décrire oralement ce qu'on a fait (vocabulaire technique simple)`,
      `Dessiner les étapes de l'activité dans le cahier (3-4 vignettes)`,
      `Identifier les matériaux nécessaires et leur utilité`,
    ],
  };
}

function gen11_TSIANJERY(topic) {
  if (topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('TSIANJERY', '11eme', topic);
  return {
    approche: `La mémorisation de "${topic}" se fait par répétition rythmée et associée à des gestes. En 11ème, les comptines et les rythmes facilitent la mémorisation. Utiliser le corps (frapper dans les mains, frapper les genoux).`,
    transmission: [
      `Réciter lentement le texte/les mots à mémoriser, en articulant clairement`,
      `Ajouter un geste pour chaque mot-clé ou ligne`,
      `Répéter avec rythme et musique : en chœur, par rangées, puis en solo`,
      `Écrire les mots-clés au tableau et les effacer progressivement pour tester la mémoire`,
    ],
    exercices: [
      `Réciter la comptine/le texte de mémoire par binômes`,
      `Compléter les mots manquants du texte sur une fiche`,
      `Remettre les lignes du texte dans le bon ordre (3-4 lignes)`,
      `Réciter devant la classe avec les gestes correspondants`,
    ],
  };
}

function gen11_ARTS(topic) {
  if (topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('ARTS', '11eme', topic);
  return {
    approche: `L'éducation musicale "${topic}" développe l'oreille et le sens du rythme. Commencer par écouter, puis reproduire. Les élèves de 11ème apprennent mieux quand ils bougent avec la musique.`,
    transmission: [
      `Chanter la chanson/jouer les notes une fois en entier pour que les élèves écoutent`,
      `Identifier les sons/notes et les nommer ensemble`,
      `Apprendre le refrain ou les 4 premières mesures en répétant 3 fois`,
      `Ajouter des claps ou mouvements corporels pour marquer le rythme`,
    ],
    exercices: [
      `Chanter la partie apprise en chœur sans aide de l'enseignant`,
      `Identifier si deux sons chantés sont identiques ou différents (5 paires)`,
      `Frapper le rythme de la chanson avec les mains sur la table`,
      `Chanter la chanson par petits groupes de 4-5 élèves`,
    ],
  };
}

function gen11_SARY(topic) {
  if (topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('SARY', '11eme', topic);
  return {
    approche: `L'activité dessin "${topic}" développe la motricité fine et la créativité. Montrer une technique simple, permettre aux élèves de l'adapter à leur façon. Valoriser tous les résultats.`,
    transmission: [
      `Montrer le modèle ou la technique à utiliser (formes de base, proportion, couleur)`,
      `Dessiner étape par étape au tableau en demandant aux élèves de suivre`,
      `Circuler et guider chaque élève dans ses tracés`,
      `Afficher les productions au tableau et commenter positivement`,
    ],
    exercices: [
      `Reproduire le modèle dans le cahier de dessin`,
      `Légender le dessin avec les mots du thème appris`,
      `Colorier en respectant les couleurs associées aux éléments (vert = feuille, bleu = eau)`,
      `Ajouter un détail personnel pour personnaliser le dessin`,
    ],
  };
}

function gen11_EPS(topic) {
  if (topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('EPS', '11eme', topic);
  return {
    approche: `L'EPS "${topic}" développe les capacités motrices et la vie collective. Commencer par un échauffement, puis enseigner le geste ou la règle, puis jouer. La sécurité et le fair-play sont prioritaires.`,
    transmission: [
      `Échauffement de 5 min : courir, s'étirer, sauter sur place`,
      `Expliquer et démontrer l'exercice ou le jeu en s'assurant que tous voient`,
      `Faire pratiquer par petits groupes avec retours immédiats`,
      `Jeu final ou mise en compétition ludique pour consolider`,
    ],
    exercices: [
      `Répéter le geste technique 5 fois de suite (ex : attraper, lancer, sauter)`,
      `Participer au jeu collectif en respectant les règles expliquées`,
      `Chronométrer ou compter les répétitions pour se fixer un défi personnel`,
      `Nommer oralement 2 règles du jeu ou 2 bienfaits de l'activité`,
    ],
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// GÉNÉRATEURS PAR MATIÈRE — 7ème (12-13 ans)
// ═══════════════════════════════════════════════════════════════════════════════

function gen7_MALAGASY(topic) {
  if (topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('MALAGASY', '7eme', topic);
  return {
    approche: `Introduire "${topic}" par un texte court et authentique (extrait de journal, histoire locale). Faire lire silencieusement, puis à voix haute, puis analyser les points grammaticaux ou de vocabulaire ciblés.`,
    transmission: [
      `Lecture silencieuse du texte support, puis questions de compréhension globale`,
      `Lecture expressive à voix haute par l'enseignant puis par 3 élèves volontaires`,
      `Identifier et souligner les exemples de la notion grammaticale dans le texte`,
      `Formuler la règle ensemble, la noter au tableau, faire des exemples collectifs`,
    ],
    exercices: [
      `Transformer 5 phrases selon le modèle grammatical étudié`,
      `Trouver 4 exemples de la notion dans un nouveau texte court`,
      `Production écrite : rédiger 5 phrases utilisant la structure du jour`,
      `Lecture orale à voix haute d'un paragraphe, avec débit et articulation`,
    ],
  };
}

function gen7_CALCUL(topic) {
  if (topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('CALCUL', '7eme', topic);
  return {
    approche: `Enseigner "${topic}" en partant d'un problème concret issu de la vie malgache (marché, rizière, salaire). L'abstraction mathématique vient après la résolution intuitive. Favoriser la discussion entre élèves.`,
    transmission: [
      `Poser le problème-déclencheur au tableau et laisser 3 min de réflexion individuelle`,
      `Recueillir les stratégies des élèves et les comparer au tableau`,
      `Formaliser la notion : définition, formule ou règle avec exemples clairs`,
      `Exercices guidés : résoudre 3 exemples ensemble en expliquant chaque étape`,
    ],
    exercices: [
      `Résoudre 5 exercices d'application directe de la notion`,
      `Problème contextuel : marché, budget familial ou mesure de terrain`,
      `Exercice de calcul mental : 10 calculs rapides liés à la notion`,
      `Problème à étapes : rédiger la démarche complète avec la réponse`,
    ],
  };
}

function gen7_FRANÇAIS(topic) {
  if (topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('FRANÇAIS', '7eme', topic);
  return {
    approche: `Aborder "${topic}" à travers des textes variés (lettres, articles, dialogues) en lien avec la vie malgache. Le vocabulaire nouveau est contextualisé avant d'être mémorisé. Alterner compréhension et production.`,
    transmission: [
      `Lecture et analyse d'un document support illustrant le thème`,
      `Explication du vocabulaire nouveau avec reformulation en français simple`,
      `Point de grammaire ou de vocabulaire : règle, exemples au tableau`,
      `Production orale guidée : décrire, raconter ou commenter à partir d'images`,
    ],
    exercices: [
      `Questions de compréhension sur le texte support (5 questions)`,
      `Exercice de vocabulaire : définir ou employer 6 mots nouveaux en phrase`,
      `Exercice de grammaire : transformer, compléter ou corriger 5 phrases`,
      `Production écrite courte : 8-10 lignes sur le thème en utilisant le vocabulaire appris`,
    ],
  };
}

function gen7_TANTARA(topic) {
  if (topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('TANTARA', '7eme', topic);
  return {
    approche: `Enseigner "${topic}" en commençant par ce que les élèves connaissent déjà (traditions orales, récits familiaux). Situer les événements sur une frise chronologique visible. Relier le passé au présent malgache.`,
    transmission: [
      `Placer l'événement/la période sur la frise chronologique de la classe`,
      `Exposé de l'enseignant avec carte ou images illustratives (10 min)`,
      `Questions-réponses pour vérifier la compréhension et impliquer les élèves`,
      `Résumer les faits essentiels avec les élèves : qui, quand, où, pourquoi`,
    ],
    exercices: [
      `Compléter une frise chronologique avec les dates et événements clés`,
      `Répondre à 5 questions sur les personnages, dates et causes/conséquences`,
      `Rédiger un résumé de 8 lignes sur l'événement étudié`,
      `Situer sur une carte les lieux mentionnés dans la leçon`,
    ],
  };
}

function gen7_GÉOGRAPHIE(topic) {
  if (topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('GÉOGRAPHIE', '7eme', topic);
  return {
    approche: `Introduire "${topic}" par l'observation d'une carte ou d'une photo aérienne de Madagascar. Partir du local (région des élèves) avant d'aller vers le général. Lier la géographie aux activités économiques réelles.`,
    transmission: [
      `Observer et commenter la carte ou l'image projetée/affichée`,
      `Légender les éléments géographiques principaux ensemble`,
      `Explication de la leçon avec exemples pris dans la région de l'école`,
      `Schéma simplifié à copier et légender dans le cahier`,
    ],
    exercices: [
      `Nommer et localiser 5 éléments sur une carte muette de Madagascar`,
      `Répondre à 5 questions de compréhension sur la leçon`,
      `Compléter un tableau : caractéristiques / exemples / localisation`,
      `Rédiger 5 lignes expliquant l'influence du sujet sur la vie des Malgaches`,
    ],
  };
}

function gen7_CU(topic) {
  if (topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('CU', '7eme', topic);
  return {
    approche: `Enseigner "${topic}" par l'observation directe ou sur schéma. Les sciences se basent sur ce que les élèves voient, touchent et peuvent expérimenter simplement en classe. Stimuler la curiosité avant d'expliquer.`,
    transmission: [
      `Observation : montrer un spécimen réel, un schéma ou une image de grande taille`,
      `Questionnement : que voyez-vous ? Que savez-vous déjà sur ce sujet ?`,
      `Exposé structuré avec schéma légendé au tableau (définition, parties, fonction)`,
      `Expérience simple ou démonstration pour illustrer le concept (si matériel disponible)`,
    ],
    exercices: [
      `Légender un schéma muet à partir des éléments vus en classe`,
      `Répondre à 5 questions de compréhension sur la leçon`,
      `Classer ou associer : relier chaque terme à sa définition (6 éléments)`,
      `Rédiger 5-6 lignes décrivant l'élément étudié sans regarder le cours`,
    ],
  };
}

function gen7_FFMOM(topic) {
  if (topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('FFMOM', '7eme', topic);
  return {
    approche: `Aborder "${topic}" par un débat ou un cas pratique tiré de la vie communautaire malgache. Les élèves de 7ème peuvent argumenter et donner leur avis. L'objectif est de développer leur sens civique et leur esprit critique.`,
    transmission: [
      `Présenter une situation concrète (histoire, affiche ou extrait de loi) comme déclencheur`,
      `Débat guidé : chaque élève exprime son avis avec une justification`,
      `L'enseignant synthétise et formule les notions clés (droits, devoirs, institutions)`,
      `Rôle-play ou jeu de simulation : appliquer la notion dans un cas fictif local`,
    ],
    exercices: [
      `Écrire 3 droits et 3 devoirs liés au thème étudié`,
      `Analyser une situation : identifier le problème et proposer une solution`,
      `Rédiger un court texte argumenté (8 lignes) : "Pourquoi est-il important de... ?"`,
      `Créer une affiche avec un slogan et un dessin sur le thème civique de la semaine`,
    ],
  };
}

function gen7_HETSIKA(topic) {
  if (topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('HETSIKA', '7eme', topic);
  return {
    approche: `L'activité pratique "${topic}" combine gestes techniques et connaissance théorique. Montrer d'abord l'ensemble, puis décomposer et faire pratiquer. Valoriser la précision et le soin du travail artisanal.`,
    transmission: [
      `Présentation des outils et matériaux nécessaires, nommer chacun`,
      `Démonstration complète de l'activité par l'enseignant`,
      `Décomposer en 4 étapes, les élèves pratiquent chaque étape séquentiellement`,
      `Finalisation et présentation des productions : valoriser le travail soigné`,
    ],
    exercices: [
      `Réaliser l'activité complète de façon autonome`,
      `Rédiger les étapes de réalisation (mode opératoire) en 5-6 phrases`,
      `Calculer ou estimer le coût de production avec les prix locaux`,
      `Évaluer sa production : quels aspects améliorer la prochaine fois ?`,
    ],
  };
}

function gen7_ARTS(topic) {
  if (topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('ARTS', '7eme', topic);
  return {
    approche: `L'éducation artistique "${topic}" développe la sensibilité musicale et l'expression corporelle. À ce niveau, les élèves peuvent lire des notes simples et créer de courtes compositions. Valoriser les traditions musicales malgaches.`,
    transmission: [
      `Écoute active : diffuser ou chanter le morceau, les élèves ferment les yeux et écoutent`,
      `Analyse : tempo, émotion, structure (couplet/refrain), instruments reconnaissables`,
      `Apprentissage progressif : phrase par phrase, en commençant par le refrain`,
      `Intégration des mouvements ou chorégraphie simple associée`,
    ],
    exercices: [
      `Chanter le morceau appris en chœur puis par rangées`,
      `Identifier les notes ou rythmes sur une partition simplifiée (4 mesures)`,
      `Composer une phrase musicale simple sur 4 notes données`,
      `Présenter une courte prestation (chant ou danse) par groupes de 5`,
    ],
  };
}

function gen7_SARY(topic) {
  if (topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('SARY', '7eme', topic);
  return {
    approche: `L'éducation artistique visuelle "${topic}" développe l'observation fine et la maîtrise de la ligne et de la couleur. À ce niveau, introduire des techniques précises (perspective, harmonie chromatique, composition).`,
    transmission: [
      `Observer des exemples d'œuvres ou de productions illustrant la technique`,
      `Expliquer et démontrer la technique pas à pas au tableau`,
      `Esquisse collective : les élèves réalisent une ébauche, l'enseignant guide`,
      `Travail individuel sur la production finale + valorisation des œuvres`,
    ],
    exercices: [
      `Réaliser une composition en appliquant la technique étudiée`,
      `Annoter son dessin : nommer les techniques et couleurs utilisées`,
      `Décrire oralement son choix artistique (5 phrases)`,
      `Critiquer de façon positive la production d'un camarade`,
    ],
  };
}

function gen7_EPS(topic) {
  if (topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('EPS', '7eme', topic);
  return {
    approche: `La séance d'EPS "${topic}" vise l'acquisition de gestes techniques et l'esprit d'équipe. Structurer : échauffement → apprentissage technique → situation de jeu → retour au calme. Insister sur le fair-play.`,
    transmission: [
      `Échauffement spécifique à l'activité (5-7 min) : mobilisation articulaire et cardio`,
      `Explication et démonstration du geste technique ou de la règle`,
      `Ateliers pratiques en rotation : chaque groupe travaille un aspect différent`,
      `Match ou épreuve finale : application en situation réelle avec arbitrage`,
    ],
    exercices: [
      `Réaliser le geste technique 8 fois en situation isolée`,
      `Appliquer la technique en situation d'opposition (match ou exercice à deux)`,
      `Mesurer ou chronométrer sa performance pour se fixer un objectif`,
      `Évaluation orale : nommer 3 règles et 2 points techniques appris`,
    ],
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// GÉNÉRATEURS PAR MATIÈRE — 10ème (7-8 ans)
// Inspirés des méthodes nordiques (Finlande), japonaises et chinoises
// ═══════════════════════════════════════════════════════════════════════════════

function gen10_MALAGASY(topic) {
  if (!topic || topic.startsWith('Révision') || topic.startsWith('Bilan') || topic.startsWith('Fanavaozana') || topic.startsWith('Fety')) return genRevision('MALAGASY', '10eme', topic);
  return {
    approche: `Aborder "${topic}" par l'écoute active d'un court texte ou dialogue authentique, puis avancer vers la lecture et l'expression. Méthode japonaise : lire à voix haute en chœur d'abord (lecture collective), puis par rangées, puis en solo. Le sens vient avant la forme. Méthode nordique : les élèves parlent du thème dans leur propre vie avant d'étudier la langue formellement.`,
    transmission: [
      `Mise en situation orale : l'enseignant pose une question déclenchante sur le thème — chaque élève répond en 1 phrase (style cercle de parole, inspiré du modèle finlandais)`,
      `Écoute du texte ou dialogue modèle lu par l'enseignant avec expression — les élèves ferment les yeux et visualisent la scène`,
      `Lecture collective à voix haute : tous ensemble 2 fois, puis par rangées, puis 3 volontaires seuls (technique japonaise "Ondoku" — lecture orale rythmée)`,
      `Identifier ensemble les mots-clés du thème "${topic}" : les écrire au tableau, les définir par synonymes et par exemples du quotidien`,
      `Mini-exercice d'écriture : chaque élève compose 2 phrases sur le thème, l'enseignant circule et valide (méthode nordique d'autonomie guidée)`,
    ],
    exercices: [
      `Répondre à 4 questions de compréhension sur le texte étudié (qui, quoi, où, pourquoi)`,
      `Compléter 5 phrases lacunaires avec les mots-clés du thème`,
      `Remettre 4 mots dans l'ordre pour former une phrase correcte`,
      `Écrire 2 phrases complètes en utilisant chacune 1 mot nouveau du vocabulaire du jour`,
      `Lecture orale devant la classe : 1 paragraphe du texte, prononciation soignée (notation par les pairs — modèle japonais d'évaluation entre élèves)`,
    ],
  };
}

function gen10_FRANÇAIS(topic) {
  if (!topic || topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('FRANÇAIS', '10eme', topic);
  return {
    approche: `Introduire "${topic}" en partant d'une situation de communication réelle (image, dialogue filmé sur tablette ou dessiné). Méthode nordique : le français est d'abord un outil de communication, pas un exercice formel. Méthode japonaise : structure de leçon en 4 temps stricts (introduction → présentation → pratique guidée → production autonome). Méthode chinoise : répétition chorale renforcée pour ancrer le vocabulaire dans la mémoire à long terme.`,
    transmission: [
      `Accroche sensorielle : afficher une grande image liée au thème "${topic}" — les élèves la décrivent en français pendant 2 minutes (ce qu'ils voient, entendent, ressentent)`,
      `Présentation du vocabulaire cible (5-7 mots) : chaque mot est dit par l'enseignant, répété en chœur 3 fois, puis associé à un geste ou image mémo (méthode "TPR" — Total Physical Response)`,
      `Dialogue modèle joué par l'enseignant + un élève volontaire, puis inversé : 3 paires d'élèves jouent le dialogue devant la classe`,
      `Point de grammaire : isoler la règle du dialogue (ex : accord, conjugaison), la noter au tableau avec 3 exemples contrastifs (bonne forme / mauvaise forme / pourquoi)`,
      `Production guidée : chaque élève rédige 3 phrases en utilisant le vocabulaire et la structure grammaticale du jour (soutien par mots-outils écrits au tableau)`,
    ],
    exercices: [
      `Associer 5 images aux 5 mots de vocabulaire appris — relier et copier le mot sous l'image`,
      `Compléter le dialogue à trous (6 répliques) en choisissant parmi 3 options par case`,
      `Transformer 4 phrases selon le modèle grammatical étudié (changer de sujet, de temps ou de genre)`,
      `Répondre à 3 questions ouvertes sur le thème en phrase complète (minimum 6 mots par réponse)`,
      `Production écrite créative : inventer et écrire un dialogue de 4 répliques sur le thème avec un(e) camarade, puis le lire devant la classe`,
    ],
  };
}

function gen10_ARITHMÉTIQUE(topic) {
  if (!topic || topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('ARITHMÉTIQUE', '10eme', topic);
  return {
    approche: `Enseigner "${topic}" en 3 phases inspirées de la pédagogie japonaise (approche CPA — Concret → Pictorial → Abstrait) : d'abord manipuler des objets réels, puis représenter avec des dessins/schémas, puis travailler sur les symboles abstraits. Méthode nordique : départ sur un problème ouvert que les élèves résolvent à leur façon, puis discussion collective des stratégies trouvées. Méthode chinoise : consolidation par la récitation rythmée des règles et tables pour ancrer l'automatisation.`,
    transmission: [
      `Phase CONCRÈTE (5 min) : manipuler des bâtonnets, cailloux ou petits objets pour illustrer la notion "${topic}" — chaque élève construit physiquement la situation`,
      `Phase PICTORIALE (7 min) : représenter la même situation par un schéma ou dessin au cahier (barres, points, dessins symboliques)`,
      `Phase ABSTRAITE (8 min) : l'enseignant formalise la règle, l'opération ou la formule au tableau — exemples progressifs (facile → moyen → difficile)`,
      `Discussion collective (5 min) : "Qui a une autre façon de faire ?" — comparer 2 stratégies différentes au tableau (inspiration modèle japonais Neriage — montée en généralité)`,
      `Récitation rythmée (3 min) : répéter la règle ou les tables en chœur avec frappe des mains (méthode chinoise de mémorisation par rythme)`,
    ],
    exercices: [
      `6 calculs d'application directe sur la notion "${topic}" — sans contexte (automatiser)`,
      `3 calculs avec schéma à compléter (phase pictoriale de renforcement)`,
      `Calcul mental rapide : 10 mini-calculs liés à la notion en 2 minutes chrono (méthode chinoise de rapidité)`,
      `Problème de la vie réelle (marché, jardin, école) utilisant "${topic}" — rédiger la démarche complète en 3 étapes`,
      `Défi enrichissement : problème à 2 étapes pour les élèves rapides — les autres aident un camarade en difficulté (tutorat pair à pair, modèle finlandais)`,
    ],
  };
}

function gen10_MESURE(topic) {
  if (!topic || topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('MESURE', '10eme', topic);
  return {
    approche: `Enseigner "${topic}" par la manipulation et la mesure réelle d'objets de la classe. Méthode nordique : sortir de la classe — mesurer des objets extérieurs (tables, fenêtres, jardin). Méthode japonaise : partir d'une erreur de mesure volontaire pour créer un conflit cognitif ("Pourquoi obtenez-vous des résultats différents ?" → besoin d'une unité standard). Méthode chinoise : mémoriser les équivalences par chant ou comptine rythmée.`,
    transmission: [
      `Problème déclencheur : deux élèves mesurent le même objet avec des "pieds" différents et obtiennent des résultats différents → "Pourquoi ?" → discussion sur le besoin d'unité standard (conflit cognitif japonais)`,
      `Présenter l'unité de mesure de "${topic}" : montrer l'instrument (règle, balance, verre mesureur), nommer l'unité, sa valeur`,
      `Activité pratique collective : mesurer 5 objets de la classe avec l'instrument — noter les résultats au tableau et comparer`,
      `Sortie courte dans la cour (10 min, méthode nordique) : mesurer des éléments de l'environnement réel`,
      `Comptine de mémorisation des équivalences (méthode chinoise) : "1 mètre = 100 centimètres, on chante ensemble !" — rythme + gestes corporels`,
    ],
    exercices: [
      `Estimer puis mesurer 5 objets réels — comparer estimation et mesure réelle`,
      `Convertir : 5 exercices de conversion dans l'unité étudiée (ex : cm ↔ m, g ↔ kg)`,
      `Classer 6 objets du plus petit au plus grand selon l'unité mesurée`,
      `Problème concret : "Rivo veut acheter du tissu de 2 m. Il en a mesuré 150 cm. En a-t-il assez ?"`,
      `Activité de groupe (3 élèves) : mesurer et enregistrer 3 objets de la classe, puis présenter les résultats — validation croisée (méthode finlandaise d'apprentissage collaboratif)`,
    ],
  };
}

function gen10_GÉOMÉTRIE(topic) {
  if (!topic || topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('GÉOMÉTRIE', '10eme', topic);
  return {
    approche: `Aborder "${topic}" par l'observation d'objets réels de la classe et de l'environnement. Méthode japonaise : "Katachi" (forme) — contempler des formes avant de les définir. Méthode nordique : manipulation de formes découpées, puzzles géométriques. Méthode chinoise : reproduction précise avec instruments (règle, compas, équerre) et mémorisation des propriétés.`,
    transmission: [
      `Observation silencieuse (2 min, inspirée du Zen japonais) : regarder autour de la classe — identifier des objets ayant la forme étudiée "${topic}"`,
      `Collection collective : les élèves citent leurs trouvailles, l'enseignant les note — créer une "banque d'exemples" au tableau`,
      `Présentation formelle : nommer, définir les propriétés (côtés, angles, symétries), tracer un exemple au tableau pas à pas`,
      `Manipulation (méthode nordique) : chaque élève reçoit une feuille quadrillée et dessine 3 exemples de la forme avec des instruments en variant les tailles`,
      `Jeu de Tangram ou puzzle : assembler des formes apprises pour créer une silhouette — renforcement ludique`,
    ],
    exercices: [
      `Reconnaître et colorier uniquement les "${topic}" parmi 10 figures mélangées`,
      `Tracer 2 exemples de "${topic}" avec règle et instruments en respectant les mesures données`,
      `Compléter la définition : "Un _______ a ___ côtés égaux et ___ angles droits"`,
      `Calculer le périmètre de 3 figures en additionnant les côtés donnés`,
      `Créer une composition artistique avec des formes géométriques apprises (coller des formes découpées, méthode Mondrian simplifiée)`,
    ],
  };
}

function gen10_PROBLÈME(topic) {
  if (!topic || topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('PROBLÈME', '10eme', topic);
  return {
    approche: `Résoudre des problèmes sur "${topic}" en 4 étapes claires (méthode OSEE — Observer, Schématiser, Exécuter, Évaluer). Méthode japonaise : le problème comme point de départ de la leçon (hatsumon), 10 min de recherche individuelle silencieuse avant toute explication. Méthode nordique : le problème se résout en petit groupe, puis on compare les stratégies — la bonne réponse peut s'obtenir de plusieurs façons. Méthode chinoise : la démarche de résolution est mémorisée et automatisée par répétition.`,
    transmission: [
      `Lecture du problème 2 fois par l'enseignant, puis par un élève — chaque élève reformule dans ses propres mots ce qui est demandé`,
      `Recherche individuelle silencieuse (7 min, méthode japonaise) : chaque élève cherche dans son cahier sans parler — l'enseignant circule sans donner de réponse`,
      `Mise en commun en petit groupe de 3 : comparer les stratégies, se mettre d'accord sur une méthode`,
      `Neriage — discussion collective au tableau : 2 ou 3 stratégies différentes sont présentées, la classe choisit la plus efficace et comprend pourquoi`,
      `Récapitulatif mémorisable : "Pour résoudre ce type de problème, je dois toujours : 1. __ 2. __ 3. __" — copié et récité (méthode chinoise)`,
    ],
    exercices: [
      `Résoudre le problème du jour avec la méthode apprise (démarche complète en 4 étapes)`,
      `Résoudre 2 problèmes similaires légèrement différents (variation des données)`,
      `Problème inverse : donner la réponse et retrouver la question (créativité mathématique)`,
      `Créer soi-même un problème semblable avec des données du quartier ou de la famille`,
      `Problème de défi : 1 problème à 2 étapes pour les élèves qui ont terminé — les autres finissent l'exercice de création de problème`,
    ],
  };
}

function gen10_SCIENCES(topic) {
  if (!topic || topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('SCIENCES', '10eme', topic);
  return {
    approche: `Enseigner "${topic}" par la démarche d'investigation scientifique (méthode "La main à la pâte", proche de l'approche nordique d'apprentissage par exploration). Méthode japonaise : observation minutieuse avant toute explication — "Voir d'abord, nommer ensuite." Méthode chinoise : mémoriser les faits clés par une liste structurée répétée. L'enseignant joue le rôle de guide, pas de détenteur de toutes les réponses.`,
    transmission: [
      `Question déclenchante : "Qu'est-ce que vous savez déjà sur ${topic} ?" — noter au tableau les représentations initiales des élèves (même fausses)`,
      `Observation (méthode japonaise) : spécimen réel, image de grande taille, ou démonstration — observer en silence 2 minutes, puis décrire ce qu'on voit avec précision`,
      `Investigation simple : expérience de 10 min réalisée par groupes de 4 (manipuler, mesurer, comparer) — noter les résultats sur une fiche`,
      `Confrontation des résultats et discussion : comparer les observations avec les représentations initiales — corriger les erreurs de compréhension`,
      `Synthèse structurée : note de cours en 5 points maximum, schéma légendé au cahier (méthode japonaise de fiche structurée)`,
    ],
    exercices: [
      `Légender un schéma muet de "${topic}" à partir des 5 termes vus en classe`,
      `Classer 6 éléments selon les catégories apprises (ex : vertébrés/invertébrés, solide/liquide/gazeux)`,
      `Répondre à 4 questions de compréhension sur la leçon (réponses en phrases complètes)`,
      `Mini-défi pratique : réaliser l'étape principale de l'expérience seul et noter le résultat`,
      `"Je suis chercheur" : formuler 2 questions supplémentaires sur le sujet que l'élève aimerait explorer — réponse cherchée à la maison (méthode nordique d'autonomie)`,
    ],
  };
}

function gen10_GÉOGRAPHIE(topic) {
  if (!topic || topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('GÉOGRAPHIE', '10eme', topic);
  return {
    approche: `Enseigner "${topic}" en commençant par ce que l'élève connaît (son village, sa région) avant d'aller vers le général (Madagascar, le monde). Méthode nordique : partir dehors — observer l'environnement réel. Méthode japonaise : lecture de carte avec attention et précision. Méthode chinoise : mémoriser les grandes informations géographiques avec des phrases-repères rythmées.`,
    transmission: [
      `Ancrage local : "Où habitez-vous ? Quelle rivière, quel marché, quelle montagne connaissez-vous ?" — construire le lien entre le vécu et la leçon`,
      `Observation de carte ou image aérienne de la zone concernée par "${topic}" — identifier 3 éléments sur la carte avant l'explication`,
      `Exposé structuré (8 min) : présenter les caractéristiques de "${topic}" avec exemples concrets de Madagascar — alterner image et explication orale`,
      `Exercice de localisation collective : légender ensemble une carte muette au tableau, puis chaque élève refait seul dans son cahier`,
      `Synthèse géographique mémorisable : "À retenir sur ${topic} : 1. __ 2. __ 3. __" — copier et réciter à 2 (méthode pair japonaise)`,
    ],
    exercices: [
      `Localiser 4 éléments sur une carte muette de Madagascar (nommer + placer une croix)`,
      `Répondre à 4 questions de compréhension sur la leçon (qui/quoi/où/pourquoi)`,
      `Compléter un tableau : lieu — caractéristique — exemple malgache (3 lignes)`,
      `Dessiner un croquis simple de la zone étudiée avec 3 légendes`,
      `Lien avec la vie réelle : "Comment cette réalité géographique influence-t-elle la vie des gens de cette région ?" — répondre en 3 phrases`,
    ],
  };
}

function gen10_TANTARA(topic) {
  if (!topic || topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('TANTARA', '10eme', topic);
  return {
    approche: `Aborder "${topic}" comme une histoire vivante en commençant par des anecdotes ou récits oraux (tradition malgache de l'hira gasy et des contes). Méthode japonaise : chronologie rigoureuse sur une frise visible toute l'année. Méthode nordique : les élèves se demandent "Qu'aurais-je fait à leur place ?" — empathie historique. Méthode chinoise : mémoriser les dates clés par répétition et récitation.`,
    transmission: [
      `Récit oral de l'enseignant (5 min, style conteur) : narrer l'événement "${topic}" avec des détails vivants et des questions rhétoriques pour maintenir l'attention`,
      `Situer sur la frise chronologique murale : coller ou écrire la date/l'événement — les élèves voient le fil du temps`,
      `Questions d'empathie historique (méthode nordique) : "Que ressentais-tu si tu étais un enfant à cette époque ? Qu'aurais-tu fait ?"`,
      `Analyse collective des causes et conséquences : au tableau, compléter un schéma "Causes → Événement → Conséquences"`,
      `Récapitulatif mémorisable : "Les 3 choses essentielles à retenir sur ${topic}" — écrire et réciter en paire`,
    ],
    exercices: [
      `Compléter la fiche chronologique : date, nom de l'événement, lieu, 2 personnages principaux`,
      `Répondre à 4 questions "Qui / Quand / Où / Pourquoi" sur l'événement étudié`,
      `Placer l'événement sur une frise chronologique personnelle dans le cahier`,
      `Rédiger 4 phrases racontant l'événement de mémoire (sans regarder le cours)`,
      `Créer une illustration de l'événement historique (dessin commenté avec date et légende)`,
    ],
  };
}

function gen10_FFMOM(topic) {
  if (!topic || topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('FFMOM', '10eme', topic);
  return {
    approche: `Aborder "${topic}" par une situation-problème tirée de la vie réelle de l'élève. Méthode nordique : le débat bienveillant — chaque opinion est respectée et argumentée (pas de mauvaise réponse, juste des arguments à justifier). Méthode japonaise : résolution collective de la situation problème, toujours en lien avec les valeurs communautaires (harmonie, respect, responsabilité). Méthode chinoise : les règles et valeurs sont formulées clairement, écrites et récitées.`,
    transmission: [
      `Situation-problème (5 min) : une courte histoire ou image illustrant le thème "${topic}" — "Qu'est-ce qui ne va pas ici ? Que faudrait-il faire ?"`,
      `Cercle de parole (méthode nordique) : chaque élève s'exprime en 1 phrase — l'enseignant ne juge pas, recueille toutes les idées`,
      `Discussion guidée : l'enseignant aide à identifier les notions civiques liées (droit, devoir, valeur, règle)`,
      `Jeu de rôle par groupes de 3 : jouer la situation problème puis la résolution positive`,
      `Synthèse collective : "La règle de la semaine" — une phrase formulée ensemble, copiée et affichée en classe`,
    ],
    exercices: [
      `Vrai / Faux : 5 affirmations sur le thème "${topic}" à valider ou corriger avec justification`,
      `Compléter : "J'ai le droit de ___ parce que ___" et "J'ai le devoir de ___ parce que ___"`,
      `Dessiner et légender une scène illustrant le bon comportement civique lié au thème`,
      `Inventer une règle supplémentaire pour améliorer la vie dans la classe liée à "${topic}"`,
      `Présentation orale (30 secondes par élève) : "Pourquoi ${topic} est important pour nous tous"`,
    ],
  };
}

function gen10_HETSIKA(topic) {
  if (!topic || topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('HETSIKA', '10eme', topic);
  return {
    approche: `L'activité manuelle "${topic}" développe la motricité fine, la créativité et le lien avec les savoir-faire malgaches. Méthode japonaise : démonstration lente et précise de l'enseignant avant toute pratique élève — "Montre-moi que tu as bien regardé." Méthode nordique : chaque élève fait à son rythme, l'erreur est permise et fait partie de l'apprentissage. Méthode chinoise : maîtrise technique par la répétition des gestes clés.`,
    transmission: [
      `Présentation des matériaux et outils nécessaires pour "${topic}" — nommer chacun, expliquer sa fonction`,
      `Démonstration complète de l'activité en 1 fois sans s'interrompre (vue d'ensemble, méthode japonaise)`,
      `Décomposition en 4 étapes numérotées : démontrer chaque étape séparément, les élèves répètent en l'air avant de toucher les matériaux`,
      `Pratique guidée par binômes : un fait, l'autre observe et commente — puis on inverse (méthode nordique peer-learning)`,
      `Finalisation individuelle et exposition : afficher les productions au tableau — valoriser la diversité des réalisations`,
    ],
    exercices: [
      `Réaliser l'activité complète étape par étape en suivant les consignes affichées`,
      `Nommer oralement les 4 étapes de réalisation dans le bon ordre`,
      `Écrire un mode opératoire simplifié (4 phrases numérotées) dans le cahier`,
      `Évaluation par les pairs : chaque élève donne un commentaire positif sur la production d'un camarade`,
      `Défi créatif : ajouter un élément décoratif personnel pour personnaliser la production`,
    ],
  };
}

function gen10_ARTS(topic) {
  if (!topic || topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('ARTS', '10eme', topic);
  return {
    approche: `L'éducation musicale "${topic}" développe l'oreille, le sens du rythme et l'expression culturelle. Méthode nordique : la musique est jouée et vécue avant d'être théorisée — le plaisir prime. Méthode japonaise : écoute très attentive avant toute participation, distinguer les éléments musicaux avec précision. Méthode chinoise : mémorisation par répétition rythmée, les paroles et mélodies sont apprises par cœur.`,
    transmission: [
      `Écoute active (méthode japonaise) : jouer ou chanter "${topic}" une fois en entier — les élèves ferment les yeux et écoutent sans parler`,
      `Analyse musicale simple : "Quel est le tempo ? (lent/rapide) Quelle est l'émotion ? Reconnaissez-vous des instruments ?"`,
      `Apprentissage phrase par phrase : l'enseignant chante une phrase, les élèves répètent immédiatement — 3 fois par phrase (méthode chinoise echo-répétition)`,
      `Ajout du rythme corporel : frapper dans les mains, sur les genoux ou les tables pour marquer le tempo et les temps forts`,
      `Interprétation collective expressive : chanter en entier avec le geste, les yeux ouverts, en s'adressant au public imaginaire (mise en scène nordique)`,
    ],
    exercices: [
      `Chanter "${topic}" en chœur sans aide de l'enseignant — noter l'effort de mémorisation`,
      `Battre le rythme (frapper) pendant que les autres chantent — alterner rôles`,
      `Créer 2 mesures de variation : changer une note ou une parole et l'expliquer`,
      `Chanter la chanson en solo ou en duo devant la classe (évaluation de performance bienveillante)`,
      `Dessiner dans le cahier l'émotion ou la scène évoquée par la chanson "${topic}"`,
    ],
  };
}

function gen10_SARY(topic) {
  if (!topic || topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('SARY', '10eme', topic);
  return {
    approche: `L'activité artistique "${topic}" développe l'observation, la motricité fine et la créativité culturelle. Méthode japonaise : observer longuement le modèle avant de dessiner — "Vois avant de faire." Méthode nordique : liberté de style, aucun résultat n'est "raté", valoriser l'originalité et l'effort. Méthode chinoise : maîtriser les techniques de base (trait, proportion, couleur) par pratique répétée.`,
    transmission: [
      `Observation silencieuse du modèle ou de la consigne "${topic}" pendant 2 minutes — les élèves mémorisent les formes principales avant de dessiner`,
      `Décomposition du dessin en formes simples : "Ce paysage commence par un rectangle pour le ciel, un triangle pour la montagne..." (méthode étapes de base)`,
      `Démonstration au tableau étape par étape — les élèves tracent en même temps dans l'air, puis sur papier`,
      `Phase d'exécution individuelle : l'enseignant circule, encourage, n'efface pas mais guide par des questions ("Que veux-tu montrer ici ?")`,
      `Valorisation collective : afficher toutes les productions, chaque élève dit 1 chose qu'il aime dans son dessin (méthode nordique d'auto-bienveillance)`,
    ],
    exercices: [
      `Réaliser le dessin complet suivant les étapes démontrées`,
      `Colorier avec les couleurs appropriées au thème — nommer les couleurs utilisées`,
      `Légender son dessin avec 3 mots-clés en malgache et en français`,
      `Présenter son dessin en 3 phrases : "J'ai dessiné ___, j'ai utilisé ___, j'ai choisi cette couleur parce que___"`,
      `Regarder le dessin d'un camarade et écrire 1 compliment constructif (méthode d'évaluation positive)`,
    ],
  };
}

function gen10_EPS(topic) {
  if (!topic || topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('EPS', '10eme', topic);
  return {
    approche: `La séance d'EPS "${topic}" développe les habiletés motrices, la coopération et le plaisir du mouvement. Méthode nordique : priorité au plaisir et à l'inclusion — aucun élève n'est mis en échec public. Méthode japonaise : structure rigoureuse (échauffement → technique → jeu → retour au calme) et respect absolu des règles et de l'arbitre. Méthode chinoise : maîtrise technique progressive par répétition, excellence collective.`,
    transmission: [
      `Échauffement spécifique (5 min) : activité cardio + mobilisation des articulations utilisées dans "${topic}"`,
      `Démonstration de la technique (méthode japonaise) : l'enseignant montre en entier, puis en ralenti, puis demande "Qu'avez-vous observé ?"`,
      `Pratique par ateliers rotatifs (4 groupes × 4 min) : chaque atelier travaille un aspect de la technique avec un défi adapté`,
      `Jeu collectif ou match : appliquer en situation réelle — arbitrage par rotation d'élèves (responsabilisation)`,
      `Retour au calme et bilan (3 min) : étirements silencieux + "Qu'est-ce que j'ai appris aujourd'hui ?" — chaque élève répond en 1 mot`,
    ],
    exercices: [
      `Réaliser le geste technique de base de "${topic}" 6 fois correctement en situation isolée`,
      `Exercice en binôme ou en groupe : appliquer la technique en coopération`,
      `Défi personnel : se fixer un objectif mesurable (ex: "Je veux lancer à 3 mètres") et l'atteindre`,
      `Arbitrer un échange ou un jeu pendant 5 minutes — observer et appliquer les règles`,
      `Nommer oralement 3 bienfaits de cette activité sur la santé (lien avec les sciences)`,
    ],
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// GÉNÉRATEURS PAR MATIÈRE — 8ème (9-10 ans)
// Programme officiel RAPS Madagascar 2025-2026
// ═══════════════════════════════════════════════════════════════════════════════

function gen8_MALAGASY(topic) {
  if (!topic || topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('MALAGASY', '8eme', topic);
  return {
    approche: `Enseigner "${topic}" par la méthode active de lecture analytique : texte support → compréhension orale → analyse linguistique → production. Les élèves de 8ème peuvent lire seul et analyser des structures simples. Partir toujours d'un texte authentique lié à la vie malgache.`,
    transmission: [
      `Afficher le texte support au tableau — lecture silencieuse individuelle (3 min), les élèves notent les mots inconnus`,
      `Lecture expressive à voix haute par l'enseignant, puis par 2 élèves — travailler l'intonation et la fluidité`,
      `Questions de compréhension globale : "De quoi parle ce texte ? Qui sont les personnages ? Que se passe-t-il ?"`,
      `Focaliser sur le thème linguistique "${topic}" : identifier les exemples dans le texte, formuler la règle ensemble`,
      `Exercice guidé collectif : construire 3 phrases au tableau en appliquant la règle`,
    ],
    exercices: [
      `Répondre à 5 questions de compréhension sur le texte support (phrases complètes)`,
      `Appliquer la règle grammaticale : transformer ou compléter 6 phrases selon le modèle`,
      `Trouver 4 exemples de la notion dans un nouveau texte court`,
      `Production écrite : rédiger un court paragraphe (6-8 lignes) utilisant la structure étudiée`,
    ],
  };
}

function gen8_FRANÇAIS(topic) {
  if (!topic || topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('FRANÇAIS', '8eme', topic);
  return {
    approche: `Aborder "${topic}" à travers un texte court et vivant (lettre, extrait de roman, dialogue) lié au contexte malgache. En 8ème, les élèves peuvent analyser un texte et produire un court paragraphe structuré. Alterner compréhension (texte→idées) et production (idées→texte).`,
    transmission: [
      `Lecture du texte support par l'enseignant (expressivité) puis lecture individuelle silencieuse`,
      `Questions de compréhension : reformuler l'idée principale, identifier les personnages/lieux/actions`,
      `Focus lexical : relever les mots liés au thème "${topic}", les définir avec les élèves, les noter au tableau`,
      `Point de grammaire ou d'orthographe ciblé : règle illustrée par 3 exemples progressifs (facile → difficile)`,
      `Production guidée : rédiger 3 à 5 phrases utilisant le vocabulaire et la structure grammaticale du jour`,
    ],
    exercices: [
      `Questions de compréhension sur le texte (5 questions, réponses en phrases complètes)`,
      `Exercice de vocabulaire : employer 5 mots nouveaux dans des phrases originales`,
      `Exercice de grammaire : transformer, compléter ou corriger 5 phrases selon la règle`,
      `Rédaction courte : 8 à 10 lignes sur un sujet lié au thème, avec plan simple (introduction–développement–conclusion)`,
    ],
  };
}

function gen8_ARITHMÉTIQUE(topic) {
  if (!topic || topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('ARITHMÉTIQUE', '8eme', topic);
  return {
    approche: `Enseigner "${topic}" en 3 phases : situation concrète de la vie malgache → modélisation → abstraction. En 8ème, les élèves peuvent raisonner par étapes et expliquer leur démarche. Valoriser les stratégies de calcul différentes. Insister sur la compréhension du sens avant la procédure mécanique.`,
    transmission: [
      `Problème-déclencheur au tableau : situation réelle (marché, rizière, budget) impliquant "${topic}" — 3 min de réflexion individuelle`,
      `Partage des stratégies : 2 ou 3 élèves présentent leur approche au tableau — la classe identifie les points communs`,
      `Formalisation de la notion : définition, règle ou formule — exemples progressifs (numérique simple → numérique complexe → problème contextuel)`,
      `Exercices guidés collectifs : 3 exemples résolus ensemble en expliquant chaque étape à voix haute`,
      `Calcul mental (5 min) : 10 mini-calculs liés à "${topic}" — rapidité et automatisation`,
    ],
    exercices: [
      `6 exercices d'application directe sur "${topic}" (calcul posé ou mental)`,
      `Problème de la vie courante à Madagascar : 2 étapes, rédiger la démarche complète`,
      `Calcul mental : 8 calculs rapides liés à la notion — se chronométrer`,
      `Problème ouvert : "Avec 15 000 Ar, combien peut-on acheter de..." — raisonner et justifier`,
    ],
  };
}

function gen8_GÉOMÉTRIE(topic) {
  if (!topic || topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('GÉOMÉTRIE', '8eme', topic);
  return {
    approche: `Aborder "${topic}" par l'observation et la manipulation avant la formalisation. En 8ème, les élèves utilisent règle, équerre, rapporteur et compas. Partir d'objets réels de la classe, puis abstraire. Insister sur la précision des tracés et la vérification des propriétés.`,
    transmission: [
      `Ancrage concret : trouver dans la classe 3 objets ayant la forme ou la propriété de "${topic}"`,
      `Observation et analyse : quelles caractéristiques distinguent cette figure ? (côtés, angles, symétries)`,
      `Présentation formelle au tableau : définition, propriétés, formules (périmètre/aire/volume selon le sujet)`,
      `Construction guidée pas à pas : l'enseignant trace en commentant, les élèves reproduisent avec instruments`,
      `Vérification collective : mesurer et confirmer que les propriétés sont respectées dans les constructions des élèves`,
    ],
    exercices: [
      `Reconnaître et nommer "${topic}" parmi 10 figures mélangées — justifier le choix`,
      `Construire 2 exemples de "${topic}" avec les instruments, en respectant des dimensions données`,
      `Calculer périmètre, surface ou volume selon les formules apprises (3 exercices)`,
      `Problème d'application : "Le terrain de sport mesure... Quelle est sa surface ? Son périmètre ?" `,
    ],
  };
}

function gen8_MESURE(topic) {
  if (!topic || topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('MESURE', '8eme', topic);
  return {
    approche: `Enseigner "${topic}" par la mesure réelle d'objets de la classe ou de l'école. En 8ème, les élèves maîtrisent les conversions courantes et résolvent des problèmes à 1 ou 2 étapes. Relier les mesures à des situations concrètes malgaches (marché, champ, cuisine).`,
    transmission: [
      `Activité d'estimation : les élèves estiment la mesure de 5 objets avant de mesurer réellement — comparer les écarts`,
      `Présenter l'unité de "${topic}" et le tableau de conversion — le copier dans le cahier avec des exemples`,
      `Comptine ou phrase-repère mémorisable pour retenir l'ordre des unités et les facteurs de conversion`,
      `Exercices guidés collectifs : 3 conversions résolues ensemble, en montrant le passage par le tableau d'unités`,
      `Problème concret : résoudre un problème mettant en jeu plusieurs unités de mesure de la même grandeur`,
    ],
    exercices: [
      `Convertir : 6 exercices de conversion dans les unités de "${topic}" (sens ascendant et descendant)`,
      `Estimer, puis mesurer 4 objets réels — noter et comparer estimation/réalité`,
      `Problème à 2 étapes : calcul impliquant des conversions et des opérations arithmétiques`,
      `Tableau à compléter : donner la même mesure exprimée en différentes unités`,
    ],
  };
}

function gen8_CU(topic) {
  if (!topic || topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('CU', '8eme', topic);
  return {
    approche: `Enseigner "${topic}" par la démarche d'observation scientifique. En 8ème, les élèves peuvent faire des liens de causalité et comprendre les mécanismes biologiques simples. Observer → questionner → expliquer → appliquer (hygiène, prévention). Relier chaque leçon à la santé quotidienne à Madagascar.`,
    transmission: [
      `Accroche : question déclenchante ou observation sur "${topic}" — "Que savez-vous déjà ? Qu'avez-vous vu ?"`,
      `Observation : schéma agrandi, spécimen réel ou image de grande taille — les élèves décrivent ce qu'ils voient`,
      `Explication structurée : anatomie/classification/fonctionnement/utilité — schéma légendé au tableau`,
      `Lien pratique : "Qu'est-ce que cela change pour notre hygiène ou notre santé au quotidien ?"`,
      `Synthèse en 5 points : les élèves reformulent les idées clés, l'enseignant confirme et enrichit`,
    ],
    exercices: [
      `Légender un schéma muet de "${topic}" avec les 6 termes vus en classe`,
      `Répondre à 5 questions de compréhension (définition, rôle, localisation, maladie associée)`,
      `Classer ou trier : associer chaque terme à sa catégorie (6 éléments)`,
      `Rédiger 6 lignes décrivant "${topic}" sans regarder le cours (reformulation de mémoire)`,
    ],
  };
}

function gen8_GÉOGRAPHIE(topic) {
  if (!topic || topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('GÉOGRAPHIE', '8eme', topic);
  return {
    approche: `Enseigner "${topic}" en liant la carte à la réalité vécue. En 8ème, les élèves lisent une carte simple et identifient des éléments géographiques. Partir de l'expérience locale (leur région, leur ville) pour aller vers Madagascar et le monde. Valoriser les ressources et les défis propres à l'île.`,
    transmission: [
      `Observation de carte ou d'image : identifier 3 éléments connus avant toute explication`,
      `Ancrage local : "Où habitez-vous ? Quelle caractéristique géographique connaissez-vous près de chez vous ?"`,
      `Exposé illustré (8 min) : présenter "${topic}" avec carte, données chiffrées et exemples de Madagascar`,
      `Légender ensemble une carte muette au tableau — les élèves recopient avec leur propre légende dans le cahier`,
      `Synthèse : 3 points essentiels à retenir, copiés et récités à voix haute`,
    ],
    exercices: [
      `Localiser et nommer 5 éléments sur une carte muette de Madagascar`,
      `Répondre à 5 questions de compréhension sur la leçon`,
      `Compléter un tableau : lieu — caractéristique — importance pour Madagascar`,
      `Rédiger 5 lignes expliquant comment "${topic}" influence la vie des Malgaches`,
    ],
  };
}

function gen8_TANTARA(topic) {
  if (!topic || topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('TANTARA', '8eme', topic);
  return {
    approche: `Enseigner "${topic}" comme une histoire vivante. En 8ème, les élèves peuvent situer des événements sur une frise et comprendre des liens de causalité simples. Partir des traditions orales malgaches, situer sur la frise chronologique murale, relier le passé au présent et à l'identité malgache.`,
    transmission: [
      `Récit oral de l'enseignant (5 min) : narrer "${topic}" de façon vivante avec des détails concrets et des questions pour maintenir l'attention`,
      `Situer sur la frise chronologique : date, période, place par rapport aux autres événements connus`,
      `Analyse des causes et conséquences : compléter ensemble un schéma "Avant → Événement → Après"`,
      `Questions d'empathie historique : "Que ressentirais-tu à cette époque ? Qu'aurais-tu fait ?"`,
      `Synthèse mémorisable : "3 choses essentielles à retenir sur ${topic}" — écrire et répéter`,
    ],
    exercices: [
      `Compléter la fiche chronologique : date, événement, lieu, 2 personnages`,
      `Répondre à 5 questions : qui, quand, où, pourquoi, quelles conséquences`,
      `Placer l'événement sur la frise chronologique personnelle du cahier`,
      `Rédiger un résumé de 6 lignes sur "${topic}" de mémoire`,
    ],
  };
}

function gen8_FFMOM(topic) {
  if (!topic || topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('FFMOM', '8eme', topic);
  return {
    approche: `Aborder "${topic}" par une situation-problème réelle de la vie communautaire malgache. En 8ème, les élèves peuvent débattre, argumenter et proposer des solutions. Valoriser les valeurs de solidarité, de respect et de responsabilité propres à la culture malgache (Fihavanana).`,
    transmission: [
      `Situation-problème : une courte histoire ou image illustrant le thème "${topic}" — "Que se passe-t-il ? Que faudrait-il faire ?"`,
      `Débat guidé : chaque élève s'exprime en 1 phrase avec une justification — l'enseignant recueille sans juger`,
      `Formalisation des notions civiques : droits, devoirs, valeurs, institutions liés à "${topic}"`,
      `Jeu de rôle par groupes de 3 : jouer la situation-problème puis la résolution positive`,
      `"La règle de la semaine" : formulée ensemble, copiée et affichée dans la classe`,
    ],
    exercices: [
      `Vrai/Faux : 5 affirmations sur "${topic}" à valider ou corriger avec justification`,
      `Compléter : "J'ai le droit de ___ parce que ___" et "J'ai le devoir de ___ parce que ___"`,
      `Rédiger un court texte argumenté (8 lignes) : "Pourquoi ${topic} est-il important ?"`,
      `Créer une affiche avec un slogan et un dessin sur le thème civique de la semaine`,
    ],
  };
}

function gen8_ANGLAIS(topic) {
  if (!topic || topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('ANGLAIS', '8eme', topic);
  return {
    approche: `Introduire "${topic}" à travers des situations de communication concrètes et des jeux de rôle. En 8ème, les élèves apprennent l'anglais principalement à l'oral — prioriser la communication avant la grammaire formelle. Utiliser images, gestes et répétitions rythmées (méthode TPR — Total Physical Response).`,
    transmission: [
      `Mise en situation : afficher une image illustrant "${topic}" — les élèves devinent le thème en français puis apprennent le mot anglais`,
      `Présentation du vocabulaire cible (5-7 mots/phrases) : l'enseignant dit, les élèves répètent en chœur 3 fois avec geste associé`,
      `Dialogue modèle court (4-6 répliques) joué par l'enseignant + 1 élève, puis répété par 3 paires d'élèves`,
      `Jeu de mémorisation : "Simon dit" (Simon says) ou "Vrai/Faux" avec les mots appris`,
      `Copie dans le cahier : le vocabulaire avec traduction malgache et française + 1 phrase modèle`,
    ],
    exercices: [
      `Associer 5 images aux 5 mots anglais appris — relier et copier le mot sous l'image`,
      `Compléter le dialogue à trous (4 répliques) en choisissant parmi les mots appris`,
      `Produire 3 phrases courtes en anglais sur le thème de la semaine`,
      `Jeu de rôle par paires : reproduire un mini-dialogue en anglais devant la classe (3 répliques chacun)`,
    ],
  };
}

function gen8_EPS(topic) {
  if (!topic || topic.startsWith('Révision') || topic.startsWith('Bilan')) return genRevision('EPS', '8eme', topic);
  return {
    approche: `La séance d'EPS "${topic}" développe la maîtrise technique, l'esprit d'équipe et le fair-play. En 8ème, les élèves peuvent comprendre des règles complexes et se fixer des objectifs de performance. Structure : échauffement → apprentissage technique → jeu/compétition → retour au calme et bilan.`,
    transmission: [
      `Échauffement spécifique à "${topic}" (5 min) : cardio + mobilisation des articulations sollicitées`,
      `Présentation et démonstration du geste ou de la règle technique par l'enseignant`,
      `Ateliers pratiques par groupes de 4 (3 ateliers × 5 min) : chaque atelier travaille un aspect différent`,
      `Match ou épreuve en situation réelle : application des techniques et respect des règles — arbitrage par rotation`,
      `Retour au calme (3 min) + bilan oral : "Qu'est-ce que j'ai appris ? Qu'est-ce que je dois améliorer ?"`,
    ],
    exercices: [
      `Réaliser le geste technique de base 8 fois en situation isolée (précision et régularité)`,
      `Exercice en binôme ou équipe : appliquer la technique en situation d'opposition ou de coopération`,
      `Se fixer un objectif mesurable et tenter de l'atteindre (ex : "3 paniers en 5 essais")`,
      `Évaluation orale : nommer 3 règles du jeu et 2 points techniques travaillés pendant la séance`,
    ],
  };
}

// ─── Révision générique ───────────────────────────────────────────────────────

function genRevision(matiere, classe, topic) {
  const niveauLabel = classe.replace(/(\d+)eme$/, '$1ème');
  return {
    approche: `Semaine de révision de ${matiere} en ${niveauLabel}. Identifier avec les élèves les notions qui semblent les moins maîtrisées avant de réviser systématiquement. Utiliser des exercices variés pour maintenir l'engagement.`,
    transmission: [
      `Bilan oral collectif : "Qu'est-ce qu'on a appris cette période en ${matiere} ?"`,
      `Revoir les points faibles identifiés avec de nouveaux exemples`,
      `Jeu de révision : quiz, flashcards ou bingo des notions`,
      `Correction collective des erreurs les plus fréquentes`,
    ],
    exercices: [
      `Exercice de synthèse couvrant les 3 notions principales de la période`,
      `Devinettes ou QCM de 10 questions sur toutes les leçons`,
      `Reformuler de mémoire 3 définitions ou règles clés`,
      `Mini-évaluation formative : 5 exercices variés pour identifier les lacunes`,
    ],
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONSTRUCTION DES DONNÉES
// ═══════════════════════════════════════════════════════════════════════════════

function buildEntries11eme(sem) {
  return [
    { matiere: 'MALAGASY',  topic: sem.lettre,    ...gen11_MALAGASY(sem.lettre) },
    { matiere: 'FRANÇAIS',  topic: sem.fr,         ...gen11_FRANÇAIS(sem.fr) },
    { matiere: 'KAJY',      topic: sem.kajy,       ...gen11_KAJY(sem.kajy) },
    { matiere: 'FFMOM',     topic: sem.ffmom,      ...gen11_FFMOM(sem.ffmom) },
    { matiere: 'HETSIKA',   topic: sem.hetsika,    ...gen11_HETSIKA(sem.hetsika) },
    { matiere: 'TSIANJERY', topic: sem.tsianjery,  ...gen11_TSIANJERY(sem.tsianjery) },
    { matiere: 'ARTS',      topic: sem.arts,       ...gen11_ARTS(sem.arts) },
    { matiere: 'SARY',      topic: sem.sary,       ...gen11_SARY(sem.sary) },
    { matiere: 'EPS',       topic: sem.eps,        ...gen11_EPS(sem.eps) },
  ].filter(e => e.topic);
}

function buildEntries7eme(sem) {
  const malaDesc = [sem.mala_theme, sem.mala_litera].filter(Boolean).join(' — ');
  return [
    { matiere: 'MALAGASY',   topic: malaDesc,       ...gen7_MALAGASY(malaDesc) },
    { matiere: 'CALCUL',     topic: sem.calc,       ...gen7_CALCUL(sem.calc) },
    { matiere: 'FRANÇAIS',   topic: sem.fr,         ...gen7_FRANÇAIS(sem.fr) },
    { matiere: 'TANTARA',    topic: sem.tantara,    ...gen7_TANTARA(sem.tantara) },
    { matiere: 'GÉOGRAPHIE', topic: sem.geo,        ...gen7_GÉOGRAPHIE(sem.geo) },
    { matiere: 'CU',         topic: sem.cu,         ...gen7_CU(sem.cu) },
    { matiere: 'FFMOM',      topic: sem.ffmom,      ...gen7_FFMOM(sem.ffmom) },
    { matiere: 'HETSIKA',    topic: sem.hetsika,    ...gen7_HETSIKA(sem.hetsika) },
    { matiere: 'ARTS',       topic: sem.arts,       ...gen7_ARTS(sem.arts) },
    { matiere: 'SARY',       topic: sem.sary,       ...gen7_SARY(sem.sary) },
    { matiere: 'EPS',        topic: sem.eps,        ...gen7_EPS(sem.eps) },
  ].filter(e => e.topic);
}

function buildEntries10eme(sem) {
  const malaDesc = [sem.mala_theme, sem.mala_litera].filter(Boolean).join(' — ');
  // French topic: explicit field or derived from weekly theme
  const frTopic = sem.fr || (
    sem.theme && !sem.theme.startsWith('Bilan') && !sem.theme.startsWith('Révision')
      ? `Vocabulaire et expression orale : ${sem.theme}`
      : sem.theme
  );
  return [
    { matiere: 'MALAGASY',    topic: malaDesc,        ...gen10_MALAGASY(malaDesc) },
    { matiere: 'FRANÇAIS',    topic: frTopic,          ...gen10_FRANÇAIS(frTopic) },
    { matiere: 'ARITHMÉTIQUE',topic: sem.arith,        ...gen10_ARITHMÉTIQUE(sem.arith) },
    { matiere: 'MESURE',      topic: sem.mesure,       ...gen10_MESURE(sem.mesure) },
    { matiere: 'GÉOMÉTRIE',   topic: sem.geom,         ...gen10_GÉOMÉTRIE(sem.geom) },
    { matiere: 'PROBLÈME',    topic: sem.probleme,     ...gen10_PROBLÈME(sem.probleme) },
    { matiere: 'SCIENCES',    topic: sem.sci,          ...gen10_SCIENCES(sem.sci) },
    { matiere: 'GÉOGRAPHIE',  topic: sem.geo,          ...gen10_GÉOGRAPHIE(sem.geo) },
    { matiere: 'TANTARA',     topic: sem.tantara,      ...gen10_TANTARA(sem.tantara) },
    { matiere: 'FFMOM',       topic: sem.ffmom,        ...gen10_FFMOM(sem.ffmom) },
    { matiere: 'HETSIKA',     topic: sem.hetsika,      ...gen10_HETSIKA(sem.hetsika) },
    { matiere: 'ARTS',        topic: sem.arts,         ...gen10_ARTS(sem.arts) },
    { matiere: 'SARY',        topic: sem.sary,         ...gen10_SARY(sem.sary) },
    { matiere: 'EPS',         topic: sem.eps,          ...gen10_EPS(sem.eps) },
  ].filter(e => e.topic);
}

function buildEntries8eme(sem) {
  const malaDesc = [sem.mala_theme, sem.mala_litera].filter(Boolean).join(' — ');
  return [
    { matiere: 'MALAGASY',     topic: malaDesc,   ...gen8_MALAGASY(malaDesc) },
    { matiere: 'FRANÇAIS',     topic: sem.fr,     ...gen8_FRANÇAIS(sem.fr) },
    { matiere: 'ARITHMÉTIQUE', topic: sem.arith,  ...gen8_ARITHMÉTIQUE(sem.arith) },
    { matiere: 'GÉOMÉTRIE',    topic: sem.geom,   ...gen8_GÉOMÉTRIE(sem.geom) },
    { matiere: 'MESURE',       topic: sem.sm,     ...gen8_MESURE(sem.sm) },
    { matiere: 'CU',           topic: sem.cu,     ...gen8_CU(sem.cu) },
    { matiere: 'GÉOGRAPHIE',   topic: sem.geo,    ...gen8_GÉOGRAPHIE(sem.geo) },
    { matiere: 'TANTARA',      topic: sem.tantara,...gen8_TANTARA(sem.tantara) },
    { matiere: 'FFMOM',        topic: sem.ffmom,  ...gen8_FFMOM(sem.ffmom) },
    { matiere: 'ANGLAIS',      topic: sem.anglais,...gen8_ANGLAIS(sem.anglais) },
    { matiere: 'EPS',          topic: sem.eps,    ...gen8_EPS(sem.eps) },
  ].filter(e => e.topic);
}

function buildEntries9eme(sem)      { return sem.matieres || []; }
function buildEntries12eme(sem)     { return sem.matieres || []; }
function buildEntriesGarderie(sem)  { return sem.matieres || []; }

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

  console.log(`\n✨ Terminé — ${ok}/${total} semaines insérées (${skip} ignorées)\n`);
  await prisma.$disconnect();
}

main().catch(async err => {
  console.error(err);
  await prisma.$disconnect();
  process.exit(1);
});
