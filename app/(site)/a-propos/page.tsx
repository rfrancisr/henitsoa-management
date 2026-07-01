"use client";
import Image from "next/image";
import { useLang } from "@/components/site/LanguageContext";
import { Reveal } from "@/components/site/Reveal";

const TIMELINE = [
  { year: "1986", text: "Fondation de l'École Privée Henitsoa à Avaratsena, Tsiroanomandidy" },
  { year: "Années 90", text: "Développement du cycle maternel et primaire, la réputation s'installe dans la région" },
  { year: "Années 2000", text: "Ouverture du collège — premières promotions de diplômés du BEPC" },
  { year: "Années 2010", text: "Introduction du chinois, de l'informatique, des arts et de la danse" },
  { year: "2026", text: "Un élève lauréat — 1ère place au classement national du CEPE" },
];

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

export default function AProposPage() {
  const { t } = useLang();
  const a = t.about;

  const statColors = ["#FF7043", "#4FC3F7", "#66BB6A", "#BA68C8"];
  const statBorderColors = ["#FFCCBC", "#B3E5FC", "#C8E6C9", "#E1BEE7"];

  return (
    <div style={{ background: "#FDFBF6" }}>

      {/* ── HERO ── */}
      <section
        className="flex flex-col items-center justify-center text-center px-6 py-24 sm:py-32"
        style={{ background: "#2C2C3A" }}
      >
        <div
          className="animate-fade-up inline-block text-white text-[11px] font-bold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full mb-6"
          style={{ background: "#BA68C8", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
        >
          École Privée Henitsoa
        </div>
        <h1
          className="animate-fade-up delay-200"
          style={{
            fontFamily: "var(--font-fredoka), 'Fredoka One', cursive",
            fontSize: "clamp(3rem, 10vw, 7rem)",
            color: "#FFD54F",
            lineHeight: 1.1,
          }}
        >
          {a.hero_title}
        </h1>
        <p
          className="animate-fade-up delay-300 mt-6 max-w-sm mx-auto"
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "clamp(1rem, 2.2vw, 1.15rem)",
            lineHeight: 1.55,
            fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
            fontWeight: 600,
          }}
        >
          {a.hero_subtitle}
        </p>
      </section>

      <WaveDivider from="#2C2C3A" to="#FDFBF6" />

      {/* ── HISTOIRE ── */}
      <section className="py-16 sm:py-20 px-5 sm:px-8" style={{ background: "#FDFBF6" }}>
        <div className="max-w-[960px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <Reveal>
              <div>
                <span
                  className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5"
                  style={{
                    background: "#C8E6C9",
                    color: "#388E3C",
                    fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                  }}
                >
                  1986 — 2026
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
                  {a.history_title}
                </h2>
                <div className="mt-5 space-y-4">
                  {a.history_body.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      className="text-[15px] leading-relaxed"
                      style={{ color: "#666", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "40", label: "Ans d'existence" },
                { value: "4", label: "Cycles scolaires" },
                { value: "40+", label: "Enseignants" },
                { value: "1er", label: "Lauréat CEPE 2026" },
              ].map((s, i) => (
                <Reveal key={i} delay={i * 70}>
                  <div
                    className="bg-white rounded-2xl p-6 text-center transition-all duration-200 hover:-translate-y-1"
                    style={{ border: `2px solid ${statBorderColors[i]}` }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = statColors[i];
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = statBorderColors[i];
                    }}
                  >
                    <div
                      className="font-black leading-none mb-2"
                      style={{
                        fontFamily: "var(--font-fredoka), 'Fredoka One', cursive",
                        fontSize: "clamp(2rem, 4vw, 3rem)",
                        color: statColors[i],
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      className="text-[11px] font-bold uppercase tracking-[0.1em] leading-snug"
                      style={{
                        color: "#2C2C3A",
                        fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <WaveDivider from="#FDFBF6" to="#EFF9FE" />
      <section className="py-16 sm:py-20 px-5 sm:px-8" style={{ background: "#EFF9FE" }}>
        <div className="max-w-[680px] mx-auto">
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
                Jalons
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-fredoka), 'Fredoka One', cursive",
                  fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)",
                  color: "#2C2C3A",
                  lineHeight: 1.2,
                }}
              >
                Notre parcours
              </h2>
            </div>
          </Reveal>

          <div className="flex flex-col gap-3">
            {TIMELINE.map((item, i) => (
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
                  <div
                    className="shrink-0 min-w-[80px] text-center rounded-xl py-2 px-2"
                    style={{ background: "#FFD54F" }}
                  >
                    <span
                      className="block leading-tight font-black text-[13px]"
                      style={{
                        fontFamily: "var(--font-fredoka), 'Fredoka One', cursive",
                        color: "#2C2C3A",
                      }}
                    >
                      {item.year}
                    </span>
                  </div>
                  <p
                    className="text-[14px] leading-relaxed"
                    style={{ color: "#444", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
                  >
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <WaveDivider from="#EFF9FE" to="white" />

      {/* ── VALEURS ── */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 bg-white">
        <div className="max-w-[960px] mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <span
                className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-4"
                style={{
                  background: "#E1BEE7",
                  color: "#6A1B9A",
                  fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                }}
              >
                Nos valeurs
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-fredoka), 'Fredoka One', cursive",
                  fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)",
                  color: "#2C2C3A",
                  lineHeight: 1.2,
                }}
              >
                {a.values_title}
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {a.values.map((val, i) => {
              const stripes = ["#FF7043", "#4FC3F7", "#66BB6A", "#BA68C8"];
              return (
                <Reveal key={i} delay={i * 80}>
                  <div
                    className="bg-white rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1"
                    style={{ border: "2px solid #B3E5FC" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(79,195,247,0.15)";
                      (e.currentTarget as HTMLElement).style.borderColor = stripes[i];
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "";
                      (e.currentTarget as HTMLElement).style.borderColor = "#B3E5FC";
                    }}
                  >
                    <div style={{ height: "6px", background: stripes[i] }} />
                    <div className="p-6">
                      <div className="text-3xl mb-3">{val.icon}</div>
                      <h3
                        className="font-bold mb-2"
                        style={{
                          fontFamily: "var(--font-fredoka), 'Fredoka One', cursive",
                          fontSize: "1.2rem",
                          color: "#2C2C3A",
                        }}
                      >
                        {val.title}
                      </h3>
                      <p
                        className="text-[14px] leading-relaxed"
                        style={{ color: "#666", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
                      >
                        {val.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ÉQUIPE ── */}
      <WaveDivider from="white" to="#FFF8E1" />
      <section className="py-16 sm:py-20 px-5 sm:px-8" style={{ background: "#FFF8E1" }}>
        <div className="max-w-[960px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
                  Équipe pédagogique
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
                  {a.team_title}
                </h2>
                <p
                  className="mt-4 text-[15px] leading-relaxed"
                  style={{ color: "#666", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
                >
                  {a.team_desc}
                </p>
                <div className="flex gap-4 mt-8 flex-wrap">
                  {[
                    { value: "40+", label: "Enseignants", color: "#FF7043", bg: "#FFCCBC" },
                    { value: "40", label: "Ans", color: "#4FC3F7", bg: "#B3E5FC" },
                    { value: "4", label: "Niveaux", color: "#66BB6A", bg: "#C8E6C9" },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className="rounded-2xl px-5 py-3 text-center"
                      style={{ background: s.bg }}
                    >
                      <div
                        className="font-black leading-none"
                        style={{
                          fontFamily: "var(--font-fredoka), 'Fredoka One', cursive",
                          fontSize: "1.8rem",
                          color: s.color,
                        }}
                      >
                        {s.value}
                      </div>
                      <div
                        className="text-[11px] font-bold uppercase tracking-[0.08em] mt-1"
                        style={{ color: "#2C2C3A", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
                      >
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="rounded-[24px] overflow-hidden aspect-[4/3] relative">
                <Image
                  src="/site/directrice.jpg"
                  alt="Directrice de l'École Privée Henitsoa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <WaveDivider from="#FFF8E1" to="white" />

      {/* ── GALERIE ── */}
      <section className="py-16 px-5 sm:px-8 bg-white">
        <div className="max-w-[960px] mx-auto">
          <div className="grid grid-cols-3 gap-4">
            {[
              { src: "/site/rova.jpg", alt: "Patrimoine malgache" },
              { src: "/site/prof.jpg", alt: "Enseignants Henitsoa" },
              { src: "/site/prof2.jpg", alt: "Corps enseignant" },
            ].map((photo, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="33vw"
                    className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE BANNER ── */}
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
    </div>
  );
}
