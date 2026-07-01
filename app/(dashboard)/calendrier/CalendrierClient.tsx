"use client";

import { useState, useRef, useCallback } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { type DateClickArg } from "@fullcalendar/interaction";
import type { EventClickArg, EventSourceInput } from "@fullcalendar/core";
import { createEvenement, updateEvenement, deleteEvenement } from "@/lib/actions/calendrier";
import Modal from "@/components/ui/Modal";
import { FormField, Input, Select, SubmitButton } from "@/components/ui/FormField";
import type { TypeEvenement } from "@/app/generated/prisma/enums";

const TYPE_LABELS: Record<TypeEvenement, string> = {
  COURS: "Cours / Formation",
  EXAMEN: "Examen",
  REUNION: "Réunion",
  VACANCES: "Vacances / Congé",
  AUTRE: "Autre",
};

type EventForm = {
  id?: string;
  titre: string;
  description: string;
  dateDebut: string;
  dateFin: string;
  type: TypeEvenement;
};

const EMPTY_FORM: EventForm = {
  titre: "",
  description: "",
  dateDebut: "",
  dateFin: "",
  type: "AUTRE",
};

export default function CalendrierClient({ canEdit }: { canEdit: boolean }) {
  const calendarRef = useRef<FullCalendar>(null);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState<EventForm>(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const refresh = useCallback(() => setRefreshKey((k) => k + 1), []);

  const eventSource: EventSourceInput = {
    url: "/api/evenements",
    method: "GET",
    extraParams: {},
    failure: () => console.error("Erreur de chargement des événements"),
  };

  function handleDateClick(arg: DateClickArg) {
    if (!canEdit) return;
    const dateStr = arg.dateStr;
    setForm({ ...EMPTY_FORM, dateDebut: dateStr + "T08:00", dateFin: dateStr + "T17:00" });
    setShowModal(true);
  }

  function handleEventClick(arg: EventClickArg) {
    if (!canEdit) return;
    const ev = arg.event;
    setForm({
      id: ev.id,
      titre: ev.title,
      description: ev.extendedProps.description ?? "",
      dateDebut: ev.start ? toDatetimeLocal(ev.start) : "",
      dateFin: ev.end ? toDatetimeLocal(ev.end) : "",
      type: (ev.extendedProps.type as TypeEvenement) ?? "AUTRE",
    });
    setShowModal(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    if (form.id) {
      await updateEvenement(form.id, {
        titre: form.titre,
        description: form.description,
        dateDebut: form.dateDebut,
        dateFin: form.dateFin,
        type: form.type,
      });
    } else {
      await createEvenement({
        titre: form.titre,
        description: form.description,
        dateDebut: form.dateDebut,
        dateFin: form.dateFin,
        type: form.type,
      });
    }
    setLoading(false);
    setShowModal(false);
    refresh();
  }

  async function handleDelete() {
    if (!form.id || !confirm("Supprimer cet événement ?")) return;
    setLoading(true);
    await deleteEvenement(form.id);
    setLoading(false);
    setShowModal(false);
    refresh();
  }

  return (
    <div className="paper-card p-4">
      {/* Légende */}
      <div className="flex flex-wrap gap-3 mb-4 text-xs">
        {Object.entries(TYPE_LABELS).map(([type, label]) => (
          <span key={type} className="flex items-center gap-1.5">
            <span
              className="w-3 h-3 rounded-sm"
              style={{ background: typeColor(type) }}
            />
            {label}
          </span>
        ))}
        {canEdit && (
          <span className="ml-2" style={{ color: "var(--inkLt)" }}>· Cliquez sur une date pour ajouter un événement</span>
        )}
      </div>

      <FullCalendar
        key={refreshKey}
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locale="fr"
        height="auto"
        eventSources={[eventSource]}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth",
        }}
        buttonText={{ today: "Aujourd'hui", month: "Mois" }}
        dayMaxEvents={3}
        eventTimeFormat={{ hour: "2-digit", minute: "2-digit", meridiem: false }}
      />

      {showModal && (
        <Modal
          title={form.id ? "Modifier l'événement" : "Nouvel événement"}
          onClose={() => setShowModal(false)}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <FormField label="Titre">
              <Input
                value={form.titre}
                onChange={(e) => setForm((f) => ({ ...f, titre: e.target.value }))}
                required
                placeholder="Ex: Conseil de classe 6ème"
              />
            </FormField>
            <FormField label="Type">
              <Select
                value={form.type}
                onChange={(e) => setForm((f) => ({ ...f, type: e.target.value as TypeEvenement }))}
              >
                {Object.entries(TYPE_LABELS).map(([v, l]) => (
                  <option key={v} value={v}>{l}</option>
                ))}
              </Select>
            </FormField>
            <div className="grid grid-cols-2 gap-3">
              <FormField label="Début">
                <Input
                  type="datetime-local"
                  value={form.dateDebut}
                  onChange={(e) => setForm((f) => ({ ...f, dateDebut: e.target.value }))}
                  required
                />
              </FormField>
              <FormField label="Fin">
                <Input
                  type="datetime-local"
                  value={form.dateFin}
                  onChange={(e) => setForm((f) => ({ ...f, dateFin: e.target.value }))}
                  required
                />
              </FormField>
            </div>
            <FormField label="Description (optionnelle)">
              <textarea
                value={form.description}
                onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                rows={2}
                placeholder="Détails supplémentaires…"
                style={{
                width: "100%", padding: "11px 14px",
                border: "1px solid var(--border)", borderRadius: "6px",
                fontSize: "13px", fontFamily: "var(--font-sans)",
                color: "var(--ink)", background: "var(--white)",
                outline: "none", resize: "none",
              }}
              onFocus={(e) => { e.currentTarget.style.outline = "2px solid var(--forest)"; e.currentTarget.style.outlineOffset = "1px"; }}
              onBlur={(e) => { e.currentTarget.style.outline = "none"; }}
              />
            </FormField>
            <div className="flex gap-3">
              {form.id && (
                <button
                  type="button"
                  onClick={handleDelete}
                  className="btn-danger px-4 py-2.5 text-sm"
                >
                  Supprimer
                </button>
              )}
              <div className="flex-1">
                <SubmitButton loading={loading}>
                  {form.id ? "Mettre à jour" : "Créer l'événement"}
                </SubmitButton>
              </div>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}

function toDatetimeLocal(date: Date): string {
  const y = date.getFullYear();
  const mo = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  const h = String(date.getHours()).padStart(2, "0");
  const mi = String(date.getMinutes()).padStart(2, "0");
  return `${y}-${mo}-${d}T${h}:${mi}`;
}

function typeColor(type: string): string {
  const c: Record<string, string> = {
    COURS: "#3b82f6",
    EXAMEN: "#ef4444",
    REUNION: "#8b5cf6",
    VACANCES: "#10b981",
    AUTRE: "#6b7280",
  };
  return c[type] ?? "#6b7280";
}
