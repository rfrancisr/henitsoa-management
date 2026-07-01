"use client";

import { useState, useTransition, useEffect } from "react";
import { useRouter } from "next/navigation";
import { upsertNote, upsertAppreciation } from "@/lib/actions/notes";
import { FormField, Select } from "@/components/ui/FormField";
import Modal from "@/components/ui/Modal";
import { moyennePonderee, moyenneSimple } from "@/lib/notes-utils";
import type { Mention } from "@/app/generated/prisma/enums";

type Classe = { id: string; libelle: string; niveau: { libelle: string } };
type Periode = { id: string; libelle: string; close: boolean };
type Matiere = { id: string; libelle: string; coefficient: number };
type Eleve = { id: string; nom: string; prenom: string };
type EleveClasse = { eleve: Eleve };
type ClasseDetail = { id: string; libelle: string; niveauId: string; eleves: EleveClasse[] };
type Note = { eleveId: string; matiereId: string; valeur: number; commentaire: string | null };
type Appreciation = { eleveId: string; texte: string; mention: Mention };

/* ── Design tokens ── */
const T = {
  forest:   "#1C3D2E",
  forestMd: "#254D3A",
  stone:    "#E8E0D0",
  stoneLt:  "#F4F0E8",
  stoneDk:  "#D4C9B4",
  ink:      "#1A1A18",
  inkMd:    "#3D3D38",
  inkLt:    "#7A756C",
  white:    "#FDFCF9",
  border:   "#C8BFA8",
  borderLt: "#DDD5C0",
  red:      "#8B2A2A",
  amber:    "#7A5C00",
  green:    "#1C4D30",
};

/* ── Helpers ── */
function noteColor(val: number): string {
  if (val >= 16) return T.green;
  if (val >= 12) return T.forest;
  if (val >= 10) return T.amber;
  return T.red;
}

function moyenneEleve(eleveId: string, notes: Note[], matieres: Matiere[]): number | null {
  return moyennePonderee(
    notes
      .filter((n) => n.eleveId === eleveId)
      .map((n) => ({
        valeur: n.valeur,
        coefficient: matieres.find((m) => m.id === n.matiereId)?.coefficient ?? 1,
      }))
  );
}

function moyenneClasse(notes: Note[], matieres: Matiere[], eleveIds: string[]): number | null {
  return moyenneSimple(
    eleveIds
      .map((id) => moyenneEleve(id, notes, matieres))
      .filter((m): m is number => m !== null)
  );
}

/* ── Monogram ── */
function Monogram({ name, size = 44, color = T.forest }: { name: string; size?: number; color?: string }) {
  const initials = name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  return (
    <div style={{
      width: size, height: size, borderRadius: 4,
      background: color + "18", border: `1.5px solid ${color}33`,
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
    }}>
      <span style={{
        fontFamily: "var(--font-serif)",
        fontSize: size * 0.36, color,
        letterSpacing: 0.5, lineHeight: 1,
      }}>{initials}</span>
    </div>
  );
}

/* ── GradeTag ── */
function GradeTag({ subject, value }: { subject: string; value: number | null }) {
  const c = value !== null ? noteColor(value) : T.stoneDk;
  return (
    <span style={{
      fontSize: 12.5, fontWeight: 600, padding: "3px 10px",
      borderRadius: 3, background: c + "14", color: c,
      border: `1px solid ${c}30`, letterSpacing: 0.2,
    }}>
      {subject} {value !== null ? value : "—"}/20
    </span>
  );
}

/* ── Toast ── */
function Toast({ msg }: { msg: string }) {
  return (
    <div style={{
      position: "fixed", bottom: 32, left: "50%", transform: "translateX(-50%)",
      background: T.forest, color: T.stoneLt,
      padding: "12px 28px", borderRadius: 6,
      fontSize: 14, fontWeight: 600, zIndex: 999,
      boxShadow: "0 6px 24px rgba(28,61,46,.35)",
      display: "flex", alignItems: "center", gap: 8, whiteSpace: "nowrap",
    }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20,6 9,17 4,12"/>
      </svg>
      {msg}
    </div>
  );
}

/* ── BackBtn ── */
function BackBtn({ onClick, label = "Retour à la liste" }: { onClick: () => void; label?: string }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        background: "none", border: "none", padding: "6px 0",
        fontSize: 13.5, fontWeight: 500, cursor: "pointer",
        color: hov ? T.forest : T.inkLt,
        letterSpacing: 0.2, marginBottom: 28,
        textDecoration: hov ? "underline" : "none",
        textUnderlineOffset: 3,
        fontFamily: "var(--font-sans)",
        transition: "color .15s",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15,18 9,12 15,6"/>
      </svg>
      {label}
    </button>
  );
}

