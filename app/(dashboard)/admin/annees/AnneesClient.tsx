"use client";

import { useState } from "react";
import { createAnneeScolaire, activerAnneeScolaire, deleteAnneeScolaire } from "@/lib/actions/structure";
import Modal from "@/components/ui/Modal";
import { FormField, Input, SubmitButton, Badge } from "@/components/ui/FormField";

type Annee = {
  id: string;
  libelle: string;
  dateDebut: Date;
  dateFin: Date;
  active: boolean;
  _count: { classes: number; periodes: number };
};

export default function AnneesClient({ annees }: { annees: Annee[] }) {
  const [showCreate, setShowCreate] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleCreate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    await createAnneeScolaire({
      libelle: fd.get("libelle") as string,
      dateDebut: fd.get("dateDebut") as string,
      dateFin: fd.get("dateFin") as string,
    });
    setLoading(false);
    setShowCreate(false);
  }

  async function handleActiver(id: string, libelle: string) {
    if (!confirm(`Activer l'année "${libelle}" ? L'année actuellement active sera désactivée.`)) return;
    await activerAnneeScolaire(id);
  }

  async function handleDelete(id: string, libelle: string, count: { classes: number; periodes: number }) {
    if (count.classes > 0 || count.periodes > 0) {
      alert(`Impossible de supprimer "${libelle}" : elle contient ${count.classes} classe(s) et ${count.periodes} période(s).`);
      return;
    }
    if (!confirm(`Supprimer définitivement "${libelle}" ?`)) return;
    await deleteAnneeScolaire(id);
  }

  const fmt = (d: Date) => new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" });

  return (
    <>
      <div
        className="bg-white rounded-2xl overflow-hidden"
        style={{ border: "1px solid rgba(232,212,138,0.3)", boxShadow: "0 1px 12px rgba(0,0,0,0.04)" }}
      >
        <div className="px-5 py-4 border-b border-stone-100 flex justify-end">
          <button
            onClick={() => setShowCreate(true)}
            className="btn-gold text-sm px-4 py-2 rounded-xl"
          >
            + Nouvelle année
          </button>
        </div>

        <div className="divide-y divide-stone-50">
          {annees.length === 0 ? (
            <p className="px-5 py-8 text-stone-300 text-sm text-center">Aucune année scolaire.</p>
          ) : (
            annees.map((a) => (
              <div key={a.id} className="px-5 py-4 flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-semibold text-stone-900">{a.libelle}</span>
                    {a.active && <Badge color="green">Active</Badge>}
                  </div>
                  <p className="text-stone-400 text-xs">
                    {fmt(a.dateDebut)} → {fmt(a.dateFin)}
                    {" · "}
                    {a._count.classes} classe(s) · {a._count.periodes} période(s)
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {!a.active && (
                    <button
                      onClick={() => handleActiver(a.id, a.libelle)}
                      className="text-xs text-stone-400 hover:text-emerald-600 px-2 py-1 rounded-lg hover:bg-emerald-50 transition-colors"
                    >
                      Activer
                    </button>
                  )}
                  {!a.active && (
                    <button
                      onClick={() => handleDelete(a.id, a.libelle, a._count)}
                      className="text-xs text-stone-400 hover:text-red-600 px-2 py-1 rounded-lg hover:bg-red-50 transition-colors"
                    >
                      Supprimer
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {showCreate && (
        <Modal title="Nouvelle année scolaire" onClose={() => setShowCreate(false)}>
          <form onSubmit={handleCreate} className="space-y-4">
            <FormField label="Libellé">
              <Input name="libelle" required placeholder="Ex : 2026-2027" />
            </FormField>
            <div className="grid grid-cols-2 gap-3">
              <FormField label="Date de début">
                <Input name="dateDebut" type="date" required />
              </FormField>
              <FormField label="Date de fin">
                <Input name="dateFin" type="date" required />
              </FormField>
            </div>
            <SubmitButton loading={loading}>Créer l&apos;année</SubmitButton>
          </form>
        </Modal>
      )}
    </>
  );
}
