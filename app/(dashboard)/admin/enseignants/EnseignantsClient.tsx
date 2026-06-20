"use client";

import { useState } from "react";
import { createEnseignant, updateEnseignant, changerStatutEnseignant } from "@/lib/actions/enseignants";
import Modal from "@/components/ui/Modal";
import { FormField, Input, Select, SubmitButton, Badge } from "@/components/ui/FormField";
import type { TypeContrat, StatutEnseignant, Sexe } from "@/app/generated/prisma/enums";

const STATUT_LABELS: Record<StatutEnseignant, string> = {
  ACTIF: "Actif",
  CONGE: "En congé",
  SUSPENDU: "Suspendu",
  DEMISSIONNAIRE: "Démissionnaire",
  RETRAITE: "Retraité",
};

const STATUT_COLORS: Record<StatutEnseignant, "green" | "red" | "slate"> = {
  ACTIF: "green",
  CONGE: "slate",
  SUSPENDU: "red",
  DEMISSIONNAIRE: "red",
  RETRAITE: "slate",
};

const CONTRAT_LABELS: Record<TypeContrat, string> = {
  PERMANENT: "Permanent",
  CONTRACTUEL: "Contractuel",
  VACATAIRE: "Vacataire",
};

type Profil = {
  matricule: string;
  dateNaissance: Date | null;
  lieuNaissance: string | null;
  sexe: Sexe | null;
  telephone: string | null;
  adresse: string | null;
  dateEmbauche: Date;
  typeContrat: TypeContrat;
  diplome: string | null;
  specialite: string | null;
  statut: StatutEnseignant;
  salaireBase: number | null;
  numeroCNAPS: string | null;
  numeroCompte: string | null;
};

type Enseignement = {
  matiere: { libelle: string };
  classe: { libelle: string; niveau: { libelle: string }; anneeScolaire: { libelle: string } };
};

type Enseignant = {
  id: string;
  email: string;
  nom: string;
  prenom: string;
  actif: boolean;
  profil: Profil | null;
  enseignements: Enseignement[];
};

const toDateInput = (d: Date | null | undefined) =>
  d ? new Date(d).toISOString().slice(0, 10) : "";

