"use client";

import { useState } from "react";
import {
  createEnseignant,
  updateEnseignant,
  changerStatutEnseignant,
} from "@/lib/actions/enseignants";
import Modal from "@/components/ui/Modal";
import { FormField, Input, Select, SubmitButton, Badge } from "@/components/ui/FormField";
import type { TypeContrat, StatutEnseignant, Sexe } from "@/app/generated/prisma/enums";

const STATUT_LABELS: Record<StatutEnseignant, string> = {
  ACTIF: "Actif", CONGE: "En congé", SUSPENDU: "Suspendu",
  DEMISSIONNAIRE: "Démissionnaire", RETRAITE: "Retraité",
};
const STATUT_COLORS: Record<StatutEnseignant, "green" | "red" | "slate"> = {
  ACTIF: "green", CONGE: "slate", SUSPENDU: "red", DEMISSIONNAIRE: "red", RETRAITE: "slate",
};
const CONTRAT_LABELS: Record<TypeContrat, string> = {
  PERMANENT: "Permanent", CONTRACTUEL: "Contractuel", VACATAIRE: "Vacataire",
};

type Profil = {
  matricule: string; dateNaissance: Date | null; lieuNaissance: string | null;
  sexe: Sexe | null; telephone: string | null; adresse: string | null;
  dateEmbauche: Date; typeContrat: TypeContrat; diplome: string | null;
  specialite: string | null; statut: StatutEnseignant;
  salaireBase: number | null; numeroCNAPS: string | null; numeroCompte: string | null;
};
type Enseignement = {
  matiere: { libelle: string };
  classe: { libelle: string; niveau: { libelle: string }; anneeScolaire: { libelle: string } };
};
type Enseignant = {
  id: string; email: string; nom: string; prenom: string; actif: boolean;
  profil: Profil | null; enseignements: Enseignement[];
};

const toDateInput = (d: Date | null | undefined) =>
  d ? new Date(d).toISOString().slice(0, 10) : "";

/* ── Shared micro-components ── */

