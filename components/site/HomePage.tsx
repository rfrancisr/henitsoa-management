"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLang, LangProvider } from "./LanguageContext";
import { SiteNavbar } from "./SiteNavbar";
import { SiteFooter } from "./SiteFooter";
import { Reveal } from "./Reveal";

type NewsItem = {
  date: string;
  category: string;
  title: string;
  excerpt: string;
};

const NOTE_ROTATIONS = [-2.4, 1.6, -1.2];

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

/* ── Stage underline squiggle ─────────────────────────────────────────────── */
function Underline({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 220 14" height="14" className="mt-1" aria-hidden="true">
      <path d="M2 10 Q55 0 110 8 T218 6" stroke={color} strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function HomeContent({ news }: { news: NewsItem[] }) {
  const { t } = useLang();
  const [urgencyVisible, setUrgencyVisible] = useState(true);
  const displayNews = news.length > 0 ? news : t.news.fallback;

  const pillarPhotos = [
    "/site/art.jpg",
    "/site/informatique.jpg",
    "/site/rova.jpg",
    "/site/sakafo.jpg",
    "/site/foot.jpg",
  ];

  return (
    <div style={{ background: "#FBF4E2" }}>
      {/* ── URGENCY BAR ───────────────────────────────────────────────────────── */}
      {urgencyVisible && (
        <div style={{ background: "#213B26", color: "#fff" }} className="relative">
          <div className="max-w-[980px] mx-auto px-10 py-2 flex items-center justify-center gap-3 flex-wrap text-center">
            <span
              className="text-[13px] font-bold"
              style={{ fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
            >
              {t.hero.urgency}
            </span>
            <Link
              href="/login"
              className="text-[13px] font-bold underline"
              style={{ color: "#F2B705", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
            >
              {t.hero.urgency_link} →
            </Link>
            <button
              onClick={() => setUrgencyVisible(false)}
              aria-label="Masquer ce message"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-lg leading-none px-2"
            >
              ×
            </button>
          </div>
        </div>
      )}

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
        <div className="absolute inset-0" style={{ background: "rgba(33,59,38,0.74)" }} />

        <div className="relative z-10 flex flex-col items-center" style={{ paddingTop: "2rem" }}>
          <div
            className="animate-fade-up inline-block text-white text-[11px] font-bold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full mb-6"
            style={{ background: "#C43B2C", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
          >
            {t.hero.badge}
          </div>

          <h1
            className="animate-fade-up delay-200 leading-none"
            style={{
              fontFamily: "var(--font-baloo), 'Baloo 2', sans-serif",
              fontSize: "clamp(3.5rem, 14vw, 10rem)",
              letterSpacing: "-0.02em",
              color: "#F2B705",
            }}
          >
            HENITSOA
          </h1>

          <p
            className="animate-fade-up delay-300 mt-6 max-w-sm mx-auto"
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "clamp(1rem, 2.2vw, 1.15rem)",
              lineHeight: 1.55,
              fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
              fontWeight: 600,
            }}
          >
            {t.hero.tagline}
          </p>

          <div className="animate-fade-up delay-400 flex flex-col sm:flex-row items-center gap-4 mt-10 flex-wrap justify-center">
            <Link
              href="/inscription"
              className="font-bold px-7 py-3 rounded-full transition-all duration-150"
              style={{
                fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                fontSize: "15px",
                background: "#F2B705",
                color: "#213B26",
                boxShadow: "0 4px 0 #B98E04",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 0 #B98E04";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 0 #B98E04";
              }}
            >
              {t.nav.admission}
            </Link>
            <Link
              href="/a-propos"
              className="text-white font-bold px-7 py-3 rounded-full transition-all duration-150"
              style={{
                fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                fontSize: "15px",
                background: "#C43B2C",
                boxShadow: "0 4px 0 #8B2A1F",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 0 #8B2A1F";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 0 #8B2A1F";
              }}
            >
              {t.hero.cta_primary}
            </Link>
          </div>

          {/* Trust strip */}
          <div className="flex items-center gap-6 flex-wrap justify-center mt-8">
            <div
              className="flex items-center gap-2 text-white text-[13px] font-bold"
              style={{ fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
            >
              <span aria-hidden="true">🏆</span> {t.hero.trust_cepe}
            </div>
            <div
              className="flex items-center gap-2 text-white text-[13px] font-bold"
              style={{ fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
            >
              <span aria-hidden="true">👨‍👩‍👧</span> {t.hero.trust_places}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2" style={{ zIndex: 2 }}>
          <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)" }} />
        </div>
      </section>

      <WaveDivider from="transparent" to="#FFFDF8" />

      {/* ── PHOTO MOSAIC ("Pourquoi nous choisir") ───────────────────────────────── */}
      <section className="py-16 sm:py-20 px-5 sm:px-8" style={{ background: "#FFFDF8" }}>
        <div className="max-w-[960px] mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <span
                className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-4"
                style={{
                  background: "#FCE29B",
                  color: "#213B26",
                  fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                }}
              >
                {t.pillars.tag}
              </span>
              <h2
                className="mt-1"
                style={{
                  fontFamily: "var(--font-baloo), 'Baloo 2', sans-serif",
                  fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)",
                  color: "#213B26",
                  lineHeight: 1.2,
                }}
              >
                {t.pillars.title}
              </h2>
            </div>
          </Reveal>

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
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: item.color }}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 z-10 transition-all duration-300 group-hover:pb-5"
                    style={{
                      padding: "1rem 1.25rem",
                      background: "linear-gradient(to top, rgba(33,28,20,0.82) 0%, transparent 100%)",
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
                        fontFamily: "var(--font-baloo), 'Baloo 2', sans-serif",
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

      {/* ── WHY US ────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-5 sm:px-8" style={{ background: "#FBF4E2" }}>
        <div className="max-w-[960px] mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <span
                className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-4"
                style={{
                  background: "#F5D0C9",
                  color: "#C43B2C",
                  fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                }}
              >
                {t.whyUs.eyebrow}
              </span>
              <h2
                className="mt-1 mx-auto"
                style={{
                  fontFamily: "var(--font-baloo), 'Baloo 2', sans-serif",
                  fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)",
                  color: "#213B26",
                  lineHeight: 1.25,
                  maxWidth: "24ch",
                }}
              >
                {t.whyUs.title}
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.whyUs.items.map((item, i) => (
              <Reveal key={i} delay={i * 80} className="h-full">
                <div
                  className="rounded-2xl p-6 h-full"
                  style={{ background: "#FFFDF8", boxShadow: "0 10px 24px rgba(43,58,42,0.10)" }}
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-xl mb-4"
                    style={{ background: "#FCE29B" }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    className="mb-2"
                    style={{ fontFamily: "var(--font-baloo), 'Baloo 2', sans-serif", fontSize: "1.05rem", color: "#213B26" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "#4A5A48" }}>
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCOLARITÉ ─────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-5 sm:px-8" style={{ background: "#2F5233" }}>
        <div className="max-w-[960px] mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <span
                className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-4"
                style={{ background: "#F2B705", color: "#213B26", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
              >
                {t.levels.eyebrow}
              </span>
              <h2 style={{ fontFamily: "var(--font-baloo), 'Baloo 2', sans-serif", fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", color: "#fff", lineHeight: 1.2 }}>
                {t.levels.title}
              </h2>
              <p className="mt-3 text-[15px]" style={{ color: "rgba(255,255,255,0.85)" }}>
                {t.levels.subtitle}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {t.levels.items.map((level, i) => (
              <Reveal key={i} delay={i * 80}>
                <div
                  className="rounded-2xl p-6"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)" }}
                >
                  <span
                    className="inline-block text-[12px] font-bold px-3 py-1 rounded-full mb-3"
                    style={{ background: "#F2B705", color: "#213B26", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
                  >
                    {level.age}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl" aria-hidden="true">{level.icon}</span>
                    <h3 style={{ fontFamily: "var(--font-baloo), 'Baloo 2', sans-serif", fontSize: "1.4rem", color: "#fff" }}>
                      {level.name}
                    </h3>
                  </div>
                  <Underline color="#F2B705" />
                  <p className="mt-2 text-[14px]" style={{ color: "rgba(255,255,255,0.85)" }}>
                    {level.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIE À L'ÉCOLE ─────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-5 sm:px-8" style={{ background: "#FFFDF8" }}>
        <div className="max-w-[960px] mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <span
                className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-4"
                style={{ background: "#D8C296", color: "#213B26", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
              >
                {t.vieEcole.eyebrow}
              </span>
              <h2 style={{ fontFamily: "var(--font-baloo), 'Baloo 2', sans-serif", fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", color: "#213B26", lineHeight: 1.2 }}>
                {t.vieEcole.title}
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {t.vieEcole.tiles.map((tile, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="text-center p-6 rounded-2xl" style={{ background: "#FBF4E2" }}>
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl"
                    style={{ background: tile.color }}
                  >
                    {tile.icon}
                  </div>
                  <h3 className="text-[15px]" style={{ fontFamily: "var(--font-nunito), 'Nunito', sans-serif", fontWeight: 800, color: "#213B26" }}>
                    {tile.title}
                  </h3>
                  <p className="text-[13px] mt-1" style={{ color: "#4A5A48" }}>
                    {tile.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ANNONCES (corkboard) ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-5 sm:px-8" style={{ background: "#D8C296" }}>
          <div className="max-w-[960px] mx-auto">
            <Reveal>
              <div className="flex items-end justify-between gap-4 flex-wrap mb-10">
                <div>
                  <span
                    className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase mb-2"
                    style={{ color: "#213B26", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
                  >
                    {t.news.eyebrow}
                  </span>
                  <h2 style={{ fontFamily: "var(--font-baloo), 'Baloo 2', sans-serif", fontSize: "clamp(1.7rem, 3vw, 2.3rem)", color: "#213B26" }}>
                    {t.news.title}
                  </h2>
                </div>
                <p style={{ fontFamily: "var(--font-caveat), 'Caveat', cursive", fontSize: "1.2rem", color: "#213B26" }}>
                  {t.news.pinned}
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayNews.map((item, i) => (
                <Reveal key={i} delay={i * 80} className="h-full">
                  <Link
                    href="/actualites"
                    className="relative block h-full rounded-sm p-6 transition-transform duration-200 hover:-translate-y-1"
                    style={{
                      background: "#FFFCF3",
                      boxShadow: "0 14px 20px rgba(43,58,42,0.18)",
                      transform: `rotate(${NOTE_ROTATIONS[i % NOTE_ROTATIONS.length]}deg)`,
                      textDecoration: "none",
                    }}
                  >
                    <span
                      className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full"
                      style={{ background: "#E1483A", boxShadow: "0 3px 4px rgba(0,0,0,0.3)" }}
                      aria-hidden="true"
                    />
                    <span
                      className="block text-[11px] font-bold uppercase tracking-[0.05em] mb-2"
                      style={{ color: "#C43B2C", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
                    >
                      {item.category}
                    </span>
                    <span
                      className="float-right ml-2 text-[1.05rem]"
                      style={{ fontFamily: "var(--font-caveat), 'Caveat', cursive", color: "#3E8FC1", fontWeight: 700 }}
                    >
                      {item.date}
                    </span>
                    <h3
                      className="mb-2 clear-both"
                      style={{ fontFamily: "var(--font-baloo), 'Baloo 2', sans-serif", fontSize: "1.1rem", color: "#213B26" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[13px] mb-3" style={{ color: "#4A5A48" }}>
                      {item.excerpt}
                    </p>
                    <span className="text-[13px] font-bold" style={{ color: "#213B26" }}>
                      {t.news.read_more} →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <div className="text-right mt-10">
                <Link
                  href="/actualites"
                  className="text-[14px] font-bold"
                  style={{ color: "#213B26", borderBottom: "2px solid #F2B705", paddingBottom: "2px" }}
                >
                  {t.news.all}
                </Link>
              </div>
            </Reveal>
          </div>
      </section>

      {/* ── TESTIMONIAL ───────────────────────────────────────────────────────── */}
      <div className="py-16 sm:py-20 px-5 flex justify-center" style={{ background: "#FBF4E2" }}>
        <Reveal>
          <div
            className="max-w-[640px] text-center rounded-[26px] px-8 sm:px-10 py-9"
            style={{ background: "#fff", border: "2px solid #213B26", boxShadow: "0 10px 24px rgba(43,58,42,0.10)" }}
          >
            <blockquote>
              <span
                style={{
                  display: "inline",
                  fontSize: "3.5rem",
                  lineHeight: 0.5,
                  verticalAlign: "-0.4em",
                  opacity: 0.25,
                  marginRight: "0.1rem",
                  fontFamily: "Georgia, serif",
                  color: "#213B26",
                }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <span style={{ fontFamily: "var(--font-baloo), 'Baloo 2', sans-serif", fontSize: "clamp(1.15rem, 2.4vw, 1.4rem)", color: "#213B26", lineHeight: 1.4 }}>
                {t.testimonial.quote}
              </span>
            </blockquote>
            <p className="mt-4 font-bold text-[13px]" style={{ color: "#4A5A48" }}>
              {t.testimonial.attr}
            </p>
          </div>
        </Reveal>
      </div>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────────── */}
      <section className="px-5 sm:px-8 pb-16 sm:pb-20" style={{ background: "#FBF4E2" }}>
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <div
              className="rounded-[28px] text-center px-6 sm:px-12 py-14 sm:py-16"
              style={{ background: "#C43B2C" }}
            >
              <h2
                className="text-white mb-4 whitespace-pre-line"
                style={{ fontFamily: "var(--font-baloo), 'Baloo 2', sans-serif", fontSize: "clamp(2rem, 4.5vw, 3rem)", lineHeight: 1.2 }}
              >
                {t.cta.title}
              </h2>
              <p className="mb-10 text-[15px]" style={{ color: "rgba(255,255,255,0.9)" }}>
                {t.cta.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
                <Link
                  href="/inscription"
                  className="font-bold px-7 py-3 rounded-full text-[15px]"
                  style={{ fontFamily: "var(--font-nunito), 'Nunito', sans-serif", background: "#F2B705", color: "#213B26" }}
                >
                  {t.nav.admission}
                </Link>
                <a
                  href={`tel:${t.footer.phone.replace(/\s/g, "")}`}
                  className="font-bold px-7 py-3 rounded-full text-[15px] border-2"
                  style={{ fontFamily: "var(--font-nunito), 'Nunito', sans-serif", color: "#fff", borderColor: "#fff" }}
                >
                  {t.cta.contact}
                </a>
                <Link
                  href="/login"
                  className="font-bold px-7 py-3 rounded-full text-[15px] border-2"
                  style={{ fontFamily: "var(--font-nunito), 'Nunito', sans-serif", color: "#fff", borderColor: "#fff" }}
                >
                  {t.cta.portal}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

export function HomePage({ news }: { news: NewsItem[] }) {
  return (
    <LangProvider>
      <HomeContent news={news} />
    </LangProvider>
  );
}
