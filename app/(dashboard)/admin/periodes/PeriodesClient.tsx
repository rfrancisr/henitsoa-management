"use client";

import { useState } from "react";
import { createPeriode, cloturerPeriode, rouvrirPeriode } from "@/lib/actions/structure";
import Modal from "@/components/ui/Modal";
import { FormField, Input, Select, SubmitButton, Badge } from "@/components/ui/FormField";
import type { TypePeriode } from "@/app/generated/prisma/enums";

type AnneeScolaire = { id: string; libelle: string; active: boolean };
type Periode = {
  id: string;
  libelle: string;
  type: TypePeriode;
  dateDebut: Date;
  dateFin: Date;
  close: boolean;
  anneeScolaire: AnneeScolaire;
};

export default function PeriodesClient({
  periodes,
  anneesScolaires,
  anneeScolaireActiveId,
  isAdmin,
}: {
  periodes: Periode[];
  anneesScolaires: AnneeScolaire[];
  anneeScolaireActiveId: string | null;
  isAdmin: boolean;
}) {
  const [showCreate, setShowCreate] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleCreate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    await createPeriode({
      libelle: fd.get("libelle") as string,
      type: fd.get("type") as TypePeriode,
      dateDebut: fd.get("dateDebut") as string,
      dateFin: fd.get("dateFin") as string,
      anneeScolaireId: fd.get("anneeScolaireId") as string,
    });
    setLoading(false);
    setShowCreate(false);
  }

  const fmt = (d: Date) => new Date(d).toLocaleDateString("fr-FR");

  return (
    <>
      <div
        className="bg-white rounded-2xl overflow-hidden"
        style={{ border: "1px solid rgba(232,212,138,0.3)", boxShadow: "0 1px 12px rgba(0,0,0,0.04)" }}
      >
        <div className="px-5 py-4 border-b border-stone-100 flex justify-end">
          {isAdmin && (
            <button
              onClick={() => setShowCreate(true)}
              className="btn-gold text-sm px-4 py-2 rounded-xl"
            >
              + Nouvelle période
            </button>
          )}
        </div>

        <div className="divide-y divide-stone-50">
          {periodes.length === 0 ? (
            <p className="px-5 py-8 text-stone-300 text-sm text-center">Aucune période créée.</p>
          ) : (
            periodes.map((p) => (
              <div key={p.id} className="px-5 py-4 flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-medium text-stone-900">{p.libelle}</span>
                    <Badge color="gold">
                      {p.type === "TRIMESTRE" ? "Trimestre" : "Semestre"}
                    </Badge>
                    {p.close ? (
                      <Badge color="red">Clôturée</Badge>
                    ) : (
                      <Badge color="green">Ouverte</Badge>
                    )}
                  </div>
                  <p className="text-stone-400 text-xs">
                    {fmt(p.dateDebut)} → {fmt(p.dateFin)} · {p.anneeScolaire.libelle}
                  </p>
                </div>
                <div className="flex gap-2">
                  {!p.close ? (
                    <button
                      onClick={async () => {
                        if (confirm(`Clôturer "${p.libelle}" ? Les notes ne pourront plus être modifiées.`)) {
                          await cloturerPeriode(p.id);
                        }
                      }}
                      className="text-xs text-stone-400 hover:text-red-600 px-2 py-1 rounded-lg hover:bg-red-50 transition-colors"
                    >
                      Clôturer
                    </button>
                  ) : isAdmin ? (
                    <button
                      onClick={() => rouvrirPeriode(p.id)}
                      className="text-xs text-stone-400 hover:text-emerald-600 px-2 py-1 rounded-lg hover:bg-emerald-50 transition-colors"
                    >
                      Rouvrir
                    </button>
                  ) : null}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {showCreate && (
        <Modal title="Nouvelle période d'évaluation" onClose={() => setShowCreate(false)}>
          <form onSubmit={handleCreate} className="space-y-4">
            <FormField label="Intitulé">
              <Input name="libelle" required placeholder="Ex: 1er Trimestre" />
            </FormField>
            <FormField label="Type">
              <Select name="type" required>
                <option value="TRIMESTRE">Trimestre</option>
                <option value="SEMESTRE">Semestre</option>
              </Select>
            </FormField>
            <div className="grid grid-cols-2 gap-3">
              <FormField label="Début">
                <Input name="dateDebut" type="date" required />
              </FormField>
              <FormField label="Fin">
                <Input name="dateFin" type="date" required />
              </FormField>
            </div>
            <FormField label="Année scolaire">
              <Select name="anneeScolaireId" required defaultValue={anneeScolaireActiveId ?? ""}>
                {anneesScolaires.map((a) => (
                  <option key={a.id} value={a.id}>{a.libelle}{a.active ? " (active)" : ""}</option>
                ))}
              </Select>
            </FormField>
            <SubmitButton loading={loading}>Créer la période</SubmitButton>
          </form>
        </Modal>
      )}
    </>
  );
}
