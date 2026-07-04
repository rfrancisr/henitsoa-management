'use strict';

// Programme 7ème (CM2, ~11-12 ans) — année scolaire 2025-2026
// Source : RÉPARTITION CLASSE DE 7ème.xlsx
// Matières (8, dans l'ordre exact des lignes de l'Excel — aucune colonne "groupe"
// fusionnée dans cet Excel, contrairement à 8ème/9ème/10ème : chaque ligne est déjà
// une matière autonome) :
// CALCUL · CONNAISSANCES USUELLES (C.Usuelles) · GÉOGRAPHIE · TANTARA · FFMOM (F.M.O.M) ·
// HIRA · FITSIPIKA · TSIPELINA
//
// Structure : PERIODES_7EME ne contient que Septembre (semaines n:1..4). Octobre à Mars
// sont des tableaux plats (numérotation n relative au mois), regroupés par MOIS_7EME.
// L'Excel source lui-même ne couvre que Septembre→Mars (aucune feuille Avril/Mai/Juin) ;
// Mars n'a en outre que 2 des 8 matières (CONNAISSANCES USUELLES, GÉOGRAPHIE) sur 2 semaines,
// les 2 dernières colonnes étant vides ("-"). Décision utilisateur : reconstruire fidèlement
// jusqu'à Mars semaine 2 inclus et s'arrêter là — Avril/Mai/Juin n'existent pas pour 7ème
// cette année scolaire. Les semaines Examen/Vacances sans contenu pédagogique (Décembre S3-S4,
// Janvier S1) sont omises, comme pour 8ème/9ème/10ème.

const m = (matiere, topic, approche, transmission, exercices) =>
  ({ matiere, topic, approche, transmission, exercices });

const PERIODES_7EME = [
  { num: 1, libelle: '1ère Période', debut: '01/09/2025', semaines: [
// ── 7ème S1 : Semaine d'orientation ──────────────────────────────────────────
{
  n: 1, dateDebut: "2025/09/01",
  theme: "Semaine d'orientation",
  sous: "Accueil des élèves · prise de contact et test de pré-requis dans toutes les matières",
  matieres: [
    m("CALCUL","Prise de contact et test de pré-requis",
      "Évaluer les acquis de calcul de la 8ème (CM1) — lecture, écriture et comparaison des grands nombres, les 4 opérations, les mesures usuelles — avant d'attaquer la révision des nombres jusqu'au million en semaine 2.",
      ["Accueil des élèves, présentation de l'organisation de l'année (cahiers, matériel, objectifs de la 7ème)","Test écrit individuel : lecture et écriture de nombres jusqu'à 999 999","Test écrit : les 4 opérations sur des nombres entiers (addition, soustraction avec retenue, multiplication, division simple)","Test écrit : conversion d'unités de longueur usuelles (km, m, cm)","Correction collective au tableau, repérage des lacunes fréquentes","Présentation des objectifs de calcul de la 7ème : nombres jusqu'au milliard, fractions, mesures agraires, géométrie"],
      ["Écris en chiffres : trois cent quarante-cinq mille sept cent douze → Corrigé : 345 712","Pose et calcule : 4 528 + 3 976 → Corrigé : 8 504","Convertis : 3 km 250 m en m → Corrigé : 3 250 m"]),
    m("CONNAISSANCES USUELLES","Prise de contact et test de pré-requis",
      "Vérifier les connaissances acquises en 8ème sur le corps humain (le squelette, les organes des sens) avant d'aborder les articulations, les muscles et le système nerveux.",
      ["Discussion collective : qu'avez-vous appris l'an dernier sur le corps humain ?","Test oral : nommer 5 os du squelette humain déjà vus en 8ème","Test écrit court : légender un schéma simple du squelette","Correction collective, rappel du rôle du squelette (soutien, protection)","Annonce du programme du mois : le squelette et les os, l'articulation et les muscles"],
      ["Cite 3 os du squelette humain → Corrigé : le crâne, la colonne vertébrale, le fémur (ou toute réponse correcte)","À quoi sert le squelette ? → Corrigé : il soutient le corps et protège les organes","Légende ce schéma simple du squelette (crâne, bras, jambe) → Corrigé : légendes correctement placées"]),
    m("GÉOGRAPHIE","Prise de contact et test de pré-requis",
      "Évaluer ce que les élèves savent déjà de Madagascar (nom, capitale, continent) avant d'étudier sa place dans le monde et ses caractéristiques.",
      ["Discussion collective : qu'est-ce que Madagascar ? Où se trouve notre pays ?","Test oral rapide : capitale, océan voisin, pays le plus proche","Observation d'une carte du monde : repérer l'Afrique et l'océan Indien","Correction collective des confusions fréquentes","Annonce du programme du mois : la place de Madagascar dans le monde, sa forme et sa superficie"],
      ["Quelle est la capitale de Madagascar ? → Corrigé : Antananarivo","Dans quel océan se trouve Madagascar ? → Corrigé : l'océan Indien","Montre l'Afrique sur la carte du monde → Corrigé : identification correcte du continent"]),
    m("TANTARA","Fanatsofoka — fanadinana fototra",
      "Fanamarinana ny fahalalan'ny mpianatra momba an'i Madagasikara sy ny mponina taloha, tamin'ny kilasy faha-8, alohan'ny hidirana amin'ny lohahevitra momba ny nahitana an'i Madagasikara sy ny fiaviana ny mponina.",
      ["Fifampiresahana am-bava : inona no fantatrao momba an'i Madagasikara taloha?","Fanontaniana am-bava momba ireo foko malagasy efa fantatra","Fijerena sary na sarintany momba an'i Madagasikara","Famerenana ny votoatin'ny lesona natao tamin'ny faha-8","Fanolorana ny lohahevitry ny volana : ny nahitana an'i Madagasikara sy ny fiaviana ny mponina"],
      ["Tanisao foko malagasy iray fantatrao → Corrigé : ohatra, Merina, Betsileo, Sakalava (valiny mety samihafa)","Inona no anaran'ny Nosy iainantsika? → Corrigé : Madagasikara","Aiza no misy an'i Madagasikara raha jerena eran-tany? → Corrigé : any amin'ny Ranomasimbe Indianina, atsimo atsinanan'i Afrika"]),
    m("FFMOM","Fanatsofoka — fanadinana fototra",
      "Fanamarinana ny fahalalan'ny mpianatra momba ny ankohonana sy ny adidiny tao an-trano, tamin'ny kilasy faha-8, alohan'ny hidirana amin'ny anjara asan'ny tsirairay eo amin'ny ankohonana.",
      ["Fifampiresahana am-bava : iza avy no ao amin'ny ankohonanao?","Fanontaniana : inona ny adidinao ao an-trano?","Famerenana ny votoatin'ny lesona ankohonana natao tamin'ny faha-8","Fanolorana ny lohahevitry ny volana : anjara asan'ny tsirairay eo amin'ny ankohonana"],
      ["Tanisao mpikambana iray ao amin'ny ankohonanao → Corrigé : ohatra, ray, reny, rahalahy, anabavy (valiny manokana)","Inona ny adidinao ao an-trano isan'andro? → Corrigé : ohatra, manampy an-dreny, mikarakara ny efitranony (valiny mety samihafa)"]),
    m("HIRA","Fanatsofoka — famerenana hira efa fantatra",
      "Famerenana ny hira efa nianarana tamin'ny faha-8, mba hahafahana manomboka soa aman-tsara ny hira vaovao ho an'ity taona ity.",
      ["Famerenana hira iray efa fantatry ny mpianatra hatramin'ny faha-8","Fihirana miaraka amin'ny kilasy manontolo","Fanadihadiana ny feo tsirairay: iza no mahay mihira tsara?","Fanolorana ny hira vaovao ho an'ny volana Septambra : Ry tanindrazanay malala, Hymne de l'école"],
      ["Mihira ny hira efa fantatrao tamin'ny faha-8 → Corrigé : fihirana marina araka ny feo sy ny tononkira","Inona no lohateny ny hira ianao tia indrindra? → Corrigé : valiny manokana"]),
    m("FITSIPIKA","Fanatsofoka — fanadinana fototra amin'ny fitsipi-teny",
      "Fanamarinana ny fahalalan'ny mpianatra momba ny fehezanteny tsotra tamin'ny kilasy faha-8, alohan'ny hidirana amin'ny fehezanteny: marika, anjara asa, rafitra.",
      ["Fanadihadiana : inona no atao hoe fehezanteny?","Fanomezana ohatra fehezanteny tsotra vitsivitsy","Fitsapana an-tsoratra fohy : famantarana ny mpisolo-tena sy ny matoanteny ao amin'ny fehezanteny tsotra","Fanitsiana am-pokonolona sy famerenana ny fitsipika","Fanolorana ny lohahevitra vaovao : ny fehezanteny (marika, anjara asa, rafitra)"],
      ["Tondroy ny matoanteny ao amin'ity fehezanteny ity: 'Mianatra ny mpianatra.' → Corrigé : mianatra","Manorata fehezanteny tsotra iray misy mpisolo-tena sy matoanteny → Corrigé : valiny manokana voamarina (ohatra: 'Izy mihinana.')"]),
    m("TSIPELINA","Fanatsofoka — fanadinana fototra amin'ny tsipelina",
      "Fanamarinana ny fahaizana manoratra ny abidia malagasy sy ny fitsipika tsotra tamin'ny kilasy faha-8, alohan'ny hidirana amin'ny fampiasana ny marim-piatoana.",
      ["Fanoratana ny abidia malagasy manontolo an-tsoratra madinika sy lehibe","Fitsapana an-tsoratra fohy : zanatsoratra sy renitsoratra ao amin'ny teny 'sekoly', 'tanàna'","Fanitsiana am-pokonolona ny lesoka hita","Fanolorana ny lohahevitra vaovao ho an'ny volana Septambra : ny fampiasana marim-piatoana"],
      ["Soraty ny abidia malagasy manontolo → Corrigé : a b d e f g h i j k l m n o p r s t v y z (lisitra feno)","Iza avy ny zanatsoratra ao amin'ny teny 'tanàna'? → Corrigé : a, à","Ampiasao marim-piatoana marina : 'Manao ahoana ianao' → Corrigé : 'Manao ahoana ianao ?'"]),
  ]
},
// ── 7ème S2 ───────────────────────────────────────────────────────────────
{
  n: 2, dateDebut: "2025/09/08",
  theme: "Le squelette humain et Madagascar dans le monde",
  sous: "Révision des nombres jusqu'au million · Le squelette et les os · La place de Madagascar dans le monde",
  matieres: [
    m("CALCUL","- Révision des nombres de 1 à 1 million\n- Les mesures de longueur\n- Les lignes",
      "Réviser la lecture, l'écriture et la décomposition des nombres jusqu'au million (acquis de 8ème), introduire les mesures de longueur usuelles et les différents types de lignes (droite, courbe, brisée) en géométrie.",
      ["Révision collective : lecture et écriture de nombres jusqu'à 1 000 000 (dictée de nombres)","Décomposition de grands nombres en unités, dizaines, centaines de mille","Rappel des unités de longueur : km, hm, dam, m, dm, cm, mm et leurs conversions","Exercices de conversion d'une unité à l'autre","Découverte des lignes : ligne droite, ligne courbe, ligne brisée — tracé à la règle et à main levée","Application : tracer les 3 types de lignes dans le cahier de géométrie"],
      ["Écris en chiffres : huit cent quarante mille deux cent seize → Corrigé : 840 216","Décompose 573 208 → Corrigé : 500 000 + 70 000 + 3 000 + 200 + 8","Convertis : 4 500 m en km → Corrigé : 4,5 km","Trace une ligne droite, une ligne courbe et une ligne brisée → Corrigé : 3 tracés distincts et corrects"]),
    m("CONNAISSANCES USUELLES","Le squelette et les os",
      "Étudier la structure du squelette humain, ses grandes parties et le rôle protecteur des os.",
      ["Observation d'un schéma du squelette humain","Identification des grandes parties : crâne, cage thoracique, colonne vertébrale, membres","Explication du rôle du squelette : soutien du corps, protection des organes, point d'attache des muscles","Comptage des os principaux visibles sur le schéma","Copie et légende du schéma dans le cahier"],
      ["Nomme 4 parties du squelette humain → Corrigé : le crâne, la cage thoracique, la colonne vertébrale, les membres","Quel est le rôle du squelette ? → Corrigé : il soutient le corps et protège les organes","Légende ce schéma du squelette avec les mots donnés → Corrigé : légendes correctement placées"]),
    m("GÉOGRAPHIE","- La place de Madagascar dans le monde\n- Forme, dimension et superficie de Madagascar",
      "Situer Madagascar dans le monde (hémisphère, continent, océan) et décrire sa forme, ses dimensions et sa superficie.",
      ["Observation d'un planisphère : repérage de l'Afrique, de l'océan Indien et de Madagascar","Situer Madagascar par rapport à l'équateur (hémisphère sud) et au tropique du Capricorne","Description de la forme de l'île comparée à une forme géométrique connue","Présentation des dimensions : longueur (environ 1 600 km) et largeur (environ 570 km)","Présentation de la superficie : 587 041 km²","Copie de la carte de Madagascar dans le cahier"],
      ["Dans quel hémisphère se trouve Madagascar ? → Corrigé : l'hémisphère Sud","Quelle est la superficie de Madagascar ? → Corrigé : 587 041 km²","Madagascar est-elle plus longue ou plus large ? → Corrigé : plus longue (environ 1 600 km de long contre 570 km de large)"]),
    m("TANTARA","- Ny nahitana an'i M/kara\n- Ny fiavian'ny mponina",
      "Mampianatra ny amin'ireo mpivahiny voalohany nahita an'i Madagasikara sy ny loharanon-kevitra momba ny fiavian'ireo mponina voalohany.",
      ["Fanazavana : iza avy no mpivahiny voalohany tonga tany Madagasikara?","Famelabelarana ny amin'ny Arabo sy ny Indonezianina/Malezianina, loharanon'ny mponina Malagasy","Fijerena sarintany momba ny dian'ireo mponina voalohany","Fanazavana ireo porofo (fitenim-paritra, fomba amam-panao, vokatra)","Firaketana an-tsoratra ny votoatin-dresaka"],
      ["Avy aiza indrindra ny ankamaroan'ny razambe Malagasy, araka ny fikarohana? → Corrigé : avy any Indonezia/Malezia sy Afrika","Iza avy no mpivahiny efa tonga tany Madagasikara talohan'ny Eoropeana? → Corrigé : ny Arabo","Inona no maneho fa mifandray amin'i Azia ny Malagasy? → Corrigé : ny fiteny sy ny fomba amam-panao mitovy amin'ny any Azia"]),
    m("FFMOM","Anjara asan'ny tsirairay eo amin'ny ankohonana",
      "Mampianatra ny anjara asan'ny mpikambana tsirairay ao amin'ny ankohonana, mba hahatakaran'ny mpianatra ny lanjan'ny fiaraha-miasa.",
      ["Fifampiresahana am-bava : inona no anjara asan'ny ray, ny reny, ary ny zanaka ao an-trano?","Fanazavana ny fifandraisana eo amin'ny mpikambana ao amin'ny ankohonana","Fanomezana ohatra: ny ray mitady vola, ny reny mikarakara ny trano, ny zanaka manampy sy mianatra","Firaketana an-tsoratra ny anjara asan'ny tsirairay","Fifanakalozan-kevitra : nahoana no ilaina ny fiaraha-miasa ao an-tokantrano?"],
      ["Inona ny anjara asan'ny reny ao an-tokantrano? → Corrigé : ohatra, mikarakara ny trano sy ny sakafo (valiny mety samihafa)","Nahoana no ilaina ny fiaraha-miasa eo amin'ny ankohonana? → Corrigé : mba hahatratrarana soa iombonana sy hisian'ny fifankatiavana"]),
    m("HIRA","- Ry tanindrazanay malala\n- Hymne de l'école",
      "Mampianatra ny hira 'Ry tanindrazanay malala' sy ny hyman'ny sekoly, mifantoka amin'ny famerenana ny tononkira sy ny lantom-peo.",
      ["Fampihirana ny mpampianatra ny hira 'Ry tanindrazanay malala' indray mandeha manontolo","Famerenana andalana isaky ny fehezana kely","Fihirana miaraka amin'ny kilasy manontolo","Fampianarana ny hyman'ny sekoly amin'ny fomba mitovy","Fanoratana ny tononkira ao amin'ny kahie hira"],
      ["Mihira ny fehezana voalohan'ny 'Ry tanindrazanay malala' → Corrigé : fihirana marina araka ny tononkira sy ny feo","Soraty ny andalana voalohan'ny hyman'ny sekoly → Corrigé : araka ny tononkira nampianarina"]),
    m("FITSIPIKA","Ny fehezanteny : marika, anjara asa, rafitra (TD - MVD)",
      "Mampianatra ny fitsipiky ny fehezanteny: ny marika mamantatra azy (renivoham-pehezanteny, teboka), ny anjara asan'ny teny (mpisolo-tena, matoanteny), ary ny rafiny tsotra (Mpisolo tena - Verba - Delisita).",
      ["Fanazavana ny marika mamantatra fehezanteny : renivoham-pehezanteny eo am-piandohana, teboka eo am-piafarana","Fanadihadiana ny anjara asan'ny teny ao amin'ny fehezanteny tsotra: mpisolo-tena, matoanteny","Fampianarana ny rafitra tsotra: Mpisolo tena - Verba - Delisita (TD-MVD)","Fanoratana am-pokonolona fehezanteny mifanaraka amin'ny rafitra nampianarina","Fanitsiana am-pokonolona ny lesoka hita"],
      ["Tondroy ny renivoham-pehezanteny sy ny teboka ao amin'ity fehezanteny ity: 'ny mpianatra dia mianatra tsara' → Corrigé : 'Ny mpianatra dia mianatra tsara.'","Manorata fehezanteny tsotra iray manaraka ny rafitra TD-MVD → Corrigé : valiny manokana voamarina (ohatra: 'Izy mamaky boky.')"]),
    m("TSIPELINA","Fampiasana mari-piatoana",
      "Mampianatra ny fampiasana ny marim-piatoana fototra (teboka, faingo, marim-panontaniana) amin'ny fehezanteny.",
      ["Famerenana ireo marim-piatoana efa fantatra: teboka, faingo","Fampidirana ny marim-panontaniana sy ny toe-teny mampiasa azy","Fanomezana ohatra fehezanteny misy marim-piatoana samihafa","Fanoratana am-pokonolona fehezanteny mampiasa marim-piatoana marina","Fanitsiana ny lesoka hita"],
      ["Ampio marim-piatoana marina: 'Manao ahoana ianao' → Corrigé : 'Manao ahoana ianao ?'","Soraty fehezanteny iray mampiasa faingo → Corrigé : valiny manokana, ohatra 'Andao, ry namako, isika hilalao.'"]),
  ]
},
// ── 7ème S3 ───────────────────────────────────────────────────────────────
{
  n: 3, dateDebut: "2025/09/15",
  theme: "Le milliard, les articulations et le relief de Madagascar",
  sous: "Le nombre de 1 milliard · Les mesures de masse · L'articulation et les muscles · Le relief de Madagascar",
  matieres: [
    m("CALCUL","- Le nombre de 1 milliard\n- Les mesures de masse : le gramme, ses muliples et ses sous multiples\n- Les angles",
      "Introduire les nombres jusqu'au milliard (lecture, écriture, décomposition), les unités de masse (multiples et sous-multiples du gramme) et la notion d'angle en géométrie.",
      ["Présentation de la classe des milliards : lecture et écriture de grands nombres jusqu'à 1 000 000 000","Exercices de décomposition de nombres jusqu'au milliard","Présentation des unités de masse : kg, hg, dag, g, dg, cg, mg et leurs conversions","Exercices de conversion de masse","Découverte de l'angle : sommet, côtés — identifier des angles dans des objets de la classe","Utilisation de l'équerre pour repérer un angle droit"],
      ["Écris en chiffres : deux milliards trois cent millions → Corrigé : 2 300 000 000","Convertis : 3 kg 500 g en g → Corrigé : 3 500 g","Trace un angle et indique son sommet et ses côtés → Corrigé : tracé correct avec sommet et 2 côtés identifiés"]),
    m("CONNAISSANCES USUELLES","L'articulation et les muscles",
      "Étudier le rôle des articulations dans le mouvement et la fonction des muscles associés au squelette.",
      ["Rappel du squelette étudié la semaine précédente","Présentation des articulations : genou, coude, épaule — leur rôle dans le mouvement","Présentation des muscles : leur rôle dans la contraction et le mouvement du corps","Manipulation : plier le bras et observer le rôle du coude et du biceps","Copie et légende d'un schéma simple bras/articulation"],
      ["Cite 2 articulations du corps humain → Corrigé : le genou, le coude (ou toute réponse correcte)","Quel est le rôle des muscles ? → Corrigé : ils permettent le mouvement du corps en se contractant","Que se passe-t-il au niveau du coude quand tu plies le bras ? → Corrigé : l'articulation du coude permet la flexion du bras"]),
    m("GÉOGRAPHIE","Le relief de Madagascar",
      "Étudier les grandes formes de relief de Madagascar : hauts plateaux, montagnes, plaines côtières.",
      ["Observation d'une carte du relief de Madagascar","Présentation des hauts plateaux du centre (altitude moyenne, climat)","Présentation des montagnes principales : Tsaratanana, Andringitra","Présentation des plaines côtières à l'est et à l'ouest","Localisation de ces reliefs sur la carte muette","Copie de la carte du relief dans le cahier"],
      ["Comment s'appelle la partie centrale et élevée de Madagascar ? → Corrigé : les hauts plateaux","Cite une chaîne de montagnes de Madagascar → Corrigé : le Tsaratanana ou l'Andringitra","Où se trouvent les plaines côtières par rapport aux hauts plateaux ? → Corrigé : à l'est et à l'ouest, en bordure de l'île"]),
    m("TANTARA","- Ny fanorenam-ponenana\n- Ny rafi-pamokarana sy ny foto-pisainana Malagasy",
      "Mampianatra ny fomba nanorenan'ireo mponina voalohany ny fonenany sy ny rafi-pamokarana (fambolena, fiompiana) ary ny foto-pisainana malagasy nifototra tamin'izany.",
      ["Famerenana fohy ny lesona teo aloha momba ny fiavian'ny mponina","Fanazavana ny fomba nanorenan'ireo mponina voalohany ny tanàna sy ny fonenana","Famelabelarana ny rafi-pamokarana: fambolen-bary, fiompiana omby","Fanazavana ny foto-pisainana malagasy: fifandraisana amin'ny razana, fanajana ny fihavanana","Firaketana an-tsoratra ny votoatin-dresaka"],
      ["Inona no fambolena nataon'ireo Malagasy voalohany indrindra? → Corrigé : ny vary","Inona no biby nampiompiana be indrindra tamin'izany? → Corrigé : ny omby","Tanisao lohahevitra iray maneho ny foto-pisainana Malagasy → Corrigé : ohatra, ny fanajana ny razana, ny fihavanana (valiny mety samihafa)"]),
    m("FFMOM","Toetra sy fihetsika mampirindra ny fifandraisan'ny mpianakavy",
      "Mampianatra ny toetra sy fihetsika tsara mampirindra ny fifandraisana ao anaty ankohonana, mba hampandroso ny fahatakaran'ny mpianatra ny lanjan'ny fifankatiavana.",
      ["Fifampiresahana am-bava : inona no ataon'ny olona iray raha te-hifandray tsara amin'ny mpianakaviny?","Fanomezana ohatra toetra tsara: fanajana, fifanampiana, firaisan-kina","Fanadihadiana toe-javatra: inona no vokany raha tsy misy fifanajana ao an-tokantrano?","Firaketana an-tsoratra ny toetra sy fihetsika tsara","Fanaovana sehatra kely mampiseho fifandraisana tsara"],
      ["Tanisao toetra tsara iray mampirindra ny ankohonana → Corrigé : ohatra, fanajana, fifanampiana (valiny mety samihafa)","Inona no vokany raha tsy misy fifanajana ao an-tokantrano? → Corrigé : disadisa sy tsy fifandriana ao amin'ny ankohonana"]),
    m("HIRA","- Ry tanindrazanay malala\n- Hymne de l'école",
      "Manohy sy manamafy ny fahatsiarovana ny hira 'Ry tanindrazanay malala' sy ny hyman'ny sekoly, hatramin'ny fahaizana mihira tsara tsirairay.",
      ["Famerenana manontolo ny hira roa efa nianarana","Fizarana ny kilasy ho vondrona roa, samy mihira mifandimby","Fanitsiana ny feo tsy marina","Fanaovana fihirana tokana ho an'ireo mahay","Fanamafisana ny hevitry ny tononkira"],
      ["Mihira manontolo ny 'Ry tanindrazanay malala' → Corrigé : fihirana marina, feno andalana rehetra","Inona no hevitry ny hyman'ny sekoly, araka ny hitanao? → Corrigé : famintinana tsotra araka ny tononkira"]),
    m("FITSIPIKA","Ny fehezankevitra anaty fehezanteny",
      "Mampianatra ny hoe fehezankevitra, ary ny fomba fiforonan'ny fehezanteny misy fehezankevitra maromaro.",
      ["Famerenana fohy ny lesona teo aloha momba ny fehezanteny","Fanazavana ny hoe fehezankevitra: singa iray misy mpisolo-tena sy matoanteny","Fanomezana ohatra fehezanteny misy fehezankevitra roa","Fitadiavana am-pokonolona fehezankevitra ao amin'ny fehezanteny nomena","Fanoratana am-tsoratra fehezanteny misy fehezankevitra roa"],
      ["Firy fehezankevitra no ao amin'ity fehezanteny ity: 'Mianatra ny mpianatra ary mihira ny mpampianatra.'? → Corrigé : roa (mianatra ny mpianatra / mihira ny mpampianatra)","Manorata fehezanteny iray misy fehezankevitra roa → Corrigé : valiny manokana voamarina"]),
    m("TSIPELINA","Ny mari-piatoana amin'ny mpanolotra \"hoy\" sy \"hon\"",
      "Mampianatra ny fampiasana ny marim-piatoana (teboka roa, tsipika mitovy) miaraka amin'ny mpanolotra 'hoy' sy 'hon' amin'ny fitantarana kabary.",
      ["Fanazavana ny hoe mpanolotra 'hoy' sy 'hon': mpampiasa entina milaza ny tenin'olona iray","Fanomezana ohatra: 'Hoy Rakoto: Manao ahoana!'","Fanazavana ny marim-piatoana ilaina: teboka roa, tsipika mitovy","Fanoratana am-pokonolona fehezanteny mampiasa 'hoy' sy 'hon'","Fanitsiana ny lesoka hita"],
      ["Ampio ny marim-piatoana marina: Hoy ny mpampianatra Mazotoa mianatra → Corrigé : Hoy ny mpampianatra : « Mazotoa mianatra ! »","Manorata fehezanteny iray mampiasa 'hon' → Corrigé : valiny manokana voamarina (ohatra: 'Tsara ny asanao, hon'ny mpampianatra.')"]),
  ]
},
// ── 7ème S4 ───────────────────────────────────────────────────────────────
{
  n: 4, dateDebut: "2025/09/22",
  theme: "Le système nerveux, les côtes de Madagascar et les royaumes anciens",
  sous: "4 opérations · La tonne et le quintal · Le carré · Le système nerveux · Les côtes de Madagascar · Fanjakana Sakalava sy Betsimisaraka",
  matieres: [
    m("CALCUL","- 4 opérations des nombres entiers\n- La tonne, le quintal\n- Poids net, poids brut, tare.\n- Le carré",
      "Consolider les 4 opérations sur les grands nombres entiers, introduire les unités de masse pour les grandes quantités (tonne, quintal), les notions de poids net/brut/tare, et la figure géométrique du carré.",
      ["Révision et consolidation des 4 opérations (addition, soustraction, multiplication, division) sur des nombres jusqu'au million","Présentation de la tonne et du quintal : équivalences avec le kilogramme (1 t = 1000 kg, 1 quintal = 100 kg)","Explication des notions de poids brut, poids net et tare à travers un exemple concret (sac de riz)","Exercices d'application sur poids brut/net/tare","Découverte du carré : 4 côtés égaux, 4 angles droits — tracé à la règle et à l'équerre","Calcul du périmètre du carré"],
      ["Pose et calcule : 245 316 × 24 → Corrigé : 5 887 584","Un sac de riz pèse 52 kg (poids brut), le sac vide pèse 2 kg (tare). Quel est le poids net ? → Corrigé : 50 kg","Convertis : 3,5 tonnes en kg → Corrigé : 3 500 kg","Calcule le périmètre d'un carré de 8 cm de côté → Corrigé : 32 cm"]),
    m("CONNAISSANCES USUELLES","- Le système nerveux\n- L'oeil, la peau",
      "Présenter le rôle du système nerveux dans la commande des mouvements et des sensations, puis étudier deux organes des sens : l'œil et la peau.",
      ["Présentation du système nerveux : cerveau, moelle épinière, nerfs","Explication simple du rôle du cerveau : centre de commande du corps","Présentation de l'œil : structure simple (pupille, cristallin) et fonction de la vue","Présentation de la peau : rôle de protection et organe du toucher","Copie et légende d'un schéma simple de l'œil"],
      ["Quel organe commande les mouvements du corps ? → Corrigé : le cerveau","À quoi sert l'œil ? → Corrigé : à voir (organe de la vue)","Cite un rôle de la peau → Corrigé : elle protège le corps (ou permet de sentir le toucher)"]),
    m("GÉOGRAPHIE","Les côtes (littoraux)",
      "Étudier les différents types de côtes de Madagascar : côtes rocheuses, plages, mangroves.",
      ["Rappel du relief étudié la semaine précédente","Présentation des différents types de côtes : côte est (rocheuse, peu découpée), côte ouest (plages, mangroves)","Observation de photos ou d'une carte des littoraux malgaches","Explication de l'importance économique des côtes : pêche, tourisme, ports","Localisation des principales côtes sur la carte muette"],
      ["Quel type de côte trouve-t-on principalement à l'ouest de Madagascar ? → Corrigé : des plages et des mangroves","Cite une activité économique liée aux côtes → Corrigé : la pêche (ou le tourisme, le transport maritime)","Sur la carte muette, indique la côte est et la côte ouest → Corrigé : localisation correcte des deux côtes"]),
    m("TANTARA","- Ny fanjakana Sakalava\n- Ny fanjakana Betsimisaraka",
      "Mampianatra ny fisian'ny fanjakana Sakalava teo amin'ny andrefan'i Madagasikara sy ny fanjakana Betsimisaraka teo amin'ny atsinanana, ny fototry ny fananganana azy ireo.",
      ["Famerenana fohy ny lesona teo aloha momba ny rafi-pamokarana","Famelabelarana ny fanjakana Sakalava: toerana (andrefana), mpanjaka malaza","Famelabelarana ny fanjakana Betsimisaraka: toerana (atsinanana), fototry ny fananganana","Fampitahana ireo fanjakana roa ireo","Firaketana an-tsoratra ny votoatin-dresaka"],
      ["Aiza no toeran'ny fanjakana Sakalava? → Corrigé : any andrefan'i Madagasikara","Aiza no toeran'ny fanjakana Betsimisaraka? → Corrigé : any atsinanan'i Madagasikara","Tanisao fanjakana roa efa nianaranao androany → Corrigé : Sakalava sy Betsimisaraka"]),
    m("FFMOM","Fifampiankinana misy eo amin'ny ankohonana sy ny firenena",
      "Mampianatra ny fifandraisana eo amin'ny ankohonana tsirairay sy ny firenena manontolo, mba hahatakaran'ny mpianatra fa ny ankohonana dia singa iray amin'ny firenena.",
      ["Famerenana ny lesona teo aloha momba ny anjara asa ao an-tokantrano","Fanazavana fa ny ankohonana tsirairay dia ampahany amin'ny firenena","Fanomezana ohatra: raha salama sy voaezaka ny ankohonana, dia mandroso koa ny firenena","Fifampiresahana: ahoana no anampian'ny ankohonana ny firenena?","Firaketana an-tsoratra ny votoatin-dresaka"],
      ["Nahoana no lazaina fa ny ankohonana dia singa iray amin'ny firenena? → Corrigé : satria ny ankohonana maro no mahaforona ny firenena","Inona no vokatry ny fandrosoan'ny ankohonana amin'ny firenena? → Corrigé : mandray anjara amin'ny fandrosoan'ny firenena ihany koa"]),
    m("HIRA","Madagasikara tanindrazanay",
      "Mampianatra ny hira vaovao 'Madagasikara tanindrazanay', mifantoka amin'ny fitiavan-tanindrazana.",
      ["Fampihirana ny mpampianatra ny hira vaovao indray mandeha manontolo","Fanazavana ny hevitry ny tononkira: fitiavana sy fireharehana ny tanindrazana","Famerenana andalana isaky ny fehezana kely","Fihirana miaraka amin'ny kilasy manontolo","Fanoratana ny tononkira ao amin'ny kahie hira"],
      ["Mihira ny fehezana voalohan'ny 'Madagasikara tanindrazanay' → Corrigé : fihirana marina araka ny tononkira sy ny feo","Inona no hevitra lehibe ao amin'ity hira ity? → Corrigé : ny fitiavana ny tanindrazana Madagasikara"]),
    m("FITSIPIKA","Fanavahana ny reniteny sy ny zanateny",
      "Mampianatra ny hoe reniteny (mot-racine) sy zanateny (mot dérivé), amin'ny alalan'ny ohatra mora takarina.",
      ["Fanazavana ny hoe reniteny: ilay teny fototra iavian'ny teny hafa","Fanomezana ohatra: ny reniteny 'soratra' iforonan'ny zanateny 'manoratra', 'mpanoratra', 'fanoratana'","Fitadiavana am-pokonolona zanateny hafa avy amin'ny reniteny iray","Fanavahana am-tsoratra ny reniteny sy ny zanateny ao amin'ny lisitra teny","Fanitsiana ny lesoka hita"],
      ["Tondroy ny reniteny iombonan'ny teny 'mianatra', 'mpianatra', 'fianarana' → Corrigé : anatra","Manorata zanateny roa mifanaraka amin'ny reniteny 'vaky' → Corrigé : ohatra, mivaky, fahavakiana (valiny mety samihafa)"]),
    m("TSIPELINA","samy hafa / samihafa",
      "Mampianatra ny fanavahana ny fanoratana ny teny 'samy hafa' (roa mitokana, midika hoe tsirairay manana ny azy) sy 'samihafa' (teny iray mitambatra, midika hoe maro karazana).",
      ["Fanomezana ohatra fehezanteny misy 'samy hafa': 'Samy hafa avokoa ny hevitry ny mpianatra tsirairay.'","Fanomezana ohatra fehezanteny misy 'samihafa': 'Misy zavamaniry samihafa eto amin'ny sekoly.'","Fanazavana ny fahasamihafan'ny hevitra sy ny fanoratana ireo teny roa ireo","Fanoratana am-pokonolona fehezanteny mampiasa ireo teny roa ireo","Fanitsiana ny lesoka hita"],
      ["Ampidiro amin'ny teny marina ('samy hafa' na 'samihafa'): 'Misy voninkazo ___ eto an-tsaha.' → Corrigé : samihafa","Manorata fehezanteny iray mampiasa 'samy hafa' → Corrigé : valiny manokana voamarina"]),
  ]
},
  ]},
];