function Monogram({ name }: { name: string }) {
  const initials = name.trim().split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  return (
    <div style={{
      width: 44, height: 44, borderRadius: 4, flexShrink: 0,
      background: "rgba(139,58,42,.12)", border: "1.5px solid rgba(139,58,42,.22)",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <span style={{ fontFamily: "var(--font-serif)", fontSize: 16, color: "var(--rust)", letterSpacing: 0.5, lineHeight: 1 }}>
        {initials}
      </span>
    </div>
  );
}

function Toast({ msg }: { msg: string }) {
  return (
    <div style={{
      position: "fixed", bottom: 32, left: "50%", transform: "translateX(-50%)",
      background: "var(--forest)", color: "var(--stoneLt)",
      padding: "12px 28px", borderRadius: 6, fontSize: 14, fontWeight: 600,
      zIndex: 999, boxShadow: "0 6px 24px rgba(28,61,46,.35)",
      display: "flex", alignItems: "center", gap: 8, whiteSpace: "nowrap",
      fontFamily: "var(--font-sans)",
    }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20,6 9,17 4,12" />
      </svg>
      {msg}
    </div>
  );
}

/* ── Main component ── */

export default function EnseignantsClient({
  enseignants, isAdmin,
}: {
  enseignants: Enseignant[];
  isAdmin: boolean;
}) {
  const [showCreate, setShowCreate] = useState(false);
  const [editEns, setEditEns] = useState<Enseignant | null>(null);
  const [histEns, setHistEns] = useState<Enseignant | null>(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [toast, setToast] = useState("");

  const filtered = enseignants.filter((e) =>
    e.nom.toLowerCase().includes(search.toLowerCase()) ||
    e.prenom.toLowerCase().includes(search.toLowerCase()) ||
    e.email.toLowerCase().includes(search.toLowerCase()) ||
    e.profil?.matricule.toLowerCase().includes(search.toLowerCase())
  );

  function showToast(msg: string) {
    setToast(msg); setTimeout(() => setToast(""), 2400);
  }

  async function handleCreate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setLoading(true); setError("");
    const fd = new FormData(e.currentTarget);
    const result = await createEnseignant({
      email: fd.get("email") as string, password: fd.get("password") as string,
      nom: fd.get("nom") as string, prenom: fd.get("prenom") as string,
      matricule: fd.get("matricule") as string, dateNaissance: fd.get("dateNaissance") as string,
      lieuNaissance: fd.get("lieuNaissance") as string, sexe: fd.get("sexe") as Sexe,
      telephone: fd.get("telephone") as string, adresse: fd.get("adresse") as string,
      dateEmbauche: fd.get("dateEmbauche") as string, typeContrat: fd.get("typeContrat") as TypeContrat,
      diplome: fd.get("diplome") as string, specialite: fd.get("specialite") as string,
      salaireBase: fd.get("salaireBase") as string, numeroCNAPS: fd.get("numeroCNAPS") as string,
      numeroCompte: fd.get("numeroCompte") as string,
    });
    setLoading(false);
    if (!result?.success) { setError("Erreur lors de la création."); return; }
    setShowCreate(false);
    showToast("Enseignant ajouté au registre");
  }

  async function handleUpdate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!editEns) return;
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    await updateEnseignant(editEns.id, {
      nom: fd.get("nom") as string, prenom: fd.get("prenom") as string,
      telephone: fd.get("telephone") as string, adresse: fd.get("adresse") as string,
      dateNaissance: fd.get("dateNaissance") as string, lieuNaissance: fd.get("lieuNaissance") as string,
      sexe: fd.get("sexe") as Sexe, dateEmbauche: fd.get("dateEmbauche") as string,
      typeContrat: fd.get("typeContrat") as TypeContrat, diplome: fd.get("diplome") as string,
      specialite: fd.get("specialite") as string, salaireBase: fd.get("salaireBase") as string,
      numeroCNAPS: fd.get("numeroCNAPS") as string, numeroCompte: fd.get("numeroCompte") as string,
    });
    setLoading(false); setEditEns(null);
    showToast("Profil mis à jour");
  }

  function ProfilForm({ ens }: { ens?: Enseignant }) {
    const p = ens?.profil;
    return (
      <div className="space-y-4">
        <p className="section-label">Identité</p>
        <div className="grid grid-cols-2 gap-3">
          <FormField label="Prénom"><Input name="prenom" required defaultValue={ens?.prenom} placeholder="Jean" /></FormField>
          <FormField label="Nom"><Input name="nom" required defaultValue={ens?.nom} placeholder="RAKOTO" /></FormField>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <FormField label="Date de naissance"><Input name="dateNaissance" type="date" defaultValue={toDateInput(p?.dateNaissance)} /></FormField>
          <FormField label="Lieu de naissance"><Input name="lieuNaissance" defaultValue={p?.lieuNaissance ?? ""} placeholder="Antananarivo" /></FormField>
        </div>
        <FormField label="Sexe">
          <Select name="sexe" defaultValue={p?.sexe ?? ""}>
            <option value="">-- Choisir --</option>
            <option value="MASCULIN">Masculin</option>
            <option value="FEMININ">Féminin</option>
          </Select>
        </FormField>

        <p className="section-label pt-2">Coordonnées</p>
        <FormField label="Téléphone"><Input name="telephone" defaultValue={p?.telephone ?? ""} placeholder="+261 34 00 000 00" /></FormField>
        <FormField label="Adresse"><Input name="adresse" defaultValue={p?.adresse ?? ""} placeholder="Lot IV A 12, Antananarivo" /></FormField>

        {!ens && (
          <>
            <p className="section-label pt-2">Compte</p>
            <FormField label="Email"><Input name="email" type="email" required placeholder="jean.rakoto@ecole.mg" /></FormField>
            <FormField label="Mot de passe initial"><Input name="password" type="password" required minLength={8} placeholder="Min. 8 caractères" /></FormField>
            <FormField label="Matricule (auto-généré si vide)"><Input name="matricule" placeholder="ENS-2026-001" /></FormField>
          </>
        )}

        <p className="section-label pt-2">Profil professionnel</p>
        <div className="grid grid-cols-2 gap-3">
          <FormField label="Date d&apos;embauche"><Input name="dateEmbauche" type="date" required defaultValue={toDateInput(p?.dateEmbauche)} /></FormField>
          <FormField label="Type de contrat">
            <Select name="typeContrat" required defaultValue={p?.typeContrat ?? "PERMANENT"}>
              <option value="PERMANENT">Permanent</option>
              <option value="CONTRACTUEL">Contractuel</option>
              <option value="VACATAIRE">Vacataire</option>
            </Select>
          </FormField>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <FormField label="Diplôme"><Input name="diplome" defaultValue={p?.diplome ?? ""} placeholder="Licence, Master…" /></FormField>
          <FormField label="Spécialité"><Input name="specialite" defaultValue={p?.specialite ?? ""} placeholder="Mathématiques" /></FormField>
        </div>

        <p className="section-label pt-2">Informations paie</p>
        <div className="grid grid-cols-2 gap-3">
          <FormField label="Salaire de base (Ar)"><Input name="salaireBase" type="number" min="0" step="500" defaultValue={p?.salaireBase?.toString() ?? ""} placeholder="500000" /></FormField>
          <FormField label="N° CNAPS"><Input name="numeroCNAPS" defaultValue={p?.numeroCNAPS ?? ""} placeholder="000000000" /></FormField>
        </div>
        <FormField label="N° Compte bancaire"><Input name="numeroCompte" defaultValue={p?.numeroCompte ?? ""} placeholder="00040 00000 00000000000 00" /></FormField>
      </div>
    );
  }

  return (
    <>
      {/* Header: search + toggle add */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
        <input
          type="text"
          placeholder="Rechercher par nom, email ou matricule…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: 1, minWidth: 200, padding: "9px 12px", border: "1px solid var(--border)", borderRadius: 6, fontSize: 14, fontFamily: "var(--font-sans)", background: "var(--white)", color: "var(--ink)", outline: "none" }}
          onFocus={(e) => { e.currentTarget.style.outline = "2px solid var(--forest)"; e.currentTarget.style.outlineOffset = "1px"; }}
          onBlur={(e) => { e.currentTarget.style.outline = "none"; }}
        />
        {isAdmin && (
          <button
            onClick={() => { setShowCreate((v) => !v); setError(""); }}
            className="btn-primary"
            style={{ padding: "9px 20px", fontSize: 14, whiteSpace: "nowrap" }}
          >
            {showCreate ? "Fermer" : "+ Ajouter"}
          </button>
        )}
      </div>

      {/* Inline create form */}
      {showCreate && (
        <div className="paper-card-accent" style={{ padding: 28, marginBottom: 20 }}>
          <p className="section-label">Nouvel enseignant</p>
          <form onSubmit={handleCreate} className="space-y-4">
            <div style={{ maxHeight: "60vh", overflowY: "auto", paddingRight: 4 }}>
              <ProfilForm />
            </div>
            {error && (
              <p className="text-sm rounded px-3 py-2" style={{ color: "var(--red)", background: "rgba(139,42,42,.08)", border: "1px solid rgba(139,42,42,.2)" }}>
                {error}
              </p>
            )}
            <SubmitButton loading={loading}>Enregistrer l&apos;enseignant</SubmitButton>
          </form>
        </div>
      )}

      {/* Teacher cards grid */}
      {filtered.length === 0 ? (
        <p style={{ padding: "40px 0", textAlign: "center", color: "var(--inkLt)", fontSize: 15 }}>
          Aucun enseignant trouvé.
        </p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 8, alignItems: "start" }}>
          {filtered.map((ens) => {
            const statut = ens.profil?.statut ?? "ACTIF";
            const recentYear = ens.enseignements[0]?.classe.anneeScolaire.libelle;
            const recentEns = recentYear ? ens.enseignements.filter((e) => e.classe.anneeScolaire.libelle === recentYear) : [];
            const uniqueClasses = [...new Set(recentEns.map((e) => e.classe.libelle))];
            const uniqueMatieres = [...new Set(recentEns.map((e) => e.matiere.libelle))];

            return (
              <div key={ens.id} className="paper-card" style={{ padding: "16px 20px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <Monogram name={`${ens.prenom} ${ens.nom}`} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3, flexWrap: "wrap" }}>
                      <span style={{ fontWeight: 600, fontSize: 16, color: "var(--ink)" }}>{ens.prenom} {ens.nom}</span>
                      <Badge color={STATUT_COLORS[statut]}>{STATUT_LABELS[statut]}</Badge>
                      {ens.profil && <Badge color="slate">{CONTRAT_LABELS[ens.profil.typeContrat]}</Badge>}
                    </div>
                    <div style={{ fontSize: 12.5, color: "var(--inkLt)", marginBottom: 8 }}>
                      {uniqueMatieres.length > 0 ? uniqueMatieres.join(", ") : ens.profil?.specialite ?? ens.email}
                      {ens.profil?.telephone && ` · ${ens.profil.telephone}`}
                    </div>
                    {uniqueClasses.length > 0 && (
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        {uniqueClasses.map((cls) => (
                          <span key={cls} style={{ fontSize: 12, fontWeight: 600, padding: "2px 9px", borderRadius: 3, background: "rgba(28,61,46,.1)", color: "var(--forest)", border: "1px solid rgba(28,61,46,.2)" }}>
                            {cls}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6, flexShrink: 0 }}>
                    <div style={{ display: "flex", gap: 4 }}>
                      <button onClick={() => setHistEns(ens)} className="btn-secondary" style={{ padding: "6px 12px", fontSize: 13 }}>Historique</button>
                      {isAdmin && <button onClick={() => setEditEns(ens)} className="btn-secondary" style={{ padding: "6px 12px", fontSize: 13 }}>Modifier</button>}
                    </div>
                    {isAdmin && (
                      <select
                        value={statut}
                        onChange={(e) => changerStatutEnseignant(ens.id, e.target.value as StatutEnseignant)}
                        style={{ fontSize: 12, border: "1px solid var(--border)", borderRadius: 6, padding: "4px 8px", color: "var(--inkMd)", background: "var(--white)", fontFamily: "var(--font-sans)", outline: "none" }}
                      >
                        <option value="ACTIF">Actif</option>
                        <option value="CONGE">En congé</option>
                        <option value="SUSPENDU">Suspendu</option>
                        <option value="DEMISSIONNAIRE">Démissionnaire</option>
                        <option value="RETRAITE">Retraité</option>
                      </select>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Edit modal */}
      {editEns && (
        <Modal title={`Modifier — ${editEns.prenom} ${editEns.nom}`} onClose={() => setEditEns(null)}>
          <form onSubmit={handleUpdate} className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
            <ProfilForm ens={editEns} />
            <SubmitButton loading={loading}>Enregistrer</SubmitButton>
          </form>
        </Modal>
      )}

      {/* History modal */}
      {histEns && (
        <Modal title={`Historique — ${histEns.prenom} ${histEns.nom}`} onClose={() => setHistEns(null)}>
          <div className="space-y-4">
            {histEns.profil && (
              <div className="rounded-md p-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm" style={{ background: "var(--stoneLt)", border: "1px solid var(--borderLt)" }}>
                {[
                  ["Matricule", histEns.profil.matricule],
                  ["Contrat", CONTRAT_LABELS[histEns.profil.typeContrat]],
                  ["Embauche", new Date(histEns.profil.dateEmbauche).toLocaleDateString("fr-FR")],
                  ["Spécialité", histEns.profil.specialite || "—"],
                  ["Diplôme", histEns.profil.diplome || "—"],
                  ["Téléphone", histEns.profil.telephone || "—"],
                ].map(([lbl, val]) => (
                  <div key={lbl}>
                    <span className="text-xs uppercase tracking-wide" style={{ color: "var(--inkLt)" }}>{lbl}</span>
                    <p className="font-medium" style={{ color: "var(--ink)" }}>{val}</p>
                  </div>
                ))}
              </div>
            )}
            <p className="section-label">Classes enseignées</p>
            {histEns.enseignements.length === 0 ? (
              <p className="text-sm" style={{ color: "var(--inkLt)" }}>Aucune affectation enregistrée.</p>
            ) : (
              <div className="space-y-1">
                {Object.entries(
                  histEns.enseignements.reduce<Record<string, typeof histEns.enseignements>>((acc, e) => {
                    const annee = e.classe.anneeScolaire.libelle;
                    if (!acc[annee]) acc[annee] = [];
                    acc[annee].push(e);
                    return acc;
                  }, {})
                ).sort(([a], [b]) => b.localeCompare(a)).map(([annee, ens]) => (
                  <div key={annee}>
                    <p className="text-xs font-semibold mt-3 mb-1" style={{ color: "var(--inkMd)" }}>{annee}</p>
                    <div className="space-y-1">
                      {ens.map((e, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm px-3 py-2 rounded" style={{ background: "var(--stoneLt)", border: "1px solid var(--borderLt)" }}>
                          <span className="font-medium" style={{ color: "var(--ink)" }}>{e.matiere.libelle}</span>
                          <span style={{ color: "var(--borderLt)" }}>·</span>
                          <span style={{ color: "var(--inkLt)" }}>{e.classe.libelle} ({e.classe.niveau.libelle})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Modal>
      )}

      {toast && <Toast msg={toast} />}
    </>
  );
}
