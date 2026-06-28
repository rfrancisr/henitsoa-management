"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "fr" | "mg";

export const TRANSLATIONS = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      news: "Actualités",
      portal: "Portail élèves",
    },
    hero: {
      badge: "Depuis 1986 · Tsiroanomandidy",
      title1: "École Privée",
      title2: "Henitsoa",
      tagline: "Un enfant bien éduqué est un avenir assuré",
      cta_primary: "Découvrir l'école",
      cta_secondary: "Portail élèves",
    },
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
    levels: {
      title: "De la garderie au collège",
      subtitle: "Un parcours scolaire complet, du premier âge jusqu'au brevet",
      items: [
        { name: "Garderie", desc: "Dès la petite enfance, dans un cadre bienveillant et sécurisé", icon: "🧸" },
        { name: "Maternelle", desc: "Éveil, curiosité et premiers apprentissages fondamentaux", icon: "🌱" },
        { name: "Primaire", desc: "Des fondations solides pour construire l'avenir", icon: "📚" },
        { name: "Collège", desc: "Vers l'excellence et les grandes ambitions", icon: "🎓" },
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
      title: "Actualités",
      subtitle: "Les dernières nouvelles de l'école",
      read_more: "Lire la suite",
      all: "Toutes les actualités →",
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
      contact: "Contact",
      contact_placeholder: "Informations de contact disponibles prochainement.",
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
      portal: "Vavahady",
    },
    hero: {
      badge: "Hatramin'ny 1986 · Tsiroanomandidy",
      title1: "École Privée",
      title2: "Henitsoa",
      tagline: "Ny zaza voaomana tsara dia manana hoavy mamirapiratra",
      cta_primary: "Fantaro ny sekoly",
      cta_secondary: "Vavahadin'ny mpianatra",
    },
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
    levels: {
      title: "Hatramin'ny garderie ka hatramin'ny collège",
      subtitle: "Lalana feno fanabeazana, hatramin'ny ankizy kely ka hatramin'ny brevet",
      items: [
        { name: "Garderie", desc: "Hatramin'ny fahatanorana, ao anatin'ny tontolo tsara sy arovana", icon: "🧸" },
        { name: "Maternelle", desc: "Fahazotoana, fahalianana ary fianarana voalohany", icon: "🌱" },
        { name: "Primaire", desc: "Fototra mafy ho amin'ny hoavy", icon: "📚" },
        { name: "Collège", desc: "Mankany amin'ny haingom-pahaizana sy ny fisainana lehibe", icon: "🎓" },
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
      title: "Vaovao",
      subtitle: "Ireo vaovao farany avy amin'ny sekoly",
      read_more: "Vakio bebe kokoa",
      all: "Vaovao rehetra →",
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
      contact: "Fifandraisana",
      contact_placeholder: "Ho azo ao afaka kely ny tsipika fifandraisana.",
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
