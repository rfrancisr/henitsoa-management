"use client";

import { useState } from "react";
import { createDateAVenir, updateDateAVenir, deleteDateAVenir } from "@/lib/actions/site";
import Modal from "@/components/ui/Modal";
import { FormField, Input, SubmitButton } from "@/components/ui/FormField";

type DateAVenir = {
  id: string;
  titre: string;
  description: string;
  date: Date;
};

type DateForm = {
  id?: string;
  titre: string;
  description: string;
  date: string;
};

const EMPTY_FORM: DateForm = { titre: "", description: "", date: "" };

export default function DatesAvenirClient({ dates }: { dates: DateAVenir[] }) {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState<DateForm>(EMPTY_FORM);
  const [loading, setLoading] = useState(false);

  function openCreate() {
    setForm(EMPTY_FORM);
    setShowModal(true);
  }

  function openEdit(d: DateAVenir) {
    setForm({
      id: d.id,
      titre: d.titre,
      description: d.description,
      date: toDateInput(d.date),
    });
    setShowModal(true);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const data = {
      titre: fd.get("titre") as string,
      description: fd.get("description") as string,
      date: fd.get("date") as string,
    };
    if (form.id) {
      await updateDateAVenir(form.id, data);
    } else {
      await createDateAVenir(data);
    }
    setLoading(false);
    setShowModal(false);
  }

  async function handleDelete() {
    if (!form.id || !confirm(`Supprimer la date "${form.titre}" ?`)) return;
    setLoading(true);
    await deleteDateAVenir(form.id);
    setLoading(false);
    setShowModal(false);
  }

  return (
    <>
      <div className="paper-card overflow-hidden">
        <div
          className="px-5 py-4 flex justify-end"
          style={{ borderBottom: "1px solid var(--borderLt)" }}
        >
          <button onClick={openCreate} className="btn-primary text-sm px-4 py-2">
            + Nouvelle date
          </button>
        </div>

        <div>
          {dates.length === 0 ? (
            <p className="px-5 py-8 text-sm text-center" style={{ color: "var(--stoneDk)" }}>
              Aucune date à venir.
            </p>
          ) : (
            dates.map((d) => (
              <div
                key={d.id}
                className="px-5 py-4 flex items-center gap-4"
                style={{ borderBottom: "1px solid var(--borderLt)" }}
              >
                <div className="flex-1">
                  <span style={{ fontWeight: 600, fontSize: 15, color: "var(--ink)" }}>
                    {d.titre}
                  </span>
                  <p style={{ fontSize: 12.5, color: "var(--inkLt)" }}>
                    {new Date(d.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                    {" · "}
                    {d.description}
                  </p>
                </div>
                <button onClick={() => openEdit(d)} className="btn-secondary text-sm px-3 py-1.5">
                  Modifier
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {showModal && (
        <Modal
          title={form.id ? "Modifier la date" : "Nouvelle date"}
          onClose={() => setShowModal(false)}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <FormField label="Titre">
              <Input
                name="titre"
                defaultValue={form.titre}
                required
                placeholder="Ex: Rentrée scolaire 2026-2027"
              />
            </FormField>
            <FormField label="Description">
              <Input
                name="description"
                defaultValue={form.description}
                required
                placeholder="Ex: Accueil des élèves · Toutes les classes · 7h30"
              />
            </FormField>
            <FormField label="Date">
              <Input type="date" name="date" defaultValue={form.date} required />
            </FormField>
            <div className="flex gap-3">
              {form.id && (
                <button type="button" onClick={handleDelete} className="btn-danger px-4 py-2.5 text-sm">
                  Supprimer
                </button>
              )}
              <div className="flex-1">
                <SubmitButton loading={loading}>{form.id ? "Mettre à jour" : "Ajouter"}</SubmitButton>
              </div>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
}

function toDateInput(date: Date): string {
  const d = new Date(date);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
