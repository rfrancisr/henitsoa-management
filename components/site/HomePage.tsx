"use client";
import Link from "next/link";
import Image from "next/image";
import { useLang, LangProvider } from "./LanguageContext";
import { SiteNavbar } from "./SiteNavbar";
import { SiteFooter } from "./SiteFooter";
import { Reveal } from "./Reveal";

const PLACEHOLDER_NEWS = [
  {
    date: "Juin 2026",
    category: "Résultats",
    title: "CEPE 2026 : un élève Henitsoa lauréat — 1er au classement national",
    excerpt:
      "Une fierté immense pour toute notre communauté scolaire. L'un de nos élèves a décroché la 1ère place au classement national du CEPE 2026, consacrant 40 ans de rigueur pédagogique.",
  },
  {
    date: "Mai 2026",
    category: "Équipements",
    title: "Inauguration du nouveau laboratoire informatique",
    excerpt:
      "Un laboratoire de 20 postes ouvre ses portes. Nos élèves apprennent la programmation dans des conditions optimales.",
  },
  {
    date: "Avril 2026",
    category: "Culture",
    title: "Journée culturelle 2026",
    excerpt:
      "Danse, arts et gastronomie : retour sur la journée qui a rassemblé toute la communauté scolaire.",
  },
];

function HomeContent() {
  const { t } = useLang();

  return (
    <div className="bg-white">
      <SiteNavbar heroDark />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <Image
          src="/site/hiragasy.jpg"
          alt="Cérémonie scolaire Henitsoa"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_25%]"
        />
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="animate-fade-up text-[10px] tracking-[0.3em] font-semibold text-[#C9A84C] uppercase mb-8">
            École Privée · Tsiroanomandidy · Depuis 1986
          </div>

          <h1
            className="animate-fade-up delay-200 font-black text-white leading-none"
            style={{ fontSize: "clamp(4.5rem, 16vw, 12rem)", letterSpacing: "-0.04em" }}
          >
            HENITSOA
          </h1>

          <div className="animate-fade-up delay-300 w-10 h-px bg-[#C9A84C] mt-10 mb-10" />

          <p
            className="animate-fade-up delay-400 font-light text-white/55 max-w-sm mx-auto"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.15rem)", lineHeight: "1.47" }}
          >
            {t.hero.tagline}
          </p>

          <div className="animate-fade-up delay-500 flex flex-col sm:flex-row items-center gap-7 mt-12">
            <Link
              href="/a-propos"
              className="text-[17px] text-[#C9A84C] hover:opacity-70 transition-opacity duration-200"
            >
              {t.hero.cta_primary} ›
            </Link>
            <Link
              href="/login"
              className="text-[17px] text-white/55 hover:text-white transition-colors duration-200"
            >
              {t.hero.cta_secondary} ›
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-gradient-to-b from-white/25 to-transparent" />
        </div>
      </section>

      {/* ── MISSION — blanc ──────────────────────────────────────────────────── */}
      <section className="bg-white pt-32 pb-20 sm:pt-44 sm:pb-28">
        <div className="max-w-[980px] mx-auto px-6 sm:px-10">
          <Reveal>
            <blockquote
              className="font-semibold text-[#1D1D1F] leading-tight"
              style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.75rem)", letterSpacing: "-0.025em" }}
            >
              "{t.mission.quote}"
            </blockquote>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="text-[11px] tracking-[0.2em] text-[#86868b] uppercase">
                École Privée Henitsoa · 1986
              </span>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <p
              className="mt-8 text-[#6e6e73] max-w-2xl"
              style={{ fontSize: "17px", lineHeight: "1.47" }}
            >
              {t.mission.body}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── STATS — gris Apple ───────────────────────────────────────────────── */}
      <section className="bg-[#f5f5f7] py-20 sm:py-28">
        <div className="max-w-[980px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {t.stats.map((stat, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="border-t-2 border-[#1D1D1F]/10 pt-8 pb-10 pr-8 hover:border-[#C9A84C] transition-colors duration-300 group">
                  <div
                    className="font-black text-[#1D1D1F] leading-none mb-3 group-hover:text-[#C9A84C] transition-colors duration-300"
                    style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", letterSpacing: "-0.04em" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-[#86868b] uppercase tracking-[0.15em] leading-snug">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── NIVEAUX — blanc ──────────────────────────────────────────────────── */}
      <section className="bg-white pb-32 sm:pb-44">
        <div className="max-w-[980px] mx-auto px-6 sm:px-10 pt-16 sm:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            <div>
              <Reveal>
                <div className="text-[10px] tracking-[0.28em] font-semibold text-[#C9A84C] uppercase mb-6">
                  Scolarité
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h2
                  className="font-bold text-[#1D1D1F] leading-tight"
                  style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}
                >
                  {t.levels.title}
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p
                  className="mt-6 text-[#6e6e73]"
                  style={{ fontSize: "17px", lineHeight: "1.47" }}
                >
                  {t.levels.subtitle}
                </p>
              </Reveal>
            </div>

            <div>
              {t.levels.items.map((level, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="group border-t border-[#1D1D1F]/8 py-8 flex items-start gap-6 hover:border-[#C9A84C]/35 transition-colors duration-300">
                    <span className="text-[11px] font-black text-[#C9A84C] mt-0.5 w-7 shrink-0 tracking-wide">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div
                        className="font-semibold text-[#1D1D1F] mb-1.5 group-hover:text-[#C9A84C] transition-colors duration-300"
                        style={{ fontSize: "17px" }}
                      >
                        {level.name}
                      </div>
                      <div className="text-sm text-[#86868b] leading-[1.47]">{level.desc}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
              <div className="border-t border-[#1D1D1F]/8" />
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOC NOIR — CEPE + vie scolaire ──────────────────────────────────── */}
      <section className="bg-black">

        {/* CEPE — chiffre cinématique */}
        <div className="py-24 sm:py-32 overflow-hidden">
          <div className="max-w-[980px] mx-auto px-6 sm:px-10">
            <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-14">
              <Reveal y={40}>
                <div
                  className="font-black text-[#C9A84C] leading-none"
                  style={{ fontSize: "clamp(7rem, 22vw, 16rem)", letterSpacing: "-0.06em" }}
                >
                  1er
                </div>
              </Reveal>
              <Reveal delay={150} className="sm:pb-6 lg:pb-10">
                <div
                  className="font-semibold text-white leading-snug"
                  style={{ fontSize: "clamp(1.2rem, 3vw, 2rem)", letterSpacing: "-0.02em" }}
                >
                  lauréat au CEPE 2026
                  <br />
                  <span className="text-white/28 text-base font-normal tracking-normal">
                    national — Madagascar
                  </span>
                </div>
                <p className="mt-5 text-sm text-white/32 max-w-xs" style={{ lineHeight: "1.47" }}>
                  Le résultat de 40 ans de rigueur et d'accompagnement au quotidien.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Vie scolaire — photo grid */}
        <div className="border-t border-white/8 pt-20 pb-28 sm:pb-36">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-5">
              <div>
                <Reveal>
                  <div className="text-[10px] tracking-[0.28em] font-semibold text-[#C9A84C] uppercase mb-4">
                    Vie scolaire
                  </div>
                </Reveal>
                <Reveal delay={100}>
                  <h2
                    className="font-bold text-white leading-tight"
                    style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", letterSpacing: "-0.03em" }}
                  >
                    {t.activities.title}
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={150}>
                <p className="text-sm text-white/32 max-w-xs sm:text-right" style={{ lineHeight: "1.47" }}>
                  {t.activities.subtitle}
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
              {[
                { src: "/site/foot.jpg",   caption: "Sport & équipe",    label: "Football" },
                { src: "/site/art.jpg",    caption: "Créativité",        label: "Arts plastiques" },
                { src: "/site/sakafo.jpg", caption: "Partage",           label: "Vie en communauté" },
                { src: "/site/rova2.jpg",  caption: "Découverte",        label: "Sorties culturelles" },
              ].map((item, i) => (
                <Reveal key={i} delay={120 + i * 80}>
                  <div className="relative aspect-[3/4] overflow-hidden group rounded-[18px]">
                    <Image
                      src={item.src}
                      alt={item.label}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                      <div className="text-[9px] sm:text-[10px] text-[#C9A84C] uppercase tracking-[0.22em] mb-1">
                        {item.caption}
                      </div>
                      <div className="text-sm sm:text-[15px] font-semibold text-white leading-snug">
                        {item.label}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ACTUALITÉS — gris Apple ──────────────────────────────────────────── */}
      <section className="bg-[#f5f5f7] py-28 sm:py-40">
        <div className="max-w-[980px] mx-auto px-6 sm:px-10">
          <Reveal>
            <div className="flex items-end justify-between pb-8 border-b border-[#1D1D1F]/8 mb-14">
              <h2
                className="font-bold text-[#1D1D1F]"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.025em" }}
              >
                {t.news.title}
              </h2>
              <Link
                href="/actualites"
                className="text-[13px] text-[#C9A84C] hover:opacity-70 transition-opacity hidden sm:block"
              >
                {t.news.all} ›
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-16">
            <Reveal className="lg:col-span-7">
              <time className="text-[11px] font-semibold text-[#C9A84C] tracking-[0.2em] uppercase">
                {PLACEHOLDER_NEWS[0].date}
              </time>
              <h3
                className="font-bold text-[#1D1D1F] mt-4 mb-5 leading-tight"
                style={{ fontSize: "clamp(1.4rem, 3vw, 2.1rem)", letterSpacing: "-0.02em" }}
              >
                {PLACEHOLDER_NEWS[0].title}
              </h3>
              <p className="text-[#6e6e73] mb-8" style={{ fontSize: "17px", lineHeight: "1.47" }}>
                {PLACEHOLDER_NEWS[0].excerpt}
              </p>
              <span className="text-[17px] text-[#C9A84C] hover:opacity-70 transition-opacity cursor-pointer">
                {t.news.read_more} ›
              </span>
            </Reveal>

            <div className="lg:col-span-5 flex flex-col">
              {PLACEHOLDER_NEWS.slice(1).map((item, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="group border-t border-[#1D1D1F]/8 py-8 hover:border-[#C9A84C]/30 transition-colors duration-300 cursor-pointer">
                    <time className="text-[10px] font-semibold text-[#C9A84C] tracking-[0.18em] uppercase">
                      {item.date}
                    </time>
                    <h4
                      className="font-semibold text-[#1D1D1F] mt-2.5 mb-2 leading-snug group-hover:text-[#C9A84C] transition-colors duration-300"
                      style={{ fontSize: "15px" }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-sm text-[#86868b] leading-[1.47] line-clamp-2">
                      {item.excerpt}
                    </p>
                  </div>
                </Reveal>
              ))}
              <div className="border-t border-[#1D1D1F]/8" />
            </div>
          </div>

          <div className="sm:hidden text-center">
            <Link href="/actualites" className="text-[17px] text-[#C9A84C] hover:opacity-70 transition-opacity">
              {t.news.all} ›
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA — noir ───────────────────────────────────────────────────────── */}
      <section className="bg-black py-36 sm:py-48">
        <div className="max-w-[680px] mx-auto px-6 sm:px-10 text-center">
          <Reveal>
            <h2
              className="font-bold text-white leading-tight whitespace-pre-line mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", letterSpacing: "-0.04em" }}
            >
              {t.cta.title}
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-white/40 mb-14 max-w-lg mx-auto" style={{ fontSize: "17px", lineHeight: "1.47" }}>
              {t.cta.subtitle}
            </p>
          </Reveal>
          <Reveal delay={250}>
            <div className="flex flex-col sm:flex-row items-center gap-8 justify-center">
              <button className="text-[17px] text-[#C9A84C] hover:opacity-70 transition-opacity duration-200">
                {t.cta.contact} ›
              </button>
              <Link
                href="/login"
                className="text-[17px] text-white/55 hover:text-white transition-colors duration-200"
              >
                {t.cta.portal} ›
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

export function HomePage() {
  return (
    <LangProvider>
      <HomeContent />
    </LangProvider>
  );
}
