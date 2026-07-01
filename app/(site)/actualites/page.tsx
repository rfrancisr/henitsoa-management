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
    stripe: "#FF7043",
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
    stripe: "#4FC3F7",
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
    stripe: "#BA68C8",
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
    stripe: "#66BB6A",
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
    stripe: "#FFD54F",
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
    stripe: "#FF7043",
    featured: false,
  },
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

export default function ActualitesPage() {
  const { t } = useLang();
  const featured = ARTICLES.find((a) => a.featured)!;
  const rest = ARTICLES.filter((a) => !a.featured);

  return (
    <div style={{ background: "#FDFBF6" }}>

      {/* ── HERO ── */}
      <section
        className="flex flex-col items-center justify-center text-center px-6 py-24 sm:py-32"
        style={{ background: "#2C2C3A" }}
      >
        <div
          className="animate-fade-up inline-block text-white text-[11px] font-bold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full mb-6"
          style={{ background: "#4FC3F7", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
        >
          Vie de l&apos;école
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
          {t.actualites.title}
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
          {t.actualites.subtitle}
        </p>
      </section>

      <WaveDivider from="#2C2C3A" to="#FDFBF6" />

      {/* ── ARTICLE VEDETTE ── */}
      <section className="py-16 sm:py-20 px-5 sm:px-8" style={{ background: "#FDFBF6" }}>
        <div className="max-w-[960px] mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <span
                className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full"
                style={{
                  background: "#FFCCBC",
                  color: "#BF360C",
                  fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                }}
              >
                À la une
              </span>
            </div>
          </Reveal>

          <Reveal>
            <div
              className="bg-white rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1"
              style={{ border: "2px solid #FFCCBC" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(255,112,67,0.15)";
                (e.currentTarget as HTMLElement).style.borderColor = "#FF7043";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "";
                (e.currentTarget as HTMLElement).style.borderColor = "#FFCCBC";
              }}
            >
              <div style={{ height: "8px", background: featured.stripe }} />
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div
                    className="text-[11px] font-bold uppercase tracking-[0.08em] mb-3"
                    style={{ color: "#90A4AE", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
                  >
                    {featured.date} · {featured.category}
                  </div>
                  <h2
                    className="mb-4 leading-snug"
                    style={{
                      fontFamily: "var(--font-fredoka), 'Fredoka One', cursive",
                      fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                      color: "#2C2C3A",
                      lineHeight: 1.25,
                    }}
                  >
                    {featured.title}
                  </h2>
                  <p
                    className="text-[14px] leading-relaxed mb-6"
                    style={{ color: "#666", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
                  >
                    {featured.excerpt}
                  </p>
                  <span
                    className="text-[13px] font-bold"
                    style={{
                      color: "#FF7043",
                      fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                      cursor: "pointer",
                    }}
                  >
                    {t.news.read_more} →
                  </span>
                </div>
                <div className="relative aspect-[4/3] lg:aspect-auto min-h-[240px]">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── GRILLE ARTICLES ── */}
      <WaveDivider from="#FDFBF6" to="#EFF9FE" />
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
                Toutes les actualités
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((article, i) => (
              <Reveal key={article.id} delay={i * 80} className="h-full">
                <div
                  className="bg-white rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1 flex flex-col h-full"
                  style={{ border: "2px solid #B3E5FC" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(79,195,247,0.18)";
                    (e.currentTarget as HTMLElement).style.borderColor = article.stripe;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "";
                    (e.currentTarget as HTMLElement).style.borderColor = "#B3E5FC";
                  }}
                >
                  <div style={{ height: "8px", background: article.stripe }} />
                  <div className="p-5 flex flex-col flex-1">
                    <div
                      className="text-[11px] font-bold uppercase tracking-[0.08em] mb-1"
                      style={{ color: "#90A4AE", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
                    >
                      {article.date}
                    </div>
                    <div
                      className="text-[11px] font-bold uppercase tracking-[0.06em] mb-3"
                      style={{ color: "#AAA", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
                    >
                      {article.category}
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
                      {article.title}
                    </h4>
                    <p
                      className="text-[13px] leading-relaxed mb-4"
                      style={{ color: "#666", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
                    >
                      {article.excerpt}
                    </p>
                    <span
                      className="text-[13px] font-bold"
                      style={{
                        color: "#4FC3F7",
                        fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                        cursor: "pointer",
                      }}
                    >
                      {t.news.read_more} →
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <WaveDivider from="#EFF9FE" to="#2C2C3A" />
      <section className="py-24 sm:py-28 px-5" style={{ background: "#2C2C3A" }}>
        <div className="max-w-[680px] mx-auto text-center">
          <Reveal>
            <span
              className="inline-block text-[11px] font-bold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full mb-6"
              style={{
                background: "#BA68C8",
                color: "#fff",
                fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
              }}
            >
              Newsletter
            </span>
            <h2
              className="text-white mb-5"
              style={{
                fontFamily: "var(--font-fredoka), 'Fredoka One', cursive",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                lineHeight: 1.2,
              }}
            >
              Restez informé
            </h2>
            <p
              className="mb-10 text-[15px]"
              style={{
                color: "rgba(255,255,255,0.5)",
                fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                lineHeight: 1.6,
              }}
            >
              Recevez les actualités de l&apos;École Privée Henitsoa dans votre boîte mail.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-5 py-3.5 rounded-full text-white text-sm focus:outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "2px solid rgba(255,255,255,0.12)",
                  fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                }}
                onFocus={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,213,79,0.5)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)";
                }}
                onBlur={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                }}
              />
              <button
                className="font-bold px-7 py-3.5 rounded-full text-white text-[15px] whitespace-nowrap transition-all duration-150"
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
                S&apos;inscrire
              </button>
            </div>
            <p
              className="text-[11px] mt-4"
              style={{ color: "#888", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
            >
              Fonctionnalité disponible prochainement.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
