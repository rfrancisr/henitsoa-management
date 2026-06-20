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
  if (val >= 16) return "#3b82f6";
  if (val >= 14) return "#22c55e";
  if (val >= 12) return "#84cc16";
  if (val >= 10) return "#f59e0b";
  return "#ef4444";
}

function trendIcon(delta: number | null) {
  if (delta === null) return <span className="text-stone-200">—</span>;
  if (delta > 0.5) return <span className="text-green-500 font-bold">↑</span>;
  if (delta < -0.5) return <span className="text-red-500 font-bold">↓</span>;
  return <span className="text-stone-400">→</span>;
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
}: {
  eleves: EleveItem[];
  selectedEleveId: string | null;
  performance: Performance | null;
  role: Role;
}) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const filtered = eleves.filter(
    (e) =>
      e.nom.toLowerCase().includes(search.toLowerCase()) ||
      e.prenom.toLowerCase().includes(search.toLowerCase())
  );

  function selectEleve(id: string) {
    router.push(`/performance?e=${id}`);
  }

  const selectedEleve = eleves.find((e) => e.id === selectedEleveId) ?? null;

  // ── Calculs de performance ─────────────────────────────────────────────────

  const stats = performance ? computeStats(performance) : null;

  return (
    <div className="flex gap-5 h-[calc(100vh-180px)]">
      {/* ── Panel gauche : liste élèves ─────────────────────────────────── */}
      <div className="w-64 shrink-0 bg-white rounded-2xl flex flex-col overflow-hidden" style={{ border: "1px solid rgba(232,212,138,0.3)", boxShadow: "0 1px 12px rgba(0,0,0,0.04)" }}>
        <div className="px-4 py-3 border-b border-stone-100">
          <input
            type="text"
            placeholder="Rechercher…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-1.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold bg-stone-50 text-stone-900 placeholder-stone-300"
          />
        </div>
        <div className="flex-1 overflow-y-auto divide-y divide-stone-50">
          {filtered.length === 0 ? (
            <p className="px-4 py-6 text-stone-300 text-xs text-center">Aucun élève</p>
          ) : (
            filtered.map((e) => {
              const classe = e.classes[0]?.classe;
              const isActive = e.id === selectedEleveId;
              return (
                <button
                  key={e.id}
                  onClick={() => selectEleve(e.id)}
                  className={`w-full text-left px-4 py-3 transition-colors ${
                    isActive ? "border-l-2" : "hover:bg-stone-50"
                  }`}
                  style={isActive ? { background: "rgba(201,168,76,0.08)", borderLeftColor: "#C9A84C" } : undefined}
                >
                  <p className={`text-sm font-medium ${isActive ? "" : "text-stone-900"}`} style={isActive ? { color: "#9A7428" } : undefined}>
                    {e.prenom} {e.nom}
                  </p>
                  <p className="text-xs text-stone-400 mt-0.5">
                    {classe ? `${classe.libelle} · ${classe.niveau.libelle}` : "Classe non assignée"}
                  </p>
                </button>
              );
            })
          )}
        </div>
      </div>

      {/* ── Panel droit : dashboard élève ───────────────────────────────── */}
      <div className="flex-1 overflow-y-auto space-y-5">
        {!selectedEleve ? (
          <div className="bg-white rounded-2xl h-full flex items-center justify-center" style={{ border: "1px solid rgba(232,212,138,0.3)" }}>
            <div className="text-center">
              <p className="text-stone-300 text-sm">Sélectionnez un élève</p>
              <p className="text-stone-200 text-xs mt-1">pour voir sa progression</p>
            </div>
          </div>
        ) : !performance || performance.periodes.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 flex items-center justify-center" style={{ border: "1px solid rgba(232,212,138,0.3)" }}>
            <p className="text-stone-300 text-sm">Aucune donnée pour cet élève cette année.</p>
          </div>
        ) : stats ? (
          <>
            {/* En-tête élève */}
            <div className="bg-white rounded-2xl px-6 py-4 flex items-center gap-4" style={{ border: "1px solid rgba(232,212,138,0.3)", boxShadow: "0 1px 12px rgba(0,0,0,0.04)" }}>
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0"
                style={{ background: "rgba(201,168,76,0.12)", color: "#9A7428" }}
              >
                {selectedEleve.prenom.charAt(0)}{selectedEleve.nom.charAt(0)}
              </div>
              <div>
                <h2 className="text-lg font-bold text-stone-900 tracking-tight">
                  {selectedEleve.prenom} {selectedEleve.nom}
                </h2>
                <p className="text-stone-400 text-sm">
                  {selectedEleve.classes[0]?.classe.libelle} · {selectedEleve.classes[0]?.classe.niveau.libelle}
                </p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-3xl font-bold" style={{ color: noteColor(stats.moyenneGenerale ?? 0) }}>
                  {fmt(stats.moyenneGenerale)}<span className="text-base text-stone-400 font-normal">/20</span>
                </p>
                <p className="text-xs text-stone-400">Moyenne générale</p>
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
            <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid rgba(232,212,138,0.3)", boxShadow: "0 1px 12px rgba(0,0,0,0.04)" }}>
              <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">Évolution de la moyenne</h3>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={stats.evolutionData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="gradMoy" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#C9A84C" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="#C9A84C" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f5f0e8" />
                  <XAxis dataKey="periode" tick={{ fontSize: 11, fill: "#a8a29e" }} />
                  <YAxis domain={[0, 20]} tick={{ fontSize: 11, fill: "#a8a29e" }} />
                  <ReferenceLine y={10} stroke="#ef4444" strokeDasharray="4 4" strokeOpacity={0.4} />
                  <Tooltip
                    formatter={(v) => [`${Number(v).toFixed(2)}/20`, "Moyenne"]}
                    contentStyle={{ fontSize: 12, borderRadius: 12, border: "1px solid rgba(232,212,138,0.4)" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="moyenne"
                    stroke="#C9A84C"
                    strokeWidth={2.5}
                    fill="url(#gradMoy)"
                    dot={{ r: 4, fill: "#C9A84C" }}
                    connectNulls
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Graphique par matière */}
            <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid rgba(232,212,138,0.3)", boxShadow: "0 1px 12px rgba(0,0,0,0.04)" }}>
              <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">Moyenne par matière</h3>
              <ResponsiveContainer width="100%" height={Math.max(180, stats.matiereData.length * 36)}>
                <BarChart
                  data={stats.matiereData}
                  layout="vertical"
                  margin={{ top: 0, right: 30, left: 10, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
                  <XAxis type="number" domain={[0, 20]} tick={{ fontSize: 11, fill: "#94a3b8" }} />
                  <YAxis type="category" dataKey="matiere" tick={{ fontSize: 11, fill: "#64748b" }} width={90} />
                  <ReferenceLine x={10} stroke="#ef4444" strokeDasharray="4 4" strokeOpacity={0.5} />
                  <Tooltip
                    formatter={(v) => [`${Number(v).toFixed(2)}/20`, "Moyenne"]}
                    contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e2e8f0" }}
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
            <div className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(232,212,138,0.3)", boxShadow: "0 1px 12px rgba(0,0,0,0.04)" }}>
              <div className="px-5 py-4 border-b border-stone-100">
                <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Détail par matière et par période</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-stone-400 text-xs uppercase tracking-wider" style={{ background: "rgba(201,168,76,0.04)", borderBottom: "1px solid rgba(232,212,138,0.2)" }}>
                      <th className="text-left px-5 py-3 font-semibold">Matière</th>
                      <th className="text-center px-3 py-3 font-semibold">Coeff</th>
                      {performance.periodes.map((p) => (
                        <th key={p.id} className="text-center px-4 py-3 font-medium">{p.libelle}</th>
                      ))}
                      <th className="text-center px-4 py-3 font-medium">Moy. annuelle</th>
                      <th className="text-center px-3 py-3 font-medium">Tendance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-50">
                    {stats.tableauMatieres.map((row) => (
                      <tr key={row.matiereId} className="hover:bg-stone-50/50">
                        <td className="px-5 py-3 font-medium text-stone-900">{row.libelle}</td>
                        <td className="px-3 py-3 text-center text-stone-400 text-xs">{row.coefficient}</td>
                        {performance.periodes.map((p) => {
                          const val = row.noteParPeriode[p.id] ?? null;
                          return (
                            <td key={p.id} className="px-4 py-3 text-center">
                              {val !== null ? (
                                <span
                                  className="inline-block px-2 py-0.5 rounded-lg font-medium text-white text-xs"
                                  style={{ backgroundColor: noteColor(val) }}
                                >
                                  {val.toFixed(1)}
                                </span>
                              ) : (
                                <span className="text-stone-200">—</span>
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
                    <tr className="font-semibold" style={{ background: "rgba(201,168,76,0.04)" }}>
                      <td className="px-5 py-3 text-stone-700">Moyenne générale</td>
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
    green: { bg: "rgba(16,185,129,0.08)", text: "#059669" },
    blue:  { bg: "rgba(201,168,76,0.10)", text: "#9A7428" },
    orange: { bg: "rgba(245,158,11,0.08)", text: "#b45309" },
    red:   { bg: "rgba(239,68,68,0.08)",  text: "#dc2626" },
    slate: { bg: "rgba(120,113,108,0.07)", text: "#78716c" },
  };
  const c = colors[color];
  return (
    <div className="rounded-2xl p-4" style={{ background: c.bg, border: "1px solid rgba(0,0,0,0.04)" }}>
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
