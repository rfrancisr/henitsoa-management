"use client";

import { useState } from "react";
import { createClasse, affecterEnseignant, retirerEnseignant } from "@/lib/actions/structure";
import Modal from "@/components/ui/Modal";
import { FormField, Input, Select, SubmitButton, Badge } from "@/components/ui/FormField";

type Niveau = { id: string; libelle: string; ordre: number };
type AnneeScolaire = { id: string; libelle: string; active: boolean };
type Enseignant = { id: string; nom: string; prenom: string };
type Matiere = { id: string; libelle: string; coefficient: number; niveau: Niveau };
type Classe = {
  id: string;
  libelle: string;
  niveau: Niveau;
  anneeScolaire: AnneeScolaire;
  _count: { eleves: number };
  enseignements: { user: Enseignant; matiere: Matiere }[];
};

export default function ClassesClient({
  classes,
  niveaux,
  anneesScolaires,
  enseignants,
  matieres,
  anneeScolaireActiveId,
}: {
  classes: Classe[];
  niveaux: Niveau[];
  anneesScolaires: AnneeScolaire[];
  enseignants: Enseignant[];
  matieres: Matiere[];
  anneeScolaireActiveId: string | null;
}) {
  const [showCreate, setShowCreate] = useState(false);
  const [detailClasse, setDetailClasse] = useState<Classe | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleCreate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    await createClasse({
      libelle: fd.get("libelle") as string,
      niveauId: fd.get("niveauId") as string,
      anneeScolaireId: fd.get("anneeScolaireId") as string,
    });
    setLoading(false);
    setShowCreate(false);
  }

  async function handleAffecterEnseignant(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!detailClasse) return;
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    await affecterEnseignant({
      userId: fd.get("userId") as string,
      matiereId: fd.get("matiereId") as string,
      classeId: detailClasse.id,
    });
    setLoading(false);
  }

  const matieresParNiveau = (niveauId: string) =>
    matieres.filter((m) => m.niveau.id === niveauId);

  return (
    <>
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-200 flex justify-end">
          <button
            onClick={() => setShowCreate(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            + Nouvelle classe
          </button>
        </div>

        <div className="divide-y divide-slate-100">
          {classes.length === 0 ? (
            <p className="px-5 py-8 text-slate-400 text-sm text-center">Aucune classe créée.</p>
          ) : (
            classes.map((c) => (
              <div key={c.id} className="px-5 py-4 flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-medium text-slate-900">{c.libelle}</span>
                    <Badge color="blue">{c.niveau.libelle}</Badge>
                  </div>
                  <p className="text-slate-500 text-xs">
                    {c._count.eleves} élève{c._count.eleves > 1 ? "s" : ""} ·{" "}
                    {c.enseignements.length} enseignement{c.enseignements.length > 1 ? "s" : ""}
                  </p>
                </div>
                <button
                  onClick={() => setDetailClasse(c)}
                  className="text-sm text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors"
                >
                  Gérer
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {showCreate && (
        <Modal title="Nouvelle classe" onClose={() => setShowCreate(false)}>
          <form onSubmit={handleCreate} className="space-y-4">
            <FormField label="Intitulé de la classe">
              <Input name="libelle" required placeholder="Ex: 6ème A" />
            </FormField>
            <FormField label="Niveau">
              <Select name="niveauId" required>
                <option value="">-- Choisir un niveau --</option>
                {niveaux.map((n) => (
                  <option key={n.id} value={n.id}>{n.libelle}</option>
                ))}
              </Select>
            </FormField>
            <FormField label="Année scolaire">
              <Select name="anneeScolaireId" required defaultValue={anneeScolaireActiveId ?? ""}>
                {anneesScolaires.map((a) => (
                  <option key={a.id} value={a.id}>{a.libelle}{a.active ? " (active)" : ""}</option>
                ))}
              </Select>
            </FormField>
            <SubmitButton loading={loading}>Créer la classe</SubmitButton>
          </form>
        </Modal>
      )}

      {detailClasse && (
        <Modal
          title={`${detailClasse.libelle} — Enseignements`}
          onClose={() => setDetailClasse(null)}
        >
          <div className="space-y-4">
            {/* Liste des enseignements */}
            <div className="bg-slate-50 rounded-lg divide-y divide-slate-200">
              {detailClasse.enseignements.length === 0 ? (
                <p className="px-4 py-3 text-slate-400 text-sm text-center">
                  Aucun enseignant affecté.
                </p>
              ) : (
                detailClasse.enseignements.map((ens) => (
                  <div key={`${ens.user.id}-${ens.matiere.id}`} className="px-4 py-2.5 flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium text-slate-900">{ens.matiere.libelle}</span>
                      <span className="text-slate-500 text-xs ml-2">
                        — {ens.user.prenom} {ens.user.nom}
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        retirerEnseignant({
                          userId: ens.user.id,
                          matiereId: ens.matiere.id,
                          classeId: detailClasse.id,
                        })
                      }
                      className="text-red-500 hover:text-red-700 text-xs"
                    >
                      Retirer
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Ajouter un enseignement */}
            <form onSubmit={handleAffecterEnseignant} className="space-y-3">
              <p className="text-sm font-medium text-slate-700">Ajouter un enseignant</p>
              <FormField label="Matière">
                <Select name="matiereId" required>
                  <option value="">-- Choisir --</option>
                  {matieresParNiveau(detailClasse.niveau.id).map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.libelle} (coeff. {m.coefficient})
                    </option>
                  ))}
                </Select>
              </FormField>
              <FormField label="Enseignant">
                <Select name="userId" required>
                  <option value="">-- Choisir --</option>
                  {enseignants.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.prenom} {e.nom}
                    </option>
                  ))}
                </Select>
              </FormField>
              <SubmitButton loading={loading}>Affecter</SubmitButton>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
}