const OCTOBRE_7EME = [
  {
    "n": 1,
    "dateDebut": "2025/09/29",
    "theme": "Les grandeurs proportionnelles et les organes des sens",
    "sous": "Grandeurs proportionnelles, mesures de capacité, le rectangle · L'oreille, le nez, la langue · Le climat et la végétation · Fanjakana Betsileo sy Merina",
    "matieres": [
      {
        "matiere": "CALCUL",
        "topic": "- Les grandeurs proportionnelles\n- Les mesures de capacité\n- Le rectange",
        "approche": "Introduire la notion de grandeurs proportionnelles à travers des exemples concrets, présenter les mesures de capacité (litre et ses multiples/sous-multiples) et découvrir le rectangle, après l'étude du carré en septembre.",
        "transmission": [
          "Rappel du carré étudié en septembre (4 côtés égaux, angles droits) pour introduire le rectangle comme figure proche",
          "Présentation des grandeurs proportionnelles à travers un exemple concret (prix de plusieurs objets identiques) et construction d'un tableau de proportionnalité",
          "Exercices de recherche du quatrième terme d'un tableau de proportionnalité",
          "Présentation des mesures de capacité : hl, dal, l, dl, cl, ml et leurs conversions",
          "Exercices de conversion de capacité",
          "Découverte du rectangle : 4 angles droits, côtés opposés égaux — tracé à la règle et à l'équerre, calcul du périmètre"
        ],
        "exercices": [
          "Un cahier coûte 500 Ar. Combien coûtent 4 cahiers identiques ? → Corrigé : 2 000 Ar",
          "Complète le tableau de proportionnalité : 2 kg de riz coûtent 3 000 Ar, combien coûtent 5 kg ? → Corrigé : 7 500 Ar",
          "Convertis : 3 l 5 dl en cl → Corrigé : 350 cl",
          "Calcule le périmètre d'un rectangle de longueur 12 cm et largeur 7 cm → Corrigé : 38 cm"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "- L'oreille\n- Le nez\n- La langue",
        "approche": "Après l'étude du système nerveux, de l'œil et de la peau en septembre, poursuivre l'étude des organes des sens avec l'oreille (ouïe), le nez (odorat) et la langue (goût).",
        "transmission": [
          "Rappel des organes des sens déjà étudiés (l'œil, la peau) en septembre",
          "Présentation de l'oreille : structure simple (oreille externe, tympan) et rôle dans l'audition",
          "Présentation du nez : rôle dans la respiration et l'odorat",
          "Présentation de la langue : rôle dans le goût et identification des saveurs de base (sucré, salé, acide, amer)",
          "Expérience simple : reconnaître une odeur ou un goût les yeux fermés",
          "Copie et légende d'un schéma simple de l'oreille"
        ],
        "exercices": [
          "À quoi sert l'oreille ? → Corrigé : à entendre (organe de l'ouïe)",
          "Cite les 4 saveurs de base perçues par la langue → Corrigé : le sucré, le salé, l'acide, l'amer",
          "Quel organe permet de sentir les odeurs ? → Corrigé : le nez"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "- Le climat\n- La végétation",
        "approche": "Après l'étude des côtes de Madagascar en septembre, étudier le climat de l'île (zones climatiques) et la végétation associée (forêts, savane).",
        "transmission": [
          "Rappel des côtes étudiées en septembre et de leur influence sur le climat",
          "Présentation des grandes zones climatiques de Madagascar : climat tropical humide à l'est, climat plus sec à l'ouest et au sud",
          "Explication du lien entre climat et relief (hauts plateaux plus tempérés)",
          "Présentation de la végétation : forêt dense à l'est, savane à l'ouest, végétation semi-désertique au sud",
          "Observation d'une carte de la végétation de Madagascar",
          "Copie de la carte climat/végétation dans le cahier"
        ],
        "exercices": [
          "Quel type de climat trouve-t-on à l'est de Madagascar ? → Corrigé : un climat tropical humide",
          "Quel type de végétation domine dans le sud de Madagascar ? → Corrigé : une végétation semi-désertique (épineux)",
          "Pourquoi les hauts plateaux ont-ils un climat plus frais ? → Corrigé : à cause de leur altitude élevée"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "- Ny fanjakana Betsileo\n- Ny fanjakana Merina",
        "approche": "Manohy ny fandalinana ny fanjakana taloha teto Madagasikara, aorian'ny fanjakana Sakalava sy Betsimisaraka natao tamin'ny Septambra, mianatra ny fanjakana Betsileo sy ny fanjakana Merina.",
        "transmission": [
          "Famerenana fohy ny fanjakana Sakalava sy Betsimisaraka efa nianarana tamin'ny Septambra",
          "Famelabelarana ny fanjakana Betsileo : toerana (faritra afovoany atsimo), fomba fiveloman'ny mponina (fambolem-bary an-tanety)",
          "Famelabelarana ny fanjakana Merina : toerana (Imerina, afovoan-tany), ny fiforonan'ny fanjakana",
          "Fampitahana ireo fanjakana roa ireo (toerana, fomba fiveloman'ny mponina)",
          "Firaketana an-tsoratra ny votoatin-dresaka"
        ],
        "exercices": [
          "Aiza no toeran'ny fanjakana Betsileo ? → Corrigé : any amin'ny faritra afovoany atsimon'i Madagasikara",
          "Aiza no toeran'ny fanjakana Merina ? → Corrigé : any Imerina, amin'ny afovoan-tanin'i Madagasikara",
          "Tanisao fanjakana roa efa nianaranao androany → Corrigé : Betsileo sy Merina"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "- Ny haben'ny ankohonana sy ny teti-bolany",
        "approche": "Manohy ny lesona momba ny ankohonana, aorian'ny fifampiankinana eo amin'ny ankohonana sy ny firenena natao tamin'ny Septambra, mianatra ny fifandraisan'ny haben'ny ankohonana (isan'ny mpikambana) amin'ny teti-bolan'ny fianakaviana.",
        "transmission": [
          "Famerenana fohy ny lesona teo aloha momba ny fifampiankinan'ny ankohonana sy ny firenena",
          "Fanazavana ny hoe ankohonana kely sy ankohonana be mpikambana",
          "Fifampiresahana : nahoana no mila teti-bolana ny ankohonana tsirairay ?",
          "Fanomezana ohatra : ny fandaniana amin'ny sakafo, fianarana, fitafiana mifandray amin'ny isan'ny mpikambana",
          "Firaketana an-tsoratra ny votoatin-dresaka"
        ],
        "exercices": [
          "Inona no atao hoe teti-bolam-pianakaviana ? → Corrigé : drafitra momba ny fandaniana sy ny fidiram-bola ao anaty ankohonana",
          "Nahoana no mety hisy fahasamihafana ny teti-bolan'ny ankohonana kely sy ny ankohonana be mpikambana ? → Corrigé : satria ny isan'ny mpikambana no mamaritra ny habetsahan'ny fandaniana"
        ]
      },
      {
        "matiere": "HIRA",
        "topic": "Madagasika tanindrazana P.S 120",
        "approche": "Manohy ny fianarana hira mikasika ny fitiavan-tanindrazana, aorian'ny 'Madagasikara tanindrazanay' natao tamin'ny Septambra, amin'ny alalan'ny hira 'Madagasika tanindrazana' ao amin'ny boky hira pejy 120.",
        "transmission": [
          "Famerenana fohy ny hira 'Madagasikara tanindrazanay' efa nianarana tamin'ny Septambra",
          "Fampihirana ny mpampianatra ny hira vaovao 'Madagasika tanindrazana' (P.S pejy 120) indray mandeha manontolo",
          "Famerenana andalana isaky ny fehezana kely",
          "Fihirana miaraka amin'ny kilasy manontolo",
          "Fanoratana ny tononkira ao amin'ny kahie hira"
        ],
        "exercices": [
          "Mihira ny fehezana voalohan'ny hira 'Madagasika tanindrazana' → Corrigé : fihirana marina araka ny tononkira sy ny feo",
          "Amin'ny pejy firy ao amin'ny boky hira no ahitana ity hira ity ? → Corrigé : pejy 120"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Ny sokajinteny amin'ny ankapobeny",
        "approche": "Manomboka mandalina ny sokajinteny amin'ny ankapobeny, aorian'ny fianarana ny fehezanteny sy ny fehezankevitra tamin'ny Septambra.",
        "transmission": [
          "Famerenana fohy ny fehezanteny sy ny fehezankevitra efa nianarana tamin'ny Septambra",
          "Fanazavana ny hoe sokajinteny : fitambaran'ny teny mitovy anjara asa ao amin'ny fehezanteny",
          "Fanomezana topi-maso amin'ireo sokajinteny lehibe : anarana, matoanteny, mpanoritsoritra, mpisolo-tena",
          "Fitadiavana am-pokonolona ohatra amin'ny sokajinteny tsirairay ao anaty fehezanteny",
          "Fanoratana am-tsoratra lisitra teny voasokajy"
        ],
        "exercices": [
          "Inona avy ireo sokajinteny efa hitanao androany ? → Corrigé : anarana, matoanteny, mpanoritsoritra, mpisolo-tena",
          "Tondroy ny anarana ao amin'ity fehezanteny ity : 'Mianatra tsara ny mpianatra.' → Corrigé : mpianatra"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Ny teny fampiasa samy ekena ny fanoratana azy",
        "approche": "Manohy ny fandalinana ny fanoratana teny sasany, aorian'ny 'samy hafa'/'samihafa' natao tamin'ny Septambra, mianatra ireo teny izay ekena ny fomba fanoratana samihafa roa.",
        "transmission": [
          "Famerenana fohy ny fanavahana 'samy hafa' sy 'samihafa'",
          "Fanazavana fa misy teny sasany ekena ny fanoratana azy amin'ny endrika roa",
          "Fanomezana ohatra teny toy izany avy amin'ny lahatsoratra hovakina",
          "Fitadiavana am-pokonolona teny hafa mety ho toy izany",
          "Fanoratana am-pokonolona fehezanteny mampiasa ireo teny ireo"
        ],
        "exercices": [
          "Tadiavo ao amin'ny lahatsoratra novakina teny anankiray azo soratana amin'ny fomba roa, ary soraty ireo endrika roa ireo → Corrigé : valiny manokana araka ny lahatsoratra nampiasaina (ohatra : 'izay' / 'zay')",
          "Manorata fehezanteny iray mampiasa ny endriny fohy amin'ireo teny hita → Corrigé : valiny manokana voamarina"
        ]
      }
    ]
  },
  {
    "n": 2,
    "dateDebut": "2025/10/06",
    "theme": "Les nombres décimaux et l'appareil digestif",
    "sous": "Nombres décimaux, divisibilité, intervalles · La dent et l'appareil digestif · Les cours d'eau et les lacs · Ny fanjanahantany",
    "matieres": [
      {
        "matiere": "CALCUL",
        "topic": "- Les nombres décimaux : 4 opérations\n- Caractères de divisibilité\n- Les intervalles",
        "approche": "Après les grandeurs proportionnelles, les mesures de capacité et le rectangle de la semaine 1, introduire les nombres décimaux et les 4 opérations sur ces nombres, les caractères de divisibilité et la notion d'intervalle numérique.",
        "transmission": [
          "Rappel des nombres entiers et introduction de l'écriture décimale (partie entière, virgule, partie décimale)",
          "Présentation de l'addition et de la soustraction de nombres décimaux (alignement de la virgule)",
          "Présentation de la multiplication et de la division simple de nombres décimaux",
          "Présentation des caractères de divisibilité par 2, 3, 5, 9 et 10",
          "Exercices d'application sur la divisibilité",
          "Introduction de la notion d'intervalle (ex : nombres compris entre 10 et 20)"
        ],
        "exercices": [
          "Pose et calcule : 24,5 + 8,75 → Corrigé : 33,25",
          "Pose et calcule : 15,6 - 4,25 → Corrigé : 11,35",
          "Le nombre 4 725 est-il divisible par 3 ? Justifie → Corrigé : oui, car 4+7+2+5=18 qui est divisible par 3",
          "Cite un nombre appartenant à l'intervalle [10 ; 20] → Corrigé : par exemple 15 (tout nombre entre 10 et 20 inclus convient)"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "- La dent\n- L'appareil digestif",
        "approche": "Après l'étude de l'oreille, du nez et de la langue, poursuivre avec la dent (types et rôle dans la mastication) et l'appareil digestif (trajet des aliments).",
        "transmission": [
          "Rappel de la langue et du goût étudiés la semaine précédente",
          "Présentation des types de dents : incisives, canines, molaires et leur rôle",
          "Présentation de l'appareil digestif : bouche, œsophage, estomac, intestins",
          "Explication simple du trajet des aliments dans le corps",
          "Copie et légende d'un schéma simple de l'appareil digestif"
        ],
        "exercices": [
          "Cite 3 types de dents → Corrigé : les incisives, les canines, les molaires",
          "Quel est le rôle des molaires ? → Corrigé : elles broient les aliments",
          "Cite dans l'ordre 2 organes traversés par les aliments après la bouche → Corrigé : l'œsophage puis l'estomac"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "- Les cours d'eau\n- Les lacs",
        "approche": "Après le climat et la végétation, étudier l'hydrographie de Madagascar : les principaux cours d'eau (fleuves, rivières) et les lacs.",
        "transmission": [
          "Rappel du climat et de son influence sur les cours d'eau (saison des pluies)",
          "Présentation des principaux fleuves de Madagascar (ex : Mangoky, Betsiboka)",
          "Présentation des principaux lacs (ex : lac Alaotra, lac Itasy)",
          "Observation d'une carte hydrographique de Madagascar",
          "Localisation des cours d'eau et lacs sur la carte muette"
        ],
        "exercices": [
          "Cite un fleuve de Madagascar → Corrigé : le Betsiboka (ou le Mangoky)",
          "Cite un lac de Madagascar → Corrigé : le lac Alaotra (ou le lac Itasy)",
          "Quelle saison fait monter le niveau des cours d'eau ? → Corrigé : la saison des pluies"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Ny fanjanahantany",
        "approche": "Manomboka mianatra ny vanim-potoanan'ny fanjanahantany, aorian'ny fandalinana ny fanjakana Betsileo sy Merina tamin'ny herinandro voalohany.",
        "transmission": [
          "Famerenana fohy ny fanjakana Merina efa nianarana tamin'ny herinandro voalohany",
          "Fanazavana ny hoe fanjanahantany : fibodoan'ny vahiny (Frantsay) ny fahefana teto Madagasikara",
          "Famelabelarana ny fotoana nanombohan'ny fanjanahantany (1896)",
          "Fanazavana ny fiantraikan'ny fanjanahantany tamin'ny fiainam-bahoaka",
          "Firaketana an-tsoratra ny votoatin-dresaka"
        ],
        "exercices": [
          "Iza no firenena nanjanaka an'i Madagasikara ? → Corrigé : Frantsa",
          "Taona firy no nanombohan'ny fanjanahantany teto Madagasikara ? → Corrigé : 1896",
          "Inona no dikan'ny hoe fanjanahantany ? → Corrigé : ny fibodoan'ny firenena vahiny ny fahefana amin'ny firenena iray hafa"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Ny fialan-tsasatra sy ny fialamboly",
        "approche": "Manohy ny fianarana momba ny fiainam-pianakaviana, aorian'ny teti-bolam-pianakaviana natao tamin'ny herinandro voalohany, mianatra ny lanjan'ny fialan-tsasatra sy ny fialamboly ao amin'ny ankohonana.",
        "transmission": [
          "Famerenana fohy ny teti-bolam-pianakaviana efa nianarana",
          "Fanazavana ny hoe fialan-tsasatra : fotoana ialàna sasatra aorian'ny asa na fianarana",
          "Fanomezana ohatra fialamboly : lalao, fitsangatsanganana, famakiana boky",
          "Fifampiresahana : inona no fialamboly ankafizinao ?",
          "Firaketana an-tsoratra ny votoatin-dresaka"
        ],
        "exercices": [
          "Inona no atao hoe fialan-tsasatra ? → Corrigé : fotoana ialàna sasatra aorian'ny asa na fianarana",
          "Tanisao fialamboly iray ankafizinao → Corrigé : valiny manokana, ohatra : mamaky boky, milalao baolina"
        ]
      },
      {
        "matiere": "HIRA",
        "topic": "Zanahary o! tahio\nP.S 120",
        "approche": "Manomboka mianatra hira vaovao 'Zanahary ô! tahio' (ao amin'ny boky hira pejy 120), aorian'ny 'Madagasika tanindrazana' natao tamin'ny herinandro voalohany.",
        "transmission": [
          "Famerenana fohy ny hira 'Madagasika tanindrazana' efa nianarana",
          "Fampihirana ny mpampianatra ny hira vaovao 'Zanahary ô! tahio' indray mandeha manontolo",
          "Famerenana andalana isaky ny fehezana kely",
          "Fihirana miaraka amin'ny kilasy manontolo",
          "Fanoratana ny tononkira ao amin'ny kahie hira"
        ],
        "exercices": [
          "Mihira ny fehezana voalohan'ny hira 'Zanahary ô! tahio' → Corrigé : fihirana marina araka ny tononkira sy ny feo",
          "Amin'ny pejy firy ao amin'ny boky hira no ahitana ity hira ity ? → Corrigé : pejy 120"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Ny sokajinteny azo ampiasaina ho EM",
        "approche": "Manohy ny fandalinana ny sokajinteny, aorian'ny topi-maso amin'ny sokajinteny amin'ny ankapobeny natao tamin'ny herinandro voalohany, mianatra ireo sokajinteny azo ampiasaina ho mpanoritsoritra (EM).",
        "transmission": [
          "Famerenana fohy ny sokajinteny efa hita tamin'ny herinandro voalohany",
          "Fanazavana ny hoe EM (mpanoritsoritra) : teny manampy hevitra amin'ny anarana",
          "Fanomezana ohatra sokajinteny azo jerena ho EM : mpamaritra, anarana, matoanteny (endrika)",
          "Fitadiavana am-pokonolona EM ao anaty fehezanteny nomena",
          "Fanoratana am-tsoratra fehezanteny misy EM"
        ],
        "exercices": [
          "Tondroy ny EM ao amin'ity fehezanteny ity : 'Ny trano lehibe dia an-dRasoa.' → Corrigé : lehibe",
          "Manorata fehezanteny iray misy EM → Corrigé : valiny manokana voamarina (ohatra : 'Ny voninkazo mena dia tsara tarehy.')"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "noho / no ho",
        "approche": "Manohy ny fandalinana ny teny sarotra soratana, aorian'ny teny fampiasa samy ekena ny fanoratana azy natao tamin'ny herinandro voalohany, mianatra ny fanavahana 'noho' (mpampitaha) sy 'no ho' (roa mitokana).",
        "transmission": [
          "Famerenana fohy ny lesona teo aloha momba ny teny sarotra soratana",
          "Fanazavana ny hoe 'noho' : teny iray mitambatra, ampiasaina amin'ny fampitahana (ohatra : lehibe noho)",
          "Fanazavana ny hoe 'no ho' : teny roa mitokana, 'no' fanamafisana + 'ho' mpanoro fotoana ho avy",
          "Fanomezana ohatra fehezanteny amin'ny roa tonta",
          "Fanoratana am-pokonolona fehezanteny mampiasa 'noho' sy 'no ho'"
        ],
        "exercices": [
          "Manorata fehezanteny iray mampiasa 'noho' amin'ny fampitahana → Corrigé : valiny manokana voamarina (ohatra : 'Lehibe noho i Koto i Be.')",
          "Ampidiro amin'ny teny marina ('noho' na 'no ho') : 'Izy ___ avy any an-tanàna rahampitso.' → Corrigé : no ho"
        ]
      }
    ]
  },
  {
    "n": 3,
    "dateDebut": "2025/10/13",
    "theme": "Le commerce, l'alimentation et la population",
    "sous": "Prix d'achat/prix de revient, mesures de surface, le parallélogramme · Les aliments et les intoxications alimentaires · Population de Madagascar · Ny tolom-panafahana : Menalamba, Sadiavahy",
    "matieres": [
      {
        "matiere": "CALCUL",
        "topic": "- Prix d'achat, prix de revient\n- Les mesures de surface\n- Le parallélogramme",
        "approche": "Après les nombres décimaux et la divisibilité, introduire les notions commerciales de prix d'achat et prix de revient, les mesures de surface (are, hectare) et la figure du parallélogramme.",
        "transmission": [
          "Rappel du rectangle étudié en semaine 1",
          "Présentation du prix d'achat et du prix de revient (prix d'achat + frais annexes) à travers un exemple concret",
          "Exercices de calcul du prix de revient",
          "Présentation des mesures de surface : m², a (are), ha (hectare) et leurs équivalences",
          "Découverte du parallélogramme : côtés opposés parallèles et égaux — tracé à la règle et à l'équerre",
          "Calcul du périmètre du parallélogramme"
        ],
        "exercices": [
          "Un commerçant achète un sac de riz à 45 000 Ar, les frais de transport s'élèvent à 5 000 Ar. Quel est le prix de revient ? → Corrigé : 50 000 Ar",
          "Convertis : 3 ha en a → Corrigé : 300 a",
          "Calcule le périmètre d'un parallélogramme de côtés 9 cm et 5 cm → Corrigé : 28 cm"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "- Les aliments\n- Les intoxications alimentaires",
        "approche": "Après la dent et l'appareil digestif, étudier les différents types d'aliments et les risques d'intoxication alimentaire.",
        "transmission": [
          "Rappel de l'appareil digestif étudié la semaine précédente",
          "Présentation des grandes catégories d'aliments : aliments bâtisseurs, énergétiques, protecteurs",
          "Présentation des causes d'intoxication alimentaire : aliments avariés, mal conservés, mal cuits",
          "Explication des symptômes simples d'une intoxication alimentaire",
          "Discussion sur les règles d'hygiène alimentaire pour éviter les intoxications"
        ],
        "exercices": [
          "Cite les 3 grandes catégories d'aliments → Corrigé : les aliments bâtisseurs, énergétiques et protecteurs",
          "Cite une cause d'intoxication alimentaire → Corrigé : manger un aliment avarié ou mal cuit",
          "Cite une règle d'hygiène pour éviter une intoxication alimentaire → Corrigé : bien laver et bien cuire les aliments (ou se laver les mains avant de manger)"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "- Nombre et structure de la population\n- La croissance de la pop°",
        "approche": "Après les cours d'eau et les lacs, étudier la démographie de Madagascar : le nombre d'habitants, la structure de la population et sa croissance.",
        "transmission": [
          "Rappel de l'hydrographie étudiée la semaine précédente",
          "Présentation du nombre approximatif d'habitants de Madagascar",
          "Présentation de la structure de la population : forte proportion de jeunes",
          "Explication de la notion de croissance démographique et de ses causes",
          "Observation d'un graphique simple de croissance de la population"
        ],
        "exercices": [
          "Madagascar compte environ combien d'habitants ? → Corrigé : environ 28 à 29 millions d'habitants",
          "La population malgache est-elle plutôt jeune ou âgée ? → Corrigé : plutôt jeune (forte proportion de moins de 25 ans)",
          "Qu'est-ce que la croissance démographique ? → Corrigé : l'augmentation du nombre d'habitants d'un pays au fil du temps"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "- Ny tolom-panafahana\n- Menalamba\n- Sadiavahy",
        "approche": "Manohy ny fianarana ny fanjanahantany, aorian'ny fisian'ny fanjanahantany natao tamin'ny herinandro faha-2, mianatra ny tolom-panafahana voalohany : ny Menalamba sy ny Sadiavahy.",
        "transmission": [
          "Famerenana fohy ny fanjanahantany efa nianarana",
          "Fanazavana ny hoe tolom-panafahana : ady nataon'ny Malagasy hanoherana ny fanjanahantany",
          "Famelabelarana ny hetsika Menalamba : toerana, antony nanaovana azy",
          "Famelabelarana ny hetsika Sadiavahy : toerana, antony nanaovana azy",
          "Firaketana an-tsoratra ny votoatin-dresaka"
        ],
        "exercices": [
          "Inona no atao hoe tolom-panafahana ? → Corrigé : ady nataon'ny vahoaka Malagasy hanoherana ny fanjanahantany",
          "Tanisao hetsika roa nanoherana ny fanjanahantany efa nianaranao → Corrigé : ny Menalamba sy ny Sadiavahy"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Ny fialan-tsasatra sy ny fialamboly",
        "approche": "Manohy sy manamafy ny lesona momba ny fialan-tsasatra sy ny fialamboly natao tamin'ny herinandro teo aloha, mifantoka amin'ny fifidianana fialamboly mifanentana amin'ny taona sy ny toe-batana.",
        "transmission": [
          "Famerenana ny lesona teo aloha momba ny fialan-tsasatra sy ny fialamboly",
          "Fanazavana fa ny fialamboly dia tokony hifanaraka amin'ny taona sy ny fahasalamana",
          "Fanomezana ohatra fialamboly mety amin'ny mpianatra : lalao, fanatanjahan-tena, famakiana",
          "Fifampiresahana : inona ny fialamboly mahasoa ho an'ny ankizy ?",
          "Firaketana an-tsoratra fintina"
        ],
        "exercices": [
          "Inona no atao hoe fialamboly mahasoa ? → Corrigé : fialamboly mifanaraka amin'ny taona sy tsy manimba ny fahasalamana, ohatra fanatanjahan-tena",
          "Tanisao fialamboly roa mahasoa ho an'ny mpianatra → Corrigé : ohatra, ny fanatanjahan-tena sy ny famakiana boky"
        ]
      },
      {
        "matiere": "HIRA",
        "topic": "Zanahary o! tahio\nP.S 120",
        "approche": "Manohy sy manamafy ny hira 'Zanahary ô! tahio' natao tamin'ny herinandro teo aloha, hatramin'ny fahaizana mihira tsara tsirairay.",
        "transmission": [
          "Famerenana manontolo ny hira 'Zanahary ô! tahio'",
          "Fizarana ny kilasy ho vondrona roa, samy mihira mifandimby",
          "Fanitsiana ny feo tsy marina",
          "Fanaovana fihirana tokana ho an'ireo mahay",
          "Fanamafisana ny hevitry ny tononkira"
        ],
        "exercices": [
          "Mihira manontolo ny hira 'Zanahary ô! tahio' → Corrigé : fihirana marina, feno andalana rehetra",
          "Inona no hevitry ny hira, araka ny hitanao ? → Corrigé : famintinana tsotra araka ny tononkira (fangatahana fitahiana amin'Andriamanitra)"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Ny EM voasoritra sy tsy voasoritra",
        "approche": "Manohy ny fianarana momba ny EM (mpanoritsoritra), aorian'ny sokajinteny azo ampiasaina ho EM natao tamin'ny herinandro teo aloha, mianatra ny fanavahana ny EM voasoritra sy ny EM tsy voasoritra.",
        "transmission": [
          "Famerenana fohy ny EM efa nianarana",
          "Fanazavana ny hoe EM voasoritra : mifanaraka mivantana amin'ny anarana ao amin'ny fehezanteny",
          "Fanazavana ny hoe EM tsy voasoritra : mitokana kokoa, tsy mifanaraka mivantana amin'ny anarana",
          "Fitadiavana am-pokonolona ohatra roa tonta ao anaty fehezanteny",
          "Fanoratana am-tsoratra fehezanteny misy EM voasoritra sy tsy voasoritra"
        ],
        "exercices": [
          "Tondroy ny EM voasoritra ao amin'ity fehezanteny ity : 'Ny zaza kely dia mianatra.' → Corrigé : kely",
          "Manorata fehezanteny iray misy EM tsy voasoritra → Corrigé : valiny manokana voamarina"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "noho ny / nony",
        "approche": "Manohy ny fandalinana ny teny sarotra soratana, aorian'ny 'noho'/'no ho' natao tamin'ny herinandro teo aloha, mianatra ny fanavahana 'noho ny' (fampitahana) sy 'nony' (mpanoro fotoana, midika hoe 'rehefa').",
        "transmission": [
          "Famerenana fohy ny 'noho'/'no ho' efa nianarana",
          "Fanazavana ny hoe 'noho ny' : ampiasaina amin'ny fampitahana miaraka amin'ny anarana",
          "Fanazavana ny hoe 'nony' : mpanoro fotoana, midika hoe 'rehefa' na 'raha vao'",
          "Fanomezana ohatra fehezanteny amin'ny roa tonta",
          "Fanoratana am-pokonolona fehezanteny mampiasa 'noho ny' sy 'nony'"
        ],
        "exercices": [
          "Ampidiro amin'ny teny marina ('noho ny' na 'nony') : '___ tonga ny orana, dia nody izahay.' → Corrigé : Nony",
          "Manorata fehezanteny iray mampiasa 'noho ny' → Corrigé : valiny manokana voamarina (ohatra : 'Faly izy noho ny fahombiazany.')"
        ]
      }
    ]
  },
  {
    "n": 4,
    "dateDebut": "2025/10/27",
    "theme": "Le bénéfice, les maladies entériques et l'exode rural",
    "sous": "Prix de vente, bénéfice, perte, mesures agraires, le rectangle · Maladies entériques et parasitoses intestinales · L'exode rural · Tolom-panafahana : V.V.S, Jean Ralaimongo, M.D.R.M",
    "matieres": [
      {
        "matiere": "CALCUL",
        "topic": "- Prix de vente, bénéfice, perte\n- Les mesures agraires\n- Le rectangle",
        "approche": "Après le prix de revient étudié en semaine 3, poursuivre avec le prix de vente, le calcul du bénéfice et de la perte, approfondir les mesures agraires et revoir le rectangle.",
        "transmission": [
          "Rappel du prix d'achat et du prix de revient étudiés en semaine 3",
          "Présentation du prix de vente et de la formule du bénéfice (prix de vente - prix de revient) et de la perte (cas inverse)",
          "Exercices de calcul de bénéfice et de perte",
          "Approfondissement des mesures agraires : are, hectare appliqués à des terrains rizicoles",
          "Révision du rectangle : périmètre et introduction du calcul de l'aire (longueur × largeur)"
        ],
        "exercices": [
          "Un commerçant achète un sac de riz à 50 000 Ar (prix de revient) et le revend à 58 000 Ar. Quel est son bénéfice ? → Corrigé : 8 000 Ar",
          "Un vendeur achète un objet à 20 000 Ar et le revend à 17 000 Ar. Quelle est sa perte ? → Corrigé : 3 000 Ar",
          "Calcule l'aire d'un rectangle de longueur 15 m et largeur 6 m → Corrigé : 90 m²"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "- Les maladies entérique\n- Les parasitoses intestiales",
        "approche": "Après les aliments et les intoxications alimentaires, étudier les maladies entériques et les parasitoses intestinales, leurs causes et leur prévention.",
        "transmission": [
          "Rappel des intoxications alimentaires étudiées en semaine 3",
          "Présentation des maladies entériques (ex : diarrhée, choléra) : causes liées à l'eau et aux aliments contaminés",
          "Présentation des parasitoses intestinales (ex : vers intestinaux) et leur mode de transmission",
          "Explication des moyens de prévention : hygiène des mains, eau potable, aliments bien cuits",
          "Discussion collective sur les bonnes pratiques d'hygiène à l'école et à la maison"
        ],
        "exercices": [
          "Cite une maladie entérique → Corrigé : la diarrhée (ou le choléra)",
          "Comment se transmettent souvent les parasitoses intestinales ? → Corrigé : par l'eau ou les aliments contaminés, ou le manque d'hygiène des mains",
          "Cite un moyen de prévenir ces maladies → Corrigé : se laver les mains, boire de l'eau potable, bien cuire les aliments"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "L'exode rural",
        "approche": "Après la structure et la croissance de la population, étudier l'exode rural : le déplacement des habitants des campagnes vers les villes et ses conséquences.",
        "transmission": [
          "Rappel de la croissance démographique étudiée en semaine 3",
          "Présentation de la notion d'exode rural : départ des habitants des campagnes vers les villes",
          "Explication des causes : recherche de travail, d'études, de meilleures conditions de vie",
          "Explication des conséquences : villes surpeuplées, campagnes qui se vident",
          "Discussion collective : quelles solutions pour limiter l'exode rural ?"
        ],
        "exercices": [
          "Qu'est-ce que l'exode rural ? → Corrigé : le départ des habitants des campagnes vers les villes",
          "Cite une cause de l'exode rural → Corrigé : la recherche de travail (ou de meilleures conditions de vie, d'études)",
          "Cite une conséquence de l'exode rural sur les villes → Corrigé : les villes deviennent surpeuplées"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "- Ny tolom-panafahana :\n- V.V.S\n- Jean Ralaimongo\n- M.D.R.M",
        "approche": "Manohy ny fianarana ny tolom-panafahana, aorian'ny Menalamba sy Sadiavahy natao tamin'ny herinandro faha-3, mianatra ireo hetsika sy mpitarika hafa : V.V.S, Jean Ralaimongo, ary M.D.R.M.",
        "transmission": [
          "Famerenana fohy ny Menalamba sy ny Sadiavahy efa nianarana",
          "Famelabelarana ny hetsika V.V.S (Vy Vato Sakelika) : antokon'olona nanao tsiambaratelo hanoherana ny fanjanahantany",
          "Famelabelarana an-dRalaimongo Jean, mpitarika nanentana ny vahoaka hitaky ny zon'ny Malagasy",
          "Famelabelarana ny antoko M.D.R.M (Mouvement Démocratique de la Rénovation Malgache)",
          "Firaketana an-tsoratra ny votoatin-dresaka"
        ],
        "exercices": [
          "Inona no atao hoe V.V.S ? → Corrigé : Vy Vato Sakelika, antokon'olona nanao tsiambaratelo nanohitra ny fanjanahantany",
          "Iza i Jean Ralaimongo ? → Corrigé : mpitarika nanentana ny vahoaka Malagasy hitaky ny zony",
          "Inona no atao hoe M.D.R.M ? → Corrigé : Mouvement Démocratique de la Rénovation Malgache, antoko politika Malagasy"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Ny sakafo ara-pahasalamana",
        "approche": "Manomboka mianatra ny lohahevitra momba ny sakafo ara-pahasalamana, aorian'ny fialan-tsasatra sy ny fialamboly natao tamin'ireo herinandro teo aloha, mifantoka amin'ny fikarakarana sakafo mahasalama ho an'ny ankohonana.",
        "transmission": [
          "Famerenana fohy ny lesona teo aloha momba ny fialamboly mahasoa",
          "Fanazavana ny hoe sakafo ara-pahasalamana : sakafo mizara amam-panjifana ary madio",
          "Fanomezana ohatra sakafo tsara ho an'ny fahasalamana (legioma, voankazo, laoka misy otrikaina)",
          "Fifampiresahana : inona ny sakafo tsara hozarain'ny ankohonana isan'andro ?",
          "Firaketana an-tsoratra ny votoatin-dresaka"
        ],
        "exercices": [
          "Inona no atao hoe sakafo ara-pahasalamana ? → Corrigé : sakafo mizara amam-panjifana, madio ary mahasoa ny vatana",
          "Tanisao sakafo roa mahasoa ho an'ny fahasalamana → Corrigé : ohatra, ny legioma sy ny voankazo"
        ]
      },
      {
        "matiere": "HIRA",
        "topic": "Nankaiza ny renin'indriako \nPS p 125",
        "approche": "Manomboka mianatra hira vaovao 'Nankaiza ny renin'indriako' (ao amin'ny boky hira pejy 125), aorian'ny 'Zanahary ô! tahio' natao tamin'ireo herinandro teo aloha.",
        "transmission": [
          "Famerenana fohy ny hira 'Zanahary ô! tahio' efa nianarana",
          "Fampihirana ny mpampianatra ny hira vaovao 'Nankaiza ny renin'indriako' indray mandeha manontolo",
          "Famerenana andalana isaky ny fehezana kely",
          "Fihirana miaraka amin'ny kilasy manontolo",
          "Fanoratana ny tononkira ao amin'ny kahie hira"
        ],
        "exercices": [
          "Mihira ny fehezana voalohan'ny hira 'Nankaiza ny renin'indriako' → Corrigé : fihirana marina araka ny tononkira sy ny feo",
          "Amin'ny pejy firy ao amin'ny boky hira no ahitana ity hira ity ? → Corrigé : pejy 125"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Ny lazaina ao anaty fehezanteny tso-drafitra",
        "approche": "Manohy ny fianarana ny fehezanteny, aorian'ny EM voasoritra sy tsy voasoritra natao tamin'ny herinandro teo aloha, mianatra izay lazaina ao anaty fehezanteny tso-drafitra.",
        "transmission": [
          "Famerenana fohy ny EM efa nianarana",
          "Fanazavana ny hoe fehezanteny tso-drafitra : fehezanteny tsotra misy fehezankevitra iray monja",
          "Fanadihadiana izay lazaina (votoatiny) ao anaty fehezanteny toy izany",
          "Fitadiavana am-pokonolona ohatra fehezanteny tso-drafitra sy famintinana ny votoatiny",
          "Fanoratana am-tsoratra fehezanteny tso-drafitra manaraka ny modely"
        ],
        "exercices": [
          "Inona no lazain'ity fehezanteny tso-drafitra ity : 'Milalao ny ankizy.' ? → Corrigé : ny ankizy no milalao",
          "Manorata fehezanteny tso-drafitra iray → Corrigé : valiny manokana voamarina (ohatra : 'Mihinana ny alika.')"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "toa sy toy",
        "approche": "Manohy ny fandalinana ny teny sarotra soratana, aorian'ny 'noho ny'/'nony' natao tamin'ny herinandro teo aloha, mianatra ny fanavahana 'toa' (mitovy amin'/miendrika) sy 'toy' (ampiasaina alohan'ny anarana amin'ny fampitahana).",
        "transmission": [
          "Famerenana fohy ny 'noho ny'/'nony' efa nianarana",
          "Fanazavana ny hoe 'toa' : midika hoe mitovy amin'/miendrika (ohatra : toa marary izy)",
          "Fanazavana ny hoe 'toy' : ampiasaina alohan'ny anarana amin'ny fampitahana (ohatra : toy ny vorona)",
          "Fanomezana ohatra fehezanteny amin'ny roa tonta",
          "Fanoratana am-pokonolona fehezanteny mampiasa 'toa' sy 'toy'"
        ],
        "exercices": [
          "Ampidiro amin'ny teny marina ('toa' na 'toy') : 'Manidina ___ ny vorona izy.' → Corrigé : toy",
          "Manorata fehezanteny iray mampiasa 'toa' → Corrigé : valiny manokana voamarina (ohatra : 'Toa ho avy ny orana.')"
        ]
      }
    ]
  }
];

const NOVEMBRE_7EME = [
  {
    "n": 1,
    "dateDebut": "2025/11/03",
    "theme": "Le pourcentage, le sang et l'indépendance de Madagascar",
    "sous": "Le pourcentage d'une grandeur et le losange · Le sang et l'appareil circulatoire · Les grandes villes de Madagascar · L'indépendance et la République I",
    "matieres": [
      {
        "matiere": "CALCUL",
        "topic": "- Calcul du pourcentage d'une grandeur\n- Correspondance entre mesure de surface et agraire\n- Le losange",
        "approche": "Après les mesures agraires vues en octobre, introduire le pourcentage d'une grandeur comme nouvel outil de calcul, faire le lien entre les mesures de surface (are, m²) et les mesures agraires déjà connues, puis découvrir le losange après le rectangle étudié le mois dernier.",
        "transmission": [
          "Rappel des mesures agraires vues en octobre (are, hectare, centiare)",
          "Présentation du pourcentage : signification de X% comme 'X sur 100', calcul de pourcentage d'une quantité",
          "Exercices guidés de calcul de pourcentage sur des quantités concrètes (riz, argent)",
          "Rappel de la correspondance : 1 are = 100 m², 1 hectare = 100 ares = 10 000 m², 1 centiare = 1 m²",
          "Découverte du losange : 4 côtés égaux, diagonales perpendiculaires qui se coupent en leur milieu",
          "Tracé d'un losange à la règle et calcul de son aire (diagonale × diagonale ÷ 2)"
        ],
        "exercices": [
          "Calcule 15% de 400 kg de riz → Corrigé : 60 kg",
          "Un champ mesure 3 hectares 20 ares. Combien d'ares au total ? → Corrigé : 320 ares",
          "Convertis 250 centiares en m² → Corrigé : 250 m²",
          "Calcule l'aire d'un losange dont les diagonales mesurent 8 cm et 6 cm → Corrigé : 24 cm²"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "- Le sang\n- L'appareil circulatoire",
        "approche": "Après avoir étudié les maladies entériques et les parasitoses intestinales en octobre, découvrir un nouveau système du corps humain : le sang et l'appareil circulatoire, qui transportent les nutriments dans tout l'organisme.",
        "transmission": [
          "Observation d'une image du sang et présentation de ses composants simples : plasma, globules rouges, globules blancs",
          "Explication du rôle du sang : transporter l'oxygène et les nutriments dans tout le corps",
          "Présentation de l'appareil circulatoire : le cœur, les artères, les veines",
          "Explication du rôle du cœur comme pompe qui fait circuler le sang",
          "Copie et légende d'un schéma simple de l'appareil circulatoire"
        ],
        "exercices": [
          "Quel est le rôle du sang dans le corps ? → Corrigé : il transporte l'oxygène et les nutriments dans tout le corps",
          "Quel organe fait circuler le sang dans le corps ? → Corrigé : le cœur",
          "Cite un vaisseau sanguin → Corrigé : une artère ou une veine"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "Les grandes villes de Madagascar",
        "approche": "Après avoir étudié l'exode rural en octobre (le déplacement des populations vers les villes), étudier concrètement les grandes villes de Madagascar vers lesquelles cet exode se dirige.",
        "transmission": [
          "Rappel de l'exode rural étudié en octobre : pourquoi les habitants quittent la campagne pour la ville",
          "Observation d'une carte de Madagascar avec les grandes villes localisées",
          "Présentation d'Antananarivo, la capitale, et de son importance",
          "Présentation des autres grandes villes : Toamasina (port de l'est), Antsirabe, Mahajanga, Fianarantsoa, Toliara, Antsiranana",
          "Localisation de ces villes sur la carte muette dans le cahier"
        ],
        "exercices": [
          "Quelle est la capitale de Madagascar ? → Corrigé : Antananarivo",
          "Cite 3 grandes villes de Madagascar autres que la capitale → Corrigé : ex. Toamasina, Antsirabe, Mahajanga (ou Fianarantsoa, Toliara, Antsiranana)",
          "Quelle grande ville est un port important à l'est de l'île ? → Corrigé : Toamasina"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "- Ny nahazoana ny fahaleovantena\n- Ny Repoblika I",
        "approche": "Manohy ny lesona momba ny fanoherana V.V.S, i Jean Ralaimongo ary ny M.D.R.M natao tamin'ny volana Oktobra, mba hampahafantatra ny mpianatra ny fara vokatr'izany : ny nahazoana ny fahaleovantena tamin'ny 1960 sy ny fananganana ny Repoblika I.",
        "transmission": [
          "Famerenana fohy ny fanoherana sy ny fikambanana nianarana tamin'ny Oktobra (V.V.S, M.D.R.M, Jean Ralaimongo)",
          "Fanazavana ny fizotry ny fitakiana fahaleovantena hatramin'ny taona 1960",
          "Fampahafantarana ny daty 26 Jona 1960 : nahazoan'i Madagasikara ny fahaleovantenany",
          "Fanazavana ny fananganana ny Repoblika I sy ny filoha voalohany",
          "Firaketana an-tsoratra ny votoatin-dresaka ao amin'ny kahie"
        ],
        "exercices": [
          "Rahoviana no nahazoan'i Madagasikara ny fahaleovantenany ? → Corrigé : ny 26 Jona 1960",
          "Iza no filoha voalohan'ny Repoblika I ? → Corrigé : Philibert Tsiranana",
          "Tanisao fikambanana iray niady ho an'ny fahaleovantena efa nianaranao → Corrigé : V.V.S na M.D.R.M"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Ny sakafo ara-pahasalamana",
        "approche": "Manohy sy manamafy ny lesona momba ny sakafo ara-pahasalamana natomboka tamin'ny faran'ny Oktobra, mba hampandalina ny fahatakaran'ny mpianatra ny sakafo tokony ho hanina isan'andro.",
        "transmission": [
          "Famerenana fohy ny votoatin-dresaka momba ny sakafo ara-pahasalamana natao tamin'ny Oktobra",
          "Fanazavana ny sokajin-tsakafo telo lehibe : ny mamokatra hery, ny mampitombo, ny miaro ny vatana",
          "Fanomezana ohatra sakafo isaky ny sokajy (vary/mofo, hena/trondro, legioma/voankazo)",
          "Fifampiresahana : inona no sakafo hanina isan'andro any an-trano?",
          "Firaketana an-tsoratra ny sokajin-tsakafo telo ao amin'ny kahie"
        ],
        "exercices": [
          "Tanisao sokajin-tsakafo telo ilaina ho an'ny vatana → Corrigé : sakafo mamokatra hery, sakafo mampitombo, sakafo miaro ny vatana",
          "Omeo ohatra sakafo mamokatra hery iray → Corrigé : ohatra, vary na mofo",
          "Nahoana no ilaina ny fisakafoanana ara-dalàna isan'andro ? → Corrigé : mba hahazoan'ny vatana hery sy tanjaka ilaina isan'andro"
        ]
      },
      {
        "matiere": "HIRA",
        "topic": "Nankaiza ny renin'indriako P.S p.125",
        "approche": "Manohy sy manamafy ny hira 'Nankaiza ny renin'indriako' natomboka tamin'ny Oktobra, mba hahafahan'ny mpianatra rehetra mihira azy tsara amin'ny fomba tsy diso feo.",
        "transmission": [
          "Famerenana manontolo ny hira 'Nankaiza ny renin'indriako' P.S p.125",
          "Fanitsiana ny feo tsy marina hita tamin'ny fihirana teo aloha",
          "Fizarana ny kilasy ho vondrona roa, samy mihira mifandimby",
          "Fanamafisana ny hevitry ny tononkira",
          "Fihirana tokana ho an'ireo mpianatra mahavita tsara"
        ],
        "exercices": [
          "Mihira manontolo ny 'Nankaiza ny renin'indriako' → Corrigé : fihirana marina, feno andalana rehetra araka ny P.S p.125",
          "Soraty ny andalana voalohan'ny hira → Corrigé : araka ny tononkira nampianarina"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Ny fehezankevitra feno sy takon'ila",
        "approche": "Manohy ny lesona momba ny fehezanteny misy singa tsotra natao tamin'ny Oktobra, ka mianatra ny fanavahana ny fehezankevitra feno (misy mpisolo-tena sy matoanteny) amin'ny fehezankevitra takon'ila (misy singa tsy voatanisa fa azo takarina).",
        "transmission": [
          "Famerenana fohy ny fehezanteny tsotra nianarana tamin'ny Oktobra",
          "Fanazavana ny hoe fehezankevitra feno : misy mpisolo-tena sy matoanteny miharihary",
          "Fanazavana ny hoe fehezankevitra takon'ila : tsy voatanisa ny mpisolo-tena na ny matoanteny fa azo takarina amin'ny teny manodidina",
          "Fanomezana ohatra fehezanteny misy fehezankevitra feno sy takon'ila",
          "Fanavahana am-pokonolona fehezankevitra feno sy takon'ila ao amin'ny fehezanteny nomena"
        ],
        "exercices": [
          "Tondroy hoe feno sa takon'ila ity fehezankevitra ity : 'nony tonga ny mpampianatra' → Corrigé : feno (misy mpisolo-tena 'ny mpampianatra' sy matoanteny 'tonga')",
          "Manorata fehezanteny iray misy fehezankevitra takon'ila → Corrigé : valiny manokana voamarina (ohatra: 'Nihinana ny ankizy, ary [nihinana] ny lehibe.')"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Ny teny mpampiankina \"amin\"",
        "approche": "Manohy ny lesona momba ny teny 'toa' sy 'toy' natao tamin'ny Oktobra, ka mianatra ny fampiasana ny teny mpampiankina 'amin' amin'ny fehezanteny malagasy.",
        "transmission": [
          "Famerenana fohy ny fanavahana ny teny 'toa' sy 'toy' nianarana tamin'ny Oktobra",
          "Fanazavana ny teny mpampiankina 'amin' : mampiankina teny iray amin'ny teny hafa ao amin'ny fehezanteny",
          "Fanomezana ohatra: 'Misy boky eo amin'ny latabatra.'",
          "Fitadiavana am-pokonolona teny mpampiasa 'amin' ao amin'ny fehezanteny nomena",
          "Fanoratana am-tsoratra fehezanteny mampiasa 'amin' marina"
        ],
        "exercices": [
          "Ampio ny teny 'amin' amin'ity fehezanteny ity : 'Misy boky eo ___ ny latabatra.' → Corrigé : amin'ny",
          "Manorata fehezanteny iray mampiasa 'amin' → Corrigé : valiny manokana voamarina (ohatra: 'Mandeha any amin'ny sekoly aho.')"
        ]
      }
    ]
  },
  {
    "n": 2,
    "dateDebut": "2025/11/10",
    "theme": "Le rendement, les appareils urinaire et reproducteur, la Transition 1972-1975",
    "sous": "Le rendement, la facture et le trapèze · L'appareil urinaire et l'appareil reproducteur · Les problèmes urbains · Le régime de transition 1972-1975",
    "matieres": [
      {
        "matiere": "CALCUL",
        "topic": "- Le rendement\n- La facture\n- Le trapèze",
        "approche": "Après le pourcentage et le losange de la semaine 1, appliquer le pourcentage à des situations concrètes de production (le rendement) et d'achat (la facture), puis découvrir une nouvelle figure géométrique, le trapèze.",
        "transmission": [
          "Rappel du calcul de pourcentage vu en semaine 1",
          "Présentation du rendement : quantité produite par rapport à une surface ou une quantité de départ",
          "Exercices de calcul de rendement sur des exemples agricoles concrets",
          "Présentation de la facture : prix unitaire, quantité, total à payer",
          "Découverte du trapèze : 2 côtés parallèles (grande base, petite base) et 2 côtés non parallèles",
          "Tracé d'un trapèze à la règle et calcul de son aire"
        ],
        "exercices": [
          "Un champ de 5 ares produit 250 kg de riz. Quel est le rendement par are ? → Corrigé : 50 kg par are",
          "Calcule le total d'une facture : 4 kg de sucre à 2 000 Ar le kg → Corrigé : 8 000 Ar",
          "Calcule l'aire d'un trapèze de grande base 10 cm, petite base 6 cm et hauteur 4 cm → Corrigé : 32 cm²"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "- L'appareil urinaire\n- L'appareil reproducteur et la reproduction humaine",
        "approche": "Après avoir étudié le sang et l'appareil circulatoire en semaine 1, poursuivre la découverte des systèmes du corps humain avec l'appareil urinaire (élimination des déchets) et l'appareil reproducteur (reproduction humaine).",
        "transmission": [
          "Rappel de l'appareil circulatoire vu en semaine 1",
          "Présentation de l'appareil urinaire : les reins, la vessie, leur rôle dans l'élimination des déchets du sang",
          "Explication simple de la formation et de l'évacuation de l'urine",
          "Présentation de l'appareil reproducteur masculin et féminin de façon simple et adaptée à l'âge des élèves",
          "Explication du rôle de la reproduction humaine dans la naissance d'un enfant",
          "Copie et légende de schémas simples des deux appareils"
        ],
        "exercices": [
          "Quel organe filtre le sang pour produire l'urine ? → Corrigé : les reins",
          "Où est stockée l'urine avant d'être évacuée ? → Corrigé : dans la vessie",
          "Quel est le rôle de l'appareil reproducteur ? → Corrigé : il permet la reproduction humaine, la naissance d'un enfant"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "Les problèmes urbains",
        "approche": "Après avoir découvert les grandes villes de Madagascar en semaine 1, étudier les problèmes que rencontrent ces villes du fait de leur croissance rapide, liée notamment à l'exode rural vu en octobre.",
        "transmission": [
          "Rappel des grandes villes de Madagascar vues en semaine 1",
          "Présentation des problèmes liés à la croissance urbaine : embouteillages, manque de logements",
          "Présentation des problèmes d'hygiène : déchets, insalubrité dans certains quartiers",
          "Présentation des problèmes d'emploi : chômage, travail informel",
          "Discussion collective : quelles solutions pour améliorer la vie en ville ?"
        ],
        "exercices": [
          "Cite un problème urbain courant dans les grandes villes de Madagascar → Corrigé : ex. les embouteillages, le manque de logements, l'insalubrité",
          "Pourquoi les villes malgaches connaissent-elles ces problèmes ? → Corrigé : à cause de la croissance rapide de la population liée à l'exode rural",
          "Propose une solution à un problème urbain → Corrigé : réponse cohérente, ex. ramassage régulier des déchets, construction de logements"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Ny fitondrana tetezamita 1972 - 1975",
        "approche": "Manohy ny lesona momba ny nahazoana ny fahaleovantena sy ny Repoblika I natao tamin'ny herinandro voalohany, mba hizotra amin'ny tantaran'i Madagasikara taorian'io, dia ny fitondrana tetezamita 1972-1975.",
        "transmission": [
          "Famerenana fohy ny Repoblika I sy ny filohan'i Tsiranana nianarana tamin'ny herinandro voalohany",
          "Fanazavana ny antony niafaran'ny Repoblika I tamin'ny 1972",
          "Famelabelarana ny fitondrana tetezamita nanomboka tamin'ny 1972 ka hatramin'ny 1975",
          "Fampahafantarana ny olona nitantana io fitondrana tetezamita io",
          "Firaketana an-tsoratra ny votoatin-dresaka ao amin'ny kahie"
        ],
        "exercices": [
          "Taona firy no niafaran'ny Repoblika I ? → Corrigé : 1972",
          "Hatramin'ny taona firy ka hatramin'ny taona firy no naharitra ny fitondrana tetezamita voalohany ? → Corrigé : 1972 ka hatramin'ny 1975",
          "Inona no atao hoe fitondrana tetezamita ? → Corrigé : fitondrana vonjimaika mitantana ny firenena mandra-pisian'ny fitondrana vaovao voafidy"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Ny fahadiovan'ny vatana",
        "approche": "Manohy ny lesona momba ny sakafo ara-pahasalamana natao herinandro voalohany, ka mifantoka amin'ny lohahevitra vaovao momba ny fahadiovan'ny vatana, singa iray hafa manamafy ny fahasalamana.",
        "transmission": [
          "Famerenana fohy ny lesona momba ny sakafo ara-pahasalamana",
          "Fanazavana ny hoe fahadiovan'ny vatana : fandrosana, fikarakarana ny nify, ny voninkazon-tsofina, ny hoditra",
          "Fanomezana ohatra fomba fanadiovana ny vatana isan'andro",
          "Fifampiresahana : inona no fahasalamana azo raha madio ny vatana?",
          "Firaketana an-tsoratra ny fomba fanadiovana ny vatana ao amin'ny kahie"
        ],
        "exercices": [
          "Tanisao fomba iray fanadiovana ny vatana isan'andro → Corrigé : ohatra, mandro, manasa tanana, mikarakara nify",
          "Nahoana no ilaina ny fahadiovan'ny vatana ? → Corrigé : mba hisorohana aretina sy hitandroana ny fahasalamana",
          "Impiry no tokony handroana isan'andro ? → Corrigé : ohatra, indray na indroa isan'andro (valiny mety samihafa araka ny toe-javatra)"
        ]
      },
      {
        "matiere": "HIRA",
        "topic": "Iza iry ambony iry\nP.S p.125",
        "approche": "Aorian'ny fanamafisana ny hira 'Nankaiza ny renin'indriako' tamin'ny herinandro voalohany, mianatra hira vaovao 'Iza iry ambony iry' P.S p.125.",
        "transmission": [
          "Fampihirana ny mpampianatra ny hira vaovao 'Iza iry ambony iry' indray mandeha manontolo",
          "Famerenana andalana isaky ny fehezana kely",
          "Fanazavana ny hevitry ny tononkira",
          "Fihirana miaraka amin'ny kilasy manontolo",
          "Fanoratana ny tononkira ao amin'ny kahie hira"
        ],
        "exercices": [
          "Mihira ny fehezana voalohan'ny 'Iza iry ambony iry' → Corrigé : fihirana marina araka ny tononkira sy ny feo, P.S p.125",
          "Soraty ny lohatenin'ny hira vaovao nianaranao → Corrigé : Iza iry ambony iry"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Ny sokajinteny fampiasa ho lazaina",
        "approche": "Manohy ny lesona momba ny fehezankevitra feno sy takon'ila natao tamin'ny herinandro voalohany, ka mianatra ny sokajinteny azo ampiasaina ho lazaina (predicat) ao amin'ny fehezanteny.",
        "transmission": [
          "Famerenana fohy ny fehezankevitra feno sy takon'ila nianarana tamin'ny herinandro voalohany",
          "Fanazavana ny hoe lazaina (predicat) : ilay singa milaza ny atao na ny toetry ny mpisolo-tena",
          "Fampahafantarana ny sokajinteny azo lazaina : matoanteny, mpamaritra, anarana",
          "Fanomezana ohatra fehezanteny amin'ny sokajinteny tsirairay ho lazaina",
          "Fanavahana am-pokonolona ny lazaina ao amin'ny fehezanteny nomena"
        ],
        "exercices": [
          "Tondroy ny lazaina ao amin'ity fehezanteny ity: 'Mazoto ny mpianatra.' → Corrigé : mazoto (mpamaritra ho lazaina)",
          "Manorata fehezanteny iray misy matoanteny ho lazaina → Corrigé : valiny manokana voamarina (ohatra: 'Mihinana ny ankizy.')"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "maha mitambatra sy maha-",
        "approche": "Manohy ny lesona momba ny teny mpampiankina 'amin' natao tamin'ny herinandro voalohany, ka mianatra ny fanavahana ny fanoratana 'maha' mitambatra amin'ny reniteny miorina amin'ny renisoratra (ohatra: mahasoa), sy 'maha-' misy tsipika rehefa miorina amin'ny zanatsoratra na anarana manokana (ohatra: maha-olona, maha-Malagasy).",
        "transmission": [
          "Famerenana fohy ny teny mpampiankina 'amin'",
          "Fanazavana ny fampiasana 'maha' mitambatra mivantana amin'ny reniteny manomboka amin'ny renisoratra (ohatra: soa → mahasoa)",
          "Fanazavana ny fampiasana 'maha-' misy tsipika rehefa miorina amin'ny reniteny manomboka amin'ny zanatsoratra na anarana manokana (ohatra: olona → maha-olona, Malagasy → maha-Malagasy)",
          "Fanomezana ohatra fehezanteny misy 'maha' sy 'maha-' samihafa",
          "Fanavahana am-pokonolona ny tokony hitambatra sy ny tokony hisy tsipika"
        ],
        "exercices": [
          "Ampio marina : 'maha' + soa → Corrigé : mahasoa",
          "Ampio marina : 'maha' + olona → Corrigé : maha-olona",
          "Manorata fehezanteny iray mampiasa 'maha-Malagasy' → Corrigé : valiny manokana voamarina (ohatra: 'Ny fitiavan-tanindrazana no maha-Malagasy ahy.')"
        ]
      }
    ]
  },
  {
    "n": 3,
    "dateDebut": "2025/11/17",
    "theme": "Les fractions, le cercle, les MST/SIDA et la République II",
    "sous": "Les partages, les fractions et le cercle · Les MST/SIDA · L'agriculture · La République II",
    "matieres": [
      {
        "matiere": "CALCUL",
        "topic": "- Les partages égaux et inégaux\n- Les fractions ordinaires et les fractions décimales\n- Le cercle",
        "approche": "Après le rendement, la facture et le trapèze de la semaine 2, introduire la notion de partage (égal et inégal) comme point de départ des fractions, puis découvrir le cercle en géométrie.",
        "transmission": [
          "Présentation du partage égal (chaque part est identique) et du partage inégal (parts différentes) à travers des exemples concrets",
          "Introduction de la fraction ordinaire comme résultat d'un partage égal (numérateur, dénominateur)",
          "Présentation de la fraction décimale (dixièmes, centièmes) et son lien avec la fraction ordinaire",
          "Exercices de lecture et d'écriture de fractions simples",
          "Découverte du cercle : centre, rayon, diamètre",
          "Tracé d'un cercle au compas"
        ],
        "exercices": [
          "Partage 12 mangues également entre 4 enfants. Combien chacun reçoit-il ? → Corrigé : 3 mangues",
          "Écris la fraction correspondant à 3 parts sur 8 → Corrigé : 3/8",
          "Écris 7/10 sous forme de fraction décimale → Corrigé : 0,7",
          "Trace un cercle de rayon 3 cm et indique son centre → Corrigé : tracé correct, rayon = 3 cm, diamètre = 6 cm"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "Les MST / SIDA",
        "approche": "Après avoir étudié l'appareil reproducteur en semaine 2, sensibiliser les élèves de façon adaptée à leur âge aux maladies sexuellement transmissibles et au SIDA, et aux moyens simples de prévention.",
        "transmission": [
          "Rappel de l'appareil reproducteur vu en semaine 2",
          "Présentation simple des MST : maladies qui se transmettent lors de rapports sexuels",
          "Présentation du SIDA comme maladie grave transmise notamment par le sang et les rapports sexuels non protégés",
          "Explication des moyens de prévention adaptés à l'âge des élèves : hygiène, prudence, ne pas partager d'objets tranchants",
          "Discussion collective encadrée sur l'importance de se protéger et de consulter un médecin"
        ],
        "exercices": [
          "Que signifie MST ? → Corrigé : Maladie Sexuellement Transmissible",
          "Cite une maladie grave transmise notamment par le sang → Corrigé : le SIDA",
          "Cite un moyen de se protéger des maladies transmissibles → Corrigé : ex. l'hygiène, la prudence, ne pas partager d'objets tranchants"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "L'agriculture",
        "approche": "Après avoir étudié les problèmes urbains en semaine 2, revenir vers la campagne pour étudier l'agriculture, activité économique principale de la majorité des Malgaches.",
        "transmission": [
          "Rappel des problèmes urbains liés à l'exode rural",
          "Présentation des principales cultures de Madagascar : le riz (culture vivrière principale), le café, la vanille, le girofle (cultures de rente)",
          "Présentation des zones de culture selon les régions et le climat",
          "Explication de l'importance de l'agriculture dans l'économie du pays",
          "Discussion : pourquoi l'agriculture reste-t-elle l'activité principale de nombreux Malgaches ?"
        ],
        "exercices": [
          "Quelle est la principale culture vivrière de Madagascar ? → Corrigé : le riz",
          "Cite 2 cultures de rente de Madagascar → Corrigé : ex. le café, la vanille, le girofle (2 réponses parmi celles-ci)",
          "Pourquoi l'agriculture est-elle importante pour l'économie de Madagascar ? → Corrigé : elle nourrit la population et fournit des produits d'exportation"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Ny Repoblika II",
        "approche": "Manohy ny lesona momba ny fitondrana tetezamita 1972-1975 natao tamin'ny herinandro faha-2, mba hahafantarana ny fananganana ny Repoblika II taorian'io.",
        "transmission": [
          "Famerenana fohy ny fitondrana tetezamita 1972-1975",
          "Fanazavana ny fananganana ny Repoblika II",
          "Fampahafantarana ny filoha nitarika ny Repoblika II",
          "Famelabelarana fohy ny politika lehibe narahin'ny Repoblika II",
          "Firaketana an-tsoratra ny votoatin-dresaka ao amin'ny kahie"
        ],
        "exercices": [
          "Taorian'ny fitondrana tetezamita 1972-1975, inona no fanjakana natsangana ? → Corrigé : ny Repoblika II",
          "Iza no filoha nitarika ny Repoblika II ? → Corrigé : Didier Ratsiraka",
          "Tanisao fanjakana roa efa nianaranao nifanesy tao Madagasikara → Corrigé : Repoblika I sy Repoblika II"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Ny fahadiovan'ny vatana",
        "approche": "Manamafy sy manalalina ny lesona momba ny fahadiovan'ny vatana natomboka tamin'ny herinandro faha-2, amin'ny fizarana ny anjara asan'ny fianakaviana sy ny sekoly amin'ny fampianarana izany.",
        "transmission": [
          "Famerenana fohy ireo fomba fanadiovana ny vatana efa nianarana",
          "Fanadihadiana lalindalina kokoa : ny fikarakarana ny fitafiana madio, ny toerana ipetrahana",
          "Fifampiresahana momba ny anjara asan'ny fianakaviana sy ny sekoly amin'ny fampianarana ny fahadiovana",
          "Fanaovana sehatra kely mampiseho fomba fanadiovana ny vatana marina",
          "Firaketana an-tsoratra famintinana ny lesona"
        ],
        "exercices": [
          "Ankoatry ny vatana, inona koa no tokony ho madio isan'andro ? → Corrigé : ny fitafiana sy ny toerana ipetrahana",
          "Iza avy no manampy ny ankizy hianatra ny fahadiovana ? → Corrigé : ny fianakaviana sy ny mpampianatra ao an-tsekoly",
          "Asehoy amin'ny sehatra kely ny fomba fanadiovana tanana marina → Corrigé : fanaovana araka ny dingana nampianarina"
        ]
      },
      {
        "matiere": "HIRA",
        "topic": "Iza iry ambony iry\nP.S p.125",
        "approche": "Manamafy sy manatsara ny fihirana ny hira 'Iza iry ambony iry' natomboka tamin'ny herinandro faha-2, mba hahafahan'ny mpianatra rehetra mihira azy tsy misy diso feo.",
        "transmission": [
          "Famerenana manontolo ny hira 'Iza iry ambony iry'",
          "Fizarana ny kilasy ho vondrona roa, samy mihira mifandimby",
          "Fanitsiana ireo feo tsy marina hita",
          "Fihirana tokana ho an'ireo mpianatra mahavita tsara",
          "Fanamafisana ny hevitry ny tononkira amin'ny fifampiresahana"
        ],
        "exercices": [
          "Mihira manontolo ny 'Iza iry ambony iry' → Corrigé : fihirana marina, feno andalana rehetra, P.S p.125",
          "Inona no hevitry ny hira, araka ny hitanao ? → Corrigé : famintinana tsotra araka ny tononkira"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Ny fameno sy ny karazam-pameno",
        "approche": "Manohy ny lesona momba ny sokajinteny fampiasa ho lazaina natao tamin'ny herinandro faha-2, ka mianatra ny hoe fameno (complément) sy ny karazany ao amin'ny fehezanteny.",
        "transmission": [
          "Famerenana fohy ny lazaina nianarana tamin'ny herinandro faha-2",
          "Fanazavana ny hoe fameno : singa manampy hevitra amin'ny matoanteny na ny anarana",
          "Fampahafantarana ny karazam-pameno tsotra : fameno mivantana sy fameno tsy mivantana",
          "Fanomezana ohatra fehezanteny misy fameno samihafa",
          "Fanavahana am-pokonolona ny fameno ao amin'ny fehezanteny nomena"
        ],
        "exercices": [
          "Tondroy ny fameno ao amin'ity fehezanteny ity: 'Mamaky boky ny mpianatra.' → Corrigé : boky (fameno mivantana)",
          "Manorata fehezanteny iray misy fameno → Corrigé : valiny manokana voamarina (ohatra: 'Manoratra taratasy ny reniko.')"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Fampitohizana teny roa ampiasana ' sy -",
        "approche": "Manohy ny lesona momba ny 'maha' mitambatra sy 'maha-' natao tamin'ny herinandro faha-2, ka mianatra ny fampitohizana teny roa amin'ny fampiasana ny marika (') sy ny tsipika (-).",
        "transmission": [
          "Famerenana fohy ny lesona momba ny 'maha' sy 'maha-'",
          "Fanazavana ny fampiasana ny marika (') mampitohy teny roa (ohatra: amin'ny)",
          "Fanazavana ny fampiasana ny tsipika (-) mampitohy teny roa (ohatra: ray-aman-dreny)",
          "Fanomezana ohatra fehezanteny misy fampitohizana teny roa amin'ny fomba roa ireo",
          "Fanavahana am-pokonolona ny tokony hampiasana marika sy tsipika"
        ],
        "exercices": [
          "Ampio ny marika na tsipika marina : 'ray aman dreny' → Corrigé : ray-aman-dreny",
          "Manorata fehezanteny iray mampiasa teny mitohy amin'ny marika (') → Corrigé : valiny manokana voamarina (ohatra: 'Mipetraka amin'ny sekoly aho.')"
        ]
      }
    ]
  },
  {
    "n": 4,
    "dateDebut": "2025/11/24",
    "theme": "Les fractions équivalentes, l'échelle, l'appareil respiratoire et la Transition de 1991",
    "sous": "Simplification et réduction des fractions, l'échelle et le volume · L'appareil respiratoire et la tuberculose · L'élevage et la pêche · Le régime de transition de 1991",
    "matieres": [
      {
        "matiere": "CALCUL",
        "topic": "- Simplification des fractions\n- Réduction au même dénominateur\n- L'échelle\n- Les mesures de volume",
        "approche": "Après avoir découvert les fractions ordinaires et décimales et le cercle en semaine 3, apprendre à simplifier une fraction et à réduire des fractions au même dénominateur, puis découvrir la notion d'échelle et les mesures de volume.",
        "transmission": [
          "Rappel des fractions ordinaires et décimales vues en semaine 3",
          "Présentation de la simplification d'une fraction (diviser numérateur et dénominateur par un même nombre)",
          "Présentation de la réduction de deux fractions au même dénominateur",
          "Exercices guidés de simplification et de réduction",
          "Présentation de l'échelle d'une carte ou d'un plan (distance réelle et distance représentée)",
          "Présentation des mesures de volume : le litre et ses multiples/sous-multiples"
        ],
        "exercices": [
          "Simplifie la fraction 8/12 → Corrigé : 2/3",
          "Réduis au même dénominateur : 1/2 et 1/3 → Corrigé : 3/6 et 2/6",
          "Sur une carte à l'échelle 1/100 000, une distance de 3 cm représente combien en réalité ? → Corrigé : 3 km",
          "Convertis 2,5 L en cL → Corrigé : 250 cL"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "- L'appareil respiratoire\n- La tuberculose",
        "approche": "Après avoir étudié les MST/SIDA en semaine 3, découvrir un nouveau système du corps humain, l'appareil respiratoire, puis une maladie qui l'affecte, la tuberculose, et ses moyens de prévention.",
        "transmission": [
          "Présentation de l'appareil respiratoire : le nez, la trachée, les poumons",
          "Explication du trajet de l'air lors de l'inspiration et de l'expiration",
          "Présentation de la tuberculose comme maladie qui attaque les poumons, ses symptômes simples (toux persistante)",
          "Explication des moyens de prévention : vaccination, air propre, consultation médicale rapide",
          "Copie et légende d'un schéma simple de l'appareil respiratoire"
        ],
        "exercices": [
          "Cite 2 organes de l'appareil respiratoire → Corrigé : les poumons et la trachée (ou le nez)",
          "Quel organe est attaqué par la tuberculose ? → Corrigé : les poumons",
          "Cite un signe qui peut faire penser à la tuberculose → Corrigé : une toux persistante"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "- L'élevage\n- La pêche",
        "approche": "Après avoir étudié l'agriculture en semaine 3, poursuivre l'étude des activités économiques rurales de Madagascar avec l'élevage et la pêche.",
        "transmission": [
          "Rappel de l'agriculture vue en semaine 3",
          "Présentation de l'élevage à Madagascar : le zébu, les volailles, leur importance",
          "Présentation de la pêche : pêche traditionnelle et pêche industrielle, les zones de pêche (côte ouest, côte est)",
          "Explication de l'importance économique de l'élevage et de la pêche (alimentation, exportation)",
          "Discussion collective : quelles activités économiques rurales connaissez-vous dans votre région ?"
        ],
        "exercices": [
          "Quel animal est le plus élevé traditionnellement à Madagascar ? → Corrigé : le zébu",
          "Cite les deux types de pêche pratiqués à Madagascar → Corrigé : la pêche traditionnelle et la pêche industrielle",
          "Pourquoi l'élevage et la pêche sont-ils importants pour Madagascar ? → Corrigé : ils fournissent de la nourriture et des produits d'exportation"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Ny fitondrana tetezamita tamin'ny taona 1991",
        "approche": "Manohy ny lesona momba ny Repoblika II natao tamin'ny herinandro faha-3, mba hahafantarana ny fitondrana tetezamita faharoa niseho tamin'ny taona 1991.",
        "transmission": [
          "Famerenana fohy ny Repoblika II nianarana tamin'ny herinandro faha-3",
          "Fanazavana ny antony niafaran'ny Repoblika II",
          "Famelabelarana ny fitondrana tetezamita niseho tamin'ny taona 1991",
          "Fampitahana io fitondrana tetezamita io amin'ilay tamin'ny 1972-1975 efa nianarana",
          "Firaketana an-tsoratra famintinana ny votoatin-dresaka"
        ],
        "exercices": [
          "Taona firy no niseho ny fitondrana tetezamita faharoa ? → Corrigé : 1991",
          "Firy fitondrana tetezamita no efa nianaranao amin'ity taona ity ? → Corrigé : roa (1972-1975 sy 1991)",
          "Inona no mahasamihafa ny fitondrana tetezamita amin'ny Repoblika ? → Corrigé : ny fitondrana tetezamita dia vonjimaika fa ny Repoblika dia fitondrana voafidy tsy vonjimaika"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Ny fisorohana ny aretina mifindra",
        "approche": "Aorian'ny fanamafisana ny fahadiovan'ny vatana natao tamin'ny herinandro faha-2 sy faha-3, mianatra lohahevitra vaovao : ny fisorohana ny aretina mifindra, mifandray akaiky amin'ny fahadiovana efa nianarana.",
        "transmission": [
          "Famerenana fohy ny fahadiovan'ny vatana efa nianarana",
          "Fanazavana ny hoe aretina mifindra : aretina mety hifindra amin'olona iray ho amin'olon-kafa",
          "Fanomezana ohatra aretina mifindra efa fantatry ny mpianatra",
          "Fampahafantarana ny fomba fisorohana : fahadiovana, fisakanana, fitiliana haingana",
          "Firaketana an-tsoratra ny fomba fisorohana ao amin'ny kahie"
        ],
        "exercices": [
          "Inona no atao hoe aretina mifindra ? → Corrigé : aretina mety hifindra avy amin'olona iray ho amin'olon-kafa",
          "Tanisao fomba iray fisorohana ny aretina mifindra → Corrigé : ohatra, ny fahadiovana, ny fisakanana, ny fitiliana haingana",
          "Nahoana no ilaina ny mankany amin'ny dokotera raha misy aretina ? → Corrigé : mba hahazoana fitsaboana haingana sy hisorohana ny fifindran'ny aretina"
        ]
      },
      {
        "matiere": "HIRA",
        "topic": "Avy mangataka izahay",
        "approche": "Aorian'ny fanamafisana ny hira 'Iza iry ambony iry' natao tamin'ny herinandro faha-2 sy faha-3, mianatra hira vaovao 'Avy mangataka izahay'.",
        "transmission": [
          "Fampihirana ny mpampianatra ny hira vaovao 'Avy mangataka izahay' indray mandeha manontolo",
          "Fanazavana ny hevitry ny tononkira",
          "Famerenana andalana isaky ny fehezana kely",
          "Fihirana miaraka amin'ny kilasy manontolo",
          "Fanoratana ny tononkira ao amin'ny kahie hira"
        ],
        "exercices": [
          "Mihira ny fehezana voalohan'ny 'Avy mangataka izahay' → Corrigé : fihirana marina araka ny tononkira sy ny feo",
          "Soraty ny lohatenin'ny hira vaovao nianaranao tamin'ity herinandro ity → Corrigé : Avy mangataka izahay"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Ny tsirinteny",
        "approche": "Manohy ny lesona momba ny fameno sy ny karazam-pameno natao tamin'ny herinandro faha-3, ka mianatra ny hoe tsirinteny, singa madinika mandrafitra ny teny.",
        "transmission": [
          "Famerenana fohy ny fameno nianarana tamin'ny herinandro faha-3",
          "Fanazavana ny hoe tsirinteny : singa madinika indrindra manana hevitra ao amin'ny teny",
          "Fanomezana ohatra: ny teny 'mianatra' misy tsirinteny 'mi-' sy 'anatra'",
          "Fitadiavana am-pokonolona tsirinteny ao amin'ny teny hafa",
          "Fanavahana am-tsoratra ny tsirinteny ao amin'ny lisitra teny nomena"
        ],
        "exercices": [
          "Tondroy ny tsirinteny roa ao amin'ny teny 'mamaky' → Corrigé : 'ma-' sy 'vaky'",
          "Manorata teny iray misy tsirinteny 'faha-' → Corrigé : ohatra, fahavelomana, fahasoavana (valiny mety samihafa)"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Fampitohizana teny roa miafara amin'ny -ka / -tra / -na",
        "approche": "Manohy ny lesona momba ny fampitohizana teny roa amin'ny marika (') sy tsipika (-) natao tamin'ny herinandro faha-3, ka mianatra manokana ny fampitohizana teny miafara amin'ny -ka, -tra, na -na.",
        "transmission": [
          "Famerenana fohy ny fampitohizana teny roa amin'ny marika (') sy tsipika (-) nianarana tamin'ny herinandro faha-3",
          "Fanazavana ny fitsipika manokana : raha miafara amin'ny -ka, -tra, na -na ny teny voalohany, dia latsaka ny zanatsoratra farany ary miova ny renisoratra rehefa mitohy amin'ny teny manaraka",
          "Fanomezana ohatra: 'fitiavana' + 'tanindrazana' → 'fitiavan-tanindrazana'",
          "Fanomezana ohatra hafa: 'lalana' + 'be' → 'lalam-be'",
          "Fanoratana am-pokonolona teny mitohy manaraka io fitsipika io",
          "Fanitsiana ny lesoka hita"
        ],
        "exercices": [
          "Ampio marina araka ny fitsipika : 'fitiavana' + 'tanindrazana' → Corrigé : fitiavan-tanindrazana",
          "Ampio marina araka ny fitsipika : 'lalana' + 'be' → Corrigé : lalam-be",
          "Manorata teny mitohy iray miafara amin'ny -ka manaraka ny fitsipika nianarana → Corrigé : valiny manokana voamarina (ohatra: 'fanjakan-tany' avy amin'ny 'fanjakana' + 'tany')"
        ]
      }
    ]
  }
];

const DECEMBRE_7EME = [
  {
    "n": 1,
    "dateDebut": "2025/12/01",
    "theme": "Les fractions, la peste et le choléra, l'exploitation de la forêt",
    "sous": "Comparaison des fractions et divisibilité · Le cube (aire) · La peste et le choléra · L'exploitation de la forêt",
    "matieres": [
      {
        "matiere": "CALCUL",
        "topic": "- Comparaison des fractions\n- Caractère de divisibilité\n- Correspondance entre masse, volume et capacité\n- Le cube : calcul d'aire",
        "approche": "Après la simplification des fractions et la réduction au même dénominateur vues fin novembre, apprendre à comparer des fractions, reconnaître les caractères de divisibilité, relier masse/volume/capacité, et calculer l'aire du cube en géométrie.",
        "transmission": [
          "Rappel : réduire deux fractions au même dénominateur (acquis de la semaine précédente)",
          "Comparaison de fractions de même dénominateur puis de dénominateurs différents (après réduction)",
          "Présentation des caractères de divisibilité par 2, 3, 5, 9, 10",
          "Exercices de reconnaissance rapide de nombres divisibles par 2, 3, 5, 9, 10",
          "Présentation de la correspondance : 1 dm³ = 1 litre = 1 kg (eau), exercices de conversion",
          "Rappel du cube (faces carrées) et calcul de son aire totale : 6 × côté²"
        ],
        "exercices": [
          "Compare : 3/5 et 2/5 → Corrigé : 3/5 > 2/5",
          "482 est-il divisible par 2 ? par 3 ? → Corrigé : divisible par 2 (chiffre des unités pair), non divisible par 3 (4+8+2=14, non multiple de 3)",
          "Un récipient contient 5 litres d'eau. Quelle est sa masse ? → Corrigé : 5 kg",
          "Calcule l'aire totale d'un cube de 4 cm de côté → Corrigé : 6 × 4 × 4 = 96 cm²"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "- La peste\n- Le choléra",
        "approche": "Après la tuberculose étudiée fin novembre, poursuivre l'étude des maladies contagieuses avec la peste et le choléra : leurs causes, symptômes et moyens de prévention.",
        "transmission": [
          "Rappel de la tuberculose et des gestes de prévention des maladies contagieuses vus la semaine précédente",
          "Présentation de la peste : maladie transmise par les puces des rats, symptômes principaux",
          "Présentation du choléra : maladie liée à l'eau non potable, symptômes principaux (diarrhée sévère)",
          "Discussion collective : comment éviter la peste et le choléra (hygiène, eau potable, propreté)",
          "Copie d'un tableau récapitulatif des deux maladies dans le cahier"
        ],
        "exercices": [
          "Comment se transmet la peste ? → Corrigé : par les puces des rats",
          "Quelle est la cause principale du choléra ? → Corrigé : l'eau ou les aliments contaminés (eau non potable)",
          "Cite un geste pour se protéger du choléra → Corrigé : boire de l'eau potable, se laver les mains"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "L'exploitation de la forêt",
        "approche": "Après l'élevage et la pêche vus fin novembre, étudier l'exploitation de la forêt à Madagascar : bois d'œuvre, charbon de bois, et les conséquences de la déforestation.",
        "transmission": [
          "Rappel des activités économiques déjà étudiées (élevage, pêche)",
          "Présentation des ressources forestières : bois d'œuvre, bois de chauffe, charbon de bois",
          "Explication des usages : construction, artisanat, énergie domestique",
          "Discussion sur la déforestation et ses conséquences (érosion, disparition d'espèces)",
          "Copie d'une carte simple des zones forestières de Madagascar"
        ],
        "exercices": [
          "Cite deux produits tirés de la forêt → Corrigé : le bois d'œuvre et le charbon de bois",
          "Quelle est une conséquence de la déforestation ? → Corrigé : l'érosion des sols (ou la disparition d'espèces animales/végétales)",
          "Pourquoi la forêt est-elle importante pour Madagascar ? → Corrigé : elle fournit du bois, protège les sols et abrite une faune et une flore uniques"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Ny Repoblika III",
        "approche": "Manohy ny fianarana ny tantaran'i Madagasikara taorian'ny fitantarana ny tetezamita 1991, mianatra ny amin'ny fananganana ny Repoblika III.",
        "transmission": [
          "Famerenana fohy ny lesona teo aloha momba ny fitondrana tetezamita 1991",
          "Fanazavana ny fananganana ny Repoblika III sy ny lalàmpanorenana vaovao",
          "Famelabelarana ny toe-piainana ara-politika nandritra ny Repoblika III",
          "Fanadihadiana ny fiovana lehibe teo amin'ny fitantanam-panjakana",
          "Firaketana an-tsoratra ny votoatin-dresaka"
        ],
        "exercices": [
          "Inona no niseho taorian'ny tetezamita 1991? → Corrigé : ny fananganana ny Repoblika III",
          "Inona no lalàna vaovao noraisina tamin'ny Repoblika III? → Corrigé : lalàmpanorenana vaovao",
          "Tanisao zava-dehibe iray niseho tamin'ny Repoblika III → Corrigé : valiny mety samihafa, araka ny lesona"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Ny maha firenena ny firenena",
        "approche": "Manohy ny lesona momba ny fifampiankinana eo amin'ny ankohonana sy ny firenena, mampianatra ireo singa maha firenena ny firenena iray (tany, mponina, fitondrana, lalàna iombonana).",
        "transmission": [
          "Famerenana fohy ny lesona teo aloha momba ny fifampiankinana ankohonana-firenena",
          "Fanazavana ireo singa mamorona firenena iray: tany, mponina, fitondrana, lalàna iombonana",
          "Fanomezana ohatra momba an'i Madagasikara ho firenena",
          "Fifampiresahana: nahoana no ilaina ny firaisan-kina eo amin'ny mponina rehetra?",
          "Firaketana an-tsoratra ny votoatin-dresaka"
        ],
        "exercices": [
          "Tanisao singa telo maha firenena ny firenena iray → Corrigé : ny tany, ny mponina, ny fitondrana (na lalàna iombonana)",
          "Nahoana no ilaina ny firaisan-kina eo amin'ny mponina rehetra? → Corrigé : mba hampandrosoana sy hiarovana ny firenena"
        ]
      },
      {
        "matiere": "HIRA",
        "topic": "Avy mangataka izahy",
        "approche": "Fanamafisana feno sy fanatontosana ny fahaizana mihira ny hira 'Avy mangataka izahy' efa natomboka tamin'ny faran'ny volana Novambra, mba ho tsapan'ny mpianatra tsirairay ny tononkira sy ny feo manontolo.",
        "transmission": [
          "Famerenana manontolo ny hira 'Avy mangataka izahy' efa nianarana tamin'ny faran'ny Novambra",
          "Fizarana ny kilasy ho vondrona, samy mihira mifandimby",
          "Fanitsiana ny feo sy ny tononkira tsy marina",
          "Fanaovana fihirana tokana ho an'ireo mahay tsara",
          "Fanamafisana ny hevitry ny tononkira manontolo"
        ],
        "exercices": [
          "Mihira manontolo ny 'Avy mangataka izahy' → Corrigé : fihirana marina, feno andalana rehetra, araka ny feo nampianarina",
          "Inona no hevitry ny hira, araka ny hitanao? → Corrigé : famintinana tsotra araka ny tononkira"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Ny matoanteny sy ny tsy matoanteny",
        "approche": "Taorian'ny lesona momba ny tsirinteny (morphème), mianatra ny fanavahana ny matoanteny (mot verbal) sy ny tsy matoanteny (mot non verbal) ao amin'ny fehezanteny.",
        "transmission": [
          "Famerenana fohy ny lesona teo aloha momba ny tsirinteny",
          "Fanazavana ny hoe matoanteny: teny maneho hetsika na toetra miova",
          "Fanazavana ny hoe tsy matoanteny: teny tsy maneho hetsika (anarana, mpamaritra, sns.)",
          "Fitadiavana am-pokonolona matoanteny sy tsy matoanteny ao amin'ny fehezanteny nomena",
          "Fanoratana am-tsoratra ohatra matoanteny sy tsy matoanteny"
        ],
        "exercices": [
          "Tondroy ny matoanteny ao amin'ity fehezanteny ity: 'Mihinana vary ny ankizy.' → Corrigé : mihinana",
          "Tondroy ny tsy matoanteny ao amin'ity fehezanteny ity: 'Mihinana vary ny ankizy.' → Corrigé : vary, ankizy",
          "Manorata teny matoanteny iray sy teny tsy matoanteny iray → Corrigé : valiny manokana voamarina (ohatra: 'mandeha' matoanteny, 'trano' tsy matoanteny)"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Ireo mpanampy mitaky filazam-potoana ho avy \"azo, tsy azo, aza\"",
        "approche": "Taorian'ny lesona momba ny fampitohizana teny mifarana amin'ny -ka/-tra/-na, mianatra ny fampiasana ny mpanampy 'azo, tsy azo, aza' izay mitaky filazam-potoana ho avy.",
        "transmission": [
          "Fanazavana ny hoe mpanampy 'azo, tsy azo, aza' dia mitaky matoanteny amin'ny filazam-potoana ho avy",
          "Fanomezana ohatra: 'Azo atao izany.' / 'Tsy azo atao izany.' / 'Aza manao izany.'",
          "Fanoratana am-pokonolona fehezanteny mampiasa ireo mpanampy telo ireo",
          "Fanavahana am-tsoratra ny fampiasana marina sy diso",
          "Fanitsiana ny lesoka hita"
        ],
        "exercices": [
          "Ampio amin'ny mpanampy marina: '___ mihinana io hanina io.' → Corrigé : Aza mihinana io hanina io.",
          "Manorata fehezanteny iray mampiasa 'azo' → Corrigé : valiny manokana voamarina (ohatra: 'Azo sakafoina ity trondro ity.')",
          "Manorata fehezanteny iray mampiasa 'tsy azo' → Corrigé : valiny manokana voamarina (ohatra: 'Tsy azo idirana ity efitrano ity.')"
        ]
      }
    ]
  },
  {
    "n": 2,
    "dateDebut": "2025/12/08",
    "theme": "Fractions et volume du cube, la poule et l'œuf, énergie et mines",
    "sous": "Grandeur connaissant la fraction · Volume du cube · La poule et l'œuf · Énergie et mines",
    "matieres": [
      {
        "matiere": "CALCUL",
        "topic": "- Calcul de la grandeur connaissant la fraction\n- Aire augmentée, aire diminuer\n- Le cube : calcul du volume",
        "approche": "Après la comparaison des fractions vue la semaine précédente, apprendre à calculer une grandeur connaissant une fraction de celle-ci, étudier la variation d'aire (augmentation/diminution), et calculer le volume du cube.",
        "transmission": [
          "Rappel de la comparaison de fractions vue la semaine précédente",
          "Présentation de la méthode pour trouver une grandeur totale connaissant une fraction de celle-ci (ex : 2/5 d'un champ mesurent 20 ares, trouver le champ entier)",
          "Exercices d'application sur le calcul de la grandeur totale",
          "Présentation de l'aire augmentée et de l'aire diminuée : effet d'un agrandissement ou d'une réduction des côtés sur l'aire d'une figure",
          "Rappel de l'aire du cube (semaine précédente) et introduction du calcul du volume : côté × côté × côté",
          "Exercices d'application sur le volume du cube"
        ],
        "exercices": [
          "Les 3/4 d'un terrain mesurent 900 m². Quelle est la surface totale du terrain ? → Corrigé : 1 200 m²",
          "Un carré de 5 cm de côté voit son côté doublé. Quelle est la nouvelle aire ? → Corrigé : 100 cm² (contre 25 cm² avant, l'aire est multipliée par 4)",
          "Calcule le volume d'un cube de 3 cm de côté → Corrigé : 3 × 3 × 3 = 27 cm³"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "- La poule\n- L'oeuf",
        "approche": "Après la peste et le choléra vus la semaine précédente, étudier un animal domestique familier, la poule, et le développement de l'œuf.",
        "transmission": [
          "Observation d'une image ou d'une poule réelle si possible : description de son corps (bec, plumes, pattes, ailes)",
          "Présentation du mode de vie de la poule : alimentation, habitat (poulailler)",
          "Présentation de l'œuf : sa structure simple (coquille, blanc, jaune)",
          "Explication du développement de l'œuf en poussin (couvaison)",
          "Discussion sur l'utilité de la poule et de l'œuf pour l'alimentation humaine"
        ],
        "exercices": [
          "Cite deux parties du corps de la poule → Corrigé : le bec, les plumes (ou les pattes, les ailes)",
          "Que trouve-t-on à l'intérieur d'un œuf ? → Corrigé : le blanc et le jaune, protégés par la coquille",
          "Combien de temps faut-il environ pour qu'un œuf devienne un poussin ? → Corrigé : environ 21 jours"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "Energie et mines",
        "approche": "Après l'exploitation de la forêt vue la semaine précédente, étudier les ressources énergétiques et minières de Madagascar.",
        "transmission": [
          "Rappel des ressources forestières étudiées la semaine précédente",
          "Présentation des sources d'énergie de Madagascar : hydroélectricité, charbon de bois, pétrole (recherche)",
          "Présentation des principales ressources minières : chromite, graphite, pierres précieuses (saphir, émeraude)",
          "Localisation des grandes zones minières sur la carte",
          "Discussion sur l'importance économique de ces ressources pour le pays"
        ],
        "exercices": [
          "Cite une source d'énergie utilisée à Madagascar → Corrigé : l'hydroélectricité (ou le charbon de bois)",
          "Cite une ressource minière de Madagascar → Corrigé : la chromite, le graphite ou une pierre précieuse (saphir, émeraude)",
          "Pourquoi les mines sont-elles importantes pour l'économie du pays ? → Corrigé : elles créent des emplois et rapportent des revenus par l'exportation"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Ny tetezamita 2009",
        "approche": "Manohy ny fianarana ny tantaran'i Madagasikara taorian'ny Repoblika III, mianatra ny amin'ny tetezamita 2009 sy ny antony nahatonga izany.",
        "transmission": [
          "Famerenana fohy ny lesona teo aloha momba ny Repoblika III",
          "Fanazavana fohy ny antony niteraka ny krizy ara-politika 2009",
          "Famelabelarana ny fitondrana tetezamita naorina taorian'izany",
          "Fampitahana ny tetezamita 2009 amin'ny tetezamita 1991 efa nianarana",
          "Firaketana an-tsoratra ny votoatin-dresaka"
        ],
        "exercices": [
          "Taona firy no nisian'ny tetezamita farany nianaranao? → Corrigé : 2009",
          "Inona no niteraka ny tetezamita 2009? → Corrigé : krizy ara-politika (valiny mety samihafa araka ny lesona)",
          "Ahoana no ampitahana ny tetezamita 1991 sy 2009? → Corrigé : samy tetezamita nateraky ny krizy ara-politika, saingy tamin'ny fotoana samihafa"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "- Ny filohan'ny Repoblika\n- Ny governemanta",
        "approche": "Manohy ny lesona momba ny maha firenena ny firenena, mianatra ny anjara asan'ny filohan'ny Repoblika sy ny governemanta eo amin'ny fitantanana ny firenena.",
        "transmission": [
          "Famerenana fohy ny lesona teo aloha momba ny singa maha firenena ny firenena",
          "Fanazavana ny anjara asan'ny filohan'ny Repoblika: filoha voafidin'ny vahoaka, mitarika ny firenena",
          "Fanazavana ny anjara asan'ny governemanta: ministra samihafa mitantana sehatra isan-karazany",
          "Fanomezana ohatra sehatra tantanan'ny minisitra (fanabeazana, fahasalamana)",
          "Firaketana an-tsoratra ny votoatin-dresaka"
        ],
        "exercices": [
          "Iza no filohan'ny Repoblika, ary ahoana no nifidianana azy? → Corrigé : ilay voafidin'ny vahoaka amin'ny fifidianana",
          "Inona no anjara asan'ny governemanta? → Corrigé : mitantana ny sehatra isan-karazany ao amin'ny firenena (fanabeazana, fahasalamana, sns.)",
          "Tanisao minisitra iray sy ny sehatra tantanany → Corrigé : ohatra, ny minisitry ny fanabeazana mitantana ny sekoly (valiny mety samihafa)"
        ]
      },
      {
        "matiere": "HIRA",
        "topic": "Tanin-katsaka, tanim-parihy P.S p.126",
        "approche": "Manomboka mianatra hira vaovao, 'Tanin-katsaka, tanim-parihy', taorian'ny fanamafisana feno ny hira 'Avy mangataka izahy' tamin'ny herinandro teo aloha.",
        "transmission": [
          "Fampihirana ny mpampianatra ny hira vaovao 'Tanin-katsaka, tanim-parihy' indray mandeha manontolo",
          "Fanazavana ny hevitry ny tononkira: ny fambolena vary sy katsaka eny ambanivohitra",
          "Famerenana andalana isaky ny fehezana kely",
          "Fihirana miaraka amin'ny kilasy manontolo",
          "Fanoratana ny tononkira ao amin'ny kahie hira"
        ],
        "exercices": [
          "Mihira ny fehezana voalohan'ny 'Tanin-katsaka, tanim-parihy' → Corrigé : fihirana marina araka ny tononkira sy ny feo",
          "Inona no lohahevitra resahin'ity hira ity? → Corrigé : ny fambolena (katsaka sy vary) any ambanivohitra"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Ny fototeny sy ny teny iray tarika aminy",
        "approche": "Manohy ny lesona momba ny matoanteny sy ny tsy matoanteny, mianatra ny hoe fototeny (mot-racine) sy ny teny iray tarika aminy (mots de la même famille).",
        "transmission": [
          "Famerenana fohy ny lesona teo aloha momba ny matoanteny sy ny tsy matoanteny",
          "Fanazavana ny hoe fototeny: ilay teny fototra iavian'ny teny hafa",
          "Fanomezana ohatra: fototeny 'soratra' iforonan'ny 'manoratra', 'mpanoratra', 'fanoratana'",
          "Fitadiavana am-pokonolona teny iray tarika amin'ny fototeny nomena",
          "Fanoratana am-tsoratra lisitry ny teny iray tarika"
        ],
        "exercices": [
          "Tondroy ny fototeny iombonan'ny teny 'mianatra', 'mpianatra', 'fianarana' → Corrigé : anatra",
          "Manorata teny roa iray tarika amin'ny fototeny 'vaky' → Corrigé : ohatra, mivaky, fahavakiana (valiny mety samihafa)"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Ireo mpanampy mitaky filazam-potoana ho avy \"te, ta, tokony, aoka, ndeha\"",
        "approche": "Manohy ny lesona momba ny mpanampy 'azo, tsy azo, aza' tamin'ny herinandro teo aloha, mianatra amin'ity herinandro ity ny mpanampy hafa mitaky filazam-potoana ho avy: 'te, ta, tokony, aoka, ndeha'.",
        "transmission": [
          "Famerenana fohy ny mpanampy 'azo, tsy azo, aza' efa nianarana tamin'ny herinandro teo aloha",
          "Fanazavana ny mpanampy vaovao 'te, ta, tokony, aoka, ndeha' izay mitaky matoanteny amin'ny filazam-potoana ho avy",
          "Fanomezana ohatra isaky ny mpanampy: 'Te-hisakafo aho.' / 'Tokony hianatra ianao.' / 'Ndeha hilalao isika.'",
          "Fanoratana am-pokonolona fehezanteny mampiasa ireo mpanampy ireo",
          "Fanitsiana ny lesoka hita"
        ],
        "exercices": [
          "Ampio amin'ny mpanampy marina: '___ hianatra tsara ianao.' → Corrigé : Tokony hianatra tsara ianao.",
          "Manorata fehezanteny iray mampiasa 'aoka' → Corrigé : valiny manokana voamarina (ohatra: 'Aoka hitony ianao.')",
          "Manorata fehezanteny iray mampiasa 'ndeha' → Corrigé : valiny manokana voamarina (ohatra: 'Ndeha hisotro rano isika.')"
        ]
      }
    ]
  }
];

const JANVIER_7EME = [
  {
    "n": 1,
    "dateDebut": "2026/01/12",
    "theme": "Retour des vacances de Noël : fractions, calendrier malgache et institutions de la République",
    "sous": "Addition/soustraction de fractions et nombres sexagésimaux · Le poisson et le bœuf · L'artisanat · La République IV · L'Assemblée nationale et le Sénat",
    "matieres": [
      {
        "matiere": "CALCUL",
        "topic": "- Addition et soustraction des fractions\n- Les nombres sexagésimaux conversion\n- Le parallélépipède rectangle : aire",
        "approche": "Après les vacances de Noël, reprendre le calcul des fractions de même dénominateur et de dénominateurs différents vu en décembre (calcul de la grandeur connaissant la fraction), introduire la conversion des nombres sexagésimaux (heures, minutes, secondes) et le calcul de l'aire du parallélépipède rectangle, qui prolonge l'étude du cube du mois précédent.",
        "transmission": [
          "Retour de vacances : rappel rapide des acquis de décembre sur les fractions et le cube",
          "Rappel de la réduction des fractions au même dénominateur",
          "Exercices d'addition et de soustraction de fractions au tableau",
          "Présentation des nombres sexagésimaux (heures, minutes, secondes) et de leurs conversions (1h = 60 min, 1 min = 60 s)",
          "Présentation du parallélépipède rectangle : ses 6 faces rectangulaires, formule de l'aire totale",
          "Application : calcul de l'aire totale d'un parallélépipède rectangle à partir de ses dimensions"
        ],
        "exercices": [
          "Calcule : 1/4 + 1/3 → Corrigé : 3/12 + 4/12 = 7/12",
          "Calcule : 5/6 - 1/3 → Corrigé : 5/6 - 2/6 = 3/6 = 1/2",
          "Convertis 3 h 15 min en minutes → Corrigé : 195 min",
          "Calcule l'aire totale d'un parallélépipède rectangle de longueur 5 cm, largeur 3 cm et hauteur 2 cm → Corrigé : 2×(5×3 + 5×2 + 3×2) = 2×31 = 62 cm²"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "- Le poisson\n- Le boeuf",
        "approche": "Étudier les caractéristiques du poisson (animal aquatique) et du bœuf (animal domestique d'élevage), leur utilité pour l'alimentation et l'économie familiale malgache.",
        "transmission": [
          "Observation d'un poisson (image ou spécimen) : nageoires, écailles, branchies",
          "Explication du mode de vie du poisson : il vit dans l'eau et respire par les branchies",
          "Présentation du bœuf : ses parties (cornes, sabots), son mode de vie d'animal domestique",
          "Discussion sur l'utilité du bœuf à Madagascar : labour des rizières, viande, lait, place dans la culture",
          "Comparaison collective : un animal aquatique (poisson) et un animal terrestre domestique (bœuf)"
        ],
        "exercices": [
          "Comment le poisson respire-t-il dans l'eau ? → Corrigé : par les branchies",
          "Cite une partie du corps du poisson qui l'aide à nager → Corrigé : les nageoires",
          "Cite deux utilités du bœuf pour la famille malgache → Corrigé : ex. labourer la rizière et fournir de la viande (ou du lait)"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "L'artisanat",
        "approche": "Découvrir les principales activités artisanales de Madagascar (vannerie, broderie, sculpture sur bois, poterie) et leur importance économique locale.",
        "transmission": [
          "Discussion collective : quels objets fabriqués à la main connaissez-vous ?",
          "Présentation des grandes formes d'artisanat malgache : vannerie (paniers en raphia), broderie, sculpture sur bois, poterie",
          "Observation d'images ou d'objets artisanaux apportés en classe",
          "Explication de l'importance économique de l'artisanat : revenus des familles, vente sur les marchés",
          "Synthèse écrite dans le cahier de géographie"
        ],
        "exercices": [
          "Cite deux formes d'artisanat pratiquées à Madagascar → Corrigé : ex. la vannerie et la broderie (ou la sculpture sur bois, la poterie)",
          "En quelle matière sont fabriqués les paniers traditionnels ? → Corrigé : en raphia",
          "Pourquoi l'artisanat est-il important pour certaines familles malgaches ? → Corrigé : il leur procure un revenu grâce à la vente des objets fabriqués"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Ny Repoblika IV",
        "approche": "Manohy ny lesona natao tamin'ny Desambra momba ny tetezamita 2009, mampianatra ny fananganana ny Repoblika fahefatra (IV) tao Madagasikara, vokatry ny fifampiraharahana nataon'ireo mpitondra.",
        "transmission": [
          "Famerenana fohy ny lesona teo aloha momba ny tetezamita tamin'ny 2009",
          "Fanazavana ny hoe Repoblika IV: ny fanambarana azy taorian'ny tetezamita",
          "Famelabelarana ny fifanarahana politika nitarika ny fananganana ny Repoblika IV",
          "Fampahafantarana ny daty lehibe mifandraika amin'ny Repoblika IV",
          "Firaketana an-tsoratra ny votoatin-dresaka"
        ],
        "exercices": [
          "Inona no niseho taorian'ny tetezamita 2009? → Corrigé : ny fananganana ny Repoblika IV",
          "Ahoana no nahatongavan'ny Repoblika IV? → Corrigé : vokatry ny fifanarahana politika taorian'ny krizy",
          "Fahafiry ny Repoblika ankehitriny eto Madagasikara? → Corrigé : fahefatra (IV)"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "- Ny antenimieram-pirenena\n- Ny antenimieran-doholona",
        "approche": "Manohy ny lesona teo aloha momba ny filoham-pirenena sy ny governemanta, mampianatra ny anjara asan'ireo antenimiera roa mandrafitra ny fitondrana malagasy: ny antenimieram-pirenena sy ny antenimieran-doholona.",
        "transmission": [
          "Famerenana fohy ny lesona teo aloha momba ny filoham-pirenena sy ny governemanta",
          "Fanazavana ny antenimieram-pirenena: solontenam-bahoaka voafidy, anjara asa (fanaovan-dalàna)",
          "Fanazavana ny antenimieran-doholona: mpikambana, anjara asa",
          "Fampitahana ny antenimiera roa: ny fomba fifidianana sy ny anjara asa",
          "Firaketana an-tsoratra ny votoatin-dresaka"
        ],
        "exercices": [
          "Iza no mandrafitra ny antenimieram-pirenena? → Corrigé : ireo solontenam-bahoaka voafidin'ny vahoaka",
          "Inona no anjara asan'ny antenimieram-pirenena? → Corrigé : ny fanaovan-dalàna ho an'ny firenena",
          "Tanisao antenimiera roa mandrafitra ny fitondram-panjakana → Corrigé : ny antenimieram-pirenena sy ny antenimieran-doholona"
        ]
      },
      {
        "matiere": "HIRA",
        "topic": "Tanin-katsaka, tanim-parihy",
        "approche": "Manohy ny fianarana ny hira 'Tanin-katsaka, tanim-parihy' natomboka tamin'ny Desambra, mba hanamafisana ny fahatsiarovana ny tononkira sy ny lantom-peo aorian'ny fialan-tsasatra.",
        "transmission": [
          "Famerenana ny tononkira efa nianarana tamin'ny Desambra",
          "Fihirana miaraka amin'ny kilasy manontolo indray mandeha",
          "Fizarana ny kilasy ho vondrona roa, samy mihira mifandimby",
          "Fanitsiana ny feo tsy marina",
          "Fanamafisana ny hevitry ny tononkira"
        ],
        "exercices": [
          "Mihira ny fehezana voalohan'ny 'Tanin-katsaka, tanim-parihy' → Corrigé : fihirana marina araka ny tononkira sy ny feo",
          "Soraty andalana iray tsaroanao amin'ilay hira → Corrigé : araka ny tononkira nampianarina"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Ny sokajin'ny filazam-potoana",
        "approche": "Manohy ny lesona teo aloha momba ny fototeny sy ny mpianakavin-teny, mampianatra ny sokajin'ny filazam-potoana (efa lasa, ankehitriny, ho avy), fototra ho an'ny lesona momba ny filazam-potoana ho avy manaraka.",
        "transmission": [
          "Famerenana fohy ny lesona teo aloha momba ny fototeny",
          "Fanazavana ny sokajin'ny filazam-potoana: efa lasa, ankehitriny, ho avy",
          "Fanomezana ohatra fehezanteny ho an'ny sokajy tsirairay",
          "Fitadiavana am-pokonolona ny sokajin'ny filazam-potoana ao amin'ny fehezanteny nomena",
          "Firaketana an-tsoratra ny fitsipika"
        ],
        "exercices": [
          "Sokajio araka ny filazam-potoana: 'Nianatra ny mpianatra' → Corrigé : efa lasa",
          "Sokajio araka ny filazam-potoana: 'Hianatra ny mpianatra' → Corrigé : ho avy",
          "Manorata fehezanteny iray milaza filazam-potoana ho avy → Corrigé : valiny manokana voamarina (ohatra: 'Hianatra tsara aho.')"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Ireo mpanampy mitaky filazam-potoana ho avy\nte, ta, tokony, aoka, ndeha",
        "approche": "Manohy sy manamafy ny lesona natomboka tamin'ny Desambra momba ireo mpanampy mitaky filazam-potoana ho avy (te, ta, tokony, aoka, ndeha), amin'ny alalan'ny fanoratana fehezanteny maro.",
        "transmission": [
          "Famerenana ireo mpanampy dimy efa nianarana tamin'ny Desambra: te, ta, tokony, aoka, ndeha",
          "Fanomezana ohatra fehezanteny vaovao ho an'ny mpanampy tsirairay",
          "Fanoratana am-pokonolona fehezanteny mampiasa ireo mpanampy ireo",
          "Fanitsiana ny lesoka hita",
          "Fampiharana: famoronana fehezanteny manokana"
        ],
        "exercices": [
          "Ampio amin'ny mpanampy mitaky filazam-potoana ho avy: '___ mianatra tsara aho.' → Corrigé : Te (na: Tokony) mianatra tsara aho.",
          "Manorata fehezanteny iray mampiasa 'aoka' → Corrigé : valiny manokana voamarina (ohatra: 'Aoka isika hiara-hiasa.')",
          "Manorata fehezanteny iray mampiasa 'ndeha' → Corrigé : valiny manokana voamarina (ohatra: 'Ndeha isika hilalao.')"
        ]
      }
    ]
  },
  {
    "n": 2,
    "dateDebut": "2026/01/19",
    "theme": "Multiplication des fractions, la Haute Cour constitutionnelle et les lieux historiques",
    "sous": "Multiplication/division de fractions et calcul sexagésimal · Le chien et le chat · L'industrie · Les lieux historiques · La Haute Cour constitutionnelle",
    "matieres": [
      {
        "matiere": "CALCUL",
        "topic": "- Multiplication et division des fractions\n- Addition et soustraction : des nombres sexagésimaux\n- Le parallélépipède rectangle : calcul du volume",
        "approche": "Poursuivre le travail sur les fractions en passant de l'addition/soustraction à la multiplication et la division, consolider les nombres sexagésimaux avec l'addition et la soustraction, et compléter l'étude du parallélépipède rectangle par le calcul du volume après celui de l'aire vu la semaine précédente.",
        "transmission": [
          "Rappel de l'addition et de la soustraction de fractions vues la semaine précédente",
          "Présentation de la multiplication de fractions (multiplier les numérateurs entre eux, les dénominateurs entre eux)",
          "Présentation de la division de fractions (multiplier par l'inverse de la seconde fraction)",
          "Exercices d'addition et de soustraction de nombres sexagésimaux (heures, minutes)",
          "Rappel de l'aire du parallélépipède rectangle, puis présentation de la formule du volume (longueur × largeur × hauteur)",
          "Application : calcul du volume d'un parallélépipède rectangle"
        ],
        "exercices": [
          "Calcule : 2/3 × 3/4 → Corrigé : 6/12 = 1/2",
          "Calcule : 2/5 ÷ 4/5 → Corrigé : 2/5 × 5/4 = 10/20 = 1/2",
          "Calcule : 2 h 45 min + 1 h 30 min → Corrigé : 4 h 15 min",
          "Calcule le volume d'un parallélépipède rectangle de longueur 5 cm, largeur 3 cm et hauteur 2 cm → Corrigé : 5×3×2 = 30 cm³"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "Le chien et le chat",
        "approche": "Étudier deux animaux domestiques familiers, le chien et le chat, leurs caractéristiques et leur utilité pour la famille, en poursuite de l'étude des animaux domestiques (le bœuf) vue la semaine précédente.",
        "transmission": [
          "Rappel du bœuf étudié la semaine précédente comme animal domestique",
          "Présentation du chien : ses caractéristiques (odorat développé, fidélité), son rôle de gardien",
          "Présentation du chat : ses caractéristiques (griffes rétractiles, chasseur de rongeurs), son rôle domestique",
          "Comparaison des deux animaux : ressemblances et différences",
          "Discussion collective sur les soins à apporter à ces animaux"
        ],
        "exercices": [
          "Cite une utilité du chien pour la famille → Corrigé : il garde la maison (grâce à son odorat et sa fidélité)",
          "Pourquoi le chat est-il utile dans une maison ? → Corrigé : il chasse les rats et les souris",
          "Cite une différence entre le chien et le chat → Corrigé : ex. le chien aboie, le chat miaule (ou toute réponse correcte)"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "L'industrie",
        "approche": "Découvrir les principales activités industrielles de Madagascar, en poursuite de l'étude de l'artisanat vue la semaine précédente.",
        "transmission": [
          "Rappel de l'artisanat étudié la semaine précédente",
          "Explication de la différence entre artisanat (fabrication manuelle) et industrie (fabrication en usine)",
          "Présentation des principales industries malgaches : agroalimentaire, textile",
          "Observation d'images d'usines ou de produits industriels malgaches",
          "Synthèse écrite dans le cahier de géographie"
        ],
        "exercices": [
          "Quelle est la différence entre l'artisanat et l'industrie ? → Corrigé : l'artisanat est une fabrication manuelle, l'industrie se fait en usine avec des machines",
          "Cite un type d'industrie présent à Madagascar → Corrigé : l'industrie agroalimentaire (ou textile)",
          "Pourquoi l'industrie est-elle importante pour un pays ? → Corrigé : elle crée des emplois et des produits pour la population"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Ireo toerana manan-tantara",
        "approche": "Manohy ny lesona teo aloha momba ny Repoblika IV, mampahafantatra ireo toerana manan-tantara manerana an'i Madagasikara izay mitahiry ny fahatsiarovana ny tantara nasionaly.",
        "transmission": [
          "Famerenana fohy ny lesona teo aloha momba ny Repoblika IV",
          "Fanazavana ny hoe toerana manan-tantara: toerana nisy zava-nitranga lehibe teo amin'ny tantara",
          "Fanomezana ohatra toerana manan-tantara (ohatra: Rova, tanàna fahiny)",
          "Fanazavana ny maha-zava-dehibe ny fitehirizana ireo toerana ireo ho an'ny taranaka",
          "Firaketana an-tsoratra ny votoatin-dresaka"
        ],
        "exercices": [
          "Inona no atao hoe toerana manan-tantara? → Corrigé : toerana nisy zava-nitranga lehibe teo amin'ny tantaran'ny firenena",
          "Tanisao toerana manan-tantara iray fantatrao → Corrigé : ohatra, ny Rovan'Antananarivo (valiny mety samihafa)",
          "Nahoana no ilaina ny mitahiry ireo toerana manan-tantara? → Corrigé : mba hahatsiarovan'ny taranaka ny tantaran'ny firenena"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Ny fitsarana avo momba ny lalàm-panorenana",
        "approche": "Manohy ny lesona teo aloha momba ny antenimiera roa (antenimieram-pirenena sy antenimieran-doholona), mampianatra ny anjara asan'ny fitsarana avo momba ny lalàm-panorenana eo amin'ny fitondram-panjakana.",
        "transmission": [
          "Famerenana fohy ny lesona teo aloha momba ny antenimiera roa",
          "Fanazavana ny hoe fitsarana avo momba ny lalàm-panorenana: ny anjara asany",
          "Fanazavana ny fifandraisan'ny fitsarana avo amin'ny antenimiera sy ny filoham-pirenena",
          "Fanomezana ohatra: fanaraha-maso ny fifidianana",
          "Firaketana an-tsoratra ny votoatin-dresaka"
        ],
        "exercices": [
          "Inona no anjara asan'ny fitsarana avo momba ny lalàm-panorenana? → Corrigé : mikarakara ny fanajana ny lalàm-panorenana sy manara-maso ny fifidianana",
          "Iza no manisy fanamarinana ny voka-pifidianana lehibe eto Madagasikara? → Corrigé : ny fitsarana avo momba ny lalàm-panorenana",
          "Tanisao andrim-panjakana telo efa nianaranao hatramin'izao → Corrigé : ny antenimieram-pirenena, ny antenimieran-doholona, ny fitsarana avo momba ny lalàm-panorenana"
        ]
      },
      {
        "matiere": "HIRA",
        "topic": "Au claire de la lune\nP,S p. 126",
        "approche": "Manomboka mianatra hira frantsay vaovao 'Au claire de la lune', avy amin'ny boky P.S pejy 126, aorian'ny fanamafisana ny hira 'Tanin-katsaka, tanim-parihy' tamin'ny herinandro teo aloha.",
        "transmission": [
          "Fampihirana ny mpampianatra ny hira 'Au claire de la lune' indray mandeha manontolo, araka ny boky P.S p. 126",
          "Fanazavana fohy ny hevitry ny tononkira amin'ny teny frantsay",
          "Famerenana andalana isaky ny fehezana kely",
          "Fihirana miaraka amin'ny kilasy manontolo",
          "Fanoratana ny tononkira ao amin'ny kahie hira"
        ],
        "exercices": [
          "Mihira ny fehezana voalohan'ny 'Au claire de la lune' → Corrigé : fihirana marina araka ny tononkira sy ny feo",
          "Avy amin'ny boky ahoana no nakana ilay hira? → Corrigé : ny boky P.S, pejy 126"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Ny filazam-potoana amin'ny matoanteny mitovona m, mi, ma, a sy mitovona -ina sy -ana",
        "approche": "Manohy ny lesona teo aloha momba ny sokajin'ny filazam-potoana, mifantoka manokana amin'ny fomba filaza ny ho avy ho an'ny matoanteny manomboka amin'ny m, mi, ma, a ary mitovona -ina na -ana.",
        "transmission": [
          "Famerenana fohy ny sokajin'ny filazam-potoana efa nianarana",
          "Fanazavana ny fomba filaza ny ho avy ho an'ny matoanteny manomboka amin'ny 'm', 'mi', 'ma', 'a'",
          "Fanazavana ny fomba filaza ny ho avy ho an'ny matoanteny mitovona '-ina' sy '-ana'",
          "Fanomezana ohatra maromaro ho an'ny sokajy tsirairay",
          "Fanoratana am-pokonolona fehezanteny mampiasa ireo matoanteny ireo amin'ny filazam-potoana ho avy"
        ],
        "exercices": [
          "Ovay ho filazam-potoana ho avy ny matoanteny 'manasa' → Corrigé : hanasa",
          "Ovay ho filazam-potoana ho avy ny matoanteny 'mamaky' → Corrigé : hamaky",
          "Ovay ho filazam-potoana ho avy ny matoanteny mitovona '-ina': 'sasana' → Corrigé : hosasana"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Ireo mpanampy mitaky filazam-potoana ho avy\nte, ta, tokony, aoka, ndeha",
        "approche": "Manamafy indray ny fampiasana ireo mpanampy dimy mitaky filazam-potoana ho avy (te, ta, tokony, aoka, ndeha), amin'ny alalan'ny fampiharana mafimafy kokoa noho ny herinandro teo aloha.",
        "transmission": [
          "Famerenana faingana ireo mpanampy dimy efa nianarana",
          "Fanoratana am-pokonolona fehezanteny mampiasa mpanampy roa isaky ny fehezanteny",
          "Fanavahana am-pokonolona ny mpanampy tsirairay amin'ny hevi-diany",
          "Fanitsiana ny lesoka hita",
          "Fampiharana: fanoratana tantara fohy mampiasa mpanampy maromaro"
        ],
        "exercices": [
          "Ampio amin'ny mpanampy mety: 'Izy ___ mandeha any an-tsena rahampitso.' → Corrigé : Izy te (na: tokony) mandeha any an-tsena rahampitso.",
          "Manorata fehezanteny iray mampiasa 'tokony' → Corrigé : valiny manokana voamarina (ohatra: 'Tokony hianatra tsara ianao.')",
          "Manorata fehezanteny iray mampiasa 'ta' → Corrigé : valiny manokana voamarina (ohatra: 'Ta hilalao aho.')"
        ]
      }
    ]
  },
  {
    "n": 3,
    "dateDebut": "2026/01/26",
    "theme": "Le budget familial, le cylindre et les médias",
    "sous": "Budget familial et nombres complexes · L'abeille et le criquet · Le transport · Les organisations internationales · Les médias",
    "matieres": [
      {
        "matiere": "CALCUL",
        "topic": "- Le budget familial\n- Multiplication et division des nombres complexes\n- Le cylindre : calcul de l'aire",
        "approche": "Introduire la notion de budget familial (recettes et dépenses), poursuivre le travail sur les nombres complexes (heures/minutes) en passant à la multiplication et la division, et découvrir le calcul de l'aire du cylindre après le parallélépipède rectangle vu les deux semaines précédentes.",
        "transmission": [
          "Présentation du budget familial : recettes (revenus) et dépenses d'une famille",
          "Exercice pratique : établir un petit budget familial simple avec des exemples de dépenses courantes",
          "Rappel des nombres complexes (heures et minutes) vus la semaine précédente",
          "Présentation de la multiplication et de la division des nombres complexes",
          "Présentation du cylindre : base circulaire et hauteur, formule de l'aire totale",
          "Application : calcul de l'aire totale d'un cylindre à partir de son rayon et de sa hauteur"
        ],
        "exercices": [
          "Une famille a un revenu de 450 000 Ar et des dépenses de 320 000 Ar. Quel est le solde restant ? → Corrigé : 130 000 Ar",
          "Calcule : 2 h 15 min × 3 → Corrigé : 6 h 45 min",
          "Calcule : 6 h 30 min ÷ 3 → Corrigé : 2 h 10 min",
          "Calcule l'aire totale d'un cylindre de rayon 3 cm et de hauteur 5 cm (π ≈ 3,14) → Corrigé : 2×3,14×3×(3+5) = 150,72 cm²"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "- L'abeille\n- Le criquet",
        "approche": "Étudier deux insectes, l'abeille (insecte utile produisant le miel) et le criquet (insecte pouvant ravager les cultures), en poursuite de l'étude des animaux domestiques vue les semaines précédentes.",
        "transmission": [
          "Rappel des animaux domestiques étudiés (bœuf, chien, chat)",
          "Présentation de l'abeille : ses parties (ailes, dard), son rôle dans la production du miel et la pollinisation",
          "Présentation du criquet : ses parties (pattes sauteuses, ailes), le danger des invasions de criquets pour les cultures",
          "Comparaison : un insecte utile (l'abeille) et un insecte nuisible pour les récoltes (le criquet)",
          "Discussion collective sur la protection des cultures contre les criquets"
        ],
        "exercices": [
          "Que produit l'abeille ? → Corrigé : le miel",
          "Pourquoi le criquet est-il dangereux pour les cultures ? → Corrigé : il dévore les plantes et les récoltes en grand nombre",
          "Cite une partie du corps du criquet qui lui permet de sauter → Corrigé : ses pattes (pattes postérieures)"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "Le transport",
        "approche": "Découvrir les différents moyens de transport à Madagascar (routier, ferroviaire, maritime, aérien), en poursuite de l'étude de l'industrie vue la semaine précédente.",
        "transmission": [
          "Rappel de l'industrie étudiée la semaine précédente",
          "Présentation des transports terrestres : la route, le chemin de fer",
          "Présentation des transports maritime et aérien : les ports, les aéroports",
          "Discussion sur les difficultés de transport à Madagascar (routes en mauvais état, régions enclavées)",
          "Synthèse écrite dans le cahier de géographie"
        ],
        "exercices": [
          "Cite deux moyens de transport terrestre à Madagascar → Corrigé : la voiture (route) et le train (chemin de fer)",
          "Comment appelle-t-on le lieu où accostent les bateaux ? → Corrigé : le port",
          "Pourquoi certaines régions de Madagascar sont-elles difficiles d'accès ? → Corrigé : à cause du mauvais état des routes (régions enclavées)"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Ireo fikambanana iraisam-pirenena",
        "approche": "Manohy ny lesona teo aloha momba ireo toerana manan-tantara, mampahafantatra ireo fikambanana iraisam-pirenena misy an'i Madagasikara ho mpikambana.",
        "transmission": [
          "Famerenana fohy ny lesona teo aloha momba ny toerana manan-tantara",
          "Fanazavana ny hoe fikambanana iraisam-pirenena: fikambanana mampiray firenena maro",
          "Fanomezana ohatra fikambanana iraisam-pirenena misy an'i Madagasikara (ohatra: ONU, Firaisamben'ny Afrika)",
          "Fanazavana ny anjara asan'ireo fikambanana ireo ho an'ny firenena",
          "Firaketana an-tsoratra ny votoatin-dresaka"
        ],
        "exercices": [
          "Inona no atao hoe fikambanana iraisam-pirenena? → Corrigé : fikambanana mampiray firenena maro miaraka",
          "Tanisao fikambanana iraisam-pirenena iray misy an'i Madagasikara ho mpikambana → Corrigé : ohatra, ny ONU (Firenena Mikambana) na ny Firaisamben'ny Afrika",
          "Inona ny tombontsoan'i Madagasikara raha mpikambana ao amin'ny fikambanana iraisam-pirenena? → Corrigé : mahazo fanampiana sy mifandray amin'ny firenena hafa"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Ny fampahalalam-baovao",
        "approche": "Manohy ny lesona teo aloha momba ny fitsarana avo momba ny lalàm-panorenana, mampianatra ny anjara asan'ny fampahalalam-baovao (radio, televiziona, gazety) eo amin'ny fiainam-pirenena.",
        "transmission": [
          "Famerenana fohy ny lesona teo aloha momba ny fitsarana avo momba ny lalàm-panorenana",
          "Fanazavana ny hoe fampahalalam-baovao: radio, televiziona, gazety",
          "Fanazavana ny anjara asan'ny fampahalalam-baovao: mampita vaovao, mampianatra, mampitandrina",
          "Fifampiresahana: inona ny gazety na radio fantatrao?",
          "Firaketana an-tsoratra ny votoatin-dresaka"
        ],
        "exercices": [
          "Tanisao fomba fampahalalam-baovao telo → Corrigé : ny radio, ny televiziona, ny gazety",
          "Inona ny anjara asan'ny fampahalalam-baovao ho an'ny vahoaka? → Corrigé : mampita vaovao sy mampianatra ny vahoaka",
          "Nahoana no ilaina ny fampahalalam-baovao amin'ny fiainam-pirenena? → Corrigé : mba hahafantaran'ny vahoaka izay mitranga ao amin'ny firenena"
        ]
      },
      {
        "matiere": "HIRA",
        "topic": "Au claire de la lune\nP.S p.126",
        "approche": "Manamafy sy mameno tanteraka ny hira 'Au claire de la lune' natomboka tamin'ny herinandro teo aloha, mba hahaizan'ny mpianatra tsirairay mihira azy manontolo.",
        "transmission": [
          "Famerenana manontolo ny hira 'Au claire de la lune' efa nianarana",
          "Fizarana ny kilasy ho vondrona roa, samy mihira mifandimby",
          "Fanitsiana ny feo sy ny fanononana teny frantsay tsy marina",
          "Fanaovana fihirana tokana ho an'ireo mahay",
          "Fanamafisana ny hevitry ny tononkira"
        ],
        "exercices": [
          "Mihira manontolo ny 'Au claire de la lune' → Corrigé : fihirana marina, feno andalana rehetra",
          "Inona ny teny frantsay ampiasaina hilazana ny fahazavan'ny volana? → Corrigé : 'la lune'"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Ny filazam-potoana amin'ny matoanteny fototeny sy mpisolo toerana",
        "approche": "Manohy ny lesona teo aloha momba ny filazam-potoana ho avy ho an'ny matoanteny mitovona, mifantoka manokana amin'ny fomba filaza ny ho avy ho an'ny matoanteny fototeny sy ny mpisolo toerana.",
        "transmission": [
          "Famerenana fohy ny lesona teo aloha momba ny filazam-potoana ho avy",
          "Fanazavana ny fomba filaza ny ho avy ho an'ny matoanteny fototeny (tsy misy tovana)",
          "Fanazavana ny fomba filaza ny ho avy miaraka amin'ny mpisolo toerana",
          "Fanomezana ohatra maromaro ho an'ny sokajy tsirairay",
          "Fanoratana am-pokonolona fehezanteny mampiasa ireo matoanteny ireo amin'ny filazam-potoana ho avy"
        ],
        "exercices": [
          "Ovay ho filazam-potoana ho avy ny matoanteny fototeny 'vaky' → Corrigé : hovaky",
          "Manorata fehezanteny iray mampiasa mpisolo toerana sy filazam-potoana ho avy → Corrigé : valiny manokana voamarina (ohatra: 'Izy hianatra rahampitso.')",
          "Ovay ho filazam-potoana ho avy: 'Mihinana izy' → Corrigé : Hihinana izy"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Fanamafisana: ireo mpanampy mitaky filazam-potoana ho avy (te, ta, tokony, aoka, ndeha)",
        "approche": "Mamarana ny fianarana ireo mpanampy dimy mitaky filazam-potoana ho avy amin'ny alalan'ny fampiharana famintinana, mba hanamarinana fa efa tratran'ny mpianatra tsirairay ny votoatin-dresaka.",
        "transmission": [
          "Famerenana faobe ireo mpanampy dimy: te, ta, tokony, aoka, ndeha",
          "Fanaovana fampiharana famintinana: fanoratana tantara fohy mampiasa mpanampy maromaro",
          "Fifanakalozana am-pokonolona ny sora-tanana nataon'ny mpianatra",
          "Fanitsiana ny lesoka hita farany",
          "Fanamafisana ny fitsipika alohan'ny fanadinana"
        ],
        "exercices": [
          "Ampio amin'ny mpanampy mety avy amin'ny lisitra (te, ta, tokony, aoka, ndeha): 'Isika ___ miara-miasa.' → Corrigé : Isika aoka (na: tokony) miara-miasa.",
          "Manorata fehezanteny roa mampiasa mpanampy roa samihafa amin'ny lisitra → Corrigé : valiny manokana voamarina (ohatra: 'Te hianatra aho. Tokony hazoto ianao.')",
          "Inona ireo mpanampy dimy mitaky filazam-potoana ho avy efa nianaranao amin'ity volana ity? → Corrigé : te, ta, tokony, aoka, ndeha"
        ]
      }
    ]
  }
];

const FEVRIER_7EME = [
  {
    "n": 1,
    "dateDebut": "2026/02/02",
    "theme": "Le placement d'argent, le cylindre et les dates internationales",
    "sous": "Calcul de l'intérêt annuel · La plante et la fleur · Le commerce · Les dates internationales · La Constitution",
    "matieres": [
      {
        "matiere": "CALCUL",
        "topic": "- Placement d'argent : calcul de l'intérêt annuel\n- Mouvement uniforme : calcul de la vitesse moyenne\n- Le cylindre : calcul du volume",
        "approche": "Introduire le calcul de l'intérêt simple annuel d'un placement d'argent, le calcul de la vitesse moyenne d'un mouvement uniforme, et le calcul du volume du cylindre en géométrie.",
        "transmission": [
          "Rappel du budget familial (janvier) et introduction du vocabulaire du placement d'argent : capital, taux, intérêt",
          "Présentation de la formule de l'intérêt annuel : I = (Capital × Taux) / 100",
          "Exercices d'application chiffrés de calcul d'intérêt annuel",
          "Introduction du mouvement uniforme : distance parcourue, durée, vitesse moyenne = distance / durée",
          "Présentation du cylindre (base circulaire, hauteur) et de la formule du volume : V = π × r² × h",
          "Exercices d'application sur le volume du cylindre avec des mesures simples"
        ],
        "exercices": [
          "Un capital de 500 000 Ar est placé à un taux de 6% par an. Calcule l'intérêt annuel → Corrigé : I = (500 000 × 6) / 100 = 30 000 Ar",
          "Un cycliste parcourt 60 km en 3 heures. Calcule sa vitesse moyenne → Corrigé : 60 / 3 = 20 km/h",
          "Calcule le volume d'un cylindre de rayon 5 cm et de hauteur 10 cm (π ≈ 3,14) → Corrigé : V = 3,14 × 5² × 10 = 785 cm³"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "- La plante\n- La fleur",
        "approche": "Étudier les grandes parties de la plante (racine, tige, feuilles) et la structure de la fleur (pétales, étamines, pistil) ainsi que leurs rôles.",
        "transmission": [
          "Observation d'une plante entière apportée en classe ou d'un schéma",
          "Identification des grandes parties de la plante : racine, tige, feuilles",
          "Explication du rôle de chaque partie (la racine puise l'eau, la tige soutient, les feuilles captent la lumière)",
          "Observation d'une fleur : pétales, étamines, pistil",
          "Explication du rôle de la fleur dans la reproduction de la plante",
          "Copie et légende d'un schéma de la plante et de la fleur dans le cahier"
        ],
        "exercices": [
          "Nomme 3 parties d'une plante → Corrigé : la racine, la tige, les feuilles",
          "À quoi sert la racine ? → Corrigé : elle puise l'eau et les sels minéraux dans le sol et fixe la plante",
          "Nomme 2 parties d'une fleur → Corrigé : les pétales, les étamines (ou le pistil)"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "Le commerce",
        "approche": "Étudier les formes de commerce à Madagascar (marché local, commerce intérieur, commerce extérieur) et son rôle dans l'économie du pays.",
        "transmission": [
          "Discussion collective : qu'est-ce que le commerce ? Qu'achète-t-on et vend-on au marché ?",
          "Présentation des différentes formes de commerce : marché local, commerce intérieur (entre régions), commerce extérieur (import-export)",
          "Exemples de produits vendus à Madagascar (vanille, café, litchis) et de produits importés",
          "Explication du rôle du commerce dans l'économie du pays",
          "Observation d'une carte simple des échanges commerciaux de Madagascar"
        ],
        "exercices": [
          "Qu'est-ce que le commerce extérieur ? → Corrigé : les échanges de marchandises entre Madagascar et d'autres pays (import-export)",
          "Cite un produit que Madagascar exporte → Corrigé : la vanille (ou le café, les litchis)",
          "Pourquoi le commerce est-il important pour un pays ? → Corrigé : il permet d'échanger des produits et de faire vivre l'économie"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Ireo daty iraisam-pirenena",
        "approche": "Mampianatra ireo daty lehibe iraisam-pirenena mifandray amin'ny fiainam-piarahamonina maneran-tany, mba hahafantaran'ny mpianatra ny fetim-piraisan'ny firenena maro.",
        "transmission": [
          "Fanazavana ny hoe daty iraisam-pirenena : andro voatondro manerantany hankalazana zava-dehibe iray",
          "Fanomezana ohatra: ny 1 Janoary (taom-baovao iraisam-pirenena), ny 8 Martsa (andron'ny vehivavy)",
          "Fanazavana ny anton'ireo daty ireo sy ny fomba ankalazana azy manerana ny tany",
          "Fitanisana am-pokonolona ireo daty iraisam-pirenena hafa fantatry ny mpianatra",
          "Firaketana an-tsoratra ny lisitry ny daty lehibe iraisam-pirenena"
        ],
        "exercices": [
          "Inona no daty ankalazana ny taom-baovao iraisam-pirenena? → Corrigé : ny 1 Janoary",
          "Inona no lanjan'ny daty iraisam-pirenena? → Corrigé : mampiray ny firenena maro manerana ny tany amin'ny fankalazana zavatra iombonana",
          "Tanisao daty iraisam-pirenena iray hafa → Corrigé : ohatra, ny 8 Martsa (andron'ny vehivavy) na ny 1 Mey (andron'ny mpiasa)"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Ny lalàm-panorenana",
        "approche": "Mampianatra ny hoe lalàm-panorenana (Constitution), lalàna fototra manapaka ny fitondrana ny firenena, mba hampahafantatra ny mpianatra ny fototry ny fanjakana.",
        "transmission": [
          "Fanazavana ny hoe lalàm-panorenana : lalàna ambony indrindra manapaka ny fitondrana ny firenena",
          "Fanadihadiana ny votoatiny: ny zo sy ny adidin'ny olom-pirenena, ny fizarana fahefana",
          "Fanomezana ohatra zo voarakitra ao amin'ny lalàm-panorenana: ny zon'ny fianarana, ny zon'ny fifidianana",
          "Fifanakalozan-kevitra: nahoana no ilaina ny lalàm-panorenana ho an'ny firenena iray?",
          "Firaketana an-tsoratra ny votoatin-dresaka"
        ],
        "exercices": [
          "Inona no atao hoe lalàm-panorenana? → Corrigé : lalàna fototra ambony indrindra manapaka ny fitondrana ny firenena",
          "Tanisao zo iray voarakitra ao amin'ny lalàm-panorenana → Corrigé : ohatra, ny zon'ny fianarana",
          "Nahoana no ilaina ny lalàm-panorenana? → Corrigé : mba hampirindra ny fitondrana ny firenena sy hiaro ny zon'ny olom-pirenena"
        ]
      },
      {
        "matiere": "HIRA",
        "topic": "ô! i! ô Ndeha hianatra izahay",
        "approche": "Mampianatra ny hira 'ô! i! ô Ndeha hianatra izahay', mifantoka amin'ny famerenana ny tononkira sy ny lantom-peo.",
        "transmission": [
          "Fampihirana ny mpampianatra ny hira 'ô! i! ô Ndeha hianatra izahay' indray mandeha manontolo",
          "Famerenana andalana isaky ny fehezana kely",
          "Fihirana miaraka amin'ny kilasy manontolo",
          "Fanoratana ny tononkira ao amin'ny kahie hira",
          "Fanamarihana ny hevitry ny hira: ny zotom-po hianatra"
        ],
        "exercices": [
          "Mihira ny fehezana voalohan'ny 'ô! i! ô Ndeha hianatra izahay' → Corrigé : fihirana marina araka ny tononkira sy ny feo",
          "Inona no hevitry ny hira, araka ny hitanao? → Corrigé : famintinana tsotra momba ny zotom-po hianatra"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Révision — la phrase simple (fehezanteny) et la proposition (fehezankevitra)",
        "approche": "Réviser en vue des examens du 2ème trimestre les notions de septembre-octobre : la phrase simple (marque, fonction, structure TD-MVD) et la proposition dans la phrase.",
        "transmission": [
          "Rappel collectif : qu'est-ce qu'une phrase simple ? Quelles sont ses marques (majuscule, point) ?",
          "Révision de la structure TD-MVD (Mpisolo tena - Verba - Delisita)",
          "Rappel de la notion de proposition (fehezankevitra) : un ensemble sujet + verbe",
          "Exercices écrits : identifier le sujet, le verbe et le complément dans des phrases données",
          "Exercices : compter le nombre de propositions dans une phrase composée",
          "Correction collective et rappel des erreurs fréquentes"
        ],
        "exercices": [
          "Souligne le sujet et entoure le verbe : 'Ny mpianatra dia mianatra tsara.' → Corrigé : sujet = Ny mpianatra, verbe = mianatra",
          "Combien de propositions dans : 'Mianatra ny mpianatra ary mihira ny mpampianatra.' ? → Corrigé : 2 (mianatra ny mpianatra / mihira ny mpampianatra)",
          "Écris une phrase simple respectant la structure TD-MVD → Corrigé : réponse personnelle correcte (ex : 'Izy mamaky boky.')"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Révision — l'orthographe des sons et la ponctuation de base",
        "approche": "Réviser en vue des examens du 2ème trimestre les notions de septembre : l'orthographe des voyelles/consonnes des mots courants et la ponctuation de base (teboka, faingo, marim-panontaniana).",
        "transmission": [
          "Rappel collectif des voyelles et consonnes malgaches et de leur usage dans des mots courants",
          "Dictée courte de révision de mots déjà vus depuis septembre",
          "Rappel des marques de ponctuation : teboka (point), faingo (virgule), marim-panontaniana (point d'interrogation)",
          "Exercices écrits : ponctuer correctement des phrases non ponctuées",
          "Correction collective et relevé des erreurs fréquentes"
        ],
        "exercices": [
          "Écris sous la dictée : 'sekoly', 'tanàna' → Corrigé : orthographe correcte des 2 mots",
          "Ponctue correctement : 'Manao ahoana ianao' → Corrigé : 'Manao ahoana ianao ?'",
          "Ajoute la ponctuation manquante : 'Andao ry namako isika hilalao' → Corrigé : 'Andao, ry namako, isika hilalao.'"
        ]
      }
    ]
  },
  {
    "n": 2,
    "dateDebut": "2026/02/09",
    "theme": "Le capital, la distance parcourue et la démocratie",
    "sous": "Calcul du capital · Le fruit et la graine · Les problèmes de la pauvreté · Approfondissement des dates internationales · La démocratie",
    "matieres": [
      {
        "matiere": "CALCUL",
        "topic": "- Placement d'argent : calcul du capital\n- Mouvement uniforme : calcul de la distance\n- Les surfaces décomposable en rectangle et en carré",
        "approche": "Poursuivre l'étude du placement d'argent en calculant le capital connaissant l'intérêt et le taux, calculer la distance parcourue en mouvement uniforme, et calculer l'aire de surfaces composées de rectangles et de carrés.",
        "transmission": [
          "Rappel de la formule de l'intérêt vue en semaine 1 et transformation pour isoler le capital : C = (I × 100) / Taux",
          "Exercices d'application de calcul de capital",
          "Rappel de la formule de la vitesse et transformation pour isoler la distance : D = Vitesse × Durée",
          "Exercices d'application de calcul de distance parcourue",
          "Présentation de surfaces composées (forme en L, en T) décomposables en rectangles et carrés",
          "Exercices de calcul d'aire par décomposition en figures simples"
        ],
        "exercices": [
          "Un placement rapporte un intérêt annuel de 24 000 Ar à un taux de 8%. Calcule le capital → Corrigé : C = (24 000 × 100) / 8 = 300 000 Ar",
          "Une voiture roule à 80 km/h pendant 2 heures 30. Calcule la distance parcourue → Corrigé : 80 × 2,5 = 200 km",
          "Calcule l'aire d'une surface en L formée d'un rectangle de 6 m × 4 m et d'un carré de 3 m × 3 m → Corrigé : 24 + 9 = 33 m²"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "- Le fruit\n- La graine",
        "approche": "Étudier la formation du fruit à partir de la fleur, sa structure, et le rôle de la graine dans la reproduction de la plante.",
        "transmission": [
          "Rappel de la fleur étudiée la semaine précédente et de son rôle dans la reproduction",
          "Explication de la transformation de la fleur en fruit après la fécondation",
          "Observation d'un fruit réel (ex : mangue, orange) : peau, chair, graine(s)",
          "Explication du rôle de la graine : elle contient un embryon capable de donner une nouvelle plante",
          "Copie et légende d'un schéma du fruit et de la graine dans le cahier"
        ],
        "exercices": [
          "Comment se forme le fruit ? → Corrigé : il se forme à partir de la fleur après la fécondation",
          "Nomme les 3 parties d'un fruit → Corrigé : la peau, la chair, la graine",
          "À quoi sert la graine ? → Corrigé : elle permet de donner naissance à une nouvelle plante"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "Les problèmes de la pauvreté",
        "approche": "Étudier les causes et les conséquences de la pauvreté à Madagascar, ainsi que quelques pistes pour la réduire.",
        "transmission": [
          "Discussion collective : qu'est-ce que la pauvreté ? Quels en sont les signes visibles ?",
          "Présentation des causes de la pauvreté à Madagascar : manque d'emploi, faible accès à l'éducation et à la santé, catastrophes naturelles",
          "Présentation des conséquences : malnutrition, exode rural, déscolarisation",
          "Discussion sur des pistes de réduction : éducation, agriculture, développement économique",
          "Synthèse collective au tableau"
        ],
        "exercices": [
          "Cite une cause de la pauvreté à Madagascar → Corrigé : le manque d'emploi (ou le faible accès à l'éducation/santé)",
          "Cite une conséquence de la pauvreté → Corrigé : la malnutrition (ou l'exode rural, la déscolarisation)",
          "Quelle solution peut aider à réduire la pauvreté ? → Corrigé : l'éducation (ou le développement de l'agriculture)"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Ireo daty iraisam-pirenena (fanamafisana)",
        "approche": "Manohy sy manamafy ny lesona momba ireo daty iraisam-pirenena natomboka tamin'ny herinandro 1, amin'ny alalan'ny fampiharana bebe kokoa sy famintinana.",
        "transmission": [
          "Famerenana fohy ny lesona momba ny daty iraisam-pirenena natao tamin'ny herinandro voalohany",
          "Fanampiana ohatra daty iraisam-pirenena hafa: ny 1 Mey (andron'ny mpiasa), ny 20 Novambra (andron'ny zon'ny ankizy)",
          "Fampiharana: fikambanana amin'ny daty sy ny anarany avy amin'ny lisitra nomena",
          "Famintinana am-pokonolona ny daty iraisam-pirenena rehetra hita nianarana",
          "Firaketana an-tsoratra ny famintinana"
        ],
        "exercices": [
          "Ampifandraiso ny daty sy ny anarany: 1 Mey → Corrigé : Andron'ny mpiasa iraisam-pirenena",
          "Nahoana no misy daty iraisam-pirenena maro samihafa? → Corrigé : mba hampahatsiahy ny olona manerana ny tany momba ny lohahevitra iombonana isan-karazany",
          "Tanisao daty iraisam-pirenena telo efa nianaranao → Corrigé : ohatra, 1 Janoary, 8 Martsa, 1 Mey (valiny mety samihafa)"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Ny demokarasia",
        "approche": "Mampianatra ny hoe demokarasia (fitondrana ny vahoaka, ho an'ny vahoaka, ataon'ny vahoaka), mba hampahafantatra ny mpianatra ny fototry ny fitondrana demokratika.",
        "transmission": [
          "Fanazavana ny hoe demokarasia : fitondrana izay ny vahoaka no manapa-kevitra amin'ny alalan'ny fifidianana",
          "Fanadihadiana ny mari-pahamarinan'ny demokarasia: fifidianana malalaka, fahalalahana miteny, fanajana ny zo",
          "Fanomezana ohatra: ny fifidianana filoham-pirenena, ny fifidianana solombavambahoaka",
          "Fifanakalozan-kevitra : nahoana no ilaina ny demokarasia ho an'ny firenena?",
          "Firaketana an-tsoratra ny votoatin-dresaka"
        ],
        "exercices": [
          "Inona no atao hoe demokarasia? → Corrigé : fitondrana izay ny vahoaka no manapa-kevitra amin'ny alalan'ny fifidianana",
          "Tanisao ohatra iray maneho ny demokarasia → Corrigé : ny fifidianana filoham-pirenena",
          "Nahoana no ilaina ny demokarasia? → Corrigé : mba hanome fahafahana ny vahoaka hisafidy ny mpitondra azy sy hiaro ny zony"
        ]
      },
      {
        "matiere": "HIRA",
        "topic": "ô! i! ô Ndeha hianatra izahay (fanamafisana)",
        "approche": "Manamafy sy manatsara ny fahaizana mihira ny hira 'ô! i! ô Ndeha hianatra izahay' nianarana tamin'ny herinandro voalohany.",
        "transmission": [
          "Famerenana manontolo ny hira efa nianarana tamin'ny herinandro voalohany",
          "Fizarana ny kilasy ho vondrona roa, samy mihira mifandimby",
          "Fanitsiana ny feo tsy marina sy ny tononkira diso",
          "Fanaovana fihirana tokana ho an'ireo mahay",
          "Fanamafisana ny hevitry ny tononkira"
        ],
        "exercices": [
          "Mihira manontolo ny 'ô! i! ô Ndeha hianatra izahay' → Corrigé : fihirana marina, feno andalana rehetra",
          "Inona no hevitry ny hira, araka ny fanamarihana natao? → Corrigé : famintinana araka ny tononkira nianarana"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Révision — les catégories de mots et l'épithète (EM)",
        "approche": "Réviser en vue des examens du 2ème trimestre les notions d'octobre : les catégories de mots (sokajinteny) et l'épithète (EM) dans la phrase.",
        "transmission": [
          "Rappel collectif des catégories de mots vues en octobre : nom, verbe, adjectif, pronom",
          "Rappel de la notion d'épithète (EM) : mot qui qualifie le nom",
          "Exercices écrits : classer des mots donnés par catégorie",
          "Exercices écrits : repérer l'épithète dans des phrases données",
          "Correction collective et rappel des erreurs fréquentes"
        ],
        "exercices": [
          "Classe ces mots par catégorie : 'mianatra, mpianatra, tsara' → Corrigé : mianatra (matoanteny/verbe), mpianatra (anarana/nom), tsara (mpamaritra/adjectif)",
          "Souligne l'épithète : 'Ny mpianatra mazoto dia mianatra tsara.' → Corrigé : mazoto",
          "Écris une phrase contenant un nom et son épithète → Corrigé : réponse personnelle correcte (ex : 'Ny trano lehibe dia tsara tarehy.')"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Révision — l'orthographe des sons et la ponctuation avancée",
        "approche": "Réviser en vue des examens du 2ème trimestre les notions d'octobre : liaisons orthographiques simples et usage combiné de la ponctuation dans des phrases plus longues.",
        "transmission": [
          "Rappel collectif des liaisons orthographiques déjà vues (apostrophe, tiret)",
          "Dictée courte de révision de mots et de courtes phrases déjà vues depuis octobre",
          "Rappel des marques de ponctuation combinées (point, virgule, point d'interrogation) dans une même phrase",
          "Exercices écrits : ponctuer correctement des phrases longues avec plusieurs marques",
          "Correction collective et relevé des erreurs fréquentes"
        ],
        "exercices": [
          "Écris sous la dictée : 'Ry tanindrazanay malala' → Corrigé : orthographe correcte de la phrase",
          "Ponctue correctement : 'Iza no ao an-trano Rakoto sa Rasoa' → Corrigé : 'Iza no ao an-trano, Rakoto sa Rasoa ?'",
          "Corrige la ponctuation de : 'Andao isika hianatra fa efa tara' → Corrigé : 'Andao isika hianatra, fa efa tara.'"
        ]
      }
    ]
  },
  {
    "n": 3,
    "dateDebut": "2026/02/16",
    "theme": "La durée du placement, le sol et les droits de l'enfant",
    "sous": "Calcul de la durée et du taux · Le sol et les états de la matière · Madagascar dans l'océan Indien · Approfondissement des dates internationales · Les droits de l'enfant",
    "matieres": [
      {
        "matiere": "CALCUL",
        "topic": "- Placement d'argent : calcul de la durée et du taux\n- Mouvement uniforme : calcul de la durée\n- Découpage - carrelage - rangement",
        "approche": "Achever l'étude du placement d'argent en calculant la durée et le taux, calculer la durée d'un mouvement uniforme, et aborder les problèmes concrets de découpage, carrelage et rangement.",
        "transmission": [
          "Rappel des formules de l'intérêt et du capital vues en semaines 1 et 2, transformation pour isoler la durée : Durée = (I × 100) / (Capital × Taux)",
          "Exercices d'application de calcul de durée et de taux de placement",
          "Rappel de la formule de la vitesse, transformation pour isoler la durée : Durée = Distance / Vitesse",
          "Exercices d'application de calcul de durée de trajet",
          "Présentation de problèmes concrets de découpage (couper une surface en carreaux égaux) et de carrelage (nombre de carreaux nécessaires pour couvrir une surface)",
          "Exercices d'application de découpage, carrelage et rangement d'objets"
        ],
        "exercices": [
          "Un capital de 200 000 Ar placé à 5% par an rapporte un intérêt de 10 000 Ar. Calcule la durée du placement → Corrigé : Durée = (10 000 × 100) / (200 000 × 5) = 1 an",
          "Un piéton parcourt 15 km à une vitesse de 5 km/h. Calcule la durée du trajet → Corrigé : 15 / 5 = 3 heures",
          "Combien de carreaux de 20 cm × 20 cm faut-il pour carreler une pièce de 4 m × 5 m ? → Corrigé : surface = 20 m² = 200 000 cm² ; un carreau = 400 cm² ; 200 000 / 400 = 500 carreaux"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "- Le sol\n- Les corps solides / liquides / gazeux",
        "approche": "Étudier la composition du sol et les trois états de la matière (solide, liquide, gazeux) à travers des exemples de la vie courante.",
        "transmission": [
          "Observation d'un échantillon de sol : terre, cailloux, débris de végétaux",
          "Explication de la composition du sol et de son rôle pour les plantes",
          "Présentation des trois états de la matière : solide, liquide, gazeux, avec des exemples (pierre, eau, air)",
          "Manipulation simple : observer l'eau sous forme liquide, glace (solide) et vapeur (gazeux)",
          "Copie d'un tableau récapitulatif des 3 états de la matière avec exemples"
        ],
        "exercices": [
          "De quoi est composé le sol ? → Corrigé : de terre, de cailloux et de débris de végétaux (matière organique)",
          "Donne un exemple de corps solide, un liquide et un gazeux → Corrigé : solide = pierre, liquide = eau, gazeux = air",
          "Sous quelle forme se trouve l'eau quand elle gèle ? → Corrigé : sous forme solide (glace)"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "Madagascar dans l'océan Indien",
        "approche": "Situer précisément Madagascar dans l'océan Indien par rapport aux pays et îles voisins (Afrique, Comores, Maurice, Réunion, Seychelles).",
        "transmission": [
          "Observation d'une carte de l'océan Indien centrée sur Madagascar",
          "Repérage des pays et îles voisins : le continent africain à l'ouest, les Comores au nord-ouest, Maurice, la Réunion et les Seychelles à l'est",
          "Explication de la position stratégique de Madagascar sur les routes maritimes de l'océan Indien",
          "Description des distances approximatives entre Madagascar et ses voisins",
          "Copie de la carte de l'océan Indien avec Madagascar et ses voisins dans le cahier"
        ],
        "exercices": [
          "Cite 2 îles voisines de Madagascar dans l'océan Indien → Corrigé : Maurice, la Réunion (ou les Comores, les Seychelles)",
          "Quel continent se trouve à l'ouest de Madagascar ? → Corrigé : l'Afrique",
          "Dans quel océan se situe Madagascar ? → Corrigé : l'océan Indien"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Ireo daty iraisam-pirenena (famintinana)",
        "approche": "Mamintina ny lesona momba ny daty iraisam-pirenena natomboka tamin'ny herinandro 1 sy 2, amin'ny alalan'ny fanadihadiana lalindalina kokoa ny lanjan'ireo daty ho an'i Madagasikara.",
        "transmission": [
          "Famerenana ny lisitry ny daty iraisam-pirenena rehetra efa hita nianarana",
          "Fanadihadiana lalindalina kokoa: ahoana no ankalazan'i Madagasikara ireo daty ireo?",
          "Fanomezana ohatra sasany momba ny fankalazana eto Madagasikara: ny 8 Martsa any amin'ny sekoly na ny fiaraha-monina",
          "Fifanakalozan-kevitra: inona no daty iraisam-pirenena tena manan-danja ho an'ny mpianatra?",
          "Firaketana an-tsoratra ny famintinana farany"
        ],
        "exercices": [
          "Ahoana no fankalazan'i Madagasikara ny 8 Martsa? → Corrigé : ohatra, fanaovana hetsika mifantoka amin'ny vehivavy, fanomezam-boninahitra (valiny mety samihafa)",
          "Nahoana no ilaina ny daty iraisam-pirenena ho an'ny mpianatra? → Corrigé : mba hampahafantatra ny lohahevitra iombonana maneran-tany sy hampiray ny firenena",
          "Tanisao daty iraisam-pirenena efatra efa nianaranao nandritra ity volana ity → Corrigé : ohatra, 1 Janoary, 8 Martsa, 1 Mey, 20 Novambra (valiny mety samihafa)"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Ny zon'ny ankizy",
        "approche": "Mampianatra ny zon'ny ankizy (zo hianatra, zo hikarakarana, zo hilalao, zo harovana), mba hampahafantatra ny mpianatra ny zony manokana ho olom-boafidy.",
        "transmission": [
          "Fanazavana ny hoe zon'ny ankizy : ireo zavatra tokony hananan'ny ankizy rehetra manerana ny tany",
          "Fitanisana ireo zo fototra: zo hianatra, zo hikarakarana ny fahasalamana, zo hilalao, zo harovana amin'ny herisetra",
          "Fanomezana ohatra: rehefa tsy manana ny zony ny ankizy, inona no vokany?",
          "Fifanakalozan-kevitra : iza no tompon'andraikitra amin'ny fiarovana ny zon'ny ankizy?",
          "Firaketana an-tsoratra ny votoatin-dresaka"
        ],
        "exercices": [
          "Tanisao zo iray ananan'ny ankizy rehetra → Corrigé : ohatra, ny zo hianatra",
          "Iza no tompon'andraikitra amin'ny fiarovana ny zon'ny ankizy? → Corrigé : ny ray aman-dreny, ny fanjakana ary ny fiaraha-monina",
          "Inona no mety ho vokany raha tsy voahaja ny zon'ny ankizy hianatra? → Corrigé : tsy hahazo fahalalana izy sy ho sarotra ny hoaviny"
        ]
      },
      {
        "matiere": "HIRA",
        "topic": "ô! Ralila! p s p 127",
        "approche": "Mampianatra ny hira vaovao 'ô! Ralila!' (p s p 127), mifantoka amin'ny fampidirana ny tononkira sy ny lantom-peo voalohany.",
        "transmission": [
          "Fampihirana ny mpampianatra ny hira 'ô! Ralila!' indray mandeha manontolo, mba hahafantaran'ny mpianatra ny lantom-peo",
          "Famerenana andalana isaky ny fehezana kely",
          "Fihirana miaraka amin'ny kilasy manontolo",
          "Fanoratana ny tononkira ao amin'ny kahie hira",
          "Fanamarihana fohy ny hevitry ny hira"
        ],
        "exercices": [
          "Mihira ny fehezana voalohan'ny 'ô! Ralila!' → Corrigé : fihirana marina araka ny tononkira sy ny feo nampianarina",
          "Soraty ny andalana voalohan'ny hira 'ô! Ralila!' → Corrigé : araka ny tononkira nampianarina"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Révision — le complément et le morphème (tsirinteny)",
        "approche": "Réviser en vue des examens du 2ème trimestre les notions de novembre : les types de compléments dans la phrase et la notion de morphème (tsirinteny).",
        "transmission": [
          "Rappel collectif de la notion de complément et de ses différents types (complément d'objet, complément de lieu, complément de temps)",
          "Exercices écrits : identifier le type de complément dans des phrases données",
          "Rappel de la notion de morphème (tsirinteny) : le plus petit élément porteur de sens dans un mot",
          "Exercices écrits : décomposer des mots simples en racine + morphème",
          "Correction collective et rappel des erreurs fréquentes"
        ],
        "exercices": [
          "Identifie le type de complément : 'Mianatra any an-tsekoly ny mpianatra.' → Corrigé : any an-tsekoly = complément de lieu",
          "Décompose le mot 'mpianatra' en racine et morphème → Corrigé : racine = ianatra (mianatra), morphème mp- = préfixe désignant la personne",
          "Écris une phrase avec un complément de temps → Corrigé : réponse personnelle correcte (ex : 'Mianatra isan-maraina ny mpianatra.')"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Révision — les liaisons orthographiques (-ka/-tra/-na, apostrophe, tiret)",
        "approche": "Réviser en vue des examens du 2ème trimestre les notions de novembre : les liaisons orthographiques avec -ka/-tra/-na et l'usage de l'apostrophe et du tiret.",
        "transmission": [
          "Rappel collectif des règles de liaison orthographique : chute du -ka/-tra/-na devant certains mots",
          "Dictée courte de révision de mots et d'expressions déjà vues depuis novembre",
          "Rappel de l'usage de l'apostrophe et du tiret dans les liaisons",
          "Exercices écrits : appliquer correctement les liaisons dans des phrases données",
          "Correction collective et relevé des erreurs fréquentes"
        ],
        "exercices": [
          "Applique la liaison correcte : 'tsara' + 'tarehy' → Corrigé : 'tsara tarehy' (pas de changement, exemple simple de vérification)",
          "Écris sous la dictée avec la liaison correcte : 'Tsy mahay mihira' → Corrigé : orthographe correcte de la phrase avec liaison respectée",
          "Corrige la liaison manquante : 'ny zanako' → Corrigé : 'ny zanak'i Rakoto' (exemple d'apostrophe devant un nom propre)"
        ]
      }
    ]
  },
  {
    "n": 4,
    "dateDebut": "2026/02/23",
    "theme": "Synthèse du placement d'argent, l'air et les 23 régions",
    "sous": "Approfondissement placement d'argent et mouvement uniforme · L'air (oxygène et gaz carbonique) · Les 23 régions · Synthèse des dates internationales · L'impôt",
    "matieres": [
      {
        "matiere": "CALCUL",
        "topic": "---II--- (synthèse : placement d'argent et mouvement uniforme)",
        "approche": "Consolider les 3 semaines consacrées au placement d'argent (intérêt, capital, durée/taux) et au mouvement uniforme (vitesse, distance, durée) par des exercices de synthèse combinant les différentes formules.",
        "transmission": [
          "Rappel collectif des 3 formules du placement d'argent : intérêt, capital, durée/taux",
          "Rappel collectif des 3 formules du mouvement uniforme : vitesse, distance, durée",
          "Résolution guidée d'un problème de synthèse combinant plusieurs calculs de placement d'argent",
          "Résolution guidée d'un problème de synthèse combinant plusieurs calculs de mouvement uniforme",
          "Exercices individuels de synthèse sur les deux notions",
          "Correction collective détaillée au tableau"
        ],
        "exercices": [
          "Un capital de 400 000 Ar est placé à 4% par an pendant 3 ans. Calcule l'intérêt total → Corrigé : I = (400 000 × 4 × 3) / 100 = 48 000 Ar",
          "Un camion roule à 60 km/h pendant 1h30 puis à 40 km/h pendant 1h. Calcule la distance totale parcourue → Corrigé : (60 × 1,5) + (40 × 1) = 90 + 40 = 130 km",
          "Un capital placé à 6% par an pendant 2 ans rapporte 36 000 Ar d'intérêt. Calcule le capital de départ → Corrigé : C = (36 000 × 100) / (6 × 2) = 300 000 Ar"
        ]
      },
      {
        "matiere": "CONNAISSANCES USUELLES",
        "topic": "L'air : L'oxygène et le gaz carbonique",
        "approche": "Étudier la composition de l'air, en particulier l'oxygène (nécessaire à la respiration) et le gaz carbonique (rejeté par la respiration et utilisé par les plantes).",
        "transmission": [
          "Discussion collective : de quoi est composé l'air que nous respirons ?",
          "Présentation des deux principaux gaz étudiés : l'oxygène (nécessaire à la respiration des êtres vivants) et le gaz carbonique",
          "Explication du cycle simple : les êtres vivants absorbent l'oxygène et rejettent le gaz carbonique en respirant",
          "Lien avec les plantes vues précédemment : elles absorbent le gaz carbonique et rejettent de l'oxygène",
          "Copie d'un schéma simple du cycle oxygène/gaz carbonique dans le cahier"
        ],
        "exercices": [
          "Quel gaz de l'air est nécessaire à la respiration ? → Corrigé : l'oxygène",
          "Que rejette une personne quand elle respire ? → Corrigé : du gaz carbonique",
          "Quel gaz les plantes absorbent-elles pour vivre ? → Corrigé : le gaz carbonique"
        ]
      },
      {
        "matiere": "GÉOGRAPHIE",
        "topic": "Les 23 régions",
        "approche": "Présenter le découpage administratif de Madagascar en 23 régions et situer quelques-unes des principales régions sur la carte.",
        "transmission": [
          "Présentation du découpage administratif de Madagascar : 23 régions regroupées en anciennes provinces",
          "Observation d'une carte des 23 régions de Madagascar",
          "Localisation de quelques régions principales : Analamanga (Antananarivo), Atsinanana (Toamasina), Boeny (Mahajanga), Atsimo-Andrefana (Toliara)",
          "Explication du rôle d'une région dans l'organisation administrative du pays",
          "Copie de la carte des 23 régions dans le cahier, avec quelques régions légendées"
        ],
        "exercices": [
          "Combien de régions compte Madagascar ? → Corrigé : 23 régions",
          "Dans quelle région se trouve Antananarivo ? → Corrigé : la région Analamanga",
          "À quoi sert le découpage en régions ? → Corrigé : à organiser l'administration et le développement du pays de façon plus locale"
        ]
      },
      {
        "matiere": "TANTARA",
        "topic": "Ireo daty iraisam-pirenena (famaranana sy famintinana farany)",
        "approche": "Mamarana ny lesona momba ny daty iraisam-pirenena, amin'ny alalan'ny famintinana farany manangona ny votoatin-dresaka rehetra natao nandritra ny volana, ho fanomanana ny fanadinana.",
        "transmission": [
          "Famerenana feno ny lisitry ny daty iraisam-pirenena rehetra hita nianarana nandritra ny volana",
          "Fanaovana takelaka famintinana misy ny daty, ny anarany, ary ny anton'ny fankalazana azy",
          "Fampiharana farany: fanoratana an-tsoratra ny daty telo mahalaza indrindra araka ny mpianatra",
          "Fanamarihana fa ho ampiasaina amin'ny fanadinana ny lohahevitra momba ny daty iraisam-pirenena",
          "Firaketana an-tsoratra ny fehin-kevitra farany"
        ],
        "exercices": [
          "Ataovy takelaka fohy manangona daty iraisam-pirenena telo efa nianaranao mbamin'ny anton'izy ireo → Corrigé : takelaka feno araka ny lesona natao (ohatra: 1 Janoary - taom-baovao, 8 Martsa - vehivavy, 1 Mey - mpiasa)",
          "Inona no daty iraisam-pirenena tianao indrindra ary nahoana? → Corrigé : valiny manokana voamarina, mifototra amin'ny lesona natao",
          "Ahoana no ampiharana ny daty iraisam-pirenena eo amin'ny fiainanao andavanandro? → Corrigé : ohatra, fandraisana anjara amin'ny hetsika ankalazana azy any an-tsekoly na an-tanàna"
        ]
      },
      {
        "matiere": "FFMOM",
        "topic": "Ny hetra",
        "approche": "Mampianatra ny hoe hetra (impôt), vola aloan'ny olom-pirenena ho an'ny fanjakana, mba hampahafantatra ny mpianatra ny anjara birikin'ny olom-pirenena tsirairay amin'ny fampandrosoana ny firenena.",
        "transmission": [
          "Fanazavana ny hoe hetra : vola aloan'ny olom-pirenena sy ny orinasa ho an'ny fanjakana",
          "Fanadihadiana ny fampiasana ny vola azo avy amin'ny hetra: fanorenana sekoly, hopitaly, làlana",
          "Fanomezana ohatra hetra fantatra: hetra amin'ny fividianana entana, hetra amin'ny vola miditra",
          "Fifanakalozan-kevitra : nahoana no tsy maintsy mandoa hetra ny olom-pirenena?",
          "Firaketana an-tsoratra ny votoatin-dresaka"
        ],
        "exercices": [
          "Inona no atao hoe hetra? → Corrigé : vola aloan'ny olom-pirenena sy ny orinasa ho an'ny fanjakana",
          "Tanisao fampiasana iray amin'ny vola azo avy amin'ny hetra → Corrigé : ohatra, fanorenana sekoly na làlana",
          "Nahoana no ilaina ny hetra ho an'ny firenena? → Corrigé : mba hahafahan'ny fanjakana manefa ny fandaniana ho an'ny fampandrosoana"
        ]
      },
      {
        "matiere": "HIRA",
        "topic": "---II--- (fanamafisana : ô! Ralila!)",
        "approche": "Manohy sy manamafy ny fahaizana mihira ny hira 'ô! Ralila!' nampidirina tamin'ny herinandro faha-3, hatramin'ny fahaizan'ny mpianatra rehetra mihira azy manontolo.",
        "transmission": [
          "Famerenana manontolo ny hira 'ô! Ralila!' efa nampidirina tamin'ny herinandro teo aloha",
          "Fizarana ny kilasy ho vondrona roa, samy mihira mifandimby ny fehezana isaky ny vondrona",
          "Fanitsiana ny feo tsy marina sy ny tononkira diso",
          "Fanaovana fihirana tokana ho an'ireo mahay indrindra",
          "Fanamafisana farany ny hevitry ny tononkira sy fandraisana anjara amin'ny fihirana am-pokonolona"
        ],
        "exercices": [
          "Mihira manontolo ny 'ô! Ralila!' → Corrigé : fihirana marina, feno andalana rehetra, araka ny lantom-peo nampianarina",
          "Inona no hevitry ny hira 'ô! Ralila!', araka ny fanamarihana natao? → Corrigé : famintinana araka ny tononkira nianarana"
        ]
      },
      {
        "matiere": "FITSIPIKA",
        "topic": "Révision — le verbe, la racine et l'expression du futur",
        "approche": "Réviser en vue des examens du 2ème trimestre les notions de décembre-janvier : la distinction verbe/non-verbe, la racine et la famille de mots, et l'expression du futur (filazam-potoana).",
        "transmission": [
          "Rappel collectif de la distinction entre verbe et non-verbe dans une phrase",
          "Rappel de la notion de racine et de famille de mots (mots dérivés d'une même racine)",
          "Rappel des formes de l'expression du futur pour les verbes-racines et les pronoms",
          "Exercices écrits : mettre des phrases données au futur",
          "Exercices écrits : identifier verbe/non-verbe et retrouver la racine d'un mot dérivé",
          "Correction collective générale, en préparation directe des examens du 2ème trimestre"
        ],
        "exercices": [
          "Identifie le verbe et le non-verbe : 'Mianatra tsara ny mpianatra mazoto.' → Corrigé : verbe = mianatra, non-verbes = tsara, ny mpianatra, mazoto",
          "Retrouve la racine du mot 'mpianatra' → Corrigé : racine = ianatra (mianatra)",
          "Mets au futur : 'Mianatra ny mpianatra.' → Corrigé : 'Hianatra ny mpianatra.'"
        ]
      },
      {
        "matiere": "TSIPELINA",
        "topic": "Révision — les particules du futur (te, ta, tokony, aoka, ndeha)",
        "approche": "Réviser en vue des examens du 2ème trimestre les notions de décembre-janvier : l'orthographe et l'emploi des particules 'te, ta, tokony, aoka, ndeha' liées à l'expression du futur.",
        "transmission": [
          "Rappel collectif du sens et de l'usage de chaque particule : te/ta (souhait), tokony (obligation), aoka (permission/souhait), ndeha (invitation)",
          "Dictée courte de révision de phrases utilisant ces particules, déjà vues en décembre-janvier",
          "Exercices écrits : compléter des phrases avec la particule correcte selon le contexte",
          "Exercices écrits : corriger l'orthographe de phrases contenant ces particules mal écrites",
          "Correction collective générale, en préparation directe des examens du 2ème trimestre"
        ],
        "exercices": [
          "Complète avec la particule correcte : '___ mianatra tsara ianao.' (obligation) → Corrigé : 'Tokony hianatra tsara ianao.'",
          "Écris sous la dictée : 'Ndeha isika hilalao.' → Corrigé : orthographe correcte de la phrase",
          "Corrige : 'Te hianatra aho' si nécessaire → Corrigé : 'Te hianatra aho.' (déjà correct — vérifier l'espace et l'apostrophe absente)"
        ]
      }
    ]
  }
];

// ── 7ème Mars : l'Excel source s'arrête ici (2 matières sur 8 seulement,
// 2 semaines sur 4 — les 2 dernières colonnes sont vides "-" dans l'Excel).
// Décision utilisateur : reconstruire fidèlement ce qui existe et s'arrêter là.
const MARS_7EME = [
  {
    n: 1, dateDebut: "2026/03/02",
    theme: "Le magnétisme et la province d'Antananarivo",
    sous: "Le métal, l'aimant, la boussole · La province d'Antananarivo",
    matieres: [
      m("CONNAISSANCES USUELLES","- Le métal\n- L'aimant\n- La boussole",
        "Étudier les propriétés du métal, en particulier ses propriétés magnétiques à travers l'aimant, et découvrir le fonctionnement de la boussole comme instrument d'orientation.",
        ["Observation d'objets métalliques de la classe (clou, trombone, règle en fer)","Présentation de l'aimant : propriété d'attirer certains métaux (fer, acier)","Expérience : tester avec un aimant quels objets de la classe sont attirés","Présentation de la boussole : aiguille aimantée qui indique toujours le nord","Manipulation d'une boussole pour retrouver le nord de la salle de classe"],
        ["Cite 2 objets métalliques attirés par un aimant → Corrigé : ex. un clou, un trombone (métaux ferreux)","Que fait l'aiguille d'une boussole ? → Corrigé : elle indique toujours le nord","Un objet en plastique est-il attiré par un aimant ? → Corrigé : non, le plastique n'est pas magnétique"]),
      m("GÉOGRAPHIE","La province d'Antananarivo",
        "Présenter la province d'Antananarivo : sa position au centre du pays, ses limites, ses grandes caractéristiques, en clôture de l'étude des régions de Madagascar.",
        ["Rappel des 23 régions étudiées en février, situer la province d'Antananarivo sur la carte","Présentation de la position de la province : au centre des hauts plateaux","Présentation du climat et du relief de la province","Identification des principales villes de la province (Antananarivo, Antsirabe...)","Copie de la carte de la province dans le cahier"],
        ["Où se situe la province d'Antananarivo par rapport à Madagascar ? → Corrigé : au centre, sur les hauts plateaux","Cite une ville importante de la province d'Antananarivo → Corrigé : Antananarivo ou Antsirabe","Quel type de relief domine dans cette province ? → Corrigé : les hauts plateaux"]),
    ]
  },
  {
    n: 2, dateDebut: "2026/03/09",
    theme: "L'électricité, la pollution et la province d'Antananarivo (suite)",
    sous: "La pile, l'environnement et la pollution · La province d'Antananarivo (approfondissement)",
    matieres: [
      m("CONNAISSANCES USUELLES","- La pile\n- L'environnement et la pollution",
        "Découvrir le fonctionnement simple de la pile électrique comme source d'énergie, puis sensibiliser les élèves à la protection de l'environnement contre la pollution.",
        ["Observation d'une pile électrique, ses deux bornes (+ et -)","Expérience simple : allumer une petite ampoule avec une pile","Explication : la pile est une source d'énergie électrique","Présentation de la pollution : de l'air, de l'eau, du sol","Discussion : que peut-on faire pour protéger l'environnement à l'école ?"],
        ["À quoi sert une pile électrique ? → Corrigé : elle fournit de l'énergie électrique pour allumer un appareil","Cite un type de pollution → Corrigé : la pollution de l'air, de l'eau ou du sol","Cite un geste pour protéger l'environnement → Corrigé : ex. ne pas jeter les déchets par terre, trier les ordures"]),
      m("GÉOGRAPHIE","La province d'Antananarivo",
        "Approfondir l'étude de la province d'Antananarivo : ses ressources économiques (agriculture, artisanat) et ses spécificités, en poursuite de la semaine précédente.",
        ["Rappel de la position et des villes de la province vues la semaine précédente","Présentation des activités économiques : riziculture, élevage, artisanat (broderie, vannerie)","Présentation de quelques sites remarquables de la province","Discussion collective : qu'est-ce qui rend cette province particulière ?","Synthèse écrite dans le cahier de géographie"],
        ["Cite une activité économique importante de la province d'Antananarivo → Corrigé : la riziculture (ou l'élevage, l'artisanat)","Cite un site remarquable de la province → Corrigé : réponse acceptée selon connaissance locale (ex. le Rova, le lac Anosy)","Résume en une phrase ce que tu as appris sur la province d'Antananarivo → Corrigé : synthèse cohérente et fidèle au contenu étudié"]),
    ]
  },
];

const MOIS_7EME = [
  { mois: 'Octobre',  data: OCTOBRE_7EME },
  { mois: 'Novembre', data: NOVEMBRE_7EME },
  { mois: 'Décembre', data: DECEMBRE_7EME },
  { mois: 'Janvier',  data: JANVIER_7EME },
  { mois: 'Février',  data: FEVRIER_7EME },
  { mois: 'Mars',     data: MARS_7EME },
];

module.exports = { PERIODES_7EME, MOIS_7EME };
