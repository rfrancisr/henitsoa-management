"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, ReferenceLine, Cell,
} from "recharts";
import type { Role } from "@/app/generated/prisma/enums";
import { moyennePonderee } from "@/lib/notes-utils";

// ── Types ─────────────────────────────────────────────────────────────────────

type EleveItem = {
  id: string;
  nom: string;
  prenom: string;
  classes: { classe: { libelle: string; niveau: { libelle: string } } }[];
};

type ClasseItem = {
  id: string;
  libelle: string;
  niveau: { libelle: string };
};

type NoteData = {
  periodeId: string;
  matiereId: string;
  valeur: number;
  matiere: { libelle: string; coefficient: number };
};

type PeriodeData = { id: string; libelle: string; dateDebut: Date; dateFin: Date };

type Performance = {
  periodes: PeriodeData[];
  notes: NoteData[];
  appreciations: { periodeId: string; texte: string; mention: string }[];
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function noteColor(val: number): string {
  if (val >= 16) return "#1C4D30";
  if (val >= 12) return "#1C3D2E";
  if (val >= 10) return "#7A5C00";
  return "#8B2A2A";
}

function trendIcon(delta: number | null) {
  if (delta === null) return <span style={{ color: "var(--stoneDk)" }}>—</span>;
  if (delta > 0.5) return <span style={{ color: "var(--green)", fontWeight: 700 }}>↑</span>;
  if (delta < -0.5) return <span style={{ color: "var(--red)", fontWeight: 700 }}>↓</span>;
  return <span style={{ color: "var(--inkLt)" }}>→</span>;
}

function fmt(v: number | null) {
  return v === null ? "—" : v.toFixed(2);
}

// ── Composant principal ───────────────────────────────────────────────────────

export default function PerformanceClient({
  eleves,
  selectedEleveId,
  performance,
  role,
  classes,
  selectedClasseId,
}: {
  eleves: EleveItem[];
  selectedEleveId: string | null;
  performance: Performance | null;
  role: Role;
  classes: ClasseItem[];
  selectedClasseId: string | null;
}) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  function selectClasse(classeId: string) {
    if (classeId) {
      router.push(`/performance?c=${classeId}`);
    } else {
      router.push("/performance");
    }
  }

  const filtered = eleves.filter(
    (e) =>
      e.nom.toLowerCase().includes(search.toLowerCase()) ||
      e.prenom.toLowerCase().includes(search.toLowerCase())
  );

  function selectEleve(id: string) {
    const classeParam = selectedClasseId ? `&c=${selectedClasseId}` : "";
    router.push(`/performance?e=${id}${classeParam}`);
  }

  const selectedEleve = eleves.find((e) => e.id === selectedEleveId) ?? null;

  // ── Calculs de performance ─────────────────────────────────────────────────

  const stats = performance ? computeStats(performance) : null;

  return (
    <div className="flex gap-5 items-start">
      {/* ── Panel gauche : liste élèves ─────────────────────────────────── */}
      <div className="w-64 shrink-0 paper-card flex flex-col">
        {classes.length > 0 && (
          <div className="px-4 py-3" style={{ borderBottom: "1px solid var(--borderLt)" }}>
            <label
              style={{ display: "block", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--inkLt)", marginBottom: "6px" }}
            >
              Classe
            </label>
            <select
              value={selectedClasseId ?? ""}
              onChange={(e) => selectClasse(e.target.value)}
              style={{
                width: "100%",
                padding: "9px 12px",
                border: "1px solid var(--border)",
                borderRadius: "6px",
                fontSize: "14px",
                fontFamily: "var(--font-sans)",
                background: "var(--white)",
                color: "var(--ink)",
                outline: "none",
                cursor: "pointer",
              }}
              onFocus={(e) => {
                e.currentTarget.style.outline = "2px solid var(--forest)";
                e.currentTarget.style.outlineOffset = "1px";
              }}
              onBlur={(e) => { e.currentTarget.style.outline = "none"; }}
            >
              <option value="">Toutes les classes</option>
              {classes.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.libelle} — {c.niveau.libelle}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className="px-4 py-3" style={{ borderBottom: "1px solid var(--borderLt)" }}>
          <input
            type="text"
            placeholder="Rechercher…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "9px 12px",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              fontSize: "14px",
              fontFamily: "var(--font-sans)",
              background: "var(--white)",
              color: "var(--ink)",
              outline: "none",
            }}
            onFocus={(e) => {
              e.currentTarget.style.outline = "2px solid var(--forest)";
              e.currentTarget.style.outlineOffset = "1px";
            }}
            onBlur={(e) => { e.currentTarget.style.outline = "none"; }}
          />
        </div>
        <div>
          {filtered.length === 0 ? (
            <p className="px-4 py-6 text-xs text-center" style={{ color: "var(--inkLt)" }}>Aucun élève</p>
          ) : (
            filtered.map((e) => {
              const classe = e.classes[0]?.classe;
              const isActive = e.id === selectedEleveId;
              return (
                <button
                  key={e.id}
                  onClick={() => selectEleve(e.id)}
                  className="w-full text-left px-4 py-3 transition-colors"
                  style={{
                    borderBottom: "1px solid var(--borderLt)",
                    borderLeft: isActive ? "3px solid var(--forest)" : "3px solid transparent",
                    background: isActive ? "rgba(28,61,46,.06)" : undefined,
                  }}
                  onMouseEnter={(e_) => {
                    if (!isActive) (e_.currentTarget as HTMLElement).style.background = "var(--stoneLt)";
                  }}
                  onMouseLeave={(e_) => {
                    if (!isActive) (e_.currentTarget as HTMLElement).style.background = "";
                  }}
                >
                  <p style={{ fontSize: "15px", fontWeight: 500, color: isActive ? "var(--forest)" : "var(--ink)" }}>
                    {e.prenom} {e.nom}
                  </p>
                  <p style={{ fontSize: "13px", marginTop: "2px", color: "var(--inkMd)" }}>
                    {classe ? `${classe.libelle} · ${classe.niveau.libelle}` : "Classe non assignée"}
                  </p>
                </button>
              );
            })
          )}
        </div>
      </div>

      {/* ── Panel droit : dashboard élève ───────────────────────────────── */}
      <div className="flex-1 space-y-5">
        {!selectedEleve ? (
          <div className="paper-card h-full flex items-center justify-center">
            <div className="text-center">
              <p className="text-sm" style={{ color: "var(--stoneDk)" }}>Sélectionnez un élève</p>
              <p className="text-xs mt-1" style={{ color: "var(--borderLt)" }}>pour voir sa progression</p>
            </div>
          </div>
        ) : !performance || performance.periodes.length === 0 ? (
          <div className="paper-card p-8 flex items-center justify-center">
            <p className="text-sm" style={{ color: "var(--inkLt)" }}>Aucune donnée pour cet élève cette année.</p>
          </div>
        ) : stats ? (
          <>
            {/* En-tête élève */}
            <div className="paper-card px-6 py-4 flex items-center gap-4">
              <div
                className="avatar avatar-forest w-12 h-12 shrink-0"
                style={{ fontSize: "15px" }}
              >
                {selectedEleve.prenom.charAt(0)}{selectedEleve.nom.charAt(0)}
              </div>
              <div>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", fontWeight: 400, color: "var(--ink)" }}>
                  {selectedEleve.prenom} {selectedEleve.nom}
                </h2>
                <p className="text-sm" style={{ color: "var(--inkLt)" }}>
                  {selectedEleve.classes[0]?.classe.libelle} · {selectedEleve.classes[0]?.classe.niveau.libelle}
                </p>
              </div>
              <div className="ml-auto text-right">
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "30px", color: noteColor(stats.moyenneGenerale ?? 0) }}>
                  {fmt(stats.moyenneGenerale)}<span style={{ fontSize: "14px", color: "var(--inkLt)", fontFamily: "var(--font-sans)", fontWeight: 400 }}>/20</span>
                </p>
                <p className="text-xs" style={{ color: "var(--inkLt)" }}>Moyenne générale</p>
              </div>
            </div>

            {/* Cartes récap */}
            <div className="grid grid-cols-4 gap-4">
              <StatCard
                label="Meilleure période"
                value={fmt(stats.meilleurePeriode?.moyenne ?? null)}
                sub={stats.meilleurePeriode?.libelle ?? "—"}
                color="green"
              />
              <StatCard
                label="Tendance"
                value={(stats.trend ?? 0) > 0.5 ? "En hausse" : (stats.trend ?? 0) < -0.5 ? "En baisse" : "Stable"}
                sub={stats.trend !== null ? `${stats.trend > 0 ? "+" : ""}${stats.trend.toFixed(2)} pts` : "—"}
                color={(stats.trend ?? 0) > 0.5 ? "green" : (stats.trend ?? 0) < -0.5 ? "red" : "slate"}
              />
              <StatCard
                label="Meilleure matière"
                value={stats.meilleureMatiere?.libelle ?? "—"}
                sub={fmt(stats.meilleureMatiere?.moyenne ?? null)}
                color="blue"
              />
              <StatCard
                label="À améliorer"
                value={stats.mauvaiseMatiere?.libelle ?? "—"}
                sub={fmt(stats.mauvaiseMatiere?.moyenne ?? null)}
                color="orange"
              />
            </div>

            {/* Graphique évolution */}
            <div className="paper-card p-5">
              <p className="section-label">Évolution de la moyenne</p>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={stats.evolutionData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="gradMoy" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1C3D2E" stopOpacity={0.20} />
                      <stop offset="95%" stopColor="#1C3D2E" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#DDD5C0" />
                  <XAxis dataKey="periode" tick={{ fontSize: 11, fill: "#7A756C" }} />
                  <YAxis domain={[0, 20]} tick={{ fontSize: 11, fill: "#7A756C" }} />
                  <ReferenceLine y={10} stroke="#8B2A2A" strokeDasharray="4 4" strokeOpacity={0.4} />
                  <Tooltip
                    formatter={(v) => [`${Number(v).toFixed(2)}/20`, "Moyenne"]}
                    contentStyle={{ fontSize: 12, borderRadius: 6, border: "1px solid #DDD5C0", background: "#FDFCF9" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="moyenne"
                    stroke="#1C3D2E"
                    strokeWidth={2}
                    fill="url(#gradMoy)"
                    dot={{ r: 4, fill: "#1C3D2E" }}
                    connectNulls
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Graphique par matière */}
            <div className="paper-card p-5">
              <p className="section-label">Moyenne par matière</p>
              <ResponsiveContainer width="100%" height={Math.max(180, stats.matiereData.length * 36)}>
                <BarChart
                  data={stats.matiereData}
                  layout="vertical"
                  margin={{ top: 0, right: 30, left: 10, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#DDD5C0" horizontal={false} />
                  <XAxis type="number" domain={[0, 20]} tick={{ fontSize: 11, fill: "#7A756C" }} />
                  <YAxis type="category" dataKey="matiere" tick={{ fontSize: 11, fill: "#3D3D38" }} width={90} />
                  <ReferenceLine x={10} stroke="#8B2A2A" strokeDasharray="4 4" strokeOpacity={0.5} />
                  <Tooltip
                    formatter={(v) => [`${Number(v).toFixed(2)}/20`, "Moyenne"]}
                    contentStyle={{ fontSize: 12, borderRadius: 6, border: "1px solid #DDD5C0", background: "#FDFCF9" }}
                  />
                  <Bar dataKey="moyenne" radius={[0, 4, 4, 0]}>
                    {stats.matiereData.map((entry, i) => (
                      <Cell key={i} fill={noteColor(entry.moyenne)} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Tableau détaillé */}
            <div className="paper-card overflow-hidden">
              <div className="px-5 py-4" style={{ borderBottom: "1px solid var(--borderLt)" }}>
                <p className="section-label" style={{ marginBottom: 0 }}>Détail par matière et par période</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-xs uppercase tracking-wider" style={{ background: "var(--stoneLt)", borderBottom: "1px solid var(--borderLt)", color: "var(--inkLt)" }}>
                      <th className="text-left px-5 py-3 font-semibold">Matière</th>
                      <th className="text-center px-3 py-3 font-semibold">Coeff</th>
                      {performance.periodes.map((p) => (
                        <th key={p.id} className="text-center px-4 py-3 font-medium">{p.libelle}</th>
                      ))}
                      <th className="text-center px-4 py-3 font-medium">Moy. annuelle</th>
                      <th className="text-center px-3 py-3 font-medium">Tendance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats.tableauMatieres.map((row) => (
                      <tr key={row.matiereId} style={{ borderBottom: "1px solid var(--borderLt)" }}>
                        <td className="px-5 py-3 font-medium" style={{ color: "var(--ink)" }}>{row.libelle}</td>
                        <td className="px-3 py-3 text-center text-xs" style={{ color: "var(--inkLt)" }}>{row.coefficient}</td>
                        {performance.periodes.map((p) => {
                          const val = row.noteParPeriode[p.id] ?? null;
                          return (
                            <td key={p.id} className="px-4 py-3 text-center">
                              {val !== null ? (
                                <span
                                  className="inline-block px-2 py-0.5 rounded font-medium text-white text-xs"
                                  style={{ backgroundColor: noteColor(val) }}
                                >
                                  {val.toFixed(1)}
                                </span>
                              ) : (
                                <span style={{ color: "var(--stoneDk)" }}>—</span>
                              )}
                            </td>
                          );
                        })}
                        <td className="px-4 py-3 text-center font-semibold" style={{ color: row.moyenne !== null ? noteColor(row.moyenne) : "#d4cfc8" }}>
                          {fmt(row.moyenne)}
                        </td>
                        <td className="px-3 py-3 text-center">
                          {trendIcon(row.trend)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="font-semibold" style={{ background: "var(--stoneLt)", borderTop: "1px solid var(--borderLt)" }}>
                      <td className="px-5 py-3" style={{ color: "var(--ink)" }}>Moyenne générale</td>
                      <td />
                      {performance.periodes.map((p) => {
                        const moy = stats.evolutionData.find((d) => d.periodeId === p.id)?.moyenne ?? null;
                        return (
                          <td key={p.id} className="px-4 py-3 text-center">
                            <span style={{ color: moy !== null ? noteColor(moy) : "#94a3b8" }}>
                              {fmt(moy)}
                            </span>
                          </td>
                        );
                      })}
                      <td
                        className="px-4 py-3 text-center text-base"
                        style={{ color: stats.moyenneGenerale !== null ? noteColor(stats.moyenneGenerale) : "#94a3b8" }}
                      >
                        {fmt(stats.moyenneGenerale)}
                      </td>
                      <td className="px-3 py-3 text-center">{trendIcon(stats.trend)}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

// ── Carte statistique ─────────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  sub,
  color,
}: {
  label: string;
  value: string;
  sub: string;
  color: "green" | "blue" | "orange" | "red" | "slate";
}) {
  const colors = {
    green:  { bg: "rgba(28,77,48,0.08)",   text: "#1C4D30" },
    blue:   { bg: "rgba(28,61,46,0.08)",   text: "#1C3D2E" },
    orange: { bg: "rgba(122,92,0,0.08)",   text: "#7A5C00" },
    red:    { bg: "rgba(139,42,42,0.08)",  text: "#8B2A2A" },
    slate:  { bg: "rgba(122,117,108,0.07)", text: "#7A756C" },
  };
  const c = colors[color];
  return (
    <div className="paper-card p-4" style={{ background: c.bg, border: "1px solid rgba(0,0,0,0.06)" }}>
      <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: c.text, opacity: 0.7 }}>{label}</p>
      <p className="text-base font-bold leading-tight" style={{ color: c.text }}>{value}</p>
      <p className="text-xs mt-0.5" style={{ color: c.text, opacity: 0.55 }}>{sub}</p>
    </div>
  );
}

// ── Calculs stats ─────────────────────────────────────────────────────────────

function computeStats(perf: Performance) {
  const { notes, periodes } = perf;

  // Unique matieres
  const matieresMap = new Map<string, { libelle: string; coefficient: number }>();
  for (const n of notes) {
    if (!matieresMap.has(n.matiereId)) {
      matieresMap.set(n.matiereId, { libelle: n.matiere.libelle, coefficient: n.matiere.coefficient });
    }
  }

  // Evolution : moyenne par période
  const evolutionData = periodes.map((p) => {
    const notesPeriode = notes
      .filter((n) => n.periodeId === p.id)
      .map((n) => ({ valeur: n.valeur, coefficient: n.matiere.coefficient }));
    return {
      periodeId: p.id,
      periode: p.libelle,
      moyenne: moyennePonderee(notesPeriode),
    };
  });

  // Moyenne générale (toutes périodes confondues)
  const moyenneGenerale = moyennePonderee(
    notes.map((n) => ({ valeur: n.valeur, coefficient: n.matiere.coefficient }))
  );

  // Tendance générale (dernières deux périodes avec data)
  const periodesAvecData = evolutionData.filter((d) => d.moyenne !== null);
  let trend: number | null = null;
  if (periodesAvecData.length >= 2) {
    const last = periodesAvecData[periodesAvecData.length - 1].moyenne!;
    const prev = periodesAvecData[periodesAvecData.length - 2].moyenne!;
    trend = Math.round((last - prev) * 100) / 100;
  }

  // Meilleure période
  const meilleurePeriode = periodesAvecData.reduce<{ libelle: string; moyenne: number } | null>(
    (best, d) => (!best || d.moyenne! > best.moyenne ? { libelle: d.periode, moyenne: d.moyenne! } : best),
    null
  );

  // Tableau par matière
  const tableauMatieres = Array.from(matieresMap.entries())
    .map(([matiereId, { libelle, coefficient }]) => {
      const noteParPeriode: Record<string, number> = {};
      for (const p of periodes) {
        const note = notes.find((n) => n.matiereId === matiereId && n.periodeId === p.id);
        if (note) noteParPeriode[p.id] = note.valeur;
      }
      const notesMatiere = Object.values(noteParPeriode);
      const moyenne = notesMatiere.length > 0
        ? Math.round((notesMatiere.reduce((s, v) => s + v, 0) / notesMatiere.length) * 100) / 100
        : null;

      // Tendance par matière
      const valsChronologiques = periodes
        .map((p) => noteParPeriode[p.id] ?? null)
        .filter((v): v is number => v !== null);
      let trendMat: number | null = null;
      if (valsChronologiques.length >= 2) {
        trendMat = Math.round(
          (valsChronologiques[valsChronologiques.length - 1] - valsChronologiques[valsChronologiques.length - 2]) * 100
        ) / 100;
      }

      return { matiereId, libelle, coefficient, noteParPeriode, moyenne, trend: trendMat };
    })
    .sort((a, b) => (b.moyenne ?? 0) - (a.moyenne ?? 0));

  // Données graphique matières (triées)
  const matiereData = tableauMatieres
    .filter((r) => r.moyenne !== null)
    .map((r) => ({ matiere: r.libelle, moyenne: r.moyenne! }));

  const matieresAvecMoyenne = tableauMatieres.filter((r) => r.moyenne !== null);
  const meilleureMatiere = matieresAvecMoyenne[0] ?? null;
  const mauvaiseMatiere = matieresAvecMoyenne[matieresAvecMoyenne.length - 1] ?? null;

  return {
    evolutionData,
    matiereData,
    tableauMatieres,
    moyenneGenerale,
    trend,
    meilleurePeriode,
    meilleureMatiere,
    mauvaiseMatiere,
  };
}
