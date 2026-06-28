"use client";
import { useLang } from "@/components/site/LanguageContext";
import { Reveal } from "@/components/site/Reveal";

const TIMELINE = [
  { year: "1986", text: "Fondation de l'École Privée Henitsoa à Avaratsena, Tsiroanomandidy" },
  { year: "Années 90", text: "Développement du cycle maternel et primaire, la réputation s'installe dans la région" },
  { year: "Années 2000", text: "Ouverture du collège — premières promotions de diplômés du BEPC" },
  { year: "Années 2010", text: "Introduction du chinois, de l'informatique, des arts et de la danse" },
  { year: "2026", text: "Un élève lauréat — 1ère place au classement national du CEPE" },
];

export default function AProposPage() {
  const { t } = useLang();
  const a = t.about;

  return (
    <div className="bg-white">

      {/* ── HERO — noir, typographique ── */}
      <section className="min-h-[60vh] bg-black flex flex-col items-center justify-center text-center px-5 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#C9A84C]/6 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10">
          <div className="animate-fade-up text-[10px] tracking-[0.3em] font-semibold text-[#C9A84C] uppercase mb-6">
            École Privée Henitsoa
          </div>
          <h1
            className="animate-fade-up delay-200 font-bold text-white leading-tight"
            style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)", letterSpacing: "-0.028em" }}
          >
            {a.hero_title}
          </h1>
          <div className="animate-fade-up delay-300 w-12 h-[2px] bg-[#C9A84C] mx-auto mt-8 mb-8" />
          <p className="animate-fade-up delay-400 font-light text-white/45 max-w-sm mx-auto leading-[1.47] text-base sm:text-lg">
            {a.hero_subtitle}
          </p>
        </div>
      </section>

      {/* ── HISTOIRE — blanc ── */}
      <section className="py-24 sm:py-36 bg-white">
        <div className="max-w-[980px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">
            <div>
              <Reveal>
                <div className="text-[10px] tracking-[0.25em] font-semibold text-[#C9A84C] uppercase mb-5">
                  1986 — 2026
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h2
                  className="font-bold text-[#1d1d1f] leading-tight"
                  style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", letterSpacing: "-0.028em" }}
                >
                  {a.history_title}
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-8 space-y-5">
                  {a.history_body.split("\n\n").map((para, i) => (
                    <p key={i} className="text-[17px] text-[#6e6e73] leading-[1.47]">
                      {para}
                    </p>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Stats column */}
            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-0 h-fit">
                {[
                  { value: "40", label: "Ans d'existence" },
                  { value: "4", label: "Cycles scolaires" },
                  { value: "40+", label: "Enseignants" },
                  { value: "1er", label: "Lauréat CEPE 2026" },
                ].map((s, i) => (
                  <div key={i} className="border-t-2 border-[#1d1d1f]/8 pt-6 pb-8 pr-6 hover:border-[#C9A84C] transition-colors group">
                    <div
                      className="font-black text-[#1d1d1f] leading-none mb-1 group-hover:text-[#C9A84C] transition-colors"
                      style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", letterSpacing: "-0.04em" }}
                    >
                      {s.value}
                    </div>
                    <div className="text-[11px] text-[#86868b] uppercase tracking-[0.12em]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── TIMELINE — gris Apple ── */}
      <section className="py-20 sm:py-28 bg-[#f5f5f7]">
        <div className="max-w-[680px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="text-[10px] tracking-[0.3em] font-semibold text-[#C9A84C] uppercase text-center mb-16">
              Jalons
            </div>
          </Reveal>
          <div className="space-y-0">
            {TIMELINE.map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="group flex gap-8 border-t border-[#1d1d1f]/8 py-8 hover:border-[#C9A84C]/40 transition-colors cursor-default">
                  <div className="w-24 shrink-0 text-[11px] font-black text-[#C9A84C] tracking-wide pt-0.5">
                    {item.year}
                  </div>
                  <p className="text-sm text-[#6e6e73] leading-[1.47] group-hover:text-[#1d1d1f] transition-colors">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-[#1d1d1f]/8" />
          </div>
        </div>
      </section>

      {/* ── VALEURS — blanc ── */}
      <section className="py-24 sm:py-36 bg-white">
        <div className="max-w-[980px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="text-[10px] tracking-[0.25em] font-semibold text-[#C9A84C] uppercase mb-5">
              Nos valeurs
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2
              className="font-bold text-[#1d1d1f] leading-tight mb-16"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", letterSpacing: "-0.028em" }}
            >
              {a.values_title}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {a.values.map((val, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="group border-t border-[#1d1d1f]/8 py-10 pr-10 hover:border-[#C9A84C]/40 transition-colors cursor-default">
                  <div className="text-[11px] font-black text-[#C9A84C] tracking-[0.15em] uppercase mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-3 group-hover:text-[#C9A84C] transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-sm text-[#6e6e73] leading-[1.47]">{val.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ÉQUIPE — noir ── */}
      <section className="py-24 sm:py-32 bg-black">
        <div className="max-w-[980px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <Reveal>
              <div className="text-[10px] tracking-[0.25em] font-semibold text-[#C9A84C] uppercase mb-5">
                Équipe pédagogique
              </div>
              <h2
                className="font-bold text-white leading-tight mb-6"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", letterSpacing: "-0.028em" }}
              >
                {a.team_title}
              </h2>
              <p className="text-[#6e6e73] leading-[1.47] text-[17px] mb-12">{a.team_desc}</p>
              <div className="flex gap-12">
                {[
                  { value: "40+", label: "Enseignants" },
                  { value: "40", label: "Ans" },
                  { value: "4", label: "Niveaux" },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="text-3xl font-black text-[#C9A84C] mb-1" style={{ letterSpacing: "-0.04em" }}>{s.value}</div>
                    <div className="text-[11px] text-[#86868b] uppercase tracking-widest">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="rounded-[18px] overflow-hidden bg-[#161616] border border-white/5 aspect-[4/3] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-[10px] tracking-[0.3em] text-white/20 uppercase mb-2">Photo à venir</div>
                  <div className="w-8 h-[1px] bg-[#C9A84C]/30 mx-auto" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CLOSING — gris Apple ── */}
      <section className="py-20 bg-[#f5f5f7] flex justify-center">
        <Reveal>
          <div className="text-center">
            <p className="text-[17px] italic text-[#86868b] mb-2">
              &ldquo;Un enfant bien éduqué est un avenir assuré&rdquo;
            </p>
            <div className="w-6 h-[1px] bg-[#C9A84C] mx-auto" />
            <p className="text-[10px] tracking-[0.2em] text-[#86868b] uppercase mt-3">
              Tsiroanomandidy · Madagascar · Depuis 1986
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