/* ── Selectors bar ── */
function SelectorsBar({
  classes, periodes, selectedClasseId, selectedPeriodeId, isPeriodeClosed, moyClasse, isPending, navigate,
}: {
  classes: Classe[];
  periodes: Periode[];
  selectedClasseId: string;
  selectedPeriodeId: string;
  isPeriodeClosed: boolean;
  moyClasse: number | null;
  isPending: boolean;
  navigate: (cId: string, pId: string) => void;
}) {
  const sel: React.CSSProperties = {
    padding: "7px 12px", border: `1px solid ${T.border}`,
    borderRadius: 6, fontSize: 14, fontFamily: "var(--font-sans)",
    background: T.white, color: T.ink, outline: "none",
  };
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", marginBottom: 28 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <label style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: T.inkLt }}>
          Classe
        </label>
        <select value={selectedClasseId} onChange={(e) => navigate(e.target.value, selectedPeriodeId)} style={sel}>
          {classes.map((c) => <option key={c.id} value={c.id}>{c.libelle}</option>)}
        </select>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <label style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: T.inkLt }}>
          Période
        </label>
        <select value={selectedPeriodeId} onChange={(e) => navigate(selectedClasseId, e.target.value)} style={sel}>
          {periodes.map((p) => (
            <option key={p.id} value={p.id}>{p.libelle}{p.close ? " (clôturée)" : ""}</option>
          ))}
        </select>
      </div>
      {isPeriodeClosed && (
        <span style={{ fontSize: 12, fontWeight: 600, color: T.red }}>Période clôturée — lecture seule</span>
      )}
      {isPending && (
        <span style={{ fontSize: 13, color: T.inkLt }}>Enregistrement…</span>
      )}
      {moyClasse !== null && (
        <span style={{ fontSize: 13, color: T.inkMd, marginLeft: "auto" }}>
          Moyenne de classe : <strong style={{ color: T.ink }}>{moyClasse.toFixed(1)}/20</strong>
        </span>
      )}
    </div>
  );
}

