'use strict';

// Programme 12ème (Maternelle) — année scolaire 2025-2026
// Matières : LECTURE · VAKITENY · ÉCRITURE · LANGAGE · PRE-MATH · MATHS
//            MORALE · ENVIRONNEMENT · ANGLAIS · CHANT · RECITATION · EPS · DESSIN

const m = (matiere, topic, approche, transmission, exercices) =>
  ({ matiere, topic, approche, transmission, exercices });


const PERIODES_12EME = [
  { num: 1, libelle: '1ère Période', debut: '07/09/2026', semaines: [

  {
    n:1, dates:"07/09/2026 – 11/09/2026",
    theme:"12ème Maternelle — Semaine d'accueil et prise de contact",
    matieres:[

      m("LECTURE","Prise de contact — Écouter et reconnaître des sons simples",
        "Éveiller la conscience phonologique des tout-petits par l'écoute et la répétition de sons.",
        ["Accueillir chaque enfant individuellement avec un sourire","Faire le tour de la classe ensemble : les coins, le tableau, les tables","Montrer des images d'objets simples et nommer","Faire répéter les mots : mama, papa, rano, vary","Écouter des sons de la nature : oiseaux, pluie","Jeu d'imitation des sons animaux","Récapitulatif : 3 mots appris aujourd'hui"],
        ["Répète ce mot : mama → Corrigé : mama","Que vois-tu sur cette image ? → Corrigé : réponse libre selon l'image","Quel son fait le poulet ? → Corrigé : cocorico / akoko"]),

      m("VAKITENY","Prise de contact — Écouter et répéter des mots",
        "Initier l'écoute active et la répétition de mots simples en malagasy.",
        ["Chanter une comptine malagasy simple","Répéter des mots en malagasy : rano, sakafo, akoho","Pointer des images correspondantes","Faire répéter individuellement","Jeu : 'Montre-moi le...' — les enfants pointent","Comptine des animaux de la ferme","Valoriser chaque participation"],
        ["Répète : rano → Corrigé : rano","Montre-moi l'image de l'akoho (poulet) → Corrigé : pointer l'image","Que mange l'akoho ? → Corrigé : du maïs / ny katsaka"]),

      m("ÉCRITURE","Prise de contact — Tenir un crayon et tracer des lignes libres",
        "Observer la tenue du crayon et permettre aux enfants de tracer librement.",
        ["Distribuer les gros crayons de couleur","Montrer comment tenir le crayon","Tracer librement sur la feuille","Observer et corriger doucement la prise en main","Encourager chaque enfant","Ne pas forcer des formes précises","Regarder et commenter les tracés"],
        ["Montre comment tu tiens ton crayon → Corrigé : observation individuelle","Trace une ligne du haut vers le bas → Corrigé : vérifier le tracé","Quel crayon préfères-tu ? → Corrigé : réponse libre"]),

      m("LANGAGE","Se présenter : dire son prénom",
        "Apprendre à dire son prénom et à comprendre l'importance de s'identifier.",
        ["L'enseignante se présente : 'Je m'appelle Madame...'","Demander à chaque enfant : 'Comment tu t'appelles ?'","Aider les enfants timides","Jeu du ballon : celui qui l'attrape dit son prénom","Apprendre le prénom de 2 voisins","Faire l'appel : les enfants répondent 'Présent(e)'","Récapitulatif : l'enseignante répète tous les prénoms"],
        ["Comment tu t'appelles ? → Corrigé : Je m'appelle ...","Quel est le prénom de ton voisin ? → Corrigé : réponse individuelle","Réponds quand j'appelle ton prénom → Corrigé : évaluation de la réactivité"]),

      m("PRE-MATH","Test de pré-requis : notions de base (grand/petit, plein/vide)",
        "Évaluer les notions pré-mathématiques de base que les enfants ont acquises avant l'école.",
        ["Montrer deux objets de taille différente : grand/petit","Les enfants pointent le grand, puis le petit","Montrer un verre plein et un verre vide","Les enfants désignent plein et vide","Comparer 2 groupes d'objets : lequel a plus ?","Observer les réactions et les stratégies","Préparer les activités de la période"],
        ["Lequel est grand ? (montrer deux objets) → Corrigé : le plus grand objet","Lequel est vide ? (montrer deux verres) → Corrigé : verre sans eau","Y a-t-il plus de billes ici ou là ? → Corrigé : réponse selon les quantités montrées"]),

      m("MATHS","Test de pré-requis : compter les doigts de 1 à 5",
        "Évaluer la capacité à compter et à représenter les chiffres de 1 à 5.",
        ["Montrer 1 doigt et dire 'un'","Montrer 2 doigts et dire 'deux'","Continuer jusqu'à 5 doigts","Demander aux enfants de montrer le bon nombre de doigts","Compter des objets concrets sur la table","Qui sait compter au-delà de 5 ?","Préparer les groupes de niveau"],
        ["Montre 3 doigts → Corrigé : évaluation gestuelle","Compte ces crayons (en donner 4) → Corrigé : 4","Quel chiffre vient après 3 ? → Corrigé : 4"]),

      m("MORALE","Découverte des règles de la classe maternelle",
        "Présenter de façon ludique les règles essentielles de la vie en classe maternelle.",
        ["Accueillir avec un grand sourire","Présenter la règle 1 : on ne crie pas, on parle doucement","Règle 2 : on partage les jouets et les crayons","Règle 3 : on range après avoir joué","Mimer chaque règle avec les enfants","Dessiner le symbole de chaque règle","Afficher les règles avec des images"],
        ["Comment parle-t-on en classe ? → Corrigé : doucement, sans crier","Que fait-on après avoir joué ? → Corrigé : on range les jouets","Comment partage-t-on les crayons ? → Corrigé : chacun utilise à son tour"]),

      m("ENVIRONNEMENT","Découverte de l'école : la classe, la cour, les toilettes",
        "Explorer l'environnement scolaire et identifier les différents espaces.",
        ["Visite guidée de la classe avec l'enseignante","Découvrir la cour : où joue-t-on ?","Trouver les toilettes : où sont-elles ?","Identifier la cantine ou le coin repas","Nommer chaque espace en malagasy et en français","Jeu : 'Où est-on ?' — deviner l'espace","Récapitulatif : les 3 espaces importants"],
        ["Où est-ce qu'on joue ? → Corrigé : dans la cour","Où sont les toilettes ? → Corrigé : indiquer la direction","Que fait-on dans la classe ? → Corrigé : on apprend, on dessine, on chante"]),

      m("ANGLAIS","Hello — Découverte de la salutation en anglais",
        "Initier les tout-petits à la salutation en anglais de manière ludique.",
        ["Saluer les enfants en anglais : Hello !","Faire répéter : Hello !","Chanter : 'Hello, hello, how are you?'","Goodbye : dire au revoir en anglais","Jeu : l'enseignante dit Hello à chaque enfant","Répondre : Hello ! Je m'appelle...","Récapitulatif : 2 mots appris"],
        ["Répète : Hello → Corrigé : Hello","Comment dit-on 'au revoir' en anglais ? → Corrigé : Goodbye","Chante la chanson Hello → Corrigé : évaluation orale"]),

      m("CHANT","Bonjour / Good morning — Découverte de la chanson",
        "Apprendre une chanson bilingue simple de salutation pour la rentrée maternelle.",
        ["Chanter la chanson lentement une fois","Répéter 'Bonjour' et 'Good morning'","Ajouter des gestes : saluer de la main","Répéter ensemble","Chanter plus vite la deuxième fois","Jeu : se saluer en chantant par deux","Qui peut chanter seul ?"],
        ["Chante 'Bonjour' dans la chanson → Corrigé : évaluation orale","Que dit-on le matin en anglais ? → Corrigé : Good morning","Quel geste fait-on en chantant 'Bonjour' ? → Corrigé : on salue de la main"]),

      m("RECITATION","La rentrée — Écouter et répéter le poème",
        "Initier les enfants à la mémorisation par l'écoute et la répétition collective.",
        ["Réciter le poème 'La rentrée' lentement et avec expression","Demander aux enfants d'écouter en silence","Répéter la première ligne en chœur","Faire répéter un enfant seul","Reprendre la première ligne collectivement","Ajouter la deuxième ligne","Chanter / réciter avec enthousiasme"],
        ["Répète la première ligne du poème → Corrigé : évaluation orale","De quoi parle le poème ? → Corrigé : de la rentrée à l'école","Qui peut réciter une partie seul ? → Corrigé : évaluation volontaire"]),

      m("EPS","Découverte du corps : bouger librement dans la cour",
        "Permettre aux enfants d'explorer librement l'espace et de bouger leur corps.",
        ["Aller dans la cour en tenant la main d'un camarade","Courir librement en sécurité","S'arrêter sur signal (claquement de mains)","Sauter sur place","Se regrouper en cercle","Jeu du 'chat' simple : toucher sans tomber","Retour au calme : respirer lentement"],
        ["Peux-tu courir jusqu'au mur et revenir ? → Corrigé : évaluation physique","Saute 3 fois sur place → Corrigé : évaluation physique","Que fait-on quand on entend le signal ? → Corrigé : on s'arrête"]),

      m("DESSIN","Dessin libre : découverte des crayons de couleur",
        "Permettre une première exploration libre des crayons de couleur sans contrainte.",
        ["Distribuer les feuilles et les crayons de couleur","Montrer comment tenir le crayon","Dessiner ce qu'on veut librement","Encourager sans corriger le contenu","Commenter les tracés avec bienveillance","Écrire le prénom de l'enfant sur sa feuille","Afficher tous les dessins dans la classe"],
        ["Qu'est-ce que tu as dessiné ? → Corrigé : réponse libre","Combien de couleurs tu as utilisées ? → Corrigé : réponse libre","Peux-tu me montrer le crayon rouge ? → Corrigé : pointer le crayon rouge"]),

      m("TRAVAUX MANUELS","Découverte des matériaux : papier, crayons, colle",
        "Faire toucher et explorer différents matériaux pour développer la motricité fine.",
        ["Distribuer différents matériaux : papier doux, carton, tissu","Toucher et décrire : mou, dur, lisse, rugueux","Déchirer du papier librement","Froisser du papier en boule","Coller une boule de papier sur une feuille","Ranger les matériaux dans les boîtes","Récapitulatif : 3 matériaux et leur texture"],
        ["Comment est ce papier ? (doux ou dur) → Corrigé : doux","Fais une boule avec ce papier → Corrigé : évaluation gestuelle","Où colle-t-on la boule de papier ? → Corrigé : sur la feuille avec de la colle"]),

      m("CONTE","Prise de contact — Découverte d'un conte malgache",
        "Faire un premier test de pré-requis sur l'écoute d'une histoire : capacité à rester attentif, à regarder des images et à répondre à une question simple.",
        ["Installer les enfants en cercle pour l'écoute d'une histoire","Montrer une image simple et poser une question dessus","Observer qui reste attentif et qui répond","Raconter une très courte histoire connue (1 minute)","Poser 1 question de compréhension immédiate","Noter le niveau d'écoute de chaque enfant pour préparer les groupes"],
        ["Regarde cette image : que vois-tu ? → Corrigé : réponse libre selon l'image","Es-tu resté(e) assis(e) et attentif(ve) pendant l'histoire ? → Corrigé : observation individuelle","Que s'est-il passé dans l'histoire ? → Corrigé : réponse libre, même très courte"])

    ],
  },

  {
    n:2, dates:"14/09/2026 – 18/09/2026",
    theme:"12ème Maternelle — Lettre i · Nombres 0-5 · Fournitures scolaires",
    matieres:[

      m("LECTURE","La lettre i : reconnaissance visuelle et sonore",
        "Faire découvrir la lettre i aux tout-petits par des activités sensorielles et ludiques.",
        ["Montrer la lettre I en grande taille sur un carton","Prononcer le son [i] de façon exagérée","Chercher des images avec le son [i] : île, igloo, iris","Tracer la lettre i dans l'air avec le doigt","Tracer i sur le tableau avec le doigt","Retrouver la lettre i dans son prénom","Jeu : qui peut dire un mot avec [i] ?"],
        ["Quel son fait cette lettre ? (montrer i) → Corrigé : [i]","Montre-moi la lettre i dans le mot 'île' → Corrigé : pointer le i","Cite un mot avec le son [i] → Corrigé : île, iris, igloo"]),

      m("VAKITENY","Lettre i : écouter et répéter des mots contenant i",
        "Renforcer la conscience phonologique du son [i] par des jeux de répétition.",
        ["Comptine : 'I comme île, i comme igloo'","Répéter des mots en malagasy avec [i] : iny, izy, ira","Jeu : 'Claque si tu entends [i]'","Claper les mains sur le son [i] dans une suite de mots","Comptine des voyelles : A, E, I, O, U","Mimer des mots avec le son [i]","Récapitulatif : 5 mots avec [i]"],
        ["Frappe dans tes mains si tu entends [i] : maison, île, table → Corrigé : île","Lis cette syllabe : i → Corrigé : [i]","Nomme un mot malagasy avec [i] → Corrigé : izy, iny"]),

      m("ÉCRITURE","Lettre i : tracer la lettre i en maternelle",
        "Apprendre à tracer la lettre i (bâton + point) en développant la motricité fine.",
        ["Montrer le tracé de i : un bâton vertical et un point","Tracer dans l'air avec le gros doigt","Tracer sur le dos d'un camarade","Tracer sur l'ardoise avec une grosse craie","Tracer sur papier préligné avec un gros crayon","Compter le nombre de i tracés","Valoriser chaque effort"],
        ["Trace la lettre i sur ton ardoise → Corrigé : vérifier le tracé","Combien d'éléments a la lettre i ? → Corrigé : 2 (un bâton et un point)","Qui peut tracer 3 fois la lettre i ? → Corrigé : évaluation gestuelle"]),

      m("LANGAGE","Se présenter : mon nom et le nom de la maîtresse",
        "Apprendre à dire son prénom complet et à nommer sa maîtresse.",
        ["Rappel : se présenter (prénom)","Ajouter le nom de famille : 'Je m'appelle Prénom Nom'","Présenter la maîtresse : 'Ma maîtresse s'appelle Madame...'","Jeu du ballon : 'Je m'appelle... et ma maîtresse s'appelle...'","Dessiner un portrait de la maîtresse","Écrire son prénom sur son dessin","Récapitulatif : son nom et le nom de la maîtresse"],
        ["Comment tu t'appelles (prénom et nom) ? → Corrigé : réponse individuelle","Comment s'appelle ta maîtresse ? → Corrigé : Madame ...","Dessine ta maîtresse → Corrigé : évaluation libre"]),

      m("PRE-MATH","Plein et vide : comparer des contenants",
        "Comprendre les notions plein et vide par manipulation concrète de contenants.",
        ["Montrer un verre plein d'eau et un verre vide","Nommer : plein — vide","Verser l'eau d'un verre à l'autre : plein devient vide","Montrer différents contenants (bouteille, bol, assiette)","Les enfants désignent le contenant plein ou vide","Jeu : remplir les contenants avec du sable ou de l'eau","Récapitulatif : plein / vide"],
        ["Lequel est plein ? (montrer deux verres) → Corrigé : le verre avec de l'eau","Que se passe-t-il quand on verse l'eau ? → Corrigé : le premier devient vide, le deuxième est plein","Remplis ce bol avec du sable → Corrigé : évaluation gestuelle"]),

      m("MATHS","Les nombres de 0 à 5 : compter et représenter",
        "Construire la suite numérique de 0 à 5 avec des objets concrets et des doigts.",
        ["Compter de 0 à 5 avec les doigts","Montrer 0 : aucun objet sur la table","Montrer 1, 2, 3, 4, 5 avec des objets","Associer le chiffre et la quantité","Chanter la comptine des chiffres 0-5","Exercice : mettre le bon nombre d'objets","Récapitulatif : les 6 chiffres 0 à 5"],
        ["Montre 4 doigts → Corrigé : évaluation gestuelle","Combien d'objets y a-t-il ? (en poser 3) → Corrigé : 3","Quel chiffre vient après 2 ? → Corrigé : 3"]),

      m("MORALE","Politesse en classe : dire bonjour et merci",
        "Ancrer les formules de politesse de base par des jeux de rôle simples.",
        ["Montrer comment dire bonjour le matin en entrant","Dire merci quand on reçoit quelque chose","Dire s'il vous plaît pour demander","Jeu de rôle : entrer en classe et saluer la maîtresse","Jeu de rôle : recevoir un crayon et dire merci","Afficher les mots de politesse avec des images","Récapitulatif : 3 mots magiques"],
        ["Que dit-on quand on entre en classe ? → Corrigé : Bonjour Madame","Que dit-on quand on reçoit un cadeau ? → Corrigé : Merci","Comment demande-t-on quelque chose ? → Corrigé : S'il vous plaît"]),

      m("ENVIRONNEMENT","Les fournitures scolaires : crayon, cahier, sac",
        "Identifier et nommer les fournitures scolaires essentielles de la maternelle.",
        ["Sortir les objets du sac : crayon, cahier, trousse","Nommer chaque objet en français et malagasy","À quoi sert chaque objet ?","Jeu de Kim : cacher un objet et deviner lequel manque","Ranger les objets dans la trousse puis dans le sac","Colorier une image de fournitures scolaires","Récapitulatif : 5 fournitures nommées"],
        ["Comment s'appelle cet objet ? (montrer un crayon) → Corrigé : un crayon / penisily","À quoi sert un cahier ? → Corrigé : à écrire et à dessiner","Où range-t-on ses affaires ? → Corrigé : dans le sac / la trousse"]),

      m("ANGLAIS","Greeting et Introducing : Hello, What is your name?",
        "Apprendre les expressions de salutation et de présentation en anglais.",
        ["Révision : Hello, Goodbye","Nouveau : What is your name? — My name is...","Modèle en chaîne : chaque enfant se présente en anglais","How are you? — I'm fine / I'm happy","Jeu de marionnettes : la marionnette salue les enfants","Chanson : Hello song","Récapitulatif : 4 expressions en anglais"],
        ["What is your name? → Corrigé : My name is ...","How are you? → Corrigé : I'm fine, thank you","Say hello to your friend → Corrigé : Hello !"]),

      m("CHANT","Bonjour / Good morning — Mémoriser la chanson",
        "Mémoriser la chanson bilingue 'Bonjour / Good morning' avec les gestes.",
        ["Révision de la semaine passée","Chanter ensemble avec les gestes","Chanter par groupes : les filles, puis les garçons","Ajouter de l'expression : fort, doux, lent, rapide","Jeu : chanter en ronde","Évaluation : qui peut chanter seul ?","Récapitulatif : la chanson avec les gestes"],
        ["Chante 'Bonjour / Good morning' → Corrigé : évaluation orale","Quel geste fait-on pour 'Bonjour' ? → Corrigé : évaluation gestuelle","Que dit-on le matin dans la chanson ? → Corrigé : Bonjour / Good morning"]),

      m("RECITATION","La rentrée — Mémoriser le début du poème",
        "Mémoriser les 2 premières lignes du poème 'La rentrée' par répétition collective.",
        ["Rappel : écouter le poème entier","Répéter la ligne 1 en chœur (5 fois)","Répéter la ligne 2 en chœur (5 fois)","Enchaîner les 2 lignes","Réciter avec des gestes","Réciter individuellement (volontaires)","Afficher le poème illustré dans la classe"],
        ["Récite la première ligne → Corrigé : évaluation orale","Combien de lignes connais-tu maintenant ? → Corrigé : 2 lignes","Récite les 2 premières lignes → Corrigé : évaluation orale"]),

      m("EPS","Mouvements corporels : en haut / en bas",
        "Apprendre et expérimenter les notions 'en haut' et 'en bas' par des mouvements du corps.",
        ["Lever les bras en haut : 'en haut !'","Baisser les bras en bas : 'en bas !'","Sauter en levant les bras","Accroupir les bras en bas","Jeu : 'Simon dit — en haut !' ou 'en bas !'","Pointer en haut (le plafond) et en bas (le sol)","Répéter vite, puis lentement"],
        ["Lève les bras en haut → Corrigé : évaluation gestuelle","Montre-moi 'en bas' → Corrigé : baisser les bras ou se baisser","Que fait-on quand on dit 'en haut' ? → Corrigé : on lève les bras"]),

      m("DESSIN","Dessiner une fourniture scolaire",
        "Dessiner un objet scolaire simple (crayon, livre) en suivant un modèle.",
        ["Montrer l'objet réel et une image simple","Observer les formes : rectangle (livre), long triangle (crayon)","Tracer le contour de l'objet étape par étape","Ajouter les détails","Colorier avec les bonnes couleurs","Écrire le nom de l'objet avec l'aide de la maîtresse","Exposer les dessins"],
        ["Qu'as-tu dessiné ? → Corrigé : un crayon / un livre","De quelle couleur est ton crayon dessiné ? → Corrigé : réponse libre","Montre la forme de base de ton dessin → Corrigé : rectangle ou ligne longue"]),

      m("TRAVAUX MANUELS","Découpage libre avec les ciseaux",
        "Initier les enfants à l'utilisation des ciseaux en toute sécurité par du découpage libre.",
        ["Présenter les ciseaux à bouts ronds","Règle de sécurité : on ne court pas avec des ciseaux","Montrer comment tenir les ciseaux (4 doigts dans le grand trou, pouce dans le petit)","Pratiquer l'ouverture et la fermeture","Découper librement du papier journal","Ne jamais pointer les ciseaux vers quelqu'un","Ranger les ciseaux après usage"],
        ["Comment tient-on les ciseaux ? → Corrigé : 4 doigts et le pouce dans les trous","Que ne faut-il jamais faire avec des ciseaux ? → Corrigé : courir avec, les pointer vers quelqu'un","Où range-t-on les ciseaux ? → Corrigé : dans la boîte, pointe vers le bas"]),

      m("CONTE","Ny akoho sy ny papango — découverte",
        "Découvrir ce conte traditionnel malgache (« Le poulet et le milan ») par l'écoute active et l'observation d'images séquentielles, en identifiant les 2 personnages principaux.",
        ["Présenter les images du conte une par une, dans l'ordre","Raconter le conte avec expression et voix différenciées par personnage","Nommer les 2 personnages : ny akoho (le poulet) et ny papango (le milan)","Poser 2 questions de compréhension immédiate","Faire répéter un cri ou une réplique clé d'un personnage"],
        ["Comment s'appellent les 2 personnages du conte ? → Corrigé : ny akoho (le poulet) et ny papango (le milan)","Montre l'image où l'on voit le papango. → Corrigé : bonne image pointée","As-tu aimé ce conte ? → Corrigé : réponse personnelle"])

    ],
  },

  {
    n:3, dates:"21/09/2026 – 25/09/2026",
    theme:"12ème Maternelle — Lettre a · Nombres 5-10 · Quantité",
    matieres:[

      m("LECTURE","La lettre a : reconnaissance visuelle et sonore",
        "Faire découvrir la lettre a par des activités sensorielles et ludiques adaptées aux tout-petits.",
        ["Montrer la lettre A en grande taille sur un carton","Prononcer le son [a] de façon exagérée : 'aaaaa'","Chercher des images avec le son [a] : arbre, âne, ampoule","Tracer la lettre a dans l'air avec le doigt","Retrouver la lettre a dans son prénom","Comptine : 'A comme arbre, a comme âne'","Jeu : qui peut dire un mot avec [a] ?"],
        ["Quel son fait la lettre a ? → Corrigé : [a]","Montre la lettre a dans le mot 'arbre' → Corrigé : pointer le a","Cite un mot avec le son [a] → Corrigé : arbre, âne, avion"]),

      m("VAKITENY","Lettre a : écouter et répéter des mots contenant a",
        "Renforcer la conscience phonologique du son [a] par des jeux de répétition.",
        ["Comptine : 'A comme ala (forêt), a comme akoho'","Répéter des mots malagasy avec [a] : ala, akoho, anana","Jeu : clapper sur le son [a]","Claper les mains sur le [a] dans : arbre, bois, âne, table","Répertorier les mots avec [a]","Mimer des mots avec le son [a]","Récapitulatif : 5 mots avec [a]"],
        ["Frappe si tu entends [a] : ala, sekoly, ana → Corrigé : ala et ana","Nomme un mot malagasy avec [a] → Corrigé : ala, akoho, anana","Répète : ala → Corrigé : ala"]),

      m("ÉCRITURE","Lettre a : tracer la lettre a en maternelle",
        "Apprendre à tracer la lettre a en suivant le modèle pas à pas.",
        ["Montrer le tracé de a : un rond et un bâton à droite","Tracer dans l'air avec le gros doigt","Tracer sur le dos d'un camarade","Tracer sur l'ardoise avec la grosse craie","Tracer sur papier préligné avec un gros crayon","Compter le nombre de a tracés","Valoriser les progrès et féliciter"],
        ["Trace la lettre a sur ton ardoise → Corrigé : vérifier le tracé","Combien d'éléments a la lettre a ? → Corrigé : un rond et un bâton","Trace 3 fois la lettre a → Corrigé : évaluation gestuelle"]),

      m("LANGAGE","Se présenter : âge, classe et lieu d'habitation",
        "Enrichir la présentation personnelle en ajoutant l'âge, la classe et le quartier.",
        ["Rappel de la semaine : prénom et nom de la maîtresse","Ajouter : 'J'ai ... ans'","Ajouter : 'J'habite à ...'","Modèle complet : 'Je m'appelle..., j'ai ... ans, j'habite à ...'","Jeu en cercle : chacun dit son modèle","Deviner qui parle selon les descriptions","Récapitulatif : les 4 informations de la présentation"],
        ["Quel âge as-tu ? → Corrigé : J'ai ... ans","Où habites-tu ? → Corrigé : J'habite à ...","Dis ta présentation complète → Corrigé : évaluation orale"]),

      m("PRE-MATH","Quantité : peu, beaucoup, rien",
        "Comprendre et utiliser le vocabulaire de la quantité relative : peu, beaucoup, rien.",
        ["Montrer une assiette vide : 'il n'y a rien'","Mettre 2 raisins : 'il y en a peu'","Remplir l'assiette : 'il y en a beaucoup'","Comparer deux groupes : peu vs beaucoup","Exercice : trier les images (peu/beaucoup/rien)","Jeu : remplir un bol avec peu ou beaucoup de sable","Récapitulatif : les 3 termes"],
        ["Montre un groupe de 'beaucoup' → Corrigé : pointer le groupe le plus grand","Y a-t-il peu ou beaucoup d'élèves dans la classe ? → Corrigé : réponse selon la classe","Remplis le bol avec peu de sable → Corrigé : évaluation gestuelle"]),

      m("MATHS","Les nombres de 5 à 10 : compter et représenter",
        "Construire la suite numérique de 5 à 10 en continuant depuis les acquis de la semaine 2.",
        ["Rappel : compter de 0 à 5","Continuer : 6, 7, 8, 9, 10","Montrer 6 à 10 objets et compter","Comptine des chiffres 0 à 10","Associer les chiffres 6-10 aux quantités","Exercice : placer le bon nombre d'objets","Récapitulatif : la suite de 0 à 10"],
        ["Compte de 5 à 10 → Corrigé : 5, 6, 7, 8, 9, 10","Combien d'objets y a-t-il ? (en poser 7) → Corrigé : 7","Quel chiffre vient après 8 ? → Corrigé : 9"]),

      m("MORALE","Discipline en classe : lever la main, écouter",
        "Consolider les règles de discipline par des pratiques répétées et des récompenses.",
        ["Rappel : les règles de politesse","Règle de discipline : lever la main avant de parler","Pratiquer : poser une question avec la main levée","Règle : écouter quand la maîtresse parle","Jeu : 'Qui écoute bien ?' — observer et récompenser","Système de points positifs pour la bonne discipline","Récapitulatif : 2 règles clés"],
        ["Que fait-on avant de parler ? → Corrigé : on lève la main","Que fait-on quand la maîtresse parle ? → Corrigé : on l'écoute en silence","Pourquoi ces règles sont-elles importantes ? → Corrigé : pour que tout le monde apprenne bien"]),

      m("ENVIRONNEMENT","Les fournitures scolaires (suite) : règle, gomme, trousse",
        "Identifier de nouvelles fournitures scolaires et comprendre leur utilité.",
        ["Rappel des fournitures de la semaine passée","Présenter de nouvelles fournitures : règle, gomme, trousse","À quoi sert une gomme ? (effacer les erreurs)","À quoi sert une règle ? (tracer des lignes droites)","Jeu de Kim : quel objet a disparu ?","Ranger chaque objet à sa place","Récapitulatif : 8 fournitures connues"],
        ["À quoi sert une gomme ? → Corrigé : à effacer les erreurs","Qu'est-ce qu'une trousse ? → Corrigé : une pochette pour ranger les crayons et stylos","Nomme 3 fournitures dans ton sac → Corrigé : réponse libre"]),

      m("ANGLAIS","School things : les objets de la classe en anglais",
        "Apprendre le vocabulaire des objets scolaires en anglais avec des flashcards.",
        ["Révision : Hello, What is your name?","Nouveaux mots : book, pencil, eraser, ruler, bag","Montrer la flashcard, dire le mot, répéter","Jeu : 'What is this?' en pointant les objets","Phrase : 'I have a book.'","Exercice : dessiner l'objet nommé en anglais","Récapitulatif : 5 objets en anglais"],
        ["How do you say 'crayon' in English? → Corrigé : pencil","What is this? (montrer une gomme) → Corrigé : eraser","Point to the book → Corrigé : évaluation gestuelle"]),

      m("CHANT","Bonjour / Good morning — Consolidation avec expression",
        "Consolider la chanson avec des variations de vitesse et d'expression.",
        ["Chanter la chanson lentement","Chanter plus vite","Chanter très doucement","Chanter très fort","Chanter en rond en se tenant par la main","Solo : un enfant chante devant les autres","Récapitulatif : la chanson maîtrisée"],
        ["Chante la chanson doucement → Corrigé : évaluation orale","Chante la chanson très fort → Corrigé : évaluation orale","Qui peut chanter seul devant la classe ? → Corrigé : évaluation volontaire"]),

      m("RECITATION","La rentrée — Mémoriser la suite du poème",
        "Mémoriser les 2 lignes suivantes du poème 'La rentrée' par répétition collective.",
        ["Rappel et révision des 2 lignes de la semaine passée","Apprendre la ligne 3 en chœur","Apprendre la ligne 4 en chœur","Enchaîner les 4 lignes","Récitation avec des gestes expressifs","Récitation individuelle pour volontaires","Réciter le poème depuis le début jusqu'à la ligne 4"],
        ["Récite les 2 premières lignes → Corrigé : évaluation orale","Ajoute la 3ème ligne → Corrigé : évaluation orale","Récite le poème jusqu'à la ligne 4 → Corrigé : évaluation orale"]),

      m("EPS","Mouvements : assis / debout",
        "Apprendre à contrôler son corps en réponse aux instructions assis/debout.",
        ["Position de départ : debout","Sur signal : s'asseoir rapidement","Sur signal : se lever rapidement","Jeu : 'Simon dit — debout !' ou 'assis !'","Varier la vitesse : lent, rapide","Jeu collectif : assis si garçon, debout si fille","Récapitulatif : les deux positions"],
        ["Lève-toi ! → Corrigé : évaluation gestuelle","Assieds-toi ! → Corrigé : évaluation gestuelle","Que fait-on quand on entend 'debout' ? → Corrigé : on se lève"]),

      m("DESSIN","Dessiner une fourniture scolaire — suite",
        "Dessiner une deuxième fourniture scolaire (cahier ou trousse) en suivant les étapes.",
        ["Choisir l'objet à dessiner : cahier ou trousse","Observer les formes : rectangle","Tracer le contour à main levée","Ajouter les détails (lignes du cahier, fermeture de la trousse)","Colorier avec soin","Écrire le nom de l'objet","Comparer les deux dessins de la semaine"],
        ["Qu'est-ce que tu dessines cette semaine ? → Corrigé : un cahier ou une trousse","Quelle forme a un cahier ? → Corrigé : un rectangle","Écris le nom de l'objet → Corrigé : aide si besoin"]),

      m("TRAVAUX MANUELS","Modelage en pâte à modeler : faire une boule",
        "Développer la motricité fine en modelant des boules et des rouleaux de pâte à modeler.",
        ["Distribuer la pâte à modeler","Montrer comment rouler une boule entre les paumes","Les enfants font une grosse boule","Faire une petite boule","Faire un rouleau en frottant","Créer un animal simple avec les formes","Ranger la pâte dans les boîtes"],
        ["Comment fait-on une boule ? → Corrigé : on roule la pâte entre les mains","Fais une boule de la taille de ta paume → Corrigé : évaluation gestuelle","Que crées-tu avec tes boules ? → Corrigé : réponse libre"]),

      m("CONTE","Ny akoho sy ny papango — suite",
        "Poursuivre le conte en développant la compréhension de l'intrigue (pourquoi le papango poursuit-il ny akoho ?) et en faisant répéter une réplique du personnage principal.",
        ["Rappel des personnages et du début de l'histoire","Raconter la suite du conte avec les images","Discuter : que veut le papango ? comment réagit ny akoho ?","Faire répéter une réplique du personnage principal","Demander une prédiction simple sur la suite"],
        ["Que veut le papango dans cette partie de l'histoire ? → Corrigé : réponse conforme au passage raconté","Répète ce que dit ny akoho. → Corrigé : réplique répétée fidèlement","Que va-t-il se passer selon toi ? → Corrigé : prédiction libre acceptée si cohérente"])

    ],
  },

  {
    n:4, dates:"28/09/2026 – 02/10/2026",
    theme:"12ème Maternelle — Lettre o · Nombres 0-10 · Le corps humain",
    matieres:[

      m("LECTURE","La lettre o : reconnaissance visuelle et sonore",
        "Faire découvrir la lettre o et consolider les voyelles apprises (a, i, o).",
        ["Montrer la lettre O en grande taille","Prononcer le son [o] : 'oooo'","Chercher des images avec [o] : orange, oiseau, omby","Révision : a, i, o — les 3 voyelles apprises","Comptine des voyelles A-I-O","Retrouver les 3 voyelles dans des mots","Récapitulatif : 3 voyelles maîtrisées"],
        ["Quel son fait la lettre o ? → Corrigé : [o]","Cite un mot avec [o] → Corrigé : orange, oiseau, eau","Montre les 3 voyelles apprises → Corrigé : a, i, o"]),

      m("VAKITENY","Lettre o : écouter et répéter des mots contenant o",
        "Renforcer la conscience phonologique du son [o] et réviser les sons [a] et [i].",
        ["Comptine : 'O comme omby (zébu), o comme orona'","Jeu : clapper sur le [o] dans une suite de mots","Révision : clapper sur [a], [i], [o] séparément","Jeu combiné : lever la main pour [a], taper les pieds pour [o]","Chanter une comptine avec les 3 voyelles","Trouver des mots malagasy avec chaque voyelle","Récapitulatif : sons [a], [i], [o]"],
        ["Frappe si tu entends [o] : omby, sekoly, orona → Corrigé : omby et orona","Quel son entends-tu dans 'ala' ? → Corrigé : [a]","Nomme un mot malagasy avec [o] → Corrigé : omby, orona, ony"]),

      m("ÉCRITURE","Lettre o : tracer la lettre o",
        "Apprendre à tracer la lettre o (un rond fermé) et consolider les lettres a et i.",
        ["Montrer le tracé de o : un rond bien fermé","Tracer dans l'air avec le doigt","Tracer sur l'ardoise","Tracer sur papier préligné","Révision rapide : tracer a, i, o","Exercice : écrire une ligne de a, une ligne de i, une ligne de o","Comparer les 3 lettres : formes et tracés"],
        ["Trace la lettre o sur ton ardoise → Corrigé : vérifier le tracé","Quelle lettre est faite d'un rond ? → Corrigé : o","Trace les 3 voyelles dans l'ordre → Corrigé : a, i, o"]),

      m("LANGAGE","Mon nom : le dire, l'écrire et l'épeler",
        "Identifier et épeler son prénom, première étape vers l'écriture autonome.",
        ["Chaque enfant dit son prénom et le compte (nombre de lettres)","Épeler son prénom : M-A-R-I-E","Reconnaître son prénom écrit sur une étiquette","Trier les étiquettes des prénoms : trouver le sien","Décorer son étiquette de prénom","Écrire les lettres de son prénom avec aide","Afficher les prénoms décorés"],
        ["Dis et épelle ton prénom → Corrigé : évaluation individuelle","Combien de lettres a ton prénom ? → Corrigé : compter ensemble","Trouve ton étiquette-prénom → Corrigé : évaluation individuelle"]),

      m("PRE-MATH","Grandeur : grand et petit",
        "Comparer des objets selon leur taille et utiliser le vocabulaire grand/petit.",
        ["Montrer deux objets de taille très différente","Nommer : grand et petit","Comparer des enfants : le plus grand, le plus petit de la classe","Classer des objets du plus petit au plus grand","Exercice : dessiner un grand arbre et un petit arbre","Jeu : 'Montre-moi le grand...'","Récapitulatif : grand / petit / plus grand / plus petit"],
        ["Montre le plus grand objet → Corrigé : évaluation gestuelle","Dessine un grand chapeau et un petit chapeau → Corrigé : vérifier","Qui est le plus grand de la classe ? → Corrigé : réponse collective"]),

      m("MATHS","Les nombres de 0 à 10 : révision complète",
        "Consolider l'ensemble de la suite numérique 0-10 par des activités variées.",
        ["Compter de 0 à 10 et de 10 à 0 (à rebours)","Compter en sautant : 0, 2, 4, 6, 8, 10","Associer chaque chiffre à sa quantité","Jeu de loto des chiffres","Placer les chiffres dans l'ordre sur une frise","Exercice : relier le chiffre au bon nombre d'objets","Récapitulatif : la frise numérique 0-10"],
        ["Compte de 0 à 10 → Corrigé : 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10","Compte à rebours de 5 à 0 → Corrigé : 5, 4, 3, 2, 1, 0","Montre 9 doigts → Corrigé : évaluation gestuelle"]),

      m("MORALE","L'hygiène du corps : se laver les mains et le visage",
        "Apprendre les gestes d'hygiène essentiels : se laver les mains et le visage.",
        ["Pourquoi se laver ? (pour éliminer les microbes)","Démonstration : se laver les mains (6 gestes)","Étape 1 : mouiller les mains","Étape 2 : savonner","Étape 3 : frotter","Étape 4 : rincer","Récapitulatif : les étapes du lavage des mains"],
        ["Pourquoi se lave-t-on les mains ? → Corrigé : pour éliminer les microbes","Combien d'étapes pour se laver les mains ? → Corrigé : 6 étapes","Quand doit-on se laver les mains ? → Corrigé : avant de manger, après les toilettes"]),

      m("ENVIRONNEMENT","Le corps humain : les parties du corps",
        "Identifier et nommer les principales parties du corps humain.",
        ["Montrer un grand dessin du corps humain","Nommer : la tête, le bras, la jambe, le pied, la main","Toucher la partie nommée sur son propre corps","Chanter 'Promenons-nous dans les bois' ou comptine du corps","Dessiner un bonhomme simple","Légender 3 parties du corps sur le dessin","Récapitulatif : 6 parties du corps nommées"],
        ["Montre ta tête → Corrigé : évaluation gestuelle","Nomme cette partie (pointer le bras) → Corrigé : le bras","Combien d'oreilles a un humain ? → Corrigé : 2"]),

      m("ANGLAIS","The body : les parties du corps en anglais",
        "Apprendre le vocabulaire du corps humain en anglais.",
        ["Rappel des objets scolaires en anglais","Nouveaux mots : head, eyes, nose, mouth, hand, arm, leg","Comptine 'Head, Shoulders, Knees and Toes'","Jeu : 'Touch your head!'","Phrase simple : 'I have two eyes.'","Dessiner et légender un bonhomme en anglais","Récapitulatif : 7 mots du corps"],
        ["Touch your nose → Corrigé : évaluation gestuelle","What are these? (pointer les yeux) → Corrigé : eyes","Sing 'Head, Shoulders, Knees and Toes' → Corrigé : évaluation orale"]),

      m("CHANT","Bonjour / Good morning — Consolidation finale",
        "Maîtriser la chanson 'Bonjour / Good morning' et la chanter avec confiance.",
        ["Chanter la chanson complète avec tous les gestes","Évaluation : petit groupe devant la classe","Chanter en canon si les enfants sont prêts","Ajouter un instrument de percussion (taper dans les mains)","Chanter dans la cour pour d'autres classes","Inventer un nouveau couplet simple","Récapitulatif : la chanson mémorisée"],
        ["Chante la chanson avec les gestes → Corrigé : évaluation orale","Quel couplet préfères-tu ? → Corrigé : réponse libre","Chante la chanson pour tes camarades → Corrigé : évaluation orale"]),

      m("RECITATION","La rentrée — Récitation complète",
        "Réciter le poème 'La rentrée' dans son intégralité avec expression.",
        ["Révision : réciter les 4 lignes connues","Apprendre la dernière partie si le poème est plus long","Récitation collective avec expression","Récitation par groupes (filles, garçons)","Récitation individuelle pour les volontaires","Évaluation finale : noter les progrès","Récapitulatif : le poème maîtrisé"],
        ["Récite le poème entier → Corrigé : évaluation orale","Récite avec de l'expression (fort/doux/lent) → Corrigé : évaluation orale","De quoi parle le poème 'La rentrée' ? → Corrigé : du retour à l'école"]),

      m("EPS","Jeux libres et organisés dans la cour",
        "Développer la motricité globale par des jeux libres et des jeux organisés simples.",
        ["Échauffement : marcher, puis courir lentement","Jeu organisé 1 : 'Les statues' — s'arrêter sur signal","Jeu organisé 2 : 'Le train' — faire une chaîne","Jeu libre : explorer la cour librement","Jeu coopératif : transporter une balle sans les mains","Retour au calme : respiration lente","Récapitulatif : les jeux préférés"],
        ["Qu'est-ce que le jeu des statues ? → Corrigé : on s'arrête et on ne bouge plus sur signal","Fais partie du train : tiens l'épaule du camarade → Corrigé : évaluation gestuelle","Quel jeu as-tu préféré ? → Corrigé : réponse libre"]),

      m("DESSIN","Coloriage : les cheveux du bonhomme",
        "Colorier les cheveux d'un bonhomme prédessiné en choisissant des couleurs et en restant dans les contours.",
        ["Distribuer une feuille avec un bonhomme prédessiné","Observer le bonhomme : tête, corps, membres","Choisir la couleur des cheveux","Colorier doucement en restant dans le contour","Choisir la couleur du visage et du corps","Colorier les vêtements","Signer et exposer le bonhomme colorié"],
        ["Quelle couleur as-tu choisie pour les cheveux ? → Corrigé : réponse libre","As-tu bien colorié sans dépasser ? → Corrigé : observation","Combien de couleurs as-tu utilisées ? → Corrigé : au moins 3"]),

      m("TRAVAUX MANUELS","Modelage en pâte à modeler : un bonhomme simple",
        "Créer un bonhomme simple en pâte à modeler en utilisant les techniques de boule et rouleau.",
        ["Rappel : faire une boule (tête) et un rouleau (corps)","Faire la tête : grosse boule","Faire le corps : gros rouleau","Assembler tête et corps","Ajouter les bras : 2 petits rouleaux","Ajouter les jambes : 2 gros rouleaux","Présenter son bonhomme"],
        ["Combien de boules faut-il pour un bonhomme ? → Corrigé : 1 pour la tête","Combien de jambes a ton bonhomme ? → Corrigé : 2","Présente ton bonhomme à la classe → Corrigé : évaluation orale"]),

      m("CONTE","Ny akoho sy ny papango — fin et restitution",
        "Conclure le conte en travaillant la restitution de la fin de l'histoire et en réinvestissant les 2 personnages sur les 3 semaines.",
        ["Rappel de toute l'histoire à l'aide des images dans l'ordre","Raconter la fin du conte","Discuter de ce qu'on retient de l'histoire","Faire raconter l'histoire complète par un enfant volontaire avec l'aide des images"],
        ["Comment se termine l'histoire de ny akoho sy ny papango ? → Corrigé : résumé de la fin conforme au conte raconté","Raconte l'histoire entière avec tes mots (avec les images). → Corrigé : récit cohérent couvrant début-milieu-fin","Quel personnage as-tu préféré ? Pourquoi ? → Corrigé : réponse personnelle justifiée"])

    ],
  }

  ] },
];

const OCTOBRE_12EME = [

  {
    n:1, dates:"05/10/2026 – 09/10/2026",
    theme:"Lettres u (Lecture/Écriture) · o (Vakiteny) · Les formes · Nombres pairs 0 à 10 · La propreté",
    matieres:[

      m("LECTURE","La lettre u : son [y] et reconnaissance visuelle",
        "Introduire la voyelle u par la méthode syllabique : isoler le son [y] à l'oral dans des mots familiers, puis passer à sa forme écrite. S'appuyer sur les voyelles déjà connues (i, a, o vues en septembre) pour comparer les sons.",
        ["Montrer la lettre U en grand format au tableau (majuscule et minuscule)","Prononcer le son [y] en exagérant la forme des lèvres (bouche arrondie et avancée)","Chercher des mots contenant [y] : tu, lu, mur, jupe","Comparer avec les voyelles déjà connues, faire répéter individuellement","Tracer la lettre u dans l'air avec le doigt","Retrouver le u caché parmi d'autres lettres sur une affiche","Jeu : lever la main dès qu'on entend [y] dans une liste de mots dits par l'enseignant"],
        ["Quel son fait la lettre u ? → Corrigé : [y] (comme dans « tu »)","Parmi ces mots dits à voix haute — tu, papa, mur, boule — lève la main quand tu entends [y]. → Corrigé : tu, mur","Entoure toutes les lettres u dans cette ligne : a u i u o u → Corrigé : les 3 « u » entourés","Trouve un mot de la classe qui contient le son [y]. → Corrigé : toute réponse contenant réellement [y] (ex : jupe, lunette)"]),

      m("VAKITENY","La lettre o : écouter et repérer le son [o] en malagasy",
        "Renforcer la conscience phonologique du son [o] en malagasy à partir de mots familiers du quotidien de l'enfant.",
        ["Montrer la lettre O en grand format au tableau","Prononcer le son [o] en l'isolant dans des mots connus : omby, orana, vary","Répéter en chœur puis individuellement","Jeu : « Tape dans tes mains si tu entends [o] » sur une liste de mots dits par la maîtresse","Chercher des objets ou animaux de la classe dont le nom contient [o]","Comptine des voyelles malagasy : A, E, I, O","Récapitulatif : 3 mots malagasy avec [o]"],
        ["Quel son fait cette lettre ? (montrer o) → Corrigé : [o]","Frappe dans tes mains si tu entends [o] : vary, omby, tany → Corrigé : omby","Cite un mot malagasy avec le son [o]. → Corrigé : omby, orana, vory (une réponse correcte acceptée)","Entoure les « o » dans cette ligne : a o i o u → Corrigé : les 2 « o » entourés"]),

      m("ÉCRITURE","La lettre u : tracer deux ponts et une canne",
        "Apprendre le tracé de la lettre u (deux ponts accolés se terminant par une petite canne) en développant la motricité fine et le sens de l'écriture gauche-droite.",
        ["Montrer le tracé au tableau : on monte, on redescend, on remonte, on redescend avec une petite canne à la fin","Tracer dans l'air avec le doigt en verbalisant « je monte, je descends, je monte, je descends »","Tracer sur l'ardoise à la craie (format large)","Tracer sur papier préligné (interligne large) avec un gros crayon","Comparer avec la lettre i déjà connue (le u a deux ponts, le i un seul bâton)","Repasser sur un modèle en pointillés","Tracer 5 fois la lettre u sur une même ligne"],
        ["Trace la lettre u sur ton ardoise. → Corrigé : deux ponts visibles, tracé de gauche à droite, canne finale présente","Combien de ponts a la lettre u ? → Corrigé : 2","Quelle lettre a un seul bâton : u ou i ? → Corrigé : i","Trace 3 fois la lettre u sur la ligne sans dépasser les repères. → Corrigé : évaluation selon les 3 critères (2 ponts, sens du tracé, tenue dans les lignes)"]),

      m("LANGAGE","François va chez le coiffeur — découverte de l'histoire",
        "Introduire l'histoire « François va chez le coiffeur » comme support de vocabulaire du quotidien (coiffeur, ciseaux, miroir) et de structuration de phrases simples sujet-verbe-complément.",
        ["Raconter l'histoire avec des images séquentielles (avant / pendant / après la coupe)","Nommer le vocabulaire nouveau : le coiffeur, les ciseaux, le miroir, la coupe de cheveux","Mimer l'action de se faire couper les cheveux","Répéter la phrase clé : « François va chez le coiffeur »","Poser 3 questions de compréhension simples après l'écoute","Jeu de rôle : un enfant joue le coiffeur, un autre le client"],
        ["Où va François ? → Corrigé : chez le coiffeur","Que fait le coiffeur ? → Corrigé : il coupe les cheveux","Montre l'image du coiffeur en train de couper les cheveux. → Corrigé : bonne image pointée","Répète la phrase : « François va chez le coiffeur ». → Corrigé : phrase répétée avec la structure sujet-verbe-complément"]),

      m("PRE-MATH","Les formes : rond, carré, triangle",
        "Découvrir et nommer les 3 formes géométriques de base par manipulation et tri d'objets concrets, sans exigence de tracé (la motricité fine sur ces formes n'est pas encore travaillée).",
        ["Présenter un rond, un carré, un triangle en pâte à modeler ou en carton","Nommer chaque forme et la faire répéter","Trier une boîte d'objets/formes mélangées par catégorie","Chercher des formes rondes, carrées, triangulaires dans la classe (horloge=rond, fenêtre=carré...)","Jeu : la maîtresse montre une forme, les enfants la nomment","Associer une forme à son contour tracé au tableau"],
        ["Montre-moi le rond. → Corrigé : la forme ronde désignée","Quelle forme a 3 côtés ? → Corrigé : le triangle","Trie ces formes en 3 tas : rond, carré, triangle. → Corrigé : tri correct des formes fournies","Cite un objet rond de la classe. → Corrigé : horloge, ballon, assiette (une réponse valable acceptée)"]),

      m("MATHS","Les nombres pairs de 0 à 10",
        "Construire la suite des nombres pairs (0, 2, 4, 6, 8, 10) en s'appuyant sur le comptage de 0 à 10 déjà acquis en septembre, par manipulation d'objets groupés par paires.",
        ["Rappel : compter de 0 à 10 avec les doigts","Grouper des objets par 2 sur la table : 2, 4, 6, 8, 10","Nommer « nombre pair » = qu'on peut ranger par 2 sans qu'il en reste","Réciter la suite 0, 2, 4, 6, 8, 10","Colorier les cases paires sur une bande numérique 0-10","Jeu : distribuer des jetons par paires à chaque enfant"],
        ["Récite la suite des nombres pairs de 0 à 10. → Corrigé : 0, 2, 4, 6, 8, 10","Range ces 6 crayons par 2. Combien de paires obtiens-tu ? → Corrigé : 3 paires","Ce nombre est-il pair : 4 ? → Corrigé : oui","Colorie les nombres pairs sur la bande 0 à 10. → Corrigé : 0, 2, 4, 6, 8, 10 coloriés"]),

      m("MORALE","La propreté du corps",
        "Ancrer les gestes d'hygiène corporelle quotidienne (mains, dents) par la démonstration et la répétition ritualisée, en lien avec les objets de toilette vus en Environnement cette même semaine.",
        ["Présenter les objets de toilette (savon, brosse à dents, serviette) vus en Environnement","Montrer les gestes : se laver les mains avant de manger, après les toilettes","Montrer les gestes : se brosser les dents matin et soir","Chanter une chanson sur la propreté pour rythmer les gestes","Jeu de rôle : mimer sa toilette du matin dans l'ordre","Vérifier au quotidien : mains propres avant le goûter"],
        ["Montre comment tu te laves les mains. → Corrigé : mouiller, savonner, frotter au moins 15 secondes, rincer, sécher","Quand se lave-t-on les mains ? → Corrigé : avant de manger, après les toilettes, en rentrant de récréation","Combien de fois par jour se brosse-t-on les dents ? → Corrigé : 2 fois (matin et soir)","Pourquoi est-il important d'être propre ? → Corrigé : pour rester en bonne santé et ne pas transmettre de microbes"]),

      m("ENVIRONNEMENT","Les objets de toilette",
        "Identifier et nommer les objets de toilette usuels par manipulation directe, en lien avec la routine d'hygiène de la matière Morale.",
        ["Apporter une trousse de toilette réelle : savon, brosse à dents, peigne, serviette","Sortir chaque objet un par un et le nommer","Expliquer l'usage de chaque objet","Jeu de Kim : cacher un objet, deviner lequel manque","Associer chaque objet à l'image correspondante","Ranger les objets dans la trousse en les nommant"],
        ["Comment s'appelle cet objet ? (montrer le savon) → Corrigé : le savon","À quoi sert la brosse à dents ? → Corrigé : à se laver / brosser les dents","Montre l'objet qui sert à se peigner. → Corrigé : le peigne pointé","Cite 3 objets de toilette. → Corrigé : savon, brosse à dents, serviette, peigne (3 parmi ces réponses)"]),

      m("ANGLAIS","Bathroom furnitures",
        "Introduire le vocabulaire anglais des objets de la salle de bain en écho direct au thème d'Environnement de la semaine, par flashcards et répétition.",
        ["Flashcards : soap, toothbrush, towel, comb","Répéter chaque mot 3 fois en montrant l'objet réel ou l'image","Jeu « Point to the... » : la maîtresse dit un mot, les enfants pointent l'image","Chanson courte reprenant les mots (sur un air connu)","Associer l'image anglaise au mot français déjà appris en Environnement"],
        ["What is this? (montrer le savon) → Corrigé : soap","Point to the towel. → Corrigé : la serviette pointée","How do you say « brosse à dents » in English? → Corrigé : toothbrush","Repeat: « soap ». → Corrigé : prononciation évaluée"]),

      m("CHANT","Ce que j'ai — découverte",
        "Apprendre une chanson qui énumère des possessions personnelles simples (habits, jouets), pour enrichir le vocabulaire tout en travaillant la mémorisation par répétition rythmée.",
        ["Chanter la chanson en entier une première fois, lentement","Expliquer les mots nouveaux du refrain","Répéter le refrain en chœur, 3 fois","Ajouter des gestes correspondant aux paroles","Chanter par petits groupes","Repérer les mots qui riment"],
        ["Chante le refrain de « Ce que j'ai ». → Corrigé : refrain chanté conformément aux paroles apprises","Que dit la chanson que « j'ai » ? → Corrigé : citer 1 élément du texte de la chanson","Montre le geste qui va avec le refrain. → Corrigé : geste conforme à celui appris en classe","Chante avec ton voisin en te tenant la main. → Corrigé : performance en binôme évaluée"]),

      m("RECITATION","Un enfant propre — mémorisation des 2 premières lignes",
        "Mémoriser progressivement le poème « Un enfant propre » en écho au thème d'hygiène de la semaine, par répétition des 2 premières lignes.",
        ["Réciter le poème entier une fois avec expression","Expliquer le sens des mots (propre, savon, brosse...)","Répéter la 1ère ligne en chœur, 5 fois","Répéter la 2ème ligne en chœur, 5 fois","Enchaîner les 2 lignes ensemble","Réciter avec les gestes d'hygiène associés"],
        ["Récite la première ligne du poème. → Corrigé : ligne récitée conforme au texte appris","Combien de lignes connais-tu ? → Corrigé : 2 lignes","De quoi parle ce poème ? → Corrigé : d'un enfant qui prend soin de sa propreté","Récite les 2 lignes avec le bon geste. → Corrigé : texte + geste conformes à ce qui a été appris"]),

      m("EPS","Course",
        "Développer la course en ligne droite et le respect d'un signal de départ/arrêt, dans un espace délimité.",
        ["Délimiter un couloir de course de 15 mètres avec des plots ou une corde","Expliquer les 3 signaux : « à vos marques, prêts, partez ! »","Courir par groupes de 4 pour éviter les bousculades","Courir puis s'arrêter net au signal « stop »","Chronométrer de façon ludique en comptant à voix haute","Retour au calme : marche lente"],
        ["Cours jusqu'au plot sans t'arrêter. → Corrigé : distance complète parcourue en courant","Que fais-tu au signal « stop » ? → Corrigé : je m'arrête immédiatement","Dans quel couloir dois-tu rester en courant ? → Corrigé : le couloir délimité par les plots ou la corde","Combien d'enfants courent en même temps dans ton groupe ? → Corrigé : 4"]),

      m("DESSIN","Une serviette",
        "Dessiner une serviette de toilette (forme rectangulaire, motifs simples) en lien avec le thème d'Environnement de la semaine.",
        ["Montrer une vraie serviette pliée","Observer sa forme : un rectangle","Tracer le rectangle au tableau étape par étape","Chaque enfant trace son rectangle sur sa feuille","Ajouter des rayures ou motifs simples","Colorier la serviette"],
        ["Quelle forme de base a une serviette ? → Corrigé : un rectangle","Dessine une serviette. → Corrigé : rectangle reconnaissable avec au moins 1 motif ou couleur","De quelle couleur as-tu colorié ta serviette ? → Corrigé : réponse libre","Montre le rectangle de ta serviette. → Corrigé : la forme tracée pointée"]),

      m("TRAVAUX MANUELS","Coloriage",
        "Développer la préhension du crayon et le respect des contours par une activité de coloriage encadré (image liée au thème de la propreté).",
        ["Distribuer une image à colorier (un enfant se lavant les mains)","Rappeler la prise du crayon (prise tripode si possible)","Montrer comment rester dans les contours","Choisir des couleurs adaptées (peau, savon, eau)","Colorier en autonomie, l'enseignant circule pour aider","Exposer les productions"],
        ["Montre ta prise de crayon. → Corrigé : prise tripode observée (pouce, index, majeur)","As-tu colorié en restant dans les contours ? → Corrigé : évaluation visuelle du respect des contours","Quelle couleur as-tu utilisée pour le savon ? → Corrigé : couleur cohérente acceptée (blanc, bleu, rose)","Montre ton dessin colorié. → Corrigé : production présentée"]),

      m("CONTE","Ikotobekibo sy Faramalemy — découverte",
        "Découvrir ce conte traditionnel malagasy par l'écoute active, l'observation d'images séquentielles, et l'identification des personnages principaux.",
        ["Présenter les images du conte une par une, dans l'ordre","Raconter le conte avec expression et voix différenciées par personnage","Nommer les 2 personnages principaux : Ikotobekibo et Faramalemy","Poser 2-3 questions de compréhension immédiate","Faire répéter une réplique clé d'un personnage"],
        ["Comment s'appellent les 2 personnages principaux ? → Corrigé : Ikotobekibo et Faramalemy","Que se passe-t-il au début du conte ? → Corrigé : résumé oral conforme au début de l'histoire racontée","Montre l'image où Ikotobekibo apparaît. → Corrigé : bonne image pointée","As-tu aimé ce conte ? Pourquoi ? → Corrigé : réponse personnelle justifiée"])

    ],
  },

  {
    n:2, dates:"12/10/2026 – 16/10/2026",
    theme:"Sons du e (Lecture/Écriture) · e (Vakiteny) · Autant · Nombres impairs 1 à 10 · Les vêtements",
    matieres:[

      m("LECTURE","Les sons du e : e, é, è, ê",
        "Distinguer les 4 graphies du e (e ouvert, é fermé, è ouvert accent grave, ê accent circonflexe) en partant de l'écoute contrastée, sans exiger encore la maîtrise des accents à l'écrit — priorité à la discrimination auditive.",
        ["Faire entendre les 4 sons l'un après l'autre en exagérant l'articulation","Associer chaque son à un mot connu : le (e), blé (é), lève (è), tête (ê)","Jeu d'écoute : dire un mot, les enfants répètent le son du e entendu","Montrer les 4 lettres au tableau avec leurs accents","Chercher le e dans les prénoms de la classe","Comparer : « é » est un son fermé, « è » est un son ouvert"],
        ["Quel son entends-tu dans « blé » ? → Corrigé : [e] fermé (é)","Quel son entends-tu dans « tête » ? → Corrigé : [ɛ] (ê)","Montre la lettre é au tableau. → Corrigé : le é pointé","Cite un mot avec le son é. → Corrigé : blé, café, école (une réponse correcte acceptée)"]),

      m("VAKITENY","La lettre e : contraste avec le son [o]",
        "Renforcer la conscience phonologique du son [e] en malagasy par contraste avec le [o] appris la semaine précédente.",
        ["Montrer la lettre E au tableau","Prononcer [e] dans des mots connus : efatra, elatra","Comparer avec le son [o] vu la semaine dernière","Jeu : « Tape dans tes mains si tu entends [e] »","Répéter en chœur puis individuellement","Comptine des voyelles : A, E, I, O"],
        ["Quel son fait cette lettre ? (montrer e) → Corrigé : [e]","Frappe dans tes mains si tu entends [e] : omby, efatra, vary → Corrigé : efatra","Cite un mot malagasy avec le son [e]. → Corrigé : efatra, elatra (une réponse correcte acceptée)","Entoure les « e » dans cette ligne : o e i e u → Corrigé : les 2 « e » entourés"]),

      m("ÉCRITURE","Les lettres e, é, è, ê : tracé de la boucle simple",
        "Apprendre le tracé de base du e (une boucle simple partant du milieu de la ligne), commun aux 4 graphies, puis ajouter les accents comme signes distincts posés après le tracé de la lettre.",
        ["Montrer le tracé : on part au milieu, on fait une petite boucle vers la gauche puis on remonte","Tracer dans l'air en verbalisant le mouvement","Tracer sur l'ardoise, puis sur papier préligné","Ajouter l'accent aigu (é) : un petit trait qui monte de gauche à droite","Ajouter l'accent grave (è) : un petit trait qui descend de gauche à droite","Comparer les 2 accents côte à côte au tableau"],
        ["Trace la lettre e sur ton ardoise. → Corrigé : boucle simple, tracé fluide, dans le sens correct","Ajoute l'accent aigu sur ce e pour faire un é. → Corrigé : trait orienté du bas-gauche vers le haut-droit","Quelle est la différence entre é et è ? → Corrigé : l'accent aigu monte, l'accent grave descend","Trace 3 fois « é » sur la ligne. → Corrigé : lettre et accent correctement orientés"]),

      m("LANGAGE","François va chez le coiffeur — enrichir le vocabulaire",
        "Poursuivre l'exploitation de l'histoire en ajoutant du vocabulaire (le shampoing, le miroir) et en travaillant l'ordre chronologique des actions.",
        ["Rappel bref de l'histoire (résumé collectif)","Remettre 3 images de l'histoire dans l'ordre chronologique","Introduire 2 nouveaux mots : le shampoing, le miroir","Jeu de rôle enrichi avec les nouveaux accessoires (peigne, miroir en carton)","Faire raconter un court passage par un enfant volontaire"],
        ["Remets ces 3 images dans l'ordre de l'histoire. → Corrigé : arrivée → shampoing/coupe → miroir final","Que regarde François à la fin, chez le coiffeur ? → Corrigé : le miroir","Avec quoi le coiffeur lave-t-il les cheveux ? → Corrigé : le shampoing","Raconte un morceau de l'histoire avec tes mots. → Corrigé : récit cohérent avec un épisode réel de l'histoire"]),

      m("PRE-MATH","Autant : comparer deux collections égales",
        "Introduire la notion « autant que » par la mise en correspondance terme à terme de deux collections d'objets, sans passer par le comptage numérique.",
        ["Aligner 4 cuillères face à 4 assiettes : « y a-t-il autant de cuillères que d'assiettes ? »","Faire vérifier en reliant chaque cuillère à une assiette du doigt","Refaire avec des collections inégales pour contraste","Jeu : donner à chaque enfant autant de jetons rouges que de jetons bleus","Vérifier collectivement par alignement"],
        ["Y a-t-il autant de cuillères que d'assiettes ici ? → Corrigé : oui / non selon la configuration montrée","Mets autant de jetons bleus que de jetons rouges (en montrer 5 rouges). → Corrigé : 5 jetons bleus posés","Que signifie « autant » ? → Corrigé : la même quantité dans les deux groupes","Relie chaque cuillère à une assiette pour vérifier. → Corrigé : mise en correspondance correcte réalisée"]),

      m("MATHS","Les nombres impairs de 1 à 10",
        "Introduire les nombres impairs (1, 3, 5, 7, 9) en contraste direct avec les nombres pairs vus la semaine précédente, par manipulation d'objets qui ne peuvent pas être rangés par 2 sans reste.",
        ["Rappel : les nombres pairs vus la semaine dernière (0, 2, 4, 6, 8, 10)","Grouper 5 objets par 2 : il en reste 1 → nombre impair","Nommer la suite des nombres impairs : 1, 3, 5, 7, 9","Colorier les cases impaires sur la bande numérique 0-10 (autre couleur que les pairs)","Jeu : la maîtresse montre un nombre de jetons, les enfants disent « pair » ou « impair »"],
        ["Récite la suite des nombres impairs de 1 à 10. → Corrigé : 1, 3, 5, 7, 9","Range ces 5 crayons par 2. Que remarques-tu ? → Corrigé : il en reste 1, donc 5 est impair","Ce nombre est-il pair ou impair : 7 ? → Corrigé : impair","Colorie les nombres impairs sur la bande 0 à 10. → Corrigé : 1, 3, 5, 7, 9 coloriés"]),

      m("MORALE","La propreté des vêtements",
        "Sensibiliser au soin des vêtements (les garder propres, les ranger) en cohérence avec le thème des vêtements vu en Environnement cette même semaine.",
        ["Observer des images de vêtements propres et de vêtements sales","Discuter : pourquoi porter des vêtements propres ?","Montrer comment plier un vêtement simple (t-shirt)","Jeu de rôle : ranger ses vêtements après l'école","Règle de classe : ne pas s'asseoir par terre sale avec ses habits d'école"],
        ["Pourquoi faut-il porter des vêtements propres ? → Corrigé : pour être en bonne santé et se sentir bien","Montre comment plier un t-shirt. → Corrigé : pliage conforme à la démonstration faite en classe","Que fais-tu si ton vêtement est sale ? → Corrigé : je le donne à laver / je le change","Où ranges-tu tes vêtements propres ? → Corrigé : dans l'armoire ou le tiroir"]),

      m("ENVIRONNEMENT","Les vêtements",
        "Nommer les vêtements du quotidien et les catégoriser (haut du corps / bas du corps), à partir de vrais habits apportés en classe.",
        ["Apporter des vêtements réels : t-shirt, pantalon, robe, chaussettes","Nommer chaque vêtement","Trier : vêtements du haut / vêtements du bas","Jeu : habiller une poupée ou un mannequin en carton avec les bons mots","Associer chaque vêtement à l'image correspondante"],
        ["Comment s'appelle ce vêtement ? (montrer un pantalon) → Corrigé : un pantalon","Ce vêtement se porte-t-il en haut ou en bas du corps ? (montrer une chaussette) → Corrigé : en bas","Cite 3 vêtements que tu portes aujourd'hui. → Corrigé : réponse personnelle avec 3 vêtements nommés correctement","Habille la poupée avec le t-shirt. → Corrigé : geste réalisé correctement"]),

      m("ANGLAIS","The clothes",
        "Reprendre le vocabulaire vêtements vu en Environnement et l'introduire en anglais par flashcards et jeu de correspondance.",
        ["Flashcards : shirt, trousers, dress, socks","Répéter chaque mot 3 fois avec l'objet réel","Jeu « Point to the... » avec les vêtements de la classe","Chanson courte « Put on your shirt » avec mime","Associer l'image anglaise au mot français"],
        ["What is this? (montrer un pantalon) → Corrigé : trousers","Point to the socks. → Corrigé : les chaussettes pointées","How do you say « une robe » in English? → Corrigé : a dress","Repeat: « shirt ». → Corrigé : prononciation évaluée"]),

      m("CHANT","Ce que j'ai — chanter en entier",
        "Consolider la mémorisation complète de la chanson en ajoutant un 2e couplet et en travaillant la justesse rythmique.",
        ["Rappel du refrain appris la semaine précédente","Ajouter le 2e couplet","Chanter en entier, lentement puis à vitesse normale","Ajouter des gestes sur le 2e couplet","Chanter en 2 groupes qui se répondent"],
        ["Chante la chanson en entier. → Corrigé : refrain + 2 couplets chantés conformément aux paroles apprises","Que dit le 2e couplet ? → Corrigé : citer 1 élément du couplet","Montre le geste du 2e couplet. → Corrigé : geste conforme à celui appris en classe","Chante en groupe en respectant ton tour. → Corrigé : performance collective évaluée"]),

      m("RECITATION","Mes habits — nouveau poème",
        "Découvrir un nouveau poème « Mes habits » en écho au thème des vêtements, en mémorisant les 2 premières lignes par répétition collective.",
        ["Réciter le poème entier une fois avec expression","Expliquer le vocabulaire des vêtements cités","Répéter la 1ère ligne en chœur, 5 fois","Répéter la 2ème ligne en chœur, 5 fois","Réciter les 2 lignes avec le geste de montrer le vêtement cité"],
        ["Récite la première ligne du poème « Mes habits ». → Corrigé : ligne récitée conforme au texte appris","Quel vêtement est cité dans le poème ? → Corrigé : au moins un vêtement du texte cité","Combien de lignes connais-tu maintenant ? → Corrigé : 2 lignes","Récite avec le bon geste. → Corrigé : texte et geste conformes"]),

      m("EPS","Mouvement gymnique",
        "Découvrir des mouvements gymniques de base au sol (roulade avant guidée, équilibre sur un pied) dans un espace sécurisé avec tapis.",
        ["Installer un tapis de gym au sol","Montrer la position de départ : accroupi, menton contre la poitrine","Guider physiquement la première roulade avant (aide de l'enseignant)","Pratiquer l'équilibre sur un pied, bras écartés, 5 secondes","Alterner roulade et équilibre par groupes de 3"],
        ["Fais une roulade avant sur le tapis (avec aide). → Corrigé : roulade réalisée avec assistance, sans se faire mal","Tiens-toi sur un pied pendant que je compte jusqu'à 5. → Corrigé : équilibre tenu au moins 3 secondes sur 5","Où doit être ton menton pendant la roulade ? → Corrigé : contre la poitrine","Sur quel tapis fait-on ces mouvements ? → Corrigé : le tapis de gym, pour la sécurité"]),

      m("DESSIN","Une robe",
        "Dessiner une robe (triangle inversé pour la jupe, rectangle pour le buste) en réinvestissant les formes géométriques vues en Pré-math.",
        ["Montrer une image ou une vraie robe","Décomposer la forme : un triangle inversé pour la jupe","Tracer le triangle inversé puis le haut de la robe","Ajouter des bretelles ou des manches simples","Colorier et ajouter des motifs (pois, rayures)"],
        ["Quelle forme utilises-tu pour la jupe de la robe ? → Corrigé : un triangle (inversé)","Dessine une robe. → Corrigé : forme reconnaissable (triangle jupe + haut) et coloriée","Quelle couleur as-tu choisie pour ta robe ? → Corrigé : réponse libre","Montre le triangle de ta robe. → Corrigé : la forme tracée pointée"]),

      m("TRAVAUX MANUELS","Peinture",
        "Explorer la peinture au pinceau sur le thème des vêtements (empreintes de tissus, mélanges de couleurs) en développant le geste large du bras.",
        ["Présenter la peinture et les pinceaux, règles d'usage (pas de gouttes, on rince le pinceau)","Montrer le geste : tenir le pinceau, tremper, essuyer le surplus","Peindre un vêtement simple sur une silhouette prédessinée","Mélanger 2 couleurs pour en obtenir une nouvelle","Laisser sécher et nettoyer le matériel ensemble"],
        ["Montre comment tu tiens le pinceau. → Corrigé : prise ferme, pinceau non écrasé","Que fais-tu avant de changer de couleur ? → Corrigé : rincer le pinceau","Quelle couleur obtiens-tu en mélangeant bleu et rouge ? → Corrigé : violet","Range ton pinceau et ton pot après usage. → Corrigé : matériel rangé et propre"]),

      m("CONTE","Ikotobekibo sy Faramalemy — suite",
        "Poursuivre le conte en développant la compréhension de l'intrigue (ce que veut chaque personnage) et en introduisant une prédiction simple sur la suite.",
        ["Rappel des personnages et du début de l'histoire","Raconter la suite du conte avec les images","Discuter : que veut Ikotobekibo ? que veut Faramalemy ?","Faire répéter une réplique du personnage principal","Demander une prédiction simple sur la suite de l'histoire"],
        ["Que veut Ikotobekibo dans cette partie de l'histoire ? → Corrigé : réponse conforme au passage raconté","Répète ce que dit Faramalemy. → Corrigé : réplique répétée fidèlement","Que va-t-il se passer selon toi ? → Corrigé : prédiction libre acceptée si cohérente avec l'histoire","Montre l'image qui correspond à ce que je viens de raconter. → Corrigé : bonne image pointée"])

    ],
  },

  {
    n:3, dates:"19/10/2026 – 23/10/2026",
    theme:"La lettre l : syllabes la-li-lo-lu-le · Plus · Compte à rebours 10 à 0 · La météo",
    matieres:[

      m("LECTURE","La lettre l : première consonne, syllabes la-li-lo-lu-le",
        "Introduire la première consonne du programme. Une fois le son [l] isolé, le combiner immédiatement avec les 5 voyelles déjà connues (a, i, o, u, e) pour amorcer la lecture de syllabes — étape clé de la méthode syllabique.",
        ["Montrer la lettre L et prononcer le son [l]","Chercher des mots avec [l] : lune, la, lit","Combiner l + a au tableau : « la » — faire lire la syllabe","Combiner l + i, l + o, l + u, l + e : li, lo, lu, le","Faire lire la ligne de syllabes en chœur puis individuellement","Jeu : la maîtresse pointe une syllabe, l'enfant la lit"],
        ["Quel son fait la lettre l ? → Corrigé : [l]","Lis cette syllabe : la → Corrigé : [la]","Lis ces syllabes dans l'ordre : lu — li — lo → Corrigé : lecture correcte des 3 syllabes","Quelle syllabe obtient-on avec l + e ? → Corrigé : le"]),

      m("VAKITENY","La lettre l : premières syllabes en malagasy",
        "Introduire le son [l] en malagasy et former les premières syllabes avec les voyelles malagasy déjà connues (a, e, i, o).",
        ["Montrer la lettre L, prononcer [l]","Mots connus avec [l] : lamba, lalana, lava","Combiner l + a, l + e, l + i, l + o au tableau","Faire lire les syllabes en chœur","Jeu de lecture individuelle des syllabes"],
        ["Lis cette syllabe : la → Corrigé : [la]","Cite un mot malagasy qui commence par « la ». → Corrigé : lamba, lalana (une réponse correcte acceptée)","Lis : lo — le → Corrigé : lecture correcte des 2 syllabes","Entoure les syllabes avec « l » : la — ta — lo — ma → Corrigé : la, lo entourés"]),

      m("ÉCRITURE","La lettre l : tracé de la canne haute",
        "Apprendre le tracé du l (une grande canne verticale, plus haute que les autres lettres déjà vues), puis relier l aux voyelles pour écrire les syllabes la-li-lo-lu-le.",
        ["Montrer le tracé : on part tout en haut, on descend tout droit avec une petite canne en bas","Comparer la hauteur du l avec i, u, e (le l est plus grand)","Tracer dans l'air, puis sur l'ardoise","Tracer « la » en attachant l et a","Tracer 3 syllabes différentes sur papier préligné"],
        ["Trace la lettre l sur ton ardoise. → Corrigé : tracé vertical haut, canne finale, respect de la hauteur des lignes","Quelle lettre est plus haute : l ou u ? → Corrigé : l","Écris la syllabe « lu ». → Corrigé : l et u correctement attachés et lisibles","Trace 3 syllabes avec l (la, lo, le). → Corrigé : tracé des 3 syllabes conforme"]),

      m("LANGAGE","François va chez le coiffeur — fin de l'histoire",
        "Conclure l'exploitation de l'histoire par une restitution orale complète en autonomie, en réinvestissant tout le vocabulaire vu sur les 3 semaines.",
        ["Rappel des épisodes précédents à l'aide des images","Raconter la fin de l'histoire : François rentre content chez lui","Reconstituer l'histoire entière à l'aide de 5 images dans l'ordre","Faire raconter l'histoire complète par un enfant volontaire avec l'aide des images","Discussion : « Aimes-tu aller chez le coiffeur ? »"],
        ["Range les 5 images de l'histoire dans le bon ordre. → Corrigé : ordre chronologique complet respecté","Raconte l'histoire de François du début à la fin (avec les images). → Corrigé : récit cohérent couvrant les 3 étapes principales","Comment se sent François à la fin de l'histoire ? → Corrigé : content, il a une nouvelle coupe","Aimes-tu aller chez le coiffeur ? Pourquoi ? → Corrigé : réponse personnelle justifiée"]),

      m("PRE-MATH","Plus : identifier la collection qui a le plus d'objets",
        "Introduire la comparaison « plus que » en complément d'« autant » vu la semaine précédente, par comparaison directe de 2 collections visiblement inégales.",
        ["Aligner 3 billes rouges et 6 billes bleues","Mettre en correspondance terme à terme pour montrer qu'il en reste chez les bleues","Nommer : « il y a plus de billes bleues »","Refaire l'exercice avec d'autres objets et d'autres enfants","Jeu : 2 enfants reçoivent des jetons, la classe dit qui en a « plus »"],
        ["Laquelle de ces 2 collections a le plus d'objets ? → Corrigé : réponse conforme à la configuration montrée","Que signifie « plus que » ? → Corrigé : une quantité plus grande que l'autre","Montre la collection qui a le moins. → Corrigé : la plus petite collection pointée","Compare tes jetons à ceux de ton voisin : qui en a plus ? → Corrigé : réponse vérifiée par comptage ou correspondance"]),

      m("MATHS","Compter à rebours de 10 à 0",
        "Introduire le comptage à rebours (10, 9, 8... 0) en s'appuyant sur la suite déjà connue de 0 à 10, par un jeu de fusée qui rend le décompte concret et motivant.",
        ["Rappel : réciter 0 à 10 dans l'ordre croissant","Introduire le jeu de la fusée : compter à rebours puis « décollage ! » à 0","Réciter ensemble 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0","Utiliser des doigts ou des jetons qu'on retire un à un","Jeu individuel : chaque enfant fait décoller sa fusée en comptant à rebours"],
        ["Compte à rebours de 10 à 0. → Corrigé : 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0","Quel nombre vient juste après 5 en comptant à rebours ? → Corrigé : 4","J'ai 7 jetons, j'en retire 1, combien en reste-t-il ? → Corrigé : 6","Fais décoller ta fusée en comptant à rebours depuis 5. → Corrigé : 5, 4, 3, 2, 1, 0 récités correctement"]),

      m("MORALE","S'habiller selon les 4 saisons",
        "Comprendre qu'on adapte ses vêtements selon la saison et la météo, en lien direct avec la météo vue en Environnement cette même semaine — développer l'autonomie pour s'habiller convenablement.",
        ["Montrer 4 images : été, hiver, saison des pluies, saison sèche","Associer un vêtement adapté à chaque image","Discuter : pourquoi ne pas porter un pull en plein été ?","Jeu : habiller une poupée selon la saison annoncée par la maîtresse","Vérifier sa propre tenue du jour : est-elle adaptée au temps qu'il fait ?"],
        ["Que portes-tu quand il pleut ? → Corrigé : un imperméable, des bottes, un parapluie","Pourquoi ne met-on pas un gros pull en pleine chaleur ? → Corrigé : parce qu'on aurait trop chaud","Habille la poupée pour un jour de pluie. → Corrigé : vêtements de pluie choisis","Ta tenue d'aujourd'hui est-elle adaptée au temps qu'il fait ? → Corrigé : réponse personnelle justifiée"]),

      m("ENVIRONNEMENT","La météo",
        "Observer et nommer les différents états du temps (soleil, pluie, vent, nuages) par observation directe du ciel et un tableau météo de la classe.",
        ["Observer le ciel par la fenêtre ce matin","Nommer : soleil, pluie, nuages, vent","Compléter le tableau météo de la classe avec le symbole du jour","Discussion : « Quel temps fait-il aujourd'hui ? »","Associer chaque symbole météo à son nom"],
        ["Quel temps fait-il aujourd'hui ? → Corrigé : description conforme à l'observation du jour","Montre le symbole « pluie » sur le tableau météo. → Corrigé : bon symbole pointé","Que vois-tu dans le ciel quand il va pleuvoir ? → Corrigé : des nuages gris","Complète le tableau météo du jour. → Corrigé : symbole correspondant à l'observation posé au bon endroit"]),

      m("ANGLAIS","The weather",
        "Introduire le vocabulaire météo en anglais en écho au thème d'Environnement, avec la structure simple « It's... ».",
        ["Flashcards : sun, rain, wind, cloud","Structure « It's sunny » / « It's rainy »","Observer le ciel et dire « It's... » en anglais","Chanson courte sur la météo","Jeu : la maîtresse mime un temps, les enfants disent le mot anglais"],
        ["How's the weather today? → Corrigé : « It's sunny » / « It's rainy » selon le temps réel du jour","What is this? (image de pluie) → Corrigé : rain","Say « It's windy ». → Corrigé : prononciation évaluée","Point to the cloud. → Corrigé : l'image du nuage pointée"]),

      m("CHANT","Les vêtements — nouvelle chanson",
        "Apprendre une nouvelle chanson énumérant des vêtements, en réinvestissant le vocabulaire vu en Environnement cette même semaine.",
        ["Chanter la chanson en entier, lentement","Expliquer les vêtements cités dans les paroles","Répéter le refrain en chœur","Ajouter des gestes (montrer le vêtement cité sur soi)","Chanter en petits groupes"],
        ["Chante le refrain de « Les vêtements ». → Corrigé : refrain chanté conformément aux paroles apprises","Cite un vêtement cité dans la chanson. → Corrigé : au moins un vêtement des paroles cité","Montre le geste qui correspond au refrain. → Corrigé : geste conforme à celui appris en classe","Chante en montrant le vêtement que tu portes. → Corrigé : performance et geste cohérents"]),

      m("RECITATION","Zaza hendry",
        "Découvrir le poème malagasy « Zaza hendry » (l'enfant sage) par écoute et répétition des 2 premières lignes, en expliquant le sens général en français.",
        ["Réciter le poème entier avec expression","Expliquer le sens général : les qualités d'un enfant sage","Répéter la 1ère ligne en chœur, 5 fois","Répéter la 2ème ligne en chœur, 5 fois","Réciter les 2 lignes ensemble"],
        ["Récite la première ligne de « Zaza hendry ». → Corrigé : ligne récitée conforme au texte appris","De quoi parle ce poème ? → Corrigé : d'un enfant sage et bien élevé","Combien de lignes connais-tu ? → Corrigé : 2 lignes","Récite les 2 lignes devant la classe. → Corrigé : texte récité conforme à ce qui a été appris"]),

      m("EPS","Mouvement dehors - dedans",
        "Travailler les notions spatiales « dehors » et « dedans » par des déplacements réels entre un espace délimité (cerceau, tracé au sol) et l'extérieur de cet espace.",
        ["Disposer des cerceaux au sol","Consigne « dedans ! » : sauter dans un cerceau ; « dehors ! » : sauter hors du cerceau","Alterner les consignes de plus en plus vite","Jeu : « 1, 2, 3, dedans ! » — variante du jeu du loup","Retour au calme en marchant, en restant « dedans » un grand cercle tracé au sol"],
        ["Saute dans le cerceau (dedans). → Corrigé : geste réalisé correctement","Sors du cerceau (dehors). → Corrigé : geste réalisé correctement","Es-tu dedans ou dehors du cercle en ce moment ? → Corrigé : réponse conforme à sa position réelle","Que fait-on au signal « dedans » ? → Corrigé : on saute à l'intérieur de l'espace délimité"]),

      m("DESSIN","Le mauvais temps",
        "Dessiner une scène de mauvais temps (pluie, nuages, parapluie) en réinvestissant le vocabulaire météo vu en Environnement.",
        ["Observer une image de temps pluvieux","Tracer des nuages gris en haut de la feuille","Tracer des traits obliques pour la pluie","Ajouter un parapluie ou des bottes","Colorier avec des couleurs sombres (gris, bleu foncé)"],
        ["Que dessines-tu pour représenter la pluie ? → Corrigé : des traits obliques ou verticaux","Dessine un ciel de mauvais temps. → Corrigé : nuages gris et pluie représentés","Quelle couleur utilises-tu pour les nuages de pluie ? → Corrigé : gris","Montre l'élément de ton dessin qui représente le mauvais temps. → Corrigé : nuages ou pluie pointés"]),

      m("TRAVAUX MANUELS","Pliage",
        "Apprendre 2 plis de base (pli en 2, pli en accordéon) sur du papier pour réaliser un objet simple lié au thème de la météo.",
        ["Montrer le pli en 2 : plier la feuille et bien marquer le pli avec l'ongle","Montrer le pli en accordéon : plis successifs de même largeur","Réaliser un pliage simple pas à pas (un éventail ou un bateau en papier)","Vérifier que chaque pli est bien marqué","Décorer le pliage terminé"],
        ["Montre-moi un pli en 2. → Corrigé : pliage réalisé avec le pli bien marqué","Combien de plis a ton accordéon ? → Corrigé : nombre de plis réellement réalisés, compté ensemble","Que peux-tu faire avec un pliage en accordéon ? → Corrigé : un éventail, une décoration","Montre ton pliage terminé. → Corrigé : production présentée"]),

      m("CONTE","Ikotobekibo sy Faramalemy — fin",
        "Conclure le conte en travaillant la restitution de la morale et de la fin de l'histoire, et en réinvestissant les personnages sur les 3 semaines.",
        ["Rappel de toute l'histoire à l'aide des images dans l'ordre","Raconter la fin du conte","Discuter de la morale ou de la leçon du conte","Faire raconter l'histoire complète par un enfant volontaire","Jeu de rôle final : les enfants jouent l'histoire entière"],
        ["Comment se termine l'histoire d'Ikotobekibo sy Faramalemy ? → Corrigé : résumé de la fin conforme au conte raconté","Quelle leçon peut-on tirer de ce conte ? → Corrigé : réponse acceptée si cohérente avec la morale du conte","Raconte l'histoire entière avec tes mots. → Corrigé : récit cohérent couvrant début-milieu-fin","Quel personnage as-tu préféré ? Pourquoi ? → Corrigé : réponse personnelle justifiée"])

    ],
  },

  {
    n:4, dates:"26/10/2026 – 30/10/2026",
    theme:"ÉVALUATION — Bilan du mois d'Octobre",
    matieres:[

      m("LECTURE","Évaluation — les sons u, e/é/è/ê, l et les syllabes la-li-lo-lu-le",
        "Vérifier individuellement la reconnaissance des sons du mois et la lecture des syllabes formées avec l, par un passage oral court avec chaque enfant.",
        ["Faire passer chaque enfant individuellement pendant que les autres travaillent en autonomie (coloriage calme)","Présenter une carte-lettre (u, e, é, è, l) et demander le son","Présenter 3 syllabes (la, lu, le) à lire","Noter la réussite sur une grille simple (acquis / en cours / non acquis)"],
        ["Quel son fait cette lettre ? (montrer u) → Corrigé : [y]","Quel son fait cette lettre ? (montrer l) → Corrigé : [l]","Lis ces 3 syllabes : la — lo — lu → Corrigé : lecture correcte des 3 syllabes","Entoure toutes les lettres « l » dans cette ligne : a l u l e l → Corrigé : les 3 « l » entourés"]),

      m("VAKITENY","Fanamarinana — ny feo o, e, l",
        "Vérifier individuellement la reconnaissance des sons du mois en malagasy et la lecture de la syllabe « la ».",
        ["Faire passer chaque enfant individuellement pendant que les autres travaillent en autonomie","Présenter une carte-lettre (o, e, l) et demander le son","Présenter la syllabe « la » à lire","Noter la réussite sur une grille simple"],
        ["Inona ny feon'ity litera ity ? (asehoy ny o) → Valiny : [o]","Inona ny feon'ity litera ity ? (asehoy ny l) → Valiny : [l]","Vakio ity : la → Valiny : [la]","Tsongò ny litera « e » amin'ity andalana ity : o e l e a → Valiny : ny « e » roa voatsongo"]),

      m("ÉCRITURE","Évaluation — tracer u, e, é, è, l et la syllabe la",
        "Vérifier le tracé propre des lettres du mois et leur assemblage en syllabe, sur une fiche de tracé individuelle.",
        ["Distribuer une fiche avec des lignes préréglées pour chaque lettre","Faire tracer u, e, é, è, l chacun 2 fois","Faire tracer la syllabe « la » attachée","Circuler et corriger la tenue du crayon si besoin"],
        ["Trace la lettre u. → Corrigé : 2 ponts visibles, tracé fluide","Trace la lettre l. → Corrigé : tracé vertical haut avec canne finale","Écris la syllabe « la ». → Corrigé : l et a correctement attachés et lisibles","Ajoute l'accent aigu sur ce e. → Corrigé : accent orienté du bas-gauche vers le haut-droit"]),

      m("LANGAGE","Évaluation — vocabulaire et récit de « François va chez le coiffeur »",
        "Vérifier la mémorisation du vocabulaire du mois et la capacité à restituer l'histoire de façon autonome.",
        ["Rappel collectif rapide de l'histoire","Interroger chaque enfant sur 1 mot de vocabulaire (coiffeur, ciseaux, miroir, shampoing)","Demander un résumé oral court de l'histoire"],
        ["Où va François ? → Corrigé : chez le coiffeur","Cite 2 objets utilisés par le coiffeur. → Corrigé : ciseaux, peigne, miroir, shampoing (2 parmi ces réponses)","Raconte l'histoire en 2-3 phrases. → Corrigé : récit couvrant le début et la fin de l'histoire","Comment se sent François à la fin ? → Corrigé : content"]),

      m("PRE-MATH","Évaluation — les formes, autant, plus",
        "Vérifier la reconnaissance des 3 formes de base et la maîtrise des comparaisons « autant »/« plus » par une fiche manipulée.",
        ["Présenter les 3 formes en carton, demander de les nommer","Présenter 2 collections : demander « autant » ou « plus »","Faire manipuler pour vérifier"],
        ["Montre le carré. → Corrigé : la forme carrée désignée","Y a-t-il autant de billes ici (montrer 2 collections égales) ? → Corrigé : oui","Quelle collection a le plus d'objets (montrer 2 collections inégales) ? → Corrigé : celle qui en a effectivement le plus","Combien de côtés a un triangle ? → Corrigé : 3"]),

      m("MATHS","Évaluation — nombres pairs, impairs, compte à rebours",
        "Vérifier individuellement la récitation des nombres pairs, impairs, et le comptage à rebours de 10 à 0.",
        ["Faire réciter la suite des pairs","Faire réciter la suite des impairs","Faire compter à rebours de 10 à 0","Noter les réussites sur une grille simple"],
        ["Récite les nombres pairs de 0 à 10. → Corrigé : 0, 2, 4, 6, 8, 10","Récite les nombres impairs de 1 à 10. → Corrigé : 1, 3, 5, 7, 9","Compte à rebours de 10 à 0. → Corrigé : 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0","Ce nombre est-il pair ou impair : 6 ? → Corrigé : pair"]),

      m("MORALE","Évaluation — propreté du corps et des vêtements, s'habiller selon la saison",
        "Vérifier par observation et questions orales l'appropriation des règles d'hygiène et d'habillement du mois.",
        ["Observer les mains et la tenue des enfants ce matin","Poser des questions orales individuelles","Valoriser les bons gestes observés"],
        ["Montre comment tu te laves les mains. → Corrigé : les 4 étapes réalisées (mouiller, savonner, frotter, rincer)","Que portes-tu quand il fait froid ? → Corrigé : un pull, une veste","Pourquoi faut-il garder ses vêtements propres ? → Corrigé : pour rester en bonne santé et se sentir bien","Combien de fois par jour se brosse-t-on les dents ? → Corrigé : 2 fois"]),

      m("ENVIRONNEMENT","Évaluation — objets de toilette, vêtements, météo",
        "Vérifier la connaissance du vocabulaire du mois (toilette, vêtements, météo) par un jeu de reconnaissance d'images.",
        ["Montrer 6 images mélangées (toilette, vêtements, météo)","Demander de nommer chaque image","Demander de classer par thème"],
        ["Comment s'appelle cet objet ? (montrer une brosse à dents) → Corrigé : une brosse à dents","Nomme ce vêtement. (montrer une chaussette) → Corrigé : une chaussette","Quel temps fait-il sur cette image ? (image de pluie) → Corrigé : il pleut","Classe ces 3 images par thème : savon, pantalon, nuage. → Corrigé : toilette / vêtement / météo correctement associés"]),

      m("ANGLAIS","Révision — Bathroom furnitures, clothes, weather",
        "Réviser le vocabulaire anglais du mois par un jeu de flashcards mélangées portant sur les 3 thèmes vus.",
        ["Mélanger les flashcards des 3 semaines","Piocher et nommer chaque carte en anglais","Jeu « Point to the... » avec le vocabulaire du mois"],
        ["What is this? (montrer le savon) → Corrigé : soap","What is this? (montrer un pantalon) → Corrigé : trousers","How's the weather? (image de soleil) → Corrigé : It's sunny","Point to the towel. → Corrigé : la serviette pointée"]),

      m("CHANT","Révision des chansons du mois",
        "Faire chanter les 2 chansons apprises dans le mois (« Ce que j'ai », « Les vêtements ») pour consolider la mémorisation avant de passer à de nouvelles chansons en novembre.",
        ["Chanter « Ce que j'ai » en entier avec les gestes","Chanter « Les vêtements » en entier avec les gestes","Faire chanter des petits groupes volontaires"],
        ["Chante « Ce que j'ai » en entier. → Corrigé : refrain et couplets chantés conformément aux paroles apprises","Chante « Les vêtements ». → Corrigé : chanson chantée conformément aux paroles apprises","Montre un geste de chacune des 2 chansons. → Corrigé : 2 gestes conformes à ceux appris en classe","Quelle chanson préfères-tu ? → Corrigé : réponse personnelle"]),

      m("RECITATION","Révision des poèmes du mois",
        "Faire réciter les 3 poèmes du mois (« Un enfant propre », « Mes habits », « Zaza hendry ») pour consolider la mémorisation.",
        ["Réciter chaque poème avec le groupe","Faire réciter individuellement les volontaires","Valoriser les progrès de chacun"],
        ["Récite « Un enfant propre ». → Corrigé : texte récité conforme à ce qui a été appris","Récite « Mes habits ». → Corrigé : texte récité conforme à ce qui a été appris","Récite « Zaza hendry ». → Corrigé : texte récité conforme à ce qui a été appris","Quel poème connais-tu le mieux ? → Corrigé : réponse personnelle"]),

      m("EPS","Révision — course, mouvement gymnique, dehors-dedans",
        "Enchaîner les 3 types de mouvements travaillés dans le mois sous forme de petit parcours ludique.",
        ["Installer un parcours : course, roulade sur tapis, cerceaux dedans/dehors","Faire passer chaque enfant sur le parcours complet","Encourager et valoriser chaque passage"],
        ["Cours jusqu'au plot. → Corrigé : distance complète parcourue en courant","Fais une roulade avant (avec aide). → Corrigé : roulade réalisée avec assistance","Saute dedans puis dehors du cerceau. → Corrigé : geste réalisé correctement dans les 2 sens","Qu'as-tu préféré dans ce parcours ? → Corrigé : réponse personnelle"]),

      m("DESSIN","Révision — la serviette, la robe, le mauvais temps",
        "Faire choisir à chaque enfant un des 3 dessins du mois à refaire ou compléter, pour consolider les formes apprises.",
        ["Rappeler les 3 dessins du mois","Laisser chaque enfant choisir et refaire un dessin","Exposer les productions du mois"],
        ["Quelle forme utilises-tu pour dessiner une serviette ? → Corrigé : un rectangle","Quelle forme utilises-tu pour la jupe d'une robe ? → Corrigé : un triangle (inversé)","Que dessines-tu pour montrer la pluie ? → Corrigé : des traits obliques","Choisis et refais un dessin du mois. → Corrigé : production cohérente avec le thème choisi"]),

      m("TRAVAUX MANUELS","Révision — coloriage, peinture, pliage",
        "Proposer un atelier au choix parmi les 3 techniques du mois pour que chaque enfant consolide celle où il a le plus besoin de pratique.",
        ["Installer 3 ateliers : coloriage, peinture, pliage","Faire tourner les enfants par petits groupes","Observer et valoriser les progrès de motricité fine"],
        ["Montre ta prise de crayon pour colorier. → Corrigé : prise tripode observée","Montre comment tu tiens le pinceau. → Corrigé : prise ferme, geste maîtrisé","Montre un pli en 2 bien marqué. → Corrigé : pli net réalisé avec l'ongle","Quel atelier as-tu préféré ce mois-ci ? → Corrigé : réponse personnelle"]),

      m("CONTE","Révision — Ikotobekibo sy Faramalemy",
        "Faire raconter le conte du mois dans son intégralité par la classe, en groupe, pour clore le mois avant de découvrir un nouveau conte en novembre.",
        ["Remettre les images du conte dans l'ordre en grand groupe","Raconter le conte à plusieurs voix (un enfant par passage)","Discuter une dernière fois de la morale du conte"],
        ["Comment s'appellent les 2 personnages principaux ? → Corrigé : Ikotobekibo et Faramalemy","Raconte le début du conte. → Corrigé : résumé oral fidèle au début de l'histoire","Raconte la fin du conte. → Corrigé : résumé oral fidèle à la fin de l'histoire","Quelle est la leçon de ce conte ? → Corrigé : réponse cohérente avec la morale du conte"])

    ],
  }

];

const NOVEMBRE_12EME = [

  {
    n:1, dates:"09/11/2026 – 13/11/2026",
    theme:"Lettre t (Lecture/Vakiteny/Écriture) · L'écriture du zéro · Rangement des nombres · La saison des pluies",
    matieres:[

      m("LECTURE","La lettre t : son [t] et syllabes ta-ti-to-tu-te",
        "Introduire la consonne t par la méthode syllabique : isoler le son [t] à l'oral, puis le combiner immédiatement avec les 5 voyelles déjà connues (a, i, o, u, e) pour former de nouvelles syllabes lues couramment.",
        ["Montrer la lettre T en grand format au tableau (majuscule et minuscule)","Prononcer le son [t] en articulant bien le bout de la langue contre les dents","Chercher des mots avec [t] : table, tomate, tortue","Combiner t + a, t + i, t + o, t + u, t + e au tableau : ta, ti, to, tu, te","Faire lire la ligne de syllabes en chœur puis individuellement","Comparer avec la consonne l déjà connue (position de la langue différente)","Jeu : la maîtresse pointe une syllabe, l'enfant la lit"],
        ["Quel son fait la lettre t ? → Corrigé : [t]","Lis cette syllabe : ta → Corrigé : [ta]","Lis ces syllabes dans l'ordre : tu — ti — to → Corrigé : lecture correcte des 3 syllabes","Quelle syllabe obtient-on avec t + e ? → Corrigé : te"]),

      m("VAKITENY","La lettre t : premières syllabes en malagasy",
        "Introduire le son [t] en malagasy et former les premières syllabes avec les voyelles malagasy déjà connues (a, e, i, o).",
        ["Montrer la lettre T, prononcer [t]","Mots connus avec [t] : tany, tanana, tena","Combiner t + a, t + e, t + i, t + o au tableau","Faire lire les syllabes en chœur","Jeu de lecture individuelle des syllabes","Chercher le t dans les prénoms de la classe"],
        ["Lis cette syllabe : ta → Corrigé : [ta]","Cite un mot malagasy qui commence par « ta ». → Corrigé : tany, tanana (une réponse correcte acceptée)","Lis : to — te → Corrigé : lecture correcte des 2 syllabes","Entoure les syllabes avec « t » : ta — la — to — ma → Corrigé : ta, to entourés"]),

      m("ÉCRITURE","La lettre t : tracé de la canne barrée",
        "Apprendre le tracé du t (une canne verticale avec une petite barre horizontale et un crochet en bas), puis relier t aux voyelles pour écrire les syllabes ta-ti-to-tu-te.",
        ["Montrer le tracé : on descend une grande canne, on ajoute un petit crochet en bas, puis on trace la barre horizontale","Comparer avec la lettre l déjà connue (le t a une barre en plus)","Tracer dans l'air, puis sur l'ardoise","Tracer sur papier préligné avec un gros crayon","Tracer « ta » en attachant t et a","Tracer 3 syllabes différentes sur la ligne (ta, to, te)"],
        ["Trace la lettre t sur ton ardoise. → Corrigé : canne verticale, crochet en bas, barre horizontale bien placée","Quelle lettre a une barre en plus que le l ? → Corrigé : le t","Écris la syllabe « tu ». → Corrigé : t et u correctement attachés et lisibles","Trace 3 syllabes avec t (ta, to, te). → Corrigé : tracé des 3 syllabes conforme"]),

      m("LANGAGE","François va chez le coiffeur — poser des questions sur l'histoire",
        "Reprendre l'histoire vue en octobre pour aller plus loin : apprendre à poser des questions simples (Qui ? Où ?) à partir du récit, en réinvestissant le vocabulaire déjà connu (coiffeur, ciseaux, miroir, shampoing).",
        ["Rappel collectif de l'histoire à l'aide des images déjà connues","Introduire les mots interrogatifs « Qui ? » et « Où ? » à l'oral","Poser des questions sur l'histoire et faire répondre par une phrase complète","Faire retourner la question : un enfant interroge un camarade","Jeu : cacher une image et faire deviner « Où est... ? »","Récapituler le vocabulaire connu en réponse aux questions posées"],
        ["Qui va chez le coiffeur ? → Corrigé : François","Où va François ? → Corrigé : chez le coiffeur","Que fait le coiffeur avec les ciseaux ? → Corrigé : il coupe les cheveux","Pose une question à ton voisin sur l'histoire. → Corrigé : question correctement formée avec « qui » ou « où »"]),

      m("PRE-MATH","Écriture en lettres du nombre 0 : zéro",
        "Découvrir l'écriture du nombre 0 en toutes lettres (« zéro ») en s'appuyant sur le chiffre déjà connu depuis septembre, par association du chiffre, du mot écrit et de la notion de quantité nulle.",
        ["Rappel : le chiffre 0 représente une quantité vide (aucun objet)","Montrer le mot « zéro » écrit en grand au tableau","Associer le chiffre 0 et le mot « zéro »","Épeler le mot ensemble lettre par lettre","Faire recopier le mot « zéro » sur l'ardoise","Jeu : montrer une boîte vide, faire dire « zéro »"],
        ["Combien y a-t-il d'objets dans cette boîte vide ? → Corrigé : zéro","Montre le mot « zéro » écrit au tableau. → Corrigé : le mot pointé correctement","Recopie le mot « zéro » sur ton ardoise. → Corrigé : mot recopié lisiblement","Relie le chiffre 0 à son mot. → Corrigé : 0 relié à « zéro »"]),

      m("MATHS","Rangement des nombres de 0 à 10",
        "Consolider la suite numérique de 0 à 10 déjà connue en travaillant le rangement dans l'ordre croissant et décroissant, par manipulation de cartes-nombres.",
        ["Rappel : réciter 0 à 10 dans l'ordre","Distribuer des cartes-nombres mélangées (0 à 10) à un groupe d'enfants","Ranger les cartes dans l'ordre croissant au tableau","Ranger les mêmes cartes dans l'ordre décroissant","Retirer une carte et faire trouver le nombre manquant","Jeu individuel : ranger ses propres cartes sur la table"],
        ["Range ces cartes dans l'ordre croissant : 3, 1, 5, 2, 4 → Corrigé : 1, 2, 3, 4, 5","Range ces cartes dans l'ordre décroissant : 2, 4, 1, 3 → Corrigé : 4, 3, 2, 1","Quel nombre manque dans cette suite : 1, 2, __, 4, 5 ? → Corrigé : 3","Range tes cartes de 0 à 10 sur la table. → Corrigé : suite complète et correctement ordonnée"]),

      m("MORALE","Discipline pendant la saison des pluies",
        "Établir les règles de comportement propres à la saison des pluies (ne pas jouer sous la pluie sans protection, rester calme en classe, ne pas courir sur un sol glissant) pour prévenir les accidents et les maladies.",
        ["Discuter des dangers de la saison des pluies (sol glissant, se mouiller, prendre froid)","Montrer les bons comportements : marcher (pas courir) sous le préau mouillé","Expliquer pourquoi on reste sous l'abri pendant la récréation s'il pleut","Jeu de rôle : que faire si on est surpris par la pluie sur le chemin de l'école","Règle de classe : ranger son parapluie et ses bottes sans gêner les autres","Vérifier au quotidien le respect des règles pendant la semaine"],
        ["Que dois-tu faire si le sol est mouillé et glissant ? → Corrigé : marcher prudemment, ne pas courir","Où t'abrites-tu pendant la récréation s'il pleut ? → Corrigé : sous le préau / à l'intérieur","Pourquoi ne faut-il pas jouer sous la pluie sans protection ? → Corrigé : pour ne pas tomber malade","Range ton parapluie à la bonne place en arrivant en classe. → Corrigé : geste réalisé correctement"]),

      m("ENVIRONNEMENT","Les vêtements de pluie",
        "Identifier et nommer les vêtements et accessoires adaptés à la saison des pluies par manipulation d'objets réels, en écho direct au thème de Morale de la semaine.",
        ["Apporter des vêtements de pluie réels : imperméable, bottes, parapluie","Nommer chaque objet un par un","Expliquer l'usage de chaque objet (protéger du contact avec l'eau)","Jeu de Kim : cacher un objet, deviner lequel manque","Associer chaque objet à l'image correspondante","Mimer : « il pleut, je m'habille pour sortir »"],
        ["Comment s'appelle cet objet ? (montrer les bottes) → Corrigé : les bottes","À quoi sert le parapluie ? → Corrigé : à se protéger de la pluie","Montre l'objet qui protège tout le corps de la pluie. → Corrigé : l'imperméable pointé","Cite 2 vêtements de pluie. → Corrigé : imperméable, bottes, parapluie (2 parmi ces réponses)"]),

      m("ANGLAIS","Rainy clothes",
        "Introduire le vocabulaire anglais des vêtements de pluie en écho direct au thème d'Environnement de la semaine, par flashcards et répétition.",
        ["Flashcards : raincoat, boots, umbrella","Répéter chaque mot 3 fois en montrant l'objet réel ou l'image","Jeu « Point to the... » : la maîtresse dit un mot, les enfants pointent l'image","Chanson courte reprenant les mots (sur un air connu)","Associer l'image anglaise au mot français déjà appris en Environnement"],
        ["What is this? (montrer les bottes) → Corrigé : boots","Point to the umbrella. → Corrigé : le parapluie pointé","How do you say « un imperméable » in English? → Corrigé : a raincoat","Repeat: « boots ». → Corrigé : prononciation évaluée"]),

      m("CHANT","Tombe, tombe, tombe la pluie — découverte",
        "Apprendre une chanson sur le thème de la pluie, en cohérence avec la saison actuelle, pour travailler le rythme et enrichir le vocabulaire météorologique.",
        ["Chanter la chanson en entier une première fois, lentement","Expliquer les mots nouveaux du refrain","Répéter le refrain en chœur, 3 fois","Ajouter un geste (mimer la pluie qui tombe avec les doigts)","Chanter par petits groupes","Repérer les mots qui riment"],
        ["Chante le refrain de « Tombe, tombe, tombe la pluie ». → Corrigé : refrain chanté conformément aux paroles apprises","Que fait la pluie dans la chanson ? → Corrigé : elle tombe","Montre le geste qui va avec le refrain. → Corrigé : geste conforme à celui appris en classe","Chante avec ton voisin en faisant le bon geste. → Corrigé : performance en binôme évaluée"]),

      m("RECITATION","En été ou en hiver — mémorisation des 2 premières lignes",
        "Mémoriser progressivement le poème « En été ou en hiver » en écho au changement de saison, par répétition des 2 premières lignes.",
        ["Réciter le poème entier une fois avec expression","Expliquer le sens des mots (été, hiver, saison)","Répéter la 1ère ligne en chœur, 5 fois","Répéter la 2ème ligne en chœur, 5 fois","Enchaîner les 2 lignes ensemble","Réciter avec un geste illustrant chaque saison"],
        ["Récite la première ligne du poème. → Corrigé : ligne récitée conforme au texte appris","Combien de lignes connais-tu ? → Corrigé : 2 lignes","De quoi parle ce poème ? → Corrigé : des saisons (été et hiver)","Récite les 2 lignes avec le bon geste. → Corrigé : texte + geste conformes à ce qui a été appris"]),

      m("EPS","Marche des animaux",
        "Développer la motricité globale et l'imagination corporelle en imitant les déplacements de différents animaux, dans un espace dégagé.",
        ["Nommer un animal et montrer sa façon de se déplacer (canard, lapin, éléphant)","Marcher comme un canard (accroupi, en se dandinant)","Sauter comme un lapin (pieds joints)","Marcher lourdement comme un éléphant (à 4 pattes, lentement)","Alterner les animaux au signal de la maîtresse","Retour au calme : marche lente comme une tortue"],
        ["Marche comme un canard. → Corrigé : déplacement accroupi et dandinant reconnaissable","Saute comme un lapin. → Corrigé : sauts pieds joints réalisés","Quel animal marche à 4 pattes et lentement dans le jeu ? → Corrigé : l'éléphant","Change d'animal quand je tape dans mes mains. → Corrigé : changement de déplacement réalisé au signal"]),

      m("DESSIN","Un parapluie",
        "Dessiner un parapluie (demi-cercle et manche) en lien avec le thème de la saison des pluies vu en Environnement.",
        ["Montrer un vrai parapluie ouvert","Observer sa forme : un demi-cercle","Tracer le demi-cercle au tableau étape par étape","Chaque enfant trace son demi-cercle sur sa feuille","Ajouter le manche et la pointe","Colorier le parapluie avec des motifs (rayures, pois)"],
        ["Quelle forme de base a le dessus d'un parapluie ? → Corrigé : un demi-cercle","Dessine un parapluie. → Corrigé : demi-cercle reconnaissable avec manche et au moins 1 couleur","De quelle couleur as-tu colorié ton parapluie ? → Corrigé : réponse libre","Montre le manche de ton parapluie. → Corrigé : la partie tracée pointée"]),

      m("TRAVAUX MANUELS","Brumage — peinture en pulvérisation",
        "Découvrir une technique de peinture par pulvérisation (projeter de fines gouttes de peinture à l'aide d'une brosse à dents) pour représenter l'effet de la pluie qui tombe, en lien avec le thème de la semaine.",
        ["Présenter le matériel : brosse à dents, peinture diluée, grille ou tamis, feuille","Montrer le geste : tremper la brosse, frotter sur la grille pour projeter des gouttes fines","Protéger la table et les vêtements avant de commencer","Réaliser la brume de peinture sur une feuille avec un parapluie découpé en pochoir","Retirer le pochoir pour révéler la forme du parapluie","Laisser sécher et observer l'effet de pluie obtenu"],
        ["Montre comment tu frottes la brosse sur la grille. → Corrigé : geste de projection réalisé sans éclabousser","Que représente la brume de peinture sur ta feuille ? → Corrigé : la pluie qui tombe","Pourquoi utilise-t-on un pochoir en forme de parapluie ? → Corrigé : pour garder une forme propre non peinte","Montre ta production terminée. → Corrigé : production présentée avec effet de brume visible"]),

      m("CONTE","Ny saka sy ny totozy — découverte",
        "Découvrir ce conte traditionnel malagasy (le chat et la souris) par l'écoute active, l'observation d'images séquentielles, et l'identification des personnages principaux.",
        ["Présenter les images du conte une par une, dans l'ordre","Raconter le conte avec expression et voix différenciées par personnage","Nommer les 2 personnages principaux : ny saka (le chat) et ny totozy (la souris)","Poser 2-3 questions de compréhension immédiate","Faire répéter une réplique clé d'un personnage"],
        ["Comment s'appellent les 2 personnages du conte ? → Corrigé : ny saka (le chat) et ny totozy (la souris)","Que se passe-t-il au début du conte ? → Corrigé : résumé oral conforme au début de l'histoire racontée","Montre l'image où ny saka apparaît. → Corrigé : bonne image pointée","As-tu aimé ce conte ? Pourquoi ? → Corrigé : réponse personnelle justifiée"])

    ],
  },

  {
    n:2, dates:"16/11/2026 – 20/11/2026",
    theme:"Lettre d (Lecture/Vakiteny/Écriture) · L'écriture du nombre un · Le nombre 11 à 15 · Les ustensiles de cuisine",
    matieres:[

      m("LECTURE","La lettre d : son [d] et syllabes da-di-do-du-de",
        "Introduire la consonne d par la méthode syllabique, en la distinguant du t (même position de langue, sonorité différente) déjà vu la semaine précédente.",
        ["Montrer la lettre D en grand format au tableau","Prononcer le son [d] en posant la main sur la gorge pour sentir la vibration (contrairement au t)","Comparer [t] et [d] : même geste de langue, l'un est sourd, l'autre est sonore","Chercher des mots avec [d] : dodo, domino, radis","Combiner d + a, d + i, d + o, d + u, d + e au tableau : da, di, do, du, de","Faire lire la ligne de syllabes en chœur puis individuellement","Jeu : la maîtresse pointe une syllabe, l'enfant la lit"],
        ["Quel son fait la lettre d ? → Corrigé : [d]","Lis cette syllabe : da → Corrigé : [da]","Pose ta main sur ta gorge : sens-tu vibrer en disant [d] ? → Corrigé : oui, ça vibre","Lis ces syllabes dans l'ordre : do — du — di → Corrigé : lecture correcte des 3 syllabes"]),

      m("VAKITENY","La lettre d : premières syllabes en malagasy",
        "Introduire le son [d] en malagasy et former les syllabes avec les voyelles malagasy déjà connues (a, e, i, o).",
        ["Montrer la lettre D, prononcer [d]","Mots connus avec [d] : daholo, diso, dokotera","Combiner d + a, d + e, d + i, d + o au tableau","Faire lire les syllabes en chœur","Jeu de lecture individuelle des syllabes","Chercher le d dans des mots familiers de la classe"],
        ["Lis cette syllabe : da → Corrigé : [da]","Cite un mot malagasy qui commence par « di ». → Corrigé : diso (une réponse correcte acceptée)","Lis : do — de → Corrigé : lecture correcte des 2 syllabes","Entoure les syllabes avec « d » : da — ta — do — la → Corrigé : da, do entourés"]),

      m("ÉCRITURE","La lettre d : tracé du rond et de la grande canne",
        "Apprendre le tracé du d (un rond comme le o, suivi d'une grande canne accolée à droite), en comparant avec des lettres déjà connues pour bien fixer le sens du tracé.",
        ["Montrer le tracé : on trace un rond, puis on remonte tout en haut à droite pour la canne","Comparer avec le rond du o déjà connu (même point de départ)","Tracer dans l'air, puis sur l'ardoise","Tracer sur papier préligné","Tracer « da » en attachant d et a","Tracer 3 syllabes différentes sur la ligne (da, do, de)"],
        ["Trace la lettre d sur ton ardoise. → Corrigé : rond fermé suivi d'une canne haute à droite","Quelle partie de la lettre d ressemble au o ? → Corrigé : le rond","Écris la syllabe « do ». → Corrigé : d et o correctement attachés et lisibles","Trace 3 syllabes avec d (da, do, de). → Corrigé : tracé des 3 syllabes conforme"]),

      m("LANGAGE","François va chez le coiffeur — construire un dialogue",
        "Faire construire un mini-dialogue entre François et le coiffeur à partir des questions travaillées la semaine précédente, pour développer l'expression orale structurée.",
        ["Rappel des questions posées la semaine précédente","Introduire des répliques simples : « Bonjour, je voudrais une coupe » / « Asseyez-vous »","Répéter le dialogue en chœur, la maîtresse jouant le coiffeur","Faire jouer le dialogue par binômes avec les accessoires (peigne, ciseaux en carton)","Enrichir avec une réplique de fin : « Merci, au revoir »","Faire jouer 2 binômes devant la classe"],
        ["Que dit François en arrivant chez le coiffeur ? → Corrigé : « Bonjour, je voudrais une coupe » (ou formulation équivalente)","Que répond le coiffeur ? → Corrigé : « Asseyez-vous » (ou formulation équivalente)","Joue le dialogue avec ton camarade. → Corrigé : dialogue joué avec les 2 répliques principales respectées","Que dit François en partant ? → Corrigé : « Merci, au revoir »"]),

      m("PRE-MATH","Écriture en lettres du nombre 1 : un",
        "Découvrir l'écriture du nombre 1 en toutes lettres (« un ») en s'appuyant sur le chiffre déjà connu, par association du chiffre, du mot écrit et d'un objet unique.",
        ["Rappel : le chiffre 1 représente un seul objet","Montrer le mot « un » écrit en grand au tableau","Associer le chiffre 1 et le mot « un »","Épeler le mot ensemble lettre par lettre","Faire recopier le mot « un » sur l'ardoise","Jeu : montrer un seul objet, faire dire « un »"],
        ["Combien y a-t-il d'objets ici (montrer 1 crayon) ? → Corrigé : un","Montre le mot « un » écrit au tableau. → Corrigé : le mot pointé correctement","Recopie le mot « un » sur ton ardoise. → Corrigé : mot recopié lisiblement","Relie le chiffre 1 à son mot. → Corrigé : 1 relié à « un »"]),

      m("MATHS","Le nombre 11 à 15",
        "Étendre la connaissance numérique au-delà de 10 en introduisant les nombres 11 à 15, construits sur le modèle « dix + unités », par manipulation de dizaines et d'unités concrètes.",
        ["Rappel : la suite 0 à 10 déjà connue","Montrer un paquet de 10 objets (une dizaine) déjà complet","Ajouter 1, 2, 3, 4, 5 objets isolés à côté du paquet de 10 : « dix et un » = onze","Nommer ensemble 11, 12, 13, 14, 15","Écrire les chiffres correspondants au tableau","Jeu : compter des jetons en faisant d'abord le paquet de 10 puis les unités restantes"],
        ["Combien fait « dix et trois » ? → Corrigé : 13","Récite la suite de 11 à 15. → Corrigé : 11, 12, 13, 14, 15","Compte ces jetons (10 en paquet + 4 isolés). → Corrigé : 14","Montre le chiffre 12 parmi ces cartes. → Corrigé : la carte 12 pointée correctement"]),

      m("MORALE","La propreté des ustensiles de cuisine",
        "Sensibiliser au lavage et au rangement soigné des ustensiles de cuisine après usage, en cohérence directe avec le thème d'Environnement de la semaine.",
        ["Observer des images d'ustensiles propres et d'ustensiles sales","Discuter : pourquoi faut-il laver une assiette après le repas ?","Montrer les gestes : laver, rincer, essuyer, ranger","Jeu de rôle : mimer le lavage d'une assiette et d'une cuillère","Règle de classe : ne jamais réutiliser un ustensile sale","Vérifier au quotidien le rangement du coin cuisine de la classe"],
        ["Pourquoi faut-il laver une assiette après le repas ? → Corrigé : pour enlever les restes de nourriture et les microbes","Montre comment tu laves une cuillère. → Corrigé : geste de lavage, rinçage et essuyage réalisé","Que fais-tu d'un ustensile après l'avoir lavé ? → Corrigé : je le range à sa place","Peux-tu réutiliser un ustensile sale ? → Corrigé : non, il faut d'abord le laver"]),

      m("ENVIRONNEMENT","Les ustensiles de cuisine",
        "Nommer les ustensiles de cuisine usuels par manipulation directe, en lien avec la routine de propreté vue en Morale.",
        ["Apporter des ustensiles réels : assiette, cuillère, marmite, louche","Nommer chaque ustensile un par un","Expliquer l'usage de chaque objet","Jeu de Kim : cacher un objet, deviner lequel manque","Associer chaque objet à l'image correspondante","Ranger les ustensiles en les nommant"],
        ["Comment s'appelle cet objet ? (montrer la marmite) → Corrigé : la marmite","À quoi sert la louche ? → Corrigé : à servir la soupe / remuer dans la marmite","Montre l'objet qui sert à manger. → Corrigé : la cuillère pointée","Cite 3 ustensiles de cuisine. → Corrigé : assiette, cuillère, marmite, louche (3 parmi ces réponses)"]),

      m("ANGLAIS","Kitchen utensils",
        "Reprendre le vocabulaire des ustensiles de cuisine vu en Environnement et l'introduire en anglais par flashcards et jeu de correspondance.",
        ["Flashcards : plate, spoon, pot","Répéter chaque mot 3 fois avec l'objet réel","Jeu « Point to the... » avec les ustensiles de la classe","Chanson courte reprenant les mots","Associer l'image anglaise au mot français déjà appris"],
        ["What is this? (montrer une assiette) → Corrigé : plate","Point to the spoon. → Corrigé : la cuillère pointée","How do you say « une marmite » in English? → Corrigé : a pot","Repeat: « spoon ». → Corrigé : prononciation évaluée"]),

      m("CHANT","Tombe, tombe, tombe la pluie — chanter en entier",
        "Consolider la mémorisation complète de la chanson découverte la semaine précédente en ajoutant un 2e couplet et en travaillant la justesse rythmique.",
        ["Rappel du refrain appris la semaine précédente","Ajouter le 2e couplet","Chanter en entier, lentement puis à vitesse normale","Ajouter des gestes sur le 2e couplet","Chanter en 2 groupes qui se répondent"],
        ["Chante la chanson en entier. → Corrigé : refrain + 2 couplets chantés conformément aux paroles apprises","Que dit le 2e couplet ? → Corrigé : citer 1 élément du couplet","Montre le geste du 2e couplet. → Corrigé : geste conforme à celui appris en classe","Chante en groupe en respectant ton tour. → Corrigé : performance collective évaluée"]),

      m("RECITATION","En été ou en hiver — enchaîner les 4 lignes",
        "Poursuivre la mémorisation du poème en ajoutant les 2 lignes suivantes, pour arriver à une récitation complète du texte.",
        ["Rappel des 2 premières lignes apprises la semaine précédente","Réciter les lignes 3 et 4 du poème","Répéter la 3ème ligne en chœur, 5 fois","Répéter la 4ème ligne en chœur, 5 fois","Enchaîner les 4 lignes ensemble","Réciter avec les gestes des saisons déjà appris"],
        ["Récite les 4 lignes du poème. → Corrigé : les 4 lignes récitées conformes au texte appris","Combien de lignes connais-tu maintenant ? → Corrigé : 4 lignes","Récite la 3ème ligne seule. → Corrigé : ligne récitée conforme au texte appris","Récite le poème en entier avec les gestes. → Corrigé : texte et gestes conformes à ce qui a été appris"]),

      m("EPS","Jeux : ballon",
        "Découvrir la manipulation du ballon (le tenir, le lancer, le rattraper) par des jeux simples en binôme, pour préparer les jeux collectifs des semaines suivantes.",
        ["Manipuler le ballon librement (le faire rouler, le tenir à deux mains)","Montrer comment lancer le ballon à 2 mains depuis la poitrine","Montrer comment rattraper le ballon sans le laisser tomber","Jouer en binôme : se faire des passes à courte distance","Faire rouler le ballon vers une cible (un cerceau)","Retour au calme : ranger les ballons ensemble"],
        ["Lance le ballon à ton camarade à 2 mains. → Corrigé : lancer réalisé depuis la poitrine, ballon parvenu au camarade","Rattrape le ballon sans le faire tomber. → Corrigé : ballon rattrapé à 2 mains","Fais rouler le ballon jusqu'au cerceau. → Corrigé : ballon parvenu dans ou près du cerceau","Range le ballon à sa place après le jeu. → Corrigé : geste réalisé correctement"]),

      m("DESSIN","Un verre",
        "Dessiner un verre (forme simple, plus étroite en bas) en lien avec le thème des ustensiles de cuisine vu en Environnement.",
        ["Montrer un vrai verre","Observer sa forme : plus étroit en bas, plus large en haut","Tracer la forme au tableau étape par étape","Chaque enfant trace la forme sur sa feuille","Ajouter un peu d'eau dessinée à l'intérieur","Colorier le verre et son contenu"],
        ["Quelle forme a le verre : plus large en haut ou en bas ? → Corrigé : plus large en haut","Dessine un verre. → Corrigé : forme reconnaissable (plus large en haut) et coloriée","Que peux-tu ajouter à l'intérieur du verre ? → Corrigé : de l'eau ou un liquide dessiné","Montre la partie la plus étroite de ton verre. → Corrigé : le bas du verre pointé"]),

      m("TRAVAUX MANUELS","Déchiquetage",
        "Développer la motricité fine des doigts (pince pouce-index) par le déchirage de papier en petits morceaux, collés ensuite pour former une mosaïque simple.",
        ["Présenter des chutes de papier de couleur","Montrer le geste : déchirer le papier en petits morceaux avec les doigts (pas de ciseaux)","Déposer de la colle sur un contour dessiné (par exemple une marmite)","Coller les morceaux déchirés à l'intérieur du contour","Recouvrir toute la surface sans dépasser","Laisser sécher et exposer les productions"],
        ["Montre comment tu déchires le papier avec tes doigts. → Corrigé : geste de pince pouce-index réalisé, morceaux obtenus","Colle tes morceaux à l'intérieur du contour. → Corrigé : morceaux collés majoritairement dans le contour","As-tu recouvert toute la surface ? → Corrigé : évaluation visuelle du recouvrement","Montre ta mosaïque terminée. → Corrigé : production présentée"]),

      m("CONTE","Ny saka sy ny totozy — suite",
        "Poursuivre le conte en développant la compréhension de l'intrigue (les actions du chat et de la souris) et en faisant répéter une réplique clé.",
        ["Rappel des personnages et du début de l'histoire","Raconter la suite du conte avec les images","Discuter : que fait ny saka ? que fait ny totozy pour lui échapper ?","Faire répéter une réplique d'un des personnages","Demander une prédiction simple sur la suite de l'histoire"],
        ["Que fait ny saka dans cette partie de l'histoire ? → Corrigé : réponse conforme au passage raconté","Comment ny totozy essaie-t-il d'échapper au chat ? → Corrigé : réponse conforme au passage raconté (se cacher, courir...)","Que va-t-il se passer selon toi ? → Corrigé : prédiction libre acceptée si cohérente avec l'histoire","Montre l'image qui correspond à ce que je viens de raconter. → Corrigé : bonne image pointée"])

    ],
  },

  {
    n:3, dates:"23/11/2026 – 27/11/2026",
    theme:"Lettre n (Lecture/Vakiteny/Écriture) · Égalité et différence · Compte de 0 à 15 · Les fruits",
    matieres:[

      m("LECTURE","La lettre n : son [n] et syllabes na-ni-no-nu-ne",
        "Introduire la consonne n par la méthode syllabique, en la distinguant de m qui sera vue la semaine suivante (les 2 sons se forment avec le nez, mais m ferme les lèvres, pas n).",
        ["Montrer la lettre N en grand format au tableau","Prononcer le son [n] en plaçant la langue derrière les dents du haut","Chercher des mots avec [n] : nid, nuage, banane","Combiner n + a, n + i, n + o, n + u, n + e au tableau : na, ni, no, nu, ne","Faire lire la ligne de syllabes en chœur puis individuellement","Comparer avec les consonnes déjà connues (l, t, d)","Jeu : la maîtresse pointe une syllabe, l'enfant la lit"],
        ["Quel son fait la lettre n ? → Corrigé : [n]","Lis cette syllabe : na → Corrigé : [na]","Lis ces syllabes dans l'ordre : nu — ni — no → Corrigé : lecture correcte des 3 syllabes","Quelle syllabe obtient-on avec n + e ? → Corrigé : ne"]),

      m("VAKITENY","La lettre n : premières syllabes en malagasy",
        "Introduire le son [n] en malagasy et former les syllabes avec les voyelles malagasy déjà connues (a, e, i, o).",
        ["Montrer la lettre N, prononcer [n]","Mots connus avec [n] : ny, nify, nofy","Combiner n + a, n + e, n + i, n + o au tableau","Faire lire les syllabes en chœur","Jeu de lecture individuelle des syllabes"],
        ["Lis cette syllabe : na → Corrigé : [na]","Cite un mot malagasy avec le son [ni]. → Corrigé : nify (une réponse correcte acceptée)","Lis : no — ne → Corrigé : lecture correcte des 2 syllabes","Entoure les syllabes avec « n » : na — da — no — ta → Corrigé : na, no entourés"]),

      m("ÉCRITURE","La lettre n : tracé du petit pont",
        "Apprendre le tracé du n (une canne suivie d'un petit pont, une seule bosse), en le comparant au m qui aura deux bosses la semaine suivante.",
        ["Montrer le tracé : on descend une canne, on remonte et on redescend en formant un petit pont","Comparer avec le u déjà connu (le n a une canne devant, le u non)","Tracer dans l'air, puis sur l'ardoise","Tracer sur papier préligné","Tracer « na » en attachant n et a","Tracer 3 syllabes différentes sur la ligne (na, no, ne)"],
        ["Trace la lettre n sur ton ardoise. → Corrigé : canne suivie d'un petit pont, une seule bosse visible","Combien de bosses a la lettre n ? → Corrigé : 1","Écris la syllabe « no ». → Corrigé : n et o correctement attachés et lisibles","Trace 3 syllabes avec n (na, no, ne). → Corrigé : tracé des 3 syllabes conforme"]),

      m("LANGAGE","François va chez le coiffeur — enrichir avec des adjectifs",
        "Enrichir le récit et le dialogue déjà construits en ajoutant des adjectifs simples pour décrire les cheveux et la coupe (longs, courts, nouveaux), afin de développer la phrase descriptive.",
        ["Rappel du dialogue construit la semaine précédente","Observer des images : cheveux longs / cheveux courts avant et après la coupe","Introduire les adjectifs : longs, courts, nouveaux","Faire des phrases : « François avait les cheveux longs, maintenant il a les cheveux courts »","Jeu : décrire l'image « avant » puis l'image « après » avec les bons adjectifs","Réinvestir le dialogue en ajoutant une phrase descriptive"],
        ["Comment étaient les cheveux de François avant la coupe ? → Corrigé : longs","Comment sont ses cheveux après la coupe ? → Corrigé : courts","Fais une phrase avec le mot « nouveaux » à propos de la coupe de François. → Corrigé : phrase contenant « nouvelle coupe » ou équivalent","Décris l'image « après » avec un adjectif. → Corrigé : adjectif correctement employé (courts, nouveaux...)"]),

      m("PRE-MATH","Égalité et différence : le signe = et le signe ≠",
        "Introduire les signes = et ≠ pour formaliser les comparaisons de quantités déjà pratiquées à l'oral (« autant que » en octobre), en manipulant des collections d'objets.",
        ["Rappel : « autant » signifie la même quantité (vu en octobre)","Aligner 2 collections égales : 4 billes et 4 jetons → montrer le signe = entre les deux","Aligner 2 collections différentes : 3 billes et 5 jetons → montrer le signe ≠ entre les deux","Faire manipuler d'autres collections et choisir le bon signe","Jeu : présenter 2 collections, l'enfant lève la carte = ou ≠","Écrire ensemble une petite égalité simple (4 = 4)"],
        ["Ces 2 collections ont-elles le même nombre d'objets (4 et 4) ? Quel signe utiliser ? → Corrigé : oui, le signe =","Ces 2 collections sont-elles différentes (3 et 5) ? Quel signe utiliser ? → Corrigé : oui, le signe ≠","Écris 3 = 3. → Corrigé : égalité correctement écrite","Montre 2 collections différentes parmi celles-ci. → Corrigé : les 2 collections de quantités inégales désignées"]),

      m("MATHS","Compter de 0 à 15",
        "Consolider le comptage continu de 0 à 15 en reliant la suite 0-10 déjà connue aux nombres 11-15 vus la semaine précédente, par récitation rythmée et manipulation.",
        ["Rappel de la suite 0 à 10","Rappel des nombres 11 à 15 vus la semaine précédente","Réciter ensemble la suite complète de 0 à 15","Compter des objets réels jusqu'à 15 (jetons, doigts + objets)","Jeu de la bande numérique : compléter les nombres manquants de 0 à 15","Chaque enfant compte à voix haute jusqu'à 15 devant le groupe"],
        ["Récite la suite de 0 à 15. → Corrigé : 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15","Compte ces 15 jetons. → Corrigé : 15","Quel nombre vient juste après 14 ? → Corrigé : 15","Complète la bande numérique : 11, 12, __, 14, __ → Corrigé : 13, 15"]),

      m("MORALE","Propreté des aliments",
        "Sensibiliser au lavage des aliments avant consommation (fruits, légumes) en lien direct avec la découverte des fruits en Environnement cette même semaine.",
        ["Observer des fruits sales et des fruits lavés","Discuter : pourquoi faut-il laver un fruit avant de le manger ?","Montrer le geste : rincer le fruit sous l'eau avant de le croquer","Jeu de rôle : mimer le lavage d'une pomme avant de la manger","Règle de classe : toujours laver un fruit apporté de la maison avant de le manger en classe","Vérifier au quotidien le geste au moment du goûter"],
        ["Pourquoi faut-il laver un fruit avant de le manger ? → Corrigé : pour enlever la terre et les microbes","Montre comment tu laves une pomme. → Corrigé : geste de rinçage sous l'eau réalisé","Que fais-tu avant de manger ton fruit du goûter ? → Corrigé : je le lave / je le fais laver","Peux-tu manger un fruit sale directement ? → Corrigé : non, il faut d'abord le laver"]),

      m("ENVIRONNEMENT","Les fruits",
        "Découvrir et nommer des fruits courants à Madagascar (pomme, banane, orange, mangue) par observation et dégustation, en amorçant une classification simple.",
        ["Apporter des fruits réels : pomme, banane, orange, mangue","Nommer chaque fruit un par un","Observer et toucher : forme, couleur, texture de la peau","Sentir chaque fruit et décrire son odeur","Goûter un morceau de chaque fruit (avec autorisation et hygiène)","Associer chaque fruit à son image"],
        ["Comment s'appelle ce fruit ? (montrer une banane) → Corrigé : une banane","De quelle couleur est la peau de l'orange ? → Corrigé : orange","Montre le fruit le plus long parmi ceux présentés. → Corrigé : la banane pointée","Cite 3 fruits que tu connais. → Corrigé : pomme, banane, orange, mangue (3 parmi ces réponses ou autres fruits réels)"]),

      m("ANGLAIS","Food: the fruit",
        "Introduire le vocabulaire anglais des fruits en écho direct au thème d'Environnement, par flashcards et répétition.",
        ["Flashcards : apple, banana, orange, mango","Répéter chaque mot 3 fois avec le fruit réel ou l'image","Jeu « Point to the... » : la maîtresse dit un mot, les enfants pointent le fruit","Chanson courte reprenant les mots","Associer l'image anglaise au mot français déjà appris"],
        ["What is this? (montrer une pomme) → Corrigé : apple","Point to the banana. → Corrigé : la banane pointée","How do you say « une orange » in English? → Corrigé : an orange","Repeat: « mango ». → Corrigé : prononciation évaluée"]),

      m("CHANT","Les fruits sont mûrs — découverte",
        "Apprendre une nouvelle chanson énumérant des fruits, en réinvestissant le vocabulaire vu en Environnement cette même semaine.",
        ["Chanter la chanson en entier une première fois, lentement","Expliquer les fruits cités dans les paroles","Répéter le refrain en chœur, 3 fois","Ajouter un geste (mimer la cueillette d'un fruit)","Chanter par petits groupes","Repérer les mots qui riment"],
        ["Chante le refrain de « Les fruits sont mûrs ». → Corrigé : refrain chanté conformément aux paroles apprises","Cite un fruit cité dans la chanson. → Corrigé : au moins un fruit des paroles cité","Montre le geste qui va avec le refrain. → Corrigé : geste conforme à celui appris en classe","Chante avec ton voisin en faisant le bon geste. → Corrigé : performance en binôme évaluée"]),

      m("RECITATION","Les fruits (pomme et poire dans l'armoire) — découverte",
        "Découvrir un nouveau poème énumérant des fruits, en mémorisant les 2 premières lignes par répétition collective.",
        ["Réciter le poème entier une fois avec expression","Expliquer le vocabulaire des fruits cités","Répéter la 1ère ligne en chœur, 5 fois","Répéter la 2ème ligne en chœur, 5 fois","Enchaîner les 2 lignes ensemble","Réciter avec le geste de montrer le fruit cité"],
        ["Récite la première ligne du poème. → Corrigé : ligne récitée conforme au texte appris","Quels fruits sont cités dans ce poème ? → Corrigé : la pomme et la poire","Combien de lignes connais-tu ? → Corrigé : 2 lignes","Récite les 2 lignes avec le bon geste. → Corrigé : texte + geste conformes à ce qui a été appris"]),

      m("EPS","Course",
        "Consolider la course en ligne droite avec un départ chronométré et une notion de distance, en réinvestissant les repères de couloir déjà vus en octobre.",
        ["Délimiter un couloir de course de 15 mètres avec des plots","Rappel des 3 signaux : « à vos marques, prêts, partez ! »","Courir par groupes de 4 pour éviter les bousculades","Courir puis s'arrêter net au signal « stop »","Chronométrer de façon ludique en comptant à voix haute","Retour au calme : marche lente"],
        ["Cours jusqu'au plot sans t'arrêter. → Corrigé : distance complète parcourue en courant","Que fais-tu au signal « stop » ? → Corrigé : je m'arrête immédiatement","Dans quel couloir dois-tu rester en courant ? → Corrigé : le couloir délimité par les plots","Combien d'enfants courent en même temps dans ton groupe ? → Corrigé : 4"]),

      m("DESSIN","Un fruit",
        "Dessiner un fruit au choix (pomme, banane ou orange) en réinvestissant les formes rondes ou allongées observées en Environnement.",
        ["Rappel des fruits observés en Environnement","Choisir un fruit à dessiner (pomme, banane ou orange)","Observer sa forme de base (rond ou allongé)","Tracer la forme au tableau étape par étape","Chaque enfant trace son fruit sur sa feuille","Colorier avec la couleur réelle du fruit choisi"],
        ["Quelle forme a une pomme ? → Corrigé : un rond (légèrement aplati)","Dessine le fruit de ton choix. → Corrigé : forme reconnaissable du fruit choisi, coloriée avec la bonne couleur","Quelle couleur as-tu utilisée pour ta banane (si choisie) ? → Corrigé : jaune","Montre le fruit que tu as dessiné. → Corrigé : production présentée et nommée correctement"]),

      m("TRAVAUX MANUELS","Fête de Noël — préparer les décorations",
        "Débuter la préparation des décorations de Noël (guirlandes simples) en développant la précision du geste de découpe et de collage, pour un projet qui se poursuivra la semaine suivante.",
        ["Présenter le projet : fabriquer des guirlandes pour décorer la classe","Distribuer des bandes de papier de couleur","Montrer comment coller les extrémités d'une bande en anneau","Passer une 2e bande dans le 1er anneau et la coller à son tour","Continuer la chaîne d'anneaux en autonomie","Ranger le matériel et suspendre les guirlandes commencées"],
        ["Montre comment tu colles un anneau de papier. → Corrigé : extrémités de la bande collées en anneau fermé","Combien d'anneaux as-tu fabriqués aujourd'hui ? → Corrigé : nombre réellement réalisé, compté ensemble","Pourquoi fabrique-t-on ces guirlandes ? → Corrigé : pour décorer la classe pour Noël","Montre ta chaîne d'anneaux. → Corrigé : production présentée avec anneaux correctement reliés"]),

      m("CONTE","Ny saka sy ny totozy — développement de l'histoire",
        "Poursuivre le conte en approfondissant le lien entre les 2 personnages (ruse, poursuite) et en faisant restituer un passage précis.",
        ["Rappel des épisodes précédents à l'aide des images","Raconter la suite du conte : la ruse de ny totozy pour échapper à ny saka","Discuter : comment ny totozy est-il malin dans cette histoire ?","Faire répéter une réplique du passage raconté","Faire raconter ce passage par un enfant volontaire à l'aide des images"],
        ["Quelle ruse utilise ny totozy pour échapper à ny saka ? → Corrigé : réponse conforme au passage raconté","Répète la réplique que je viens de raconter. → Corrigé : réplique répétée fidèlement","Raconte ce passage avec tes propres mots. → Corrigé : récit cohérent avec le passage réellement raconté","Montre l'image qui correspond à cette ruse. → Corrigé : bonne image pointée"])

    ],
  },

  {
    n:4, dates:"30/11/2026 – 04/12/2026",
    theme:"Lettre m (Lecture/Vakiteny/Écriture) · Comparaison < et > · Le nombre 16 à 20 · Les fruits (approfondissement)",
    matieres:[

      m("LECTURE","La lettre m : son [m] et syllabes ma-mi-mo-mu-me — premiers mots lus",
        "Introduire la dernière consonne du mois, en la distinguant du n déjà connu (m ferme les 2 lèvres). Une fois les syllabes formées, faire lire de premiers mots simples combinant les lettres du mois (l, t, d, n, m) et les voyelles.",
        ["Montrer la lettre M en grand format au tableau","Prononcer le son [m] en fermant bien les 2 lèvres","Comparer avec [n] : les lèvres se ferment pour m, restent ouvertes pour n","Combiner m + a, m + i, m + o, m + u, m + e au tableau : ma, mi, mo, mu, me","Faire lire la ligne de syllabes en chœur puis individuellement","Assembler 2 syllabes connues pour lire un mot simple : « moto », « dame », « lame »","Faire lire ces mots par les enfants les plus avancés, avec aide pour les autres"],
        ["Quel son fait la lettre m ? → Corrigé : [m]","Lis cette syllabe : ma → Corrigé : [ma]","Lis ce mot : moto → Corrigé : lecture correcte du mot « moto »","Quelle syllabe obtient-on avec m + u ? → Corrigé : mu"]),

      m("VAKITENY","La lettre m : premières syllabes en malagasy",
        "Introduire le son [m] en malagasy et former les syllabes avec les voyelles malagasy déjà connues (a, e, i, o), en clôturant ainsi les 5 consonnes du 1er trimestre (l, t, d, n, m).",
        ["Montrer la lettre M, prononcer [m]","Mots connus avec [m] : maso, malemy, mofo","Combiner m + a, m + e, m + i, m + o au tableau","Faire lire les syllabes en chœur","Jeu de lecture individuelle des syllabes","Récapituler les 5 consonnes apprises depuis octobre : l, t, d, n, m"],
        ["Lis cette syllabe : ma → Corrigé : [ma]","Cite un mot malagasy qui commence par « ma ». → Corrigé : maso, malemy (une réponse correcte acceptée)","Lis : mo — me → Corrigé : lecture correcte des 2 syllabes","Cite les 5 consonnes apprises depuis octobre. → Corrigé : l, t, d, n, m"]),

      m("ÉCRITURE","La lettre m : tracé des deux ponts",
        "Apprendre le tracé du m (une canne suivie de deux petits ponts), en le comparant directement au n (une seule bosse) pour bien fixer la différence visuelle.",
        ["Montrer le tracé : on descend une canne, on remonte et redescend 2 fois pour former 2 bosses","Comparer avec le n déjà connu : compter les bosses ensemble (1 pour n, 2 pour m)","Tracer dans l'air, puis sur l'ardoise","Tracer sur papier préligné","Tracer « ma » en attachant m et a","Écrire un mot simple complet (« moto ») en attachant toutes les lettres"],
        ["Trace la lettre m sur ton ardoise. → Corrigé : canne suivie de 2 bosses bien visibles","Combien de bosses a la lettre m ? → Corrigé : 2","Écris la syllabe « mi ». → Corrigé : m et i correctement attachés et lisibles","Écris le mot « moto » en entier. → Corrigé : les 4 lettres correctement attachées et lisibles"]),

      m("LANGAGE","François va chez le coiffeur — restitution complète et récit personnel",
        "Conclure l'exploitation prolongée de l'histoire sur les 4 semaines de novembre en demandant une restitution complète autonome incluant le dialogue et les adjectifs travaillés, puis en ouvrant vers le vécu personnel de chaque enfant.",
        ["Rappel de l'histoire, du dialogue et des adjectifs travaillés durant le mois","Faire raconter l'histoire complète par un enfant volontaire avec le dialogue et au moins un adjectif","Discussion : « Es-tu déjà allé chez le coiffeur ? Que s'est-il passé ? »","Faire raconter par chaque enfant un court souvenir personnel (2-3 phrases)","Valoriser les phrases bien construites (sujet-verbe-complément, adjectif)"],
        ["Raconte l'histoire de François du début à la fin, avec le dialogue. → Corrigé : récit cohérent incluant au moins une réplique du dialogue appris","Utilise un adjectif pour décrire les cheveux de François après la coupe. → Corrigé : adjectif correctement employé (courts, nouveaux)","Es-tu déjà allé chez le coiffeur ? Raconte. → Corrigé : réponse personnelle en 2-3 phrases cohérentes","Que dit-on en arrivant et en partant du coiffeur ? → Corrigé : « bonjour » et « merci, au revoir » (ou équivalent appris)"]),

      m("PRE-MATH","Comparaison : le signe < (plus petit que) et > (plus grand que)",
        "Introduire les signes < et > pour formaliser la comparaison de quantités inégales, en réinvestissant la notion « plus que » vue en octobre et les signes = / ≠ vus la semaine précédente.",
        ["Rappel des signes = et ≠ vus la semaine précédente","Aligner 2 collections inégales : 3 billes et 6 billes","Montrer que 3 est plus petit que 6 : introduire le signe < (la pointe vers le petit nombre)","Montrer l'inverse : 6 est plus grand que 3, introduire le signe >","Comparer d'autres paires de nombres avec les signes","Jeu : présenter 2 nombres, l'enfant montre le bon signe"],
        ["Compare 2 et 5 : quel signe utiliser, < ou > ? → Corrigé : 2 < 5","Compare 8 et 3 : quel signe utiliser ? → Corrigé : 8 > 3","Que signifie le signe < ? → Corrigé : plus petit que","Écris la comparaison entre 4 et 7 avec le bon signe. → Corrigé : 4 < 7"]),

      m("MATHS","Le nombre 16 à 20",
        "Étendre la suite numérique jusqu'à 20 en poursuivant le modèle « dix + unités » déjà utilisé pour 11-15, par manipulation d'un paquet de 10 et d'unités supplémentaires.",
        ["Rappel de la suite 0 à 15 déjà connue","Montrer un paquet de 10 objets complet, ajouter 6, 7, 8, 9, 10 objets isolés","Nommer ensemble 16, 17, 18, 19, 20","Écrire les chiffres correspondants au tableau","Réciter la suite complète de 0 à 20","Jeu : compter des jetons jusqu'à 20 en faisant le paquet de 10 puis les unités"],
        ["Combien fait « dix et sept » ? → Corrigé : 17","Récite la suite de 16 à 20. → Corrigé : 16, 17, 18, 19, 20","Compte ces jetons (10 en paquet + 8 isolés). → Corrigé : 18","Récite la suite complète de 0 à 20. → Corrigé : 0,1,2,...,19,20 récités sans erreur"]),

      m("MORALE","Propreté des aliments — conserver et couvrir",
        "Approfondir le thème de la propreté des aliments vu la semaine précédente en abordant la conservation (couvrir, ranger au frais) pour éviter que les aliments ne soient salis ou abîmés.",
        ["Rappel : on lave toujours un fruit avant de le manger (vu la semaine précédente)","Observer des images d'aliments couverts et d'aliments laissés à l'air libre avec des mouches","Discuter : pourquoi couvrir un plat ou un fruit posé sur la table ?","Montrer le geste : couvrir un plat avec un linge propre ou un couvercle","Jeu de rôle : mimer le rangement des fruits dans un endroit propre après le marché","Vérifier au quotidien que le goûter de chacun est bien protégé dans son sac"],
        ["Pourquoi faut-il couvrir un plat de nourriture ? → Corrigé : pour le protéger des mouches et de la saleté","Montre comment tu couvres un fruit posé sur la table. → Corrigé : geste de recouvrement avec un linge ou un couvercle","Où ranges-tu tes fruits en rentrant du marché ? → Corrigé : dans un endroit propre et frais","Que risque un aliment laissé découvert ? → Corrigé : d'être sali ou touché par des mouches/insectes"]),

      m("ENVIRONNEMENT","Les fruits — classification et comptage",
        "Approfondir la découverte des fruits de la semaine précédente en les classant par couleur et en réinvestissant le comptage jusqu'à 20 vu en Maths cette même semaine.",
        ["Rappel des fruits déjà découverts : pomme, banane, orange, mangue","Trier les fruits (réels ou en image) par couleur : rouge, jaune, orange","Compter le nombre de fruits de chaque tas","Ajouter 1-2 nouveaux fruits locaux (litchi, ananas) pour enrichir la classification","Discussion : quel est ton fruit préféré et pourquoi ?","Associer chaque fruit à son goût (sucré, acide)"],
        ["Classe ces fruits par couleur : banane, orange, pomme rouge. → Corrigé : jaune (banane), orange (orange), rouge (pomme)","Combien de fruits jaunes vois-tu sur la table ? → Corrigé : nombre exact correspondant à la collection réelle présentée","Cite un fruit qui a un goût acide. → Corrigé : l'orange, le litchi (une réponse cohérente acceptée)","Quel est ton fruit préféré ? → Corrigé : réponse personnelle"]),

      m("ANGLAIS","Food: the fruit — I like...",
        "Approfondir le vocabulaire des fruits vu la semaine précédente en introduisant la structure « I like... » pour exprimer une préférence simple.",
        ["Rappel des mots déjà appris : apple, banana, orange, mango","Introduire la structure « I like apples »","Chaque enfant dit sa préférence avec la structure","Jeu : la maîtresse dit un fruit, les enfants répondent « I like it » ou « I don't like it »","Chanson courte reprenant « I like... » avec les fruits"],
        ["Say: « I like bananas ». → Corrigé : prononciation évaluée, structure respectée","What fruit do you like? → Corrigé : réponse personnelle avec un nom de fruit en anglais","Point to the mango. → Corrigé : la mangue pointée","How do you say « j'aime les pommes » in English? → Corrigé : I like apples"]),

      m("CHANT","Les fruits sont mûrs — chanter en entier",
        "Consolider la mémorisation complète de la chanson découverte la semaine précédente en ajoutant un 2e couplet et en travaillant la justesse rythmique.",
        ["Rappel du refrain appris la semaine précédente","Ajouter le 2e couplet","Chanter en entier, lentement puis à vitesse normale","Ajouter des gestes sur le 2e couplet","Chanter en 2 groupes qui se répondent"],
        ["Chante la chanson en entier. → Corrigé : refrain + 2 couplets chantés conformément aux paroles apprises","Que dit le 2e couplet ? → Corrigé : citer 1 élément du couplet","Montre le geste du 2e couplet. → Corrigé : geste conforme à celui appris en classe","Chante en groupe en respectant ton tour. → Corrigé : performance collective évaluée"]),

      m("RECITATION","Les fruits (pomme et poire dans l'armoire) — enchaîner les 4 lignes",
        "Poursuivre la mémorisation du poème en ajoutant les 2 lignes suivantes, pour arriver à une récitation complète du texte.",
        ["Rappel des 2 premières lignes apprises la semaine précédente","Réciter les lignes 3 et 4 du poème","Répéter la 3ème ligne en chœur, 5 fois","Répéter la 4ème ligne en chœur, 5 fois","Enchaîner les 4 lignes ensemble","Réciter avec les gestes déjà appris"],
        ["Récite les 4 lignes du poème. → Corrigé : les 4 lignes récitées conformes au texte appris","Combien de lignes connais-tu maintenant ? → Corrigé : 4 lignes","Quels fruits sont cités dans les 4 lignes ? → Corrigé : la pomme et la poire (et tout autre fruit réellement cité dans le texte)","Récite le poème en entier avec les gestes. → Corrigé : texte et gestes conformes à ce qui a été appris"]),

      m("EPS","Passe à 10",
        "Développer la coordination et l'esprit d'équipe en réalisant un maximum de passes de ballon consécutives sans le faire tomber, en réinvestissant les jeux de ballon vus en semaine 2.",
        ["Rappel des gestes de passe et de réception vus en semaine 2","Former des équipes de 4-5 enfants en cercle","Expliquer la règle : compter à voix haute chaque passe réussie, objectif 10","Jouer plusieurs manches, en recommençant à 0 si le ballon tombe","Encourager la coopération plutôt que la compétition","Retour au calme : ranger les ballons ensemble"],
        ["Combien de passes consécutives ton équipe a-t-elle réussies ? → Corrigé : nombre réel atteint par l'équipe, compté ensemble","Que fait-on si le ballon tombe ? → Corrigé : on recompte à partir de 0","Fais une passe correcte à ton camarade. → Corrigé : passe réalisée à 2 mains, ballon parvenu au camarade","Pourquoi compte-t-on les passes à voix haute ? → Corrigé : pour que toute l'équipe sache où elle en est"]),

      m("DESSIN","Dessin libre — les fruits",
        "Laisser chaque enfant choisir librement ce qu'il souhaite dessiner sur le thème des fruits vu ce mois-ci, pour développer l'autonomie et la créativité.",
        ["Rappel des fruits vus dans le mois (pomme, banane, orange, mangue...)","Proposer à chaque enfant de choisir un ou plusieurs fruits à dessiner librement","Laisser libre le choix de la composition (un fruit seul, un panier de fruits...)","Circuler pour aider ceux qui en ont besoin sans imposer de modèle","Colorier librement","Exposer les productions du mois"],
        ["Quel(s) fruit(s) as-tu choisi de dessiner ? → Corrigé : réponse personnelle avec un ou plusieurs fruits nommés","Montre ton dessin terminé. → Corrigé : production présentée","Pourquoi as-tu choisi ce fruit ? → Corrigé : réponse personnelle justifiée","Quelle couleur as-tu utilisée pour ton fruit ? → Corrigé : couleur cohérente avec le fruit choisi"]),

      m("TRAVAUX MANUELS","Fête de Noël — terminer les décorations",
        "Terminer le projet de guirlandes commencé la semaine précédente et fabriquer un objet supplémentaire (étoile en papier) pour décorer la classe avant les vacances de décembre.",
        ["Rappel du projet de guirlandes commencé","Terminer les chaînes d'anneaux et les mesurer","Présenter un nouveau pliage/collage simple : une étoile en papier plié","Réaliser l'étoile pas à pas avec l'aide de l'enseignant","Accrocher les guirlandes et les étoiles dans la classe","Admirer collectivement la décoration terminée"],
        ["Montre ta guirlande terminée. → Corrigé : chaîne d'anneaux complète présentée","Combien d'anneaux compte ta guirlande au total ? → Corrigé : nombre réel compté ensemble","Montre l'étoile que tu as fabriquée. → Corrigé : étoile en papier reconnaissable présentée","Où accroche-t-on ces décorations ? → Corrigé : dans la classe, pour la fête de Noël"]),

      m("CONTE","Ny saka sy ny totozy — fin et morale",
        "Conclure le conte du mois en travaillant la restitution complète de l'histoire et de sa morale, avant de découvrir un nouveau conte en décembre.",
        ["Rappel de toute l'histoire à l'aide des images dans l'ordre","Raconter la fin du conte","Discuter de la morale ou de la leçon du conte","Faire raconter l'histoire complète par un enfant volontaire","Jeu de rôle final : les enfants jouent l'histoire entière (un enfant en saka, un en totozy)"],
        ["Comment se termine l'histoire de ny saka sy ny totozy ? → Corrigé : résumé de la fin conforme au conte raconté","Quelle leçon peut-on tirer de ce conte ? → Corrigé : réponse acceptée si cohérente avec la morale du conte","Raconte l'histoire entière avec tes mots. → Corrigé : récit cohérent couvrant début-milieu-fin","Quel personnage as-tu préféré ? Pourquoi ? → Corrigé : réponse personnelle justifiée"])

    ],
  }

];

const DECEMBRE_12EME = [

  {
    n:1, dates:"07/12/2026 – 11/12/2026",
    theme:"ÉVALUATION ORALE — Bilan de Novembre (lettres t, d, n, m et syllabes · nombres 11 à 20 · vocabulaire pluie, ustensiles, fruits)",
    matieres:[

      m("LECTURE","Évaluation orale — les sons t, d, n, m et la lecture des syllabes",
        "Vérifier individuellement, par un passage oral court, la reconnaissance des 4 consonnes vues en novembre (t, d, n, m) et la lecture des syllabes qu'elles forment avec les voyelles déjà connues. Un rappel bref de la lettre l d'octobre clôt le passage pour vérifier que les acquis antérieurs restent stables.",
        ["Faire passer chaque enfant individuellement pendant que les autres travaillent en autonomie (coloriage calme)","Présenter une carte-lettre (t, d, n, m) et demander le son","Présenter 3 syllabes formées avec ces consonnes (ta, do, nu) à lire","Présenter une syllabe mélangeant une lettre d'octobre et une de novembre (lo, ma) pour vérifier la stabilité des acquis","Faire repérer une lettre du mois parmi une ligne de lettres mélangées","Noter la réussite sur une grille simple (acquis / en cours / non acquis)","Valoriser ce que l'enfant maîtrise avant de clore le passage"],
        ["Quel son fait cette lettre ? (montrer t) → Corrigé : [t]","Lis ces syllabes : da — nu — mo → Corrigé : lecture correcte des 3 syllabes","Lis cette syllabe qui mélange une lettre d'octobre et de novembre : lu → Corrigé : lecture correcte de « lu »","Entoure toutes les lettres « n » dans cette ligne : t n d n m n → Corrigé : les 3 « n » entourés"]),

      m("VAKITENY","Fanamarinana am-bava — ny litera t, d, n, m",
        "Vérifier individuellement la reconnaissance orale des 4 consonnes malgaches vues en novembre (t, d, n, m) et la lecture des syllabes formées avec les voyelles déjà connues (a, e, i, o).",
        ["Faire passer chaque enfant individuellement pendant que les autres travaillent en autonomie","Présenter une carte-lettre (t, d, n, m) et demander le son","Présenter 2 à 3 syllabes à lire (ta, do, ni)","Faire répéter un mot malagasy connu contenant la lettre demandée (tany, deraina, nify, mofo)","Rappeler brièvement la lettre l d'octobre avec la syllabe « la »","Noter la réussite sur une grille simple"],
        ["Inona ny feon'ity litera ity ? (asehoy ny t) → Valiny : [t]","Vakio ity : do → Valiny : [do]","Vakio ity : ma — ni → Valiny : vakiteny marina amin'ny roa","Tsongò ny litera « d » amin'ity andalana ity : t d n d m → Valiny : ny « d » roa voatsongo"]),

      m("ÉCRITURE","Évaluation orale — nommer et décrire le tracé de t, d, n, m",
        "Vérifier, par un passage oral individuel (sans fiche écrite, réservée à la semaine suivante), que chaque enfant sait nommer les lettres du mois, décrire leur tracé avec ses mots et le mimer dans l'air.",
        ["Montrer une carte-lettre (t, d, n, m) et demander de la nommer","Demander de tracer la lettre dans l'air en verbalisant le mouvement","Demander de comparer la hauteur de la lettre avec une lettre déjà connue (le t est-il plus haut ou plus bas que le l ?)","Faire décrire à l'oral la syllabe « ta » : quelles lettres la composent","Rappeler brièvement le tracé du l d'octobre","Noter la réussite sur une grille simple"],
        ["Trace dans l'air la lettre t. → Corrigé : geste conforme au tracé appris (barre verticale, barre horizontale)","Le t est-il plus haut ou plus bas que le l ? → Corrigé : plus bas (le l est une grande canne)","Quelles lettres composent la syllabe « ta » ? → Corrigé : t et a","Nomme cette lettre. (montrer m) → Corrigé : m"]),

      m("LANGAGE","Évaluation orale — vocabulaire et suite de « François va chez le coiffeur »",
        "Vérifier par des questions orales individuelles la mémorisation du vocabulaire ajouté en novembre autour de l'histoire, toujours en cours ce trimestre, et la capacité à en restituer un passage récent.",
        ["Rappel collectif très bref de l'histoire avant les passages individuels","Interroger chaque enfant sur 1 mot de vocabulaire vu en novembre","Demander de montrer une image correspondant à un épisode récent de l'histoire","Demander un résumé oral court d'un passage travaillé en novembre","Rappeler une question simple sur le début de l'histoire (octobre) pour vérifier que rien n'est oublié","Noter la réussite sur une grille simple"],
        ["Où va François ? → Corrigé : chez le coiffeur","Cite un mot de vocabulaire vu en novembre sur cette histoire. → Corrigé : réponse conforme au vocabulaire travaillé en novembre","Montre l'image de l'épisode que nous avons vu récemment. → Corrigé : bonne image pointée","Que fait le coiffeur au début de l'histoire ? → Corrigé : il coupe les cheveux"]),

      m("PRE-MATH","Évaluation orale — écrire zéro et un en lettres, égalité/différence, comparer < >",
        "Vérifier oralement, par manipulation et questionnement individuel, la maîtrise des notions vues en novembre : reconnaissance des mots « zéro » et « un » écrits en lettres, notion d'égalité/différence entre deux collections, et comparaison « plus grand que / plus petit que ».",
        ["Montrer le mot « un » écrit en lettres et demander de le lire","Montrer le mot « zéro » écrit en lettres et demander de le lire","Présenter 2 collections égales et demander si elles sont « égales » ou « différentes »","Présenter 2 collections inégales et demander laquelle est « plus grande », laquelle est « plus petite »","Rappeler brièvement la notion de « plus » vue en octobre","Noter la réussite sur une grille simple"],
        ["Lis ce mot : un → Corrigé : « un »","Lis ce mot : zéro → Corrigé : « zéro »","Ces 2 collections sont-elles égales ou différentes ? (montrer 3 billes et 3 jetons) → Corrigé : égales","Laquelle de ces 2 collections est la plus petite ? (montrer 2 et 5 objets) → Corrigé : celle de 2 objets"]),

      m("MATHS","Évaluation orale — rangement des nombres et suite 11 à 20",
        "Vérifier individuellement la récitation de la suite numérique de 11 à 20 et la capacité à ranger une série de nombres du plus petit au plus grand.",
        ["Faire réciter la suite de 11 à 20","Présenter 3 cartes-nombres entre 11 et 20 à ranger dans l'ordre croissant","Demander quel nombre vient juste avant / juste après un nombre donné","Rappeler brièvement le compte à rebours de 10 à 0 vu en octobre","Noter la réussite sur une grille simple"],
        ["Récite la suite des nombres de 11 à 20. → Corrigé : 11, 12, 13, 14, 15, 16, 17, 18, 19, 20","Range ces 3 nombres du plus petit au plus grand : 17, 12, 15 → Corrigé : 12, 15, 17","Quel nombre vient juste après 16 ? → Corrigé : 17","Compte à rebours de 5 à 0. → Corrigé : 5, 4, 3, 2, 1, 0"]),

      m("MORALE","Évaluation orale — discipline en saison des pluies et propreté des ustensiles/aliments",
        "Vérifier par observation et questions orales individuelles l'appropriation des règles de discipline liées à la saison des pluies et des règles de propreté autour des repas vues en novembre.",
        ["Observer la tenue des enfants ce matin (vêtements de pluie adaptés)","Poser des questions orales individuelles sur la discipline en saison des pluies","Poser des questions sur la propreté des ustensiles de cuisine et des aliments","Valoriser les bons gestes observés au quotidien","Noter la réussite sur une grille simple"],
        ["Que fais-tu en arrivant en classe un jour de pluie ? → Corrigé : ranger son parapluie/bottes, ne pas courir dans les flaques en classe","Pourquoi faut-il laver les ustensiles avant de cuisiner ? → Corrigé : pour enlever les microbes et rester en bonne santé","Que fais-tu avant de manger un fruit ? → Corrigé : le laver","Pourquoi faut-il rester calme et discipliné les jours de pluie ? → Corrigé : pour éviter de glisser et de se blesser"]),

      m("ENVIRONNEMENT","Évaluation orale — vêtements de pluie, ustensiles de cuisine, fruits",
        "Vérifier la connaissance du vocabulaire vu en novembre (vêtements de pluie, ustensiles de cuisine, fruits) par un jeu de reconnaissance d'images en passage individuel.",
        ["Montrer 6 images mélangées (vêtements de pluie, ustensiles, fruits)","Demander de nommer chaque image","Demander de classer 3 images par thème","Rappeler brièvement la météo vue en octobre","Noter la réussite sur une grille simple"],
        ["Comment s'appelle cet objet ? (montrer une casserole) → Corrigé : une casserole","Nomme ce fruit. (montrer une banane) → Corrigé : une banane","Que portes-tu quand il pleut ? → Corrigé : un imperméable, des bottes","Classe ces 3 images par thème : cuillère, banane, botte. → Corrigé : ustensile / fruit / vêtement de pluie correctement associés"]),

      m("ANGLAIS","Révision orale — Kitchen utensils and fruits",
        "Réviser oralement, en passage individuel, le vocabulaire anglais vu en novembre autour des ustensiles de cuisine et des fruits.",
        ["Flashcards mélangées : spoon, fork, plate, banana, mango, apple","Demander de nommer chaque image en anglais","Jeu « Point to the... » avec le vocabulaire du mois","Rappeler brièvement le vocabulaire météo d'octobre (sun, rain)"],
        ["What is this? (montrer une cuillère) → Corrigé : spoon","What is this? (montrer une banane) → Corrigé : banana","Point to the fork. → Corrigé : la fourchette pointée","How's the weather today? → Corrigé : It's sunny / It's rainy selon le temps réel du jour"]),

      m("CHANT","Évaluation — le chant appris en novembre sur la pluie",
        "Vérifier individuellement la mémorisation du chant appris en novembre en lien avec la saison des pluies, par une écoute du refrain chanté en petit groupe puis seul.",
        ["Rappel du chant en grand groupe avant les passages individuels","Faire chanter le refrain seul ou en tout petit groupe","Vérifier le geste associé au refrain","Noter la réussite sur une grille simple"],
        ["Chante le refrain du chant de novembre sur la pluie. → Corrigé : refrain chanté conformément aux paroles apprises","Montre le geste qui va avec ce refrain. → Corrigé : geste conforme à celui appris en classe","De quoi parle ce chant ? → Corrigé : de la pluie / de la saison des pluies","Chante avec un camarade. → Corrigé : performance en binôme évaluée"]),

      m("RECITATION","Évaluation — le poème appris en novembre sur les fruits",
        "Vérifier individuellement la mémorisation des lignes du poème appris en novembre autour des fruits.",
        ["Rappel du poème en grand groupe avant les passages individuels","Faire réciter les lignes apprises seul","Vérifier le geste associé","Noter la réussite sur une grille simple"],
        ["Récite les lignes du poème de novembre sur les fruits. → Corrigé : lignes récitées conformes au texte appris","De quel fruit parle ce poème ? → Corrigé : réponse conforme au texte appris en novembre","Combien de lignes connais-tu ? → Corrigé : nombre de lignes réellement appris en novembre","Récite avec le bon geste. → Corrigé : texte et geste conformes"]),

      m("EPS","Évaluation gestuelle — sauter à pieds joints par-dessus une flaque",
        "Vérifier individuellement la maîtrise du saut à pieds joints travaillé en novembre, mis en scène par un jeu de « flaques d'eau » à sauter en lien avec la saison des pluies, avec un rappel des mouvements d'octobre (course, roulade).",
        ["Installer 3 cerceaux au sol représentant des flaques à éviter","Faire sauter chaque enfant à pieds joints par-dessus les cerceaux","Vérifier la réception (pieds joints, sans tomber)","Rappeler brièvement la course et la roulade d'octobre","Noter la réussite sur une grille simple"],
        ["Saute à pieds joints par-dessus le cerceau. → Corrigé : saut réalisé pieds joints, réception stable","Combien de flaques as-tu sautées sans les toucher ? → Corrigé : nombre réel de réussites sur 3","Cours jusqu'au plot (rappel d'octobre). → Corrigé : distance complète parcourue en courant","Que fais-tu pour ne pas tomber en sautant ? → Corrigé : plier les genoux à la réception"]),

      m("DESSIN","Évaluation orale — nommer les éléments dessinés en novembre (ustensiles, fruits)",
        "Vérifier oralement, en passage individuel, la capacité à nommer et décrire les dessins réalisés en novembre (ustensiles de cuisine, fruits), avant l'épreuve graphique de la semaine 2.",
        ["Montrer les productions de novembre de l'enfant","Demander de nommer ce qui a été dessiné","Demander de citer la couleur utilisée pour un élément précis","Rappeler brièvement un dessin d'octobre (la serviette, la robe)","Noter la réussite sur une grille simple"],
        ["Que représente ce dessin de novembre ? → Corrigé : réponse conforme à la production réelle de l'enfant","Quelle couleur as-tu utilisée pour ce fruit ? → Corrigé : réponse personnelle cohérente","Quelle forme utilises-tu pour dessiner une casserole ? → Corrigé : un rond ou un rectangle","Quelle forme utilisais-tu en octobre pour une serviette ? → Corrigé : un rectangle"]),

      m("TRAVAUX MANUELS","Évaluation orale — décrire la technique de modelage pratiquée en novembre",
        "Vérifier oralement la capacité à décrire avec ses mots la technique de modelage en pâte à modeler travaillée en novembre, avant l'épreuve pratique de la semaine 2.",
        ["Montrer une production de novembre de l'enfant","Demander de décrire les étapes réalisées","Demander de nommer le matériau utilisé","Rappeler brièvement la technique d'octobre (coloriage ou peinture)","Noter la réussite sur une grille simple"],
        ["Que peux-tu me dire sur cette production de novembre ? → Corrigé : description orale cohérente avec la production réelle","Quel matériau as-tu utilisé ce mois-ci ? → Corrigé : la pâte à modeler","Montre comment tu as réalisé cette étape. → Corrigé : geste conforme à la technique apprise","Quelle technique avais-tu apprise en octobre ? → Corrigé : coloriage ou peinture, selon ce qui a été vu"]),

      m("CONTE","Évaluation — Ny saka sy ny totozy",
        "Vérifier individuellement la mémorisation des personnages et des grandes lignes du conte « Ny saka sy ny totozy » vu en novembre, avec un rappel bref du conte d'octobre.",
        ["Rappel du conte en grand groupe avant les passages individuels","Demander de nommer les personnages principaux","Demander de raconter un passage du conte","Rappeler brièvement les personnages d'Ikotobekibo sy Faramalemy vus en octobre","Noter la réussite sur une grille simple"],
        ["Comment s'appellent les 2 personnages principaux de « Ny saka sy ny totozy » ? → Corrigé : le chat (saka) et la souris (totozy)","Raconte un passage de ce conte. → Corrigé : résumé oral conforme au conte raconté en novembre","Qui étaient les personnages du conte d'octobre ? → Corrigé : Ikotobekibo et Faramalemy","Quelle est la leçon de « Ny saka sy ny totozy » ? → Corrigé : réponse cohérente avec la morale du conte"])

    ],
  },

  {
    n:2, dates:"14/12/2026 – 18/12/2026",
    theme:"ÉVALUATION ÉCRITE — Épreuves écrites et pratiques du 1er trimestre",
    matieres:[

      m("LECTURE","Épreuve écrite — lire et entourer les syllabes ta, da, na, ma",
        "Évaluer par écrit, sur une fiche individuelle, la lecture des syllabes formées avec les consonnes t, d, n, m, en entourant la syllabe demandée parmi plusieurs propositions.",
        ["Distribuer une fiche avec des lignes de syllabes mélangées","Lire la consigne à voix haute pour toute la classe","Faire entourer la syllabe dictée sur chaque ligne","Faire relier une syllabe à son image (ex : « ma » → maman)","Ramasser les fiches pour correction individuelle"],
        ["Entoure la syllabe « da » dans cette ligne : ta da na ma → Corrigé : « da » entouré","Entoure la syllabe « mo » dans cette ligne : mo lo do no → Corrigé : « mo » entouré","Relie la syllabe « ma » à l'image de maman. → Corrigé : lien tracé correctement","Entoure toutes les syllabes qui commencent par « n » : na — ta — ni — ma — no → Corrigé : na, ni, no entourés"]),

      m("ÉCRITURE","Épreuve écrite — tracer t, d, n, m et les syllabes ta, da, na, ma",
        "Évaluer par écrit, sur une fiche à lignes préréglées, le tracé propre de chaque consonne du mois et son assemblage en syllabe.",
        ["Distribuer une fiche avec des lignes préréglées pour chaque lettre","Faire tracer t, d, n, m chacun 2 fois","Faire tracer les syllabes ta, do, nu, me","Circuler et corriger la tenue du crayon si besoin","Ramasser les fiches pour correction"],
        ["Trace la lettre t. → Corrigé : barre verticale et barre horizontale, tracé net","Trace la lettre m. → Corrigé : 3 ponts visibles, tracé fluide","Écris la syllabe « na ». → Corrigé : n et a correctement attachés et lisibles","Trace 2 fois la syllabe « do ». → Corrigé : lettres bien formées et alignées sur la ligne"]),

      m("VAKITENY","Fanamarinana an-tsoratra — ny litera t, d, n, m sy ny vakiteny",
        "Évaluer par écrit la reconnaissance et le tracé des syllabes malgaches formées avec t, d, n, m.",
        ["Distribuer une fiche avec des syllabes mélangées","Faire entourer la syllabe dictée","Faire tracer 2 syllabes (ta, na)","Ramasser pour correction"],
        ["Tsongò ny « do » amin'ity andalana ity : do — no — to → Valiny : « do » voatsongo","Soraty ny « na ». → Valiny : litera na sy a mifamatotra tsara","Vakio ary tsongò : ma → Valiny : « ma » voatsongo sy voavaky tsara","Soraty indroa ny « ta ». → Valiny : litera roa voasoratra mazava"]),

      m("LANGAGE","Épreuve orale — restitution du dernier épisode de « François va chez le coiffeur »",
        "Évaluer de façon plus formelle, devant un petit groupe, la capacité de chaque enfant à restituer avec ses propres mots l'épisode de l'histoire travaillé récemment, en réinvestissant le vocabulaire du mois.",
        ["Convoquer l'enfant devant un petit groupe de camarades pour l'épreuve","Présenter 2 à 3 images de l'histoire dans le désordre","Demander de les remettre dans l'ordre","Demander un résumé oral de l'épisode","Noter la prestation sur une grille (vocabulaire, structure de phrase, aisance)"],
        ["Remets ces images dans l'ordre de l'histoire. → Corrigé : ordre chronologique respecté","Raconte l'épisode que nous avons vu ce mois-ci. → Corrigé : récit cohérent avec l'épisode réellement travaillé","Cite 2 mots de vocabulaire vus autour de cette histoire. → Corrigé : 2 mots réellement enseignés (coiffeur, ciseaux, miroir, shampoing...)","Comment se sent François dans cet épisode ? → Corrigé : réponse conforme à l'épisode raconté"]),

      m("PRE-MATH","Épreuve écrite — écrire zéro et un en lettres, entourer égal/différent, comparer < >",
        "Évaluer par écrit, sur une fiche individuelle, l'écriture des mots-nombres zéro et un, ainsi que la comparaison de collections.",
        ["Distribuer une fiche avec les mots à recopier et des collections dessinées","Faire recopier « un » et « zéro »","Faire entourer « égal » ou « différent » sous 2 collections dessinées","Faire entourer la collection qui a « plus » ou « moins »","Ramasser pour correction"],
        ["Recopie le mot : un → Corrigé : « un » copié lisiblement","Recopie le mot : zéro → Corrigé : « zéro » copié lisiblement","Ces 2 collections sont-elles égales ou différentes ? (4 et 4 dessinés) → Corrigé : égales","Entoure la collection qui a le plus d'éléments. (3 et 6 dessinés) → Corrigé : la collection de 6 entourée"]),

      m("MATHS","Épreuve écrite — écrire les nombres de 11 à 20 et les ranger",
        "Évaluer par écrit l'écriture chiffrée des nombres de 11 à 20 et leur rangement du plus petit au plus grand.",
        ["Distribuer une fiche avec des cases à compléter","Faire écrire la suite de 11 à 20 en complétant les nombres manquants","Faire ranger 4 nombres donnés du plus petit au plus grand","Ramasser pour correction"],
        ["Complète : 11, 12, __, 14, __, 16 → Corrigé : 13, 15","Écris le nombre qui vient après 18. → Corrigé : 19","Range ces nombres du plus petit au plus grand : 19, 13, 16 → Corrigé : 13, 16, 19","Écris le nombre 20 en chiffres. → Corrigé : 20"]),

      m("MORALE","Épreuve orale — discipline en saison des pluies et propreté des repas",
        "Évaluer de façon plus formelle, par un entretien individuel structuré, l'appropriation des règles de discipline et de propreté vues en novembre.",
        ["Convoquer l'enfant pour un court entretien individuel","Poser 3 à 4 questions structurées sur la discipline et la propreté du mois","Observer si l'enfant applique la règle spontanément (mains, tenue)","Noter la prestation sur une grille"],
        ["Que dois-tu faire avant de toucher à la nourriture ? → Corrigé : se laver les mains","Pourquoi faut-il rester calme les jours de pluie ? → Corrigé : pour éviter de glisser et de se blesser","Que fais-tu si tes vêtements sont mouillés par la pluie ? → Corrigé : les faire sécher, ne pas rester mouillé","Pourquoi lave-t-on les ustensiles avant de cuisiner ? → Corrigé : pour enlever les microbes"]),

      m("ENVIRONNEMENT","Épreuve orale — vêtements de pluie, ustensiles, fruits (reconnaissance formelle)",
        "Évaluer de façon plus formelle, par un jeu de reconnaissance chronométré, le vocabulaire du mois autour de la pluie, des ustensiles et des fruits.",
        ["Présenter 8 images mélangées, une à la fois, à un rythme soutenu","Demander de nommer chaque image rapidement","Noter le nombre de bonnes réponses sur 8","Demander de classer les 8 images en 3 groupes"],
        ["Nomme ces images l'une après l'autre (8 images mélangées). → Corrigé : score sur 8 réponses correctes","Classe ces images en 3 groupes : vêtements de pluie, ustensiles, fruits. → Corrigé : classement correct des 8 images","Cite 1 ustensile de cuisine. → Corrigé : cuillère, fourchette, casserole, assiette","Cite 1 fruit vu ce mois-ci. → Corrigé : banane, mangue, ananas, orange"]),

      m("ANGLAIS","Épreuve orale — Kitchen utensils and fruits (test formel)",
        "Évaluer de façon plus formelle le vocabulaire anglais du mois par un test oral avec flashcards chronométré.",
        ["Présenter 6 flashcards mélangées (utensils + fruits)","Demander de nommer chaque carte en anglais","Noter le score sur 6","Poser 1 question en structure « What is this? »"],
        ["What is this? (montrer une fourchette) → Corrigé : fork","What is this? (montrer une mangue) → Corrigé : mango","Name these 6 flashcards in English. → Corrigé : score sur 6 réponses correctes","How do you say « une orange » in English? → Corrigé : an orange"]),

      m("CHANT","Épreuve du chant — passage individuel noté",
        "Évaluer de façon formelle, par un passage individuel devant la classe, la mémorisation complète du chant du mois sur la pluie.",
        ["Appeler chaque enfant devant la classe à tour de rôle","Faire chanter le chant en entier avec les gestes","Noter sur une grille : paroles, justesse, geste","Applaudir chaque prestation pour valoriser l'effort"],
        ["Chante le chant de novembre sur la pluie, en entier. → Corrigé : chant entier interprété conformément aux paroles apprises","Montre les gestes qui accompagnent le chant. → Corrigé : gestes conformes à ceux appris en classe","As-tu chanté du début à la fin sans t'arrêter ? → Corrigé : continuité de la prestation évaluée","Salue le public à la fin de ta prestation. → Corrigé : salut réalisé"]),

      m("RECITATION","Épreuve de récitation — passage individuel noté",
        "Évaluer de façon formelle, par un passage individuel devant la classe, la mémorisation complète du poème du mois sur les fruits.",
        ["Appeler chaque enfant devant la classe à tour de rôle","Faire réciter le poème en entier avec le geste","Noter sur une grille : mémorisation, articulation, geste","Applaudir chaque prestation"],
        ["Récite le poème de novembre sur les fruits, en entier. → Corrigé : poème récité conformément au texte appris","Montre le geste associé au poème. → Corrigé : geste conforme à celui appris en classe","Articule bien chaque mot du poème. → Corrigé : articulation évaluée","Salue à la fin de ta récitation. → Corrigé : salut réalisé"]),

      m("EPS","Épreuve gestuelle — saut à pieds joints noté",
        "Évaluer de façon formelle la maîtrise du saut à pieds joints par un passage individuel noté sur un petit parcours de 3 flaques.",
        ["Installer le parcours de 3 cerceaux-flaques","Faire passer chaque enfant individuellement devant le groupe","Noter sur une grille : nombre de flaques réussies, qualité de la réception","Encourager chaque passage"],
        ["Saute par-dessus les 3 flaques sans les toucher. → Corrigé : score sur 3 flaques réussies","Réceptionne-toi pieds joints sans tomber. → Corrigé : réception stable observée","Combien de flaques as-tu réussies ? → Corrigé : score individuel noté","Recommence une fois pour t'améliorer. → Corrigé : 2e passage évalué"]),

      m("DESSIN","Épreuve graphique — dessiner un ustensile de cuisine et un fruit",
        "Évaluer par une production graphique individuelle la capacité à dessiner et colorier un ustensile de cuisine et un fruit vus en novembre.",
        ["Distribuer une feuille divisée en 2 cases","Demander de dessiner un ustensile de cuisine dans la 1ère case","Demander de dessiner un fruit dans la 2ème case","Faire colorier les 2 dessins","Ramasser pour évaluation"],
        ["Dessine une cuillère ou une casserole. → Corrigé : forme reconnaissable de l'ustensile choisi","Dessine un fruit de ton choix. → Corrigé : forme reconnaissable et coloriée du fruit choisi","Quelle couleur as-tu utilisée pour ton fruit ? → Corrigé : couleur cohérente avec le fruit choisi","Montre ton ustensile dessiné. → Corrigé : la forme tracée pointée"]),

      m("TRAVAUX MANUELS","Épreuve pratique — modeler un fruit ou un ustensile en pâte à modeler",
        "Évaluer par une réalisation pratique individuelle la motricité fine acquise ce trimestre, en modelant un fruit ou un ustensile de cuisine simple.",
        ["Distribuer une boule de pâte à modeler à chaque enfant","Demander de modeler un fruit ou un ustensile au choix","Observer la manipulation (rouler, aplatir, pincer)","Ramasser/exposer les productions pour évaluation"],
        ["Modèle un fruit avec ta pâte à modeler. → Corrigé : forme reconnaissable produite","Quel geste as-tu utilisé pour arrondir ta pâte ? → Corrigé : rouler entre les mains","Montre ta production terminée. → Corrigé : objet présenté","Range ton poste de travail après le modelage. → Corrigé : matériel rangé et propre"]),

      m("CONTE","Épreuve orale — raconter « Ny saka sy ny totozy »",
        "Évaluer de façon formelle, par un passage individuel, la capacité à raconter le conte du mois avec ses propres mots.",
        ["Appeler chaque enfant individuellement","Présenter les images du conte comme support si besoin","Demander de raconter le conte du début à la fin","Noter sur une grille : personnages cités, fidélité au conte, aisance"],
        ["Raconte « Ny saka sy ny totozy » du début à la fin, avec les images si besoin. → Corrigé : récit couvrant les personnages et les grandes étapes du conte","Comment s'appellent les 2 personnages ? → Corrigé : le chat (saka) et la souris (totozy)","Quelle est la morale de ce conte ? → Corrigé : réponse cohérente avec la morale du conte","Quel personnage as-tu préféré ? Pourquoi ? → Corrigé : réponse personnelle justifiée"])

    ],
  },

  {
    n:3, dates:"21/12/2026 – 25/12/2026",
    theme:"BULLETINS — Bilan du 1er trimestre et clôture des vacances de Noël",
    matieres:[

      m("LECTURE","Bilan du trimestre et clôture de Noël — relire les syllabes connues et découvrir le mot « Noël »",
        "Clore le trimestre par une activité calme et non notée : relecture libre et ludique de toutes les syllabes formées depuis octobre, puis découverte festive du mot « Noël » avant la remise des bulletins et le départ en vacances.",
        ["Afficher un grand tableau récapitulatif de toutes les syllabes du trimestre (la, ta, da, na, ma...)","Proposer un jeu de lecture libre : chaque enfant vient lire une syllabe de son choix","Valoriser chaque lecture réussie sans notation","Proposer un jeu de memory avec les syllabes du trimestre","Écrire en grand le mot NOËL au tableau et le découper en syllabes (no-ël) à lire ensemble","Terminer par une lecture collective de toutes les syllabes en chœur, suivie du mot NOËL"],
        ["Lis une syllabe de ton choix sur le tableau. → Corrigé : lecture correcte de la syllabe choisie","Lis le mot NOËL syllabe par syllabe. → Corrigé : no — ël","Joue au memory des syllabes avec un camarade. → Corrigé : participation à l'activité","Lis toutes les syllabes en chœur avec la classe. → Corrigé : participation collective"]),

      m("VAKITENY","Fehin-kevitra sy fanokafana ny Noely — famerenana ny vakiteny nianarana ary fahafantarana ny teny hoe « Noely »",
        "Mamarana ny telovolana amin'ny fanamarinana tsy misy naoty: famerenana an-kalalahana ireo vakiteny nianarana hatramin'ny Oktobra, arahin'ny fampahafantarana ny teny hoe « Noely » ho fankalazana ny fialan-tsasatra.",
        ["Manisy sary lehibe misy ny vakiteny rehetra nianarana","Manasa ny ankizy tsirairay hisafidy vakiteny iray ho vakiny","Mankasitraka ny fahavitan'ny tsirairay","Manao lalao memory amin'ny vakiteny","Manoratra ny teny hoe « Noely » eo amin'ny solaitrabe ary mamaky azy miaraka"],
        ["Vakio ny vakiteny safidianao. → Valiny : vakiteny voavaky tsara","Vakio ny teny hoe « Noely ». → Valiny : « No-e-ly » voavaky tsara","Manao lalao memory ianao. → Valiny : fandraisana anjara","Vakio miaraka ny kilasy manontolo. → Valiny : fandraisana anjara iombonana"]),

      m("ÉCRITURE","Bilan du trimestre et carte de vœux — cahier d'écriture et décoration festive",
        "Feuilleter avec chaque enfant son cahier d'écriture depuis octobre pour observer les progrès du tracé, puis décorer librement le contour d'une petite carte de vœux de Noël à offrir, dans une ambiance calme et valorisante avant la remise des bulletins.",
        ["Distribuer à chaque enfant son cahier d'écriture du trimestre","Comparer une page d'octobre et une page de décembre","Faire tracer librement sa lettre préférée du trimestre","Valoriser les progrès observés","Distribuer une carte de vœux vierge et faire tracer un contour décoratif (pointillés, vagues) autour du mot NOËL déjà écrit"],
        ["Montre la page d'octobre et la page de décembre de ton cahier. → Corrigé : pages retrouvées","Trace ta lettre préférée une dernière fois. → Corrigé : tracé produit","Décore le contour de ta carte de vœux avec des traits appris ce trimestre. → Corrigé : tracé régulier autour du mot NOËL","Que remarques-tu entre ton écriture d'octobre et celle de maintenant ? → Corrigé : réponse personnelle, progrès observé"]),

      m("LANGAGE","Bilan du trimestre et vœux de Noël — histoire « François va chez le coiffeur »",
        "Faire un retour collectif et calme sur l'histoire suivie tout le trimestre, en clôturant ce premier grand récit, puis apprendre à formuler ses vœux de Noël avant les vacances.",
        ["Rassembler tous les enfants pour une dernière écoute complète de l'histoire","Discussion libre : ce qu'on a préféré dans l'histoire","Dessiner son moment préféré de l'histoire","Apprendre la phrase « Joyeux Noël ! » et l'exercer par deux avec un camarade"],
        ["Quel est ton moment préféré de l'histoire ? → Corrigé : réponse personnelle","Raconte l'histoire en une phrase. → Corrigé : phrase cohérente avec l'histoire","Dis « Joyeux Noël » à ton voisin. → Corrigé : phrase prononcée correctement","Aimerais-tu une nouvelle histoire en janvier ? → Corrigé : réponse personnelle"]),

      m("PRE-MATH","Bilan du trimestre et tri des décorations de Noël — formes et nombres en lettres",
        "Proposer des jeux calmes de consolidation (sans notation) autour des notions du trimestre (formes, autant/plus, un/zéro en lettres, égalité/différence), en habillant l'activité de décorations de Noël à trier.",
        ["Installer un coin jeu avec les formes, jetons et cartes-mots du trimestre","Ajouter des décorations de Noël de formes différentes (boules rondes, étoiles, sapins triangulaires) à trier par forme","Laisser les enfants jouer librement par petits groupes","Circuler pour valoriser les bonnes manipulations"],
        ["Montre une décoration de Noël ronde et une triangulaire. → Corrigé : boule ronde et sapin/étoile pointés correctement","Fabrique 2 collections égales de boules de Noël avec des jetons. → Corrigé : collections égales réalisées","Montre le mot « un ». → Corrigé : mot pointé correctement","Explique à un camarade ce qu'est « autant ». → Corrigé : explication cohérente avec la notion apprise"]),

      m("MATHS","Bilan du trimestre et comptage des décorations du sapin — nombres de 0 à 20",
        "Consolider par le jeu, sans notation, l'ensemble des nombres travaillés depuis octobre (0 à 20), en comptant les décorations du sapin de Noël de la classe.",
        ["Proposer un jeu de loto des nombres de 0 à 20","Compter ensemble les boules accrochées au sapin de la classe","Jeu de la marchande : compter et échanger des jetons","Réciter ensemble la suite de 0 à 20"],
        ["Joue au loto des nombres avec un camarade. → Corrigé : participation à l'activité","Compte les boules du sapin de la classe. → Corrigé : nombre réel de boules comptées, entre 0 et 20","Récite avec la classe la suite de 0 à 20. → Corrigé : participation collective","Compte 12 jetons pour « acheter » un objet au jeu de la marchande. → Corrigé : 12 jetons comptés"]),

      m("MORALE","Bilan moral du trimestre et esprit de Noël — le partage",
        "Faire un bilan collectif et valorisant des règles de vie apprises depuis octobre (propreté, discipline, respect), en clôturant sur l'esprit de partage et de générosité propre à Noël.",
        ["Rappeler ensemble les règles apprises depuis octobre","Chaque enfant cite une règle qu'il applique bien","Discuter simplement de ce que signifie « partager » à Noël (un jouet, un bonbon, un sourire)","Valoriser les progrès individuels devant la classe"],
        ["Cite une règle apprise ce trimestre que tu appliques bien. → Corrigé : réponse personnelle cohérente avec les règles vues","Que peux-tu partager avec un camarade à Noël ? → Corrigé : réponse personnelle (jouet, bonbon, sourire...)","Quelle règle veux-tu encore améliorer ? → Corrigé : réponse personnelle","Félicite un camarade pour une bonne action. → Corrigé : parole positive formulée"]),

      m("ENVIRONNEMENT","Bilan du trimestre et découverte du sapin de Noël — ce que j'ai appris",
        "Faire un retour ludique et collectif sur tous les thèmes du trimestre en environnement, puis découvrir en clôture le sapin de Noël décoré dans la classe.",
        ["Afficher toutes les images vues depuis octobre","Chaque enfant choisit une image et raconte ce qu'il en sait","Observer et nommer les éléments du sapin de Noël de la classe (guirlande, boule, étoile)","Jeu collectif de tri par thème"],
        ["Choisis une image et dis ce que tu en sais. → Corrigé : réponse personnelle cohérente","Nomme un élément du sapin de Noël. → Corrigé : boule, guirlande, étoile, sapin","Quel thème as-tu préféré ce trimestre ? → Corrigé : réponse personnelle","Cite un mot que tu as appris ce trimestre. → Corrigé : mot réellement vu depuis octobre"]),

      m("ANGLAIS","Révision légère et « Merry Christmas » — flashcards de tout le trimestre",
        "Réviser en jeu libre, sans notation, l'ensemble du vocabulaire anglais vu depuis octobre, et apprendre à dire « Merry Christmas! » avant les vacances.",
        ["Étaler toutes les flashcards du trimestre sur une table","Jeu libre : chaque enfant pioche et nomme une carte","Chanter les chansons anglaises apprises ce trimestre","Apprendre à dire « Merry Christmas! » et « Happy New Year! »"],
        ["Pioche une carte et nomme-la en anglais. → Corrigé : mot anglais correct pour la carte piochée","How do you say « Joyeux Noël » in English? → Corrigé : Merry Christmas!","Sing a song you learned this term. → Corrigé : chanson chantée conformément aux paroles apprises","Quel mot anglais préfères-tu ? → Corrigé : réponse personnelle"]),

      m("CHANT","Bilan — grande chorale du trimestre et chant de Noël",
        "Réunir toute la classe pour chanter ensemble tous les chants appris depuis octobre, en clôturant la chorale par un chant de Noël festif.",
        ["Chanter chaque chant du trimestre en grand groupe","Laisser un temps de vote pour le chant préféré de la classe","Apprendre le refrain d'un court chant de Noël et le chanter tous ensemble","Chanter le chant préféré du trimestre une dernière fois"],
        ["Chante avec la classe le chant préféré du trimestre. → Corrigé : participation collective au chant choisi","Chante le refrain du chant de Noël appris aujourd'hui. → Corrigé : refrain chanté avec la classe","Montre un geste d'un chant du trimestre. → Corrigé : geste conforme à un chant appris","Combien de chants avons-nous appris ce trimestre ? → Corrigé : nombre réel de chants appris depuis octobre"]),

      m("RECITATION","Bilan — grande récitation collective du trimestre et vers de Noël",
        "Réunir la classe pour réciter ensemble tous les poèmes appris depuis octobre, et clôturer par 2 courtes lignes sur Noël apprises en chœur.",
        ["Réciter chaque poème du trimestre en grand groupe","Vote pour le poème préféré de la classe","Apprendre 2 lignes courtes sur Noël et les répéter en chœur","Réciter le poème préféré une dernière fois tous ensemble"],
        ["Récite avec la classe le poème préféré du trimestre. → Corrigé : participation collective","Récite les 2 lignes sur Noël apprises aujourd'hui. → Corrigé : lignes répétées conformes à ce qui a été appris en classe","Combien de poèmes avons-nous appris ce trimestre ? → Corrigé : nombre réel de poèmes appris depuis octobre","Récite seul la première ligne de ton poème préféré. → Corrigé : ligne récitée conforme au texte appris"]),

      m("EPS","Bilan — parcours ludique du trimestre et ronde de Noël",
        "Proposer un parcours ludique et non noté reprenant tous les mouvements travaillés depuis octobre (course, roulade, dedans-dehors, saut), puis terminer par une ronde de Noël en musique.",
        ["Installer un parcours complet avec les 4 ateliers du trimestre","Faire passer chaque enfant sur le parcours en s'amusant","Encourager et applaudir chaque passage","Terminer par une ronde de Noël chantée et dansée tous ensemble"],
        ["Fais le parcours complet du trimestre. → Corrigé : parcours réalisé avec plaisir, sans exigence de performance","Danse dans la ronde de Noël avec la classe. → Corrigé : participation à la ronde","Montre le mouvement que tu maîtrises le mieux. → Corrigé : mouvement réalisé correctement","Encourage un camarade sur le parcours. → Corrigé : parole d'encouragement formulée"]),

      m("DESSIN","Bilan — exposition des dessins du trimestre et carte de Noël pour les parents",
        "Organiser une petite exposition des dessins réalisés depuis octobre, puis clore sur la réalisation d'une carte de Noël à offrir aux parents.",
        ["Rassembler tous les dessins du trimestre de chaque enfant","Chaque enfant choisit son dessin préféré à exposer","Présenter son dessin à la classe en une phrase","Dessiner et colorier une carte de Noël à offrir à la famille"],
        ["Choisis ton dessin préféré du trimestre. → Corrigé : choix personnel","Dessine un sapin ou une étoile sur ta carte de Noël. → Corrigé : forme reconnaissable et coloriée","Présente ton dessin en une phrase. → Corrigé : phrase cohérente avec le dessin choisi","Quel dessin d'un camarade as-tu aimé ? → Corrigé : réponse personnelle"]),

      m("TRAVAUX MANUELS","Bilan — exposition des productions du trimestre et fabrication d'une décoration de Noël",
        "Exposer les réalisations manuelles du trimestre (coloriage, peinture, pliage, modelage), puis fabriquer une petite décoration de Noël (boule ou étoile) à accrocher au sapin de la classe.",
        ["Rassembler toutes les productions manuelles du trimestre","Organiser un petit coin exposition dans la classe","Chaque enfant présente sa production préférée","Fabriquer une décoration de Noël simple (boule en papier ou étoile en carton) à accrocher au sapin"],
        ["Choisis ta production préférée du trimestre. → Corrigé : choix personnel","Fabrique ta décoration de Noël et accroche-la au sapin. → Corrigé : décoration réalisée et accrochée","Présente ta production à un camarade. → Corrigé : présentation orale réalisée","Range le coin exposition avec la classe. → Corrigé : participation au rangement"]),

      m("CONTE","Bilan — les 2 contes du trimestre et vœux de Noël en grand groupe",
        "Réunir la classe pour se remémorer les 2 contes du trimestre (Ikotobekibo sy Faramalemy, Ny saka sy ny totozy), puis clore la matinée par les vœux de joyeux Noël avant la remise des bulletins.",
        ["Rappeler les personnages des 2 contes avec les images","Voter pour le conte préféré de la classe","Raconter une dernière fois le conte préféré en grand groupe","Terminer en cercle par les vœux de « Joyeux Noël » à chaque camarade"],
        ["Quel conte as-tu préféré ce trimestre ? → Corrigé : réponse personnelle","Cite les personnages des 2 contes du trimestre. → Corrigé : Ikotobekibo, Faramalemy, saka, totozy","Souhaite « Joyeux Noël » à un camarade. → Corrigé : phrase prononcée avec un geste ou un sourire","Quelle leçon retiens-tu de ces 2 contes ? → Corrigé : réponse cohérente avec les morales des contes"])

    ],
  }

];

const JANVIER_12EME = [

  {
    n:1, dates:"04/01/2027 – 08/01/2027",
    theme:"VACANCES — Pas de cours (suite des vacances de Noël et du Nouvel An)",
    matieres:[

      m("LECTURE","Vacances — pas de cours",
        "Semaine de vacances de Noël et du Nouvel An : l'école est fermée, donc aucune séance de lecture cette semaine.",
        ["Aucune activité — les enfants sont en vacances"],
        ["Aucun exercice cette semaine — reprise des cours la semaine suivante"]),

      m("VAKITENY","Vacances — pas de cours",
        "Semaine de vacances de Noël et du Nouvel An : l'école est fermée, donc aucune séance de vakiteny cette semaine.",
        ["Aucune activité — les enfants sont en vacances"],
        ["Aucun exercice cette semaine — reprise des cours la semaine suivante"]),

      m("ÉCRITURE","Vacances — pas de cours",
        "Semaine de vacances de Noël et du Nouvel An : l'école est fermée, donc aucune séance d'écriture cette semaine.",
        ["Aucune activité — les enfants sont en vacances"],
        ["Aucun exercice cette semaine — reprise des cours la semaine suivante"]),

      m("LANGAGE","Vacances — pas de cours",
        "Semaine de vacances de Noël et du Nouvel An : l'école est fermée, donc aucune séance de langage cette semaine.",
        ["Aucune activité — les enfants sont en vacances"],
        ["Aucun exercice cette semaine — reprise des cours la semaine suivante"]),

      m("PRE-MATH","Vacances — pas de cours",
        "Semaine de vacances de Noël et du Nouvel An : l'école est fermée, donc aucune séance de pré-math cette semaine.",
        ["Aucune activité — les enfants sont en vacances"],
        ["Aucun exercice cette semaine — reprise des cours la semaine suivante"]),

      m("MATHS","Vacances — pas de cours",
        "Semaine de vacances de Noël et du Nouvel An : l'école est fermée, donc aucune séance de maths cette semaine.",
        ["Aucune activité — les enfants sont en vacances"],
        ["Aucun exercice cette semaine — reprise des cours la semaine suivante"]),

      m("MORALE","Vacances — pas de cours",
        "Semaine de vacances de Noël et du Nouvel An : l'école est fermée, donc aucune séance de morale cette semaine.",
        ["Aucune activité — les enfants sont en vacances"],
        ["Aucun exercice cette semaine — reprise des cours la semaine suivante"]),

      m("ENVIRONNEMENT","Vacances — pas de cours",
        "Semaine de vacances de Noël et du Nouvel An : l'école est fermée, donc aucune séance d'environnement cette semaine.",
        ["Aucune activité — les enfants sont en vacances"],
        ["Aucun exercice cette semaine — reprise des cours la semaine suivante"]),

      m("ANGLAIS","Vacances — pas de cours",
        "Semaine de vacances de Noël et du Nouvel An : l'école est fermée, donc aucune séance d'anglais cette semaine.",
        ["Aucune activité — les enfants sont en vacances"],
        ["Aucun exercice cette semaine — reprise des cours la semaine suivante"]),

      m("CHANT","Vacances — pas de cours",
        "Semaine de vacances de Noël et du Nouvel An : l'école est fermée, donc aucune séance de chant cette semaine.",
        ["Aucune activité — les enfants sont en vacances"],
        ["Aucun exercice cette semaine — reprise des cours la semaine suivante"]),

      m("RECITATION","Vacances — pas de cours",
        "Semaine de vacances de Noël et du Nouvel An : l'école est fermée, donc aucune séance de récitation cette semaine.",
        ["Aucune activité — les enfants sont en vacances"],
        ["Aucun exercice cette semaine — reprise des cours la semaine suivante"]),

      m("EPS","Vacances — pas de cours",
        "Semaine de vacances de Noël et du Nouvel An : l'école est fermée, donc aucune séance d'EPS cette semaine.",
        ["Aucune activité — les enfants sont en vacances"],
        ["Aucun exercice cette semaine — reprise des cours la semaine suivante"]),

      m("DESSIN","Vacances — pas de cours",
        "Semaine de vacances de Noël et du Nouvel An : l'école est fermée, donc aucune séance de dessin cette semaine.",
        ["Aucune activité — les enfants sont en vacances"],
        ["Aucun exercice cette semaine — reprise des cours la semaine suivante"]),

      m("TRAVAUX MANUELS","Vacances — pas de cours",
        "Semaine de vacances de Noël et du Nouvel An : l'école est fermée, donc aucune séance de travaux manuels cette semaine.",
        ["Aucune activité — les enfants sont en vacances"],
        ["Aucun exercice cette semaine — reprise des cours la semaine suivante"]),

      m("CONTE","Vacances — pas de cours",
        "Semaine de vacances de Noël et du Nouvel An : l'école est fermée, donc aucune séance de conte cette semaine.",
        ["Aucune activité — les enfants sont en vacances"],
        ["Aucun exercice cette semaine — reprise des cours la semaine suivante"])

    ],
  },

  {
    n:2, dates:"11/01/2027 – 15/01/2027",
    theme:"Lettre b (Lecture/Vakiteny/Écriture) · Le petit chat perdu · Signe ∈/∉ · Nombres 20 à 25 · Les légumes",
    matieres:[

      m("LECTURE","La lettre b : syllabes ba-bi-bo-bu-be",
        "Introduire la consonne b après les 5 voyelles et les consonnes l, t, d, n, m déjà connues. Isoler le son [b] à l'oral puis le combiner immédiatement avec les 5 voyelles connues pour former des syllabes, dans la continuité de la méthode syllabique.",
        ["Montrer la lettre B en grand format au tableau (majuscule et minuscule)","Prononcer le son [b] en posant la main sur la gorge pour sentir la vibration","Chercher des mots avec [b] : banane, robe, bébé","Combiner b + a, b + i, b + o, b + u, b + e au tableau : ba, bi, bo, bu, be","Faire lire la ligne de syllabes en chœur puis individuellement","Lire le mot « banane » en le décomposant syllabe par syllabe : ba-na-ne","Jeu : la maîtresse pointe une syllabe, l'enfant la lit"],
        ["Quel son fait la lettre b ? → Corrigé : [b]","Lis cette syllabe : bo → Corrigé : [bo]","Lis ces syllabes dans l'ordre : ba — bu — bi → Corrigé : lecture correcte des 3 syllabes","Décompose le mot « banane » en syllabes. → Corrigé : ba-na-ne"]),

      m("VAKITENY","La lettre b : syllabes ba-be-bi-bo en malagasy",
        "Introduire le son [b] en malagasy et former les premières syllabes avec les voyelles malagasy déjà connues (a, e, i, o).",
        ["Montrer la lettre B, prononcer [b]","Mots connus avec [b] : biby, baolina","Combiner b + a, b + e, b + i, b + o au tableau","Faire lire les syllabes en chœur","Jeu de lecture individuelle des syllabes"],
        ["Lis cette syllabe : ba → Corrigé : [ba]","Cite un mot malagasy qui commence par « bi ». → Corrigé : biby (une réponse correcte acceptée)","Lis : bo — be → Corrigé : lecture correcte des 2 syllabes","Entoure les syllabes avec « b » : ba — la — bo — ta → Corrigé : ba, bo entourés"]),

      m("ÉCRITURE","La lettre b : tracé de la canne et du rond",
        "Apprendre le tracé du b (grande canne verticale comme le l déjà connu, puis un rond attaché en bas à droite), puis relier b aux voyelles pour écrire les syllabes ba-bi-bo-bu-be.",
        ["Montrer le tracé : on monte tout en haut comme pour le l, on redescend, puis on fait un rond vers la droite en bas","Tracer dans l'air en verbalisant « je monte, je descends, je fais un rond »","Tracer sur l'ardoise, puis sur papier préligné","Comparer avec la lettre l déjà connue (le b a un rond en bas, le l n'en a pas)","Tracer « ba » en attachant b et a","Tracer 3 syllabes différentes sur papier préligné"],
        ["Trace la lettre b sur ton ardoise. → Corrigé : canne haute et rond en bas à droite, tracé fluide","Quelle est la différence entre b et l ? → Corrigé : le b a un rond en bas, le l n'en a pas","Écris la syllabe « bi ». → Corrigé : b et i correctement attachés et lisibles","Trace 3 syllabes avec b (ba, bo, be). → Corrigé : tracé des 3 syllabes conforme"]),

      m("LANGAGE","Le petit chat perdu — découverte de l'histoire",
        "Introduire une nouvelle histoire, « Le petit chat perdu », comme support de vocabulaire (le chat, perdu, chercher, retrouver) et de structuration de phrases simples sujet-verbe-complément.",
        ["Raconter l'histoire avec des images séquentielles (le chat qui se perd, puis qu'on cherche)","Nommer le vocabulaire nouveau : le chat, perdu, chercher, retrouver","Mimer le chat qui miaule et qui a peur","Répéter la phrase clé : « Le chat est perdu »","Poser 3 questions de compréhension simples après l'écoute","Jeu de rôle : un enfant joue le chat perdu, un autre le cherche"],
        ["Qui est perdu dans l'histoire ? → Corrigé : le petit chat","Que font les enfants pour aider le chat ? → Corrigé : ils le cherchent","Montre l'image du chat perdu. → Corrigé : bonne image pointée","Répète la phrase : « Le chat est perdu ». → Corrigé : phrase répétée avec la structure sujet-verbe-complément"]),

      m("PRE-MATH","Le signe ∈ ou ∉ : appartient / n'appartient pas",
        "Introduire les signes ∈ (appartient à) et ∉ (n'appartient pas à) de façon très concrète et imagée à partir d'un ensemble réel d'objets, sans passer par le formalisme abstrait.",
        ["Tracer un grand cercle au tableau représentant « l'ensemble des fruits »","Placer une pomme en carton dedans : « la pomme appartient à l'ensemble des fruits »","Placer une voiture jouet dehors : « la voiture n'appartient pas à l'ensemble des fruits »","Montrer les signes ∈ et ∉ associés à ces 2 phrases","Jeu : donner un objet à chaque enfant, il doit dire s'il appartient ou non à l'ensemble dessiné","Refaire l'exercice avec un autre ensemble : « l'ensemble des animaux »"],
        ["Cette pomme appartient-elle à l'ensemble des fruits dessiné au tableau ? → Corrigé : oui, elle appartient (∈)","Cette voiture appartient-elle à l'ensemble des fruits ? → Corrigé : non, elle n'appartient pas (∉)","Place ce jeton animal dans le bon ensemble. → Corrigé : jeton placé dans l'ensemble des animaux","Que signifie le signe ∉ ? → Corrigé : « n'appartient pas à »"]),

      m("MATHS","Les chiffres de 20 à 25",
        "Étendre le comptage de 0 à 20 déjà connu (septembre-novembre) jusqu'à 25, en manipulant 2 paquets de 10 objets déjà formés et en ajoutant les unités une à une.",
        ["Rappel : compter de 0 à 20 avec des objets groupés par 10","Montrer 2 paquets de 10 objets = 20","Ajouter 1 objet à la fois : 21, 22, 23, 24, 25","Réciter la suite 20 à 25","Écrire les chiffres 20 à 25 au tableau","Jeu : distribuer des jetons et compter jusqu'à 25 ensemble"],
        ["Récite la suite de 20 à 25. → Corrigé : 20, 21, 22, 23, 24, 25","Combien fait 2 paquets de 10 plus 3 objets ? → Corrigé : 23","Quel nombre vient juste après 22 ? → Corrigé : 23","Montre le chiffre 24 parmi ces cartes. → Corrigé : la carte « 24 » pointée"]),

      m("MORALE","La propreté des aliments",
        "En lien avec les légumes vus en Environnement cette même semaine, sensibiliser au lavage des fruits et légumes avant de les manger.",
        ["Montrer un légume sale (avec de la terre dessus) puis le même légume lavé","Expliquer pourquoi il faut laver les légumes avant de les manger (terre, microbes)","Mimer le geste de laver un légume sous l'eau","Discuter : que se passe-t-il si on mange un aliment sale ?","Règle de classe : toujours se laver les mains avant de manger un fruit"],
        ["Pourquoi faut-il laver les légumes avant de les manger ? → Corrigé : pour enlever la terre et les microbes","Montre comment tu laves une carotte. → Corrigé : geste de rinçage sous l'eau mimé","Que fais-tu avant de manger un fruit ? → Corrigé : je le lave et je me lave les mains","Peut-on manger un légume couvert de terre sans le laver ? → Corrigé : non"]),

      m("ENVIRONNEMENT","Les légumes",
        "Nommer et catégoriser des légumes usuels par manipulation directe de légumes réels apportés en classe.",
        ["Apporter des légumes réels : carotte, tomate, poireau, chou","Nommer chaque légume","Observer la couleur et la forme de chacun","Jeu de Kim : cacher un légume, deviner lequel manque","Trier les légumes par couleur","Associer chaque légume à son image"],
        ["Comment s'appelle ce légume ? (montrer une carotte) → Corrigé : une carotte","De quelle couleur est la tomate ? → Corrigé : rouge","Cite 3 légumes. → Corrigé : carotte, tomate, poireau, chou (3 parmi ces réponses)","Montre le légume long et vert clair. → Corrigé : le poireau pointé"]),

      m("ANGLAIS","Vegetables",
        "Introduire le vocabulaire anglais des légumes en écho direct au thème d'Environnement de la semaine, par flashcards et répétition.",
        ["Flashcards : carrot, tomato, cabbage, leek","Répéter chaque mot 3 fois en montrant l'objet réel ou l'image","Jeu « Point to the... » : la maîtresse dit un mot, les enfants pointent l'image","Chanson courte reprenant les mots","Associer l'image anglaise au mot français déjà appris en Environnement"],
        ["What is this? (montrer une carotte) → Corrigé : carrot","Point to the tomato. → Corrigé : la tomate pointée","How do you say « poireau » in English? → Corrigé : leek","Repeat: « cabbage ». → Corrigé : prononciation évaluée"]),

      m("CHANT","Les légumes",
        "Apprendre une chanson qui énumère des légumes, en réinvestissant le vocabulaire vu en Environnement cette même semaine.",
        ["Chanter la chanson en entier une première fois, lentement","Expliquer les légumes cités dans les paroles","Répéter le refrain en chœur, 3 fois","Ajouter des gestes correspondant aux paroles","Chanter par petits groupes","Repérer les légumes cités qui riment"],
        ["Chante le refrain de « Les légumes ». → Corrigé : refrain chanté conformément aux paroles apprises","Cite un légume cité dans la chanson. → Corrigé : au moins un légume du texte cité","Montre le geste qui va avec le refrain. → Corrigé : geste conforme à celui appris en classe","Chante avec ton voisin. → Corrigé : performance en binôme évaluée"]),

      m("RECITATION","Le légume : Le poireau",
        "Mémoriser progressivement le poème « Le poireau » en écho au thème des légumes de la semaine, par répétition des 2 premières lignes.",
        ["Réciter le poème entier une fois avec expression","Expliquer le vocabulaire (poireau, jardin)","Répéter la 1ère ligne en chœur, 5 fois","Répéter la 2ème ligne en chœur, 5 fois","Enchaîner les 2 lignes ensemble","Réciter en tenant un poireau réel ou en carton"],
        ["Récite la première ligne du poème. → Corrigé : ligne récitée conforme au texte appris","Combien de lignes connais-tu ? → Corrigé : 2 lignes","De quel légume parle ce poème ? → Corrigé : le poireau","Récite les 2 lignes en tenant un poireau. → Corrigé : texte et geste conformes à ce qui a été appris"]),

      m("EPS","Foot-ball",
        "Découvrir le jeu du foot-ball : pousser le ballon avec le pied vers un but, dans un espace délimité et par petits groupes.",
        ["Présenter un ballon de foot et délimiter un petit terrain","Expliquer la règle simple : pousser le ballon avec le pied vers le but","Démontrer le geste de la passe entre 2 enfants","Jouer par petits groupes de 4 pour éviter les bousculades","Respecter son tour et attendre le ballon","Retour au calme : marche lente"],
        ["Pousse le ballon avec ton pied jusqu'au plot. → Corrigé : ballon poussé avec le pied sur la distance","Avec quelle partie du corps joue-t-on au foot-ball ? → Corrigé : les pieds","Fais une passe à ton camarade. → Corrigé : passe réalisée avec le pied","Combien d'enfants jouent dans ton groupe ? → Corrigé : 4"]),

      m("DESSIN","Un légume",
        "Dessiner un légume (la carotte : forme allongée et pointue) en réinvestissant le thème d'Environnement de la semaine.",
        ["Montrer une vraie carotte","Observer sa forme : allongée et pointue au bout","Tracer la forme au tableau étape par étape","Chaque enfant trace son légume sur sa feuille","Ajouter les fanes vertes en haut","Colorier en respectant la couleur réelle"],
        ["Quelle forme a une carotte ? → Corrigé : allongée et pointue","Dessine un légume. → Corrigé : forme reconnaissable et coloriée conformément au légume choisi","Quelle couleur as-tu utilisée ? → Corrigé : réponse cohérente avec le légume dessiné","Montre les fanes vertes de ta carotte. → Corrigé : partie verte pointée"]),

      m("TRAVAUX MANUELS","Peinture",
        "Explorer la peinture au pinceau sur le thème des légumes en développant le geste large du bras.",
        ["Présenter la peinture et les pinceaux, règles d'usage (pas de gouttes, on rince le pinceau)","Montrer le geste : tenir le pinceau, tremper, essuyer le surplus","Peindre un légume simple sur une silhouette prédessinée","Mélanger 2 couleurs pour en obtenir une nouvelle","Laisser sécher et nettoyer le matériel ensemble"],
        ["Montre comment tu tiens le pinceau. → Corrigé : prise ferme, pinceau non écrasé","Que fais-tu avant de changer de couleur ? → Corrigé : rincer le pinceau","Quelle couleur obtiens-tu en mélangeant jaune et bleu ? → Corrigé : vert","Range ton pinceau et ton pot après usage. → Corrigé : matériel rangé et propre"]),

      m("CONTE","I Trimobe sy i Fara — découverte",
        "Découvrir ce conte traditionnel malagasy par l'écoute active, l'observation d'images séquentielles, et l'identification des personnages principaux.",
        ["Présenter les images du conte une par une, dans l'ordre","Raconter le conte avec expression et voix différenciées par personnage","Nommer les 2 personnages principaux : Trimobe et Fara","Poser 2-3 questions de compréhension immédiate","Faire répéter une réplique clé d'un personnage"],
        ["Comment s'appellent les 2 personnages principaux ? → Corrigé : Trimobe et Fara","Que se passe-t-il au début du conte ? → Corrigé : résumé oral conforme au début de l'histoire racontée","Montre l'image où Trimobe apparaît. → Corrigé : bonne image pointée","As-tu aimé ce conte ? Pourquoi ? → Corrigé : réponse personnelle justifiée"])

    ],
  },

  {
    n:3, dates:"18/01/2027 – 22/01/2027",
    theme:"Lettre p (Lecture/Vakiteny/Écriture) · Écriture des nombres 2 et 3 · Nombres 25 à 30 · Les animaux domestiques",
    matieres:[

      m("LECTURE","La lettre p : syllabes pa-pi-po-pu-pe",
        "Introduire la consonne p en contraste avec le b vu la semaine précédente (même geste de lèvres, sans vibration de la gorge). Combiner immédiatement le son [p] avec les 5 voyelles connues.",
        ["Montrer la lettre P en grand format au tableau","Prononcer le son [p] en posant la main sur la gorge : pas de vibration (à la différence de b)","Chercher des mots avec [p] : papa, pomme, pipe","Combiner p + a, p + i, p + o, p + u, p + e au tableau : pa, pi, po, pu, pe","Faire lire la ligne de syllabes en chœur puis individuellement","Lire le mot « papa » en le décomposant : pa-pa","Jeu : la maîtresse pointe une syllabe, l'enfant la lit"],
        ["Quel son fait la lettre p ? → Corrigé : [p]","Lis cette syllabe : pu → Corrigé : [pu]","Lis ces syllabes dans l'ordre : pa — po — pi → Corrigé : lecture correcte des 3 syllabes","Décompose le mot « papa » en syllabes. → Corrigé : pa-pa"]),

      m("VAKITENY","La lettre p : syllabes pa-pe-pi-po en malagasy",
        "Introduire le son [p] en malagasy et former les premières syllabes avec les voyelles malagasy déjà connues (a, e, i, o).",
        ["Montrer la lettre P, prononcer [p]","Mots connus avec [p] : paoma, petaka","Combiner p + a, p + e, p + i, p + o au tableau","Faire lire les syllabes en chœur","Jeu de lecture individuelle des syllabes"],
        ["Lis cette syllabe : po → Corrigé : [po]","Cite un mot malagasy qui commence par « pa ». → Corrigé : paoma (une réponse correcte acceptée)","Lis : pe — pi → Corrigé : lecture correcte des 2 syllabes","Entoure les syllabes avec « p » : pa — la — po — ta → Corrigé : pa, po entourés"]),

      m("ÉCRITURE","La lettre p : tracé du jambage et du rond",
        "Apprendre le tracé du p (un jambage qui descend sous la ligne, puis un rond en haut à droite) en contraste direct avec le b vu la semaine précédente.",
        ["Montrer le tracé : on descend sous la ligne, on remonte, on fait un rond en haut à droite","Tracer dans l'air en verbalisant « je descends, je remonte, je fais un rond »","Tracer sur l'ardoise, puis sur papier préligné","Comparer p et b : le rond est en haut pour p, en bas pour b","Tracer « pa » en attachant p et a","Tracer 3 syllabes différentes sur papier préligné"],
        ["Trace la lettre p sur ton ardoise. → Corrigé : jambage sous la ligne et rond en haut à droite, tracé fluide","Quelle est la différence entre p et b ? → Corrigé : le rond est en haut pour p, en bas pour b","Écris la syllabe « po ». → Corrigé : p et o correctement attachés et lisibles","Trace 3 syllabes avec p (pa, pu, pe). → Corrigé : tracé des 3 syllabes conforme"]),

      m("LANGAGE","Le petit chat perdu — suite : la recherche du chat",
        "Poursuivre l'exploitation de l'histoire en développant l'épisode de la recherche du chat, avec un vocabulaire enrichi (chercher, appeler, sous la table).",
        ["Rappel bref de l'histoire (résumé collectif)","Remettre 3 images de l'histoire dans l'ordre chronologique","Introduire 2 nouveaux mots : chercher, appeler","Jeu de rôle enrichi : les enfants miment la recherche du chat dans la classe","Faire raconter un court passage par un enfant volontaire"],
        ["Où les enfants cherchent-ils le chat en premier ? → Corrigé : sous la table (selon l'épisode raconté)","Que crient les enfants pour appeler le chat ? → Corrigé : « Minou, minou ! » (ou le nom donné au chat dans l'histoire)","Remets ces 3 images dans l'ordre de l'histoire. → Corrigé : ordre chronologique correct","Raconte un morceau de l'histoire avec tes mots. → Corrigé : récit cohérent avec un épisode réel de l'histoire"]),

      m("PRE-MATH","Écriture en lettres : 2 = deux, 3 = trois",
        "Après manipulation des quantités 2 et 3 déjà maîtrisées, introduire l'écriture du nombre en toutes lettres à côté du chiffre, en insistant sur l'association chiffre-mot plutôt que sur la copie autonome.",
        ["Rappel : montrer 2 objets puis le chiffre 2","Écrire à côté du chiffre le mot « deux » en lettres capitales","Faire de même avec 3 objets et le mot « trois »","Jeu d'association : relier le chiffre à son mot écrit parmi plusieurs étiquettes","Répéter oralement : « 2 s'écrit deux, 3 s'écrit trois »","Chercher le mot « deux » ou « trois » affiché dans la classe"],
        ["Relie le chiffre 2 à son mot écrit. → Corrigé : « 2 » relié à « deux »","Relie le chiffre 3 à son mot écrit. → Corrigé : « 3 » relié à « trois »","Combien de lettres a le mot « deux » ? → Corrigé : 4 lettres","Montre l'étiquette qui correspond à 3 objets. → Corrigé : l'étiquette « trois » pointée"]),

      m("MATHS","Les chiffres de 25 à 30",
        "Poursuivre l'extension du comptage entamée la semaine précédente (20 à 25) jusqu'à 30, en manipulant 3 paquets de 10 objets.",
        ["Rappel : réciter la suite 20 à 25","Ajouter des objets un à un : 26, 27, 28, 29, 30","Montrer 3 paquets de 10 objets = 30","Réciter la suite 25 à 30","Écrire les chiffres 25 à 30 au tableau","Jeu de comptage collectif jusqu'à 30 avec des jetons"],
        ["Récite la suite de 25 à 30. → Corrigé : 25, 26, 27, 28, 29, 30","Combien fait 3 paquets de 10 ? → Corrigé : 30","Quel nombre vient juste avant 30 ? → Corrigé : 29","Montre le chiffre 27 parmi ces cartes. → Corrigé : la carte « 27 » pointée"]),

      m("MORALE","Protéger les animaux",
        "En lien avec les animaux domestiques vus en Environnement cette même semaine, sensibiliser au respect et à la protection des animaux.",
        ["Observer des images d'animaux bien traités et d'animaux maltraités","Discuter : pourquoi ne faut-il pas faire mal aux animaux ?","Montrer comment caresser doucement un animal","Jeu de rôle : prendre soin d'une peluche-animal (la nourrir, la caresser)","Règle de classe : respecter les animaux rencontrés dans la cour"],
        ["Que dois-tu faire si tu vois un animal qui a soif ? → Corrigé : lui donner de l'eau","Est-ce bien de faire mal à un animal ? → Corrigé : non","Montre comment on caresse doucement un animal. → Corrigé : geste doux mimé","Pourquoi faut-il protéger les animaux ? → Corrigé : parce qu'ils ressentent aussi la douleur et ont besoin de nous"]),

      m("ENVIRONNEMENT","Les animaux domestiques",
        "Nommer et situer des animaux domestiques usuels par manipulation d'images ou de figurines.",
        ["Apporter des images ou figurines : chien, chat, poule, vache","Nommer chaque animal","Discuter où ils vivent (la maison, la cour, l'étable)","Jeu de Kim : cacher un animal, deviner lequel manque","Associer chaque animal à son cri"],
        ["Comment s'appelle cet animal ? (montrer un chien) → Corrigé : le chien","Où vit la poule ? → Corrigé : dans la cour ou le poulailler","Cite 3 animaux domestiques. → Corrigé : chien, chat, poule, vache (3 parmi ces réponses)","Quel cri fait le chien ? → Corrigé : il aboie"]),

      m("ANGLAIS","Farm animals and pets",
        "Introduire le vocabulaire anglais des animaux domestiques en écho au thème d'Environnement de la semaine.",
        ["Flashcards : dog, cat, hen, cow","Répéter chaque mot 3 fois en montrant l'image","Jeu « Point to the... » avec les images d'animaux","Chanson courte mimant les cris des animaux","Associer l'image anglaise au mot français déjà appris en Environnement"],
        ["What is this? (montrer un chien) → Corrigé : dog","Point to the hen. → Corrigé : la poule pointée","How do you say « vache » in English? → Corrigé : cow","Repeat: « cat ». → Corrigé : prononciation évaluée"]),

      m("CHANT","Bitro kely — découverte",
        "Apprendre une nouvelle chanson malagasy, « Bitro kely », par écoute et répétition du refrain.",
        ["Chanter la chanson en entier une première fois, lentement","Expliquer les mots nouveaux du refrain","Répéter le refrain en chœur, 3 fois","Ajouter des gestes correspondant aux paroles","Chanter par petits groupes"],
        ["Chante le refrain de « Bitro kely ». → Corrigé : refrain chanté conformément aux paroles apprises","De quoi parle cette chanson ? → Corrigé : réponse conforme au thème de la chanson enseignée","Montre le geste qui va avec le refrain. → Corrigé : geste conforme à celui appris en classe","Chante avec ton voisin. → Corrigé : performance en binôme évaluée"]),

      m("RECITATION","Une poule sur un mur",
        "Découvrir la comptine « Une poule sur un mur » par écoute et répétition des 2 premières lignes.",
        ["Réciter la comptine entière une fois avec expression","Expliquer le vocabulaire (la poule, le mur)","Répéter la 1ère ligne en chœur, 5 fois","Répéter la 2ème ligne en chœur, 5 fois","Réciter les 2 lignes avec le mime de la poule"],
        ["Récite la première ligne de « Une poule sur un mur ». → Corrigé : ligne récitée conforme au texte appris","Où est la poule dans la comptine ? → Corrigé : sur un mur","Combien de lignes connais-tu ? → Corrigé : 2 lignes","Récite avec le geste de la poule. → Corrigé : texte et geste conformes à ce qui a été appris"]),

      m("EPS","Marche des animaux",
        "Explorer différentes démarches d'animaux (le canard, le lapin, l'éléphant) par imitation, sur une distance délimitée.",
        ["Présenter chaque démarche : le canard (dandinant), le lapin (par bonds), l'éléphant (pas lourds)","Démontrer chaque marche devant les enfants","Imiter chaque marche sur une distance de 10 mètres","Alterner les marches au signal de la maîtresse","Retour au calme en marchant normalement"],
        ["Marche comme un canard jusqu'au plot. → Corrigé : démarche imitée sur toute la distance","Comment marche l'éléphant ? → Corrigé : à pas lourds et lents (démonstration acceptée)","Change de marche au signal de la maîtresse. → Corrigé : changement réalisé au bon signal","Quelle marche as-tu préférée ? → Corrigé : réponse personnelle"]),

      m("DESSIN","Une poule",
        "Dessiner une poule (rond pour le corps, rond pour la tête, triangle pour le bec) en réinvestissant les formes géométriques déjà connues.",
        ["Montrer une image de poule","Décomposer la forme : un rond pour le corps, un rond pour la tête, un triangle pour le bec","Tracer chaque forme au tableau étape par étape","Chaque enfant trace sa poule sur sa feuille","Ajouter la crête et les pattes","Colorier"],
        ["Quelle forme utilises-tu pour le bec de la poule ? → Corrigé : un triangle","Dessine une poule. → Corrigé : forme reconnaissable (corps, tête, bec) et coloriée","Quelle couleur as-tu choisie pour la crête ? → Corrigé : rouge (réponse cohérente acceptée)","Montre le bec de ta poule. → Corrigé : la forme pointée"]),

      m("TRAVAUX MANUELS","Collage",
        "Réaliser un collage de papier déchiré ou découpé pour former une poule, en développant la préhension fine et le respect d'un contour.",
        ["Présenter la colle et des morceaux de papier de couleur déjà découpés","Montrer le geste de coller sans excès de colle","Coller les morceaux sur une silhouette de poule prédessinée","Respecter l'emplacement des morceaux (corps, tête, bec)","Laisser sécher"],
        ["Montre comment tu mets la colle. → Corrigé : quantité raisonnable étalée avec le doigt ou un bâtonnet","Que colles-tu pour former la poule ? → Corrigé : les morceaux de papier découpés","Où places-tu le morceau du bec ? → Corrigé : emplacement cohérent sur la silhouette","Montre ton collage terminé. → Corrigé : production présentée"]),

      m("CONTE","I Trimobe sy i Fara — suite",
        "Poursuivre le conte en développant la compréhension de l'intrigue et en introduisant une prédiction simple sur la suite.",
        ["Rappel des personnages et du début de l'histoire","Raconter la suite du conte avec les images","Discuter : que veut Trimobe ? que veut Fara ?","Faire répéter une réplique d'un personnage","Demander une prédiction simple sur la suite de l'histoire"],
        ["Que veut Trimobe dans cette partie de l'histoire ? → Corrigé : réponse conforme au passage raconté","Répète ce que dit Fara. → Corrigé : réplique répétée fidèlement","Que va-t-il se passer selon toi ? → Corrigé : prédiction libre acceptée si cohérente avec l'histoire","Montre l'image qui correspond à ce que je viens de raconter. → Corrigé : bonne image pointée"])

    ],
  },

  {
    n:4, dates:"25/01/2027 – 29/01/2027",
    theme:"Lettre v (Lecture/Vakiteny/Écriture) · L'addition · Compte de 0 à 30 · Les animaux aquatiques",
    matieres:[

      m("LECTURE","La lettre v : syllabes va-vi-vo-vu-ve",
        "Introduire la consonne v, dernière consonne du mois, en s'appuyant sur les 5 voyelles connues. Lire un premier mot entièrement composé de lettres déjà apprises.",
        ["Montrer la lettre V en grand format au tableau","Prononcer le son [v] en posant la main sur la gorge pour sentir la vibration","Chercher des mots avec [v] : vélo, valise, avion","Combiner v + a, v + i, v + o, v + u, v + e au tableau : va, vi, vo, vu, ve","Faire lire la ligne de syllabes en chœur puis individuellement","Lire le mot « avion » en le décomposant : a-vi-on","Jeu : la maîtresse pointe une syllabe, l'enfant la lit"],
        ["Quel son fait la lettre v ? → Corrigé : [v]","Lis cette syllabe : ve → Corrigé : [ve]","Lis ces syllabes dans l'ordre : va — vu — vi → Corrigé : lecture correcte des 3 syllabes","Décompose le mot « avion » en syllabes. → Corrigé : a-vi-on"]),

      m("VAKITENY","La lettre v : syllabes va-ve-vi-vo en malagasy",
        "Introduire le son [v] en malagasy et former les premières syllabes avec les voyelles malagasy déjà connues (a, e, i, o).",
        ["Montrer la lettre V, prononcer [v]","Mots connus avec [v] : vary, vola","Combiner v + a, v + e, v + i, v + o au tableau","Faire lire les syllabes en chœur","Jeu de lecture individuelle des syllabes"],
        ["Lis cette syllabe : va → Corrigé : [va]","Cite un mot malagasy qui commence par « vo ». → Corrigé : vola (une réponse correcte acceptée)","Lis : ve — vi → Corrigé : lecture correcte des 2 syllabes","Entoure les syllabes avec « v » : va — la — vo — ta → Corrigé : va, vo entourés"]),

      m("ÉCRITURE","La lettre v : tracé de deux traits obliques",
        "Apprendre le tracé du v (deux traits obliques qui se rejoignent en une pointe en bas) en contraste avec le u déjà connu, dont les traits sont arrondis.",
        ["Montrer le tracé : on descend en oblique vers la droite, puis on remonte en oblique","Tracer dans l'air en verbalisant « je descends, je remonte, en pointe »","Tracer sur l'ardoise, puis sur papier préligné","Comparer v et u : le v a des pointes, le u a des courbes arrondies","Tracer « va » en attachant v et a","Tracer 3 syllabes différentes sur papier préligné"],
        ["Trace la lettre v sur ton ardoise. → Corrigé : deux traits obliques formant une pointe en bas","Quelle est la différence entre v et u ? → Corrigé : le v a des pointes, le u a des courbes","Écris la syllabe « vi ». → Corrigé : v et i correctement attachés et lisibles","Trace 3 syllabes avec v (va, vo, ve). → Corrigé : tracé des 3 syllabes conforme"]),

      m("LANGAGE","Le petit chat perdu — fin de l'histoire",
        "Conclure l'exploitation de l'histoire par une restitution orale complète en autonomie, en réinvestissant le vocabulaire vu sur les 3 semaines.",
        ["Rappel des épisodes précédents à l'aide des images","Raconter la fin de l'histoire : le chat retrouvé, tout le monde content","Reconstituer l'histoire entière à l'aide de 5 images dans l'ordre","Faire raconter l'histoire complète par un enfant volontaire avec l'aide des images","Discussion : « Que ferais-tu si tu perdais ton animal ? »"],
        ["Range les 5 images de l'histoire dans le bon ordre. → Corrigé : ordre chronologique complet respecté","Où retrouve-t-on le chat à la fin ? → Corrigé : réponse conforme à la fin de l'histoire racontée","Raconte l'histoire du petit chat perdu du début à la fin. → Corrigé : récit cohérent couvrant les 3 étapes principales","Que ferais-tu si tu perdais ton animal ? → Corrigé : réponse personnelle justifiée"]),

      m("PRE-MATH","L'addition : réunir deux petites quantités",
        "Introduire la première addition concrète en réunissant physiquement deux petits groupes d'objets et en comptant le total, en s'appuyant sur le comptage déjà maîtrisé.",
        ["Poser 2 jetons d'un côté, 1 jeton de l'autre côté","Réunir les deux groupes en un seul tas","Compter le total ensemble : « 2 et 1, ça fait 3 »","Refaire avec d'autres petites quantités : 1 et 2, 2 et 2","Associer le geste de réunir aux mots « plus » et « ça fait »","Jeu : chaque enfant reçoit 2 petits groupes de jetons et doit dire le total"],
        ["Tu as 2 jetons puis on t'en donne 1 de plus. Combien en as-tu maintenant ? → Corrigé : 3","Réunis ces 2 groupes de jetons (2 et 2) et compte le total. → Corrigé : 4","Que veut dire « additionner » ? → Corrigé : réunir deux quantités pour trouver le total","Combien fait 1 jeton plus 3 jetons ? → Corrigé : 4 (vérifié par manipulation de jetons)"]),

      m("MATHS","Compter de 0 à 30",
        "Consolider en un seul comptage continu tout ce qui a été vu par étapes ce mois (0-20 déjà su, puis 20-25, puis 25-30), pour fixer la suite complète.",
        ["Rappel des étapes vues ce mois : 0 à 20, puis 20 à 25, puis 25 à 30","Réciter la suite complète 0 à 30 en groupe","Utiliser une bande numérique affichée de 0 à 30","Jeu : pointer un nombre au hasard et dire lequel vient avant et après","Compter des objets réels de la classe jusqu'à 30 (les crayons par exemple)"],
        ["Récite la suite de 0 à 30. → Corrigé : 0, 1, 2… jusqu'à 30, récité sans erreur majeure","Quel nombre vient juste après 29 ? → Corrigé : 30","Montre le nombre 28 sur la bande numérique. → Corrigé : bon nombre pointé","Compte ces objets à voix haute jusqu'à 30. → Corrigé : comptage correct jusqu'à 30"]),

      m("MORALE","Protéger les animaux, y compris ceux de l'eau",
        "Approfondir la protection des animaux vue la semaine précédente en l'étendant aux animaux aquatiques vus en Environnement cette semaine.",
        ["Rappel de la règle de protection des animaux vue la semaine dernière","Observer une image d'une rivière propre et d'une rivière polluée","Discuter : pourquoi les poissons ont-ils besoin d'une eau propre ?","Règle : ne pas jeter d'ordures dans l'eau","Jeu de tri : gestes qui protègent l'eau / gestes qui la polluent"],
        ["Pourquoi les poissons ont-ils besoin d'une eau propre ? → Corrigé : pour respirer et vivre en bonne santé","Peut-on jeter des ordures dans une rivière ? → Corrigé : non","Montre l'image de la rivière propre. → Corrigé : bonne image pointée","Cite un geste qui protège les animaux de l'eau. → Corrigé : ne pas polluer, ne pas jeter de déchets (une réponse acceptée)"]),

      m("ENVIRONNEMENT","Les animaux aquatiques",
        "Nommer et situer des animaux aquatiques usuels par manipulation d'images ou de figurines.",
        ["Apporter des images ou figurines : poisson, grenouille, crevette, canard","Nommer chaque animal","Discuter où ils vivent (la rivière, la mer, l'étang)","Jeu de Kim : cacher un animal, deviner lequel manque","Associer chaque animal à son milieu de vie"],
        ["Comment s'appelle cet animal ? (montrer un poisson) → Corrigé : le poisson","Où vit la grenouille ? → Corrigé : dans l'eau et sur terre (étang, rivière)","Cite 3 animaux aquatiques. → Corrigé : poisson, grenouille, crevette, canard (3 parmi ces réponses)","Avec quoi le poisson respire-t-il dans l'eau ? → Corrigé : avec ses branchies"]),

      m("ANGLAIS","Animals aquatic",
        "Introduire le vocabulaire anglais des animaux aquatiques en écho au thème d'Environnement de la semaine.",
        ["Flashcards : fish, frog, duck","Répéter chaque mot 3 fois en montrant l'image","Jeu « Point to the... » avec les images d'animaux aquatiques","Chanson courte mimant le geste de nager","Associer l'image anglaise au mot français déjà appris en Environnement"],
        ["What is this? (montrer un poisson) → Corrigé : fish","Point to the frog. → Corrigé : la grenouille pointée","How do you say « canard » in English? → Corrigé : duck","Repeat: « fish ». → Corrigé : prononciation évaluée"]),

      m("CHANT","Bitro kely — chanter en entier",
        "Consolider la mémorisation complète de la chanson en ajoutant un 2e couplet et en travaillant la justesse rythmique.",
        ["Rappel du refrain appris la semaine précédente","Ajouter le 2e couplet","Chanter en entier, lentement puis à vitesse normale","Ajouter des gestes sur le 2e couplet","Chanter en 2 groupes qui se répondent"],
        ["Chante « Bitro kely » en entier. → Corrigé : refrain et 2e couplet chantés conformément aux paroles apprises","Que dit le 2e couplet ? → Corrigé : citer 1 élément du couplet","Montre le geste du 2e couplet. → Corrigé : geste conforme à celui appris en classe","Chante en groupe en respectant ton tour. → Corrigé : performance collective évaluée"]),

      m("RECITATION","Une poule sur un mur — mémorisation complète",
        "Poursuivre la mémorisation de la comptine en ajoutant les lignes suivantes, pour arriver à une récitation complète en fin de semaine.",
        ["Rappel des 2 premières lignes déjà apprises","Ajouter les lignes suivantes de la comptine","Répéter chaque nouvelle ligne en chœur, 5 fois","Réciter la comptine en entier avec le mime de la poule","Faire réciter individuellement les volontaires"],
        ["Récite « Une poule sur un mur » en entier. → Corrigé : comptine récitée en entier conformément au texte appris","Combien de lignes connais-tu maintenant ? → Corrigé : la comptine entière (plus que les 2 premières lignes)","Récite avec le mime de la poule. → Corrigé : texte et geste conformes","Récite devant la classe tout seul. → Corrigé : récitation individuelle conforme à ce qui a été appris"]),

      m("EPS","Marche des animaux — approfondissement",
        "Enrichir le répertoire de démarches animales vu la semaine précédente en ajoutant de nouvelles marches et en les enchaînant sur un parcours.",
        ["Rappel des marches vues la semaine précédente : le canard, le lapin, l'éléphant","Ajouter 2 nouvelles marches : le serpent (en rampant), la grenouille (en sautant à pieds joints)","Installer un parcours enchaînant plusieurs marches différentes","Faire passer chaque enfant sur le parcours complet","Retour au calme en marchant normalement"],
        ["Fais le parcours en changeant de marche à chaque plot. → Corrigé : parcours réalisé avec les marches demandées","Comment avance le serpent ? → Corrigé : en rampant sur le ventre","Comment saute la grenouille ? → Corrigé : à pieds joints vers l'avant","Quelle marche as-tu trouvée la plus difficile ? → Corrigé : réponse personnelle"]),

      m("DESSIN","Un poisson",
        "Dessiner un poisson (ovale pour le corps, triangle pour la queue) en réinvestissant les formes géométriques déjà connues.",
        ["Montrer une image de poisson","Décomposer la forme : un ovale pour le corps, un triangle pour la queue","Tracer chaque forme au tableau étape par étape","Chaque enfant trace son poisson sur sa feuille","Ajouter les écailles et l'œil","Colorier"],
        ["Quelle forme utilises-tu pour le corps du poisson ? → Corrigé : un ovale","Dessine un poisson. → Corrigé : forme reconnaissable (corps ovale et queue triangle) et coloriée","Quelle forme utilises-tu pour la queue ? → Corrigé : un triangle","Montre l'œil de ton poisson. → Corrigé : élément pointé"]),

      m("TRAVAUX MANUELS","Déchiquetage",
        "Développer la pince digitale en déchiquetant du papier de couleur avec les doigts, puis en collant les morceaux pour remplir une forme prédessinée.",
        ["Présenter du papier de couleur","Montrer le geste de déchiqueter avec les doigts (sans ciseaux) en petits morceaux","Coller les morceaux déchiquetés pour remplir une silhouette de poisson prédessinée","Respecter les contours de la forme","Laisser sécher"],
        ["Montre comment tu déchiquettes le papier. → Corrigé : petits morceaux déchirés avec les doigts","Que fais-tu avec les morceaux déchiquetés ? → Corrigé : on les colle sur la forme","As-tu respecté les contours de la forme ? → Corrigé : évaluation visuelle du respect des contours","Montre ton déchiquetage terminé. → Corrigé : production présentée"]),

      m("CONTE","I Trimobe sy i Fara — fin",
        "Conclure le conte en travaillant la restitution de la morale et de la fin de l'histoire, et en réinvestissant les personnages sur les 3 semaines.",
        ["Rappel de toute l'histoire à l'aide des images dans l'ordre","Raconter la fin du conte","Discuter de la morale ou de la leçon du conte","Faire raconter l'histoire complète par un enfant volontaire","Jeu de rôle final : les enfants jouent l'histoire entière"],
        ["Comment se termine l'histoire de I Trimobe sy i Fara ? → Corrigé : résumé de la fin conforme au conte raconté","Quelle leçon peut-on tirer de ce conte ? → Corrigé : réponse acceptée si cohérente avec la morale du conte","Raconte l'histoire entière avec tes mots. → Corrigé : récit cohérent couvrant début-milieu-fin","Quel personnage as-tu préféré ? Pourquoi ? → Corrigé : réponse personnelle justifiée"])

    ],
  }

];

const FEVRIER_12EME = [

  {
    n:1, dates:"01/02/2027 – 05/02/2027",
    theme:"Lettre r : syllabes ra-ri-ro-ru-re · Addition · Nombres pairs 0 à 30 · Les insectes",
    matieres:[

      m("LECTURE","La lettre r : son [ʁ] et syllabes ra-ri-ro-ru-re",
        "Introduire la consonne r par la méthode syllabique : isoler le son [ʁ] à l'oral, puis le combiner immédiatement avec les 5 voyelles déjà connues (a, i, o, u, e) pour former des syllabes.",
        ["Montrer la lettre R en grand format au tableau (majuscule et minuscule)","Prononcer le son [ʁ] en le faisant vibrer légèrement au fond de la gorge","Chercher des mots avec [ʁ] : rat, riz, robe","Combiner r + a au tableau : « ra » — faire lire la syllabe","Combiner r + i, r + o, r + u, r + e : ri, ro, ru, re","Faire lire la ligne de syllabes en chœur puis individuellement","Jeu : la maîtresse pointe une syllabe, l'enfant la lit"],
        ["Quel son fait la lettre r ? → Corrigé : [ʁ]","Lis cette syllabe : ra → Corrigé : [ra]","Lis ces syllabes dans l'ordre : ru — ri — ro → Corrigé : lecture correcte des 3 syllabes","Quelle syllabe obtient-on avec r + e ? → Corrigé : re"]),

      m("VAKITENY","La lettre r : premières syllabes en malagasy",
        "Introduire le son [r] en malagasy (r roulé, plus marqué qu'en français) et former les premières syllabes avec les voyelles malagasy déjà connues.",
        ["Montrer la lettre R, prononcer le son roulé [r]","Mots connus avec r : rano, rambo, roa","Combiner r + a, r + o, r + i au tableau","Faire lire les syllabes en chœur","Jeu de lecture individuelle des syllabes"],
        ["Lis cette syllabe : ra → Corrigé : [ra]","Cite un mot malagasy qui commence par « ra ». → Corrigé : rano, rambo (une réponse correcte acceptée)","Lis : ro — ri → Corrigé : lecture correcte des 2 syllabes","Entoure les syllabes avec « r » : ra — ta — ro — ma → Corrigé : ra, ro entourés"]),

      m("ÉCRITURE","La lettre r : tracé de la petite canne et du crochet",
        "Apprendre le tracé du r (une petite canne verticale suivie d'un petit crochet arrondi vers la droite), puis relier r aux voyelles pour écrire les syllabes ra-ri-ro-ru-re.",
        ["Montrer le tracé au tableau : on descend une petite canne, puis on remonte et on trace un petit crochet arrondi","Tracer dans l'air avec le doigt en verbalisant le mouvement","Tracer sur l'ardoise à la craie","Tracer sur papier préligné avec un gros crayon","Comparer la hauteur du r avec le l déjà connu (le l est plus haut)","Tracer « ra » en attachant r et a","Tracer 3 syllabes différentes sur papier préligné"],
        ["Trace la lettre r sur ton ardoise. → Corrigé : petite canne suivie d'un crochet arrondi, tracé fluide","Quelle lettre est plus haute : r ou l ? → Corrigé : l","Écris la syllabe « ra ». → Corrigé : r et a correctement attachés et lisibles","Trace 3 syllabes avec r (ra, ro, re). → Corrigé : tracé des 3 syllabes conforme"]),

      m("LANGAGE","Le petit chat perdu — découverte de l'histoire",
        "Introduire l'histoire « Le petit chat perdu » comme support de vocabulaire (perdu, chercher, retrouver, miauler) et de structuration de phrases simples, en développant l'empathie face à une situation de perte.",
        ["Raconter l'histoire avec des images séquentielles (le chat perdu, sa recherche, ses retrouvailles)","Nommer le vocabulaire nouveau : perdu, chercher, retrouver, miauler","Mimer le chat qui cherche son chemin en miaulant","Répéter la phrase clé : « Le petit chat est perdu »","Poser 3 questions de compréhension simples après l'écoute","Jeu de rôle : un enfant joue le chat perdu, un autre l'enfant qui le retrouve"],
        ["Que cherche le petit chat ? → Corrigé : sa maison / son chemin","Que fait le chat quand il est perdu ? → Corrigé : il miaule / il cherche","Montre l'image du chat perdu dans la rue. → Corrigé : bonne image pointée","Répète la phrase : « Le petit chat est perdu ». → Corrigé : phrase répétée avec la structure sujet-verbe-attribut"]),

      m("PRE-MATH","Addition : consolider avec manipulation d'objets",
        "Consolider l'addition introduite fin janvier en réinvestissant la manipulation concrète d'objets (réunir deux petites collections), avant d'aborder son opération inverse (la soustraction) en fin de mois.",
        ["Rappel : additionner c'est réunir deux collections en une seule","Poser 2 jetons puis 3 jetons, les réunir, compter le total","Verbaliser : « 2 et 3, ça fait 5 »","Refaire avec d'autres petites quantités (jusqu'à 10)","Écrire au tableau : 2 + 3 = 5, faire lire à voix haute","Jeu : chaque enfant additionne 2 petits tas de jetons donnés"],
        ["Additionne 4 jetons et 2 jetons. Combien en as-tu au total ? → Corrigé : 6","Que veut dire additionner ? → Corrigé : réunir deux collections pour en faire une seule","3 + 2 = ? → Corrigé : 5","Pose 5 billes puis 1 bille. Compte le total. → Corrigé : 6 billes"]),

      m("MATHS","Les nombres pairs de 0 à 30",
        "Étendre la notion de nombre pair (déjà vue en octobre pour 0 à 10) jusqu'à 30, en s'appuyant sur le comptage jusqu'à 30 acquis en janvier, par manipulation d'objets groupés par paires.",
        ["Rappel : compter de 0 à 30","Rappel : un nombre pair peut être rangé par 2 sans qu'il en reste","Grouper des objets par 2 au-delà de 10 : 12, 14, 16... jusqu'à 30","Réciter la suite des pairs 0, 2, 4... jusqu'à 30","Colorier les cases paires sur une bande numérique 0-30","Jeu : distribuer des jetons par paires jusqu'à atteindre 30"],
        ["Récite la suite des nombres pairs de 20 à 30. → Corrigé : 20, 22, 24, 26, 28, 30","Range ces 14 crayons par 2. Combien de paires obtiens-tu ? → Corrigé : 7 paires","Ce nombre est-il pair : 18 ? → Corrigé : oui","Colorie les nombres pairs sur la bande 20 à 30. → Corrigé : 20, 22, 24, 26, 28, 30 coloriés"]),

      m("MORALE","La santé",
        "Sensibiliser aux gestes simples qui préservent la santé (bien manger, bien dormir, se couvrir en cas de froid), en cohérence avec le thème des insectes vus en Environnement (certains insectes peuvent transmettre des maladies).",
        ["Discuter : que faut-il faire pour rester en bonne santé ?","Nommer les 3 piliers : bien manger, bien dormir, faire de l'exercice","Expliquer que certains insectes (moustiques) peuvent rendre malade, d'où l'importance de la moustiquaire","Jeu de tri : images d'aliments sains / moins sains","Chanson ou comptine sur le sommeil et la santé","Vérifier au quotidien : chacun a bien mangé au petit-déjeuner"],
        ["Cite 2 choses à faire pour rester en bonne santé. → Corrigé : bien manger, bien dormir, faire du sport, se laver (2 réponses parmi celles-ci)","Pourquoi dort-on la nuit sous une moustiquaire ? → Corrigé : pour éviter les piqûres de moustiques et les maladies","Cite un aliment qui rend fort et en bonne santé. → Corrigé : légumes, fruits, riz, lait (une réponse acceptée)","Que fais-tu si tu te sens malade ? → Corrigé : je le dis à un adulte (maman, maîtresse)"]),

      m("ENVIRONNEMENT","Les insectes",
        "Découvrir et nommer quelques insectes familiers (fourmi, papillon, moustique, mouche) par observation d'images ou de spécimens réels, en notant leurs caractéristiques simples (nombre de pattes, déplacement).",
        ["Observer des images de plusieurs insectes : fourmi, papillon, moustique, mouche","Nommer chaque insecte","Observer ensemble un vrai insecte trouvé dans la cour (si possible)","Discuter : où vivent les insectes ? comment se déplacent-ils ?","Jeu de tri : insectes qui volent / insectes qui marchent","Associer chaque insecte à son image"],
        ["Comment s'appelle cet insecte ? (montrer une fourmi) → Corrigé : une fourmi","Cite un insecte qui vole. → Corrigé : le papillon, le moustique, la mouche (une réponse acceptée)","Où trouve-t-on souvent des fourmis ? → Corrigé : par terre, dans la cour, près de la nourriture","Cite 3 insectes que tu connais. → Corrigé : 3 parmi fourmi, papillon, moustique, mouche, abeille"]),

      m("ANGLAIS","The insects",
        "Introduire le vocabulaire anglais des insectes en écho direct au thème d'Environnement de la semaine, par flashcards et répétition.",
        ["Flashcards : ant, butterfly, mosquito, fly","Répéter chaque mot 3 fois en montrant l'image","Jeu « Point to the... » : la maîtresse dit un mot, les enfants pointent l'image","Chanson courte reprenant les mots","Associer l'image anglaise au mot français déjà appris en Environnement"],
        ["What is this? (montrer une fourmi) → Corrigé : ant","Point to the butterfly. → Corrigé : le papillon pointé","How do you say « moustique » in English? → Corrigé : mosquito","Repeat: « fly ». → Corrigé : prononciation évaluée"]),

      m("CHANT","Inona indray no ndeha hatao — découverte",
        "Apprendre une nouvelle chanson malagasy en travaillant la mémorisation par répétition rythmée et l'écoute collective.",
        ["Chanter la chanson en entier une première fois, lentement","Expliquer les mots nouveaux du refrain","Répéter le refrain en chœur, 3 fois","Ajouter des gestes correspondant aux paroles","Chanter par petits groupes","Repérer les mots qui reviennent le plus souvent"],
        ["Chante le refrain de « Inona indray no ndeha hatao ». → Corrigé : refrain chanté conformément aux paroles apprises","Que dit le refrain de la chanson ? → Corrigé : citer 1 élément du texte de la chanson","Montre le geste qui va avec le refrain. → Corrigé : geste conforme à celui appris en classe","Chante avec ton voisin en te tenant la main. → Corrigé : performance en binôme évaluée"]),

      m("RECITATION","Voilà le lapin — mémorisation des 2 premières lignes",
        "Mémoriser progressivement le poème « Voilà le lapin » par répétition des 2 premières lignes, en associant un geste pour mimer le lapin.",
        ["Réciter le poème entier une fois avec expression","Expliquer le sens des mots (lapin, sauter, oreilles...)","Répéter la 1ère ligne en chœur, 5 fois","Répéter la 2ème ligne en chœur, 5 fois","Enchaîner les 2 lignes ensemble","Réciter avec le geste des oreilles du lapin (mains sur la tête)"],
        ["Récite la première ligne du poème. → Corrigé : ligne récitée conforme au texte appris","Combien de lignes connais-tu ? → Corrigé : 2 lignes","De quel animal parle ce poème ? → Corrigé : le lapin","Récite les 2 lignes avec le bon geste. → Corrigé : texte + geste conformes à ce qui a été appris"]),

      m("EPS","Déplacement des animaux : saut",
        "Explorer le saut à pieds joints en imitant le déplacement de certains animaux (lapin, grenouille), en lien avec le poème « Voilà le lapin » de la semaine.",
        ["Montrer comment le lapin se déplace : petits sauts à pieds joints","Montrer comment la grenouille se déplace : sauts accroupis, mains au sol","Pratiquer les sauts de lapin en ligne sur une distance de 5 mètres","Pratiquer les sauts de grenouille en ligne","Jeu : la maîtresse annonce un animal, les enfants sautent comme lui","Retour au calme : marche lente"],
        ["Saute comme un lapin jusqu'au plot. → Corrigé : déplacement en sauts à pieds joints réalisé","Saute comme une grenouille. → Corrigé : sauts accroupis avec appui des mains réalisés","Quel animal saute avec ses pattes arrière ? → Corrigé : le lapin, la grenouille","Combien de sauts te faut-il pour arriver au plot ? → Corrigé : nombre réel compté ensemble"]),

      m("DESSIN","Un papillon",
        "Dessiner un papillon (2 ailes symétriques, un corps allongé) en réinvestissant le vocabulaire des insectes vu en Environnement.",
        ["Observer une image de papillon","Tracer le corps : un trait vertical allongé au milieu de la feuille","Tracer une aile ronde de chaque côté du corps","Ajouter les antennes en haut du corps","Colorier les ailes avec des couleurs vives et des motifs (points, rayures)"],
        ["Combien d'ailes a un papillon ? → Corrigé : 2 (une de chaque côté)","Dessine un papillon. → Corrigé : corps allongé, 2 ailes symétriques, antennes présentes","Quelle couleur as-tu choisie pour les ailes ? → Corrigé : réponse libre","Montre les antennes de ton papillon. → Corrigé : antennes pointées"]),

      m("TRAVAUX MANUELS","Peinture au doigt",
        "Explorer la peinture au doigt (empreintes de doigts pour former des insectes) en développant la motricité fine des doigts et la précision du geste.",
        ["Présenter la peinture et les règles d'usage (un doigt, une couleur à la fois)","Montrer le geste : tremper le bout du doigt, tamponner sur la feuille","Réaliser des empreintes rondes pour former le corps d'une fourmi ou d'une coccinelle","Ajouter des pattes et antennes au crayon une fois la peinture sèche","Laisser sécher et se laver les mains"],
        ["Montre comment tu fais une empreinte avec ton doigt. → Corrigé : doigt trempé puis tamponné, empreinte nette","Que dessines-tu avec tes empreintes ? → Corrigé : un insecte (fourmi, coccinelle) reconnaissable","Que fais-tu avant de changer de couleur ? → Corrigé : se laver ou essuyer le doigt","Montre ta production terminée. → Corrigé : production présentée"]),

      m("CONTE","Samy fetsy — découverte",
        "Découvrir ce nouveau conte traditionnel malagasy par l'écoute active, l'observation d'images séquentielles, et l'identification des personnages principaux.",
        ["Présenter les images du conte une par une, dans l'ordre","Raconter le conte avec expression et voix différenciées par personnage","Nommer les personnages principaux du conte","Poser 2-3 questions de compréhension immédiate","Faire répéter une réplique clé d'un personnage"],
        ["Comment s'appelle ce conte ? → Corrigé : Samy fetsy","Que se passe-t-il au début du conte ? → Corrigé : résumé oral conforme au début de l'histoire racontée","Montre l'image du personnage rusé. → Corrigé : bonne image pointée","As-tu aimé ce conte ? Pourquoi ? → Corrigé : réponse personnelle justifiée"])

    ],
  },

  {
    n:2, dates:"08/02/2027 – 12/02/2027",
    theme:"ÉVALUATION — Bilan du mois de Janvier",
    matieres:[

      m("LECTURE","Évaluation — les sons b, p, v et les syllabes correspondantes",
        "Vérifier individuellement la reconnaissance des sons b, p, v vus en janvier et la lecture des syllabes formées avec ces consonnes, par un passage oral court avec chaque enfant.",
        ["Faire passer chaque enfant individuellement pendant que les autres travaillent en autonomie (coloriage calme)","Présenter une carte-lettre (b, p, v) et demander le son","Présenter 3 syllabes (ba, pi, vo) à lire","Noter la réussite sur une grille simple (acquis / en cours / non acquis)"],
        ["Quel son fait cette lettre ? (montrer b) → Corrigé : [b]","Quel son fait cette lettre ? (montrer v) → Corrigé : [v]","Lis ces 3 syllabes : ba — pi — vo → Corrigé : lecture correcte des 3 syllabes","Entoure toutes les lettres « p » dans cette ligne : b p v p b p → Corrigé : les 3 « p » entourés"]),

      m("VAKITENY","Fanamarinana — ny feo b, p, v",
        "Vérifier individuellement la reconnaissance des sons b, p, v en malagasy et la lecture des syllabes correspondantes.",
        ["Faire passer chaque enfant individuellement pendant que les autres travaillent en autonomie","Présenter une carte-lettre (b, p, v) et demander le son","Présenter la syllabe « ba » à lire","Noter la réussite sur une grille simple"],
        ["Inona ny feon'ity litera ity ? (asehoy ny b) → Valiny : [b]","Inona ny feon'ity litera ity ? (asehoy ny v) → Valiny : [v]","Vakio ity : ba → Valiny : [ba]","Tsongò ny litera « p » amin'ity andalana ity : b p v p b → Valiny : ny « p » roa voatsongo"]),

      m("ÉCRITURE","Évaluation — tracer b, p, v et les syllabes correspondantes",
        "Vérifier le tracé propre des lettres b, p, v et leur assemblage en syllabe, sur une fiche de tracé individuelle.",
        ["Distribuer une fiche avec des lignes préréglées pour chaque lettre","Faire tracer b, p, v chacun 2 fois","Faire tracer la syllabe « ba » attachée","Circuler et corriger la tenue du crayon si besoin"],
        ["Trace la lettre b. → Corrigé : tracé conforme au modèle appris, boucle et canne bien formées","Trace la lettre p. → Corrigé : canne descendante et boucle bien formées","Écris la syllabe « ba ». → Corrigé : b et a correctement attachés et lisibles","Trace la lettre v. → Corrigé : deux traits obliques formant un v net"]),

      m("LANGAGE","Évaluation — vocabulaire et récit de « Le petit chat perdu »",
        "Vérifier la mémorisation du vocabulaire de l'histoire suivie depuis le début du mois et la capacité à en restituer les grandes lignes.",
        ["Rappel collectif rapide de l'histoire","Interroger chaque enfant sur 1 mot de vocabulaire (perdu, chercher, retrouver)","Demander un résumé oral court de l'histoire jusqu'ici"],
        ["Que cherche le petit chat ? → Corrigé : sa maison / son chemin","Cite un mot qui dit qu'on ne trouve plus quelque chose. → Corrigé : perdu","Raconte l'histoire en 2-3 phrases. → Corrigé : récit couvrant les épisodes déjà vus","Comment se sent le chat quand il est perdu ? → Corrigé : triste, inquiet"]),

      m("PRE-MATH","Évaluation — l'addition",
        "Vérifier la compréhension de l'addition introduite fin janvier et consolidée cette semaine par une manipulation concrète simple.",
        ["Présenter 2 petites collections d'objets","Demander de les réunir et de compter le total","Faire dire l'addition correspondante"],
        ["Additionne 3 jetons et 2 jetons. → Corrigé : 5","Que veut dire additionner ? → Corrigé : réunir deux collections pour en faire une seule","4 + 1 = ? → Corrigé : 5","Pose 2 billes puis 3 billes et compte le total. → Corrigé : 5 billes"]),

      m("MATHS","Évaluation — compter jusqu'à 30",
        "Vérifier individuellement la récitation de la suite numérique jusqu'à 30 et la reconnaissance de quelques nombres isolés.",
        ["Faire réciter la suite de 0 à 30","Montrer des cartes-nombres isolées (15, 22, 30) à identifier","Noter les réussites sur une grille simple"],
        ["Récite les nombres de 0 à 30. → Corrigé : suite complète et correcte","Quel est ce nombre ? (montrer 22) → Corrigé : vingt-deux","Quel nombre vient juste après 29 ? → Corrigé : 30","Compte ces 18 jetons un par un. → Corrigé : comptage exact jusqu'à 18"]),

      m("MORALE","Évaluation — bilan des règles de vie et de politesse",
        "Vérifier par observation et questions orales l'appropriation des règles de vie et de politesse travaillées en janvier.",
        ["Observer le comportement des enfants ce matin (salutations, partage)","Poser des questions orales individuelles","Valoriser les bons comportements observés"],
        ["Que dis-tu en arrivant le matin ? → Corrigé : bonjour","Que fais-tu si un camarade te prête un jouet ? → Corrigé : je dis merci","Que fais-tu si tu bouscules quelqu'un par accident ? → Corrigé : je dis pardon / je m'excuse","Pourquoi faut-il partager avec ses camarades ? → Corrigé : pour bien vivre ensemble"]),

      m("ENVIRONNEMENT","Évaluation — les légumes et les animaux",
        "Vérifier la connaissance du vocabulaire des légumes et des animaux vus en janvier par un jeu de reconnaissance d'images.",
        ["Montrer 6 images mélangées (légumes et animaux)","Demander de nommer chaque image","Demander de classer par catégorie (légume / animal)"],
        ["Comment s'appelle ce légume ? (montrer une carotte) → Corrigé : une carotte","Comment s'appelle cet animal ? (montrer une vache) → Corrigé : une vache","Classe ces images en 2 tas : légumes et animaux. → Corrigé : tri correct réalisé","Cite 3 légumes que tu connais. → Corrigé : 3 parmi carotte, tomate, chou, brède (réponses acceptées)"]),

      m("ANGLAIS","Révision — the vegetables, the animals",
        "Réviser le vocabulaire anglais vu en janvier en écho au thème d'Environnement (légumes, animaux), par un jeu de flashcards mélangées.",
        ["Mélanger les flashcards des légumes et des animaux","Piocher et nommer chaque carte en anglais","Jeu « Point to the... » avec le vocabulaire du mois"],
        ["What is this? (montrer une carotte) → Corrigé : carrot","What is this? (montrer une vache) → Corrigé : cow","Point to the tomato. → Corrigé : la tomate pointée","How do you say « le chien » in English? → Corrigé : dog"]),

      m("CHANT","Révision des chansons de janvier",
        "Faire chanter les chansons apprises en janvier pour consolider la mémorisation avant de découvrir de nouvelles chansons en février.",
        ["Chanter la ou les chansons du mois avec les gestes","Faire chanter des petits groupes volontaires","Valoriser les progrès de mémorisation"],
        ["Chante la chanson apprise en janvier. → Corrigé : chanson chantée conformément aux paroles apprises","Montre le geste qui va avec le refrain. → Corrigé : geste conforme à celui appris en classe","Chante en petit groupe. → Corrigé : performance collective évaluée","Quelle chanson préfères-tu ? → Corrigé : réponse personnelle"]),

      m("RECITATION","Révision des poèmes de janvier",
        "Faire réciter les poèmes appris en janvier pour consolider la mémorisation.",
        ["Réciter chaque poème avec le groupe","Faire réciter individuellement les volontaires","Valoriser les progrès de chacun"],
        ["Récite le poème appris en janvier. → Corrigé : texte récité conforme à ce qui a été appris","De quoi parle ce poème ? → Corrigé : réponse conforme au thème du poème appris","Combien de lignes connais-tu ? → Corrigé : nombre réel de lignes apprises","Récite devant la classe. → Corrigé : texte récité conforme à ce qui a été appris"]),

      m("EPS","Révision — les mouvements appris en janvier",
        "Enchaîner les mouvements travaillés en janvier sous forme de petit parcours ludique de révision.",
        ["Installer un parcours reprenant les mouvements du mois","Faire passer chaque enfant sur le parcours complet","Encourager et valoriser chaque passage"],
        ["Réalise le parcours du début à la fin. → Corrigé : parcours complet réalisé","Quel mouvement as-tu préféré ? → Corrigé : réponse personnelle","Montre le mouvement que tu maîtrises le mieux. → Corrigé : mouvement réalisé correctement","Que fait-on au signal de la maîtresse ? → Corrigé : réponse conforme à la consigne apprise"]),

      m("DESSIN","Révision — un légume, un animal",
        "Faire choisir à chaque enfant de redessiner un légume ou un animal vu en janvier, pour consolider les formes apprises.",
        ["Rappeler les légumes et animaux dessinés en janvier","Laisser chaque enfant choisir et redessiner un sujet","Exposer les productions"],
        ["Quelle forme utilises-tu pour dessiner une carotte ? → Corrigé : un triangle allongé","Dessine un animal de ton choix vu en janvier. → Corrigé : production reconnaissable et coloriée","Quelle couleur as-tu utilisée ? → Corrigé : réponse libre","Montre ton dessin terminé. → Corrigé : production présentée"]),

      m("TRAVAUX MANUELS","Révision — les techniques de janvier",
        "Proposer un atelier au choix parmi les techniques travaillées en janvier pour que chaque enfant consolide celle où il a le plus besoin de pratique.",
        ["Installer plusieurs ateliers reprenant les techniques du mois","Faire tourner les enfants par petits groupes","Observer et valoriser les progrès de motricité fine"],
        ["Montre ta prise de crayon ou de pinceau. → Corrigé : prise adaptée observée","Termine ta production de l'atelier choisi. → Corrigé : production présentée","Quel atelier as-tu préféré ce mois-ci ? → Corrigé : réponse personnelle","Range ton matériel après usage. → Corrigé : matériel rangé correctement"]),

      m("CONTE","Révision — I Trimobe sy i Fara",
        "Faire raconter le conte du mois « I Trimobe sy i Fara » dans ses grandes lignes par la classe, en groupe, pour clore le mois avant de découvrir un nouveau conte en février.",
        ["Remettre les images du conte dans l'ordre en grand groupe","Raconter le conte à plusieurs voix (un enfant par passage)","Discuter une dernière fois de la morale du conte"],
        ["Comment s'appellent les personnages principaux ? → Corrigé : Trimobe et Fara","Raconte le début du conte. → Corrigé : résumé oral fidèle au début de l'histoire","Raconte la fin du conte. → Corrigé : résumé oral fidèle à la fin de l'histoire","Quelle est la leçon de ce conte ? → Corrigé : réponse cohérente avec la morale du conte"])

    ],
  },

  {
    n:3, dates:"15/02/2027 – 19/02/2027",
    theme:"JOURNÉE DES ÉCOLES — Préparatifs et fête inter-écoles",
    matieres:[

      m("LECTURE","Lecture de mots liés à la fête : école, ami, fête",
        "Réinvestir les lettres et syllabes déjà connues (voyelles, l, r) pour lire des mots simples en lien avec l'événement de la Journée des écoles, dans un cadre festif et motivant.",
        ["Écrire au tableau des mots simples liés à la fête : école, ami, fête","Découper chaque mot en syllabes connues et les faire lire","Faire chercher les lettres déjà connues dans ces mots","Faire lire les mots en chœur puis individuellement","Coller ces mots sur les affiches de décoration de la classe"],
        ["Lis ce mot : ami → Corrigé : lecture correcte du mot","Retrouve la lettre l dans le mot « école ». → Corrigé : le l pointé dans école","Lis le mot affiché sur la banderole de la classe : fête → Corrigé : lecture correcte du mot","Cite un mot que tu as appris à lire pour la fête. → Corrigé : école, ami, fête (une réponse correcte acceptée)"]),

      m("VAKITENY","Vakiteny liés à la fête : sekoly, namana",
        "Réinvestir les syllabes malagasy déjà connues pour lire des mots simples en lien avec la Journée des écoles.",
        ["Manoratra ny teny « sekoly », « namana » eo amin'ny bara","Manasaraka ny teny ho vaninteny efa fantatra","Mamaky ireo teny am-pitambarana ary tokana","Mametaka ireo teny eo amin'ny takela-panentanana ho an'ny fety"],
        ["Vakio ity teny ity : namana → Valiny : vakiana marina ny teny","Tadiavo ny litera « l » ao amin'ny teny « sekoly ». → Valiny : ny « l » voatondro","Vakio ny teny voasoratra eo amin'ny takelaka : sekoly → Valiny : vakiana marina","Tononyo teny iray efa nianaranao ho an'ny fety. → Valiny : sekoly, namana (valiny iray raisina)"]),

      m("ÉCRITURE","Tracer des lettres pour les affiches et banderoles de la fête",
        "Réinvestir le tracé des lettres et syllabes déjà connues en les mettant au service d'un objectif concret et motivant : réaliser les affiches de la classe pour la Journée des écoles.",
        ["Choisir avec les enfants les mots à écrire sur la banderole (ex : Bienvenue, École)","Tracer au brouillon chaque lettre du mot en gros format","Reproduire le tracé sur la banderole ou l'affiche en couleur","Vérifier la tenue du crayon et la taille régulière des lettres","Décorer les lettres tracées"],
        ["Trace la lettre du mot que tu écris sur l'affiche. → Corrigé : tracé conforme au modèle appris","Combien de lettres a le mot que tu écris ? → Corrigé : nombre réel de lettres comptées","Montre la lettre que tu préfères sur ton affiche. → Corrigé : lettre pointée et nommée correctement","Ton affiche est-elle lisible ? → Corrigé : évaluation visuelle de la lisibilité"]),

      m("LANGAGE","Présenter son école et accueillir les visiteurs",
        "Préparer des phrases simples pour se présenter et accueillir les enfants des autres écoles lors de la Journée des écoles, en travaillant l'oral en situation réelle de communication.",
        ["Apprendre à dire son prénom et le nom de sa classe (12ème)","Apprendre la phrase d'accueil : « Bienvenue dans notre école »","Jeu de rôle : accueillir un camarade qui joue le visiteur","S'entraîner à présenter un dessin ou une activité de la classe","Répéter en grand groupe avant le jour de la fête"],
        ["Comment accueilles-tu un visiteur ? → Corrigé : « Bienvenue dans notre école »","Dis ton prénom et le nom de ta classe. → Corrigé : prénom réel + « 12ème »","Présente un dessin de la classe à un visiteur imaginaire. → Corrigé : présentation orale simple réalisée","Que dis-tu pour dire au revoir à un visiteur ? → Corrigé : « au revoir », « à bientôt »"]),

      m("PRE-MATH","Compter et grouper le matériel de la fête par 2",
        "Réinvestir le comptage et le groupement par 2 dans un contexte concret et motivant : préparer le matériel (ballons, fanions) pour la Journée des écoles.",
        ["Compter les ballons à gonfler pour la décoration","Grouper les fanions par 2 pour les répartir également entre les enfants","Vérifier qu'il y a autant de fanions que d'enfants dans chaque groupe","Réunir 2 petits tas de décorations et compter le total (réinvestir l'addition)"],
        ["Groupe ces 8 fanions par 2. Combien de paires obtiens-tu ? → Corrigé : 4 paires","Y a-t-il autant de ballons que d'enfants dans ton groupe ? → Corrigé : oui / non selon le comptage réel","Additionne 3 fanions rouges et 2 fanions jaunes. → Corrigé : 5 fanions","Compte le nombre de ballons prêts pour la fête. → Corrigé : nombre réel compté ensemble"]),

      m("MATHS","Compter les décorations et invités de la fête",
        "Réinvestir le comptage jusqu'à 30 et la distinction pair/impair dans un contexte concret lié à l'organisation de la Journée des écoles.",
        ["Compter le nombre de chaises installées pour les invités","Compter le nombre de dessins accrochés sur le mur de décoration","Dire si ce nombre est pair ou impair","Réciter la suite des nombres jusqu'à 30 pendant qu'on range le matériel"],
        ["Compte ces 24 chaises. → Corrigé : 24","Ce nombre est-il pair ou impair : 24 ? → Corrigé : pair","Récite les nombres de 0 à 30 pendant qu'on range. → Corrigé : suite correcte récitée","Combien de dessins sont accrochés sur le mur (compter ensemble) ? → Corrigé : nombre réel compté"]),

      m("MORALE","L'entraide et le respect des autres écoles",
        "Développer l'esprit de coopération pour préparer la fête ensemble, et le respect envers les enfants des autres écoles qui viendront (ou que l'on visitera).",
        ["Discuter : pourquoi prépare-t-on cette journée tous ensemble ?","Répartir les tâches de préparation en petits groupes solidaires","Discuter du respect à avoir envers les visiteurs d'une autre école","Jeu de rôle : bien accueillir un enfant d'une autre école","Valoriser l'entraide observée pendant les préparatifs"],
        ["Pourquoi faut-il s'entraider pour préparer la fête ? → Corrigé : pour que tout soit prêt à temps et que ce soit une réussite pour tous","Comment dois-tu te comporter avec un enfant d'une autre école ? → Corrigé : avec respect et politesse","Que fais-tu si un camarade a besoin d'aide pour la décoration ? → Corrigé : je l'aide","Cite une tâche que tu as faite pour préparer la fête. → Corrigé : réponse personnelle conforme à l'activité réellement menée"]),

      m("ENVIRONNEMENT","L'école : ses espaces et son organisation pour la fête",
        "Observer et nommer les différents espaces de l'école (cour, classe, préau) en réfléchissant à comment les organiser pour accueillir la Journée des écoles.",
        ["Faire le tour de l'école et nommer chaque espace : la cour, la classe, le préau","Discuter : où installer les décorations ? où accueillir les invités ?","Observer les décorations mises en place par les autres classes","Nommer le matériel utilisé pour décorer (banderoles, ballons, fanions)"],
        ["Comment s'appelle l'endroit où l'on joue à l'école ? → Corrigé : la cour","Où sont installées les décorations pour la fête ? → Corrigé : réponse conforme à l'observation réelle (cour, préau, classe)","Cite un objet utilisé pour décorer l'école. → Corrigé : banderole, ballon, fanion (une réponse acceptée)","Montre un espace de l'école que tu as aidé à décorer. → Corrigé : espace réel pointé ou nommé"]),

      m("ANGLAIS","My school, my friends",
        "Introduire quelques mots et phrases d'accueil en anglais en lien avec la Journée des écoles, pour saluer d'éventuels visiteurs.",
        ["Apprendre « Welcome » et « my school »","Apprendre « my friend » en montrant un camarade","Jeu : saluer un camarade en anglais avec « Hello, welcome »","Chanson courte de bienvenue en anglais","Répéter en grand groupe avant le jour de la fête"],
        ["Say « Welcome ». → Corrigé : prononciation évaluée","How do you say « mon école » in English? → Corrigé : my school","Point to your friend. → Corrigé : un camarade pointé","Say « Hello, welcome » to a visitor. → Corrigé : phrase répétée correctement"]),

      m("CHANT","Présentation de la chanson « Inona indray no ndeha hatao »",
        "Répéter la chanson apprise en semaine 1 en vue de la présenter devant les autres écoles lors de la Journée des écoles, en travaillant une mise en scène simple.",
        ["Rappel du refrain et des couplets de la chanson","Répéter en chantant plus fort pour être entendu en public","Ajouter une petite mise en scène (se placer en ligne, gestes synchronisés)","Répétition générale devant la classe","Encourager chaque enfant à participer avec confiance"],
        ["Chante la chanson en entier avec les gestes. → Corrigé : chanson chantée conformément aux paroles et gestes appris","Où te places-tu pour la présentation ? → Corrigé : place réelle apprise en répétition","Chante assez fort pour être entendu au fond de la cour. → Corrigé : volume de voix adapté observé","Es-tu prêt pour présenter la chanson ? → Corrigé : réponse personnelle"]),

      m("RECITATION","Présentation du poème « Voilà le lapin »",
        "Répéter le poème appris en semaine 1 en vue de sa présentation publique lors de la Journée des écoles.",
        ["Rappel des 2 lignes apprises du poème","Répéter avec une voix claire et posée, adaptée à un public","Ajouter le geste des oreilles du lapin pendant la récitation","Répétition générale devant la classe, un enfant à la fois","Encourager et rassurer les enfants timides"],
        ["Récite le poème devant tes camarades. → Corrigé : texte récité conforme à ce qui a été appris","Récite avec le geste des oreilles du lapin. → Corrigé : texte et geste conformes","Parle assez fort pour être entendu de tous. → Corrigé : volume de voix adapté observé","Es-tu prêt à réciter devant un public ? → Corrigé : réponse personnelle"]),

      m("EPS","Jeux collectifs pour la Journée des écoles",
        "Préparer et pratiquer des jeux collectifs simples (relais, ronde) qui pourront être présentés ou joués avec les enfants des autres écoles lors de la fête.",
        ["Expliquer la règle d'un jeu de relais simple par équipes","Former des équipes et s'entraîner au relais","Pratiquer une ronde chantée à plusieurs classes","Insister sur les règles du fair-play et l'encouragement des autres","Répétition générale du jeu prévu pour la fête"],
        ["Cours ton tour de relais et passe le témoin à ton camarade. → Corrigé : relais réalisé correctement","Que fais-tu si ton équipe perd le jeu ? → Corrigé : féliciter l'équipe gagnante, ne pas se fâcher","Participe à la ronde en tenant la main de tes camarades. → Corrigé : participation active observée","Quelle règle du jeu dois-tu respecter ? → Corrigé : règle réelle du jeu expliquée en classe"]),

      m("DESSIN","Affiches et décorations pour la fête",
        "Dessiner des éléments de décoration (banderoles, fanions, affiches de bienvenue) pour embellir l'école en vue de la Journée des écoles.",
        ["Montrer des exemples d'affiches et de fanions décoratifs","Tracer un fanion : un triangle avec un motif","Tracer une affiche de bienvenue avec des lettres et un dessin simple","Colorier avec des couleurs vives et festives","Accrocher les productions dans la cour ou la classe"],
        ["Quelle forme utilises-tu pour un fanion ? → Corrigé : un triangle","Dessine une affiche de bienvenue. → Corrigé : lettres et dessin simple présents, coloriés","Quelle couleur as-tu choisie pour ton fanion ? → Corrigé : réponse libre","Montre ta décoration terminée. → Corrigé : production présentée"]),

      m("TRAVAUX MANUELS","Fabriquer des guirlandes et fanions pour la fête",
        "Fabriquer des décorations simples (guirlandes en papier, fanions) pour la Journée des écoles, en réinvestissant les techniques de pliage et de découpage déjà pratiquées.",
        ["Découper des bandes de papier de couleur","Assembler les bandes en chaîne pour former une guirlande (coller ou agrafer)","Plier et découper des triangles pour les fanions","Enfiler les fanions sur un fil","Accrocher les guirlandes et fanions dans la classe ou la cour"],
        ["Découpe une bande de papier bien droite. → Corrigé : découpage réalisé selon le trait, suffisamment droit","Assemble 2 anneaux de ta guirlande. → Corrigé : anneaux correctement collés ou agrafés ensemble","Montre ton fanion découpé en triangle. → Corrigé : forme triangulaire reconnaissable","Où accroche-t-on ta décoration ? → Corrigé : réponse conforme à l'endroit réellement choisi en classe"]),

      m("CONTE","Présenter le conte « Samy fetsy »",
        "Répéter le conte découvert en semaine 1 en vue de le présenter ou de le mimer devant les autres écoles lors de la Journée des écoles.",
        ["Rappel des personnages et du début du conte","Répartir les rôles pour une petite mise en scène du conte","Répéter les répliques principales de chaque personnage","Répétition générale devant la classe","Encourager chaque enfant à jouer son rôle avec confiance"],
        ["Quel rôle joues-tu dans la présentation du conte ? → Corrigé : rôle réellement attribué en classe","Répète la réplique de ton personnage. → Corrigé : réplique répétée fidèlement","Comment s'appelle le conte que tu présentes ? → Corrigé : Samy fetsy","Es-tu prêt à jouer devant un public ? → Corrigé : réponse personnelle"])

    ],
  },

  {
    n:4, dates:"22/02/2027 – 23/02/2027",
    theme:"Lettre s : syllabes sa-si-so-su-se · Soustraction · Nombres impairs 1 à 29 · La politesse à table",
    matieres:[

      m("LECTURE","La lettre s : son [s] et syllabes sa-si-so-su-se",
        "Introduire la consonne s par la méthode syllabique, en contraste avec le son du r vu en début de mois : isoler le son [s] à l'oral, puis le combiner avec les 5 voyelles déjà connues.",
        ["Montrer la lettre S en grand format au tableau","Prononcer le son [s] en insistant sur le sifflement de l'air entre les dents","Chercher des mots avec [s] : sac, souris, salade","Combiner s + a au tableau : « sa » — faire lire la syllabe","Combiner s + i, s + o, s + u, s + e : si, so, su, se","Faire lire la ligne de syllabes en chœur puis individuellement","Jeu : la maîtresse pointe une syllabe, l'enfant la lit"],
        ["Quel son fait la lettre s ? → Corrigé : [s]","Lis cette syllabe : sa → Corrigé : [sa]","Lis ces syllabes dans l'ordre : su — si — so → Corrigé : lecture correcte des 3 syllabes","Quelle syllabe obtient-on avec s + e ? → Corrigé : se"]),

      m("VAKITENY","La lettre s : premières syllabes en malagasy",
        "Introduire le son [s] en malagasy et former les premières syllabes avec les voyelles malagasy déjà connues.",
        ["Montrer la lettre S, prononcer [s]","Mots connus avec s : sira, sakafo, sary","Combiner s + a, s + i, s + o au tableau","Faire lire les syllabes en chœur","Jeu de lecture individuelle des syllabes"],
        ["Lis cette syllabe : sa → Corrigé : [sa]","Cite un mot malagasy qui commence par « sa ». → Corrigé : sira, sakafo, sary (une réponse correcte acceptée)","Lis : so — si → Corrigé : lecture correcte des 2 syllabes","Entoure les syllabes avec « s » : sa — ta — so — ra → Corrigé : sa, so entourés"]),

      m("ÉCRITURE","La lettre s : tracé en courbe",
        "Apprendre le tracé du s (une courbe unique en forme de serpent, sans lever le crayon), puis relier s aux voyelles pour écrire les syllabes sa-si-so-su-se.",
        ["Montrer le tracé : on part en haut à droite, on courbe vers la gauche, puis vers la droite en bas, comme un petit serpent","Tracer dans l'air avec le doigt en verbalisant le mouvement","Tracer sur l'ardoise à la craie","Tracer sur papier préligné avec un gros crayon","Comparer le tracé du s avec celui du r déjà connu","Tracer « sa » en attachant s et a","Tracer 3 syllabes différentes sur papier préligné"],
        ["Trace la lettre s sur ton ardoise. → Corrigé : courbe unique en forme de serpent, sans lever le crayon","La lettre s a-t-elle une canne comme le r ? → Corrigé : non, c'est une simple courbe","Écris la syllabe « su ». → Corrigé : s et u correctement attachés et lisibles","Trace 3 syllabes avec s (sa, so, se). → Corrigé : tracé des 3 syllabes conforme"]),

      m("LANGAGE","Le petit chat perdu — fin de l'histoire",
        "Conclure l'exploitation de l'histoire par une restitution orale complète en autonomie, en réinvestissant tout le vocabulaire vu depuis le début du mois.",
        ["Rappel des épisodes précédents à l'aide des images","Raconter la fin de l'histoire : le chat retrouve sa maison et sa famille","Reconstituer l'histoire entière à l'aide de 5 images dans l'ordre","Faire raconter l'histoire complète par un enfant volontaire avec l'aide des images","Discussion : « Que ferais-tu si tu trouvais un chat perdu ? »"],
        ["Range les 5 images de l'histoire dans le bon ordre. → Corrigé : ordre chronologique complet respecté","Raconte l'histoire du petit chat du début à la fin. → Corrigé : récit cohérent couvrant les étapes principales","Comment se termine l'histoire ? → Corrigé : le chat retrouve sa maison / sa famille","Que ferais-tu si tu trouvais un chat perdu ? → Corrigé : réponse personnelle justifiée"]),

      m("PRE-MATH","La soustraction : retirer des objets d'une collection",
        "Introduire la soustraction en miroir de l'addition consolidée en semaine 1, par la manipulation concrète : retirer des objets d'une collection et compter ce qu'il en reste.",
        ["Poser 5 jetons, en retirer 2 devant les enfants","Verbaliser : « 5 jetons, j'en enlève 2, il en reste 3 »","Refaire avec d'autres petites quantités (jusqu'à 10)","Écrire au tableau : 5 − 2 = 3, faire lire à voix haute","Comparer avec l'addition : l'addition réunit, la soustraction retire","Jeu : chaque enfant retire un nombre de jetons annoncé et compte le reste"],
        ["Tu as 6 billes, on t'en enlève 2. Combien en reste-t-il ? → Corrigé : 4","Que veut dire soustraire ? → Corrigé : retirer des objets d'une collection","5 − 1 = ? → Corrigé : 4","Pose 4 jetons, retires-en 3. Compte ce qu'il reste. → Corrigé : 1 jeton"]),

      m("MATHS","Les nombres impairs de 1 à 29",
        "Étendre la notion de nombre impair (vue en octobre pour 1 à 10) jusqu'à 29, en contraste avec les nombres pairs vus en semaine 1, par manipulation d'objets qui ne peuvent pas être rangés par 2 sans reste.",
        ["Rappel : les nombres pairs de 0 à 30 vus en semaine 1","Grouper 13 objets par 2 : il en reste 1 → nombre impair","Nommer la suite des nombres impairs jusqu'à 29","Colorier les cases impaires sur la bande numérique 0-30 (autre couleur que les pairs)","Jeu : la maîtresse montre un nombre de jetons, les enfants disent « pair » ou « impair »"],
        ["Récite la suite des nombres impairs de 21 à 29. → Corrigé : 21, 23, 25, 27, 29","Range ces 17 crayons par 2. Que remarques-tu ? → Corrigé : il en reste 1, donc 17 est impair","Ce nombre est-il pair ou impair : 27 ? → Corrigé : impair","Colorie les nombres impairs sur la bande 20 à 29. → Corrigé : 21, 23, 25, 27, 29 coloriés"]),

      m("MORALE","La politesse à table",
        "Apprendre les règles de politesse à table (attendre son tour, dire merci, ne pas parler la bouche pleine) par la démonstration et la mise en pratique lors du goûter en classe.",
        ["Discuter : que fait-on de bien ou de mal à table ?","Montrer les gestes attendus : s'asseoir correctement, attendre que tout le monde soit servi","Rappeler : dire merci quand on reçoit à manger","Rappeler : ne pas parler la bouche pleine","Mettre en pratique pendant le goûter de la classe","Valoriser les bons comportements observés"],
        ["Que dis-tu quand on te sert à manger ? → Corrigé : merci","Que fais-tu avant de manger si tout le monde n'est pas servi ? → Corrigé : j'attends que tout le monde soit servi","Peut-on parler la bouche pleine ? → Corrigé : non","Montre comment tu t'assieds correctement à table. → Corrigé : posture correcte observée pendant le goûter"]),

      m("ENVIRONNEMENT","Les astres",
        "Découvrir les principaux astres visibles (le soleil, la lune, les étoiles) par l'observation d'images et la distinction jour/nuit.",
        ["Observer des images du soleil, de la lune et des étoiles","Nommer chaque astre","Discuter : quel astre voit-on le jour ? quels astres voit-on la nuit ?","Associer chaque astre à un moment (jour/nuit)","Jeu : la maîtresse montre une image, les enfants nomment l'astre"],
        ["Comment s'appelle cet astre ? (montrer le soleil) → Corrigé : le soleil","Quel astre voit-on la nuit ? → Corrigé : la lune, les étoiles","Le soleil brille-t-il le jour ou la nuit ? → Corrigé : le jour","Cite 2 astres que tu connais. → Corrigé : 2 parmi soleil, lune, étoile"]),

      m("ANGLAIS","Moon - star - sun",
        "Introduire le vocabulaire anglais des astres en écho direct au thème d'Environnement de la semaine, par flashcards et répétition.",
        ["Flashcards : sun, moon, star","Répéter chaque mot 3 fois en montrant l'image","Jeu « Point to the... » : la maîtresse dit un mot, les enfants pointent l'image","Chanson courte reprenant les mots","Associer l'image anglaise au mot français déjà appris en Environnement"],
        ["What is this? (montrer le soleil) → Corrigé : sun","Point to the moon. → Corrigé : la lune pointée","How do you say « une étoile » in English? → Corrigé : a star","Repeat: « moon ». → Corrigé : prononciation évaluée"]),

      m("CHANT","Au clair de la lune",
        "Apprendre la chanson traditionnelle « Au clair de la lune » en écho au thème des astres vu en Environnement, en travaillant la mémorisation par répétition rythmée.",
        ["Chanter la chanson en entier une première fois, lentement","Expliquer les mots nouveaux (chandelle, plume)","Répéter le premier couplet en chœur, 3 fois","Ajouter des gestes correspondant aux paroles","Chanter par petits groupes","Repérer les mots qui riment"],
        ["Chante le premier couplet de « Au clair de la lune ». → Corrigé : couplet chanté conformément aux paroles apprises","De quel astre parle cette chanson ? → Corrigé : la lune","Montre le geste qui va avec la chanson. → Corrigé : geste conforme à celui appris en classe","Chante avec ton voisin. → Corrigé : performance en binôme évaluée"]),

      m("RECITATION","Les papillons",
        "Mémoriser progressivement le poème « Les papillons » par répétition des 2 premières lignes, en réinvestissant le thème des insectes vu en début de mois.",
        ["Réciter le poème entier une fois avec expression","Expliquer le sens des mots (papillon, voler, fleur...)","Répéter la 1ère ligne en chœur, 5 fois","Répéter la 2ème ligne en chœur, 5 fois","Enchaîner les 2 lignes ensemble","Réciter avec un geste des mains qui volent comme des ailes"],
        ["Récite la première ligne du poème « Les papillons ». → Corrigé : ligne récitée conforme au texte appris","Combien de lignes connais-tu ? → Corrigé : 2 lignes","De quel animal parle ce poème ? → Corrigé : le papillon","Récite les 2 lignes avec le geste des ailes. → Corrigé : texte + geste conformes à ce qui a été appris"]),

      m("EPS","Jeux",
        "Proposer des jeux collectifs libres et variés (jeu du loup, chat perché) pour développer la motricité globale et le respect des règles du jeu, après la semaine d'événement spécial.",
        ["Rappeler les règles d'un jeu collectif simple (le loup, chat perché)","Désigner le premier meneur du jeu","Jouer une première manche encadrée par l'enseignant","Faire tourner le rôle du meneur entre plusieurs enfants","Retour au calme : marche lente et respiration"],
        ["Explique la règle du jeu auquel tu viens de jouer. → Corrigé : règle réelle du jeu correctement expliquée","Que fais-tu quand tu es attrapé ? → Corrigé : réponse conforme à la règle du jeu joué","Respectes-tu ton tour dans le jeu ? → Corrigé : observation du comportement pendant le jeu","As-tu aimé ce jeu ? Pourquoi ? → Corrigé : réponse personnelle justifiée"]),

      m("DESSIN","Les astres",
        "Dessiner une scène nocturne avec le soleil, la lune et des étoiles, en réinvestissant le vocabulaire vu en Environnement.",
        ["Observer une image du ciel nocturne étoilé","Tracer un cercle avec des rayons pour le soleil","Tracer un croissant pour la lune","Ajouter des petites étoiles (formes simples) autour","Colorier avec des couleurs adaptées (jaune, blanc, bleu foncé pour le ciel)"],
        ["Quelle forme utilises-tu pour la lune ? → Corrigé : un croissant","Dessine un ciel avec le soleil, la lune et des étoiles. → Corrigé : les 3 astres reconnaissables et coloriés","Quelle couleur utilises-tu pour le ciel de nuit ? → Corrigé : bleu foncé, noir","Montre les étoiles de ton dessin. → Corrigé : étoiles pointées"]),

      m("TRAVAUX MANUELS","Coloriage",
        "Développer la préhension du crayon et le respect des contours par une activité de coloriage encadré (image liée au thème des astres).",
        ["Distribuer une image à colorier (le soleil, la lune et des étoiles)","Rappeler la prise du crayon (prise tripode si possible)","Montrer comment rester dans les contours","Choisir des couleurs adaptées (jaune pour le soleil, blanc/gris pour la lune)","Colorier en autonomie, l'enseignant circule pour aider","Exposer les productions"],
        ["Montre ta prise de crayon. → Corrigé : prise tripode observée (pouce, index, majeur)","As-tu colorié en restant dans les contours ? → Corrigé : évaluation visuelle du respect des contours","Quelle couleur as-tu utilisée pour le soleil ? → Corrigé : jaune, orange (une réponse acceptée)","Montre ton dessin colorié. → Corrigé : production présentée"]),

      m("CONTE","Samy fetsy — suite",
        "Poursuivre le conte découvert en semaine 1 en développant la compréhension de l'intrigue et en réinvestissant les personnages présentés lors de la Journée des écoles.",
        ["Rappel des personnages et du début de l'histoire","Raconter la suite du conte avec les images","Discuter : pourquoi les personnages sont-ils rusés (« fetsy ») ?","Faire répéter une réplique clé d'un personnage","Demander une prédiction simple sur la suite de l'histoire"],
        ["Que veut dire « fetsy » ? → Corrigé : rusé, malin","Répète ce que dit un des personnages. → Corrigé : réplique répétée fidèlement","Que va-t-il se passer selon toi ? → Corrigé : prédiction libre acceptée si cohérente avec l'histoire","Montre l'image qui correspond à ce que je viens de raconter. → Corrigé : bonne image pointée"])

    ],
  }

];

const MARS_12EME = [

  {
    n:1, dates:"01/03/2027 – 05/03/2027",
    theme:"Lettre j (Lecture/Écriture/Vakiteny) · Les animaux du cirque · Soustraction · Nombres 30 à 35 · Les moyens de transport",
    matieres:[

      m("LECTURE","La lettre j : son [ʒ] et syllabes ja-ji-jo-ju-je",
        "Introduire la dixième consonne du programme après l, t, d, n, m, b, p, v, r, s. Une fois le son [ʒ] isolé, le combiner immédiatement avec les 5 voyelles déjà connues (a, i, o, u, e) pour former de nouvelles syllabes, selon la méthode syllabique suivie depuis septembre.",
        ["Montrer la lettre J en grand format au tableau (majuscule et minuscule)","Prononcer le son [ʒ] en mots familiers : jupe, jardin, jouet","Comparer ce son avec les consonnes déjà connues (l, t, d, n, m, b, p, v, r, s)","Combiner j + a, j + i, j + o, j + u, j + e au tableau : ja, ji, jo, ju, je","Faire lire la ligne de syllabes en chœur puis individuellement","Jeu : la maîtresse pointe une syllabe, l'enfant la lit à voix haute","Chercher d'autres mots de la classe contenant le son [ʒ]"],
        ["Quel son fait la lettre j ? → Corrigé : [ʒ] (comme dans « jupe »)","Lis cette syllabe : ja → Corrigé : [ʒa]","Lis ces syllabes dans l'ordre : ju — ji — jo → Corrigé : lecture correcte des 3 syllabes","Entoure toutes les lettres j dans cette ligne : a j u j e j → Corrigé : les 3 « j » entourés"]),

      m("VAKITENY","La lettre j : premières syllabes en malagasy",
        "Introduire le son [ʒ] en malagasy à partir de mots familiers, puis former les premières syllabes avec les voyelles malagasy déjà connues (a, e, i, o).",
        ["Montrer la lettre J au tableau","Prononcer [ʒ] dans des mots connus : jiro, jamba, jery","Combiner j + a, j + e, j + i, j + o au tableau","Faire lire les syllabes en chœur puis individuellement","Jeu : « Tape dans tes mains si tu entends [ʒ] » sur une liste de mots dits par la maîtresse","Récapitulatif : 3 mots malagasy avec [ʒ]"],
        ["Quel son fait cette lettre ? (montrer j) → Corrigé : [ʒ]","Cite un mot malagasy avec le son [ʒ]. → Corrigé : jiro, jamba, jery (une réponse correcte acceptée)","Lis cette syllabe : jo → Corrigé : [ʒo]","Entoure les « j » dans cette ligne : a j i j o u → Corrigé : les 2 « j » entourés"]),

      m("ÉCRITURE","La lettre j : point au-dessus et jambage sous la ligne",
        "Apprendre le tracé de la lettre j : une canne qui descend sous la ligne d'écriture avec un petit crochet, surmontée d'un point. Comparer avec le p déjà connu, qui descend aussi sous la ligne mais sans point.",
        ["Montrer le tracé au tableau : on part de la ligne, on descend tout droit sous la ligne, petit crochet, puis on place le point au-dessus","Tracer dans l'air en verbalisant « je descends, je fais le crochet, je mets le point »","Comparer avec la lettre p (qui descend aussi sous la ligne, mais sans point)","Tracer sur l'ardoise à la craie","Tracer sur papier préligné en respectant l'espace sous la ligne","Tracer la syllabe « ja » en attachant j et a","Tracer 3 syllabes différentes avec j sur une même ligne"],
        ["Trace la lettre j sur ton ardoise. → Corrigé : jambage sous la ligne, crochet, point placé au-dessus","Quelle lettre descend sous la ligne mais n'a pas de point : j ou p ? → Corrigé : p","Écris la syllabe « ja ». → Corrigé : j et a correctement attachés et lisibles","Trace 3 syllabes avec j (ji, jo, ju). → Corrigé : tracé des 3 syllabes conforme, point présent sur chaque j"]),

      m("LANGAGE","Les animaux du cirque — découverte de l'histoire",
        "Introduire une nouvelle histoire qui accompagnera la classe plusieurs mois : « Les animaux du cirque ». Installer le vocabulaire de base (le cirque, le dompteur, le lion, l'éléphant, le singe) et la structure sujet-verbe-complément.",
        ["Raconter l'histoire avec des images séquentielles (arrivée au cirque, présentation des animaux, le spectacle)","Nommer le vocabulaire nouveau : le cirque, le dompteur, le lion, l'éléphant, le singe","Mimer un animal du cirque au choix de l'enfant","Répéter la phrase clé : « Les animaux font un spectacle au cirque »","Poser 3 questions de compréhension simples après l'écoute","Jeu de rôle : un enfant joue le dompteur, un autre un animal"],
        ["Où se passe l'histoire ? → Corrigé : au cirque","Cite 2 animaux du cirque. → Corrigé : lion, éléphant, singe (2 parmi ces réponses)","Que fait le dompteur ? → Corrigé : il présente / dirige les animaux","Mime l'animal de ton choix dans l'histoire. → Corrigé : mime reconnaissable d'un animal cité"]),

      m("PRE-MATH","La soustraction : enlever des objets d'une collection",
        "Réinvestir la soustraction consolidée fin février, en manipulant concrètement une collection d'objets dont on retire une partie, avant de passer à l'écriture symbolique dans les mois suivants.",
        ["Rappel : poser 5 jetons sur la table","Enlever 2 jetons devant les enfants : « j'enlève 2 »","Faire compter ce qu'il reste : 3 jetons","Refaire l'exercice avec d'autres quantités et d'autres enfants","Verbaliser : « 5 moins 2, il reste 3 »","Jeu : chaque enfant reçoit des jetons, en enlève un nombre annoncé, compte le reste"],
        ["J'ai 6 billes, j'en enlève 2. Combien en reste-t-il ? → Corrigé : 4","J'ai 4 crayons, j'en enlève 1. Combien en reste-t-il ? → Corrigé : 3","Enlève 3 jetons parmi tes 7 jetons. Combien en reste-t-il ? → Corrigé : 4","Que signifie « enlever » dans une soustraction ? → Corrigé : retirer une partie de la collection de départ"]),

      m("MATHS","Les nombres de 30 à 35",
        "Étendre le comptage au-delà de 30 (acquis en février) en introduisant un à un les nombres 31, 32, 33, 34, 35, par comptage d'objets groupés en dizaines et unités.",
        ["Rappel : compter jusqu'à 30 en groupant par dizaines","Ajouter 1 jeton à une collection de 30 : « 30 et encore 1, ça fait 31 »","Continuer un par un jusqu'à 35 avec des jetons","Réciter la suite 30, 31, 32, 33, 34, 35","Écrire ces nombres au tableau et les faire repérer sur une bande numérique","Jeu : la maîtresse dit un nombre entre 30 et 35, l'enfant montre la quantité correspondante en jetons"],
        ["Récite la suite des nombres de 30 à 35. → Corrigé : 30, 31, 32, 33, 34, 35","Quel nombre vient juste après 32 ? → Corrigé : 33","Montre 34 jetons. → Corrigé : quantité de 34 jetons correctement comptée","Quel nombre vient juste avant 35 ? → Corrigé : 34"]),

      m("MORALE","Éviter les accidents dans la cour de récréation",
        "Faire acquérir les règles de sécurité de base dans la cour (ne pas courir n'importe où, ne pas pousser, attention aux escaliers) pour prévenir les chutes et blessures, en écho au poème de sécurité vu en Récitation cette même semaine.",
        ["Discuter des accidents qui peuvent arriver dans la cour (chute, bousculade, collision)","Montrer les bons comportements : marcher dans les escaliers, ne pas pousser ses camarades","Jeu de rôle : mimer une situation dangereuse puis la bonne réaction","Établir 3 règles simples de la cour avec la classe","Vérifier au quotidien pendant la récréation","Chanter ou réciter une phrase-rappel avant la sortie en récréation"],
        ["Que ne faut-il pas faire dans les escaliers ? → Corrigé : courir, pousser, sauter les marches","Que fais-tu si tu vois un camarade tomber ? → Corrigé : je préviens la maîtresse, je ne le laisse pas seul","Cite une règle de sécurité de la cour. → Corrigé : ne pas courir près des escaliers / ne pas pousser (une réponse correcte acceptée)","Pourquoi ne faut-il pas courir partout dans la cour ? → Corrigé : pour éviter de tomber ou de bousculer quelqu'un"]),

      m("ENVIRONNEMENT","Les moyens de transport",
        "Identifier et nommer les principaux moyens de transport (voiture, vélo, avion, bateau, train) et les classer selon leur milieu de déplacement (terre, air, eau).",
        ["Montrer des images de voiture, vélo, avion, bateau, train","Nommer chaque moyen de transport","Trier les images : transport terrestre / aérien / maritime","Discuter : « Comment viens-tu à l'école ? »","Jeu : la maîtresse montre une image, les enfants nomment le transport et son milieu","Associer chaque transport à l'image correspondante sur une affiche"],
        ["Comment s'appelle ce moyen de transport ? (montrer un avion) → Corrigé : un avion","Cet avion se déplace-t-il sur terre, dans l'air ou sur l'eau ? → Corrigé : dans l'air","Cite un moyen de transport qui roule sur la route. → Corrigé : voiture, vélo (une réponse correcte acceptée)","Comment viens-tu à l'école ? → Corrigé : réponse personnelle nommant un moyen de transport réel"]),

      m("ANGLAIS","Means of transport",
        "Reprendre le vocabulaire des moyens de transport vu en Environnement et l'introduire en anglais par flashcards et jeu de correspondance.",
        ["Flashcards : car, bike, plane, boat, train","Répéter chaque mot 3 fois en montrant l'image","Jeu « Point to the... » avec les flashcards mélangées","Chanson courte reprenant les mots de transport","Associer l'image anglaise au mot français appris en Environnement"],
        ["What is this? (montrer un bateau) → Corrigé : boat","Point to the car. → Corrigé : la voiture pointée","How do you say « avion » in English? → Corrigé : plane","Repeat: « train ». → Corrigé : prononciation évaluée"]),

      m("CHANT","Ny mandeha — découverte",
        "Apprendre une chanson malagasy sur les différentes façons de se déplacer (à pied, en voiture, en charrette), en écho au thème des transports vu en Environnement.",
        ["Chanter la chanson en entier une première fois, lentement","Expliquer les mots nouveaux du refrain","Répéter le refrain en chœur, 3 fois","Ajouter des gestes correspondant à chaque moyen de déplacement cité","Chanter par petits groupes","Repérer les mots qui riment"],
        ["Chante le refrain de « Ny mandeha ». → Corrigé : refrain chanté conformément aux paroles apprises","Cite un moyen de se déplacer cité dans la chanson. → Corrigé : citer 1 élément du texte de la chanson","Montre le geste qui correspond au refrain. → Corrigé : geste conforme à celui appris en classe","Chante avec ton voisin en faisant les gestes. → Corrigé : performance en binôme évaluée"]),

      m("RECITATION","Tandremo ny loza — mémorisation des 2 premières lignes",
        "Mémoriser progressivement le poème « Tandremo ny loza » (Attention au danger) en écho direct au thème de sécurité vu en Morale cette même semaine.",
        ["Réciter le poème entier une fois avec expression","Expliquer le sens des mots (tandremo = attention, loza = danger)","Répéter la 1ère ligne en chœur, 5 fois","Répéter la 2ème ligne en chœur, 5 fois","Enchaîner les 2 lignes ensemble","Réciter avec un geste d'alerte associé (main levée)"],
        ["Récite la première ligne du poème. → Corrigé : ligne récitée conforme au texte appris","Que veut dire « loza » ? → Corrigé : danger","Combien de lignes connais-tu ? → Corrigé : 2 lignes","Récite les 2 lignes avec le geste appris. → Corrigé : texte et geste conformes à ce qui a été appris"]),

      m("EPS","Tirer",
        "Développer la force des bras et la coordination par des exercices de traction (tirer une corde, un objet lourd) dans un cadre sécurisé.",
        ["Installer une corde lestée ou un objet léger à traîner","Montrer la posture : pieds ancrés, dos droit, tirer avec les 2 bras","Faire tirer individuellement sur une courte distance","Jeu de tir à la corde en 2 petites équipes","Alterner avec un temps de repos entre chaque passage","Retour au calme : étirement des bras"],
        ["Tire la corde jusqu'au plot. → Corrigé : distance parcourue en tirant sans lâcher","Comment dois-tu placer tes pieds pour bien tirer ? → Corrigé : pieds ancrés au sol, légèrement écartés","Avec combien de bras tires-tu la corde ? → Corrigé : les 2 bras","Dans quelle équipe as-tu tiré à la corde ? → Corrigé : réponse conforme à l'équipe réelle de l'enfant"]),

      m("DESSIN","Une voiture",
        "Dessiner une voiture en réinvestissant les formes géométriques déjà connues (un rectangle pour la carrosserie, deux ronds pour les roues), en lien avec le thème des transports.",
        ["Montrer une image de voiture simple","Décomposer la forme : un rectangle pour la carrosserie, 2 ronds pour les roues","Tracer le rectangle au tableau étape par étape","Ajouter les 2 roues rondes en dessous","Ajouter des fenêtres carrées et colorier"],
        ["Quelle forme utilises-tu pour la carrosserie de la voiture ? → Corrigé : un rectangle","Combien de roues dessines-tu ? → Corrigé : 2 (vue de côté)","Dessine une voiture. → Corrigé : rectangle + 2 roues rondes reconnaissables et coloriés","Montre les roues de ta voiture. → Corrigé : les 2 formes rondes pointées"]),

      m("TRAVAUX MANUELS","Fête de l'école — préparatifs collectifs",
        "Lancer un vrai projet collectif de fabrication de décorations pour la fête de l'école (guirlandes, fanions, banderole), réparti sur la semaine, pour développer le travail en groupe et la motricité fine.",
        ["Présenter le projet : décorer la classe pour la fête de l'école","Jour 1 : découper des bandes de papier colorées pour une guirlande","Jour 2 : assembler la guirlande en collant les bandes en chaîne","Jour 3 : découper et colorier des fanions triangulaires","Jour 4 : enfiler les fanions sur une ficelle pour former une banderole","Jour 5 : accrocher les décorations dans la classe et admirer le résultat collectif"],
        ["À quelle occasion prépares-tu ces décorations ? → Corrigé : la fête de l'école","Montre la guirlande que tu as aidé à fabriquer. → Corrigé : guirlande en chaîne présentée","Combien de fanions as-tu découpés ? → Corrigé : nombre réel de fanions réalisés par l'enfant","As-tu travaillé seul ou avec tes camarades pour ce projet ? → Corrigé : avec ses camarades, en groupe"]),

      m("CONTE","Vorona nifidy mpanjaka — découverte",
        "Découvrir ce nouveau conte traditionnel (« Les oiseaux qui ont choisi un roi ») par l'écoute active et l'identification des personnages principaux, en lien avec le thème des animaux amorcé en Langage.",
        ["Présenter les images du conte une par une, dans l'ordre","Raconter le conte : les oiseaux se réunissent pour choisir leur roi","Nommer les personnages principaux : les grands oiseaux qui se proposent, et le petit oiseau rusé","Poser 2-3 questions de compréhension immédiate","Faire répéter une réplique clé d'un personnage"],
        ["Pourquoi les oiseaux se réunissent-ils dans ce conte ? → Corrigé : pour choisir leur roi","Que se passe-t-il au début du conte ? → Corrigé : résumé oral conforme au début de l'histoire racontée","Montre l'image où les oiseaux se réunissent. → Corrigé : bonne image pointée","As-tu aimé ce conte ? Pourquoi ? → Corrigé : réponse personnelle justifiée"])

    ],
  },

  {
    n:2, dates:"08/03/2027 – 12/03/2027",
    theme:"EXAMEN ORAL — Évaluation orale individuelle du 2e trimestre (Lecture, Vakiteny, Nombres, Contes, Chants)",
    matieres:[

      m("LECTURE","Évaluation orale — les consonnes b, p, v, r, s, j et leurs syllabes",
        "Vérifier individuellement, par un passage oral court, la reconnaissance des consonnes apprises depuis janvier et la lecture des syllabes qu'elles forment avec les voyelles.",
        ["Faire passer chaque enfant individuellement pendant que les autres travaillent en autonomie (coloriage calme)","Présenter une carte-lettre (b, p, v, r, s, j) et demander le son","Présenter 4 syllabes mêlant ces consonnes (ba, vi, so, ja) à lire","Noter la réussite sur une grille simple (acquis / en cours / non acquis)"],
        ["Quel son fait cette lettre ? (montrer b) → Corrigé : [b]","Quel son fait cette lettre ? (montrer j) → Corrigé : [ʒ]","Lis ces syllabes : ba — vi — so → Corrigé : lecture correcte des 3 syllabes","Lis cette syllabe : ja → Corrigé : [ʒa]"]),

      m("VAKITENY","Fanadinana am-bava — ny litera b, p, v, r, s, j",
        "Vérifier individuellement la reconnaissance orale des consonnes malagasy apprises depuis janvier et la lecture de syllabes simples.",
        ["Faire passer chaque enfant individuellement","Présenter une carte-lettre (b, p, v, r, s, j) et demander le son","Présenter 2 syllabes malagasy (ba, sa) à lire","Noter la réussite sur une grille simple"],
        ["Inona ny feon'ity litera ity ? (asehoy ny v) → Valiny : [v]","Inona ny feon'ity litera ity ? (asehoy ny j) → Valiny : [ʒ]","Vakio ity : sa → Valiny : [sa]","Vakio ity : ba → Valiny : [ba]"]),

      m("ÉCRITURE","Évaluation orale — reconnaître et décrire les lettres b, p, v, r, s, j",
        "Vérifier oralement, sans production écrite cette semaine, que l'enfant reconnaît chaque lettre du trimestre et sait décrire verbalement son tracé (l'évaluation écrite du geste aura lieu la semaine suivante).",
        ["Faire passer chaque enfant individuellement","Montrer une lettre (b, p, v, r, s, j) et demander de la nommer","Demander de décrire à l'oral comment on la trace (« on monte, on descend... »)","Noter la réussite sur une grille simple"],
        ["Nomme cette lettre. (montrer p) → Corrigé : p","Décris comment on trace la lettre j. → Corrigé : on descend sous la ligne, petit crochet, point au-dessus","Quelle lettre a un point au-dessus : j ou p ? → Corrigé : j","Nomme cette lettre. (montrer r) → Corrigé : r"]),

      m("LANGAGE","Évaluation orale — vocabulaire et récit de « Le petit chat perdu »",
        "Vérifier la mémorisation du vocabulaire de l'histoire du trimestre et la capacité de l'enfant à en restituer les grandes lignes à l'oral, avant de clore ce récit au profit des « Animaux du cirque ».",
        ["Rappel collectif rapide de l'histoire","Interroger chaque enfant sur 1 mot de vocabulaire de l'histoire","Demander un résumé oral court de l'histoire"],
        ["Que cherche le personnage principal de l'histoire ? → Corrigé : son chat perdu","Comment se termine l'histoire ? → Corrigé : le chat est retrouvé","Raconte l'histoire en 2-3 phrases. → Corrigé : récit couvrant le début et la fin de l'histoire","As-tu aimé cette histoire ? Pourquoi ? → Corrigé : réponse personnelle justifiée"]),

      m("PRE-MATH","Évaluation orale — addition et soustraction avec objets",
        "Vérifier individuellement, par manipulation orale de petits objets, la maîtrise de l'addition et de la soustraction travaillées depuis janvier.",
        ["Faire passer chaque enfant individuellement avec des jetons","Poser une addition simple (3 jetons + 2 jetons)","Poser une soustraction simple (5 jetons, en enlever 2)","Noter la réussite sur une grille simple"],
        ["J'ai 3 jetons, j'en ajoute 2. Combien en ai-je maintenant ? → Corrigé : 5","J'ai 5 jetons, j'en enlève 2. Combien en reste-t-il ? → Corrigé : 3","Que signifie « ajouter » ? → Corrigé : mettre en plus, augmenter la quantité","Que signifie « enlever » ? → Corrigé : retirer une partie de la quantité de départ"]),

      m("MATHS","Évaluation orale — compter jusqu'à 30 et reconnaître pairs/impairs",
        "Vérifier individuellement la récitation des nombres jusqu'à 30 acquise ce trimestre, et la reconnaissance orale des nombres pairs et impairs.",
        ["Faire réciter la suite des nombres de 0 à 30","Montrer un nombre de jetons, demander « pair » ou « impair »","Demander de compter quelques jetons jusqu'à 30","Noter les réussites sur une grille simple"],
        ["Récite les nombres de 0 à 30. → Corrigé : suite complète et correcte de 0 à 30","Ce nombre est-il pair ou impair : 27 ? → Corrigé : impair","Ce nombre est-il pair ou impair : 24 ? → Corrigé : pair","Compte ces jetons à voix haute. (poser 18 jetons) → Corrigé : 18"]),

      m("MORALE","Évaluation orale — hygiène, habillement et sécurité",
        "Vérifier oralement l'appropriation des règles de vie apprises ce trimestre : hygiène corporelle, habillement selon la saison et sécurité dans la cour.",
        ["Poser des questions orales individuelles sur les 3 thèmes du trimestre","Observer la tenue et les mains des enfants ce matin","Valoriser les bons comportements observés"],
        ["Comment te laves-tu les mains ? → Corrigé : mouiller, savonner, frotter, rincer, sécher","Que fais-tu pour éviter de tomber dans la cour ? → Corrigé : je ne cours pas près des escaliers, je ne pousse pas","Que portes-tu s'il fait froid ? → Corrigé : un pull, une veste","Pourquoi faut-il respecter les règles de la cour ? → Corrigé : pour ne pas se blesser ni blesser les autres"]),

      m("ENVIRONNEMENT","Évaluation orale — vocabulaire des thèmes du trimestre",
        "Vérifier la connaissance du vocabulaire des différents thèmes vus depuis janvier par un jeu oral de reconnaissance d'images mélangées.",
        ["Montrer des images mélangées des thèmes du trimestre","Demander de nommer chaque image","Demander de justifier à quel thème appartient chaque image"],
        ["Comment s'appelle ce moyen de transport ? (montrer un vélo) → Corrigé : un vélo","À quel thème appartient cette image ? (montrer un vélo) → Corrigé : les moyens de transport","Nomme cet objet ou cet animal. (image au choix du trimestre) → Corrigé : nom conforme à l'image montrée","Cite un mot appris ce trimestre en Environnement. → Corrigé : toute réponse cohérente avec les thèmes vus depuis janvier"]),

      m("ANGLAIS","Évaluation orale — révision du vocabulaire du trimestre",
        "Réviser oralement le vocabulaire anglais appris ce trimestre par un jeu de flashcards mélangées.",
        ["Mélanger les flashcards des thèmes du trimestre","Piocher et demander de nommer chaque carte en anglais","Jeu « Point to the... » avec le vocabulaire du trimestre"],
        ["What is this? (montrer une voiture) → Corrigé : car","What is this? (montrer un avion) → Corrigé : plane","Point to the boat. → Corrigé : le bateau pointé","How do you say « vélo » in English? → Corrigé : bike"]),

      m("CHANT","Évaluation orale — chanter une chanson du trimestre",
        "Faire chanter individuellement, à chaque enfant, une chanson de son choix parmi celles apprises depuis janvier, pour vérifier la mémorisation.",
        ["Faire passer chaque enfant individuellement ou en tout petit groupe","Laisser l'enfant choisir une chanson apprise ce trimestre","Écouter et encourager, sans interrompre","Noter la réussite sur une grille simple (paroles, rythme)"],
        ["Chante une chanson apprise ce trimestre, au choix. → Corrigé : chant reconnaissable, paroles globalement conformes à une chanson apprise en classe","Montre un geste qui va avec cette chanson. → Corrigé : geste conforme à celui appris en classe","Pourquoi as-tu choisi cette chanson ? → Corrigé : réponse personnelle","Chante le refrain une deuxième fois avec le rythme. → Corrigé : rythme globalement respecté"]),

      m("RECITATION","Évaluation orale — réciter un poème du trimestre",
        "Faire réciter individuellement, à chaque enfant, un poème de son choix parmi ceux appris depuis janvier, pour vérifier la mémorisation et la diction.",
        ["Faire passer chaque enfant individuellement","Laisser l'enfant choisir un poème appris ce trimestre","Écouter la récitation complète sans interrompre","Noter la réussite sur une grille simple (mémorisation, diction)"],
        ["Récite un poème appris ce trimestre, au choix. → Corrigé : poème récité de façon reconnaissable et globalement fidèle au texte appris","De quoi parle ce poème ? → Corrigé : résumé conforme au sens du poème choisi","Récite-le une deuxième fois, en articulant bien. → Corrigé : diction plus claire à la 2ème tentative","Pourquoi aimes-tu ce poème ? → Corrigé : réponse personnelle"]),

      m("EPS","Évaluation orale — exécuter des consignes motrices du trimestre",
        "Vérifier individuellement, sur consigne verbale uniquement, la maîtrise des mouvements travaillés ce trimestre (courir, rouler, tirer, se déplacer dedans/dehors).",
        ["Donner une consigne orale à la fois (« cours jusqu'au plot », « tire la corde »)","Observer l'exécution de chaque enfant individuellement","Noter la réussite sur une grille simple par mouvement"],
        ["Cours jusqu'au plot. → Corrigé : distance complète parcourue en courant","Tire la corde jusqu'à moi. → Corrigé : traction réalisée sans lâcher","Saute dedans puis dehors du cerceau. → Corrigé : geste réalisé correctement dans les 2 sens","Fais une roulade avant (avec aide). → Corrigé : roulade réalisée avec assistance, sans se faire mal"]),

      m("DESSIN","Évaluation orale — décrire ce que l'on va dessiner",
        "Vérifier oralement la connaissance des formes et objets dessinés ce trimestre, en demandant à l'enfant de décrire verbalement comment il les représenterait, avant l'épreuve de dessin de la semaine suivante.",
        ["Nommer un objet dessiné ce trimestre","Demander de décrire à l'oral les formes utilisées pour le représenter","Faire justifier le choix des couleurs"],
        ["Quelle forme utiliserais-tu pour dessiner une voiture ? → Corrigé : un rectangle et des ronds","Comment représenterais-tu la pluie sur un dessin ? → Corrigé : des traits obliques","Quelle couleur choisirais-tu pour un lion du cirque ? → Corrigé : réponse cohérente (jaune, marron)","Décris un dessin que tu as fait ce trimestre. → Corrigé : description orale cohérente avec un dessin réellement réalisé"]),

      m("TRAVAUX MANUELS","Évaluation orale — expliquer les techniques du trimestre",
        "Vérifier oralement la connaissance des techniques manuelles pratiquées ce trimestre (découpage, collage, pliage), en demandant à l'enfant de les décrire avant l'épreuve pratique de la semaine suivante.",
        ["Nommer une technique pratiquée ce trimestre","Demander de décrire à l'oral les étapes de cette technique","Faire nommer le matériel utilisé"],
        ["Comment fait-on un pli en 2 ? → Corrigé : plier la feuille et marquer le pli avec l'ongle","Quel matériel utilise-t-on pour découper ? → Corrigé : des ciseaux","Décris comment tu as fabriqué la guirlande de la fête de l'école. → Corrigé : découper des bandes puis les coller en chaîne","Que fait-on avant de coller ? → Corrigé : préparer et positionner les éléments à assembler"]),

      m("CONTE","Évaluation orale — raconter « Samy fetsy »",
        "Vérifier la mémorisation du conte du mois de février par une restitution orale individuelle des personnages et de la morale de l'histoire.",
        ["Faire passer chaque enfant individuellement","Demander de nommer les personnages du conte","Demander de raconter un passage de l'histoire","Demander la morale du conte"],
        ["Comment s'appelle le conte appris en février ? → Corrigé : Samy fetsy","Raconte un passage de ce conte. → Corrigé : passage cohérent avec l'histoire réellement racontée en classe","Quelle est la morale de ce conte ? → Corrigé : réponse cohérente avec la morale du conte","Quel personnage as-tu préféré ? Pourquoi ? → Corrigé : réponse personnelle justifiée"])

    ],
  },

  {
    n:3, dates:"15/03/2027 – 19/03/2027",
    theme:"EXAMEN ÉCRIT — Évaluation écrite et graphique du 2e trimestre",
    matieres:[

      m("LECTURE","Évaluation écrite — lire et entourer les syllabes b, p, v, r, s, j",
        "Vérifier par une fiche écrite individuelle la capacité à reconnaître et entourer les syllabes formées avec les consonnes du trimestre.",
        ["Distribuer une fiche avec des lignes de syllabes mélangées","Faire entourer la syllabe demandée par l'enseignant sur chaque ligne","Faire relier une syllabe écrite à l'image du mot correspondant","Corriger individuellement en circulant"],
        ["Entoure la syllabe « ba » dans cette ligne : da — ba — la — ba → Corrigé : les 2 « ba » entourés","Entoure la syllabe « ja » dans cette ligne : ja — da — ja — ta → Corrigé : les 2 « ja » entourés","Relie la syllabe « vo » à l'image d'une voiture. → Corrigé : trait tracé entre « vo » et l'image correcte","Entoure la syllabe « so » dans cette ligne : so — po — so — ro → Corrigé : les 2 « so » entourés"]),

      m("ÉCRITURE","Évaluation écrite — tracer les lettres et syllabes du trimestre",
        "Vérifier le tracé propre des lettres b, p, v, r, s, j et de leurs syllabes sur une fiche de tracé individuelle.",
        ["Distribuer une fiche avec des lignes préréglées pour chaque lettre","Faire tracer b, p, v, r, s, j chacun 2 fois","Faire tracer les syllabes « ba » et « ja » attachées","Circuler et corriger la tenue du crayon si besoin"],
        ["Trace la lettre b. → Corrigé : tracé conforme au modèle, dans le sens correct","Trace la lettre j. → Corrigé : jambage sous la ligne, crochet, point présent","Écris la syllabe « ba ». → Corrigé : b et a correctement attachés et lisibles","Écris la syllabe « ja ». → Corrigé : j et a correctement attachés et lisibles"]),

      m("VAKITENY","Fanadinana an-tsoratra — ny litera sy ny vaninteny",
        "Vérifier par une fiche écrite la reconnaissance des lettres malagasy du trimestre et le tracé simple d'une syllabe.",
        ["Distribuer une fiche avec des lettres mélangées","Faire entourer les lettres demandées","Faire tracer la syllabe « sa »","Corriger individuellement"],
        ["Tsongò ny litera « v » amin'ity andalana ity : b v p v → Valiny : ny « v » roa voatsongo","Tsongò ny litera « j » amin'ity andalana ity : j d j t → Valiny : ny « j » roa voatsongo","Soraty ny vaninteny « sa ». → Valiny : s sy a mifandray tsara","Tsongò ny litera « r » amin'ity andalana ity : r l r n → Valiny : ny « r » roa voatsongo"]),

      m("PRE-MATH","Évaluation écrite — représenter une addition et une soustraction",
        "Vérifier sur une fiche graphique la capacité à représenter une addition (en dessinant des ronds) et une soustraction (en barrant des ronds).",
        ["Distribuer une fiche avec des consignes imagées","Faire dessiner des ronds pour représenter une addition donnée","Faire barrer des ronds pour représenter une soustraction donnée","Corriger en circulant"],
        ["Dessine 3 ronds, puis ajoute 2 ronds. Combien en as-tu au total ? → Corrigé : 5 ronds dessinés","Dessine 6 ronds, puis barre 2 ronds. Combien en reste-t-il ? → Corrigé : 4 ronds non barrés","Dessine autant de ronds que de doigts levés (montrer 4 doigts). → Corrigé : 4 ronds dessinés","Barre 3 ronds parmi les 5 dessinés. Combien en reste-t-il ? → Corrigé : 2"]),

      m("MATHS","Évaluation écrite — écrire les nombres jusqu'à 30 et repérer pairs/impairs",
        "Vérifier sur une fiche graphique l'écriture des chiffres jusqu'à 30 et la reconnaissance visuelle des nombres pairs et impairs.",
        ["Distribuer une fiche avec une bande numérique à compléter","Faire écrire les nombres manquants entre 0 et 30","Faire colorier les nombres pairs d'une couleur et les impairs d'une autre","Corriger en circulant"],
        ["Complète la suite : 26, 27, __, 29, __ → Corrigé : 28, 30","Colorie en bleu les nombres pairs de cette ligne : 21, 22, 23, 24 → Corrigé : 22 et 24 coloriés","Écris le nombre 30. → Corrigé : « 30 » correctement tracé","Colorie en rouge les nombres impairs de cette ligne : 25, 26, 27, 28 → Corrigé : 25 et 27 coloriés"]),

      m("DESSIN","Évaluation graphique — dessiner un objet au choix du trimestre",
        "Vérifier la capacité à représenter, seul sur une feuille, un objet parmi ceux dessinés ce trimestre en réinvestissant les formes géométriques apprises.",
        ["Proposer un choix parmi 2-3 objets déjà dessinés ce trimestre","Laisser l'enfant dessiner seul, sans modèle au tableau","Observer les formes utilisées","Faire colorier la production"],
        ["Quel objet as-tu choisi de dessiner ? → Corrigé : réponse conforme à l'objet réellement dessiné","Quelles formes as-tu utilisées ? → Corrigé : formes cohérentes avec l'objet choisi (rectangle, rond, triangle)","Montre ton dessin terminé et colorié. → Corrigé : production présentée avec couleur","Es-tu content de ton dessin ? → Corrigé : réponse personnelle"]),

      m("TRAVAUX MANUELS","Évaluation pratique — découper et plier avec précision",
        "Vérifier la précision du geste de découpage et de pliage acquise ce trimestre, sur une fiche à découper puis plier selon un tracé donné.",
        ["Distribuer une feuille avec un tracé de découpe et un trait de pliage","Faire découper le long du tracé","Faire plier en 2 en suivant le trait indiqué","Observer la précision du geste"],
        ["Découpe le long de la ligne tracée. → Corrigé : découpe globalement fidèle au tracé","Plie la feuille en suivant le trait. → Corrigé : pli net et bien positionné sur le trait","Montre ton pli bien marqué avec l'ongle. → Corrigé : pli net réalisé","Comment tiens-tu les ciseaux pour découper ? → Corrigé : prise correcte, pouce dans un anneau, doigts dans l'autre"]),

      m("LANGAGE","Évaluation graphique — remettre les images de l'histoire en ordre",
        "Adapter l'évaluation de compréhension du trimestre à un support graphique : remettre en ordre puis entourer les images de l'histoire du trimestre.",
        ["Distribuer 4 images mélangées de l'histoire « Le petit chat perdu »","Faire remettre les images dans l'ordre chronologique sur la table","Faire entourer l'image de la fin de l'histoire","Corriger en circulant"],
        ["Remets ces 4 images dans l'ordre de l'histoire. → Corrigé : ordre chronologique complet respecté","Entoure l'image de la fin de l'histoire. → Corrigé : bonne image entourée","Montre l'image où le chat est perdu. → Corrigé : bonne image pointée","Montre l'image où le chat est retrouvé. → Corrigé : bonne image pointée"]),

      m("MORALE","Évaluation graphique — entourer le bon comportement",
        "Adapter l'évaluation des règles de vie du trimestre à un support graphique : entourer, sur une fiche imagée, les comportements sûrs et hygiéniques.",
        ["Distribuer une fiche avec des paires d'images (bon geste / mauvais geste)","Faire entourer le bon comportement dans chaque paire","Faire justifier oralement un choix","Corriger en circulant"],
        ["Entoure l'enfant qui se lave bien les mains. → Corrigé : bonne image entourée","Entoure l'enfant qui marche prudemment dans l'escalier (et non celui qui court). → Corrigé : bonne image entourée","Pourquoi as-tu entouré cette image ? → Corrigé : justification cohérente avec la règle apprise","Entoure l'enfant habillé chaudement un jour de froid. → Corrigé : bonne image entourée"]),

      m("ENVIRONNEMENT","Évaluation graphique — relier les images aux thèmes",
        "Adapter l'évaluation du vocabulaire du trimestre à un support graphique : relier chaque image à son thème par un trait.",
        ["Distribuer une fiche avec des images et 2 colonnes de thèmes","Faire relier chaque image à son thème par un trait","Corriger en circulant"],
        ["Relie l'image du vélo au thème « transports ». → Corrigé : trait tracé correctement","Relie l'image du savon au thème « toilette ». → Corrigé : trait tracé correctement","Relie l'image du nuage au thème « météo ». → Corrigé : trait tracé correctement","Combien de traits as-tu tracés au total ? → Corrigé : autant que d'images sur la fiche"]),

      m("ANGLAIS","Évaluation graphique — relier le mot anglais à l'image",
        "Adapter l'évaluation du vocabulaire anglais du trimestre à un support graphique : relier chaque mot écrit à l'image correspondante.",
        ["Distribuer une fiche avec des mots anglais et des images mélangées","Faire relier chaque mot à l'image correspondante","Corriger en circulant"],
        ["Relie le mot « car » à la bonne image. → Corrigé : trait tracé vers l'image de la voiture","Relie le mot « boat » à la bonne image. → Corrigé : trait tracé vers l'image du bateau","Relie le mot « plane » à la bonne image. → Corrigé : trait tracé vers l'image de l'avion","Combien de mots as-tu reliés correctement ? → Corrigé : nombre réel de bonnes réponses de l'enfant"]),

      m("CHANT","Évaluation notée — interpréter une chanson avec grille de critères",
        "Faire passer une évaluation plus formelle du chant, sur une grille notant les paroles, le rythme et le geste, pour compléter le passage informel de la semaine précédente.",
        ["Faire chanter la même chanson choisie la semaine précédente","Noter séparément : paroles, rythme, geste, sur une grille à 3 critères","Donner un retour positif individuel à chaque enfant"],
        ["Chante ta chanson en respectant le rythme du début à la fin. → Corrigé : rythme globalement tenu sur l'ensemble du chant","Fais le geste au bon moment des paroles. → Corrigé : geste synchronisé avec le texte","Quel critère as-tu le mieux réussi : paroles, rythme ou geste ? → Corrigé : réponse cohérente avec l'observation de l'enseignant","Chante devant 2 camarades. → Corrigé : chant maintenu malgré la présence d'un petit public"]),

      m("RECITATION","Évaluation notée — réciter avec grille de critères",
        "Faire passer une évaluation plus formelle de la récitation, sur une grille notant la mémorisation, la diction et le ton, pour compléter le passage informel de la semaine précédente.",
        ["Faire réciter le même poème choisi la semaine précédente","Noter séparément : mémorisation, diction, ton, sur une grille à 3 critères","Donner un retour positif individuel à chaque enfant"],
        ["Récite ton poème du début à la fin sans aide. → Corrigé : texte récité en entier sans souffleur","Récite en articulant bien chaque mot. → Corrigé : diction claire et compréhensible","Récite avec le ton qui convient au poème (joyeux, sérieux...). → Corrigé : ton globalement adapté au sens du texte","Quel mot du poème est le plus difficile à dire ? → Corrigé : réponse personnelle cohérente"]),

      m("EPS","Évaluation notée — parcours moteur complet du trimestre",
        "Faire passer chaque enfant sur un parcours moteur regroupant les 4 mouvements travaillés ce trimestre (courir, rouler, tirer, dedans/dehors), noté sur une grille simple.",
        ["Installer un parcours : course, roulade sur tapis, cerceaux dedans/dehors, corde à tirer","Faire passer chaque enfant sur le parcours complet","Noter la réussite de chaque étape sur une grille","Encourager et valoriser chaque passage"],
        ["Termine le parcours en entier sans t'arrêter. → Corrigé : les 4 étapes réalisées dans l'ordre","Quelle étape du parcours as-tu préférée ? → Corrigé : réponse personnelle","Quelle étape a été la plus difficile pour toi ? → Corrigé : réponse personnelle cohérente","Refais l'étape de la roulade si besoin. → Corrigé : roulade réalisée avec assistance si nécessaire"]),

      m("CONTE","Évaluation graphique — remettre les images des contes du trimestre en ordre",
        "Adapter l'évaluation des 2 contes du trimestre (Samy fetsy, Vorona nifidy mpanjaka) à un support graphique de remise en ordre d'images.",
        ["Distribuer les images mélangées des 2 contes du trimestre","Faire trier les images par conte (2 tas)","Faire remettre les images de chaque conte dans l'ordre","Corriger en circulant"],
        ["Trie ces images en 2 tas : celles de Samy fetsy et celles de Vorona nifidy mpanjaka. → Corrigé : tri correct des images fournies","Remets les images de Vorona nifidy mpanjaka dans l'ordre. → Corrigé : ordre chronologique respecté","Montre l'image du début de Samy fetsy. → Corrigé : bonne image pointée","Quel conte préfères-tu entre les deux ? → Corrigé : réponse personnelle justifiée"])

    ],
  },

  {
    n:4, dates:"22/03/2027 – 26/03/2027",
    theme:"BULLETINS — Clôture du 2e trimestre : remise des bulletins et bilan collectif",
    matieres:[

      m("LECTURE","Bilan collectif — jeu de révision des lettres et syllabes du trimestre",
        "Clore le trimestre par un jeu calme et valorisant de révision des lettres et syllabes apprises (l, t, d, n, m, b, p, v, r, s, j), le jour de la remise des bulletins.",
        ["Distribuer les bulletins en début de semaine et féliciter chaque enfant pour ses progrès","Organiser un jeu de bingo des lettres apprises ce trimestre","Faire lire quelques syllabes préférées de chaque enfant","Terminer par un tour de classe où chacun lit une syllabe de son choix"],
        ["Lis une syllabe de ton choix parmi celles apprises ce trimestre. → Corrigé : syllabe lue correctement","Quelle lettre du trimestre préfères-tu ? → Corrigé : réponse personnelle","Joue au bingo : entoure la lettre annoncée. → Corrigé : bonne lettre entourée","Cite toutes les lettres apprises depuis janvier. → Corrigé : b, p, v, r, s, j nommées (au moins 4 sur 6)"]),

      m("VAKITENY","Bilan collectif — jeu de révision des litera du trimestre",
        "Réviser calmement, en jeu collectif, les lettres et syllabes malagasy apprises ce trimestre.",
        ["Organiser un jeu de bingo des litera apprises ce trimestre","Faire lire quelques syllabes préférées de chaque enfant","Terminer par un tour de classe où chacun lit une syllabe malagasy de son choix"],
        ["Vakio ny vaninteny tianao indrindra. → Valiny : vaninteny voavaky tsara","Inona ny litera tianao indrindra tamin'ity taom-panabeazana ity ? → Valiny : valiny manokana","Tsongò ny litera nantsoina. → Valiny : litera marina voatsongo","Tononinao ny litera efa nianarana nanomboka tamin'ny janoary. → Valiny : b, p, v, r, s, j (efatra amin'izy enina farafahakeliny)"]),

      m("ÉCRITURE","Bilan collectif — coloriage-tracé libre des lettres préférées",
        "Proposer une activité calme et sans pression : chaque enfant retrace ou colorie en grand format les lettres du trimestre qu'il préfère.",
        ["Distribuer une fiche avec les lettres du trimestre en gros format à colorier ou repasser","Laisser chaque enfant choisir 2-3 lettres à retracer avec soin","Exposer les fiches dans la classe pour la journée des bulletins"],
        ["Quelle lettre as-tu choisi de retracer ? → Corrigé : réponse personnelle","Trace cette lettre une dernière fois avec soin. → Corrigé : tracé propre et appliqué","Montre ta fiche terminée. → Corrigé : production présentée","As-tu aimé apprendre à écrire cette lettre ? → Corrigé : réponse personnelle"]),

      m("LANGAGE","Bilan collectif — moment préféré des histoires du trimestre",
        "Clore le trimestre en laissant chaque enfant partager oralement son moment préféré parmi les histoires racontées, dans une ambiance calme et festive.",
        ["Rappeler brièvement les histoires du trimestre","Faire choisir à chaque enfant son moment préféré","Faire dessiner ou mimer ce moment préféré","Partager les productions en petit groupe"],
        ["Quelle histoire as-tu préférée ce trimestre ? → Corrigé : réponse personnelle","Quel est ton moment préféré de cette histoire ? → Corrigé : passage réellement présent dans l'histoire citée","Mime ce moment préféré. → Corrigé : mime cohérent avec le passage cité","Pourquoi as-tu aimé ce moment ? → Corrigé : réponse personnelle justifiée"]),

      m("PRE-MATH","Bilan collectif — jeu de dés addition et soustraction",
        "Consolider addition et soustraction dans une ambiance de jeu calme, sans enjeu d'évaluation, pour clore le trimestre positivement.",
        ["Proposer un jeu de dés en petits groupes","Additionner les points de 2 dés lancés","Variante : enlever le nombre indiqué par un dé à une pile de jetons","Valoriser chaque réussite du groupe"],
        ["Lance 2 dés et additionne les points. → Corrigé : somme correcte des 2 dés obtenus","Tu as 8 jetons, le dé indique 3 à enlever. Combien en reste-t-il ? → Corrigé : 5","As-tu préféré additionner ou soustraire dans ce jeu ? → Corrigé : réponse personnelle","Rejoue une fois pour t'entraîner encore. → Corrigé : calcul refait correctement"]),

      m("MATHS","Bilan collectif — bingo des nombres jusqu'à 35",
        "Clore le trimestre par un jeu de bingo reprenant tous les nombres appris, de 0 à 35, dans une ambiance ludique et sans pression.",
        ["Distribuer une grille de bingo avec des nombres de 0 à 35","Annoncer des nombres au hasard, les enfants cochent leur grille","Féliciter le ou les premiers « bingo »","Refaire une partie pour que chacun gagne au moins une fois"],
        ["Coche le nombre annoncé sur ta grille. → Corrigé : bon nombre coché","Quel est le plus grand nombre appris ce trimestre ? → Corrigé : 35","As-tu fait bingo ? Avec quels nombres ? → Corrigé : réponse conforme à la grille réelle de l'enfant","Compte à voix haute de 30 à 35. → Corrigé : 30, 31, 32, 33, 34, 35"]),

      m("MORALE","Bilan collectif — discussion sur les progrès du trimestre",
        "Réunir la classe en cercle pour un bilan collectif oral sur les règles de vie apprises ce trimestre, en valorisant les progrès de chacun avant la remise des bulletins.",
        ["Réunir les enfants en cercle","Demander à chacun de citer une règle qu'il respecte bien maintenant","Valoriser les progrès individuels observés dans le trimestre","Rappeler une dernière fois les règles essentielles de sécurité et d'hygiène"],
        ["Cite une règle que tu respectes bien maintenant. → Corrigé : réponse personnelle cohérente avec les règles apprises","Quel progrès as-tu fait ce trimestre ? → Corrigé : réponse personnelle","Pourquoi est-il important de respecter ces règles ? → Corrigé : pour rester en sécurité et en bonne santé","Que dis-tu à un camarade qui ne respecte pas une règle ? → Corrigé : réponse cohérente avec un rappel bienveillant de la règle"]),

      m("ENVIRONNEMENT","Bilan collectif — jeu de mémory des thèmes du trimestre",
        "Consolider le vocabulaire des thèmes du trimestre (toilette, vêtements, météo, transports) par un jeu de mémory calme en petits groupes.",
        ["Préparer des paires de cartes-images sur les thèmes du trimestre","Jouer au mémory en petits groupes","Nommer l'image à chaque paire trouvée","Féliciter chaque groupe en fin de jeu"],
        ["Nomme l'image de cette carte. → Corrigé : nom conforme à l'image retournée","As-tu trouvé une paire ? Laquelle ? → Corrigé : réponse conforme aux cartes réellement trouvées","Quel thème préfères-tu parmi ceux vus ce trimestre ? → Corrigé : réponse personnelle","Cite un mot de chaque thème du trimestre. → Corrigé : au moins 2 mots corrects parmi les thèmes vus"]),

      m("ANGLAIS","Bilan collectif — jeu chanté de révision du vocabulaire",
        "Clore le trimestre par un jeu chanté reprenant le vocabulaire anglais appris, dans une ambiance festive adaptée à la semaine des bulletins.",
        ["Chanter une comptine reprenant les mots anglais du trimestre","Mélanger les flashcards du trimestre pour un dernier jeu « Point to the... »","Laisser chaque enfant dire son mot anglais préféré"],
        ["Quel est ton mot anglais préféré appris ce trimestre ? → Corrigé : réponse personnelle","Point to the plane. → Corrigé : l'avion pointé","How do you say « voiture » in English? → Corrigé : car","Chante la comptine avec la classe. → Corrigé : participation au chant collectif"]),

      m("CHANT","Bilan collectif — petit concert des chansons du trimestre",
        "Organiser un petit concert collectif reprenant les chansons du trimestre pour la journée des bulletins, moment festif partagé avec valorisation de chaque enfant.",
        ["Choisir avec la classe 2 chansons du trimestre à présenter","Répéter une dernière fois ensemble","Chanter les 2 chansons devant la classe (ou les familles si possible)","Applaudir et féliciter tout le monde"],
        ["Chante avec la classe la chanson choisie pour le concert. → Corrigé : participation active au chant collectif","Quelle chanson du trimestre as-tu préféré chanter aujourd'hui ? → Corrigé : réponse personnelle","Fais le geste appris avec ta chanson. → Corrigé : geste conforme à celui appris en classe","Comment te sens-tu après ce petit concert ? → Corrigé : réponse personnelle"]),

      m("RECITATION","Bilan collectif — petite scène de récitation du trimestre",
        "Organiser une petite scène collective où chaque enfant récite une ligne d'un poème du trimestre, pour clore le trimestre dans la bonne humeur le jour des bulletins.",
        ["Choisir un poème du trimestre à réciter en chaîne (chacun une ligne)","Répéter une dernière fois l'ordre de passage","Réciter en chaîne devant la classe","Applaudir et féliciter chaque enfant"],
        ["Récite ta ligne au bon moment de la chaîne. → Corrigé : ligne récitée au bon tour","Quel poème as-tu préféré réciter ce trimestre ? → Corrigé : réponse personnelle","Comment t'es-tu senti en récitant devant la classe ? → Corrigé : réponse personnelle","Félicite ton voisin pour sa récitation. → Corrigé : parole d'encouragement formulée"]),

      m("EPS","Bilan collectif — parcours libre et jeux du trimestre",
        "Proposer une séance calme et libre reprenant, sans notation, les jeux moteurs préférés du trimestre, en clôture festive avant la suite de l'année.",
        ["Installer les ateliers moteurs préférés du trimestre en libre accès","Laisser chaque enfant choisir l'atelier où il veut s'exercer","Circuler pour encourager sans évaluer","Terminer par un jeu collectif au choix de la classe"],
        ["Quel atelier as-tu choisi aujourd'hui ? → Corrigé : réponse personnelle","Quel mouvement du trimestre préfères-tu : courir, rouler ou tirer ? → Corrigé : réponse personnelle","Montre le mouvement que tu préfères. → Corrigé : mouvement exécuté correctement","As-tu aimé le jeu collectif final ? → Corrigé : réponse personnelle"]),

      m("DESSIN","Bilan collectif — exposition des dessins du trimestre",
        "Choisir et exposer un dessin réalisé ce trimestre pour décorer la classe le jour des bulletins, valorisant le travail de chaque enfant devant les familles.",
        ["Faire choisir à chaque enfant son dessin préféré du trimestre","Ajouter une touche finale (couleur, détail) si souhaité","Afficher les dessins dans la classe pour la journée des bulletins","Faire présenter son dessin en une phrase"],
        ["Quel dessin as-tu choisi d'exposer ? → Corrigé : réponse personnelle","Présente ton dessin en une phrase. → Corrigé : phrase cohérente décrivant le dessin","Quelle forme as-tu utilisée dans ce dessin ? → Corrigé : forme réellement présente dans le dessin choisi","Es-tu fier de ton dessin ? → Corrigé : réponse personnelle"]),

      m("TRAVAUX MANUELS","Bilan collectif — installation finale des décorations de la fête de l'école",
        "Terminer et installer les décorations de la fête de l'école commencées en semaine 1 (guirlandes, fanions, banderole), pour décorer la classe le jour de la remise des bulletins.",
        ["Récupérer les guirlandes et fanions fabriqués en semaine 1","Finir d'assembler les éléments non terminés","Accrocher toutes les décorations dans la classe avec l'aide des enfants","Admirer ensemble le résultat collectif le jour des bulletins"],
        ["Montre la décoration que tu as aidé à fabriquer. → Corrigé : élément réellement fabriqué en semaine 1 présenté","Où avez-vous accroché les décorations ? → Corrigé : réponse conforme à l'endroit réellement choisi en classe","As-tu aimé fabriquer ces décorations pour la fête ? → Corrigé : réponse personnelle","Combien de fanions la classe a-t-elle fabriqués en tout ? → Corrigé : total réel compté collectivement"]),

      m("CONTE","Bilan collectif — raconter les 2 contes du trimestre en groupe",
        "Clore le trimestre en racontant à plusieurs voix les 2 contes appris (Samy fetsy, Vorona nifidy mpanjaka), pour un dernier moment d'écoute calme avant la remise des bulletins.",
        ["Remettre les images des 2 contes dans l'ordre en grand groupe","Raconter chaque conte à plusieurs voix (un enfant par passage)","Discuter une dernière fois des 2 morales","Voter pour le conte préféré de la classe"],
        ["Comment s'appellent les 2 contes appris ce trimestre ? → Corrigé : Samy fetsy et Vorona nifidy mpanjaka","Raconte le début de l'un des 2 contes. → Corrigé : résumé oral fidèle au début du conte choisi","Quelle est la morale de Vorona nifidy mpanjaka ? → Corrigé : réponse cohérente avec la morale du conte","Quel conte la classe a-t-elle préféré ? → Corrigé : résultat du vote collectif réel"])

    ],
  }

];

const AVRIL_12EME = [

  {
    n:1, dates:"05/04/2027 – 09/04/2027",
    theme:"VACANCES DE PÂQUES — pas de cours",
    matieres:[

      m("LECTURE","Vacances de Pâques — pas de cours",
        "Semaine de vacances scolaires (vacances de Pâques) : aucun cours n'est dispensé cette semaine.",
        ["Pas de cours cette semaine : vacances de Pâques.","Reprise des activités la semaine suivante."],
        ["Pas d'exercices cette semaine (vacances)."]),

      m("VAKITENY","Vacances de Pâques — pas de cours",
        "Semaine de vacances scolaires (vacances de Pâques) : aucun cours n'est dispensé cette semaine.",
        ["Pas de cours cette semaine : vacances de Pâques.","Reprise des activités la semaine suivante."],
        ["Pas d'exercices cette semaine (vacances)."]),

      m("ÉCRITURE","Vacances de Pâques — pas de cours",
        "Semaine de vacances scolaires (vacances de Pâques) : aucun cours n'est dispensé cette semaine.",
        ["Pas de cours cette semaine : vacances de Pâques.","Reprise des activités la semaine suivante."],
        ["Pas d'exercices cette semaine (vacances)."]),

      m("LANGAGE","Vacances de Pâques — pas de cours",
        "Semaine de vacances scolaires (vacances de Pâques) : aucun cours n'est dispensé cette semaine.",
        ["Pas de cours cette semaine : vacances de Pâques.","Reprise des activités la semaine suivante."],
        ["Pas d'exercices cette semaine (vacances)."]),

      m("PRE-MATH","Vacances de Pâques — pas de cours",
        "Semaine de vacances scolaires (vacances de Pâques) : aucun cours n'est dispensé cette semaine.",
        ["Pas de cours cette semaine : vacances de Pâques.","Reprise des activités la semaine suivante."],
        ["Pas d'exercices cette semaine (vacances)."]),

      m("MATHS","Vacances de Pâques — pas de cours",
        "Semaine de vacances scolaires (vacances de Pâques) : aucun cours n'est dispensé cette semaine.",
        ["Pas de cours cette semaine : vacances de Pâques.","Reprise des activités la semaine suivante."],
        ["Pas d'exercices cette semaine (vacances)."]),

      m("MORALE","Vacances de Pâques — pas de cours",
        "Semaine de vacances scolaires (vacances de Pâques) : aucun cours n'est dispensé cette semaine.",
        ["Pas de cours cette semaine : vacances de Pâques.","Reprise des activités la semaine suivante."],
        ["Pas d'exercices cette semaine (vacances)."]),

      m("ENVIRONNEMENT","Vacances de Pâques — pas de cours",
        "Semaine de vacances scolaires (vacances de Pâques) : aucun cours n'est dispensé cette semaine.",
        ["Pas de cours cette semaine : vacances de Pâques.","Reprise des activités la semaine suivante."],
        ["Pas d'exercices cette semaine (vacances)."]),

      m("ANGLAIS","Vacances de Pâques — pas de cours",
        "Semaine de vacances scolaires (vacances de Pâques) : aucun cours n'est dispensé cette semaine.",
        ["Pas de cours cette semaine : vacances de Pâques.","Reprise des activités la semaine suivante."],
        ["Pas d'exercices cette semaine (vacances)."]),

      m("CHANT","Vacances de Pâques — pas de cours",
        "Semaine de vacances scolaires (vacances de Pâques) : aucun cours n'est dispensé cette semaine.",
        ["Pas de cours cette semaine : vacances de Pâques.","Reprise des activités la semaine suivante."],
        ["Pas d'exercices cette semaine (vacances)."]),

      m("RECITATION","Vacances de Pâques — pas de cours",
        "Semaine de vacances scolaires (vacances de Pâques) : aucun cours n'est dispensé cette semaine.",
        ["Pas de cours cette semaine : vacances de Pâques.","Reprise des activités la semaine suivante."],
        ["Pas d'exercices cette semaine (vacances)."]),

      m("EPS","Vacances de Pâques — pas de cours",
        "Semaine de vacances scolaires (vacances de Pâques) : aucun cours n'est dispensé cette semaine.",
        ["Pas de cours cette semaine : vacances de Pâques.","Reprise des activités la semaine suivante."],
        ["Pas d'exercices cette semaine (vacances)."]),

      m("DESSIN","Vacances de Pâques — pas de cours",
        "Semaine de vacances scolaires (vacances de Pâques) : aucun cours n'est dispensé cette semaine.",
        ["Pas de cours cette semaine : vacances de Pâques.","Reprise des activités la semaine suivante."],
        ["Pas d'exercices cette semaine (vacances)."]),

      m("TRAVAUX MANUELS","Vacances de Pâques — pas de cours",
        "Semaine de vacances scolaires (vacances de Pâques) : aucun cours n'est dispensé cette semaine.",
        ["Pas de cours cette semaine : vacances de Pâques.","Reprise des activités la semaine suivante."],
        ["Pas d'exercices cette semaine (vacances)."]),

      m("CONTE","Vacances de Pâques — pas de cours",
        "Semaine de vacances scolaires (vacances de Pâques) : aucun cours n'est dispensé cette semaine.",
        ["Pas de cours cette semaine : vacances de Pâques.","Reprise des activités la semaine suivante."],
        ["Pas d'exercices cette semaine (vacances)."])

    ],
  },

  {
    n:2, dates:"12/04/2027 – 16/04/2027",
    theme:"La lettre f : syllabes fa-fi-fo-fu-fe · Les moyens de transport · Le nombre 35 à 40",
    matieres:[

      m("LECTURE","La lettre f : son [f] et syllabes fa-fi-fo-fu-fe",
        "Introduire la consonne f par la méthode syllabique : isoler le son [f] à l'oral (un souffle continu senti sur la main), puis le combiner avec les 5 voyelles déjà connues pour lire des syllabes.",
        ["Montrer la lettre F en grand format au tableau (majuscule et minuscule)","Prononcer le son [f] en soufflant sur le dos de la main pour sentir l'air sortir","Chercher des mots avec [f] : fille, café, fusée","Combiner f + a, f + i, f + o, f + u, f + e au tableau : fa, fi, fo, fu, fe","Faire lire la ligne de syllabes en chœur puis individuellement","Comparer avec la consonne l déjà connue : le f se prononce en soufflant, le l avec la langue contre le palais","Jeu : la maîtresse pointe une syllabe, l'enfant la lit"],
        ["Quel son fait la lettre f ? → Corrigé : [f]","Lis cette syllabe : fa → Corrigé : [fa]","Lis ces syllabes dans l'ordre : fu — fi — fo → Corrigé : lecture correcte des 3 syllabes","Trouve un mot de la classe qui contient le son [f]. → Corrigé : toute réponse contenant réellement [f] (ex : fenêtre, feutre)"]),

      m("VAKITENY","La lettre f : premières syllabes malagasy avec f",
        "Introduire le son [f] en malagasy et former les premières syllabes avec les voyelles malagasy déjà connues (a, e, i, o).",
        ["Montrer la lettre F au tableau","Prononcer [f] dans des mots connus : fady, fitiavana, faly","Combiner f + a, f + e, f + i, f + o au tableau","Faire lire les syllabes en chœur","Jeu de lecture individuelle des syllabes"],
        ["Lis cette syllabe : fa → Corrigé : [fa]","Cite un mot malagasy qui commence par « fa ». → Corrigé : fady, faly (une réponse correcte acceptée)","Lis : fo — fe → Corrigé : lecture correcte des 2 syllabes","Entoure les syllabes avec « f » dans cette ligne : fa — ta — fo — ma → Corrigé : fa, fo entourés"]),

      m("ÉCRITURE","La lettre f : tracé de la grande canne barrée",
        "Apprendre le tracé du f (une grande canne descendante avec une courbe en haut et une barre horizontale au milieu), en comparant sa hauteur avec le l déjà connu, puis relier f aux voyelles pour écrire les syllabes.",
        ["Montrer le tracé : on part en haut par une petite boucle, on descend tout droit, puis on barre au milieu","Comparer la hauteur du f avec celle du l (les deux sont hautes)","Tracer dans l'air en verbalisant le mouvement","Tracer sur l'ardoise, puis sur papier préligné","Tracer « fa » en attachant f et a","Tracer 3 syllabes différentes avec f sur une même ligne"],
        ["Trace la lettre f sur ton ardoise. → Corrigé : canne haute, barre horizontale au milieu bien marquée","Quelle autre lettre déjà connue est aussi haute que le f ? → Corrigé : le l","Écris la syllabe « fu ». → Corrigé : f et u correctement attachés et lisibles","Trace 3 syllabes avec f (fa, fo, fe). → Corrigé : tracé des 3 syllabes conforme"]),

      m("LANGAGE","Les animaux du cirque — reprise et vocabulaire (le lion, l'éléphant, le clown)",
        "Reprendre après les vacances le thème du cirque abordé en mars, introduire du vocabulaire nouveau (lion, éléphant, clown, dompteur) et structurer des phrases simples sujet-verbe-complément.",
        ["Rappeler le thème du cirque avec les images déjà vues en mars","Nommer le vocabulaire nouveau : le lion, l'éléphant, le clown, le dompteur","Mimer les actions : le lion qui rugit, l'éléphant qui se dresse sur ses pattes","Répéter la phrase clé : « Le lion fait un tour au cirque »","Poser 3 questions de compréhension simples après l'écoute","Jeu de rôle : un enfant joue le dompteur, un autre le lion"],
        ["Quels animaux vivent au cirque dans notre histoire ? → Corrigé : le lion, l'éléphant (au moins un cité)","Que fait le dompteur ? → Corrigé : il dirige les animaux, il fait le spectacle","Montre l'image du lion qui rugit. → Corrigé : bonne image pointée","Répète la phrase : « Le lion fait un tour au cirque ». → Corrigé : phrase répétée avec la structure sujet-verbe-complément"]),

      m("PRE-MATH","Écriture en lettres des nombres : 4 = quatre, 5 = cinq",
        "Faire reconnaître globalement les mots-nombres « quatre » et « cinq » écrits en toutes lettres, en s'appuyant sur les chiffres 4 et 5 déjà connus, sans exiger l'analyse des sons du mot.",
        ["Rappeler les chiffres 4 et 5 avec des objets à compter","Montrer le mot « quatre » écrit en grand au tableau et le faire lire globalement, comme une image","Montrer le mot « cinq » écrit en grand au tableau, même démarche","Associer chaque chiffre à son mot par un jeu d'étiquettes à relier","Faire copier les mots « quatre » et « cinq » sur l'ardoise","Jeu de loto : piocher une étiquette-chiffre ou une étiquette-mot et trouver sa paire"],
        ["Associe le chiffre 4 à son mot écrit. → Corrigé : 4 relié à « quatre »","Écris le mot « cinq ». → Corrigé : mot copié lisiblement, lettres dans l'ordre","Combien de lettres a le mot « quatre » ? → Corrigé : 6 lettres","Entoure le mot qui correspond à 5 parmi : quatre — cinq — trois → Corrigé : « cinq » entouré"]),

      m("MATHS","Le nombre 35 à 40",
        "Étendre la suite numérique connue jusqu'à 35 (vue en mars) vers 40, par manipulation d'objets groupés en paquets de dix puis d'unités supplémentaires.",
        ["Rappel : compter collectivement jusqu'à 35","Grouper des bâtonnets en 3 paquets de 10 plus 5 unités pour représenter 35","Ajouter un bâtonnet à la fois jusqu'à obtenir 40 : 36, 37, 38, 39, 40","Réciter ensemble la suite 35 à 40","Écrire les nombres 35 à 40 au tableau et les faire lire","Jeu : pointer chaque nombre sur la bande numérique affichée"],
        ["Récite la suite de 35 à 40. → Corrigé : 35, 36, 37, 38, 39, 40","Combien de dizaines complètes y a-t-il dans 38 ? → Corrigé : 3 dizaines (et 8 unités)","Quel nombre vient juste après 39 ? → Corrigé : 40","Complète la suite : 35, 36, __, 38, __, 40 → Corrigé : 37 et 39"]),

      m("MORALE","Éviter les accidents dans la cour",
        "Sensibiliser aux comportements sécuritaires pendant la récréation (ne pas courir n'importe où, ne pas pousser, faire attention aux jeux collectifs) par la discussion et la mise en situation.",
        ["Discuter des dangers possibles dans la cour : chute, bousculade, jeux dangereux","Montrer les bons comportements : marcher près des escaliers, ne pas grimper n'importe où","Jeu de rôle : mimer une situation dangereuse puis la situation sûre correspondante","Afficher 3 règles simples de la cour dans la classe","Observer la récréation du jour et rappeler une règle si besoin"],
        ["Cite un danger possible dans la cour de récréation. → Corrigé : chute, bousculade, jeu dangereux (une réponse acceptée)","Que fais-tu si tu vois un camarade tomber ? → Corrigé : je préviens un adulte / je l'aide sans le brusquer","Montre le bon comportement dans les escaliers. → Corrigé : marche calmement, une marche à la fois","Pourquoi ne faut-il pas pousser ses camarades ? → Corrigé : pour éviter les chutes et les blessures"]),

      m("ENVIRONNEMENT","Les moyens de transport",
        "Nommer et catégoriser les moyens de transport (terre, air, eau) à partir d'images et de jouets, en lien avec le trajet quotidien de l'enfant vers l'école.",
        ["Présenter des images ou jouets : voiture, avion, bateau, vélo, taxi-brousse","Nommer chaque moyen de transport","Trier les images en 3 catégories : terre, air, eau","Discuter : « Comment viens-tu à l'école ce matin ? »","Jeu d'association image-mot au tableau"],
        ["Comment s'appelle ce moyen de transport ? (montrer un avion) → Corrigé : un avion","Ce moyen de transport roule-t-il, vole-t-il ou flotte-t-il ? (montrer un bateau) → Corrigé : il flotte","Cite un moyen de transport que tu utilises. → Corrigé : réponse personnelle cohérente","Classe ces 3 images par catégorie : voiture, avion, bateau. → Corrigé : terre / air / eau correctement associés"]),

      m("ANGLAIS","Means of transport",
        "Introduire le vocabulaire anglais des moyens de transport en écho direct au thème d'Environnement de la semaine, par flashcards et répétition.",
        ["Flashcards : car, plane, boat, bicycle","Répéter chaque mot 3 fois en montrant l'image ou le jouet réel","Jeu « Point to the... » : la maîtresse dit un mot, les enfants pointent l'image","Chanson courte reprenant les mots (sur un air connu)","Associer l'image anglaise au mot français déjà appris en Environnement"],
        ["What is this? (montrer un avion) → Corrigé : plane","Point to the car. → Corrigé : la voiture pointée","How do you say « bateau » in English? → Corrigé : boat","Repeat: « bicycle ». → Corrigé : prononciation évaluée"]),

      m("CHANT","Ny mandeha — découverte",
        "Apprendre une chanson malagasy sur le déplacement (« Ny mandeha »), en écho au thème des moyens de transport, pour travailler la mémorisation par répétition rythmée.",
        ["Chanter la chanson en entier une première fois, lentement","Expliquer les mots nouveaux du refrain","Répéter le refrain en chœur, 3 fois","Ajouter des gestes correspondant aux paroles (marcher, avancer)","Chanter par petits groupes","Repérer les mots qui riment"],
        ["Chante le refrain de « Ny mandeha ». → Corrigé : refrain chanté conformément aux paroles apprises","Que raconte cette chanson ? → Corrigé : citer 1 élément du texte de la chanson (le déplacement, la marche)","Montre le geste qui va avec le refrain. → Corrigé : geste conforme à celui appris en classe","Chante avec ton voisin en marchant sur place. → Corrigé : performance en binôme évaluée"]),

      m("RECITATION","Tandremo ny loza — mémorisation des 2 premières lignes",
        "Mémoriser progressivement le poème malagasy « Tandremo ny loza » (fais attention au danger) en écho au thème de la sécurité vu en Morale, par répétition des 2 premières lignes.",
        ["Réciter le poème entier une fois avec expression","Expliquer le sens des mots (danger, prudence)","Répéter la 1ère ligne en chœur, 5 fois","Répéter la 2ème ligne en chœur, 5 fois","Enchaîner les 2 lignes ensemble","Réciter avec un geste de prudence associé (main levée en signe d'arrêt)"],
        ["Récite la première ligne du poème. → Corrigé : ligne récitée conforme au texte appris","Combien de lignes connais-tu ? → Corrigé : 2 lignes","De quoi parle ce poème ? → Corrigé : du danger et de la prudence","Récite les 2 lignes avec le bon geste. → Corrigé : texte + geste conformes à ce qui a été appris"]),

      m("EPS","Jeux brouette",
        "Développer la coordination et la force des bras par le jeu de la brouette en binôme, dans un espace sécurisé et sur de courtes distances.",
        ["Expliquer la consigne en binôme : un enfant avance sur les mains (« la brouette »), l'autre lui tient les jambes","Démonstration par l'enseignant avec un enfant volontaire","Essayer par courtes distances (3 mètres) avec l'aide de l'enseignant","Alterner les rôles entre les 2 enfants du binôme","Variante plus simple pour les enfants qui n'y arrivent pas encore : ramper sur les mains et les genoux","Retour au calme : marche lente"],
        ["Montre la position de la brouette. → Corrigé : appui sur les mains, jambes tenues par le partenaire","Sur quoi avances-tu quand tu es la brouette ? → Corrigé : sur les mains","Que tient ton camarade pendant le jeu ? → Corrigé : tes jambes","Combien de mètres as-tu parcourus en brouette ? → Corrigé : réponse conforme à la distance réellement parcourue (environ 3 mètres)"]),

      m("DESSIN","Un avion",
        "Dessiner un avion (fuselage rectangulaire, ailes triangulaires) en réinvestissant les formes géométriques déjà connues et le thème des transports.",
        ["Montrer une image d'avion","Décomposer la forme : un rectangle allongé pour le fuselage, des triangles pour les ailes","Tracer le fuselage puis les ailes étape par étape","Ajouter des hublots ronds","Colorier l'avion"],
        ["Quelle forme utilises-tu pour le fuselage de l'avion ? → Corrigé : un rectangle (allongé)","Dessine un avion. → Corrigé : forme reconnaissable (fuselage + ailes) et coloriée","Quelle couleur as-tu choisie pour ton avion ? → Corrigé : réponse libre","Montre les ailes de ton avion. → Corrigé : les triangles pointés"]),

      m("TRAVAUX MANUELS","Fête de l'école",
        "Démarrer un projet collectif de décoration pour la fête de l'école (guirlandes et fanions en papier), première étape : préparer les éléments.",
        ["Présenter le projet collectif : décorer la classe pour la fête de l'école","Découper des bandes de papier colorées (aide guidée de l'enseignant)","Coller les bandes en chaîne pour former une guirlande","Commencer le pliage d'un fanion en papier","Ranger le matériel et annoncer la suite du projet la semaine prochaine"],
        ["À quoi sert la guirlande que tu fabriques ? → Corrigé : à décorer la classe pour la fête de l'école","Montre comment tu colles deux bandes de papier ensemble. → Corrigé : geste de collage correctement réalisé","Pour quel évènement fabriques-tu cette décoration ? → Corrigé : la fête de l'école","Combien de maillons a ta guirlande ? → Corrigé : nombre réel de maillons comptés ensemble"]),

      m("CONTE","Vorona nifidy mpanjaka — suite",
        "Poursuivre le conte malagasy « Vorona nifidy mpanjaka » (les oiseaux qui ont choisi un roi) commencé en mars, en développant la compréhension de l'intrigue.",
        ["Rappel des personnages et du début de l'histoire","Raconter la suite du conte avec les images","Discuter : que veulent les oiseaux dans cette histoire ?","Faire répéter une réplique clé d'un personnage","Demander une prédiction simple sur la suite de l'histoire"],
        ["Comment s'appelle ce conte ? → Corrigé : Vorona nifidy mpanjaka","Que veulent les oiseaux dans cette partie de l'histoire ? → Corrigé : réponse conforme au passage raconté (choisir un roi)","Répète ce que dit un des oiseaux. → Corrigé : réplique répétée fidèlement","Que va-t-il se passer selon toi ? → Corrigé : prédiction libre acceptée si cohérente avec l'histoire"])

    ],
  },

  {
    n:3, dates:"19/04/2027 – 23/04/2027",
    theme:"c - k - qu : trois graphies du son [k] · La table de 2 · Compte de 0 à 40",
    matieres:[

      m("LECTURE","Les lettres c, k, qu : trois graphies pour le même son [k]",
        "Faire comprendre que c, k et qu sont 3 façons différentes d'écrire le même son [k], à partir d'exemples familiers, sans exiger de règle orthographique — priorité à la reconnaissance auditive et visuelle.",
        ["Prononcer le son [k] et le faire répéter","Montrer que 3 lettres différentes peuvent faire ce son : café (c), kilo (k), qui (qu)","Combiner avec c : ca, co, cu ; avec k : ka, ki, ko ; avec qu : que, qui","Faire lire les syllabes en chœur puis individuellement","Afficher les 3 graphies côte à côte au tableau avec leurs exemples","Jeu : montrer un mot connu, dire ensemble quelle graphie du son [k] il contient"],
        ["Quel son font ensemble c, k et qu ? → Corrigé : [k]","Lis cette syllabe : ka → Corrigé : [ka]","Cite un mot avec le son [k] écrit avec un k. → Corrigé : kilo, koala (une réponse correcte acceptée)","Montre au tableau les 3 façons d'écrire le son [k]. → Corrigé : c, k, qu pointés"]),

      m("VAKITENY","La lettre k : syllabes malagasy ka-ki-ko",
        "Le malagasy utilise le k comme graphie principale du son [k] : renforcer avec des mots connus et former les premières syllabes.",
        ["Montrer la lettre K au tableau","Prononcer [k] dans des mots connus : kary, kalo, kisoa","Combiner k + a, k + i, k + o au tableau","Faire lire les syllabes en chœur","Jeu de lecture individuelle des syllabes"],
        ["Lis cette syllabe : ka → Corrigé : [ka]","Cite un mot malagasy avec la lettre k. → Corrigé : kary, kisoa (une réponse correcte acceptée)","Lis : ko — ki → Corrigé : lecture correcte des 2 syllabes","Entoure les « k » dans cette ligne : k a l k o k i → Corrigé : les 3 « k » entourés"]),

      m("ÉCRITURE","La lettre k : tracé en trois traits",
        "Apprendre le tracé du k (une canne verticale suivie de deux traits obliques qui se rejoignent), en le distinguant du c (une simple courbe), puis l'attacher aux voyelles.",
        ["Montrer le tracé du c : une courbe simple, comme une demi-lune","Montrer le tracé du k : une canne verticale, puis un trait oblique qui monte et un qui descend, tous deux partant du milieu de la canne","Tracer dans l'air, puis sur l'ardoise, puis sur papier préligné","Tracer « ka » en attachant k et a","Comparer les 2 lettres c et k côte à côte au tableau"],
        ["Trace la lettre k sur ton ardoise. → Corrigé : canne verticale + 2 traits obliques bien formés","Trace la lettre c. → Corrigé : courbe simple correctement tracée","Écris la syllabe « ka ». → Corrigé : k et a correctement attachés et lisibles","Combien de traits faut-il pour tracer un k ? → Corrigé : 3 traits (la canne et les 2 obliques)"]),

      m("LANGAGE","Les animaux du cirque — enrichir le vocabulaire (l'ours, le singe, le trapèze)",
        "Poursuivre l'exploitation du thème en ajoutant du vocabulaire (l'ours, le singe, le trapèze) et en travaillant l'ordre des numéros du spectacle.",
        ["Rappel bref du thème (résumé collectif avec les images)","Remettre 3 images du spectacle dans l'ordre chronologique","Introduire 2 nouveaux mots : l'ours, le singe, le trapèze","Jeu de rôle enrichi : un enfant mime le singe qui se balance au trapèze","Faire raconter un court passage par un enfant volontaire"],
        ["Remets ces 3 images dans l'ordre du spectacle. → Corrigé : entrée → numéro → salut final","Que fait le singe dans le spectacle ? → Corrigé : il se balance, il fait des tours","Avec quoi le trapéziste se balance-t-il ? → Corrigé : le trapèze","Raconte un morceau du spectacle avec tes mots. → Corrigé : récit cohérent avec un épisode réel du thème"]),

      m("PRE-MATH","La table de 2 — l'addition répétée",
        "Introduire la table de 2 comme une suite d'additions répétées de 2, par manipulation concrète d'objets groupés en paquets de 2, sans notation « × » — les enfants découvrent tout juste l'addition et la soustraction.",
        ["Rappel : 2 + 2 = 4 (déjà vu)","Poser un paquet de 2 objets sur la table, puis un 2e paquet : 2 + 2 = 4","Ajouter un 3e paquet de 2 : 2 + 2 + 2 = 6","Ajouter un 4e puis un 5e paquet : 2+2+2+2 = 8, puis 2+2+2+2+2 = 10","Réciter la suite obtenue en ajoutant 2 à chaque fois : 2, 4, 6, 8, 10","Jeu : distribuer des jetons par paquets de 2 et compter le total ensemble"],
        ["Combien font 2 + 2 ? → Corrigé : 4","Ajoute encore 2 à 4. Combien obtiens-tu ? → Corrigé : 6","Range 8 jetons par paquets de 2. Combien de paquets obtiens-tu ? → Corrigé : 4 paquets","Récite la suite en ajoutant 2 à chaque fois, jusqu'à 10. → Corrigé : 2, 4, 6, 8, 10"]),

      m("MATHS","Compter de 0 à 40",
        "Consolider la suite numérique complète de 0 à 40 (36 à 40 vus la semaine précédente) par la récitation collective et la lecture sur la bande numérique.",
        ["Réciter collectivement la suite de 0 à 40","Repérer les nombres sur la bande numérique affichée en classe","Jeu du furet : chaque enfant dit le nombre suivant celui de son voisin","Écrire quelques nombres au tableau (23, 31, 37) et les faire lire","Compter une collection d'objets jusqu'à 40 en la regroupant par dizaines"],
        ["Récite la suite de 0 à 40. → Corrigé : suite complète et correcte","Quel nombre vient juste après 29 ? → Corrigé : 30","Lis ce nombre écrit au tableau : 37 → Corrigé : trente-sept","Combien de dizaines et d'unités y a-t-il dans 40 ? → Corrigé : 4 dizaines et 0 unité"]),

      m("MORALE","Éviter les accidents dans la rue",
        "Sensibiliser à la sécurité routière de base : traverser accompagné d'un adulte, regarder avant de traverser, par la discussion et la mise en situation.",
        ["Discuter des dangers de la rue : voitures, motos, taxi-brousse","Montrer comment traverser en sécurité : regarder à gauche puis à droite, tenir la main d'un adulte","Jeu de rôle : mimer la traversée d'un passage piéton en classe","Règle de classe : toujours être accompagné d'un adulte dans la rue","Observer une image de rue et repérer les dangers présents"],
        ["Que fais-tu avant de traverser la rue ? → Corrigé : je regarde à gauche puis à droite","Avec qui dois-tu traverser la rue ? → Corrigé : avec un adulte","Montre le bon geste pour regarder avant de traverser. → Corrigé : tête tournée à gauche puis à droite","Cite un danger de la rue. → Corrigé : voiture, moto (une réponse acceptée)"]),

      m("ENVIRONNEMENT","Révision — les moyens de transport",
        "Réviser le vocabulaire et les catégories (terre, air, eau) des moyens de transport vus la semaine précédente, par le jeu et la devinette.",
        ["Ressortir les images et jouets de transport de la semaine dernière","Jeu de tri en autonomie : terre / air / eau","Jeu de devinette : « Je roule et j'ai 2 roues, qui suis-je ? »","Associer chaque transport à un bruit mimé (moteur, klaxon)","Bilan collectif des moyens de transport connus"],
        ["Cite 3 moyens de transport que tu connais. → Corrigé : 3 réponses valables (voiture, avion, bateau, vélo...)","Ce moyen de transport vole-t-il ? (montrer un avion) → Corrigé : oui","Range ces images par catégorie : terre, air, eau. → Corrigé : tri correct des images fournies","Quel transport prends-tu pour venir à l'école ? → Corrigé : réponse personnelle"]),

      m("ANGLAIS","Review — means of transport",
        "Réviser le vocabulaire anglais des moyens de transport vu la semaine précédente par un jeu de flashcards et de memory.",
        ["Mélanger les flashcards de la semaine dernière (car, plane, boat, bicycle)","Jeu « Point to the... » avec les flashcards mélangées","Jeu de memory : associer 2 cartes identiques en les nommant en anglais","Chanson de la semaine dernière reprise en groupe","Question-réponse individuelle avec chaque enfant"],
        ["What is this? (montrer une voiture) → Corrigé : car","Point to the boat. → Corrigé : le bateau pointé","How do you say « avion » in English? → Corrigé : plane","Repeat: « bicycle ». → Corrigé : prononciation évaluée"]),

      m("CHANT","Ny mandeha — chanter en entier",
        "Consolider la mémorisation complète de la chanson en ajoutant un 2e couplet et en travaillant la justesse rythmique.",
        ["Rappel du refrain appris la semaine précédente","Ajouter le 2e couplet","Chanter en entier, lentement puis à vitesse normale","Ajouter des gestes sur le 2e couplet","Chanter en 2 groupes qui se répondent"],
        ["Chante la chanson en entier. → Corrigé : refrain + 2 couplets chantés conformément aux paroles apprises","Que dit le 2e couplet ? → Corrigé : citer 1 élément du couplet","Montre le geste du 2e couplet. → Corrigé : geste conforme à celui appris en classe","Chante en groupe en respectant ton tour. → Corrigé : performance collective évaluée"]),

      m("RECITATION","Tandremo ny loza — approfondissement (lignes 3 et 4)",
        "Approfondir le poème appris la semaine précédente en ajoutant les 3e et 4e lignes et en travaillant l'intonation d'avertissement.",
        ["Rappel des 2 premières lignes déjà connues","Réciter le poème entier avec expression pour situer les nouvelles lignes","Répéter la 3ème ligne en chœur, 5 fois","Répéter la 4ème ligne en chœur, 5 fois","Enchaîner les 4 lignes ensemble","Travailler l'intonation d'avertissement (ton ferme) sur l'ensemble du poème"],
        ["Récite les 4 lignes du poème « Tandremo ny loza ». → Corrigé : les 4 lignes récitées conformes au texte appris","Combien de lignes connais-tu maintenant ? → Corrigé : 4 lignes","Quelle ligne parle du danger dans la rue ? → Corrigé : la ligne correspondante correctement identifiée","Récite le poème en entier avec l'intonation adaptée. → Corrigé : texte et ton d'avertissement conformes"]),

      m("EPS","Course",
        "Reprendre le travail de course en ligne droite en ajoutant un chronométrage simple et une variante de transport d'objet.",
        ["Délimiter un couloir de course de 20 mètres avec des plots","Rappel des 3 signaux : « à vos marques, prêts, partez ! »","Courir par groupes de 4 pour éviter les bousculades","Introduire un temps chronométré simplement, en comptant à voix haute","Variante : courir en transportant un petit objet sans le faire tomber","Retour au calme : marche lente"],
        ["Cours jusqu'au plot sans t'arrêter. → Corrigé : distance complète parcourue en courant","Que fais-tu au signal « stop » ? → Corrigé : je m'arrête immédiatement","Combien d'enfants courent en même temps dans ton groupe ? → Corrigé : 4","Transporte l'objet jusqu'à l'arrivée sans le faire tomber. → Corrigé : objet transporté sans chute sur tout le parcours"]),

      m("DESSIN","Dessin libre",
        "Laisser les enfants choisir leur propre sujet de dessin pour développer la créativité, après plusieurs semaines de dessins dirigés.",
        ["Rappeler le matériel disponible (crayons de couleur, feutres)","Proposer de dessiner ce que l'on veut (un souvenir, un animal, sa famille)","Circuler pour encourager sans imposer de sujet","Demander à chacun de nommer son dessin","Exposer les dessins de la classe"],
        ["Que représente ton dessin ? → Corrigé : réponse personnelle cohérente avec le dessin","Pourquoi as-tu choisi de dessiner cela ? → Corrigé : réponse personnelle justifiée","Nomme les couleurs que tu as utilisées. → Corrigé : couleurs correctement nommées","Montre ton dessin à un camarade et explique-le. → Corrigé : dessin présenté et expliqué oralement"]),

      m("TRAVAUX MANUELS","Fête de l'école — suite du projet",
        "Poursuivre le projet collectif de décoration pour la fête de l'école commencé la semaine précédente : assembler les éléments préparés et finaliser la décoration.",
        ["Ressortir les guirlandes et fanions commencés la semaine dernière","Assembler les bandes de papier restantes pour allonger la guirlande","Terminer le pliage des fanions et les enfiler sur un fil","Ajouter des décorations supplémentaires (gommettes, paillettes)","Accrocher la décoration terminée dans la classe","Féliciter le travail collectif accompli"],
        ["Montre la guirlande terminée. → Corrigé : guirlande complète présentée","Combien de fanions la classe a-t-elle fabriqués ? → Corrigé : nombre réel compté ensemble","Où va-t-on accrocher cette décoration ? → Corrigé : dans la classe, pour la fête de l'école","Qu'as-tu ajouté pour décorer ton fanion ? → Corrigé : réponse conforme à la décoration réellement ajoutée"]),

      m("CONTE","Vorona nifidy mpanjaka — approfondissement et fin",
        "Approfondir le conte en travaillant la compréhension de la fin de l'histoire et de sa morale, en réinvestissant les personnages.",
        ["Rappel de toute l'histoire à l'aide des images dans l'ordre","Raconter la fin du conte","Discuter de la morale : pourquoi les oiseaux ont-ils choisi ce roi ?","Faire raconter l'histoire complète par un enfant volontaire","Jeu de rôle : les enfants jouent les oiseaux du conte"],
        ["Comment se termine le conte « Vorona nifidy mpanjaka » ? → Corrigé : résumé de la fin conforme au conte raconté","Quelle leçon peut-on tirer de ce conte ? → Corrigé : réponse acceptée si cohérente avec la morale du conte","Raconte l'histoire entière avec tes mots. → Corrigé : récit cohérent couvrant début-milieu-fin","Quel oiseau as-tu préféré ? Pourquoi ? → Corrigé : réponse personnelle justifiée"])

    ],
  },

  {
    n:4, dates:"26/04/2027 – 30/04/2027",
    theme:"La lettre h · Le drapeau Malagasy et le salut aux couleurs · Compte de 40 à 50",
    matieres:[

      m("LECTURE","La lettre h : une lettre le plus souvent muette",
        "Introduire la lettre h en expliquant sa particularité : seule, elle ne fait pas de son propre (elle est le plus souvent muette), à partir de mots familiers.",
        ["Montrer la lettre H en grand format au tableau","Expliquer, avec le mot « hibou », qu'on n'entend que [i-b-ou], pas de son propre pour le h","Chercher d'autres mots avec h : heure, herbe, hôpital","Combiner h + a, h + i, h + o, h + u, h + e : les syllabes se lisent comme les voyelles seules","Comparer avec les autres consonnes déjà connues, qui ont chacune leur propre son","Jeu : repérer le h caché parmi d'autres lettres sur une affiche"],
        ["La lettre h a-t-elle un son à elle ? → Corrigé : non, elle est le plus souvent muette","Lis cette syllabe : ha → Corrigé : [a]","Cite un mot avec la lettre h. → Corrigé : hibou, heure (une réponse correcte acceptée)","Entoure toutes les lettres h dans cette ligne : h a i h o u h → Corrigé : les 3 « h » entourés"]),

      m("VAKITENY","La lettre h : son aspiré léger en malagasy",
        "Introduire la lettre h en malagasy, où elle est le plus souvent une aspiration très légère, à partir de mots connus.",
        ["Montrer la lettre H au tableau","Prononcer légèrement [h] dans des mots connus : hazo, hena, hoe","Combiner h + a, h + e, h + o au tableau","Faire lire les syllabes en chœur","Jeu de répétition individuelle des syllabes"],
        ["Lis cette syllabe : ha → Corrigé : [ha]","Cite un mot malagasy avec la lettre h. → Corrigé : hazo, hena (une réponse correcte acceptée)","Lis : ho — he → Corrigé : lecture correcte des 2 syllabes","Entoure les « h » dans cette ligne : h a l h o h e → Corrigé : les 3 « h » entourés"]),

      m("ÉCRITURE","La lettre h : tracé de la canne haute et du pont",
        "Apprendre le tracé du h (une grande canne verticale suivie d'un pont), en réinvestissant la hauteur du l déjà connue, puis relier h aux voyelles.",
        ["Montrer le tracé : on descend une grande canne, on remonte au milieu, puis on redescend en formant un pont","Comparer la hauteur du h avec celle du l (les deux sont des lettres hautes)","Tracer dans l'air, puis sur l'ardoise, puis sur papier préligné","Tracer « hi » en attachant h et i","Tracer 3 syllabes différentes avec h sur une même ligne"],
        ["Trace la lettre h sur ton ardoise. → Corrigé : canne haute + pont bien formés","Quelle autre lettre haute connais-tu ? → Corrigé : le l","Écris la syllabe « hi ». → Corrigé : h et i correctement attachés et lisibles","Trace 3 syllabes avec h (ha, ho, he). → Corrigé : tracé des 3 syllabes conforme"]),

      m("LANGAGE","Les animaux du cirque — restitution complète du thème",
        "Conclure le thème du mois par une restitution orale complète en réinvestissant tout le vocabulaire vu (lion, éléphant, ours, singe, clown, dompteur, trapèze).",
        ["Rappel des épisodes précédents à l'aide des images","Reconstituer le spectacle complet à l'aide de 5 images dans l'ordre","Faire raconter le spectacle par un enfant volontaire avec l'aide des images","Discussion : « Quel animal du cirque préfères-tu ? Pourquoi ? »","Jeu de rôle final : chaque enfant choisit un personnage du cirque à mimer"],
        ["Range les 5 images du spectacle dans le bon ordre. → Corrigé : ordre chronologique complet respecté","Raconte le spectacle du cirque du début à la fin. → Corrigé : récit cohérent couvrant plusieurs numéros du spectacle","Quel animal du cirque préfères-tu ? Pourquoi ? → Corrigé : réponse personnelle justifiée","Cite 3 animaux ou personnages du cirque. → Corrigé : 3 réponses parmi lion, éléphant, ours, singe, clown, dompteur"]),

      m("PRE-MATH","Révision — les mots-nombres et la table de 2",
        "Consolider les deux notions du mois (mots-nombres « quatre »/« cinq » et table de 2 comme addition répétée) par des activités mêlées.",
        ["Relire et réécrire les mots « quatre » et « cinq » sur l'ardoise","Refaire l'activité de groupement par paquets de 2 avec des objets (2, 4, 6, 8, 10)","Jeu mêlé : piocher une carte-mot-nombre ou une carte-paquet-de-2 et répondre","Bilan collectif des 2 notions au tableau","Jeu individuel de vérification pour chaque enfant"],
        ["Écris le mot « quatre ». → Corrigé : mot copié lisiblement, lettres dans l'ordre","Combien font 2 + 2 + 2 ? → Corrigé : 6","Range 10 jetons par paquets de 2. Combien de paquets obtiens-tu ? → Corrigé : 5 paquets","Associe le chiffre 5 à son mot écrit. → Corrigé : 5 relié à « cinq »"]),

      m("MATHS","Compter de 40 à 50",
        "Étendre la suite numérique connue (0 à 40) vers 50, par manipulation d'objets groupés en dizaines puis d'unités supplémentaires.",
        ["Rappel : compter collectivement jusqu'à 40","Grouper des bâtonnets en 4 paquets de 10","Ajouter un bâtonnet à la fois jusqu'à obtenir 50 : 41, 42... 50","Réciter ensemble la suite 40 à 50","Écrire les nombres 40 à 50 au tableau et les faire lire","Jeu : pointer chaque nombre sur la bande numérique affichée jusqu'à 50"],
        ["Récite la suite de 40 à 50. → Corrigé : 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50","Quel nombre vient juste après 45 ? → Corrigé : 46","Combien de dizaines complètes y a-t-il dans 50 ? → Corrigé : 5 dizaines","Complète la suite : 41, 42, __, 44, __ → Corrigé : 43 et 45"]),

      m("MORALE","Discipline pendant le salut aux couleurs",
        "Apprendre le comportement attendu pendant le salut au drapeau malagasy (silence, immobilité, attention), en lien avec le thème du drapeau vu en Environnement.",
        ["Expliquer ce qu'est le salut aux couleurs : le moment où l'on honore le drapeau du pays","Montrer la posture correcte : debout, silencieux, attentif, regard vers le drapeau","Pratiquer un salut simulé dans la cour ou en classe","Discuter : pourquoi le silence et la discipline sont-ils importants à ce moment ?","Participer avec la posture apprise au vrai salut aux couleurs de l'école"],
        ["Que fais-tu pendant le salut aux couleurs ? → Corrigé : je reste debout, silencieux et attentif","Montre la bonne posture pour le salut aux couleurs. → Corrigé : posture conforme (debout, immobile, regard au drapeau)","Pourquoi doit-on rester silencieux pendant le salut ? → Corrigé : pour honorer le drapeau et respecter ce moment","Où doit se porter ton attention pendant le salut ? → Corrigé : vers le drapeau"]),

      m("ENVIRONNEMENT","Le drapeau Malagasy",
        "Découvrir le drapeau malagasy (couleurs blanc, rouge, vert et leur disposition), en lien direct avec la discipline du salut aux couleurs vue en Morale.",
        ["Montrer le drapeau malagasy réel ou en image","Nommer les 3 couleurs et leur disposition : bande blanche à la hampe, rouge et vert en bandes horizontales","Expliquer que c'est le symbole du pays, à respecter","Chercher le drapeau dans la cour ou la salle de classe","Jeu : reconstituer le drapeau avec des bandes de papier de couleur"],
        ["Quelles sont les 3 couleurs du drapeau malagasy ? → Corrigé : blanc, rouge, vert","Où se trouve la bande blanche sur le drapeau ? → Corrigé : à la hampe (du côté du mât)","À quoi sert un drapeau ? → Corrigé : c'est le symbole d'un pays, à respecter","Reconstitue le drapeau avec les bandes de couleur. → Corrigé : disposition blanc-rouge-vert correcte"]),

      m("ANGLAIS","Malagasy Flag",
        "Reprendre en anglais le thème du drapeau vu en Environnement, avec les couleurs et une structure simple.",
        ["Flashcards : flag, white, red, green","Structure « The flag is white, red and green »","Nommer les couleurs en anglais en montrant le vrai drapeau","Jeu « Point to the... » avec les couleurs du drapeau","Répéter la phrase en groupe puis individuellement"],
        ["What is this? (montrer le drapeau) → Corrigé : flag","What color is this? (montrer le rouge) → Corrigé : red","Say: « The flag is white, red and green ». → Corrigé : phrase répétée correctement","Point to the green part of the flag. → Corrigé : la bande verte pointée"]),

      m("CHANT","À la claire fontaine — découverte",
        "Découvrir une nouvelle chanson traditionnelle française pour clore le mois avec un répertoire varié, par écoute et répétition rythmée.",
        ["Chanter la chanson en entier une première fois, lentement","Expliquer les mots nouveaux (la fontaine, se promener)","Répéter le refrain en chœur, 3 fois","Ajouter des gestes simples correspondant aux paroles","Chanter par petits groupes","Repérer les mots qui riment"],
        ["Chante le refrain de « À la claire fontaine ». → Corrigé : refrain chanté conformément aux paroles apprises","Que raconte cette chanson ? → Corrigé : citer 1 élément du texte de la chanson","Montre le geste qui va avec le refrain. → Corrigé : geste conforme à celui appris en classe","Chante avec ton voisin en te tenant la main. → Corrigé : performance en binôme évaluée"]),

      m("RECITATION","Tiako ange ny vonikazo — découverte",
        "Découvrir un nouveau poème malagasy sur les fleurs (« Tiako ange ny vonikazo ») et mémoriser les 2 premières lignes par répétition collective.",
        ["Réciter le poème entier une fois avec expression","Expliquer le vocabulaire (vonikazo = fleur)","Répéter la 1ère ligne en chœur, 5 fois","Répéter la 2ème ligne en chœur, 5 fois","Réciter les 2 lignes avec le geste de sentir une fleur"],
        ["Récite la première ligne du poème « Tiako ange ny vonikazo ». → Corrigé : ligne récitée conforme au texte appris","De quoi parle ce poème ? → Corrigé : des fleurs","Combien de lignes connais-tu ? → Corrigé : 2 lignes","Récite les 2 lignes avec le bon geste. → Corrigé : texte et geste conformes"]),

      m("EPS","Jeux et course",
        "Combiner le jeu de la brouette (vu en semaine 2) et la course (vue en semaine 3) en un parcours final du mois, favorisant la coopération entre enfants.",
        ["Installer un parcours mêlant l'atelier brouette et l'atelier course","Rappeler les consignes des 2 ateliers","Faire passer chaque enfant sur les 2 ateliers, par binômes","Alterner les rôles dans le binôme pour l'atelier brouette","Retour au calme : marche lente en discutant du parcours"],
        ["Réalise le parcours brouette puis course. → Corrigé : les 2 ateliers réalisés dans l'ordre","Que fais-tu au signal « stop » pendant la course ? → Corrigé : je m'arrête immédiatement","Avec qui as-tu fait la brouette ? → Corrigé : réponse conforme au binôme réel","Qu'as-tu préféré dans ce parcours ? → Corrigé : réponse personnelle"]),

      m("DESSIN","Un drapeau Malagasy",
        "Dessiner le drapeau malagasy (rectangle divisé en 3 zones de couleurs) en réinvestissant le vocabulaire et les couleurs vus en Environnement.",
        ["Montrer le vrai drapeau malagasy","Tracer un grand rectangle","Diviser le rectangle : une bande verticale à gauche, deux bandes horizontales à droite","Colorier en respectant les couleurs et leur disposition : blanc, rouge, vert","Vérifier la disposition des couleurs avec le modèle"],
        ["Quelle forme de base utilises-tu pour dessiner un drapeau ? → Corrigé : un rectangle","Dessine le drapeau malagasy. → Corrigé : rectangle divisé en 3 zones, couleurs et disposition correctes","Quelles couleurs utilises-tu ? → Corrigé : blanc, rouge, vert","Montre la bande blanche de ton drapeau. → Corrigé : la bande verticale pointée"]),

      m("TRAVAUX MANUELS","Peinture",
        "Peindre au pinceau sur le thème du drapeau malagasy, en réinvestissant les 3 couleurs vues en Environnement et le geste du pinceau.",
        ["Présenter la peinture blanche, rouge et verte et les pinceaux, rappeler les règles d'usage","Montrer le geste : tremper le pinceau, essuyer le surplus","Peindre les 3 bandes du drapeau sur une silhouette de rectangle prédessinée","Respecter la disposition des couleurs vue en Environnement","Laisser sécher et nettoyer le matériel ensemble"],
        ["Montre comment tu tiens le pinceau. → Corrigé : prise ferme, pinceau non écrasé","Quelles couleurs utilises-tu pour peindre le drapeau ? → Corrigé : blanc, rouge, vert","Que fais-tu avant de changer de couleur ? → Corrigé : rincer le pinceau","Range ton pinceau et ton pot après usage. → Corrigé : matériel rangé et propre"]),

      m("CONTE","Petit chaperon rouge — découverte",
        "Découvrir ce conte classique par l'écoute active, l'observation d'images séquentielles, et l'identification des personnages principaux.",
        ["Présenter les images du conte une par une, dans l'ordre","Raconter le conte avec expression et voix différenciées par personnage","Nommer les personnages : le Petit Chaperon rouge, le loup, la grand-mère, le chasseur","Poser 2-3 questions de compréhension immédiate","Faire répéter la réplique clé : « Que tu as de grandes dents ! »"],
        ["Comment s'appelle la fillette de ce conte ? → Corrigé : le Petit Chaperon rouge","Qui rencontre-t-elle dans la forêt ? → Corrigé : le loup","Montre l'image où le loup apparaît. → Corrigé : bonne image pointée","Répète la réplique du Petit Chaperon rouge. → Corrigé : « Que tu as de grandes dents ! » répétée fidèlement"])

    ],
  }

];

const MAI_12EME = [

  {
    n:1, dates:"10/05/2027 – 14/05/2027",
    theme:"La lettre g : syllabes ga-gi-go-gu-ge (Lecture/Écriture) · g (Vakiteny) · Les animaux du cirque · Nombres pairs 0 à 50 · Bonne fête Maman",
    matieres:[

      m("LECTURE","La lettre g : son [g] dur (ga, go, gu) et son doux [ʒ] (ge, gi)",
        "Introduire la dernière consonne nouvelle de l'année. Isoler d'abord le son [g] dur dans des mots connus, puis expliquer que devant e et i le g devient doux et se prononce [ʒ] — une subtilité du français à bien faire entendre et répéter, en s'appuyant sur les 5 voyelles déjà connues.",
        ["Montrer la lettre G en grand format au tableau (majuscule et minuscule)","Prononcer le son [g] dur dans des mots connus : gomme, gare, légume","Combiner g + a, g + o, g + u au tableau : ga, go, gu — faire lire chaque syllabe","Expliquer que devant e et i, le g devient doux et se prononce [ʒ] comme dans « girafe »","Combiner g + e, g + i : ge, gi — faire lire en insistant sur le son [ʒ]","Comparer les deux prononciations sur une même ligne : ga (dur) / gi (doux)","Jeu : la maîtresse pointe une syllabe, l'enfant dit si le g est dur ou doux avant de lire"],
        ["Quel son fait la lettre g devant a ? → Corrigé : [g] dur (comme dans « gomme »)","Quel son fait la lettre g devant i ? → Corrigé : [ʒ] doux (comme dans « girafe »)","Lis ces syllabes : ga — go — gu → Corrigé : lecture correcte des 3 syllabes avec g dur","Lis ces syllabes : ge — gi → Corrigé : lecture correcte avec le son [ʒ]"]),

      m("VAKITENY","La lettre g : le son [g] toujours dur en malagasy",
        "Montrer qu'en malagasy le g garde toujours le même son [g], contrairement au français vu en Lecture cette semaine — simplifier la règle en contraste direct, puis former les syllabes avec les voyelles malagasy connues.",
        ["Montrer la lettre G au tableau","Prononcer [g] dans des mots connus : gisa, goaika","Combiner g + a, g + i, g + o, g + u, g + e au tableau : ga, gi, go, gu, ge","Faire remarquer que contrairement au français, le g garde toujours le même son [g] en malagasy","Faire lire les syllabes en chœur puis individuellement","Jeu : la maîtresse dit une syllabe, l'enfant montre où elle est écrite"],
        ["Quel son fait la lettre g en malagasy ? → Corrigé : toujours [g] (dur)","Lis cette syllabe : gi → Corrigé : [gi] (g dur, contrairement au français)","Cite un mot malagasy avec le son [g]. → Corrigé : gisa, goaika (une réponse correcte acceptée)","Lis : ga — ge — go → Corrigé : lecture correcte des 3 syllabes, g toujours dur"]),

      m("ÉCRITURE","La lettre g : tracé du rond et de la boucle descendante",
        "Apprendre le tracé du g (un rond suivi d'une boucle qui descend sous la ligne), en s'appuyant sur le rond du o déjà connu, puis l'attacher aux voyelles pour écrire les syllabes ga-go-gu.",
        ["Montrer le tracé au tableau : on commence par un rond, puis on descend en boucle sous la ligne","Tracer dans l'air en verbalisant « je fais le rond, je descends, je boucle »","Tracer sur l'ardoise à la craie (format large)","Tracer sur papier préligné en respectant le dépassement sous la ligne","Comparer avec le rond du o déjà connu (le g commence pareil puis descend)","Attacher g aux voyelles pour écrire ga, go, gu","Tracer 3 syllabes différentes sur une même ligne"],
        ["Trace la lettre g sur ton ardoise. → Corrigé : rond fermé suivi d'une boucle descendante sous la ligne","Quelle lettre déjà connue commence comme le g ? → Corrigé : le o (le rond)","Écris la syllabe « go ». → Corrigé : g et o correctement attachés et lisibles","Trace 3 syllabes avec g (ga, gu, ge). → Corrigé : tracé des 3 syllabes conforme"]),

      m("LANGAGE","Les animaux du cirque — découverte",
        "Découvrir le vocabulaire des animaux et personnages du cirque (lion, éléphant, singe, cheval, dompteur) à partir d'images, en structurant des phrases simples sujet-verbe-complément.",
        ["Présenter des images d'un spectacle de cirque avec plusieurs animaux","Nommer le vocabulaire nouveau : le lion, l'éléphant, le singe, le cheval, le dompteur","Décrire ce que fait chaque animal (le lion saute dans le cerceau, l'éléphant se dresse sur ses pattes)","Répéter la phrase clé : « Au cirque, il y a un lion »","Poser 3 questions de compréhension simples après la présentation","Jeu de rôle : un enfant imite un animal du cirque, les autres devinent lequel"],
        ["Cite 3 animaux qu'on peut voir au cirque. → Corrigé : lion, éléphant, singe, cheval (3 parmi ces réponses)","Que fait le lion au cirque ? → Corrigé : il saute dans le cerceau","Montre l'image de l'éléphant. → Corrigé : bonne image pointée","Répète la phrase : « Au cirque, il y a un lion ». → Corrigé : phrase répétée avec la structure correcte"]),

      m("PRE-MATH","Révision : les formes géométriques",
        "Revoir les formes de base vues dans l'année (rond, carré, triangle, rectangle) par manipulation et tri, en première étape de la révision de fin d'année.",
        ["Rappeler les formes vues dans l'année : rond, carré, triangle, rectangle","Trier une boîte d'objets mélangés par forme","Jeu : la maîtresse montre une forme, les enfants la nomment le plus vite possible","Chercher des formes dans la classe et les nommer","Associer chaque forme à son contour tracé au tableau","Jeu de mémoire : retourner des cartes-formes par paires identiques"],
        ["Montre-moi le rectangle. → Corrigé : la forme rectangulaire désignée","Quelle forme a 3 côtés ? → Corrigé : le triangle","Trie ces formes en 4 tas. → Corrigé : tri correct rond/carré/triangle/rectangle","Cite un objet carré de la classe. → Corrigé : fenêtre, cahier (une réponse valable acceptée)"]),

      m("MATHS","Les nombres pairs de 0 à 50",
        "Consolider la reconnaissance des nombres pairs en étendant la règle apprise en octobre (0 à 10) à toute la suite de 0 à 50, vue en comptage en avril.",
        ["Rappel : compter de 0 à 50 (vu en avril)","Rappel de la règle du nombre pair (rangé par 2 sans reste), vue en octobre sur 0-10","Réciter la suite des pairs 0, 2, 4... jusqu'à 50 par groupes de 10","Colorier les cases paires sur une bande numérique 0-50","Jeu : la maîtresse dit un nombre, les enfants disent « pair » ou « impair »","Grouper des objets par 2 pour vérifier un nombre donné entre 20 et 50"],
        ["Récite les nombres pairs de 30 à 40. → Corrigé : 30, 32, 34, 36, 38, 40","Ce nombre est-il pair : 47 ? → Corrigé : non (impair)","Colorie les nombres pairs sur la bande 40 à 50. → Corrigé : 40, 42, 44, 46, 48, 50 coloriés","48 jetons rangés par 2 : ce nombre est-il pair ? → Corrigé : oui, 48 est pair"]),

      m("MORALE","Révision : la politesse (bonjour, merci, s'il te plaît)",
        "Revoir les formules de politesse apprises dans l'année, en lien avec le respect envers les parents à l'approche de la fête des mères.",
        ["Rappeler les formules de politesse apprises dans l'année : bonjour, merci, s'il te plaît, pardon","Jeu de rôle : saluer en entrant en classe, remercier après un service rendu","Discuter : pourquoi dit-on merci à maman à la maison ?","Mise en situation : demander poliment un objet à un camarade","Valoriser les enfants qui utilisent spontanément ces formules pendant la journée"],
        ["Que dis-tu en entrant dans la classe le matin ? → Corrigé : bonjour","Que dis-tu quand on te rend service ? → Corrigé : merci","Comment demandes-tu poliment un crayon à ton voisin ? → Corrigé : « s'il te plaît, peux-tu me prêter un crayon ? »","Pourquoi est-il important de dire merci à maman ? → Corrigé : pour montrer qu'on est reconnaissant de ce qu'elle fait pour nous"]),

      m("ENVIRONNEMENT","Révision : le corps humain et l'hygiène",
        "Revoir les parties du corps et les gestes d'hygiène associés, première étape d'une rotation de révision des grands thèmes de l'année.",
        ["Rappeler les parties du corps déjà vues (tête, bras, jambes, mains...)","Nommer chaque partie sur soi-même puis sur un camarade","Rappeler les objets de toilette et leur usage (savon, brosse à dents)","Jeu : « Touche ta tête / touche tes pieds » de plus en plus vite","Associer chaque partie du corps à son geste d'hygiène (mains → savon, dents → brosse)"],
        ["Montre ta tête. → Corrigé : la tête touchée","À quoi sert le savon ? → Corrigé : à se laver les mains/le corps","Cite 3 parties du corps. → Corrigé : tête, bras, jambes (3 parmi ces réponses)","Touche tes pieds puis tes mains. → Corrigé : gestes réalisés dans le bon ordre"]),

      m("ANGLAIS","Review : body parts",
        "Réviser le vocabulaire anglais des parties du corps en écho direct au thème d'Environnement de la semaine.",
        ["Flashcards : head, hands, feet, arms","Répéter chaque mot 3 fois en touchant la partie du corps","Chanson « Head, shoulders, knees and toes » avec gestes","Jeu « Touch your... » : la maîtresse dit un mot, les enfants touchent la partie","Associer l'image anglaise au mot français déjà connu"],
        ["Touch your head. → Corrigé : la tête touchée","What is this? (montrer la main) → Corrigé : hand","How do you say « les pieds » in English? → Corrigé : feet","Repeat: « arms ». → Corrigé : prononciation évaluée"]),

      m("CHANT","Amin'ity Nosy Malalanay — découverte",
        "Découvrir ce chant patriotique malgache qui célèbre l'amour de Madagascar, notre île — première écoute et explication du sens général avant la mémorisation.",
        ["Chanter la chanson en entier une première fois, avec émotion","Expliquer le sens général : un chant qui parle de l'amour pour Madagascar, notre île","Expliquer les mots nouveaux du refrain","Répéter le refrain en chœur, phrase par phrase","Montrer une carte ou un drapeau de Madagascar pendant l'écoute","Discuter : pourquoi aime-t-on son pays ?"],
        ["De quoi parle cette chanson ? → Corrigé : de l'amour pour Madagascar, notre île","Chante le début du refrain. → Corrigé : début du refrain chanté conformément aux paroles entendues","Montre le drapeau de Madagascar. → Corrigé : bon drapeau/image pointé","Répète un mot nouveau appris dans la chanson. → Corrigé : un mot du texte correctement répété"]),

      m("RECITATION","Bonne fête Maman",
        "Mémoriser progressivement le poème « Bonne fête Maman » à l'occasion de la fête des mères, en lien avec la carte réalisée en travaux manuels et le dessin de la semaine.",
        ["Réciter le poème entier une fois avec expression et tendresse","Expliquer le sens des mots (amour, tendresse, merci maman)","Répéter la 1ère ligne en chœur, 5 fois","Répéter la 2ème ligne en chœur, 5 fois","Enchaîner les 2 lignes ensemble","Associer le poème à la carte/dessin réalisé pour maman"],
        ["Récite la première ligne du poème « Bonne fête Maman ». → Corrigé : ligne récitée conforme au texte appris","De qui parle ce poème ? → Corrigé : de maman","Combien de lignes connais-tu ? → Corrigé : 2 lignes","Récite les 2 lignes devant la classe. → Corrigé : texte récité conforme à ce qui a été appris"]),

      m("EPS","Jeux : ballon",
        "Développer la manipulation du ballon (rouler, lancer, rattraper) en grand groupe, dans un cercle qui favorise l'échange entre tous les enfants.",
        ["Former un grand cercle avec les enfants","Faire rouler le ballon d'un enfant à l'autre en disant son prénom","Lancer et rattraper le ballon à 2 mains, à faible distance","Jeu : faire des passes en cercle sans faire tomber le ballon","Augmenter progressivement la distance de lancer","Retour au calme : ballon posé, respiration"],
        ["Lance le ballon à ton camarade sans le faire tomber. → Corrigé : passe réalisée avec les 2 mains","Fais rouler le ballon vers moi. → Corrigé : ballon roulé au sol, direction correcte","Rattrape le ballon que je te lance. → Corrigé : ballon rattrapé avec les 2 mains","Que fait-on quand on reçoit le ballon en cercle ? → Corrigé : on le relance à un autre enfant en disant son prénom"]),

      m("DESSIN","Dessin libre — une carte pour maman",
        "Réaliser un dessin libre à l'occasion de la fête des mères, en laissant chaque enfant choisir son sujet (fleur, cœur, portrait).",
        ["Rappeler que c'est bientôt la fête des mères","Proposer de dessiner librement quelque chose pour maman (fleur, cœur, portrait)","Laisser chaque enfant choisir son sujet librement","Circuler pour aider les enfants qui hésitent (proposer une idée simple)","Colorier avec soin","Glisser le dessin dans la carte réalisée en travaux manuels"],
        ["Qu'as-tu choisi de dessiner pour maman ? → Corrigé : réponse personnelle","Montre ton dessin. → Corrigé : production présentée","Quelle couleur as-tu utilisée le plus ? → Corrigé : réponse libre","Pourquoi as-tu dessiné cela pour maman ? → Corrigé : réponse personnelle justifiée"]),

      m("TRAVAUX MANUELS","Coloriage",
        "Colorier une image de bouquet de fleurs pour en faire une carte-cadeau de fête des mères, en consolidant la prise du crayon et le respect des contours.",
        ["Distribuer une image à colorier (un bouquet de fleurs pour maman)","Rappeler la prise du crayon (prise tripode)","Montrer comment rester dans les contours","Choisir des couleurs adaptées aux fleurs","Colorier en autonomie, l'enseignant circule pour aider","Coller le coloriage sur une carte pliée pour en faire un cadeau"],
        ["Montre ta prise de crayon. → Corrigé : prise tripode observée","As-tu colorié en restant dans les contours ? → Corrigé : évaluation visuelle du respect des contours","Quelle couleur as-tu utilisée pour les fleurs ? → Corrigé : réponse libre cohérente","Montre ta carte terminée pour maman. → Corrigé : production présentée"]),

      m("CONTE","Le Petit Chaperon Rouge — rappel et suite",
        "Reprendre le conte débuté fin avril : rappeler le départ chez la grand-mère puis raconter la rencontre du Petit Chaperon Rouge avec le loup dans la forêt.",
        ["Rappeler le début de l'histoire vu en avril (le Petit Chaperon Rouge part voir sa grand-mère)","Raconter la suite : la rencontre avec le loup dans la forêt","Nommer les personnages : le Petit Chaperon Rouge, le loup, la grand-mère","Poser des questions de compréhension sur la rencontre avec le loup","Faire répéter la réplique clé du loup ou du Chaperon Rouge","Discuter : le Petit Chaperon Rouge a-t-il raison de parler au loup ?"],
        ["Rappelle le début de l'histoire. → Corrigé : résumé conforme au début raconté en avril","Qui rencontre le Petit Chaperon Rouge dans la forêt ? → Corrigé : le loup","Où va le Petit Chaperon Rouge ? → Corrigé : chez sa grand-mère","Le Petit Chaperon Rouge a-t-il raison de parler au loup ? Pourquoi ? → Corrigé : réponse personnelle justifiée (ex : non, il ne faut pas parler aux inconnus)"])

    ],
  },

  {
    n:2, dates:"18/05/2027 – 21/05/2027",
    theme:"La lettre z : syllabes za-zi-zo-zu-ze (Lecture/Écriture) · z (Vakiteny) · Les animaux du cirque · Compte à rebours 50 à 0 · Bonne Fête Papa",
    matieres:[

      m("LECTURE","La lettre z : son [z] et syllabes za-zi-zo-zu-ze",
        "Introduire la dernière lettre nouvelle de l'année. Isoler le son [z] en le comparant au [s] déjà connu (le z vibre dans la gorge, pas le s), puis former les syllabes avec les 5 voyelles connues.",
        ["Montrer la lettre Z en grand format au tableau","Prononcer le son [z] en mettant la main sur la gorge pour sentir la vibration","Comparer avec le son [s] déjà connu (le z vibre, le s ne vibre pas)","Combiner z + a, z + i, z + o, z + u, z + e au tableau : za, zi, zo, zu, ze","Faire lire la ligne de syllabes en chœur puis individuellement","Chercher des mots avec [z] : zèbre, zéro, zone","Jeu : la maîtresse pointe une syllabe, l'enfant la lit"],
        ["Quel son fait la lettre z ? → Corrigé : [z] (comme dans « zèbre »)","Cette lettre vibre-t-elle dans la gorge : s ou z ? → Corrigé : z","Lis ces syllabes dans l'ordre : za — zo — zu → Corrigé : lecture correcte des 3 syllabes","Quelle syllabe obtient-on avec z + e ? → Corrigé : ze"]),

      m("VAKITENY","La lettre z : premières syllabes en malagasy",
        "Introduire le son [z] en malagasy et former les premières syllabes avec les voyelles malagasy déjà connues.",
        ["Montrer la lettre Z au tableau","Prononcer [z] dans des mots connus : zaza, zavatra","Combiner z + a, z + e au tableau : za, ze","Faire lire les syllabes en chœur","Jeu de lecture individuelle des syllabes","Comptine récapitulative des consonnes de l'année"],
        ["Lis cette syllabe : za → Corrigé : [za]","Cite un mot malagasy qui commence par « za ». → Corrigé : zaza, zavatra (une réponse correcte acceptée)","Lis : zo — ze → Corrigé : lecture correcte des 2 syllabes","Entoure les syllabes avec « z » : za — la — zo — ga → Corrigé : za, zo entourés"]),

      m("ÉCRITURE","La lettre z : tracé en 3 traits",
        "Apprendre le tracé du z (un trait horizontal en haut, une diagonale, un trait horizontal en bas), puis l'attacher aux voyelles pour écrire les syllabes za-zo.",
        ["Montrer le tracé : un trait horizontal en haut, une diagonale, un trait horizontal en bas","Tracer dans l'air en verbalisant « je vais, je descends en biais, je vais »","Tracer sur l'ardoise à la craie","Tracer sur papier préligné","Comparer avec des lettres déjà connues faites de traits droits","Attacher z aux voyelles pour écrire za, zo","Tracer 3 syllabes différentes sur une même ligne"],
        ["Trace la lettre z sur ton ardoise. → Corrigé : 2 traits horizontaux reliés par une diagonale, tracé de gauche à droite","Combien de traits a la lettre z ? → Corrigé : 3 (deux horizontaux, un diagonal)","Écris la syllabe « zo ». → Corrigé : z et o correctement attachés et lisibles","Trace 3 syllabes avec z (za, zu, ze). → Corrigé : tracé des 3 syllabes conforme"]),

      m("LANGAGE","Les animaux du cirque — enrichir le vocabulaire",
        "Poursuivre le thème du cirque en ajoutant du vocabulaire (l'ours, l'acrobate, le clown, le trapèze) et en travaillant l'ordre chronologique du spectacle.",
        ["Rappel bref du vocabulaire de la semaine précédente","Introduire de nouveaux mots : l'ours, l'acrobate, le clown, le trapèze","Remettre 3 images du spectacle dans l'ordre (arrivée du public → numéros → salut final)","Jeu de rôle enrichi : un enfant joue le clown, un autre l'acrobate","Faire raconter un court passage par un enfant volontaire"],
        ["Cite 2 nouveaux animaux ou personnages du cirque appris cette semaine. → Corrigé : ours, acrobate, clown (2 parmi ces réponses)","Que fait l'acrobate au cirque ? → Corrigé : il fait des figures sur le trapèze / des acrobaties","Remets ces 3 images dans l'ordre du spectacle. → Corrigé : arrivée du public → numéros → salut final","Raconte un morceau du spectacle de cirque avec tes mots. → Corrigé : récit cohérent avec un épisode réel présenté en classe"]),

      m("PRE-MATH","Révision : autant, plus, moins",
        "Revoir les notions de comparaison de collections (autant, plus, moins) vues dans l'année par manipulation directe, deuxième étape de la révision de fin d'année.",
        ["Rappeler les notions « autant », « plus », « moins » vues dans l'année","Aligner 2 collections égales : vérifier « autant »","Aligner 2 collections inégales : nommer « plus » et « moins »","Jeu : donner à chaque enfant une quantité et comparer avec son voisin","Vérifier collectivement par mise en correspondance terme à terme","Récapituler les 3 mots avec un exemple pour chacun"],
        ["Y a-t-il autant de crayons que de cahiers ici ? → Corrigé : oui / non selon la configuration montrée","Quelle collection a le moins d'objets ? → Corrigé : la plus petite collection pointée","Mets autant de jetons rouges que de jetons bleus (5 montrés). → Corrigé : 5 jetons rouges posés","Compare tes billes à celles de ton voisin : qui en a plus ? → Corrigé : réponse vérifiée par comptage ou correspondance"]),

      m("MATHS","Compter à rebours de 50 à 0",
        "Étendre le comptage à rebours (déjà maîtrisé de 10 à 0 depuis octobre) jusqu'à 50, en s'appuyant sur la suite 0-50 consolidée la semaine précédente.",
        ["Rappel : compter à rebours de 10 à 0 (vu en octobre)","Réciter à rebours par dizaines : 50, 40, 30, 20, 10, 0","Réciter à rebours en continu à partir de 20 : 20, 19, 18... 0","Jeu de la fusée géante : chaque enfant compte à rebours une portion de la suite","Utiliser une bande numérique 0-50 en la lisant de droite à gauche","Jeu individuel : décoller sa fusée en comptant à rebours depuis 15"],
        ["Compte à rebours de dizaine en dizaine depuis 50. → Corrigé : 50, 40, 30, 20, 10, 0","Compte à rebours de 20 à 0. → Corrigé : 20, 19, 18, ..., 1, 0 récités correctement","Quel nombre vient juste après 30 en comptant à rebours ? → Corrigé : 29","Fais décoller ta fusée en comptant à rebours depuis 10. → Corrigé : 10, 9, ..., 0 récités correctement"]),

      m("MORALE","Révision : le respect et le partage",
        "Revoir les règles de respect envers les autres et de partage vues dans l'année, en écho au respect envers les parents à l'approche de la fête des pères.",
        ["Rappeler pourquoi il faut respecter ses camarades et ses parents","Discuter des règles de partage vues dans l'année (partager ses jouets, attendre son tour)","Jeu de rôle : partager un jeu avec un camarade sans se disputer","Discuter : comment montre-t-on du respect à papa à la maison ?","Valoriser les comportements respectueux observés en classe"],
        ["Que fais-tu si un camarade veut jouer avec le même jouet que toi ? → Corrigé : on partage ou on attend son tour","Comment montres-tu du respect à tes parents ? → Corrigé : réponse personnelle (obéir, être poli, aider)","Pourquoi ne faut-il pas se moquer d'un camarade ? → Corrigé : parce que ça peut le blesser, il faut le respecter","Cite une règle de partage apprise cette année. → Corrigé : attendre son tour, partager les jouets (une réponse acceptée)"]),

      m("ENVIRONNEMENT","Révision : les aliments et les ustensiles de cuisine",
        "Revoir le vocabulaire des aliments et des ustensiles de cuisine, deuxième étape de la rotation de révision des grands thèmes de l'année.",
        ["Rappeler les aliments déjà vus (fruits, légumes, riz)","Nommer les ustensiles de cuisine : cuillère, assiette, casserole, verre","Jeu de tri : aliments d'un côté, ustensiles de l'autre","Associer chaque ustensile à son usage (cuillère → manger la soupe)","Jeu de Kim : cacher un ustensile, deviner lequel manque"],
        ["Comment s'appelle cet ustensile ? (montrer une cuillère) → Corrigé : une cuillère","Cite 2 aliments que tu manges souvent. → Corrigé : riz, fruits, légumes (2 parmi ces réponses)","À quoi sert la casserole ? → Corrigé : à cuire les aliments","Trie ces objets : riz, cuillère, banane, assiette. → Corrigé : aliments (riz, banane) / ustensiles (cuillère, assiette) correctement séparés"]),

      m("ANGLAIS","Review : food",
        "Réviser le vocabulaire anglais des aliments et ustensiles en écho direct au thème d'Environnement de la semaine.",
        ["Flashcards : rice, banana, spoon, plate","Répéter chaque mot 3 fois avec l'objet réel ou l'image","Jeu « Point to the... » avec les aliments/ustensiles","Chanson courte reprenant les mots","Associer l'image anglaise au mot français déjà appris"],
        ["What is this? (montrer une banane) → Corrigé : banana","Point to the spoon. → Corrigé : la cuillère pointée","How do you say « le riz » in English? → Corrigé : rice","Repeat: « plate ». → Corrigé : prononciation évaluée"]),

      m("CHANT","Amin'ity Nosy Malalanay — mémorisation",
        "Consolider la mémorisation complète du chant en ajoutant les couplets suivants et en travaillant la justesse, après la découverte de la semaine précédente.",
        ["Rappel du refrain découvert la semaine précédente","Ajouter les couplets suivants","Chanter en entier, lentement puis à vitesse normale","Répéter chaque couplet en petits groupes","Ajouter des gestes simples évoquant l'île et le drapeau","Chanter en 2 groupes qui se répondent"],
        ["Chante le refrain en entier. → Corrigé : refrain chanté conformément aux paroles apprises","Que dit le 2e couplet ? → Corrigé : citer 1 élément du couplet","Montre le geste appris pour cette chanson. → Corrigé : geste conforme à celui appris en classe","Chante en groupe en respectant ton tour. → Corrigé : performance collective évaluée"]),

      m("RECITATION","Bonne Fête Papa",
        "Découvrir et mémoriser progressivement le poème « Bonne Fête Papa » à l'occasion de la fête des pères, en lien avec le dessin ou la carte réalisée pour papa.",
        ["Réciter le poème entier une fois avec expression","Expliquer le sens des mots (force, protection, merci papa)","Répéter la 1ère ligne en chœur, 5 fois","Répéter la 2ème ligne en chœur, 5 fois","Enchaîner les 2 lignes ensemble","Associer le poème au dessin ou à la carte réalisée pour papa"],
        ["Récite la première ligne du poème « Bonne Fête Papa ». → Corrigé : ligne récitée conforme au texte appris","De qui parle ce poème ? → Corrigé : de papa","Combien de lignes connais-tu ? → Corrigé : 2 lignes","Récite les 2 lignes devant la classe. → Corrigé : texte récité conforme à ce qui a été appris"]),

      m("EPS","Jeux : Avy mangataka",
        "Découvrir « Avy mangataka » (littéralement « venir demander »), un jeu collectif traditionnel malgache où une équipe vient réclamer un joueur de l'équipe adverse, avec des règles simples adaptées à l'âge des enfants.",
        ["Présenter le jeu comme un jeu traditionnel malgache : « Avy mangataka » signifie « venir demander »","Former 2 équipes se faisant face, séparées par une ligne","Une équipe avance en chantant une formule pour « demander » un joueur de l'autre équipe","L'équipe demandée désigne un enfant qui doit traverser en courant sans se faire toucher","S'il traverse sans être touché, il rejoint la nouvelle équipe ; sinon il reste dans son équipe","Alterner les rôles entre les 2 équipes","Retour au calme : marche lente en cercle"],
        ["Que signifie « Avy mangataka » ? → Corrigé : venir demander","Que fait l'équipe qui avance dans ce jeu ? → Corrigé : elle demande un joueur de l'autre équipe en chantant la formule","Que se passe-t-il si le joueur traverse sans se faire toucher ? → Corrigé : il rejoint la nouvelle équipe","Ce jeu vient-il d'un autre pays ou est-il malgache ? → Corrigé : c'est un jeu traditionnel malgache"]),

      m("DESSIN","Dessin libre — une carte pour papa",
        "Réaliser un dessin libre à l'occasion de la fête des pères, en laissant chaque enfant choisir son sujet.",
        ["Rappeler que c'est bientôt la fête des pères","Proposer de dessiner librement quelque chose pour papa","Laisser chaque enfant choisir son sujet librement","Circuler pour aider les enfants qui hésitent","Colorier avec soin","Glisser le dessin dans la carte réalisée en travaux manuels"],
        ["Qu'as-tu choisi de dessiner pour papa ? → Corrigé : réponse personnelle","Montre ton dessin. → Corrigé : production présentée","Quelle couleur as-tu utilisée le plus ? → Corrigé : réponse libre","Pourquoi as-tu dessiné cela pour papa ? → Corrigé : réponse personnelle justifiée"]),

      m("TRAVAUX MANUELS","Peinture",
        "Peindre un motif simple pour la carte de la fête des pères, en développant le geste large du pinceau et le mélange de couleurs.",
        ["Présenter la peinture et les pinceaux, rappeler les règles d'usage","Montrer le geste : tenir le pinceau, tremper, essuyer le surplus","Peindre un motif simple pour la carte de papa (cravate, cœur)","Mélanger 2 couleurs pour en obtenir une nouvelle","Laisser sécher et nettoyer le matériel ensemble","Coller la peinture sur une carte pliée"],
        ["Montre comment tu tiens le pinceau. → Corrigé : prise ferme, pinceau non écrasé","Que fais-tu avant de changer de couleur ? → Corrigé : rincer le pinceau","Quelle couleur obtiens-tu en mélangeant jaune et bleu ? → Corrigé : vert","Montre ta carte peinte pour papa. → Corrigé : production présentée"]),

      m("CONTE","Le Petit Chaperon Rouge — suite",
        "Poursuivre le conte : le loup arrive en premier chez la grand-mère et se déguise pour tromper le Petit Chaperon Rouge.",
        ["Rappel de la rencontre avec le loup vue la semaine précédente","Raconter la suite : le loup arrive en premier chez la grand-mère","Raconter : le loup se déguise en grand-mère pour tromper le Petit Chaperon Rouge","Poser des questions de compréhension sur cette ruse","Faire répéter la réplique célèbre « Que tu as de grandes... ! »","Discuter : pourquoi le loup se déguise-t-il ?"],
        ["Qui arrive en premier chez la grand-mère ? → Corrigé : le loup","Que fait le loup en arrivant chez la grand-mère ? → Corrigé : il se déguise en grand-mère / il la trompe","Répète une des répliques célèbres du dialogue. → Corrigé : réplique répétée fidèlement (ex : « que tu as de grandes dents ! »)","Pourquoi le loup se déguise-t-il en grand-mère ? → Corrigé : pour tromper le Petit Chaperon Rouge"])

    ],
  },

  {
    n:3, dates:"24/05/2027 – 28/05/2027",
    theme:"Révisions : relecture de synthèse (Lecture) · Famerenana (Vakiteny) · Les animaux du cirque (restitution) · Révision maths et pré-math · Amin'ity Nosy Malalanay (interprétation)",
    matieres:[

      m("LECTURE","Révisions — relire les syllabes de l'année",
        "Après g et z, dernières lettres nouvelles de l'année, faire une vraie relecture de synthèse mêlant plusieurs consonnes vues depuis septembre, sans introduire de nouvelle lettre.",
        ["Rappeler toutes les consonnes vues dans l'année : l, t, d, n, m, b, p, v, r, s, j, f, c/k/qu, h, g, z","Composer une grande fiche de syllabes mêlant plusieurs lettres : la, zo, gu, ta, se, mi","Faire lire la fiche en chœur puis individuellement","Jeu : piocher une syllabe au hasard et la lire à voix haute","Lire quelques mots simples formés de 2 syllabes déjà connues (papa, lune, zoo, gare)","Repérer la lettre la plus difficile pour chaque enfant et la retravailler individuellement"],
        ["Lis ces syllabes mélangées : ga — zo — la — mu → Corrigé : lecture correcte des 4 syllabes","Lis ce mot : lune → Corrigé : lecture correcte du mot","Quelle lettre te semble la plus difficile à lire ? → Corrigé : réponse personnelle, retravaillée individuellement","Lis ce mot : zébu → Corrigé : lecture correcte du mot (ou approchante avec aide)"]),

      m("VAKITENY","Famerenana — famerenana ny litera rehetra",
        "Mamerina ny litera sy ny fanambarana rehetra hitan'ny mpianatra nandritra ny taona manontolo, ho fanamafisana farany alohan'ny fanamarinana.",
        ["Mamerina ny litera rehetra hitantsika nandritra ny taona (l, t, d, n, m, b, p, v, r, s, j, f, k, h, g, z)","Manangana lisitry ny fanambarana mifangaro : la, zo, ga, ta, se","Mamaky ireo fanambarana ho an'ny kilasy manontolo","Lalao : misintona fanambarana iray isaky ny mpianatra ka mamaky azy","Mamaky teny fohy roa na telo natao tamin'ny litera efa fantatra"],
        ["Vakio ireto : ga — za — la → Valiny : vakiana tsara ny fanambarana telo","Vakio ity teny ity : vary → Valiny : vakiana tsara","Inona ny litera farany nianarana tamin'ity taona ity ? → Valiny : g sy z","Tsongò ny litera « z » amin'ity andalana ity : g z l z a → Valiny : ny « z » roa voatsongo"]),

      m("ÉCRITURE","Révision — tracer les lettres et syllabes de l'année",
        "Consolider le tracé des lettres du mois (g, z) et des syllabes mêlant plusieurs consonnes de l'année, sur une fiche individuelle.",
        ["Distribuer une fiche avec des lignes pour plusieurs lettres de l'année","Faire tracer g et z chacun 2 fois pour consolider les nouveautés du mois","Faire écrire 3 syllabes mêlant plusieurs consonnes (ga, zo, la)","Circuler et corriger la tenue du crayon et la hauteur des lettres","Faire copier un petit mot simple (zoo, lune)"],
        ["Trace la lettre g. → Corrigé : rond suivi d'une boucle descendante","Trace la lettre z. → Corrigé : 3 traits (2 horizontaux, 1 diagonal)","Écris la syllabe « za ». → Corrigé : z et a correctement attachés et lisibles","Copie le mot « zoo ». → Corrigé : mot copié lisiblement avec les 3 lettres correctes"]),

      m("LANGAGE","Les animaux du cirque — restitution",
        "Conclure le thème du cirque par une restitution orale complète, en réinvestissant tout le vocabulaire vu sur les 2 semaines.",
        ["Rappel de tout le vocabulaire vu sur les 2 semaines (lion, éléphant, ours, acrobate, clown...)","Reconstituer le déroulement complet du spectacle à l'aide de plusieurs images","Faire raconter le spectacle complet par un enfant volontaire","Discussion : « Quel numéro du cirque as-tu préféré ? »","Jeu de rôle final : chaque enfant choisit un rôle et mime son numéro"],
        ["Range les images du spectacle de cirque dans le bon ordre. → Corrigé : ordre chronologique complet respecté","Raconte le spectacle de cirque du début à la fin. → Corrigé : récit cohérent couvrant plusieurs numéros","Cite tous les animaux du cirque que tu connais. → Corrigé : au moins 4 animaux nommés correctement","Quel numéro as-tu préféré ? Pourquoi ? → Corrigé : réponse personnelle justifiée"]),

      m("PRE-MATH","Révision : addition, soustraction et table de 2",
        "Revoir l'addition, la soustraction et la table de 2 vues en avril, en clôturant la révision des grandes notions de pré-math de l'année.",
        ["Rappeler ce qu'est additionner (réunir) et soustraire (enlever) avec des objets","Faire quelques petites additions avec des jetons (2+2, 3+1)","Faire quelques petites soustractions avec des jetons (4-2, 5-1)","Rappeler la table de 2 vue en avril (2, 4, 6, 8, 10)","Jeu : la maîtresse pose une petite opération, les enfants répondent avec des jetons","Récapituler les notions de l'année : formes, comparaisons, addition, soustraction, table de 2"],
        ["Combien font 2 jetons plus 2 jetons ? → Corrigé : 4","J'ai 5 jetons, j'en enlève 2, combien en reste-t-il ? → Corrigé : 3","Récite la table de 2 jusqu'à 10. → Corrigé : 2, 4, 6, 8, 10","Cite une notion apprise cette année en Pré-math. → Corrigé : les formes, autant/plus, addition, soustraction ou la table de 2 (une réponse acceptée)"]),

      m("MATHS","Révision : nombres pairs, compte à rebours et notions de l'année",
        "Consolider les nombres pairs 0-50 et le compte à rebours 50-0 vus ce mois-ci, en lien avec les impairs vus en octobre, avant la semaine de révision finale.",
        ["Faire réciter la suite des nombres pairs de 0 à 50 par groupes","Faire compter à rebours de 50 à 0 par dizaines puis en continu sur une portion","Rappeler les nombres impairs (vus en octobre) pour contraste","Jeu mêlé : la maîtresse dit un nombre, les enfants disent pair/impair puis le nombre suivant/précédent","Bilan collectif des grandes notions de maths de l'année"],
        ["Récite les nombres pairs de 0 à 50. → Corrigé : 0, 2, 4, ..., 48, 50 récités correctement (au moins jusqu'à 30 sans erreur)","Compte à rebours de 50 à 0 par dizaines. → Corrigé : 50, 40, 30, 20, 10, 0","Ce nombre est-il pair ou impair : 33 ? → Corrigé : impair","Quel nombre vient juste avant 20 en comptant à rebours ? → Corrigé : 19"]),

      m("MORALE","Révision : la sécurité et le comportement en collectivité",
        "Revoir les règles de sécurité et de comportement en collectivité vues dans l'année, troisième et dernière étape de la révision de fin d'année.",
        ["Rappeler les règles de sécurité vues dans l'année (traverser en tenant la main d'un adulte, ne pas courir près de la route)","Discuter des règles de vie en collectivité (attendre son tour, ne pas pousser)","Jeu de rôle : faire une file d'attente calmement pour la récréation","Mise en situation : que faire si on se perd dans un lieu public ?","Valoriser les comportements sûrs et respectueux observés en classe"],
        ["Comment traverses-tu la route ? → Corrigé : en tenant la main d'un adulte, après avoir regardé des deux côtés","Que fais-tu si tu es perdu dans un lieu public ? → Corrigé : je reste sur place et je demande de l'aide à un adulte de confiance","Comment te comportes-tu dans une file d'attente ? → Corrigé : j'attends calmement mon tour sans pousser","Pourquoi ne faut-il pas courir près de la route ? → Corrigé : parce que c'est dangereux, il y a des voitures"]),

      m("ENVIRONNEMENT","Révision : les animaux",
        "Revoir les animaux domestiques et sauvages et leur habitat, troisième et dernière étape de la rotation de révision des grands thèmes de l'année.",
        ["Rappeler les animaux domestiques et sauvages vus dans l'année","Trier des images d'animaux par catégorie : domestique / sauvage","Associer chaque animal à son habitat (la poule au poulailler, le lion dans la savane)","Jeu d'imitation : imiter le cri ou le déplacement d'un animal, les autres devinent","Associer chaque animal à son nom écrit (image-mot)"],
        ["Cite 2 animaux domestiques. → Corrigé : poule, chien, chat, zébu (2 parmi ces réponses)","Cite 2 animaux sauvages. → Corrigé : lion, éléphant, zèbre (2 parmi ces réponses)","Où vit la poule ? → Corrigé : dans le poulailler","Imite le cri d'un animal, fais deviner lequel. → Corrigé : cri reconnu par la classe correspondant à l'animal choisi"]),

      m("ANGLAIS","Review : animals",
        "Réviser le vocabulaire anglais des animaux, en mêlant animaux domestiques, sauvages et du cirque vus dans le mois.",
        ["Flashcards mélangées : lion, elephant, hen, dog","Répéter chaque mot 3 fois avec l'image","Jeu « Point to the... » avec les animaux","Chanson courte sur les animaux","Associer l'image anglaise au mot français déjà appris"],
        ["What is this? (montrer un lion) → Corrigé : lion","Point to the dog. → Corrigé : le chien pointé","How do you say « la poule » in English? → Corrigé : hen","Repeat: « elephant ». → Corrigé : prononciation évaluée"]),

      m("CHANT","Amin'ity Nosy Malalanay — interprétation",
        "Interpréter le chant avec expression et fierté devant la classe, dernière étape après la découverte et la mémorisation des semaines précédentes.",
        ["Rappel de la chanson entière apprise les 2 semaines précédentes","Travailler l'expression : chanter avec fierté et émotion","Ajouter des gestes pour illustrer les paroles (l'île, la mer, le cœur)","Répéter en petits groupes puis en solo pour les volontaires","Interprétation finale devant la classe entière, comme pour une fête","Discuter : que ressent-on en chantant ce chant pour son pays ?"],
        ["Chante la chanson en entier avec les gestes. → Corrigé : chanson entière chantée conformément aux paroles et gestes appris","Quel sentiment exprime cette chanson ? → Corrigé : l'amour et la fierté pour Madagascar","Montre 2 gestes différents appris pour cette chanson. → Corrigé : 2 gestes conformes à ceux appris en classe","Chante seul devant la classe (pour les volontaires). → Corrigé : performance individuelle évaluée avec bienveillance"]),

      m("RECITATION","Bonne Fête Papa — restitution individuelle",
        "Poursuivre la mémorisation du poème « Bonne Fête Papa » vu la semaine précédente en travaillant cette fois la restitution individuelle devant la classe, avec expression.",
        ["Rappel collectif du poème « Bonne Fête Papa » appris la semaine précédente","Réciter les 2 lignes en chœur une dernière fois pour consolider","Faire réciter individuellement chaque enfant volontaire devant la classe","Travailler l'expression et le ton (tendresse, fierté)","Valoriser chaque enfant qui récite, même partiellement","Associer la récitation au dessin/carte réalisée pour papa"],
        ["Récite le poème « Bonne Fête Papa » en entier devant la classe. → Corrigé : les 2 lignes récitées conformes au texte appris, avec une intonation appropriée","Combien de lignes récites-tu maintenant ? → Corrigé : 2 lignes","Avec quelle carte associes-tu ce poème ? → Corrigé : la carte/dessin réalisé pour papa","Récite avec un ton qui montre l'amour pour papa. → Corrigé : intonation évaluée avec bienveillance"]),

      m("EPS","Jeux : Avy mangataka",
        "Approfondir le jeu traditionnel malgache découvert la semaine précédente, avec une variante et une réflexion sur les stratégies de jeu.",
        ["Rappeler les règles du jeu « Avy mangataka » vues la semaine précédente","Rejouer le jeu en variant la formule chantée par l'équipe qui demande","Introduire une variante : autoriser 2 joueurs à traverser en même temps","Faire tourner les rôles pour que chaque enfant expérimente les deux équipes","Discuter des stratégies : comment éviter de se faire toucher en traversant ?","Retour au calme : marche lente en cercle"],
        ["Rappelle la règle du jeu « Avy mangataka ». → Corrigé : une équipe demande un joueur de l'autre équipe qui doit traverser sans se faire toucher","Comment fais-tu pour ne pas te faire toucher en traversant ? → Corrigé : réponse personnelle (courir vite, esquiver)","As-tu joué dans les 2 équipes aujourd'hui ? → Corrigé : oui, réponse vérifiée par observation","Ce jeu est-il un jeu individuel ou collectif ? → Corrigé : collectif (jeu d'équipe)"]),

      m("DESSIN","Dessin libre",
        "Laisser chaque enfant choisir librement son sujet de dessin, sans thème imposé, en s'inspirant si besoin du cirque ou des animaux vus dans le mois.",
        ["Proposer un temps de dessin libre sans consigne imposée","Suggérer des idées si un enfant ne sait pas quoi dessiner (le cirque, un animal, sa famille)","Laisser chaque enfant choisir son sujet et le réaliser à son rythme","Circuler pour valoriser chaque production, sans intervenir sur le choix","Colorier ou finaliser le dessin","Présenter son dessin oralement au groupe"],
        ["Qu'as-tu choisi de dessiner aujourd'hui ? → Corrigé : réponse personnelle","Montre ton dessin au groupe. → Corrigé : production présentée","Pourquoi as-tu choisi ce sujet ? → Corrigé : réponse personnelle justifiée","Quelle couleur domine dans ton dessin ? → Corrigé : réponse libre"]),

      m("TRAVAUX MANUELS","Brumage",
        "Découvrir la technique du brumage : projeter de fines gouttelettes de peinture à la brosse à dents autour d'un pochoir pour révéler une forme en réserve.",
        ["Présenter la technique du brumage : projeter de fines gouttelettes de peinture à l'aide d'une brosse à dents","Poser un pochoir (une forme découpée) sur la feuille","Tremper la brosse à dents dans une peinture liquide diluée","Frotter les poils de la brosse avec le doigt pour projeter la peinture en fine brume autour du pochoir","Retirer délicatement le pochoir pour révéler la forme blanche entourée de brume colorée","Laisser sécher et nettoyer le matériel ensemble"],
        ["Avec quel outil projette-t-on la peinture en brumage ? → Corrigé : une brosse à dents","Que se passe-t-il quand on retire le pochoir ? → Corrigé : la forme apparaît en blanc, entourée de peinture","Montre comment tu frottes la brosse pour faire la brume. → Corrigé : geste de frottement des poils avec le doigt observé","Montre ta production en brumage. → Corrigé : production présentée avec la forme du pochoir visible"]),

      m("CONTE","Le Petit Chaperon Rouge — fin",
        "Conclure le conte : le chasseur arrive et sauve la grand-mère et le Petit Chaperon Rouge, dénouement et première approche de la morale.",
        ["Rappel de la ruse du loup vue la semaine précédente","Raconter la fin : le chasseur arrive et sauve la grand-mère et le Petit Chaperon Rouge","Discuter du dénouement : le loup est puni, tout se termine bien","Faire répéter la dernière réplique du conte","Remettre toutes les images du conte dans l'ordre (du début à la fin)","Discussion sur la morale de l'histoire : il ne faut pas parler aux inconnus ni s'éloigner du chemin"],
        ["Qui sauve la grand-mère et le Petit Chaperon Rouge ? → Corrigé : le chasseur","Comment se termine l'histoire ? → Corrigé : le chasseur délivre la grand-mère et le Chaperon Rouge, le loup est puni","Range les images de toute l'histoire dans l'ordre. → Corrigé : ordre chronologique complet respecté (début-milieu-fin)","Quelle est la morale de ce conte ? → Corrigé : il ne faut pas parler aux inconnus ni s'éloigner du chemin"])

    ],
  },

  {
    n:4, dates:"31/05/2027 – 04/06/2027",
    theme:"RÉVISION — Bilan de fin d'année : lecture, course, restitution du conte",
    matieres:[

      m("LECTURE","RÉVISION — évaluation individuelle de fin d'année : sons et syllabes",
        "Vérifier individuellement, sur l'ensemble des lettres vues depuis septembre (dernières : g et z), la reconnaissance des sons et la lecture de syllabes mêlant plusieurs consonnes.",
        ["Faire passer chaque enfant individuellement pendant que les autres travaillent en autonomie","Présenter des cartes-lettres au hasard parmi toutes celles vues dans l'année et demander le son","Présenter 4-5 syllabes mêlant plusieurs consonnes à lire (ga, zo, la, mi)","Faire lire un mot simple de 2 syllabes (zébu, lune)","Noter la réussite sur une grille simple (acquis / en cours / non acquis) pour le bilan de fin d'année"],
        ["Quel son fait cette lettre ? (montrer g) → Corrigé : [g] dur devant a/o/u, [ʒ] devant e/i","Quel son fait cette lettre ? (montrer z) → Corrigé : [z]","Lis ces syllabes : ga — zo — la → Corrigé : lecture correcte des 3 syllabes","Lis ce mot : zébu → Corrigé : lecture correcte du mot (ou approchante avec aide)"]),

      m("VAKITENY","Famerenana — fanamarinana farany ny litera g sy z",
        "Poursuivre la Famerenana de la semaine précédente par une vérification individuelle rapide des sons g, z et des syllabes malagasy de l'année, en clôture du mois.",
        ["Mamerina ny litera g sy z indray mandeha farany","Mitondra ny mpianatra tsirairay hamaky fanambarana iray na roa (ga, za)","Manamarina ny fahaizana mamaky ny litera rehetra nianarana","Mihira ny kalon'ny litera ho fehiny"],
        ["Vakio ity : ga → Valiny : [ga]","Vakio ity : za → Valiny : [za]","Inona ny litera nianarana tamin'ny volana May ? → Valiny : g sy z","Tsongò ny litera g amin'ity andalana ity : g z l g a → Valiny : ny g roa voatsongo"]),

      m("ÉCRITURE","Révision — vérification individuelle du tracé de g et z",
        "Clore la révision d'écriture du mois par une vérification individuelle du tracé de g et z et de leur assemblage en syllabes, avant le bilan de fin d'année.",
        ["Distribuer une fiche de tracé individuelle avec g et z","Faire tracer g 2 fois, z 2 fois","Faire écrire une syllabe avec g et une avec z (ga, ze)","Circuler et corriger la tenue du crayon et la hauteur des lettres","Noter la réussite sur une grille simple"],
        ["Trace la lettre g. → Corrigé : rond suivi d'une boucle descendante, tracé propre","Trace la lettre z. → Corrigé : 3 traits (2 horizontaux, 1 diagonal)","Écris la syllabe « ga ». → Corrigé : g et a correctement attachés et lisibles","Écris la syllabe « ze ». → Corrigé : z et e correctement attachés et lisibles"]),

      m("LANGAGE","Les animaux du cirque — restitution individuelle finale",
        "Clore définitivement le thème du cirque par une restitution individuelle libre, chaque enfant racontant son numéro préféré avec le vocabulaire acquis sur le mois.",
        ["Rappel collectif rapide de tout le vocabulaire du cirque vu en semaines 1 à 3","Faire choisir à chaque enfant son numéro de cirque préféré","Faire raconter individuellement ce numéro avec ses propres mots","Valoriser l'utilisation du vocabulaire appris (lion, éléphant, acrobate, clown...)","Discussion finale : « Aimerais-tu aller au cirque ? »"],
        ["Raconte ton numéro de cirque préféré. → Corrigé : récit personnel utilisant au moins 2 mots de vocabulaire appris","Cite un animal et un personnage du cirque. → Corrigé : 1 animal (lion, éléphant...) + 1 personnage (clown, acrobate...) cités correctement","Aimerais-tu aller au cirque ? Pourquoi ? → Corrigé : réponse personnelle justifiée","Que fait le dompteur au cirque ? → Corrigé : il dirige les animaux (lion, éléphant...)"]),

      m("PRE-MATH","Révision — bilan des notions de l'année",
        "Clore la révision de pré-math par un bilan individuel mêlant toutes les notions de l'année : formes, comparaisons, addition, soustraction, table de 2.",
        ["Préparer une fiche de bilan avec une question de chaque notion","Faire passer chaque enfant individuellement","Noter les acquis sur une grille simple","Reprendre en petit groupe les notions encore fragiles"],
        ["Montre le triangle. → Corrigé : la forme triangulaire désignée","Y a-t-il autant de billes ici (2 collections égales) ? → Corrigé : oui","Combien font 3 jetons plus 1 jeton ? → Corrigé : 4","Récite la table de 2 jusqu'à 6. → Corrigé : 2, 4, 6"]),

      m("MATHS","Révision — bilan de fin d'année : nombres pairs, impairs, compte à rebours",
        "Réaliser le bilan individuel de fin d'année en maths : compter jusqu'à 50, nombres pairs et impairs, compte à rebours de 50 à 0.",
        ["Faire compter individuellement de 0 à 50 (ou une portion)","Faire réciter les nombres pairs et impairs sur une portion de la suite","Faire compter à rebours de 50 à 0 (ou une portion)","Noter les acquis sur une grille simple pour le bilan de fin d'année"],
        ["Compte de 40 à 50. → Corrigé : 40, 41, 42, ..., 50 récités correctement","Ce nombre est-il pair ou impair : 25 ? → Corrigé : impair","Compte à rebours de 30 à 20. → Corrigé : 30, 29, ..., 20 récités correctement","Récite les nombres pairs de 20 à 30. → Corrigé : 20, 22, 24, 26, 28, 30"]),

      m("MORALE","Révision — bilan des règles de vie de l'année",
        "Clore l'année par un bilan oral des règles de vie apprises : hygiène, habillement, politesse, respect, sécurité.",
        ["Rappeler brièvement les grands thèmes de morale de l'année","Poser une question orale sur chaque thème à quelques enfants","Valoriser les bons comportements observés toute l'année","Discussion finale : « Quelle règle trouves-tu la plus importante ? »"],
        ["Que fais-tu avant de manger ? → Corrigé : je me lave les mains","Que dis-tu quand on te rend service ? → Corrigé : merci","Comment traverses-tu la route ? → Corrigé : en tenant la main d'un adulte","Quelle règle trouves-tu la plus importante ? Pourquoi ? → Corrigé : réponse personnelle justifiée"]),

      m("ENVIRONNEMENT","Révision — bilan des thèmes de l'année",
        "Clore l'année par un bilan mêlant tous les thèmes de l'année : corps/hygiène, vêtements/météo, aliments/ustensiles, animaux.",
        ["Montrer des images mélangées des différents thèmes de l'année","Demander de nommer et classer chaque image par thème","Jeu de reconnaissance rapide en grand groupe","Valoriser les connaissances acquises sur l'année"],
        ["Nomme cet objet. (montrer une brosse à dents) → Corrigé : une brosse à dents","Classe ces images par thème : pantalon, riz, lion. → Corrigé : vêtement / aliment / animal correctement associés","Quel temps fait-il aujourd'hui ? → Corrigé : réponse conforme à l'observation du jour","Cite un thème étudié cette année en Environnement. → Corrigé : le corps, les vêtements, la météo, les aliments ou les animaux (une réponse acceptée)"]),

      m("ANGLAIS","Review : bilan du mois (body, food, animals)",
        "Réviser tout le vocabulaire anglais du mois (corps, aliments, animaux) par un jeu de flashcards mélangées, en clôture de l'année.",
        ["Mélanger toutes les flashcards du mois (body parts, food, animals)","Piocher et nommer chaque carte en anglais","Jeu « Point to the... » avec le vocabulaire du mois","Valoriser les progrès de chaque enfant sur l'année"],
        ["What is this? (montrer une main) → Corrigé : hand","What is this? (montrer une banane) → Corrigé : banana","Point to the lion. → Corrigé : le lion pointé","How do you say « le riz » in English? → Corrigé : rice"]),

      m("CHANT","Amin'ity Nosy Malalanay — restitution finale",
        "Terminer l'année par une dernière interprétation du chant « Amin'ity Nosy Malalanay », en restitution collective devant la classe.",
        ["Rappel de la chanson entière et de ses gestes","Répéter une dernière fois en grand groupe","Interprétation finale présentée devant une autre classe ou les parents","Discussion : que retiens-tu de ce chant ?"],
        ["Chante « Amin'ity Nosy Malalanay » en entier avec les gestes. → Corrigé : chanson chantée conformément aux paroles et gestes appris","Que retiens-tu de ce chant ? → Corrigé : réponse personnelle (amour du pays, fierté)","Montre un geste appris pour cette chanson. → Corrigé : geste conforme à celui appris en classe","Aimerais-tu chanter cette chanson à tes parents ? → Corrigé : réponse personnelle"]),

      m("RECITATION","Bilan des poèmes de mai",
        "Faire un bilan des 2 poèmes du mois (« Bonne fête Maman », « Bonne Fête Papa ») pour consolider la mémorisation avant la fin de l'année.",
        ["Réciter « Bonne fête Maman » en chœur","Réciter « Bonne Fête Papa » en chœur","Faire réciter individuellement les volontaires","Valoriser les progrès de chacun"],
        ["Récite « Bonne fête Maman ». → Corrigé : texte récité conforme à ce qui a été appris","Récite « Bonne Fête Papa ». → Corrigé : texte récité conforme à ce qui a été appris","Quel poème préfères-tu ? → Corrigé : réponse personnelle","De qui parlent ces 2 poèmes ? → Corrigé : de maman et de papa"]),

      m("EPS","Course",
        "Reprendre la course en ligne droite vue en octobre, sur un couloir allongé, en clôturant l'année par un petit temps de course chronométré et valorisé.",
        ["Délimiter un couloir de course plus long que celui d'octobre (20 mètres)","Rappeler les 3 signaux : « à vos marques, prêts, partez ! »","Courir par groupes de 4 pour éviter les bousculades","Chronométrer de façon ludique en comptant à voix haute","Organiser une petite « course finale » où chaque enfant est chronométré et encouragé","Retour au calme : marche lente et étirements simples"],
        ["Cours jusqu'au plot sans t'arrêter. → Corrigé : distance complète parcourue en courant","Que fais-tu au signal « à vos marques, prêts » ? → Corrigé : je me mets prêt à partir, immobile","Dans quel couloir dois-tu rester en courant ? → Corrigé : le couloir délimité par les plots ou la corde","As-tu couru plus vite qu'au mois d'octobre ? → Corrigé : réponse personnelle, progrès valorisé"]),

      m("DESSIN","Dessin libre",
        "Laisser chaque enfant choisir librement son sujet de dessin pour clore l'année, en suggérant éventuellement son moment préféré de l'année scolaire.",
        ["Proposer un temps de dessin libre sans consigne imposée","Suggérer de dessiner son moment préféré de l'année scolaire si l'enfant hésite","Laisser chaque enfant choisir son sujet librement","Circuler pour valoriser chaque production","Colorier ou finaliser le dessin","Exposer les dessins de la classe"],
        ["Qu'as-tu choisi de dessiner ? → Corrigé : réponse personnelle","Montre ton dessin. → Corrigé : production présentée","Quel a été ton moment préféré de l'année si tu l'as dessiné ? → Corrigé : réponse personnelle","Quelle couleur as-tu utilisée le plus ? → Corrigé : réponse libre"]),

      m("TRAVAUX MANUELS","Coloriage",
        "Colorier une scène de fin d'année en autonomie, pour consolider une dernière fois la prise du crayon et le respect des contours.",
        ["Distribuer une image à colorier (une scène de fin d'année, ex : des enfants qui jouent)","Rappeler la prise du crayon (prise tripode)","Montrer comment rester dans les contours","Choisir des couleurs librement","Colorier en autonomie, l'enseignant circule pour aider","Exposer les productions de la classe"],
        ["Montre ta prise de crayon. → Corrigé : prise tripode observée","As-tu colorié en restant dans les contours ? → Corrigé : évaluation visuelle du respect des contours","Quelle couleur as-tu utilisée le plus ? → Corrigé : réponse libre","Montre ton coloriage terminé. → Corrigé : production présentée"]),

      m("CONTE","Le Petit Chaperon Rouge — restitution et moralité",
        "Clore le conte débuté fin avril par une restitution complète à plusieurs voix et une dernière discussion sur la morale de l'histoire.",
        ["Remettre toutes les images de l'histoire dans l'ordre en grand groupe","Raconter le conte à plusieurs voix (un enfant par épisode : début, rencontre du loup, ruse, fin)","Discuter une dernière fois de la morale du conte","Faire raconter l'histoire complète par un enfant volontaire, seul","Jeu de rôle final : les enfants jouent l'histoire entière avec des rôles distribués"],
        ["Comment s'appellent les personnages de cette histoire ? → Corrigé : le Petit Chaperon Rouge, le loup, la grand-mère, le chasseur","Raconte l'histoire entière avec tes mots. → Corrigé : récit cohérent couvrant début-milieu-fin","Quelle est la leçon de ce conte ? → Corrigé : il ne faut pas parler aux inconnus ni s'éloigner du chemin","Quel personnage as-tu préféré ? Pourquoi ? → Corrigé : réponse personnelle justifiée"])

    ],
  }

];

const JUIN_12EME = [

  {
    n:1, dates:"07/06/2027 – 11/06/2027",
    theme:"EXAMEN ORAL — Bilan annuel individuel : sons et syllabes, nombres jusqu'à 50, contes, chants et vocabulaire de l'année",
    matieres:[

      m("LECTURE","Évaluation orale — bilan des sons et syllabes de la méthode syllabique (septembre à mai)",
        "Vérifier individuellement, sur toute l'année, la reconnaissance des sons appris (i, a, o, u, e, l, t, d, n, m, b, p, v, r, s, j, f, c/k/qu, h, g, z) et la capacité à lire des syllabes combinant ces sons, en un passage oral court pendant que le reste de la classe travaille en autonomie.",
        ["Faire passer chaque enfant individuellement pendant que les autres colorient en autonomie","Présenter, dans le désordre, 8 cartes-lettres choisies parmi tous les sons vus depuis septembre (par exemple o, u, l, t, b, r, j, g) et demander le son de chacune","Présenter 3 syllabes mêlant des consonnes de différents mois (par exemple ra, mu, fo) à lire","Présenter un mot simple déjà rencontré en classe (par exemple moto) à lire syllabe par syllabe","Noter le résultat de chaque enfant sur une grille simple (acquis / en cours / non acquis) par groupe de sons","Valoriser les progrès réalisés depuis septembre, quel que soit le résultat du jour"],
        ["Quel son fait cette lettre ? (montrer g) → Corrigé : [g] (dur, comme dans « gare »)","Lis ces syllabes : ra — mu — fo → Corrigé : lecture correcte des 3 syllabes","Lis ce mot : moto → Corrigé : lecture correcte des 2 syllabes « mo » et « to »","Entoure les lettres apprises cette année dans cette ligne : a w l k t x b → Corrigé : a, l, k, t, b entourés (w et x n'ont pas été vues)"]),

      m("VAKITENY","Fanamarinana — bilan des sons malagasy appris depuis septembre (o, e, l, t, d, n, m, b, r, s, j)",
        "Vérifier individuellement la reconnaissance des sons malagasy appris dans l'année et la lecture de syllabes ou de mots malagasy courts déjà rencontrés en classe.",
        ["Faire passer chaque enfant individuellement pendant que les autres travaillent en autonomie","Présenter 6 cartes-lettres choisies parmi les sons malagasy vus dans l'année et demander le son de chacune","Présenter 2 syllabes malagasy à lire (par exemple la, to)","Présenter un mot malagasy court déjà connu (par exemple vary) à lire","Noter la réussite sur une grille simple","Encourager chaque enfant après son passage"],
        ["Inona ny feon'ity litera ity ? (asehoy ny r) → Valiny : [r]","Vakio ity : to → Valiny : [to]","Vakio ity teny ity : vary → Valiny : vakiana amin'ny vaky teny « va-ry »","Tsongò ny litera fantatra nanomboka tamin'ny septambra : o m x l q n → Valiny : o, m, l, n voatsongo (x sy q tsy mbola nianarana)"]),

      m("ÉCRITURE","Évaluation orale-graphique — tracé de quelques lettres et d'une syllabe de chaque trimestre",
        "Vérifier, sur une courte fiche de tracé individuelle, la tenue du crayon et la qualité du tracé de lettres représentatives de chaque période de l'année (voyelles d'octobre, consonnes de novembre à mai).",
        ["Distribuer une fiche avec des lignes préréglées","Faire tracer 4 lettres choisies parmi celles de l'année (par exemple u, m, r, g)","Faire tracer une syllabe assemblée (par exemple « ro »)","Observer la tenue du crayon pendant le tracé","Circuler et corriger la posture ou la prise si besoin","Noter les acquis sur la grille individuelle"],
        ["Trace la lettre m. → Corrigé : 2 ponts arrondis, tracé fluide de gauche à droite","Trace la lettre g. → Corrigé : rond fermé suivi d'une canne descendante avec boucle","Écris la syllabe « ro ». → Corrigé : r et o correctement attachés et lisibles","Montre ta prise de crayon. → Corrigé : prise tripode observée (pouce, index, majeur)"]),

      m("LANGAGE","Évaluation orale — bilan des 3 histoires de l'année : « François va chez le coiffeur », « Le petit chat perdu », « Les animaux du cirque »",
        "Vérifier la mémorisation du vocabulaire et la capacité à restituer, en quelques phrases, chacune des 3 histoires travaillées durant l'année.",
        ["Montrer une image de chacune des 3 histoires, l'une après l'autre","Demander à l'enfant de nommer l'histoire à partir de l'image","Poser une question de vocabulaire sur chaque histoire (le coiffeur, le chat, le cirque)","Demander un résumé oral très court d'une des 3 histoires au choix de l'enfant","Valoriser la participation et l'expression orale"],
        ["Montre l'image de « François va chez le coiffeur ». → Corrigé : bonne image pointée","Que cherche-t-on dans « Le petit chat perdu » ? → Corrigé : le chat perdu, qu'il faut retrouver","Cite un personnage des « Animaux du cirque ». → Corrigé : un animal du cirque cité (lion, éléphant, singe... une réponse cohérente acceptée)","Raconte en 2 phrases l'histoire de ton choix parmi les 3. → Corrigé : récit court cohérent avec le début et la fin de l'histoire choisie"]),

      m("PRE-MATH","Évaluation orale — bilan des formes, comparaisons, égalité/différence, appartenance, addition et soustraction, table de 2",
        "Vérifier par manipulation directe les notions de pré-mathématiques construites tout au long de l'année, des formes géométriques d'octobre jusqu'aux opérations simples de mai.",
        ["Présenter les 3 formes de base et demander de les nommer","Présenter 2 collections d'objets pour vérifier « autant » ou « plus »","Présenter 2 petites collections et demander si elles sont égales ou différentes","Présenter un petit ensemble d'objets et demander si un objet donné en fait partie (appartenance)","Poser une petite addition et une petite soustraction avec des objets manipulables","Faire réciter la table de 2 (2, 4, 6, 8, 10)"],
        ["Montre le triangle. → Corrigé : la forme triangulaire désignée","Ces deux tas de jetons sont-ils égaux ou différents (montrer 4 et 6 jetons) ? → Corrigé : différents","Cette balle appartient-elle au groupe des formes rondes ? → Corrigé : oui","Récite la table de 2 jusqu'à 10. → Corrigé : 2, 4, 6, 8, 10"]),

      m("MATHS","Évaluation orale — bilan des nombres de 0 à 50, pairs, impairs et comptage à rebours",
        "Vérifier individuellement la récitation des nombres jusqu'à 50, la reconnaissance des nombres pairs et impairs, et le comptage à rebours, compétences construites progressivement depuis octobre.",
        ["Faire réciter la suite des nombres de 0 à 50","Faire réciter la suite des nombres pairs jusqu'à 20","Faire réciter la suite des nombres impairs jusqu'à 10","Faire compter à rebours de 10 à 0","Demander si un nombre donné est pair ou impair","Noter les acquis sur la grille individuelle"],
        ["Compte de 0 à 50. → Corrigé : suite complète et correcte de 0 à 50","Récite les nombres pairs de 0 à 20. → Corrigé : 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20","Compte à rebours de 10 à 0. → Corrigé : 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0","Ce nombre est-il pair ou impair : 15 ? → Corrigé : impair"]),

      m("MORALE","Évaluation orale — bilan des règles de vie et d'hygiène apprises dans l'année",
        "Vérifier par des questions orales individuelles l'appropriation des règles de propreté, d'habillement et de comportement construites au fil des mois.",
        ["Observer la tenue et la propreté de l'enfant ce matin","Poser une question sur l'hygiène du corps","Poser une question sur le soin des vêtements et l'habillement selon la saison","Poser une question sur une règle de politesse ou de respect des autres","Valoriser les bons gestes observés au quotidien"],
        ["Montre comment tu te laves les mains. → Corrigé : mouiller, savonner, frotter, rincer, sécher","Que fais-tu si ton vêtement est sale ? → Corrigé : je le donne à laver ou je le change","Que dis-tu quand on te rend un service ? → Corrigé : merci","Pourquoi est-il important d'être propre et bien habillé ? → Corrigé : pour rester en bonne santé et se sentir bien"]),

      m("ENVIRONNEMENT","Évaluation orale — bilan du vocabulaire des grands thèmes de l'année (corps, vêtements, météo, aliments, animaux, transports)",
        "Vérifier la connaissance du vocabulaire accumulé sur les grands thèmes de l'année par un jeu de reconnaissance et de nomination d'images variées.",
        ["Préparer un jeu de 6 images mélangées couvrant les thèmes de l'année (corps, vêtements, météo, aliments, animaux, transports)","Montrer chaque image et demander de la nommer","Demander de classer 3 images par thème","Poser une question d'usage sur un des objets ou éléments montrés","Valoriser les réponses correctes et reformuler celles qui manquent"],
        ["Comment s'appelle cette partie du corps ? (montrer le genou) → Corrigé : le genou","Nomme ce vêtement. (montrer une chaussette) → Corrigé : une chaussette","Quel temps fait-il sur cette image ? (image de vent) → Corrigé : il fait du vent","Classe ces 3 images par thème : mangue, avion, chat. → Corrigé : aliment / transport / animal correctement associés"]),

      m("ANGLAIS","Évaluation orale — révision du vocabulaire anglais de l'année (bathroom, clothes, weather, body, food, animals, transport)",
        "Réviser en jeu de flashcards mélangées l'ensemble du vocabulaire anglais rencontré dans l'année, en écho direct aux thèmes vus en Environnement.",
        ["Mélanger les flashcards de tous les thèmes de l'année","Piocher une carte et demander de nommer l'objet en anglais","Jeu « Point to the... » avec 3 mots choisis","Poser une question simple avec la structure « What is this? »","Encourager la prononciation, sans viser la perfection"],
        ["What is this? (montrer une chaussette) → Corrigé : sock","What is this? (image de soleil) → Corrigé : sun","Point to the towel. → Corrigé : la serviette pointée","How do you say « chat » in English? → Corrigé : cat"]),

      m("CHANT","Bilan — chanter 2 chansons apprises dans l'année, au choix de l'enfant",
        "Faire chanter à chaque enfant 2 chansons apprises depuis septembre, avec leurs gestes, pour évaluer la mémorisation construite sur l'année (par exemple « Ce que j'ai » ou « Les vêtements »).",
        ["Proposer à l'enfant de choisir 2 chansons parmi celles apprises dans l'année","Chanter la 1ère chanson choisie avec les gestes appris","Chanter la 2ème chanson choisie avec les gestes appris","Poser une question simple sur le contenu d'une des chansons","Applaudir et valoriser chaque enfant après son passage"],
        ["Chante une chanson de ton choix apprise cette année. → Corrigé : chanson chantée conformément aux paroles apprises","Montre un geste qui va avec cette chanson. → Corrigé : geste conforme à celui appris en classe","Que raconte cette chanson ? → Corrigé : réponse cohérente avec le contenu réel de la chanson choisie","Chante une 2ème chanson de ton choix. → Corrigé : 2ème chanson chantée conformément aux paroles apprises"]),

      m("RECITATION","Bilan — réciter un poème appris dans l'année, au choix de l'enfant",
        "Faire réciter individuellement un poème parmi ceux appris depuis septembre (par exemple « Un enfant propre », « Mes habits » ou « Zaza hendry »), pour évaluer la mémorisation et l'expression orale.",
        ["Proposer à l'enfant de choisir un poème parmi ceux appris dans l'année","Réciter le poème choisi avec expression","Poser une question sur le sens général du poème","Faire réciter avec le geste associé si le poème en a un","Valoriser la mémorisation, quelle que soit la longueur récitée"],
        ["Récite un poème de ton choix appris cette année. → Corrigé : texte récité conforme à ce qui a été appris","De quoi parle ce poème ? → Corrigé : réponse cohérente avec le sens réel du poème choisi","Récite avec le bon geste, si ce poème en a un. → Corrigé : texte et geste conformes","Quel poème préfères-tu parmi tous ceux appris cette année ? → Corrigé : réponse personnelle"]),

      m("EPS","Bilan — parcours moteur reprenant les mouvements de l'année (course, équilibre, roulade, dedans-dehors)",
        "Faire passer chaque enfant sur un petit parcours qui enchaîne les mouvements travaillés dans l'année, pour vérifier les acquis moteurs de façon ludique.",
        ["Installer un parcours simple : course sur 10 mètres, équilibre sur un pied, cerceau dedans-dehors","Faire passer chaque enfant sur le parcours complet","Encourager verbalement pendant le passage","Noter la réussite de chaque étape sur la grille individuelle","Applaudir chaque enfant à la fin de son parcours"],
        ["Cours jusqu'au plot sans t'arrêter. → Corrigé : distance complète parcourue en courant","Tiens-toi en équilibre sur un pied pendant que je compte jusqu'à 5. → Corrigé : équilibre tenu au moins 3 secondes sur 5","Saute dedans puis dehors du cerceau. → Corrigé : geste réalisé correctement dans les 2 sens","Qu'as-tu préféré dans ce parcours ? → Corrigé : réponse personnelle"]),

      m("DESSIN","Bilan — dessiner un souvenir ou un des thèmes marquants de l'année, au choix de l'enfant",
        "Laisser chaque enfant choisir un thème de dessin parmi ceux travaillés dans l'année (par exemple la serviette, la robe, le mauvais temps) pour observer les progrès de tracé et de coloriage réalisés depuis octobre.",
        ["Rappeler brièvement quelques dessins réalisés dans l'année","Laisser chaque enfant choisir un thème et dessiner librement","Observer la tenue du crayon et la précision du tracé","Demander à l'enfant de nommer ce qu'il a dessiné","Exposer les productions du jour"],
        ["Quel thème as-tu choisi de dessiner ? → Corrigé : réponse personnelle cohérente avec un thème vu dans l'année","Montre la forme principale de ton dessin. → Corrigé : forme géométrique de base pointée et reconnaissable","Quelle couleur as-tu utilisée le plus ? → Corrigé : réponse libre","Explique ton dessin à la classe. → Corrigé : explication cohérente avec la production réalisée"]),

      m("TRAVAUX MANUELS","Bilan — atelier au choix parmi les 3 techniques de l'année (coloriage, peinture, pliage)",
        "Proposer 3 ateliers tournants reprenant les techniques travaillées depuis octobre, pour observer les progrès de motricité fine de chaque enfant sur l'année.",
        ["Installer 3 ateliers : coloriage, peinture, pliage","Faire tourner les enfants par petits groupes sur les 3 ateliers","Observer la prise d'outil (crayon, pinceau, papier) de chaque enfant","Valoriser les progrès de motricité fine observés depuis le début de l'année","Ranger le matériel ensemble en fin de séance"],
        ["Montre ta prise de crayon pour colorier. → Corrigé : prise tripode observée","Montre comment tu tiens le pinceau. → Corrigé : prise ferme, geste maîtrisé","Montre un pli en 2 bien marqué. → Corrigé : pli net réalisé avec l'ongle","Quel atelier as-tu préféré cette année ? → Corrigé : réponse personnelle"]),

      m("CONTE","Bilan — les contes de l'année : Ikotobekibo sy Faramalemy, Ny saka sy ny totozy, I Trimobe sy i Fara, Samy fetsy, Vorona nifidy mpanjaka, Petit chaperon rouge",
        "Faire choisir à chaque enfant son conte préféré parmi ceux racontés dans l'année pour vérifier la mémorisation des personnages et la capacité à en résumer l'histoire.",
        ["Montrer une image de chacun des contes de l'année pour aider l'enfant à se rappeler","Demander à l'enfant de choisir son conte préféré","Demander de nommer le ou les personnages principaux du conte choisi","Demander un résumé oral très court du conte choisi","Valoriser le choix et l'expression orale de l'enfant"],
        ["Quel est ton conte préféré parmi ceux de l'année ? → Corrigé : réponse personnelle parmi les 6 contes racontés","Qui sont les personnages principaux d'Ikotobekibo sy Faramalemy ? → Corrigé : Ikotobekibo et Faramalemy","Que se passe-t-il dans Ny saka sy ny totozy ? → Corrigé : résumé oral cohérent avec l'histoire du chat et de la souris","Raconte en 2 phrases le conte que tu préfères. → Corrigé : récit court cohérent avec le début et la fin du conte choisi"])

    ],
  },

  {
    n:2, dates:"14/06/2027 – 18/06/2027",
    theme:"EXAMEN ÉCRIT — Épreuves écrites de synthèse annuelle et évaluations orales complètes",
    matieres:[

      m("LECTURE","Épreuve écrite — lecture de syllabes et de mots formés avec les sons de l'année",
        "Faire passer une épreuve écrite individuelle sur fiche : lire à voix haute une série de syllabes et de mots courts formés avec les sons appris depuis septembre, en cochant la réussite sur une grille de notation.",
        ["Distribuer à chaque enfant une fiche avec une liste de syllabes et de mots","Faire lire à voix haute, un enfant à la fois, la ligne de syllabes","Faire lire ensuite les 2 mots courts de la fiche","Cocher sur la fiche chaque syllabe et chaque mot lu correctement","Remettre la fiche corrigée à l'enfant à la fin de la semaine"],
        ["Lis ces syllabes : ba — ru — do → Corrigé : lecture correcte des 3 syllabes","Lis ces syllabes : ja — ho — ze → Corrigé : lecture correcte des 3 syllabes","Lis ce mot : lavabo → Corrigé : lecture correcte des 3 syllabes « la-va-bo »","Lis ce mot : jardin → Corrigé : lecture correcte des 2 syllabes « jar-din »"]),

      m("VAKITENY","Fanadinana an-tsoratra — épreuve écrite de lecture de syllabes et de mots malagasy",
        "Faire passer une épreuve individuelle sur fiche : lire à voix haute des syllabes et 2 mots malagasy courts formés avec les sons appris dans l'année.",
        ["Distribuer une fiche avec des syllabes et des mots malagasy","Faire lire les syllabes une à une","Faire lire les 2 mots malagasy de la fiche","Cocher la réussite sur la grille","Remettre la fiche corrigée en fin de semaine"],
        ["Vakio ity : do — ra — le → Valiny : vakiana tsara ny vaky teny telo","Vakio ity teny ity : lamba → Valiny : « lam-ba » vakiana tsara","Vakio ity teny ity : tany → Valiny : « ta-ny » vakiana tsara","Tsongò ny vaky teny « la » amin'ireto : ra — la — to — la → Valiny : ny « la » roa voatsongo"]),

      m("ÉCRITURE","Épreuve écrite — tracé de lettres et de syllabes de l'année sur fiche notée",
        "Faire passer une épreuve de graphisme individuelle : tracer une sélection de lettres représentatives de l'année et 2 syllabes, sur une fiche à lignes préréglées, notée selon des critères simples.",
        ["Distribuer la fiche d'épreuve avec des lignes préréglées","Faire tracer 6 lettres choisies parmi celles de l'année (une par mois)","Faire tracer 2 syllabes assemblées","Évaluer chaque tracé selon 2 critères : sens du tracé et tenue dans les lignes","Remettre la fiche corrigée en fin de semaine"],
        ["Trace les lettres suivantes : u, t, b, s, f, z. → Corrigé : 6 lettres tracées dans le bon sens et dans les lignes","Écris la syllabe « ta ». → Corrigé : t et a correctement attachés et lisibles","Écris la syllabe « ro ». → Corrigé : r et o correctement attachés et lisibles","Quelle lettre de la fiche as-tu trouvée la plus difficile à tracer ? → Corrigé : réponse personnelle"]),

      m("LANGAGE","Épreuve orale complète — raconter les 3 histoires de l'année avec les images",
        "Faire raconter par chaque enfant, à l'aide des images séquentielles, l'intégralité de chacune des 3 histoires travaillées dans l'année, pour vérifier la compréhension globale et la construction de phrases.",
        ["Présenter les images séquentielles de « François va chez le coiffeur » et faire raconter l'histoire complète","Présenter les images de « Le petit chat perdu » et faire raconter l'histoire complète","Présenter les images des « Animaux du cirque » et faire raconter l'histoire complète","Aider par une question relance si l'enfant hésite","Noter la fluidité et la structure des phrases sur la grille individuelle"],
        ["Raconte l'histoire de François du début à la fin, avec les images. → Corrigé : récit couvrant les 3 étapes principales de l'histoire","Raconte l'histoire du petit chat perdu, avec les images. → Corrigé : récit couvrant la perte puis les retrouvailles du chat","Raconte l'histoire des animaux du cirque, avec les images. → Corrigé : récit citant au moins 2 animaux et l'action du cirque","Quelle histoire as-tu préféré raconter ? Pourquoi ? → Corrigé : réponse personnelle justifiée"]),

      m("PRE-MATH","Épreuve écrite — formes, comparaisons, égalité/différence, appartenance, addition et soustraction",
        "Faire passer une épreuve écrite sur fiche illustrée : entourer, relier et compléter des exercices couvrant l'ensemble des notions de pré-mathématiques de l'année.",
        ["Distribuer la fiche d'épreuve illustrée","Faire entourer les formes demandées","Faire relier les collections égales et entourer celle qui a le plus","Faire entourer l'objet qui n'appartient pas au groupe demandé","Faire compléter une petite addition illustrée","Corriger la fiche avec chaque enfant en fin de semaine"],
        ["Entoure tous les carrés sur la fiche. → Corrigé : tous les carrés entourés, aucune autre forme","Relie les 2 collections qui ont autant d'objets. → Corrigé : les 2 collections égales reliées","Entoure l'objet qui n'appartient pas au groupe des fruits (mangue, banane, orange, voiture). → Corrigé : la voiture entourée","3 + 2 = ___ (avec dessins de jetons). → Corrigé : 5"]),

      m("MATHS","Épreuve écrite — nombres de 0 à 50, pairs, impairs et compte à rebours",
        "Faire passer une épreuve écrite sur fiche : compléter des suites de nombres, entourer les nombres pairs ou impairs, et ordonner des nombres jusqu'à 50.",
        ["Distribuer la fiche d'épreuve avec des bandes numériques","Faire compléter la bande numérique de 0 à 50 (trous à combler)","Faire entourer les nombres pairs sur une ligne donnée","Faire ordonner 4 nombres du plus petit au plus grand","Faire écrire le compte à rebours de 10 à 0","Corriger la fiche avec chaque enfant"],
        ["Complète : 20, 21, ___, 23, ___. → Corrigé : 22 puis 24","Entoure les nombres pairs : 3, 8, 11, 14, 17, 20. → Corrigé : 8, 14, 20 entourés","Ordonne du plus petit au plus grand : 45, 12, 38, 6. → Corrigé : 6, 12, 38, 45","Écris le compte à rebours de 10 à 0. → Corrigé : 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0"]),

      m("MORALE","Évaluation orale — mise en situation : que fais-tu si... ?",
        "Vérifier, par des mises en situation orales, la capacité de l'enfant à appliquer les règles de vie apprises dans l'année à des situations concrètes, plutôt que par simple restitution de règles.",
        ["Présenter une petite situation orale (par exemple : ton vêtement est sale, il pleut dehors)","Demander à l'enfant ce qu'il ferait dans cette situation","Reformuler si besoin avec une image d'appui","Poser 3 situations différentes couvrant hygiène, habillement et politesse","Valoriser une réponse cohérente même formulée simplement"],
        ["Que fais-tu si tes mains sont sales avant de manger ? → Corrigé : je les lave avec du savon","Il pleut : que mets-tu pour sortir ? → Corrigé : un imperméable, des bottes","Un camarade te prête son crayon : que lui dis-tu ? → Corrigé : merci","Ton pull est tombé par terre et sali : que fais-tu ? → Corrigé : je le donne à laver ou je le brosse"]),

      m("ENVIRONNEMENT","Évaluation orale — catégorisation complète du vocabulaire de l'année",
        "Proposer un jeu de catégorisation avec un plus grand nombre d'images que la semaine précédente, couvrant tous les thèmes de l'année, pour vérifier la capacité à classer et pas seulement à nommer.",
        ["Préparer 10 images mélangées couvrant tous les thèmes de l'année","Demander à l'enfant de les trier en 4 tas (corps, vêtements/toilette, météo, animaux/aliments/transports)","Vérifier chaque tas avec l'enfant","Demander de nommer 2 images de chaque tas","Valoriser la logique du classement, même si un mot manque"],
        ["Trie ces 10 images en 4 thèmes. → Corrigé : classement cohérent avec les 4 catégories","Nomme une image du tas « animaux ». → Corrigé : nom correct de l'animal montré","Nomme une image du tas « météo ». → Corrigé : nom correct de l'élément météo montré","Pourquoi as-tu mis cette image dans ce tas ? → Corrigé : justification cohérente avec le thème choisi"]),

      m("ANGLAIS","Évaluation orale — phrases complètes avec le vocabulaire anglais de l'année",
        "Faire produire, à partir du vocabulaire anglais appris, de courtes phrases avec la structure « It's... » ou « What is this? », plutôt que la seule nomination de mots isolés vue la semaine précédente.",
        ["Montrer une image et demander « What is this? »","Faire répondre en phrase complète : « It's a... »","Montrer une image météo et faire dire « It's sunny/rainy »","Demander de pointer un objet nommé en anglais","Valoriser la tentative de phrase complète"],
        ["What is this? (montrer un pantalon) → Corrigé : It's trousers","How's the weather? (image de pluie) → Corrigé : It's rainy","Point to the sock. → Corrigé : la chaussette pointée","How do you say « chien » in English? → Corrigé : dog"]),

      m("CHANT","Épreuve orale — chanter 2 chansons complètes de l'année avec les gestes",
        "Faire chanter à chaque enfant, cette fois en entier avec tous les couplets et gestes, 2 chansons choisies par l'enseignant parmi celles apprises dans l'année, pour une évaluation plus complète que la semaine précédente.",
        ["Choisir 2 chansons parmi celles apprises dans l'année","Faire chanter la 1ère chanson en entier avec les gestes","Faire chanter la 2ème chanson en entier avec les gestes","Noter la justesse du rythme et la mémorisation des paroles","Applaudir chaque enfant après son passage"],
        ["Chante « Ce que j'ai » en entier avec les gestes. → Corrigé : chanson chantée en entier conformément aux paroles apprises","Chante « Les vêtements » en entier avec les gestes. → Corrigé : chanson chantée en entier conformément aux paroles apprises","Combien de chansons connais-tu par cœur cette année ? → Corrigé : réponse personnelle","Chante en gardant le rythme du début à la fin. → Corrigé : performance évaluée sur la tenue du rythme"]),

      m("RECITATION","Épreuve orale — réciter 2 poèmes complets de l'année",
        "Faire réciter individuellement 2 poèmes choisis par l'enseignant parmi ceux appris dans l'année, en entier et avec expression, pour une évaluation plus complète que la semaine précédente.",
        ["Choisir 2 poèmes parmi ceux appris dans l'année","Faire réciter le 1er poème en entier avec expression","Faire réciter le 2ème poème en entier avec expression","Noter la mémorisation complète et l'expression","Valoriser chaque enfant après son passage"],
        ["Récite « Un enfant propre » en entier. → Corrigé : texte récité en entier conforme à ce qui a été appris","Récite « Zaza hendry » en entier. → Corrigé : texte récité en entier conforme à ce qui a été appris","Combien de poèmes connais-tu par cœur cette année ? → Corrigé : réponse personnelle","Récite avec le geste associé. → Corrigé : texte et geste conformes"]),

      m("EPS","Épreuve gestuelle — circuit complet chronométré et noté des mouvements de l'année",
        "Reprendre le parcours moteur de la semaine précédente en le complétant par une évaluation plus formelle : chronométrage ludique et critères de réussite précis pour chaque mouvement.",
        ["Installer un circuit complet : course de 15 mètres, roulade sur tapis, équilibre 5 secondes, cerceau dedans-dehors","Chronométrer chaque enfant en comptant à voix haute","Vérifier chaque critère de réussite (distance, tenue de l'équilibre, respect du signal)","Noter chaque étape sur la grille individuelle","Féliciter chaque enfant pour le circuit complet réalisé"],
        ["Termine le circuit complet sans t'arrêter. → Corrigé : les 4 étapes réalisées dans l'ordre","Combien de secondes as-tu tenu l'équilibre ? → Corrigé : au moins 3 secondes sur 5 comptées","T'arrêtes-tu bien au signal « stop » ? → Corrigé : arrêt immédiat observé","Quelle étape du circuit as-tu trouvée la plus difficile ? → Corrigé : réponse personnelle"]),

      m("DESSIN","Épreuve écrite/graphique — dessiner 2 éléments du programme de l'année sur consigne",
        "Faire dessiner sur fiche, à la demande de l'enseignant et non plus au choix libre, 2 éléments précis parmi les formes et thèmes travaillés dans l'année, pour vérifier la maîtrise du tracé sur consigne.",
        ["Distribuer une feuille divisée en 2 cases","Demander de dessiner un élément précis dans la 1ère case (par exemple une robe)","Demander de dessiner un 2ème élément précis dans la 2ème case (par exemple une serviette)","Observer le respect de la consigne et la précision du tracé","Faire colorier les 2 dessins"],
        ["Dessine une robe dans la 1ère case. → Corrigé : triangle inversé pour la jupe et haut reconnaissable","Dessine une serviette dans la 2ème case. → Corrigé : rectangle reconnaissable avec au moins 1 motif","Quelle forme as-tu utilisée pour la jupe de la robe ? → Corrigé : un triangle","Colorie tes 2 dessins avec des couleurs différentes. → Corrigé : 2 couleurs différentes utilisées"]),

      m("TRAVAUX MANUELS","Épreuve graphique/manuelle — réaliser sur consigne un pliage et un coloriage notés",
        "Faire réaliser, sur consigne précise et non plus au choix, un pliage simple et un coloriage dans les contours, pour évaluer la motricité fine acquise sur l'année.",
        ["Distribuer une feuille de papier et une image à colorier","Demander de réaliser un pli en 2 bien marqué","Demander de colorier l'image en restant dans les contours","Observer la prise d'outil (papier, crayon)","Noter la réussite sur la grille individuelle"],
        ["Réalise un pli en 2 bien marqué. → Corrigé : pli net réalisé avec l'ongle","Colorie cette image sans dépasser les contours. → Corrigé : coloriage globalement dans les contours","Montre ta prise de crayon. → Corrigé : prise tripode observée","Range ton matériel après l'épreuve. → Corrigé : matériel rangé correctement"]),

      m("CONTE","Épreuve orale complète — raconter un conte de l'année avec les images dans l'ordre",
        "Faire remettre en ordre les images d'un conte tiré au sort parmi ceux de l'année, puis faire raconter l'histoire complète, pour une évaluation plus exigeante que le simple choix libre de la semaine précédente.",
        ["Tirer au sort le nom d'un conte parmi les 6 racontés dans l'année","Présenter les images de ce conte mélangées","Demander à l'enfant de les remettre dans l'ordre","Demander de raconter l'histoire complète à partir des images remises en ordre","Noter la cohérence du récit sur la grille individuelle"],
        ["Remets les images d'I Trimobe sy i Fara dans l'ordre. → Corrigé : ordre chronologique complet respecté","Raconte l'histoire de Samy fetsy du début à la fin. → Corrigé : récit cohérent couvrant début-milieu-fin","Qui sont les personnages de Vorona nifidy mpanjaka ? → Corrigé : les oiseaux qui choisissent un roi","Quelle est la morale du Petit chaperon rouge ? → Corrigé : réponse cohérente avec la morale du conte (ne pas parler aux inconnus, écouter les conseils de sa maman)"])

    ],
  },

  {
    n:3, dates:"21/06/2027 – 25/06/2027",
    theme:"BULLETINS — Remise des bulletins et bilan collectif de l'année",
    matieres:[

      m("LECTURE","Bilan collectif — chaque enfant lit une syllabe ou un mot de son choix devant la classe",
        "Clore l'année de lecture par une activité calme et valorisante : chaque enfant choisit une syllabe ou un mot déjà appris et le lit devant ses camarades, pour clôturer positivement l'apprentissage de la lecture en 12ème.",
        ["Préparer une boîte de cartes-syllabes et de cartes-mots déjà travaillées dans l'année","Chaque enfant pioche une carte","Chaque enfant lit sa carte devant la classe","La classe applaudit chaque lecture","Afficher les cartes lues sur le mur de la classe en souvenir de l'année"],
        ["Pioche une carte et lis-la devant la classe. → Corrigé : lecture correcte ou avec aide bienveillante de l'enseignant","Quelle lettre as-tu préféré apprendre cette année ? → Corrigé : réponse personnelle","Essaie de lire la carte de ton camarade. → Corrigé : tentative de lecture encouragée","Range ta carte sur le mur-souvenir de la classe. → Corrigé : geste réalisé"]),

      m("VAKITENY","Bilan collectif — chaque enfant lit une syllabe ou un mot malagasy de son choix devant la classe",
        "Clore l'année de vakiteny par une activité calme et valorisante : chaque enfant choisit une carte-syllabe ou une carte-mot malagasy déjà travaillée dans l'année et la lit devant ses camarades.",
        ["Préparer une boîte de cartes-syllabes et de cartes-mots malagasy déjà travaillées dans l'année","Chaque enfant pioche une carte","Chaque enfant lit sa carte devant la classe","La classe applaudit chaque lecture","Afficher les cartes lues sur le mur de la classe en souvenir de l'année"],
        ["Safidio ny karatra iray ary vakio eo anoloan'ny kilasy. → Valiny : famakiana marina na fanampiana malefaka avy amin'ny mpampianatra","Inona ny teny malagasy tianao indrindra tamin'ity taona ity ? → Valiny : valiny manokana","Andramo mamaky ny karatry ny namanao. → Valiny : fanandramana ampiana","Apetaho eo amin'ny rindrina ny karatrao. → Valiny : hetsika tanteraka"]),

      m("ÉCRITURE","Bilan collectif — chaque enfant trace sa lettre préférée de l'année sur une affiche commune",
        "Réaliser une affiche collective de fin d'année où chaque enfant trace la lettre qu'il préfère parmi celles apprises, pour clore le travail de graphisme dans une activité calme et fédératrice.",
        ["Préparer une grande affiche commune avec un espace par enfant","Demander à chaque enfant quelle lettre il préfère parmi celles de l'année","Faire tracer cette lettre en grand format sur l'affiche","Laisser décorer la lettre tracée","Afficher l'affiche terminée dans la classe"],
        ["Quelle lettre préfères-tu parmi toutes celles apprises cette année ? → Corrigé : réponse personnelle","Trace cette lettre en grand sur l'affiche. → Corrigé : tracé reconnaissable dans le bon sens","Décore ta lettre. → Corrigé : décoration libre réalisée","Montre ta lettre à un camarade. → Corrigé : geste réalisé"]),

      m("LANGAGE","Bilan collectif — chaque enfant présente son personnage préféré parmi les 3 histoires de l'année",
        "Clore l'année de langage par un tour de parole calme où chaque enfant nomme et décrit brièvement son personnage préféré parmi ceux des 3 histoires travaillées.",
        ["Rappeler brièvement les 3 histoires de l'année à l'aide des images","Demander à chaque enfant de choisir son personnage préféré","Faire décrire ce personnage en une phrase","Faire dire pourquoi ce personnage est préféré","Valoriser chaque prise de parole"],
        ["Quel est ton personnage préféré parmi les 3 histoires de l'année ? → Corrigé : réponse personnelle parmi François, le petit chat, ou un animal du cirque","Décris ce personnage en une phrase. → Corrigé : production personnelle cohérente","Pourquoi préfères-tu ce personnage ? → Corrigé : réponse personnelle justifiée","Montre l'image de ce personnage. → Corrigé : bonne image pointée"]),

      m("PRE-MATH","Bilan collectif — jeu calme de manipulation reprenant les formes et comparaisons de l'année",
        "Proposer un jeu de manipulation libre et sans enjeu de notation, où chaque enfant retrouve et nomme les formes et notions de comparaison travaillées dans l'année, pour clore sereinement cette matière.",
        ["Installer une table avec les formes et jetons utilisés dans l'année","Laisser chaque enfant manipuler librement le matériel","Demander à chaque enfant de nommer une forme de son choix","Demander de constituer 2 tas égaux avec des jetons","Valoriser la manipulation autonome"],
        ["Nomme une forme de ton choix parmi le matériel. → Corrigé : nom correct de la forme choisie","Fais 2 tas de jetons qui ont autant l'un que l'autre. → Corrigé : 2 tas égaux constitués","Quelle notion de mathématiques as-tu préféré apprendre cette année ? → Corrigé : réponse personnelle","Range le matériel après avoir joué. → Corrigé : matériel rangé"]),

      m("MATHS","Bilan collectif — jeu calme de comptage jusqu'au nombre préféré de chaque enfant",
        "Proposer une activité calme de comptage libre où chaque enfant récite les nombres jusqu'à celui de son choix, pour clore l'année de numération sans pression d'évaluation.",
        ["Demander à chaque enfant jusqu'à quel nombre il se sent le plus sûr de compter","Faire réciter la suite des nombres jusqu'à ce nombre","Proposer un petit jeu collectif de comptage en chœur jusqu'à 50","Féliciter chaque enfant pour le chemin parcouru depuis septembre","Terminer par un compte à rebours festif de 10 à 0 tous ensemble"],
        ["Jusqu'à quel nombre te sens-tu le plus sûr de compter ? → Corrigé : réponse personnelle","Compte jusqu'à ce nombre devant la classe. → Corrigé : suite correcte jusqu'au nombre choisi","Compte en chœur avec la classe jusqu'à 50. → Corrigé : participation collective","Fais le compte à rebours final avec la classe : 10 à 0. → Corrigé : 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0"]),

      m("MORALE","Bilan collectif — ce que j'ai retenu cette année pour bien vivre ensemble",
        "Réaliser un tour de parole calme où chaque enfant cite une règle de vie qu'il a retenue dans l'année, pour clore la matière sur une note positive et valorisante.",
        ["Rappeler les grands thèmes de morale de l'année (propreté, habillement, politesse)","Demander à chaque enfant de citer une règle qu'il a retenue","Discuter brièvement pourquoi cette règle est importante","Valoriser chaque contribution","Terminer par un rappel collectif : « je suis propre, poli et je prends soin de moi »"],
        ["Cite une règle de vie que tu as retenue cette année. → Corrigé : réponse personnelle cohérente avec les thèmes vus (hygiène, habillement, politesse)","Pourquoi cette règle est-elle importante pour toi ? → Corrigé : réponse personnelle justifiée","Que diras-tu à tes parents que tu as appris cette année en morale ? → Corrigé : réponse personnelle","Répète avec la classe : « je suis propre, poli et je prends soin de moi ». → Corrigé : phrase répétée en chœur"]),

      m("ENVIRONNEMENT","Bilan collectif — exposition des images et objets découverts dans l'année",
        "Organiser une petite exposition en classe où sont regroupées les images et objets utilisés dans l'année (toilette, vêtements, météo), et laisser chaque enfant présenter un élément de son choix.",
        ["Rassembler les images et objets utilisés dans l'année sur une table","Laisser chaque enfant choisir un élément","Demander de le nommer et d'expliquer à quoi il sert","Faire circuler les enfants pour regarder les choix des autres","Ranger l'exposition ensemble en fin de séance"],
        ["Choisis un objet ou une image et nomme-le. → Corrigé : nom correct de l'élément choisi","À quoi sert cet objet ou que représente cette image ? → Corrigé : explication cohérente avec l'élément choisi","Quel thème de l'année as-tu préféré : la toilette, les vêtements ou la météo ? → Corrigé : réponse personnelle","Range l'exposition avec la classe. → Corrigé : rangement réalisé collectivement"]),

      m("ANGLAIS","Bilan collectif — jeu final de flashcards en anglais, sans notation",
        "Terminer l'année d'anglais par un jeu collectif détendu de flashcards reprenant tout le vocabulaire vu, sans enjeu d'évaluation, pour clore la matière dans le plaisir.",
        ["Étaler toutes les flashcards de l'année sur le sol","Chaque enfant en pioche une et essaie de la nommer en anglais","La classe aide si l'enfant hésite","Refaire le jeu plusieurs fois pour que chaque enfant passe","Terminer par un « Goodbye! » collectif"],
        ["Pioche une flashcard et nomme-la en anglais. → Corrigé : mot correct ou aide bienveillante acceptée","Quel mot anglais préfères-tu parmi ceux appris cette année ? → Corrigé : réponse personnelle","Dis « Goodbye! » à la classe. → Corrigé : mot prononcé","Aide un camarade à trouver le mot anglais de sa carte. → Corrigé : entraide observée"]),

      m("CHANT","Bilan collectif — chorale finale reprenant les chansons de l'année",
        "Réunir toute la classe pour une petite chorale finale reprenant, en chœur, les chansons apprises dans l'année, en clôture joyeuse et sans notation.",
        ["Rappeler la liste des chansons apprises dans l'année","Chanter chaque chanson en chœur avec les gestes","Laisser des enfants volontaires chanter un couplet en solo","Garder un souvenir de ce moment pour les familles","Terminer par les applaudissements de toute la classe"],
        ["Chante en chœur « Ce que j'ai » avec la classe. → Corrigé : participation collective au chant","Chante en chœur « Les vêtements » avec la classe. → Corrigé : participation collective au chant","Propose-toi pour chanter un couplet en solo. → Corrigé : participation volontaire acceptée","Quelle chanson de l'année garderas-tu en mémoire ? → Corrigé : réponse personnelle"]),

      m("RECITATION","Bilan collectif — récital final reprenant les poèmes de l'année",
        "Organiser un petit récital de classe où les poèmes de l'année sont récités en groupe, en clôture calme et valorisante de cette matière.",
        ["Rappeler la liste des poèmes appris dans l'année","Réciter chaque poème en chœur","Laisser des enfants volontaires réciter une ligne en solo","Valoriser chaque prise de parole","Terminer par les applaudissements de toute la classe"],
        ["Récite en chœur « Un enfant propre » avec la classe. → Corrigé : participation collective à la récitation","Récite en chœur « Zaza hendry » avec la classe. → Corrigé : participation collective à la récitation","Propose-toi pour réciter une ligne en solo. → Corrigé : participation volontaire acceptée","Quel poème de l'année garderas-tu en mémoire ? → Corrigé : réponse personnelle"]),

      m("EPS","Bilan collectif — jeux libres de fin d'année reprenant les mouvements appris",
        "Proposer une séance de jeux libres dans la cour où les enfants réinvestissent spontanément les mouvements travaillés dans l'année, sans consigne ni notation.",
        ["Installer librement dans la cour les plots, cerceaux et tapis de l'année","Laisser les enfants circuler librement entre les ateliers","Observer et encourager les mouvements réinvestis spontanément","Proposer un dernier jeu collectif au choix des enfants","Terminer par un retour au calme en marchant tous ensemble"],
        ["Choisis l'atelier que tu préfères et montre ce que tu sais faire. → Corrigé : mouvement choisi réalisé","Quel jeu de l'année as-tu préféré ? → Corrigé : réponse personnelle","Propose un jeu à tes camarades pour cette dernière séance. → Corrigé : proposition acceptée par le groupe","Marche calmement avec la classe pour terminer la séance. → Corrigé : retour au calme réalisé"]),

      m("DESSIN","Bilan collectif — exposition finale des dessins de l'année",
        "Organiser une exposition en classe des dessins réalisés dans l'année et laisser chaque enfant présenter celui dont il est le plus fier.",
        ["Rassembler quelques dessins conservés dans l'année (ou en refaire un souvenir)","Afficher les dessins sur les murs de la classe","Demander à chaque enfant de présenter le dessin dont il est le plus fier","Faire circuler les enfants pour regarder les productions des autres","Garder un souvenir de l'exposition pour les familles"],
        ["Quel est le dessin dont tu es le plus fier cette année ? → Corrigé : réponse personnelle","Explique ce dessin à la classe. → Corrigé : explication cohérente avec la production choisie","Quelle forme ou couleur as-tu le plus utilisée cette année ? → Corrigé : réponse personnelle","Regarde le dessin d'un camarade et dis ce que tu aimes dedans. → Corrigé : commentaire bienveillant formulé"]),

      m("TRAVAUX MANUELS","Bilan collectif — exposition finale des réalisations manuelles de l'année",
        "Organiser une exposition des réalisations de coloriage, peinture et pliage faites dans l'année, en clôture calme et valorisante de cette matière.",
        ["Rassembler quelques réalisations conservées dans l'année","Afficher les réalisations dans la classe","Demander à chaque enfant de présenter la réalisation dont il est le plus fier","Faire circuler les enfants pour regarder les productions des autres","Ranger l'exposition ensemble en fin de séance"],
        ["Quelle réalisation de l'année préfères-tu : un coloriage, une peinture ou un pliage ? → Corrigé : réponse personnelle","Explique comment tu as fait cette réalisation. → Corrigé : explication cohérente avec la technique utilisée","Quelle technique as-tu trouvée la plus difficile cette année ? → Corrigé : réponse personnelle","Range l'exposition avec la classe. → Corrigé : rangement réalisé collectivement"]),

      m("CONTE","Bilan collectif — chaque enfant raconte son conte préféré à un camarade",
        "Faire raconter, en petits binômes, le conte préféré de l'année à un camarade, pour clore la matière dans un moment calme d'écoute mutuelle.",
        ["Rappeler les 6 contes de l'année à l'aide des images","Former des binômes d'enfants","Demander à chaque enfant de raconter son conte préféré à son binôme","Faire écouter chacun à son tour","Réunir la classe pour un dernier rappel collectif des 6 contes"],
        ["Raconte ton conte préféré à ton camarade. → Corrigé : récit court cohérent avec un des 6 contes de l'année","Écoute le conte de ton camarade : lequel a-t-il choisi ? → Corrigé : nom du conte correctement identifié","Cite les contes racontés cette année. → Corrigé : au moins 4 des 6 titres cités (Ikotobekibo sy Faramalemy, Ny saka sy ny totozy, I Trimobe sy i Fara, Samy fetsy, Vorona nifidy mpanjaka, Petit chaperon rouge)","Quel conte de l'année garderas-tu en mémoire ? → Corrigé : réponse personnelle"])

    ],
  },

  {
    n:4, dates:"28/06/2027 – 02/07/2027",
    theme:"VACANCES — Début des grandes vacances scolaires",
    matieres:[

      m("LECTURE","Vacances scolaires — pas de cours",
        "Début des grandes vacances scolaires : il n'y a pas de cours de lecture cette semaine, l'année scolaire 2025-2026 est terminée pour cette matière.",
        ["Informer les familles qu'il n'y a pas classe cette semaine","Aucune activité de lecture n'est prévue durant les grandes vacances"],
        ["Y a-t-il cours de lecture cette semaine ? → Corrigé : non, ce sont les grandes vacances scolaires."]),

      m("VAKITENY","Vacances scolaires — pas de cours",
        "Début des grandes vacances scolaires : il n'y a pas de cours de vakiteny cette semaine, l'année scolaire 2025-2026 est terminée pour cette matière.",
        ["Informer les familles qu'il n'y a pas classe cette semaine","Aucune activité de vakiteny n'est prévue durant les grandes vacances"],
        ["Y a-t-il cours de vakiteny cette semaine ? → Corrigé : non, ce sont les grandes vacances scolaires."]),

      m("ÉCRITURE","Vacances scolaires — pas de cours",
        "Début des grandes vacances scolaires : il n'y a pas de cours d'écriture cette semaine, l'année scolaire 2025-2026 est terminée pour cette matière.",
        ["Informer les familles qu'il n'y a pas classe cette semaine","Aucune activité d'écriture n'est prévue durant les grandes vacances"],
        ["Y a-t-il cours d'écriture cette semaine ? → Corrigé : non, ce sont les grandes vacances scolaires."]),

      m("LANGAGE","Vacances scolaires — pas de cours",
        "Début des grandes vacances scolaires : il n'y a pas de cours de langage cette semaine, l'année scolaire 2025-2026 est terminée pour cette matière.",
        ["Informer les familles qu'il n'y a pas classe cette semaine","Aucune activité de langage n'est prévue durant les grandes vacances"],
        ["Y a-t-il cours de langage cette semaine ? → Corrigé : non, ce sont les grandes vacances scolaires."]),

      m("PRE-MATH","Vacances scolaires — pas de cours",
        "Début des grandes vacances scolaires : il n'y a pas de cours de pré-mathématiques cette semaine, l'année scolaire 2025-2026 est terminée pour cette matière.",
        ["Informer les familles qu'il n'y a pas classe cette semaine","Aucune activité de pré-mathématiques n'est prévue durant les grandes vacances"],
        ["Y a-t-il cours de pré-mathématiques cette semaine ? → Corrigé : non, ce sont les grandes vacances scolaires."]),

      m("MATHS","Vacances scolaires — pas de cours",
        "Début des grandes vacances scolaires : il n'y a pas de cours de mathématiques cette semaine, l'année scolaire 2025-2026 est terminée pour cette matière.",
        ["Informer les familles qu'il n'y a pas classe cette semaine","Aucune activité de mathématiques n'est prévue durant les grandes vacances"],
        ["Y a-t-il cours de mathématiques cette semaine ? → Corrigé : non, ce sont les grandes vacances scolaires."]),

      m("MORALE","Vacances scolaires — pas de cours",
        "Début des grandes vacances scolaires : il n'y a pas de cours de morale cette semaine, l'année scolaire 2025-2026 est terminée pour cette matière.",
        ["Informer les familles qu'il n'y a pas classe cette semaine","Aucune activité de morale n'est prévue durant les grandes vacances"],
        ["Y a-t-il cours de morale cette semaine ? → Corrigé : non, ce sont les grandes vacances scolaires."]),

      m("ENVIRONNEMENT","Vacances scolaires — pas de cours",
        "Début des grandes vacances scolaires : il n'y a pas de cours d'environnement cette semaine, l'année scolaire 2025-2026 est terminée pour cette matière.",
        ["Informer les familles qu'il n'y a pas classe cette semaine","Aucune activité d'environnement n'est prévue durant les grandes vacances"],
        ["Y a-t-il cours d'environnement cette semaine ? → Corrigé : non, ce sont les grandes vacances scolaires."]),

      m("ANGLAIS","Vacances scolaires — pas de cours",
        "Début des grandes vacances scolaires : il n'y a pas de cours d'anglais cette semaine, l'année scolaire 2025-2026 est terminée pour cette matière.",
        ["Informer les familles qu'il n'y a pas classe cette semaine","Aucune activité d'anglais n'est prévue durant les grandes vacances"],
        ["Y a-t-il cours d'anglais cette semaine ? → Corrigé : non, ce sont les grandes vacances scolaires."]),

      m("CHANT","Vacances scolaires — pas de cours",
        "Début des grandes vacances scolaires : il n'y a pas de cours de chant cette semaine, l'année scolaire 2025-2026 est terminée pour cette matière.",
        ["Informer les familles qu'il n'y a pas classe cette semaine","Aucune activité de chant n'est prévue durant les grandes vacances"],
        ["Y a-t-il cours de chant cette semaine ? → Corrigé : non, ce sont les grandes vacances scolaires."]),

      m("RECITATION","Vacances scolaires — pas de cours",
        "Début des grandes vacances scolaires : il n'y a pas de cours de récitation cette semaine, l'année scolaire 2025-2026 est terminée pour cette matière.",
        ["Informer les familles qu'il n'y a pas classe cette semaine","Aucune activité de récitation n'est prévue durant les grandes vacances"],
        ["Y a-t-il cours de récitation cette semaine ? → Corrigé : non, ce sont les grandes vacances scolaires."]),

      m("EPS","Vacances scolaires — pas de cours",
        "Début des grandes vacances scolaires : il n'y a pas de cours d'EPS cette semaine, l'année scolaire 2025-2026 est terminée pour cette matière.",
        ["Informer les familles qu'il n'y a pas classe cette semaine","Aucune activité d'EPS n'est prévue durant les grandes vacances"],
        ["Y a-t-il cours d'EPS cette semaine ? → Corrigé : non, ce sont les grandes vacances scolaires."]),

      m("DESSIN","Vacances scolaires — pas de cours",
        "Début des grandes vacances scolaires : il n'y a pas de cours de dessin cette semaine, l'année scolaire 2025-2026 est terminée pour cette matière.",
        ["Informer les familles qu'il n'y a pas classe cette semaine","Aucune activité de dessin n'est prévue durant les grandes vacances"],
        ["Y a-t-il cours de dessin cette semaine ? → Corrigé : non, ce sont les grandes vacances scolaires."]),

      m("TRAVAUX MANUELS","Vacances scolaires — pas de cours",
        "Début des grandes vacances scolaires : il n'y a pas de cours de travaux manuels cette semaine, l'année scolaire 2025-2026 est terminée pour cette matière.",
        ["Informer les familles qu'il n'y a pas classe cette semaine","Aucune activité de travaux manuels n'est prévue durant les grandes vacances"],
        ["Y a-t-il cours de travaux manuels cette semaine ? → Corrigé : non, ce sont les grandes vacances scolaires."]),

      m("CONTE","Vacances scolaires — pas de cours",
        "Début des grandes vacances scolaires : il n'y a pas de cours de conte cette semaine, l'année scolaire 2025-2026 est terminée pour cette matière.",
        ["Informer les familles qu'il n'y a pas classe cette semaine","Aucune activité de conte n'est prévue durant les grandes vacances"],
        ["Y a-t-il cours de conte cette semaine ? → Corrigé : non, ce sont les grandes vacances scolaires."])

    ],
  }

];

const MOIS_12EME = [
  { mois: 'Octobre', data: OCTOBRE_12EME },
  { mois: 'Novembre', data: NOVEMBRE_12EME },
  { mois: 'Décembre', data: DECEMBRE_12EME },
  { mois: 'Janvier', data: JANVIER_12EME },
  { mois: 'Février', data: FEVRIER_12EME },
  { mois: 'Mars', data: MARS_12EME },
  { mois: 'Avril', data: AVRIL_12EME },
  { mois: 'Mai', data: MAI_12EME },
  { mois: 'Juin', data: JUIN_12EME }
];

module.exports = { PERIODES_12EME, MOIS_12EME };
