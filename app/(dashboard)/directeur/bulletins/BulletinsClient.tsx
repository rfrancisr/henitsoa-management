"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/FormField";

type Classe = { id: string; libelle: string; niveau: { libelle: string } };
type Periode = { id: string; libelle: string; close: boolean };
type Eleve = { id: string; nom: string; prenom: string };

export default function BulletinsClient({
  classes,
  periodes,
}: {
  classes: Classe[];
  periodes: Periode[];
}) {
  const [classeId, setClasseId] = useState(classes[0]?.id ?? "");
  const [periodeId, setPeriodeId] = useState(periodes[0]?.id ?? "");
  const [eleves, setEleves] = useState<Eleve[]>([]);
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState<string | null>(null);

  useEffect(() => {
    if (!classeId) return;
    setLoading(true);
    fetch(`/api/eleves-par-classe?classeId=${classeId}`)
      .then((r) => r.json())
      .then((data) => setEleves(data.eleves ?? []))
      .finally(() => setLoading(false));
  }, [classeId]);

  async function downloadBulletin(eleveId: string, eleveNom: string) {
    setDownloading(eleveId);
    try {
      const res = await fetch(
        `/api/bulletin?eleveId=${eleveId}&classeId=${classeId}&periodeId=${periodeId}`
      );
      if (!res.ok) throw new Error("Erreur de génération");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `bulletin-${eleveNom}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      alert("Erreur lors de la génération du bulletin.");
    } finally {
      setDownloading(null);
    }
  }

  async function downloadAll() {
    for (const eleve of eleves) {
      await downloadBulletin(eleve.id, `${eleve.nom}-${eleve.prenom}`);
    }
  }

  const periodeSelectionnee = periodes.find((p) => p.id === periodeId);

  return (
    <div className="space-y-4">
      {/* Sélecteurs */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 flex flex-wrap gap-3 items-center">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-slate-700">Classe :</label>
          <select
            value={classeId}
            onChange={(e) => setClasseId(e.target.value)}
            className="border border-slate-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {classes.map((c) => (
              <option key={c.id} value={c.id}>{c.libelle} ({c.niveau.libelle})</option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-slate-700">Période :</label>
          <select
            value={periodeId}
            onChange={(e) => setPeriodeId(e.target.value)}
            className="border border-slate-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {periodes.map((p) => (
              <option key={p.id} value={p.id}>{p.libelle}</option>
            ))}
          </select>
        </div>
        {!periodeSelectionnee?.close && (
          <Badge color="orange">Période non clôturée — les bulletins peuvent être incomplets</Badge>
        )}
        {eleves.length > 0 && (
          <button
            onClick={downloadAll}
            className="ml-auto bg-slate-700 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Télécharger tous ({eleves.length})
          </button>
        )}
      </div>

      {/* Liste des élèves */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        {loading ? (
          <p className="px-5 py-8 text-slate-400 text-sm text-center">Chargement…</p>
        ) : eleves.length === 0 ? (
          <p className="px-5 py-8 text-slate-400 text-sm text-center">
            {classeId ? "Aucun élève dans cette classe." : "Sélectionnez une classe."}
          </p>
        ) : (
          <div className="divide-y divide-slate-100">
            {eleves.map((eleve) => (
              <div key={eleve.id} className="px-5 py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold text-xs shrink-0">
                    {eleve.prenom.charAt(0)}{eleve.nom.charAt(0)}
                  </div>
                  <span className="font-medium text-slate-900 text-sm">
                    {eleve.prenom} {eleve.nom}
                  </span>
                </div>
                <button
                  onClick={() => downloadBulletin(eleve.id, `${eleve.nom}-${eleve.prenom}`)}
                  disabled={downloading === eleve.id}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                >
                  {downloading === eleve.id ? (
                    "Génération…"
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Bulletin PDF
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
