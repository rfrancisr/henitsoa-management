"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "fr" | "mg";

export const TRANSLATIONS = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      news: "Actualités",
      portal: "Accéder au portail",
    },
    hero: {
      badge: "Depuis 1986 · Tsiroanomandidy · Madagascar",
      title1: "École Privée",
      title2: "Henitsoa",
      tagline: "Un enfant bien éduqué est un avenir assuré",
      cta_primary: "Découvrir l'école",
      cta_secondary: "Portail élèves",
      urgency: "Rentrée 2026-2027 : places limitées en Garderie et en Maternelle.",
      urgency_link: "Réserver un entretien",
      trust_cepe: "1ère place au CEPE 2026",
      trust_places: "Places limitées pour 2026-2027",
    },
    ticker: [
      "🏆 Lauréat CEPE 2026 — 1ère place au classement national Madagascar !",
      "⭐ 40 ans d'excellence — École Privée Henitsoa fondée en 1986",
      "📚 Inscriptions ouvertes pour l'année scolaire 2026-2027 — Contactez-nous !",
      "💻 Nouveau laboratoire informatique — 20 postes pour nos élèves",
      "🎉 Fête de fin d'année — Décembre 2026 — Familles bienvenues",
    ],
    stats: [
      { value: "40", label: "Ans d'excellence" },
      { value: "4", label: "Niveaux scolaires" },
      { value: "40+", label: "Enseignants dévoués" },
      { value: "1er", label: "Lauréat CEPE 2026" },
    ],
    mission: {
      quote: "Chaque élève compte. Chaque effort est accompagné.",
      body: "Depuis 1986, l'École Privée Henitsoa prépare les enfants de Tsiroanomandidy à un avenir brillant. Nos diplômés exercent aujourd'hui en France et aux États-Unis, devenant médecins, ingénieurs, juristes, informaticiens et bien plus encore.",
    },
    pillars: {
      tag: "Pourquoi nous choisir",
      title: "Une école qui ressemble à une maison",
      items: [
        {
          tag: "Arts créatifs",
          title: "Peindre, chanter, danser",
          desc: "Du théâtre aux arts plastiques, chaque enfant trouve son moyen d'expression préféré.",
          color: "rgba(196,59,44,0.4)",
        },
        {
          tag: "Informatique",
          title: "La technologie dès le jeune âge",
          desc: "Notre labo de 20 postes prépare les élèves au monde numérique.",
          color: "rgba(62,143,193,0.4)",
        },
        {
          tag: "Culture & patrimoine",
          title: "Nos racines malgaches",
          desc: "Découverte du patrimoine culturel et des richesses de Madagascar.",
          color: "rgba(201,122,43,0.4)",
        },
        {
          tag: "Vie scolaire",
          title: "Une école comme une famille",
          desc: "La cantine, le partage et les moments qui font les souvenirs.",
          color: "rgba(47,82,51,0.45)",
        },
        {
          tag: "Sport & équipe",
          title: "L'esprit d'équipe avant tout",
          desc: "Football, compétitions et tournois inter-écoles toute l'année.",
          color: "rgba(242,183,5,0.4)",
        },
      ],
    },
    levels: {
      eyebrow: "La scolarité",
      title: "De la garderie au collège",
      subtitle: "Un parcours scolaire complet, du premier âge jusqu'au brevet",
      items: [
        { name: "Garderie", age: "2–3 ans", desc: "Dès la petite enfance, dans un cadre bienveillant et sécurisé", icon: "🧸" },
        { name: "Maternelle", age: "3–5 ans", desc: "Éveil, curiosité et premiers apprentissages fondamentaux", icon: "🌱" },
        { name: "Primaire", age: "6–10 ans", desc: "Des fondations solides pour construire l'avenir", icon: "📚" },
        { name: "Collège", age: "11–15 ans", desc: "Vers l'excellence et les grandes ambitions", icon: "🎓" },
      ],
    },
    whyUs: {
      eyebrow: "Pourquoi les familles nous choisissent",
      title: "Ce que vous cherchez pour votre enfant, nous le construisons chaque jour",
      items: [
        { icon: "👨‍👩‍👧", title: "Jamais un numéro", desc: "Des classes à effectif réduit : chaque enseignant connaît votre enfant par son prénom et suit ses progrès de près." },
        { icon: "🧑‍🏫", title: "Une équipe qui reste", desc: "Des enseignants stables, présents depuis plusieurs années, que votre enfant retrouve chaque rentrée." },
        { icon: "🏆", title: "Des résultats qui parlent", desc: "1ère place au CEPE 2026 : le fruit d'un accompagnement constant, de la garderie jusqu'à l'examen." },
        { icon: "🛡️", title: "Un cadre sécurisé, jour après jour", desc: "Un environnement bienveillant et surveillé, du portail à la cour de récréation." },
      ],
    },
    vieEcole: {
      eyebrow: "La vie à l'école",
      title: "Un aperçu d'une journée à Henitsoa",
      tiles: [
        { icon: "⚽", title: "Récréation", desc: "Jeux, ballon et rires dans la cour.", color: "#3E8FC1" },
        { icon: "🎨", title: "Atelier créatif", desc: "Dessin, peinture et petits bricolages.", color: "#C43B2C" },
        { icon: "📖", title: "Coin lecture", desc: "Un temps calme avec un livre chaque jour.", color: "#2F5233" },
        { icon: "🔬", title: "Éveil scientifique", desc: "Petites expériences pour comprendre le monde.", color: "#C97A2B" },
      ],
    },
    activities: {
      title: "Des activités qui éveillent les talents",
      subtitle: "Un environnement d'apprentissage enrichi, bien au-delà du programme scolaire",
      items: [
        { name: "Arts", desc: "Expression et créativité", icon: "🎨" },
        { name: "Danse", desc: "Rythme et discipline", icon: "💃" },
        { name: "Chinois", desc: "Une langue d'avenir", icon: "🈳" },
        { name: "Cuisine", desc: "Autonomie et créativité", icon: "👨‍🍳" },
        { name: "Informatique", desc: "Programmation dès le jeune âge", icon: "💻" },
      ],
    },
    news: {
      eyebrow: "Le tableau d'affichage",
      pinned: "épinglé cette semaine 📌",
      title: "Actualités",
      subtitle: "Les dernières nouvelles de l'école",
      tag: "Vie de l'école",
      read_more: "Lire la suite",
      all: "Toutes les actualités →",
    },
    events: {
      tag: "À venir",
      title: "Notez les dates",
      items: [
        {
          month: "Sep",
          day: "1",
          title: "Rentrée scolaire 2026-2027",
          desc: "Accueil des élèves · Toutes les classes · 7h30",
        },
        {
          month: "Oct",
          day: "15",
          title: "Remise des bulletins T1",
          desc: "Salle polyvalente · Rencontres parents-enseignants · 14h00",
        },
        {
          month: "Nov",
          day: "7",
          title: "Journée sportive annuelle",
          desc: "Terrain de sport · Toute la journée · Portez votre maillot !",
        },
        {
          month: "Déc",
          day: "15",
          title: "Fête de fin d'année scolaire",
          desc: "Cour de l'école · 10h00 · Familles bienvenues",
        },
      ],
    },
    quote: {
      text: "Un enfant bien éduqué est un avenir assuré.",
      attr: "École Privée Henitsoa · depuis 1986",
    },
    testimonial: {
      quote: "Ma fille a trouvé à Henitsoa bien plus qu'une école : une deuxième famille.",
      attr: "— Mme Rasoanaivo, maman d'une élève de 9è",
    },
    cta: {
      title: "Rejoignez la famille\nHenitsoa",
      subtitle: "Offrez à votre enfant la meilleure éducation à Tsiroanomandidy",
      contact: "Nous contacter",
      portal: "Accéder au portail",
    },
    footer: {
      tagline: "Un enfant bien éduqué est un avenir assuré",
      founded: "Fondée en 1986 · Avaratsena, Tsiroanomandidy",
      links: "Navigation",
      pedagogy: "Scolarité",
      pedagogy_links: ["Garderie & Maternelle", "Primaire", "Collège", "Activités parascolaires"],
      contact: "Contact",
      address: "Tsiroanomandidy, Madagascar",
      phone: "+261 34 32 415 05",
      rights: "© 2026 École Privée Henitsoa. Tous droits réservés.",
    },
    about: {
      hero_title: "Notre histoire",
      hero_subtitle: "40 ans au service de l'éducation à Tsiroanomandidy",
      history_title: "Une école, une vocation",
      history_body:
        "Fondée en 1986 à Avaratsena, Tsiroanomandidy, l'École Privée Henitsoa est devenue l'un des piliers de l'éducation dans la région. Laïque et ouverte à tous, notre école accueille des milliers d'élèves dans un cadre exigeant et bienveillant, de la garderie jusqu'au collège.\n\nEn presque 40 ans d'existence, nos diplômés ont tracé des parcours remarquables bien au-delà de Madagascar. Médecins, ingénieurs, juristes, informaticiens — ils sont aujourd'hui actifs en France, aux États-Unis et partout dans le monde.",
      values_title: "Nos valeurs",
      values: [
        { title: "Excellence", desc: "Nous visons les meilleurs résultats pour chaque élève, sans exception. Notre élève lauréat a décroché la 1ère place au CEPE 2026 — classement national.", icon: "⭐" },
        { title: "Bienveillance", desc: "Chaque enfant est unique et mérite un accompagnement personnalisé. Notre approche pédagogique place l'élève au centre.", icon: "❤️" },
        { title: "Ouverture", desc: "Chinois, informatique, arts, danse — nous préparons nos élèves à un monde globalisé et en constante évolution.", icon: "🌍" },
        { title: "Ancrage local", desc: "Fiers de Tsiroanomandidy, nous formons les futurs leaders de notre région et de Madagascar.", icon: "🏡" },
      ],
      team_title: "Notre équipe",
      team_desc:
        "Plus de 40 enseignants dévoués, formés et engagés au service de la réussite de vos enfants. Une équipe pédagogique soudée, portée par la passion de transmettre.",
    },
    actualites: {
      title: "Actualités",
      subtitle: "Toutes les dernières nouvelles de l'École Privée Henitsoa",
    },
  },

  mg: {
    nav: {
      home: "Fandraisana",
      about: "Momba anay",
      news: "Vaovao",
      portal: "Hiditra ao amin'ny vavahady",
    },
    hero: {
      badge: "Hatramin'ny 1986 · Tsiroanomandidy · Madagasikara",
      title1: "École Privée",
      title2: "Henitsoa",
      tagline: "Ny zaza voaomana tsara dia manana hoavy mamirapiratra",
      cta_primary: "Fantaro ny sekoly",
      cta_secondary: "Vavahadin'ny mpianatra",
      urgency: "Fiverenana 2026-2027 : toerana voafetra ao amin'ny Garderie sy Maternelle.",
      urgency_link: "Manokàna fihaonana",
      trust_cepe: "Laharana voalohany tamin'ny CEPE 2026",
      trust_places: "Toerana voafetra ho an'ny 2026-2027",
    },
    ticker: [
      "🏆 Lauri-endrika CEPE 2026 — Laharan'ny 1 amin'ny firenena, Madagasikara!",
      "⭐ 40 taona fahaizana — École Privée Henitsoa hatramin'ny 1986",
      "📚 Fisokafana fisoratana anarana 2026-2027 — Mifandraisa aminay!",
      "💻 Laboratoire informatique vaovao — Fitaovana 20 ho an'ny mpianatra",
      "🎉 Fety faranatr'asa sekoly — Desambra 2026 — Fianakaviana tonga soa",
    ],
    stats: [
      { value: "40", label: "Taona fahaizana" },
      { value: "4", label: "Kilasy" },
      { value: "40+", label: "Mpampianatra" },
      { value: "1er", label: "Lauréat CEPE 2026" },
    ],
    mission: {
      quote: "Ny mpianatra tsirairay dia manan-danja. Ny ezaka tsirairay dia heverina.",
      body: "Hatramin'ny 1986, ny École Privée Henitsoa dia mamomba ny ankizy any Tsiroanomandidy ho amin'ny hoavy mamirapiratra. Ireo mpianatra nahavita fanadinana dia miasa any Frantsa sy Etazonia ankehitriny, ho dokotera, injeniera, mpanao lalàna, mpiasa informatika ary betsaka hafa.",
    },
    pillars: {
      tag: "Nahoana no misafidy anay",
      title: "Sekoly mitovy amin'ny trano fiavanana",
      items: [
        {
          tag: "Kira sy asa tanana",
          title: "Manao hosodoko, mihira, mandihy",
          desc: "Hatramin'ny théâtre ka hatramin'ny kira, ny zaza rehetra mahita ny fomba fiteny.",
          color: "rgba(196,59,44,0.4)",
        },
        {
          tag: "Informatique",
          title: "Teknolojia hatramin'ny fahatanorana",
          desc: "Ny laboratoire 20 fitaovana anay dia mamomba ny mpianatra ho amin'ny tontolo nomerika.",
          color: "rgba(62,143,193,0.4)",
        },
        {
          tag: "Kolotsaina",
          title: "Ny fototra malagasy anay",
          desc: "Fahitana ny harena ara-kolontsaina sy ny haren'i Madagasikara.",
          color: "rgba(201,122,43,0.4)",
        },
        {
          tag: "Fiainan-tsekoly",
          title: "Sekoly mitovy amin'ny fianakaviana",
          desc: "Ny sakafo, ny fizarana ary ireo fotoana mampisy tsangambato.",
          color: "rgba(47,82,51,0.45)",
        },
        {
          tag: "Fanatanjahantena",
          title: "Ny fanahin'ny ekipa aloha",
          desc: "Football, fifaninanana ary tournoi inter-sekoly mandritra ny taona.",
          color: "rgba(242,183,5,0.4)",
        },
      ],
    },
    levels: {
      eyebrow: "Fianarana",
      title: "Hatramin'ny garderie ka hatramin'ny collège",
      subtitle: "Lalana feno fanabeazana, hatramin'ny ankizy kely ka hatramin'ny brevet",
      items: [
        { name: "Garderie", age: "2–3 taona", desc: "Hatramin'ny fahatanorana, ao anatin'ny tontolo tsara sy arovana", icon: "🧸" },
        { name: "Maternelle", age: "3–5 taona", desc: "Fahazotoana, fahalianana ary fianarana voalohany", icon: "🌱" },
        { name: "Primaire", age: "6–10 taona", desc: "Fototra mafy ho amin'ny hoavy", icon: "📚" },
        { name: "Collège", age: "11–15 taona", desc: "Mankany amin'ny haingom-pahaizana sy ny fisainana lehibe", icon: "🎓" },
      ],
    },
    whyUs: {
      eyebrow: "Nahoana no misafidy anay ny fianakaviana",
      title: "Izay tadiavinao ho an'ny zanakao no ataonay isan'andro",
      items: [
        { icon: "👨‍👩‍👧", title: "Tsy laharana fotsiny", desc: "Kilasy vitsy isa: ny mpampianatra tsirairay mahalala ny anaran'ny zanakao ary manaraka akaiky ny fandrosoany." },
        { icon: "🧑‍🏫", title: "Ekipa tsy miova", desc: "Mpampianatra maharitra, efa ao nandritra ny taona maro, hitan'ny zanakao isaky ny fiverenana any an-tsekoly." },
        { icon: "🏆", title: "Vokatra miteny", desc: "Laharana voalohany tamin'ny CEPE 2026: vokatry ny fanarahamaso maharitra, hatramin'ny garderie ka hatramin'ny fanadinana." },
        { icon: "🛡️", title: "Tontolo azo antoka isan'andro", desc: "Tontolo tsara sady voaro, hatramin'ny vavahady ka hatramin'ny kianja fialan-tsasatra." },
      ],
    },
    vieEcole: {
      eyebrow: "Ny fiainana any an-tsekoly",
      title: "Fijerena andro iray any Henitsoa",
      tiles: [
        { icon: "⚽", title: "Fialan-tsasatra", desc: "Kilalao, baolina ary fihomehezana eny an-kianja.", color: "#3E8FC1" },
        { icon: "🎨", title: "Atelier famoronana", desc: "Hosodoko, loko ary asa tanana kely.", color: "#C43B2C" },
        { icon: "📖", title: "Toeram-pamakiana", desc: "Fotoana milamina miaraka amin'ny boky isan'andro.", color: "#2F5233" },
        { icon: "🔬", title: "Fahazotoana ara-tsiansa", desc: "Andrana kely hahatakarana izao tontolo izao.", color: "#C97A2B" },
      ],
    },
    activities: {
      title: "Hetsika mampivoy talenta",
      subtitle: "Tontolo fianarana manankarena, mihoatra ny programa ara-pianarana",
      items: [
        { name: "Kira", desc: "Famoahana hevitra sy famoronana", icon: "🎨" },
        { name: "Fandihy", desc: "Rindran-kira sy fahaiza-manao", icon: "💃" },
        { name: "Sinoa", desc: "Fiteny ho amin'ny hoavy", icon: "🈳" },
        { name: "Fanao sakafo", desc: "Fahazakana sy famoronana", icon: "👨‍🍳" },
        { name: "Informatique", desc: "Fandaharana hatramin'ny fahatanorana", icon: "💻" },
      ],
    },
    news: {
      eyebrow: "Ny takelaka filazana",
      pinned: "voatohatra amin'ity herinandro ity 📌",
      title: "Vaovao",
      subtitle: "Ireo vaovao farany avy amin'ny sekoly",
      tag: "Fiainan'ny sekoly",
      read_more: "Vakio bebe kokoa",
      all: "Vaovao rehetra →",
    },
    events: {
      tag: "Ho avy",
      title: "Tadidio ny daty",
      items: [
        {
          month: "Sep",
          day: "1",
          title: "Fiverenana any an-tsekoly 2026-2027",
          desc: "Fandraisan'ny mpianatra · Kilasy rehetra · 7h30",
        },
        {
          month: "Okt",
          day: "15",
          title: "Fanomezana buletin T1",
          desc: "Efitrano maro ampiasaina · Fihaonana ray aman-dreny-mpampianatra · 14h00",
        },
        {
          month: "Nov",
          day: "7",
          title: "Andro fanatanjahantena",
          desc: "Kianja fanatanjahantena · Andro manontolo · Mitafy ny akanjo fanatanjahantena!",
        },
        {
          month: "Des",
          day: "15",
          title: "Fety faranatr'asa sekoly",
          desc: "Kianja sekoly · 10h00 · Fianakaviana tonga soa",
        },
      ],
    },
    quote: {
      text: "Ny zaza voaomana tsara dia manana hoavy mamirapiratra.",
      attr: "École Privée Henitsoa · hatramin'ny 1986",
    },
    testimonial: {
      quote: "Ny zanako vavy dia nahita tao Henitsoa zavatra mihoatra ny sekoly: fianakaviana faharoa.",
      attr: "— Ramatoa Rasoanaivo, renin'ny mpianatra iray ao amin'ny kilasy faha-9",
    },
    cta: {
      title: "Midira ao amin'ny\nfianakavian'i Henitsoa",
      subtitle: "Omeo ny anjaranao ny fanabeazana tsara indrindra any Tsiroanomandidy",
      contact: "Mifandraisa aminay",
      portal: "Hiditra ao amin'ny vavahady",
    },
    footer: {
      tagline: "Ny zaza voaomana tsara dia manana hoavy mamirapiratra",
      founded: "Naorina tamin'ny 1986 · Avaratsena, Tsiroanomandidy",
      links: "Fanaovana",
      pedagogy: "Fianarana",
      pedagogy_links: ["Garderie & Maternelle", "Primaire", "Collège", "Hetsika"],
      contact: "Fifandraisana",
      address: "Tsiroanomandidy, Madagasikara",
      phone: "+261 34 32 415 05",
      rights: "© 2026 École Privée Henitsoa. Zo rehetra voatokana.",
    },
    about: {
      hero_title: "Tantaran'ny sekoly",
      hero_subtitle: "40 taona ho amin'ny fanabeazana any Tsiroanomandidy",
      history_title: "Sekoly iray, fantsona iray",
      history_body:
        "Naorina tamin'ny 1986 any Avaratsena, Tsiroanomandidy, ny École Privée Henitsoa dia lasa andry manohana ny fanabeazana ao amin'ny faritra. Laika sady misokatra ho an'ny rehetra, ny sekoly anay dia mampiditra mpianatra an'alinalina ao anatin'ny tontolo tsara sy fitakiana.\n\nNandritra ny 40 taona, ireo mpianatra nahavita fanadinana dia nitady lalana mampitolagaga lavitra ny sisin'i Madagasikara.",
      values_title: "Ireo soatoavina ataonay",
      values: [
        { title: "Haingom-pahaizana", desc: "Ny vokatra tsara indrindra ho an'ny mpianatra tsirairay. Ny mpianatra lauri-endrika anay dia nahazo ny laharana voalohany tamin'ny CEPE 2026 — isan-tany.", icon: "⭐" },
        { title: "Fitiavana", desc: "Ny zaza tsirairay dia manokana sady mendrika fanarahamaso manokana.", icon: "❤️" },
        { title: "Fisihoranana", desc: "Sinoa, informatique, kira, fandihy — mamomba ny mpianatra ho amin'ny tontolo manerana an'izao tontolo izao.", icon: "🌍" },
        { title: "Fiorenana eo an-toerana", desc: "Mirehareha amin'i Tsiroanomandidy, mamomba ireo mpitarika ho avy amin'i Madagasikara.", icon: "🏡" },
      ],
      team_title: "Ny ekipanay",
      team_desc:
        "Mpampianatra mihoatra ny 40, voaomana sy vonona, ho fanampiana ny fahombiazana ny zanakao. Ekipa ara-pedagojia miraika, nentin'ny fitiavana hampita.",
    },
    actualites: {
      title: "Vaovao",
      subtitle: "Ireo vaovao farany rehetra avy amin'ny École Privée Henitsoa",
    },
  },
};

type Translations = typeof TRANSLATIONS["fr"];

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const stored = localStorage.getItem("henitsoa-lang") as Lang | null;
    if (stored === "fr" || stored === "mg") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("henitsoa-lang", l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: TRANSLATIONS[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
