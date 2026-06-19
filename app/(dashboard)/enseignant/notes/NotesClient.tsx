"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { upsertNote, upsertAppreciation } from "@/lib/actions/notes";
import { Badge } from "@/components/ui/FormField";
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
  const notesEleve = notes.filter((n) => n.eleveId === eleveId);
  if (notesEleve.length === 0) return null;
  const total = notesEleve.reduce((s, n) => {
    const m = matieres.find((m) => m.id === n.matiereId);
    return s + n.valeur * (m?.coefficient ?? 1);
  }, 0);
  const coeff = notesEleve.reduce((s, n) => {
    const m = matieres.find((m) => m.id === n.matiereId);
    return s + (m?.coefficient ?? 1);
  }, 0);
  return coeff === 0 ? null : Math.round((total / coeff) * 100) / 100;
}

function moyenneClasse(notes: Note[], matieres: Matiere[], eleveIds: string[]): number | null {
  const moyennes = eleveIds
    .map((id) => moyenneEleve(id, notes, matieres))
    .filter((m): m is number => m !== null);
  if (moyennes.length === 0) return null;
  return Math.round((moyennes.reduce((s, m) => s + m, 0) / moyennes.length) * 100) / 100;
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

    // Optimistic update
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
      <div className="bg-white rounded-xl border border-slate-200 p-4 flex flex-wrap gap-3 items-center">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-slate-700">Classe :</label>
          <select
            value={selectedClasseId}
            onChange={(e) => navigate(e.target.value, selectedPeriodeId)}
            className="border border-slate-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {classes.map((c) => (
              <option key={c.id} value={c.id}>{c.libelle}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-slate-700">Période :</label>
          <select
            value={selectedPeriodeId}
            onChange={(e) => navigate(selectedClasseId, e.target.value)}
            className="border border-slate-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {periodes.map((p) => (
              <option key={p.id} value={p.id}>{p.libelle}{p.close ? " (clôturée)" : ""}</option>
            ))}
          </select>
        </div>
        {isPeriodeClosed && <Badge color="red">Période clôturée — lecture seule</Badge>}
        {isPending && <span className="text-slate-400 text-sm">Enregistrement…</span>}
        {moyClasse !== null && (
          <span className="text-sm text-slate-600 ml-auto">
            Moyenne de classe : <strong>{moyClasse}/20</strong>
          </span>
        )}
      </div>

      {/* Grille des notes */}
      {classeSelectionnee && eleves.length > 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-left px-4 py-3 font-medium text-slate-700 sticky left-0 bg-slate-50 min-w-[180px]">
                  Élève
                </th>
                {matieres.map((m) => (
                  <th key={m.id} className="px-3 py-3 font-medium text-slate-700 text-center min-w-[90px]">
                    <div>{m.libelle}</div>
                    <div className="text-slate-400 font-normal text-xs">coeff. {m.coefficient}</div>
                  </th>
                ))}
                <th className="px-4 py-3 font-medium text-slate-700 text-center min-w-[80px]">Moy.</th>
                <th className="px-4 py-3 font-medium text-slate-700 text-center min-w-[100px]">Appréciation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {eleves.map((eleve, idx) => {
                const moy = moyenneEleve(eleve.id, notes, matieres);
                const appr = initialAppreciations.find((a) => a.eleveId === eleve.id);
                return (
                  <tr key={eleve.id} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                    <td className="px-4 py-2.5 font-medium text-slate-900 sticky left-0 bg-inherit">
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
                              className="w-16 text-center border border-blue-400 rounded px-1 py-0.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                              autoFocus
                            />
                          ) : (
                            <button
                              onClick={() => startEdit(eleve.id, matiere.id)}
                              disabled={isPeriodeClosed}
                              className={`w-16 py-1 rounded text-sm font-medium transition-colors ${
                                note
                                  ? "bg-blue-50 text-blue-700 hover:bg-blue-100"
                                  : isPeriodeClosed
                                  ? "text-slate-300"
                                  : "text-slate-300 hover:bg-slate-100 hover:text-slate-600 border border-dashed border-slate-200"
                              }`}
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
                          className={`font-bold text-sm ${
                            moy >= 14
                              ? "text-green-600"
                              : moy >= 10
                              ? "text-blue-600"
                              : "text-red-600"
                          }`}
                        >
                          {moy}
                        </span>
                      ) : (
                        <span className="text-slate-300">—</span>
                      )}
                    </td>
                    <td className="px-2 py-1.5 text-center">
                      <button
                        onClick={() => openAppreciation(eleve.id)}
                        className={`text-xs px-2 py-1 rounded transition-colors ${
                          appr
                            ? "bg-green-50 text-green-700 hover:bg-green-100"
                            : "text-slate-400 hover:bg-slate-100"
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
        <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
          <p className="text-slate-400 text-sm">Aucun élève dans cette classe.</p>
        </div>
      )}

      {/* Modal appréciation */}
      {appreciationEleve && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={(e) => e.target === e.currentTarget && setAppreciationEleve(null)}
        >
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 space-y-4">
            <h2 className="font-semibold text-slate-900">
              Appréciation — {eleves.find((e) => e.id === appreciationEleve)?.prenom}
            </h2>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Mention</label>
              <select
                value={apprMention}
                onChange={(e) => setApprMention(e.target.value as Mention)}
                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="AUCUNE">Aucune mention</option>
                <option value="ENCOURAGEMENTS">Encouragements</option>
                <option value="FELICITATIONS">Félicitations</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Commentaire</label>
              <textarea
                value={apprTexte}
                onChange={(e) => setApprTexte(e.target.value)}
                rows={3}
                placeholder="Bon trimestre, efforts encourageants…"
                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setAppreciationEleve(null)}
                className="flex-1 border border-slate-200 text-slate-600 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={saveAppreciation}
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
