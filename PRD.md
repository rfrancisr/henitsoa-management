# PRD — Système de Gestion Scolaire (EcoleManager)

> Version 1.0 — MVP | Date : 2026-06-19  
> Statut : **Brouillon pour validation**

---

## 1. Contexte et objectifs

### 1.1 Contexte

Un établissement scolaire (~800 élèves, ~30 enseignants) a besoin d'une solution numérique centralisée pour :
- gérer les dossiers élèves
- permettre aux enseignants de saisir les notes
- produire des bulletins scolaires
- gérer le calendrier de l'école
- permettre aux parents de consulter les résultats de leurs enfants

### 1.2 Objectif du MVP

Livrer en **4 à 6 semaines** une application web fonctionnelle, en français, auto-hébergée sur VPS, à coût minimal, couvrant le cycle complet : inscription d'un élève → affectation à une classe → saisie des notes par l'enseignant → consultation du bulletin.

### 1.3 Hors-périmètre MVP

- Gestion des absences (phase 2)
- Messagerie interne (phase 2)
- Application mobile native (phase 3)
- Comptabilité / frais de scolarité (phase 3)
- Multi-établissements (phase 3)

---

## 2. Utilisateurs (Personas)

| Rôle | Description | Accès principal |
|---|---|---|
| **Administrateur** | Gère l'ensemble du système, crée les comptes | Tout |
| **Directeur** | Supervise, consulte les statistiques, gère les classes et matières | Lecture + supervision |
| **Enseignant** | Saisit les notes des élèves dans sa/ses classe(s) | Saisie notes de ses classes |
| **Parent** | Consulte les bulletins et le calendrier de son/ses enfant(s) | Lecture seule |

---

## 3. Fonctionnalités MVP

### 3.1 Gestion des utilisateurs et authentification

- **F-01** : Connexion email + mot de passe pour tous les rôles
- **F-02** : L'administrateur crée et désactive les comptes (aucune inscription publique)
- **F-03** : Réinitialisation du mot de passe par lien email
- **F-04** : Sessions sécurisées avec expiration (JWT / cookies HttpOnly)

### 3.2 Gestion des élèves

- **F-10** : Créer, modifier et archiver le profil d'un élève :
  - Nom, prénom, date de naissance, sexe
  - Adresse complète
  - Photo (optionnelle)
  - Lien vers le(s) compte(s) parent(s)
- **F-11** : Affectation d'un élève à une classe pour une année scolaire
- **F-12** : Recherche et filtrage des élèves (nom, classe, niveau)
- **F-13** : Historique des classes par année scolaire (un élève conserve ses données d'une année à l'autre)

### 3.3 Structure pédagogique

- **F-20** : Gestion des niveaux scolaires (ex. : 6ème, 5ème… ou Terminale A, B…)
- **F-21** : Gestion des classes (ex. : 6ème A, 6ème B)
- **F-22** : Gestion des matières avec coefficient par niveau
- **F-23** : Affectation d'un enseignant à une ou plusieurs matières/classes
- **F-24** : Gestion des périodes d'évaluation (trimestres ou semestres), configurables par l'administrateur

### 3.4 Saisie et gestion des notes

- **F-30** : L'enseignant voit uniquement les classes et matières qui lui sont affectées
- **F-31** : Saisie de notes (0 à 20) par élève, par matière, par période
- **F-32** : Possibilité d'ajouter un commentaire libre par note
- **F-33** : Modification d'une note avant clôture de la période
- **F-34** : Clôture de période par le directeur/administrateur (notes verrouillées)
- **F-35** : Calcul automatique de la moyenne par matière, par période et générale (pondérée par coefficients)
- **F-36** : Appréciation globale saisie par l'enseignant principal par élève et par période

### 3.5 Bulletin scolaire (PDF)

- **F-40** : Génération d'un bulletin PDF par élève et par période
- **F-41** : Contenu du bulletin :
  - En-tête avec logo/nom de l'école
  - Informations élève (nom, classe, année scolaire)
  - Tableau des notes : matière, coefficient, note, moyenne de la classe, appréciation enseignant
  - Moyenne générale pondérée, rang dans la classe
  - Appréciation du conseil de classe
  - Mention (Félicitations / Encouragements / Aucune), configurable par seuil
- **F-42** : Téléchargement individuel (parent, directeur) et export groupé (toute la classe) pour l'administrateur/directeur

