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
    stripe: "#FF7043",
  },
  {
    date: "Mai 2026",
    category: "Équipements",
    title: "Inauguration du nouveau laboratoire informatique",
    excerpt:
      "Un laboratoire de 20 postes ouvre ses portes. Nos élèves apprennent la programmation dans des conditions optimales.",
    stripe: "#4FC3F7",
  },
  {
    date: "Avril 2026",
    category: "Culture",
    title: "Journée culturelle 2026",
    excerpt:
      "Danse, arts et gastronomie : retour sur la journée qui a rassemblé toute la communauté scolaire.",
    stripe: "#BA68C8",
  },
];

/* ── Bunting SVG ──────────────────────────────────────────────────────────── */
function Bunting() {
  return (
    <svg
      viewBox="0 0 900 80"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="none"
      style={{ position: "absolute", top: 0, left: 0, width: "100%", zIndex: 3, pointerEvents: "none" }}
    >
      <path d="M0,18 Q225,38 450,20 Q675,2 900,22" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" fill="none" />
      {[
        { x: 60, c: "#FF7043", cls: "pennant-sw1" },
        { x: 120, c: "#FFD54F", cls: "pennant-sw2" },
        { x: 180, c: "#66BB6A", cls: "pennant-sw3" },
        { x: 240, c: "#4FC3F7", cls: "pennant-sw1" },
        { x: 300, c: "#BA68C8", cls: "pennant-sw2" },
        { x: 360, c: "#FF7043", cls: "pennant-sw3" },
        { x: 420, c: "#FFD54F", cls: "pennant-sw1" },
        { x: 480, c: "#66BB6A", cls: "pennant-sw2" },
        { x: 540, c: "#4FC3F7", cls: "pennant-sw3" },
        { x: 600, c: "#BA68C8", cls: "pennant-sw1" },
        { x: 660, c: "#FF7043", cls: "pennant-sw2" },
        { x: 720, c: "#FFD54F", cls: "pennant-sw3" },
        { x: 780, c: "#66BB6A", cls: "pennant-sw1" },
        { x: 840, c: "#4FC3F7", cls: "pennant-sw2" },
      ].map((p) => (
        <g key={p.x} className={p.cls}>
          <polygon points={`${p.x},20 ${p.x + 14},20 ${p.x + 7},48`} fill={p.c} />
        </g>
      ))}
    </svg>
  );
}

/* ── Wave divider ─────────────────────────────────────────────────────────── */
function WaveDivider({ from, to }: { from: string; to: string }) {
  return (
    <svg
      viewBox="0 0 1440 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: "block", background: from, marginBottom: -1 }}
    >
      <path
        d="M0,32 C180,0 360,48 540,24 C720,0 900,48 1080,24 C1260,0 1350,40 1440,32 L1440,48 L0,48 Z"
        fill={to}
      />
    </svg>
  );
}

