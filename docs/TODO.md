# TODO — EcoleManager

## ✅ Fait (session 2026-06-29/30)

- [x] Refonte dashboard admin : salutation, groupes par moment, tuiles à bordure gauche
- [x] Supprimer sidebar pour l'admin → header horizontal centré
- [x] Flèche retour (BackLink) sur toutes les sous-pages admin
- [x] Headers cohérents sur toutes les sous-pages (eyebrow + h1 + description contextuelle)
- [x] Page centrée après suppression de la sidebar (max-width 960px, margin auto)
- [x] Style tuiles inspiré du template (bordure gauche, fond vert plein au hover)
- [x] Cards sur la même ligne = même hauteur (flex: 1)
- [x] Supprimer les scrollbars dans /performance (layout flow naturel)
- [x] Augmenter les font sizes (body 15→16px, descriptions 12.5→14px, labels 11→12px)
- [x] Foncer les couleurs de texte (inkLt → inkMd sur descriptions, labels, header)

---

## 🔴 Priorité haute — À faire prochaine session

### Entrée des notes (slider + champ numérique)
- [ ] Ajouter une interface de saisie des notes dans `/enseignant/notes` ou `/admin`
  - Inspiration : template JSX uploadé (GradesFlow)
  - Pour chaque matière : grande note colorée + slider 0–20 + champ numérique de saisie directe
  - Fichiers concernés : `app/(dashboard)/enseignant/notes/NotesClient.tsx`

### Lisibilité tableaux
- [ ] Agrandir le texte dans les tableaux des sous-pages admin
  - Minimum 15px pour les données, padding vertical ≥ 14px par ligne
  - Fichiers : `ElevesClient.tsx`, `UtilisateursClient.tsx`, `EnseignantsClient.tsx`, `MatieresClient.tsx`, `PeriodesClient.tsx`, `AnneesClient.tsx`, `ClassesClient.tsx`

### Boutons dans les tables
- [ ] Ajouter un label texte aux boutons Modifier/Supprimer (pas d'icônes seules)
  - Une personne de 55 ans ne devine pas ce que fait une icône de crayon ou de poubelle

---

## 🟡 Priorité moyenne

- [ ] **Modals** (`Modal.tsx`, `FormField.tsx`) : labels 14px+, champs padding 12px+, boutons hauteur ≥ 48px
- [ ] **Messages d'erreur** : rendre les erreurs plus visibles et plus explicites (pas juste du rouge discret)

---

## 🟢 Priorité basse

- [ ] Pages `/directeur/*` : vérifier que les headers utilisent le design system (eyebrow + h1 + description)
- [ ] Pages `/performance` et `/calendrier` : vérifier le rendu complet avec le layout admin (sans sidebar)
