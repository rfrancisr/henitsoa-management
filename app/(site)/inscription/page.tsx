"use client";
import { useLang } from "@/components/site/LanguageContext";
import { Reveal } from "@/components/site/Reveal";

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

export default function InscriptionPage() {
  const { t } = useLang();
  const a = t.admission;

  return (
    <div style={{ background: "#FBF4E2" }}>
      {/* ── HERO ── */}
      <section
        className="flex flex-col items-center justify-center text-center px-6 py-20 sm:py-24"
        style={{ background: "#213B26" }}
      >
        <span
          className="inline-block text-[11px] font-bold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full mb-6"
          style={{ background: "#C43B2C", color: "#fff", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
        >
          {a.eyebrow}
        </span>
        <h1
          style={{
            fontFamily: "var(--font-baloo), 'Baloo 2', sans-serif",
            fontSize: "clamp(2.4rem, 6vw, 4rem)",
            color: "#F2B705",
            lineHeight: 1.1,
          }}
        >
          {a.hero_title}
        </h1>
        <p
          className="mt-1"
          style={{
            fontFamily: "var(--font-baloo), 'Baloo 2', sans-serif",
            fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
            color: "#fff",
          }}
        >
          {a.hero_years}
        </p>
        <p
          className="hand mt-4 max-w-md"
          style={{ fontFamily: "var(--font-caveat), 'Caveat', cursive", fontSize: "1.4rem", color: "rgba(255,255,255,0.9)" }}
        >
          {a.hero_subtitle}
        </p>
        <span
          className="inline-block mt-6 text-[13px] font-bold px-5 py-2 rounded-full"
          style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
        >
          {a.period_label}
        </span>
      </section>

      <WaveDivider from="#213B26" to="#FBF4E2" />

      {/* ── INSCRIPTION / RÉINSCRIPTION ── */}
      <section className="py-16 sm:py-20 px-5 sm:px-8">
        <div className="max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              tag: a.new_title,
              title: a.new_subtitle,
              items: a.new_items,
              feeLabel: a.new_fee_label,
              fee: a.new_fee,
              tuitionLabel: a.new_tuition_label,
              tuition: a.new_tuition,
            },
            {
              tag: a.returning_title,
              title: a.returning_subtitle,
              items: a.returning_items,
              feeLabel: a.returning_fee_label,
              fee: a.returning_fee,
              tuitionLabel: a.returning_tuition_label,
              tuition: a.returning_tuition,
            },
          ].map((card, i) => (
            <Reveal key={i} delay={i * 100}>
              <div
                className="rounded-2xl p-7 h-full"
                style={{ background: "#FFFDF8", boxShadow: "0 10px 24px rgba(43,58,42,0.10)", borderTop: "4px solid #2F5233" }}
              >
                <span
                  className="block text-[11px] font-bold uppercase tracking-[0.08em] mb-2"
                  style={{ color: "#C97A2B", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
                >
                  {card.tag}
                </span>
                <h2
                  className="mb-4"
                  style={{ fontFamily: "var(--font-baloo), 'Baloo 2', sans-serif", fontSize: "1.7rem", color: "#213B26" }}
                >
                  {card.title}
                </h2>
                <ul className="space-y-2 mb-6">
                  {card.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-[14px] leading-relaxed"
                      style={{ color: "#4A5A48", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
                    >
                      <span style={{ color: "#C43B2C" }}>—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="rounded-xl px-5 py-4 space-y-2" style={{ background: "#FCE29B" }}>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-[13px]" style={{ color: "#213B26", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}>
                      {card.feeLabel}
                    </span>
                    <span className="font-bold text-[16px]" style={{ color: "#213B26", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}>
                      {card.fee}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-[13px]" style={{ color: "#213B26", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}>
                      {card.tuitionLabel}
                    </span>
                    <span className="font-bold text-[16px]" style={{ color: "#213B26", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}>
                      {card.tuition}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── ÂGE / HORAIRES ── */}
      <section className="pb-16 sm:pb-20 px-5 sm:px-8">
        <div className="max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-2xl p-7 h-full" style={{ background: "#FFFDF8", boxShadow: "0 10px 24px rgba(43,58,42,0.10)" }}>
              <h3 className="mb-1" style={{ fontFamily: "var(--font-baloo), 'Baloo 2', sans-serif", fontSize: "1.2rem", color: "#213B26" }}>
                {a.age_title}
              </h3>
              <p className="text-[12px] italic mb-4" style={{ color: "#4A5A48", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}>
                {a.age_subtitle}
              </p>
              <ul>
                {a.age_rows.map((row, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between text-[14px] py-2"
                    style={{ borderBottom: i < a.age_rows.length - 1 ? "1px dotted rgba(43,58,42,0.2)" : "none", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
                  >
                    <span style={{ color: "#4A5A48", fontWeight: 700 }}>{row.born}</span>
                    <span style={{ color: "#213B26", fontWeight: 800 }}>→ {row.cls}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl p-7 h-full" style={{ background: "#FFFDF8", boxShadow: "0 10px 24px rgba(43,58,42,0.10)" }}>
              <h3 className="mb-4" style={{ fontFamily: "var(--font-baloo), 'Baloo 2', sans-serif", fontSize: "1.2rem", color: "#213B26" }}>
                {a.hours_title}
              </h3>
              <ul className="mb-4">
                {a.hours_rows.map((row, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between text-[14px] py-2"
                    style={{ borderBottom: "1px dotted rgba(43,58,42,0.2)", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
                  >
                    <span style={{ color: "#4A5A48", fontWeight: 700 }}>{row.period}</span>
                    <span style={{ color: "#213B26", fontWeight: 800 }}>{row.time}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[13px]" style={{ color: "#4A5A48", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}>
                {a.hours_note}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TRANSPORT ── */}
      <section className="pb-16 sm:pb-20 px-5 sm:px-8">
        <div className="max-w-[960px] mx-auto">
          <Reveal>
            <div
              className="rounded-xl px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-2"
              style={{ background: "#D8C296", borderLeft: "4px solid #213B26" }}
            >
              <span
                className="text-[11px] font-bold uppercase tracking-[0.08em]"
                style={{ color: "#213B26", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
              >
                {a.transport_label}
              </span>
              <span className="text-[14px]" style={{ color: "#213B26", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}>
                {a.transport_note}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── BANNIÈRE FIDIRANA ── */}
      <section className="pb-16 sm:pb-20 px-5 sm:px-8">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <div className="rounded-[24px] text-center px-6 py-12" style={{ background: "#C43B2C" }}>
              <span
                className="inline-block text-[11px] font-bold uppercase tracking-[0.1em] mb-3"
                style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
              >
                {a.banner_tag}
              </span>
              <h2 className="text-white" style={{ fontFamily: "var(--font-baloo), 'Baloo 2', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
                {a.banner_date}
              </h2>
              <p
                className="mt-4"
                style={{ fontFamily: "var(--font-caveat), 'Caveat', cursive", fontSize: "1.3rem", color: "rgba(255,255,255,0.92)" }}
              >
                {a.banner_quote}
              </p>
              <a
                href={`tel:${t.footer.phone.replace(/\s/g, "")}`}
                className="inline-block mt-8 font-bold px-7 py-3 rounded-full text-[15px]"
                style={{ fontFamily: "var(--font-nunito), 'Nunito', sans-serif", background: "#F2B705", color: "#213B26" }}
              >
                {t.cta.contact}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
