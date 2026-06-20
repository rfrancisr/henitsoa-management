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
  const [previewing, setPreviewing] = useState<string | null>(null);

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

  function previewBulletin(eleveId: string) {
    setPreviewing(eleveId);
    const url = `/api/bulletin?eleveId=${eleveId}&classeId=${classeId}&periodeId=${periodeId}&format=html`;
    window.open(url, "_blank", "noopener,noreferrer");
    setTimeout(() => setPreviewing(null), 1500);
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
      <div
        className="bg-white rounded-2xl p-4 flex flex-wrap gap-3 items-center"
        style={{ border: "1px solid rgba(232,212,138,0.3)", boxShadow: "0 1px 12px rgba(0,0,0,0.04)" }}
      >
        <div className="flex items-center gap-2">
          <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Classe</label>
          <select
            value={classeId}
            onChange={(e) => setClasseId(e.target.value)}
            className="border border-stone-200 rounded-xl px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold bg-stone-50 text-stone-900"
          >
            {classes.map((c) => (
              <option key={c.id} value={c.id}>{c.libelle} ({c.niveau.libelle})</option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Période</label>
          <select
            value={periodeId}
            onChange={(e) => setPeriodeId(e.target.value)}
            className="border border-stone-200 rounded-xl px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold bg-stone-50 text-stone-900"
          >
            {periodes.map((p) => (
              <option key={p.id} value={p.id}>{p.libelle}</option>
            ))}
          </select>
        </div>
        {!periodeSelectionnee?.close && (
          <Badge color="slate">Période non clôturée — bulletins incomplets</Badge>
        )}
        {eleves.length > 0 && (
          <button
            onClick={downloadAll}
            className="btn-gold ml-auto text-sm px-4 py-2 rounded-xl"
          >
            Télécharger tous ({eleves.length})
          </button>
        )}
      </div>

      {/* Liste des élèves */}
      <div
        className="bg-white rounded-2xl overflow-hidden"
        style={{ border: "1px solid rgba(232,212,138,0.3)", boxShadow: "0 1px 12px rgba(0,0,0,0.04)" }}
      >
        {loading ? (
          <p className="px-5 py-8 text-stone-300 text-sm text-center">Chargement…</p>
        ) : eleves.length === 0 ? (
          <p className="px-5 py-8 text-stone-300 text-sm text-center">
            {classeId ? "Aucun élève dans cette classe." : "Sélectionnez une classe."}
          </p>
        ) : (
          <div className="divide-y divide-stone-50">
            {eleves.map((eleve) => (
              <div key={eleve.id} className="px-5 py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center font-semibold text-xs shrink-0"
                    style={{ background: "rgba(201,168,76,0.12)", color: "#9A7428" }}
                  >
                    {eleve.prenom.charAt(0)}{eleve.nom.charAt(0)}
                  </div>
                  <span className="font-medium text-stone-900 text-sm">
                    {eleve.prenom} {eleve.nom}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => previewBulletin(eleve.id)}
                    disabled={previewing === eleve.id}
                    className="btn-glass flex items-center gap-2 text-sm px-4 py-2 rounded-xl font-semibold"
                  >
                    {previewing === eleve.id ? (
                      "Ouverture…"
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Voir
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => downloadBulletin(eleve.id, `${eleve.nom}-${eleve.prenom}`)}
                    disabled={downloading === eleve.id}
                    className="btn-gold flex items-center gap-2 text-sm px-4 py-2 rounded-xl"
                  >
                    {downloading === eleve.id ? (
                      "Génération…"
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        PDF
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
