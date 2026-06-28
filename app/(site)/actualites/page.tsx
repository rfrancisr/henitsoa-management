"use client";
import Image from "next/image";
import { useLang } from "@/components/site/LanguageContext";
import { Reveal } from "@/components/site/Reveal";

const ARTICLES = [
  {
    id: 0,
    category: "Résultats",
    date: "Juin 2026",
    title: "CEPE 2026 : un élève Henitsoa lauréat — 1er au classement national",
    excerpt:
      "Une performance historique. L'un de nos élèves a décroché la 1ère place au classement national du CEPE 2026, devenant lauréat de Madagascar. Fruit de 40 ans de rigueur pédagogique et d'un accompagnement quotidien de nos enseignants, cette distinction est une immense fierté pour toute la communauté Henitsoa.",
    image: "/site/prof2.jpg",
    featured: true,
  },
  {
    id: 1,
    category: "Équipements",
    date: "Mai 2026",
    title: "Inauguration du nouveau laboratoire informatique",
    excerpt:
      "Un laboratoire de 20 postes entièrement équipé ouvre ses portes aux élèves du primaire et du collège, pour les initier à la programmation dans des conditions optimales.",
    image: "/site/informatique.jpg",
    featured: false,
  },
  {
    id: 2,
    category: "Culture",
    date: "Avril 2026",
    title: "Journée culturelle 2026 : une fête de la diversité",
    excerpt:
      "Danse, arts plastiques, gastronomie malgache et performances en chinois ont marqué la journée culturelle annuelle.",
    image: "/site/art.jpg",
    featured: false,
  },
  {
    id: 3,
    category: "Pédagogie",
    date: "Mars 2026",
    title: "Le mandarin dès le primaire : une première à Tsiroanomandidy",
    excerpt:
      "Première école de la région à introduire le chinois mandarin au niveau primaire, Henitsoa confirme sa vision d'une éducation tournée vers l'avenir.",
    image: "/site/rova.jpg",
    featured: false,
  },
  {
    id: 4,
    category: "Sport",
    date: "Février 2026",
    title: "Tournoi inter-écoles : Henitsoa remporte le trophée",
    excerpt:
      "L'équipe de football du collège a brillé lors du tournoi inter-écoles de Tsiroanomandidy, remportant le trophée après une finale époustouflante.",
    image: "/site/foot2.jpg",
    featured: false,
  },
  {
    id: 5,
    category: "Examens",
    date: "Octobre 2025",
    title: "BEPC 2025 : taux de réussite remarquable",
    excerpt:
      "Nos élèves de 3ème ont démontré leur excellence lors du BEPC 2025. Un taux de réussite dont toute l'équipe est fière.",
    image: "/site/prof.jpg",
    featured: false,
  },
];

export default function ActualitesPage() {
  const { t } = useLang();
  const featured = ARTICLES.find((a) => a.featured)!;
  const rest = ARTICLES.filter((a) => !a.featured);

  return (
    <div className="bg-white">

      {/* ── HERO — noir ── */}
      <section className="min-h-[45vh] bg-black flex flex-col items-center justify-center text-center px-5 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#C9A84C]/5 rounded-full blur-[80px]" />
        </div>
        <div className="relative z-10">
          <div className="animate-fade-up text-[10px] tracking-[0.3em] font-semibold text-[#C9A84C] uppercase mb-6">
            École Privée Henitsoa
          </div>
          <h1
            className="animate-fade-up delay-200 font-bold text-white leading-tight"
            style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)", letterSpacing: "-0.028em" }}
          >
            {t.actualites.title}
          </h1>
          <div className="animate-fade-up delay-300 w-10 h-[1px] bg-[#C9A84C] mx-auto mt-8 mb-6" />
          <p className="animate-fade-up delay-400 font-light text-white/40 max-w-sm mx-auto text-sm leading-[1.47]">
            {t.actualites.subtitle}
          </p>
        </div>
      </section>

      {/* ── ARTICLE VEDETTE — blanc ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-[980px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="text-[10px] tracking-[0.25em] font-semibold text-[#C9A84C] uppercase mb-12">
              À la une
            </div>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 border-t border-[#1d1d1f]/8 pt-12">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#C9A84C]">
                  {featured.category}
                </span>
                <span className="text-[#1d1d1f]/20">·</span>
                <time className="text-[10px] text-[#86868b] tracking-wide">{featured.date}</time>
              </div>
              <h2
                className="font-bold text-[#1d1d1f] leading-tight mb-6"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", letterSpacing: "-0.028em" }}
              >
                {featured.title}
              </h2>
              <p className="text-[17px] text-[#6e6e73] leading-[1.47] mb-8">{featured.excerpt}</p>
              <span className="text-[17px] text-[#C9A84C] hover:opacity-70 transition-opacity cursor-pointer">
                {t.news.read_more} ›
              </span>
            </Reveal>

            <Reveal delay={150}>
              <div className="rounded-[18px] overflow-hidden aspect-[4/3] relative">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── GRILLE ARTICLES — gris Apple ── */}
      <section className="py-16 sm:py-20 bg-[#f5f5f7]">
        <div className="max-w-[980px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="text-[10px] tracking-[0.25em] font-semibold text-[#C9A84C] uppercase mb-10">
              Toutes les actualités
            </div>
          </Reveal>

          <div className="space-y-0">
            {rest.map((article, i) => (
              <Reveal key={article.id} delay={i * 60}>
                <div className="group grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 border-t border-[#1d1d1f]/8 py-8 hover:border-[#C9A84C]/40 transition-colors cursor-pointer">
                  <div className="sm:col-span-3 flex sm:flex-col gap-3 sm:gap-1.5 items-start">
                    <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#C9A84C]">
                      {article.category}
                    </span>
                    <time className="text-[10px] text-[#86868b] tracking-wide">{article.date}</time>
                  </div>
                  <div className="sm:col-span-7">
                    <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-2 leading-snug group-hover:text-[#C9A84C] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-[#6e6e73] leading-[1.47] line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="sm:col-span-2 hidden sm:flex items-center justify-end gap-4">
                    <div className="relative w-14 h-14 rounded-[8px] overflow-hidden shrink-0">
                      <Image src={article.image} alt={article.title} fill sizes="56px" className="object-cover" />
                    </div>
                    <span className="text-[#1d1d1f]/15 group-hover:text-[#C9A84C] transition-colors text-xl">›</span>
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-[#1d1d1f]/8" />
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER — noir ── */}
      <section className="py-24 sm:py-28 bg-black">
        <div className="max-w-[680px] mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <div className="text-[10px] tracking-[0.3em] font-semibold text-[#C9A84C] uppercase mb-6">
              Newsletter
            </div>
            <h2
              className="font-bold text-white leading-tight mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.028em" }}
            >
              Restez informé
            </h2>
            <p className="text-[#6e6e73] text-[17px] mb-10 max-w-sm mx-auto leading-[1.47]">
              Recevez les actualités de l&apos;École Privée Henitsoa dans votre boîte mail.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-5 py-3.5 rounded-full bg-white/5 border border-white/10 text-white placeholder-[#86868b] text-sm focus:outline-none focus:border-[#C9A84C]/50 focus:bg-white/8 transition-all"
              />
              <button className="bg-[#0071e3] text-white px-7 py-3.5 rounded-full text-[15px] font-medium whitespace-nowrap hover:bg-[#0077ed] transition-colors duration-200">
                S&apos;inscrire
              </button>
            </div>
            <p className="text-[11px] text-[#86868b] mt-4">Fonctionnalité disponible prochainement.</p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
