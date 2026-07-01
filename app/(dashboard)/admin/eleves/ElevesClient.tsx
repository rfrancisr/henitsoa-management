"use client";

import { useState } from "react";
import {
  createEleve,
  updateEleve,
  linkParent,
  unlinkParent,
  affecterEleveClasse,
  toggleEleveActif,
} from "@/lib/actions/eleves";
import Modal from "@/components/ui/Modal";
import { FormField, Input, Select, SubmitButton } from "@/components/ui/FormField";
import type { Sexe } from "@/app/generated/prisma/enums";

type Parent = { id: string; nom: string; prenom: string; email: string };
type Classe = { id: string; libelle: string; niveau: { libelle: string } };
type Eleve = {
  id: string; nom: string; prenom: string;
  dateNaissance: Date; sexe: Sexe; adresse: string; actif: boolean;
  parents: { user: Parent }[];
  classes: { classe: Classe; anneeScolaire: { libelle: string } }[];
};

type WizardForm = {
  prenom: string; nom: string;
  dateNaissance: string; sexe: string;
  adresse: string; classeId: string; parentId: string;
};

/* ── Shared micro-components ── */

function Monogram({ name }: { name: string }) {
  const initials = name.trim().split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  return (
    <div style={{
      width: 44, height: 44, borderRadius: 4, flexShrink: 0,
      background: "rgba(28,61,46,.12)", border: "1.5px solid rgba(28,61,46,.22)",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <span style={{ fontFamily: "var(--font-serif)", fontSize: 16, color: "var(--forest)", letterSpacing: 0.5, lineHeight: 1 }}>
        {initials}
      </span>
    </div>
  );
}

function BackBtn({ onClick, label = "Retour à la liste" }: { onClick: () => void; label?: string }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        background: "none", border: "none", padding: "6px 0",
        fontSize: 13.5, fontWeight: 500, cursor: "pointer",
        color: hov ? "var(--forest)" : "var(--inkLt)",
        letterSpacing: 0.2, marginBottom: 28,
        textDecoration: hov ? "underline" : "none", textUnderlineOffset: 3,
        fontFamily: "var(--font-sans)", transition: "color .15s",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15,18 9,12 15,6" />
      </svg>
      {label}
    </button>
  );
}

function TrashIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3,6 5,6 21,6" /><path d="M19 6l-1 14H6L5 6" />
      <path d="M10 11v6" /><path d="M14 11v6" /><path d="M9 6V4h6v2" />
    </svg>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <label style={{
        display: "block", fontSize: 11.5, fontWeight: 600,
        color: "var(--inkLt)", letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 7,
      }}>
        {label}
      </label>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "11px 14px",
  border: "1px solid var(--border)", borderRadius: 6,
  fontSize: 15, fontFamily: "var(--font-sans)",
  background: "var(--white)", color: "var(--ink)", outline: "none",
};

/* ── Wizard ── */

const STEPS = [
  { title: "Identité de l'élève",  sub: "Nom complet tel qu'il apparaîtra sur le bulletin." },
  { title: "Classe & naissance",   sub: "Informations de scolarisation." },
  { title: "Contact & domicile",   sub: "Qui prévenir et où l'élève réside." },
];

