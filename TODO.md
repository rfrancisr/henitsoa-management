# TODO — EcoleManager

> Suivi de l'avancement du projet. Cocher `[x]` quand c'est fait.

---

## ✅ MVP — Semaine 1 : Setup & Auth

- [x] Initialisation du projet Next.js 15 (TypeScript, Tailwind CSS, App Router)
- [x] Schéma Prisma v6 + SQLite (11 modèles : User, Eleve, Classe, Matiere, Note…)
- [x] Migration initiale + script de seed (admin + année scolaire + niveaux)
- [x] NextAuth.js v5 — credentials provider, JWT sessions
- [x] Fix Edge Runtime : split config `auth.config.ts` / `auth.ts`
- [x] Middleware de protection des routes par rôle
- [x] Page de connexion (`/login`) en français
- [x] Sidebar responsive avec navigation adaptée par rôle
- [x] Redirection automatique selon le rôle à la connexion
- [x] Dashboards initiaux (Admin / Directeur / Enseignant / Parent)

---

## ✅ MVP — Semaine 2 : Gestion de la structure

- [x] CRUD Utilisateurs (création, activation/désactivation, reset MDP)
- [x] CRUD Élèves (inscription, modification, archivage)
- [x] Affectation élève ↔ classe (année scolaire active)
- [x] Liaison élève ↔ parent(s)
- [x] CRUD Classes (par niveau, par année scolaire)
- [x] Affectation enseignant ↔ matière ↔ classe
- [x] CRUD Matières (avec coefficient par niveau)
- [x] CRUD Périodes d'évaluation (trimestre/semestre, clôture, réouverture)
- [x] Composants UI réutilisables : Modal, FormField, Input, Select, Badge

---

## ✅ MVP — Semaine 3 : Notes

- [x] Grille de saisie des notes par clic inline (tableau élèves × matières)
- [x] Calcul temps réel de la moyenne pondérée par coefficients
- [x] Calcul de la moyenne générale de la classe
- [x] Couleurs conditionnelles : vert ≥ 14, bleu ≥ 10, rouge < 10
- [x] Protection : pas de modification si période clôturée
- [x] Vérification d'accès : l'enseignant ne voit que ses classes/matières
- [x] Saisie des appréciations par élève (texte + mention)
- [x] Navigation classe/période via query params

---

## ✅ MVP — Semaine 4 : Bulletins PDF

- [x] Template HTML/CSS du bulletin (en-tête, tableau notes, rang, mention, signature)
- [x] Génération PDF via Puppeteer (route API `/api/bulletin`)
- [x] Calcul du rang dans la classe par période
- [x] Contrôle d'accès : parent ne voit que les bulletins de ses enfants
- [x] Page directeur : téléchargement individuel + export groupé (toute la classe)
- [x] Page parent : bulletins disponibles après clôture de la période
- [x] API `/api/eleves-par-classe` pour le chargement dynamique

---

## ✅ MVP — Semaine 5 : Calendrier

- [x] Calendrier mensuel avec FullCalendar (vue mois)
- [x] Types d'événements codés en couleur : Cours, Examen, Réunion, Vacances, Autre
- [x] CRUD événements par clic (admin/directeur uniquement)
- [x] Lecture seule pour enseignants et parents
- [x] API `/api/evenements` compatible FullCalendar (EventSource)
- [x] Légende des types d'événements

---

## 🔧 Corrections & Améliorations immédiates

- [ ] **Reset de mot de passe par email** (F-03 PRD) — actuellement admin seulement via l'interface
  - Envoyer un lien sécurisé par email (Nodemailer + SMTP)
  - Page `/reset-password?token=...` pour définir un nouveau MDP
- [ ] **Gestion des années scolaires** — UI pour créer/activer une nouvelle année depuis l'interface admin (actuellement via seed uniquement)
- [ ] **Page profil utilisateur** — changer son propre mot de passe et prénom/nom
- [ ] **Validation des formulaires** — messages d'erreur plus précis côté client
- [ ] **Toast notifications** — retour visuel après chaque action (succès/erreur) au lieu des alertes navigateur
- [ ] **Chargement optimiste** — améliorer le feedback lors des mutations lentes
- [ ] **Pagination** — pour les listes d'élèves et d'utilisateurs (>50 entrées)
- [ ] **Recherche avancée élèves** — filtrer par classe, niveau, statut
- [ ] **Saisie notes hors-ligne / auto-save** — éviter les pertes si la connexion coupe pendant la saisie

---

## 🧪 Tests & Qualité (Semaine 6)

- [ ] Tests e2e Playwright — parcours critiques :
  - [ ] Login → dashboard admin
  - [ ] Création élève → affectation classe → saisie note → génération bulletin
  - [ ] Login parent → consultation bulletin
- [ ] Tests unitaires — calcul des moyennes pondérées (`calculerMoyenne`)
- [ ] Audit accessibilité (WCAG 2.1 AA) — labels, contraste, navigation clavier
- [ ] Audit sécurité — vérifier que chaque Server Action contrôle le rôle

---

## 🚀 Déploiement VPS (Semaine 6)

- [ ] `Dockerfile` multi-stage (build + runtime)
- [ ] `docker-compose.yml` — app + Nginx + Certbot
- [ ] `nginx.conf` — reverse proxy + HTTPS
- [ ] Script de sauvegarde automatique quotidienne (`prisma/dev.db` → tar.gz)
- [ ] Variables d'environnement de production (`.env.production.example`)
- [ ] Documentation d'installation pour l'administrateur système
- [ ] Premier déploiement sur Hetzner CX22

---

## 📦 Phase 2 — Fonctionnalités futures

### Absences
- [ ] Modèle `Absence` (eleveId, date, motif, justifiée)
- [ ] Saisie des absences par l'enseignant
- [ ] Récapitulatif absences par élève et par période
- [ ] Intégration dans le bulletin (nb absences justifiées/non justifiées)

### Messagerie interne
- [ ] Modèle `Message` (expéditeur, destinataires, sujet, corps, lu)
- [ ] Interface de messagerie (boîte de réception, envoi, fil de discussion)
- [ ] Notifications in-app (badge non-lus dans la sidebar)
- [ ] Diffusion d'annonces (admin/directeur → tous les parents d'une classe)

### Export & Rapports
- [ ] Export Excel des notes par classe et par période
- [ ] Statistiques de classe (distribution des moyennes, taux de réussite)
- [ ] Rapport de fin d'année par élève

---

## 🔭 Phase 3 — Vision long terme

- [ ] Application mobile React Native (parents principalement)
- [ ] Gestion multi-établissements (réseau d'écoles)
- [ ] Frais de scolarité et suivi des paiements
- [ ] Emploi du temps hebdomadaire (planning par classe)
- [ ] Intégration SSO Google / Microsoft (pour les écoles avec GSuite/O365)
- [ ] Mode hors-ligne PWA pour les enseignants en zone sans réseau