function HomeContent() {
  const { t } = useLang();

  const pillarPhotos = [
    "/site/art.jpg",
    "/site/informatique.jpg",
    "/site/rova.jpg",
    "/site/sakafo.jpg",
    "/site/foot.jpg",
  ];

  const tickerItems = [...t.ticker, ...t.ticker];

  return (
    <div style={{ background: "#FDFBF6" }}>
      <SiteNavbar />

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden flex flex-col items-center justify-center text-center px-6"
        style={{ minHeight: "calc(100svh - 60px)" }}
      >
        <Image
          src="/site/hiragasy.jpg"
          alt="Cérémonie scolaire Henitsoa"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_25%]"
        />
        <div className="absolute inset-0" style={{ background: "rgba(44,28,20,0.72)" }} />

        <Bunting />

        <div className="relative z-10 flex flex-col items-center" style={{ paddingTop: "2rem" }}>
          {/* Eyebrow pill */}
          <div
            className="animate-fade-up inline-block text-white text-[11px] font-bold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full mb-6"
            style={{ background: "#BA68C8", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
          >
            {t.hero.badge}
          </div>

          {/* Title */}
          <h1
            className="animate-fade-up delay-200 leading-none"
            style={{
              fontFamily: "var(--font-fredoka), 'Fredoka One', cursive",
              fontSize: "clamp(3.5rem, 14vw, 10rem)",
              letterSpacing: "-0.02em",
              color: "#FFD54F",
            }}
          >
            HENITSOA
          </h1>

          {/* Tagline */}
          <p
            className="animate-fade-up delay-300 mt-6 max-w-sm mx-auto"
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "clamp(1rem, 2.2vw, 1.15rem)",
              lineHeight: 1.55,
              fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
              fontWeight: 600,
            }}
          >
            {t.hero.tagline}
          </p>

          {/* CTAs */}
          <div className="animate-fade-up delay-400 flex flex-col sm:flex-row items-center gap-4 mt-10">
            <Link
              href="/a-propos"
              className="text-white font-bold px-7 py-3 rounded-full transition-all duration-150"
              style={{
                fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                fontSize: "15px",
                background: "#FF7043",
                boxShadow: "0 4px 0 #BF360C",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 0 #BF360C";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 0 #BF360C";
              }}
            >
              {t.hero.cta_primary}
            </Link>
            <Link
              href="/login"
              className="font-bold px-7 py-3 rounded-full transition-all duration-150"
              style={{
                fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                fontSize: "15px",
                background: "#fff",
                color: "#2C2C3A",
                border: "2.5px solid rgba(255,255,255,0.6)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "";
              }}
            >
              {t.hero.cta_secondary}
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2" style={{ zIndex: 2 }}>
          <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)" }} />
        </div>
      </section>

      {/* ── WAVE → TICKER ─────────────────────────────────────────────────────── */}
      <WaveDivider from="transparent" to="#FFD54F" />

      {/* ── TICKER ────────────────────────────────────────────────────────────── */}
      <div
        className="overflow-hidden"
        style={{ background: "#FFD54F", padding: "0.65rem 0" }}
        aria-label="Annonces de l'école"
      >
        <div className="flex items-center">
          <span
            className="shrink-0 text-white text-[11px] font-bold tracking-[0.07em] uppercase px-3 py-1 rounded mx-4"
            style={{
              background: "#2C2C3A",
              fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
            }}
            aria-hidden="true"
          >
            Annonces
          </span>
          <div className="overflow-hidden flex-1">
            <div className="site-ticker-track" style={{ whiteSpace: "nowrap" }}>
              {tickerItems.map((item, i) => (
                <span
                  key={i}
                  className="inline-block font-bold mr-14 text-[13px]"
                  style={{
                    color: "#2C2C3A",
                    fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── PHOTO PILLARS ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20 px-5 sm:px-8">
        <div className="max-w-[960px] mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <span
                className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-4"
                style={{
                  background: "#C8E6C9",
                  color: "#388E3C",
                  fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                }}
              >
                {t.pillars.tag}
              </span>
              <h2
                className="mt-1"
                style={{
                  fontFamily: "var(--font-fredoka), 'Fredoka One', cursive",
                  fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)",
                  color: "#2C2C3A",
                  lineHeight: 1.2,
                }}
              >
                {t.pillars.title}
              </h2>
            </div>
          </Reveal>

          {/* 3-col, 2-row mosaic */}
          <div
            className="site-photo-grid rounded-[20px] overflow-hidden"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gridTemplateRows: "240px 240px",
              gap: "12px",
            }}
          >
            {t.pillars.items.map((item, i) => {
              const placement = [
                { gridColumn: "1 / 2", gridRow: "1 / 3" },
                { gridColumn: "2 / 3", gridRow: "1 / 2" },
                { gridColumn: "3 / 4", gridRow: "1 / 2" },
                { gridColumn: "2 / 3", gridRow: "2 / 3" },
                { gridColumn: "3 / 4", gridRow: "2 / 3" },
              ][i];

              return (
                <div
                  key={i}
                  className={`pg-cell-wrap pg-cell-${i} relative overflow-hidden group`}
                  style={placement}
                >
                  <Image
                    src={pillarPhotos[i]}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-all duration-500 ease-out group-hover:scale-[1.06]"
                    style={{ filter: "brightness(0.85)" }}
                  />
                  {/* Color tint overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: item.color }}
                  />
                  {/* Label */}
                  <div
                    className="absolute bottom-0 left-0 right-0 z-10 transition-all duration-300 group-hover:pb-5"
                    style={{
                      padding: "1rem 1.25rem",
                      background: "linear-gradient(to top, rgba(30,28,40,0.82) 0%, transparent 100%)",
                    }}
                  >
                    <div
                      className="text-[10px] font-bold tracking-[0.1em] uppercase mb-1"
                      style={{
                        color: "rgba(255,255,255,0.7)",
                        fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                      }}
                    >
                      {item.tag}
                    </div>
                    <h3
                      className="text-white"
                      style={{
                        fontFamily: "var(--font-fredoka), 'Fredoka One', cursive",
                        fontSize: "1.1rem",
                        lineHeight: 1.2,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="pg-desc-hidden text-[13px] mt-1.5"
                      style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.5 }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-5 sm:px-8" style={{ background: "#EFF9FE" }}>
        <div className="max-w-[960px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {t.stats.map((stat, i) => {
              const colors = ["#FF7043", "#4FC3F7", "#66BB6A", "#BA68C8"];
              return (
                <Reveal key={i} delay={i * 70}>
                  <div
                    className="bg-white rounded-2xl p-6 text-center transition-all duration-200 hover:-translate-y-1"
                    style={{ border: "2px solid #B3E5FC", boxShadow: "none" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = colors[i];
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "#B3E5FC";
                    }}
                  >
                    <div
                      className="font-black leading-none mb-2"
                      style={{
                        fontFamily: "var(--font-fredoka), 'Fredoka One', cursive",
                        fontSize: "clamp(2.5rem, 5vw, 4rem)",
                        color: colors[i],
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-[11px] font-bold uppercase tracking-[0.1em] leading-snug"
                      style={{
                        color: "#2C2C3A",
                        fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── LEVELS ────────────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20 px-5 sm:px-8">
        <div className="max-w-[960px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <Reveal>
              <div>
                <span
                  className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5"
                  style={{
                    background: "#FFF9C4",
                    color: "#F57F17",
                    fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                  }}
                >
                  Scolarité
                </span>
                <h2
                  className="mt-1"
                  style={{
                    fontFamily: "var(--font-fredoka), 'Fredoka One', cursive",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    color: "#2C2C3A",
                    lineHeight: 1.2,
                  }}
                >
                  {t.levels.title}
                </h2>
                <p
                  className="mt-4 text-[15px] leading-relaxed"
                  style={{ color: "#666", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
                >
                  {t.levels.subtitle}
                </p>
              </div>
            </Reveal>

            <div className="flex flex-col gap-3">
              {t.levels.items.map((level, i) => {
                const iconBgs = ["#FFCCBC", "#C8E6C9", "#B3E5FC", "#E1BEE7"];
                return (
                  <Reveal key={i} delay={i * 80}>
                    <div
                      className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 hover:-translate-x-0 hover:translate-x-1"
                      style={{
                        background: "#fff",
                        border: "2px solid #FFE082",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "#FFD54F";
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(255,213,79,0.25)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "#FFE082";
                        (e.currentTarget as HTMLElement).style.boxShadow = "";
                      }}
                    >
                      <div
                        className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                        style={{ background: iconBgs[i] }}
                      >
                        {level.icon}
                      </div>
                      <div>
                        <div
                          className="font-bold text-[15px]"
                          style={{ color: "#2C2C3A", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
                        >
                          {level.name}
                        </div>
                        <div
                          className="text-[13px] mt-0.5"
                          style={{ color: "#888", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
                        >
                          {level.desc}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWS ──────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-5 sm:px-8" style={{ background: "#EFF9FE" }}>
        <div className="max-w-[960px] mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <span
                className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-4"
                style={{
                  background: "#B3E5FC",
                  color: "#01579B",
                  fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                }}
              >
                {t.news.tag}
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-fredoka), 'Fredoka One', cursive",
                  fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)",
                  color: "#2C2C3A",
                  lineHeight: 1.2,
                }}
              >
                {t.news.title}
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PLACEHOLDER_NEWS.map((item, i) => (
              <Reveal key={i} delay={i * 80} className="h-full">
                <div
                  className="bg-white rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1 flex flex-col h-full"
                  style={{ border: "2px solid #B3E5FC" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(79,195,247,0.18)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "";
                  }}
                >
                  {/* Color stripe */}
                  <div style={{ height: "8px", background: item.stripe }} />
                  <div className="p-5 flex flex-col flex-1">
                    <div
                      className="text-[11px] font-bold uppercase tracking-[0.08em] mb-2"
                      style={{
                        color: "#90A4AE",
                        fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                      }}
                    >
                      {item.date}
                    </div>
                    <h4
                      className="mb-3 leading-snug flex-1"
                      style={{
                        fontFamily: "var(--font-fredoka), 'Fredoka One', cursive",
                        fontSize: "1.05rem",
                        color: "#2C2C3A",
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="text-[13px] leading-relaxed mb-4"
                      style={{ color: "#666", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
                    >
                      {item.excerpt}
                    </p>
                    <Link
                      href="/actualites"
                      className="text-[13px] font-bold"
                      style={{
                        color: "#4FC3F7",
                        fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                        textDecoration: "none",
                      }}
                    >
                      {t.news.read_more} →
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="text-center mt-8">
              <Link
                href="/actualites"
                className="inline-block font-bold text-[14px] px-6 py-2.5 rounded-full transition-all duration-150"
                style={{
                  fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                  background: "#4FC3F7",
                  color: "#fff",
                  boxShadow: "0 3px 0 #0288D1",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 5px 0 #0288D1";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 3px 0 #0288D1";
                }}
              >
                {t.news.all}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── EVENTS ────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-5 sm:px-8" style={{ background: "#FFF8E1" }}>
        <div className="max-w-[680px] mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <span
                className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-4"
                style={{
                  background: "#FFF9C4",
                  color: "#F57F17",
                  fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                }}
              >
                {t.events.tag}
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-fredoka), 'Fredoka One', cursive",
                  fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)",
                  color: "#2C2C3A",
                  lineHeight: 1.2,
                }}
              >
                {t.events.title}
              </h2>
            </div>
          </Reveal>

          <div className="flex flex-col gap-3">
            {t.events.items.map((event, i) => (
              <Reveal key={i} delay={i * 70}>
                <div
                  className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 transition-all duration-150"
                  style={{ border: "2px solid #FFE082" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(255,213,79,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "";
                    (e.currentTarget as HTMLElement).style.boxShadow = "";
                  }}
                >
                  {/* Date box */}
                  <div
                    className="shrink-0 w-14 text-center rounded-xl py-2"
                    style={{ background: "#FFD54F" }}
                  >
                    <span
                      className="block text-[10px] font-bold tracking-[0.1em] uppercase"
                      style={{ color: "#795548", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
                    >
                      {event.month}
                    </span>
                    <span
                      className="block leading-none"
                      style={{
                        fontFamily: "var(--font-fredoka), 'Fredoka One', cursive",
                        fontSize: "1.75rem",
                        color: "#2C2C3A",
                      }}
                    >
                      {event.day}
                    </span>
                  </div>
                  {/* Info */}
                  <div>
                    <div
                      className="font-bold text-[14px]"
                      style={{ color: "#2C2C3A", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
                    >
                      {event.title}
                    </div>
                    <div
                      className="text-[12px] mt-0.5"
                      style={{ color: "#888", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
                    >
                      {event.desc}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE BANNER ──────────────────────────────────────────────────────── */}
      <div className="py-16 sm:py-20 px-5 text-center" style={{ background: "#66BB6A" }}>
        <Reveal>
          <blockquote>
            <span
              className="text-white"
              style={{
                display: "inline",
                fontSize: "5rem",
                lineHeight: 0.5,
                verticalAlign: "-0.4em",
                opacity: 0.25,
                marginRight: "0.1rem",
                fontFamily: "Georgia, serif",
              }}
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <span
              className="text-white"
              style={{
                fontFamily: "var(--font-fredoka), 'Fredoka One', cursive",
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                lineHeight: 1.4,
              }}
            >
              {t.quote.text}
            </span>
          </blockquote>
          <p
            className="mt-4 font-bold"
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "13px",
              fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
            }}
          >
            — {t.quote.attr}
          </p>
        </Reveal>
      </div>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 px-5 text-center" style={{ background: "#2C2C3A" }}>
        <div className="max-w-[640px] mx-auto">
          <Reveal>
            <h2
              className="text-white mb-5 whitespace-pre-line"
              style={{
                fontFamily: "var(--font-fredoka), 'Fredoka One', cursive",
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                lineHeight: 1.2,
              }}
            >
              {t.cta.title}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p
              className="mb-10 text-[15px]"
              style={{
                color: "rgba(255,255,255,0.5)",
                fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                lineHeight: 1.6,
              }}
            >
              {t.cta.subtitle}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                className="font-bold px-7 py-3 rounded-full text-white text-[15px] transition-all duration-150"
                style={{
                  fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                  background: "#FF7043",
                  boxShadow: "0 4px 0 #BF360C",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 0 #BF360C";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 0 #BF360C";
                }}
              >
                {t.cta.contact}
              </button>
              <Link
                href="/login"
                className="font-bold px-7 py-3 rounded-full text-[15px] transition-all duration-150"
                style={{
                  fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                  background: "rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.7)",
                  border: "2px solid rgba(255,255,255,0.2)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.18)";
                  (e.currentTarget as HTMLElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)";
                }}
              >
                {t.cta.portal}
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