### 3.6 Calendrier scolaire

- **F-50** : Affichage d'un calendrier mensuel avec les événements
- **F-51** : Création/modification/suppression d'événements par l'administrateur/directeur (ex. : conseil de classe, examens, vacances, réunions parents)
- **F-52** : Visibilité des événements pour tous les rôles (parents inclus)
- **F-53** : Indication des périodes d'évaluation dans le calendrier

### 3.7 Tableau de bord

- **Admin/Directeur** : statistiques générales (nb élèves par classe, moyennes par niveau, taux de saisie des notes)
- **Enseignant** : ses classes en cours, avancement de la saisie des notes
- **Parent** : résumé des dernières notes et prochains événements du calendrier

---

## 4. Règles métier critiques

| # | Règle |
|---|---|
| R-01 | Un enseignant ne peut accéder qu'aux données des classes/matières qui lui sont affectées |
| R-02 | Un parent ne peut consulter que les données de ses propres enfants |
| R-03 | Les notes sont verrouillées après clôture d'une période (seul l'admin peut forcer une réouverture) |
| R-04 | La moyenne générale est calculée en pondérant par les coefficients des matières |
| R-05 | Un élève ne peut être affecté qu'à une seule classe par année scolaire |
| R-06 | Les données personnelles des élèves (mineurs) doivent être protégées et non accessibles publiquement |

---

## 5. Exigences non-fonctionnelles

| Catégorie | Exigence |
|---|---|
| **Langue** | Interface 100 % en français |
| **Performance** | Chargement des pages < 2 s, génération PDF < 5 s |
| **Sécurité** | HTTPS obligatoire, mots de passe hachés (bcrypt), pas d'exposition des ID élèves en URL |
| **Disponibilité** | 99 % uptime (hors maintenance planifiée) |
| **Sauvegarde** | Sauvegarde automatique quotidienne de la base de données |
| **Navigateurs** | Chrome, Firefox, Safari, Edge — 2 dernières versions |
| **Responsive** | Utilisable sur tablette (enseignants en salle) et mobile (parents) |

---

## 6. Stack technique recommandée

### 6.1 Justification des choix

> **Contraintes** : livraison rapide, coût minimal, auto-hébergement VPS, SQLite acceptable.

### 6.2 Stack retenue

```
┌─────────────────────────────────────────────────────────┐
│                        VPS (Hetzner CX22 ~6€/mois)      │
│                                                         │
│   ┌──────────────┐        ┌─────────────────────────┐   │
│   │   Nginx       │◄──────│   Next.js 15 (App Router)│  │
│   │  (reverse     │       │   + React 19             │  │
│   │   proxy +     │       │   Tailwind CSS           │  │
│   │   TLS)        │       │   shadcn/ui              │  │
│   └──────────────┘       └───────────┬─────────────┘   │
│                                      │                   │
│                          ┌───────────▼─────────────┐    │
│                          │   Prisma ORM             │    │
│                          │   (SQLite WAL mode)      │    │
│                          └───────────┬─────────────┘    │
│                                      │                   │
│                          ┌───────────▼─────────────┐    │
│                          │   ecolemanager.db         │   │
│                          │   (SQLite)                │   │
│                          └─────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
```

