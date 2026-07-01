"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/FormField";

type Classe = { id: string; libelle: string; niveau: { libelle: string } };
type Periode = { id: string; libelle: string; close: boolean };
type Eleve = { id: string; nom: string; prenom: string };

type ClassementStudent = {
  id: string;
  nom: string;
  prenom: string;
  moyenne: number | null;
  noteParMatiere: Record<string, number>;
};
type ClassementMatiere = { id: string; libelle: string; coefficient: number };
type ClassementData = { students: ClassementStudent[]; matieres: ClassementMatiere[] };

function noteColor(val: number): string {
  if (val >= 16) return "#1C4D30";
  if (val >= 12) return "#1C3D2E";
  if (val >= 10) return "#7A5C00";
  return "#8B2A2A";
}

function gradeLabel(g: number): string {
  if (g >= 16) return "Très Bien";
  if (g >= 14) return "Bien";
  if (g >= 12) return "Assez Bien";
  if (g >= 10) return "Passable";
  return "À améliorer";
}

export default function BulletinsClient({
  classes,
  periodes,
}: {
  classes: Classe[];
  periodes: Periode[];
}) {
  const [vue, setVue] = useState<"bulletins" | "classement">("bulletins");
  const [classeId, setClasseId] = useState(classes[0]?.id ?? "");
  const [periodeId, setPeriodeId] = useState(periodes[0]?.id ?? "");
  const [eleves, setEleves] = useState<Eleve[]>([]);
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState<string | null>(null);
  const [previewing, setPreviewing] = useState<string | null>(null);
  const [classement, setClassement] = useState<ClassementData | null>(null);
  const [classementLoading, setClassementLoading] = useState(false);

  useEffect(() => {
    if (!classeId || vue !== "bulletins") return;
    setLoading(true);
    fetch(`/api/eleves-par-classe?classeId=${classeId}`)
      .then((r) => r.json())
      .then((data) => setEleves(data.eleves ?? []))
      .finally(() => setLoading(false));
  }, [classeId, vue]);

  useEffect(() => {
    if (!classeId || !periodeId || vue !== "classement") return;
    setClassementLoading(true);
    setClassement(null);
    fetch(`/api/classement?classeId=${classeId}&periodeId=${periodeId}`)
      .then((r) => r.json())
      .then((data) => setClassement(data))
      .finally(() => setClassementLoading(false));
  }, [classeId, periodeId, vue]);

  async function downloadBulletin(eleveId: string, eleveNom: string) {
    setDownloading(eleveId);
    try {
      const res = await fetch(
        `/api/bulletin?eleveId=${eleveId}&classeId=${classeId}&periodeId=${periodeId}`
      );
      if (!res.ok) throw new Error("Erreur de génération");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `bulletin-${eleveNom}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      alert("Erreur lors de la génération du bulletin.");
    } finally {
      setDownloading(null);
    }
  }

  function previewBulletin(eleveId: string) {
    setPreviewing(eleveId);
    const url = `/api/bulletin?eleveId=${eleveId}&classeId=${classeId}&periodeId=${periodeId}&format=html`;
    window.open(url, "_blank", "noopener,noreferrer");
    setTimeout(() => setPreviewing(null), 1500);
  }

  async function downloadAll() {
    for (const eleve of eleves) {
      await downloadBulletin(eleve.id, `${eleve.nom}-${eleve.prenom}`);
    }
  }

  const periodeSelectionnee = periodes.find((p) => p.id === periodeId);

  const selectStyle: React.CSSProperties = {
    padding: "8px 12px",
    border: "1px solid var(--border)",
    borderRadius: "6px",
    fontSize: "14px",
    fontFamily: "var(--font-sans)",
    background: "var(--white)",
    color: "var(--ink)",
    outline: "none",
  };

  return (
    <div className="space-y-4">
      {/* Sélecteurs + onglets */}
      <div className="paper-card p-4 flex flex-wrap gap-3 items-center">
        <div className="flex items-center gap-2">
          <label className="page-eyebrow" style={{ fontSize: "11px" }}>Classe</label>
          <select value={classeId} onChange={(e) => setClasseId(e.target.value)} style={selectStyle}>
            {classes.map((c) => (
              <option key={c.id} value={c.id}>{c.libelle} ({c.niveau.libelle})</option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="page-eyebrow" style={{ fontSize: "11px" }}>Période</label>
          <select value={periodeId} onChange={(e) => setPeriodeId(e.target.value)} style={selectStyle}>
            {periodes.map((p) => (
              <option key={p.id} value={p.id}>{p.libelle}</option>
            ))}
          </select>
        </div>
        {!periodeSelectionnee?.close && vue === "bulletins" && (
          <Badge color="slate">Période non clôturée — bulletins incomplets</Badge>
        )}

        {/* Onglets vue */}
        <div className="ml-auto flex" style={{
          border: "1px solid var(--border)",
          borderRadius: "6px",
          overflow: "hidden",
        }}>
          {(["bulletins", "classement"] as const).map((v) => (
            <button
              key={v}
              onClick={() => setVue(v)}
              style={{
                padding: "7px 16px",
                border: "none",
                borderRight: v === "bulletins" ? "1px solid var(--border)" : "none",
                background: vue === v ? "var(--forest)" : "var(--white)",
                color: vue === v ? "var(--stoneLt)" : "var(--inkMd)",
                fontSize: "13px",
                fontWeight: vue === v ? 600 : 400,
                cursor: "pointer",
                transition: "all .15s",
                fontFamily: "var(--font-sans)",
              }}
            >
              {v === "bulletins" ? "Bulletins PDF" : "Classement"}
            </button>
          ))}
        </div>

        {vue === "bulletins" && eleves.length > 0 && (
          <button onClick={downloadAll} className="btn-primary text-sm px-4 py-2">
            Télécharger tous ({eleves.length})
          </button>
        )}
      </div>

      {/* ── Vue Bulletins PDF ── */}
      {vue === "bulletins" && (
        <div className="paper-card overflow-hidden">
          {loading ? (
            <p className="px-5 py-8 text-sm text-center" style={{ color: "var(--inkLt)" }}>
              Chargement…
            </p>
          ) : eleves.length === 0 ? (
            <p className="px-5 py-8 text-sm text-center" style={{ color: "var(--inkLt)" }}>
              {classeId ? "Aucun élève dans cette classe." : "Sélectionnez une classe."}
            </p>
          ) : (
            <div>
              {eleves.map((eleve) => (
                <div
                  key={eleve.id}
                  className="px-5 py-3.5 flex items-center justify-between"
                  style={{ borderBottom: "1px solid var(--borderLt)" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="avatar avatar-forest w-8 h-8 shrink-0" style={{ fontSize: "12px" }}>
                      {eleve.prenom.charAt(0)}{eleve.nom.charAt(0)}
                    </div>
                    <span className="font-medium text-sm" style={{ color: "var(--ink)" }}>
                      {eleve.prenom} {eleve.nom}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => previewBulletin(eleve.id)}
                      disabled={previewing === eleve.id}
                      className="btn-secondary flex items-center gap-2 text-sm px-4 py-2"
                    >
                      {previewing === eleve.id ? "Ouverture…" : (
                        <>
                          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          Voir
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => downloadBulletin(eleve.id, `${eleve.nom}-${eleve.prenom}`)}
                      disabled={downloading === eleve.id}
                      className="btn-primary flex items-center gap-2 text-sm px-4 py-2"
                    >
                      {downloading === eleve.id ? "Génération…" : (
                        <>
                          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          PDF
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── Vue Classement ── */}
      {vue === "classement" && (
        classementLoading ? (
          <div className="paper-card p-8 text-center">
            <p className="text-sm" style={{ color: "var(--inkLt)" }}>Calcul du classement…</p>
          </div>
        ) : !classement || classement.students.length === 0 ? (
          <div className="paper-card p-8 text-center">
            <p className="text-sm" style={{ color: "var(--inkLt)" }}>
              Aucune note saisie pour cette classe et cette période.
            </p>
          </div>
        ) : (
          <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))" }}>
            {classement.students.map((s, i) => {
              const a = s.moyenne ?? 0;
              const isTop = i < 3 && s.moyenne !== null;
              const color = noteColor(a);
              return (
                <div
                  key={s.id}
                  className="paper-card"
                  style={{
                    padding: "18px 22px",
                    borderTop: isTop ? `3px solid ${color}` : undefined,
                  }}
                >
                  {/* En-tête : rang + nom + moyenne */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "13px",
                        color: "var(--inkLt)",
                        minWidth: "28px",
                        paddingTop: "2px",
                        flexShrink: 0,
                      }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="avatar avatar-forest w-10 h-10" style={{ fontSize: "13px" }}>
                        {s.prenom.charAt(0)}{s.nom.charAt(0)}
                      </div>
                      <div>
                        <div style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "17px",
                          fontWeight: 400,
                          color: "var(--ink)",
                          marginBottom: "2px",
                        }}>
                          {s.prenom} {s.nom}
                        </div>
                      </div>
                    </div>
                    {s.moyenne !== null && (
                      <div style={{ textAlign: "right", flexShrink: 0 }}>
                        <div style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "26px",
                          color,
                          lineHeight: 1,
                        }}>
                          {a.toFixed(1)}
                          <span style={{ fontSize: "13px", color: "var(--inkLt)", fontFamily: "var(--font-sans)" }}>/20</span>
                        </div>
                        <div style={{ fontSize: "12px", fontWeight: 600, color, letterSpacing: ".2px" }}>
                          {gradeLabel(a)}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Barres par matière */}
                  <div className="space-y-2">
                    {classement.matieres.map((m) => {
                      const g = s.noteParMatiere[m.id] ?? null;
                      const gc = g !== null ? noteColor(g) : "var(--stoneDk)";
                      return (
                        <div key={m.id} className="flex items-center gap-2.5">
                          <span style={{
                            width: "80px",
                            fontSize: "11px",
                            fontWeight: 600,
                            color: "var(--inkLt)",
                            letterSpacing: ".4px",
                            textTransform: "uppercase",
                            flexShrink: 0,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}>
                            {m.libelle}
                          </span>
                          <div className="progress-track flex-1">
                            <div
                              className="progress-fill"
                              style={{
                                width: g !== null ? `${(g / 20) * 100}%` : "0%",
                                background: gc,
                              }}
                            />
                          </div>
                          <span style={{
                            fontSize: "13px",
                            fontWeight: 700,
                            color: gc,
                            minWidth: "40px",
                            textAlign: "right",
                            flexShrink: 0,
                          }}>
                            {g !== null ? `${g}/20` : "—"}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )
      )}
    </div>
  );
}