/* ── Main component ── */
export default function NotesClient({
  classes,
  periodes,
  classeSelectionnee,
  periodeSelectionnee,
  matieres,
  notes: initialNotes,
  appreciations: initialAppreciations,
  selectedClasseId,
  selectedPeriodeId,
}: {
  classes: Classe[];
  periodes: Periode[];
  classeSelectionnee: ClasseDetail | null;
  periodeSelectionnee: Periode | null;
  matieres: Matiere[];
  notes: Note[];
  appreciations: Appreciation[];
  selectedClasseId: string;
  selectedPeriodeId: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [search, setSearch] = useState("");
  const [pickedEleveId, setPickedEleveId] = useState<string | null>(null);
  const [local, setLocal] = useState<Record<string, string>>({});
  const [toast, setToast] = useState("");
  const [appreciationEleve, setAppreciationEleve] = useState<string | null>(null);
  const [apprTexte, setApprTexte] = useState("");
  const [apprMention, setApprMention] = useState<Mention>("AUCUNE");

  useEffect(() => {
    if (pickedEleveId) {
      const existing = initialAppreciations.find((a) => a.eleveId === pickedEleveId);
      setApprTexte(existing?.texte ?? "");
      setApprMention(existing?.mention ?? "AUCUNE");
    }
  }, [pickedEleveId, initialAppreciations]);

  const eleves = classeSelectionnee?.eleves.map((ec) => ec.eleve) ?? [];
  const isPeriodeClosed = periodeSelectionnee?.close ?? false;
  const eleveIds = eleves.map((e) => e.id);
  const moyClasse = moyenneClasse(notes, matieres, eleveIds);

  function navigate(classeId: string, periodeId: string) {
    setPickedEleveId(null);
    router.push(`/enseignant/notes?classeId=${classeId}&periodeId=${periodeId}`);
  }

  function openEleve(eleve: Eleve) {
    const init: Record<string, string> = {};
    matieres.forEach((m) => {
      const n = notes.find((n) => n.eleveId === eleve.id && n.matiereId === m.id);
      init[m.id] = n ? String(n.valeur) : "";
    });
    setLocal(init);
    setPickedEleveId(eleve.id);
  }

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(""), 2400);
  }

  async function saveGrades() {
    if (!pickedEleveId || !periodeSelectionnee || !classeSelectionnee) return;
    const updates: Array<{ matiereId: string; valeur: number }> = [];
    for (const [matiereId, raw] of Object.entries(local)) {
      const val = parseFloat(raw);
      if (!isNaN(val) && val >= 0 && val <= 20) {
        updates.push({ matiereId, valeur: val });
      }
    }

    setNotes((prev) => {
      let next = [...prev];
      for (const u of updates) {
        next = next.filter((n) => !(n.eleveId === pickedEleveId && n.matiereId === u.matiereId));
        next.push({ eleveId: pickedEleveId, matiereId: u.matiereId, valeur: u.valeur, commentaire: null });
      }
      return next;
    });

    startTransition(async () => {
      await Promise.all([
        ...updates.map((u) =>
          upsertNote({
            eleveId: pickedEleveId!,
            matiereId: u.matiereId,
            periodeId: periodeSelectionnee.id,
            classeId: classeSelectionnee.id,
            valeur: u.valeur,
          })
        ),
        upsertAppreciation({
          eleveId: pickedEleveId!,
          classeId: classeSelectionnee.id,
          periodeId: periodeSelectionnee.id,
          texte: apprTexte,
          mention: apprMention,
        }),
      ]);
      showToast("Enregistré");
    });
  }

  function openAppreciation(eleveId: string) {
    const existing = initialAppreciations.find((a) => a.eleveId === eleveId);
    setApprTexte(existing?.texte ?? "");
    setApprMention(existing?.mention ?? "AUCUNE");
    setAppreciationEleve(eleveId);
  }

  async function saveAppreciation() {
    if (!appreciationEleve || !periodeSelectionnee || !classeSelectionnee) return;
    await upsertAppreciation({
      eleveId: appreciationEleve,
      classeId: classeSelectionnee.id,
      periodeId: periodeSelectionnee.id,
      texte: apprTexte,
      mention: apprMention,
    });
    setAppreciationEleve(null);
  }

  const pickedEleve = pickedEleveId ? eleves.find((e) => e.id === pickedEleveId) ?? null : null;
  const filteredEleves = search
    ? eleves.filter((e) => `${e.prenom} ${e.nom}`.toLowerCase().includes(search.toLowerCase()))
    : eleves;

  /* ── View: Grade Entry ── */
  if (pickedEleve) {
    const appr = initialAppreciations.find((a) => a.eleveId === pickedEleve.id);

    return (
      <div>
        <SelectorsBar
          classes={classes} periodes={periodes}
          selectedClasseId={selectedClasseId} selectedPeriodeId={selectedPeriodeId}
          isPeriodeClosed={isPeriodeClosed} moyClasse={moyClasse}
          isPending={isPending} navigate={navigate}
        />

        <BackBtn onClick={() => setPickedEleveId(null)} />

        <div style={{ marginBottom: 24 }}>
          <p style={{
            fontSize: 11.5, fontWeight: 600, letterSpacing: 2,
            textTransform: "uppercase", color: T.inkLt, marginBottom: 8,
          }}>
            Saisie des notes
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <Monogram name={`${pickedEleve.prenom} ${pickedEleve.nom}`} size={48} />
            <div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 24, fontWeight: 400, color: T.ink }}>
                {pickedEleve.prenom} {pickedEleve.nom}
              </h2>
              <span style={{ fontSize: 12.5, color: T.inkLt, fontWeight: 500 }}>
                {classeSelectionnee?.libelle}
              </span>
            </div>
          </div>
        </div>

        {/* Grade card */}
        <div style={{
          background: T.white,
          borderRadius: "2px 12px 12px 12px",
          border: `1px solid ${T.borderLt}`,
          borderTop: `3px solid ${T.forest}`,
          boxShadow: "0 1px 4px rgba(26,26,24,.06), 0 4px 16px rgba(26,26,24,.04)",
          padding: 28,
        }}>
          {matieres.map((m) => {
            const raw = local[m.id] ?? "";
            const g = parseFloat(raw);
            const hasVal = !isNaN(g) && raw !== "";
            const color = hasVal ? noteColor(g) : T.stoneDk;

            return (
              <div key={m.id} style={{ marginBottom: 28 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: T.inkMd, letterSpacing: 0.2 }}>
                    {m.libelle}
                    {m.coefficient !== 1 && (
                      <span style={{ fontSize: 11, color: T.inkLt, fontWeight: 400, marginLeft: 6 }}>
                        coeff.{m.coefficient}
                      </span>
                    )}
                  </label>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: 28, color, lineHeight: 1, transition: "color .15s" }}>
                    {hasVal ? g : "—"}
                    <span style={{ fontSize: 14, color: T.inkLt, fontFamily: "var(--font-sans)" }}>/20</span>
                  </span>
                </div>
                <input
                  type="range" min="0" max="20" step="0.5"
                  value={hasVal ? g : 0}
                  disabled={isPeriodeClosed}
                  onChange={(e) => setLocal((l) => ({ ...l, [m.id]: e.target.value }))}
                  style={{ width: "100%", marginBottom: 10, display: "block" }}
                />
                <input
                  type="number" min="0" max="20" step="0.25"
                  value={raw}
                  disabled={isPeriodeClosed}
                  placeholder="Taper la note directement"
                  onChange={(e) => setLocal((l) => ({ ...l, [m.id]: e.target.value }))}
                  style={{
                    width: "100%", padding: "9px 12px",
                    border: `1px solid ${T.borderLt}`,
                    borderRadius: 5, fontSize: 14,
                    color: T.ink, background: T.stoneLt,
                    fontFamily: "var(--font-sans)",
                  }}
                />
              </div>
            );
          })}

          <div style={{ paddingTop: 20, borderTop: `1px solid ${T.borderLt}`, display: "flex", flexDirection: "column", gap: 10 }}>
            {!isPeriodeClosed && (
              <button
                onClick={saveGrades}
                disabled={isPending}
                style={{
                  width: "100%", padding: 14,
                  background: T.forest, color: T.stoneLt,
                  border: "none", borderRadius: 6,
                  fontSize: 15, fontWeight: 600,
                  cursor: isPending ? "wait" : "pointer",
                  letterSpacing: 0.2,
                  boxShadow: "0 2px 8px rgba(28,61,46,.25)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {isPending ? "Enregistrement…" : "Enregistrer les notes"}
              </button>
            )}
            <div style={{ marginTop: 4 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.4, textTransform: "uppercase", color: T.inkLt, marginBottom: 10 }}>
                Appréciation
              </p>
              <select
                value={apprMention}
                disabled={isPeriodeClosed}
                onChange={(e) => setApprMention(e.target.value as Mention)}
                style={{
                  width: "100%", padding: "9px 12px", marginBottom: 10,
                  border: `1px solid ${T.borderLt}`,
                  borderRadius: 5, fontSize: 14,
                  color: T.ink, background: isPeriodeClosed ? T.stoneLt : T.white,
                  fontFamily: "var(--font-sans)",
                }}
              >
                <option value="AUCUNE">Aucune mention</option>
                <option value="ENCOURAGEMENTS">Encouragements</option>
                <option value="FELICITATIONS">Félicitations</option>
              </select>
              <textarea
                value={apprTexte}
                disabled={isPeriodeClosed}
                onChange={(e) => setApprTexte(e.target.value)}
                rows={3}
                placeholder="Bon trimestre, efforts encourageants…"
                style={{
                  width: "100%", padding: "11px 14px",
                  border: `1px solid ${T.borderLt}`,
                  borderRadius: 5, fontSize: 14,
                  fontFamily: "var(--font-sans)",
                  color: T.ink, background: isPeriodeClosed ? T.stoneLt : T.white,
                  outline: "none", resize: "vertical", boxSizing: "border-box",
                }}
              />
            </div>
          </div>
        </div>

        {toast && <Toast msg={toast} />}
      </div>
    );
  }

  /* ── View: Student list ── */
  return (
    <div>
      <SelectorsBar
        classes={classes} periodes={periodes}
        selectedClasseId={selectedClasseId} selectedPeriodeId={selectedPeriodeId}
        isPeriodeClosed={isPeriodeClosed} moyClasse={moyClasse}
        isPending={isPending} navigate={navigate}
      />

      <div style={{ marginBottom: 24 }}>
        <p style={{
          fontSize: 11.5, fontWeight: 600, letterSpacing: 2,
          textTransform: "uppercase", color: T.inkLt, marginBottom: 6,
        }}>
          Saisie des notes
        </p>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 28, fontWeight: 400, color: T.ink }}>
          Choisir un élève
        </h2>
      </div>

      {/* Search */}
      <div style={{ position: "relative", marginBottom: 16 }}>
        <span style={{
          position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)",
          color: T.inkLt, pointerEvents: "none",
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </span>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Rechercher par nom…"
          style={{
            width: "100%", padding: "11px 14px 11px 38px",
            border: `1px solid ${T.border}`, borderRadius: 6,
            fontSize: 15, fontFamily: "var(--font-sans)",
            background: T.white, color: T.ink, outline: "none",
          }}
        />
      </div>

      {/* Student cards */}
      {classeSelectionnee && eleves.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {filteredEleves.map((eleve) => {
            const moy = moyenneEleve(eleve.id, notes, matieres);
            const color = moy !== null ? noteColor(moy) : T.stoneDk;

            return (
              <button
                key={eleve.id}
                onClick={() => openEleve(eleve)}
                style={{
                  display: "flex", alignItems: "center", gap: 14,
                  background: T.white,
                  border: `1px solid ${T.borderLt}`,
                  borderLeft: `3px solid ${color}`,
                  borderRadius: "0 8px 8px 0",
                  padding: "14px 18px",
                  cursor: "pointer", textAlign: "left",
                  width: "100%", fontFamily: "var(--font-sans)",
                  transition: "border-color .15s, box-shadow .15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = T.forest;
                  e.currentTarget.style.boxShadow = "0 2px 12px rgba(28,61,46,.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = T.borderLt;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Monogram name={`${eleve.prenom} ${eleve.nom}`} size={40} color={color} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 15, color: T.ink, marginBottom: 4 }}>
                    {eleve.prenom} {eleve.nom}
                  </div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {matieres.map((m) => {
                      const n = notes.find((n) => n.eleveId === eleve.id && n.matiereId === m.id);
                      return <GradeTag key={m.id} subject={m.libelle} value={n ? n.valeur : null} />;
                    })}
                  </div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: 22, color, lineHeight: 1 }}>
                    {moy !== null ? moy.toFixed(1) : "—"}
                  </div>
                  <div style={{ fontSize: 11, color: T.inkLt, letterSpacing: 0.3 }}>moy.</div>
                </div>
              </button>
            );
          })}
          {filteredEleves.length === 0 && (
            <div style={{ padding: 40, textAlign: "center", color: T.inkLt, fontSize: 15 }}>
              Aucun élève trouvé.
            </div>
          )}
        </div>
      ) : (
        <div style={{ padding: 40, textAlign: "center", color: T.inkLt, fontSize: 15 }}>
          Aucun élève dans cette classe.
        </div>
      )}

      {/* Modal appréciation */}
      {appreciationEleve && (
        <Modal
          title={`Appréciation — ${eleves.find((e) => e.id === appreciationEleve)?.prenom ?? ""}`}
          onClose={() => setAppreciationEleve(null)}
        >
          <div className="space-y-4">
            <FormField label="Mention">
              <Select value={apprMention} onChange={(e) => setApprMention(e.target.value as Mention)}>
                <option value="AUCUNE">Aucune mention</option>
                <option value="ENCOURAGEMENTS">Encouragements</option>
                <option value="FELICITATIONS">Félicitations</option>
              </Select>
            </FormField>
            <FormField label="Commentaire">
              <textarea
                value={apprTexte}
                onChange={(e) => setApprTexte(e.target.value)}
                rows={3}
                placeholder="Bon trimestre, efforts encourageants…"
                style={{
                  width: "100%", padding: "11px 14px",
                  border: "1px solid var(--border)", borderRadius: "6px",
                  fontSize: "15px", fontFamily: "var(--font-sans)",
                  color: "var(--ink)", background: "var(--white)",
                  outline: "none", resize: "vertical",
                }}
                onFocus={(e) => { e.currentTarget.style.outline = "2px solid var(--forest)"; e.currentTarget.style.outlineOffset = "1px"; }}
                onBlur={(e) => { e.currentTarget.style.outline = "none"; }}
              />
            </FormField>
            <div className="flex gap-3">
              <button onClick={() => setAppreciationEleve(null)} className="btn-secondary flex-1 py-2">
                Annuler
              </button>
              <button onClick={saveAppreciation} className="btn-primary flex-1 py-2">
                Enregistrer
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