| Couche | Technologie | Raison |
|---|---|---|
| **Framework full-stack** | Next.js 15 (App Router) | Server Actions = pas d'API à écrire séparément, TDK SEO inutile ici mais rendu serveur rapide, excellent DX |
| **UI** | Tailwind CSS + shadcn/ui | Composants accessibles, entièrement personnalisables, pas de dépendance lourde |
| **Auth** | NextAuth.js v5 (Auth.js) | S'intègre nativement à Next.js, credentials provider, sessions JWT ou base de données |
| **ORM** | Prisma | Schéma déclaratif, migrations automatiques, supporte SQLite parfaitement |
| **Base de données** | SQLite (WAL mode) | Zéro serveur, fichier unique, 800 élèves = ~50 MB max, WAL gère la concurrence en lecture |
| **PDF** | Puppeteer (headless Chrome) | Rendu HTML→PDF fidèle, permet d'utiliser Tailwind pour le bulletin |
| **Email** | Nodemailer + SMTP | Réinitialisation de mot de passe, alertes — configurable avec Brevo/Mailjet (gratuit jusqu'à 300/j) |
| **Calendrier UI** | FullCalendar (React) | Bibliothèque complète, gratuite, support français natif |
| **Déploiement** | Docker Compose + Nginx + Certbot | Reproductible, simple à maintenir, HTTPS automatique avec Let's Encrypt |
| **VPS recommandé** | Hetzner CX22 (3 vCPU, 4 GB RAM) | ~6 €/mois, datacenter EU (conformité données), très fiable |

### 6.3 Schéma de base de données simplifié

```
User (id, email, passwordHash, role, nom, prenom, createdAt)
Eleve (id, nom, prenom, dateNaissance, sexe, adresse, photo, createdAt)
Parent (userId FK, eleveId FK)  ← table de liaison
AnneeScolaire (id, libelle, dateDebut, dateFin, active)
Niveau (id, libelle, ordre)
Classe (id, niveauId FK, libelle, anneeScolaireId FK)
EleveClasse (eleveId FK, classeId FK, anneeScolaireId FK)  ← affectation
Matiere (id, libelle, niveauId FK, coefficient)
Enseignement (userId FK, matiereId FK, classeId FK)  ← qui enseigne quoi à qui
PeriodeEvaluation (id, libelle, type [trimestre|semestre], dateDebut, dateFin, close, anneeScolaireId FK)
Note (id, eleveId FK, matiereId FK, periodeId FK, valeur, commentaire, createdBy FK)
AppreciationClasse (eleveId FK, classeId FK, periodeId FK, texte, mention)
EvenementCalendrier (id, titre, description, dateDebut, dateFin, type, createdBy FK)
```

### 6.4 Pourquoi pas PostgreSQL d'emblée ?

SQLite en WAL mode supporte sans problème :
- Lectures concurrentes illimitées
- Écritures concurrentes faibles (quelques dizaines de requêtes/s suffisent)
- À 800 élèves, 30 enseignants, le pic de charge est la saisie de notes en fin de trimestre

La migration SQLite → PostgreSQL avec Prisma est une opération de 2 heures si l'école grandit. On optimise pour la simplicité maintenant.

---

## 7. Architecture des rôles et permissions

```
ADMIN
 └── Tout faire (CRUD complet sur toutes les entités)

DIRECTEUR
 └── Lire tout
 └── Créer/modifier classes, niveaux, matières, affectations
 └── Clore une période d'évaluation
 └── Générer/exporter bulletins
 └── Gérer calendrier

ENSEIGNANT
 └── Lire la liste de ses élèves (ses classes uniquement)
 └── Saisir/modifier les notes (ses matières + ses classes, période non close)
 └── Saisir l'appréciation de sa classe (si enseignant principal)
 └── Consulter le calendrier

PARENT
 └── Consulter le profil de son/ses enfant(s)
 └── Consulter les notes et bulletins de son/ses enfant(s)
 └── Consulter le calendrier
```

---

## 8. Plan de livraison (6 semaines)

| Semaine | Objectif | Livrables |
|---|---|---|
| **S1** | Setup + Auth + Structure DB | Projet Next.js dockerisé, schéma Prisma, login/logout, gestion users admin |
| **S2** | Gestion élèves + structure pédagogique | CRUD élèves, classes, niveaux, matières, affectations |
| **S3** | Saisie des notes | Interface enseignant, calcul moyennes, appréciation |
| **S4** | Bulletins PDF | Template HTML/CSS bulletin, génération Puppeteer, téléchargement |
| **S5** | Calendrier + dashboards + espace parent | FullCalendar, tableaux de bord par rôle, vue parent |
| **S6** | Tests, polish, déploiement VPS | Tests e2e critiques (Playwright), déploiement Docker, documentation admin |

---

## 9. Critères d'acceptation du MVP

- [ ] Un administrateur peut créer un compte enseignant et un compte parent
- [ ] Un élève peut être inscrit avec son profil complet et lié à ses parents
- [ ] Un enseignant voit uniquement ses classes et peut saisir/modifier des notes
- [ ] La moyenne générale est calculée automatiquement avec coefficients
- [ ] Un bulletin PDF peut être généré par élève et par période
- [ ] Un parent peut se connecter et consulter les notes de son enfant
- [ ] Le calendrier affiche les événements créés par l'administration
- [ ] L'application est accessible en HTTPS sur le VPS
- [ ] Les sauvegardes automatiques de la base SQLite sont configurées

---

*Document rédigé sur la base des réponses recueillies le 2026-06-19.*
