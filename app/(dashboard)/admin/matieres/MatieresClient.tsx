"use client";

import { useState } from "react";
import { createMatiere, updateMatiere, deleteMatiere } from "@/lib/actions/structure";
import Modal from "@/components/ui/Modal";
import { FormField, Input, Select, SubmitButton } from "@/components/ui/FormField";

type Niveau = { id: string; libelle: string; ordre: number };
type Matiere = { id: string; libelle: string; coefficient: number; niveau: Niveau };

export default function MatieresClient({
  matieres,
  niveaux,
}: {
  matieres: Matiere[];
  niveaux: Niveau[];
}) {
  const [showCreate, setShowCreate] = useState(false);
  const [editMatiere, setEditMatiere] = useState<Matiere | null>(null);
  const [loading, setLoading] = useState(false);

  const grouped = niveaux.map((n) => ({
    niveau: n,
    matieres: matieres.filter((m) => m.niveau.id === n.id),
  }));

  async function handleCreate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    await createMatiere({
      libelle: fd.get("libelle") as string,
      coefficient: parseFloat(fd.get("coefficient") as string),
      niveauId: fd.get("niveauId") as string,
    });
    setLoading(false);
    setShowCreate(false);
  }

  async function handleUpdate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!editMatiere) return;
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    await updateMatiere(editMatiere.id, {
      libelle: fd.get("libelle") as string,
      coefficient: parseFloat(fd.get("coefficient") as string),
    });
    setLoading(false);
    setEditMatiere(null);
  }

  return (
    <>
      <div className="space-y-4">
        <div className="flex justify-end">
          <button
            onClick={() => setShowCreate(true)}
            className="btn-gold text-sm px-4 py-2 rounded-xl"
          >
            + Nouvelle matière
          </button>
        </div>

        {grouped.map(({ niveau, matieres: ms }) =>
          ms.length === 0 ? null : (
            <div
              key={niveau.id}
              className="bg-white rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(232,212,138,0.3)", boxShadow: "0 1px 12px rgba(0,0,0,0.04)" }}
            >
              <div className="px-5 py-3 border-b border-stone-50" style={{ background: "rgba(201,168,76,0.04)" }}>
                <h3 className="font-semibold text-stone-600 text-xs uppercase tracking-wider">{niveau.libelle}</h3>
              </div>
              <div className="divide-y divide-stone-50">
                {ms.map((m) => (
                  <div key={m.id} className="px-5 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-stone-900 text-sm">{m.libelle}</span>
                      <span
                        className="text-xs px-2 py-0.5 rounded font-medium"
                        style={{ background: "rgba(201,168,76,0.10)", color: "#9A7428" }}
                      >
                        coeff. {m.coefficient}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setEditMatiere(m)}
                        className="btn-glass text-xs px-2 py-1 rounded-lg font-medium"
                      >
                        Modifier
                      </button>
                      <button
                        onClick={async () => {
                          if (confirm(`Supprimer "${m.libelle}" ?`)) await deleteMatiere(m.id);
                        }}
                        className="text-xs text-stone-400 hover:text-red-600 px-2 py-1 rounded-lg hover:bg-red-50 transition-colors"
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        )}

        {matieres.length === 0 && (
          <div className="bg-white rounded-2xl p-8 text-center" style={{ border: "1px solid rgba(232,212,138,0.3)" }}>
            <p className="text-stone-300 text-sm">Aucune matière créée.</p>
          </div>
        )}
      </div>

      {showCreate && (
        <Modal title="Nouvelle matière" onClose={() => setShowCreate(false)}>
          <form onSubmit={handleCreate} className="space-y-4">
            <FormField label="Intitulé">
              <Input name="libelle" required placeholder="Ex: Mathématiques" />
            </FormField>
            <FormField label="Coefficient">
              <Input name="coefficient" type="number" step="0.5" min="0.5" defaultValue="1" required />
            </FormField>
            <FormField label="Niveau">
              <Select name="niveauId" required>
                <option value="">-- Choisir un niveau --</option>
                {niveaux.map((n) => (
                  <option key={n.id} value={n.id}>{n.libelle}</option>
                ))}
              </Select>
            </FormField>
            <SubmitButton loading={loading}>Créer</SubmitButton>
          </form>
        </Modal>
      )}

      {editMatiere && (
        <Modal title={`Modifier — ${editMatiere.libelle}`} onClose={() => setEditMatiere(null)}>
          <form onSubmit={handleUpdate} className="space-y-4">
            <FormField label="Intitulé">
              <Input name="libelle" required defaultValue={editMatiere.libelle} />
            </FormField>
            <FormField label="Coefficient">
              <Input name="coefficient" type="number" step="0.5" min="0.5" required defaultValue={editMatiere.coefficient} />
            </FormField>
            <SubmitButton loading={loading}>Mettre à jour</SubmitButton>
          </form>
        </Modal>
      )}
    </>
  );
}