function AddStudentWizard({
  onBack, onSave, classes, parents, anneeScolaireId,
}: {
  onBack: () => void;
  onSave: () => void;
  classes: Classe[];
  parents: Parent[];
  anneeScolaireId: string | null;
}) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<WizardForm>({
    prenom: "", nom: "", dateNaissance: "", sexe: "FEMININ",
    adresse: "", classeId: "", parentId: "",
  });
  const [saving, setSaving] = useState(false);

  const set = (k: keyof WizardForm, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const stepOk = [
    form.prenom.trim().length > 0 && form.nom.trim().length > 0,
    form.dateNaissance !== "" && form.sexe !== "",
    true,
  ];

  async function finish() {
    setSaving(true);
    const result = await createEleve({
      nom: form.nom,
      prenom: form.prenom,
      dateNaissance: form.dateNaissance,
      sexe: form.sexe as Sexe,
      adresse: form.adresse,
    });
    if (result.success && result.id) {
      if (form.classeId && anneeScolaireId)
        await affecterEleveClasse(result.id, form.classeId, anneeScolaireId);
      if (form.parentId)
        await linkParent(result.id, form.parentId);
    }
    setSaving(false);
    onSave();
  }

  const cur = STEPS[step];
  const isLast = step === STEPS.length - 1;

  return (
    <div style={{ maxWidth: 480, margin: "0 auto" }}>
      <BackBtn onClick={onBack} label="Retour à la liste" />

      {/* Stepped header */}
      <div style={{ marginBottom: 28 }}>
        <p style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "var(--inkLt)", marginBottom: 8 }}>
          Étape {step + 1} sur {STEPS.length}
        </p>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 28, fontWeight: 400, color: "var(--ink)", marginBottom: 4 }}>
          {cur.title}
        </h2>
        <p style={{ fontSize: 14, color: "var(--inkLt)" }}>{cur.sub}</p>
      </div>

      {/* Progress bar */}
      <div style={{ height: 2, background: "var(--borderLt)", borderRadius: 1, marginBottom: 28 }}>
        <div style={{
          height: 2, background: "var(--forest)", borderRadius: 1,
          width: `${((step + 1) / STEPS.length) * 100}%`, transition: "width .3s",
        }} />
      </div>

      <div className="paper-card-accent" style={{ padding: "28px 28px 24px" }}>
        {/* Step 0 — Identité */}
        {step === 0 && (
          <>
            <Field label="Prénom">
              <input value={form.prenom} onChange={(e) => set("prenom", e.target.value)} placeholder="Marie" style={inputStyle} />
            </Field>
            <Field label="Nom de famille">
              <input value={form.nom} onChange={(e) => set("nom", e.target.value)} placeholder="RAKOTO" style={inputStyle} />
            </Field>
          </>
        )}

        {/* Step 1 — Classe & naissance */}
        {step === 1 && (
          <>
            <Field label="Date de naissance">
              <input type="date" value={form.dateNaissance} onChange={(e) => set("dateNaissance", e.target.value)} style={inputStyle} />
            </Field>
            <Field label="Sexe">
              <select value={form.sexe} onChange={(e) => set("sexe", e.target.value)} style={inputStyle}>
                <option value="FEMININ">Féminin</option>
                <option value="MASCULIN">Masculin</option>
              </select>
            </Field>
            {classes.length > 0 && (
              <Field label="Classe (facultatif)">
                <select value={form.classeId} onChange={(e) => set("classeId", e.target.value)} style={inputStyle}>
                  <option value="">— Ne pas affecter maintenant —</option>
                  {classes.map((c) => (
                    <option key={c.id} value={c.id}>{c.libelle} ({c.niveau.libelle})</option>
                  ))}
                </select>
              </Field>
            )}
          </>
        )}

        {/* Step 2 — Contact */}
        {step === 2 && (
          <>
            <Field label="Adresse">
              <input value={form.adresse} onChange={(e) => set("adresse", e.target.value)} placeholder="Lot IV A 12, Antananarivo" style={inputStyle} />
            </Field>
            {parents.length > 0 && (
              <Field label="Parent ou tuteur (facultatif)">
                <select value={form.parentId} onChange={(e) => set("parentId", e.target.value)} style={inputStyle}>
                  <option value="">— Ne pas lier maintenant —</option>
                  {parents.map((p) => (
                    <option key={p.id} value={p.id}>{p.prenom} {p.nom} ({p.email})</option>
                  ))}
                </select>
              </Field>
            )}
          </>
        )}

        {/* Navigation */}
        <div style={{ display: "flex", gap: 10, marginTop: 8, paddingTop: 20, borderTop: "1px solid var(--borderLt)" }}>
          {step > 0 && (
            <button onClick={() => setStep((s) => s - 1)} className="btn-secondary" style={{ padding: "13px 24px", fontSize: 15 }}>
              ← Précédent
            </button>
          )}
          {!isLast ? (
            <button
              onClick={() => stepOk[step] && setStep((s) => s + 1)}
              className="btn-primary"
              style={{
                flex: 1, padding: "13px 28px", fontSize: 15,
                opacity: stepOk[step] ? 1 : 0.4,
                cursor: stepOk[step] ? "pointer" : "not-allowed",
              }}
            >
              Continuer →
            </button>
          ) : (
            <button
              onClick={finish}
              disabled={saving}
              className="btn-primary"
              style={{ flex: 1, padding: "13px 28px", fontSize: 15 }}
            >
              {saving ? "Enregistrement…" : "Enregistrer l'élève"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Main component ── */

export default function ElevesClient({
  eleves, parents, classes, anneeScolaireId,
}: {
  eleves: Eleve[];
  parents: Parent[];
  classes: Classe[];
  anneeScolaireId: string | null;
}) {
  const [mode, setMode] = useState<"list" | "wizard">("list");
  const [editEleve, setEditEleve] = useState<Eleve | null>(null);
  const [affectEleve, setAffectEleve] = useState<Eleve | null>(null);
  const [confirmArchive, setConfirmArchive] = useState<Eleve | null>(null);
  const [search, setSearch] = useState("");
  const [filterCls, setFilterCls] = useState("");
  const [loading, setLoading] = useState(false);

  /* ── Wizard screen ── */
  if (mode === "wizard") {
    return (
      <AddStudentWizard
        onBack={() => setMode("list")}
        onSave={() => setMode("list")}
        classes={classes}
        parents={parents}
        anneeScolaireId={anneeScolaireId}
      />
    );
  }

  const filtered = eleves.filter((e) => {
    const matchSearch =
      e.nom.toLowerCase().includes(search.toLowerCase()) ||
      e.prenom.toLowerCase().includes(search.toLowerCase());
    const matchCls = filterCls === "" || e.classes[0]?.classe.libelle === filterCls;
    return matchSearch && matchCls;
  });

  const clsLibelles = classes.map((c) => c.libelle);

  /* ── List screen ── */
  return (
    <>
      {/* Search + add */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <input
          type="text"
          placeholder="Rechercher un élève..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: 1, padding: "9px 12px", border: "1px solid var(--border)", borderRadius: 6, fontSize: 14, fontFamily: "var(--font-sans)", background: "var(--white)", color: "var(--ink)", outline: "none" }}
          onFocus={(e) => { e.currentTarget.style.outline = "2px solid var(--forest)"; e.currentTarget.style.outlineOffset = "1px"; }}
          onBlur={(e) => { e.currentTarget.style.outline = "none"; }}
        />
        <button onClick={() => setMode("wizard")} className="btn-primary" style={{ padding: "9px 20px", fontSize: 14, whiteSpace: "nowrap" }}>
          + Nouvel élève
        </button>
      </div>

      {/* Class filter */}
      {clsLibelles.length > 0 && (
        <div style={{ display: "flex", gap: 0, marginBottom: 20, border: "1px solid var(--border)", borderRadius: 6, overflow: "hidden", width: "fit-content" }}>
          {["", ...clsLibelles].map((cls, i, arr) => (
            <button key={cls || "tous"} onClick={() => setFilterCls(cls)} style={{
              padding: "8px 16px", border: "none",
              borderRight: i < arr.length - 1 ? "1px solid var(--border)" : "none",
              background: filterCls === cls ? "var(--forest)" : "var(--white)",
              color: filterCls === cls ? "var(--stoneLt)" : "var(--inkMd)",
              fontSize: 13, fontWeight: filterCls === cls ? 600 : 400,
              cursor: "pointer", transition: "all .15s",
              letterSpacing: 0.2, fontFamily: "var(--font-sans)",
            }}>
              {cls || "Tous"}
            </button>
          ))}
        </div>
      )}

      {/* Cards grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 8, alignItems: "start" }}>
        {filtered.length === 0 ? (
          <p style={{ gridColumn: "1/-1", padding: "40px 0", textAlign: "center", color: "var(--inkLt)", fontSize: 15 }}>
            Aucun élève trouvé.
          </p>
        ) : filtered.map((eleve) => {
          const derniereClasse = eleve.classes[0];
          return (
            <div key={eleve.id} className="paper-card" style={{ padding: "16px 20px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <Monogram name={`${eleve.prenom} ${eleve.nom}`} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 16, color: "var(--ink)", marginBottom: 3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {eleve.prenom} {eleve.nom}
                  </div>
                  <div style={{ fontSize: 12.5, color: "var(--inkLt)", marginBottom: 8 }}>
                    {derniereClasse
                      ? `${derniereClasse.classe.libelle} · ${derniereClasse.anneeScolaire.libelle}`
                      : "Classe non assignée"}
                    {eleve.parents.length > 0 && ` · ${eleve.parents[0].user.prenom} ${eleve.parents[0].user.nom}`}
                  </div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 11.5, fontWeight: 600, padding: "2px 8px", borderRadius: 3, background: "rgba(28,61,46,.1)", color: "var(--forest)", border: "1px solid rgba(28,61,46,.2)", letterSpacing: 0.2 }}>
                      {eleve.sexe === "FEMININ" ? "Féminin" : "Masculin"}
                    </span>
                    {!eleve.actif && (
                      <span style={{ fontSize: 11.5, fontWeight: 600, padding: "2px 8px", borderRadius: 3, background: "rgba(139,42,42,.1)", color: "var(--red)", border: "1px solid rgba(139,42,42,.2)" }}>
                        Archivé
                      </span>
                    )}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6, flexShrink: 0 }}>
                  <div style={{ display: "flex", gap: 4 }}>
                    <button onClick={() => setEditEleve(eleve)} className="btn-secondary" style={{ padding: "6px 12px", fontSize: 13 }}>Modifier</button>
                    <button onClick={() => setAffectEleve(eleve)} className="btn-secondary" style={{ padding: "6px 12px", fontSize: 13 }}>Affecter</button>
                  </div>
                  {eleve.actif && (
                    <button onClick={() => setConfirmArchive(eleve)}
                      style={{ background: "none", border: "none", cursor: "pointer", color: "var(--borderLt)", padding: 4, transition: "color .15s" }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "var(--red)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "var(--borderLt)"; }}>
                      <TrashIcon />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Edit modal */}
      {editEleve && (
        <Modal title={`Modifier — ${editEleve.prenom} ${editEleve.nom}`} onClose={() => setEditEleve(null)}>
          <form onSubmit={async (e) => {
            e.preventDefault(); setLoading(true);
            const fd = new FormData(e.currentTarget);
            await updateEleve(editEleve.id, {
              nom: fd.get("nom") as string, prenom: fd.get("prenom") as string,
              dateNaissance: fd.get("dateNaissance") as string, sexe: fd.get("sexe") as Sexe,
              adresse: fd.get("adresse") as string,
            });
            setLoading(false); setEditEleve(null);
          }} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <FormField label="Prénom"><Input name="prenom" required defaultValue={editEleve.prenom} /></FormField>
              <FormField label="Nom"><Input name="nom" required defaultValue={editEleve.nom} /></FormField>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <FormField label="Date de naissance"><Input name="dateNaissance" type="date" required defaultValue={new Date(editEleve.dateNaissance).toISOString().slice(0, 10)} /></FormField>
              <FormField label="Sexe">
                <Select name="sexe" required defaultValue={editEleve.sexe}>
                  <option value="FEMININ">Féminin</option>
                  <option value="MASCULIN">Masculin</option>
                </Select>
              </FormField>
            </div>
            <FormField label="Adresse"><Input name="adresse" required defaultValue={editEleve.adresse} /></FormField>
            <SubmitButton loading={loading}>Mettre à jour</SubmitButton>
          </form>
        </Modal>
      )}

      {/* Affecter modal */}
      {affectEleve && (
        <Modal title={`Affecter — ${affectEleve.prenom} ${affectEleve.nom}`} onClose={() => setAffectEleve(null)}>
          <form onSubmit={async (e) => {
            e.preventDefault();
            if (!anneeScolaireId) return;
            setLoading(true);
            const fd = new FormData(e.currentTarget);
            const classeId = fd.get("classeId") as string;
            const parentId = fd.get("parentId") as string;
            if (classeId) await affecterEleveClasse(affectEleve.id, classeId, anneeScolaireId);
            if (parentId) await linkParent(affectEleve.id, parentId);
            setLoading(false); setAffectEleve(null);
          }} className="space-y-4">
            {anneeScolaireId ? (
              <FormField label="Classe (année scolaire active)">
                <Select name="classeId" defaultValue="">
                  <option value="">-- Choisir une classe --</option>
                  {classes.map((c) => <option key={c.id} value={c.id}>{c.libelle} ({c.niveau.libelle})</option>)}
                </Select>
              </FormField>
            ) : (
              <p className="text-sm" style={{ color: "var(--amber)" }}>Aucune année scolaire active.</p>
            )}
            <FormField label="Lier un parent">
              <Select name="parentId" defaultValue="">
                <option value="">-- Choisir un parent --</option>
                {parents.filter((p) => !affectEleve.parents.some((ep) => ep.user.id === p.id)).map((p) => (
                  <option key={p.id} value={p.id}>{p.prenom} {p.nom} ({p.email})</option>
                ))}
              </Select>
            </FormField>
            {affectEleve.parents.length > 0 && (
              <div>
                <p className="section-label">Parents liés</p>
                <div className="space-y-1">
                  {affectEleve.parents.map(({ user: p }) => (
                    <div key={p.id} className="flex items-center justify-between text-sm px-3 py-2 rounded" style={{ background: "var(--stoneLt)", border: "1px solid var(--borderLt)" }}>
                      <span style={{ color: "var(--ink)" }}>{p.prenom} {p.nom}</span>
                      <button type="button" onClick={() => unlinkParent(affectEleve.id, p.id)} className="text-xs" style={{ color: "var(--red)" }}>Retirer</button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <SubmitButton loading={loading}>Enregistrer</SubmitButton>
          </form>
        </Modal>
      )}

      {/* Archive confirmation */}
      {confirmArchive && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(26,26,24,.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200, backdropFilter: "blur(3px)" }}>
          <div className="paper-card" style={{ padding: 36, maxWidth: 360, margin: "0 16px", textAlign: "center" }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 22, fontWeight: 400, color: "var(--ink)", marginBottom: 10 }}>
              Archiver cet élève ?
            </h3>
            <p style={{ fontSize: 14, color: "var(--inkLt)", lineHeight: 1.6, marginBottom: 28 }}>
              Le dossier sera désactivé. Vous pourrez le réactiver ultérieurement.
            </p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              <button onClick={() => setConfirmArchive(null)} className="btn-secondary" style={{ padding: "12px 24px", fontSize: 15 }}>Annuler</button>
              <button onClick={async () => { await toggleEleveActif(confirmArchive.id, false); setConfirmArchive(null); }} className="btn-danger" style={{ padding: "12px 24px", fontSize: 15, fontWeight: 600 }}>Archiver</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