export default function EnseignantsClient({
  enseignants,
  isAdmin,
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

  const filtered = enseignants.filter(
    (e) =>
      e.nom.toLowerCase().includes(search.toLowerCase()) ||
      e.prenom.toLowerCase().includes(search.toLowerCase()) ||
      e.email.toLowerCase().includes(search.toLowerCase()) ||
      e.profil?.matricule.toLowerCase().includes(search.toLowerCase())
  );

  async function handleCreate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const fd = new FormData(e.currentTarget);
    const result = await createEnseignant({
      email: fd.get("email") as string,
      password: fd.get("password") as string,
      nom: fd.get("nom") as string,
      prenom: fd.get("prenom") as string,
      matricule: fd.get("matricule") as string,
      dateNaissance: fd.get("dateNaissance") as string,
      lieuNaissance: fd.get("lieuNaissance") as string,
      sexe: fd.get("sexe") as Sexe,
      telephone: fd.get("telephone") as string,
      adresse: fd.get("adresse") as string,
      dateEmbauche: fd.get("dateEmbauche") as string,
      typeContrat: fd.get("typeContrat") as TypeContrat,
      diplome: fd.get("diplome") as string,
      specialite: fd.get("specialite") as string,
      salaireBase: fd.get("salaireBase") as string,
      numeroCNAPS: fd.get("numeroCNAPS") as string,
      numeroCompte: fd.get("numeroCompte") as string,
    });
    setLoading(false);
    if (!result?.success) { setError("Erreur lors de la création."); return; }
    setShowCreate(false);
  }

  async function handleUpdate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!editEns) return;
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    await updateEnseignant(editEns.id, {
      nom: fd.get("nom") as string,
      prenom: fd.get("prenom") as string,
      telephone: fd.get("telephone") as string,
      adresse: fd.get("adresse") as string,
      dateNaissance: fd.get("dateNaissance") as string,
      lieuNaissance: fd.get("lieuNaissance") as string,
      sexe: fd.get("sexe") as Sexe,
      dateEmbauche: fd.get("dateEmbauche") as string,
      typeContrat: fd.get("typeContrat") as TypeContrat,
      diplome: fd.get("diplome") as string,
      specialite: fd.get("specialite") as string,
      salaireBase: fd.get("salaireBase") as string,
      numeroCNAPS: fd.get("numeroCNAPS") as string,
      numeroCompte: fd.get("numeroCompte") as string,
    });
    setLoading(false);
    setEditEns(null);
  }

  async function handleStatut(ens: Enseignant, statut: StatutEnseignant) {
    await changerStatutEnseignant(ens.id, statut);
  }

  function ProfilForm({ ens }: { ens?: Enseignant }) {
    const p = ens?.profil;
    return (
      <div className="space-y-4">
        <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Identité</p>
        <div className="grid grid-cols-2 gap-3">
          <FormField label="Prénom">
            <Input name="prenom" required defaultValue={ens?.prenom} placeholder="Jean" />
          </FormField>
          <FormField label="Nom">
            <Input name="nom" required defaultValue={ens?.nom} placeholder="RAKOTO" />
          </FormField>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <FormField label="Date de naissance">
            <Input name="dateNaissance" type="date" defaultValue={toDateInput(p?.dateNaissance)} />
          </FormField>
          <FormField label="Lieu de naissance">
            <Input name="lieuNaissance" defaultValue={p?.lieuNaissance ?? ""} placeholder="Antananarivo" />
          </FormField>
        </div>
        <FormField label="Sexe">
          <Select name="sexe" defaultValue={p?.sexe ?? ""}>
            <option value="">-- Choisir --</option>
            <option value="MASCULIN">Masculin</option>
            <option value="FEMININ">Féminin</option>
          </Select>
        </FormField>

        <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider pt-2">Coordonnées</p>
        <FormField label="Téléphone">
          <Input name="telephone" defaultValue={p?.telephone ?? ""} placeholder="+261 34 00 000 00" />
        </FormField>
        <FormField label="Adresse">
          <Input name="adresse" defaultValue={p?.adresse ?? ""} placeholder="Lot IV A 12, Antananarivo" />
        </FormField>

        {!ens && (
          <>
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider pt-2">Compte</p>
            <FormField label="Email">
              <Input name="email" type="email" required placeholder="jean.rakoto@ecole.mg" />
            </FormField>
            <FormField label="Mot de passe initial">
              <Input name="password" type="password" required minLength={8} placeholder="Min. 8 caractères" />
            </FormField>
            <FormField label="Matricule (auto-généré si vide)">
              <Input name="matricule" placeholder="ENS-2026-001" />
            </FormField>
          </>
        )}

        <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider pt-2">Profil professionnel</p>
        <div className="grid grid-cols-2 gap-3">
          <FormField label="Date d'embauche">
            <Input name="dateEmbauche" type="date" required defaultValue={toDateInput(p?.dateEmbauche)} />
          </FormField>
          <FormField label="Type de contrat">
            <Select name="typeContrat" required defaultValue={p?.typeContrat ?? "PERMANENT"}>
              <option value="PERMANENT">Permanent</option>
              <option value="CONTRACTUEL">Contractuel</option>
              <option value="VACATAIRE">Vacataire</option>
            </Select>
          </FormField>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <FormField label="Diplôme">
            <Input name="diplome" defaultValue={p?.diplome ?? ""} placeholder="Licence, Master…" />
          </FormField>
          <FormField label="Spécialité">
            <Input name="specialite" defaultValue={p?.specialite ?? ""} placeholder="Mathématiques" />
          </FormField>
        </div>

        <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider pt-2">Informations paie</p>
        <div className="grid grid-cols-2 gap-3">
          <FormField label="Salaire de base (Ar)">
            <Input name="salaireBase" type="number" min="0" step="500" defaultValue={p?.salaireBase?.toString() ?? ""} placeholder="500000" />
          </FormField>
          <FormField label="N° CNAPS">
            <Input name="numeroCNAPS" defaultValue={p?.numeroCNAPS ?? ""} placeholder="000000000" />
          </FormField>
        </div>
        <FormField label="N° Compte bancaire">
          <Input name="numeroCompte" defaultValue={p?.numeroCompte ?? ""} placeholder="00040 00000 00000000000 00" />
        </FormField>
      </div>
    );
  }

  return (
    <>
      <div
        className="bg-white rounded-2xl overflow-hidden"
        style={{ border: "1px solid rgba(232,212,138,0.3)", boxShadow: "0 1px 12px rgba(0,0,0,0.04)" }}
      >
        <div className="px-5 py-4 border-b border-stone-100 flex items-center gap-3">
          <input
            type="text"
            placeholder="Rechercher par nom, email ou matricule…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-3 py-2 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold bg-stone-50 text-stone-900 placeholder-stone-300"
          />
          {isAdmin && (
            <button
              onClick={() => setShowCreate(true)}
              className="btn-gold text-sm px-4 py-2 rounded-xl whitespace-nowrap"
            >
              + Nouvel enseignant
            </button>
          )}
        </div>

        <div className="divide-y divide-stone-50">
          {filtered.length === 0 ? (
            <p className="px-5 py-8 text-stone-300 text-sm text-center">Aucun enseignant trouvé.</p>
          ) : (
            filtered.map((ens) => {
              const statut = ens.profil?.statut ?? "ACTIF";
              return (
                <div key={ens.id} className="px-5 py-4 flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm shrink-0"
                    style={{ background: "rgba(201,168,76,0.12)", color: "#9A7428" }}
                  >
                    {ens.prenom.charAt(0)}{ens.nom.charAt(0)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-medium text-stone-900 text-sm">
                        {ens.prenom} {ens.nom}
                      </span>
                      <Badge color={STATUT_COLORS[statut]}>{STATUT_LABELS[statut]}</Badge>
                      {ens.profil && (
                        <Badge color="slate">{CONTRAT_LABELS[ens.profil.typeContrat]}</Badge>
                      )}
                    </div>
                    <p className="text-stone-400 text-xs truncate">
                      {ens.profil?.matricule && <span className="font-mono">{ens.profil.matricule} · </span>}
                      {ens.email}
                      {ens.profil?.specialite && ` · ${ens.profil.specialite}`}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => setHistEns(ens)}
                      className="btn-glass text-xs px-2 py-1 rounded-lg font-medium"
                    >
                      Historique
                    </button>
                    {isAdmin && (
                      <button
                        onClick={() => setEditEns(ens)}
                        className="btn-glass text-xs px-2 py-1 rounded-lg font-medium"
                      >
                        Modifier
                      </button>
                    )}
                    {isAdmin && (
                      <select
                        value={statut}
                        onChange={(e) => handleStatut(ens, e.target.value as StatutEnseignant)}
                        className="text-xs border border-stone-200 rounded-lg px-2 py-1 text-stone-600 bg-white focus:outline-none focus:ring-1 focus:ring-gold"
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
              );
            })
          )}
        </div>
      </div>

      {showCreate && (
        <Modal title="Nouvel enseignant" onClose={() => setShowCreate(false)}>
          <form onSubmit={handleCreate} className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
            <ProfilForm />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <SubmitButton loading={loading}>Créer le profil</SubmitButton>
          </form>
        </Modal>
      )}

      {editEns && (
        <Modal
          title={`Modifier — ${editEns.prenom} ${editEns.nom}`}
          onClose={() => setEditEns(null)}
        >
          <form onSubmit={handleUpdate} className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
            <ProfilForm ens={editEns} />
            <SubmitButton loading={loading}>Enregistrer</SubmitButton>
          </form>
        </Modal>
      )}

      {histEns && (
        <Modal
          title={`Historique — ${histEns.prenom} ${histEns.nom}`}
          onClose={() => setHistEns(null)}
        >
          <div className="space-y-4">
            {histEns.profil && (
              <div className="bg-stone-50 rounded-xl p-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                <div><span className="text-stone-400 text-xs uppercase tracking-wide">Matricule</span><p className="font-mono font-medium text-stone-900">{histEns.profil.matricule}</p></div>
                <div><span className="text-stone-400 text-xs uppercase tracking-wide">Contrat</span><p className="text-stone-900">{CONTRAT_LABELS[histEns.profil.typeContrat]}</p></div>
                <div><span className="text-stone-400 text-xs uppercase tracking-wide">Embauche</span><p className="text-stone-900">{new Date(histEns.profil.dateEmbauche).toLocaleDateString("fr-FR")}</p></div>
                <div><span className="text-stone-400 text-xs uppercase tracking-wide">Spécialité</span><p className="text-stone-900">{histEns.profil.specialite || "—"}</p></div>
                <div><span className="text-stone-400 text-xs uppercase tracking-wide">Diplôme</span><p className="text-stone-900">{histEns.profil.diplome || "—"}</p></div>
                <div><span className="text-stone-400 text-xs uppercase tracking-wide">Téléphone</span><p className="text-stone-900">{histEns.profil.telephone || "—"}</p></div>
              </div>
            )}

            <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Classes enseignées</p>
            {histEns.enseignements.length === 0 ? (
              <p className="text-stone-300 text-sm">Aucune affectation enregistrée.</p>
            ) : (
              <div className="space-y-1">
                {Object.entries(
                  histEns.enseignements.reduce<Record<string, typeof histEns.enseignements>>((acc, e) => {
                    const annee = e.classe.anneeScolaire.libelle;
                    if (!acc[annee]) acc[annee] = [];
                    acc[annee].push(e);
                    return acc;
                  }, {})
                )
                  .sort(([a], [b]) => b.localeCompare(a))
                  .map(([annee, ens]) => (
                    <div key={annee}>
                      <p className="text-xs font-semibold text-stone-500 mt-3 mb-1">{annee}</p>
                      <div className="space-y-1">
                        {ens.map((e, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm bg-stone-50 px-3 py-2 rounded-xl">
                            <span className="text-stone-900 font-medium">{e.matiere.libelle}</span>
                            <span className="text-stone-300">·</span>
                            <span className="text-stone-400">{e.classe.libelle} ({e.classe.niveau.libelle})</span>
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
    </>
  );
}
