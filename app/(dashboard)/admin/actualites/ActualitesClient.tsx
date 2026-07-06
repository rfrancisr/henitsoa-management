"use client";

import { useState } from "react";
import Image from "next/image";
import { createActualite, updateActualite, deleteActualite } from "@/lib/actions/site";
import Modal from "@/components/ui/Modal";
import { FormField, Input, SubmitButton } from "@/components/ui/FormField";
import { formatMoisAnnee, getStripeColor } from "@/lib/site-content";

type Actualite = {
  id: string;
  titre: string;
  categorie: string;
  extrait: string;
  image: string;
  datePublication: Date;
};

type ActualiteForm = {
  id?: string;
  titre: string;
  categorie: string;
  extrait: string;
  datePublication: string;
};

const EMPTY_FORM: ActualiteForm = { titre: "", categorie: "", extrait: "", datePublication: "" };

const TEXTAREA_STYLE: React.CSSProperties = {
  width: "100%",
  padding: "11px 14px",
  border: "1px solid var(--border)",
  borderRadius: "6px",
  fontSize: "13px",
  fontFamily: "var(--font-sans)",
  color: "var(--ink)",
  background: "var(--white)",
  outline: "none",
  resize: "none",
};

export default function ActualitesClient({ actualites }: { actualites: Actualite[] }) {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState<ActualiteForm>(EMPTY_FORM);
  const [loading, setLoading] = useState(false);

  function openCreate() {
    setForm(EMPTY_FORM);
    setShowModal(true);
  }

  function openEdit(a: Actualite) {
    setForm({
      id: a.id,
      titre: a.titre,
      categorie: a.categorie,
      extrait: a.extrait,
      datePublication: toDateInput(a.datePublication),
    });
    setShowModal(true);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    if (form.id) {
      await updateActualite(form.id, fd);
    } else {
      await createActualite(fd);
    }
    setLoading(false);
    setShowModal(false);
  }

  async function handleDelete() {
    if (!form.id || !confirm(`Supprimer l'actualité "${form.titre}" ?`)) return;
    setLoading(true);
    await deleteActualite(form.id);
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
            + Nouvelle actualité
          </button>
        </div>

        <div>
          {actualites.length === 0 ? (
            <p className="px-5 py-8 text-sm text-center" style={{ color: "var(--stoneDk)" }}>
              Aucune actualité publiée.
            </p>
          ) : (
            actualites.map((a) => (
              <div
                key={a.id}
                className="px-5 py-4 flex items-center gap-4"
                style={{ borderBottom: "1px solid var(--borderLt)" }}
              >
                <div
                  className="relative shrink-0"
                  style={{
                    width: 64,
                    height: 48,
                    borderRadius: 6,
                    overflow: "hidden",
                    background: getStripeColor(a.categorie),
                  }}
                >
                  <Image src={a.image} alt={a.titre} fill sizes="64px" className="object-cover" />
                </div>
                <div className="flex-1">
                  <span style={{ fontWeight: 600, fontSize: 15, color: "var(--ink)" }}>
                    {a.titre}
                  </span>
                  <p style={{ fontSize: 12.5, color: "var(--inkLt)" }}>
                    {formatMoisAnnee(a.datePublication)} · {a.categorie}
                  </p>
                </div>
                <button onClick={() => openEdit(a)} className="btn-secondary text-sm px-3 py-1.5">
                  Modifier
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {showModal && (
        <Modal
          title={form.id ? "Modifier l'actualité" : "Nouvelle actualité"}
          onClose={() => setShowModal(false)}
        >
          <form onSubmit={handleSubmit} className="space-y-4" key={form.id ?? "new"}>
            <FormField label="Titre">
              <Input name="titre" defaultValue={form.titre} required placeholder="Ex: Journée culturelle 2026" />
            </FormField>
            <FormField label="Catégorie">
              <Input
                name="categorie"
                defaultValue={form.categorie}
                required
                placeholder="Ex: Culture, Sport, Résultats…"
              />
            </FormField>
            <FormField label="Résumé">
              <textarea
                name="extrait"
                defaultValue={form.extrait}
                required
                rows={4}
                placeholder="Un court paragraphe qui présente l'actualité…"
                style={TEXTAREA_STYLE}
                onFocus={(e) => {
                  e.currentTarget.style.outline = "2px solid var(--forest)";
                  e.currentTarget.style.outlineOffset = "1px";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.outline = "none";
                }}
              />
            </FormField>
            <FormField label="Date de publication">
              <Input type="date" name="datePublication" defaultValue={form.datePublication} required />
            </FormField>
            <FormField label={form.id ? "Nouvelle photo (optionnel)" : "Photo"}>
              <Input type="file" name="image" accept="image/jpeg,image/png,image/webp" required={!form.id} />
            </FormField>
            <div className="flex gap-3">
              {form.id && (
                <button type="button" onClick={handleDelete} className="btn-danger px-4 py-2.5 text-sm">
                  Supprimer
                </button>
              )}
              <div className="flex-1">
                <SubmitButton loading={loading}>{form.id ? "Mettre à jour" : "Publier"}</SubmitButton>
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
