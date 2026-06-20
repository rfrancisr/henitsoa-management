"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { upsertNote, upsertAppreciation } from "@/lib/actions/notes";
import { Badge, FormField, Select } from "@/components/ui/FormField";
import Modal from "@/components/ui/Modal";
import { moyennePonderee, moyenneSimple } from "@/lib/notes-utils";
import type { Mention } from "@/app/generated/prisma/enums";

type Classe = { id: string; libelle: string; niveau: { libelle: string } };
type Periode = { id: string; libelle: string; close: boolean };
type Matiere = { id: string; libelle: string; coefficient: number };
type Eleve = { id: string; nom: string; prenom: string };
type EleveClasse = { eleve: Eleve };
type ClasseDetail = { id: string; libelle: string; niveauId: string; eleves: EleveClasse[] };
type Note = { eleveId: string; matiereId: string; valeur: number; commentaire: string | null };
type Appreciation = { eleveId: string; texte: string; mention: Mention };

function moyenneEleve(
  eleveId: string,
  notes: Note[],
  matieres: Matiere[]
): number | null {
  return moyennePonderee(
    notes
      .filter((n) => n.eleveId === eleveId)
      .map((n) => ({
        valeur: n.valeur,
        coefficient: matieres.find((m) => m.id === n.matiereId)?.coefficient ?? 1,
      }))
  );
}

function moyenneClasse(notes: Note[], matieres: Matiere[], eleveIds: string[]): number | null {
  return moyenneSimple(
    eleveIds
      .map((id) => moyenneEleve(id, notes, matieres))
      .filter((m): m is number => m !== null)
  );
}

