'use strict';

// Programme 8ème (CM1, ~10-11 ans) — année scolaire 2025-2026
// Source : RÉPARTITION CLASSE DE 8ème.xlsx
// Matières (18, dans l'ordre exact des lignes de l'Excel) :
// VAKITENY · F/B · TSIPELINA · FITSIPIKA · LANGAGE · LECTURE · VOCABULAIRE · GRAMMAIRE ·
// ORTHOGRAPHE · CONJUGAISON · ARITHMÉTIQUE · GÉOMÉTRIE · MESURE · CONNAISSANCES USUELLES ·
// GÉOGRAPHIE · TANTARA · FFMOM · ANGLAIS
// (F/B et F/H étaient deux lignes identiques dans l'Excel — F/H a été fusionnée dans F/B,
// confirmé par l'utilisateur. Aucune ligne EPS dans l'Excel 8ème — abandonnée, comme pour la 9ème.)
// Structure : PERIODES_8EME ne contient que Septembre (semaines n:1..4). Octobre à Juin sont
// des tableaux plats (numérotation n relative au mois), regroupés par MOIS_8EME. Certains mois
// omettent les semaines EXAMEN/VACANCES/JOURNÉE DES ÉCOLES qui n'ont aucun contenu pédagogique
// dans l'Excel (Décembre : 2 semaines ; Février, Mars, Avril : 3 semaines chacun).

const PERIODES_8EME = [
  {
    "num": 1,
    "libelle": "1ère Période",
    "debut": "01/09/2025",
    "semaines": [
      {
        "n": 1,
        "dateDebut": "2025/09/01",
        "theme": "Semaine d'orientation",
        "sous": "Accueil des élèves · prise de contact et test de pré-requis dans toutes les matières",
        "matieres": [
          {
            "matiere": "VAKITENY",
            "topic": "Fanatsofoka — fanadinana fototra amin'ny famakian-teny",
            "approche": "Fanombanana ny fahaizana mamaky teny malagasy azon'ny mpianatra tao amin'ny kilasy faha-9, alohan'ny hidirana amin'ny lohahevitra vaovao momba ny fahadiovana.",
            "transmission": [
              "Fampahafantarana ny mpianatra tsirairay (anarana, fonenana)",
              "Famakiana takelaka fohy iray misy fehezanteny 5 momba ny fiainana an-tsekoly",
              "Fanontaniana fahatakarana tsotra momba ny lahatsoratra novakiana",
              "Famerenana ny fitsipika fototra amin'ny famakian-teny mazava sy tsotra",
              "Fanolorana ny lohahevitra ho an'ny volana Septambra : ny fahadiovana"
            ],
            "exercices": [
              "Vakio io fehezanteny io mazava tsara : 'Ny mpianatra dia mianatra isan'andro any an-tsekoly.' → Corrigé : famakiana tsy misy tafintohina, feo azo re",
              "Iza no lohahevitry ny lahatsoratra novakianao? → Corrigé : ny fiainana an-tsekoly",
              "Lazao amin'ny teninao manokana ny votoatin'ny lahatsoratra amin'ny fehezanteny 2 → Corrigé : famintinana fohy sy marina araka ny lahatsoratra"
            ]
          },
          {
            "matiere": "F/B",
            "topic": "Fanatsofoka — fanadihadiana lohahevitra",
            "approche": "Fanamarinana ny fahaizan'ny mpianatra mamaritra sy manazava lohahevitra tsotra iray tamin'ny kilasy faha-9, alohan'ny hidirana amin'ny lohahevitra 'fahadiovana'.",
            "transmission": [
              "Fanontaniana am-bava : 'Inona no atao hoe lohahevitra?'",
              "Fanomezana ohatra lohahevitra efa fantatry ny mpianatra tamin'ny taona lasa (ex: ny fianakaviana)",
              "Fifampiresahana an-tsekoly momba ny fahadiovana ao an-trano sy an-tsekoly",
              "Firaketana an-tsoratra ny hevitra nivoaka teo am-pifampiresahana"
            ],
            "exercices": [
              "Tanisao teny 3 mifandray amin'ny fahadiovana → Corrigé : ohatra, madio, manasa tanana, fidiovana (na teny mitovy hevitra)",
              "Soraty fehezanteny iray mamaritra ny lohahevitra 'fahadiovana' → Corrigé : fehezanteny feno sy misy ifandraisany amin'ny lohahevitra"
            ]
          },
          {
            "matiere": "TSIPELINA",
            "topic": "Fanatsofoka — fanadinana fototra amin'ny tsipelina",
            "approche": "Fanamarinana ny fahaizana manoratra ny abidia malagasy sy ny fitsipika tsotra tamin'ny kilasy faha-9.",
            "transmission": [
              "Fanoratana ny abidia malagasy manontolo an-tsoratra madinika sy lehibe",
              "Fitsapana an-tsoratra fohy : zanatsoratra sy renitsoratra ao amin'ny teny 'sekoly', 'tanàna'",
              "Fanitsiana am-pokonolona ny lesoka hita",
              "Fanolorana ny lohahevitra vaovao ho an'ny volana Septambra : ny marim-piatoana"
            ],
            "exercices": [
              "Soraty ny abidia malagasy manontolo → Corrigé : a b d e f g h i j k l m n o p r s t v y z (lisitra feno)",
              "Iza avy ny zanatsoratra ao amin'ny teny 'tanàna'? → Corrigé : a, à",
              "Ampiasao marim-piatoana marina : 'Manao ahoana ianao' → Corrigé : 'Manao ahoana ianao ?'"
            ]
          },
          {
            "matiere": "FITSIPIKA",
            "topic": "Fanatsofoka — fanadinana fototra amin'ny fitsipi-teny",
            "approche": "Fanamarinana ny fahalalan'ny mpianatra momba ny fehezanteny tsotra tamin'ny kilasy faha-9, alohan'ny hidirana amin'ny lantom-peo (intonation).",
            "transmission": [
              "Fanadihadiana : inona no atao hoe fehezanteny?",
              "Fanomezana ohatra fehezanteny tsotra vitsivitsy (fehezanteny milaza, fehezanteny manontany)",
              "Fitsapana an-tsoratra fohy : mamorona fehezanteny tsotra 2",
              "Fanolorana ny lohahevitra vaovao : ny fehezanteny sy ny lantom-peo"
            ],
            "exercices": [
              "Inona no fehezanteny amin'ireto teny ireto: 'Mianatra / ny mpianatra / isan'andro' → Corrigé : Mianatra isan'andro ny mpianatra.",
              "Mamorona fehezanteny tsotra iray manontany → Corrigé : fehezanteny feno misy marim-panontaniana, ohatra 'Aiza ianao?'"
            ]
          },
          {
            "matiere": "LANGAGE",
            "topic": "Prise de contact et test de pré-requis à l'oral",
            "approche": "Évaluer l'aisance à l'oral et le vocabulaire scolaire de base acquis en 9ème avant d'attaquer le texte 'Monsieur, elle copie'.",
            "transmission": [
              "Tour de table : chaque élève se présente en une phrase complète",
              "Jeu de questions-réponses courtes sur la vie de classe (Comment t'appelles-tu ? Que fais-tu en classe ?)",
              "Repérage collectif des phrases mal construites à l'oral et correction immédiate",
              "Présentation de l'objectif du mois : le portrait d'un personnage"
            ],
            "exercices": [
              "Réponds à l'oral par une phrase complète : Comment t'appelles-tu ? → Corrigé : 'Je m'appelle ...' (phrase complète avec sujet et verbe)",
              "Pose une question à ton voisin sur son activité préférée → Corrigé : question correctement formulée avec un mot interrogatif"
            ]
          },
          {
            "matiere": "LECTURE",
            "topic": "Prise de contact et test de pré-requis en lecture",
            "approche": "Vérifier la fluidité de lecture en français acquise en 9ème avant d'aborder le texte 'Inscription scolaire'.",
            "transmission": [
              "Lecture individuelle à voix haute d'un texte court de 5 phrases sur la rentrée scolaire",
              "Questions de compréhension orale sur le texte lu",
              "Repérage collectif des mots mal prononcés et correction",
              "Présentation des textes du mois : Inscription scolaire, Le nouveau directeur, J'ai une carte d'identité"
            ],
            "exercices": [
              "Lis à voix haute : 'Aujourd'hui, c'est la rentrée des classes.' → Corrigé : lecture fluide, sans hésitation excessive",
              "De qui parle cette phrase : 'Elle arrive à l'école en retard.' → Corrigé : d'une élève (sujet 'elle')"
            ]
          },
          {
            "matiere": "VOCABULAIRE",
            "topic": "Prise de contact et test de pré-requis en vocabulaire",
            "approche": "Évaluer le vocabulaire scolaire de base connu en 9ème avant d'introduire le vocabulaire du portrait d'un personnage.",
            "transmission": [
              "Liste collective au tableau du vocabulaire de la classe déjà connu (cahier, stylo, tableau...)",
              "Jeu : trouver le mot correspondant à une définition simple donnée par l'enseignant",
              "Introduction du thème du mois : décrire une personne (traits physiques, caractère)",
              "Copie du nouveau vocabulaire dans le cahier"
            ],
            "exercices": [
              "Trouve le mot : objet qui sert à écrire → Corrigé : un stylo (ou un crayon)",
              "Cite 2 mots pour décrire le physique d'une personne → Corrigé : ex. grand, petit, mince (toute paire d'adjectifs physiques correcte)"
            ]
          },
          {
            "matiere": "GRAMMAIRE",
            "topic": "Prise de contact et test de pré-requis en grammaire",
            "approche": "Vérifier la reconnaissance du sujet et du verbe dans une phrase simple (acquis de 9ème) avant d'introduire GNS/GV.",
            "transmission": [
              "Rappel oral : 'De qui/quoi parle la phrase ?' et 'Que fait-il/elle ?'",
              "Test écrit : souligner le sujet et entourer le verbe dans 3 phrases simples",
              "Correction collective au tableau",
              "Annonce de la notion du mois : le Groupe Nominal Sujet (GNS) et le Groupe Verbal (GV)"
            ],
            "exercices": [
              "Souligne le sujet et entoure le verbe : 'Le maître corrige les cahiers.' → Corrigé : sujet = Le maître (souligné) ; verbe = corrige (entouré)",
              "Souligne le sujet : 'Les élèves chantent une chanson.' → Corrigé : Les élèves"
            ]
          },
          {
            "matiere": "ORTHOGRAPHE",
            "topic": "Prise de contact et test de pré-requis en orthographe",
            "approche": "Vérifier les acquis de base en orthographe (majuscule, point) de 9ème avant d'introduire la ponctuation détaillée.",
            "transmission": [
              "Dictée de 3 phrases courtes et simples",
              "Correction collective : vérifier majuscule en début de phrase et point final",
              "Repérage des erreurs fréquentes de la classe",
              "Annonce de la notion du mois : la ponctuation"
            ],
            "exercices": [
              "Dictée : 'Les élèves entrent en classe.' → Corrigé : 'Les élèves entrent en classe.' (majuscule initiale, point final)",
              "Corrige cette phrase : 'les eleves entrent en classe' → Corrigé : 'Les élèves entrent en classe.'"
            ]
          },
          {
            "matiere": "CONJUGAISON",
            "topic": "Prise de contact et test de pré-requis en conjugaison",
            "approche": "Vérifier la conjugaison du verbe être au présent (acquis de 9ème) avant d'aborder les 4 temps de l'indicatif.",
            "transmission": [
              "Rappel oral collectif de la conjugaison de 'être' au présent",
              "Test écrit : compléter 3 phrases à trous avec le verbe être au présent",
              "Correction collective",
              "Annonce de l'objectif du mois : 'être' aux 4 temps de l'indicatif"
            ],
            "exercices": [
              "Complète : 'Je ... élève de 8ème.' → Corrigé : suis",
              "Complète : 'Ils ... contents de la rentrée.' → Corrigé : sont"
            ]
          },
          {
            "matiere": "ARITHMÉTIQUE",
            "topic": "Prise de contact et test de pré-requis en numération",
            "approche": "Évaluer les acquis de numération de la 9ème (nombres jusqu'à 100 000) avant d'attaquer les nombres jusqu'à 1 million.",
            "transmission": [
              "Test écrit rapide : lire et écrire des nombres jusqu'à 100 000",
              "Décomposer un nombre en milliers, centaines, dizaines, unités",
              "Correction collective au tableau, repérer les erreurs fréquentes",
              "Présenter l'objectif du mois : les nombres jusqu'à 1 million puis jusqu'à 1 milliard"
            ],
            "exercices": [
              "Écris en chiffres : quatre-vingt-treize mille deux cent cinq → Corrigé : 93 205",
              "Décompose 45 678 → Corrigé : 4 dizaines de mille + 5 mille + 6 centaines + 7 dizaines + 8 unités",
              "Range du plus petit au plus grand : 12 400 ; 9 800 ; 45 000 → Corrigé : 9 800 ; 12 400 ; 45 000"
            ]
          },
          {
            "matiere": "GÉOMÉTRIE",
            "topic": "Prise de contact et test de pré-requis en géométrie",
            "approche": "Vérifier la reconnaissance des figures planes simples (acquis de 9ème) avant d'introduire les lignes et les angles.",
            "transmission": [
              "Test écrit : identifier 4 figures dessinées au tableau (carré, rectangle, triangle, cercle)",
              "Rappel collectif du nombre de côtés de chaque figure",
              "Manipulation d'une règle pour tracer un segment",
              "Présentation de l'objectif du mois : les lignes et les angles"
            ],
            "exercices": [
              "Nomme cette figure à 4 côtés égaux → Corrigé : un carré",
              "Combien de côtés a un triangle ? → Corrigé : 3 côtés",
              "Trace un segment de 5 cm avec ta règle → Corrigé : segment mesuré exactement 5 cm"
            ]
          },
          {
            "matiere": "MESURE",
            "topic": "Prise de contact et test de pré-requis en mesure",
            "approche": "Vérifier la connaissance des unités de longueur de base (m, cm) acquises en 9ème avant les conversions détaillées.",
            "transmission": [
              "Rappel oral : à quoi sert un mètre ? une règle ?",
              "Mesurer la longueur du tableau et d'un cahier avec la règle",
              "Test écrit : comparer deux longueurs mesurées",
              "Présenter l'objectif du mois : les unités de longueur (km, m, dm, cm, mm) et leurs conversions"
            ],
            "exercices": [
              "Mesure ton cahier avec la règle : combien de cm mesure-t-il ? → Corrigé : mesure réelle vérifiée par l'élève, exprimée en cm",
              "Quel est le plus long : 1 m ou 80 cm ? → Corrigé : 1 m (100 cm > 80 cm)"
            ]
          },
          {
            "matiere": "CONNAISSANCES USUELLES",
            "topic": "Prise de contact et test de pré-requis sur le corps humain",
            "approche": "Vérifier les acquis de 9ème sur les 5 sens avant d'introduire les différentes parties du corps.",
            "transmission": [
              "Rappel oral collectif des 5 sens et de leur organe (vue-œil, ouïe-oreille...)",
              "Jeu : montrer une partie du corps nommée par l'enseignant",
              "Test écrit : relier chaque sens à son organe",
              "Présenter l'objectif du mois : les différentes parties du corps humain"
            ],
            "exercices": [
              "Relie : la vue → Corrigé : l'œil",
              "Cite les 5 sens → Corrigé : la vue, l'ouïe, l'odorat, le goût, le toucher"
            ]
          },
          {
            "matiere": "GÉOGRAPHIE",
            "topic": "Prise de contact et test de pré-requis en géographie",
            "approche": "Vérifier les notions simples de repérage (droite/gauche, points cardinaux de base) acquises en 9ème avant d'introduire le globe terrestre.",
            "transmission": [
              "Rappel oral : qu'est-ce que le nord, le sud, l'est, l'ouest ?",
              "Jeu de repérage dans la classe (se placer au nord, au sud de la salle)",
              "Observation collective d'une carte simple de Madagascar",
              "Présenter l'objectif du mois : la Terre notre planète, le globe et le planisphère"
            ],
            "exercices": [
              "Cite les 4 points cardinaux → Corrigé : nord, sud, est, ouest",
              "Sur quel continent se trouve Madagascar ? → Corrigé : l'Afrique (île de l'océan Indien, au large de l'Afrique)"
            ]
          },
          {
            "matiere": "TANTARA",
            "topic": "Fanatsofoka — fanadinana fototra momba ny tantara",
            "approche": "Fanamarinana ny fahatakaran'ny mpianatra ny hoe 'taloha' sy 'ankehitriny' tamin'ny kilasy faha-9, alohan'ny hidirana amin'ny ilàna ny tantara.",
            "transmission": [
              "Fifampiresahana am-bava : ahoana ny fiainana tamin'ny taloha, ahoana ny ankehitriny?",
              "Fanomezana ohatra zavatra niova (ex: fitaovana, fitafiana)",
              "Fanolorana ny lohahevitra vaovao : ny ilàna ny tantara sy ny niaviana'ny Malagasy"
            ],
            "exercices": [
              "Tanisao zavatra iray niova hatramin'ny taloha ka hatramin'ny ankehitriny → Corrigé : ohatra, ny fitaovam-pifandraisana (valiny mety samihafa)",
              "Inona no atao hoe 'tantara'? → Corrigé : ny fitantarana ny zava-nitranga taloha"
            ]
          },
          {
            "matiere": "FFMOM",
            "topic": "Fanatsofoka — fifanakalozan-kevitra momba ny fifanampiana",
            "approche": "Fanentanana ny mpianatra hifampiresaka momba ny fahaizamiaina ao an-tsekoly, alohan'ny hidirana amin'ny lohahevitra fifanampiana.",
            "transmission": [
              "Fifampiresahana am-bava momba ny fitsipiky ny kilasy",
              "Fanomezana ohatra fihetsika tsara sy ratsy ao an-tsekoly",
              "Fanolorana ny lohahevitra vaovao : ny fifanampian'ny mpiarabelona"
            ],
            "exercices": [
              "Tanisao fihetsika tsara iray azo atao ao an-tsekoly → Corrigé : ohatra, manampy namana, mitsimbina ny fitaovana (valiny mety samihafa)"
            ]
          },
          {
            "matiere": "ANGLAIS",
            "topic": "Prise de contact et test de pré-requis",
            "approche": "Vérifier le vocabulaire anglais de base connu en 9ème (bonjour, au revoir) avant d'introduire 'Introducing / Greeting'.",
            "transmission": [
              "Tour de table en anglais : 'Hello, my name is...'",
              "Rappel des salutations déjà connues (Hello, Goodbye)",
              "Jeu de rôle simple en binôme : se saluer en anglais",
              "Présenter l'objectif du mois : se présenter et saluer en anglais"
            ],
            "exercices": [
              "Traduis : 'Bonjour, je m'appelle...' → Corrigé : 'Hello, my name is...'",
              "Comment dit-on 'au revoir' en anglais ? → Corrigé : 'Goodbye' (ou 'Bye')"
            ]
          }
        ]
      },
      {
        "n": 2,
        "dateDebut": "2025/09/08",
        "theme": "La propreté et la vie scolaire",
        "sous": "Madio izay Lov p.9 · Portrait d'un personnage (Monsieur, elle copie / Inscription scolaire)",
        "matieres": [
          {
            "matiere": "VAKITENY",
            "topic": "Madio izay — Lov p.9",
            "approche": "Mampianatra ny lahatsoratra 'Madio izay' amin'ny fomba mizotra: famakiana mangina → famakiana mafy → fanontaniana fahatakarana → famintinana am-bava. Mifototra amin'ny fahadiovan'ny tena sy ny fitaovana.",
            "transmission": [
              "Famakian'ny mpampianatra manontolo ny lahatsoratra 'Madio izay' p.9 amin'ny feo mazava",
              "Famakiam-panjifa mangina nataon'ny mpianatra",
              "Fanazavana ny teny sarotra hita ao amin'ny lahatsoratra",
              "Famakiana mafy nataon'ny mpianatra 3-4, tsirairay andalana",
              "Fanontaniana fahatakarana am-bava momba ny votoatin'ny lahatsoratra"
            ],
            "exercices": [
              "Iza no olona resahina ao amin'ny lahatsoratra 'Madio izay'? → Corrigé : valiny araka ny lahatsoratra p.9 (ilay mpianatra madio voaresaka)",
              "Nahoana no ilaina ny fahadiovana? → Corrigé : mba tsy ho marary sy hisy fahasalamana tsara",
              "Vakio andalana 3 amin'ny lahatsoratra amin'ny feo mazava → Corrigé : famakiana tsy misy tafintohina"
            ]
          },
          {
            "matiere": "F/B",
            "topic": "Ny fahadiovana",
            "approche": "Manazava ny lohahevitra 'ny fahadiovana' mifototra amin'ny lahatsoratra 'Madio izay' novakiana teo amin'ny Vakiteny: fahadiovan'ny tena, ny fitafiana, ny trano.",
            "transmission": [
              "Fifampiresahana am-bava : inona avy no tokony hataon'ny olona madio isan'andro?",
              "Firaketana an-tsoratra ny hevitra nivoaka (manasa tanana, mandro, manasa fitafiana)",
              "Fanoratana fehezanteny 2-3 momba ny fahadiovana andavanandro"
            ],
            "exercices": [
              "Tanisao fihetsika 3 mampiseho fahadiovana → Corrigé : manasa tanana alohan'ny sakafo, mandro isan'andro, manasa fitafiana maloto",
              "Soraty fehezanteny iray milaza nahoana ianao no manasa tanana → Corrigé : fehezanteny feno sy misy antony marina"
            ]
          },
          {
            "matiere": "TSIPELINA",
            "topic": "Ny mari-piatoana",
            "approche": "Mampianatra ny mari-piatoana fototra (teboka, faingo, teboka fanontaniana) amin'ny alalan'ny fehezanteny nalaina tao amin'ny lahatsoratra 'Madio izay'.",
            "transmission": [
              "Fanadihadiana ireo mari-piatoana efa hita ao amin'ny lahatsoratra novakiana",
              "Fanazavana ny anjara asan'ny teboka sy ny teboka fanontaniana",
              "Fampiasana ny mari-piatoana amin'ny fehezanteny nadika avy amin'ny lahatsoratra",
              "Fanoratana am-pokonolona sy fanitsiana"
            ],
            "exercices": [
              "Ampidiro ny mari-piatoana marina : 'Madio ny tanako' → Corrigé : 'Madio ny tanako.'",
              "Ampidiro ny mari-piatoana : 'Manao ahoana ianao' → Corrigé : 'Manao ahoana ianao ?'"
            ]
          },
          {
            "matiere": "FITSIPIKA",
            "topic": "Ny fhzt sy ny lantom-peo",
            "approche": "Mampianatra ny fehezanteny milaza sy ny fehezanteny manontany ary ny lantom-peo (fiovan'ny feo) mifanaraka amin'ny karazana fehezanteny.",
            "transmission": [
              "Fanadihadiana : ahoana no fiovan'ny feo rehefa milaza sy rehefa manontany?",
              "Fanaovana ohatra am-bava : mamaky fehezanteny milaza sy manontany amin'ny lantom-peo mifanaraka",
              "Fanavahana am-tsoratra fehezanteny milaza sy fehezanteny manontany"
            ],
            "exercices": [
              "Avaho: 'Madio ny sekoly' sa fehezanteny manontany? → Corrigé : fehezanteny milaza",
              "Ovay ho fehezanteny manontany : 'Madio ny sekoly.' → Corrigé : 'Madio ve ny sekoly?'"
            ]
          },
          {
            "matiere": "LANGAGE",
            "topic": "Portrait d'un personnage — présentation orale",
            "approche": "Introduire le vocabulaire du portrait à travers une présentation orale guidée, en lien avec le texte 'Monsieur, elle copie'.",
            "transmission": [
              "Écoute du texte 'Monsieur, elle copie' lu par l'enseignant",
              "Repérage oral des mots qui décrivent le personnage",
              "Jeu : chaque élève décrit oralement un camarade en 2 phrases (physique observable)",
              "Mise en commun collective des descriptions"
            ],
            "exercices": [
              "Décris à l'oral un camarade de classe en 2 phrases → Corrigé : 2 phrases correctes décrivant un trait physique observable",
              "Cite un adjectif utilisé dans le texte pour décrire le personnage → Corrigé : un adjectif effectivement présent dans le texte étudié"
            ]
          },
          {
            "matiere": "LECTURE",
            "topic": "Inscription scolaire",
            "approche": "Étudier le texte 'Inscription scolaire' par lecture silencieuse puis lecture à voix haute, avec questions de compréhension ciblées sur les démarches d'inscription.",
            "transmission": [
              "Lecture silencieuse individuelle du texte 'Inscription scolaire'",
              "Explication du vocabulaire nouveau (dossier, formulaire, directeur...)",
              "Lecture à voix haute par plusieurs élèves, un paragraphe chacun",
              "Questions de compréhension écrites sur le texte"
            ],
            "exercices": [
              "Que doit apporter l'élève pour s'inscrire, d'après le texte ? → Corrigé : réponse exacte selon le texte étudié (ex. acte de naissance, bulletin précédent)",
              "Qui reçoit les élèves lors de l'inscription ? → Corrigé : le directeur (ou la personne citée dans le texte)"
            ]
          },
          {
            "matiere": "VOCABULAIRE",
            "topic": "Portrait d'un personnage",
            "approche": "Constituer le champ lexical du portrait physique et moral à partir du texte étudié en lecture.",
            "transmission": [
              "Relevé collectif au tableau des mots du texte décrivant le physique et le caractère",
              "Classement des mots en deux colonnes : physique / caractère",
              "Copie du vocabulaire dans le cahier avec un exemple de phrase pour chacun"
            ],
            "exercices": [
              "Classe ces mots : grand, gentil, mince, timide → Corrigé : physique = grand, mince ; caractère = gentil, timide",
              "Utilise le mot 'gentil' dans une phrase → Corrigé : phrase correcte employant le mot"
            ]
          },
          {
            "matiere": "GRAMMAIRE",
            "topic": "La phrase : GNS / GV",
            "approche": "Identifier le Groupe Nominal Sujet (GNS) et le Groupe Verbal (GV) dans des phrases tirées du texte 'Monsieur, elle copie'.",
            "transmission": [
              "Rappel : la phrase est composée d'un GNS (de qui/quoi on parle) et d'un GV (ce qu'il fait)",
              "Repérage du GNS et du GV dans 3 phrases du texte étudié",
              "Exercice écrit : souligner le GNS en bleu et le GV en rouge",
              "Correction collective au tableau"
            ],
            "exercices": [
              "Sépare le GNS et le GV : 'Le nouvel élève entre dans la classe.' → Corrigé : GNS = Le nouvel élève ; GV = entre dans la classe",
              "Sépare le GNS et le GV : 'Elle copie la leçon.' → Corrigé : GNS = Elle ; GV = copie la leçon"
            ]
          },
          {
            "matiere": "ORTHOGRAPHE",
            "topic": "Ponctuation",
            "approche": "Étudier les signes de ponctuation (point, virgule, point d'interrogation, point d'exclamation) à partir de phrases du texte étudié.",
            "transmission": [
              "Repérage des différents signes de ponctuation dans le texte 'Monsieur, elle copie'",
              "Explication du rôle de chaque signe",
              "Exercice : ponctuer un texte de 4 phrases sans ponctuation",
              "Correction collective"
            ],
            "exercices": [
              "Ponctue : 'Comment t'appelles-tu' → Corrigé : 'Comment t'appelles-tu ?'",
              "Ponctue : 'Bravo tu as réussi' → Corrigé : 'Bravo, tu as réussi !'"
            ]
          },
          {
            "matiere": "CONJUGAISON",
            "topic": "\"être\" 4 temps de l'indicatif",
            "approche": "Conjuguer le verbe être au présent, à l'imparfait, au futur simple et au passé composé de l'indicatif.",
            "transmission": [
              "Rappel de la conjugaison du présent (déjà vu en pré-requis)",
              "Présentation de l'imparfait, du futur simple et du passé composé, un temps à la fois, avec exemples",
              "Exercice de conjugaison écrit aux 4 temps sur une phrase modèle",
              "Correction collective avec tableau récapitulatif des 4 temps"
            ],
            "exercices": [
              "Conjugue 'être' à l'imparfait, 3e personne du pluriel : 'Ils ... contents.' → Corrigé : étaient",
              "Conjugue 'être' au futur simple, 1ère personne du singulier : 'Je ... en 8ème.' → Corrigé : serai",
              "Conjugue 'être' au passé composé, 2e personne du singulier : 'Tu ... malade.' → Corrigé : as été"
            ]
          },
          {
            "matiere": "ARITHMÉTIQUE",
            "topic": "Les nombres 1 à 1 million",
            "approche": "Introduire la lecture, l'écriture et la décomposition des nombres jusqu'à 1 million par classes (unités, milliers) en s'appuyant sur le tableau de numération.",
            "transmission": [
              "Rappel des nombres jusqu'à 100 000 (pré-requis)",
              "Présentation du tableau de numération avec la classe des millions",
              "Lecture collective de nombres jusqu'à 1 000 000 au tableau",
              "Exercice : écrire en chiffres des nombres dictés jusqu'à 1 000 000",
              "Décomposition d'un nombre en classes (millions, milliers, unités)"
            ],
            "exercices": [
              "Écris en chiffres : sept cent quarante-cinq mille trois cent douze → Corrigé : 745 312",
              "Écris en lettres : 1 000 000 → Corrigé : un million",
              "Décompose 328 450 → Corrigé : 3 centaines de mille + 2 dizaines de mille + 8 mille + 4 centaines + 5 dizaines"
            ]
          },
          {
            "matiere": "GÉOMÉTRIE",
            "topic": "Les lignes et les angles",
            "approche": "Identifier et tracer les différentes lignes (droite, demi-droite, segment, courbe) et reconnaître les types d'angles (aigu, droit, obtus).",
            "transmission": [
              "Rappel du tracé au tableau : droite, demi-droite, segment, courbe",
              "Définition de chaque type de ligne avec exemples dans la classe",
              "Introduction des angles : aigu, droit, obtus, à l'aide de l'équerre",
              "Exercice de tracé et de reconnaissance"
            ],
            "exercices": [
              "Trace un segment de 6 cm → Corrigé : segment mesurant exactement 6 cm",
              "Cet angle mesure moins de 90° : comment l'appelle-t-on ? → Corrigé : un angle aigu",
              "Quel instrument permet de vérifier un angle droit ? → Corrigé : l'équerre"
            ]
          },
          {
            "matiere": "MESURE",
            "topic": "Mesure de longueur",
            "approche": "Étudier les unités de longueur (km, m, dm, cm, mm) et leurs conversions à partir du tableau de conversion.",
            "transmission": [
              "Rappel du mètre et du centimètre (pré-requis)",
              "Présentation du tableau de conversion : km, hm, dam, m, dm, cm, mm",
              "Exercices de conversion simples (m en cm, cm en mm)",
              "Mesure d'objets réels de la classe avec la règle et le mètre"
            ],
            "exercices": [
              "Convertis : 3 m = ... cm → Corrigé : 300 cm",
              "Convertis : 250 cm = ... m → Corrigé : 2,5 m",
              "Range du plus court au plus long : 1 m ; 85 cm ; 1 200 mm → Corrigé : 85 cm ; 1 m ; 1 200 mm"
            ]
          },
          {
            "matiere": "CONNAISSANCES USUELLES",
            "topic": "Les différentes parties du corps",
            "approche": "Étudier les grandes parties du corps humain (tête, tronc, membres) et leurs sous-parties principales.",
            "transmission": [
              "Observation collective d'un schéma du corps humain",
              "Nomination des grandes parties : tête, tronc, membres supérieurs, membres inférieurs",
              "Jeu : toucher/montrer la partie du corps nommée",
              "Exercice écrit : légender un schéma simple du corps"
            ],
            "exercices": [
              "Cite les 3 grandes parties du corps humain → Corrigé : la tête, le tronc, les membres",
              "Le bras et la jambe sont des... → Corrigé : des membres (bras = membre supérieur, jambe = membre inférieur)"
            ]
          },
          {
            "matiere": "GÉOGRAPHIE",
            "topic": "La terre notre planète, globe - planisphère",
            "approche": "Découvrir la Terre comme planète à travers l'observation du globe terrestre et du planisphère.",
            "transmission": [
              "Observation collective d'un globe terrestre ou d'une image",
              "Différence entre le globe (représentation en volume) et le planisphère (représentation à plat)",
              "Repérage des océans et des continents sur le planisphère",
              "Localisation de Madagascar sur le planisphère"
            ],
            "exercices": [
              "Quelle est la différence entre un globe et un planisphère ? → Corrigé : le globe est une représentation en volume (sphère), le planisphère est une représentation à plat",
              "Sur quel océan se trouve Madagascar ? → Corrigé : l'océan Indien"
            ]
          },
          {
            "matiere": "TANTARA",
            "topic": "Ny ilàna ny tantara — Niavian'ny Malagasy",
            "approche": "Mampianatra ny antony ilàna ny fianarana tantara, sy ny votoatin'ny niaviana'ny Malagasy (fihaviana avy amin'ny faritra samihafa).",
            "transmission": [
              "Fifampiresahana am-bava : nahoana no ilaina ny fianarana tantara?",
              "Fanazavana fohy ny hoe 'tantara' dia fitantarana ny lasa mba hahatakarana ny ankehitriny",
              "Fampahafantarana fohy ny niaviana'ny Malagasy (fiavian'ny razana avy amin'ny faritra samihafa an'i Aziа sy Afrika)",
              "Firaketana am-bary ny hevitra lehibe"
            ],
            "exercices": [
              "Nahoana no ilaina ny fianarana tantara? → Corrigé : mba hahafantarana ny lasa sy hahatakarana ny ankehitriny",
              "Avy aiza avy ny razamben'ny Malagasy, araka ny nianarana? → Corrigé : valiny araka ny fampianarana natao (ohatra, avy any Azia sy Afrika)"
            ]
          },
          {
            "matiere": "FFMOM",
            "topic": "Fifanampian'ny mpiarabelona",
            "approche": "Mampianatra ny lanjan'ny fifanampiana eo amin'ny mpiara-belona ao an-tanàna sy an-tsekoly amin'ny alalan'ny ohatra concrete.",
            "transmission": [
              "Fifampiresahana am-bava momba ny ohatra fifanampiana efa hitan'ny mpianatra tao an-tanàna",
              "Fanadihadiana ny soa entin'ny fifanampiana ho an'ny fiaraha-monina",
              "Fanoratana fehezanteny fohy milaza ohatra fifanampiana"
            ],
            "exercices": [
              "Tanisao ohatra fifanampiana iray hitanao tao an-tanànanao → Corrigé : ohatra, fanampiana amin'ny asa tanimbary, valiny mety samihafa araka ny traikefan'ny mpianatra",
              "Inona no soa azo avy amin'ny fifanampiana? → Corrigé : mihamora ny asa, mitombo ny firaisan-kina"
            ]
          },
          {
            "matiere": "ANGLAIS",
            "topic": "Introducing / Greeting",
            "approche": "Apprendre à se présenter et à saluer en anglais à travers des dialogues courts et des jeux de rôle.",
            "transmission": [
              "Présentation du vocabulaire : Hello, Good morning, My name is..., Nice to meet you",
              "Modélisation par l'enseignant d'un dialogue de présentation",
              "Jeu de rôle en binôme : se saluer et se présenter",
              "Correction de la prononciation"
            ],
            "exercices": [
              "Traduis : 'Bonjour, comment t'appelles-tu ?' → Corrigé : 'Hello, what is your name?'",
              "Complète : 'My name ... Sitraka.' → Corrigé : is"
            ]
          }
        ]
      },
      {
        "n": 3,
        "dateDebut": "2025/09/15",
        "theme": "Portrait d'un personnage (suite) et mesure des angles",
        "sous": "I Fano Lov p.12 · Le nouveau directeur · Mesure des angles au rapporteur",
        "matieres": [
          {
            "matiere": "VAKITENY",
            "topic": "I Fano — Lov p.12",
            "approche": "Mampianatra ny tantaran'i Fano amin'ny fomba mizotra: famakiana mangina → famakiana mafy → fanontaniana fahatakarana lalindalina kokoa noho ny herinandro teo aloha.",
            "transmission": [
              "Famerenana fohy ny lahatsoratra 'Madio izay' teo aloha",
              "Famakian'ny mpampianatra ny tantaran'i Fano p.12 amin'ny feo mazava",
              "Fanazavana ny teny sarotra vaovao",
              "Famakiana mafy nataon'ny mpianatra samihafa",
              "Fanontaniana fahatakarana lalindalina momba ny toe-javatra sy ny olona ao amin'ny tantara"
            ],
            "exercices": [
              "Iza i Fano ao amin'ny tantara? → Corrigé : valiny araka ny lahatsoratra p.12 (famaritana an'i Fano)",
              "Inona no zava-nitranga tamin'i Fano ao amin'ny tantara? → Corrigé : famintinana marina araka ny lahatsoratra",
              "Vakio andalana iray misafidiananao amin'ny feo mazava → Corrigé : famakiana tsy misy tafintohina"
            ]
          },
          {
            "matiere": "F/B",
            "topic": "Ny fanatanjahantena",
            "approche": "Manazava ny lohahevitra 'ny fanatanjahantena' mifototra amin'ny tantaran'i Fano: ny lanjan'ny fampiasan-tena isan'andro.",
            "transmission": [
              "Fifampiresahana am-bava : inona avy ny fanatanjahantena efa nataon'ny mpianatra?",
              "Firaketana an-tsoratra ny soa azo avy amin'ny fanatanjahantena (mahatanjaka, mahasalama)",
              "Fanoratana fehezanteny 2-3 momba ny fanatanjahantena"
            ],
            "exercices": [
              "Tanisao karazana fanatanjahantena 2 → Corrigé : ohatra, filalaovana baolina, fihazakazahana (valiny mety samihafa)",
              "Nahoana no ilaina ny fanatanjahantena isan'andro? → Corrigé : mba hahasalama sy hatanjaka ny tena"
            ]
          },
          {
            "matiere": "TSIPELINA",
            "topic": "Ny teny verindroa",
            "approche": "Mampianatra ny teny miverina indroa (teny verindroa, ex: 'kely kely', 'mora mora') sy ny fomba fanoratana azy.",
            "transmission": [
              "Fanomezana ohatra teny verindroa hita ao amin'ny lahatsoratra 'I Fano'",
              "Fanazavana ny hevitra entin'ny fiverenan'ny teny indroa (fanamafisana)",
              "Fanoratana am-pokonolona teny verindroa hafa"
            ],
            "exercices": [
              "Ampiasao ny teny verindroa 'kely kely' amin'ny fehezanteny → Corrigé : fehezanteny feno misy 'kely kely' ampiasaina marina",
              "Tanisao teny verindroa iray hafa → Corrigé : ohatra, 'mora mora', 'haingana haingana' (valiny mety samihafa)"
            ]
          },
          {
            "matiere": "FITSIPIKA",
            "topic": "Fhzt sy ny andianteny — reniteny sy ny zanateny",
            "approche": "Manohy ny lesona momba ny fehezanteny amin'ny fampidirana ny andian-teny, ary mampianatra ny reniteny (voyelle) sy ny zanateny (consonne) amin'ny teny malagasy.",
            "transmission": [
              "Famerenana fohy ny fehezanteny milaza sy manontany",
              "Fampidirana ny hoe andian-teny dia teny maromaro mitambatra hitondra hevitra iray",
              "Fanazavana ny reniteny (a,e,i,o,y) sy ny zanateny (ny teny hafa rehetra)",
              "Fanadihadiana am-tsoratra amin'ny teny nomena"
            ],
            "exercices": [
              "Tondroy ny reniteny ao amin'ny teny 'sekoly' → Corrigé : e, o, y",
              "Tondroy ny zanateny ao amin'ny teny 'sekoly' → Corrigé : s, k, l"
            ]
          },
          {
            "matiere": "LANGAGE",
            "topic": "Portrait d'un personnage — suite",
            "approche": "Poursuivre l'expression orale du portrait à travers le texte 'Le nouveau directeur', en enrichissant le vocabulaire descriptif.",
            "transmission": [
              "Écoute du texte 'Le nouveau directeur' lu par l'enseignant",
              "Repérage oral des expressions décrivant le nouveau directeur",
              "Jeu de rôle : présenter oralement une personnalité de l'école (imaginaire ou réelle)",
              "Mise en commun et correction des phrases orales"
            ],
            "exercices": [
              "Décris oralement le nouveau directeur en 2 phrases, d'après le texte → Corrigé : 2 phrases fidèles au texte étudié",
              "Utilise l'expression 'il porte' dans une phrase descriptive → Corrigé : phrase correcte employant 'il porte'"
            ]
          },
          {
            "matiere": "LECTURE",
            "topic": "Le nouveau directeur",
            "approche": "Étudier le texte 'Le nouveau directeur' par lecture silencieuse puis à voix haute, avec des questions de compréhension sur l'arrivée du nouveau directeur.",
            "transmission": [
              "Lecture silencieuse individuelle du texte",
              "Explication du vocabulaire nouveau",
              "Lecture à voix haute par plusieurs élèves",
              "Questions de compréhension écrites sur les faits et les personnages du texte"
            ],
            "exercices": [
              "Qui arrive à l'école, d'après le texte ? → Corrigé : le nouveau directeur",
              "Comment les élèves accueillent-ils le nouveau directeur ? → Corrigé : réponse fidèle au texte étudié"
            ]
          },
          {
            "matiere": "VOCABULAIRE",
            "topic": "Portrait d'un personnage — suite",
            "approche": "Enrichir le champ lexical du portrait avec des adjectifs de caractère à partir du texte 'Le nouveau directeur'.",
            "transmission": [
              "Relevé collectif des adjectifs de caractère dans le texte (sérieux, aimable, strict...)",
              "Classement en deux colonnes : qualités / défauts",
              "Copie du vocabulaire avec exemple de phrase"
            ],
            "exercices": [
              "Classe ces mots : sérieux, aimable, sévère, généreux → Corrigé : qualités = aimable, généreux ; à nuancer selon contexte = sérieux, sévère (peuvent être positifs ou négatifs selon la phrase)",
              "Utilise le mot 'aimable' dans une phrase → Corrigé : phrase correcte employant le mot"
            ]
          },
          {
            "matiere": "GRAMMAIRE",
            "topic": "COD / COI",
            "approche": "Identifier le Complément d'Objet Direct (COD) et le Complément d'Objet Indirect (COI) dans des phrases tirées du texte étudié.",
            "transmission": [
              "Rappel du GNS/GV vu la semaine précédente",
              "Présentation du COD (répond à qui ? quoi ? sans préposition) et du COI (répond à à qui ? de quoi ? avec préposition)",
              "Repérage du COD et du COI dans 3 phrases du texte",
              "Exercice écrit de reconnaissance"
            ],
            "exercices": [
              "Trouve le COD : 'Le directeur salue les élèves.' → Corrigé : les élèves",
              "Trouve le COI : 'Le directeur parle aux élèves.' → Corrigé : aux élèves"
            ]
          },
          {
            "matiere": "ORTHOGRAPHE",
            "topic": "Les indicateurs de temps / lieu",
            "approche": "Reconnaître et employer les indicateurs de temps (hier, aujourd'hui, demain) et de lieu (ici, là-bas, dedans) dans des phrases.",
            "transmission": [
              "Relevé des indicateurs de temps et de lieu dans le texte étudié",
              "Classement en deux colonnes : temps / lieu",
              "Exercice : compléter des phrases avec l'indicateur correct",
              "Correction collective"
            ],
            "exercices": [
              "Complète avec un indicateur de temps : '... , le directeur est arrivé.' → Corrigé : ex. 'Aujourd'hui, le directeur est arrivé.'",
              "Complète avec un indicateur de lieu : 'Le directeur est ... dans son bureau.' → Corrigé : ex. 'assis là-bas'"
            ]
          },
          {
            "matiere": "CONJUGAISON",
            "topic": "\"Avoir\" 4 temps de l'indicatif",
            "approche": "Conjuguer le verbe avoir au présent, à l'imparfait, au futur simple et au passé composé de l'indicatif.",
            "transmission": [
              "Rappel de la conjugaison d'être aux 4 temps vue la semaine précédente",
              "Présentation de la conjugaison d'avoir, un temps à la fois, avec exemples",
              "Exercice de conjugaison écrit aux 4 temps sur une phrase modèle",
              "Correction collective avec tableau récapitulatif"
            ],
            "exercices": [
              "Conjugue 'avoir' au présent, 3e personne du singulier : 'Il ... un nouveau cahier.' → Corrigé : a",
              "Conjugue 'avoir' à l'imparfait, 1ère personne du pluriel : 'Nous ... peur.' → Corrigé : avions",
              "Conjugue 'avoir' au futur simple, 2e personne du pluriel : 'Vous ... de la chance.' → Corrigé : aurez"
            ]
          },
          {
            "matiere": "ARITHMÉTIQUE",
            "topic": "Les nombres 1 à 1 million (suite)",
            "approche": "Consolider la lecture, l'écriture et la comparaison des nombres jusqu'à 1 million.",
            "transmission": [
              "Rappel du tableau de numération vu la semaine précédente",
              "Exercices de comparaison de nombres jusqu'à 1 million (< > =)",
              "Exercice d'encadrement d'un nombre entre deux dizaines de mille",
              "Jeu de rapidité : lire des nombres écrits en chiffres"
            ],
            "exercices": [
              "Compare : 456 200 ... 465 200 → Corrigé : 456 200 < 465 200",
              "Encadre 782 400 entre deux dizaines de mille → Corrigé : 780 000 < 782 400 < 790 000",
              "Range du plus grand au plus petit : 630 000 ; 603 000 ; 360 000 → Corrigé : 630 000 ; 603 000 ; 360 000"
            ]
          },
          {
            "matiere": "GÉOMÉTRIE",
            "topic": "Mesures d'angles",
            "approche": "Mesurer des angles au rapporteur et les classer selon leur ouverture (aigu, droit, obtus).",
            "transmission": [
              "Rappel des 3 types d'angles vus la semaine précédente",
              "Présentation du rapporteur et de son utilisation",
              "Démonstration collective de la mesure d'un angle au tableau",
              "Exercice individuel : mesurer 3 angles tracés avec le rapporteur"
            ],
            "exercices": [
              "Mesure cet angle au rapporteur : il ouvre à 45° → Corrigé : angle aigu de 45°",
              "Un angle mesure 90° : comment l'appelle-t-on ? → Corrigé : un angle droit",
              "Un angle mesure 120° : est-il aigu, droit ou obtus ? → Corrigé : obtus"
            ]
          },
          {
            "matiere": "MESURE",
            "topic": "Mesure de longueur (suite)",
            "approche": "Consolider les conversions d'unités de longueur par des exercices de conversion et de résolution de problèmes.",
            "transmission": [
              "Rappel du tableau de conversion vu la semaine précédente",
              "Exercices de conversion croisée (m↔cm, km↔m)",
              "Résolution d'un petit problème concret de longueur"
            ],
            "exercices": [
              "Convertis : 4,5 km = ... m → Corrigé : 4 500 m",
              "Convertis : 60 mm = ... cm → Corrigé : 6 cm",
              "Un chemin mesure 2 km et un autre 1 800 m. Lequel est le plus long ? → Corrigé : le premier (2 km = 2 000 m > 1 800 m)"
            ]
          },
          {
            "matiere": "CONNAISSANCES USUELLES",
            "topic": "L'articulation / l'os et l'accident",
            "approche": "Étudier le rôle des os et des articulations dans le mouvement, ainsi que les gestes de premiers secours en cas d'accident simple (entorse, fracture).",
            "transmission": [
              "Observation d'un schéma du squelette",
              "Explication du rôle des os (soutien) et des articulations (mouvement)",
              "Présentation des gestes simples en cas de chute ou de fracture (ne pas bouger, prévenir un adulte)",
              "Jeu de questions-réponses sur les précautions à prendre"
            ],
            "exercices": [
              "À quoi servent les articulations ? → Corrigé : elles permettent le mouvement des os entre eux (ex. coude, genou)",
              "Que faire si un camarade se blesse gravement en tombant ? → Corrigé : ne pas le déplacer et prévenir immédiatement un adulte"
            ]
          },
          {
            "matiere": "GÉOGRAPHIE",
            "topic": "Les grands repères du globe",
            "approche": "Identifier les grands repères du globe terrestre : pôles, équateur, tropiques, méridiens, parallèles.",
            "transmission": [
              "Observation du globe terrestre avec ses lignes tracées",
              "Présentation des pôles (nord, sud) et de l'équateur",
              "Présentation des tropiques, méridiens et parallèles",
              "Localisation de Madagascar par rapport à l'équateur"
            ],
            "exercices": [
              "Comment s'appelle la ligne qui sépare la Terre en deux hémisphères égaux ? → Corrigé : l'équateur",
              "Madagascar est-il proche ou loin de l'équateur ? → Corrigé : relativement proche, situé dans l'hémisphère sud sous les tropiques"
            ]
          },
          {
            "matiere": "TANTARA",
            "topic": "Taona sy ny taonjato",
            "approche": "Mampianatra ny hevitry ny taona sy ny taonjato ary ny fomba fanisana azy, ho fototry ny fahatakarana ny fizotry ny tantara.",
            "transmission": [
              "Fanazavana ny hoe taona (12 volana) sy taonjato (100 taona)",
              "Fanoratana ohatra: ny taona 2026 dia ao anatin'ny taonjato faha-21",
              "Fanaovana ohatra fanisana taonjato araka ny taona nomena"
            ],
            "exercices": [
              "Ao anatin'ny taonjato firy ny taona 2026? → Corrigé : ny taonjato faha-21",
              "Firy taona ao anatin'ny taonjato iray? → Corrigé : 100 taona"
            ]
          },
          {
            "matiere": "FFMOM",
            "topic": "Fahaizamiaina / Fifandraisan'ny haben'ny ankohonana sy ny sokajim-pilàna",
            "approche": "Mampianatra ny adidy amam-pandraisana anjaran'ny tsirairay ao anatin'ny ankohonana araka ny toerany (zokiny, zandriny).",
            "transmission": [
              "Fifampiresahana am-bava momba ny anjara raharahan'ny tsirairay ao an-trano",
              "Fanadihadiana ny fifandraisana eo amin'ny zokiny sy ny zandriny",
              "Fanoratana fehezanteny fohy milaza adidy iray"
            ],
            "exercices": [
              "Tanisao adidy iray fanao ao an-tranonao → Corrigé : ohatra, mamafa trano, mikarakara ny zandry (valiny mety samihafa)",
              "Inona no tokony hataon'ny zokiny amin'ny zandriny? → Corrigé : mikarakara sy manoro hevitra tsara"
            ]
          },
          {
            "matiere": "ANGLAIS",
            "topic": "School things",
            "approche": "Apprendre le vocabulaire du matériel scolaire en anglais et l'utiliser dans des phrases simples.",
            "transmission": [
              "Présentation du vocabulaire : a book, a pen, a pencil, a bag, a ruler",
              "Jeu : montrer l'objet nommé en anglais",
              "Exercice oral : 'What is this? It is a...'",
              "Copie du vocabulaire dans le cahier"
            ],
            "exercices": [
              "Traduis : un cahier → Corrigé : a notebook",
              "Complète : 'This is ... pencil.' → Corrigé : a"
            ]
          }
        ]
      },
      {
        "n": 4,
        "dateDebut": "2025/09/22",
        "theme": "Relations familiales et les nombres jusqu'au milliard",
        "sous": "Ray aman-dreny p.21 · J'ai une carte d'identité · Les nombres de 1 million à 1 milliard",
        "matieres": [
          {
            "matiere": "VAKITENY",
            "topic": "Ray aman-dreny — p.21",
            "approche": "Mampianatra ny lahatsoratra momba ny ray aman-dreny amin'ny fomba mizotra, mifantoka amin'ny adidy amam-pandraisana anjaran'ny ray aman-dreny.",
            "transmission": [
              "Famerenana fohy ny tantaran'i Fano teo aloha",
              "Famakian'ny mpampianatra ny lahatsoratra 'Ray aman-dreny' p.21",
              "Fanazavana ny teny sarotra vaovao",
              "Famakiana mafy nataon'ny mpianatra samihafa",
              "Fanontaniana fahatakarana momba ny adidin'ny ray aman-dreny voaresaka ao amin'ny lahatsoratra"
            ],
            "exercices": [
              "Inona no adidin'ny ray aman-dreny voaresaka ao amin'ny lahatsoratra? → Corrigé : valiny araka ny lahatsoratra p.21 (ohatra, mikarakara ny zanany)",
              "Famintino amin'ny fehezanteny 2 ny votoatin'ny lahatsoratra → Corrigé : famintinana marina araka ny lahatsoratra novakiana"
            ]
          },
          {
            "matiere": "F/B",
            "topic": "Ny fifandraisana eo amin'ny ankohonana",
            "approche": "Manazava ny fifandraisana tsara tokony hisy eo amin'ny mpianakavy, mifototra amin'ny lahatsoratra 'Ray aman-dreny'.",
            "transmission": [
              "Fifampiresahana am-bava : ahoana ny fifandraisana tsara eo amin'ny mpianakavy?",
              "Firaketana an-tsoratra ny hevitra nivoaka (fifankatiavana, fanajana)",
              "Fanoratana fehezanteny 2-3 momba ny fifandraisana ao an-tokantrano"
            ],
            "exercices": [
              "Tanisao endri-pifandraisana tsara iray eo amin'ny mpianakavy → Corrigé : ohatra, fifanajana, fifampitiavana (valiny mety samihafa)",
              "Soraty fehezanteny iray milaza ny fitiavanao ny ray aman-dreninao → Corrigé : fehezanteny feno sy marina"
            ]
          },
          {
            "matiere": "TSIPELINA",
            "topic": "Mpanolotra : hoy / hono",
            "approche": "Mampianatra ny fampiasana ny teny 'hoy' sy 'hono' amin'ny fitantarana kabary na tenin'olona (discours rapporté).",
            "transmission": [
              "Fanomezana ohatra fehezanteny mampiasa 'hoy' avy amin'ny lahatsoratra novakiana",
              "Fanazavana ny fahasamihafan'ny 'hoy' (fitenenana mivantana) sy 'hono' (filazana zavatra ren'olona)",
              "Fanoratana am-pokonolona fehezanteny mampiasa 'hoy' na 'hono'"
            ],
            "exercices": [
              "Ampiasao ny 'hoy' amin'ny fehezanteny: '...ny mpampianatra, madio ny sekoly.' → Corrigé : 'Madio ny sekoly, hoy ny mpampianatra.'",
              "Ahoana ny fampiasana ny 'hono'? Manaova ohatra fehezanteny → Corrigé : fehezanteny feno mampiasa 'hono' marina, ohatra 'Ho avy hono ny mpampianatra vaovao.'"
            ]
          },
          {
            "matiere": "FITSIPIKA",
            "topic": "Ny fhzt ao anaty teny manao — tohivakana tsy misy fiatoana na sora-baventy",
            "approche": "Mampianatra ny fehezanteny miditra amin'ny teny fitenenana (discours direct) ary ny fitsipiky ny tohivakana tsy misy fiatoana na sora-baventy.",
            "transmission": [
              "Famerenana fohy ny lesona 'hoy/hono' natao teo amin'ny Tsipelina",
              "Fanazavana ny fomba fanoratana fehezanteny miditra amin'ny teny fitenenana ('Hoy izy hoe: ...')",
              "Fanadihadiana am-tsoratra ny tsy fampiasana sora-baventy raha tsy tapaka ny fehezanteny"
            ],
            "exercices": [
              "Ovay ho fehezanteny miditra amin'ny teny fitenenana : Nilaza izy fa madio ny sekoly → Corrigé : 'Madio ny sekoly,' hoy izy.",
              "Inona no marika ampiasaina alohan'ny teny fitenenana? → Corrigé : ny teboka roa (:) sy ny sora-teny"
            ]
          },
          {
            "matiere": "LANGAGE",
            "topic": "Documents officiels — présentation orale",
            "approche": "Introduire le vocabulaire des documents officiels (carte d'identité, acte de naissance) à travers une discussion orale guidée.",
            "transmission": [
              "Discussion collective : quels documents connaissez-vous ?",
              "Présentation orale d'une carte d'identité (photo, nom, date de naissance)",
              "Jeu de rôle : un élève présente oralement les informations d'une carte d'identité fictive"
            ],
            "exercices": [
              "Cite 2 informations que l'on trouve sur une carte d'identité → Corrigé : ex. le nom, la date de naissance (toute paire correcte)",
              "À l'oral, présente-toi comme si tu lisais ta carte d'identité → Corrigé : présentation orale correcte avec nom, prénom, date de naissance"
            ]
          },
          {
            "matiere": "LECTURE",
            "topic": "J'ai une carte d'identité",
            "approche": "Étudier le texte 'J'ai une carte d'identité' par lecture silencieuse puis à voix haute, avec des questions sur les documents officiels.",
            "transmission": [
              "Lecture silencieuse individuelle du texte",
              "Explication du vocabulaire nouveau (identité, document, officiel)",
              "Lecture à voix haute par plusieurs élèves",
              "Questions de compréhension écrites sur les informations du texte"
            ],
            "exercices": [
              "Quelles informations figurent sur la carte d'identité du texte ? → Corrigé : réponse fidèle au texte étudié (nom, prénom, date de naissance...)",
              "Pourquoi ce document est-il important, d'après le texte ? → Corrigé : réponse fidèle au texte (prouver son identité)"
            ]
          },
          {
            "matiere": "VOCABULAIRE",
            "topic": "Document officiel",
            "approche": "Constituer le champ lexical des documents officiels à partir du texte étudié.",
            "transmission": [
              "Relevé collectif des mots liés aux documents officiels dans le texte",
              "Classement des mots selon leur usage (identité, état civil)",
              "Copie du vocabulaire avec exemple de phrase"
            ],
            "exercices": [
              "Que signifie le mot 'identité' ? → Corrigé : ce qui permet de reconnaître et distinguer une personne (nom, prénom, date de naissance...)",
              "Utilise le mot 'document' dans une phrase → Corrigé : phrase correcte employant le mot"
            ]
          },
          {
            "matiere": "GRAMMAIRE",
            "topic": "CCT / CCL",
            "approche": "Identifier le Complément Circonstanciel de Temps (CCT) et de Lieu (CCL) dans des phrases tirées du texte étudié.",
            "transmission": [
              "Rappel du COD/COI vu la semaine précédente",
              "Présentation du CCT (répond à quand ?) et du CCL (répond à où ?)",
              "Repérage du CCT et du CCL dans 3 phrases du texte",
              "Exercice écrit de reconnaissance"
            ],
            "exercices": [
              "Trouve le CCT : 'Elle a obtenu sa carte d'identité hier.' → Corrigé : hier",
              "Trouve le CCL : 'Il range ses papiers dans le tiroir.' → Corrigé : dans le tiroir"
            ]
          },
          {
            "matiere": "ORTHOGRAPHE",
            "topic": "et / est / a / à",
            "approche": "Distinguer à l'écrit les homophones grammaticaux et/est et a/à par des règles simples de remplacement.",
            "transmission": [
              "Rappel : 'est' peut être remplacé par 'était', 'et' ne se remplace pas ainsi",
              "Rappel : 'a' peut être remplacé par 'avait', 'à' ne se remplace pas ainsi",
              "Exercice à trous : compléter avec et/est ou a/à",
              "Correction collective avec justification de chaque choix"
            ],
            "exercices": [
              "Complète : 'Elle ... une carte d'identité ... un acte de naissance.' → Corrigé : 'Elle a une carte d'identité et un acte de naissance.'",
              "Complète : 'Il va ... l'école ; le directeur ... arrivé.' → Corrigé : 'Il va à l'école ; le directeur est arrivé.'"
            ]
          },
          {
            "matiere": "CONJUGAISON",
            "topic": "Verbe 1er groupe aux 4 temps de l'indicatif",
            "approche": "Conjuguer un verbe du 1er groupe (ex. 'parler') au présent, à l'imparfait, au futur simple et au passé composé.",
            "transmission": [
              "Rappel de la conjugaison d'être et avoir vues précédemment",
              "Présentation de la terminaison régulière du 1er groupe à chaque temps",
              "Exercice de conjugaison écrit sur le verbe 'parler' aux 4 temps",
              "Correction collective avec tableau récapitulatif"
            ],
            "exercices": [
              "Conjugue 'parler' au présent, 1ère personne du singulier : 'Je ... malagasy.' → Corrigé : parle",
              "Conjugue 'parler' à l'imparfait, 3e personne du pluriel : 'Ils ... fort.' → Corrigé : parlaient",
              "Conjugue 'parler' au passé composé, 2e personne du singulier : 'Tu ... au directeur.' → Corrigé : as parlé"
            ]
          },
          {
            "matiere": "ARITHMÉTIQUE",
            "topic": "Les nombres de 1 million à 1 milliard",
            "approche": "Introduire la lecture, l'écriture et la décomposition des nombres jusqu'à 1 milliard en ajoutant la classe des milliards au tableau de numération.",
            "transmission": [
              "Rappel des nombres jusqu'à 1 million vus la semaine précédente",
              "Présentation du tableau de numération étendu à la classe des milliards",
              "Lecture collective de nombres jusqu'à 1 milliard au tableau",
              "Exercice : écrire en chiffres des nombres dictés jusqu'à 1 milliard"
            ],
            "exercices": [
              "Écris en chiffres : deux milliards trois cent mille → Corrigé : 2 000 300 000",
              "Écris en lettres : 5 400 000 000 → Corrigé : cinq milliards quatre cents millions",
              "Décompose 1 250 000 000 → Corrigé : 1 milliard + 2 centaines de millions + 5 dizaines de millions"
            ]
          },
          {
            "matiere": "GÉOMÉTRIE",
            "topic": "Calcul d'angle",
            "approche": "Calculer des angles supplémentaires (somme = 180°) et complémentaires (somme = 90°) à partir d'un angle donné.",
            "transmission": [
              "Rappel de la mesure des angles au rapporteur vue la semaine précédente",
              "Définition de l'angle supplémentaire (somme = 180°) avec exemple",
              "Définition de l'angle complémentaire (somme = 90°) avec exemple",
              "Exercice de calcul d'angle manquant"
            ],
            "exercices": [
              "Un angle mesure 70°. Quel est son complémentaire ? → Corrigé : 90° − 70° = 20°",
              "Un angle mesure 110°. Quel est son supplémentaire ? → Corrigé : 180° − 110° = 70°"
            ]
          },
          {
            "matiere": "MESURE",
            "topic": "Mesure de masse",
            "approche": "Étudier les unités de masse (g, dag, hg, kg, q, t) et leurs conversions à partir du tableau de conversion.",
            "transmission": [
              "Rappel du tableau de conversion des longueurs, transposé aux masses",
              "Présentation des unités de masse : g, dag, hg, kg, q (quintal), t (tonne)",
              "Exercices de conversion simples (kg en g, g en kg)",
              "Pesée d'objets réels de la classe si balance disponible"
            ],
            "exercices": [
              "Convertis : 3 kg = ... g → Corrigé : 3 000 g",
              "Convertis : 2 500 g = ... kg → Corrigé : 2,5 kg",
              "Un sac de riz pèse 25 kg. Combien de sacs faut-il pour atteindre 1 quintal (100 kg) ? → Corrigé : 4 sacs"
            ]
          },
          {
            "matiere": "CONNAISSANCES USUELLES",
            "topic": "L'œil et l'oreille",
            "approche": "Étudier l'anatomie simplifiée de l'œil et de l'oreille, leur fonctionnement et les principaux défauts de vision et d'audition.",
            "transmission": [
              "Observation d'un schéma de l'œil et de l'oreille",
              "Explication du rôle de l'œil (voir) et de l'oreille (entendre)",
              "Présentation des défauts courants : myopie, surdité, et leurs solutions (lunettes, prudence face au bruit)",
              "Jeu de questions-réponses"
            ],
            "exercices": [
              "Quel est le rôle de l'œil ? → Corrigé : permettre de voir",
              "Que porte une personne myope pour mieux voir ? → Corrigé : des lunettes"
            ]
          },
          {
            "matiere": "GÉOGRAPHIE",
            "topic": "Les mouvements de la Terre",
            "approche": "Étudier les deux mouvements de la Terre : la rotation (jour/nuit) et la révolution (saisons).",
            "transmission": [
              "Rappel des grands repères du globe vus la semaine précédente",
              "Explication de la rotation de la Terre sur elle-même (24h, jour et nuit)",
              "Explication de la révolution de la Terre autour du Soleil (365 jours, saisons)",
              "Démonstration avec un globe et une source de lumière si possible"
            ],
            "exercices": [
              "Combien de temps dure une rotation complète de la Terre sur elle-même ? → Corrigé : 24 heures (un jour)",
              "Quel mouvement de la Terre explique les saisons ? → Corrigé : la révolution autour du Soleil"
            ]
          },
          {
            "matiere": "TANTARA",
            "topic": "Ireo vanim-potoanan'ny tantaran'i Madagasikara",
            "approche": "Mampahafantatra amin'ny ankapobeny ny vanim-potoana lehibe amin'ny tantaran'i Madagasikara (talohan'ny Eoropeana, fanjakana samihafa, fanjanahan-tany, fahaleovan-tena).",
            "transmission": [
              "Famerenana fohy ny hevitry ny taona sy taonjato natao teo aloha",
              "Fanolorana amin'ny ankapobeny ny vanim-potoana efa ho hianarana mandritra ny taona (fanjakana, fanjanahan-tany, fahaleovan-tena)",
              "Fijerena sary mizotra (frise chronologique) ao amin'ny efitrano fianarana raha misy"
            ],
            "exercices": [
              "Tanisao vanim-potoana iray amin'ny tantaran'i Madagasikara → Corrigé : ohatra, ny vanim-potoan'ny fanjakana, ny fanjanahan-tany (valiny mety samihafa)",
              "Inona no atao hoe fahaleovan-tena? → Corrigé : ny fotoana nahazoan'i Madagasikara fahafahana tamin'ny fanjakana mpanjanaka"
            ]
          },
          {
            "matiere": "FFMOM",
            "topic": "Fahaizamiaina / Fifandraisan'ny haben'ny ankohonana sy ny sokajim-pilàna",
            "approche": "Manohy ny lesona teo aloha momba ny adidy ao amin'ny ankohonana, mifantoka kokoa amin'ny fifandraisana amin'ny havana lavitra sy ny sokajim-pianakaviana.",
            "transmission": [
              "Famerenana fohy ny adidin'ny tsirairay ao an-trano",
              "Fanazavana ny hoe iza avy ny 'havana' ankoatry ny mpianakavy akaiky (dadabe, renibe, zandry, zoky...)",
              "Fifampiresahana am-bava momba ny lanjan'ny fifandraisana amin'ny havana"
            ],
            "exercices": [
              "Iza avy no isan'ny havanao ankoatry ny ray aman-dreninao? → Corrigé : ohatra, dadabe, renibe, zandry, zoky (valiny mety samihafa)",
              "Nahoana no ilaina ny mifandray tsara amin'ny havana? → Corrigé : mba hisy firaisan-kina sy fifanampiana"
            ]
          },
          {
            "matiere": "ANGLAIS",
            "topic": "Greeting revisited",
            "approche": "Approfondir les salutations formelles et informelles en anglais selon le contexte (matin, après-midi, ami, adulte).",
            "transmission": [
              "Rappel des salutations de base vues à la S2 (Hello, Good morning)",
              "Présentation des salutations formelles (Good afternoon, How do you do) et informelles (Hi, What's up)",
              "Jeu de rôle : choisir la salutation adaptée selon la situation donnée"
            ],
            "exercices": [
              "Quelle salutation utiliser le matin ? → Corrigé : 'Good morning'",
              "Traduis de façon formelle : 'Bonjour Monsieur.' → Corrigé : 'Good morning, Sir.'"
            ]
          }
        ]
      }
    ]
  }
];

const OCTOBRE_8EME = [
  {
    "n": 1,
    "dateDebut": "2025/09/29",
    "theme": "Retrouvailles familiales et vie de classe",
    "sous": "Mpihavana tsy mifankalala — Lov p.25 · En classe, il y a des règles · Les nombres de 1 million à 1 milliard (approfondissement)",
    "matieres": [
      {
        "matiere": "VAKITENY",
        "topic": "Mpihavana tsy mifankalala — Lov p.25",
        "approche": "Mampianatra ny lahatsoratra 'Mpihavana tsy mifankalala' amin'ny fomba mizotra: famakiana mangina → famakiana mafy → fanontaniana fahatakarana, mifantoka amin'ny fifandraisan'ny havana tsy mifankafantatra.",
        "transmission": [
          "Famerenana fohy ny lahatsoratra 'Ray aman-dreny' novakiana tamin'ny volana Septambra",
          "Famakian'ny mpampianatra manontolo ny lahatsoratra 'Mpihavana tsy mifankalala' p.25 amin'ny feo mazava",
          "Famakiam-panjifa mangina nataon'ny mpianatra",
          "Fanazavana ny teny sarotra hita ao amin'ny lahatsoratra",
          "Famakiana mafy nataon'ny mpianatra 3-4, tsirairay andalana",
          "Fanontaniana fahatakarana am-bava momba ny votoatin'ny lahatsoratra"
        ],
        "exercices": [
          "Iza avy no mpihavana tsy mifankalala voaresaka ao amin'ny lahatsoratra? → Corrigé : valiny araka ny lahatsoratra p.25 (ireo olona mpihavana saingy tsy nifankafantatra taloha)",
          "Nahoana no tsy nifankalala izy ireo, araka ny lahatsoratra? → Corrigé : famintinana marina araka ny antony nomen'ny lahatsoratra",
          "Vakio andalana 2 amin'ny lahatsoratra amin'ny feo mazava → Corrigé : famakiana tsy misy tafintohina"
        ]
      },
      {
        "matiere": "F/B",
        "topic": "Andraikitry ny tsirairay eo amin'ny ankohonana",
        "approche": "Manazava ny andraikitra tokony hotanan'ny tsirairay ao anaty ankohonana, manohy sy manalalina ny lesona momba ny fifandraisana eo amin'ny mpianakavy natao tamin'ny Septambra.",
        "transmission": [
          "Famerenana fohy ny lesona momba ny fifandraisana eo amin'ny mpianakavy",
          "Fifampiresahana am-bava : inona avy ny andraikitry ny ray, ny reny, ary ny zanaka ao an-trano?",
          "Firaketana an-tsoratra ny andraikitra araka ny toerana amin'ny ankohonana",
          "Fanoratana fehezanteny 2-3 milaza andraikitra iray"
        ],
        "exercices": [
          "Tanisao andraikitra iray tanan'ny ray ao an-tokantrano → Corrigé : ohatra, mikarakara ny ankohonana, mitady vola hivelomana (valiny mety samihafa)",
          "Inona no andraikitrao amin'ny maha-zanaka anao? → Corrigé : ohatra, mankatò ny ray aman-dreny, manampy amin'ny asan-trano (valiny mety samihafa)"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Ny teny mitambatra ho iray",
        "approche": "Mampianatra ny teny roa mitambatra ho teny iray (mots composés) amin'ny teny malagasy, sy ny fomba fanoratana azy tsy misalasala.",
        "transmission": [
          "Fanomezana ohatra teny mitambatra ho iray hita amin'ny fiainana andavanandro (ex: masoandro, tanindrazana)",
          "Fanazavana fa ny teny roa mitambatra dia mahaforona hevitra vaovao iray",
          "Fanoratana am-pokonolona teny mitambatra hafa",
          "Fanavahana ny teny tokony hatambatra sy ny tsy tokony hatambatra"
        ],
        "exercices": [
          "Tambaty ho teny iray : 'maso' + 'andro' → Corrigé : masoandro",
          "Tanisao teny mitambatra ho iray iray hafa → Corrigé : ohatra, tanindrazana, fanjakambe (valiny mety samihafa)"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Fototeny sy ny teny iray tarika",
        "approche": "Mampianatra ny hoe fototeny (racine) sy ny teny iray tarika (mots de la même famille), amin'ny alalan'ny ohatra: ny fototeny 'soratra' iforonan'ny teny 'manoratra', 'mpanoratra', 'fanoratana'.",
        "transmission": [
          "Fanazavana ny hoe fototeny dia ilay teny fototra iavian'ny teny hafa",
          "Fanomezana ohatra: ny fototeny 'soratra' dia iforonan'ny teny 'manoratra', 'mpanoratra', 'fanoratana' — teny iray tarika daholo",
          "Fitadiavana am-bava teny iray tarika hafa, avy amin'ny fototeny iray",
          "Fanoratana am-tsoratra lisitry ny teny iray tarika"
        ],
        "exercices": [
          "Tondroy ny fototeny iombonan'ny teny 'manoratra', 'mpanoratra', 'fanoratana' → Corrigé : soratra",
          "Manorata teny 2 mifanaraka amin'ny fototeny 'vaky' → Corrigé : ohatra, mivaky, fahavakiana (valiny mety samihafa, tokony ho teny iray tarika amin'ny 'vaky')"
        ]
      },
      {
        "matiere": "LANGAGE",
        "topic": "Je vole, tu voles — expression orale",
        "approche": "Introduire le vocabulaire de l'action de voler/s'envoler à travers une discussion orale guidée en lien avec le texte 'Je vole, tu voles', avant l'étude en Lecture.",
        "transmission": [
          "Discussion collective : avez-vous déjà vu un oiseau, un avion, un cerf-volant voler ?",
          "Présentation orale du vocabulaire : voler, s'envoler, planer, atterrir",
          "Jeu : chaque élève mime une action liée au vol et les autres devinent le mot",
          "Mise en commun collective des phrases produites à l'oral"
        ],
        "exercices": [
          "Décris à l'oral en une phrase ce qui vole dans le ciel → Corrigé : phrase correcte employant un sujet qui vole (ex. un oiseau, un avion)",
          "Utilise le verbe 'voler' dans une phrase à l'oral → Corrigé : phrase correcte employant le verbe voler"
        ]
      },
      {
        "matiere": "LECTURE",
        "topic": "En classe, il y a des règles",
        "approche": "Étudier le texte 'En classe, il y a des règles' par lecture silencieuse puis à voix haute, avec questions de compréhension ciblées sur le règlement de la classe.",
        "transmission": [
          "Lecture silencieuse individuelle du texte",
          "Explication du vocabulaire nouveau (règlement, discipline, respecter)",
          "Lecture à voix haute par plusieurs élèves, un paragraphe chacun",
          "Questions de compréhension écrites sur les règles citées dans le texte"
        ],
        "exercices": [
          "Cite une règle de la classe mentionnée dans le texte → Corrigé : réponse fidèle au texte étudié (ex. lever la main avant de parler)",
          "Pourquoi faut-il respecter les règles de la classe, d'après le texte ? → Corrigé : réponse fidèle au texte (pour que tout le monde puisse bien travailler)"
        ]
      },
      {
        "matiere": "VOCABULAIRE",
        "topic": "La classe",
        "approche": "Constituer le champ lexical de la classe (objets, personnes, actions) à partir du texte étudié en lecture.",
        "transmission": [
          "Relevé collectif au tableau des mots du texte liés à la classe",
          "Classement des mots en catégories : objets / personnes / actions",
          "Copie du vocabulaire dans le cahier avec un exemple de phrase pour chacun"
        ],
        "exercices": [
          "Classe ces mots : tableau, maître, écrire, cahier → Corrigé : objets = tableau, cahier ; personne = maître ; action = écrire",
          "Utilise le mot 'règlement' dans une phrase → Corrigé : phrase correcte employant le mot"
        ]
      },
      {
        "matiere": "GRAMMAIRE",
        "topic": "Les pronoms personnels",
        "approche": "Identifier et employer les pronoms personnels sujets (je, tu, il/elle, nous, vous, ils/elles) à partir de phrases tirées du texte étudié.",
        "transmission": [
          "Rappel du CCT/CCL vu en Septembre",
          "Présentation des pronoms personnels sujets et de leur rôle (remplacer le nom)",
          "Exercice écrit : remplacer le GNS par le pronom personnel qui convient",
          "Correction collective au tableau"
        ],
        "exercices": [
          "Remplace le sujet par le pronom qui convient : 'Le maître explique la règle.' → Corrigé : Il explique la règle.",
          "Remplace le sujet par le pronom qui convient : 'Les élèves écoutent.' → Corrigé : Ils écoutent."
        ]
      },
      {
        "matiere": "ORTHOGRAPHE",
        "topic": "On / ont (NN p.83)",
        "approche": "Distinguer à l'écrit les homophones grammaticaux 'on' (pronom) et 'ont' (verbe avoir) par une règle simple de remplacement.",
        "transmission": [
          "Rappel : 'ont' peut être remplacé par 'avaient', 'on' ne se remplace pas ainsi",
          "Exercice à trous : compléter avec on/ont",
          "Correction collective avec justification de chaque choix",
          "Référence au manuel NN p.83 pour des exercices complémentaires"
        ],
        "exercices": [
          "Complète : 'Les élèves ... des règles à respecter.' → Corrigé : ont",
          "Complète : '... respecte le règlement de la classe.' → Corrigé : On"
        ]
      },
      {
        "matiere": "CONJUGAISON",
        "topic": "Le verbe en -eler / -eter",
        "approche": "Étudier la particularité orthographique des verbes du 1er groupe en -eler et -eter (doublement de la consonne) au présent de l'indicatif.",
        "transmission": [
          "Rappel de la conjugaison régulière du 1er groupe vue en Septembre",
          "Présentation de la règle : devant un e muet, le l ou le t double (j'appelle, je jette)",
          "Exercice de conjugaison écrit sur 'appeler' et 'jeter' au présent",
          "Correction collective avec tableau récapitulatif"
        ],
        "exercices": [
          "Conjugue 'appeler' au présent, 1ère personne du singulier : 'J'... mon ami.' → Corrigé : appelle",
          "Conjugue 'jeter' au présent, 3e personne du singulier : 'Il ... le papier à la poubelle.' → Corrigé : jette"
        ]
      },
      {
        "matiere": "ARITHMÉTIQUE",
        "topic": "Les nombres de 1 million à 1 milliard (approfondissement)",
        "approche": "Consolider la lecture, la comparaison et l'arrondi des nombres jusqu'à 1 milliard déjà introduits en Septembre.",
        "transmission": [
          "Rappel du tableau de numération étendu à la classe des milliards",
          "Exercices de comparaison de grands nombres (< > =)",
          "Exercice d'arrondi au million le plus proche",
          "Rangement de plusieurs grands nombres dans l'ordre croissant"
        ],
        "exercices": [
          "Compare : 3 245 600 000 ... 3 245 060 000 → Corrigé : 3 245 600 000 > 3 245 060 000",
          "Arrondis au million le plus proche : 4 678 900 → Corrigé : 5 000 000",
          "Range du plus petit au plus grand : 985 000 000 ; 98 500 000 ; 9 850 000 → Corrigé : 9 850 000 ; 98 500 000 ; 985 000 000"
        ]
      },
      {
        "matiere": "GÉOMÉTRIE",
        "topic": "Calcul d'angle (approfondissement) — la somme des angles d'un triangle",
        "approche": "Consolider le calcul d'angles complémentaires et supplémentaires vu en Septembre, et introduire la somme des angles d'un triangle (180°).",
        "transmission": [
          "Rappel du calcul d'angle complémentaire et supplémentaire vu en Septembre",
          "Présentation de la propriété : la somme des 3 angles d'un triangle vaut toujours 180°",
          "Démonstration collective avec un triangle tracé au tableau et mesuré au rapporteur",
          "Exercice de calcul du troisième angle manquant d'un triangle"
        ],
        "exercices": [
          "Un triangle a des angles de 50° et 70°. Quel est le troisième angle ? → Corrigé : 180° − 50° − 70° = 60°",
          "Un triangle a des angles de 90° et 35°. Quel est le troisième angle ? → Corrigé : 180° − 90° − 35° = 55°"
        ]
      },
      {
        "matiere": "MESURE",
        "topic": "Mesure de masse (approfondissement)",
        "approche": "Consolider les conversions d'unités de masse (g, dag, hg, kg, q, t) vues en Septembre par des exercices de conversion croisée et un problème concret.",
        "transmission": [
          "Rappel du tableau de conversion des masses vu en Septembre",
          "Exercices de conversion croisée impliquant le quintal et la tonne",
          "Résolution d'un problème concret de masse",
          "Correction collective au tableau"
        ],
        "exercices": [
          "Convertis : 3 q 25 kg = ... kg → Corrigé : 325 kg",
          "Convertis : 2 t 150 kg = ... kg → Corrigé : 2 150 kg",
          "Un camion transporte 4 sacs de riz de 50 kg chacun. Quelle est la masse totale en quintaux ? → Corrigé : 200 kg = 2 quintaux"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "La langue et le nez",
        "approche": "Étudier le rôle de la langue (goût) et du nez (odorat) parmi les organes des sens, en lien avec l'étude de l'œil et de l'oreille faite en Septembre.",
        "transmission": [
          "Rappel des 5 sens et de l'étude de l'œil et de l'oreille faite en Septembre",
          "Observation d'un schéma de la langue et du nez",
          "Explication du rôle de la langue (goûter) et du nez (sentir)",
          "Jeu de reconnaissance : identifier une saveur ou une odeur les yeux fermés"
        ],
        "exercices": [
          "Quel est le rôle de la langue ? → Corrigé : permettre de goûter (sentir les saveurs)",
          "Quel est le rôle du nez ? → Corrigé : permettre de sentir les odeurs"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "Rôle du soleil",
        "approche": "Étudier le rôle du soleil pour la Terre (lumière, chaleur, vie), en lien avec les mouvements de la Terre étudiés en Septembre.",
        "transmission": [
          "Rappel des mouvements de la Terre (rotation et révolution) vus en Septembre",
          "Explication du rôle du soleil : source de lumière et de chaleur pour la Terre",
          "Discussion collective : que se passerait-il sans le soleil ?",
          "Lien entre la position du soleil et les saisons"
        ],
        "exercices": [
          "Cite 2 rôles du soleil pour la Terre → Corrigé : donner la lumière et la chaleur (permettre la vie)",
          "Pourquoi le soleil est-il indispensable à la vie sur Terre ? → Corrigé : il apporte la lumière et la chaleur nécessaires aux êtres vivants"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Ny Arabo teto Madagasikara",
        "approche": "Mampahafantatra ny fahatongavan'ny Arabo teto Madagasikara sy ny fitaovana napetrany, manohy ny fandalinana ny vanim-potoana lehibe natombina tamin'ny Septambra.",
        "transmission": [
          "Famerenana fohy ny vanim-potoana lehibe amin'ny tantaran'i Madagasikara natombina tamin'ny Septambra",
          "Fanazavana ny fahatongavan'ny Arabo teny amin'ny morontsiraka atsinanana sy avaratra",
          "Fampahafantarana ny fitaovana nentin'ny Arabo (ex: sorabe, varotra)",
          "Fifampiresahana am-bava momba ny dikan'izany ho an'ny tantaran'ny Malagasy"
        ],
        "exercices": [
          "Aiza avy no nisy ny Arabo tany am-boalohany teto Madagasikara? → Corrigé : teny amin'ny morontsiraka atsinanana sy avaratra",
          "Tanisao zavatra iray nentin'ny Arabo teto Madagasikara → Corrigé : ohatra, ny sorabe, ny varotra (valiny mety samihafa)"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Fifandraisan'ny haben'ny ankohonana sy ny sokajim-pilàna",
        "approche": "Manohy sy manalalina ny lesona momba ny ankohonana natao tamin'ny Septambra, mifantoka amin'ny sokajim-pianakaviana (havana akaiky sy havana lavitra).",
        "transmission": [
          "Famerenana fohy ny adidin'ny zokiny sy zandriny natao tamin'ny Septambra",
          "Fanazavana ny sokajim-pianakaviana : havana akaiky (ray, reny, rahalahy, anabavy) sy havana lavitra (dadatoa, nenitoa, zana-drahalahy)",
          "Fifampiresahana am-bava momba ny fomba fifandraisana amin'ny havana lavitra",
          "Fanoratana fehezanteny fohy milaza sokan-kavana iray"
        ],
        "exercices": [
          "Tanisao havana akaiky iray sy havana lavitra iray → Corrigé : ohatra, akaiky = rahalahy ; lavitra = dadatoa (valiny mety samihafa)",
          "Nahoana no ilaina ny mifandray amin'ny havana rehetra, na akaiky na lavitra? → Corrigé : mba hisy firaisan-kina sy fifanampiana ao amin'ny ankohonana lehibe"
        ]
      },
      {
        "matiere": "ANGLAIS",
        "topic": "Classroom objects",
        "approche": "Apprendre le vocabulaire des objets de la classe en anglais et l'utiliser dans des phrases simples.",
        "transmission": [
          "Présentation du vocabulaire : a desk, a chair, a board, a window, a door",
          "Jeu : montrer l'objet nommé en anglais",
          "Exercice oral : 'What is this? It is a...'",
          "Copie du vocabulaire dans le cahier"
        ],
        "exercices": [
          "Traduis : une fenêtre → Corrigé : a window",
          "Complète : 'This is ... chair.' → Corrigé : a"
        ]
      }
    ]
  },
  {
    "n": 2,
    "dateDebut": "2025/10/06",
    "theme": "Coutumes et vie musicale",
    "sous": "Fanarahana fomban-drazana p.31 · La leçon de musique p.38 · Addition et soustraction avec ou sans retenue",
    "matieres": [
      {
        "matiere": "VAKITENY",
        "topic": "Fanarahana fomban-drazana — p.31",
        "approche": "Mampianatra ny lahatsoratra momba ny fanarahana ny fomban-drazana amin'ny fomba mizotra, manohy ny lohahevitra momba ny havana natombina tamin'ny herinandro voalohany.",
        "transmission": [
          "Famerenana fohy ny lahatsoratra 'Mpihavana tsy mifankalala' teo aloha",
          "Famakian'ny mpampianatra ny lahatsoratra 'Fanarahana fomban-drazana' p.31",
          "Fanazavana ny teny sarotra vaovao",
          "Famakiana mafy nataon'ny mpianatra samihafa",
          "Fanontaniana fahatakarana momba ny fomba fiaraha-monina voaresaka ao amin'ny lahatsoratra"
        ],
        "exercices": [
          "Inona ny fomban-drazana voaresaka ao amin'ny lahatsoratra? → Corrigé : valiny araka ny lahatsoratra p.31",
          "Nahoana no ilaina ny fanajana ny fomban-drazana? → Corrigé : mba hitazonana ny maha-Malagasy sy ny firaisan-kina"
        ]
      },
      {
        "matiere": "F/B",
        "topic": "Ny havana sy ny fifankatiavana",
        "approche": "Manazava ny lohahevitra momba ny havana, manohy ny lesona momba ny andraikitra ao amin'ny ankohonana natao ny herinandro teo aloha.",
        "transmission": [
          "Fifampiresahana am-bava : iza avy no havanao, ary ahoana no fifandraisanareo?",
          "Firaketana an-tsoratra ny hevitra nivoaka momba ny fifankatiavan'ny havana",
          "Fanoratana fehezanteny 2-3 momba ny fotoana iray niarahana tamin'ny havana"
        ],
        "exercices": [
          "Tanisao havana iray ary lazao izay ifandraisanareo aminy → Corrigé : ohatra, ny nenitoako, mifandray tsara aminy (valiny mety samihafa)",
          "Soraty fehezanteny iray milaza fotoana niarahanao tamin'ny havana → Corrigé : fehezanteny feno sy marina"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Ny 'toa' sy ny 'toy'",
        "approche": "Mampianatra ny fampiasana ny teny fampitahana 'toa' sy 'toy' amin'ny fehezanteny.",
        "transmission": [
          "Fanomezana ohatra fehezanteny mampiasa 'toa' (fitovian-javatra tsy voafaritra tsara)",
          "Fanomezana ohatra fehezanteny mampiasa 'toy' (fitovian-javatra voafaritra mazava, arahin'ny 'ny')",
          "Fanavahana am-tsoratra ny fampiasana ny roa tonta",
          "Fanoratana am-pokonolona fehezanteny mampiasa 'toa' sy 'toy'"
        ],
        "exercices": [
          "Ampidiro 'toa' na 'toy': 'Mazoto izy ... ny rahalahiny.' → Corrigé : toy (toy ny rahalahiny)",
          "Manoràta fehezanteny iray mampiasa ny teny 'toa' → Corrigé : fehezanteny feno sy marina mampiasa 'toa'"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Tarika EM / Tarika L",
        "approche": "Manohy ny lesona momba ny teny iray tarika, amin'ny fampidirana ny fanavahana ny teny araka ny sokajiny: Tarika EM (teny miafara amin'ny -ana / -ina, ohatra: vakiana, soratana) sy Tarika L (teny miafara amin'ny -o, ohatra: vakio, soratao).",
        "transmission": [
          "Famerenana fohy ny lesona momba ny fototeny sy ny teny iray tarika",
          "Fanazavana fa ny Tarika EM dia teny miafara amin'ny -ana na -ina, ary ny Tarika L dia teny miafara amin'ny -o",
          "Fanomezana ohatra teny hafa isaky ny sokajy",
          "Fanadihadiana am-tsoratra: asokajio ireto teny ireto araka ny fiafarany"
        ],
        "exercices": [
          "Asokajio ireto teny ireto ho Tarika EM na Tarika L: 'vakiana', 'soratao', 'sasao' → Corrigé : Tarika EM = vakiana ; Tarika L = soratao, sasao",
          "Manorata teny iray miafara amin'ny -ana → Corrigé : ohatra, hidiana, alaina (valiny mety samihafa, tokony hiafara amin'ny -ana na -ina)"
        ]
      },
      {
        "matiere": "LANGAGE",
        "topic": "Une année qui commence mal — expression orale",
        "approche": "Développer l'expression orale autour du texte 'Une année qui commence mal', en travaillant le récit d'un événement malheureux.",
        "transmission": [
          "Écoute du texte lu par l'enseignant",
          "Repérage oral des événements malheureux racontés",
          "Jeu : chaque élève raconte oralement un petit incident vécu (perte d'un objet, retard...)",
          "Mise en commun et correction des phrases orales"
        ],
        "exercices": [
          "Raconte à l'oral en 2 phrases un incident qui t'est arrivé → Corrigé : 2 phrases correctes racontant un événement, avec sujet et verbe",
          "Utilise l'expression 'malheureusement' dans une phrase → Corrigé : phrase correcte employant le mot"
        ]
      },
      {
        "matiere": "LECTURE",
        "topic": "La leçon de musique — p.38",
        "approche": "Étudier le texte 'La leçon de musique' par lecture silencieuse puis à voix haute, avec des questions de compréhension sur le déroulement de la leçon.",
        "transmission": [
          "Lecture silencieuse individuelle du texte",
          "Explication du vocabulaire nouveau (instrument, mélodie, chanter)",
          "Lecture à voix haute par plusieurs élèves",
          "Questions de compréhension écrites sur le texte"
        ],
        "exercices": [
          "Que font les élèves pendant la leçon de musique, d'après le texte ? → Corrigé : réponse fidèle au texte étudié p.38 (ex. ils chantent, ils écoutent)",
          "Quel instrument est cité dans le texte ? → Corrigé : réponse fidèle au texte étudié"
        ]
      },
      {
        "matiere": "VOCABULAIRE",
        "topic": "L'école",
        "approche": "Constituer le champ lexical de l'école (lieux, personnes, matières) à partir des textes étudiés en Lecture et Langage.",
        "transmission": [
          "Relevé collectif au tableau des mots liés à l'école (cour, bibliothèque, directeur, enseignant...)",
          "Classement des mots en catégories : lieux / personnes",
          "Copie du vocabulaire avec exemple de phrase"
        ],
        "exercices": [
          "Classe ces mots : cour, bibliothécaire, salle de classe, maître → Corrigé : lieux = cour, salle de classe ; personnes = bibliothécaire, maître",
          "Utilise le mot 'bibliothèque' dans une phrase → Corrigé : phrase correcte employant le mot"
        ]
      },
      {
        "matiere": "GRAMMAIRE",
        "topic": "Les déterminants",
        "approche": "Identifier les déterminants (articles définis, indéfinis) qui accompagnent le nom dans des phrases tirées des textes étudiés.",
        "transmission": [
          "Rappel des pronoms personnels vus la semaine précédente",
          "Présentation des déterminants : articles définis (le, la, les) et indéfinis (un, une, des)",
          "Repérage des déterminants dans 3 phrases du texte",
          "Exercice écrit : entourer le déterminant et souligner le nom"
        ],
        "exercices": [
          "Entoure le déterminant : 'Les élèves chantent une chanson.' → Corrigé : Les (déterminant) ; une (déterminant)",
          "Complète avec le déterminant qui convient : '... maître joue ... instrument.' → Corrigé : Le maître joue un instrument."
        ]
      },
      {
        "matiere": "ORTHOGRAPHE",
        "topic": "Son / sont",
        "approche": "Distinguer à l'écrit les homophones grammaticaux 'son' (déterminant possessif) et 'sont' (verbe être) par une règle simple de remplacement.",
        "transmission": [
          "Rappel : 'sont' peut être remplacé par 'étaient', 'son' peut être remplacé par 'mon' ou 'ton'",
          "Exercice à trous : compléter avec son/sont",
          "Correction collective avec justification de chaque choix"
        ],
        "exercices": [
          "Complète : 'Les élèves ... contents de ... instrument.' → Corrigé : 'Les élèves sont contents de son instrument.'",
          "Complète : '... cahier ... resté à la maison.' → Corrigé : 'Son cahier est resté à la maison.'"
        ]
      },
      {
        "matiere": "CONJUGAISON",
        "topic": "Le verbe du 2e groupe aux 4 temps de l'indicatif",
        "approche": "Conjuguer un verbe du 2e groupe (ex. 'finir') au présent, à l'imparfait, au futur simple et au passé composé de l'indicatif.",
        "transmission": [
          "Rappel des verbes en -eler/-eter vus la semaine précédente",
          "Présentation de la terminaison régulière du 2e groupe (-is, -is, -it, -issons...) à chaque temps",
          "Exercice de conjugaison écrit sur le verbe 'finir' aux 4 temps",
          "Correction collective avec tableau récapitulatif"
        ],
        "exercices": [
          "Conjugue 'finir' au présent, 3e personne du pluriel : 'Ils ... leur exercice.' → Corrigé : finissent",
          "Conjugue 'finir' à l'imparfait, 1ère personne du singulier : 'Je ... mon travail.' → Corrigé : finissais",
          "Conjugue 'finir' au passé composé, 2e personne du singulier : 'Tu ... la leçon.' → Corrigé : as fini"
        ]
      },
      {
        "matiere": "ARITHMÉTIQUE",
        "topic": "Addition et soustraction avec ou sans retenue (grands nombres)",
        "approche": "Consolider la technique de l'addition et de la soustraction posées, avec ou sans retenue, appliquée aux grands nombres étudiés.",
        "transmission": [
          "Rappel de la technique de l'addition et de la soustraction posées",
          "Distinction entre opération avec retenue et sans retenue",
          "Exercices d'addition posée avec et sans retenue",
          "Exercices de soustraction posée avec retenue"
        ],
        "exercices": [
          "Pose et calcule (sans retenue) : 234 512 + 143 236 → Corrigé : 377 748",
          "Pose et calcule (avec retenue) : 3 456 789 + 2 987 654 → Corrigé : 6 444 443",
          "Pose et calcule : 8 234 561 − 3 456 789 → Corrigé : 4 777 772"
        ]
      },
      {
        "matiere": "GÉOMÉTRIE",
        "topic": "Le carré : calcul de périmètre",
        "approche": "Calculer le périmètre d'un carré à partir de la mesure de son côté, en appliquant la formule P = côté × 4.",
        "transmission": [
          "Rappel des propriétés du carré (4 côtés égaux)",
          "Présentation de la formule du périmètre : P = c × 4",
          "Exercice de calcul de périmètre à partir d'un côté donné",
          "Vérification par addition des 4 côtés"
        ],
        "exercices": [
          "Calcule le périmètre d'un carré de côté 8 cm → Corrigé : 8 × 4 = 32 cm",
          "Calcule le périmètre d'un carré de côté 12,5 cm → Corrigé : 12,5 × 4 = 50 cm"
        ]
      },
      {
        "matiere": "MESURE",
        "topic": "Mesure de capacité",
        "approche": "Étudier les unités de capacité (L, dL, cL, mL) et leurs conversions à partir du tableau de conversion.",
        "transmission": [
          "Présentation du tableau de conversion : hL, daL, L, dL, cL, mL",
          "Exercices de conversion simples (L en cL, mL en L)",
          "Manipulation d'un récipient gradué si disponible"
        ],
        "exercices": [
          "Convertis : 2 L = ... cL → Corrigé : 200 cL",
          "Convertis : 750 mL = ... L → Corrigé : 0,75 L"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "La peau / le système nerveux",
        "approche": "Étudier le rôle de la peau (toucher, protection) et une introduction simple au système nerveux (transmission des sensations au cerveau).",
        "transmission": [
          "Observation d'un schéma de la peau",
          "Explication du rôle de la peau : protection et toucher",
          "Introduction simple : le cerveau reçoit les informations des sens par les nerfs",
          "Jeu de reconnaissance au toucher"
        ],
        "exercices": [
          "Quel est le rôle de la peau ? → Corrigé : protéger le corps et permettre le toucher",
          "Quel organe reçoit les informations envoyées par les sens ? → Corrigé : le cerveau"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "Les océans et les continents",
        "approche": "Identifier les 5 océans et les 5 continents sur le planisphère, en lien avec l'observation du globe faite en Septembre.",
        "transmission": [
          "Rappel du globe et du planisphère vus en Septembre",
          "Présentation des 5 continents (Afrique, Asie, Amérique, Europe, Océanie)",
          "Présentation des 5 océans (Pacifique, Atlantique, Indien, Arctique, Antarctique)",
          "Repérage collectif de Madagascar et de l'océan Indien sur la carte"
        ],
        "exercices": [
          "Cite les 5 continents → Corrigé : Afrique, Asie, Amérique, Europe, Océanie",
          "Sur quel océan se trouve Madagascar ? → Corrigé : l'océan Indien"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Fiainan'ny Malagasy fahagola",
        "approche": "Mampahafantatra ny fomba fiainan'ny Malagasy fahiny (fahagola), manohy ny lesona momba ny Arabo teto Madagasikara natao ny herinandro teo aloha.",
        "transmission": [
          "Famerenana fohy ny lesona momba ny Arabo teto Madagasikara",
          "Fanazavana ny fomba fiainan'ny Malagasy fahagola: fambolena, fiompiana, fitaovana nampiasaina",
          "Fifampiresahana am-bava momba ny fahasamihafan'ny fiainana fahiny sy ankehitriny"
        ],
        "exercices": [
          "Tanisao asa fivelomana iray fanaon'ny Malagasy fahagola → Corrigé : ohatra, fambolena, fiompiana (valiny mety samihafa)",
          "Inona no fahasamihafana iray eo amin'ny fiainana fahagola sy ny ankehitriny? → Corrigé : valiny mety samihafa, ohatra ny fitaovana ampiasaina"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Ny fifanakalozan-kevitra",
        "approche": "Mampianatra ny lanjan'ny fifanakalozan-kevitra eo amin'ny mpiara-belona mba hahazoana vahaolana iombonana.",
        "transmission": [
          "Fifampiresahana am-bava momba ny fomba fifanakalozan-kevitra ao an-tsekoly na an-tanàna",
          "Fanadihadiana ny soa entin'ny fifanakalozan-kevitra (fahitana vahaolana, fifampidinihina)",
          "Fanoratana fehezanteny fohy milaza ohatra fifanakalozan-kevitra"
        ],
        "exercices": [
          "Nahoana no ilaina ny fifanakalozan-kevitra? → Corrigé : mba hahazoana vahaolana tsara sy hifampidinihina",
          "Tanisao toe-javatra iray ilàna fifanakalozan-kevitra → Corrigé : ohatra, fandaharana asa ao an-tanàna (valiny mety samihafa)"
        ]
      },
      {
        "matiere": "ANGLAIS",
        "topic": "The weather",
        "approche": "Apprendre le vocabulaire de la météo en anglais et l'utiliser pour décrire le temps qu'il fait.",
        "transmission": [
          "Présentation du vocabulaire : sunny, rainy, cloudy, windy, hot, cold",
          "Jeu : mimer ou dessiner un temps et le faire deviner en anglais",
          "Exercice oral : 'What is the weather like today?'"
        ],
        "exercices": [
          "Traduis : il fait beau → Corrigé : It is sunny",
          "Complète : 'Today, it is ...' (pluvieux) → Corrigé : rainy"
        ]
      }
    ]
  },
  {
    "n": 3,
    "dateDebut": "2025/10/13",
    "theme": "Vie sociale et fêtes de mariage",
    "sous": "Mananjary — Lov p.35 · Projet de fête · Multiplication et division des nombres entiers",
    "matieres": [
      {
        "matiere": "VAKITENY",
        "topic": "Mananjary — Lov p.35",
        "approche": "Mampianatra ny lahatsoratra momba an'i Mananjary amin'ny fomba mizotra, mifantoka amin'ny fampahalalana toerana sy fomba fiainana any amin'ny faritra atsimo-antsinanana.",
        "transmission": [
          "Famerenana fohy ny lahatsoratra 'Fanarahana fomban-drazana' teo aloha",
          "Famakian'ny mpampianatra ny lahatsoratra 'Mananjary' p.35",
          "Fanazavana ny teny sarotra vaovao",
          "Famakiana mafy nataon'ny mpianatra samihafa",
          "Fanontaniana fahatakarana momba an'i Mananjary sy ny mponina any"
        ],
        "exercices": [
          "Aiza no misy an'i Mananjary? → Corrigé : any amin'ny faritra atsimo-antsinanan'i Madagasikara",
          "Inona no voaresaka momba an'i Mananjary ao amin'ny lahatsoratra? → Corrigé : famintinana marina araka ny lahatsoratra p.35"
        ]
      },
      {
        "matiere": "F/B",
        "topic": "Ny tanàna",
        "approche": "Manazava ny lohahevitra 'ny tanàna', mifototra amin'ny lahatsoratra 'Mananjary', mifantoka amin'ny toetoetran'ny tanàna iray sy ny mponina ao aminy.",
        "transmission": [
          "Fifampiresahana am-bava : inona no hita ao amin'ny tanàna iray (trano, làlana, tsena)?",
          "Firaketana an-tsoratra ny hevitra nivoaka momba ny tanàna",
          "Fanoratana fehezanteny 2-3 momba ny tanànanao"
        ],
        "exercices": [
          "Tanisao zavatra 3 hita ao amin'ny tanàna iray → Corrigé : ohatra, trano, làlana, tsena (valiny mety samihafa)",
          "Soraty fehezanteny iray mamaritra ny tanànanao → Corrigé : fehezanteny feno sy marina"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Fanoratana sampanteny mialoha ny H",
        "approche": "Mampianatra ny fitsipika fanoratana ny sampanteny alohan'ny litera H amin'ny teny malagasy.",
        "transmission": [
          "Fanomezana ohatra teny misy H hita ao amin'ny lahatsoratra novakiana",
          "Fanazavana ny fitsipika fanoratana ny sampanteny mialoha ny H",
          "Fanoratana am-pokonolona teny hafa misy H"
        ],
        "exercices": [
          "Ampidiro ny sampanteny marina alohan'ny H amin'ny teny nomena → Corrigé : araka ny fitsipika nampianarina",
          "Manorata teny iray misy H → Corrigé : ohatra, hazo, hena (valiny mety samihafa)"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "EM ao amin'ny TEM / L ao amin'ny TL",
        "approche": "Manohy ny fandalinana ny Tarika EM sy Tarika L amin'ny fampidirana ny endrika lava kokoa (TEM sy TL), mifototra amin'ny lesona natao ny herinandro teo aloha.",
        "transmission": [
          "Famerenana fohy ny Tarika EM sy Tarika L natao ny herinandro teo aloha",
          "Fanazavana ny fisian'ny teny lava kokoa mitondra ny EM na ny L ao anatiny (TEM, TL)",
          "Fanomezana ohatra teny an-tsoratra",
          "Fanadihadiana am-tsoratra"
        ],
        "exercices": [
          "Tondroy ny EM ao amin'ny teny 'vakiana' → Corrigé : ny 'ana' dia mari-pamaranana amin'ny sokajy EM",
          "Manoràta teny iray hafa misy L ao anatiny → Corrigé : ohatra, soratao, vakio (valiny mety samihafa)"
        ]
      },
      {
        "matiere": "LANGAGE",
        "topic": "Vive les mariés — présentation orale",
        "approche": "Introduire le vocabulaire du mariage à travers une discussion orale guidée, en lien avec le texte 'Vive les mariés'.",
        "transmission": [
          "Discussion collective : avez-vous déjà assisté à un mariage ?",
          "Présentation orale du vocabulaire : les mariés, la fête, les invités, féliciter",
          "Jeu de rôle : féliciter oralement des mariés imaginaires"
        ],
        "exercices": [
          "Félicite oralement des mariés en une phrase → Corrigé : phrase correcte de félicitations (ex. 'Félicitations aux mariés !')",
          "Cite 2 mots liés au mariage → Corrigé : ex. les mariés, la fête (toute paire correcte)"
        ]
      },
      {
        "matiere": "LECTURE",
        "topic": "Projet de fête",
        "approche": "Étudier le texte 'Projet de fête' par lecture silencieuse puis à voix haute, avec des questions de compréhension sur l'organisation d'une fête.",
        "transmission": [
          "Lecture silencieuse individuelle du texte",
          "Explication du vocabulaire nouveau (organiser, préparatifs, invités)",
          "Lecture à voix haute par plusieurs élèves",
          "Questions de compréhension écrites sur les préparatifs décrits dans le texte"
        ],
        "exercices": [
          "Quelle fête est organisée dans le texte ? → Corrigé : réponse fidèle au texte étudié",
          "Cite un préparatif mentionné dans le texte → Corrigé : réponse fidèle au texte (ex. préparer les invitations, le repas)"
        ]
      },
      {
        "matiere": "VOCABULAIRE",
        "topic": "Les événements de la vie",
        "approche": "Constituer le champ lexical des grands événements de la vie (naissance, mariage, fête) à partir des textes étudiés.",
        "transmission": [
          "Relevé collectif au tableau des mots liés aux événements de la vie",
          "Classement des mots par type d'événement",
          "Copie du vocabulaire avec exemple de phrase"
        ],
        "exercices": [
          "Cite 2 événements importants de la vie → Corrigé : ex. la naissance, le mariage (toute paire correcte)",
          "Utilise le mot 'invités' dans une phrase → Corrigé : phrase correcte employant le mot"
        ]
      },
      {
        "matiere": "GRAMMAIRE",
        "topic": "Genre et nombre des noms",
        "approche": "Identifier le genre (masculin/féminin) et le nombre (singulier/pluriel) des noms à partir de phrases tirées des textes étudiés.",
        "transmission": [
          "Rappel des déterminants vus la semaine précédente",
          "Présentation du genre du nom (masculin/féminin) et des marques associées",
          "Présentation du nombre du nom (singulier/pluriel) et de la marque du pluriel (-s)",
          "Exercice écrit de classement de noms selon leur genre et leur nombre"
        ],
        "exercices": [
          "Donne le féminin du nom : 'le marié' → Corrigé : la mariée",
          "Donne le pluriel du nom : 'un invité' → Corrigé : des invités"
        ]
      },
      {
        "matiere": "ORTHOGRAPHE",
        "topic": "Accords du sujet et du verbe",
        "approche": "Appliquer la règle d'accord en personne et en nombre entre le sujet et le verbe conjugué, à partir de phrases tirées des textes étudiés.",
        "transmission": [
          "Rappel : le verbe s'accorde toujours avec son sujet en personne et en nombre",
          "Repérage du sujet et vérification de l'accord du verbe dans 3 phrases du texte",
          "Exercice à trous : accorder le verbe donné à l'infinitif avec le sujet",
          "Correction collective"
        ],
        "exercices": [
          "Accorde le verbe : 'Les invités (arriver) à la fête.' → Corrigé : Les invités arrivent à la fête.",
          "Accorde le verbe : 'La mariée (sourire).' → Corrigé : La mariée sourit."
        ]
      },
      {
        "matiere": "CONJUGAISON",
        "topic": "Les verbes impersonnels : il faut",
        "approche": "Étudier la conjugaison et l'emploi du verbe impersonnel 'il faut' (falloir) à travers des phrases liées aux préparatifs d'une fête.",
        "transmission": [
          "Rappel du verbe 'finir' aux 4 temps vu la semaine précédente",
          "Présentation du verbe impersonnel 'il faut' : il ne se conjugue qu'à la 3e personne du singulier",
          "Exercice écrit : compléter des phrases avec 'il faut' suivi d'un infinitif",
          "Correction collective"
        ],
        "exercices": [
          "Complète : '... préparer les invitations avant la fête.' → Corrigé : Il faut préparer les invitations avant la fête.",
          "Mets au passé composé : 'Il faut inviter tout le monde.' → Corrigé : Il a fallu inviter tout le monde."
        ]
      },
      {
        "matiere": "ARITHMÉTIQUE",
        "topic": "Multiplication et division des nombres entiers",
        "approche": "Consolider la technique de la multiplication posée et de la division posée sur des nombres entiers, avec des problèmes concrets.",
        "transmission": [
          "Rappel de la technique de la multiplication posée",
          "Exercice de multiplication par un nombre à 2 chiffres",
          "Rappel de la technique de la division posée",
          "Exercice de division par un nombre à 1 chiffre"
        ],
        "exercices": [
          "Pose et calcule : 3 245 × 24 → Corrigé : 77 880",
          "Pose et calcule : 8 456 ÷ 7 → Corrigé : 1 208"
        ]
      },
      {
        "matiere": "GÉOMÉTRIE",
        "topic": "Le carré : calcul d'un côté",
        "approche": "Calculer la mesure du côté d'un carré à partir de son périmètre connu, en utilisant la relation inverse c = P ÷ 4.",
        "transmission": [
          "Rappel de la formule du périmètre du carré vue la semaine précédente",
          "Présentation de la relation inverse : côté = périmètre ÷ 4",
          "Exercice de calcul du côté à partir d'un périmètre donné",
          "Vérification par multiplication"
        ],
        "exercices": [
          "Le périmètre d'un carré est 36 cm. Quel est son côté ? → Corrigé : 36 ÷ 4 = 9 cm",
          "Le périmètre d'un carré est 52 cm. Quel est son côté ? → Corrigé : 52 ÷ 4 = 13 cm"
        ]
      },
      {
        "matiere": "MESURE",
        "topic": "Mesure de capacité (approfondissement)",
        "approche": "Consolider les conversions d'unités de capacité par des exercices de conversion croisée et un problème concret.",
        "transmission": [
          "Rappel du tableau de conversion des capacités vu la semaine précédente",
          "Exercices de conversion croisée (hL en L, cL en mL)",
          "Résolution d'un problème concret de capacité"
        ],
        "exercices": [
          "Convertis : 3 hL = ... L → Corrigé : 300 L",
          "Un seau contient 8 L d'eau. Combien de verres de 25 cL peut-on remplir ? → Corrigé : 800 ÷ 25 = 32 verres"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "L'appareil digestif / les dents",
        "approche": "Étudier le trajet des aliments dans l'appareil digestif et le rôle des dents dans la mastication.",
        "transmission": [
          "Observation d'un schéma de l'appareil digestif",
          "Explication du trajet des aliments : bouche, œsophage, estomac, intestins",
          "Présentation des types de dents et de leur rôle (incisives, canines, molaires)",
          "Jeu de questions-réponses"
        ],
        "exercices": [
          "Cite 2 organes de l'appareil digestif → Corrigé : ex. l'estomac, les intestins (toute paire correcte)",
          "Quel est le rôle des dents ? → Corrigé : couper et broyer les aliments (mastication)"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "Madagascar dans le monde",
        "approche": "Situer Madagascar sur le planisphère par rapport aux continents et océans étudiés la semaine précédente.",
        "transmission": [
          "Rappel des continents et océans vus la semaine précédente",
          "Localisation précise de Madagascar : océan Indien, au large de l'Afrique",
          "Comparaison de la taille de Madagascar avec d'autres pays",
          "Repérage des pays voisins de Madagascar (îles de l'océan Indien)"
        ],
        "exercices": [
          "Sur quel continent se rapproche géographiquement Madagascar ? → Corrigé : l'Afrique (île de l'océan Indien, au large de l'Afrique)",
          "Madagascar est-elle une île ou un continent ? → Corrigé : une île"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Nahitan'ny Eoropeana an'i Madagasikara voalohany",
        "approche": "Mampahafantatra ny nahitan'ny Eoropeana voalohany an'i Madagasikara, manohy ny fandalinana ny vanim-potoana lehibe.",
        "transmission": [
          "Famerenana fohy ny lesona momba ny fiainan'ny Malagasy fahagola",
          "Fanazavana ny nahitan'ny Eoropeana (Portiogey) an'i Madagasikara voalohany, tamin'ny taonjato faha-16",
          "Fifampiresahana am-bava momba ny fifandraisana niseho tamin'izany"
        ],
        "exercices": [
          "Iza no Eoropeana voalohany nahita an'i Madagasikara? → Corrigé : ny Portiogey",
          "Tamin'ny taonjato firy no nahitana an'i Madagasikara voalohany? → Corrigé : ny taonjato faha-16"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Fanajana ny teny nomena",
        "approche": "Mampianatra ny lanjan'ny fanajana ny teny nomena (ny fahatokiana) eo amin'ny fiarahamonina.",
        "transmission": [
          "Fifampiresahana am-bava momba ny hoe inona no atao hoe 'teny nomena'",
          "Fanadihadiana ny vokatry ny tsy fanajana ny teny nomena",
          "Fanoratana fehezanteny fohy milaza ohatra fanajana teny nomena"
        ],
        "exercices": [
          "Inona no atao hoe 'manaja ny teny nomena'? → Corrigé : ny fanatanterahana izay nampanantenaina",
          "Nahoana no ilaina ny fanajana ny teny nomena? → Corrigé : mba hisy fahatokiana eo amin'ny mpiara-belona"
        ]
      },
      {
        "matiere": "ANGLAIS",
        "topic": "The clothes",
        "approche": "Apprendre le vocabulaire des vêtements en anglais et l'utiliser dans des phrases simples.",
        "transmission": [
          "Présentation du vocabulaire : a shirt, a dress, trousers, shoes, a hat",
          "Jeu : montrer ou dessiner le vêtement nommé en anglais",
          "Exercice oral : 'What are you wearing?'"
        ],
        "exercices": [
          "Traduis : une robe → Corrigé : a dress",
          "Complète : 'He is wearing ... shirt.' → Corrigé : a"
        ]
      }
    ]
  },
  {
    "n": 4,
    "dateDebut": "2025/10/27",
    "theme": "Vie professionnelle et vie en ville",
    "sous": "Trano an-tanan-dehibe · L'invitation · Aire du carré",
    "matieres": [
      {
        "matiere": "VAKITENY",
        "topic": "Trano an-tanan-dehibe",
        "approche": "Mampianatra ny lahatsoratra momba ny trano any an-tanan-dehibe amin'ny fomba mizotra, mifantoka amin'ny fahasamihafan'ny trano an-tanàn-dehibe sy an-tsaha.",
        "transmission": [
          "Famerenana fohy ny lahatsoratra 'Mananjary' teo aloha",
          "Famakian'ny mpampianatra ny lahatsoratra 'Trano an-tanan-dehibe'",
          "Fanazavana ny teny sarotra vaovao",
          "Famakiana mafy nataon'ny mpianatra samihafa",
          "Fanontaniana fahatakarana momba ny endriky ny trano an-tanan-dehibe"
        ],
        "exercices": [
          "Ahoana ny endriky ny trano any an-tanan-dehibe, araka ny lahatsoratra? → Corrigé : valiny araka ny lahatsoratra novakiana",
          "Ampitahao ny trano an-tanan-dehibe sy ny trano an-tsaha → Corrigé : famintinana marina araka ny fahasamihafana voaresaka"
        ]
      },
      {
        "matiere": "F/B",
        "topic": "Asa aman-draharaha",
        "approche": "Manazava ny lohahevitra 'asa aman-draharaha', mifototra amin'ny fahasamihafan'ny asa fanao any an-tanan-dehibe sy an-tsaha.",
        "transmission": [
          "Fifampiresahana am-bava : inona avy ny asa fanaon'ny olona any an-tanan-dehibe?",
          "Firaketana an-tsoratra ny asa samihafa hitan'ny mpianatra",
          "Fanoratana fehezanteny 2-3 momba ny asa tiana hatao rahampitso"
        ],
        "exercices": [
          "Tanisao asa 2 fanaon'ny olona any an-tanan-dehibe → Corrigé : ohatra, mpiasam-panjakana, mpivarotra (valiny mety samihafa)",
          "Soraty fehezanteny iray milaza ny asa tianao hatao rahampitso → Corrigé : fehezanteny feno sy marina"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Aminy sy amin'ny",
        "approche": "Mampianatra ny fanavahana ny fampiasana 'aminy' (arahin'ny mpisolo tena) sy 'amin'ny' (arahin'ny anarana).",
        "transmission": [
          "Fanomezana ohatra fehezanteny mampiasa 'aminy'",
          "Fanomezana ohatra fehezanteny mampiasa 'amin'ny'",
          "Fanazavana ny fitsipika: 'aminy' rehefa arahin'ny mpisolo tena, 'amin'ny' rehefa arahin'ny anarana",
          "Fanoratana am-pokonolona fehezanteny mampiasa ny roa tonta"
        ],
        "exercices": [
          "Ampidiro 'aminy' na 'amin'ny': 'Miaraka ... izy.' → Corrigé : aminy",
          "Ampidiro 'aminy' na 'amin'ny': 'Miasa ... tanàna izy.' → Corrigé : amin'ny (amin'ny tanàna)"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Fameno azo foanana",
        "approche": "Mampianatra ny hoe fameno azo foanana (complément qu'on peut supprimer sans détruire le sens de la phrase), mifanohy amin'ny lesona momba ny Tarika EM sy L.",
        "transmission": [
          "Famerenana fohy ny lesona momba ny Tarika EM sy L natao teo aloha",
          "Fanazavana fa ny fameno sasany dia azo esorina amin'ny fehezanteny nefa mbola mazava ihany ny hevitra",
          "Fanaovana ohatra am-bava: fehezanteny misy fameno azo foanana",
          "Fanadihadiana am-tsoratra: esory ny fameno azo foanana"
        ],
        "exercices": [
          "Esory ny fameno azo foanana: 'Miasa any an-tanàna izy isan'andro.' → Corrigé : 'Miasa any an-tanàna izy.' (azo esorina ny 'isan'andro')",
          "Tondroy ny fameno azo foanana ao amin'ny fehezanteny: 'Mianatra tsara amin'ny alina ny mpianatra.' → Corrigé : 'amin'ny alina' (fameno azo esorina)"
        ]
      },
      {
        "matiere": "LANGAGE",
        "topic": "Vive les mariés (suite) — présentation orale",
        "approche": "Poursuivre l'expression orale sur le thème du mariage en enrichissant le vocabulaire des félicitations et des vœux.",
        "transmission": [
          "Rappel du vocabulaire du mariage vu la semaine précédente",
          "Présentation de formules de vœux (Tous nos vœux de bonheur, Félicitations)",
          "Jeu de rôle : rédiger et dire oralement un petit discours de félicitations"
        ],
        "exercices": [
          "Formule oralement un vœu de bonheur pour des mariés → Corrigé : phrase correcte de vœux (ex. 'Tous nos vœux de bonheur !')",
          "Utilise l'expression 'nos vœux' dans une phrase → Corrigé : phrase correcte employant l'expression"
        ]
      },
      {
        "matiere": "LECTURE",
        "topic": "L'invitation",
        "approche": "Étudier le texte 'L'invitation' par lecture silencieuse puis à voix haute, avec des questions de compréhension sur le contenu d'une carte d'invitation.",
        "transmission": [
          "Lecture silencieuse individuelle du texte",
          "Explication du vocabulaire nouveau (invitation, convier, RSVP)",
          "Lecture à voix haute par plusieurs élèves",
          "Questions de compréhension écrites sur les informations de l'invitation"
        ],
        "exercices": [
          "Quelles informations figurent sur l'invitation présentée dans le texte ? → Corrigé : réponse fidèle au texte étudié (date, lieu, heure de la fête)",
          "Qui envoie l'invitation, d'après le texte ? → Corrigé : réponse fidèle au texte étudié"
        ]
      },
      {
        "matiere": "VOCABULAIRE",
        "topic": "Moment de la vie, relations sociales",
        "approche": "Enrichir le champ lexical des moments de la vie et des relations sociales à partir des textes du mois.",
        "transmission": [
          "Relevé collectif des mots liés aux relations sociales dans les textes étudiés",
          "Classement des mots : moments de vie / relations sociales",
          "Copie du vocabulaire avec exemple de phrase"
        ],
        "exercices": [
          "Cite 2 mots liés aux relations sociales → Corrigé : ex. ami, voisin (toute paire correcte)",
          "Utilise le mot 'convier' dans une phrase → Corrigé : phrase correcte employant le mot"
        ]
      },
      {
        "matiere": "GRAMMAIRE",
        "topic": "Genre et nombre des adjectifs",
        "approche": "Appliquer l'accord de l'adjectif qualificatif en genre et en nombre avec le nom qu'il qualifie.",
        "transmission": [
          "Rappel du genre et du nombre des noms vus la semaine précédente",
          "Présentation de la règle d'accord de l'adjectif avec le nom (genre et nombre)",
          "Exercice écrit d'accord de l'adjectif donné entre parenthèses",
          "Correction collective"
        ],
        "exercices": [
          "Accorde l'adjectif : 'une maison (grand)' → Corrigé : une grande maison",
          "Accorde l'adjectif : 'des invités (content)' → Corrigé : des invités contents"
        ]
      },
      {
        "matiere": "ORTHOGRAPHE",
        "topic": "Ces / ses (NN p.88)",
        "approche": "Distinguer à l'écrit les homophones grammaticaux 'ces' (déterminant démonstratif) et 'ses' (déterminant possessif) par une règle simple de remplacement.",
        "transmission": [
          "Rappel : 'ces' peut être remplacé par 'ce...-là', 'ses' peut être remplacé par 'ses propres'",
          "Exercice à trous : compléter avec ces/ses",
          "Correction collective avec justification"
        ],
        "exercices": [
          "Complète : 'Le marié salue ... invités avec ... amis.' → Corrigé : 'Le marié salue ces invités avec ses amis.'",
          "Complète : '... maisons appartiennent à ... parents.' → Corrigé : 'Ces maisons appartiennent à ses parents.'"
        ]
      },
      {
        "matiere": "CONJUGAISON",
        "topic": "Le verbe \"faire\"",
        "approche": "Conjuguer le verbe irrégulier 'faire' au présent, à l'imparfait, au futur simple et au passé composé de l'indicatif.",
        "transmission": [
          "Rappel du verbe impersonnel 'il faut' vu la semaine précédente",
          "Présentation de la conjugaison irrégulière de 'faire' à chaque temps",
          "Exercice de conjugaison écrit sur 'faire' aux 4 temps",
          "Correction collective avec tableau récapitulatif"
        ],
        "exercices": [
          "Conjugue 'faire' au présent, 1ère personne du pluriel : 'Nous ... les préparatifs.' → Corrigé : faisons",
          "Conjugue 'faire' au futur simple, 3e personne du singulier : 'Elle ... un beau discours.' → Corrigé : fera",
          "Conjugue 'faire' au passé composé, 2e personne du singulier : 'Tu ... la fête.' → Corrigé : as fait"
        ]
      },
      {
        "matiere": "ARITHMÉTIQUE",
        "topic": "Multiplication et division des nombres entiers (problèmes)",
        "approche": "Résoudre des problèmes concrets faisant appel à la multiplication et à la division de nombres entiers.",
        "transmission": [
          "Rappel de la technique de multiplication et division posées vue la semaine précédente",
          "Résolution collective d'un problème de multiplication",
          "Résolution collective d'un problème de division",
          "Exercices individuels"
        ],
        "exercices": [
          "Un camion transporte 3 250 kg de riz par voyage. Combien de kg transporte-t-il en 8 voyages ? → Corrigé : 3 250 × 8 = 26 000 kg",
          "Une coopérative répartit 5 796 kg de riz en sacs de 12 kg. Combien de sacs peut-elle remplir ? → Corrigé : 5 796 ÷ 12 = 483 sacs"
        ]
      },
      {
        "matiere": "GÉOMÉTRIE",
        "topic": "Le carré : calcul d'aire",
        "approche": "Calculer l'aire d'un carré à partir de la mesure de son côté, en appliquant la formule A = côté × côté.",
        "transmission": [
          "Rappel des formules du périmètre et du côté du carré vues précédemment",
          "Présentation de la formule de l'aire : A = c × c",
          "Exercice de calcul d'aire à partir d'un côté donné",
          "Distinction entre périmètre (cm) et aire (cm²)"
        ],
        "exercices": [
          "Calcule l'aire d'un carré de côté 7 cm → Corrigé : 7 × 7 = 49 cm²",
          "Calcule l'aire d'un carré de côté 11 cm → Corrigé : 11 × 11 = 121 cm²"
        ]
      },
      {
        "matiere": "MESURE",
        "topic": "Mesure de surface",
        "approche": "Introduire les unités de surface (cm², dm², m²) et leur relation avec les unités de longueur déjà étudiées.",
        "transmission": [
          "Rappel du calcul de l'aire du carré vu en Géométrie",
          "Présentation des unités de surface : cm², dm², m²",
          "Présentation du tableau de conversion des unités de surface (par 100)",
          "Exercices de conversion simples"
        ],
        "exercices": [
          "Convertis : 1 m² = ... cm² → Corrigé : 10 000 cm²",
          "Convertis : 500 cm² = ... dm² → Corrigé : 5 dm²"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "Les aliments",
        "approche": "Classer les aliments selon leur origine (animale, végétale) et leur rôle pour le corps, en lien avec l'appareil digestif étudié précédemment.",
        "transmission": [
          "Rappel de l'appareil digestif vu la semaine précédente",
          "Classement collectif des aliments : origine animale / origine végétale",
          "Présentation des groupes d'aliments et de leur rôle (croissance, énergie)",
          "Jeu de classement d'images d'aliments"
        ],
        "exercices": [
          "Classe ces aliments : riz, poisson, brède, lait → Corrigé : végétale = riz, brède ; animale = poisson, lait",
          "Cite un aliment qui donne de l'énergie → Corrigé : ex. le riz (toute réponse cohérente acceptée)"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "Les îles de l'océan Indien",
        "approche": "Situer les principales îles de l'océan Indien voisines de Madagascar sur le planisphère.",
        "transmission": [
          "Rappel de la position de Madagascar dans l'océan Indien vue la semaine précédente",
          "Présentation des îles voisines : Maurice, La Réunion, Comores, Seychelles",
          "Repérage collectif sur la carte",
          "Discussion sur les échanges entre ces îles et Madagascar"
        ],
        "exercices": [
          "Cite 2 îles de l'océan Indien voisines de Madagascar → Corrigé : ex. Maurice, La Réunion (toute paire correcte parmi Maurice, La Réunion, Comores, Seychelles)",
          "Dans quel océan se trouvent ces îles ? → Corrigé : l'océan Indien"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Ireo fanjakana nisy teto Madagasikara",
        "approche": "Mampahafantatra amin'ny ankapobeny ny fanjakana samihafa nisy teto Madagasikara talohan'ny fanjanahantany, ho fanomanana ny lesona momba ny fanjakana Betsileo, Sakalava, Betsimisaraka ho hianarana amin'ny Novambra.",
        "transmission": [
          "Famerenana fohy ny lesona momba ny nahitan'ny Eoropeana an'i Madagasikara",
          "Fanolorana amin'ny ankapobeny ireo fanjakana lehibe nisy teto Madagasikara (Merina, Betsileo, Sakalava, Betsimisaraka)",
          "Fijerena sary na sarintany mizotra raha misy"
        ],
        "exercices": [
          "Tanisao fanjakana iray nisy teto Madagasikara → Corrigé : ohatra, Merina, Betsileo, Sakalava, Betsimisaraka (valiny mety samihafa)",
          "Firy no fanjakana lehibe voatanisa nisy teto Madagasikara? → Corrigé : efatra (Merina, Betsileo, Sakalava, Betsimisaraka)"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Tobim-pahasalamana",
        "approche": "Mampahafantatra ny anjara asan'ny tobim-pahasalamana ao an-tanàna sy ny lanjany ho an'ny fahasalaman'ny mponina.",
        "transmission": [
          "Fifampiresahana am-bava momba ny tobim-pahasalamana efa hitan'ny mpianatra",
          "Fanazavana ny anjara asan'ny tobim-pahasalamana (fitsaboana, fanabeazana ny fahasalamana)",
          "Fanoratana fehezanteny fohy milaza fotoana nandehanana tany amin'ny tobim-pahasalamana"
        ],
        "exercices": [
          "Inona no anjara asan'ny tobim-pahasalamana? → Corrigé : mitsabo ny marary sy manabe ny mponina momba ny fahasalamana",
          "Tanisao antony iray andehanana any amin'ny tobim-pahasalamana → Corrigé : ohatra, fitsaboana, fanaovana vaksiny (valiny mety samihafa)"
        ]
      },
      {
        "matiere": "ANGLAIS",
        "topic": "The numbers",
        "approche": "Réviser et étendre la connaissance des nombres en anglais (au-delà de 20) et les utiliser dans des phrases simples.",
        "transmission": [
          "Rappel des nombres de 1 à 20 en anglais",
          "Présentation des dizaines (twenty, thirty, forty...) jusqu'à cent",
          "Exercice oral de comptage",
          "Jeu : dire un nombre en anglais et le faire écrire en chiffres"
        ],
        "exercices": [
          "Traduis en anglais : 45 → Corrigé : forty-five",
          "Écris en chiffres : 'seventy-eight' → Corrigé : 78"
        ]
      }
    ]
  }
];

const NOVEMBRE_8EME = [
  {
    "n": 1,
    "dateDebut": "2025/11/03",
    "theme": "La vie à l'école et les invitations",
    "sous": "Ny sekoly ao an-tanàna · L'invitation · Introduction aux nombres décimaux",
    "matieres": [
      {
        "matiere": "VAKITENY",
        "topic": "Ny sekoly ao an-tanàna",
        "approche": "Mampianatra ny lahatsoratra 'Ny sekoly ao an-tanàna' amin'ny fomba mizotra: famakiana mangina → famakiana mafy → fanontaniana fahatakarana → famintinana am-bava. Mifototra amin'ny fiainana an-tsekoly ao an-tanàna lehibe.",
        "transmission": [
          "Famakian'ny mpampianatra manontolo ny lahatsoratra 'Ny sekoly ao an-tanàna' amin'ny feo mazava",
          "Famakiam-panjifa mangina nataon'ny mpianatra",
          "Fanazavana ny teny sarotra hita ao amin'ny lahatsoratra",
          "Famakiana mafy nataon'ny mpianatra 3-4, tsirairay andalana",
          "Fanontaniana fahatakarana am-bava momba ny votoatin'ny lahatsoratra"
        ],
        "exercices": [
          "Iza no lahatsoratra momba ny sekoly ao an-tanàna? → Corrigé : valiny araka ny lahatsoratra novakiana",
          "Inona no fahasamihafan'ny sekoly ao an-tanàna sy ny sekoly ambanivohitra, araka ny lahatsoratra? → Corrigé : famintinana marina araka ny lahatsoratra",
          "Vakio andalana iray amin'ny feo mazava → Corrigé : famakiana tsy misy tafintohina"
        ]
      },
      {
        "matiere": "F/B",
        "topic": "Ny sekoly",
        "approche": "Manazava ny lohahevitra 'ny sekoly' mifototra amin'ny lahatsoratra Vakiteny: ny anjara asan'ny sekoly ho an'ny mpianatra sy ny fiaraha-monina.",
        "transmission": [
          "Fifampiresahana am-bava : inona no ilaina ny sekoly amin'ny fiainan'ny mpianatra?",
          "Firaketana an-tsoratra ny hevitra nivoaka (fianarana, fahalalana, fivoarana)",
          "Fanoratana fehezanteny 2-3 momba ny lanjan'ny sekoly"
        ],
        "exercices": [
          "Tanisao antony 2 ilàna ny sekoly → Corrigé : ohatra, mba hahazo fahalalana, mba hivoatra amin'ny fiainana (valiny mety samihafa)",
          "Soraty fehezanteny iray milaza ny hevitrao momba ny sekoly → Corrigé : fehezanteny feno sy marina"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Samihafa / Samy hafa",
        "approche": "Mampianatra ny fanavahana ny fanoratana ny teny 'samihafa' (isan-karazany) sy 'samy hafa' (samy tsy mitovy), izay mitovy fanononana saingy tsy mitovy hevitra sy fanoratana.",
        "transmission": [
          "Fanomezana ohatra fehezanteny mampiasa 'samihafa' sy 'samy hafa'",
          "Fanazavana ny fahasamihafan'ny hevitra entin'ny teny roa",
          "Fanoratana am-pokonolona fehezanteny mampiasa ny teny roa tsara"
        ],
        "exercices": [
          "Ampidiro ny teny marina : 'Nisy zavatra ... teo an-tsekoly.' → Corrigé : 'Nisy zavatra samihafa teo an-tsekoly.'",
          "Ampidiro ny teny marina : 'Isika ... fa mpianatra ihany.' → Corrigé : 'Isika samy hafa fa mpianatra ihany.'"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Fameno tsy azo foanana",
        "approche": "Manohy ny lesona momba ny fameno tamin'ny fampitahana ny 'fameno azo foanana' (efa hita tamin'ny Oktobra) amin'ny 'fameno tsy azo foanana', izay tsy azo esorina raha tsy hisy fiovan'ny hevitry ny fehezanteny.",
        "transmission": [
          "Famerenana fohy ny fameno azo foanana natao tamin'ny Oktobra",
          "Fanazavana ny hoe fameno tsy azo foanana dia ilaina tsy maintsy ao amin'ny fehezanteny",
          "Fanadihadiana am-tsoratra amin'ny fehezanteny nomena, mamantatra raha azo foana na tsia ny fameno"
        ],
        "exercices": [
          "Azo esorina ve ny fameno amin'ity fehezanteny ity: 'Mipetraka eto Antananarivo izahay'? → Corrigé : tsia, tsy azo foanana ny 'eto Antananarivo' raha tiana hazava tsara ny hevitra",
          "Tondroy ny fameno tsy azo foanana ao amin'ny: 'Manoratra taratasy ho an'ny renibeny izy.' → Corrigé : 'ho an'ny renibeny'"
        ]
      },
      {
        "matiere": "LANGAGE",
        "topic": "Le bonheur des uns, le malheur des autres",
        "approche": "Exploiter l'expression 'Le bonheur des uns, le malheur des autres' à l'oral pour introduire le thème du mois : les souhaits et les vœux, en lien avec les grands événements de la vie.",
        "transmission": [
          "Discussion collective : que signifie cette expression ?",
          "Recherche orale d'exemples vécus (ex. une fête pour certains, un souci pour d'autres)",
          "Jeu de rôle : exprimer un souhait ou un vœu à l'oral pour une occasion donnée",
          "Présentation de l'objectif du mois : exprimer des souhaits et des vœux"
        ],
        "exercices": [
          "Explique à l'oral le sens de l'expression 'Le bonheur des uns, le malheur des autres' → Corrigé : ce qui rend une personne heureuse peut rendre une autre personne malheureuse",
          "Exprime oralement un souhait pour un camarade qui est malade → Corrigé : phrase correcte du type 'Je te souhaite un prompt rétablissement'"
        ]
      },
      {
        "matiere": "LECTURE",
        "topic": "L'invitation",
        "approche": "Étudier le texte 'L'invitation' par lecture silencieuse puis à voix haute, avec des questions de compréhension sur les formules et le contenu d'une invitation.",
        "transmission": [
          "Lecture silencieuse individuelle du texte 'L'invitation'",
          "Explication du vocabulaire nouveau (convier, cérémonie, répondre)",
          "Lecture à voix haute par plusieurs élèves",
          "Questions de compréhension écrites sur les informations données dans l'invitation"
        ],
        "exercices": [
          "À quelle occasion l'invitation est-elle envoyée, d'après le texte ? → Corrigé : réponse fidèle au texte étudié",
          "Quelles informations doivent figurer sur une invitation ? → Corrigé : la date, le lieu, l'heure, l'occasion (réponse fidèle au texte)"
        ]
      },
      {
        "matiere": "VOCABULAIRE",
        "topic": "L'invitation",
        "approche": "Constituer le champ lexical de l'invitation et des formules de politesse associées à partir du texte étudié en lecture.",
        "transmission": [
          "Relevé collectif au tableau des mots liés à l'invitation (convier, hôte, cérémonie, répondre)",
          "Classement des mots selon leur usage (formule de politesse / organisation)",
          "Copie du vocabulaire dans le cahier avec un exemple de phrase pour chacun"
        ],
        "exercices": [
          "Que signifie le mot 'convier' ? → Corrigé : inviter quelqu'un à une occasion",
          "Utilise le mot 'cérémonie' dans une phrase → Corrigé : phrase correcte employant le mot"
        ]
      },
      {
        "matiere": "GRAMMAIRE",
        "topic": "Les pronoms relatifs : qui / que / qu' / où",
        "approche": "Introduire les pronoms relatifs qui, que, qu', où pour relier deux phrases en une seule, à partir de phrases tirées du texte 'L'invitation'.",
        "transmission": [
          "Rappel du genre et du nombre des adjectifs vus en octobre",
          "Présentation de 'qui' (sujet), 'que/qu'' (COD) et 'où' (lieu/temps) à travers des exemples",
          "Exercice de transformation : relier deux phrases simples avec le pronom relatif correct",
          "Correction collective au tableau"
        ],
        "exercices": [
          "Relie avec 'qui' : 'Voici l'ami. Il vient à la fête.' → Corrigé : 'Voici l'ami qui vient à la fête.'",
          "Relie avec 'que' : 'C'est le gâteau. Maman a préparé ce gâteau.' → Corrigé : 'C'est le gâteau que maman a préparé.'",
          "Relie avec 'où' : 'C'est la salle. La fête aura lieu dans cette salle.' → Corrigé : 'C'est la salle où la fête aura lieu.'"
        ]
      },
      {
        "matiere": "ORTHOGRAPHE",
        "topic": "Leur / leurs",
        "approche": "Distinguer l'emploi de 'leur' (invariable devant un verbe, ou adjectif possessif singulier) et 'leurs' (adjectif possessif pluriel) par des règles simples de remplacement.",
        "transmission": [
          "Rappel des accords du sujet et du verbe vus en octobre",
          "Présentation de la règle : 'leur' devant un verbe reste invariable ; 'leur/leurs' devant un nom s'accorde avec l'objet possédé",
          "Exercice à trous : compléter avec leur ou leurs",
          "Correction collective avec justification de chaque choix"
        ],
        "exercices": [
          "Complète : 'Les élèves rangent ... cahiers.' → Corrigé : 'Les élèves rangent leurs cahiers.'",
          "Complète : 'Le maître ... parle avec calme.' → Corrigé : 'Le maître leur parle avec calme.'"
        ]
      },
      {
        "matiere": "CONJUGAISON",
        "topic": "Le verbe \"partir\"",
        "approche": "Conjuguer le verbe irrégulier 'partir' (3e groupe) au présent, à l'imparfait, au futur simple et au passé composé de l'indicatif.",
        "transmission": [
          "Rappel de la conjugaison du verbe 'faire' vue en octobre",
          "Présentation de la conjugaison de 'partir' aux 4 temps, avec attention portée au radical qui change",
          "Exercice de conjugaison écrit aux 4 temps sur une phrase modèle",
          "Correction collective avec tableau récapitulatif"
        ],
        "exercices": [
          "Conjugue 'partir' au présent, 1ère personne du singulier : 'Je ... à l'école.' → Corrigé : pars",
          "Conjugue 'partir' à l'imparfait, 3e personne du pluriel : 'Ils ... tôt le matin.' → Corrigé : partaient",
          "Conjugue 'partir' au passé composé, 2e personne du singulier : 'Tu ... hier.' → Corrigé : es parti(e)"
        ]
      },
      {
        "matiere": "ARITHMÉTIQUE",
        "topic": "Les nombres décimaux",
        "approche": "Introduire la notion de nombre décimal (partie entière et partie décimale séparées par une virgule) à partir de situations concrètes de mesure et de partage.",
        "transmission": [
          "Rappel des grands nombres entiers vus en octobre (jusqu'au milliard)",
          "Présentation de la virgule qui sépare la partie entière de la partie décimale",
          "Lecture et écriture de nombres décimaux simples (dixièmes, centièmes)",
          "Exercice de repérage de la partie entière et de la partie décimale"
        ],
        "exercices": [
          "Écris en chiffres : douze virgule cinq → Corrigé : 12,5",
          "Dans le nombre 8,34, quelle est la partie entière ? → Corrigé : 8",
          "Dans le nombre 8,34, quelle est la partie décimale ? → Corrigé : 34 (centièmes)"
        ]
      },
      {
        "matiere": "GÉOMÉTRIE",
        "topic": "Le rectangle : calcul de P et DP",
        "approche": "Étudier le rectangle et apprendre à calculer son périmètre (P) et son demi-périmètre (DP) à partir de la longueur et de la largeur.",
        "transmission": [
          "Rappel du calcul du périmètre du carré vu en octobre",
          "Présentation du rectangle : longueur et largeur différentes",
          "Formule du périmètre : P = (L + l) × 2, et du demi-périmètre : DP = L + l",
          "Exercice de calcul de P et DP sur des rectangles donnés"
        ],
        "exercices": [
          "Un rectangle mesure 8 cm de longueur et 5 cm de largeur. Calcule son périmètre → Corrigé : P = (8 + 5) × 2 = 26 cm",
          "Calcule le demi-périmètre du même rectangle → Corrigé : DP = 8 + 5 = 13 cm"
        ]
      },
      {
        "matiere": "MESURE",
        "topic": "Mesure de surface",
        "approche": "Introduire les unités de mesure de surface (m², dm², cm²) et leur usage pour mesurer une étendue plane.",
        "transmission": [
          "Rappel des unités de longueur vues en septembre",
          "Présentation du mètre carré comme la surface d'un carré de 1 m de côté",
          "Manipulation : tracer un carré de 1 dm de côté et compter sa surface en cm²",
          "Exercice de lecture d'unités de surface"
        ],
        "exercices": [
          "Quelle est l'unité principale de mesure de surface ? → Corrigé : le mètre carré (m²)",
          "Combien de cm² y a-t-il dans 1 dm² ? → Corrigé : 100 cm²"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "L'appareil respiratoire",
        "approche": "Étudier les organes de l'appareil respiratoire (nez, trachée, poumons) et le trajet de l'air lors de la respiration.",
        "transmission": [
          "Observation d'un schéma de l'appareil respiratoire",
          "Explication du trajet de l'air : nez → trachée → poumons",
          "Présentation du rôle de la respiration (apporter l'oxygène au corps)",
          "Jeu de questions-réponses sur les organes respiratoires"
        ],
        "exercices": [
          "Cite 3 organes de l'appareil respiratoire → Corrigé : le nez, la trachée, les poumons",
          "Quel est le rôle de la respiration ? → Corrigé : apporter l'oxygène nécessaire au corps"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "La carte de Madagascar",
        "approche": "Découvrir la carte de Madagascar : sa forme, ses grandes villes, ses régions, à partir de l'observation collective d'une carte.",
        "transmission": [
          "Rappel de la localisation de Madagascar sur le planisphère vue en septembre",
          "Observation collective d'une carte de Madagascar",
          "Repérage des grandes villes (Antananarivo, Toamasina, Mahajanga...)",
          "Repérage des régions et des provinces"
        ],
        "exercices": [
          "Quelle est la capitale de Madagascar ? → Corrigé : Antananarivo",
          "Cite 2 grandes villes de Madagascar en dehors de la capitale → Corrigé : ex. Toamasina, Mahajanga (toute paire correcte)"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Ireo endrim-pifandraisana tamin'ny vahiny",
        "approche": "Mampianatra ny endrika samihafa nifandraisan'ny Malagasy tamin'ny vahiny fahiny (varotra, fifanakalozana), ho fanohizana ny lesona momba ny fanjakana teo Madagasikara natao tamin'ny Oktobra.",
        "transmission": [
          "Famerenana fohy ny 'Ireo fanjakana nisy teto Madagasikara' natao tamin'ny Oktobra",
          "Fanazavana ny endrika fifandraisana tamin'ny vahiny (varotra, fifanakalozan-javatra, fihaonana)",
          "Fanomezana ohatra vahiny efa niditra teto Madagasikara fahiny (Arabo, Eoropeana)"
        ],
        "exercices": [
          "Tanisao endrika fifandraisana iray tamin'ny vahiny fahiny → Corrigé : ohatra, ny varotra, ny fifanakalozan-javatra (valiny mety samihafa)",
          "Iza avy ny vahiny efa nifandray tamin'ny Malagasy fahiny, araka ny efa nianarana? → Corrigé : ny Arabo sy ny Eoropeana"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Fanajana ny fitsipiky ny sekoly",
        "approche": "Mampianatra ny maha-zava-dehibe ny fanajana ny fitsipiky ny sekoly ho an'ny fiainana iarahana amin'ny mpianatra hafa.",
        "transmission": [
          "Fifampiresahana am-bava momba ny fitsipiky ny sekoly efa fantatry ny mpianatra",
          "Fanadihadiana ny antony tokony hanajana izany fitsipika izany",
          "Fanoratana fehezanteny fohy milaza fitsipika iray sy ny antony ilàna azy"
        ],
        "exercices": [
          "Tanisao fitsipika iray ao an-tsekoly → Corrigé : ohatra, tsy manelingelina namana, mihaino ny mpampianatra (valiny mety samihafa)",
          "Nahoana no ilaina ny manaja ny fitsipiky ny sekoly? → Corrigé : mba hisy filaminana sy fandriampahalemana ao an-tsekoly"
        ]
      },
      {
        "matiere": "ANGLAIS",
        "topic": "The body",
        "approche": "Apprendre le vocabulaire des parties du corps en anglais et l'utiliser dans des phrases simples.",
        "transmission": [
          "Présentation du vocabulaire : head, arm, leg, hand, foot, eye, ear",
          "Jeu : toucher/montrer la partie du corps nommée en anglais (Simon says)",
          "Exercice oral : 'What is this? It is my...'",
          "Copie du vocabulaire dans le cahier"
        ],
        "exercices": [
          "Traduis : la main → Corrigé : the hand",
          "Complète : 'This is my ...' (en montrant la tête) → Corrigé : head"
        ]
      }
    ]
  },
  {
    "n": 2,
    "dateDebut": "2025/11/10",
    "theme": "La visite médicale et l'hygiène",
    "sous": "Taratasin'i Fano · Visite médicale au dispensaire · Addition et soustraction des nombres décimaux",
    "matieres": [
      {
        "matiere": "VAKITENY",
        "topic": "Taratasin'i Fano",
        "approche": "Mampianatra ny taratasin'i Fano amin'ny fomba mizotra: famakiana mangina → famakiana mafy → fanontaniana fahatakarana, mifototra amin'ny endriky ny taratasy an-tsoratra sy ny fitiavan-tanindrazana.",
        "transmission": [
          "Famerenana fohy ny lahatsoratra 'Ny sekoly ao an-tanàna' teo aloha",
          "Famakian'ny mpampianatra ny 'Taratasin'i Fano' amin'ny feo mazava",
          "Fanazavana ny teny sarotra vaovao sy ny endriky ny taratasy (fitondrana, votoaty, famaranana)",
          "Famakiana mafy nataon'ny mpianatra samihafa",
          "Fanontaniana fahatakarana momba ny votoatin'ny taratasy"
        ],
        "exercices": [
          "Iza no manoratra ny taratasy ao amin'ny lahatsoratra? → Corrigé : valiny araka ny lahatsoratra (i Fano)",
          "Inona no votoatin'ny taratasin'i Fano? → Corrigé : famintinana marina araka ny lahatsoratra novakiana",
          "Tondroy ny fizarana telo amin'ny taratasy iray → Corrigé : ny fitondrana, ny votoaty, ny famaranana"
        ]
      },
      {
        "matiere": "F/B",
        "topic": "Ny fitiavan-tanindrazana",
        "approche": "Manazava ny lohahevitra 'ny fitiavan-tanindrazana' mifototra amin'ny taratasin'i Fano: ny fomba fampisehoana ny fitiavana an'i Madagasikara.",
        "transmission": [
          "Fifampiresahana am-bava : ahoana no fomba fampisehoana ny fitiavan-tanindrazana?",
          "Firaketana an-tsoratra ny hevitra nivoaka (fanajana ny sata, fikatsahana ny soa iombonana)",
          "Fanoratana fehezanteny 2-3 momba ny fitiavan-tanindrazana"
        ],
        "exercices": [
          "Tanisao fihetsika iray mampiseho fitiavan-tanindrazana → Corrigé : ohatra, manaja ny sata, mitandro ny fahadiovan'ny tanàna (valiny mety samihafa)",
          "Soraty fehezanteny iray milaza ny fitiavanao an'i Madagasikara → Corrigé : fehezanteny feno sy marina"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Teny miafara : -ka / -tra arahin'ny mpanoritra \"ny\"",
        "approche": "Mampianatra ny fitsipiky ny fanoratana ny teny miafara amin'ny -ka na -tra rehefa arahin'ny mpanoritra 'ny' (fiovan'ny fanoratana ho -ky / -try).",
        "transmission": [
          "Fanomezana ohatra teny miafara amin'ny -ka sy -tra hita ao amin'ny lahatsoratra novakiana",
          "Fanazavana ny fitsipika: ny -ka miova ho -ky, ny -tra miova ho -try, rehefa arahin'ny 'ny'",
          "Fanoratana am-pokonolona ohatra teny hafa mitovy fitsipika"
        ],
        "exercices": [
          "Ampidiro ny mpanoritra 'ny' araka ny fitsipika: 'vovoka' + 'ny' → Corrigé : vovoky ny",
          "Ampidiro ny mpanoritra 'ny' araka ny fitsipika: 'fitaratra' + 'ny' → Corrigé : fitaratry ny"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Fameno mahaleotena sy tsy mahaleotena",
        "approche": "Manohy ny lesona momba ny fameno, mampianatra ny fanavahana ny fameno mahaleotena (azo esorina sy mbola misy hevitra ny fehezanteny) amin'ny fameno tsy mahaleotena (miankina amin'ny teny hafa).",
        "transmission": [
          "Famerenana fohy ny fameno tsy azo foanana natao tamin'ny herinandro teo aloha",
          "Fanazavana ny fahasamihafan'ny fameno mahaleotena sy ny tsy mahaleotena",
          "Fanadihadiana am-tsoratra amin'ny fehezanteny nomena"
        ],
        "exercices": [
          "Tondroy ny fameno mahaleotena ao amin'ny: 'Mihinana vary izy, mangina.' → Corrigé : 'mangina' (fameno mahaleotena, azo esorina)",
          "Tondroy ny fameno tsy mahaleotena ao amin'ny: 'Miankina amin'ny ray aman-dreniny izy.' → Corrigé : 'amin'ny ray aman-dreniny' (tsy azo esorina)"
        ]
      },
      {
        "matiere": "LANGAGE",
        "topic": "Visite médicale au dispensaire",
        "approche": "Introduire le vocabulaire et les expressions liées à la visite médicale à l'oral, en lien avec le thème du mois : l'hygiène et la santé.",
        "transmission": [
          "Discussion collective : qu'est-ce qu'un dispensaire ? Y êtes-vous déjà allés ?",
          "Présentation du vocabulaire oral : consulter, ausculter, ordonnance, infirmier",
          "Jeu de rôle : un élève joue le patient, un autre l'infirmier",
          "Mise en commun des dialogues"
        ],
        "exercices": [
          "Explique à l'oral ce qu'est un dispensaire → Corrigé : un lieu où l'on reçoit des soins médicaux de base",
          "Joue une scène courte où tu expliques un symptôme à l'infirmier → Corrigé : dialogue correct utilisant le vocabulaire de la santé"
        ]
      },
      {
        "matiere": "LECTURE",
        "topic": "Concours d'affiches",
        "approche": "Étudier le texte 'Concours d'affiches' par lecture silencieuse puis à voix haute, avec des questions de compréhension sur l'organisation d'un concours à l'école.",
        "transmission": [
          "Lecture silencieuse individuelle du texte 'Concours d'affiches'",
          "Explication du vocabulaire nouveau (affiche, concours, slogan)",
          "Lecture à voix haute par plusieurs élèves",
          "Questions de compréhension écrites sur le sujet et les règles du concours"
        ],
        "exercices": [
          "Quel est le thème du concours d'affiches, d'après le texte ? → Corrigé : réponse fidèle au texte étudié (l'hygiène et la santé)",
          "Que doit contenir une affiche pour être réussie, selon le texte ? → Corrigé : réponse fidèle au texte (un dessin clair, un message court)"
        ]
      },
      {
        "matiere": "VOCABULAIRE",
        "topic": "Hygiène et santé",
        "approche": "Constituer le champ lexical de l'hygiène et de la santé à partir des textes étudiés, pour préparer la production d'une affiche de sensibilisation.",
        "transmission": [
          "Relevé collectif des mots liés à l'hygiène et la santé (propreté, maladie, soin, prévention)",
          "Classement des mots en deux colonnes : hygiène / santé",
          "Copie du vocabulaire dans le cahier avec un exemple de phrase pour chacun"
        ],
        "exercices": [
          "Que signifie le mot 'prévention' ? → Corrigé : l'ensemble des mesures prises pour éviter une maladie",
          "Utilise le mot 'hygiène' dans une phrase → Corrigé : phrase correcte employant le mot"
        ]
      },
      {
        "matiere": "GRAMMAIRE",
        "topic": "Les adjectifs possessifs",
        "approche": "Étudier les adjectifs possessifs (mon, ton, son, notre, votre, leur...) et leur accord en genre et en nombre avec le nom possédé.",
        "transmission": [
          "Rappel des pronoms relatifs vus la semaine précédente",
          "Présentation du tableau des adjectifs possessifs selon le possesseur et le nombre de possesseurs",
          "Exercice à trous : compléter des phrases avec l'adjectif possessif correct",
          "Correction collective au tableau"
        ],
        "exercices": [
          "Complète : 'Fano range ... cahiers.' → Corrigé : 'Fano range ses cahiers.'",
          "Complète : 'Nous aimons ... maîtresse.' → Corrigé : 'Nous aimons notre maîtresse.'"
        ]
      },
      {
        "matiere": "ORTHOGRAPHE",
        "topic": "la / là / l'a",
        "approche": "Distinguer à l'écrit l'article 'la', l'adverbe de lieu 'là' et la forme verbale 'l'a' (pronom + verbe avoir) par des règles simples de remplacement.",
        "transmission": [
          "Rappel de 'leur/leurs' vu la semaine précédente",
          "Présentation de la règle : 'la' précède un nom, 'là' indique un lieu, 'l'a' peut se remplacer par 'l'avait'",
          "Exercice à trous : compléter avec la/là/l'a",
          "Correction collective avec justification de chaque choix"
        ],
        "exercices": [
          "Complète : 'Range ... trousse ..., sur la table.' → Corrigé : 'Range la trousse là, sur la table.'",
          "Complète : 'Il ... vue hier à l'école.' → Corrigé : 'Il l'a vue hier à l'école.'"
        ]
      },
      {
        "matiere": "CONJUGAISON",
        "topic": "Le verbe \"venir\"",
        "approche": "Conjuguer le verbe irrégulier 'venir' (3e groupe) au présent, à l'imparfait, au futur simple et au passé composé de l'indicatif.",
        "transmission": [
          "Rappel de la conjugaison du verbe 'partir' vue la semaine précédente",
          "Présentation de la conjugaison de 'venir' aux 4 temps",
          "Exercice de conjugaison écrit aux 4 temps sur une phrase modèle",
          "Correction collective avec tableau récapitulatif"
        ],
        "exercices": [
          "Conjugue 'venir' au présent, 3e personne du singulier : 'Il ... au dispensaire.' → Corrigé : vient",
          "Conjugue 'venir' à l'imparfait, 1ère personne du pluriel : 'Nous ... souvent ici.' → Corrigé : venions",
          "Conjugue 'venir' au futur simple, 2e personne du singulier : 'Tu ... demain.' → Corrigé : viendras"
        ]
      },
      {
        "matiere": "ARITHMÉTIQUE",
        "topic": "+ et - des nombres décimaux",
        "approche": "Apprendre à additionner et soustraire des nombres décimaux en alignant correctement les virgules.",
        "transmission": [
          "Rappel de la notion de nombre décimal vue la semaine précédente",
          "Présentation de la technique : aligner les virgules avant de poser l'opération",
          "Exercice d'addition de deux nombres décimaux",
          "Exercice de soustraction de deux nombres décimaux"
        ],
        "exercices": [
          "Calcule : 12,5 + 3,25 → Corrigé : 15,75",
          "Calcule : 20,4 − 8,15 → Corrigé : 12,25"
        ]
      },
      {
        "matiere": "GÉOMÉTRIE",
        "topic": "Calcul d'une dimension",
        "approche": "Apprendre à calculer une dimension manquante (longueur ou largeur) d'un rectangle à partir de son périmètre et de l'autre dimension.",
        "transmission": [
          "Rappel du calcul du périmètre et du demi-périmètre du rectangle vu la semaine précédente",
          "Présentation de la démarche inverse : DP − dimension connue = dimension manquante",
          "Exercice de calcul de la longueur connaissant le périmètre et la largeur",
          "Exercice de calcul de la largeur connaissant le périmètre et la longueur"
        ],
        "exercices": [
          "Un rectangle a un périmètre de 30 cm et une largeur de 6 cm. Calcule sa longueur → Corrigé : DP = 15 cm, donc L = 15 − 6 = 9 cm",
          "Un rectangle a un demi-périmètre de 18 cm et une longueur de 11 cm. Calcule sa largeur → Corrigé : l = 18 − 11 = 7 cm"
        ]
      },
      {
        "matiere": "MESURE",
        "topic": "Mesure agraire",
        "approche": "Introduire les unités de mesure agraire (are, hectare) utilisées pour mesurer les surfaces des terrains et rizières.",
        "transmission": [
          "Rappel des unités de mesure de surface vues la semaine précédente",
          "Présentation de l'are (100 m²) et de l'hectare (10 000 m²)",
          "Exercice de conversion entre m², are et hectare",
          "Lien avec la mesure des rizières et des champs de la région"
        ],
        "exercices": [
          "Convertis : 1 hectare = ... are → Corrigé : 100 are",
          "Convertis : 3 are = ... m² → Corrigé : 300 m²"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "L'appareil reproducteur",
        "approche": "Présenter de façon simple et adaptée à l'âge des élèves le rôle général de l'appareil reproducteur dans la naissance d'un être humain.",
        "transmission": [
          "Rappel de l'appareil respiratoire vu la semaine précédente",
          "Explication simple, avec vocabulaire adapté, du rôle de l'appareil reproducteur dans la reproduction humaine",
          "Insistance sur le respect du corps et l'hygiène intime",
          "Jeu de questions-réponses simples"
        ],
        "exercices": [
          "Quel est le rôle général de l'appareil reproducteur ? → Corrigé : il permet la naissance d'un nouvel être humain",
          "Pourquoi faut-il respecter son corps et en prendre soin ? → Corrigé : pour rester en bonne santé et par respect de soi"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "Le relief de Madagascar",
        "approche": "Étudier les grands ensembles du relief de Madagascar : les hautes terres centrales, les côtes et les plaines.",
        "transmission": [
          "Rappel de la carte de Madagascar vue la semaine précédente",
          "Présentation des hautes terres centrales (plateaux), des côtes est et ouest",
          "Observation collective d'une carte du relief",
          "Repérage des principaux massifs"
        ],
        "exercices": [
          "Comment appelle-t-on la zone centrale élevée de Madagascar ? → Corrigé : les hautes terres centrales (les plateaux)",
          "Madagascar a-t-il plus de plaines à l'est ou à l'ouest ? → Corrigé : à l'ouest, les plaines côtières sont plus étendues"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Fanjakana Betsileo",
        "approche": "Mampianatra ny votoatin'ny fanjakana Betsileo fahiny: ny toerana nisy azy, ny fombany manokana.",
        "transmission": [
          "Famerenana fohy ny endrim-pifandraisana tamin'ny vahiny natao tamin'ny herinandro teo aloha",
          "Fampahafantarana ny toerana misy ny Betsileo (faritra afovoany atsimo)",
          "Fanazavana fohy ny fombany manokana (fambolena vary an-tsaha, fasan-drazana)"
        ],
        "exercices": [
          "Aiza no misy ny fanjakana Betsileo, araka ny nianarana? → Corrigé : any amin'ny faritra afovoany atsimon'i Madagasikara",
          "Tanisao fomba iray fanaon'ny Betsileo → Corrigé : ohatra, ny fambolena vary an-tsaha (valiny mety samihafa)"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Fitsipika mifehy ny fifamoivoizana",
        "approche": "Mampianatra ny fitsipika fototra mifehy ny fifamoivoizana an-dalambe (fijerena alohan'ny hita fitoerana, fandehanana amin'ny lalana voatokana...).",
        "transmission": [
          "Fifampiresahana am-bava momba ny loza mety hitranga raha tsy manaja ny fitsipiky ny fifamoivoizana",
          "Fanazavana ny fitsipika fototra: fijerena eroa sy eroa alohan'ny hita fitoerana, fandehanana amin'ny lalana voatokana",
          "Fanoratana fehezanteny fohy milaza fitsipika iray"
        ],
        "exercices": [
          "Tanisao fitsipika iray tokony hajaina rehefa hita fitoerana → Corrigé : ohatra, mijery eroa sy eroa alohan'ny hita (valiny mety samihafa)",
          "Nahoana no ilaina ny manaja ny fitsipiky ny fifamoivoizana? → Corrigé : mba tsy hisy loza sy hisy fandriampahalemana"
        ]
      },
      {
        "matiere": "ANGLAIS",
        "topic": "The colour",
        "approche": "Apprendre le vocabulaire des couleurs en anglais et l'utiliser pour décrire des objets.",
        "transmission": [
          "Présentation du vocabulaire : red, blue, yellow, green, black, white",
          "Jeu : montrer un objet de la classe et nommer sa couleur en anglais",
          "Exercice oral : 'What colour is this?'",
          "Copie du vocabulaire dans le cahier"
        ],
        "exercices": [
          "Traduis : la couleur rouge → Corrigé : red",
          "Complète : 'The sky is ...' → Corrigé : blue"
        ]
      }
    ]
  },
  {
    "n": 3,
    "dateDebut": "2025/11/17",
    "theme": "Hygiène et santé (suite) et le rectangle",
    "sous": "Madagasikara tanindrazanay · Hygiène et santé · Calcul de surface du rectangle",
    "matieres": [
      {
        "matiere": "VAKITENY",
        "topic": "Madagasikara tanindrazanay",
        "approche": "Mampianatra ny lahatsoratra 'Madagasikara tanindrazanay' amin'ny fomba mizotra: famakiana mangina → famakiana mafy → fanontaniana fahatakarana lalindalina momba ny firaisam-pirenena.",
        "transmission": [
          "Famerenana fohy ny taratasin'i Fano teo aloha",
          "Famakian'ny mpampianatra ny lahatsoratra 'Madagasikara tanindrazanay' amin'ny feo mazava",
          "Fanazavana ny teny sarotra vaovao",
          "Famakiana mafy nataon'ny mpianatra samihafa",
          "Fanontaniana fahatakarana momba ny votoatin'ny lahatsoratra"
        ],
        "exercices": [
          "Inona no lohahevitry ny lahatsoratra 'Madagasikara tanindrazanay'? → Corrigé : valiny araka ny lahatsoratra (ny firaisam-pirenena sy ny fitiavan-tanindrazana)",
          "Famintino amin'ny fehezanteny 2 ny votoatin'ny lahatsoratra → Corrigé : famintinana marina araka ny lahatsoratra novakiana"
        ]
      },
      {
        "matiere": "F/B",
        "topic": "Firaisam-pirenena",
        "approche": "Manazava ny lohahevitra 'firaisam-pirenena' mifototra amin'ny lahatsoratra 'Madagasikara tanindrazanay': ny maha-zava-dehibe ny firaisan-kina eo amin'ny Malagasy rehetra.",
        "transmission": [
          "Fifampiresahana am-bava : inona no atao hoe firaisam-pirenena?",
          "Firaketana an-tsoratra ny hevitra nivoaka (fiombonana, fifanajana na dia samy hafa foko aza)",
          "Fanoratana fehezanteny 2-3 momba ny firaisam-pirenena"
        ],
        "exercices": [
          "Inona no atao hoe firaisam-pirenena? → Corrigé : ny fiombonan'ny vahoaka Malagasy rehetra na dia samy hafa foko aza",
          "Tanisao antony 1 ilàna ny firaisam-pirenena → Corrigé : ohatra, mba hampandroso ny firenena (valiny mety samihafa)"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Fanoratra ny zanateny tsy mitaky faingo mihantona",
        "approche": "Mampianatra ny fitsipiky ny fanoratana ireo zanateny izay tsy mitaky ny faingo mihantona (accent suspendu) amin'ny teny malagasy.",
        "transmission": [
          "Famerenana fohy ny teny miafara amin'ny -ka/-tra natao herinandro teo aloha",
          "Fanazavana ireo zanateny tsy mitaky faingo mihantona amin'ny alalan'ny ohatra",
          "Fanadihadiana am-tsoratra: fanavahana ireo teny voasoratra marina sy diso"
        ],
        "exercices": [
          "Tondroy izay marina: 'sekôly' sa 'sekoly'? → Corrigé : sekoly (tsy misy faingo mihantona)",
          "Soraty marina ny teny 'tanàna' → Corrigé : tanàna (araka ny fitsipika efa hita)"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Ny rafitry ny fhzt",
        "approche": "Mampianatra ny rafitry ny fehezanteny (structure): fototeny (matoanteny) sy ny fanoritana ary ny filaharan'ny teny ao anaty fehezanteny malagasy.",
        "transmission": [
          "Famerenana fohy ny fameno mahaleotena sy tsy mahaleotena natao herinandro teo aloha",
          "Fanazavana ny rafitry ny fehezanteny malagasy: matoanteny + fanoritana voalohany + fanoritana faharoa",
          "Fanadihadiana am-tsoratra amin'ny fehezanteny nomena, mamantatra ny rafiny"
        ],
        "exercices": [
          "Tondroy ny rafitry ny fehezanteny: 'Mihinana vary ny ankizy.' → Corrigé : matoanteny (mihinana) + fanoritana (vary) + fanoritana faharoa (ny ankizy)",
          "Alaharo ireto teny ireto ho fehezanteny marina: 'sekoly / any / mianatra / ny ankizy' → Corrigé : 'Mianatra any @ sekoly ny ankizy.'"
        ]
      },
      {
        "matiere": "LANGAGE",
        "topic": "Visite médicale au dispensaire (suite)",
        "approche": "Approfondir à l'oral le vocabulaire de la visite médicale à travers un dialogue plus complet entre le patient et l'infirmier, en lien avec le texte 'Hygiène et santé'.",
        "transmission": [
          "Rappel du vocabulaire de la visite médicale vu la semaine précédente",
          "Écoute et répétition d'un dialogue complet patient-infirmier",
          "Jeu de rôle en binôme avec des symptômes différents pour chaque groupe",
          "Correction collective de la prononciation et des phrases"
        ],
        "exercices": [
          "Joue une scène où tu décris un symptôme et reçois un conseil de l'infirmier → Corrigé : dialogue correct et cohérent utilisant le vocabulaire appris",
          "Explique à l'oral pourquoi il faut consulter un infirmier quand on est malade → Corrigé : réponse cohérente, ex. pour être soigné correctement"
        ]
      },
      {
        "matiere": "LECTURE",
        "topic": "Hygiène et santé",
        "approche": "Étudier le texte 'Hygiène et santé' par lecture silencieuse puis à voix haute, avec des questions de compréhension sur les règles d'hygiène présentées.",
        "transmission": [
          "Lecture silencieuse individuelle du texte 'Hygiène et santé'",
          "Explication du vocabulaire nouveau (microbe, contagion, prévention)",
          "Lecture à voix haute par plusieurs élèves",
          "Questions de compréhension écrites sur les règles d'hygiène du texte"
        ],
        "exercices": [
          "Quelles règles d'hygiène sont citées dans le texte ? → Corrigé : réponse fidèle au texte étudié (ex. se laver les mains, boire de l'eau propre)",
          "Pourquoi ces règles sont-elles importantes, d'après le texte ? → Corrigé : réponse fidèle au texte (éviter les maladies)"
        ]
      },
      {
        "matiere": "VOCABULAIRE",
        "topic": "Hygiène et santé (suite)",
        "approche": "Enrichir le champ lexical de l'hygiène et de la santé avec de nouveaux mots issus du texte 'Hygiène et santé', pour préparer le concours d'affiches.",
        "transmission": [
          "Relevé collectif de nouveaux mots du texte (microbe, contagion, vaccin)",
          "Classement des mots selon leur usage (cause / prévention)",
          "Copie du vocabulaire avec un exemple de phrase pour chacun"
        ],
        "exercices": [
          "Que signifie le mot 'microbe' ? → Corrigé : un très petit être vivant qui peut provoquer une maladie",
          "Utilise le mot 'vaccin' dans une phrase → Corrigé : phrase correcte employant le mot"
        ]
      },
      {
        "matiere": "GRAMMAIRE",
        "topic": "Les adjectifs démonstratifs",
        "approche": "Étudier les adjectifs démonstratifs (ce, cet, cette, ces) et leur accord en genre et en nombre avec le nom désigné.",
        "transmission": [
          "Rappel des adjectifs possessifs vus la semaine précédente",
          "Présentation du tableau des adjectifs démonstratifs (ce/cet devant masculin, cette devant féminin, ces au pluriel)",
          "Exercice à trous : compléter des phrases avec l'adjectif démonstratif correct",
          "Correction collective au tableau"
        ],
        "exercices": [
          "Complète : '... enfant est malade.' → Corrigé : 'Cet enfant est malade.'",
          "Complète : 'Regarde ... affiches sur le mur.' → Corrigé : 'Regarde ces affiches sur le mur.'"
        ]
      },
      {
        "matiere": "ORTHOGRAPHE",
        "topic": "se / ce",
        "approche": "Distinguer à l'écrit le pronom réfléchi 'se' (devant un verbe pronominal) et le déterminant/pronom démonstratif 'ce' par des règles simples de remplacement.",
        "transmission": [
          "Rappel de 'la/là/l'a' vu la semaine précédente",
          "Présentation de la règle : 'se' précède toujours un verbe (se laver), 'ce' précède un nom ou peut être remplacé par 'cela'",
          "Exercice à trous : compléter avec se ou ce",
          "Correction collective avec justification de chaque choix"
        ],
        "exercices": [
          "Complète : 'Il ... lave les mains avant ... repas.' → Corrigé : 'Il se lave les mains avant ce repas.'",
          "Complète : '... microbe ... propage facilement.' → Corrigé : 'Ce microbe se propage facilement.'"
        ]
      },
      {
        "matiere": "CONJUGAISON",
        "topic": "Le verbe venir et ses dérivés",
        "approche": "Conjuguer les verbes dérivés de 'venir' (revenir, devenir, prévenir) aux 4 temps de l'indicatif, sur le même modèle que 'venir'.",
        "transmission": [
          "Rappel de la conjugaison de 'venir' vue la semaine précédente",
          "Présentation des verbes dérivés : revenir, devenir, prévenir, avec leur sens",
          "Exercice de conjugaison écrit sur un verbe dérivé au choix, aux 4 temps",
          "Correction collective avec tableau récapitulatif"
        ],
        "exercices": [
          "Conjugue 'devenir' au présent, 3e personne du singulier : 'Il ... infirmier.' → Corrigé : devient",
          "Conjugue 'prévenir' au futur simple, 1ère personne du singulier : 'Je ... mes parents.' → Corrigé : préviendrai",
          "Conjugue 'revenir' au passé composé, 2e personne du pluriel : 'Vous ... du dispensaire.' → Corrigé : êtes revenus/revenues"
        ]
      },
      {
        "matiere": "ARITHMÉTIQUE",
        "topic": "+ et - des nombres décimaux (consolidation)",
        "approche": "Consolider l'addition et la soustraction des nombres décimaux par la résolution de petits problèmes concrets.",
        "transmission": [
          "Rappel de la technique d'alignement des virgules vue la semaine précédente",
          "Exercices d'addition et de soustraction avec des décimaux à deux chiffres après la virgule",
          "Résolution d'un petit problème concret (achat, mesure)"
        ],
        "exercices": [
          "Calcule : 45,75 + 12,3 → Corrigé : 58,05",
          "Un rectangle a un côté de 8,5 cm ; un autre côté mesure 3,25 cm de moins. Calcule ce deuxième côté → Corrigé : 8,5 − 3,25 = 5,25 cm"
        ]
      },
      {
        "matiere": "GÉOMÉTRIE",
        "topic": "Calcul de surface du rectangle",
        "approche": "Apprendre à calculer l'aire (surface) d'un rectangle en multipliant la longueur par la largeur.",
        "transmission": [
          "Rappel du calcul du périmètre et d'une dimension du rectangle vus les semaines précédentes",
          "Présentation de la formule de l'aire : A = L × l",
          "Exercice de calcul d'aire sur des rectangles donnés",
          "Distinction entre périmètre (contour) et aire (surface)"
        ],
        "exercices": [
          "Un rectangle mesure 9 cm de longueur et 4 cm de largeur. Calcule son aire → Corrigé : A = 9 × 4 = 36 cm²",
          "Un rectangle mesure 12 m de longueur et 5 m de largeur. Calcule son aire → Corrigé : A = 12 × 5 = 60 m²"
        ]
      },
      {
        "matiere": "MESURE",
        "topic": "Correspondance de mesure de surface et agraire",
        "approche": "Établir la correspondance entre les unités de mesure de surface (m², dam²...) et les unités agraires (are, hectare), qui désignent les mêmes réalités.",
        "transmission": [
          "Rappel des unités de surface et des unités agraires vues précédemment",
          "Présentation de la correspondance : 1 are = 1 dam² = 100 m² ; 1 hectare = 1 hm² = 10 000 m²",
          "Exercice de conversion croisée entre les deux systèmes d'unités"
        ],
        "exercices": [
          "1 are correspond à combien de m² ? → Corrigé : 100 m²",
          "1 hectare correspond à combien de dam² ? → Corrigé : 100 dam² (1 hectare = 1 hm² = 100 dam²)"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "L'appareil urinaire",
        "approche": "Étudier les organes de l'appareil urinaire (reins, vessie) et leur rôle dans l'élimination des déchets du corps.",
        "transmission": [
          "Observation d'un schéma simplifié de l'appareil urinaire",
          "Explication du rôle des reins (filtrer le sang) et de la vessie (stocker l'urine)",
          "Lien avec l'importance de boire suffisamment d'eau",
          "Jeu de questions-réponses sur les organes urinaires"
        ],
        "exercices": [
          "Quel est le rôle des reins ? → Corrigé : filtrer le sang et éliminer les déchets sous forme d'urine",
          "Où l'urine est-elle stockée avant d'être évacuée ? → Corrigé : dans la vessie"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "Les cours d'eaux de Madagascar",
        "approche": "Étudier les principaux cours d'eau de Madagascar (fleuves, rivières) et leur importance pour l'agriculture et la vie quotidienne.",
        "transmission": [
          "Rappel du relief de Madagascar vu la semaine précédente",
          "Présentation des grands fleuves (Betsiboka, Mangoky, Mananjary...)",
          "Explication du lien entre le relief et le sens d'écoulement des fleuves (des hautes terres vers les côtes)",
          "Repérage sur la carte"
        ],
        "exercices": [
          "Cite un grand fleuve de Madagascar → Corrigé : ex. la Betsiboka (ou tout fleuve étudié en classe)",
          "Pourquoi les cours d'eau sont-ils importants pour l'agriculture ? → Corrigé : ils permettent l'irrigation des rizières et des cultures"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Fanjakana Sakalava",
        "approche": "Mampianatra ny votoatin'ny fanjakana Sakalava fahiny: ny toerana nisy azy any andrefana, ny fombany manokana.",
        "transmission": [
          "Famerenana fohy ny fanjakana Betsileo natao herinandro teo aloha",
          "Fampahafantarana ny toerana misy ny Sakalava (faritra andrefana)",
          "Fanazavana fohy ny fombany manokana (fiompiana omby, fanajana ny doany)"
        ],
        "exercices": [
          "Aiza no misy ny fanjakana Sakalava, araka ny nianarana? → Corrigé : any amin'ny faritra andrefan'i Madagasikara",
          "Tanisao fomba iray fanaon'ny Sakalava → Corrigé : ohatra, ny fiompiana omby (valiny mety samihafa)"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Fitsipika mifehy ny fifamoivoizana (fanamafisana)",
        "approche": "Manamafy ny lesona momba ny fitsipika mifehy ny fifamoivoizana, mifantoka amin'ny fanajana ny marika sy famantarana ao amin'ny lalana.",
        "transmission": [
          "Famerenana fohy ny fitsipika fototra natao herinandro teo aloha",
          "Fampahafantarana ny famantarana sasany hita eny an-dalana (jiro fifamoivoizana, takelaka famantarana)",
          "Fifampiresahana am-bava momba ny lanjan'ny fanarahana ireo famantarana ireo"
        ],
        "exercices": [
          "Inona no tokony hataonao rehefa mena ny jiro fifamoivoizana? → Corrigé : mijanona",
          "Nahoana no ilaina ny mamantatra ny famantarana eny an-dalana? → Corrigé : mba tsy hisy loza sy hisy filaminana amin'ny fifamoivoizana"
        ]
      },
      {
        "matiere": "ANGLAIS",
        "topic": "The fruits",
        "approche": "Apprendre le vocabulaire des fruits en anglais et l'utiliser dans des phrases simples.",
        "transmission": [
          "Présentation du vocabulaire : a banana, a mango, an orange, a pineapple, a lychee",
          "Jeu : deviner le fruit décrit par l'enseignant",
          "Exercice oral : 'I like...' / 'I don't like...'",
          "Copie du vocabulaire dans le cahier"
        ],
        "exercices": [
          "Traduis : une mangue → Corrigé : a mango",
          "Complète : 'I like eating ...' (une banane) → Corrigé : a banana"
        ]
      }
    ]
  },
  {
    "n": 4,
    "dateDebut": "2025/11/24",
    "theme": "La pharmacie familiale et la prévention",
    "sous": "Fambolena vary any Alaotra · La boîte à pharmacie · Multiplication et division des décimaux",
    "matieres": [
      {
        "matiere": "VAKITENY",
        "topic": "Fambolena vary any Alaotra",
        "approche": "Mampianatra ny lahatsoratra momba ny fambolena vary any Alaotra amin'ny fomba mizotra, mifantoka amin'ny lanjan'ny fambolena vary ho an'ny Malagasy.",
        "transmission": [
          "Famerenana fohy ny lahatsoratra 'Madagasikara tanindrazanay' teo aloha",
          "Famakian'ny mpampianatra ny lahatsoratra momba ny fambolena vary any Alaotra",
          "Fanazavana ny teny sarotra vaovao",
          "Famakiana mafy nataon'ny mpianatra samihafa",
          "Fanontaniana fahatakarana momba ny votoatin'ny lahatsoratra"
        ],
        "exercices": [
          "Aiza no misy ny lemak'i Alaotra voaresaka ao amin'ny lahatsoratra? → Corrigé : any amin'ny faritra Alaotra-Mangoro (afovoany avaratra)",
          "Nahoana no lazaina fa zava-dehibe ny fambolena vary any Alaotra? → Corrigé : valiny araka ny lahatsoratra (mamokatra vary betsaka ho an'i Madagasikara)"
        ]
      },
      {
        "matiere": "F/B",
        "topic": "Ny voly vary",
        "approche": "Manazava ny lohahevitra 'ny voly vary' mifototra amin'ny lahatsoratra momba an'Alaotra: ny dingana amin'ny famboleny vary sy ny maha-zava-dehibe azy.",
        "transmission": [
          "Fifampiresahana am-bava : ahoana ny dingan'ny voly vary?",
          "Firaketana an-tsoratra ny dingana voalaza (fambolena, fikarakarana, fijinjana)",
          "Fanoratana fehezanteny 2-3 momba ny voly vary"
        ],
        "exercices": [
          "Tanisao dingana iray amin'ny voly vary → Corrigé : ohatra, ny famafazana, ny famindrana zana-bary, ny fijinjana (valiny mety samihafa)",
          "Nahoana no zava-dehibe ny vary ho an'ny Malagasy? → Corrigé : izy no sakafo fototra isan'andro"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Fanoratra ny : tsi - tovona sy tsy fandavana",
        "approche": "Mampianatra ny fanavahana ny fanoratana ny tovona 'tsi-' (mitambatra amin'ny teny) amin'ny teny fandavana 'tsy' (miasa mitokana alohan'ny teny hafa).",
        "transmission": [
          "Fanomezana ohatra teny mampiasa ny tovona 'tsi-' sy ny teny fandavana 'tsy'",
          "Fanazavana ny fahasamihafan'ny fanoratana azy ireo (miraikitra na tsia)",
          "Fanoratana am-pokonolona fehezanteny mampiasa tsara ny roa"
        ],
        "exercices": [
          "Ampidiro ny marina, 'tsi' na 'tsy': 'Izaho ... mahay mihitsy.' → Corrigé : 'Izaho tsy mahay mihitsy.' (fandavana, miasa mitokana)",
          "Manorata teny iray mampiasa ny tovona 'tsi-' → Corrigé : ohatra, 'tsietaetina' (teny marina mampiasa ny tovona 'tsi-')"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Fanavahana ny kiateny mampivadi-drafitra sy zanateny mpampiorina",
        "approche": "Manohy ny lesona momba ny rafitry ny fehezanteny, mampianatra ny fanavahana ny kiateny izay manova ny rafitry ny fehezanteny amin'ny zanateny izay mampiorina fotsiny ny fehezanteny.",
        "transmission": [
          "Famerenana fohy ny rafitry ny fhzt natao herinandro teo aloha",
          "Fanazavana ny fahasamihafan'ny kiateny mampivadi-drafitra sy ny zanateny mpampiorina, amin'ny alalan'ny ohatra",
          "Fanadihadiana am-tsoratra amin'ny fehezanteny nomena"
        ],
        "exercices": [
          "Tondroy raha kiateny mampivadi-drafitra na zanateny mpampiorina no misy ao amin'ity fehezanteny ity: 'Mihinana vary ny ankizy.' → Corrigé : famaritana araka ny fitsipika nampianarina teo am-pianarana",
          "Manorata fehezanteny iray misy zanateny mpampiorina → Corrigé : fehezanteny feno araka ny fitsipika nampianarina"
        ]
      },
      {
        "matiere": "LANGAGE",
        "topic": "La boîte à pharmacie",
        "approche": "Introduire à l'oral le vocabulaire du contenu d'une boîte à pharmacie familiale et son utilité pour les premiers soins.",
        "transmission": [
          "Discussion collective : qu'y a-t-il dans une boîte à pharmacie à la maison ?",
          "Présentation du vocabulaire oral : pansement, coton, sirop, comprimé, thermomètre",
          "Jeu : nommer l'usage de chaque objet de la boîte à pharmacie",
          "Mise en commun collective"
        ],
        "exercices": [
          "Cite oralement 2 objets que l'on trouve dans une boîte à pharmacie → Corrigé : ex. un pansement, du coton (toute paire correcte)",
          "Explique à l'oral à quoi sert un pansement → Corrigé : à protéger et soigner une petite blessure"
        ]
      },
      {
        "matiere": "LECTURE",
        "topic": "L'interview d'un infirmier",
        "approche": "Étudier le texte 'L'interview d'un infirmier' par lecture silencieuse puis à voix haute, avec des questions de compréhension sur les questions posées et les réponses de l'infirmier.",
        "transmission": [
          "Lecture silencieuse individuelle du texte",
          "Explication du vocabulaire nouveau (interview, questionner, métier)",
          "Lecture à voix haute par plusieurs élèves, en distinguant les répliques du journaliste et de l'infirmier",
          "Questions de compréhension écrites sur le contenu de l'interview"
        ],
        "exercices": [
          "Quel métier exerce la personne interviewée ? → Corrigé : infirmier",
          "Cite une question posée à l'infirmier dans le texte → Corrigé : réponse fidèle au texte étudié"
        ]
      },
      {
        "matiere": "VOCABULAIRE",
        "topic": "Maladie et prévention",
        "approche": "Constituer le champ lexical de la maladie et de la prévention à partir du texte 'L'interview d'un infirmier', en clôture du thème du mois.",
        "transmission": [
          "Relevé collectif des mots liés à la maladie et à la prévention dans le texte",
          "Classement des mots en deux colonnes : maladie / prévention",
          "Copie du vocabulaire avec un exemple de phrase pour chacun"
        ],
        "exercices": [
          "Que signifie le mot 'prévention' ? → Corrigé : les mesures prises pour éviter qu'une maladie n'apparaisse",
          "Utilise le mot 'symptôme' dans une phrase → Corrigé : phrase correcte employant le mot"
        ]
      },
      {
        "matiere": "GRAMMAIRE",
        "topic": "Le présentatif : \"il y a\"",
        "approche": "Étudier l'expression présentative 'il y a', invariable, utilisée pour signaler l'existence ou la présence de quelque chose.",
        "transmission": [
          "Rappel des adjectifs démonstratifs vus la semaine précédente",
          "Présentation du présentatif 'il y a', qui reste invariable même au pluriel",
          "Exercice de construction de phrases avec 'il y a'",
          "Correction collective au tableau"
        ],
        "exercices": [
          "Complète avec 'il y a' : '... un pansement dans la boîte à pharmacie.' → Corrigé : 'Il y a un pansement dans la boîte à pharmacie.'",
          "Transforme au pluriel en gardant 'il y a' : 'Il y a un comprimé.' → Corrigé : 'Il y a des comprimés.' (il y a reste invariable)"
        ]
      },
      {
        "matiere": "ORTHOGRAPHE",
        "topic": "C'est / s'est",
        "approche": "Distinguer à l'écrit le présentatif 'c'est' et la forme pronominale 's'est' au passé composé (verbe pronominal) par des règles simples de remplacement.",
        "transmission": [
          "Rappel de 'se/ce' vu la semaine précédente",
          "Présentation de la règle : 'c'est' peut être remplacé par 'cela est' ; 's'est' précède un participe passé et vient d'un verbe pronominal",
          "Exercice à trous : compléter avec c'est ou s'est",
          "Correction collective avec justification de chaque choix"
        ],
        "exercices": [
          "Complète : '... l'infirmier qui ... occupé du malade.' → Corrigé : 'C'est l'infirmier qui s'est occupé du malade.'",
          "Complète : 'Il ... blessé au bras ; ... pas grave.' → Corrigé : 'Il s'est blessé au bras ; c'est pas grave.' (à l'écrit soigné : 'ce n'est pas grave')"
        ]
      },
      {
        "matiere": "CONJUGAISON",
        "topic": "Le verbe \"vouloir\"",
        "approche": "Conjuguer le verbe irrégulier 'vouloir' au présent, à l'imparfait, au futur simple et au passé composé de l'indicatif.",
        "transmission": [
          "Rappel de la conjugaison de 'venir' et de ses dérivés vue la semaine précédente",
          "Présentation de la conjugaison de 'vouloir' aux 4 temps, en insistant sur les formes irrégulières du présent",
          "Exercice de conjugaison écrit aux 4 temps sur une phrase modèle",
          "Correction collective avec tableau récapitulatif"
        ],
        "exercices": [
          "Conjugue 'vouloir' au présent, 1ère personne du singulier : 'Je ... guérir vite.' → Corrigé : veux",
          "Conjugue 'vouloir' à l'imparfait, 3e personne du pluriel : 'Ils ... consulter l'infirmier.' → Corrigé : voulaient",
          "Conjugue 'vouloir' au futur simple, 2e personne du singulier : 'Tu ... de l'aide.' → Corrigé : voudras"
        ]
      },
      {
        "matiere": "ARITHMÉTIQUE",
        "topic": "Multiplication et division des nombres décimaux",
        "approche": "Apprendre à multiplier et diviser un nombre décimal par un nombre entier, en plaçant correctement la virgule dans le résultat.",
        "transmission": [
          "Rappel de l'addition et de la soustraction des décimaux vues précédemment",
          "Présentation de la technique de multiplication d'un décimal par un entier",
          "Présentation de la technique de division d'un décimal par un entier",
          "Exercices d'application sur les deux opérations"
        ],
        "exercices": [
          "Calcule : 4,25 × 3 → Corrigé : 12,75",
          "Calcule : 9,6 ÷ 4 → Corrigé : 2,4"
        ]
      },
      {
        "matiere": "GÉOMÉTRIE",
        "topic": "Le triangle : calcul d'aire",
        "approche": "Apprendre à calculer l'aire d'un triangle à partir de sa base et de sa hauteur, en clôture de l'étude des figures planes du mois.",
        "transmission": [
          "Rappel du calcul de l'aire du rectangle vu la semaine précédente",
          "Présentation de la formule de l'aire du triangle : A = (base × hauteur) ÷ 2",
          "Démonstration : un triangle est la moitié d'un rectangle de mêmes base et hauteur",
          "Exercice de calcul d'aire sur des triangles donnés"
        ],
        "exercices": [
          "Un triangle a une base de 8 cm et une hauteur de 5 cm. Calcule son aire → Corrigé : A = (8 × 5) ÷ 2 = 20 cm²",
          "Un triangle a une base de 10 cm et une hauteur de 6 cm. Calcule son aire → Corrigé : A = (10 × 6) ÷ 2 = 30 cm²"
        ]
      },
      {
        "matiere": "MESURE",
        "topic": "Correspondance de mesure de surface et agraire (consolidation)",
        "approche": "Consolider la correspondance entre unités de surface et unités agraires par la résolution de problèmes concrets liés aux rizières.",
        "transmission": [
          "Rappel de la correspondance are/hectare et m²/dam²/hm² vue la semaine précédente",
          "Exercices de conversion croisée dans les deux sens",
          "Résolution d'un petit problème concret : surface d'une rizière en ares et en m²"
        ],
        "exercices": [
          "Une rizière mesure 5 hectares. Exprime cette surface en ares → Corrigé : 5 hectares = 500 are",
          "Une parcelle mesure 25 are. Exprime cette surface en m² → Corrigé : 25 are = 2 500 m²"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "L'appareil circulatoire et le sang",
        "approche": "Étudier le rôle du cœur, des vaisseaux sanguins et du sang dans la circulation, en clôture de l'étude des grands appareils du corps humain.",
        "transmission": [
          "Rappel de l'appareil urinaire vu la semaine précédente",
          "Observation d'un schéma simplifié du cœur et des vaisseaux sanguins",
          "Explication du rôle du cœur (pomper le sang) et du sang (transporter l'oxygène et les nutriments)",
          "Jeu de questions-réponses sur la circulation sanguine"
        ],
        "exercices": [
          "Quel est le rôle du cœur ? → Corrigé : pomper le sang dans tout le corps",
          "À quoi sert le sang ? → Corrigé : il transporte l'oxygène et les nutriments dans le corps"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "Le climat de Madagascar",
        "approche": "Étudier les différents types de climat de Madagascar selon les régions (chaud et humide à l'est, tempéré sur les hautes terres, chaud et sec à l'ouest et au sud).",
        "transmission": [
          "Rappel des cours d'eaux de Madagascar vus la semaine précédente",
          "Présentation des différents climats selon les grandes régions de l'île",
          "Lien entre le relief, les vents et la répartition des pluies",
          "Repérage sur la carte des zones climatiques"
        ],
        "exercices": [
          "Quel type de climat trouve-t-on sur la côte est de Madagascar ? → Corrigé : un climat chaud et humide",
          "Pourquoi le sud de Madagascar est-il plus sec ? → Corrigé : réponse cohérente, ex. il reçoit moins de pluie du fait de sa position géographique"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Fanjakana Betsimisaraka",
        "approche": "Mampianatra ny votoatin'ny fanjakana Betsimisaraka fahiny: ny toerana nisy azy any atsinanana, ny fombany manokana, ho fanamarinana ny lesona momba ireo fanjakana teo Madagasikara nandritra ny volana.",
        "transmission": [
          "Famerenana fohy ny fanjakana Sakalava natao herinandro teo aloha",
          "Fampahafantarana ny toerana misy ny Betsimisaraka (faritra atsinanana)",
          "Famintinana ankapobeny ny fanjakana telo hita nandritra ny volana (Betsileo, Sakalava, Betsimisaraka)"
        ],
        "exercices": [
          "Aiza no misy ny fanjakana Betsimisaraka, araka ny nianarana? → Corrigé : any amin'ny faritra atsinanan'i Madagasikara",
          "Tanisao fanjakana roa hafa nianarana nandritra ity volana ity → Corrigé : ny Betsileo sy ny Sakalava"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Fanajana fananam-pirenena",
        "approche": "Mampianatra ny maha-zava-dehibe ny fanajana ny fananam-pirenena (fitaovana, trano, fanamboarana ho an'ny besinimaro) ho fanamarinana ny lesona civique nandritra ny volana.",
        "transmission": [
          "Fifampiresahana am-bava momba ny ohatra fananam-pirenena hita manodidina (sekoly, tsena, lalana)",
          "Fanadihadiana ny antony tokony hanajana izany ary ny fiantraikan'ny fanimbana azy",
          "Fanoratana fehezanteny fohy milaza fananam-pirenena iray sy ny antony hanajana azy"
        ],
        "exercices": [
          "Tanisao ohatra fananam-pirenena iray → Corrigé : ohatra, ny sekoly, ny lalana, ny tsenan'ny tanàna (valiny mety samihafa)",
          "Nahoana no ilaina ny manaja ny fananam-pirenena? → Corrigé : mba ho tombontsoan'ny besinimaro izany, fa tsy an'olon-tokana"
        ]
      },
      {
        "matiere": "ANGLAIS",
        "topic": "The vegetables",
        "approche": "Apprendre le vocabulaire des légumes en anglais et l'utiliser dans des phrases simples, en clôture du vocabulaire alimentaire du mois.",
        "transmission": [
          "Présentation du vocabulaire : a carrot, a tomato, a potato, an onion, a cabbage",
          "Jeu : deviner le légume décrit par l'enseignant",
          "Exercice oral : 'I like...' / 'I don't like...' avec les légumes",
          "Copie du vocabulaire dans le cahier"
        ],
        "exercices": [
          "Traduis : une carotte → Corrigé : a carrot",
          "Complète : 'I don't like eating ...' (un oignon) → Corrigé : an onion"
        ]
      }
    ]
  }
];

const DECEMBRE_8EME = [
  {
    "n": 1,
    "dateDebut": "2025/12/01",
    "theme": "Temps et saison",
    "sous": "Ny lohataona Lov p.60 · Le bonheur des uns, malheur des autres · La sécheresse dans le sud",
    "matieres": [
      {
        "matiere": "VAKITENY",
        "topic": "Ny lohataona — Lov p.60",
        "approche": "Mampianatra ny lahatsoratra 'Ny lohataona' amin'ny fomba mizotra: famakiana mangina → famakiana mafy → fanontaniana fahatakarana, mifototra amin'ny toetry ny andro amin'ny vanim-potoana mafana.",
        "transmission": [
          "Famerenana fohy ny lahatsoratra 'Fambolena vary any Alaotra' teo aloha",
          "Famakian'ny mpampianatra manontolo ny lahatsoratra 'Ny lohataona' p.60 amin'ny feo mazava",
          "Famakiam-panjifa mangina nataon'ny mpianatra",
          "Fanazavana ny teny sarotra hita ao amin'ny lahatsoratra (lohataona, mafana, orana)",
          "Famakiana mafy nataon'ny mpianatra 3-4, tsirairay andalana",
          "Fanontaniana fahatakarana am-bava momba ny toetry ny lohataona voalaza ao amin'ny lahatsoratra"
        ],
        "exercices": [
          "Amin'ny volana firy no manomboka ny lohataona, araka ny lahatsoratra? → Corrigé : valiny araka ny lahatsoratra p.60 (ohatra, manomboka amin'ny Novambra/Desambra)",
          "Inona ny toetry ny andro amin'ny lohataona voalaza ao amin'ny lahatsoratra? → Corrigé : mafana sy misy orana (araka ny lahatsoratra)",
          "Vakio andalana 2 amin'ny lahatsoratra amin'ny feo mazava → Corrigé : famakiana tsy misy tafintohina"
        ]
      },
      {
        "matiere": "F/B",
        "topic": "Ny fitaovam-pamokarana",
        "approche": "Manazava ny lohahevitra 'ny fitaovam-pamokarana' (fitaovana ampiasaina amin'ny asa tany), manohy avy amin'ny lohahevitra 'ny voly vary' natao ny volana Novambra.",
        "transmission": [
          "Fifampiresahana am-bava : inona avy ny fitaovana ampiasain'ny mpamboly (angady, fangady, fitaovana hafa)",
          "Firaketana an-tsoratra ny anaran'ny fitaovana sy ny ilàna azy avy",
          "Fanoratana fehezanteny 2-3 momba ny fampiasana ny fitaovam-pamokarana"
        ],
        "exercices": [
          "Tanisao fitaovam-pamokarana 2 fantatrao → Corrigé : ohatra, angady, fangady, sakaikely (valiny mety samihafa)",
          "Inona no ilaina ny angady? → Corrigé : mba hihady tany na hamboly"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Teny misaraka sy ny teny mitambatra",
        "approche": "Mampianatra ny fanavahana ny teny misaraka (teny mitokana samy manana heviny) sy ny teny mitambatra (teny roa mitambatra hiforona teny iray hafa hevitra), manohy ny lesona 'tsi-/tsy' natao teo aloha.",
        "transmission": [
          "Fanomezana ohatra teny misaraka vitsivitsy (ohatra: vary fotsy)",
          "Fanomezana ohatra teny mitambatra (ohatra: tanindrazana = tany + ny + razana)",
          "Fanazavana ny fahasamihafan'ny roa karazana teny",
          "Fanadihadiana am-tsoratra: mamantatra raha teny misaraka sa mitambatra"
        ],
        "exercices": [
          "Inona ity: 'tanindrazana' — teny misaraka sa mitambatra? → Corrigé : teny mitambatra (tany + razana)",
          "Tanisao teny mitambatra iray hafa → Corrigé : ohatra, mpianatra (mpi- + anatra), valiny mety samihafa"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Ny fhzt kely indrindra mivaingana amin'elementra 2 na 3",
        "approche": "Manohy ny lesona 'rafitry ny fehezanteny' tamin'ny fampianarana ny fehezanteny fohy indrindra mivaingana amin'elementra 2 na 3 (sujet+verbe / sujet+verbe+objet).",
        "transmission": [
          "Famerenana fohy ny rafitry ny fehezanteny natao teo aloha",
          "Fanazavana ny fehezanteny kely indrindra mivaingana amin'elementra 2 (ohatra: 'Mihinana ny zaza')",
          "Fanazavana ny fehezanteny mivaingana amin'elementra 3 (ohatra: 'Mihinana vary ny zaza')",
          "Fanadihadiana am-tsoratra amin'ny fehezanteny nomena"
        ],
        "exercices": [
          "Ataovy fehezanteny 2 elementra: 'zaza / milalao' → Corrigé : 'Milalao ny zaza.'",
          "Ataovy fehezanteny 3 elementra: 'zaza / mihinana / vary' → Corrigé : 'Mihinana vary ny zaza.'"
        ]
      },
      {
        "matiere": "LANGAGE",
        "topic": "Le bonheur des uns, malheur des autres — présentation orale",
        "approche": "Introduire le thème du texte 'Le bonheur des uns, malheur des autres' par un échange oral guidé, en lien avec le thème du mois : le temps et les saisons.",
        "transmission": [
          "Discussion collective : la pluie fait-elle plaisir à tout le monde ?",
          "Écoute du texte lu par l'enseignant",
          "Repérage oral des personnages et de leur situation (heureux/malheureux)",
          "Jeu de questions-réponses : pourquoi untel est content et un autre non ?"
        ],
        "exercices": [
          "Explique à l'oral pourquoi la pluie peut faire le bonheur de l'un et le malheur de l'autre → Corrigé : réponse cohérente selon le texte (ex. bon pour le paysan, mauvais pour le voyageur)",
          "Cite un personnage du texte et sa situation → Corrigé : réponse fidèle au texte étudié"
        ]
      },
      {
        "matiere": "LECTURE",
        "topic": "La sécheresse dans le sud",
        "approche": "Étudier le texte 'La sécheresse dans le sud' par lecture silencieuse puis à voix haute, avec des questions de compréhension sur les conséquences du manque de pluie.",
        "transmission": [
          "Lecture silencieuse individuelle du texte",
          "Explication du vocabulaire nouveau (sécheresse, manque d'eau, récolte)",
          "Lecture à voix haute par plusieurs élèves",
          "Questions de compréhension écrites sur les causes et conséquences de la sécheresse"
        ],
        "exercices": [
          "Qu'est-ce que la sécheresse, d'après le texte ? → Corrigé : le manque prolongé de pluie (réponse fidèle au texte étudié)",
          "Quelle région est touchée par la sécheresse dans le texte ? → Corrigé : le sud (de Madagascar)"
        ]
      },
      {
        "matiere": "VOCABULAIRE",
        "topic": "Le temps et la saison",
        "approche": "Constituer le champ lexical du temps qu'il fait et des saisons à partir des textes de lecture et de langage étudiés cette semaine.",
        "transmission": [
          "Relevé collectif au tableau des mots liés au temps (pluie, soleil, vent, chaleur)",
          "Présentation des 2 grandes saisons de Madagascar : la saison chaude et pluvieuse, la saison fraîche et sèche",
          "Copie du vocabulaire dans le cahier avec un exemple de phrase pour chacun"
        ],
        "exercices": [
          "Cite 2 mots liés au temps qu'il fait → Corrigé : ex. la pluie, le soleil (toute paire correcte)",
          "Combien de grandes saisons connaît Madagascar ? → Corrigé : deux (la saison chaude/pluvieuse et la saison fraîche/sèche)"
        ]
      },
      {
        "matiere": "GRAMMAIRE",
        "topic": "L'interrogation \"est-ce que ?\"",
        "approche": "Introduire la formation de la phrase interrogative avec 'est-ce que' à partir de phrases affirmatives tirées des textes du mois.",
        "transmission": [
          "Rappel de la phrase interrogative simple (avec point d'interrogation)",
          "Présentation de la formule 'Est-ce que + phrase affirmative ?'",
          "Transformation collective de phrases affirmatives en phrases interrogatives avec 'est-ce que'",
          "Exercice écrit de transformation"
        ],
        "exercices": [
          "Transforme en question avec 'est-ce que' : 'Il pleut aujourd'hui.' → Corrigé : 'Est-ce qu'il pleut aujourd'hui ?'",
          "Transforme : 'Les paysans sont contents.' → Corrigé : 'Est-ce que les paysans sont contents ?'"
        ]
      },
      {
        "matiere": "ORTHOGRAPHE",
        "topic": "le - la - les - l'",
        "approche": "Distinguer et employer correctement les articles définis 'le', 'la', 'les', 'l'' selon le genre, le nombre et la voyelle initiale du nom.",
        "transmission": [
          "Rappel : 'le' devant un nom masculin singulier, 'la' devant un nom féminin singulier",
          "'les' devant un nom pluriel, 'l'' devant un nom (masculin ou féminin) commençant par une voyelle",
          "Exercice à trous : compléter avec l'article correct",
          "Correction collective avec justification"
        ],
        "exercices": [
          "Complète : '... soleil brille sur ... rizières.' → Corrigé : 'Le soleil brille sur les rizières.'",
          "Complète : '... eau manque dans ... sud.' → Corrigé : 'L'eau manque dans le sud.'"
        ]
      },
      {
        "matiere": "CONJUGAISON",
        "topic": "Le verbe \"Pouvoir\"",
        "approche": "Conjuguer le verbe 'pouvoir' au présent, à l'imparfait, au futur simple et au passé composé de l'indicatif.",
        "transmission": [
          "Rappel de la conjugaison du verbe 'vouloir' vue en novembre",
          "Présentation de la conjugaison irrégulière de 'pouvoir', un temps à la fois",
          "Exercice de conjugaison écrit aux 4 temps sur une phrase modèle",
          "Correction collective avec tableau récapitulatif"
        ],
        "exercices": [
          "Conjugue 'pouvoir' au présent, 1ère personne du singulier : 'Je ... venir demain.' → Corrigé : peux",
          "Conjugue 'pouvoir' à l'imparfait, 3e personne du pluriel : 'Ils ... jouer dehors.' → Corrigé : pouvaient",
          "Conjugue 'pouvoir' au futur simple, 2e personne du singulier : 'Tu ... m'aider.' → Corrigé : pourras"
        ]
      },
      {
        "matiere": "ARITHMÉTIQUE",
        "topic": "Fraction : comparaison et simplification",
        "approche": "Comparer deux fractions de même dénominateur, et simplifier une fraction en divisant numérateur et dénominateur par un diviseur commun.",
        "transmission": [
          "Rappel de la notion de fraction (numérateur, dénominateur)",
          "Comparaison de fractions de même dénominateur (le plus grand numérateur donne la plus grande fraction)",
          "Présentation de la simplification : diviser numérateur et dénominateur par un même nombre",
          "Exercices écrits de comparaison et de simplification"
        ],
        "exercices": [
          "Compare : 3/5 et 4/5 → Corrigé : 3/5 < 4/5",
          "Simplifie 6/8 → Corrigé : 3/4 (division par 2)",
          "Simplifie 10/15 → Corrigé : 2/3 (division par 5)"
        ]
      },
      {
        "matiere": "GÉOMÉTRIE",
        "topic": "Le trapèze",
        "approche": "Découvrir le trapèze : sa définition (quadrilatère avec deux côtés parallèles), ses éléments (grande base, petite base, hauteur) et son tracé.",
        "transmission": [
          "Observation d'un trapèze dessiné au tableau",
          "Définition : quadrilatère ayant deux côtés parallèles (les bases)",
          "Identification de la grande base, de la petite base et de la hauteur",
          "Exercice de tracé d'un trapèze à main levée puis à la règle"
        ],
        "exercices": [
          "Combien de côtés parallèles a un trapèze ? → Corrigé : 2 côtés parallèles (les bases)",
          "Nomme les éléments d'un trapèze → Corrigé : la grande base, la petite base, les côtés obliques, la hauteur"
        ]
      },
      {
        "matiere": "MESURE",
        "topic": "Les nombres sexagésimaux",
        "approche": "Introduire les nombres sexagésimaux (mesure du temps en heures, minutes, secondes, base 60) à travers la lecture de l'heure.",
        "transmission": [
          "Rappel du tableau de conversion des masses vu en novembre",
          "Présentation du système sexagésimal : 1 heure = 60 minutes, 1 minute = 60 secondes",
          "Lecture collective de l'heure sur une horloge",
          "Exercice écrit : écrire une durée en heures-minutes"
        ],
        "exercices": [
          "Combien de minutes dans 1 heure ? → Corrigé : 60 minutes",
          "Écris : 2 heures 30 minutes → Corrigé : 2 h 30 min",
          "Combien de secondes dans 2 minutes ? → Corrigé : 120 secondes"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "Les parasitoses intestinales / Le paludisme",
        "approche": "Étudier les maladies liées à la saison des pluies : les parasitoses intestinales (vers) et le paludisme (transmis par les moustiques), leurs causes et leur prévention.",
        "transmission": [
          "Explication des parasitoses intestinales : causes (eau/aliments souillés) et symptômes",
          "Explication du paludisme : transmission par le moustique, symptômes (fièvre)",
          "Présentation des moyens de prévention (eau propre, moustiquaire, hygiène des mains)",
          "Jeu de questions-réponses sur les précautions à prendre"
        ],
        "exercices": [
          "Comment attrape-t-on le paludisme ? → Corrigé : par la piqûre d'un moustique infecté",
          "Cite un moyen de prévenir les parasitoses intestinales → Corrigé : se laver les mains, boire de l'eau propre (valiny mety samihafa)"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "La végétation de Madagascar",
        "approche": "Découvrir les grands types de végétation de Madagascar (forêt tropicale humide, savane, forêt épineuse) selon les régions et le climat.",
        "transmission": [
          "Rappel du climat de Madagascar vu en novembre",
          "Présentation des grands types de végétation : forêt humide de l'Est, savane des Hautes Terres, forêt épineuse du Sud",
          "Observation d'une carte de la végétation de Madagascar",
          "Lien entre climat et type de végétation de chaque région"
        ],
        "exercices": [
          "Quel type de végétation trouve-t-on dans l'Est humide ? → Corrigé : la forêt tropicale humide",
          "Pourquoi le Sud a-t-il une végétation différente de l'Est ? → Corrigé : parce que le Sud est plus sec (climat aride)"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Fanjakana Merina",
        "approche": "Mampianatra ny fanjakan'i Madagasikara tao amin'ny Fanjakana Merina, ny mpanjaka nifandimby ary ny fampiraisana ny nosy.",
        "transmission": [
          "Fanazavana fohy ny fisian'ny fanjakana samihafa tany Madagasikara talohan'ny Fanjakana Merina (Betsileo, Sakalava, Betsimisaraka — efa nianarana)",
          "Fampahafantarana ny Fanjakana Merina sy ny mpanjaka nanorina azy",
          "Fanadihadiana momba ny fampiraisan'i Andrianampoinimerina sy Radama I ny ankamaroan'ny nosy"
        ],
        "exercices": [
          "Iza no mpanjaka nanamafy ny Fanjakana Merina? → Corrigé : Andrianampoinimerina (na Radama I, araka ny nampianarina)",
          "Inona no vita nataon'i Radama I momba ny nosy? → Corrigé : nampiray ny ankamaroan'ny faritr'i Madagasikara"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Fampahalalam-baovao",
        "approche": "Mampianatra ny lanjan'ny fampahalalam-baovao (ny gazety, ny radio, ny fahitalavitra) amin'ny fiarahamonina.",
        "transmission": [
          "Fifampiresahana am-bava momba ny fomba fahazoan'ny olona vaovao (gazety, radio, fahitalavitra)",
          "Fanazavana ny ilàna ny fampahalalam-baovao amin'ny fiainana andavanandro",
          "Fanoratana fehezanteny fohy milaza fomba iray fahazoana vaovao"
        ],
        "exercices": [
          "Tanisao fomba 2 fahazoana vaovao → Corrigé : ohatra, radio sy gazety (valiny mety samihafa)",
          "Nahoana no ilaina ny fampahalalam-baovao? → Corrigé : mba hahafantarana izay mitranga ao amin'ny fiarahamonina"
        ]
      },
      {
        "matiere": "ANGLAIS",
        "topic": "The animals",
        "approche": "Apprendre le vocabulaire des animaux (domestiques et sauvages) en anglais.",
        "transmission": [
          "Présentation du vocabulaire : a dog, a cat, a cow, a bird, a lion",
          "Jeu : mimer l'animal nommé en anglais",
          "Exercice oral : 'What is this? It is a...'",
          "Copie du vocabulaire dans le cahier"
        ],
        "exercices": [
          "Traduis : un chien → Corrigé : a dog",
          "Complète : 'This is ... cat.' → Corrigé : a"
        ]
      }
    ]
  },
  {
    "n": 2,
    "dateDebut": "2025/12/08",
    "theme": "Temps et saison (suite)",
    "sous": "Ny fahavaratra Lov p.61 · Le climat · Fraction décimale",
    "matieres": [
      {
        "matiere": "VAKITENY",
        "topic": "Ny fahavaratra — Lov p.61",
        "approche": "Manohy ny lesona 'Ny lohataona' tamin'ny fampianarana ny lahatsoratra 'Ny fahavaratra' — mampitaha ny vanim-potoana roa (lohataona sy fahavaratra).",
        "transmission": [
          "Famerenana fohy ny lahatsoratra 'Ny lohataona' teo aloha",
          "Famakian'ny mpampianatra ny lahatsoratra 'Ny fahavaratra' p.61 amin'ny feo mazava",
          "Fanazavana ny teny sarotra vaovao",
          "Famakiana mafy nataon'ny mpianatra samihafa",
          "Fanontaniana fahatakarana: mampitaha ny toetry ny lohataona sy ny fahavaratra"
        ],
        "exercices": [
          "Inona ny toetry ny andro amin'ny fahavaratra, araka ny lahatsoratra? → Corrigé : valiny araka ny lahatsoratra p.61 (ohatra, mangatsiaka, tsy dia misy orana)",
          "Ampitahao ny lohataona sy ny fahavaratra: iza no mafana kokoa? → Corrigé : ny lohataona no mafana kokoa"
        ]
      },
      {
        "matiere": "F/B",
        "topic": "Ny voly hazo",
        "approche": "Manazava ny lohahevitra 'ny voly hazo' (fambolen-kazo) sy ny lanjany ho an'ny tontolo iainana, manohy ny lohahevitra 'fitaovam-pamokarana' natao herinandro teo aloha.",
        "transmission": [
          "Fifampiresahana am-bava: nahoana no ilaina ny mamboly hazo?",
          "Firaketana an-tsoratra ny soa azo avy amin'ny hazo (rivotra madio, aloka, hazo fanaovan-trano)",
          "Fanoratana fehezanteny 2-3 momba ny voly hazo"
        ],
        "exercices": [
          "Tanisao soa iray azo avy amin'ny hazo → Corrigé : ohatra, manome rivotra madio, manome aloka (valiny mety samihafa)",
          "Nahoana no ilaina ny mamboly hazo isan-taona? → Corrigé : mba hikolokolo ny tontolo iainana sy hisoroka ny fahasimban-tany"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Fanakambanan-teny",
        "approche": "Manohy ny lesona 'teny misaraka sy teny mitambatra' tamin'ny fampianarana ny fomba fanakambanana teny roa ho teny iray hafa hevitra (fampitovizana sy fanovana litera).",
        "transmission": [
          "Famerenana fohy ny teny mitambatra natao herinandro teo aloha",
          "Fanazavana ny fitsipika fanakambanana teny (fanovana litera farany, fampidirana litera N)",
          "Fanaovana ohatra am-bava: tany + razana = tanindrazana",
          "Fanadihadiana am-tsoratra amin'ny teny nomena"
        ],
        "exercices": [
          "Akambano: 'vato' + 'lampy' → Corrigé : vatolampy",
          "Akambano: 'tany' + 'be' → Corrigé : tanibe (na valiny mifanaraka amin'ny fitsipika nampianarina)"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Famoronana sy fanatevenana fehezanteny",
        "approche": "Manohy ny lesona 'fehezanteny kely indrindra' tamin'ny fampianarana ny famoronana fehezanteny vaovao sy ny fanatevenana azy amin'ny fanampiana teny (mpanoritra, mpamaritra).",
        "transmission": [
          "Famerenana fohy ny fehezanteny 2-3 elementra natao herinandro teo aloha",
          "Fanazavana ny fomba famoronana fehezanteny vaovao avy amin'ny teny fototra",
          "Fanazavana ny fanatevenana fehezanteny amin'ny fanampiana mpamaritra na mpanoritra",
          "Fanadihadiana am-tsoratra: mamorona sy manatevina fehezanteny"
        ],
        "exercices": [
          "Mamorona fehezanteny mivaingana amin'elementra 2 miaraka amin'ny teny 'mpianatra' → Corrigé : ohatra, 'Miasa ny mpianatra.'",
          "Atevino io fehezanteny io: 'Mihinana ny zaza.' → Corrigé : ohatra, 'Mihinana vary madio ny zaza kely.' (valiny mety samihafa)"
        ]
      },
      {
        "matiere": "LANGAGE",
        "topic": "Le bonheur des uns, malheur des autres — suite",
        "approche": "Approfondir l'expression orale à partir du même texte, en travaillant l'expression d'un point de vue personnel sur la situation présentée.",
        "transmission": [
          "Relecture rapide du texte étudié la semaine précédente",
          "Jeu de rôle : un élève joue le personnage heureux, un autre le personnage malheureux",
          "Débat oral guidé : est-ce juste que le bonheur des uns fasse le malheur des autres ?",
          "Mise en commun et correction des phrases orales"
        ],
        "exercices": [
          "Donne ton avis à l'oral sur la situation du texte, en une phrase complète → Corrigé : phrase correcte exprimant un avis personnel justifié",
          "Rejoue à l'oral le dialogue entre les deux personnages du texte → Corrigé : dialogue fidèle à la situation du texte"
        ]
      },
      {
        "matiere": "LECTURE",
        "topic": "Le climat",
        "approche": "Étudier le texte 'Le climat' par lecture silencieuse puis à voix haute, en lien avec le texte de la sécheresse étudié la semaine précédente.",
        "transmission": [
          "Lecture silencieuse individuelle du texte",
          "Explication du vocabulaire nouveau (climat, tropical, humide)",
          "Lecture à voix haute par plusieurs élèves",
          "Questions de compréhension écrites sur les caractéristiques du climat malgache"
        ],
        "exercices": [
          "Combien de grandes saisons décrit le texte ? → Corrigé : réponse fidèle au texte (deux saisons : chaude/pluvieuse et fraîche/sèche)",
          "Quelle est la différence de climat entre le Nord et le Sud, d'après le texte ? → Corrigé : réponse fidèle au texte étudié"
        ]
      },
      {
        "matiere": "VOCABULAIRE",
        "topic": "Le temps et la saison — suite",
        "approche": "Approfondir le vocabulaire du temps et des saisons avec des expressions plus précises (climat, tropical, aride) tirées du texte 'Le climat'.",
        "transmission": [
          "Relevé collectif des nouveaux mots du texte 'Le climat'",
          "Classement du vocabulaire en deux colonnes : saison chaude / saison fraîche",
          "Copie du vocabulaire avec exemple de phrase"
        ],
        "exercices": [
          "Que signifie le mot 'aride' ? → Corrigé : très sec, avec peu de pluie",
          "Utilise le mot 'climat' dans une phrase → Corrigé : phrase correcte employant le mot"
        ]
      },
      {
        "matiere": "GRAMMAIRE",
        "topic": "Le pronom interrogatif",
        "approche": "Introduire les pronoms interrogatifs (qui, que, quoi) pour poser des questions, en lien avec la forme 'est-ce que' vue la semaine précédente.",
        "transmission": [
          "Rappel de l'interrogation avec 'est-ce que' vue la semaine précédente",
          "Présentation des pronoms interrogatifs : qui (personne), que/quoi (chose)",
          "Formulation collective de questions avec ces pronoms à partir du texte 'Le climat'",
          "Exercice écrit de formulation de questions"
        ],
        "exercices": [
          "Pose une question avec 'qui' sur : 'Le paysan cultive le riz.' → Corrigé : 'Qui cultive le riz ?'",
          "Pose une question avec 'que' sur : 'Il récolte des fruits.' → Corrigé : 'Que récolte-t-il ?'"
        ]
      },
      {
        "matiere": "ORTHOGRAPHE",
        "topic": "ou / où",
        "approche": "Distinguer à l'écrit les homophones grammaticaux 'ou' (choix) et 'où' (lieu ou temps) par une règle simple de remplacement.",
        "transmission": [
          "Rappel : 'ou' peut être remplacé par 'ou bien', 'où' ne se remplace pas ainsi",
          "'où' indique un lieu ou un moment",
          "Exercice à trous : compléter avec ou/où",
          "Correction collective avec justification de chaque choix"
        ],
        "exercices": [
          "Complète : 'Il pleut dans le Nord ... dans l'Est.' → Corrigé : 'Il pleut dans le Nord ou dans l'Est.'",
          "Complète : 'Voici la région ... il pleut le plus.' → Corrigé : 'Voici la région où il pleut le plus.'"
        ]
      },
      {
        "matiere": "CONJUGAISON",
        "topic": "Le verbe \"mettre\"",
        "approche": "Conjuguer le verbe 'mettre' au présent, à l'imparfait, au futur simple et au passé composé de l'indicatif.",
        "transmission": [
          "Rappel de la conjugaison de 'pouvoir' vue la semaine précédente",
          "Présentation de la conjugaison irrégulière de 'mettre', un temps à la fois",
          "Exercice de conjugaison écrit aux 4 temps sur une phrase modèle",
          "Correction collective avec tableau récapitulatif"
        ],
        "exercices": [
          "Conjugue 'mettre' au présent, 3e personne du singulier : 'Elle ... son manteau.' → Corrigé : met",
          "Conjugue 'mettre' au passé composé, 1ère personne du singulier : 'J' ... mon cahier dans le sac.' → Corrigé : ai mis"
        ]
      },
      {
        "matiere": "ARITHMÉTIQUE",
        "topic": "Fraction décimale",
        "approche": "Introduire la fraction décimale (dénominateur 10, 100, 1000) et son écriture sous forme de nombre décimal.",
        "transmission": [
          "Rappel de la simplification de fraction vue la semaine précédente",
          "Présentation de la fraction décimale : dénominateur 10, 100 ou 1000",
          "Passage de la fraction décimale au nombre décimal (ex. 3/10 = 0,3)",
          "Exercice écrit de transformation"
        ],
        "exercices": [
          "Transforme 5/10 en nombre décimal → Corrigé : 0,5",
          "Transforme 25/100 en nombre décimal → Corrigé : 0,25",
          "Écris 7/10 en nombre décimal → Corrigé : 0,7"
        ]
      },
      {
        "matiere": "GÉOMÉTRIE",
        "topic": "Le parallélogramme",
        "approche": "Découvrir le parallélogramme : sa définition (quadrilatère avec deux paires de côtés parallèles), ses propriétés et son tracé.",
        "transmission": [
          "Rappel du trapèze vu la semaine précédente",
          "Définition : quadrilatère ayant deux paires de côtés parallèles et de même longueur",
          "Observation des propriétés (côtés opposés parallèles et égaux)",
          "Exercice de tracé d'un parallélogramme à la règle et à l'équerre"
        ],
        "exercices": [
          "Combien de paires de côtés parallèles a un parallélogramme ? → Corrigé : 2 paires",
          "Un rectangle est-il un parallélogramme ? → Corrigé : oui, car il a deux paires de côtés parallèles et égaux"
        ]
      },
      {
        "matiere": "MESURE",
        "topic": "Conversion des nombres complexes",
        "approche": "Apprendre à convertir les nombres complexes (durées en heures-minutes-secondes) en unité simple, et inversement.",
        "transmission": [
          "Rappel des nombres sexagésimaux vus la semaine précédente",
          "Présentation de la conversion : heures en minutes, minutes en secondes",
          "Exercice de conversion d'une durée complexe (ex. 1 h 15 min) en minutes",
          "Exercice inverse : convertir des minutes en heures-minutes"
        ],
        "exercices": [
          "Convertis 1 h 30 min en minutes → Corrigé : 90 minutes",
          "Convertis 100 minutes en heures et minutes → Corrigé : 1 h 40 min",
          "Convertis 3 minutes en secondes → Corrigé : 180 secondes"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "La tuberculose / La peste",
        "approche": "Étudier deux maladies contagieuses présentes à Madagascar : la tuberculose (maladie des poumons) et la peste, leurs symptômes et leur prévention.",
        "transmission": [
          "Explication de la tuberculose : maladie contagieuse des poumons, transmission par la toux",
          "Explication de la peste : maladie transmise par les puces des rats, encore présente dans certaines régions",
          "Présentation des moyens de prévention (vaccination, hygiène, consultation rapide en cas de symptômes)",
          "Jeu de questions-réponses sur les précautions à prendre"
        ],
        "exercices": [
          "Comment se transmet la tuberculose ? → Corrigé : par la toux d'une personne malade (voie respiratoire)",
          "Que faut-il faire en cas de fièvre suspecte ? → Corrigé : consulter rapidement un centre de santé"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "Effectif et répartition de la population",
        "approche": "Découvrir la notion d'effectif de population (nombre d'habitants) et sa répartition inégale sur le territoire de Madagascar (Hautes Terres densément peuplées, Sud peu peuplé).",
        "transmission": [
          "Rappel de la végétation de Madagascar vue la semaine précédente",
          "Présentation de la notion de population et d'effectif (nombre total d'habitants)",
          "Observation d'une carte de répartition de la population de Madagascar",
          "Explication des zones densément peuplées (Hautes Terres) et peu peuplées (Sud)"
        ],
        "exercices": [
          "Quelle région de Madagascar est la plus peuplée, d'après la carte ? → Corrigé : les Hautes Terres (région d'Antananarivo)",
          "Pourquoi le Sud est-il peu peuplé ? → Corrigé : parce que le climat y est aride et l'eau rare"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Ny fanjanahantany",
        "approche": "Manohy ny lesona 'Fanjakana Merina' amin'ny fampianarana ny fanjanahantany (fanjanahan'i Frantsa an'i Madagasikara) sy ny voka-dratsiny.",
        "transmission": [
          "Famerenana fohy ny Fanjakana Merina natao herinandro teo aloha",
          "Fanazavana ny hoe fanjanahantany (fahaverezan'ny fahaleovan-tenan'ny firenena)",
          "Fampahafantarana ny fanjanahan'i Frantsa an'i Madagasikara (taona 1896)",
          "Fifampiresahana am-bava momba ny voka-dratsy nateraky ny fanjanahantany"
        ],
        "exercices": [
          "Firy taona no nanjanahan'i Frantsa an'i Madagasikara? → Corrigé : 1896",
          "Inona no atao hoe fanjanahantany? → Corrigé : ny fakan'ny firenena iray ny fahaleovan-tenan'ny firenena hafa, mba hifehezany azy"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Fampahalalam-baovao — fanamafisana",
        "approche": "Manohy ny lesona 'fampahalalam-baovao' amin'ny fanamafisana ny fahaizana mizara vaovao marina sy ny fitandremana amin'ny vaovao diso (fanaparitahana tsy marina).",
        "transmission": [
          "Famerenana fohy ny fomba fahazoana vaovao natao herinandro teo aloha",
          "Fanazavana ny maha-zava-dehibe ny fizarana vaovao marina",
          "Fifampiresahana am-bava: ahoana no ahafantarana raha vaovao marina sa diso"
        ],
        "exercices": [
          "Nahoana no tsy tokony hino avy hatrany ny vaovao rehetra re? → Corrigé : mba tsy ho voafitaka amin'ny vaovao diso, ilaina ny mamantatra ny loharano",
          "Tanisao antoka iray azo itokiana ho loharanom-baovao → Corrigé : ohatra, radio nasionaly, gazety malaza (valiny mety samihafa)"
        ]
      },
      {
        "matiere": "ANGLAIS",
        "topic": "The family",
        "approche": "Apprendre le vocabulaire de la famille en anglais et l'utiliser dans des phrases simples.",
        "transmission": [
          "Rappel du vocabulaire des animaux vu la semaine précédente",
          "Présentation du vocabulaire : father, mother, brother, sister, grandmother, grandfather",
          "Jeu : présenter sa famille en anglais avec une photo ou un dessin",
          "Copie du vocabulaire dans le cahier"
        ],
        "exercices": [
          "Traduis : ma mère → Corrigé : my mother",
          "Complète : 'This is my ...' (frère) → Corrigé : brother"
        ]
      }
    ]
  }
];

const JANVIER_8EME = [
  {
    "n": 1,
    "dateDebut": "2026/01/05",
    "theme": "Le cyclone et retour des récoltes",
    "sous": "Fararano Lov p.22 · Ny karazam-biby · Le cyclone · Fraction : réduction au même dénominateur",
    "matieres": [
      {
        "matiere": "VAKITENY",
        "topic": "Fararano — Lov p.22",
        "approche": "Mampianatra ny lahatsoratra 'Fararano' amin'ny fomba mizotra: famakiana mangina → famakiana mafy → fanontaniana fahatakarana, mifototra amin'ny fotoam-pijinjana vary sy ny asa fambolena.",
        "transmission": [
          "Famerenana fohy ny lohahevitra teo aloha momba ny toetrandro (fahavaratra)",
          "Famakian'ny mpampianatra ny lahatsoratra 'Fararano' p.22 amin'ny feo mazava",
          "Fanazavana ny teny sarotra hita ao amin'ny lahatsoratra (fijinjana, vary, sompitra)",
          "Famakiana mafy nataon'ny mpianatra 3-4, tsirairay andalana",
          "Fanontaniana fahatakarana am-bava momba ny votoatin'ny lahatsoratra"
        ],
        "exercices": [
          "Rahoviana no vanim-potoam-pijinjana araka ny lahatsoratra? → Corrigé : valiny araka ny lahatsoratra p.22 (fotoam-pahavaratra, manomboka Janoary)",
          "Inona no asa ataon'ny mpamboly rehefa vita ny fijinjana? → Corrigé : mitahiry ny vokatra ao am-pisompitana / mivarotra ny surplus",
          "Vakio andalana iray amin'ny feo mazava → Corrigé : famakiana tsy misy tafintohina"
        ]
      },
      {
        "matiere": "F/B",
        "topic": "Ny karazam-biby",
        "approche": "Manazava ny karazam-biby fahita eny amin'ny tanàna sy ny fiompiana azy, mifandray amin'ny lohahevitra fararano sy ny vokatra azo amin'ny toetrandro.",
        "transmission": [
          "Fifampiresahana am-bava : biby fahita eny an-tanàna sy ny anjara asany",
          "Fanavahana biby fiompy (omby, akoho, kisoa) sy biby dia",
          "Firaketana an-tsoratra ny anaran'ny biby isaky ny karazany",
          "Fanoratana fehezanteny 2-3 momba ny biby iray tiana"
        ],
        "exercices": [
          "Tanisao biby fiompy telo → Corrigé : ohatra, omby, akoho, kisoa (valiny mety samihafa)",
          "Inona ny fahasamihafan'ny biby fiompy sy ny biby dia? → Corrigé : ny biby fiompy dia karakarain'ny olona, ny biby dia mipetraka any anaty ala na any an-tsaha"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Ny mpanoritra : I / i",
        "approche": "Mampianatra ny fampiasana ny mpanoritra anarana 'I' (soratra lehibe) sy 'i' (soratra madinika) alohan'ny anaran'olona, araka ny toerany ao amin'ny fehezanteny.",
        "transmission": [
          "Fanomezana ohatra anaran'olona misy 'I' eo am-piandohan'ny fehezanteny (Ibao dia mianatra)",
          "Fanazavana ny 'i' madinika ampiasaina eo afovoan'ny fehezanteny (ohatra: Nahita an'i Bao aho)",
          "Fanoratana am-pokonolona fehezanteny mampiasa 'I' sy 'i' araka ny toerany",
          "Fanitsiana am-pokonolona ny lesoka hita"
        ],
        "exercices": [
          "Ampidiro ny mpanoritra marina : '...Bao no mpianatra tsara.' → Corrigé : 'Ibao no mpianatra tsara.' (I lehibe satria eo am-piandohan'ny fehezanteny)",
          "Ampidiro ny mpanoritra marina : 'Nahita an'...Koto aho.' → Corrigé : 'Nahita an'i Koto aho.' (i madinika satria eo afovoan'ny fehezanteny)"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Fanatsorana fhzt",
        "approche": "Mampianatra ny fomba manatsotra fehezanteny lava amin'ny fanesorana ny teny tsy ilaina, mba hahazoana ny hevitra fototra.",
        "transmission": [
          "Fanomezana fehezanteny lava iray nalaina avy amin'ny lahatsoratra 'Fararano'",
          "Fanadihadiana am-bava : inona ny hevitra fototra ao amin'ilay fehezanteny?",
          "Fanesorana ny teny tsy ilaina mba hanatsorana ny fehezanteny",
          "Fampitahana ny fehezanteny voalohany sy ny fehezanteny natsotra"
        ],
        "exercices": [
          "Atsory ity fehezanteny ity : 'Ny mpamboly dia mijinja vary eny amin'ny saha lehibe isaky ny fotoam-pahavaratra.' → Corrigé : 'Mijinja vary ny mpamboly.' (hevitra fototra sisa)",
          "Atsory : 'Ny mpianatra tsara fanahy dia manampy ny namany mianatra.' → Corrigé : 'Manampy ny namany ny mpianatra.'"
        ]
      },
      {
        "matiere": "LANGAGE",
        "topic": "Le bonheur des uns, le malheur des autres",
        "approche": "Poursuivre l'expression orale autour de l'expression étudiée en décembre, en la reliant au contexte du cyclone.",
        "transmission": [
          "Rappel oral de l'expression étudiée en décembre",
          "Discussion collective : un cyclone peut-il apporter du bonheur à certains et du malheur à d'autres ?",
          "Recherche orale d'exemples concrets (la pluie du cyclone remplit les rizières mais détruit les maisons)",
          "Mise en commun des idées et correction des phrases orales"
        ],
        "exercices": [
          "Donne oralement un exemple où le bonheur d'une personne cause le malheur d'une autre → Corrigé : exemple cohérent et correctement formulé à l'oral",
          "Explique en une phrase le sens de l'expression → Corrigé : ce qui profite à l'un peut nuire à l'autre"
        ]
      },
      {
        "matiere": "LECTURE",
        "topic": "Le cyclone",
        "approche": "Étudier le texte 'Le cyclone' par lecture silencieuse puis à voix haute, avec des questions de compréhension sur les effets du cyclone et les précautions à prendre.",
        "transmission": [
          "Lecture silencieuse individuelle du texte 'Le cyclone'",
          "Explication du vocabulaire nouveau (rafale, dégâts, alerte)",
          "Lecture à voix haute par plusieurs élèves, un paragraphe chacun",
          "Questions de compréhension écrites sur les faits et les conséquences décrits"
        ],
        "exercices": [
          "Quels dégâts le cyclone a-t-il causés, d'après le texte ? → Corrigé : réponse fidèle au texte étudié (ex. toitures arrachées, arbres déracinés)",
          "Que doit-on faire avant l'arrivée d'un cyclone, d'après le texte ? → Corrigé : réponse fidèle au texte (ex. se mettre à l'abri, écouter l'alerte)"
        ]
      },
      {
        "matiere": "VOCABULAIRE",
        "topic": "Le cyclone",
        "approche": "Constituer le champ lexical du cyclone et des phénomènes météorologiques violents à partir du texte étudié en lecture.",
        "transmission": [
          "Relevé collectif au tableau des mots du texte liés au cyclone (vent, pluie, tempête, dégâts)",
          "Classement des mots selon leur sens (phénomène / conséquence / précaution)",
          "Copie du vocabulaire dans le cahier avec un exemple de phrase pour chacun"
        ],
        "exercices": [
          "Classe ces mots : vent violent, toiture arrachée, se mettre à l'abri → Corrigé : phénomène = vent violent ; conséquence = toiture arrachée ; précaution = se mettre à l'abri",
          "Utilise le mot 'dégâts' dans une phrase → Corrigé : phrase correcte employant le mot"
        ]
      },
      {
        "matiere": "GRAMMAIRE",
        "topic": "Les adverbes interrogatifs",
        "approche": "Introduire les adverbes interrogatifs (où, quand, comment, pourquoi, combien) pour poser des questions précises.",
        "transmission": [
          "Rappel des types de phrases (interrogative) vus précédemment",
          "Présentation de chaque adverbe interrogatif avec un exemple oral",
          "Exercice écrit : compléter des questions avec l'adverbe interrogatif adapté",
          "Correction collective au tableau"
        ],
        "exercices": [
          "Complète : '... est arrivé le cyclone ?' (on demande le lieu) → Corrigé : Où",
          "Complète : '... la pluie a-t-elle cessé ?' (on demande le moment) → Corrigé : Quand",
          "Complète : '... de maisons ont été détruites ?' (on demande la quantité) → Corrigé : Combien"
        ]
      },
      {
        "matiere": "ORTHOGRAPHE",
        "topic": "Les consonnes doubles : acc - aff - app - ll - imm",
        "approche": "Étudier l'orthographe des mots contenant des consonnes doubles fréquentes (acc, aff, app, ll, imm) à partir de mots rencontrés dans les textes du mois.",
        "transmission": [
          "Relevé de mots à consonnes doubles dans les textes étudiés (accident, affiche, apporter, pluie, immeuble)",
          "Explication qu'il n'existe pas de règle fixe : ces mots s'apprennent par la mémorisation",
          "Dictée de mots contenant ces groupes de lettres",
          "Correction collective avec épellation à voix haute"
        ],
        "exercices": [
          "Complète : 'un a...ident' → Corrigé : accident",
          "Complète : 'a...orter de l'aide' → Corrigé : apporter",
          "Complète : 'un i...euble' → Corrigé : immeuble"
        ]
      },
      {
        "matiere": "CONJUGAISON",
        "topic": "Le verbe \"Prendre\"",
        "approche": "Conjuguer le verbe prendre au présent, à l'imparfait, au futur simple et au passé composé de l'indicatif.",
        "transmission": [
          "Rappel des verbes du 1er groupe conjugués précédemment",
          "Présentation du verbe prendre (3e groupe), un temps à la fois, avec exemples",
          "Exercice de conjugaison écrit aux 4 temps sur une phrase modèle",
          "Correction collective avec tableau récapitulatif"
        ],
        "exercices": [
          "Conjugue 'prendre' au présent, 1ère personne du singulier : 'Je ... mon cahier.' → Corrigé : prends",
          "Conjugue 'prendre' à l'imparfait, 3e personne du pluriel : 'Ils ... le bus.' → Corrigé : prenaient",
          "Conjugue 'prendre' au passé composé, 2e personne du singulier : 'Tu ... la bonne route.' → Corrigé : as pris"
        ]
      },
      {
        "matiere": "ARITHMÉTIQUE",
        "topic": "Fraction : réduction au même dénominateur",
        "approche": "Apprendre à réduire deux fractions au même dénominateur en utilisant un multiple commun, en s'appuyant sur la comparaison et la simplification des fractions vues en décembre.",
        "transmission": [
          "Rappel de la comparaison et de la simplification des fractions vues en décembre",
          "Présentation de la méthode : trouver un dénominateur commun (multiple des deux dénominateurs)",
          "Exercice collectif de réduction au tableau",
          "Exercice individuel de réduction au même dénominateur"
        ],
        "exercices": [
          "Réduis 1/2 et 1/3 au même dénominateur → Corrigé : 3/6 et 2/6",
          "Réduis 2/5 et 3/10 au même dénominateur → Corrigé : 4/10 et 3/10",
          "Réduis 1/4 et 1/6 au même dénominateur → Corrigé : 3/12 et 2/12"
        ]
      },
      {
        "matiere": "GÉOMÉTRIE",
        "topic": "Losange",
        "approche": "Découvrir le losange : ses 4 côtés égaux et ses diagonales perpendiculaires qui se coupent en leur milieu, en complément du trapèze et du parallélogramme vus en décembre.",
        "transmission": [
          "Rappel du trapèze et du parallélogramme vus en décembre",
          "Observation d'un losange tracé au tableau et repérage des 4 côtés égaux",
          "Tracé des deux diagonales et vérification qu'elles sont perpendiculaires à l'équerre",
          "Exercice de calcul du périmètre d'un losange"
        ],
        "exercices": [
          "Un losange a un côté de 7 cm. Quel est son périmètre ? → Corrigé : 7 × 4 = 28 cm",
          "Combien de côtés égaux possède un losange ? → Corrigé : 4 côtés égaux",
          "Comment sont les diagonales d'un losange entre elles ? → Corrigé : perpendiculaires et se coupent en leur milieu"
        ]
      },
      {
        "matiere": "MESURE",
        "topic": "+ et - des nombres complexes",
        "approche": "Apprendre à additionner et soustraire des durées exprimées en heures et minutes (nombres complexes), en s'appuyant sur les nombres sexagésimaux vus en décembre.",
        "transmission": [
          "Rappel des nombres sexagésimaux (60 minutes = 1 heure) vus en décembre",
          "Présentation de la technique d'addition de durées avec retenue à 60",
          "Présentation de la technique de soustraction de durées avec emprunt à 60",
          "Exercices individuels d'addition et de soustraction de durées"
        ],
        "exercices": [
          "Calcule : 2 h 45 min + 1 h 30 min → Corrigé : 4 h 15 min",
          "Calcule : 5 h 10 min − 2 h 40 min → Corrigé : 2 h 30 min",
          "Calcule : 3 h 20 min + 4 h 50 min → Corrigé : 8 h 10 min"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "Dysenterie / le choléra",
        "approche": "Étudier les causes, les symptômes et les moyens de prévention de la dysenterie et du choléra, deux maladies liées à l'eau et à l'hygiène.",
        "transmission": [
          "Observation d'images ou description des symptômes de la dysenterie et du choléra",
          "Explication de la cause commune : eau ou aliments contaminés",
          "Présentation des moyens de prévention (eau potable, lavage des mains, hygiène alimentaire)",
          "Jeu de questions-réponses sur les bons gestes à adopter"
        ],
        "exercices": [
          "Cite un symptôme du choléra → Corrigé : diarrhée sévère (ou vomissements, déshydratation)",
          "Quel est le meilleur moyen d'éviter ces maladies ? → Corrigé : boire de l'eau potable et se laver les mains régulièrement"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "Pyramide des âges",
        "approche": "Découvrir la pyramide des âges comme représentation graphique de la population d'un pays selon l'âge et le sexe.",
        "transmission": [
          "Observation collective d'une pyramide des âges de Madagascar",
          "Explication de sa forme (base large = beaucoup de jeunes)",
          "Lecture des informations : tranche d'âge la plus nombreuse, répartition hommes/femmes",
          "Exercice de lecture d'une pyramide des âges simplifiée"
        ],
        "exercices": [
          "Que représente la base large d'une pyramide des âges ? → Corrigé : un grand nombre d'enfants et de jeunes dans la population",
          "Quelles informations donne une pyramide des âges ? → Corrigé : la répartition de la population par âge et par sexe"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Tolom-panafahana",
        "approche": "Mampianatra ny tolona nataon'ny Malagasy mba hahazoana ny fahaleovan-tena, mifototra amin'ny vanim-potoana fanjanahantany hita tao amin'ny Desambra.",
        "transmission": [
          "Famerenana fohy ny lesona momba ny fanjanahantany natao tamin'ny Desambra",
          "Fanazavana ny hoe 'tolom-panafahana' dia ny ady natao mba hialàna amin'ny fanjanahan-tany",
          "Fitantarana fohy ny fihetsiky ny Malagasy tamin'izany fotoana izany (fikambanana, hetsi-panoherana)",
          "Firaketana am-bary ny hevitra lehibe"
        ],
        "exercices": [
          "Inona no atao hoe tolom-panafahana? → Corrigé : ny ady na hetsika nataon'ny vahoaka mba hahazoana ny fahaleovan-tena",
          "Nahoana no nanao tolom-panafahana ny Malagasy? → Corrigé : mba hiala tao ambanin'ny fanjanahan-tany sy hahazo ny fahaleovan-tenany"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Fitsipika mifehy ny fifamoivoizana",
        "approche": "Mampianatra ny fitsipi-pifamoivoizana fototra (fanajana ny marika, ny lalana, ny fitaovana fitsipahana) ho fiarovana ny tenan'ny mpianatra sy ny hafa.",
        "transmission": [
          "Fifampiresahana am-bava momba ny loza mety hitranga eny an-dalambe raha tsy manaraka fitsipika",
          "Fanazavana ny marika fifamoivoizana fototra (fiatoana, fandehanana, fitandremana)",
          "Fanadihadiana ny fomba fiampitana araka ny fitsipika",
          "Fanoratana fehezanteny fohy milaza fitsipika iray"
        ],
        "exercices": [
          "Tanisao fitsipika iray tokony harahina eny an-dalambe → Corrigé : ohatra, mijery eroa sy eroa alohan'ny hiampita (valiny mety samihafa)",
          "Nahoana no ilaina ny manaraka ny fitsipi-pifamoivoizana? → Corrigé : mba hisorohana loza sy hiarovana ny ain'ny olona"
        ]
      },
      {
        "matiere": "ANGLAIS",
        "topic": "The room",
        "approche": "Apprendre le vocabulaire des pièces et des objets de la maison en anglais.",
        "transmission": [
          "Présentation du vocabulaire : bedroom, kitchen, bathroom, living room, a bed, a table, a chair",
          "Jeu : montrer l'objet ou la pièce nommée sur une image",
          "Exercice oral : 'What is this? It is a...'",
          "Copie du vocabulaire dans le cahier"
        ],
        "exercices": [
          "Traduis : la cuisine → Corrigé : the kitchen",
          "Complète : 'I sleep in my ...' → Corrigé : bedroom"
        ]
      }
    ]
  },
  {
    "n": 2,
    "dateDebut": "2026/01/12",
    "theme": "Le commerce",
    "sous": "Fanolokolona ny fambolena p.75 · Ny doro tanety sy ny tavy · Le tailleur fou · Devant la vitrine",
    "matieres": [
      {
        "matiere": "VAKITENY",
        "topic": "Fanolokolona ny fambolena — p.75",
        "approche": "Mampianatra ny lahatsoratra momba ny fanolokolona ny fambolena (fomba fikarakarana ny voly), manohy ny lohahevitra fararano notohanana tamin'ny herinandro teo aloha.",
        "transmission": [
          "Famerenana fohy ny lahatsoratra 'Fararano' teo aloha",
          "Famakian'ny mpampianatra ny lahatsoratra 'Fanolokolona ny fambolena' p.75",
          "Fanazavana ny teny sarotra vaovao (fanolokolona, zezika, rano)",
          "Famakiana mafy nataon'ny mpianatra samihafa",
          "Fanontaniana fahatakarana momba ny fomba fikarakarana ny voly voaresaka ao amin'ny lahatsoratra"
        ],
        "exercices": [
          "Inona no ilaina hikarakarana tsara ny voly, araka ny lahatsoratra? → Corrigé : valiny araka ny lahatsoratra p.75 (ohatra, zezika sy rano ampy)",
          "Famintino amin'ny fehezanteny 2 ny votoatin'ny lahatsoratra → Corrigé : famintinana marina araka ny lahatsoratra novakiana"
        ]
      },
      {
        "matiere": "F/B",
        "topic": "Ny doro tanety sy ny tavy",
        "approche": "Manazava ny lohahevitra 'ny doro tanety sy ny tavy' (fandoroana ny ahitra sy ny ala mba hanaovana fambolena), sy ny voka-dratsiny amin'ny tontolo iainana.",
        "transmission": [
          "Fifampiresahana am-bava : inona no atao hoe doro tanety sy tavy?",
          "Fanazavana ny antony anaovan'ny mpamboly izany (fambolena vary an-tanety)",
          "Firaketana an-tsoratra ny voka-dratsy entin'ny doro tanety (fahasimban'ny tany, faharavan'ny ala)",
          "Fanoratana fehezanteny 2-3 momba ny fikajiana ny tontolo iainana"
        ],
        "exercices": [
          "Inona no atao hoe doro tanety? → Corrigé : ny fandoroana ny ahitra na ny ala mba hanaovana fambolena",
          "Tanisao voka-dratsy iray entin'ny doro tanety → Corrigé : ohatra, faharavan'ny tany, fahalanian'ny ala (valiny mety samihafa)"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Entimilaza mandidy",
        "approche": "Mampianatra ny teny sy fomba fitenenana ampiasaina rehefa mandidy na manome baiko (entimilaza mandidy) amin'ny fehezanteny malagasy.",
        "transmission": [
          "Fanomezana ohatra fehezanteny mandidy (Mangataha, Ataovy, Aza...)",
          "Fanazavana fa ny matoanteny dia tsy misy mpisolo tena eo aloha rehefa mandidy",
          "Fanoratana am-pokonolona fehezanteny mandidy hafa",
          "Fanitsiana am-pokonolona ny lesoka hita"
        ],
        "exercices": [
          "Ovay ho fehezanteny mandidy : 'Ianao dia manasa ny latabatra' → Corrigé : 'Sasao ny latabatra.'",
          "Manorata fehezanteny mandidy iray ho an'ny namanao → Corrigé : fehezanteny mandidy feno, ohatra 'Vonjeo aho.'"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Ny entimilaza",
        "approche": "Manohy ny lesona teo aloha, mampianatra ny karazana teny fanentanana (entimilaza) ampiasaina ao amin'ny fehezanteny mandidy sy fangatahana.",
        "transmission": [
          "Famerenana fohy ny fehezanteny mandidy natao teo amin'ny Tsipelina",
          "Fanazavana ny fahasamihafan'ny entimilaza mafy (baiko) sy ny entimilaza malefaka (fangatahana)",
          "Fanadihadiana am-tsoratra ny fehezanteny hita ao amin'ny lahatsoratra"
        ],
        "exercices": [
          "Avaho: 'Mangataha' sa 'Ataovy izao' — iza no mafy kokoa? → Corrigé : 'Ataovy izao' no mafy kokoa; 'Mangataha' dia fangatahana malefaka",
          "Manorata fangatahana malefaka iray → Corrigé : fehezanteny feno mampiseho fangatahana, ohatra 'Azafady, afaka manampy ahy ve ianao?'"
        ]
      },
      {
        "matiere": "LANGAGE",
        "topic": "Le tailleur fou",
        "approche": "Découvrir le personnage du 'tailleur fou' à travers une écoute active, en préparation de la lecture, et introduire le thème du commerce et des métiers.",
        "transmission": [
          "Écoute du texte 'Le tailleur fou' lu par l'enseignant",
          "Repérage oral des personnages et du métier exercé (tailleur)",
          "Discussion collective : que fait un tailleur ? quels autres métiers du commerce connaissez-vous ?",
          "Jeu de rôle simple : mimer le métier de tailleur"
        ],
        "exercices": [
          "Quel métier exerce le personnage principal du texte ? → Corrigé : il est tailleur",
          "Cite un autre métier lié au commerce → Corrigé : ex. commerçant, vendeur, épicier (toute réponse cohérente)"
        ]
      },
      {
        "matiere": "LECTURE",
        "topic": "Devant la vitrine",
        "approche": "Étudier le texte 'Devant la vitrine' par lecture silencieuse puis à voix haute, avec des questions de compréhension sur la scène observée devant un magasin.",
        "transmission": [
          "Lecture silencieuse individuelle du texte 'Devant la vitrine'",
          "Explication du vocabulaire nouveau (vitrine, marchandise, prix)",
          "Lecture à voix haute par plusieurs élèves, un paragraphe chacun",
          "Questions de compréhension écrites sur la scène décrite"
        ],
        "exercices": [
          "Que regarde le personnage devant la vitrine, d'après le texte ? → Corrigé : réponse fidèle au texte étudié (les marchandises exposées)",
          "Où se déroule la scène ? → Corrigé : devant un magasin, en ville"
        ]
      },
      {
        "matiere": "VOCABULAIRE",
        "topic": "Commerce / commerçant / publicité",
        "approche": "Constituer le champ lexical du commerce à partir des textes 'Le tailleur fou' et 'Devant la vitrine' : le lieu, les personnes et la manière de vendre.",
        "transmission": [
          "Relevé collectif au tableau des mots liés au commerce dans les textes (magasin, commerçant, client, publicité)",
          "Classement des mots selon leur catégorie (lieu / personne / action)",
          "Copie du vocabulaire dans le cahier avec un exemple de phrase pour chacun"
        ],
        "exercices": [
          "Classe ces mots : magasin, commerçant, acheter, client → Corrigé : lieu = magasin ; personnes = commerçant, client ; action = acheter",
          "Que signifie le mot 'publicité' ? → Corrigé : une annonce qui fait connaître un produit pour donner envie de l'acheter"
        ]
      },
      {
        "matiere": "GRAMMAIRE",
        "topic": "Les adverbes interrogatifs",
        "approche": "Consolider l'emploi des adverbes interrogatifs (où, quand, comment, pourquoi, combien) par des exercices plus variés, appliqués au contexte du commerce.",
        "transmission": [
          "Rappel des adverbes interrogatifs vus la semaine précédente",
          "Exercices de transformation : passer d'une phrase affirmative à une question avec l'adverbe adapté",
          "Application au vocabulaire du commerce (prix, magasin, vendeur)",
          "Correction collective avec justification de chaque choix"
        ],
        "exercices": [
          "Transforme en question avec 'combien' : 'Ce tissu coûte 5000 ariary.' → Corrigé : 'Combien coûte ce tissu ?'",
          "Complète : '... travaille ce tailleur ?' (on demande le lieu) → Corrigé : Où",
          "Complète : '... ce commerçant vend-il des vêtements ?' (on demande la manière) → Corrigé : Comment"
        ]
      },
      {
        "matiere": "ORTHOGRAPHE",
        "topic": "Les consonnes doubles : acc - aff - app - ll - imm",
        "approche": "Poursuivre l'étude des consonnes doubles fréquentes en les appliquant au vocabulaire du commerce rencontré cette semaine.",
        "transmission": [
          "Rappel des groupes de lettres étudiés la semaine précédente",
          "Relevé de nouveaux mots à consonnes doubles dans les textes du commerce (affiche, appeler, collection)",
          "Dictée de phrases contenant ces mots",
          "Correction collective avec épellation à voix haute"
        ],
        "exercices": [
          "Complète : 'une a...iche publicitaire' → Corrigé : affiche",
          "Complète : 'a...eler le commerçant' → Corrigé : appeler",
          "Dictée : 'Le commerçant colle une affiche.' → Corrigé : 'Le commerçant colle une affiche.'"
        ]
      },
      {
        "matiere": "CONJUGAISON",
        "topic": "Le verbe \"voir\"",
        "approche": "Conjuguer le verbe voir au présent, à l'imparfait, au futur simple et au passé composé de l'indicatif.",
        "transmission": [
          "Rappel de la conjugaison du verbe prendre vue la semaine précédente",
          "Présentation de la conjugaison du verbe voir, un temps à la fois, avec exemples",
          "Exercice de conjugaison écrit aux 4 temps sur une phrase modèle",
          "Correction collective avec tableau récapitulatif"
        ],
        "exercices": [
          "Conjugue 'voir' au présent, 3e personne du singulier : 'Elle ... la vitrine.' → Corrigé : voit",
          "Conjugue 'voir' à l'imparfait, 1ère personne du pluriel : 'Nous ... le magasin de loin.' → Corrigé : voyions",
          "Conjugue 'voir' au futur simple, 2e personne du singulier : 'Tu ... le tailleur demain.' → Corrigé : verras"
        ]
      },
      {
        "matiere": "ARITHMÉTIQUE",
        "topic": "+ et - des fractions",
        "approche": "Apprendre à additionner et soustraire des fractions, d'abord de même dénominateur puis après réduction au même dénominateur vue la semaine précédente.",
        "transmission": [
          "Rappel de la réduction au même dénominateur vue la semaine précédente",
          "Présentation de l'addition de fractions de même dénominateur (on additionne les numérateurs)",
          "Présentation de la soustraction de fractions de même dénominateur",
          "Exercices avec des fractions de dénominateurs différents à réduire d'abord"
        ],
        "exercices": [
          "Calcule : 1/4 + 2/4 → Corrigé : 3/4",
          "Calcule : 3/5 − 1/5 → Corrigé : 2/5",
          "Calcule : 1/2 + 1/3 → Corrigé : 3/6 + 2/6 = 5/6"
        ]
      },
      {
        "matiere": "GÉOMÉTRIE",
        "topic": "Le cercle : calcul de circonférence",
        "approche": "Découvrir le cercle et apprendre à calculer sa circonférence à l'aide de la formule C = π × D (π ≈ 3,14).",
        "transmission": [
          "Rappel du losange vu la semaine précédente",
          "Observation d'un cercle : centre, rayon, diamètre",
          "Présentation de la formule de la circonférence C = π × D (avec π ≈ 3,14)",
          "Exercices de calcul de circonférence à partir du diamètre ou du rayon"
        ],
        "exercices": [
          "Calcule la circonférence d'un cercle de diamètre 10 cm → Corrigé : C = 3,14 × 10 = 31,4 cm",
          "Calcule la circonférence d'un cercle de rayon 5 cm → Corrigé : D = 10 cm, C = 3,14 × 10 = 31,4 cm",
          "Quelle formule utilise-t-on pour calculer la circonférence d'un cercle ? → Corrigé : C = π × D (ou C = 2 × π × R)"
        ]
      },
      {
        "matiere": "MESURE",
        "topic": "x et : des nombres complexes",
        "approche": "Apprendre à multiplier et diviser une durée (nombre complexe en heures et minutes) par un nombre entier.",
        "transmission": [
          "Rappel de l'addition et de la soustraction de durées vues la semaine précédente",
          "Présentation de la technique de multiplication d'une durée par un nombre entier",
          "Présentation de la technique de division d'une durée par un nombre entier",
          "Exercices individuels de multiplication et division de durées"
        ],
        "exercices": [
          "Calcule : 2 h 15 min × 3 → Corrigé : 6 h 45 min",
          "Calcule : 5 h 20 min ÷ 4 → Corrigé : 1 h 20 min",
          "Calcule : 1 h 30 min × 4 → Corrigé : 6 h"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "Secourisme / Le zèbre",
        "approche": "Étudier les gestes de premiers secours simples et découvrir les caractéristiques du zèbre, un animal sauvage.",
        "transmission": [
          "Présentation des gestes de premiers secours de base (nettoyer une plaie, prévenir un adulte)",
          "Jeu de mise en situation : que faire en cas de petite blessure ?",
          "Observation d'une image du zèbre et description de ses caractéristiques (rayures, animal sauvage, vit en troupeau)",
          "Comparaison du zèbre avec le cheval (animal domestique déjà connu)"
        ],
        "exercices": [
          "Que faire en premier si un camarade se coupe légèrement ? → Corrigé : nettoyer la plaie et prévenir un adulte",
          "Quelle est la particularité du zèbre ? → Corrigé : son pelage rayé noir et blanc"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "Croissance de la population",
        "approche": "Comprendre la notion de croissance de la population à partir de la pyramide des âges étudiée la semaine précédente.",
        "transmission": [
          "Rappel de la pyramide des âges vue la semaine précédente",
          "Explication de la croissance de la population (naissances plus nombreuses que les décès)",
          "Observation de chiffres simples montrant l'évolution de la population de Madagascar",
          "Discussion collective sur les conséquences d'une population qui augmente"
        ],
        "exercices": [
          "Qu'est-ce que la croissance de la population ? → Corrigé : l'augmentation du nombre d'habitants dans un pays",
          "Cite une conséquence possible d'une forte croissance de la population → Corrigé : ex. besoin de plus d'écoles, de logements (toute réponse cohérente)"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Ny fahaleovantena",
        "approche": "Mampianatra ny votoatin'ny fahaleovan-tenan'i Madagasikara, vokatry ny tolom-panafahana notohanana tamin'ny herinandro teo aloha.",
        "transmission": [
          "Famerenana fohy ny tolom-panafahana natao ny herinandro teo aloha",
          "Fanazavana ny hoe 'fahaleovan-tena' dia ny fahafahan'ny firenena mitantana ny tenany manokana",
          "Fitantarana fohy ny fotoana nahazoan'i Madagasikara ny fahaleovan-tenany",
          "Firaketana am-bary ny hevitra lehibe"
        ],
        "exercices": [
          "Inona no atao hoe fahaleovan-tena? → Corrigé : ny fahafahan'ny firenena mitantana ny tenany manokana, tsy iadidian'ny firenena hafa intsony",
          "Nahoana no zava-dehibe ho an'i Madagasikara ny fahazoana fahaleovan-tena? → Corrigé : mba hahafahany mitantana ny raharaham-piarahamonina sy ny toekarena ho azy manokana"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Ny sampan-draharaham-panjakana",
        "approche": "Mampahafantatra ny sampan-draharaha samihafa ao amin'ny fanjakana (fahasalamana, fanabeazana, fitandroana filaminana) sy ny anjara asany avy.",
        "transmission": [
          "Fifampiresahana am-bava momba ny sampan-draharaha efa fantatry ny mpianatra (hopitaly, sekoly, polisy)",
          "Fanazavana ny anjara asan'ny sampan-draharaha tsirairay ho an'ny mponina",
          "Firaketana an-tsoratra ny lisitry ny sampan-draharaha voatanisa"
        ],
        "exercices": [
          "Tanisao sampan-draharaham-panjakana telo → Corrigé : ohatra, ny fahasalamana, ny fanabeazana, ny filaminana (valiny mety samihafa)",
          "Iza no miandraikitra ny filaminana ao an-tanàna? → Corrigé : ny polisy (na ny mpitandro filaminana)"
        ]
      },
      {
        "matiere": "ANGLAIS",
        "topic": "The means of transport",
        "approche": "Apprendre le vocabulaire des moyens de transport en anglais, en lien avec le thème du commerce et des déplacements en ville.",
        "transmission": [
          "Présentation du vocabulaire : a car, a bus, a bicycle, a plane, a boat",
          "Jeu : montrer l'image du moyen de transport nommé",
          "Exercice oral : 'How do you go to school? I go by...'",
          "Copie du vocabulaire dans le cahier"
        ],
        "exercices": [
          "Traduis : un vélo → Corrigé : a bicycle",
          "Complète : 'I go to school by ...' → Corrigé : réponse cohérente, ex. 'bus' ou 'bicycle'"
        ]
      }
    ]
  },
  {
    "n": 3,
    "dateDebut": "2026/01/19",
    "theme": "Le commerce (suite) et le feu de brousse",
    "sous": "Ny haiafo Lov p.80 · Doro tanety sy ny tavy (suite) · Le tailleur fou (suite) · Devant la vitrine (suite)",
    "matieres": [
      {
        "matiere": "VAKITENY",
        "topic": "Ny haiafo — Lov p.80",
        "approche": "Mampianatra ny lahatsoratra 'Ny haiafo' momba ny loza mety hiseho amin'ny afo, mifandray amin'ny lohahevitra doro tanety notohanana tao amin'ny F/B.",
        "transmission": [
          "Famerenana fohy ny lahatsoratra 'Fanolokolona ny fambolena' teo aloha",
          "Famakian'ny mpampianatra ny lahatsoratra 'Ny haiafo' p.80 amin'ny feo mazava",
          "Fanazavana ny teny sarotra vaovao (afo, loza, fitandremana)",
          "Famakiana mafy nataon'ny mpianatra samihafa",
          "Fanontaniana fahatakarana lalindalina momba ny loza entin'ny afo tsy voafehy"
        ],
        "exercices": [
          "Inona no loza mety hiseho raha tsy voafehy ny afo, araka ny lahatsoratra? → Corrigé : valiny araka ny lahatsoratra p.80 (ohatra, fahasimbana, faharavana)",
          "Ahoana no tokony hitandremana ny afo? → Corrigé : valiny araka ny lahatsoratra (fitandremana, tsy avela ho tsy voafehy)"
        ]
      },
      {
        "matiere": "F/B",
        "topic": "Doro tanety sy ny tavy",
        "approche": "Manohy ny fandalinana ny lohahevitra 'doro tanety sy ny tavy', mifantoka amin'ny fomba hisorohana ny voka-dratsiny amin'ny alalan'ny fambolena maharitra.",
        "transmission": [
          "Famerenana fohy ny lesona teo aloha momba ny doro tanety sy ny voka-dratsiny",
          "Fanazavana ny fomba fambolena maharitra azo atao ho solon'ny doro tanety",
          "Fifampiresahana am-bava momba ny anjara andraikitry ny tsirairay amin'ny fikajiana ny ala",
          "Fanoratana fehezanteny fanambarana fanapahan-kevitra hikajy ny tontolo iainana"
        ],
        "exercices": [
          "Inona no fambolena azo atao ho solon'ny doro tanety? → Corrigé : ohatra, fambolena an-tsaha voajanahary tsy mandoro (valiny mety samihafa)",
          "Soraty fanapahan-kevitra iray hikajy ny ala → Corrigé : fehezanteny feno sy marina, ohatra 'Tsy handoro tanety intsony aho.'"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "amby / ambin'ny",
        "approche": "Mampianatra ny fampiasana ny teny 'amby' sy 'ambin'ny' amin'ny fanoratana isa sy daty ao amin'ny teny malagasy.",
        "transmission": [
          "Fanomezana ohatra isa mampiasa 'amby' (roa amby folo = 12)",
          "Fanazavana ny fampiasana 'ambin'ny' eo anoloan'ny isa lehibe kokoa (folo amby ambin'ny zato)",
          "Fanoratana am-pokonolona isa samihafa mampiasa 'amby' na 'ambin'ny'",
          "Fanitsiana am-pokonolona ny lesoka hita"
        ],
        "exercices": [
          "Soraty an-tsoratra ny isa '15' amin'ny teny malagasy → Corrigé : dimy amby folo",
          "Soraty an-tsoratra ny isa '112' amin'ny teny malagasy → Corrigé : roa amby folo amby zato"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Ny lazaina",
        "approche": "Mampianatra ny votoatin'ny 'lazaina' (izay lazaina momba ny voalaza) ao amin'ny fehezanteny malagasy, ho fanohizana ny lesona momba ny fehezanteny.",
        "transmission": [
          "Famerenana fohy ny fehezanteny fototra natao teo aloha",
          "Fanazavana ny hoe 'voalaza' (izay resahina) sy ny 'lazaina' (izay lazaina momba azy)",
          "Fanadihadiana am-tsoratra ny fehezanteny nalaina avy amin'ny lahatsoratra 'Ny haiafo'",
          "Fanavahana am-tsoratra ny voalaza sy ny lazaina amin'ny fehezanteny telo"
        ],
        "exercices": [
          "Tondroy ny lazaina : 'Mandevona ny ala ny afo.' → Corrigé : 'mandevona ny ala' no lazaina momba ny afo (voalaza)",
          "Tondroy ny voalaza : 'Loza ny afo tsy voafehy.' → Corrigé : 'ny afo tsy voafehy' no voalaza"
        ]
      },
      {
        "matiere": "LANGAGE",
        "topic": "Le tailleur fou",
        "approche": "Approfondir l'expression orale autour du personnage du tailleur fou, en travaillant la description de ses actions et de son comportement étrange.",
        "transmission": [
          "Rappel oral du texte 'Le tailleur fou' découvert la semaine précédente",
          "Écoute d'un extrait plus long du texte lu par l'enseignant",
          "Discussion collective : pourquoi le tailleur est-il qualifié de 'fou' ?",
          "Jeu de rôle en binôme : reconstituer une scène du tailleur avec un client"
        ],
        "exercices": [
          "Explique oralement pourquoi le tailleur est surnommé 'fou' → Corrigé : réponse fidèle au texte étudié, décrivant son comportement étrange",
          "Joue le dialogue entre le tailleur et un client → Corrigé : dialogue cohérent respectant les personnages du texte"
        ]
      },
      {
        "matiere": "LECTURE",
        "topic": "Devant la vitrine",
        "approche": "Approfondir l'étude du texte 'Devant la vitrine' avec des questions de compréhension plus fines sur les sentiments et les réactions des personnages.",
        "transmission": [
          "Relecture silencieuse du texte pour rafraîchir la mémoire",
          "Lecture à voix haute par plusieurs élèves avec attention à l'intonation",
          "Questions de compréhension approfondies sur les sentiments des personnages face à la vitrine",
          "Discussion collective sur l'envie d'acheter et le prix des choses"
        ],
        "exercices": [
          "Que ressent le personnage en regardant la vitrine, d'après le texte ? → Corrigé : réponse fidèle au texte étudié (ex. l'envie, l'admiration)",
          "Pourquoi le personnage n'achète-t-il pas tout de suite, d'après le texte ? → Corrigé : réponse fidèle au texte (ex. le prix trop élevé, il réfléchit)"
        ]
      },
      {
        "matiere": "VOCABULAIRE",
        "topic": "Commerce / commerçant / publicité",
        "approche": "Enrichir le champ lexical du commerce avec des mots liés à l'achat et à la vente (prix, marchandage, facture).",
        "transmission": [
          "Rappel du vocabulaire de base du commerce vu la semaine précédente",
          "Relevé collectif de nouveaux mots liés à l'achat et à la vente",
          "Jeu de rôle : dialogue d'achat entre un client et un commerçant utilisant le nouveau vocabulaire",
          "Copie du vocabulaire enrichi dans le cahier"
        ],
        "exercices": [
          "Que signifie le mot 'marchander' ? → Corrigé : discuter le prix d'un article pour le faire baisser",
          "Utilise les mots 'client' et 'prix' dans une même phrase → Corrigé : phrase correcte employant les deux mots"
        ]
      },
      {
        "matiere": "GRAMMAIRE",
        "topic": "Les pronoms possessifs",
        "approche": "Introduire les pronoms possessifs (le mien, le tien, le sien...) qui remplacent un nom accompagné d'un adjectif possessif.",
        "transmission": [
          "Rappel des adjectifs possessifs déjà connus (mon, ton, son...)",
          "Présentation des pronoms possessifs correspondants (le mien, le tien, le sien...)",
          "Exercice écrit : remplacer un groupe nominal possessif par le pronom correspondant",
          "Correction collective au tableau"
        ],
        "exercices": [
          "Remplace : 'C'est mon cahier.' → Corrigé : 'C'est le mien.'",
          "Remplace : 'Ce sont ses vêtements.' → Corrigé : 'Ce sont les siens.'",
          "Remplace : 'C'est ta boutique.' → Corrigé : 'C'est la tienne.'"
        ]
      },
      {
        "matiere": "ORTHOGRAPHE",
        "topic": "Les lettres finales muettes (1)",
        "approche": "Découvrir les lettres finales muettes (s, t, d, x...) dans les noms et apprendre à les retrouver grâce aux mots de la même famille.",
        "transmission": [
          "Observation de mots du texte se terminant par une lettre muette (marchand, prix, vent)",
          "Explication de la méthode : chercher un mot de la même famille pour entendre la lettre (marchand → marchande)",
          "Exercice de recherche de la lettre muette à l'aide d'un mot de la même famille",
          "Correction collective avec justification"
        ],
        "exercices": [
          "Trouve la lettre muette de 'marchand' → Corrigé : d (marchande)",
          "Trouve la lettre muette de 'petit' → Corrigé : t (petite)",
          "Trouve la lettre muette de 'chat' → Corrigé : t (chatte)"
        ]
      },
      {
        "matiere": "CONJUGAISON",
        "topic": "Le verbe \"écrire\"",
        "approche": "Conjuguer le verbe écrire au présent, à l'imparfait, au futur simple et au passé composé de l'indicatif.",
        "transmission": [
          "Rappel de la conjugaison du verbe voir vue la semaine précédente",
          "Présentation de la conjugaison du verbe écrire, un temps à la fois, avec exemples",
          "Exercice de conjugaison écrit aux 4 temps sur une phrase modèle",
          "Correction collective avec tableau récapitulatif"
        ],
        "exercices": [
          "Conjugue 'écrire' au présent, 1ère personne du singulier : 'J'... une lettre.' → Corrigé : écris",
          "Conjugue 'écrire' à l'imparfait, 3e personne du singulier : 'Il ... son nom sur le cahier.' → Corrigé : écrivait",
          "Conjugue 'écrire' au passé composé, 1ère personne du pluriel : 'Nous ... la facture.' → Corrigé : avons écrit"
        ]
      },
      {
        "matiere": "ARITHMÉTIQUE",
        "topic": "X et : des fractions",
        "approche": "Apprendre à multiplier et diviser des fractions entre elles, en s'appuyant sur l'addition et la soustraction de fractions vues la semaine précédente.",
        "transmission": [
          "Rappel de l'addition et de la soustraction de fractions vues la semaine précédente",
          "Présentation de la multiplication de fractions (numérateur × numérateur, dénominateur × dénominateur)",
          "Présentation de la division de fractions (multiplier par l'inverse)",
          "Exercices individuels de multiplication et division de fractions"
        ],
        "exercices": [
          "Calcule : 2/3 × 3/4 → Corrigé : 6/12 = 1/2",
          "Calcule : 1/2 : 1/4 → Corrigé : 1/2 × 4/1 = 2",
          "Calcule : 3/5 × 2/3 → Corrigé : 6/15 = 2/5"
        ]
      },
      {
        "matiere": "GÉOMÉTRIE",
        "topic": "Le cercle : la surface",
        "approche": "Apprendre à calculer la surface (l'aire) d'un cercle à l'aide de la formule S = π × R², en complément de la circonférence vue la semaine précédente.",
        "transmission": [
          "Rappel de la circonférence du cercle vue la semaine précédente",
          "Présentation de la formule de la surface S = π × R × R (avec π ≈ 3,14)",
          "Exercice collectif de calcul de surface au tableau",
          "Exercice individuel de calcul de surface à partir du rayon"
        ],
        "exercices": [
          "Calcule la surface d'un cercle de rayon 4 cm → Corrigé : S = 3,14 × 4 × 4 = 50,24 cm²",
          "Calcule la surface d'un cercle de rayon 2 cm → Corrigé : S = 3,14 × 2 × 2 = 12,56 cm²",
          "Quelle formule utilise-t-on pour calculer la surface d'un cercle ? → Corrigé : S = π × R²"
        ]
      },
      {
        "matiere": "MESURE",
        "topic": "x et : des nombres complexes",
        "approche": "Consolider la multiplication et la division de durées par un nombre entier à travers des problèmes plus complexes.",
        "transmission": [
          "Rappel de la technique de multiplication et division de durées vue la semaine précédente",
          "Exercices avec des durées nécessitant une conversion (ex. résultat dépassant 60 minutes)",
          "Résolution d'un petit problème concret impliquant une durée",
          "Correction collective"
        ],
        "exercices": [
          "Calcule : 3 h 40 min × 2 → Corrigé : 7 h 20 min",
          "Calcule : 9 h 15 min ÷ 3 → Corrigé : 3 h 5 min",
          "Un trajet dure 1 h 25 min. Combien de temps durent 3 trajets identiques ? → Corrigé : 4 h 15 min"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "Le chat et le chien",
        "approche": "Étudier les caractéristiques et les besoins du chat et du chien, deux animaux domestiques courants.",
        "transmission": [
          "Observation d'images du chat et du chien",
          "Comparaison de leurs caractéristiques (alimentation, habitat, comportement)",
          "Discussion collective sur les soins à apporter à ces animaux domestiques",
          "Exercice écrit de comparaison"
        ],
        "exercices": [
          "Cite une différence entre le chat et le chien → Corrigé : ex. le chat miaule et le chien aboie (toute différence correcte)",
          "Que faut-il donner à un chat ou un chien pour qu'il reste en bonne santé ? → Corrigé : de la nourriture adaptée, de l'eau propre et des soins réguliers"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "Exode rural / cause / pauvreté / conséquence",
        "approche": "Comprendre le phénomène de l'exode rural : ses causes (pauvreté à la campagne) et ses conséquences (villes surpeuplées).",
        "transmission": [
          "Rappel de la croissance de la population vue la semaine précédente",
          "Explication de l'exode rural : le déplacement des habitants de la campagne vers la ville",
          "Discussion des causes (recherche de travail, pauvreté) et des conséquences (villes surpeuplées, difficultés de logement)",
          "Exercice de mise en relation cause-conséquence"
        ],
        "exercices": [
          "Qu'est-ce que l'exode rural ? → Corrigé : le déplacement des habitants de la campagne vers la ville",
          "Cite une cause de l'exode rural → Corrigé : ex. la pauvreté à la campagne, la recherche de travail",
          "Cite une conséquence de l'exode rural → Corrigé : ex. les villes deviennent surpeuplées"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Repoblika I",
        "approche": "Mampahafantatra ny votoatin'ny fananganana ny Repoblika Voalohany tao Madagasikara, taorian'ny fahazoana fahaleovan-tena notohanana ny herinandro teo aloha.",
        "transmission": [
          "Famerenana fohy ny fahaleovan-tena natao ny herinandro teo aloha",
          "Fanazavana ny hoe 'Repoblika' dia fomba fitantanam-panjakana misy filoham-pirenena fidian'ny vahoaka",
          "Fitantarana fohy ny fananganana ny Repoblika I tao Madagasikara",
          "Firaketana am-bary ny hevitra lehibe"
        ],
        "exercices": [
          "Inona no atao hoe Repoblika? → Corrigé : fomba fitantanam-panjakana izay misy filoham-pirenena fidian'ny vahoaka",
          "Rahoviana no naorina ny Repoblika I? → Corrigé : taorian'ny fahazoan'i Madagasikara ny fahaleovan-tena tamin'ny 1960"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Ady amin'ny endrim-panavakavahana",
        "approche": "Mampahafantatra ny endrika samihafa amin'ny fanavakavahana (ohatra: fanavakavahana araka ny foko, ny fahasahiranana) sy ny fomba iadiana amin'izany.",
        "transmission": [
          "Fifampiresahana am-bava momba ny fanavakavahana efa hitan'ny mpianatra na tantarain'olona",
          "Fanazavana ny endrika samihafa amin'ny fanavakavahana (foko, taranaka, fahasahiranana)",
          "Fanadihadiana ny voka-dratsin'ny fanavakavahana amin'ny fiaraha-monina",
          "Fanoratana fehezanteny fanentanana hanajana ny mpiara-belona rehetra"
        ],
        "exercices": [
          "Tanisao endrika fanavakavahana iray → Corrigé : ohatra, fanavakavahana araka ny foko na ny fahasahiranana (valiny mety samihafa)",
          "Nahoana no tsy tokony hanavakavaka olona? → Corrigé : satria mitovy zo sy fahamendrehana ny olombelona rehetra"
        ]
      },
      {
        "matiere": "ANGLAIS",
        "topic": "The opposite",
        "approche": "Apprendre le vocabulaire des contraires (opposites) en anglais à travers des paires de mots simples.",
        "transmission": [
          "Présentation de paires de mots opposés : big/small, hot/cold, fast/slow, open/closed",
          "Jeu : trouver l'opposé d'un mot proposé par l'enseignant",
          "Exercice écrit : associer chaque mot à son contraire",
          "Copie du vocabulaire dans le cahier"
        ],
        "exercices": [
          "Donne l'opposé de 'big' → Corrigé : small",
          "Donne l'opposé de 'hot' → Corrigé : cold",
          "Traduis la paire : chaud / froid → Corrigé : hot / cold"
        ]
      }
    ]
  },
  {
    "n": 4,
    "dateDebut": "2026/01/26",
    "theme": "La ville",
    "sous": "Fiompian-dRy Tremo p.90 · Ny fiompiana · Faire des courses dans Antseranana · Perdu dans la ville p.125",
    "matieres": [
      {
        "matiere": "VAKITENY",
        "topic": "Fiompian-dRy Tremo — p.90",
        "approche": "Mampianatra ny tantaran'i Tremo momba ny fiompiana, mifandray amin'ny lohahevitra fiompiana notohanana tao amin'ny F/B.",
        "transmission": [
          "Famerenana fohy ny lahatsoratra 'Ny haiafo' teo aloha",
          "Famakian'ny mpampianatra ny tantaran-dRy Tremo p.90 momba ny fiompiany",
          "Fanazavana ny teny sarotra vaovao (fiompiana, vahatra, sompitra)",
          "Famakiana mafy nataon'ny mpianatra samihafa",
          "Fanontaniana fahatakarana momba ny fomba fiompian'i Tremo ny biby voaresaka ao amin'ny tantara"
        ],
        "exercices": [
          "Inona no biby ompian-dRy Tremo, araka ny tantara? → Corrigé : valiny araka ny lahatsoratra p.90 (ohatra, omby, akoho)",
          "Famintino amin'ny fehezanteny 2 ny votoatin'ny tantara → Corrigé : famintinana marina araka ny lahatsoratra novakiana"
        ]
      },
      {
        "matiere": "F/B",
        "topic": "Ny fiompiana",
        "approche": "Manazava ny lanjan'ny fiompiana ho an'ny fianakaviana malagasy, sy ny karazam-biby ompiana matetika any ambanivohitra.",
        "transmission": [
          "Fifampiresahana am-bava : biby fiompy fantatry ny mpianatra sy ny anjara asany",
          "Fanazavana ny soa azo avy amin'ny fiompiana (sakafo, vola, harena)",
          "Firaketana an-tsoratra ny hevitra nivoaka momba ny fikarakarana biby fiompy",
          "Fanoratana fehezanteny 2-3 momba ny fiompiana ao an-tokantranon'ny mpianatra"
        ],
        "exercices": [
          "Inona no soa azo amin'ny fiompiana omby? → Corrigé : ohatra, ronono, hena, vola (valiny mety samihafa)",
          "Soraty fehezanteny iray milaza biby ompian'ny fianakavianao → Corrigé : fehezanteny feno sy marina"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "-ntsika / -tsika",
        "approche": "Mampianatra ny fampiasana ny tovana mpisolo tena 'antsika/isika' (-ntsika rehefa manaraka zanatsoratra, -tsika rehefa manaraka renisoratra) amin'ny teny malagasy.",
        "transmission": [
          "Fanomezana ohatra teny mampiasa '-ntsika' (ohatra: trano+antsika → tranontsika)",
          "Fanazavana ny fitsipika : '-ntsika' aorian'ny teny mifarana amin'ny zanatsoratra, '-tsika' aorian'ny teny mifarana amin'ny renisoratra",
          "Fanoratana am-pokonolona teny mampiasa ny tovana roa",
          "Fanitsiana am-pokonolona ny lesoka hita"
        ],
        "exercices": [
          "Ampio tovana marina : 'trano...' (antsika) → Corrigé : 'tranontsika'",
          "Ampio tovana marina : 'omby...' (antsika) → Corrigé : 'ombintsika'",
          "Ampio tovana marina : 'sekoly...' (antsika) → Corrigé : 'sekolintsika'"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Ny lazaina sosona",
        "approche": "Manohy ny lesona momba ny lazaina, mampianatra ny 'lazaina sosona' izay ahitana teny roa na maromaro mifanaraka milaza zavatra iray ihany momba ny voalaza.",
        "transmission": [
          "Famerenana fohy ny lazaina tsotra natao ny herinandro teo aloha",
          "Fanazavana ny hoe 'lazaina sosona' dia lazaina misy antsipiriany fanampiny (ohatra: 'lehibe sy matanjaka')",
          "Fanadihadiana am-tsoratra ny fehezanteny misy lazaina sosona nalaina avy amin'ny tantaran-dRy Tremo",
          "Fanavahana am-tsoratra ny lazaina tsotra sy ny lazaina sosona"
        ],
        "exercices": [
          "Tondroy ny lazaina sosona : 'Matanjaka sy be vatsy ny ombin-dRy Tremo.' → Corrigé : 'matanjaka sy be vatsy' no lazaina sosona momba ny omby",
          "Manorata fehezanteny iray misy lazaina sosona momba ny akoho → Corrigé : fehezanteny feno misy lazaina roa mifanaraka, ohatra 'Kely sy mavitrika ny akoholahiko.'"
        ]
      },
      {
        "matiere": "LANGAGE",
        "topic": "Faire des courses dans Antseranana",
        "approche": "Développer l'expression orale autour d'une situation concrète de courses en ville, en réinvestissant le vocabulaire du commerce déjà vu.",
        "transmission": [
          "Discussion collective : es-tu déjà allé faire des courses en ville avec un adulte ?",
          "Modélisation par l'enseignant d'un dialogue simple d'achat dans un marché d'Antsiranana",
          "Jeu de rôle en binôme : un élève joue le client, l'autre le vendeur",
          "Mise en commun et correction des dialogues"
        ],
        "exercices": [
          "Joue un dialogue court d'achat au marché → Corrigé : dialogue cohérent avec salutation, demande du produit et du prix, remerciement",
          "Cite 2 produits que l'on peut acheter au marché → Corrigé : ex. des légumes, du tissu (toute paire cohérente)"
        ]
      },
      {
        "matiere": "LECTURE",
        "topic": "Perdu dans la ville p 125",
        "approche": "Étudier le texte 'Perdu dans la ville' par lecture silencieuse puis à voix haute, avec des questions de compréhension sur la situation vécue par le personnage.",
        "transmission": [
          "Lecture silencieuse individuelle du texte p.125",
          "Explication du vocabulaire nouveau (se perdre, chemin, demander son chemin)",
          "Lecture à voix haute par plusieurs élèves, un paragraphe chacun",
          "Questions de compréhension écrites sur les faits et la solution trouvée par le personnage"
        ],
        "exercices": [
          "Pourquoi le personnage se perd-il en ville, d'après le texte ? → Corrigé : réponse fidèle au texte étudié (ex. il ne connaît pas bien le quartier)",
          "Comment le personnage retrouve-t-il son chemin, d'après le texte ? → Corrigé : réponse fidèle au texte (ex. il demande son chemin à un passant)"
        ]
      },
      {
        "matiere": "VOCABULAIRE",
        "topic": "Le quartier et l'itinéraire",
        "approche": "Constituer le champ lexical du quartier et de l'itinéraire (indications de direction) à partir du texte 'Perdu dans la ville'.",
        "transmission": [
          "Relevé collectif au tableau des mots liés au quartier et à l'itinéraire (rue, carrefour, tout droit, à gauche, à droite)",
          "Classement des mots selon leur usage (lieu / direction)",
          "Jeu : donner oralement un itinéraire simple dans la classe",
          "Copie du vocabulaire dans le cahier avec un exemple de phrase pour chacun"
        ],
        "exercices": [
          "Classe ces mots : carrefour, tout droit, à gauche, rue → Corrigé : lieu = carrefour, rue ; direction = tout droit, à gauche",
          "Donne un itinéraire simple pour aller de la classe à la cour → Corrigé : itinéraire cohérent utilisant des mots de direction"
        ]
      },
      {
        "matiere": "GRAMMAIRE",
        "topic": "Les pronoms démonstratifs",
        "approche": "Introduire les pronoms démonstratifs (celui-ci, celle-là, ceux-ci...) qui remplacent un nom en désignant un élément précis.",
        "transmission": [
          "Rappel des pronoms possessifs vus la semaine précédente",
          "Présentation des pronoms démonstratifs (celui, celle, ceux, celles + ci/là)",
          "Exercice écrit : remplacer un groupe nominal désigné par le pronom démonstratif correspondant",
          "Correction collective au tableau"
        ],
        "exercices": [
          "Remplace : 'Je préfère ce chemin-ci.' → Corrigé : 'Je préfère celui-ci.'",
          "Remplace : 'Regarde ces maisons-là.' → Corrigé : 'Regarde celles-là.'",
          "Remplace : 'Cette rue-ci est plus courte.' → Corrigé : 'Celle-ci est plus courte.'"
        ]
      },
      {
        "matiere": "ORTHOGRAPHE",
        "topic": "Les lettres finales muettes (2)",
        "approche": "Approfondir l'étude des lettres finales muettes avec des mots plus variés, en consolidant la méthode du mot de la même famille vue la semaine précédente.",
        "transmission": [
          "Rappel de la méthode du mot de la même famille vue la semaine précédente",
          "Relevé de nouveaux mots à lettre finale muette dans le texte 'Perdu dans la ville' (grand, gris, carrefour)",
          "Exercice de recherche de la lettre muette à l'aide d'un mot dérivé",
          "Dictée de contrôle avec plusieurs mots à lettre muette"
        ],
        "exercices": [
          "Trouve la lettre muette de 'grand' → Corrigé : d (grande)",
          "Trouve la lettre muette de 'gris' → Corrigé : s (grise)",
          "Dictée : 'Le grand immeuble gris est au carrefour.' → Corrigé : 'Le grand immeuble gris est au carrefour.'"
        ]
      },
      {
        "matiere": "CONJUGAISON",
        "topic": "Le verbe \"aller\"",
        "approche": "Conjuguer le verbe aller au présent, à l'imparfait, au futur simple et au passé composé de l'indicatif, verbe essentiel pour parler des déplacements en ville.",
        "transmission": [
          "Rappel de la conjugaison du verbe écrire vue la semaine précédente",
          "Présentation de la conjugaison du verbe aller, un temps à la fois, avec exemples liés au thème de la ville",
          "Exercice de conjugaison écrit aux 4 temps sur une phrase modèle",
          "Correction collective avec tableau récapitulatif"
        ],
        "exercices": [
          "Conjugue 'aller' au présent, 1ère personne du singulier : 'Je ... au marché.' → Corrigé : vais",
          "Conjugue 'aller' à l'imparfait, 3e personne du pluriel : 'Ils ... en ville chaque semaine.' → Corrigé : allaient",
          "Conjugue 'aller' au passé composé, 2e personne du singulier : 'Tu ... faire des courses.' → Corrigé : es allé(e)"
        ]
      },
      {
        "matiere": "ARITHMÉTIQUE",
        "topic": "Budget familial",
        "approche": "Appliquer les opérations sur les fractions et les nombres vues ce mois à la gestion d'un budget familial simple (revenus, dépenses, épargne).",
        "transmission": [
          "Rappel des opérations sur les fractions vues durant le mois",
          "Présentation de la notion de budget : revenus, dépenses, épargne",
          "Exercice collectif : répartir un revenu familial entre plusieurs dépenses au tableau",
          "Exercice individuel de résolution de problème de budget"
        ],
        "exercices": [
          "Une famille gagne 300 000 Ar par mois. Elle dépense 150 000 Ar en nourriture et 80 000 Ar en loyer. Combien lui reste-t-il ? → Corrigé : 300 000 − 150 000 − 80 000 = 70 000 Ar",
          "Si une famille épargne 1/5 de son revenu de 250 000 Ar, combien épargne-t-elle ? → Corrigé : 250 000 ÷ 5 = 50 000 Ar",
          "Une famille dépense la moitié de son revenu de 200 000 Ar en nourriture. Combien cela représente-t-il ? → Corrigé : 100 000 Ar"
        ]
      },
      {
        "matiere": "GÉOMÉTRIE",
        "topic": "Le cube : SL - SB - ST",
        "approche": "Apprendre à calculer la surface latérale (SL), la surface de base (SB) et la surface totale (ST) d'un cube, en s'appuyant sur le calcul de surface du cercle vu précédemment.",
        "transmission": [
          "Rappel du cercle et du calcul de sa surface vus la semaine précédente",
          "Observation d'un cube et de ses 6 faces carrées identiques",
          "Présentation des formules : SB = côté × côté ; SL = SB × 4 ; ST = SB × 6",
          "Exercice de calcul de SL, SB et ST pour un cube donné"
        ],
        "exercices": [
          "Un cube a un côté de 5 cm. Calcule sa surface de base (SB) → Corrigé : SB = 5 × 5 = 25 cm²",
          "Calcule la surface latérale (SL) de ce même cube → Corrigé : SL = 25 × 4 = 100 cm²",
          "Calcule la surface totale (ST) de ce même cube → Corrigé : ST = 25 × 6 = 150 cm²"
        ]
      },
      {
        "matiere": "MESURE",
        "topic": "Mesure de volume",
        "approche": "Introduire les unités de mesure de volume (m³, dm³, cm³) et leurs conversions, en complément des opérations sur les durées vues ce mois.",
        "transmission": [
          "Rappel des unités de longueur déjà connues (m, dm, cm)",
          "Présentation du tableau des unités de volume : m³, dm³, cm³, avec le principe des 3 rangs par unité",
          "Exercices de conversion simples entre unités de volume",
          "Calcul du volume d'un cube à partir de son côté (V = côté³)"
        ],
        "exercices": [
          "Convertis : 2 m³ = ... dm³ → Corrigé : 2 000 dm³",
          "Convertis : 5 000 cm³ = ... dm³ → Corrigé : 5 dm³",
          "Calcule le volume d'un cube de côté 3 cm → Corrigé : V = 3 × 3 × 3 = 27 cm³"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "Le poisson",
        "approche": "Étudier les caractéristiques du poisson : son milieu de vie, sa respiration par les branchies et son mode de déplacement.",
        "transmission": [
          "Observation d'un schéma ou d'une image de poisson",
          "Explication du milieu de vie (l'eau) et de la respiration par les branchies",
          "Présentation du mode de déplacement à l'aide des nageoires",
          "Exercice écrit de légende d'un schéma de poisson"
        ],
        "exercices": [
          "Où vit le poisson ? → Corrigé : dans l'eau (rivière, lac, mer)",
          "Avec quoi le poisson respire-t-il ? → Corrigé : avec ses branchies",
          "Avec quoi le poisson se déplace-t-il ? → Corrigé : avec ses nageoires"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "Les grandes villes de Madagascar",
        "approche": "Découvrir les principales grandes villes de Madagascar et les situer sur une carte, en conclusion du thème de la ville et de la population.",
        "transmission": [
          "Rappel de l'exode rural vu la semaine précédente comme cause de croissance des villes",
          "Présentation des grandes villes de Madagascar (Antananarivo, Toamasina, Antsirabe, Mahajanga, Fianarantsoa, Toliara, Antsiranana)",
          "Localisation collective de ces villes sur une carte de Madagascar",
          "Exercice de repérage et d'association ville-région"
        ],
        "exercices": [
          "Quelle est la capitale de Madagascar ? → Corrigé : Antananarivo",
          "Cite 2 grandes villes de Madagascar autres que la capitale → Corrigé : ex. Toamasina, Antsirabe, Mahajanga, Fianarantsoa, Toliara, Antsiranana (toute paire correcte)"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Tetezamita I",
        "approche": "Mampahafantatra ny votoatin'ny Tetezamita Voalohany, dingana nifandimby taorian'ny Repoblika I notohanana ny herinandro teo aloha.",
        "transmission": [
          "Famerenana fohy ny Repoblika I natao ny herinandro teo aloha",
          "Fanazavana ny hoe 'tetezamita' dia dingana vonjimaika mitranga eo anelanelan'ny fitondrana roa",
          "Fitantarana fohy ny antony niandohan'ny Tetezamita I tao Madagasikara",
          "Firaketana am-bary ny hevitra lehibe"
        ],
        "exercices": [
          "Inona no atao hoe tetezamita? → Corrigé : dingana vonjimaika mitranga eo anelanelan'ny fitondrana roa mandra-pisian'ny fitondrana vaovao tapaka",
          "Taorian'ny fitondrana inona no niseho ny Tetezamita I? → Corrigé : taorian'ny Repoblika I"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Ady amin'ny endrim-panavakavahana",
        "approche": "Manohy sy manamafy ny lesona momba ny ady amin'ny fanavakavahana, mifantoka amin'ny fihetsika azo atao amin'ny fiainana andavanandro mba hanajana ny hafa.",
        "transmission": [
          "Famerenana fohy ny endrika fanavakavahana natao ny herinandro teo aloha",
          "Fifampiresahana am-bava momba ny fihetsika azo atao raha misy fanavakavahana hita",
          "Fanoratana fehezanteny fanentanana ho fanajana ny mpiara-belona rehetra",
          "Famintinana ny lesona amin'ny fandaharana takelaka fanentanana kely"
        ],
        "exercices": [
          "Inona no tokony hatao raha mahita namana anavakavahana? → Corrigé : mijoro hanampy azy sy milaza amin'ny olon-dehibe",
          "Manorata fehezanteny fanentanana iray hanajana ny hafa → Corrigé : fehezanteny feno sy marina, ohatra 'Manajà ny mpiara-belona rehetra isika.'"
        ]
      },
      {
        "matiere": "ANGLAIS",
        "topic": "Date and time",
        "approche": "Apprendre à exprimer la date et l'heure en anglais, vocabulaire essentiel pour organiser des rendez-vous en ville.",
        "transmission": [
          "Présentation du vocabulaire des jours et des mois en anglais",
          "Présentation de la formule pour dire l'heure : 'What time is it? It is ... o'clock'",
          "Exercice oral : demander et donner la date et l'heure",
          "Copie du vocabulaire dans le cahier"
        ],
        "exercices": [
          "Traduis : 'Quelle heure est-il ?' → Corrigé : 'What time is it?'",
          "Complète : 'It is three ...' (pour dire 3 heures) → Corrigé : o'clock"
        ]
      }
    ]
  }
];

const FEVRIER_8EME = [
  {
    "n": 1,
    "dateDebut": "2026/02/02",
    "theme": "Le voyage : les transports et le départ",
    "sous": "Fanaovam-beloma teny amoron-dranomasina Lov p.100 · Mon frère rêve de voyage · Les retrouvailles p.130",
    "matieres": [
      {
        "matiere": "VAKITENY",
        "topic": "Fanaovam-beloma teny amoron-dranomasina — Lov p.100",
        "approche": "Mampianatra ny lahatsoratra 'Fanaovam-beloma teny amoron-dranomasina' amin'ny fomba mizotra: famakiana mangina → famakiana mafy → fanontaniana fahatakarana, mifototra amin'ny lohahevitra fisaorana sy fanaovam-beloma alohan'ny fiaingana an-dranomasina.",
        "transmission": [
          "Famerenana fohy ny lahatsoratra teo aloha (volana Janoary)",
          "Famakian'ny mpampianatra manontolo ny lahatsoratra 'Fanaovam-beloma teny amoron-dranomasina' p.100",
          "Famakiam-panjifa mangina nataon'ny mpianatra",
          "Fanazavana ny teny sarotra hita ao amin'ny lahatsoratra (ohatra: sambo, seranana, mpandeha)",
          "Famakiana mafy nataon'ny mpianatra 3-4, tsirairay andalana",
          "Fanontaniana fahatakarana am-bava momba ny votoatin'ny lahatsoratra"
        ],
        "exercices": [
          "Aiza no toerana itrangan'ny fanaovam-beloma ao amin'ny lahatsoratra? → Corrigé : valiny araka ny lahatsoratra p.100 (teny amoron-dranomasina, eo akaikin'ny seranana)",
          "Iza avy no olona mifanao veloma ao amin'ny lahatsoratra? → Corrigé : valiny araka ny lahatsoratra novakiana",
          "Vakio andalana 2 amin'ny lahatsoratra amin'ny feo mazava → Corrigé : famakiana tsy misy tafintohina, feo azo re"
        ]
      },
      {
        "matiere": "F/B",
        "topic": "Ny fifamoivoizana",
        "approche": "Manazava ny lohahevitra 'ny fifamoivoizana' (fitohanan-dalana, fitaovana entina mifindra toerana) mifototra amin'ny lahatsoratra novakiana teo amin'ny Vakiteny.",
        "transmission": [
          "Fifampiresahana am-bava: inona avy ny fitaovana ampiasaina hifamoivoizana any an-tanànanao?",
          "Firaketana an-tsoratra ny hevitra nivoaka (fiara, sambo, fiaramanidina, sarety...)",
          "Fanazavana ny antony ilàna ny fifamoivoizana eo amin'ny fiaraha-monina",
          "Fanoratana fehezanteny 2-3 momba ny fifamoivoizana"
        ],
        "exercices": [
          "Tanisao fitaovana fifamoivoizana 3 → Corrigé : ohatra, fiara, sambo, fiaramanidina (valiny mety samihafa)",
          "Nahoana no ilaina ny fifamoivoizana? → Corrigé : mba hifindran'ny olona sy ny entana avy amin'ny toerana iray ho amin'ny hafa"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Ny mpisolo tena",
        "approche": "Mampianatra ny mpisolo tena (aho, ianao, izy, isika, izahay, ianareo, izy ireo) sy ny fomba fanoratana azy marina ao anaty fehezanteny.",
        "transmission": [
          "Fanadihadiana: iza avy no mpisolo tena efa fantatry ny mpianatra?",
          "Firondronana ireo mpisolo tena rehetra eo amin'ny tabilao (aho, ianao, izy, isika, izahay, ianareo, izy ireo)",
          "Fanovana anarana amin'ny fehezanteny ho mpisolo tena mifanaraka",
          "Fanoratana am-pokonolona fehezanteny mampiasa mpisolo tena"
        ],
        "exercices": [
          "Soloy mpisolo tena ny anarana: 'Rasoa dia mandeha an-tsekoly.' → Corrigé : 'Izy dia mandeha an-tsekoly.'",
          "Tondroy ny mpisolo tena ao amin'ny fehezanteny: 'Isika dia hiara-mandeha.' → Corrigé : Isika"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Mpisolo fotoana",
        "approche": "Mampianatra ny teny mpisolo fotoana (ohatra: 'tamin'izay', 'amin'izao', 'rahoviana') izay entina manondro fotoana tsy voatondro mazava ao anaty fehezanteny.",
        "transmission": [
          "Fanadihadiana: ahoana no anondroana fotoana ao anaty fehezanteny raha tsy voalaza mazava ny daty?",
          "Fanomezana ohatra teny mpisolo fotoana ('tamin'izay', 'amin'izao', 'rahoviana')",
          "Fampiasana ireo teny ireo ao anaty fehezanteny nalaina avy amin'ny lahatsoratra 'Fanaovam-beloma'",
          "Fanoratana am-pokonolona sy fanitsiana"
        ],
        "exercices": [
          "Ampidiro teny mpisolo fotoana ao anatin'ity fehezanteny ity: '...., dia niala teo izy ireo.' → Corrigé : 'Tamin'izay, dia niala teo izy ireo.'",
          "Inona no mpisolo fotoana ao amin'ny fehezanteny 'Rahoviana no hiverina ianao?' → Corrigé : rahoviana"
        ]
      },
      {
        "matiere": "LANGAGE",
        "topic": "Mon frère rêve de voyage — expression orale",
        "approche": "Introduire le vocabulaire du voyage (départ, bagages, billet, destination) à travers une discussion orale guidée autour du texte 'Mon frère rêve de voyage'.",
        "transmission": [
          "Écoute du texte 'Mon frère rêve de voyage' lu par l'enseignant",
          "Repérage oral des mots liés au voyage dans le texte",
          "Jeu de rôle : chaque élève raconte oralement un voyage qu'il aimerait faire",
          "Mise en commun collective des expressions employées"
        ],
        "exercices": [
          "Raconte à l'oral en 2 phrases un voyage que tu aimerais faire → Corrigé : 2 phrases correctes évoquant une destination et un moyen de transport",
          "Cite un mot du texte lié au voyage → Corrigé : un mot effectivement présent dans le texte étudié (ex. bagages, billet, destination)"
        ]
      },
      {
        "matiere": "LECTURE",
        "topic": "Les retrouvailles p 130",
        "approche": "Étudier le texte 'Les retrouvailles' par lecture silencieuse puis à voix haute, avec des questions de compréhension sur le retour de voyage et les retrouvailles familiales.",
        "transmission": [
          "Lecture silencieuse individuelle du texte 'Les retrouvailles' p.130",
          "Explication du vocabulaire nouveau (retrouvailles, embrasser, accueillir...)",
          "Lecture à voix haute par plusieurs élèves, un paragraphe chacun",
          "Questions de compréhension écrites sur le texte"
        ],
        "exercices": [
          "Qui revient de voyage dans le texte ? → Corrigé : réponse fidèle au texte étudié p.130",
          "Comment la famille accueille-t-elle la personne qui revient ? → Corrigé : réponse fidèle au texte (joie, embrassades...)"
        ]
      },
      {
        "matiere": "VOCABULAIRE",
        "topic": "Les transports en ville",
        "approche": "Constituer le champ lexical des moyens de transport urbains à partir d'une discussion et d'images.",
        "transmission": [
          "Liste collective au tableau des moyens de transport en ville (bus, taxi, taxi-brousse, vélo, voiture)",
          "Classement selon le nombre de personnes transportées ou le type de moteur",
          "Copie du vocabulaire dans le cahier avec un exemple de phrase pour chacun"
        ],
        "exercices": [
          "Cite 3 moyens de transport que l'on trouve en ville → Corrigé : ex. bus, taxi, vélo (toute liste correcte de 3 moyens)",
          "Utilise le mot 'taxi-brousse' dans une phrase → Corrigé : phrase correcte employant le mot"
        ]
      },
      {
        "matiere": "GRAMMAIRE",
        "topic": "La phrase affirmative et la phrase négative",
        "approche": "Distinguer la phrase affirmative de la phrase négative et apprendre à transformer l'une en l'autre à l'aide de 'ne...pas'.",
        "transmission": [
          "Rappel : une phrase affirmative dit que quelque chose est vrai, une phrase négative dit le contraire",
          "Présentation de la structure ne...pas encadrant le verbe",
          "Exercice de transformation de phrases affirmatives en phrases négatives et inversement",
          "Correction collective au tableau"
        ],
        "exercices": [
          "Mets à la forme négative : 'Le voyageur prend le train.' → Corrigé : 'Le voyageur ne prend pas le train.'",
          "Mets à la forme affirmative : 'Elle n'aime pas voyager.' → Corrigé : 'Elle aime voyager.'"
        ]
      },
      {
        "matiere": "ORTHOGRAPHE",
        "topic": "Les mots : est - ait - ai",
        "approche": "Distinguer à l'écrit les homophones est / ait / ai selon leur fonction dans la phrase (verbe être, subjonctif de avoir, verbe avoir).",
        "transmission": [
          "Rappel : 'est' est la 3e personne du singulier du verbe être au présent",
          "Présentation de 'ait' (subjonctif du verbe avoir, après 'il faut que...')",
          "Présentation de 'ai' (1ère personne du singulier du verbe avoir au présent)",
          "Exercice à trous : compléter des phrases avec est/ait/ai",
          "Correction collective avec justification de chaque choix"
        ],
        "exercices": [
          "Complète : 'Il ... content de son voyage.' → Corrigé : est",
          "Complète : 'J' ... préparé mes bagages.' → Corrigé : ai",
          "Complète : 'Il faut qu'il ... son billet avant de partir.' → Corrigé : ait"
        ]
      },
      {
        "matiere": "CONJUGAISON",
        "topic": "Les verbes pronominaux",
        "approche": "Conjuguer un verbe pronominal (ex. 'se préparer') au présent de l'indicatif en identifiant le pronom réfléchi.",
        "transmission": [
          "Rappel des pronoms personnels sujets vus précédemment",
          "Présentation du pronom réfléchi qui accompagne le verbe pronominal (me, te, se, nous, vous, se)",
          "Exercice de conjugaison écrit du verbe 'se préparer' au présent",
          "Correction collective avec tableau récapitulatif"
        ],
        "exercices": [
          "Conjugue 'se préparer' au présent, 1ère personne du singulier : 'Je ... pour le voyage.' → Corrigé : me prépare",
          "Conjugue 'se préparer' au présent, 1ère personne du pluriel : 'Nous ... pour le voyage.' → Corrigé : nous préparons"
        ]
      },
      {
        "matiere": "ARITHMÉTIQUE",
        "topic": "Les échanges",
        "approche": "Résoudre des problèmes concrets d'échange commercial (paiement, rendu de monnaie) impliquant des additions et soustractions.",
        "transmission": [
          "Rappel des opérations d'addition et de soustraction sur les nombres décimaux",
          "Présentation d'une situation d'achat : payer et recevoir la monnaie",
          "Résolution collective d'un problème d'échange au tableau",
          "Exercice individuel de résolution de problèmes d'échange"
        ],
        "exercices": [
          "Un billet coûte 3 200 Ar. Tu payes avec un billet de 5 000 Ar. Quelle monnaie reçois-tu ? → Corrigé : 5 000 − 3 200 = 1 800 Ar",
          "Tu achètes 2 billets de train à 1 500 Ar chacun. Tu payes avec 4 000 Ar. Quelle monnaie reçois-tu ? → Corrigé : 4 000 − (2×1 500) = 4 000 − 3 000 = 1 000 Ar"
        ]
      },
      {
        "matiere": "GÉOMÉTRIE",
        "topic": "Le cube : calcul de volume",
        "approche": "Calculer le volume d'un cube à partir de la formule côté × côté × côté (côté³).",
        "transmission": [
          "Rappel des propriétés du cube (6 faces carrées égales) vues précédemment",
          "Présentation de la formule du volume du cube : V = c × c × c",
          "Démonstration collective avec un cube de côté connu",
          "Exercice individuel de calcul de volume"
        ],
        "exercices": [
          "Calcule le volume d'un cube de 4 cm de côté → Corrigé : V = 4×4×4 = 64 cm³",
          "Calcule le volume d'un cube de 5 cm de côté → Corrigé : V = 5×5×5 = 125 cm³"
        ]
      },
      {
        "matiere": "MESURE",
        "topic": "Mesure de volume",
        "approche": "Introduire les unités de mesure de volume (m³, dm³, cm³, mm³) et le principe de conversion par 1000.",
        "transmission": [
          "Rappel des unités de longueur et de masse déjà étudiées",
          "Présentation du tableau des unités de volume : m³, dm³, cm³, mm³",
          "Explication du passage d'une unité à l'autre en multipliant/divisant par 1000",
          "Exercices de conversion simples"
        ],
        "exercices": [
          "Convertis : 2 m³ = ... dm³ → Corrigé : 2 000 dm³",
          "Convertis : 5 000 cm³ = ... dm³ → Corrigé : 5 dm³"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "La poule et l'oeuf",
        "approche": "Étudier le cycle de vie de la poule, de l'oeuf jusqu'au poussin, et l'utilité de l'élevage de poules.",
        "transmission": [
          "Observation d'un schéma du cycle de vie de la poule",
          "Explication des étapes : oeuf → couvaison → poussin → poule adulte",
          "Présentation de l'utilité de la poule (oeufs, viande)",
          "Jeu de questions-réponses"
        ],
        "exercices": [
          "Combien de temps dure la couvaison d'un oeuf de poule environ ? → Corrigé : environ 21 jours",
          "Cite 2 utilités de la poule pour l'homme → Corrigé : les oeufs et la viande"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "L'agriculture",
        "approche": "Étudier les principales cultures pratiquées à Madagascar (riz, café, vanille) et leur importance pour l'économie du pays.",
        "transmission": [
          "Rappel des grandes villes de Madagascar vues en janvier",
          "Présentation des principales cultures malgaches : le riz (culture vivrière principale), le café, la vanille, le girofle",
          "Observation d'une carte des zones de culture",
          "Discussion sur l'importance de l'agriculture pour la population"
        ],
        "exercices": [
          "Quelle est la culture vivrière principale de Madagascar ? → Corrigé : le riz",
          "Cite 2 cultures d'exportation malgaches → Corrigé : ex. la vanille et le café (toute paire correcte)"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Repoblika II",
        "approche": "Mampahafantatra ny votoatin'ny Repoblika faharoa (1975), notarihin'i Didier Ratsiraka, sy ny fanovana lehibe teo amin'ny politika sy ny toekarena.",
        "transmission": [
          "Famerenana fohy ny Repoblika I sy ny Tetezamita I natao teo aloha",
          "Fanazavana ny nahatongavan'ny Repoblika II tamin'ny taona 1975",
          "Fampahafantarana ny mpitarika lehibe tamin'izany fotoana izany (Didier Ratsiraka)",
          "Fanazavana fohy ny fanovana ara-tsosialisma teo amin'ny toekarena"
        ],
        "exercices": [
          "Iza no filoha nitarika ny Repoblika II? → Corrigé : Didier Ratsiraka",
          "Taona firy no niandohan'ny Repoblika II? → Corrigé : 1975"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Ady amin'ny endrim-panavakavahana",
        "approche": "Manohy ny lesona natomboka tamin'ny Janoary momba ny ady amin'ny endrim-panavakavahana, mifantoka amin'ny fanavakavahana ara-poko sy ara-bokatra.",
        "transmission": [
          "Famerenana fohy ny lesona natao tamin'ny Janoary",
          "Fanazavana ohatra fanavakavahana hita eo amin'ny fiaraha-monina (poko, vokatra, sokajim-pianakaviana)",
          "Fifampiresahana am-bava momba ny fomba anoherana izany",
          "Firaketana an-tsoratra ny hevitra lehibe"
        ],
        "exercices": [
          "Tanisao ohatra fanavakavahana iray → Corrigé : ohatra, fanavakavahana araka ny poko na ny vokatra (valiny mety samihafa)",
          "Ahoana no fomba anoherana ny fanavakavahana? → Corrigé : ny fifanajana sy ny fitovian-jo eo amin'ny olona rehetra"
        ]
      },
      {
        "matiere": "ANGLAIS",
        "topic": "Date and Time",
        "approche": "Apprendre à demander et donner la date et l'heure en anglais (days, months, o'clock).",
        "transmission": [
          "Présentation du vocabulaire : days of the week, months of the year",
          "Présentation de l'heure simple : 'It's ... o'clock'",
          "Exercice oral : 'What time is it?' / 'What is the date today?'",
          "Copie du vocabulaire dans le cahier"
        ],
        "exercices": [
          "Traduis : 'Quelle heure est-il ?' → Corrigé : 'What time is it?'",
          "Complète : 'It is three ... .' → Corrigé : o'clock"
        ]
      }
    ]
  },
  {
    "n": 2,
    "dateDebut": "2026/02/09",
    "theme": "Les préparatifs de voyage",
    "sous": "Handao vetivety an'i Toamasina Lov p.104 · Guide du voyageur p.138",
    "matieres": [
      {
        "matiere": "VAKITENY",
        "topic": "Handao vetivety an'i Toamasina — Lov p.104",
        "approche": "Manohy ny lesona momba ny voyage amin'ny alalan'ny lahatsoratra 'Handao vetivety an'i Toamasina', mifantoka amin'ny fahatsapan'ny olona rehefa handao tanàna vetivety.",
        "transmission": [
          "Famerenana fohy ny lahatsoratra 'Fanaovam-beloma' teo aloha",
          "Famakian'ny mpampianatra ny lahatsoratra 'Handao vetivety an'i Toamasina' p.104",
          "Fanazavana ny teny sarotra vaovao",
          "Famakiana mafy nataon'ny mpianatra samihafa",
          "Fanontaniana fahatakarana lalindalina momba ny toe-javatra ao amin'ny lahatsoratra"
        ],
        "exercices": [
          "Nahoana no nilàna ny olona handao an'i Toamasina vetivety, araka ny lahatsoratra? → Corrigé : valiny araka ny lahatsoratra p.104",
          "Vakio andalana iray misafidiananao amin'ny feo mazava → Corrigé : famakiana tsy misy tafintohina"
        ]
      },
      {
        "matiere": "F/B",
        "topic": "Ny fitanterana",
        "approche": "Manazava ny lohahevitra 'ny fitanterana' (fomba mitondra olona sy entana amin'ny fitaovana samihafa) mifototra amin'ny lahatsoratra 'Handao vetivety an'i Toamasina'.",
        "transmission": [
          "Fifampiresahana am-bava: inona no fitaovana entina mitondra entana lehibe?",
          "Fanavahana ny fitanterana olona sy ny fitanterana entana",
          "Firaketana an-tsoratra ny hevitra nivoaka",
          "Fanoratana fehezanteny 2-3 momba ny fitanterana"
        ],
        "exercices": [
          "Tondroy fitaovana iray entina mitondra entana lehibe → Corrigé : ohatra, kamiao, sambo (valiny mety samihafa)",
          "Inona no fahasamihafan'ny fitanterana olona sy ny fitanterana entana? → Corrigé : ny fitanterana olona dia mitondra mpandeha, ny fitanterana entana kosa mitondra zavatra"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Inty / ity — Lov p.41",
        "approche": "Mampianatra ny fampiasana ny 'inty' sy 'ity' (teny manondro akaiky) ary ny fahasamihafany amin'ny fanoratana.",
        "transmission": [
          "Fanomezana ohatra fehezanteny mampiasa 'inty' sy 'ity' avy amin'ny boky Lov p.41",
          "Fanazavana ny fahasamihafan'ny fampiasana azy ireo (inty = eto akaiky be, ity = zavatra tondroina)",
          "Fanoratana am-pokonolona fehezanteny mampiasa ireo teny ireo"
        ],
        "exercices": [
          "Ampiasao 'ity' amin'ny fehezanteny manondro boky → Corrigé : fehezanteny feno mampiasa 'ity' marina, ohatra 'Ity no bokiko.'",
          "Ampiasao 'inty' amin'ny fehezanteny → Corrigé : fehezanteny feno mampiasa 'inty' marina, ohatra 'Inty aho.'"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Filazam-potoana — p.90",
        "approche": "Manohy ny lesona momba ny fanondroana fotoana, amin'ny fampidirana ny filazam-potoana marina (ohatra: 'amin'ny 8 ora', 'alohan'ny mofontsiky').",
        "transmission": [
          "Famerenana fohy ny mpisolo fotoana natao teo aloha",
          "Fanazavana ny filazam-potoana marina (ora, andro, volana)",
          "Fampiasana ireo filazana ao anaty fehezanteny nalaina avy amin'ny lahatsoratra 'Handao vetivety'",
          "Fanoratana am-pokonolona sy fanitsiana"
        ],
        "exercices": [
          "Ampidiro filazam-potoana marina: 'Niainga izy ...' → Corrigé : ohatra 'Niainga izy tamin'ny 8 ora maraina.'",
          "Inona no filazam-potoana ao amin'ny fehezanteny 'Ho avy amin'ny alarobia izy'? → Corrigé : amin'ny alarobia"
        ]
      },
      {
        "matiere": "LANGAGE",
        "topic": "Mon frère rêve de voyage — suite",
        "approche": "Poursuivre l'expression orale sur le voyage en approfondissant les préparatifs (bagages, itinéraire, billet) à partir du texte étudié.",
        "transmission": [
          "Rappel oral du vocabulaire vu la semaine précédente",
          "Discussion collective : que faut-il préparer avant un voyage ?",
          "Jeu de rôle : un élève explique oralement comment il prépare son sac de voyage",
          "Mise en commun et correction des phrases orales"
        ],
        "exercices": [
          "Cite 3 choses à préparer avant un voyage → Corrigé : ex. les bagages, le billet, les vêtements (toute liste correcte de 3 éléments)",
          "Explique à l'oral en 2 phrases comment tu prépares ton sac → Corrigé : 2 phrases correctes et cohérentes"
        ]
      },
      {
        "matiere": "LECTURE",
        "topic": "Guide du voyageur p 138",
        "approche": "Étudier le texte 'Guide du voyageur' par lecture silencieuse puis à voix haute, avec des questions sur les conseils donnés aux voyageurs.",
        "transmission": [
          "Lecture silencieuse individuelle du texte 'Guide du voyageur' p.138",
          "Explication du vocabulaire nouveau (itinéraire, conseil, prudence...)",
          "Lecture à voix haute par plusieurs élèves",
          "Questions de compréhension écrites sur les conseils du texte"
        ],
        "exercices": [
          "Cite un conseil donné aux voyageurs dans le texte → Corrigé : réponse fidèle au texte étudié p.138",
          "Pourquoi ces conseils sont-ils utiles, d'après le texte ? → Corrigé : réponse fidèle au texte (pour voyager en sécurité)"
        ]
      },
      {
        "matiere": "VOCABULAIRE",
        "topic": "Les préparatifs",
        "approche": "Constituer le champ lexical des préparatifs de voyage (valise, billet, itinéraire, passeport) à partir du texte 'Guide du voyageur'.",
        "transmission": [
          "Relevé collectif des mots liés aux préparatifs dans le texte",
          "Classement des mots selon leur usage (objets à emporter / démarches à faire)",
          "Copie du vocabulaire avec exemple de phrase pour chacun"
        ],
        "exercices": [
          "Classe ces mots : valise, billet, vêtements, itinéraire → Corrigé : objets à emporter = valise, vêtements ; démarches = billet, itinéraire",
          "Utilise le mot 'itinéraire' dans une phrase → Corrigé : phrase correcte employant le mot"
        ]
      },
      {
        "matiere": "GRAMMAIRE",
        "topic": "Forme passive et forme active",
        "approche": "Identifier et transformer une phrase à la forme active en forme passive et inversement, à partir de phrases sur le thème du voyage.",
        "transmission": [
          "Rappel de la phrase affirmative/négative vue la semaine précédente",
          "Présentation de la forme active (le sujet fait l'action) et de la forme passive (le sujet subit l'action)",
          "Démonstration de la transformation active → passive avec un exemple",
          "Exercice écrit de transformation"
        ],
        "exercices": [
          "Mets à la forme passive : 'Le voyageur prépare la valise.' → Corrigé : 'La valise est préparée par le voyageur.'",
          "Mets à la forme active : 'Le billet est acheté par le passager.' → Corrigé : 'Le passager achète le billet.'"
        ]
      },
      {
        "matiere": "ORTHOGRAPHE",
        "topic": "RÉVISION — les homophones est / ait / ai",
        "approche": "Consolider la distinction entre est / ait / ai vue la semaine précédente par des exercices supplémentaires appliqués au thème du voyage, avant d'aborder de nouveaux homophones.",
        "transmission": [
          "Rappel collectif des règles vues : est (verbe être), ai (verbe avoir, je), ait (subjonctif de avoir)",
          "Relecture de phrases tirées du texte 'Guide du voyageur' pour repérer ces mots",
          "Dictée de phrases courtes mêlant est/ait/ai sur le thème du voyage",
          "Correction collective avec justification systématique du choix"
        ],
        "exercices": [
          "Complète : 'Le voyageur ... content d'arriver, car j' ... eu peur pendant le trajet.' → Corrigé : 'Le voyageur est content d'arriver, car j'ai eu peur pendant le trajet.'",
          "Complète : 'Il faut qu'il ... son passeport avant que le train ... parti.' → Corrigé : 'Il faut qu'il ait son passeport avant que le train soit parti.' (ait = subjonctif de avoir)"
        ]
      },
      {
        "matiere": "CONJUGAISON",
        "topic": "Le verbe : -GER / -CER",
        "approche": "Apprendre la particularité orthographique des verbes en -ger et -cer à la 1ère personne du pluriel du présent (manger → nous mangeons ; placer → nous plaçons).",
        "transmission": [
          "Rappel de la conjugaison des verbes pronominaux vue la semaine précédente",
          "Présentation de la règle : les verbes en -ger ajoutent un 'e' devant 'ons' (nous mangeons), les verbes en -cer prennent une cédille (nous plaçons)",
          "Exercice de conjugaison écrit sur 'manger' et 'placer' au présent",
          "Correction collective avec insistance sur la 1ère personne du pluriel"
        ],
        "exercices": [
          "Conjugue 'manger' au présent, 1ère personne du pluriel : 'Nous ... des fruits pendant le voyage.' → Corrigé : mangeons",
          "Conjugue 'placer' au présent, 1ère personne du pluriel : 'Nous ... les valises dans le coffre.' → Corrigé : plaçons"
        ]
      },
      {
        "matiere": "ARITHMÉTIQUE",
        "topic": "Placement d'argent",
        "approche": "Résoudre des problèmes simples de placement d'argent avec calcul d'intérêt (pourcentage) sur une somme donnée.",
        "transmission": [
          "Rappel des échanges commerciaux vus la semaine précédente",
          "Présentation de la notion de placement et d'intérêt (somme reçue en plus après un an)",
          "Démonstration collective du calcul d'un intérêt en pourcentage",
          "Exercice individuel de calcul de placement"
        ],
        "exercices": [
          "Un père place 100 000 Ar à la banque, à un intérêt de 5% par an. Combien d'intérêt reçoit-il après 1 an ? → Corrigé : 100 000 × 5/100 = 5 000 Ar",
          "Une mère place 40 000 Ar à un intérêt de 10% par an. Quelle somme totale a-t-elle après 1 an (capital + intérêt) ? → Corrigé : 40 000 + (40 000×10/100) = 40 000 + 4 000 = 44 000 Ar"
        ]
      },
      {
        "matiere": "GÉOMÉTRIE",
        "topic": "Parallélépipède : SL / SB / ST",
        "approche": "Calculer la surface latérale (SL), la surface de base (SB) et la surface totale (ST) d'un parallélépipède rectangle.",
        "transmission": [
          "Rappel du volume du cube vu la semaine précédente",
          "Présentation du parallélépipède rectangle et de ses dimensions (longueur, largeur, hauteur)",
          "Présentation des formules : SB = L×l ; SL = périmètre de la base × hauteur ; ST = SL + 2×SB",
          "Exercice individuel de calcul de surfaces"
        ],
        "exercices": [
          "Un parallélépipède mesure 5 cm de long, 3 cm de large et 4 cm de haut. Calcule sa surface de base → Corrigé : SB = 5×3 = 15 cm²",
          "Calcule la surface latérale du même parallélépipède → Corrigé : SL = (2×(5+3))×4 = 16×4 = 64 cm²"
        ]
      },
      {
        "matiere": "MESURE",
        "topic": "Correspondance de mesure de volume et capacité",
        "approche": "Établir la correspondance entre les unités de volume et les unités de capacité (1 dm³ = 1 L ; 1 cm³ = 1 mL).",
        "transmission": [
          "Rappel des unités de volume vues la semaine précédente (m³, dm³, cm³)",
          "Présentation de la correspondance : 1 dm³ = 1 litre ; 1 cm³ = 1 millilitre ; 1 m³ = 1000 litres",
          "Exercices de conversion entre volume et capacité",
          "Application à un exemple concret (bidon d'eau)"
        ],
        "exercices": [
          "Un récipient a un volume de 3 dm³. Quelle quantité d'eau peut-il contenir en litres ? → Corrigé : 3 litres",
          "Convertis : 500 cm³ = ... mL → Corrigé : 500 mL"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "L'abeille et le criquet",
        "approche": "Comparer un insecte utile (l'abeille, qui produit le miel) et un insecte nuisible (le criquet, qui détruit les cultures).",
        "transmission": [
          "Observation d'images de l'abeille et du criquet",
          "Présentation du rôle de l'abeille (pollinisation, production de miel)",
          "Présentation des dégâts causés par les criquets sur les cultures",
          "Discussion sur les moyens de protéger les cultures des criquets"
        ],
        "exercices": [
          "Que produit l'abeille et qui est utile à l'homme ? → Corrigé : le miel",
          "Pourquoi le criquet est-il un insecte nuisible pour l'agriculture ? → Corrigé : il détruit les cultures (mange les feuilles et les récoltes)"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "L'élevage",
        "approche": "Étudier les principaux animaux élevés à Madagascar (zébu, volaille, porc) et leur importance économique.",
        "transmission": [
          "Rappel de l'agriculture vue la semaine précédente",
          "Présentation des animaux d'élevage malgaches : le zébu, la volaille, le porc",
          "Explication de l'importance du zébu dans la culture et l'économie malgache",
          "Discussion sur les produits de l'élevage (viande, lait, cuir)"
        ],
        "exercices": [
          "Quel animal est le plus important dans l'élevage traditionnel malgache ? → Corrigé : le zébu",
          "Cite 2 produits que l'on tire de l'élevage → Corrigé : ex. la viande et le lait (ou le cuir)"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Tetezamita II",
        "approche": "Mampahafantatra ny votoatin'ny Tetezamita faharoa (1991-1993), izay vanim-potoana nifandimbiasan'ny fitondrana taorian'ny fikorontanana ara-tsosialy sy ara-politika.",
        "transmission": [
          "Famerenana fohy ny Repoblika II natao teo aloha",
          "Fanazavana ny antony niandohan'ny Tetezamita II (fikorontanana ara-tsosialy sy ara-politika)",
          "Fampahafantarana fohy ny dingana lehibe teo amin'io vanim-potoana io",
          "Firaketana an-tsoratra ny hevitra lehibe"
        ],
        "exercices": [
          "Inona no atao hoe 'tetezamita'? → Corrigé : vanim-potoana fifandimbiasan'ny fitondrana, alohan'ny hisian'ny fitondrana vaovao raikitra",
          "Manaraka ny Repoblika iza ny Tetezamita II? → Corrigé : manaraka ny Repoblika II"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Ady amin'ny endrim-panavakavahana",
        "approche": "Manohy sy manamafy ny lesona momba ny ady amin'ny fanavakavahana, mifantoka amin'ny fanavakavahana ara-taova (lahy/vavy) sy ara-pahasembanana.",
        "transmission": [
          "Famerenana fohy ny lesona natao ny herinandro teo aloha",
          "Fanazavana ohatra fanavakavahana ara-taova sy ara-pahasembanana",
          "Fifampiresahana am-bava momba ny zon'ny olona rehetra ho mitovy",
          "Firaketana an-tsoratra ny hevitra lehibe"
        ],
        "exercices": [
          "Tanisao ohatra fanavakavahana ara-taova iray → Corrigé : ohatra, tsy famelana ny zazavavy hianatra toy ny zazalahy (valiny mety samihafa)",
          "Inona no zo tokony ho an'ny olona rehetra, na lahy na vavy? → Corrigé : ny zo hianatra sy ny fitovian-jo amin'ny fiainana"
        ]
      },
      {
        "matiere": "ANGLAIS",
        "topic": "Date and Time",
        "approche": "Approfondir l'expression de la date (jour, mois, année) et de l'heure en anglais avec des exemples supplémentaires.",
        "transmission": [
          "Rappel du vocabulaire de l'heure vu la semaine précédente",
          "Présentation de la date complète : 'Today is ... the ...'",
          "Exercice oral : demander et donner la date du jour",
          "Copie de phrases modèles dans le cahier"
        ],
        "exercices": [
          "Traduis : 'Quelle est la date aujourd'hui ?' → Corrigé : 'What is the date today?'",
          "Complète : 'Today is Monday, ... 9th.' → Corrigé : February"
        ]
      }
    ]
  },
  {
    "n": 3,
    "dateDebut": "2026/02/16",
    "theme": "L'arrivée : bilan et révisions du mois",
    "sous": "Fiaingan'ny fiaramanidina Lov p.109 · Nora en voyage · Révisions de fin de mois",
    "matieres": [
      {
        "matiere": "VAKITENY",
        "topic": "Fiaingan'ny fiaramanidina — Lov p.109",
        "approche": "Mampianatra ny lahatsoratra farany momba ny voyage amin'ny alalan'ny 'Fiaingan'ny fiaramanidina', mifantoka amin'ny fahatsapana rehefa hiala amin'ny fiaramanidina.",
        "transmission": [
          "Famerenana fohy ny lahatsoratra 'Handao vetivety an'i Toamasina' teo aloha",
          "Famakian'ny mpampianatra ny lahatsoratra 'Fiaingan'ny fiaramanidina' p.109",
          "Fanazavana ny teny sarotra vaovao momba ny sidina an'habakabaka",
          "Famakiana mafy nataon'ny mpianatra samihafa",
          "Fanontaniana fahatakarana lalindalina momba ny toe-javatra"
        ],
        "exercices": [
          "Inona no fitaovana fitaterana voaresaka ao amin'ny lahatsoratra farany? → Corrigé : ny fiaramanidina",
          "Ahoana no fahatsapan'ny mpandeha rehefa niainga ny fiaramanidina, araka ny lahatsoratra? → Corrigé : valiny araka ny lahatsoratra p.109"
        ]
      },
      {
        "matiere": "F/B",
        "topic": "Ny fitanterana — famintinana",
        "approche": "Mamintina ny lesona momba ny fitanterana natao nandritra ny volana, mampitaha ny fitanterana an-tanety, an-dranomasina ary an-habakabaka.",
        "transmission": [
          "Famerenana ny karazana fitanterana hita nandritra ny volana (an-tanety, an-dranomasina, an-habakabaka)",
          "Fampitahana ny hafainganam-pandehan'ny tsirairay",
          "Fifampiresahana am-bava momba izay tiana ampiasaina indrindra sy ny antony",
          "Firaketana an-tsoratra ny famintinana"
        ],
        "exercices": [
          "Tanisao karazana fitanterana 3 hita nandritra ny volana → Corrigé : fiara, sambo, fiaramanidina",
          "Inona no fitanterana faingana indrindra amin'ireo telo ireo? → Corrigé : ny fiaramanidina"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Mpanampy : Ndeha",
        "approche": "Mampianatra ny fampiasana ny mpanampy matoanteny 'andeha/ndeha' izay entina manondro faniriana na fanentanana hanao zavatra.",
        "transmission": [
          "Fanomezana ohatra fehezanteny mampiasa 'andeha' avy amin'ny lahatsoratra 'Fiaingan'ny fiaramanidina'",
          "Fanazavana ny hevitra entin'ny 'andeha' (fanentanana hiara-hanao zavatra)",
          "Fanoratana am-pokonolona fehezanteny mampiasa io teny io"
        ],
        "exercices": [
          "Ampiasao 'andeha' amin'ny fehezanteny fanentanana hiara-mandeha → Corrigé : fehezanteny feno, ohatra 'Andeha isika hiara-mandeha!'",
          "Inona no hevitry ny teny 'andeha' ao amin'ny fehezanteny 'Andeha hijery ny fiaramanidina isika'? → Corrigé : fanentanana hiara-manao zavatra"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Filazana mandidy",
        "approche": "Mampianatra ny fehezanteny milaza baiko na didy (impératif), sy ny fomba fanoratana azy mifanaraka amin'ny mpisolo tena.",
        "transmission": [
          "Famerenana fohy ny filazam-potoana natao teo aloha",
          "Fanazavana ny fehezanteny filazana mandidy (baiko, torolàlana)",
          "Fanaovana ohatra am-bava sy an-tsoratra momba ny baiko fanaovana zavatra",
          "Fanavahana am-tsoratra fehezanteny milaza baiko amin'ny fehezanteny milaza tsotra"
        ],
        "exercices": [
          "Ovay ho fehezanteny milaza baiko: 'Ianao mianatra tsara.' → Corrigé : 'Mianara tsara!'",
          "Manaova fehezanteny filazana baiko iray → Corrigé : fehezanteny feno midika baiko, ohatra 'Ento ny entanao!'"
        ]
      },
      {
        "matiere": "LANGAGE",
        "topic": "RÉVISION — le voyage : bilan oral",
        "approche": "Réviser à l'oral l'ensemble du vocabulaire et des expressions du voyage vus dans le mois (départ, préparatifs, transports, retrouvailles) à travers un récit oral complet.",
        "transmission": [
          "Rappel collectif du vocabulaire vu les semaines précédentes (bagages, billet, itinéraire, retrouvailles)",
          "Jeu : chaque élève raconte oralement un voyage complet, du départ à l'arrivée, en 4-5 phrases",
          "Correction collective de la construction du récit et de l'enchaînement chronologique",
          "Mise en valeur des meilleures productions orales"
        ],
        "exercices": [
          "Raconte à l'oral un voyage complet en 4 phrases (préparatifs, départ, trajet, arrivée) → Corrigé : récit cohérent utilisant au moins 3 mots de vocabulaire du voyage vus dans le mois",
          "Cite 4 mots de vocabulaire du voyage appris ce mois-ci → Corrigé : ex. bagages, billet, itinéraire, retrouvailles (toute liste correcte de 4 mots vus)"
        ]
      },
      {
        "matiere": "LECTURE",
        "topic": "Nora en voyage",
        "approche": "Étudier le texte 'Nora en voyage' par lecture silencieuse puis à voix haute, texte de clôture du thème du voyage avant les révisions.",
        "transmission": [
          "Lecture silencieuse individuelle du texte 'Nora en voyage'",
          "Explication du vocabulaire nouveau",
          "Lecture à voix haute par plusieurs élèves",
          "Questions de compréhension écrites sur le parcours de Nora"
        ],
        "exercices": [
          "Où va Nora dans le texte ? → Corrigé : réponse fidèle au texte étudié 'Nora en voyage'",
          "Que ressent Nora pendant son voyage, d'après le texte ? → Corrigé : réponse fidèle au texte étudié"
        ]
      },
      {
        "matiere": "VOCABULAIRE",
        "topic": "RÉVISION — les transports et les préparatifs",
        "approche": "Consolider en un seul bilan le vocabulaire des transports (S1) et des préparatifs de voyage (S2) par un classement et une réutilisation en contexte.",
        "transmission": [
          "Rappel collectif des mots vus en S1 (transports) et en S2 (préparatifs)",
          "Jeu de classement : trier les mots du mois en deux colonnes 'transports' et 'préparatifs'",
          "Exercice de réemploi des mots dans des phrases sur le thème du voyage",
          "Correction collective"
        ],
        "exercices": [
          "Classe ces mots vus ce mois-ci : taxi-brousse, valise, billet, vélo → Corrigé : transports = taxi-brousse, vélo ; préparatifs = valise, billet",
          "Utilise 2 mots de vocabulaire du mois (un transport et un préparatif) dans une seule phrase → Corrigé : phrase correcte combinant un mot de chaque catégorie, ex. 'Je mets ma valise dans le taxi-brousse.'"
        ]
      },
      {
        "matiere": "GRAMMAIRE",
        "topic": "C. C de but",
        "approche": "Identifier le complément circonstanciel de but (CC de but), qui répond à la question 'dans quel but ?' et est souvent introduit par 'pour' ou 'afin de'.",
        "transmission": [
          "Rappel de la forme active/passive vue la semaine précédente",
          "Présentation du CC de but : il répond à 'pourquoi faire ?' / 'dans quel but ?'",
          "Repérage du CC de but dans des phrases sur le voyage (introduit par 'pour', 'afin de')",
          "Exercice écrit de repérage et de production"
        ],
        "exercices": [
          "Trouve le CC de but : 'Il prépare sa valise pour partir en voyage.' → Corrigé : pour partir en voyage",
          "Complète avec un CC de but : 'Elle prend le train ... .' → Corrigé : ex. 'pour rendre visite à sa famille' (toute réponse introduite par 'pour' ou 'afin de')"
        ]
      },
      {
        "matiere": "ORTHOGRAPHE",
        "topic": "RÉVISION — dictée mêlant est / ait / ai",
        "approche": "Terminer les révisions d'orthographe du mois par une dictée complète sur le thème du voyage, appliquant est/ait/ai dans un texte suivi plutôt qu'en phrases isolées.",
        "transmission": [
          "Rappel final des trois règles (est/ait/ai) avec un tableau récapitulatif",
          "Lecture du texte 'Nora en voyage' pour repérer ces mots dans un contexte réel",
          "Dictée d'un court paragraphe (3-4 phrases) mêlant les trois homophones",
          "Auto-correction guidée par l'enseignant, phrase par phrase"
        ],
        "exercices": [
          "Dictée : 'Nora est en voyage. J'ai reçu une lettre d'elle. Il faut qu'elle ait de la chance pour son retour.' → Corrigé : orthographe correcte de 'est' (verbe être), 'ai' (verbe avoir, je), 'ait' (subjonctif de avoir)",
          "Dans la phrase dictée, pourquoi écrit-on 'ait' et non 'est' ou 'ai' ? → Corrigé : parce que c'est le subjonctif du verbe avoir, après 'il faut que'"
        ]
      },
      {
        "matiere": "CONJUGAISON",
        "topic": "Les verbes pronominaux à l'impératif",
        "approche": "Conjuguer un verbe pronominal (ex. 'se préparer') à l'impératif présent, en observant le déplacement du pronom réfléchi après le verbe.",
        "transmission": [
          "Rappel de la conjugaison des verbes pronominaux au présent vue en S1",
          "Présentation de l'impératif du verbe pronominal : le pronom se place après le verbe et devient 'toi' à la 2e personne",
          "Exercice de conjugaison écrit à l'impératif (2e pers. sing., 1ère et 2e pers. plur.)",
          "Correction collective avec tableau récapitulatif"
        ],
        "exercices": [
          "Mets à l'impératif, 2e personne du singulier : 'se préparer' → Corrigé : 'Prépare-toi !'",
          "Mets à l'impératif, 1ère personne du pluriel : 'se dépêcher' → Corrigé : 'Dépêchons-nous !'"
        ]
      },
      {
        "matiere": "ARITHMÉTIQUE",
        "topic": "Partages égaux",
        "approche": "Résoudre des problèmes de partage égal (division exacte) en répartissant une quantité en parts identiques.",
        "transmission": [
          "Rappel du placement d'argent vu la semaine précédente",
          "Présentation de la notion de partage égal : diviser une quantité totale par le nombre de parts",
          "Résolution collective d'un problème de partage au tableau",
          "Exercice individuel de résolution de problèmes"
        ],
        "exercices": [
          "On partage 72 mangues également entre 8 enfants. Combien chacun reçoit-il ? → Corrigé : 72 ÷ 8 = 9 mangues",
          "Une somme de 45 000 Ar est partagée également entre 5 personnes. Combien chacune reçoit-elle ? → Corrigé : 45 000 ÷ 5 = 9 000 Ar"
        ]
      },
      {
        "matiere": "GÉOMÉTRIE",
        "topic": "Parallélépipède : calcul de volume",
        "approche": "Calculer le volume d'un parallélépipède rectangle à partir de la formule V = Longueur × largeur × hauteur.",
        "transmission": [
          "Rappel des surfaces (SL, SB, ST) du parallélépipède vues la semaine précédente",
          "Présentation de la formule du volume : V = L × l × h",
          "Démonstration collective avec un parallélépipède aux dimensions connues",
          "Exercice individuel de calcul de volume"
        ],
        "exercices": [
          "Calcule le volume d'un parallélépipède de 5 cm de long, 3 cm de large et 4 cm de haut → Corrigé : V = 5×3×4 = 60 cm³",
          "Calcule le volume d'une valise en forme de parallélépipède de 60 cm × 40 cm × 25 cm → Corrigé : V = 60×40×25 = 60 000 cm³"
        ]
      },
      {
        "matiere": "MESURE",
        "topic": "Correspondance de mesure de volume et capacité (suite)",
        "approche": "Consolider la correspondance volume-capacité par des problèmes concrets appliqués à des situations de voyage (bidon, bagage).",
        "transmission": [
          "Rappel de la correspondance 1 dm³ = 1 L vue la semaine précédente",
          "Exercices croisés de conversion (L en cm³, dm³ en mL)",
          "Résolution d'un problème concret : quantité d'eau emportée en voyage"
        ],
        "exercices": [
          "Un voyageur emporte un bidon de 2 litres. Quel est le volume de ce bidon en dm³ ? → Corrigé : 2 dm³",
          "Convertis : 1,5 L = ... cm³ → Corrigé : 1 500 cm³"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "La plante et la fleur",
        "approche": "Étudier les différentes parties de la plante (racine, tige, feuille, fleur, fruit) et le rôle de chacune.",
        "transmission": [
          "Observation d'un schéma d'une plante à fleur",
          "Nomination des parties : racine, tige, feuille, fleur, fruit",
          "Explication du rôle de chaque partie (racine = absorption, feuille = respiration, fleur = reproduction)",
          "Exercice écrit : légender un schéma de plante"
        ],
        "exercices": [
          "Cite les 4 parties principales d'une plante à fleur → Corrigé : la racine, la tige, les feuilles, la fleur",
          "Quel est le rôle de la racine ? → Corrigé : elle absorbe l'eau et les sels minéraux du sol"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "La pêche",
        "approche": "Étudier l'activité de la pêche à Madagascar (pêche côtière, pêche en eau douce) et son importance pour l'alimentation.",
        "transmission": [
          "Rappel de l'agriculture et de l'élevage vus les semaines précédentes",
          "Présentation des zones de pêche à Madagascar (côtes, lacs, rivières)",
          "Distinction entre pêche côtière et pêche en eau douce",
          "Discussion sur l'importance du poisson dans l'alimentation"
        ],
        "exercices": [
          "Cite 2 zones où l'on peut pêcher à Madagascar → Corrigé : ex. la côte (mer) et les lacs/rivières",
          "Pourquoi la pêche est-elle importante pour l'alimentation ? → Corrigé : elle fournit du poisson, source de protéines"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Repoblika III",
        "approche": "Mampahafantatra ny fiandohan'ny Repoblika fahatelo (taorian'ny Tetezamita II), izay vanim-potoana nisian'ny fifidianana maro andraikitra kokoa.",
        "transmission": [
          "Famerenana fohy ny Tetezamita II natao teo aloha",
          "Fanazavana ny nahatongavan'ny Repoblika III taorian'io tetezamita io",
          "Fampahafantarana fohy ny fanovana lehibe teo amin'ny lalàm-panorenana",
          "Famintinana ny dingana efa hianarana nandritra ny volana Janoary sy Febroary (Repoblika I ka hatramin'ny III)"
        ],
        "exercices": [
          "Manaraka ny vanim-potoana inona ny Repoblika III? → Corrigé : manaraka ny Tetezamita II",
          "Tanisao ny vanim-potoana efa hianarana nandritra ny Janoary sy Febroary, araka ny filaharany → Corrigé : Repoblika I, Tetezamita I, Repoblika II, Tetezamita II, Repoblika III"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "RÉVISION — ady amin'ny endrim-panavakavahana",
        "approche": "Mamintina ny lesona rehetra momba ny ady amin'ny endrim-panavakavahana (poko, vokatra, taova, fahasembanana) natao nandritra ny Janoary sy Febroary.",
        "transmission": [
          "Famerenana ireo karazana fanavakavahana rehetra hita nandritra ny lesona (poko, vokatra, taova, fahasembanana)",
          "Fifampiresahana am-bava famintinana: nahoana no tsy mety ny fanavakavahana?",
          "Fanoratana famintinana an-tsoratra momba ny fitovian-jo tokony hisy eo amin'ny olona rehetra"
        ],
        "exercices": [
          "Tanisao karazana fanavakavahana 3 efa hianarana nandritra ny volana → Corrigé : fanavakavahana ara-poko, ara-bokatra, ary ara-taova (na ara-pahasembanana)",
          "Soraty fehezanteny iray famintinana ny lesona momba ny fitovian-jo → Corrigé : fehezanteny feno milaza fa mitovy zo ny olona rehetra, na inona na inona fahasamihafany"
        ]
      },
      {
        "matiere": "ANGLAIS",
        "topic": "RÉVISION — Date and Time",
        "approche": "Consolider en fin de mois l'ensemble des acquis sur la date et l'heure (days, months, telling time) par un bilan d'exercices variés.",
        "transmission": [
          "Rappel collectif des jours de la semaine et des mois de l'année",
          "Rappel de l'heure ('It's ... o'clock') et de la date ('Today is ...')",
          "Jeu de questions-réponses rapide en binôme : 'What time is it?' / 'What is the date today?'",
          "Correction collective des erreurs fréquentes"
        ],
        "exercices": [
          "Traduis : 'Aujourd'hui, c'est mardi 17 février.' → Corrigé : 'Today is Tuesday, February 17th.'",
          "Complète : 'It is half ... six.' → Corrigé : past"
        ]
      }
    ]
  }
];

const MARS_8EME = [
  {
    "n": 1,
    "dateDebut": "2026/03/02",
    "theme": "Visites, voyage et présentation d'un personnage",
    "sous": "Famangiana sy sakafo p.114 · Nora en voyage p.148 (suite) · Le conditionnel présent",
    "matieres": [
      {
        "matiere": "VAKITENY",
        "topic": "Famangiana sy sakafo — p.114",
        "approche": "Mampianatra ny lahatsoratra 'Famangiana sy sakafo' amin'ny fomba mizotra: famakiana mangina → famakiana mafy → fanontaniana fahatakarana, mifototra amin'ny fomba fandraisam-bahiny sy ny sakafo malagasy.",
        "transmission": [
          "Famakian'ny mpampianatra manontolo ny lahatsoratra 'Famangiana sy sakafo' p.114 amin'ny feo mazava",
          "Famakiam-panjifa mangina nataon'ny mpianatra",
          "Fanazavana ny teny sarotra hita ao amin'ny lahatsoratra (ex: vahiny, sakafo)",
          "Famakiana mafy nataon'ny mpianatra 3-4, tsirairay andalana",
          "Fanontaniana fahatakarana am-bava momba ny fomba fandraisam-bahiny voaresaka"
        ],
        "exercices": [
          "Iza no vahiny resahina ao amin'ny lahatsoratra 'Famangiana sy sakafo'? → Corrigé : valiny araka ny lahatsoratra p.114",
          "Inona avy ny sakafo natolotra ny vahiny, araka ny lahatsoratra? → Corrigé : valiny fidiny araka ny lahatsoratra novakiana",
          "Vakio andalana 2 amin'ny lahatsoratra amin'ny feo mazava → Corrigé : famakiana tsy misy tafintohina"
        ]
      },
      {
        "matiere": "F/B",
        "topic": "Fanavaozana — Ny fifamoivoizana",
        "approche": "Famerenana ny lohahevitra 'ny fifamoivoizana' hitan'ny mpianatra tamin'ny volana Febroary, mialoha ny fanitarana ny fahalalana momba ny fitanterana.",
        "transmission": [
          "Famerenana am-bava ny hevitra momba ny fifamoivoizana an-tanàna sy an-tsaha",
          "Firaketana indray ireo karazam-pitaterana efa hita (fiara, sambo, fiaramanidina)",
          "Fanoratana fehezanteny 2-3 mampiasa ny voambolana efa hita momba ny fifamoivoizana"
        ],
        "exercices": [
          "Tanisao karazam-pitaterana 2 hitanao eny an-dalana → Corrigé : ohatra, fiara, taxi-brousse (valiny mety samihafa)",
          "Soraty fehezanteny iray milaza ny fifamoivoizana ao an-tanànanao → Corrigé : fehezanteny feno sy marina"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Filazana ho avy : te , -ta",
        "approche": "Mampianatra ny fomba filazana zavatra ho avy amin'ny alalan'ny teny 'te' (maniry) sy ny tovona '-ta' amin'ny matoanteny.",
        "transmission": [
          "Fanomezana ohatra fehezanteny milaza faniriana amin'ny 'te' (ex: te-hihinana)",
          "Fanazavana ny fomba fanamboarana ny tovona '-ta' amin'ny matoanteny mba hilaza fikasana",
          "Fanoratana am-pokonolona fehezanteny mampiasa 'te' sy '-ta'",
          "Fanitsiana am-pokonolona ny lesoka hita"
        ],
        "exercices": [
          "Ampiasao ny 'te' amin'ny fehezanteny milaza fa maniry mihinam-boankazo ianao → Corrigé : 'Te-hihinam-boankazo aho.'",
          "Ampidiro ny tovona '-ta' amin'ny teny 'vita' mba hilaza fikasana → Corrigé : 'vitaina' (na ohatra mifanaraka amin'ny lesona)"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Mpisolo isa",
        "approche": "Mampianatra ny mpisolo isa (teny misolo isa toy ny 'ny sasany', 'ny maro', 'tsirairay'), manohy ny lesona momba ny mpisolo efa hita tamin'ny Febroary (mpisolo fotoana).",
        "transmission": [
          "Famerenana fohy ny mpisolo fotoana efa hita tamin'ny Febroary",
          "Fanazavana ny mpisolo isa amin'ny ohatra (ny sasany, tsirairay, ny rehetra)",
          "Fanoratana am-pokonolona fehezanteny mampiasa mpisolo isa",
          "Fanitsiana ny fehezanteny voasoratra"
        ],
        "exercices": [
          "Ampiasao ny mpisolo isa 'tsirairay' amin'ny fehezanteny → Corrigé : 'Manana boky tsirairay ny mpianatra.'",
          "Soloy amin'ny mpisolo isa 'ny sasany': 'Ny mpianatra vitsivitsy dia tsy tonga' → Corrigé : 'Ny sasany dia tsy tonga.'"
        ]
      },
      {
        "matiere": "LANGAGE",
        "topic": "Révision — Exprimer un souhait ou un projet de voyage à l'oral",
        "approche": "Réviser l'expression orale autour du thème du voyage abordé en février ('Mon frère rêve de voyage'), en consolidant les tournures pour exprimer un souhait.",
        "transmission": [
          "Rappel collectif du texte 'Mon frère rêve de voyage' étudié en février",
          "Réemploi oral des tournures 'je voudrais...', 'j'aimerais...', 'je rêve de...'",
          "Jeu de rôle : chaque élève exprime oralement un souhait de voyage",
          "Correction collective des phrases orales"
        ],
        "exercices": [
          "Exprime à l'oral un souhait avec 'je voudrais' → Corrigé : phrase correcte, ex. 'Je voudrais visiter Toamasina.'",
          "Utilise 'j'aimerais' dans une phrase orale → Corrigé : phrase correcte employant la tournure"
        ]
      },
      {
        "matiere": "LECTURE",
        "topic": "Nora en voyage — p.148 (suite)",
        "approche": "Poursuivre l'étude du texte 'Nora en voyage' commencé en février, par lecture silencieuse puis à voix haute, avec des questions de compréhension sur la suite du voyage.",
        "transmission": [
          "Rappel du début de l'histoire 'Nora en voyage' lu en février",
          "Lecture silencieuse individuelle de la suite du texte p.148",
          "Explication du vocabulaire nouveau",
          "Lecture à voix haute par plusieurs élèves",
          "Questions de compréhension écrites sur les événements de cette partie du texte"
        ],
        "exercices": [
          "Que fait Nora dans cette suite du texte ? → Corrigé : réponse fidèle au texte étudié p.148",
          "Où se rend Nora dans cette partie de l'histoire ? → Corrigé : réponse fidèle au texte p.148"
        ]
      },
      {
        "matiere": "VOCABULAIRE",
        "topic": "Révision — Les transports en ville",
        "approche": "Réviser le vocabulaire des transports en ville vu en février, en lien avec le texte malgache 'Famangiana sy sakafo'.",
        "transmission": [
          "Rappel collectif du vocabulaire des transports (voiture, taxi-brousse, vélo, bus)",
          "Jeu : associer une image de moyen de transport à son nom",
          "Exercice écrit de classement du vocabulaire",
          "Réemploi du vocabulaire dans des phrases orales"
        ],
        "exercices": [
          "Cite 3 moyens de transport vus en classe → Corrigé : ex. voiture, taxi-brousse, vélo",
          "Complète : 'Pour aller loin, on prend le ...' → Corrigé : ex. taxi-brousse (ou tout moyen de transport adapté à une longue distance)"
        ]
      },
      {
        "matiere": "GRAMMAIRE",
        "topic": "Le complément circonstanciel de cause (C.C. de cause)",
        "approche": "Identifier le complément circonstanciel de cause, qui répond à la question 'pourquoi ?', en poursuivant la série des compléments circonstanciels commencée en février avec le C.C. de but.",
        "transmission": [
          "Rappel du C.C. de but vu en février (répond à 'dans quel but ?')",
          "Présentation du C.C. de cause introduit par 'parce que', 'car', 'à cause de'",
          "Repérage du C.C. de cause dans des phrases exemples",
          "Exercice écrit de reconnaissance et de production"
        ],
        "exercices": [
          "Trouve le C.C. de cause : 'Il est resté à la maison parce qu'il est malade.' → Corrigé : parce qu'il est malade",
          "Complète avec un C.C. de cause : 'Elle a réussi son examen ...' → Corrigé : ex. 'parce qu'elle a bien travaillé.'"
        ]
      },
      {
        "matiere": "ORTHOGRAPHE",
        "topic": "Révision — est / ait / ai",
        "approche": "Réviser la distinction des homophones est/ait/ai vue en février, par des exercices de discrimination à l'écrit.",
        "transmission": [
          "Rappel des règles de distinction : 'est' (verbe être), 'ai' (verbe avoir, 1ère pers.), 'ait' (subjonctif)",
          "Exercice à trous de révision avec les 3 homophones",
          "Correction collective avec justification de chaque choix",
          "Dictée de contrôle de quelques phrases"
        ],
        "exercices": [
          "Complète : 'Il faut qu'il ... sage.' → Corrigé : ait",
          "Complète : 'Elle ... contente.' → Corrigé : est",
          "Complète : 'J'... un cahier neuf.' → Corrigé : ai"
        ]
      },
      {
        "matiere": "CONJUGAISON",
        "topic": "Être et avoir au présent du conditionnel",
        "approche": "Introduire le mode conditionnel en conjuguant être et avoir au présent du conditionnel, après les verbes pronominaux étudiés en février.",
        "transmission": [
          "Rappel des verbes pronominaux vus en février",
          "Présentation du conditionnel présent : valeur (souhait, condition) et terminaisons (-rais, -rait, -rions...)",
          "Conjugaison collective d'être et avoir au présent du conditionnel",
          "Exercice écrit de conjugaison sur une phrase modèle"
        ],
        "exercices": [
          "Conjugue 'être' au conditionnel présent, 1ère pers. du sing. : 'Je ... content de venir.' → Corrigé : serais",
          "Conjugue 'avoir' au conditionnel présent, 3e pers. du plur. : 'Ils ... besoin d'aide.' → Corrigé : auraient"
        ]
      },
      {
        "matiere": "ARITHMÉTIQUE",
        "topic": "Les partages inégaux",
        "approche": "Introduire les partages inégaux (proportionnels), après les partages égaux vus en février, à travers des problèmes concrets de répartition selon des parts différentes.",
        "transmission": [
          "Rappel des partages égaux vus en février (partager en parts égales)",
          "Présentation du partage inégal : partager selon des parts différentes (ex. proportionnellement à l'âge, aux parts convenues)",
          "Résolution collective d'un problème type au tableau",
          "Exercice individuel de partage inégal"
        ],
        "exercices": [
          "Partage 30 000 Ar entre 2 personnes, l'une recevant le double de l'autre → Corrigé : 10 000 Ar et 20 000 Ar",
          "Partage 60 kg de riz entre 3 familles dans les proportions 1, 2, 3 → Corrigé : 10 kg, 20 kg, 30 kg"
        ]
      },
      {
        "matiere": "GÉOMÉTRIE",
        "topic": "La surface diminuée",
        "approche": "Calculer l'aire d'une figure composée en soustrayant une surface découpée à l'intérieur d'une figure plus grande (surface diminuée), après l'étude des volumes en février.",
        "transmission": [
          "Rappel du calcul de volume du parallélépipède vu en février",
          "Présentation de la surface diminuée : figure dont on retire une partie (ex. un rectangle avec un carré découpé)",
          "Démonstration collective au tableau du calcul par soustraction d'aires",
          "Exercice individuel de calcul de surface diminuée"
        ],
        "exercices": [
          "Un rectangle de 10 m × 6 m a un carré de 2 m de côté découpé en son coin. Quelle est la surface restante ? → Corrigé : 60 m² − 4 m² = 56 m²",
          "Un terrain de 8 m × 5 m contient une allée de 8 m × 1 m à soustraire. Quelle est la surface restante ? → Corrigé : 40 m² − 8 m² = 32 m²"
        ]
      },
      {
        "matiere": "MESURE",
        "topic": "Correspondance mesure de volume et mesure de capacité (1)",
        "approche": "Reprendre la correspondance entre unités de volume (m³, dm³, cm³) et unités de capacité (L, dL, cL) déjà amorcée en février, avec des conversions simples.",
        "transmission": [
          "Rappel du tableau de correspondance vu en février : 1 dm³ = 1 L",
          "Présentation du tableau complet incluant cm³ et mL (1 cm³ = 1 mL)",
          "Exercices de conversion simples entre volume et capacité",
          "Correction collective"
        ],
        "exercices": [
          "Convertis : 3 dm³ = ... L → Corrigé : 3 L",
          "Convertis : 250 cm³ = ... mL → Corrigé : 250 mL"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "La graine et la germination",
        "approche": "Étudier le cycle de la germination d'une graine, en poursuivant l'étude de la plante et de la fleur vue en février.",
        "transmission": [
          "Rappel de la plante et de la fleur vues en février",
          "Observation d'une graine (haricot) et de ses parties",
          "Explication des conditions nécessaires à la germination (eau, chaleur, air)",
          "Observation ou schéma des étapes de la germination"
        ],
        "exercices": [
          "Cite 2 conditions nécessaires à la germination d'une graine → Corrigé : l'eau et la chaleur (ou l'air)",
          "Que devient une graine qui germe ? → Corrigé : elle donne une jeune plante (une pousse)"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "L'artisanat",
        "approche": "Découvrir l'artisanat malgache (vannerie, sculpture, tissage) après l'étude des activités agricoles vues en février (agriculture, élevage, pêche).",
        "transmission": [
          "Rappel des activités économiques vues en février (agriculture, élevage, pêche)",
          "Présentation de l'artisanat : vannerie, sculpture sur bois, tissage de la soie",
          "Observation d'images ou d'objets artisanaux malgaches",
          "Discussion sur l'importance économique de l'artisanat"
        ],
        "exercices": [
          "Cite 2 activités artisanales pratiquées à Madagascar → Corrigé : ex. la vannerie, la sculpture sur bois",
          "Quelle matière est utilisée dans le tissage traditionnel malgache ? → Corrigé : la soie (lamba landy)"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Ny Tetezamita III",
        "approche": "Manohy ny lesona momba ny vanim-potoana tetezamita, mifantoka amin'ny Tetezamita III, manaraka ny Repoblika III efa hita tamin'ny Febroary.",
        "transmission": [
          "Famerenana fohy ny Repoblika III natao tamin'ny Febroary",
          "Fanazavana ny antony niandohan'ny Tetezamita III",
          "Firaketana ny zava-nitranga lehibe nandritra izany vanim-potoana izany",
          "Famintinana am-pokonolona"
        ],
        "exercices": [
          "Inona no Repoblika nialoha ny Tetezamita III? → Corrigé : ny Repoblika III",
          "Tanisao zava-nitranga iray lehibe nandritra ny Tetezamita III → Corrigé : valiny araka ny fampianarana natao"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Fanavaozana — Ady amin'ny endrim-panavakavahana (1)",
        "approche": "Famerenana ny lohahevitra 'ady amin'ny endrim-panavakavahana' hita tamin'ny Febroary, amin'ny alalan'ny fifampiresahana.",
        "transmission": [
          "Famerenana am-bava ny hevitra momba ny fanavakavahana sy ny fomba iadiana aminy",
          "Fanomezana ohatra vaovao mifanaraka amin'ny lesona",
          "Fanoratana fehezanteny fohy milaza ny lanjan'ny fifanajàna"
        ],
        "exercices": [
          "Tanisao endri-panavakavahana iray tokony halavina → Corrigé : ohatra, ny fanavakavahana ara-bolotany na ara-pirazanana (valiny mety samihafa)",
          "Inona no tokony hatao raha misy fanavakavahana ao an-tsekoly? → Corrigé : milaza amin'ny mpampianatra na ny lehiben'ny sekoly"
        ]
      },
      {
        "matiere": "ANGLAIS",
        "topic": "Revision — Date and Time (1)",
        "approche": "Réviser le vocabulaire de la date et de l'heure vu en février, à travers des exercices oraux et écrits.",
        "transmission": [
          "Rappel du vocabulaire : days of the week, months, 'What time is it?'",
          "Jeu : demander et dire l'heure en binôme",
          "Exercice écrit : compléter des phrases avec le jour ou l'heure",
          "Correction collective"
        ],
        "exercices": [
          "Traduis : 'Quel jour sommes-nous ?' → Corrigé : 'What day is it?'",
          "Complète : 'It is ... o'clock.' (il est 3 heures) → Corrigé : three"
        ]
      }
    ]
  },
  {
    "n": 2,
    "dateDebut": "2026/03/09",
    "theme": "Déménagement et le partage inégal",
    "sous": "Mifindra monina Lov p.118 · C.C de conséquence · Partages inégaux · Surface augmentée",
    "matieres": [
      {
        "matiere": "VAKITENY",
        "topic": "Mifindra monina — Lov p.118",
        "approche": "Mampianatra ny lahatsoratra 'Mifindra monina' amin'ny fomba mizotra, mifantoka amin'ny antony sy ny fomba fifindra monin'ny fianakaviana.",
        "transmission": [
          "Famerenana fohy ny lahatsoratra 'Famangiana sy sakafo' teo aloha",
          "Famakian'ny mpampianatra ny lahatsoratra 'Mifindra monina' p.118",
          "Fanazavana ny teny sarotra vaovao (ex: mifindra, entana, tanàna vaovao)",
          "Famakiana mafy nataon'ny mpianatra samihafa",
          "Fanontaniana fahatakarana momba ny antony nahatonga ny fianakaviana hifindra monina"
        ],
        "exercices": [
          "Nahoana no nifindra monina ny fianakaviana ao amin'ny lahatsoratra? → Corrigé : valiny araka ny lahatsoratra p.118",
          "Inona avy no nentin'ny fianakaviana rehefa nifindra? → Corrigé : valiny araka ny lahatsoratra (ohatra, entana, fanaka)",
          "Famintino amin'ny fehezanteny 2 ny votoatin'ny lahatsoratra → Corrigé : famintinana marina araka ny lahatsoratra"
        ]
      },
      {
        "matiere": "F/B",
        "topic": "Fanavaozana — Ny fitanterana (1)",
        "approche": "Famerenana ny lohahevitra 'ny fitanterana' araka izay hita tamin'ny herinandro faha-2 tao Febroary.",
        "transmission": [
          "Famerenana am-bava ny karazam-pitaterana samihafa (an-tany, an-dranomasina, an'habakabaka)",
          "Fifampiresahana momba ny tombontsoan'ny fitaterana ho an'ny fiaraha-monina",
          "Fanoratana lisitra fohy misy ny karazam-pitaterana efa nianarana"
        ],
        "exercices": [
          "Tanisao karazam-pitaterana 3 → Corrigé : ohatra, fiarakodiaray, sambo, fiaramanidina",
          "Inona no tombontsoa entin'ny fitaterana ho an'ny olona? → Corrigé : ohatra, mora mifamoivoy, mitatitra entana haingana (valiny mety samihafa)"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Fanavaozana — Ny mpisolo tena sy ny 'inty/ity'",
        "approche": "Famerenana ny lesona momba ny mpisolo tena (Février) sy ny mpanoro 'inty/ity' (lov p.41), mialoha ny fanamafisana farany.",
        "transmission": [
          "Famerenana am-bava ny mpisolo tena efa hita (aho, ianao, izy...)",
          "Famerenana ny fampiasana ny 'inty' sy 'ity' amin'ny fanondroana zavatra akaiky",
          "Fanoratana am-pokonolona fehezanteny mampiasa mpisolo tena sy 'inty/ity'"
        ],
        "exercices": [
          "Soloy mpisolo tena ny teny manaraka: 'Rasoa dia mianatra' → Corrigé : 'Izy dia mianatra.'",
          "Ampiasao ny 'ity' amin'ny fehezanteny milaza boky akaiky anao → Corrigé : 'Ity no bokiko.'"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Mpamaritra sy mpisolo toerana",
        "approche": "Mampianatra ny mpamaritra toerana ('etỳ', 'ary', 'any') sy ny mpisolo toerana, manohy ny lesona mpisolo isa vita tamin'ny herinandro teo aloha.",
        "transmission": [
          "Famerenana fohy ny mpisolo isa vita teo aloha",
          "Fanazavana ny mpamaritra toerana (etỳ, eto, ary, any) araka ny halaviran'ny zavatra",
          "Fampiharana am-bava: mamorona fehezanteny mampiasa mpamaritra toerana isaky ny mpianatra",
          "Fanoratana am-tsoratra sy fanitsiana am-pokonolona"
        ],
        "exercices": [
          "Ampiasao 'eto' amin'ny fehezanteny milaza toerana akaiky → Corrigé : 'Eto aho.'",
          "Ampiasao 'any' amin'ny fehezanteny milaza toerana lavitra → Corrigé : 'Any an-tsena izy.'"
        ]
      },
      {
        "matiere": "LANGAGE",
        "topic": "Révision — Présenter oralement une visite ou un déménagement",
        "approche": "Réviser l'expression orale à travers une situation de visite ou de déménagement, en lien avec les textes de malgache étudiés cette semaine.",
        "transmission": [
          "Rappel des expressions de politesse pour une visite (bonjour, merci, au revoir)",
          "Jeu de rôle : un élève joue le visiteur, un autre l'hôte",
          "Présentation orale d'un court récit sur un déménagement imaginaire",
          "Correction collective de la construction des phrases"
        ],
        "exercices": [
          "Joue la scène d'une visite chez un ami en 2 répliques → Corrigé : dialogue cohérent avec formules de politesse",
          "Raconte oralement en 2 phrases un déménagement imaginaire → Corrigé : 2 phrases correctes et cohérentes"
        ]
      },
      {
        "matiere": "LECTURE",
        "topic": "Révision — Compréhension du texte 'Nora en voyage'",
        "approche": "Réviser la compréhension globale de l'histoire 'Nora en voyage' (février et p.148), par un questionnaire de synthèse.",
        "transmission": [
          "Rappel collectif de l'histoire complète de Nora depuis février",
          "Questionnaire écrit de compréhension globale sur l'ensemble du texte",
          "Correction collective avec retour au texte pour justifier chaque réponse",
          "Lecture à voix haute d'un extrait choisi par élève"
        ],
        "exercices": [
          "Résume en 2 phrases l'histoire de Nora en voyage → Corrigé : résumé fidèle reprenant le début et la suite du texte",
          "Quel est le moyen de transport utilisé par Nora ? → Corrigé : réponse fidèle au texte étudié"
        ]
      },
      {
        "matiere": "VOCABULAIRE",
        "topic": "Révision — Les préparatifs (de voyage)",
        "approche": "Réviser le vocabulaire des préparatifs de voyage vu en février, en lien avec le déménagement étudié cette semaine en malgache.",
        "transmission": [
          "Rappel du vocabulaire des préparatifs (valise, billet, itinéraire)",
          "Jeu de mime : mimer une action de préparatif de voyage à deviner",
          "Exercice écrit : compléter une liste de préparatifs",
          "Réemploi à l'oral du vocabulaire dans des phrases"
        ],
        "exercices": [
          "Cite 2 objets à préparer avant un voyage → Corrigé : ex. une valise, un billet",
          "Utilise le mot 'itinéraire' dans une phrase → Corrigé : phrase correcte employant le mot"
        ]
      },
      {
        "matiere": "GRAMMAIRE",
        "topic": "Le complément circonstanciel de conséquence (C.C. de conséquence)",
        "approche": "Identifier le complément circonstanciel de conséquence, qui exprime le résultat d'une action, en complétant la série des compléments circonstanciels.",
        "transmission": [
          "Rappel du C.C. de cause vu la semaine précédente",
          "Présentation du C.C. de conséquence introduit par 'si bien que', 'donc', 'si... que'",
          "Distinction entre cause et conséquence à l'aide d'exemples comparés",
          "Exercice écrit de reconnaissance et de production"
        ],
        "exercices": [
          "Trouve le C.C. de conséquence : 'Il a beaucoup plu, si bien que la route est inondée.' → Corrigé : si bien que la route est inondée",
          "Complète : 'Elle était si fatiguée ...' → Corrigé : ex. 'qu'elle s'est endormie tout de suite.'"
        ]
      },
      {
        "matiere": "ORTHOGRAPHE",
        "topic": "Révision — homophones et ponctuation (bilan)",
        "approche": "Réviser l'ensemble des homophones et des règles de ponctuation vus depuis le début de l'année.",
        "transmission": [
          "Rappel des homophones étudiés (et/est, a/à, est/ait/ai)",
          "Rappel des signes de ponctuation étudiés en septembre",
          "Exercice mêlant homophones et ponctuation dans un même texte à corriger",
          "Correction collective"
        ],
        "exercices": [
          "Corrige ce texte : 'elle a un livre et il ai content' → Corrigé : 'Elle a un livre et il est content.'",
          "Ponctue et corrige : 'ou vas-tu' → Corrigé : 'Où vas-tu ?'"
        ]
      },
      {
        "matiere": "CONJUGAISON",
        "topic": "Aller au présent du conditionnel",
        "approche": "Conjuguer le verbe aller au présent du conditionnel, en consolidant les terminaisons vues la semaine précédente.",
        "transmission": [
          "Rappel des terminaisons du conditionnel présent vues avec être et avoir",
          "Présentation de la conjugaison d'aller au conditionnel (radical ir- + terminaisons)",
          "Exercice écrit de conjugaison sur une phrase modèle",
          "Correction collective avec tableau récapitulatif"
        ],
        "exercices": [
          "Conjugue 'aller' au conditionnel présent, 2e pers. du sing. : 'Tu ... à Toamasina.' → Corrigé : irais",
          "Conjugue 'aller' au conditionnel présent, 1ère pers. du plur. : 'Nous ... en voyage.' → Corrigé : irions"
        ]
      },
      {
        "matiere": "ARITHMÉTIQUE",
        "topic": "Les partages inégaux (consolidation)",
        "approche": "Consolider la résolution de problèmes de partages inégaux par des exercices plus complexes, en réinvestissant la méthode vue la semaine précédente.",
        "transmission": [
          "Rappel de la méthode de partage inégal vue la semaine précédente",
          "Résolution collective d'un problème de partage inégal à 3 parts",
          "Exercices individuels progressifs de partage inégal",
          "Correction collective avec vérification de la somme des parts"
        ],
        "exercices": [
          "Partage 45 000 Ar entre 3 personnes dans les proportions 2, 3, 4 → Corrigé : 10 000 Ar, 15 000 Ar, 20 000 Ar (total 9 parts de 5 000 Ar)",
          "Deux enfants se partagent 24 mangues, l'un recevant 3 fois plus que l'autre → Corrigé : 6 mangues et 18 mangues"
        ]
      },
      {
        "matiere": "GÉOMÉTRIE",
        "topic": "La surface augmentée",
        "approche": "Calculer l'aire d'une figure composée en ajoutant une surface accolée à une figure de base (surface augmentée), en complément de la surface diminuée vue la semaine précédente.",
        "transmission": [
          "Rappel de la surface diminuée vue la semaine précédente",
          "Présentation de la surface augmentée : figure à laquelle on ajoute une partie (ex. un rectangle avec un carré ajouté)",
          "Démonstration collective au tableau du calcul par addition d'aires",
          "Exercice individuel de calcul de surface augmentée"
        ],
        "exercices": [
          "Un rectangle de 12 m × 5 m est agrandi par un carré de 3 m de côté accolé. Quelle est la surface totale ? → Corrigé : 60 m² + 9 m² = 69 m²",
          "Un jardin de 6 m × 4 m est agrandi par un rectangle de 6 m × 2 m. Quelle est la surface totale ? → Corrigé : 24 m² + 12 m² = 36 m²"
        ]
      },
      {
        "matiere": "MESURE",
        "topic": "Correspondance mesure de volume et mesure de capacité (2)",
        "approche": "Consolider les conversions volume-capacité avec des unités plus grandes (m³, hL) et des exercices croisés.",
        "transmission": [
          "Rappel du tableau de correspondance vu la semaine précédente",
          "Extension au m³ (1 m³ = 1000 L)",
          "Exercices de conversion croisée dans les deux sens",
          "Correction collective avec vérification"
        ],
        "exercices": [
          "Convertis : 2 m³ = ... L → Corrigé : 2 000 L",
          "Convertis : 5 000 mL = ... dm³ → Corrigé : 5 dm³"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "Les états de la matière",
        "approche": "Découvrir les 3 états de la matière (solide, liquide, gazeux) à travers des exemples concrets comme l'eau.",
        "transmission": [
          "Observation de l'eau sous ses différentes formes (glaçon, eau liquide, vapeur)",
          "Présentation des 3 états : solide, liquide, gazeux",
          "Classement collectif d'objets et de matières selon leur état",
          "Exercice écrit de classement"
        ],
        "exercices": [
          "Dans quel état se trouve la glace ? → Corrigé : l'état solide",
          "Cite un exemple de matière à l'état gazeux → Corrigé : ex. la vapeur d'eau, l'air"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "Mines et énergies",
        "approche": "Découvrir les principales ressources minières de Madagascar (saphir, chromite, nickel) et les sources d'énergie du pays.",
        "transmission": [
          "Rappel de l'artisanat vu la semaine précédente",
          "Présentation des principales ressources minières malgaches (saphir, chromite, nickel, or)",
          "Présentation des sources d'énergie (hydroélectricité, énergie solaire, bois de chauffe)",
          "Localisation sur une carte des principales zones minières"
        ],
        "exercices": [
          "Cite une ressource minière de Madagascar → Corrigé : ex. le saphir, la chromite, le nickel",
          "Quelle est la principale source d'énergie utilisée pour produire l'électricité à Madagascar ? → Corrigé : l'hydroélectricité (barrages)"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Ny Repoblika IV",
        "approche": "Mampianatra ny Repoblika IV, manaraka ny Tetezamita III natao herinandro iray talohan'izao.",
        "transmission": [
          "Famerenana fohy ny Tetezamita III natao herinandro teo aloha",
          "Fanazavana ny fiandohan'ny Repoblika IV",
          "Firaketana ny fitondrana sy ny zava-nitranga lehibe",
          "Famintinana am-pokonolona"
        ],
        "exercices": [
          "Inona no vanim-potoana nialoha ny Repoblika IV? → Corrigé : ny Tetezamita III",
          "Tanisao zava-nitranga iray lehibe nandritra ny Repoblika IV → Corrigé : valiny araka ny fampianarana natao"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Fanavaozana — Ady amin'ny endrim-panavakavahana (2)",
        "approche": "Fanamafisana ny lesona momba ny ady amin'ny fanavakavahana amin'ny alalan'ny tantara fohy sy fifampidinihana.",
        "transmission": [
          "Famerenana ny hevitra lehibe tamin'ny herinandro teo aloha",
          "Fitantarana tantara fohy misy fanavakavahana sy ny vahaolana",
          "Fifampidinihana am-pokonolona momba ny vahaolana azo atao"
        ],
        "exercices": [
          "Inona no vahaolana azo atao raha mahita namana avakavahina ianao? → Corrigé : manampy azy sy milaza amin'ny olon-dehibe",
          "Nahoana no tsy tokony hanavakavaka olona? → Corrigé : satria mitovy zo sy maha-olona ny rehetra"
        ]
      },
      {
        "matiere": "ANGLAIS",
        "topic": "Revision — Date and Time (2)",
        "approche": "Poursuivre la révision de la date et de l'heure avec des exercices plus complexes (dates complètes, heures avec minutes).",
        "transmission": [
          "Rappel des mois de l'année en anglais",
          "Exercice oral : dire sa date de naissance en anglais",
          "Exercice écrit : écrire l'heure avec les minutes ('half past', 'quarter to')",
          "Correction collective"
        ],
        "exercices": [
          "Traduis : 'Il est trois heures et demie.' → Corrigé : 'It is half past three.'",
          "Écris ta date de naissance en anglais → Corrigé : réponse individuelle correcte au format anglais (ex. 'My birthday is in March.')"
        ]
      }
    ]
  },
  {
    "n": 3,
    "dateDebut": "2026/03/16",
    "theme": "Révisions générales avant l'examen du 2e trimestre",
    "sous": "Révision Malagasy / Français / FFMOM / Anglais · L'intervalle · Le cylindre · Bilan du trimestre",
    "matieres": [
      {
        "matiere": "VAKITENY",
        "topic": "Fanavaozana — famerenana ny lahatsoratra 'Famangiana sy sakafo' sy 'Mifindra monina'",
        "approche": "Famerenana ireo lahatsoratra roa novakiana tamin'ny herinandro teo aloha, mba hanamafisana ny fahaizana mamaky sy mahatakatra lahatsoratra, mialoha ny fanadinana II trimestre.",
        "transmission": [
          "Famerenana tsotra ny votoatin'ny lahatsoratra 'Famangiana sy sakafo' p.114",
          "Famerenana tsotra ny votoatin'ny lahatsoratra 'Mifindra monina' p.118",
          "Lalao fanontaniana malaky (quiz) momba ireo lahatsoratra roa",
          "Famakiana mafy nataon'ny mpianatra maromaro, misafidy andalana amin'ny lahatsoratra iray amin'ireo roa",
          "Fanitsiana am-pokonolona sy famintinana ny votoatin-kevitra lehibe"
        ],
        "exercices": [
          "Iza no vahiny tao amin'ny 'Famangiana sy sakafo'? → Corrigé : valiny araka ny lahatsoratra p.114",
          "Nahoana no nifindra monina ny fianakaviana tao amin'ny 'Mifindra monina'? → Corrigé : valiny araka ny lahatsoratra p.118",
          "Vakio ny andalana voafidinao amin'ny feo mazava sy tsy misy tafintohina → Corrigé : famakiana mazava araka ny fahaizan'ny mpianatra"
        ]
      },
      {
        "matiere": "F/B",
        "topic": "Fanavaozana lehibe — Ny fifamoivoizana sy ny fitanterana",
        "approche": "Fanamafisana farany ny lohahevitra roa (fifamoivoizana, fitanterana) mialoha ny fanadinana II trimestre, amin'ny alalan'ny fanontaniana fifampidinihana.",
        "transmission": [
          "Famerenana am-pokonolona ny hevitra lehibe momba ny fifamoivoizana sy ny fitanterana",
          "Lalao fanontaniana valiny an-tsoratra fohy momba ireo lohahevitra roa",
          "Fanitsiana ny valiny sy famintinana ny lesona ho an'ny fanadinana"
        ],
        "exercices": [
          "Ahoana ny fifamoivoizana eny an-tanàna, araka izay hitanao? → Corrigé : famaritana tsotra sy marina araka ny traikefan'ny mpianatra",
          "Inona ny fahasamihafan'ny fitaterana an-tany sy an'habakabaka? → Corrigé : an-tany dia amin'ny fiara/sarety, an'habakabaka dia amin'ny fiaramanidina"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Fanavaozana farany — Filazana ho avy, mpisolo tena, mpanampy 'ndeha'",
        "approche": "Famerenana feno ireo lesona telo natao tamin'ny volana Febroary sy Mars (mpisolo tena, inty/ity, mpanampy 'ndeha', filazana ho avy), mialoha ny fanadinana II trimestre.",
        "transmission": [
          "Lalao fanontaniana malaky momba ny lesona efa natao (mpisolo tena, inty/ity, ndeha, te/-ta)",
          "Fanoratana fanamarinana an-tsoratra: mamorona fehezanteny tsirairay misy ireo lesona ireo",
          "Fanitsiana am-pokonolona sy famintinana ny lesona rehetra ho an'ny fanadinana"
        ],
        "exercices": [
          "Ampiasao ny 'ndeha' amin'ny fehezanteny fanentanana → Corrigé : 'Ndeha isika hianatra.'",
          "Ovay ho filazana ho avy: 'Mihinana vary aho' → Corrigé : 'Te-hihinam-bary aho.' (na ohatra mitovy)"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Tsirinteny sara-droa",
        "approche": "Mampianatra ny tsirinteny (fototeny) misy sara-droa (deux syllabes), manohy ny lesona momba ny teny malagasy hatramin'ny volana teo aloha.",
        "transmission": [
          "Fanadihadiana: inona no atao hoe tsirinteny? (fototeny)",
          "Fanomezana ohatra tsirinteny sara-droa (ex: soratra, vaky, mora)",
          "Fanavahana am-tsoratra ny sara (syllabe) ao amin'ny teny nomena",
          "Fanitsiana am-pokonolona"
        ],
        "exercices": [
          "Zarao ho sara ny teny 'mora' → Corrigé : mo-ra (sara roa)",
          "Tondroy tsirinteny sara-droa iray hafa → Corrigé : ohatra, 'vaky', 'soa' (valiny mety samihafa, tsy maintsy sara roa)"
        ]
      },
      {
        "matiere": "LANGAGE",
        "topic": "Révision générale — Bilan d'expression orale du 2e trimestre",
        "approche": "Faire le bilan des acquis d'expression orale du 2e trimestre (présentation, portrait, voyage, visite) avant l'examen.",
        "transmission": [
          "Rappel collectif des différents thèmes abordés à l'oral depuis janvier",
          "Jeu de questions-réponses rapides sur chaque thème",
          "Passage individuel : chaque élève s'exprime oralement sur un thème tiré au sort",
          "Bilan individuel et conseils personnalisés"
        ],
        "exercices": [
          "Présente-toi oralement en 3 phrases → Corrigé : présentation correcte et complète",
          "Décris oralement un camarade en 2 phrases → Corrigé : 2 phrases correctes utilisant des adjectifs appropriés"
        ]
      },
      {
        "matiere": "LECTURE",
        "topic": "Révision générale — Bilan de lecture du 2e trimestre",
        "approche": "Faire le bilan des textes lus depuis janvier (Nora en voyage, Famangiana, Mifindra monina) pour préparer l'examen de compréhension écrite.",
        "transmission": [
          "Relevé collectif des titres des textes étudiés ce trimestre",
          "Lecture silencieuse d'un extrait mélangé, choisi parmi les textes du trimestre",
          "Questionnaire de compréhension type examen",
          "Correction collective et conseils de méthode pour l'examen"
        ],
        "exercices": [
          "Cite le titre de 2 textes étudiés ce trimestre → Corrigé : ex. 'Nora en voyage', 'Les retrouvailles' (toute paire correcte parmi les textes vus)",
          "Lis un court extrait à voix haute sans hésitation → Corrigé : lecture fluide évaluée par l'enseignant"
        ]
      },
      {
        "matiere": "VOCABULAIRE",
        "topic": "Révision générale — Vocabulaire du 2e trimestre",
        "approche": "Consolider l'ensemble du vocabulaire vu ce trimestre (transports, préparatifs, portrait) avant l'examen.",
        "transmission": [
          "Jeu-concours par équipes reprenant le vocabulaire des thèmes du trimestre",
          "Exercice écrit de synthèse mêlant les différents champs lexicaux",
          "Correction collective et rappel des mots les plus difficiles",
          "Bilan individuel des acquis de vocabulaire"
        ],
        "exercices": [
          "Classe ces mots par thème : valise, taxi-brousse, gentil, itinéraire → Corrigé : voyage/transport = taxi-brousse, itinéraire, valise ; portrait = gentil",
          "Utilise 2 mots de vocabulaire du trimestre dans une même phrase → Corrigé : phrase cohérente employant les 2 mots correctement"
        ]
      },
      {
        "matiere": "GRAMMAIRE",
        "topic": "Révision générale — Les compléments circonstanciels (but, cause, conséquence)",
        "approche": "Réviser l'ensemble des compléments circonstanciels étudiés ce trimestre (but, cause, conséquence) avant l'examen du 2e trimestre.",
        "transmission": [
          "Rappel collectif des 3 types de compléments circonstanciels et de leurs mots-outils",
          "Exercice de tri : classer des phrases selon le type de C.C. employé",
          "Correction collective avec justification",
          "Production écrite : chaque élève construit une phrase pour chaque type de C.C."
        ],
        "exercices": [
          "Classe ces C.C. : 'car il pleut' / 'pour réussir' / 'si bien qu'il est tombé' → Corrigé : cause = car il pleut ; but = pour réussir ; conséquence = si bien qu'il est tombé",
          "Construis une phrase avec un C.C. de cause → Corrigé : phrase correcte contenant un connecteur de cause (parce que, car...)"
        ]
      },
      {
        "matiere": "ORTHOGRAPHE",
        "topic": "Révision générale — Orthographe du 2e trimestre",
        "approche": "Faire le bilan des notions d'orthographe du 2e trimestre avant l'examen : homophones, ponctuation, indicateurs de temps/lieu.",
        "transmission": [
          "Dictée bilan reprenant les notions du trimestre",
          "Correction collective mot par mot",
          "Repérage individuel des erreurs récurrentes de chaque élève",
          "Fiche de conseils personnalisés pour l'examen"
        ],
        "exercices": [
          "Dictée : 'Nora est partie en voyage et elle a préparé sa valise.' → Corrigé : orthographe correcte des homophones 'est' et 'a'",
          "Corrige : 'les eleve son content' → Corrigé : 'Les élèves sont contents.'"
        ]
      },
      {
        "matiere": "CONJUGAISON",
        "topic": "Le verbe du 1er groupe au présent du subjonctif",
        "approche": "Introduire le mode subjonctif en conjuguant un verbe du 1er groupe (ex. 'parler') au présent du subjonctif, après le conditionnel étudié les deux semaines précédentes.",
        "transmission": [
          "Rappel du conditionnel présent vu les semaines précédentes",
          "Présentation du subjonctif présent : emploi après 'il faut que', 'je veux que'",
          "Conjugaison collective d'un verbe du 1er groupe au subjonctif présent",
          "Exercice écrit de conjugaison sur une phrase modèle"
        ],
        "exercices": [
          "Conjugue 'parler' au subjonctif présent après 'il faut que', 3e pers. du sing. : 'Il faut qu'il ... bien.' → Corrigé : parle",
          "Conjugue 'parler' au subjonctif présent, 1ère pers. du plur. : 'Il faut que nous ... ensemble.' → Corrigé : parlions"
        ]
      },
      {
        "matiere": "ARITHMÉTIQUE",
        "topic": "L'intervalle",
        "approche": "Introduire la notion d'intervalle en calcul (nombre d'éléments dans une suite régulière, problèmes de plantation ou d'arrêts espacés).",
        "transmission": [
          "Présentation de la notion d'intervalle à l'aide d'un exemple concret (arbres plantés le long d'une allée)",
          "Explication de la relation entre le nombre d'intervalles et le nombre d'éléments",
          "Résolution collective d'un problème type au tableau",
          "Exercice individuel de calcul d'intervalle"
        ],
        "exercices": [
          "Sur une route de 100 m, on plante un arbre tous les 10 m, en commençant au début : combien d'arbres ? → Corrigé : 11 arbres (100 ÷ 10 = 10 intervalles + 1)",
          "Combien d'intervalles y a-t-il entre 6 poteaux alignés ? → Corrigé : 5 intervalles"
        ]
      },
      {
        "matiere": "GÉOMÉTRIE",
        "topic": "Le cylindre : surface latérale, surface de base, surface totale (SL - SB - ST)",
        "approche": "Introduire le calcul des surfaces du cylindre (latérale, de base, totale), en réinvestissant les formules de calcul d'aire du cercle et du rectangle.",
        "transmission": [
          "Rappel de la formule de l'aire du cercle (π × r²)",
          "Présentation du cylindre : surface latérale (rectangle enroulé), surface de base (2 cercles), surface totale",
          "Démonstration collective du calcul des 3 surfaces sur un exemple",
          "Exercice individuel de calcul de SL, SB, ST"
        ],
        "exercices": [
          "Un cylindre a un rayon de base de 3 cm et une hauteur de 10 cm (π ≈ 3,14). Calcule la surface de base → Corrigé : SB = π × 3² = 28,26 cm²",
          "Calcule la surface latérale du même cylindre → Corrigé : SL = 2 × π × r × h = 2 × 3,14 × 3 × 10 = 188,4 cm²",
          "Calcule la surface totale du même cylindre → Corrigé : ST = SL + 2×SB = 188,4 + 56,52 = 244,92 cm²"
        ]
      },
      {
        "matiere": "MESURE",
        "topic": "Correspondance mesure de volume et mesure de capacité (3) — problèmes",
        "approche": "Appliquer la correspondance volume-capacité à la résolution de problèmes concrets, en lien avec le calcul du volume du cylindre vu en géométrie.",
        "transmission": [
          "Rappel des conversions vues les deux semaines précédentes",
          "Présentation d'un problème concret : un récipient cylindrique et sa contenance en litres",
          "Résolution collective du problème au tableau",
          "Exercice individuel de résolution de problème"
        ],
        "exercices": [
          "Un bidon cylindrique a un volume de 15 dm³. Quelle est sa contenance en litres ? → Corrigé : 15 L",
          "Un réservoir contient 4 500 L d'eau. Exprime ce volume en m³ → Corrigé : 4,5 m³"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "La balance et les vases communicants",
        "approche": "Découvrir le principe de la balance (mesure de masse) et des vases communicants (l'eau trouve son niveau).",
        "transmission": [
          "Observation ou schéma d'une balance et explication de son fonctionnement",
          "Manipulation ou démonstration simple d'une pesée avec la balance",
          "Observation ou schéma de vases communicants reliés",
          "Explication du principe : l'eau se stabilise au même niveau dans des vases reliés"
        ],
        "exercices": [
          "À quoi sert une balance ? → Corrigé : à mesurer la masse (le poids) d'un objet",
          "Dans des vases communicants, à quel niveau se stabilise l'eau ? → Corrigé : au même niveau dans tous les vases reliés"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "L'industrie",
        "approche": "Découvrir les principales activités industrielles de Madagascar (agroalimentaire, textile), en clôturant l'étude des activités économiques du trimestre.",
        "transmission": [
          "Rappel des ressources minières et énergétiques vues la semaine précédente",
          "Présentation des industries malgaches : agroalimentaire, textile, zones franches",
          "Discussion sur les produits transformés localement (riz, sucre, textile)",
          "Bilan collectif des activités économiques du trimestre (agriculture, élevage, pêche, artisanat, mines, industrie)"
        ],
        "exercices": [
          "Cite un secteur industriel présent à Madagascar → Corrigé : ex. l'industrie textile, l'agroalimentaire",
          "Cite 3 activités économiques étudiées ce trimestre → Corrigé : ex. l'agriculture, l'artisanat, l'industrie (toute combinaison correcte parmi les thèmes vus)"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Ny fikambanana iraisam-pirenena",
        "approche": "Mampahafantatra ny fikambanana iraisam-pirenena misy an'i Madagasikara ao anatiny (ONU, Union Afrikana...), manohy ny lesona momba ny tantara ankehitriny.",
        "transmission": [
          "Famerenana fohy ny vanim-potoana ankehitriny (Repoblika IV) natao herinandro teo aloha",
          "Fampahafantarana ny fikambanana iraisam-pirenena misy an'i Madagasikara (ONU, Union Afrikana, SADC)",
          "Fanazavana ny anjara toeran'i Madagasikara ao anatin'ireo fikambanana ireo",
          "Famintinana ho an'ny fanadinana II trimestre"
        ],
        "exercices": [
          "Tanisao fikambanana iraisam-pirenena iray misy an'i Madagasikara → Corrigé : ohatra, ny ONU, ny Union Afrikana",
          "Inona ny tombontsoa azon'i Madagasikara amin'ny fiaraha-miasa iraisam-pirenena? → Corrigé : ohatra, fanampiana ara-toekarena, fandriam-pahalemana (valiny mety samihafa)"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Fanavaozana farany — Fifanajàna sy ady amin'ny fanavakavahana",
        "approche": "Famintinana ny lesona rehetra momba ny fifanajàna sy ny ady amin'ny fanavakavahana mialoha ny fanadinana II trimestre.",
        "transmission": [
          "Famerenana am-pokonolona ny lesona rehetra natao momba ny fanavakavahana",
          "Lalao fanontaniana valiny an-tsoratra fohy",
          "Famintinana sy fanoroana ny votoatin-kevitra lehibe ho an'ny fanadinana"
        ],
        "exercices": [
          "Inona no atao hoe fanavakavahana? → Corrigé : ny fitondrana tsy mitovy olona iray noho ny fahasamihafany (firazanana, volon-koditra...)",
          "Ahoana no atao mba hisorohana ny fanavakavahana ao an-tsekoly? → Corrigé : mifanaja sy mifanampy ny rehetra, na dia samy hafa aza"
        ]
      },
      {
        "matiere": "ANGLAIS",
        "topic": "Revision — General review before the term exam",
        "approche": "Faire le bilan du vocabulaire anglais du 2e trimestre (greetings, school things, date and time) avant l'examen.",
        "transmission": [
          "Jeu-quiz reprenant le vocabulaire des thèmes du trimestre (greetings, school things, date and time)",
          "Exercice écrit de synthèse",
          "Correction collective et rappel des points à revoir",
          "Bilan individuel de chaque élève"
        ],
        "exercices": [
          "Traduis : 'Bonjour, quelle heure est-il ?' → Corrigé : 'Hello, what time is it?'",
          "Cite 3 mots de vocabulaire appris ce trimestre → Corrigé : toute réponse cohérente parmi le vocabulaire vu (ex. book, pencil, Monday)"
        ]
      }
    ]
  }
];

const AVRIL_8EME = [
  {
    "n": 1,
    "dateDebut": "2026/04/13",
    "theme": "Reprise après les vacances de Pâques",
    "sous": "Bilan des acquis du 2e trimestre (thème du voyage) · L'intervalle et le cylindre en calcul · Le magnétisme et la boussole",
    "matieres": [
      {
        "matiere": "VAKITENY",
        "topic": "Famerenana — 'Famangiana sy sakafo' sy 'Mifindra monina'",
        "approche": "Famerenana ny votoatin'ny lahatsoratra roa novakiana talohan'ny fanadinana faha-2 (Martsa), mba hanamafisana ny fahatakaran'ny mpianatra alohan'ny hanohizana ny lohahevitra 'dia'.",
        "transmission": [
          "Famerenana fohy an-tsoratra ny votoatin'ny 'Famangiana sy sakafo' p.114",
          "Famerenana fohy an-tsoratra ny votoatin'ny 'Mifindra monina' p.118",
          "Famakiana mafy nataon'ny mpianatra 2-3, tsirairay andalana avy amin'ny lahatsoratra roa",
          "Fanontaniana fahatakarana mitambatra momba ireo lahatsoratra roa"
        ],
        "exercices": [
          "Iza no namangy, ao amin'ny 'Famangiana sy sakafo'? → Corrigé : valiny araka ny lahatsoratra p.114 (famintinana ny olona namangy sy ny sakafo natolotra)",
          "Nahoana no nifindra monina ny fianakaviana ao amin'ny 'Mifindra monina'? → Corrigé : valiny araka ny lahatsoratra p.118, antony nomen'ny lahatsoratra",
          "Vakio andalana iray amin'ireo lahatsoratra roa amin'ny feo mazava → Corrigé : famakiana tsy misy tafintohina"
        ]
      },
      {
        "matiere": "F/B",
        "topic": "Famerenana — Ny fitanterana",
        "approche": "Famerenana ny lohahevitra 'ny fitanterana' hitantara ny karazana fitaovana fitaterana sy ny anjara asany, mialoha ny hijerena ny fifamoivoizana amin'ny herinandro manaraka.",
        "transmission": [
          "Fanontaniana am-bava famerenana : inona avy ny karazana fitaovana fitaterana efa hita?",
          "Firaketana indray an-tsoratra ny karazana fitanterana (an-tany, an-dranomasina, an'habakabaka)",
          "Fanoratana fehezanteny 2-3 mamerina ny lanjan'ny fitanterana ho an'ny fiaraha-monina"
        ],
        "exercices": [
          "Tanisao karazana fitanterana telo → Corrigé : ohatra, fiara, sambo, fiaramanidina (valiny mety samihafa)",
          "Nahoana no ilaina ny fitanterana? → Corrigé : mba hifamoivoizan'ny olona sy ny entana avy any amin'ny toerana iray ho any amin'ny hafa"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Famerenana — Filazana ho avy: te, -ta",
        "approche": "Famerenana ny fitsipika fanoratana ny filazana zavatra ho avy amin'ny alalan'ny 'te' sy ny mpamaritra '-ta' ('hiteny', 'hanoratra' sns), talohan'ny hijerena mpisolo tena vaovao.",
        "transmission": [
          "Famerenana an-tsoratra ny fomba fanoratana ny 'te' eo alohan'ny matoanteny milaza faniriana",
          "Famerenana ny fampiasana '-ta' amin'ny fehezanteny milaza zavatra ho avy",
          "Fanovana am-tsoratra fehezanteny amin'ny fotoana ankehitriny ho fotoana ho avy"
        ],
        "exercices": [
          "Ovay ho filazana ho avy : 'Mianatra aho.' → Corrigé : 'Te-hianatra aho.' (na 'Hianatra aho.')",
          "Ampiasao ny '-ta' amin'ity fehezanteny ity : 'Handeha any an-tsekoly izy' → Corrigé : 'Ho entanina any an-tsekoly izy' (na ohatra mitovy hevitra mampiasa marika ho avy)"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Fandrasana teny",
        "approche": "Mampianatra ny 'teny fandrasana', dia ireo teny nindramina avy amin'ny teny vahiny (frantsay indrindra) ka nampiasain'ny Malagasy amin'ny fiainana andavanandro, ohatra 'banky', 'telefaonina', 'birao'.",
        "transmission": [
          "Fanadihadiana am-bava : teny hafa firenena ampiasan'ny Malagasy isan'andro",
          "Fanomezana ohatra teny nindramina maromaro (banky, telefaonina, birao, kaonty, radio)",
          "Fampitahana ny endriny amin'ny teny frantsay niaviany",
          "Fanoratana am-pokonolona fehezanteny mampiasa teny fandrasana"
        ],
        "exercices": [
          "Tanisao teny fandrasana telo hafa amin'ireo efa voatanisa → Corrigé : ohatra, fiara, kamera, televiziona (valiny mety samihafa)",
          "Ampiasao ny teny 'telefaonina' amin'ny fehezanteny → Corrigé : fehezanteny feno mampiasa marina ny teny 'telefaonina'"
        ]
      },
      {
        "matiere": "LANGAGE",
        "topic": "Révision — Mon frère rêve de voyage",
        "approche": "Réviser l'expression orale d'un projet de voyage à partir du texte étudié en février, en réutilisant les structures apprises ('je rêve de...', 'j'aimerais...').",
        "transmission": [
          "Rappel oral collectif du texte 'Mon frère rêve de voyage'",
          "Reformulation orale par les élèves du rêve du personnage principal",
          "Exercice oral : chaque élève exprime un projet de voyage personnel avec 'j'aimerais aller à...'",
          "Correction des phrases mal formulées"
        ],
        "exercices": [
          "Exprime oralement un projet de voyage avec 'j'aimerais...' → Corrigé : phrase correcte du type 'J'aimerais aller à ...'",
          "De quoi rêvait le frère dans le texte étudié ? → Corrigé : réponse fidèle au texte 'Mon frère rêve de voyage'"
        ]
      },
      {
        "matiere": "LECTURE",
        "topic": "Révision — Mora en voyage p.148",
        "approche": "Réviser le texte 'Mora en voyage' lu juste avant l'examen du 2e trimestre, par une nouvelle lecture à voix haute et des questions plus approfondies.",
        "transmission": [
          "Lecture silencieuse de rappel du texte 'Mora en voyage' p.148",
          "Lecture à voix haute par plusieurs élèves",
          "Questions de compréhension approfondies sur l'itinéraire suivi par Mora",
          "Récapitulatif écrit en 2-3 phrases du texte"
        ],
        "exercices": [
          "Où va Mora dans le texte 'Mora en voyage' ? → Corrigé : réponse fidèle au texte p.148 (destination citée dans le texte)",
          "Résume en 2 phrases le voyage de Mora → Corrigé : résumé fidèle et cohérent avec le texte étudié"
        ]
      },
      {
        "matiere": "VOCABULAIRE",
        "topic": "Révision — Les préparatifs (de voyage)",
        "approche": "Réviser le champ lexical des préparatifs de voyage (valise, billet, itinéraire, bagages) vu en février.",
        "transmission": [
          "Rappel collectif au tableau du vocabulaire des préparatifs de voyage",
          "Classement des mots par étape (avant le départ / pendant le voyage)",
          "Exercice écrit : compléter des phrases avec le mot correct du champ lexical"
        ],
        "exercices": [
          "Complète : 'Avant de partir, je prépare ma ...' → Corrigé : valise",
          "Cite 3 mots liés aux préparatifs d'un voyage → Corrigé : ex. billet, valise, itinéraire (toute réponse cohérente)"
        ]
      },
      {
        "matiere": "GRAMMAIRE",
        "topic": "Révision — C.C de cause et C.C de conséquence",
        "approche": "Réviser les compléments circonstanciels de cause (pourquoi ?) et de conséquence (quel résultat ?) vus en mars, à partir de phrases nouvelles.",
        "transmission": [
          "Rappel de la question posée par chaque complément (cause : pourquoi ? / conséquence : donc quoi ?)",
          "Rappel des mots-outils : parce que, car, à cause de (cause) ; si bien que, donc, c'est pourquoi (conséquence)",
          "Exercice écrit : identifier le C.C de cause ou de conséquence dans 4 phrases",
          "Correction collective"
        ],
        "exercices": [
          "Trouve le C.C de cause : 'Il est resté chez lui car il pleuvait.' → Corrigé : car il pleuvait",
          "Trouve le C.C de conséquence : 'Elle a bien révisé, si bien qu'elle a réussi.' → Corrigé : si bien qu'elle a réussi"
        ]
      },
      {
        "matiere": "ORTHOGRAPHE",
        "topic": "Révision — est / ait / ai",
        "approche": "Réviser la distinction entre 'est' (verbe être), 'ait' (subjonctif d'avoir) et 'ai' (1ère personne d'avoir) par le test de remplacement.",
        "transmission": [
          "Rappel de la règle de remplacement : 'est' → 'était' ; 'ait' → 'avait' (dans une phrase au subjonctif) ; 'ai' → 1ère personne",
          "Exercice à trous avec les 3 formes",
          "Correction collective avec justification orale de chaque choix"
        ],
        "exercices": [
          "Complète : 'Il ... content de son voyage.' → Corrigé : est",
          "Complète : 'Je ... préparé ma valise.' → Corrigé : ai",
          "Complète : 'Il faut qu'il ... son billet avant le départ.' → Corrigé : ait"
        ]
      },
      {
        "matiere": "CONJUGAISON",
        "topic": "Révision — être, avoir, aller au présent du conditionnel",
        "approche": "Réviser la conjugaison des verbes être, avoir et aller au présent du conditionnel, vus en mars.",
        "transmission": [
          "Rappel de la formation du conditionnel présent (radical du futur + terminaisons de l'imparfait)",
          "Récapitulatif au tableau des 3 verbes conjugués",
          "Exercice écrit : compléter des phrases avec le verbe demandé au conditionnel présent",
          "Correction collective"
        ],
        "exercices": [
          "Conjugue 'être' au conditionnel présent, 1ère personne : 'Je ... content de partir.' → Corrigé : serais",
          "Conjugue 'avoir' au conditionnel présent, 3e personne du pluriel : 'Ils ... de la chance.' → Corrigé : auraient",
          "Conjugue 'aller' au conditionnel présent, 2e personne du singulier : 'Tu ... à la plage.' → Corrigé : irais"
        ]
      },
      {
        "matiere": "ARITHMÉTIQUE",
        "topic": "L'intervalle",
        "approche": "Introduire les problèmes d'intervalle (plantations, poteaux) : calcul du nombre d'intervalles et du nombre d'éléments selon que le trajet est ouvert (avec élément aux deux extrémités) ou fermé (contour).",
        "transmission": [
          "Rappel de la notion de distance et de division",
          "Présentation du cas 'chemin ouvert' : nombre d'arbres = nombre d'intervalles + 1",
          "Présentation du cas 'chemin fermé' (contour) : nombre d'arbres = nombre d'intervalles",
          "Exercices d'application avec dessin au tableau"
        ],
        "exercices": [
          "Le long d'une route de 120 m, on plante un arbre tous les 10 m, avec un arbre à chaque extrémité. Combien d'arbres ? → Corrigé : 120÷10=12 intervalles, 12+1=13 arbres",
          "Autour d'un terrain carré de 40 m de périmètre, on plante un piquet tous les 5 m. Combien de piquets ? → Corrigé : 40÷5=8 piquets (chemin fermé, pas de +1)"
        ]
      },
      {
        "matiere": "GÉOMÉTRIE",
        "topic": "Le cylindre : SL - SB - ST",
        "approche": "Introduire le calcul de la surface latérale (SL), de la surface de base (SB) et de la surface totale (ST) d'un cylindre, avec π ≈ 3,14.",
        "transmission": [
          "Rappel de la formule du périmètre et de l'aire du cercle vus en janvier",
          "Présentation du cylindre : SB = π×r² (aire du cercle de base)",
          "Présentation de SL = périmètre de base × hauteur = 2×π×r×h",
          "Présentation de ST = SL + 2×SB",
          "Exercice d'application avec un cylindre de dimensions données"
        ],
        "exercices": [
          "Un cylindre a un rayon de base de 5 cm et une hauteur de 10 cm. Calcule SB → Corrigé : SB = 3,14×5×5 = 78,5 cm²",
          "Avec les mêmes dimensions, calcule SL → Corrigé : SL = 2×3,14×5×10 = 314 cm²",
          "Calcule la surface totale ST du même cylindre → Corrigé : ST = 314 + 2×78,5 = 471 cm²"
        ]
      },
      {
        "matiere": "MESURE",
        "topic": "Révision — Correspondance mesure de volume et mesure de capacité",
        "approche": "Réviser les équivalences entre unités de volume et unités de capacité (1 dm³ = 1 L ; 1 cm³ = 1 mL ; 1 m³ = 1000 L), vues en mars.",
        "transmission": [
          "Rappel du tableau de correspondance volume/capacité",
          "Exercices de conversion dans les deux sens",
          "Correction collective avec justification"
        ],
        "exercices": [
          "Convertis : 3 dm³ = ... L → Corrigé : 3 L",
          "Convertis : 250 cm³ = ... mL → Corrigé : 250 mL",
          "Convertis : 2 m³ = ... L → Corrigé : 2000 L"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "Le métal, l'aimant et la boussole",
        "approche": "Découvrir les propriétés des métaux, le phénomène d'attraction magnétique et le fonctionnement de la boussole pour s'orienter.",
        "transmission": [
          "Observation collective d'objets en métal de la classe (clé, ciseaux, trombone)",
          "Expérience simple : un aimant attire les objets en fer/métal, pas le bois ni le plastique",
          "Présentation de la boussole : l'aiguille aimantée indique toujours le nord",
          "Exercice écrit de vérification"
        ],
        "exercices": [
          "Qu'est-ce qu'un aimant peut attirer ? → Corrigé : les objets en fer ou en métal (pas le bois ni le plastique)",
          "À quoi sert une boussole ? → Corrigé : à indiquer le nord et à s'orienter",
          "Que fait l'aiguille aimantée d'une boussole ? → Corrigé : elle pointe toujours vers le nord"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "L'industrie",
        "approche": "Découvrir le secteur industriel : la transformation des matières premières en produits finis dans des usines, à distinguer de l'artisanat et des mines vus en mars.",
        "transmission": [
          "Rappel de l'artisanat et des mines/énergies vus en mars",
          "Définition de l'industrie : transformer une matière première en produit fini dans une usine",
          "Exemples d'industries à Madagascar (textile, agroalimentaire)",
          "Distinction avec l'artisanat (fabrication à la main, en petite quantité)"
        ],
        "exercices": [
          "Qu'est-ce que l'industrie ? → Corrigé : la transformation de matières premières en produits finis, dans des usines, en grande quantité",
          "Cite un exemple d'industrie présente à Madagascar → Corrigé : ex. l'industrie textile ou agroalimentaire (toute réponse cohérente)",
          "Quelle différence entre l'industrie et l'artisanat ? → Corrigé : l'industrie fabrique en usine et en grande quantité, l'artisanat fabrique à la main en petite quantité"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Ireo daty iraisam-pirenena",
        "approche": "Mampahafantatra ny daty lehibe iraisam-pirenena ankalazaina manerantany, manohy ny lesona momba ny fikambanana iraisam-pirenena natao tamin'ny Martsa.",
        "transmission": [
          "Famerenana fohy ny fikambanana iraisam-pirenena natao tamin'ny Martsa",
          "Fanolorana ireo daty iraisam-pirenena lehibe: 1 Janoary (Taom-baovao), 8 Martsa (Andro iraisam-pirenena ho an'ny vehivavy), 1 Mey (Andro iraisam-pirenena ho an'ny asa)",
          "Fanazavana fohy ny anton'ny fankalazana ny daty tsirairay",
          "Firaketana an-tsoratra ny lisitry ny daty telo"
        ],
        "exercices": [
          "Inona ny daty ankalazana ny Andro iraisam-pirenena ho an'ny vehivavy? → Corrigé : 8 Martsa",
          "Inona ny daty ankalazana ny Andro iraisam-pirenena ho an'ny asa? → Corrigé : 1 Mey"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Révision — Ady amin'ny endrim-panavakavahana",
        "approche": "Famerenana ny lesona momba ny endrim-panavakavahana samihafa (foko, taranaka, sarangam-pananana) sy ny fomba fiadiana amin'izany, natao tamin'ny Febroary.",
        "transmission": [
          "Famerenana am-bava ny endrim-panavakavahana efa hita (foko, saranga, fahasembanana)",
          "Firaketana indray ny fihetsika tokony hatao mba hisorohana ny fanavakavahana",
          "Fanoratana fehezanteny fohy milaza fihetsika tsara iray"
        ],
        "exercices": [
          "Tanisao endrim-panavakavahana iray → Corrigé : ohatra, ny fanavakavahana araka ny foko na ny sarangam-pananana (valiny mety samihafa)",
          "Inona no tokony hataonao raha mahita namana ho voaavakavaka? → Corrigé : miaro azy sy milaza amin'ny mpampianatra"
        ]
      },
      {
        "matiere": "ANGLAIS",
        "topic": "Révision — Date and Time",
        "approche": "Réviser le vocabulaire des dates et de l'heure (jours, mois, 'What time is it?') vu en février.",
        "transmission": [
          "Rappel collectif des jours de la semaine et des mois de l'année en anglais",
          "Rappel de la structure 'What time is it? It is ... o'clock'",
          "Exercice oral de questions-réponses sur la date et l'heure",
          "Correction de la prononciation"
        ],
        "exercices": [
          "Traduis : 'Quelle heure est-il ?' → Corrigé : 'What time is it?'",
          "Complète : 'Today is Monday, the first of ...' (mois actuel) → Corrigé : 'April'",
          "Comment dit-on 'lundi' en anglais ? → Corrigé : 'Monday'"
        ]
      }
    ]
  },
  {
    "n": 2,
    "dateDebut": "2026/04/20",
    "theme": "Consolidation des acquis et l'industrie à Madagascar",
    "sous": "L'air et le sol · L'industrie (suite) · Révisions cumulatives du 2e trimestre",
    "matieres": [
      {
        "matiere": "VAKITENY",
        "topic": "Famerenana — 'Fiaingan'ny fiaramanidina' sy 'Handao vetivety an'i Toamasina'",
        "approche": "Famerenana ny lahatsoratra roa novakiana tamin'ny Febroary, momba ny fialàna an-tanàna sy ny fiaingan'ny fiaramanidina, ho fanamafisana ny lohahevitra 'dia'.",
        "transmission": [
          "Famerenana am-bava ny votoatin'ny 'Handao vetivety an'i Toamasina' p.104",
          "Famerenana am-bava ny votoatin'ny 'Fiaingan'ny fiaramanidina' p.109",
          "Famakiana mafy nataon'ny mpianatra samihafa",
          "Fanontaniana fahatakarana mampitaha ireo lahatsoratra roa"
        ],
        "exercices": [
          "Nahoana no nandao an'i Toamasina ny olona ao amin'ny lahatsoratra? → Corrigé : valiny araka ny lahatsoratra p.104",
          "Inona no fihetseham-po tsapan'ny olona rehefa hiainga ny fiaramanidina? → Corrigé : valiny araka ny lahatsoratra p.109 (ohatra, tahotra na hafaliana)"
        ]
      },
      {
        "matiere": "F/B",
        "topic": "Famerenana — Ny fifamoivoizana",
        "approche": "Famerenana ny lohahevitra 'ny fifamoivoizana' (ny fandehanan'ny fitaovana sy ny olona an-dalambe), mifanaraka amin'ny lesona momba ny fitanterana efa natao.",
        "transmission": [
          "Fifampiresahana am-bava famerenana : inona no atao hoe fifamoivoizana?",
          "Firaketana indray ny olana mety hitranga amin'ny fifamoivoizana (fahatongavana tara, loza)",
          "Fanoratana fehezanteny 2-3 milaza ny fitsipika tokony harahina an-dalambe"
        ],
        "exercices": [
          "Inona no atao hoe fifamoivoizana? → Corrigé : ny fandehanan'ny olona sy ny fiara an-dalambe",
          "Tanisao fitsipika iray tokony harahina rehefa mamakivaky lalana → Corrigé : ohatra, mijery eroa sy eroa alohan'ny hamakivaky (valiny mety samihafa)"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Famerenana — Ny mpisolo tena sy 'Inty/Ity'",
        "approche": "Famerenana ny mpisolo tena (aho, ianao, izy...) sy ny fampiasana ny 'inty' sy 'ity' natao tamin'ny Febroary.",
        "transmission": [
          "Famerenana an-tsoratra ny lisitry ny mpisolo tena",
          "Famerenana ny fahasamihafan'ny 'inty' (zavatra akaiky) sy 'ity...ity' (fanondroana)",
          "Fanoratana am-pokonolona fehezanteny mampiasa ireo teny ireo"
        ],
        "exercices": [
          "Solò amin'ny mpisolo tena : 'Rasoa dia mianatra.' → Corrigé : 'Izy dia mianatra.'",
          "Ampiasao ny 'ity...ity' amin'ny fehezanteny → Corrigé : fehezanteny feno mampiasa marina ny 'ity...ity', ohatra 'Madio ity efitrano ity.'"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Révision — Fandrasana teny",
        "approche": "Famerenana ny teny fandrasana (teny nindramina) natao ny herinandro teo aloha, amin'ny alalan'ny fanoratana fehezanteny vaovao.",
        "transmission": [
          "Famerenana ny lisitry ny teny fandrasana efa hita (banky, telefaonina, birao)",
          "Fanovana am-tsoratra fehezanteny frantsay ho fehezanteny malagasy mampiasa teny fandrasana",
          "Fanitsiana am-pokonolona"
        ],
        "exercices": [
          "Ampiasao ny teny 'kaonty' amin'ny fehezanteny → Corrigé : fehezanteny feno mampiasa marina ny teny 'kaonty'",
          "Tanisao teny fandrasana efatra nianaranao → Corrigé : ohatra, banky, telefaonina, birao, radio"
        ]
      },
      {
        "matiere": "LANGAGE",
        "topic": "Révision — Raconter un voyage vécu ou imaginaire",
        "approche": "Approfondir l'expression orale du thème du voyage en demandant aux élèves de raconter, à partir des structures déjà vues, un voyage vécu ou imaginé.",
        "transmission": [
          "Rappel des expressions apprises la semaine précédente ('j'aimerais...', 'je rêve de...')",
          "Ajout de nouvelles structures : 'je suis allé à...', 'nous avons visité...'",
          "Présentation orale individuelle d'un court récit de voyage (2-3 phrases)",
          "Correction collective de la construction des phrases"
        ],
        "exercices": [
          "Raconte oralement un voyage en 2 phrases avec 'je suis allé(e) à...' → Corrigé : 2 phrases correctes au passé composé",
          "Complète à l'oral : 'Nous avons visité ...' → Corrigé : phrase complète et cohérente"
        ]
      },
      {
        "matiere": "LECTURE",
        "topic": "Révision — Guide du voyageur p.138",
        "approche": "Réviser le texte 'Guide du voyageur' vu en février, en approfondissant la compréhension des conseils donnés aux voyageurs.",
        "transmission": [
          "Lecture silencieuse de rappel du texte 'Guide du voyageur' p.138",
          "Lecture à voix haute par plusieurs élèves",
          "Relevé des conseils donnés dans le texte",
          "Questions de compréhension écrites"
        ],
        "exercices": [
          "Cite un conseil donné dans le 'Guide du voyageur' → Corrigé : réponse fidèle au texte p.138 (ex. préparer ses papiers, arriver en avance)",
          "Pourquoi ce texte est-il un 'guide' ? → Corrigé : parce qu'il donne des conseils pratiques pour bien voyager"
        ]
      },
      {
        "matiere": "VOCABULAIRE",
        "topic": "Révision — Les transports en ville",
        "approche": "Réviser le champ lexical des transports en ville (taxi-brousse, bus, pousse-pousse) vu en février.",
        "transmission": [
          "Rappel collectif du vocabulaire des transports urbains",
          "Classement selon le type (transport individuel / transport collectif)",
          "Exercice écrit : associer chaque mot à sa définition"
        ],
        "exercices": [
          "Cite 2 moyens de transport utilisés en ville → Corrigé : ex. le taxi-brousse, le pousse-pousse (toute paire correcte)",
          "Qu'est-ce qu'un transport collectif ? → Corrigé : un transport qui accueille plusieurs personnes en même temps, ex. le bus"
        ]
      },
      {
        "matiere": "GRAMMAIRE",
        "topic": "Révision — C.C de but et forme active/passive",
        "approche": "Réviser le complément circonstanciel de but (vu en février) et la forme active/passive de la phrase (vue en février).",
        "transmission": [
          "Rappel du C.C de but (répond à 'dans quel but ?', introduit par 'pour', 'afin de')",
          "Rappel de la phrase active (le sujet fait l'action) et passive (le sujet subit l'action)",
          "Exercice écrit mêlant les deux notions",
          "Correction collective"
        ],
        "exercices": [
          "Trouve le C.C de but : 'Il révise pour réussir son examen.' → Corrigé : pour réussir son examen",
          "Transforme à la forme passive : 'Le maître corrige les cahiers.' → Corrigé : 'Les cahiers sont corrigés par le maître.'"
        ]
      },
      {
        "matiere": "ORTHOGRAPHE",
        "topic": "Révision cumulative — et/est/a/à et est/ait/ai",
        "approche": "Réviser ensemble les deux séries d'homophones grammaticaux déjà étudiées cette année (et/est/a/à en septembre, est/ait/ai en février).",
        "transmission": [
          "Rappel des règles de remplacement pour chaque homophone",
          "Exercice à trous mêlant les deux séries dans un même texte court",
          "Correction collective avec justification de chaque choix"
        ],
        "exercices": [
          "Complète : 'Il ... arrivé ... il ... content.' → Corrigé : 'Il est arrivé et il est content.'",
          "Complète : 'Je pense qu'il ... raison ; je le lui ... déjà dit.' → Corrigé : 'Je pense qu'il a raison ; je le lui ai déjà dit.'",
          "Complète : 'Il faut qu'elle ... son billet avant d'aller ... la gare.' → Corrigé : 'Il faut qu'elle ait son billet avant d'aller à la gare.'"
        ]
      },
      {
        "matiere": "CONJUGAISON",
        "topic": "Révision — Le verbe du 1er groupe au présent du subjonctif",
        "approche": "Réviser la conjugaison d'un verbe du 1er groupe (ex. 'voyager') au présent du subjonctif, vue en mars.",
        "transmission": [
          "Rappel de la structure 'que je / que tu / qu'il...' du subjonctif présent",
          "Rappel des terminaisons du 1er groupe au subjonctif présent",
          "Exercice écrit de conjugaison sur le verbe 'voyager'",
          "Correction collective avec tableau récapitulatif"
        ],
        "exercices": [
          "Conjugue 'voyager' au subjonctif présent : 'Il faut que je ...' → Corrigé : voyage",
          "Conjugue 'voyager' au subjonctif présent, 1ère personne du pluriel : 'Il faut que nous ...' → Corrigé : voyagions",
          "Conjugue 'voyager' au subjonctif présent, 3e personne du pluriel : 'Il faut qu'ils ...' → Corrigé : voyagent"
        ]
      },
      {
        "matiere": "ARITHMÉTIQUE",
        "topic": "Révision cumulative — L'intervalle",
        "approche": "Consolider les problèmes d'intervalle vus la semaine précédente avec des situations plus variées (chemin ouvert et fermé mélangés).",
        "transmission": [
          "Rappel des deux cas : chemin ouvert (+1) et chemin fermé (sans +1)",
          "Exercices variés mêlant les deux cas",
          "Correction collective avec schéma au tableau pour chaque problème"
        ],
        "exercices": [
          "Sur une allée de 90 m, on plante un piquet tous les 15 m, avec un piquet à chaque bout. Combien de piquets ? → Corrigé : 90÷15=6 intervalles, 6+1=7 piquets",
          "Autour d'un bassin rond de 60 m de circonférence, on plante un arbuste tous les 10 m. Combien d'arbustes ? → Corrigé : 60÷10=6 arbustes (chemin fermé)"
        ]
      },
      {
        "matiere": "GÉOMÉTRIE",
        "topic": "Révision — Le cylindre : SL - SB - ST",
        "approche": "Consolider le calcul des surfaces du cylindre vu la semaine précédente avec de nouvelles dimensions.",
        "transmission": [
          "Rappel des 3 formules : SB = π×r² ; SL = 2×π×r×h ; ST = SL + 2×SB",
          "Exercice d'application avec un nouveau cylindre",
          "Correction collective détaillée, étape par étape"
        ],
        "exercices": [
          "Un cylindre a un rayon de 4 cm et une hauteur de 8 cm. Calcule SB → Corrigé : SB = 3,14×4×4 = 50,24 cm²",
          "Calcule SL du même cylindre → Corrigé : SL = 2×3,14×4×8 = 200,96 cm²",
          "Calcule ST du même cylindre → Corrigé : ST = 200,96 + 2×50,24 = 301,44 cm²"
        ]
      },
      {
        "matiere": "MESURE",
        "topic": "Révision cumulative — Volume et capacité",
        "approche": "Consolider les conversions volume/capacité par la résolution de petits problèmes concrets.",
        "transmission": [
          "Rappel du tableau de correspondance volume/capacité",
          "Résolution d'un problème concret mêlant conversion et calcul",
          "Correction collective"
        ],
        "exercices": [
          "Un réservoir a un volume de 5 dm³. Combien de litres d'eau peut-il contenir ? → Corrigé : 5 L",
          "Une bouteille contient 750 mL d'eau. Exprime ce volume en cm³ → Corrigé : 750 cm³"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "L'air et le sol",
        "approche": "Étudier les propriétés de l'air (invisible, occupe un espace, nécessaire à la respiration) et les grands types de sol (sableux, argileux, humifère).",
        "transmission": [
          "Expérience simple : un sac plastique gonflé montre que l'air occupe un espace",
          "Rappel que l'air est nécessaire à la respiration et à la combustion",
          "Observation d'échantillons de sol différents (sableux, argileux, humifère) si disponibles",
          "Exercice écrit de vérification"
        ],
        "exercices": [
          "Pourquoi dit-on que l'air occupe un espace ? → Corrigé : parce qu'un sac ou un ballon gonflé d'air prend du volume, même si on ne voit pas l'air",
          "Cite 2 types de sol → Corrigé : ex. le sol sableux et le sol argileux (toute paire correcte)",
          "À quoi sert l'air pour les êtres vivants ? → Corrigé : à respirer (et à la combustion du feu)"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "L'industrie (suite)",
        "approche": "Approfondir l'étude de l'industrie à Madagascar : les principaux types d'industries (textile, agroalimentaire, minière) et leur répartition géographique.",
        "transmission": [
          "Rappel de la définition de l'industrie vue la semaine précédente",
          "Présentation des principaux types d'industries à Madagascar avec des exemples précis",
          "Observation d'une carte simple situant les zones industrielles (ex. Antananarivo, Antsirabe)",
          "Exercice écrit de vérification"
        ],
        "exercices": [
          "Cite 2 types d'industries présentes à Madagascar → Corrigé : ex. l'industrie textile et l'industrie agroalimentaire (toute paire cohérente)",
          "Dans quelle grande ville trouve-t-on de nombreuses usines textiles à Madagascar ? → Corrigé : Antananarivo (ou Antsirabe)"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Révision — Ireo daty iraisam-pirenena",
        "approche": "Famerenana ny daty iraisam-pirenena natao ny herinandro teo aloha, ampiana daty vaovao iray hafa.",
        "transmission": [
          "Famerenana ny daty telo efa hita (1 Janoary, 8 Martsa, 1 Mey)",
          "Fampahafantarana daty vaovao : 20 Novambra, Andro iraisam-pirenena ho an'ny zon-jaza",
          "Fanoratana fanontaniana famerenana am-tsoratra"
        ],
        "exercices": [
          "Inona ny daty ankalazana ny Andro iraisam-pirenena ho an'ny zon-jaza? → Corrigé : 20 Novambra",
          "Tanisao daty iraisam-pirenena efatra nianaranao → Corrigé : 1 Janoary, 8 Martsa, 1 Mey, 20 Novambra"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Révision cumulative — Fiarovana ny zon'ny tsirairay",
        "approche": "Manohy ny famerenana ny lesona momba ny ady amin'ny fanavakavahana, mifantoka kokoa amin'ny ohatra concrete sy ny fihetsika azo atao ao an-tsekoly.",
        "transmission": [
          "Fifampiresahana am-bava momba ohatra fanavakavahana mety hitranga ao an-tsekoly",
          "Fanadihadiana ny fihetsika tokony hatao raha mahita izany (milaza amin'ny mpampianatra, miaro ny namana)",
          "Fanoratana fehezanteny fohy milaza fitsipika iray hisorohana ny fanavakavahana"
        ],
        "exercices": [
          "Inona no tokony hataonao raha misy namana tsy alaina anjara amin'ny lalao noho izy tsy mitovy vola amin'ny hafa? → Corrigé : mitaraina amin'ny mpampianatra sy manasa azy hilalao",
          "Soraty fitsipika iray hisorohana ny fanavakavahana ao an-tsekoly → Corrigé : fehezanteny feno sy marina, ohatra 'Tokony hitovy ny fitondrana ny mpianatra rehetra.'"
        ]
      },
      {
        "matiere": "ANGLAIS",
        "topic": "Révision cumulative — Date, Time and Transport",
        "approche": "Réviser le vocabulaire de la date et de l'heure en le combinant avec le vocabulaire des moyens de transport vu en janvier.",
        "transmission": [
          "Rappel de 'What time is it?' et des jours/mois",
          "Rappel du vocabulaire des moyens de transport (car, bus, plane, boat)",
          "Exercice oral : 'What time do you take the bus?'",
          "Correction de la prononciation"
        ],
        "exercices": [
          "Traduis : 'Je prends l'avion le lundi.' → Corrigé : 'I take the plane on Monday.'",
          "Complète : 'The bus leaves at 8 ... the morning.' → Corrigé : 'in'"
        ]
      }
    ]
  },
  {
    "n": 3,
    "dateDebut": "2026/04/27",
    "theme": "Bilan général de fin de mois",
    "sous": "Pile et environnement · Synthèse du thème du voyage et du 2e trimestre",
    "matieres": [
      {
        "matiere": "VAKITENY",
        "topic": "Famerenana lehibe — Ny lahatsoratra momba ny dia",
        "approche": "Famintinana lehibe ny lahatsoratra rehetra momba ny lohahevitra 'dia' novakiana nanomboka ny Febroary ('Fanaovam-beloma...', 'Handao vetivety...', 'Fiaingan'ny fiaramanidina...', 'Famangiana sy sakafo', 'Mifindra monina'), amin'ny fanontaniana mitambatra.",
        "transmission": [
          "Famerenana an-tsoratra ny lisitry ny lahatsoratra rehetra novakiana momba ny dia",
          "Fanontaniana mitambatra mampitaha ny votoatin'ireo lahatsoratra samihafa",
          "Fanoratana famintinana fohy iray mahakasika ny lohahevitra 'dia' amin'ny ankapobeny"
        ],
        "exercices": [
          "Tanisao lahatsoratra roa novakianao momba ny dia → Corrigé : ohatra, 'Famangiana sy sakafo' sy 'Mifindra monina' (na hafa amin'ny efa novakiana)",
          "Soraty fehezanteny 2 mamintina ny lohahevitra 'dia' araka ny lahatsoratra novakianao → Corrigé : famintinana marina sy feno araka ny lahatsoratra"
        ]
      },
      {
        "matiere": "F/B",
        "topic": "Famerenana lehibe — Fitanterana sy fifamoivoizana",
        "approche": "Famintinana ny lesona roa momba ny fitanterana sy ny fifamoivoizana, hampiseho ny fifandraisan'izy roa.",
        "transmission": [
          "Famerenana am-bava ny fifandraisan'ny fitanterana sy ny fifamoivoizana",
          "Fifampiresahana : ahoana no mety hitranga raha tsy mahalala fitsipika ny olona mampiasa fitaovana fitaterana",
          "Fanoratana fehezanteny mitambatra momba ny lohahevitra roa"
        ],
        "exercices": [
          "Ahoana no ifandraisan'ny fitanterana sy ny fifamoivoizana? → Corrigé : ny fitaovana fitanterana no mahatonga ny fifamoivoizana an-dalambe",
          "Soraty fehezanteny iray mitambatra ireo lohahevitra roa → Corrigé : fehezanteny feno, ohatra 'Ny fiara sy ny sambo dia fitaovana fitanterana mahatonga fifamoivoizana.'"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Famerenana lehibe — Fitsipika samihafa",
        "approche": "Famintinana ireo fitsipika tsipelina rehetra hita nanomboka ny Febroary: mpisolo tena, inty/ity, filazana ho avy (te, -ta), ampiana ohatra vaovao.",
        "transmission": [
          "Famerenana an-tsoratra ny fitsipika telo hita: mpisolo tena, inty/ity, filazana ho avy",
          "Fanoratana fehezanteny mitambatra mampiasa fitsipika roa na telo amin'ny fehezanteny iray",
          "Fanitsiana am-pokonolona"
        ],
        "exercices": [
          "Ovay ho filazana ho avy ary ampio mpisolo tena marina : 'Rasoa mandeha any an-tsekoly.' → Corrigé : 'Te-handeha any an-tsekoly izy.'",
          "Ampiasao ny 'ity...ity' sy ny mpisolo tena 'aho' amin'ny fehezanteny iray → Corrigé : fehezanteny feno sy marina, ohatra 'Manana boky ity aho.'"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Famerenana lehibe — Ny fitsipi-teny nianarana",
        "approche": "Famintinana ny fitsipi-teny nianarana nanomboka ny Martsa: mpisolo isa, mpamaritra sy mpisolo toerana, tsirinteny sara-droa, ary ny teny fandrasana.",
        "transmission": [
          "Famerenana an-tsoratra ny lisitry ny lesona efa natao",
          "Fanoratana fehezanteny mitambatra mampiasa mpisolo isa iray sy teny fandrasana iray",
          "Fanadihadiana mitambatra am-pokonolona"
        ],
        "exercices": [
          "Ampiasao mpisolo isa iray sy teny fandrasana iray amin'ny fehezanteny iray → Corrigé : fehezanteny feno sy marina, ohatra 'Nividy telefaonina roa aho.'",
          "Inona no atao hoe teny fandrasana? → Corrigé : teny nindramina avy amin'ny teny vahiny ampiasaina amin'ny teny malagasy"
        ]
      },
      {
        "matiere": "LANGAGE",
        "topic": "Bilan oral — Présenter un itinéraire de voyage",
        "approche": "Synthétiser les acquis oraux du trimestre sur le thème du voyage : chaque élève présente un itinéraire complet (départ, moyen de transport, destination).",
        "transmission": [
          "Rappel des structures orales apprises sur le thème du voyage",
          "Modélisation par l'enseignant d'un itinéraire complet à l'oral",
          "Présentation individuelle d'un itinéraire par chaque élève (3-4 phrases)",
          "Correction collective des présentations"
        ],
        "exercices": [
          "Présente oralement un itinéraire complet en 3 phrases (départ, transport, destination) → Corrigé : 3 phrases correctement construites et cohérentes entre elles",
          "Quel moyen de transport choisirais-tu pour un long voyage et pourquoi ? → Corrigé : réponse orale cohérente avec justification"
        ]
      },
      {
        "matiere": "LECTURE",
        "topic": "Bilan — Les retrouvailles p.130 et synthèse des textes du voyage",
        "approche": "Réviser le texte 'Les retrouvailles' p.130 et faire la synthèse de tous les textes du trimestre sur le thème du voyage.",
        "transmission": [
          "Lecture silencieuse de rappel du texte 'Les retrouvailles' p.130",
          "Questions de compréhension sur ce texte",
          "Tableau récapitulatif collectif des textes lus sur le thème du voyage (titre, personnage principal, lieu)",
          "Discussion collective : quel texte a préféré la classe et pourquoi"
        ],
        "exercices": [
          "Qui retrouve qui dans le texte 'Les retrouvailles' ? → Corrigé : réponse fidèle au texte p.130",
          "Cite 3 titres de textes lus sur le thème du voyage ce trimestre → Corrigé : 3 titres parmi ceux étudiés (ex. Guide du voyageur, Mora en voyage, Les retrouvailles)"
        ]
      },
      {
        "matiere": "VOCABULAIRE",
        "topic": "Bilan — Vocabulaire du voyage",
        "approche": "Faire la synthèse du champ lexical du voyage vu ce trimestre (préparatifs, transports en ville, documents officiels).",
        "transmission": [
          "Rappel collectif de tout le vocabulaire du voyage vu depuis janvier (documents, transports, préparatifs)",
          "Classement du vocabulaire en 3 catégories au tableau",
          "Exercice écrit récapitulatif : compléter un court texte avec les mots appropriés"
        ],
        "exercices": [
          "Classe ces mots en 3 catégories (documents / transports / préparatifs) : carte d'identité, taxi-brousse, valise → Corrigé : documents = carte d'identité ; transports = taxi-brousse ; préparatifs = valise",
          "Complète : 'Avant de prendre le ..., je vérifie mon billet et ma ...' → Corrigé : 'Avant de prendre le bus, je vérifie mon billet et ma valise.'"
        ]
      },
      {
        "matiere": "GRAMMAIRE",
        "topic": "Bilan — Tous les compléments circonstanciels et les types de phrase",
        "approche": "Synthétiser les compléments circonstanciels (but, cause, conséquence) et les types de phrase (affirmative/négative, active/passive) vus ce trimestre.",
        "transmission": [
          "Rappel collectif des 3 compléments circonstanciels avec leurs questions et mots-outils",
          "Rappel des types de phrase (affirmative/négative, active/passive)",
          "Exercice écrit mêlant l'identification des 3 C.C. et la transformation de phrases",
          "Correction collective"
        ],
        "exercices": [
          "Identifie le C.C. : 'Elle voyage pour découvrir le pays.' → Corrigé : C.C de but (pour découvrir le pays)",
          "Identifie le C.C. : 'Le vol a été annulé à cause de la pluie.' → Corrigé : C.C de cause (à cause de la pluie)",
          "Transforme à la forme négative : 'Il aime voyager.' → Corrigé : 'Il n'aime pas voyager.'"
        ]
      },
      {
        "matiere": "ORTHOGRAPHE",
        "topic": "Bilan — Dictée récapitulative (homophones et ponctuation)",
        "approche": "Faire une dictée bilan mêlant les homophones étudiés (et/est/a/à, est/ait/ai) et la ponctuation du début d'année, sur le thème du voyage.",
        "transmission": [
          "Rappel rapide des règles de remplacement des homophones et des signes de ponctuation",
          "Dictée d'un court texte de 4 phrases sur le thème du voyage",
          "Correction collective avec justification de chaque homophone et signe de ponctuation"
        ],
        "exercices": [
          "Dictée : 'Il a préparé sa valise et il est parti à la gare.' → Corrigé : 'Il a préparé sa valise et il est parti à la gare.' (a=avoir, et=conjonction, est=être, à=préposition)",
          "Corrige : 'quand arriveras tu' → Corrigé : 'Quand arriveras-tu ?'"
        ]
      },
      {
        "matiere": "CONJUGAISON",
        "topic": "Bilan — Conditionnel présent et subjonctif présent",
        "approche": "Synthétiser les deux modes étudiés ce mois : le conditionnel présent (être, avoir, aller) et le subjonctif présent (1er groupe).",
        "transmission": [
          "Rappel de la formation du conditionnel présent et du subjonctif présent",
          "Exercice écrit mêlant les deux modes sur des phrases différentes",
          "Correction collective avec tableau comparatif des deux modes"
        ],
        "exercices": [
          "Conjugue 'avoir' au conditionnel présent, 2e personne du singulier : 'Tu ... besoin d'un billet.' → Corrigé : aurais",
          "Conjugue 'voyager' au subjonctif présent, 2e personne du pluriel : 'Il faut que vous ...' → Corrigé : voyagiez"
        ]
      },
      {
        "matiere": "ARITHMÉTIQUE",
        "topic": "Bilan — L'intervalle et les partages inégaux",
        "approche": "Synthétiser les problèmes d'intervalle et les partages inégaux (vus en mars) par des exercices combinés.",
        "transmission": [
          "Rappel des problèmes d'intervalle (chemin ouvert/fermé)",
          "Rappel des partages inégaux (partager une quantité selon un rapport donné)",
          "Exercice combiné mêlant les deux notions dans deux problèmes distincts"
        ],
        "exercices": [
          "Le long d'une allée de 150 m, on plante un arbre tous les 25 m avec un arbre à chaque bout. Combien d'arbres ? → Corrigé : 150÷25=6 intervalles, 6+1=7 arbres",
          "Partage 60 mangues entre deux enfants de sorte que le premier ait le double du second → Corrigé : 20 mangues et 40 mangues (60÷3=20, puis 20 et 2×20=40)"
        ]
      },
      {
        "matiere": "GÉOMÉTRIE",
        "topic": "Bilan — Le cylindre et les surfaces (diminuée/augmentée)",
        "approche": "Synthétiser le calcul des surfaces du cylindre avec les notions de surface diminuée et surface augmentée vues en mars.",
        "transmission": [
          "Rappel des formules du cylindre (SB, SL, ST)",
          "Rappel des notions de surface diminuée (on retire une partie) et surface augmentée (on ajoute une partie)",
          "Exercice combiné : calcul de la surface totale d'un cylindre puis d'une figure avec surface augmentée"
        ],
        "exercices": [
          "Un cylindre a un rayon de 3 cm et une hauteur de 6 cm. Calcule sa surface totale → Corrigé : SB=3,14×9=28,26 cm² ; SL=2×3,14×3×6=113,04 cm² ; ST=113,04+2×28,26=169,56 cm²",
          "Un rectangle de 60 cm² voit sa surface augmentée de 15 cm². Quelle est sa nouvelle surface ? → Corrigé : 60+15=75 cm²"
        ]
      },
      {
        "matiere": "MESURE",
        "topic": "Bilan — Volume et mesure de capacité",
        "approche": "Synthétiser les correspondances volume/capacité avec la mesure de volume vue en février.",
        "transmission": [
          "Rappel du tableau de correspondance volume/capacité",
          "Rappel du calcul de volume d'un solide simple (cube, parallélépipède)",
          "Exercice combiné : calculer un volume puis le convertir en litres"
        ],
        "exercices": [
          "Un cube a une arête de 10 cm. Calcule son volume, puis exprime-le en litres → Corrigé : volume = 10×10×10 = 1000 cm³ = 1 L",
          "Un réservoir de forme parallélépipédique mesure 2 dm × 1 dm × 1 dm. Combien de litres contient-il ? → Corrigé : 2×1×1=2 dm³ = 2 L"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "Pile / Environnement",
        "approche": "Découvrir le fonctionnement simple d'une pile électrique et sensibiliser à la protection de l'environnement (déchets, recyclage).",
        "transmission": [
          "Observation d'une pile électrique et présentation simple : elle produit de l'électricité par réaction chimique",
          "Expérience simple : allumer une petite ampoule avec une pile si le matériel est disponible",
          "Discussion collective sur les gestes de protection de l'environnement (ne pas jeter les piles usagées n'importe où, trier les déchets)",
          "Exercice écrit de vérification"
        ],
        "exercices": [
          "À quoi sert une pile ? → Corrigé : à produire de l'électricité pour faire fonctionner un appareil",
          "Pourquoi ne faut-il pas jeter les piles usagées n'importe où ? → Corrigé : parce qu'elles polluent l'environnement (contiennent des produits chimiques dangereux)",
          "Cite un geste pour protéger l'environnement → Corrigé : ex. trier les déchets, ne pas jeter les ordures dans la nature (valiny mety samihafa)"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "Révision — L'industrie (bilan)",
        "approche": "Faire la synthèse des 3 activités économiques étudiées en mars-avril : l'artisanat, les mines/énergies, et l'industrie.",
        "transmission": [
          "Rappel collectif des 3 secteurs : artisanat, mines/énergies, industrie",
          "Tableau comparatif au tableau : mode de production, exemples, lieux",
          "Exercice écrit de classement"
        ],
        "exercices": [
          "Classe ces activités : fabrication de paniers à la main, extraction de saphir, usine textile → Corrigé : artisanat = fabrication de paniers ; mines = extraction de saphir ; industrie = usine textile",
          "Quelle est la différence principale entre l'artisanat et l'industrie ? → Corrigé : l'artisanat se fait à la main en petite quantité, l'industrie se fait en usine en grande quantité"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Famerenana lehibe — Repoblika IV, fikambanana ary daty iraisam-pirenena",
        "approche": "Famintinana ny lesona telo nianarana nanomboka ny Martsa : ny Repoblika IV, ny fikambanana iraisam-pirenena, ary ny daty iraisam-pirenena.",
        "transmission": [
          "Famerenana an-tsoratra ny lisitry ny lesona telo",
          "Fanontaniana mitambatra mampifandray ireo lesona telo",
          "Fanoratana famintinana fohy iray"
        ],
        "exercices": [
          "Rahoviana no natsangana ny Repoblika IV eto Madagasikara? → Corrigé : valiny araka ny lesona natao (taona nanorenana ny Repoblika IV)",
          "Tanisao daty iraisam-pirenena iray sy fikambanana iraisam-pirenena iray nianaranao → Corrigé : ohatra, 1 Mey (daty) sy fikambanana iraisam-pirenena iray voatanisa tao amin'ny lesona Martsa"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Bilan — Vivre ensemble et lutte contre la discrimination",
        "approche": "Manao famintinana ny lesona rehetra momba ny fiaraha-monina sy ny ady amin'ny fanavakavahana nianarana ity taona ity.",
        "transmission": [
          "Famerenana an-bava ny lesona rehetra momba ny fifanampiana sy ny fanajana ny hafa",
          "Fifampiresahana am-pokonolona : ahoana no tokony ho fiaraha-monina tsara ao an-tsekoly sy an-tanàna",
          "Fanoratana fehezanteny farany mamintina ny hafatra lehibe"
        ],
        "exercices": [
          "Soraty fehezanteny iray mamintina ny lanjan'ny fanajana ny hafa → Corrigé : fehezanteny feno sy marina, ohatra 'Tokony hifanaja isika rehetra, na inona na inona fahasamihafana.'",
          "Tanisao fihetsika roa mampiseho fiaraha-monina tsara → Corrigé : ohatra, fifanampiana sy fifanajana (valiny mety samihafa)"
        ]
      },
      {
        "matiere": "ANGLAIS",
        "topic": "Bilan — Date, Time, Transport and Opposites",
        "approche": "Synthétiser le vocabulaire anglais vu depuis janvier : la date et l'heure, les moyens de transport, et les mots contraires.",
        "transmission": [
          "Rappel collectif du vocabulaire des dates, de l'heure, des transports et des contraires",
          "Jeu de révision : question rapide sur chaque thème à tour de rôle",
          "Exercice écrit récapitulatif mêlant les 4 thèmes"
        ],
        "exercices": [
          "Traduis : 'Quel jour sommes-nous ? Nous sommes lundi.' → Corrigé : 'What day is it? It is Monday.'",
          "Donne le contraire de 'big' → Corrigé : 'small'",
          "Complète : 'The plane leaves at 9 ... the morning.' → Corrigé : 'in'"
        ]
      }
    ]
  }
];

const MAI_8EME = [
  {
    "n": 1,
    "dateDebut": "2026/05/04",
    "theme": "Bilan de l'année — révision par matière",
    "sous": "Retour sur les lohahevitra nianarana tamin'ny volana septambra ka hatramin'ny desambra",
    "matieres": [
      {
        "matiere": "VAKITENY",
        "topic": "Famerenana ny lahatsoratra 'Madio izay', 'I Fano' sy 'Ray aman-dreny'",
        "approche": "Mamerina ireo lahatsoratra voalohan'ny taona (fahadiovana, i Fano, ny ray aman-dreny) mba hanamafisana ny fahaizana mamaky sy mahatakatra alohan'ny fanadinana.",
        "transmission": [
          "Famerenana fohy ny votoatin'ireo lahatsoratra telo voalaza",
          "Famakiam-panjifa mangina nataon'ny mpianatra amin'ny fizarana takelaka nofidina",
          "Fanontaniana fahatakarana miompana amin'ny olona sy ny toe-javatra tao amin'ireo lahatsoratra",
          "Famakiana mafy misafidy andalana nataon'ny mpianatra maromaro",
          "Famintinana am-bava ny lahatsoratra tsirairay avy"
        ],
        "exercices": [
          "Iza i Fano ao amin'ny tantara novakiana tamin'ny volana septambra? → Corrigé : ilay mpianatra voaresaka tao amin'ny lahatsoratra 'I Fano' p.12",
          "Inona ny adidin'ny ray aman-dreny voaresaka ao amin'ny lahatsoratra 'Ray aman-dreny'? → Corrigé : mikarakara sy manabe ny zanany",
          "Nahoana no ilaina ny fahadiovana araka ny lahatsoratra 'Madio izay'? → Corrigé : mba tsy ho marary sy hisy fahasalamana tsara"
        ]
      },
      {
        "matiere": "F/B",
        "topic": "Famerenana — ny fahadiovana, ny fanatanjahantena, ny fifandraisana ary ny sekoly",
        "approche": "Manamafy ireo lohahevitra efa niresahana tamin'ny volana septambra ka hatramin'ny novambra momba ny fiainana andavanandro (fahadiovana, fanatanjahantena, ankohonana, sekoly).",
        "transmission": [
          "Fifampiresahana am-bava famerenana ny lohahevitra efa hita",
          "Firaketana an-tsoratra ny teny lehibe amin'ny lohahevitra tsirairay",
          "Fanoratana fehezanteny fohy iray isaky ny lohahevitra"
        ],
        "exercices": [
          "Tanisao lohahevitra 3 novakiana nandritra ny fizarana voalohan'ny taona → Corrigé : ohatra, ny fahadiovana, ny fanatanjahantena, ny fifandraisana eo amin'ny ankohonana",
          "Nahoana no ilaina ny fanatanjahantena isan'andro? → Corrigé : mba hahatanjaka sy hahasalama ny tena",
          "Soraty fehezanteny iray milaza ny fahadiovana andavanandro → Corrigé : fehezanteny feno sy marina, ohatra 'Manasa tanana aho alohan'ny sakafo.'"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Famerenana ny marim-piatoana sy ny teny verindroa",
        "approche": "Manamafy ny fampiasana ny marim-piatoana fototra (teboka, faingo, teboka fanontaniana) sy ny fanoratana ny teny miverina indroa nianarana tamin'ny volana septambra.",
        "transmission": [
          "Famerenana ny anjara asan'ny teboka, ny faingo ary ny teboka fanontaniana",
          "Fampiharana amin'ny fehezanteny 3-4 tsy misy marim-piatoana",
          "Famerenana ny teny verindroa (kely kely, mora mora) sy ny hevitra entiny",
          "Fanitsiana am-pokonolona"
        ],
        "exercices": [
          "Ampidiro ny marim-piatoana marina : 'Madio ny sekoly'  → Corrigé : 'Madio ny sekoly.'",
          "Ampiasao ny teny verindroa 'haingana haingana' amin'ny fehezanteny → Corrigé : fehezanteny feno misy 'haingana haingana' ampiasaina marina",
          "Nahoana no miverina indroa ny teny toy ny 'mora mora'? → Corrigé : mba hanamafisana ny hevitra"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Famerenana ny fototeny, ny teny iray tarika ary ny fameno",
        "approche": "Manamafy ny fahaizana mamantatra ny fototeny sy ny teny iray tarika aminy, ary ny fanavahana ny fameno azo foanana amin'ny tsy azo foanana, nianarana tamin'ny volana oktobra sy novambra.",
        "transmission": [
          "Famerenana: inona ny fototeny sy ny teny iray tarika aminy",
          "Fitadiavana teny iray tarika amin'ny fototeny nomena",
          "Famerenana ny fameno azo foanana sy ny fameno tsy azo foanana ao anaty fehezanteny",
          "Fampiharana am-tsoratra"
        ],
        "exercices": [
          "Tondroy ny fototeny ao amin'ny 'fanoratana' → Corrigé : soratra",
          "Manorata teny iray tarika amin'ny fototeny 'vaky' → Corrigé : ohatra, mahavaky, fahavakiana (valiny mety samihafa)",
          "Inona no atao hoe fameno tsy azo foanana? → Corrigé : teny tsy afaka esorina ao amin'ny fehezanteny raha tsy hihena ny hevitra"
        ]
      },
      {
        "matiere": "LANGAGE",
        "topic": "Retour sur le portrait et les vœux — expression orale",
        "approche": "Revenir sur l'expression orale du portrait d'un personnage (Monsieur, elle copie) et sur les échanges de vœux, deux compétences travaillées en septembre-octobre.",
        "transmission": [
          "Rappel oral : comment décrire une personne, comment souhaiter quelque chose",
          "Jeu de rôle : décrire un camarade puis lui souhaiter une bonne journée d'examen",
          "Correction collective des phrases orales"
        ],
        "exercices": [
          "Décris oralement un camarade en 2 phrases → Corrigé : 2 phrases correctes décrivant un trait physique observable",
          "Formule un souhait pour un ami qui va passer un examen → Corrigé : phrase correcte de souhait, ex. 'Je te souhaite bonne chance pour ton examen.'"
        ]
      },
      {
        "matiere": "LECTURE",
        "topic": "Retour sur Inscription scolaire, La leçon de musique et Hygiène et santé",
        "approche": "Revenir sur trois textes majeurs du 1er trimestre pour vérifier que les personnages et les informations essentielles sont bien retenus avant l'examen.",
        "transmission": [
          "Relecture silencieuse d'un extrait de chaque texte",
          "Questions de compréhension écrites sur chaque texte",
          "Comparaison : quel est le sujet de chaque texte (école, musique, santé)",
          "Lecture à voix haute par plusieurs élèves"
        ],
        "exercices": [
          "Que doit apporter l'élève pour s'inscrire, d'après 'Inscription scolaire' ? → Corrigé : réponse fidèle au texte étudié (ex. acte de naissance, bulletin précédent)",
          "De quoi parle le texte 'La leçon de musique' ? → Corrigé : réponse fidèle au texte, ex. un cours de musique à l'école",
          "Cite un conseil d'hygiène donné dans le texte 'Hygiène et santé' → Corrigé : réponse fidèle au texte étudié"
        ]
      },
      {
        "matiere": "VOCABULAIRE",
        "topic": "Bilan — portrait, école et hygiène",
        "approche": "Revoir le vocabulaire accumulé depuis septembre autour du portrait, de la vie scolaire et de l'hygiène.",
        "transmission": [
          "Jeu de rappel rapide : citer des mots de chaque thème",
          "Classement des mots en 3 colonnes : portrait / école / hygiène",
          "Exercice écrit d'association mot-définition"
        ],
        "exercices": [
          "Cite 2 adjectifs pour décrire une personne → Corrigé : ex. grand, gentil (toute paire correcte)",
          "Nomme 3 objets de la classe → Corrigé : cahier, stylo, règle (exemples)",
          "Cite un geste d'hygiène quotidien → Corrigé : se laver les mains, se doucher (exemples)"
        ]
      },
      {
        "matiere": "GRAMMAIRE",
        "topic": "Bilan — GNS/GV, COD/COI et CCT/CCL",
        "approche": "Revoir les trois notions de grammaire du 1er trimestre : le groupe nominal sujet/groupe verbal, les compléments d'objet et les compléments circonstanciels.",
        "transmission": [
          "Rappel rapide de chaque notion avec un exemple au tableau",
          "Exercice mêlant les 3 notions sur un même texte court",
          "Correction collective détaillée"
        ],
        "exercices": [
          "Sépare le GNS et le GV : 'Le directeur salue les élèves.' → Corrigé : GNS = Le directeur ; GV = salue les élèves",
          "Trouve le COD : 'Le directeur salue les élèves.' → Corrigé : les élèves",
          "Trouve le CCL : 'Il range ses papiers dans le tiroir.' → Corrigé : dans le tiroir"
        ]
      },
      {
        "matiere": "ORTHOGRAPHE",
        "topic": "Bilan — ponctuation et homophones et/est, a/à, on/ont, son/sont",
        "approche": "Revoir la ponctuation et les principaux homophones grammaticaux étudiés au 1er trimestre.",
        "transmission": [
          "Rappel des règles de remplacement (est→était, a→avait, ont→avaient, sont→étaient)",
          "Exercice à trous mêlant les 4 homophones",
          "Ponctuation d'un court texte sans ponctuation",
          "Correction collective avec justification"
        ],
        "exercices": [
          "Complète : 'Le directeur ... arrivé ... les élèves ... contents.' → Corrigé : 'Le directeur est arrivé et les élèves sont contents.'",
          "Complète : 'Elle ... une carte d'identité ... un acte de naissance.' → Corrigé : 'Elle a une carte d'identité et un acte de naissance.'",
          "Ponctue : 'Comment t'appelles-tu' → Corrigé : 'Comment t'appelles-tu ?'"
        ]
      },
      {
        "matiere": "CONJUGAISON",
        "topic": "Bilan — être, avoir et le 1er groupe aux 4 temps de l'indicatif",
        "approche": "Revoir la conjugaison de être, avoir et d'un verbe du 1er groupe au présent, à l'imparfait, au futur simple et au passé composé.",
        "transmission": [
          "Rappel du tableau des 4 temps pour être et avoir",
          "Rappel de la terminaison régulière du 1er groupe",
          "Exercice de conjugaison mêlant les 3 verbes aux 4 temps",
          "Correction collective"
        ],
        "exercices": [
          "Conjugue 'être' au futur simple, 1ère personne du singulier : 'Je ... en 9ème l'an prochain.' → Corrigé : serai",
          "Conjugue 'avoir' à l'imparfait, 1ère personne du pluriel : 'Nous ... peur.' → Corrigé : avions",
          "Conjugue 'parler' au passé composé, 2e personne du singulier : 'Tu ... au directeur.' → Corrigé : as parlé"
        ]
      },
      {
        "matiere": "ARITHMÉTIQUE",
        "topic": "Bilan — les nombres jusqu'au milliard et les 4 opérations posées",
        "approche": "Reprendre la lecture, l'écriture et la décomposition des grands nombres (jusqu'au milliard) et vérifier la maîtrise des 4 opérations posées avec ou sans retenue.",
        "transmission": [
          "Rappel de la lecture et l'écriture des nombres jusqu'à 1 milliard",
          "Rappel de la décomposition en classes (milliards, millions, milliers, unités)",
          "Reposer une addition et une soustraction avec retenue",
          "Reposer une multiplication et une division de nombres entiers",
          "Exercice individuel mêlant les 4 opérations",
          "Correction collective"
        ],
        "exercices": [
          "Écris en chiffres : deux milliards trois cent mille → Corrigé : 2 000 300 000",
          "Pose et calcule : 4 526 × 34 → Corrigé : 153 884",
          "Pose et calcule : 8 736 ÷ 24 → Corrigé : 364"
        ]
      },
      {
        "matiere": "GÉOMÉTRIE",
        "topic": "Bilan — les angles et le carré",
        "approche": "Reprendre la mesure et le calcul des angles ainsi que les formules de périmètre, côté et aire du carré, vues au 1er trimestre.",
        "transmission": [
          "Rappel des types d'angles (aigu, droit, obtus) et de leur mesure au rapporteur",
          "Rappel du calcul d'angle supplémentaire et complémentaire",
          "Rappel des formules du carré : périmètre, côté à partir du périmètre, aire",
          "Exercice combinant angle et carré",
          "Correction collective"
        ],
        "exercices": [
          "Un angle mesure 65°. Quel est son complémentaire ? → Corrigé : 90° − 65° = 25°",
          "Calcule l'aire d'un carré de 7 cm de côté → Corrigé : 7 × 7 = 49 cm²",
          "Le périmètre d'un carré est 36 cm. Quelle est la longueur d'un côté ? → Corrigé : 36 ÷ 4 = 9 cm"
        ]
      },
      {
        "matiere": "MESURE",
        "topic": "Bilan — longueur, masse et capacité",
        "approche": "Reprendre les trois grandeurs travaillées durant le 1er trimestre (longueur, masse, capacité) et leurs conversions usuelles.",
        "transmission": [
          "Rappel du tableau de conversion des longueurs (km à mm)",
          "Rappel du tableau de conversion des masses (t à g)",
          "Rappel des unités de capacité (L, cL)",
          "Exercice de conversion mêlant les 3 grandeurs",
          "Correction collective"
        ],
        "exercices": [
          "Convertis : 4,5 km = ... m → Corrigé : 4 500 m",
          "Convertis : 2 500 g = ... kg → Corrigé : 2,5 kg",
          "Un bidon contient 10 L. On en verse 3 L 50 cL. Combien reste-t-il ? → Corrigé : 6 L 50 cL"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "Bilan — le corps humain et ses appareils",
        "approche": "Reprendre les parties du corps et les principaux appareils (digestif, respiratoire, circulatoire) étudiés durant le 1er trimestre.",
        "transmission": [
          "Rappel des grandes parties du corps (tête, tronc, membres)",
          "Rappel du trajet des aliments dans l'appareil digestif",
          "Rappel du trajet de l'air dans l'appareil respiratoire",
          "Rappel du rôle du cœur dans l'appareil circulatoire",
          "Exercice de légende de schémas",
          "Correction collective"
        ],
        "exercices": [
          "Cite les 3 grandes parties du corps humain → Corrigé : la tête, le tronc, les membres",
          "Quel est le rôle de l'estomac dans la digestion ? → Corrigé : il brasse les aliments et commence à les digérer",
          "Quel est le rôle du cœur ? → Corrigé : il pompe le sang dans tout le corps"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "Bilan — la Terre, le globe et le relief de Madagascar",
        "approche": "Reprendre la découverte de la Terre (globe, planisphère) et les grands repères physiques de Madagascar (relief, climat) vus au 1er trimestre.",
        "transmission": [
          "Rappel de la différence entre globe et planisphère",
          "Rappel des grands repères du globe (équateur, pôles)",
          "Rappel du relief de Madagascar (hauts plateaux, côtes)",
          "Rappel des grandes zones climatiques de Madagascar",
          "Exercice de repérage sur une carte muette",
          "Correction collective"
        ],
        "exercices": [
          "Quelle est la différence entre un globe et un planisphère ? → Corrigé : le globe est une représentation en volume, le planisphère est une représentation à plat",
          "Quel type de relief trouve-t-on au centre de Madagascar ? → Corrigé : les hauts plateaux",
          "Quel climat trouve-t-on sur la côte Est de Madagascar ? → Corrigé : un climat tropical humide, avec beaucoup de pluie"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Famerenana — ny niaviana ny Malagasy ka hatramin'ny fanjakana samihafa",
        "approche": "Mamerina ny niaviana ny Malagasy sy ireo fanjakana lehibe (Betsileo, Sakalava, Betsimisaraka, Merina) nianarana tamin'ny volana septambra ka hatramin'ny desambra.",
        "transmission": [
          "Famerenana ny niaviana ny razamben'ny Malagasy (avy any Azia sy Afrika)",
          "Famerenana ny anaran'ireo fanjakana efa nianarana",
          "Fanoritana taratasy fotoana tsotra mampiseho ny fifandimbiasan'ireo fanjakana",
          "Fanontaniana fahatakarana",
          "Fanitsiana am-pokonolona"
        ],
        "exercices": [
          "Avy aiza avy ny razamben'ny Malagasy, araka ny nianarana? → Corrigé : avy any Azia sy Afrika",
          "Tanisao fanjakana 2 nianaranao tamin'ny fizarana voalohan'ny taona → Corrigé : ohatra, Betsileo, Sakalava, Betsimisaraka, Merina",
          "Iza no mpanjaka nampiray ny tany Imerina? → Corrigé : Andrianampoinimerina"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Famerenana — ny fifanampiana, ny fanajana ny fitsipiky ny sekoly ary ny fifamoivoizana",
        "approche": "Mamerina ny lanjan'ny fifanampiana eo amin'ny mpiara-belona, ny fanajana ny fitsipiky ny sekoly ary ny fitsipika mifehy ny fifamoivoizana nianarana tamin'ny fizarana voalohan'ny taona.",
        "transmission": [
          "Famerenana: nahoana no ilaina ny fifanampiana",
          "Famerenana ireo fitsipiky ny sekoly tokony hajaina",
          "Famerenana ny fitsipika fototra momba ny fifamoivoizana",
          "Fifanakalozan-kevitra am-bava",
          "Fanitsiana am-pokonolona"
        ],
        "exercices": [
          "Inona no soa azo avy amin'ny fifanampiana? → Corrigé : mihamora ny asa, mitombo ny firaisan-kina",
          "Tanisao fitsipika iray tokony hajaina ao an-tsekoly → Corrigé : ohatra, tsy manelingelina ny namana, manaja ny mpampianatra (valiny mety samihafa)",
          "Nahoana no ilaina ny fanajana ny fitsipika mifehy ny fifamoivoizana? → Corrigé : mba tsy hisy loza ho an'ny mpandeha an-tongotra sy ny mpampiasa fiara"
        ]
      },
      {
        "matiere": "ANGLAIS",
        "topic": "Revision — greetings, the body, the family and the colours",
        "approche": "Review the vocabulary and phrases seen during the first term: greetings, body parts, family members and colours.",
        "transmission": [
          "Warm-up: greet each other in English around the circle",
          "Point to a body part, students name it in English",
          "Show a family tree, students name each member",
          "Game: name an object and its colour"
        ],
        "exercices": [
          "How do you greet someone in the morning? → Corrigé : Good morning",
          "Name 3 parts of the body in English → Corrigé : head, arm, leg (examples)",
          "How do you say 'ma sœur' in English? → Corrigé : my sister"
        ]
      }
    ]
  },
  {
    "n": 2,
    "dateDebut": "2026/05/11",
    "theme": "Synthèse — exercices croisés de révision",
    "sous": "Exercices variés mêlant les notions vues en janvier et février",
    "matieres": [
      {
        "matiere": "VAKITENY",
        "topic": "Famerenana ny lahatsoratra momba ny fararano, ny fiompiana ary ny voyage",
        "approche": "Mamerina ireo lahatsoratra momba ny fararano, ny fiompiana ary ny fiaingan'ny fiaramanidina novakiana tamin'ny volana janoary sy febroary.",
        "transmission": [
          "Famerenana fohy ny votoatin'ny lahatsoratra 'Fararano', 'Fiompian-dry Tremo' sy 'Fiaingan'ny fiaramanidina'",
          "Famakiam-panjifa mangina",
          "Fanontaniana fahatakarana",
          "Famakiana mafy nataon'ny mpianatra maromaro"
        ],
        "exercices": [
          "Inona no atao amin'ny vary rehefa masaka, araka ny lahatsoratra 'Fararano'? → Corrigé : jinjaina",
          "Iza no biby voatanisa ao amin'ny lahatsoratra 'Fiompian-dry Tremo'? → Corrigé : valiny araka ny lahatsoratra novakiana (ohatra, omby, akoho)",
          "Inona no zava-nitranga tamin'ny lahatsoratra 'Fiaingan'ny fiaramanidina'? → Corrigé : famintinana marina araka ny lahatsoratra"
        ]
      },
      {
        "matiere": "F/B",
        "topic": "Famerenana — ny karazam-biby fiompy sy ny fitanterana",
        "approche": "Mamerina ny lohahevitra momba ny karazam-biby fiompy, ny doro tanety ary ny fitanterana nianarana tamin'ny volana janoary sy febroary.",
        "transmission": [
          "Fifampiresahana am-bava famerenana ireo lohahevitra",
          "Firaketana an-tsoratra ny teny lehibe",
          "Fanoratana fehezanteny fohy"
        ],
        "exercices": [
          "Tanisao biby fiompy 2 nianaranao → Corrigé : ohatra, omby, akoho, kisoa (valiny mety samihafa)",
          "Inona no loza mety hitranga noho ny doro tanety? → Corrigé : fahasimban'ny tany sy ny zava-maniry",
          "Tanisao fitaovam-pitanterana iray → Corrigé : ohatra, fiara, sarety (valiny mety samihafa)"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Famerenana ny mpanoritra I/i, ny entimilaza mandidy ary ny mpisolo tena",
        "approche": "Manamafy ny fanavahana ny mpanoritra 'I' ho an'ny anarana manokana sy 'i' hafa, ary ny fampiasana ny entimilaza mandidy nianarana tamin'ny janoary.",
        "transmission": [
          "Famerenana ny fampiasana ny mpanoritra I/i",
          "Famerenana ny entimilaza mandidy",
          "Fitadiavana ohatra ao anaty fehezanteny",
          "Fampiharana am-tsoratra"
        ],
        "exercices": [
          "Ampiasao ny mpanoritra marina : '...Fano dia mianatra tsara.' → Corrigé : 'I Fano dia mianatra tsara.'",
          "Manorata fehezanteny mandidy iray mampiasa entimilaza → Corrigé : valiny manokana, ohatra 'Mba manasà tanana ianao.'",
          "Nahoana no manana litera lehibe ny 'I' eo alohan'ny anarana? → Corrigé : satria mpanoritra anarana manokana izy io"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Famerenana ny entimilaza, ny lazaina ary ny mpisolo fotoana",
        "approche": "Mamerina ny fanavahana ny entimilaza, ny lazaina tsotra sy sosona ary ny mpisolo fotoana nianarana tamin'ny janoary sy febroary.",
        "transmission": [
          "Famerenana: inona ny entimilaza",
          "Famerenana: inona ny lazaina sy ny lazaina sosona",
          "Famerenana ny mpisolo fotoana (rahampitso, omaly, androany)",
          "Fampiharana am-tsoratra"
        ],
        "exercices": [
          "Tondroy ny entimilaza ao amin'ny 'nofidina ho mpitantsoratra izy' → Corrigé : nofidina",
          "Tondroy ny mpisolo fotoana ao amin'ny 'Rahampitso no fanadinana' → Corrigé : rahampitso",
          "Ampio lazaina sosona iray ny fehezanteny 'Mianatra ny mpianatra' → Corrigé : valiny manokana mifanaraka amin'ny fitsipika nianarana"
        ]
      },
      {
        "matiere": "LANGAGE",
        "topic": "Retour sur le commerce et le voyage — expression orale",
        "approche": "Revenir sur les échanges oraux liés au commerce (Le tailleur fou, faire des courses) et au voyage (Mon frère rêve de voyage) du 2e trimestre.",
        "transmission": [
          "Rappel oral des expressions du commerce (acheter, marchander, le prix)",
          "Rappel oral des expressions du voyage (partir, faire ses bagages)",
          "Jeu de rôle : un dialogue au marché puis un dialogue de préparatif de voyage"
        ],
        "exercices": [
          "Formule une phrase pour demander le prix d'un objet → Corrigé : phrase correcte, ex. 'Combien coûte ce cahier ?'",
          "Cite 2 choses à préparer avant un voyage → Corrigé : ex. faire sa valise, préparer ses papiers"
        ]
      },
      {
        "matiere": "LECTURE",
        "topic": "Retour sur Le cyclone, Devant la vitrine et Guide du voyageur",
        "approche": "Revenir sur trois textes du 2e trimestre pour vérifier la compréhension des faits et du vocabulaire du commerce et du voyage.",
        "transmission": [
          "Relecture silencieuse d'un extrait de chaque texte",
          "Questions de compréhension écrites",
          "Comparaison des 3 textes : où se déroule chaque histoire ?",
          "Lecture à voix haute"
        ],
        "exercices": [
          "Que provoque le cyclone, d'après le texte étudié ? → Corrigé : réponse fidèle au texte (dégâts, pluies violentes...)",
          "Que regarde-t-on 'devant la vitrine', d'après le texte ? → Corrigé : réponse fidèle au texte, ex. des marchandises exposées",
          "Que conseille le 'Guide du voyageur' ? → Corrigé : réponse fidèle au texte étudié"
        ]
      },
      {
        "matiere": "VOCABULAIRE",
        "topic": "Bilan — le commerce, le quartier et les transports",
        "approche": "Revoir le vocabulaire du commerce, du quartier et des moyens de transport en ville, vus en janvier et février.",
        "transmission": [
          "Jeu de devinettes sur les métiers du commerce",
          "Nommer les lieux du quartier (marché, magasin, gare)",
          "Nommer des moyens de transport en ville",
          "Exercice écrit de classement"
        ],
        "exercices": [
          "Nomme 3 mots liés au commerce → Corrigé : marchand, prix, publicité (exemples)",
          "Cite un lieu important du quartier → Corrigé : le marché, la gare (exemples)",
          "Nomme 2 moyens de transport en ville → Corrigé : bus, taxi (exemples)"
        ]
      },
      {
        "matiere": "GRAMMAIRE",
        "topic": "Bilan — adverbes interrogatifs, pronoms possessifs et démonstratifs",
        "approche": "Revoir les adverbes interrogatifs (où, quand, comment, pourquoi) et les pronoms possessifs et démonstratifs vus au 2e trimestre.",
        "transmission": [
          "Rappel des adverbes interrogatifs avec exemples",
          "Rappel des pronoms possessifs (le mien, la tienne...)",
          "Rappel des pronoms démonstratifs (celui-ci, celle-là...)",
          "Exercice écrit mêlant les 3 notions"
        ],
        "exercices": [
          "Complète avec un adverbe interrogatif : '... pars-tu en voyage ?' → Corrigé : Quand",
          "Remplace : 'ce cahier' par un pronom possessif si c'est le mien → Corrigé : le mien",
          "Remplace : 'cette vitrine' par un pronom démonstratif → Corrigé : celle-ci (ou celle-là)"
        ]
      },
      {
        "matiere": "ORTHOGRAPHE",
        "topic": "Bilan — les consonnes doubles et les lettres finales muettes",
        "approche": "Revoir l'orthographe des consonnes doubles (acc, aff, app, ll, imm) et les lettres finales muettes vues en janvier.",
        "transmission": [
          "Rappel des mots courants à consonnes doubles",
          "Rappel des lettres finales muettes fréquentes (-d, -t, -s)",
          "Exercice à trous",
          "Correction collective avec justification"
        ],
        "exercices": [
          "Complète : 'Il a ...roché son cahier.' → Corrigé : accroché",
          "Trouve la lettre finale muette de 'petit' → Corrigé : t (on entend 'petite' au féminin)",
          "Écris un mot avec 'app' double → Corrigé : ex. apporter, appareil"
        ]
      },
      {
        "matiere": "CONJUGAISON",
        "topic": "Bilan — les verbes prendre, voir, écrire, aller et les pronominaux",
        "approche": "Revoir la conjugaison des verbes irréguliers étudiés au 2e trimestre (prendre, voir, écrire, aller) et des verbes pronominaux.",
        "transmission": [
          "Rappel des formes irrégulières de chaque verbe au présent",
          "Rappel de la conjugaison pronominale (se laver, se préparer)",
          "Exercice de conjugaison mêlant les verbes",
          "Correction collective"
        ],
        "exercices": [
          "Conjugue 'prendre' au présent, 3e personne du singulier : 'Il ... le bus.' → Corrigé : prend",
          "Conjugue 'aller' au présent, 1ère personne du pluriel : 'Nous ... au marché.' → Corrigé : allons",
          "Conjugue le verbe pronominal 'se préparer' au présent avec 'je' → Corrigé : je me prépare"
        ]
      },
      {
        "matiere": "ARITHMÉTIQUE",
        "topic": "Synthèse — les fractions et le budget familial",
        "approche": "Croiser les opérations sur les fractions (réduction, addition, soustraction, multiplication) et les problèmes de budget familial vus en janvier.",
        "transmission": [
          "Rappel : réduire deux fractions au même dénominateur",
          "Rappel des opérations sur les fractions",
          "Rappel de la méthode pour un problème de budget (revenu, dépense, épargne)",
          "Exercice combinant fraction et budget",
          "Correction collective"
        ],
        "exercices": [
          "Calcule : 2/5 + 1/5 → Corrigé : 3/5",
          "Calcule : 3/4 × 40 → Corrigé : 30",
          "Une famille gagne 400 000 Ar et dépense les 3/4 de cette somme. Combien lui reste-t-il ? → Corrigé : 400 000 × 3/4 = 300 000 Ar dépensés, donc 100 000 Ar restants"
        ]
      },
      {
        "matiere": "GÉOMÉTRIE",
        "topic": "Synthèse — le losange, le cercle et le cube",
        "approche": "Revoir les propriétés du losange, le calcul de la circonférence et de la surface du cercle, ainsi que les faces du cube.",
        "transmission": [
          "Rappel des propriétés du losange",
          "Rappel de la formule de la circonférence (2×π×R) et de la surface du cercle (π×R²)",
          "Rappel du nombre de faces, arêtes et sommets du cube",
          "Exercice combinant les 3 figures",
          "Correction collective"
        ],
        "exercices": [
          "Le rayon d'un cercle est 5 cm. Quelle est sa circonférence ? (π ≈ 3,14) → Corrigé : 2×3,14×5 = 31,4 cm",
          "Combien de faces a un cube ? → Corrigé : 6 faces",
          "Un losange a 4 côtés de 6 cm. Quel est son périmètre ? → Corrigé : 6×4 = 24 cm"
        ]
      },
      {
        "matiere": "MESURE",
        "topic": "Synthèse — les nombres complexes et le volume",
        "approche": "Croiser les opérations sur les nombres complexes (temps, angles) et l'introduction du volume, vues en janvier et février.",
        "transmission": [
          "Rappel de l'addition et la soustraction des nombres complexes (heures, minutes)",
          "Rappel de la multiplication et la division des nombres complexes",
          "Introduction du volume : unité de base le m³",
          "Exercice combinant nombres complexes et volume",
          "Correction collective"
        ],
        "exercices": [
          "Calcule : 3 h 40 min + 2 h 50 min → Corrigé : 6 h 30 min",
          "Calcule : 5 h 20 min × 3 → Corrigé : 16 h",
          "Quelle est l'unité de base du volume ? → Corrigé : le mètre cube (m³)"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "Bilan — maladies, secourisme et les animaux",
        "approche": "Revoir les maladies fréquentes (dysenterie, choléra), les gestes de secourisme et les caractéristiques de quelques animaux vus en janvier.",
        "transmission": [
          "Rappel des causes et de la prévention de la dysenterie et du choléra",
          "Rappel des gestes simples de premiers secours",
          "Rappel des caractéristiques du chat, du chien et du poisson",
          "Exercice de questions-réponses",
          "Correction collective"
        ],
        "exercices": [
          "Comment prévenir le choléra ? → Corrigé : boire de l'eau propre, se laver les mains (exemples)",
          "Que faire en premier si un camarade se blesse ? → Corrigé : rester calme et prévenir un adulte",
          "Cite une caractéristique du poisson → Corrigé : il vit dans l'eau et respire par des branchies"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "Bilan — la population et les activités économiques de Madagascar",
        "approche": "Revoir la croissance de la population, l'exode rural et les grandes activités (agriculture, élevage, pêche) vues en janvier et février.",
        "transmission": [
          "Rappel de la pyramide des âges et de la croissance de la population",
          "Rappel des causes et conséquences de l'exode rural",
          "Rappel des 3 grandes activités économiques : agriculture, élevage, pêche",
          "Exercice écrit d'association",
          "Correction collective"
        ],
        "exercices": [
          "Qu'est-ce que l'exode rural ? → Corrigé : le déplacement de la population des campagnes vers les villes",
          "Cite une cause de l'exode rural → Corrigé : la pauvreté, le manque de travail à la campagne (exemples)",
          "Cite 2 grandes villes de Madagascar → Corrigé : Antananarivo, Toamasina (exemples)"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Famerenana — ny tolom-panafahana ka hatramin'ny tetezamita faharoa",
        "approche": "Mamerina ny dingana lehibe hatramin'ny fahaleovantena ka hatramin'ny Repoblika I sy II, nianarana tamin'ny janoary sy febroary.",
        "transmission": [
          "Famerenana: taona firy no nahazoan'i Madagasikara ny fahaleovantenany",
          "Famerenana ny Repoblika I sy ny Repoblika II",
          "Fanoritana taratasy fotoana famintinana ny dingana ireo",
          "Fanontaniana fahatakarana"
        ],
        "exercices": [
          "Taona firy no nahazoan'i Madagasikara ny fahaleovantenany? → Corrigé : 1960",
          "Iza no filoham-panjakana voalohan'ny Repoblika I? → Corrigé : Philibert Tsiranana",
          "Inona ny atao hoe tetezamita? → Corrigé : fotoana fiovana eo amin'ny fitondrana iray ho amin'ny hafa"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Famerenana — ny sampan-draharaham-panjakana ary ny ady amin'ny fanavakavahana",
        "approche": "Mamerina ny anjara asan'ny sampan-draharaham-panjakana sy ny lanjan'ny ady amin'ny endrim-panavakavahana, nianarana tamin'ny janoary sy febroary.",
        "transmission": [
          "Famerenana: inona avy ny sampan-draharaham-panjakana fantatry ny mpianatra",
          "Famerenana: inona ny atao hoe fanavakavahana",
          "Fifanakalozan-kevitra momba ny fomba fiadiana amin'izany",
          "Fanitsiana am-pokonolona"
        ],
        "exercices": [
          "Tanisao sampan-draharaham-panjakana iray fantatrao → Corrigé : ohatra, ny sekoly, ny hopitaly (valiny mety samihafa)",
          "Inona no atao hoe fanavakavahana? → Corrigé : fitondrana tsy mitovy amin'olona noho ny fahasamihafany",
          "Nahoana no tsy tokony hisy fanavakavahana? → Corrigé : satria mitovy zo sy fahamendrehana ny olona rehetra"
        ]
      },
      {
        "matiere": "ANGLAIS",
        "topic": "Revision — transport, the room, opposites and date and time",
        "approche": "Review vocabulary for means of transport, rooms of a house, opposites and telling the date and time, seen in January and February.",
        "transmission": [
          "Name a means of transport shown on a picture",
          "Name the rooms of a house from a drawing",
          "Game: give the opposite of a word said by the teacher",
          "Practice telling the date and the time"
        ],
        "exercices": [
          "Name 2 means of transport in English → Corrigé : car, bus (examples)",
          "What is the opposite of 'big'? → Corrigé : small",
          "What day is it today? Answer in English → Corrigé : answer using the correct day, e.g. 'It is Monday.'"
        ]
      }
    ]
  },
  {
    "n": 3,
    "dateDebut": "2026/05/18",
    "theme": "Auto-évaluation — repérer ses lacunes",
    "sous": "Tests individuels et auto-correction sur les notions du 3e trimestre",
    "matieres": [
      {
        "matiere": "VAKITENY",
        "topic": "Fitsapana samirery — famerenana ny lahatsoratra 'Famangiana sy sakafo' sy 'Mifindra monina'",
        "approche": "Manao fitsapana an-tsoratra momba ireo lahatsoratra faran'ny taona, mba hahafahan'ny mpianatra mamantatra samirery ny fahalemeny.",
        "transmission": [
          "Famerenana faingana ny votoatin'ny lahatsoratra roa",
          "Fizarana fitsapana an-tsoratra misy fanontaniana 4",
          "Famaliana samirery, tsy misy fanampiana",
          "Fifanakalozana kahie sy fanitsiana am-pokonolona",
          "Fanamarihana ny fahalemena hita"
        ],
        "exercices": [
          "Inona no lohahevitry ny lahatsoratra 'Famangiana sy sakafo'? → Corrigé : famangiana havana miaraka amin'ny fanasana hanina",
          "Nahoana i (mpianatra ao amin'ny lahatsoratra) no nifindra monina, araka ny lahatsoratra 'Mifindra monina'? → Corrigé : valiny araka ny lahatsoratra novakiana",
          "Firy fanontaniana no diso taminao? → Corrigé : valiny manokana araka ny fanitsiana"
        ]
      },
      {
        "matiere": "F/B",
        "topic": "Fitsapana samirery — famintinana ireo lohahevitra momba ny varotra sy ny fitanterana",
        "approche": "Manao fitsapana an-tsoratra fohy momba ny lohahevitra momba ny varotra sy ny fitanterana, mba hamantarana ny fahalemen'ny tsirairay.",
        "transmission": [
          "Fanoratana fanontaniana fohy 3 momba ny varotra sy ny fitanterana",
          "Famaliana samirery",
          "Fifampijerena kahie sy fanitsiana"
        ],
        "exercices": [
          "Inona no ilaina rehefa mividy zavatra ao an-tsena? → Corrigé : vola, fahaizana mifampiraharaha (ohatra)",
          "Tanisao fitaovam-pitanterana iray → Corrigé : valiny manokana, ohatra fiara, sarety",
          "Firy no diso taminao? → Corrigé : valiny manokana"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Fitsapana samirery — filazana ho avy sy mpisolo isa/toerana",
        "approche": "Manao fitsapana an-tsoratra momba ny filazana ho avy (te, -ta) sy ny mpisolo isa/toerana nianarana tamin'ny martsa, mba hamantarana ny fahalemena.",
        "transmission": [
          "Famerenana faingana ny fitsipika roa",
          "Fizarana fitsapana an-tsoratra misy fanontaniana 4",
          "Famaliana samirery",
          "Fanitsiana am-pokonolona miaraka amin'ny corrigé"
        ],
        "exercices": [
          "Ovay ho filazana ho avy : 'Mianatra izy.' → Corrigé : 'Te-hianatra izy.'",
          "Tondroy ny mpisolo toerana ao amin'ny 'Eto no ipetrahako' → Corrigé : eto",
          "Firy diso no hitanao rehefa nampitahainao tamin'ny corrigé? → Corrigé : valiny manokana"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Fitsapana samirery — mpisolo isa, mpamaritra sy mpisolo toerana",
        "approche": "Manao fitsapana an-tsoratra momba ny mpisolo isa, ny mpamaritra sy mpisolo toerana ary ny tsirinteny sara-droa nianarana tamin'ny martsa.",
        "transmission": [
          "Famerenana faingana ny fitsipika telo",
          "Fizarana fitsapana an-tsoratra",
          "Famaliana samirery",
          "Fanitsiana am-pokonolona"
        ],
        "exercices": [
          "Tondroy ny mpisolo isa ao amin'ny 'Izy no faharoa nandeha' → Corrigé : faharoa",
          "Tondroy ny mpamaritra toerana ao amin'ny 'Ny boky eto' → Corrigé : eto",
          "Manorata teny iray misy tsirinteny sara-droa → Corrigé : valiny manokana araka ny fitsipika nianarana"
        ]
      },
      {
        "matiere": "LANGAGE",
        "topic": "Auto-évaluation — le récit de voyage à l'oral",
        "approche": "Faire réaliser un test oral individuel où chaque élève raconte un court épisode de voyage, pour qu'il repère lui-même ses points faibles à l'oral.",
        "transmission": [
          "Rappel des critères d'un bon récit oral (clarté, ordre chronologique)",
          "Chaque élève raconte oralement 3 phrases sur un voyage imaginaire ou vécu",
          "Les autres élèves notent une force et une faiblesse observée",
          "Bilan collectif des difficultés fréquentes"
        ],
        "exercices": [
          "Raconte oralement en 3 phrases un voyage imaginaire → Corrigé : évaluation orale individuelle, respect de la chronologie",
          "Cite un critère d'un bon récit oral → Corrigé : la clarté, l'ordre des événements (exemples)"
        ]
      },
      {
        "matiere": "LECTURE",
        "topic": "Auto-évaluation — compréhension du texte 'Mora en voyage'",
        "approche": "Faire réaliser un test de compréhension écrite individuel sur le texte 'Mora en voyage' pour un repérage autonome des lacunes en lecture.",
        "transmission": [
          "Relecture silencieuse individuelle du texte",
          "Distribution d'un test de 4 questions de compréhension",
          "Réalisation individuelle sans aide",
          "Auto-correction à l'aide du corrigé distribué",
          "Bilan collectif des difficultés fréquentes"
        ],
        "exercices": [
          "Qui est Mora dans le texte étudié ? → Corrigé : réponse fidèle au texte 'Mora en voyage'",
          "Où Mora se rend-elle dans l'histoire ? → Corrigé : réponse fidèle au texte étudié",
          "Combien de questions as-tu réussies sur 4 ? → Corrigé : valeur individuelle vérifiée avec le corrigé"
        ]
      },
      {
        "matiere": "VOCABULAIRE",
        "topic": "Auto-évaluation — vocabulaire du 3e trimestre",
        "approche": "Faire réaliser un test individuel mêlant le vocabulaire du voyage, du commerce et de la vie sociale accumulé depuis janvier.",
        "transmission": [
          "Distribution d'un test de 6 mots à définir ou utiliser dans une phrase",
          "Réalisation individuelle",
          "Auto-correction avec le corrigé",
          "Bilan collectif des mots les moins connus"
        ],
        "exercices": [
          "Définis le mot 'itinéraire' → Corrigé : le chemin suivi pour aller d'un lieu à un autre",
          "Utilise le mot 'marchand' dans une phrase → Corrigé : phrase correcte employant le mot",
          "Combien de mots sur 6 as-tu correctement définis ? → Corrigé : valeur individuelle vérifiée"
        ]
      },
      {
        "matiere": "GRAMMAIRE",
        "topic": "Auto-évaluation — le complément circonstanciel de cause et de conséquence",
        "approche": "Faire réaliser un test individuel sur la reconnaissance du complément circonstanciel de cause et de conséquence dans une phrase, vus en mars.",
        "transmission": [
          "Rappel très bref : la cause répond à 'pourquoi ?', la conséquence répond à 'donc, avec quel résultat ?'",
          "Distribution d'un test individuel de 3 phrases à analyser",
          "Réalisation individuelle sans aide",
          "Auto-correction avec le corrigé",
          "Bilan collectif des erreurs fréquentes"
        ],
        "exercices": [
          "Trouve le complément de cause : 'Il est resté à la maison à cause de la pluie.' → Corrigé : à cause de la pluie",
          "Trouve le complément de conséquence : 'Il a tellement couru qu'il est essoufflé.' → Corrigé : qu'il est essoufflé",
          "Combien de phrases sur 3 as-tu correctement analysées ? → Corrigé : valeur individuelle vérifiée"
        ]
      },
      {
        "matiere": "ORTHOGRAPHE",
        "topic": "Auto-évaluation — l'orthographe des homophones et sons appris dans l'année",
        "approche": "Faire réaliser un test individuel mêlant les principaux homophones (et/est, on/ont, ces/ses, leur/leurs) étudiés durant l'année.",
        "transmission": [
          "Rappel très bref des règles de remplacement",
          "Distribution d'un test de 6 phrases à trous",
          "Réalisation individuelle sans aide",
          "Auto-correction avec le corrigé",
          "Bilan collectif des erreurs fréquentes"
        ],
        "exercices": [
          "Complète : '... élèves prennent ... cahiers.' → Corrigé : 'Ces élèves prennent leurs cahiers.'",
          "Complète : 'Il ... beaucoup d'amis ... il ... est content.' → Corrigé : 'Il a beaucoup d'amis et il en est content.'",
          "Combien d'erreurs as-tu commises sur 6 phrases ? → Corrigé : valeur individuelle vérifiée"
        ]
      },
      {
        "matiere": "CONJUGAISON",
        "topic": "Auto-évaluation — le conditionnel présent et le subjonctif présent",
        "approche": "Faire réaliser un test individuel sur la conjugaison au conditionnel présent (être, avoir, aller) et au subjonctif présent du 1er groupe, vus en mars.",
        "transmission": [
          "Rappel très bref des terminaisons du conditionnel et du subjonctif présent",
          "Distribution d'un test de 4 conjugaisons",
          "Réalisation individuelle",
          "Auto-correction avec le corrigé",
          "Bilan collectif des erreurs fréquentes"
        ],
        "exercices": [
          "Conjugue 'être' au conditionnel présent avec 'je' → Corrigé : je serais",
          "Conjugue 'aller' au conditionnel présent avec 'elle' → Corrigé : elle irait",
          "Conjugue 'parler' au subjonctif présent avec 'que tu' → Corrigé : que tu parles"
        ]
      },
      {
        "matiere": "ARITHMÉTIQUE",
        "topic": "Auto-évaluation — partages inégaux et l'intervalle",
        "approche": "Faire réaliser un test individuel sur les problèmes de partage inégal et la notion d'intervalle, vus en mars et avril.",
        "transmission": [
          "Rappel très bref de la méthode de partage inégal (proportions)",
          "Rappel de la notion d'intervalle (nombre d'éléments sur un segment)",
          "Distribution d'un test de 3 problèmes",
          "Réalisation individuelle",
          "Auto-correction avec le corrigé"
        ],
        "exercices": [
          "Partage 90 000 Ar entre 2 personnes dans le rapport 2:3. Combien reçoit chacune ? → Corrigé : 36 000 Ar et 54 000 Ar",
          "Sur une route de 100 m, on plante un arbre tous les 20 m, en commençant au début. Combien d'arbres ? → Corrigé : 6 arbres",
          "Combien de problèmes sur 3 as-tu réussis ? → Corrigé : valeur individuelle vérifiée"
        ]
      },
      {
        "matiere": "GÉOMÉTRIE",
        "topic": "Auto-évaluation — surfaces diminuée/augmentée et le cylindre",
        "approche": "Faire réaliser un test individuel sur le calcul de surfaces diminuées ou augmentées et sur les éléments du cylindre (SL, SB, ST), vus en mars et avril.",
        "transmission": [
          "Rappel très bref des méthodes de calcul de surface diminuée/augmentée",
          "Rappel des éléments du cylindre (surface latérale, base, totale)",
          "Distribution d'un test de 3 exercices",
          "Réalisation individuelle",
          "Auto-correction avec le corrigé"
        ],
        "exercices": [
          "Un terrain rectangulaire de 20 m sur 15 m perd une bande de 2 m de large sur la longueur. Quelle est la nouvelle surface ? → Corrigé : (20−2)×15 = 270 m²",
          "Qu'appelle-t-on la surface latérale d'un cylindre ? → Corrigé : la surface de la partie courbe (sans les 2 bases)",
          "Combien d'exercices sur 3 as-tu réussis ? → Corrigé : valeur individuelle vérifiée"
        ]
      },
      {
        "matiere": "MESURE",
        "topic": "Auto-évaluation — correspondance entre volume et capacité",
        "approche": "Faire réaliser un test individuel sur la correspondance entre unités de volume et de capacité (1 dm³ = 1 L), vue en février et mars.",
        "transmission": [
          "Rappel très bref de la correspondance 1 dm³ = 1 L = 1 000 cm³",
          "Distribution d'un test de 3 conversions",
          "Réalisation individuelle",
          "Auto-correction avec le corrigé"
        ],
        "exercices": [
          "Convertis : 2 dm³ = ... L → Corrigé : 2 L",
          "Convertis : 500 cm³ = ... cL → Corrigé : 50 cL",
          "Combien de conversions sur 3 as-tu réussies ? → Corrigé : valeur individuelle vérifiée"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "Auto-évaluation — la graine, les états de la matière et le magnétisme",
        "approche": "Faire réaliser un test individuel sur la germination, les états de la matière et le magnétisme (métal/aimant), vus en mars et avril.",
        "transmission": [
          "Rappel très bref des 3 conditions de germination (eau, air, chaleur)",
          "Rappel des 3 états de la matière (solide, liquide, gazeux)",
          "Rappel du principe de l'aimant qui attire le fer",
          "Distribution d'un test de 3 questions",
          "Auto-correction avec le corrigé"
        ],
        "exercices": [
          "Cite les 3 conditions nécessaires à la germination d'une graine → Corrigé : l'eau, l'air, la chaleur",
          "Donne un exemple de chaque état de la matière → Corrigé : solide = une pierre, liquide = l'eau, gazeux = l'air",
          "Quel métal est attiré par un aimant ? → Corrigé : le fer"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "Auto-évaluation — l'artisanat, les mines et l'industrie",
        "approche": "Faire réaliser un test individuel sur les activités économiques secondaires de Madagascar (artisanat, mines, industrie), vues en mars et avril.",
        "transmission": [
          "Rappel très bref de la différence entre artisanat et industrie",
          "Rappel de quelques ressources minières de Madagascar (saphir, chrome...)",
          "Distribution d'un test de 3 questions",
          "Auto-correction avec le corrigé"
        ],
        "exercices": [
          "Qu'est-ce que l'artisanat ? → Corrigé : une production réalisée à la main, en petite quantité",
          "Cite une ressource minière de Madagascar → Corrigé : le saphir, le chrome, le nickel (exemples)",
          "Quelle est la différence entre l'artisanat et l'industrie ? → Corrigé : l'artisanat est une production manuelle à petite échelle, l'industrie utilise des machines pour produire en grande quantité"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Fitsapana samirery — tetezamita III, Repoblika IV ary ny fikambanana iraisam-pirenena",
        "approche": "Manao fitsapana an-tsoratra momba ny tetezamita fahatelo, ny Repoblika IV ary ny fikambanana iraisam-pirenena misy an'i Madagasikara, nianarana tamin'ny martsa.",
        "transmission": [
          "Famerenana faingana ny votoatiny",
          "Fizarana fitsapana an-tsoratra misy fanontaniana 3",
          "Famaliana samirery",
          "Auto-fanitsiana miaraka amin'ny corrigé"
        ],
        "exercices": [
          "Inona no atao hoe Repoblika IV? → Corrigé : ny fitondrana faha-4 teo amin'ny tantaran'i Madagasikara",
          "Tanisao fikambanana iraisam-pirenena iray misy an'i Madagasikara → Corrigé : ohatra, ny ONU, ny Union Africaine (valiny mety samihafa)",
          "Firy fanontaniana no diso taminao? → Corrigé : valiny manokana araka ny fanitsiana"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Fitsapana samirery — famintinana ireo soatoavina nianarana nandritra ny taona",
        "approche": "Manao fitsapana an-tsoratra mitambatra amin'ireo soatoavina lehibe nianarana nandritra ny taona (fifanampiana, fanajana, fahaizamiaina).",
        "transmission": [
          "Fizarana fitsapana an-tsoratra misy fanontaniana 3 mitambatra ireo soatoavina",
          "Famaliana samirery",
          "Auto-fanitsiana miaraka amin'ny corrigé"
        ],
        "exercices": [
          "Tanisao soatoavina iray nianaranao nandritra ny taona → Corrigé : valiny manokana, ohatra ny fifanampiana, ny fanajana",
          "Nahoana no ilaina ny mampihatra ireo soatoavina ireo amin'ny fiainana andavanandro? → Corrigé : mba hisy fiaraha-monina milamina sy mifanaja",
          "Firy fanontaniana no diso taminao? → Corrigé : valiny manokana"
        ]
      },
      {
        "matiere": "ANGLAIS",
        "topic": "Revision — self-test on numbers, colours, family, clothes and transport",
        "approche": "Have students take an individual written test mixing the main vocabulary sets seen during the year to identify their own weak points.",
        "transmission": [
          "Distribute a written test with 6 short questions mixing numbers, colours, family, clothes and transport",
          "Students complete the test individually without help",
          "Self-correction using the answer sheet",
          "Collective review of the most common mistakes"
        ],
        "exercices": [
          "Write the number after forty-nine → Corrigé : fifty",
          "Name a colour and a piece of clothing → Corrigé : examples, e.g. 'a red shirt'",
          "How many questions out of 6 did you get right? → Corrigé : individual answer checked against the answer sheet"
        ]
      }
    ]
  },
  {
    "n": 4,
    "dateDebut": "2026/05/25",
    "theme": "Consolidation finale avant les examens",
    "sous": "Dernière révision intensive mêlant toutes les notions de l'année et conseils pour l'examen",
    "matieres": [
      {
        "matiere": "VAKITENY",
        "topic": "Famerenana farany — famintinana ny lahatsoratra rehetra novakiana nandritra ny taona",
        "approche": "Mamintina ny lahatsoratra rehetra novakiana hatramin'ny septambra ka hatramin'ny martsa, mba hanamafisana farany ny fahaizana mamaky sy mahatakatra mialoha ny fanadinana.",
        "transmission": [
          "Firaketana an-tsoratra ny lisitry ny lahatsoratra rehetra novakiana nandritra ny taona",
          "Fisafidianana lahatsoratra iray tiana indrindra sy fanamarinana ny antony",
          "Famakiana mafy farany nataon'ny mpianatra maromaro",
          "Toro-hevitra farany momba ny fomba famakiana mazava mandritra ny fanadinana"
        ],
        "exercices": [
          "Tanisao lahatsoratra 3 novakiana nandritra ny taona → Corrigé : ohatra, Madio izay, I Fano, Ray aman-dreny, Fararano (valiny manokana araka ny nianarana)",
          "Inona ny lahatsoratra tianao indrindra ary nahoana? → Corrigé : valiny manokana voamarina",
          "Inona no tokony hotandremana rehefa mamaky mafy eo anatrehan'ny mpampianatra? → Corrigé : famakiana mazava, feo azo re, tsy misy tafintohina"
        ]
      },
      {
        "matiere": "F/B",
        "topic": "Famerenana farany — fitambaran'ireo lohahevitra nianarana nandritra ny taona",
        "approche": "Mamintina ireo lohahevitra rehetra momba ny fiainana andavanandro (fahadiovana, sekoly, fianakaviana, varotra, fitanterana) nianarana nandritra ny taona.",
        "transmission": [
          "Firaketana an-tsoratra ny lisitry ny lohahevitra rehetra nianarana",
          "Fifanakalozan-kevitra farany momba izay tadidin'ny mpianatra tsara indrindra",
          "Toro-hevitra farany mialoha ny fanadinana"
        ],
        "exercices": [
          "Tanisao lohahevitra 4 nianaranao nandritra ny taona → Corrigé : ohatra, ny fahadiovana, ny sekoly, ny fianakaviana, ny varotra (valiny manokana)",
          "Inona ny lohahevitra sarotra indrindra taminao? → Corrigé : valiny manokana voamarina",
          "Inona no tokony hataonao mialoha ny fanadinana mba tsy hanadino ny voambolana? → Corrigé : mamerina mamaky ny kahie sy mampiasa ny voambolana amin'ny fehezanteny"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Fanatsoratra farany — dictée mitambatra fitsipika nianarana nandritra ny taona",
        "approche": "Manao dictée iray mitambatra amin'ireo fitsipika rehetra nianarana nandritra ny taona (marim-piatoana, teny verindroa, mpanoritra, filazana ho avy), toy ny endriky ny fanadinana.",
        "transmission": [
          "Famerenana faobe ireo fitsipika rehetra nianarana nandritra ny taona",
          "Famakiana mangina ny lahatsoratra hodikaina",
          "Fanoratana ny dictée am-pilaminana amin'ny fetra ora tahaka ny fanadinana",
          "Fifanakalozana kahie ho an'ny fanitsiana",
          "Fanitsiana am-pokonolona miaraka amin'ny mpampianatra"
        ],
        "exercices": [
          "Adikaso: 'Ny fianarana no lova tsy mety very, koa ilaina ny fikirizana.' → Corrigé : fanoratana madio, marim-piatoana marina",
          "Firy diso no hitanao tao amin'ny dictée nosoratanao? → Corrigé : valiny manokana araka ny fanitsiana",
          "Inona no tsy maintsy jerena farany alohan'ny hanolorana ny taratasy? → Corrigé : ny marim-piatoana sy ny fanoratana madio"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Famerenana faobe — ny fitsipi-teny rehetra nianarana nandritra ny taona",
        "approche": "Mitambatra ny fototeny, ny fameno, ny entimilaza, ny lazaina ary ny mpisolo isa/toerana ao anaty fanombanana farany mialoha ny fanadinana.",
        "transmission": [
          "Famerenana faobe ireo fitsipi-teny rehetra nianarana nandritra ny taona",
          "Fitadiavana ohatra momba ny fitsipika tsirairay ao anaty lahatsoratra iray feno",
          "Fitsapana an-tsoratra mitambatra ireo fitsipika ireo",
          "Fanitsiana am-pokonolona"
        ],
        "exercices": [
          "Ao amin'ny 'Nianatra tsara ny mpianatra sady faingana no marani-tsaina', tondroy ny fototeny amin'ny 'faingana' → Corrigé : haingana",
          "Manorata fehezanteny iray misy filazana ho avy → Corrigé : valiny manokana, ohatra 'Te-hianatra tsara aho.'",
          "Tondroy ny mpisolo toerana ao amin'ny 'Eto no misy ny sekoly' → Corrigé : eto"
        ]
      },
      {
        "matiere": "LANGAGE",
        "topic": "Consolidation finale — s'exprimer à l'oral dans toutes les situations de l'année",
        "approche": "Faire un dernier passage oral où chaque élève choisit une situation vue dans l'année (portrait, vœux, commerce, voyage) et s'exprime devant la classe.",
        "transmission": [
          "Rappel des grandes situations d'expression orale de l'année",
          "Chaque élève choisit et prépare 2-3 phrases sur une situation au choix",
          "Passage individuel devant la classe",
          "Conseils pour bien s'exprimer le jour de l'examen (articulation, volume de la voix)"
        ],
        "exercices": [
          "Choisis une situation (portrait, vœux, commerce ou voyage) et exprime-toi en 3 phrases → Corrigé : évaluation orale individuelle, phrases correctes et audibles",
          "Cite un conseil pour bien parler à l'oral le jour de l'examen → Corrigé : parler clairement et pas trop vite, articuler"
        ]
      },
      {
        "matiere": "LECTURE",
        "topic": "Consolidation finale — entraînement type examen en compréhension écrite",
        "approche": "Faire passer un entraînement chronométré de compréhension écrite sur un texte nouveau, dans les conditions proches de l'examen final.",
        "transmission": [
          "Rappel de la méthode : lire le texte 2 fois, repérer les mots-clés des questions",
          "Distribution d'un texte court inconnu avec 4 questions, chronométré (15 minutes)",
          "Réalisation individuelle dans le temps imparti",
          "Correction collective détaillée",
          "Conseils pour le jour de l'examen (gestion du temps)"
        ],
        "exercices": [
          "As-tu terminé les 4 questions dans le temps donné ? → Corrigé : valeur individuelle vérifiée",
          "Quelle méthode utilises-tu pour répondre à une question de compréhension ? → Corrigé : relire le passage du texte concerné avant de répondre",
          "Cite un conseil pour gérer son temps pendant l'examen → Corrigé : répondre d'abord aux questions les plus faciles"
        ]
      },
      {
        "matiere": "VOCABULAIRE",
        "topic": "Consolidation finale — bilan général du vocabulaire de l'année",
        "approche": "Dresser un bilan général de tout le vocabulaire vu dans l'année à travers un jeu de révision rapide.",
        "transmission": [
          "Jeu de rappel rapide en équipes : citer un mot par thème (école, santé, commerce, voyage, famille)",
          "Classement collectif des mots par thème au tableau",
          "Exercice écrit final de synthèse"
        ],
        "exercices": [
          "Nomme un mot pour chacun des 4 thèmes suivants : école, santé, commerce, voyage → Corrigé : réponse individuelle, ex. cahier, remède, marchand, valise",
          "Quel thème de vocabulaire connais-tu le mieux ? → Corrigé : réponse individuelle",
          "Quel thème dois-tu encore travailler ? → Corrigé : réponse individuelle basée sur le bilan"
        ]
      },
      {
        "matiere": "GRAMMAIRE",
        "topic": "Consolidation finale — problèmes de grammaire mêlant toutes les notions de l'année",
        "approche": "Résoudre un exercice de synthèse combinant GNS/GV, COD/COI, pronoms, adverbes interrogatifs et compléments circonstanciels, dans les conditions de l'examen.",
        "transmission": [
          "Rappel express de toutes les notions de grammaire de l'année",
          "Distribution d'un texte support avec des questions mêlant toutes les notions",
          "Réalisation individuelle chronométrée",
          "Correction collective détaillée",
          "Conseils pour le jour de l'examen"
        ],
        "exercices": [
          "Dans 'Le voyageur prend son billet à la gare.', trouve le GNS, le COD et le CCL → Corrigé : GNS = Le voyageur ; COD = son billet ; CCL = à la gare",
          "Remplace 'ce billet' par un pronom démonstratif → Corrigé : celui-ci",
          "Pose la question qui correspond à la réponse 'à la gare' → Corrigé : 'Où prend-il son billet ?'"
        ]
      },
      {
        "matiere": "ORTHOGRAPHE",
        "topic": "Consolidation finale — dictée-bilan et relecture méthodique",
        "approche": "Faire une dictée-bilan mêlant tous les pièges orthographiques de l'année (homophones, ponctuation, consonnes doubles) suivie d'une relecture méthodique.",
        "transmission": [
          "Rappel express des principaux pièges orthographiques de l'année",
          "Dictée d'un texte de synthèse chronométrée",
          "Relecture individuelle méthodique (majuscules, ponctuation, homophones, accords)",
          "Correction collective",
          "Conseils pour relire efficacement sa copie le jour de l'examen"
        ],
        "exercices": [
          "Adikaso : 'Les élèves et leurs parents sont contents des résultats.' → Corrigé : dictée correcte, homophones 'et/leurs/sont' bien orthographiés",
          "Combien d'erreurs as-tu trouvées en te relisant seul, avant la correction collective ? → Corrigé : valeur individuelle",
          "Cite 2 points à vérifier systématiquement en te relisant → Corrigé : les majuscules et la ponctuation, les accords sujet-verbe (exemples)"
        ]
      },
      {
        "matiere": "CONJUGAISON",
        "topic": "Consolidation finale — bilan des temps et modes vus dans l'année",
        "approche": "Reprendre l'ensemble des temps et modes étudiés dans l'année (présent, imparfait, futur, passé composé, conditionnel, subjonctif) dans un exercice de synthèse chronométré.",
        "transmission": [
          "Rappel express de tous les temps et modes vus dans l'année",
          "Tableau récapitulatif collectif au tableau",
          "Exercice individuel chronométré mêlant plusieurs temps sur un même verbe",
          "Correction collective détaillée",
          "Conseils pour reconnaître le temps demandé le jour de l'examen"
        ],
        "exercices": [
          "Conjugue 'partir' au présent, à l'imparfait et au futur simple avec 'il' → Corrigé : il part / il partait / il partira",
          "Conjugue 'aller' au conditionnel présent avec 'nous' → Corrigé : nous irions",
          "Quel indice dans une phrase permet de reconnaître l'imparfait ? → Corrigé : une action qui dure ou se répète dans le passé (souvent avec 'chaque jour', 'autrefois')"
        ]
      },
      {
        "matiere": "ARITHMÉTIQUE",
        "topic": "Consolidation finale — problèmes mêlant toutes les notions de l'année",
        "approche": "Résoudre des problèmes de synthèse combinant grands nombres, 4 opérations, fractions, partages et budget, dans les conditions proches de l'examen final.",
        "transmission": [
          "Rappel des méthodes de résolution de problème (lire, identifier les données, choisir l'opération)",
          "Résolution guidée d'un problème combinant plusieurs notions",
          "Résolution individuelle chronométrée de 2 problèmes",
          "Correction collective détaillée",
          "Repérage des pièges classiques (unités, ordre des opérations)",
          "Conseils pour le jour de l'examen"
        ],
        "exercices": [
          "Un marchand achète 40 sacs de riz de 25 kg à 1 200 Ar le kg. Quelle dépense totale ? → Corrigé : 40×25=1 000 kg ; 1 000×1 200=1 200 000 Ar",
          "Partage 3/5 d'un champ de 750 m² en 3 parts égales. Quelle est la surface de chaque part ? → Corrigé : 750×3/5=450 m² ; 450÷3=150 m²",
          "Une famille gagne 500 000 Ar et dépense 420 000 Ar. Quelle épargne réalise-t-elle ? → Corrigé : 80 000 Ar"
        ]
      },
      {
        "matiere": "GÉOMÉTRIE",
        "topic": "Consolidation finale — problème combinant plusieurs figures de l'année",
        "approche": "Clore la géométrie de l'année avec un problème d'examen combinant carré, rectangle, cercle et solides (cube, cylindre).",
        "transmission": [
          "Rappel express des formules de périmètre, aire et volume vues dans l'année",
          "Résolution guidée d'un problème combinant 2 figures",
          "Résolution individuelle chronométrée",
          "Correction collective détaillée",
          "Conseils pour le jour de l'examen (précision des instruments)"
        ],
        "exercices": [
          "Un jardin carré de 10 m de côté est entouré d'une allée circulaire de rayon 8 m à son centre. Quelle est l'aire du carré ? → Corrigé : 10×10=100 m²",
          "Calcule le volume d'un cube d'arête 4 cm → Corrigé : 4×4×4=64 cm³",
          "Un rectangle mesure 12 cm sur 7 cm. Quel est son périmètre ? → Corrigé : 2×(12+7)=38 cm"
        ]
      },
      {
        "matiere": "MESURE",
        "topic": "Consolidation finale — problèmes de mesure combinée",
        "approche": "Résoudre des problèmes complexes combinant longueur, masse, capacité, volume et nombres complexes, dans des conditions proches de l'examen final.",
        "transmission": [
          "Rappel des méthodes de résolution de problèmes de mesure",
          "Résolution guidée d'un problème combinant 2 grandeurs",
          "Résolution individuelle chronométrée de 2 problèmes",
          "Correction collective détaillée",
          "Repérage des pièges (unités à convertir avant de calculer)",
          "Conseils pour le jour de l'examen"
        ],
        "exercices": [
          "Un sac de riz de 25 kg coûte 30 000 Ar. Quel est le prix d'1 kg ? → Corrigé : 1 200 Ar",
          "On remplit un bidon de 8 L avec des bols de 20 cL. Combien de bols faut-il ? → Corrigé : 40 bols",
          "Un trajet de 4 h 30 min commence à 6 h 15. À quelle heure se termine-t-il ? → Corrigé : 10 h 45"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "Consolidation finale — bilan général des sciences de l'année",
        "approche": "Dresser un bilan général des connaissances usuelles vues dans l'année (corps humain, maladies, animaux, matière) à travers un grand jeu de questions-réponses.",
        "transmission": [
          "Jeu de questions-réponses en équipes couvrant les grands thèmes de l'année",
          "Repérage collectif des thèmes les mieux et les moins bien maîtrisés",
          "Exercice écrit final de synthèse",
          "Conseils pour réviser efficacement les sciences avant l'examen"
        ],
        "exercices": [
          "Cite un appareil du corps humain étudié dans l'année → Corrigé : l'appareil digestif, respiratoire ou circulatoire (exemples)",
          "Cite une maladie étudiée et un moyen de la prévenir → Corrigé : ex. le choléra, prévenu en buvant de l'eau propre",
          "Quel est le rôle d'un aimant ? → Corrigé : il attire les objets en fer"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "Consolidation finale — bilan général de la géographie de Madagascar",
        "approche": "Dresser un bilan général de la géographie de Madagascar vue dans l'année (relief, climat, population, activités économiques) avant l'examen.",
        "transmission": [
          "Rappel express de tous les thèmes géographiques de l'année",
          "Exercice de carte muette de synthèse (relief, grandes villes, activités)",
          "Correction collective",
          "Conseils pour réviser la géographie avant l'examen"
        ],
        "exercices": [
          "Cite 2 types de relief de Madagascar → Corrigé : les hauts plateaux, les côtes (exemples)",
          "Cite les 3 grandes activités économiques de Madagascar vues dans l'année → Corrigé : l'agriculture, l'élevage, la pêche (ou l'artisanat, les mines, l'industrie)",
          "Place sur une carte muette la capitale Antananarivo → Corrigé : placement correct au centre des hauts plateaux"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Famerenana farany — famintinana ny tantaran'i Madagasikara hatramin'ny niaviana ka hatramin'ny ankehitriny",
        "approche": "Mamintina ny dingana lehibe rehetra amin'ny tantaran'i Madagasikara nianarana nandritra ny taona, hatramin'ny niaviana ny Malagasy ka hatramin'ny fikambanana iraisam-pirenena.",
        "transmission": [
          "Fanoritana taratasy fotoana lehibe mitambatra ny dingana rehetra nianarana",
          "Fifanakalozan-kevitra: inona ny dingana tsy hay hadinoina",
          "Fanontaniana fahatakarana farany",
          "Toro-hevitra farany mialoha ny fanadinana"
        ],
        "exercices": [
          "Tanisao dingana 4 lehibe amin'ny tantaran'i Madagasikara nianaranao nandritra ny taona → Corrigé : ohatra, niaviana ny Malagasy, fanjakana samihafa, fanjanahantany, fahaleovantena",
          "Taona firy no nahazoan'i Madagasikara ny fahaleovantenany? → Corrigé : 1960",
          "Iza no mpanjaka nampiray ny tany Imerina? → Corrigé : Andrianampoinimerina"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Famerenana farany — fitambaran'ny soatoavina rehetra nianarana nandritra ny taona",
        "approche": "Mamintina ny soatoavina rehetra nianarana nandritra ny taona (fifanampiana, fanajana, fahaizamiaina, fiarovana ny tontolo iainana) mialoha ny fanadinana.",
        "transmission": [
          "Firaketana an-tsoratra ny lisitry ny soatoavina rehetra nianarana",
          "Fifanakalozan-kevitra farany: soatoavina inona no tena ilaina eo amin'ny fiainana",
          "Toro-hevitra farany momba ny fitondrantena tsara mialoha ny fanadinana"
        ],
        "exercices": [
          "Tanisao soatoavina 3 nianaranao nandritra ny taona → Corrigé : ohatra, ny fifanampiana, ny fanajana, ny fahaizamiaina",
          "Inona ny soatoavina tena ilainao indrindra eo amin'ny fiainanao andavanandro? → Corrigé : valiny manokana voamarina",
          "Nahoana no ilaina ny mampihatra ireo soatoavina ireo na dia any ivelan'ny sekoly aza? → Corrigé : mba hisy fiaraha-monina milamina sy mifanaja hatrany"
        ]
      },
      {
        "matiere": "ANGLAIS",
        "topic": "Consolidation finale — mock test mixing all the vocabulary and structures of the year",
        "approche": "Have students take a final timed mock test mixing greetings, numbers, vocabulary and simple structures learned throughout the year, in exam-like conditions.",
        "transmission": [
          "Quick reminder of all major vocabulary sets studied during the year",
          "Distribute a timed mock test with 6 mixed questions",
          "Students complete the test individually within the time limit",
          "Collective correction with detailed explanations",
          "Tips for exam day: read the question twice, manage your time"
        ],
        "exercices": [
          "Greet your teacher and say your name in English → Corrigé : 'Good morning, my name is ...'",
          "Write the number thirty-seven in English → Corrigé : thirty-seven",
          "Name 2 members of your family and 2 colours in English → Corrigé : examples, e.g. 'mother, brother' and 'red, blue'"
        ]
      }
    ]
  }
];

const JUIN_8EME = [
  {
    "n": 1,
    "dateDebut": "2026/06/01",
    "theme": "Révision finale 1 : synthèse générale avant les examens",
    "sous": "Reprise globale des grands textes, notions et thèmes de l'année dans les 18 matières",
    "matieres": [
      {
        "matiere": "VAKITENY",
        "topic": "Famerenana lahatsoratra — ny fiainana an-tsekoly sy ny fianakaviana (Madio izay, I Fano, Ray aman-dreny)",
        "approche": "Mamerina mamaky sy mamintina ireo lahatsoratra telo voalohany narenina tamin'ny volana Septambra, mba hanamarinana ny fitadidian'ny mpianatra ny votoatiny alohan'ny fanadinana farany.",
        "transmission": [
          "Famerenana tsotra ny votoatin'ny lahatsoratra 'Madio izay', 'I Fano' ary 'Ray aman-dreny'",
          "Famakiana mangina fintina isaky ny lahatsoratra",
          "Fanontaniana fahatakarana am-bava momba ny olona sy ny toe-javatra ao amin'ny tsirairay",
          "Fampitahana ny lohahevitra telo (fahadiovana, tantara olona, ny ray aman-dreny)",
          "Fanoratana valin-teny fohy an-tsoratra"
        ],
        "exercices": [
          "Iza i Fano ao amin'ny lahatsoratra novakiana tamin'ny Septambra? → Corrigé : ilay mpianatra tantarain'ny lahatsoratra 'I Fano' p.12",
          "Inona no adidin'ny ray aman-dreny voalaza ao amin'ny lahatsoratra 'Ray aman-dreny'? → Corrigé : mikarakara sy mitaiza ny zanany",
          "Nahoana no ilaina ny fahadiovana araka ny lahatsoratra 'Madio izay'? → Corrigé : mba tsy ho marary sy hisy fahasalamana tsara"
        ]
      },
      {
        "matiere": "F/B",
        "topic": "Famerenana lohahevitra — fahadiovana, fanatanjahantena, fifandraisana ao amin'ny ankohonana",
        "approche": "Mamintina ireo lohahevitra telo nodinihina tamin'ny trimestre voalohany, mba hanamafisana ny fahaizana mamorona fehezanteny mifandray amin'ny lohahevitra iray nomena.",
        "transmission": [
          "Famerenana am-bava ny hevi-dehibe amin'ny lohahevitra tsirairay (fahadiovana, fanatanjahantena, fifandraisana)",
          "Fanoratana fehezanteny 2 isaky ny lohahevitra",
          "Fifampiresahana : ahoana no ifandraisan'ny lohahevitra telo ireo amin'ny fiainana andavanandro",
          "Fanitsiana am-pokonolona ny fehezanteny nosoratana"
        ],
        "exercices": [
          "Tanisao fihetsika iray mampiseho fahadiovana → Corrigé : ohatra, manasa tanana alohan'ny sakafo",
          "Soraty fehezanteny iray milaza nahoana ilaina ny fanatanjahantena → Corrigé : fehezanteny feno, ohatra 'Ilaina ny fanatanjahantena mba hahasalama.'",
          "Inona no fifandraisana tsara tokony hisy eo amin'ny mpianakavy? → Corrigé : fifankatiavana sy fifanajana"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Famerenana — mari-piatoana, teny verindroa, ny hoy/hono",
        "approche": "Manangona indray ireo fitsipika telo lehibe nianarana tamin'ny Septambra amin'ny alalan'ny fanovozan-kevitra sy fampiharana an-tsoratra.",
        "transmission": [
          "Famerenana ny mari-piatoana efatra nianarana (teboka, faingo, teboka fanontaniana, teboka roa)",
          "Famerenana ny teny verindroa sy ny heviny (fanamafisana)",
          "Famerenana ny fampiasana ny 'hoy' sy 'hono' amin'ny tenin'olona",
          "Fampiharana an-tsoratra amin'ny fehezanteny nomena",
          "Fanitsiana am-pokonolona"
        ],
        "exercices": [
          "Ampidiro ny mari-piatoana marina : 'Aiza ianao' → Corrigé : 'Aiza ianao ?'",
          "Ampiasao ny teny verindroa 'mora mora' amin'ny fehezanteny → Corrigé : fehezanteny feno mampiasa marina ny teny verindroa",
          "Ovay ho fehezanteny misy 'hoy' : Nilaza ny mpampianatra fa tsara ny asanao → Corrigé : 'Tsara ny asanao,' hoy ny mpampianatra."
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Famerenana — fehezanteny sy lantom-peo, andianteny, reniteny/zanateny",
        "approche": "Mamerina ny fototry ny fitsipi-teny nianarana tamin'ny Septambra, mba hanamafisana ny fototra alohan'ny fanadinam-panjakana.",
        "transmission": [
          "Famerenana ny fehezanteny milaza sy manontany ary ny lantom-peo mifandraika",
          "Famerenana ny andian-teny sy ny reniteny/zanateny",
          "Fanadihadiana am-tsoratra amin'ny teny sy fehezanteny samihafa",
          "Fanitsiana am-pokonolona"
        ],
        "exercices": [
          "Tondroy ny reniteny ao amin'ny teny 'fianakaviana' → Corrigé : i, a, a, a, i, a",
          "Ovay ho fehezanteny manontany : 'Tonga ny fianakaviana.' → Corrigé : 'Tonga ve ny fianakaviana?'",
          "Inona no atao hoe andian-teny? → Corrigé : teny maromaro mitambatra hitondra hevitra iray"
        ]
      },
      {
        "matiere": "LANGAGE",
        "topic": "Synthèse orale — les textes du 1er trimestre (Monsieur, elle copie / Je vole, tu voles)",
        "approche": "Reprendre à l'oral les situations et le vocabulaire des premiers textes de l'année pour consolider l'expression orale avant l'examen.",
        "transmission": [
          "Rappel oral collectif des personnages et situations de 'Monsieur, elle copie' et 'Je vole, tu voles'",
          "Jeu de questions-réponses rapides sur ces deux textes",
          "Chaque élève reformule oralement une scène en 2-3 phrases",
          "Correction immédiate de la construction des phrases"
        ],
        "exercices": [
          "Résume oralement en 2 phrases la situation du texte 'Monsieur, elle copie' → Corrigé : 2 phrases fidèles au texte étudié en septembre",
          "De qui parle le texte 'Je vole, tu voles' ? → Corrigé : réponse fidèle au texte étudié"
        ]
      },
      {
        "matiere": "LECTURE",
        "topic": "Synthèse : Inscription scolaire, Le nouveau directeur, J'ai une carte d'identité",
        "approche": "Relire rapidement ces trois textes du premier trimestre et répondre à des questions de compréhension globale pour préparer l'examen.",
        "transmission": [
          "Relecture silencieuse d'un extrait de chacun des 3 textes",
          "Questions de compréhension écrites, une par texte",
          "Correction collective immédiate",
          "Rappel du vocabulaire encore hésitant"
        ],
        "exercices": [
          "Que doit apporter l'élève pour s'inscrire, d'après 'Inscription scolaire' ? → Corrigé : réponse fidèle au texte (ex. acte de naissance)",
          "Qui arrive à l'école dans 'Le nouveau directeur' ? → Corrigé : le nouveau directeur",
          "Quelles informations figurent sur la carte d'identité du texte étudié ? → Corrigé : nom, prénom, date de naissance (selon le texte)"
        ]
      },
      {
        "matiere": "VOCABULAIRE",
        "topic": "Synthèse : le portrait d'un personnage et le document officiel",
        "approche": "Réactiver le champ lexical du portrait physique/moral et des documents officiels vus au premier trimestre.",
        "transmission": [
          "Jeu de rappel rapide : citer un mot par champ lexical (portrait / document officiel)",
          "Classement collectif de mots mélangés",
          "Exercice écrit : compléter des phrases avec le mot juste",
          "Correction collective"
        ],
        "exercices": [
          "Classe ces mots : grand, identité, gentil, document → Corrigé : portrait = grand, gentil ; document officiel = identité, document",
          "Que signifie le mot 'identité' ? → Corrigé : ce qui permet de reconnaître une personne (nom, prénom, date de naissance...)"
        ]
      },
      {
        "matiere": "GRAMMAIRE",
        "topic": "Synthèse : GNS/GV, COD/COI, CCT/CCL",
        "approche": "Reprendre en un seul passage les trois notions de grammaire de la phrase vues au premier trimestre, pour vérifier qu'elles sont bien distinguées.",
        "transmission": [
          "Rappel du GNS et du GV dans une phrase",
          "Rappel du COD et du COI (avec ou sans préposition)",
          "Rappel du CCT et du CCL (quand ? où ?)",
          "Exercice écrit : analyser 4 phrases complètes (GNS, GV, COD/COI, CCT/CCL)",
          "Correction collective"
        ],
        "exercices": [
          "Analyse : 'Hier, le directeur a salué les élèves dans la cour.' → Corrigé : GNS=le directeur ; GV=a salué les élèves dans la cour ; COD=les élèves ; CCT=Hier ; CCL=dans la cour",
          "Trouve le COI : 'Elle parle à ses parents.' → Corrigé : à ses parents"
        ]
      },
      {
        "matiere": "ORTHOGRAPHE",
        "topic": "Synthèse : ponctuation, indicateurs de temps/lieu, et/est/a/à",
        "approche": "Reprendre les trois points d'orthographe du premier trimestre pour consolider avant l'entraînement chronométré de la semaine prochaine.",
        "transmission": [
          "Rappel des signes de ponctuation et de leur usage",
          "Rappel des indicateurs de temps et de lieu",
          "Rappel de la règle et/est et a/à (remplacement par était/avait)",
          "Exercice à trous mêlant les trois notions",
          "Correction collective"
        ],
        "exercices": [
          "Complète : 'Elle ... une carte d'identité ... un acte de naissance.' → Corrigé : 'Elle a une carte d'identité et un acte de naissance.'",
          "Ponctue : 'Comment t'appelles-tu' → Corrigé : 'Comment t'appelles-tu ?'"
        ]
      },
      {
        "matiere": "CONJUGAISON",
        "topic": "Synthèse : être, avoir et le 1er groupe aux 4 temps de l'indicatif",
        "approche": "Reprendre la conjugaison de base (présent, imparfait, futur simple, passé composé) avant d'aborder les verbes plus difficiles la semaine prochaine.",
        "transmission": [
          "Rappel du tableau des 4 temps pour être, avoir et un verbe du 1er groupe",
          "Exercice écrit de conjugaison sur les 3 verbes, aux 4 temps",
          "Correction collective avec tableau récapitulatif",
          "Repérage des confusions encore présentes"
        ],
        "exercices": [
          "Conjugue 'parler' au passé composé, 3e personne du singulier : 'Il ... au directeur.' → Corrigé : a parlé",
          "Conjugue 'avoir' à l'imparfait, 1ère personne du pluriel : 'Nous ... peur.' → Corrigé : avions",
          "Conjugue 'être' au futur simple, 2e personne du singulier : 'Tu ... content.' → Corrigé : seras"
        ]
      },
      {
        "matiere": "ARITHMÉTIQUE",
        "topic": "Synthèse : nombres jusqu'à 1 milliard, lecture, écriture, décomposition, comparaison",
        "approche": "Reprendre en un seul passage la numération des grands nombres pour repérer les dernières lacunes avant l'examen final.",
        "transmission": [
          "Rappel des classes de nombres (unités, mille, million, milliard)",
          "Dictée de 4 grands nombres, lecture et écriture en chiffres",
          "Décomposition d'un nombre en classes",
          "Comparaison et rangement d'une série de nombres",
          "Correction collective"
        ],
        "exercices": [
          "Écris en chiffres : deux milliards trois cent quarante-cinq mille → Corrigé : 2 000 345 000",
          "Range du plus petit au plus grand : 456 200 ; 465 200 ; 456 020 → Corrigé : 456 020 ; 456 200 ; 465 200",
          "Décompose 782 400 000 → Corrigé : 7 centaines de millions + 8 dizaines de millions + 2 millions + 4 cent mille"
        ]
      },
      {
        "matiere": "GÉOMÉTRIE",
        "topic": "Synthèse : lignes, angles, périmètre et aire du carré et du rectangle",
        "approche": "Reprendre le vocabulaire et les formules de base avant d'aborder les figures plus complexes la semaine prochaine.",
        "transmission": [
          "Rappel des types de lignes et d'angles (aigu, droit, obtus)",
          "Mesure d'un angle au rapporteur",
          "Rappel des formules de périmètre et d'aire du carré et du rectangle",
          "Exercice de calcul sur 2 figures",
          "Correction collective"
        ],
        "exercices": [
          "Calcule le périmètre et l'aire d'un rectangle de longueur 15 cm et largeur 8 cm → Corrigé : périmètre=2×(15+8)=46 cm ; aire=15×8=120 cm²",
          "Un carré a un côté de 7 cm. Calcule son aire → Corrigé : 7×7=49 cm²"
        ]
      },
      {
        "matiere": "MESURE",
        "topic": "Synthèse : mesures de longueur et de masse",
        "approche": "Consolider les conversions entre unités usuelles de longueur et de masse avant d'aborder les capacités et surfaces la semaine prochaine.",
        "transmission": [
          "Rappel du tableau des unités de longueur (km à mm)",
          "Rappel du tableau des unités de masse (t à g)",
          "Exercice écrit de 4 conversions mixtes",
          "Correction collective"
        ],
        "exercices": [
          "Convertis : 4,2 km = ... m → Corrigé : 4 200 m",
          "Convertis : 3 500 g = ... kg → Corrigé : 3,5 kg",
          "Compare : 2 kg et 1 800 g → Corrigé : 2 kg > 1 800 g"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "Synthèse : le corps humain — parties, articulations et grands appareils",
        "approche": "Reprendre les grandes fonctions du corps humain étudiées dans l'année (squelette, digestif, respiratoire, urinaire, circulatoire) avant les maladies la semaine prochaine.",
        "transmission": [
          "Rappel des grandes parties du corps et du rôle des articulations",
          "Rappel des appareils digestif, respiratoire, urinaire et circulatoire",
          "Jeu-quiz rapide : associer organe et fonction",
          "Correction collective"
        ],
        "exercices": [
          "Quel est le rôle du cœur dans l'appareil circulatoire ? → Corrigé : pomper le sang dans tout le corps",
          "Cite les 3 grandes parties du corps humain → Corrigé : la tête, le tronc, les membres",
          "À quoi servent les articulations ? → Corrigé : elles permettent le mouvement des os entre eux"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "Synthèse : la Terre, le planisphère et Madagascar (carte, relief, climat)",
        "approche": "Reprendre les grands repères du globe et la carte de Madagascar avant d'aborder la population la semaine prochaine.",
        "transmission": [
          "Rappel des pôles, de l'équateur et des continents/océans sur le planisphère",
          "Rappel de la carte de Madagascar (relief, cours d'eau, climat)",
          "Exercice de carte muette à compléter",
          "Correction collective"
        ],
        "exercices": [
          "Sur quel océan se trouve Madagascar ? → Corrigé : l'océan Indien",
          "Cite un grand fleuve de Madagascar → Corrigé : le Mangoky, le Betsiboka ou la Tsiribihina (exemples)",
          "Comment s'appelle la ligne qui sépare la Terre en deux hémisphères égaux ? → Corrigé : l'équateur"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Famintinana — ny vanim-potoana, ny niaviana ny Malagasy ary ireo fanjakana taloha",
        "approche": "Mamerina ny taratasy fotoana sy ny fanjakana lehibe teto Madagasikara (Betsileo, Sakalava, Betsimisaraka, Merina) mialoha ny fitohizan'ny tantara ho hodinihina amin'ny herinandro manaraka.",
        "transmission": [
          "Famerenana ny hevitry ny taona sy taonjato ary ny vanim-potoana lehibe",
          "Famerenana fohy ny niaviana ny Malagasy",
          "Famerenana ireo fanjakana taloha efa nianarana",
          "Fanoratana : mametraka fanjakana 4 amin'ny filaharana"
        ],
        "exercices": [
          "Tondroy fanjakana taloha teto Madagasikara nianarana → Corrigé : Betsileo, Sakalava, Betsimisaraka, Merina",
          "Avy aiza avy ny razamben'ny Malagasy, araka ny nianarana? → Corrigé : avy any Azia sy Afrika (araka ny fampianarana natao)"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Famintinana — fifanampiana, fahaizamiaina ary fifandraisana ao amin'ny ankohonana",
        "approche": "Mamerina ireo soatoavina nianarana tamin'ny trimestre voalohany momba ny fifanampiana sy ny fifandraisana amin'ny havana.",
        "transmission": [
          "Famerenana am-bava ny lanjan'ny fifanampiana eo amin'ny mpiara-belona",
          "Famerenana ny adidin'ny tsirairay ao amin'ny ankohonana",
          "Fifampiresahana momba ny fifandraisana amin'ny havana lavitra",
          "Fanoratana fehezanteny fohy milaza soatoavina iray"
        ],
        "exercices": [
          "Tanisao ohatra fifanampiana iray hitanao tao an-tanànanao → Corrigé : ohatra, fanampiana amin'ny asa tanimbary (valiny mety samihafa)",
          "Iza avy no isan'ny havanao ankoatry ny ray aman-dreninao? → Corrigé : ohatra, dadabe, renibe, zandry, zoky"
        ]
      },
      {
        "matiere": "ANGLAIS",
        "topic": "Synthèse : greetings, classroom objects and numbers",
        "approche": "Reprendre les salutations, le vocabulaire de classe et les nombres appris au premier trimestre avant les autres champs lexicaux la semaine prochaine.",
        "transmission": [
          "Rappel des salutations (Hello, Good morning, Goodbye)",
          "Rappel du vocabulaire du matériel scolaire (book, pen, ruler...)",
          "Comptage collectif rapide",
          "Exercice écrit mêlant les 3 thèmes"
        ],
        "exercices": [
          "Traduis : un cahier → Corrigé : a notebook",
          "Comment dit-on 'bonjour' le matin en anglais ? → Corrigé : 'Good morning'",
          "Écris en lettres : 12 → Corrigé : twelve"
        ]
      }
    ]
  },
  {
    "n": 2,
    "dateDebut": "2026/06/08",
    "theme": "Révision finale 2 : entraînement type examen chronométré",
    "sous": "Exercices dans les conditions de l'examen, sur les 18 matières, deuxième et troisième trimestre",
    "matieres": [
      {
        "matiere": "VAKITENY",
        "topic": "Fanazaran-tena voafetra fotoana — ny fambolena sy ny taom-potoana (Ny lohataona, Ny fahavaratra, Fararano)",
        "approche": "Manao fanontaniana fahatakarana voafetra fotoana momba ireo lahatsoratra momba ny taom-potoana sy ny fambolena, mba hanazatra ny mpianatra amin'ny toe-javatra amin'ny fanadinana.",
        "transmission": [
          "Famerenana fohy ny votoatin'ireo lahatsoratra telo",
          "Famakiana mangina 5 minitra",
          "Fitsapana an-tsoratra voafetra fotoana : fanontaniana 4",
          "Fanitsiana avy hatrany"
        ],
        "exercices": [
          "Inona ny taom-potoana efatra any Madagasikara, araka ny lahatsoratra nianarana? → Corrigé : ny lohataona, ny fahavaratra, ny fararano, ny ririnina",
          "Inona no asa fototra atao amin'ny fararano? → Corrigé : ny fijinjana vary (araka ny lahatsoratra 'Fararano')"
        ]
      },
      {
        "matiere": "F/B",
        "topic": "Fanazaran-tena voafetra fotoana — ny asa sy ny fambolena/fiompiana",
        "approche": "Manao fitsapana an-tsoratra voafetra fotoana momba ny lohahevitra ny voly vary sy ny fiompiana, notohanana tamin'ny trimestre 2 sy 3.",
        "transmission": [
          "Famerenana fohy ny hevitra momba ny voly vary sy ny fiompiana",
          "Fitsapana an-tsoratra voafetra fotoana (15 minitra) : famoronana fehezanteny 4",
          "Fanitsiana avy hatrany"
        ],
        "exercices": [
          "Soraty fehezanteny 2 milaza ny dingan'ny voly vary → Corrigé : fehezanteny feno mifanaraka amin'ny lohahevitra nianarana",
          "Tanisao biby fiompy 2 → Corrigé : ohatra, omby, akoho, kisoa"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Fanazaran-tena voafetra fotoana — teny mitambatra, samihafa/samy hafa, tsi-tovona",
        "approche": "Manazatra ny mpianatra amin'ny fitsapana voafetra fotoana momba ny fitsipika nianarana tamin'ny Oktobra sy Novambra.",
        "transmission": [
          "Famerenana faobe ny fitsipika telo",
          "Fitsapana an-tsoratra voafetra fotoana (10 minitra), fanontaniana 6",
          "Fanitsiana avy hatrany"
        ],
        "exercices": [
          "Ampiasao marina : samihafa sa samy hafa? 'Ny mpianatra dia ___ toetra.' → Corrigé : samihafa",
          "Soraty ny teny 'tsy fandavana' marina araka ny fitsipika nianarana → Corrigé : fanoratana marina araka ny lisitra tsi-tovona"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Fanazaran-tena voafetra fotoana — fototeny, tarika, fameno",
        "approche": "Fitsapana an-tsoratra voafetra fotoana mitambatra ny fitsipika momba ny fototeny sy ny tarika sy ny fameno azo/tsy azo foanana.",
        "transmission": [
          "Famerenana faobe",
          "Fitsapana an-tsoratra 15 minitra, fanontaniana 5",
          "Fanitsiana avy hatrany"
        ],
        "exercices": [
          "Tondroy ny fototeny ao amin'ny teny 'mianatra' → Corrigé : ianatra",
          "Inona ny fameno azo foanana ao amin'ny fehezanteny 'Mianatra (tsara) ny mpianatra'? → Corrigé : tsara"
        ]
      },
      {
        "matiere": "LANGAGE",
        "topic": "Entraînement chronométré — la santé et le voyage (visite médicale, Mon frère rêve de voyage)",
        "approche": "S'entraîner à l'oral, en temps limité, à raconter une situation liée à la santé ou au voyage, comme cela pourrait être demandé à l'examen.",
        "transmission": [
          "Rappel rapide des situations des textes 'Visite médicale au dispensaire' et 'Mon frère rêve de voyage'",
          "Chaque élève raconte en 1 minute chronométrée une situation proche",
          "Correction immédiate de la construction orale"
        ],
        "exercices": [
          "Raconte en 1 minute une visite chez le médecin, à l'oral → Corrigé : récit cohérent en phrases complètes",
          "Pourquoi le frère du texte rêve-t-il de voyager ? → Corrigé : réponse fidèle au texte étudié"
        ]
      },
      {
        "matiere": "LECTURE",
        "topic": "Entraînement chronométré : Hygiène et santé, L'interview d'un infirmier, Guide du voyageur",
        "approche": "S'entraîner à répondre à des questions de compréhension dans un temps limité, sur ces textes du 2ème trimestre.",
        "transmission": [
          "Relecture silencieuse chronométrée (8 minutes)",
          "Questions écrites chronométrées (10 minutes, 5 questions)",
          "Correction immédiate"
        ],
        "exercices": [
          "Que conseille l'infirmier pour rester en bonne santé, d'après le texte ? → Corrigé : réponse fidèle au texte 'L'interview d'un infirmier'",
          "Que doit préparer un voyageur avant de partir, selon le 'Guide du voyageur' ? → Corrigé : réponse fidèle au texte étudié"
        ]
      },
      {
        "matiere": "VOCABULAIRE",
        "topic": "Entraînement chronométré : hygiène et santé, commerce et publicité",
        "approche": "Exercices chronométrés sur le vocabulaire de la santé et du commerce vus au 2ème trimestre.",
        "transmission": [
          "Rappel rapide du vocabulaire",
          "Exercice chronométré (10 minutes) : associer mot et définition",
          "Correction immédiate"
        ],
        "exercices": [
          "Associe : commerçant - ? , publicité - ? → Corrigé : commerçant = personne qui vend ; publicité = annonce pour faire connaître un produit",
          "Cite 2 mots liés à l'hygiène → Corrigé : ex. propreté, savon"
        ]
      },
      {
        "matiere": "GRAMMAIRE",
        "topic": "Entraînement chronométré : pronoms, déterminants et adjectifs (possessifs, démonstratifs, relatifs)",
        "approche": "Exercices chronométrés reprenant les notions de pronoms et déterminants du 2ème trimestre.",
        "transmission": [
          "Rappel express des pronoms personnels, relatifs, possessifs, démonstratifs et des déterminants",
          "Exercice chronométré (15 minutes, 6 phrases)",
          "Correction immédiate"
        ],
        "exercices": [
          "Remplace par un pronom possessif : 'Ce cahier est à moi.' → Corrigé : 'Ce cahier est le mien.'",
          "Complète avec un pronom relatif : 'Le livre ... je lis est intéressant.' → Corrigé : que",
          "Souligne l'adjectif démonstratif : 'Cette maison est grande.' → Corrigé : Cette"
        ]
      },
      {
        "matiere": "ORTHOGRAPHE",
        "topic": "Entraînement chronométré : homophones on/ont, son/sont, ces/ses, leur/leurs, la/là/l'a, se/ce, c'est/s'est",
        "approche": "Série chronométrée mêlant tous les homophones grammaticaux vus au 1er et 2ème trimestre.",
        "transmission": [
          "Rappel des règles de remplacement pour chaque paire d'homophones",
          "Exercice chronométré (15 minutes, 8 phrases à trous)",
          "Correction immédiate avec justification"
        ],
        "exercices": [
          "Complète : 'Les élèves ... leurs cahiers ; ils ... contents.' → Corrigé : 'Les élèves ont leurs cahiers ; ils sont contents.'",
          "Complète : '... est parti ; il ... lavé les mains.' → Corrigé : 'Il est parti ; il s'est lavé les mains.'"
        ]
      },
      {
        "matiere": "CONJUGAISON",
        "topic": "Entraînement chronométré : verbes irréguliers (partir, venir, vouloir, pouvoir, mettre, prendre, voir, écrire, aller)",
        "approche": "Série chronométrée de conjugaison sur les verbes irréguliers vus au 2ème et 3ème trimestre.",
        "transmission": [
          "Rappel rapide des verbes irréguliers du programme",
          "Exercice chronométré (15 minutes, 6 verbes à conjuguer)",
          "Correction collective"
        ],
        "exercices": [
          "Conjugue 'vouloir' au présent, 1ère personne du singulier : 'Je ... partir en voyage.' → Corrigé : veux",
          "Conjugue 'prendre' au passé composé, 3e personne du pluriel : 'Ils ... le taxi-brousse.' → Corrigé : ont pris",
          "Conjugue 'aller' au présent, 2e personne du pluriel : 'Vous ... à l'école.' → Corrigé : allez"
        ]
      },
      {
        "matiere": "ARITHMÉTIQUE",
        "topic": "Entraînement chronométré : opérations sur les fractions et les nombres décimaux",
        "approche": "Série chronométrée d'exercices sur les fractions et les décimaux, comme lors d'un examen.",
        "transmission": [
          "Rappel des techniques (+,-,x,: sur fractions et décimaux)",
          "Série chronométrée de 8 calculs (15 minutes)",
          "Correction immédiate ligne par ligne"
        ],
        "exercices": [
          "Calcule : 3/4 + 1/4 → Corrigé : 1 (ou 4/4)",
          "Calcule : 12,5 × 4 → Corrigé : 50",
          "Calcule : 2/3 de 900 → Corrigé : 600"
        ]
      },
      {
        "matiere": "GÉOMÉTRIE",
        "topic": "Entraînement chronométré : triangle, trapèze, parallélogramme, losange, cercle",
        "approche": "Série chronométrée de calculs de périmètre et d'aire sur les figures du 2ème trimestre.",
        "transmission": [
          "Rappel des formules pour chaque figure",
          "Exercice chronométré (20 minutes) : un calcul par figure",
          "Correction immédiate"
        ],
        "exercices": [
          "Aire d'un triangle de base 10 cm et hauteur 6 cm → Corrigé : 10×6÷2=30 cm²",
          "Périmètre d'un cercle de rayon 5 cm (π≈3,14) → Corrigé : 2×3,14×5=31,4 cm",
          "Aire d'un trapèze de grande base 12 cm, petite base 8 cm, hauteur 5 cm → Corrigé : (12+8)×5÷2=50 cm²"
        ]
      },
      {
        "matiere": "MESURE",
        "topic": "Entraînement chronométré : mesures de capacité, de surface et mesures agraires",
        "approche": "Série chronométrée de conversions sur les capacités, surfaces et mesures agraires du 2ème trimestre.",
        "transmission": [
          "Rappel des tableaux de conversion (capacité, surface, agraire)",
          "Exercice chronométré (15 minutes, 6 conversions)",
          "Correction immédiate"
        ],
        "exercices": [
          "Convertis : 3 hL = ... L → Corrigé : 300 L",
          "Convertis : 2,5 m² = ... dm² → Corrigé : 250 dm²",
          "Un champ mesure 3 ares. Combien de m² ? → Corrigé : 300 m²"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "Entraînement chronométré : maladies et prévention (paludisme, tuberculose, dysenterie, secourisme)",
        "approche": "Série chronométrée de questions sur les maladies étudiées et les gestes de prévention.",
        "transmission": [
          "Rappel rapide des maladies vues (symptômes, prévention)",
          "Exercice chronométré (10 minutes, 5 questions)",
          "Correction immédiate"
        ],
        "exercices": [
          "Comment évite-t-on le paludisme, d'après la leçon ? → Corrigé : dormir sous moustiquaire, éliminer les eaux stagnantes",
          "Que faire en cas de blessure légère ? → Corrigé : nettoyer la plaie et prévenir un adulte"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "Entraînement chronométré : la population de Madagascar",
        "approche": "Exercices chronométrés sur la pyramide des âges, la croissance et l'exode rural.",
        "transmission": [
          "Rappel rapide des notions de population",
          "Exercice chronométré (10 minutes, 4 questions)",
          "Correction immédiate"
        ],
        "exercices": [
          "Qu'est-ce que l'exode rural, d'après la leçon ? → Corrigé : le départ des habitants des campagnes vers les villes",
          "Cite une conséquence de l'exode rural → Corrigé : ex. la pauvreté urbaine, la surpopulation des villes"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Fanazaran-tena voafetra fotoana — ny fanjanahantany sy ny tolom-panafahana",
        "approche": "Fitsapana an-tsoratra voafetra fotoana momba ny fanjanahan-tany sy ny dingana ho amin'ny fahaleovantena.",
        "transmission": [
          "Famerenana faobe",
          "Fitsapana an-tsoratra 15 minitra, fanontaniana 4",
          "Fanitsiana avy hatrany"
        ],
        "exercices": [
          "Inona no atao hoe fanjanahantany? → Corrigé : ny fanapahan'ny firenena vahiny (Frantsa) an'i Madagasikara",
          "Oviana no nahazoan'i Madagasikara ny fahaleovantena, araka ny nianarana? → Corrigé : tamin'ny 1960 (araka ny fampianarana natao)"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Fanazaran-tena voafetra fotoana — fanajana ny fitsipiky ny sekoly sy ny fifamoivoizana",
        "approche": "Fitsapana voafetra fotoana momba ny fitsipika mifehy ny fifamoivoizana sy ny fanajana an-tsekoly.",
        "transmission": [
          "Famerenana faobe",
          "Fitsapana an-tsoratra 10 minitra, fanontaniana 3",
          "Fanitsiana avy hatrany"
        ],
        "exercices": [
          "Tondroy fitsipika iray mifehy ny fifamoivoizana → Corrigé : ohatra, manaraka ny fari-pitanana, mijery roa lafiny alohan'ny mitety lalana",
          "Nahoana no ilaina ny fanajana ny fitsipiky ny sekoly? → Corrigé : mba hisy filaminana sy fandriam-pahalemana"
        ]
      },
      {
        "matiere": "ANGLAIS",
        "topic": "Entraînement chronométré : the body, colours, fruits and vegetables",
        "approche": "Série chronométrée de vocabulaire sur le corps, les couleurs, les fruits et les légumes.",
        "transmission": [
          "Rappel rapide du vocabulaire des 4 thèmes",
          "Exercice chronométré (10 minutes) : traduire 6 mots",
          "Correction immédiate"
        ],
        "exercices": [
          "Traduis : une main, un pied → Corrigé : a hand, a foot",
          "Cite 2 couleurs en anglais → Corrigé : red, blue (ou toute autre paire correcte)",
          "Traduis : une banane, une tomate → Corrigé : a banana, a tomato"
        ]
      }
    ]
  },
  {
    "n": 3,
    "dateDebut": "2026/06/15",
    "theme": "Révision finale 3 : examen blanc",
    "sous": "Épreuves complètes dans les conditions de l'examen, sur les 18 matières, troisième trimestre",
    "matieres": [
      {
        "matiere": "VAKITENY",
        "topic": "Fanadinana fitsapana — lahatsoratra vaovao momba ny dia (mifototra amin'ny Fiaingan'ny fiaramanidina / Handao vetivety an'i Toamasina)",
        "approche": "Manao fanadinana fitsapana feno mitovy amin'ny fanadinam-panjakana, mifototra amin'ny lahatsoratra momba ny dia nianarana tamin'ny Febroary.",
        "transmission": [
          "Fizarana lahatsoratra fohy tsy mbola novakiana momba ny dia",
          "Famakiana mangina 10 minitra",
          "Fitsapana an-tsoratra : fanontaniana fahatakarana 5, 20 minitra",
          "Fanitsiana avy hatrany"
        ],
        "exercices": [
          "Iza no mitondra ny dia ao amin'ny lahatsoratra novakianao? → Corrigé : valiny araka ny lahatsoratra nomena tamin'ny fitsapana",
          "Nahoana no niandry ny fiaramanidina ny olona ao amin'ny lahatsoratra? → Corrigé : valiny araka ny lahatsoratra",
          "Famintino amin'ny fehezanteny 2 ny votoatin'ny lahatsoratra → Corrigé : famintinana marina araka ny lahatsoratra"
        ]
      },
      {
        "matiere": "F/B",
        "topic": "Fanadinana fitsapana — famoronan-kevitra momba ny fitanterana",
        "approche": "Fitsapana an-tsoratra feno, mitovy amin'ny fanadinana, momba ny lohahevitra ny fitanterana sy ny fifamoivoizana.",
        "transmission": [
          "Fanolorana ny lohahevitra : 'Ny fitanterana ao an-tanànanao'",
          "Famoronana am-bava alohan'ny fanoratana",
          "Fanoratana andalana 3-4, 20 minitra",
          "Fanitsiana tsirairay"
        ],
        "exercices": [
          "Manorata andalana 3 momba ny fitanterana ao an-tanànanao → Corrigé : valiny manokana voamarina, misy hevitra mazava sy ifandraisany amin'ny lohahevitra",
          "Tanisao fitaovam-pitanterana 2 → Corrigé : ohatra, fiara, sarety"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Fanadinana fitsapana — dictée fitambarana ny fitsipika rehetra",
        "approche": "Dictée fitsapana mitambatra ireo fitsipika lehibe rehetra nianarana nandritra ny taona.",
        "transmission": [
          "Famerenana faobe alohan'ny dictée",
          "Dictée fitsapana, fehezanteny 6",
          "Fanitsiana tsirairay",
          "Famintinana ireo hadisoana matetika"
        ],
        "exercices": [
          "Dictée: soraty ny fehezanteny holazain'ny mpampianatra → Corrigé: araka ny fitsipika tsipelina nianarana nandritra ny taona",
          "Firy fehezanteny no nosoratana tamin'ny dictée? → Corrigé: 6"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Fanadinana fitsapana — mpisolo isa, mpamaritra sy mpisolo toerana, tsirinteny",
        "approche": "Fitsapana an-tsoratra feno mitambatra ireo fitsipi-teny nianarana tamin'ny Martsa.",
        "transmission": [
          "Famerenana faobe",
          "Fitsapana an-tsoratra 20 minitra, fanontaniana 6",
          "Fanitsiana tsirairay"
        ],
        "exercices": [
          "Tondroy ny mpisolo isa: 'omby dimy' → Corrigé: dimy",
          "Tondroy ny mpisolo toerana: 'eto', 'any' → Corrigé: mpisolo toerana marina"
        ]
      },
      {
        "matiere": "LANGAGE",
        "topic": "Examen blanc oral : raconter un souvenir de l'année scolaire",
        "approche": "Évaluation orale individuelle chronométrée, dans les conditions de l'examen de passage.",
        "transmission": [
          "Rappel des critères d'une bonne présentation orale",
          "Tirage au sort du sujet parmi les thèmes de l'année",
          "Passage individuel chronométré (1 minute par élève)",
          "Retour immédiat sur la clarté et la construction des phrases"
        ],
        "exercices": [
          "Raconte en 1 minute un événement marquant de ton année scolaire → Corrigé : récit cohérent, phrases complètes, sujet et verbe corrects",
          "Réponds à une question de ton camarade sur ton récit → Corrigé : réponse orale complète et pertinente"
        ]
      },
      {
        "matiere": "LECTURE",
        "topic": "Examen blanc de lecture : texte inconnu type examen (inspiré de Perdu dans la ville / Mora en voyage)",
        "approche": "Épreuve de lecture complète dans les conditions de l'examen, avec un texte non encore étudié sur un thème proche des textes de voyage vus dans l'année.",
        "transmission": [
          "Distribution d'un texte inconnu sur le thème du voyage ou de la ville",
          "Lecture silencieuse chronométrée (10 minutes)",
          "Épreuve écrite : 5 questions de compréhension (20 minutes)",
          "Correction immédiate"
        ],
        "exercices": [
          "De quoi parle le texte que tu viens de lire ? → Corrigé : réponse fidèle au texte distribué lors de l'épreuve",
          "Relève une phrase qui montre que le personnage est perdu → Corrigé : phrase exacte tirée du texte distribué",
          "Que ferais-tu à la place du personnage ? → Corrigé : réponse individuelle cohérente avec le texte"
        ]
      },
      {
        "matiere": "VOCABULAIRE",
        "topic": "Examen blanc : les transports et les préparatifs de voyage",
        "approche": "Épreuve écrite complète sur le vocabulaire du voyage et des transports vu en février.",
        "transmission": [
          "Distribution de l'épreuve",
          "Exercice chronométré (15 minutes) : associer et compléter des phrases",
          "Correction immédiate"
        ],
        "exercices": [
          "Cite 3 préparatifs à faire avant un voyage → Corrigé : ex. faire sa valise, préparer les papiers, réserver le billet",
          "Complète : 'Avant de partir, elle a préparé sa ...' → Corrigé : valise (ou bagage)"
        ]
      },
      {
        "matiere": "GRAMMAIRE",
        "topic": "Examen blanc : phrase affirmative/négative, forme active/passive, compléments circonstanciels",
        "approche": "Épreuve écrite complète mêlant les notions de grammaire du 3ème trimestre.",
        "transmission": [
          "Distribution de l'épreuve",
          "Exercice chronométré (20 minutes, 6 phrases)",
          "Correction immédiate"
        ],
        "exercices": [
          "Mets à la forme négative : 'Les élèves partent en voyage.' → Corrigé : 'Les élèves ne partent pas en voyage.'",
          "Mets à la forme passive : 'Le chauffeur conduit le taxi-brousse.' → Corrigé : 'Le taxi-brousse est conduit par le chauffeur.'",
          "Trouve le complément de but : 'Il économise pour voyager.' → Corrigé : pour voyager"
        ]
      },
      {
        "matiere": "ORTHOGRAPHE",
        "topic": "Examen blanc : consonnes doubles, lettres finales muettes, est/ait/ai",
        "approche": "Épreuve écrite complète mêlant les points d'orthographe du 3ème trimestre.",
        "transmission": [
          "Distribution de l'épreuve",
          "Exercice chronométré (15 minutes, 8 mots/phrases)",
          "Correction immédiate"
        ],
        "exercices": [
          "Complète avec la consonne double correcte : 'ac...ident', 'aff...iche' → Corrigé : accident, affiche",
          "Complète : 'Il ... fatigué ; il ... voyagé toute la journée.' → Corrigé : 'Il est fatigué ; il a voyagé toute la journée.'"
        ]
      },
      {
        "matiere": "CONJUGAISON",
        "topic": "Examen blanc : conditionnel présent, subjonctif présent et verbes pronominaux",
        "approche": "Épreuve écrite complète sur les temps les plus difficiles vus en mars.",
        "transmission": [
          "Distribution de l'épreuve",
          "Exercice chronométré (15 minutes, 6 verbes)",
          "Correction immédiate avec tableau récapitulatif"
        ],
        "exercices": [
          "Conjugue 'être' au présent du conditionnel, 1ère personne du singulier : 'Je ... content de voyager.' → Corrigé : serais",
          "Conjugue 'se laver' à l'impératif, 2e personne du singulier → Corrigé : lave-toi",
          "Conjugue 'aller' au présent du subjonctif, 3e personne du singulier : 'Il faut qu'il ... à l'école.' → Corrigé : aille"
        ]
      },
      {
        "matiere": "ARITHMÉTIQUE",
        "topic": "Examen blanc : partages égaux et inégaux, budget familial, intervalle",
        "approche": "Épreuve de problèmes complète dans les conditions de l'examen, combinant les notions du 3ème trimestre.",
        "transmission": [
          "Distribution de l'épreuve",
          "Épreuve chronométrée (30 minutes) : 2 problèmes de partage + 1 problème de budget",
          "Correction collective détaillée"
        ],
        "exercices": [
          "Partage 45 000 Ar entre 3 personnes à parts égales → Corrigé : 45 000÷3=15 000 Ar chacun",
          "Une famille gagne 300 000 Ar. Elle dépense 120 000 Ar en nourriture et 80 000 Ar en logement. Combien lui reste-t-il ? → Corrigé : 300 000−200 000=100 000 Ar",
          "Combien de nombres entiers de 10 à 25 (intervalle fermé) ? → Corrigé : 25−10+1=16 nombres"
        ]
      },
      {
        "matiere": "GÉOMÉTRIE",
        "topic": "Examen blanc : cube, parallélépipède et cylindre (surfaces et volumes)",
        "approche": "Épreuve complète de calcul de volumes et de surfaces sur les solides du 3ème trimestre.",
        "transmission": [
          "Distribution de l'épreuve",
          "Épreuve chronométrée (25 minutes) : 1 calcul par solide",
          "Correction collective détaillée"
        ],
        "exercices": [
          "Calcule le volume d'un cube de côté 6 cm → Corrigé : 6×6×6=216 cm³",
          "Calcule le volume d'un parallélépipède de 8×5×4 cm → Corrigé : 8×5×4=160 cm³",
          "Combien de faces a un cylindre ? → Corrigé : 3 faces (2 disques et 1 face latérale)"
        ]
      },
      {
        "matiere": "MESURE",
        "topic": "Examen blanc : nombres complexes, mesures de volume et correspondance volume/capacité",
        "approche": "Épreuve complète sur les mesures de temps composées et les correspondances volume/capacité du 3ème trimestre.",
        "transmission": [
          "Distribution de l'épreuve",
          "Épreuve chronométrée (20 minutes) : 2 conversions de nombres complexes + 2 correspondances volume/capacité",
          "Correction collective"
        ],
        "exercices": [
          "Exprime en mesure complexe : 150 minutes → Corrigé : 2 h 30 min",
          "Convertis : 1 dm³ = ... L → Corrigé : 1 L",
          "Convertis : 5 000 cm³ = ... L → Corrigé : 5 L"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "Examen blanc : sciences (matière, aimant, air et sol, pile)",
        "approche": "Épreuve écrite complète sur les notions de sciences vues en avril.",
        "transmission": [
          "Distribution de l'épreuve",
          "Exercice chronométré (15 minutes, 5 questions)",
          "Correction immédiate"
        ],
        "exercices": [
          "Cite les 3 états de la matière → Corrigé : solide, liquide, gazeux",
          "Quel objet est attiré par un aimant ? → Corrigé : un objet en fer (ou en métal magnétique)",
          "À quoi sert une pile ? → Corrigé : elle fournit de l'énergie électrique à un appareil"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "Examen blanc : les activités économiques (agriculture, élevage, pêche, industrie)",
        "approche": "Épreuve complète sur les activités économiques de Madagascar vues en février et mars.",
        "transmission": [
          "Distribution de l'épreuve",
          "Exercice chronométré (15 minutes, 5 questions)",
          "Correction immédiate"
        ],
        "exercices": [
          "Cite 2 produits de l'agriculture malgache → Corrigé : ex. le riz, le café, la vanille",
          "Quelle activité économique se pratique le long des côtes de Madagascar ? → Corrigé : la pêche",
          "Cite une ressource minière de Madagascar → Corrigé : ex. le saphir, le graphite, le nickel"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Fanadinana fitsapana — Repoblika I ka hatramin'ny Repoblika IV",
        "approche": "Fitsapana an-tsoratra feno mitambatra ireo Repoblika efatra sy ny tetezamita nianarana.",
        "transmission": [
          "Fizarana ny fitsapana",
          "Fitsapana an-tsoratra 20 minitra, fanontaniana 5",
          "Fanitsiana tsirairay"
        ],
        "exercices": [
          "Alamino araka ny filaharany: Repoblika I, Repoblika III, Repoblika II, Repoblika IV → Corrigé: Repoblika I, Repoblika II, Repoblika III, Repoblika IV",
          "Inona no atao hoe tetezamita? → Corrigé: vanim-potoana fiovana eo anelanelan'ny Repoblika roa"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Fanadinana fitsapana — ady amin'ny endrim-panavakavahana sy ny sampan-draharaham-panjakana",
        "approche": "Fitsapana an-tsoratra feno momba ny lohahevitra nianarana tamin'ny Janoary.",
        "transmission": [
          "Fizarana ny fitsapana",
          "Fitsapana an-tsoratra 15 minitra, fanontaniana 4",
          "Fanitsiana tsirairay"
        ],
        "exercices": [
          "Inona no atao hoe fanavakavahana? → Corrigé: fitondrana tsy mitovy amin'olona iray noho ny antony tsy ara-drariny (ohatra ny firazanana)",
          "Tondroy sampan-draharaham-panjakana iray → Corrigé: ohatra, ny fitaleavam-pahasalamana, ny fitaleavam-pianarana"
        ]
      },
      {
        "matiere": "ANGLAIS",
        "topic": "Examen blanc : transport, room, opposites and date and time",
        "approche": "Épreuve complète sur le vocabulaire vu en janvier (transport, chambre, contraires, date et heure).",
        "transmission": [
          "Distribution de l'épreuve",
          "Exercice chronométré (15 minutes, 6 questions)",
          "Correction immédiate"
        ],
        "exercices": [
          "Traduis : 'grand' et son contraire → Corrigé : big / small (ou tall/short selon contexte)",
          "What day is it today? Answer in English → Corrigé : réponse selon le jour réel, ex. 'Today is Monday.'",
          "Traduis : un moyen de transport → Corrigé : a means of transport (ex. a bus, a car)"
        ]
      }
    ]
  },
  {
    "n": 4,
    "dateDebut": "2026/06/22",
    "theme": "Révision finale 4 : bilan de fin d'année scolaire",
    "sous": "Bilan général, dernières lacunes et préparation à l'entrée en 7ème",
    "matieres": [
      {
        "matiere": "VAKITENY",
        "topic": "Famintinana ny taona — safidy lahatsoratra tiana indrindra sy fiomanana ho amin'ny kilasy faha-7",
        "approche": "Mamintina ireo lahatsoratra rehetra novakiana nandritra ny taona, ary mifidy ny tiana indrindra ho famaranana ny taona.",
        "transmission": [
          "Famerenana lisitra fohin'ireo lahatsoratra rehetra novakiana nandritra ny taona",
          "Ny mpianatra tsirairay misafidy lahatsoratra iray tiany indrindra",
          "Famakiana am-baravava ny lahatsoratra nofidiana",
          "Fifampiresahana : nahoana no tiana io lahatsoratra io"
        ],
        "exercices": [
          "Tononio ny lahatsoratra tianao indrindra tamin'ity taona ity ary lazao ny antony → Corrigé : valiny manokana voamarina, misy antony mazava",
          "Vakio am-baravava andalana iray amin'ny lahatsoratra nofidianao → Corrigé : famakiana tsy misy tafintohina"
        ]
      },
      {
        "matiere": "F/B",
        "topic": "Famintinana ireo lohahevitra rehetra nianarana nandritra ny taona",
        "approche": "Mamintina ireo lohahevitra rehetra nodinihina hatramin'ny Septambra ka hatramin'ny Martsa, ary mametraka tanjona ho an'ny kilasy faha-7.",
        "transmission": [
          "Famerenana lisitry ny lohahevitra rehetra nianarana",
          "Fifampiresahana : lohahevitra inona no tena tiana sy tadidiana tsara",
          "Fanoratana fehezanteny fanoloran-tena ho an'ny kilasy faha-7"
        ],
        "exercices": [
          "Tanisao lohahevitra 3 nianarana nandritra ity taona ity → Corrigé : valiny manokana, ohatra ny fahadiovana, ny voly vary, ny fitanterana",
          "Manorata fehezanteny fanoloran-tena ho an'ny kilasy faha-7 → Corrigé : valiny manokana mifanaraka amin'ny lohahevitra"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Famintinana — fitsipika sarotra indrindra sy dictée farany",
        "approche": "Mamintina ireo fitsipika tsipelina rehetra sarotra indrindra tamin'ny taona, ary manao dictée farany fanamarinana.",
        "transmission": [
          "Lisitra ireo fitsipika sarotra indrindra araka ny hevitry ny mpianatra",
          "Famerenana fanamarinana ireo fitsipika ireo",
          "Dictée farany, fehezanteny 4",
          "Fanitsiana tsirairay"
        ],
        "exercices": [
          "Tanisao fitsipika tsipelina iray mbola sarotra aminao → Corrigé : valiny manokana",
          "Dictée: soraty ny fehezanteny holazain'ny mpampianatra → Corrigé: araka ny fitsipika nianarana nandritra ny taona"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Famintinana ny fitsipi-teny rehetra nianarana",
        "approche": "Mamintina amin'ny endrika tabilao ireo fitsipi-teny lehibe rehetra nianarana nandritra ny taona.",
        "transmission": [
          "Fanaovana tabilao famintinana ny fitsipi-teny (fehezanteny, andianteny, mpisolo, mpamaritra...)",
          "Fanontaniana fanamarinana isaky ny lohahevitra",
          "Fanitsiana am-pokonolona"
        ],
        "exercices": [
          "Inona no fitsipika mbola sarotra tadidiana aminao? → Corrigé : valiny manokana",
          "Manorata fehezanteny iray mampiseho fitsipika iray nianaranao ity taona ity → Corrigé : fehezanteny feno sy marina"
        ]
      },
      {
        "matiere": "LANGAGE",
        "topic": "Bilan oral de fin d'année — présentation pour la cérémonie de fin d'année",
        "approche": "Préparer une courte présentation orale collective ou individuelle pour marquer la fin de l'année scolaire, en réutilisant les acquis d'expression orale de l'année.",
        "transmission": [
          "Rappel des critères d'une présentation orale réussie",
          "Préparation collective d'un petit discours de fin d'année",
          "Répétition orale individuelle",
          "Retour et encouragements finaux"
        ],
        "exercices": [
          "Prépare et dis à l'oral 2 phrases de remerciement pour la fin de l'année → Corrigé : phrases correctes et bien articulées",
          "Qu'as-tu le plus aimé apprendre à l'oral cette année ? → Corrigé : réponse individuelle cohérente"
        ]
      },
      {
        "matiere": "LECTURE",
        "topic": "Bilan de lecture : tous les textes de l'année et question de synthèse finale",
        "approche": "Revenir sur l'ensemble des textes lus dans l'année et répondre à une question de synthèse qui les relie.",
        "transmission": [
          "Rappel collectif de la liste des textes lus dans l'année",
          "Discussion : quel texte a le plus marqué la classe et pourquoi",
          "Question de synthèse écrite reliant plusieurs textes",
          "Correction et bilan de lecture de l'année"
        ],
        "exercices": [
          "Cite 3 textes lus cette année et leur thème → Corrigé : réponse individuelle correcte selon les textes étudiés",
          "Quel texte t'a le plus marqué cette année ? Explique pourquoi en 2 phrases → Corrigé : réponse individuelle cohérente"
        ]
      },
      {
        "matiere": "VOCABULAIRE",
        "topic": "Bilan lexical général de l'année",
        "approche": "Reprendre les principaux champs lexicaux vus dans l'année pour un dernier contrôle avant l'entrée en 7ème.",
        "transmission": [
          "Jeu-quiz final mêlant tous les champs lexicaux de l'année",
          "Classement collectif de 15 mots dans leur champ lexical",
          "Correction collective",
          "Bilan des mots encore fragiles"
        ],
        "exercices": [
          "Classe ces mots : gentil, valise, commerçant, myope → Corrigé : portrait=gentil ; voyage=valise ; commerce=commerçant ; santé=myope",
          "Cite un mot appris cette année que tu utilises souvent → Corrigé : réponse individuelle"
        ]
      },
      {
        "matiere": "GRAMMAIRE",
        "topic": "Bilan grammatical général — tableau récapitulatif de l'année",
        "approche": "Construire avec la classe un tableau récapitulatif de toutes les notions de grammaire vues dans l'année.",
        "transmission": [
          "Construction collective d'un tableau récapitulatif (GNS/GV, COD/COI, CCT/CCL, pronoms, formes de phrase...)",
          "Exercice final : une phrase à analyser complètement",
          "Correction collective",
          "Bilan des notions encore fragiles pour la 7ème"
        ],
        "exercices": [
          "Analyse complètement : 'Demain, les élèves visiteront le musée avec leur maîtresse.' → Corrigé : GNS=les élèves ; GV=visiteront le musée avec leur maîtresse ; COD=le musée ; CCT=Demain ; CC accompagnement=avec leur maîtresse",
          "Cite 2 notions de grammaire apprises cette année → Corrigé : réponse individuelle correcte"
        ]
      },
      {
        "matiere": "ORTHOGRAPHE",
        "topic": "Bilan : dictée finale mêlant tous les homophones et règles de l'année",
        "approche": "Dictée finale de synthèse reprenant l'ensemble des règles d'orthographe vues dans l'année.",
        "transmission": [
          "Rappel express de toutes les règles d'homophones vues dans l'année",
          "Dictée finale de 6 phrases",
          "Correction individuelle détaillée",
          "Bilan des points encore à travailler en 7ème"
        ],
        "exercices": [
          "Dictée : écris les phrases dictées par le maître → Corrigé : conforme aux règles d'orthographe vues dans l'année (majuscules, homophones, accords)",
          "Corrige cette phrase : 'Il c'est levé tot se matin' → Corrigé : 'Il s'est levé tôt ce matin.'"
        ]
      },
      {
        "matiere": "CONJUGAISON",
        "topic": "Bilan : tableau récapitulatif de tous les temps et verbes de l'année",
        "approche": "Construire un tableau récapitulatif de tous les temps et verbes conjugués dans l'année, pour préparer la 7ème.",
        "transmission": [
          "Construction collective d'un tableau récapitulatif (présent, imparfait, futur, passé composé, conditionnel, subjonctif)",
          "Exercice final : conjuguer un verbe à tous les temps vus",
          "Correction collective",
          "Bilan individuel des temps encore fragiles"
        ],
        "exercices": [
          "Conjugue 'partir' au présent, à l'imparfait et au futur simple, 3e personne du singulier → Corrigé : il part ; il partait ; il partira",
          "Cite les temps de conjugaison appris cette année → Corrigé : présent, imparfait, futur simple, passé composé, conditionnel présent, subjonctif présent"
        ]
      },
      {
        "matiere": "ARITHMÉTIQUE",
        "topic": "Bilan : problèmes combinés type examen final",
        "approche": "Résoudre des problèmes combinant plusieurs notions de l'année (numération, fractions, mesures, partages) comme bilan final.",
        "transmission": [
          "Rappel des grandes notions de calcul de l'année",
          "Résolution de 2 problèmes combinés en classe entière",
          "Résolution individuelle d'un 3ème problème",
          "Correction et bilan des méthodes à retenir pour la 7ème"
        ],
        "exercices": [
          "Un champ rectangulaire mesure 40 m sur 25 m. Calcule son périmètre et sa surface en ares → Corrigé : périmètre=2×(40+25)=130 m ; surface=40×25=1 000 m²=10 ares",
          "Un sac de riz de 50 kg coûte 125 000 Ar. Quel est le prix d'1 kg ? → Corrigé : 125 000÷50=2 500 Ar/kg",
          "Calcule : 3/5 + 1/5, puis multiplie le résultat par 10 → Corrigé : 4/5 ; 4/5×10=8"
        ]
      },
      {
        "matiere": "GÉOMÉTRIE",
        "topic": "Bilan : calculs combinés de périmètre, aire et volume",
        "approche": "Bilan final reprenant un calcul par grande famille de figures étudiées dans l'année (carré/rectangle, triangle/cercle, solides).",
        "transmission": [
          "Rappel express des formules par famille de figures",
          "Exercice bilan : 1 calcul de périmètre, 1 d'aire, 1 de volume",
          "Correction collective",
          "Bilan des formules encore à revoir en 7ème"
        ],
        "exercices": [
          "Calcule le périmètre d'un carré de côté 11 cm → Corrigé : 11×4=44 cm",
          "Calcule l'aire d'un cercle de rayon 4 cm (π≈3,14) → Corrigé : 3,14×4×4=50,24 cm²",
          "Calcule le volume d'un cube de côté 5 cm → Corrigé : 5×5×5=125 cm³"
        ]
      },
      {
        "matiere": "MESURE",
        "topic": "Bilan : conversions combinées (longueur, masse, capacité, volume, temps)",
        "approche": "Bilan final des conversions d'unités vues dans l'année, toutes grandeurs confondues.",
        "transmission": [
          "Rappel express des 5 tableaux de conversion (longueur, masse, capacité, volume, temps)",
          "Exercice bilan : 1 conversion par grandeur",
          "Correction collective",
          "Bilan des unités encore confondues pour la 7ème"
        ],
        "exercices": [
          "Convertis : 2,5 m = ... cm → Corrigé : 250 cm",
          "Convertis : 4 L = ... mL → Corrigé : 4 000 mL",
          "Exprime en heures et minutes : 100 minutes → Corrigé : 1 h 40 min"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "Bilan : questions mixtes santé et sciences de l'année",
        "approche": "Bilan final mêlant les notions de corps humain, maladies et sciences vues dans l'année.",
        "transmission": [
          "Jeu-quiz final mêlant les thèmes de l'année (corps humain, maladies, sciences)",
          "Questions rapides par équipes",
          "Correction collective",
          "Bilan des notions encore fragiles pour la 7ème"
        ],
        "exercices": [
          "Cite un appareil du corps humain étudié cette année et son rôle → Corrigé : ex. l'appareil digestif transforme les aliments",
          "Comment prévenir une maladie comme le paludisme ? → Corrigé : dormir sous moustiquaire",
          "Dans quel état la matière peut-elle se trouver ? → Corrigé : solide, liquide, gazeux"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "Bilan : Madagascar dans son ensemble (relief, climat, population, activités économiques)",
        "approche": "Bilan final reprenant Madagascar dans son ensemble à travers une dernière carte à compléter.",
        "transmission": [
          "Exercice de carte muette complète (relief, villes, activités)",
          "Correction collective",
          "Fifampiresahana : ce que la classe a préféré apprendre en géographie",
          "Bilan des repères encore fragiles pour la 7ème"
        ],
        "exercices": [
          "Place sur une carte muette : les Hautes Terres, un grand fleuve, une grande ville → Corrigé : vérifier le positionnement selon la carte étudiée",
          "Cite une activité économique pratiquée à Madagascar → Corrigé : ex. l'agriculture, la pêche, l'artisanat"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Famintinana farany — ny daty iraisam-pirenena sy ny fikambanana iraisam-pirenena",
        "approche": "Mamintina ny taratasy fotoana manontolo hatramin'ny niaviana ny Malagasy ka hatramin'ny Repoblika IV, mifarana amin'ny daty iraisam-pirenena.",
        "transmission": [
          "Famerenana ny taratasy fotoana manontolo (fanjakana taloha, fanjanahantany, fahaleovantena, Repoblika I-IV)",
          "Fampahafantarana fohy ny daty iraisam-pirenena sy ny fikambanana iraisam-pirenena",
          "Fanoratana : mametraka zava-nitranga 6 amin'ny taratasy fotoana manontolo",
          "Famintinana farany ho fiomanana amin'ny kilasy faha-7"
        ],
        "exercices": [
          "Alamino araka ny filaharany ny dingana lehibe: niaviana ny Malagasy, fanjanahantany, fahaleovantena → Corrigé: niaviana ny Malagasy, fanjakana taloha, fanjanahantany, fahaleovantena",
          "Tondroy fikambanana iraisam-pirenena iray → Corrigé: ohatra, ONU, Union Africaine (araka ny fampianarana natao)"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Famintinana farany — ireo soatoavina rehetra nianarana mandritra ny taona",
        "approche": "Mamintina ireo soatoavina rehetra nodinihina nandritra ny taona ary mametraka tanjona ho an'ny kilasy faha-7.",
        "transmission": [
          "Famerenana lisitry ny soatoavina rehetra nianarana (fifanampiana, fanajana, fitsipiky ny sekoly, ady amin'ny fanavakavahana...)",
          "Ny mpianatra tsirairay milaza soatoavina iray tena tiany",
          "Fanoratana fehezanteny fanoloran-tena ho an'ny kilasy faha-7"
        ],
        "exercices": [
          "Tondroy soatoavina 2 nianarana tamin'ity taona ity → Corrigé : valiny manokana, ohatra ny fifanampiana sy ny fanajana",
          "Manorata fehezanteny fanoloran-tena ho an'ny kilasy faha-7 → Corrigé : valiny manokana mifanaraka amin'ny lohahevitra"
        ]
      },
      {
        "matiere": "ANGLAIS",
        "topic": "Bilan : révision générale du vocabulaire et dialogue final",
        "approche": "Bilan final reprenant l'ensemble du vocabulaire anglais de l'année à travers un dialogue de synthèse.",
        "transmission": [
          "Rappel rapide des grands thèmes de vocabulaire de l'année",
          "Construction collective d'un dialogue final réutilisant plusieurs thèmes",
          "Jeu de rôle en binôme du dialogue",
          "Correction et encouragements finaux"
        ],
        "exercices": [
          "Complète le dialogue : 'Hello! What is your name? — My name ... Sitraka.' → Corrigé : is",
          "Cite 3 mots de vocabulaire anglais appris cette année → Corrigé : réponse individuelle correcte",
          "Traduis : 'Au revoir, à l'année prochaine !' → Corrigé : 'Goodbye, see you next year!'"
        ]
      }
    ]
  }
];

const MOIS_8EME = [
  { mois: "Octobre", data: OCTOBRE_8EME },
  { mois: "Novembre", data: NOVEMBRE_8EME },
  { mois: "Décembre", data: DECEMBRE_8EME },
  { mois: "Janvier", data: JANVIER_8EME },
  { mois: "Février", data: FEVRIER_8EME },
  { mois: "Mars", data: MARS_8EME },
  { mois: "Avril", data: AVRIL_8EME },
  { mois: "Mai", data: MAI_8EME },
  { mois: "Juin", data: JUIN_8EME },
];


module.exports = { PERIODES_8EME, MOIS_8EME };