export default function NotesClient({
  classes,
  periodes,
  classeSelectionnee,
  periodeSelectionnee,
  matieres,
  notes: initialNotes,
  appreciations: initialAppreciations,
  selectedClasseId,
  selectedPeriodeId,
}: {
  classes: Classe[];
  periodes: Periode[];
  classeSelectionnee: ClasseDetail | null;
  periodeSelectionnee: Periode | null;
  matieres: Matiere[];
  notes: Note[];
  appreciations: Appreciation[];
  selectedClasseId: string;
  selectedPeriodeId: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [editingCell, setEditingCell] = useState<{ eleveId: string; matiereId: string } | null>(null);
  const [cellValue, setCellValue] = useState("");
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [appreciationEleve, setAppreciationEleve] = useState<string | null>(null);
  const [apprTexte, setApprTexte] = useState("");
  const [apprMention, setApprMention] = useState<Mention>("AUCUNE");

  const eleves = classeSelectionnee?.eleves.map((ec) => ec.eleve) ?? [];
  const isPeriodeClosed = periodeSelectionnee?.close ?? false;
  const eleveIds = eleves.map((e) => e.id);

  function navigate(classeId: string, periodeId: string) {
    router.push(`/enseignant/notes?classeId=${classeId}&periodeId=${periodeId}`);
  }

  function startEdit(eleveId: string, matiereId: string) {
    if (isPeriodeClosed) return;
    const existing = notes.find((n) => n.eleveId === eleveId && n.matiereId === matiereId);
    setCellValue(existing ? String(existing.valeur) : "");
    setEditingCell({ eleveId, matiereId });
  }

  async function commitEdit() {
    if (!editingCell || !periodeSelectionnee || !classeSelectionnee) return;
    const val = parseFloat(cellValue);
    if (isNaN(val) || val < 0 || val > 20) {
      setEditingCell(null);
      return;
    }

    setNotes((prev) => {
      const filtered = prev.filter(
        (n) => !(n.eleveId === editingCell.eleveId && n.matiereId === editingCell.matiereId)
      );
      return [...filtered, { eleveId: editingCell.eleveId, matiereId: editingCell.matiereId, valeur: val, commentaire: null }];
    });
    setEditingCell(null);

    startTransition(async () => {
      await upsertNote({
        eleveId: editingCell.eleveId,
        matiereId: editingCell.matiereId,
        periodeId: periodeSelectionnee.id,
        classeId: classeSelectionnee.id,
        valeur: val,
      });
    });
  }

  function openAppreciation(eleveId: string) {
    const existing = initialAppreciations.find((a) => a.eleveId === eleveId);
    setApprTexte(existing?.texte ?? "");
    setApprMention(existing?.mention ?? "AUCUNE");
    setAppreciationEleve(eleveId);
  }

  async function saveAppreciation() {
    if (!appreciationEleve || !periodeSelectionnee || !classeSelectionnee) return;
    await upsertAppreciation({
      eleveId: appreciationEleve,
      classeId: classeSelectionnee.id,
      periodeId: periodeSelectionnee.id,
      texte: apprTexte,
      mention: apprMention,
    });
    setAppreciationEleve(null);
  }

  const moyClasse = moyenneClasse(notes, matieres, eleveIds);

  return (
    <div className="space-y-4">
      {/* Sélecteurs */}
      <div
        className="bg-white rounded-2xl p-4 flex flex-wrap gap-3 items-center"
        style={{ border: "1px solid rgba(232,212,138,0.3)", boxShadow: "0 1px 12px rgba(0,0,0,0.04)" }}
      >
        <div className="flex items-center gap-2">
          <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Classe</label>
          <select
            value={selectedClasseId}
            onChange={(e) => navigate(e.target.value, selectedPeriodeId)}
            className="border border-stone-200 rounded-xl px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold bg-stone-50 text-stone-900"
          >
            {classes.map((c) => (
              <option key={c.id} value={c.id}>{c.libelle}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Période</label>
          <select
            value={selectedPeriodeId}
            onChange={(e) => navigate(selectedClasseId, e.target.value)}
            className="border border-stone-200 rounded-xl px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold bg-stone-50 text-stone-900"
          >
            {periodes.map((p) => (
              <option key={p.id} value={p.id}>{p.libelle}{p.close ? " (clôturée)" : ""}</option>
            ))}
          </select>
        </div>
        {isPeriodeClosed && <Badge color="red">Période clôturée — lecture seule</Badge>}
        {isPending && <span className="text-stone-300 text-sm">Enregistrement…</span>}
        {moyClasse !== null && (
          <span className="text-sm text-stone-500 ml-auto">
            Moyenne de classe : <strong className="text-stone-900">{moyClasse}/20</strong>
          </span>
        )}
      </div>

      {/* Grille des notes */}
      {classeSelectionnee && eleves.length > 0 ? (
        <div
          className="bg-white rounded-2xl overflow-x-auto"
          style={{ border: "1px solid rgba(232,212,138,0.3)", boxShadow: "0 1px 12px rgba(0,0,0,0.04)" }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-100" style={{ background: "rgba(201,168,76,0.04)" }}>
                <th className="text-left px-4 py-3 font-semibold text-stone-500 text-xs uppercase tracking-wider sticky left-0 min-w-[180px]" style={{ background: "rgba(250,248,241,0.95)" }}>
                  Élève
                </th>
                {matieres.map((m) => (
                  <th key={m.id} className="px-3 py-3 font-semibold text-stone-500 text-xs uppercase tracking-wider text-center min-w-[90px]">
                    <div>{m.libelle}</div>
                    <div className="text-stone-300 font-normal normal-case">coeff. {m.coefficient}</div>
                  </th>
                ))}
                <th className="px-4 py-3 font-semibold text-stone-500 text-xs uppercase tracking-wider text-center min-w-[80px]">Moy.</th>
                <th className="px-4 py-3 font-semibold text-stone-500 text-xs uppercase tracking-wider text-center min-w-[100px]">Appréciation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50">
              {eleves.map((eleve, idx) => {
                const moy = moyenneEleve(eleve.id, notes, matieres);
                const appr = initialAppreciations.find((a) => a.eleveId === eleve.id);
                return (
                  <tr key={eleve.id} className={idx % 2 === 0 ? "bg-white" : "bg-stone-50/30"}>
                    <td className="px-4 py-2.5 font-medium text-stone-900 sticky left-0 bg-inherit">
                      {eleve.prenom} {eleve.nom}
                    </td>
                    {matieres.map((matiere) => {
                      const note = notes.find(
                        (n) => n.eleveId === eleve.id && n.matiereId === matiere.id
                      );
                      const isEditing =
                        editingCell?.eleveId === eleve.id &&
                        editingCell?.matiereId === matiere.id;

                      return (
                        <td key={matiere.id} className="px-2 py-1.5 text-center">
                          {isEditing ? (
                            <input
                              type="number"
                              min="0"
                              max="20"
                              step="0.25"
                              value={cellValue}
                              onChange={(e) => setCellValue(e.target.value)}
                              onBlur={commitEdit}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") commitEdit();
                                if (e.key === "Escape") setEditingCell(null);
                              }}
                              className="w-16 text-center border rounded-lg px-1 py-0.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                              style={{ borderColor: "#C9A84C" }}
                              autoFocus
                            />
                          ) : (
                            <button
                              onClick={() => startEdit(eleve.id, matiere.id)}
                              disabled={isPeriodeClosed}
                              className={`w-16 py-1 rounded-lg text-sm font-medium transition-colors ${
                                note
                                  ? "text-stone-900"
                                  : isPeriodeClosed
                                  ? "text-stone-200"
                                  : "text-stone-300 hover:bg-stone-50 hover:text-stone-600 border border-dashed border-stone-200"
                              }`}
                              style={note ? { background: "rgba(201,168,76,0.10)", color: "#6B5010" } : undefined}
                            >
                              {note ? note.valeur : "—"}
                            </button>
                          )}
                        </td>
                      );
                    })}
                    <td className="px-4 py-2.5 text-center">
                      {moy !== null ? (
                        <span
                          className="font-bold text-sm"
                          style={{ color: moy >= 14 ? "#16a34a" : moy >= 10 ? "#9A7428" : "#dc2626" }}
                        >
                          {moy}
                        </span>
                      ) : (
                        <span className="text-stone-200">—</span>
                      )}
                    </td>
                    <td className="px-2 py-1.5 text-center">
                      <button
                        onClick={() => openAppreciation(eleve.id)}
                        className={`text-xs px-2 py-1 rounded-lg transition-colors ${
                          appr
                            ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                            : "text-stone-300 hover:bg-stone-50"
                        }`}
                      >
                        {appr ? appr.mention === "FELICITATIONS" ? "Félicitations" : appr.mention === "ENCOURAGEMENTS" ? "Encouragements" : "Aucune" : "Ajouter"}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div
          className="bg-white rounded-2xl p-8 text-center"
          style={{ border: "1px solid rgba(232,212,138,0.3)" }}
        >
          <p className="text-stone-300 text-sm">Aucun élève dans cette classe.</p>
        </div>
      )}

      {/* Modal appréciation */}
      {appreciationEleve && (
        <Modal
          title={`Appréciation — ${eleves.find((e) => e.id === appreciationEleve)?.prenom ?? ""}`}
          onClose={() => setAppreciationEleve(null)}
        >
          <div className="space-y-4">
            <FormField label="Mention">
              <Select
                value={apprMention}
                onChange={(e) => setApprMention(e.target.value as Mention)}
              >
                <option value="AUCUNE">Aucune mention</option>
                <option value="ENCOURAGEMENTS">Encouragements</option>
                <option value="FELICITATIONS">Félicitations</option>
              </Select>
            </FormField>
            <FormField label="Commentaire">
              <textarea
                value={apprTexte}
                onChange={(e) => setApprTexte(e.target.value)}
                rows={3}
                placeholder="Bon trimestre, efforts encourageants…"
                className="w-full px-3.5 py-2.5 border border-stone-200 rounded-xl text-stone-900 placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-sm bg-stone-50"
              />
            </FormField>
            <div className="flex gap-3">
              <button
                onClick={() => setAppreciationEleve(null)}
                className="flex-1 border border-stone-200 text-stone-500 py-2 rounded-xl text-sm font-medium hover:bg-stone-50 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={saveAppreciation}
                className="btn-gold flex-1 py-2 rounded-xl text-sm"
              >
                Enregistrer
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
