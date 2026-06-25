'use client';
import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import type { PeriodeInfo, SemaineData, Seance, Jour } from '@/lib/repartition';
import { FicheDocument } from './FichePDF';

// PDF ne peut pas s'exécuter côté serveur
const PDFDownloadLink = dynamic(
  () => import('@react-pdf/renderer').then((m) => m.PDFDownloadLink),
  { ssr: false, loading: () => <span className="text-xs text-stone-400">Chargement PDF…</span> }
);

// ─── Couleurs par matière ─────────────────────────────────────────────────────

const MAT_COLORS: Record<string, { border: string; badge: string; text: string }> = {
  MALAGASY:   { border: 'border-l-red-400',    badge: 'bg-red-50 text-red-700 border border-red-200',    text: 'text-red-700' },
  FRANÇAIS:   { border: 'border-l-blue-400',   badge: 'bg-blue-50 text-blue-700 border border-blue-200', text: 'text-blue-700' },
  KAJY:       { border: 'border-l-green-500',  badge: 'bg-green-50 text-green-700 border border-green-200', text: 'text-green-700' },
  CALCUL:     { border: 'border-l-green-500',  badge: 'bg-green-50 text-green-700 border border-green-200', text: 'text-green-700' },
  FFMOM:      { border: 'border-l-violet-400', badge: 'bg-violet-50 text-violet-700 border border-violet-200', text: 'text-violet-700' },
  HETSIKA:    { border: 'border-l-orange-400', badge: 'bg-orange-50 text-orange-700 border border-orange-200', text: 'text-orange-700' },
  TSIANJERY:  { border: 'border-l-fuchsia-400',badge: 'bg-fuchsia-50 text-fuchsia-700 border border-fuchsia-200', text: 'text-fuchsia-700' },
  ARTS:       { border: 'border-l-indigo-400', badge: 'bg-indigo-50 text-indigo-700 border border-indigo-200', text: 'text-indigo-700' },
  SARY:       { border: 'border-l-teal-400',   badge: 'bg-teal-50 text-teal-700 border border-teal-200',    text: 'text-teal-700' },
  EPS:        { border: 'border-l-cyan-500',   badge: 'bg-cyan-50 text-cyan-700 border border-cyan-200',    text: 'text-cyan-700' },
  TANTARA:    { border: 'border-l-amber-500',  badge: 'bg-amber-50 text-amber-700 border border-amber-200', text: 'text-amber-700' },
  GÉOGRAPHIE: { border: 'border-l-lime-600',   badge: 'bg-lime-50 text-lime-700 border border-lime-200',    text: 'text-lime-700' },
  SCIENCES:   { border: 'border-l-sky-500',    badge: 'bg-sky-50 text-sky-700 border border-sky-200',      text: 'text-sky-700' },
  CU:         { border: 'border-l-sky-500',    badge: 'bg-sky-50 text-sky-700 border border-sky-200',      text: 'text-sky-700' },
};

const DEFAULT_COLOR = { border: 'border-l-stone-300', badge: 'bg-stone-100 text-stone-600 border border-stone-200', text: 'text-stone-600' };

function getColor(matiere: string) {
  return MAT_COLORS[matiere] ?? DEFAULT_COLOR;
}

function diffColor(d: Seance['exercices'][0]['difficulte']) {
  if (d === 'facile')  return 'bg-green-50 text-green-700 border border-green-200';
  if (d === 'moyen')   return 'bg-yellow-50 text-yellow-700 border border-yellow-200';
  return 'bg-red-50 text-red-700 border border-red-200';
}

// ─── Bouton PDF ───────────────────────────────────────────────────────────────

function PDFBtn({ semaine, classe, label }: { semaine: SemaineData; classe: string; label: string }) {
  return (
    <PDFDownloadLink
      document={<FicheDocument semaine={semaine} classe={classe} />}
      fileName={`fiches-${classe}-p${semaine.periode}-s${semaine.numero_semaine}.pdf`}
    >
      {({ loading }) => (
        <button
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-stone-900 text-white hover:bg-stone-700 transition-colors disabled:opacity-60"
          disabled={loading}
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 12.5h10M8 3v7.5m0 0L5.5 8M8 10.5L10.5 8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {loading ? 'Génération…' : label}
        </button>
      )}
    </PDFDownloadLink>
  );
}

// ─── Vue d'une séance ─────────────────────────────────────────────────────────

function SeanceView({ seance }: { seance: Seance }) {
  const [open, setOpen] = useState(false);
  const c = getColor(seance.matiere);

  if (seance.matiere === 'Récréation') {
    return (
      <div className="flex items-center gap-3 px-3 py-2 bg-stone-50 rounded-lg border border-stone-100">
        <span className="text-xs font-mono text-stone-400">{seance.heure_debut}–{seance.heure_fin}</span>
        <span className="text-xs text-stone-400 italic">☕ Récréation</span>
      </div>
    );
  }

  return (
    <div className={`border-l-4 ${c.border} bg-white rounded-r-lg border border-stone-100 overflow-hidden`}>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-stone-50 transition-colors"
      >
        <span className="text-xs font-mono text-stone-400 shrink-0">{seance.heure_debut}–{seance.heure_fin}</span>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-md shrink-0 ${c.badge}`}>{seance.matiere}</span>
        <span className="text-sm font-medium text-stone-800 flex-1 truncate">{seance.titre}</span>
        <svg
          className={`w-4 h-4 text-stone-400 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"
        >
          <path d="M4 6l4 4 4-4" strokeLinecap="round"/>
        </svg>
      </button>

      {open && (
        <div className="px-4 pb-4 space-y-4 border-t border-stone-100 pt-4">

          {/* Introduction */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-blue-600 uppercase tracking-wide">Introduction</h4>
            {seance.introduction.mise_en_situation && (
              <p className="text-xs text-stone-600 italic leading-relaxed">
                {seance.introduction.mise_en_situation}
              </p>
            )}
            {seance.introduction.objectifs.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {seance.introduction.objectifs.map((o, i) => (
                  <span key={i} className="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 rounded border border-blue-100">{o}</span>
                ))}
              </div>
            )}
            {seance.introduction.materiel.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                <span className="text-xs text-stone-400">Matériel :</span>
                {seance.introduction.materiel.map((m, i) => (
                  <span key={i} className="text-xs px-2 py-0.5 bg-orange-50 text-orange-700 rounded border border-orange-100">{m}</span>
                ))}
              </div>
            )}
          </div>

          {/* Développement */}
          {seance.developpement.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-violet-600 uppercase tracking-wide">Déroulement</h4>
              <div className="space-y-2">
                {seance.developpement.map((e) => (
                  <div key={e.etape} className="flex gap-3 p-3 bg-stone-50 rounded-lg">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{e.etape}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-stone-800">{e.titre}</span>
                        <span className="text-xs text-stone-400 bg-stone-200 px-1.5 py-0.5 rounded">{e.duree}</span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs"><span className="font-medium text-violet-600">Enseignant : </span><span className="text-stone-600">{e.enseignant}</span></p>
                        {e.tableau && (
                          <div className="font-mono text-xs bg-white border border-stone-200 rounded px-2 py-1 text-stone-700">{e.tableau}</div>
                        )}
                        <p className="text-xs"><span className="font-medium text-green-600">Élèves : </span><span className="text-stone-600">{e.eleves}</span></p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Exercices */}
          {seance.exercices.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-purple-600 uppercase tracking-wide">
                Exercices ({seance.exercices.length}) — avec corrections
              </h4>
              <div className="space-y-2">
                {seance.exercices.map((ex) => (
                  <div key={ex.numero} className="flex gap-3 p-3 border border-stone-100 rounded-lg">
                    <div className="shrink-0 w-6 h-6 rounded bg-purple-600 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{ex.numero}</span>
                    </div>
                    <div className="flex-1 min-w-0 space-y-1.5">
                      <p className="text-xs text-stone-800 leading-relaxed">{ex.enonce}</p>
                      <div className="pl-2 border-l-2 border-green-400 bg-green-50 rounded-r px-2 py-1">
                        <span className="text-xs font-semibold text-green-600">Correction : </span>
                        <span className="text-xs text-green-800">{ex.correction}</span>
                      </div>
                      <span className={`inline-block text-xs px-1.5 py-0.5 rounded ${diffColor(ex.difficulte)}`}>
                        {ex.difficulte}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Évaluation */}
          {seance.evaluation.question && (
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-amber-600 uppercase tracking-wide">Évaluation de fin de séance</h4>
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg space-y-1.5">
                <p className="text-xs font-semibold text-amber-800">Q : {seance.evaluation.question}</p>
                <p className="text-xs text-amber-700">
                  <span className="font-medium">Réponse attendue : </span>{seance.evaluation.reponse_attendue}
                </p>
                {seance.evaluation.criteres_reussite.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {seance.evaluation.criteres_reussite.map((c, i) => (
                      <span key={i} className="inline-flex items-center gap-1 text-xs px-1.5 py-0.5 bg-amber-100 text-amber-700 rounded">
                        <span className="text-amber-400">✓</span> {c}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Vue d'un jour ────────────────────────────────────────────────────────────

function JourView({ jour, semaine, classe }: { jour: Jour; semaine: SemaineData; classe: string }) {
  const [open, setOpen] = useState(true);
  const nonRecre = jour.seances.filter(s => s.matiere !== 'Récréation');

  return (
    <div className="border border-stone-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 py-3 bg-stone-900 text-white hover:bg-stone-800 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="font-semibold text-sm">{jour.jour}</span>
          <span className="text-stone-400 text-xs font-mono">{jour.date}</span>
          <span className="text-stone-400 text-xs">{nonRecre.length} séances</span>
        </div>
        <div className="flex items-center gap-2">
          <PDFBtn semaine={semaine} classe={classe} label="PDF du jour" />
          <svg
            className={`w-4 h-4 text-stone-400 transition-transform ${open ? 'rotate-180' : ''}`}
            viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"
          >
            <path d="M4 6l4 4 4-4" strokeLinecap="round"/>
          </svg>
        </div>
      </button>

      {open && (
        <div className="p-3 space-y-2 bg-white">
          {jour.seances.map((s, i) => (
            <SeanceView key={i} seance={s} />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Composant principal ──────────────────────────────────────────────────────

type Props = {
  periodes: PeriodeInfo[];
  selectedPeriode: number;
  selectedSemaine: number;
  semaineData: SemaineData | null;
  basePath: string;
  classe?: string;
};

export default function RepartitionViewer({
  periodes,
  selectedPeriode,
  selectedSemaine,
  semaineData,
  basePath,
  classe = '11eme',
}: Props) {
  const periode = periodes.find(p => p.num === selectedPeriode) ?? periodes[0];
  const semaineCount = periode?.nbSemaines ?? 7;
  const classeLabel = classe.replace('eme', 'ème').toUpperCase();

  return (
    <div className="space-y-4">
      {/* Navigation périodes */}
      <div className="flex gap-2 flex-wrap">
        {periodes.map(p => (
          <Link
            key={p.num}
            href={`${basePath}&periode=${p.num}&semaine=1`}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
              p.num === selectedPeriode
                ? 'bg-stone-900 text-white border-stone-900'
                : 'bg-white text-stone-500 border-stone-200 hover:border-stone-400'
            }`}
          >
            {p.libelle}
          </Link>
        ))}
      </div>

      {/* Navigation semaines */}
      <div className="flex gap-1.5 flex-wrap items-center">
        <span className="text-xs text-stone-400 mr-1">Semaine :</span>
        {Array.from({ length: semaineCount }, (_, i) => i + 1).map(n => (
          <Link
            key={n}
            href={`${basePath}&periode=${selectedPeriode}&semaine=${n}`}
            className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-medium border transition-colors ${
              n === selectedSemaine
                ? 'bg-amber-400 text-stone-900 border-amber-400'
                : 'bg-white text-stone-500 border-stone-200 hover:border-stone-400'
            }`}
          >
            {n}
          </Link>
        ))}
      </div>

      {/* Contenu de la semaine */}
      {semaineData ? (
        <>
          {/* En-tête semaine */}
          <div className="p-4 bg-gradient-to-r from-stone-900 to-stone-800 rounded-xl text-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-stone-400">{classeLabel} · {semaineData.libelle}</span>
                </div>
                <h2 className="text-base font-bold leading-snug">{semaineData.theme_semaine}</h2>
                {semaineData.sous_theme_semaine && (
                  <p className="text-xs text-stone-400 mt-1">{semaineData.sous_theme_semaine}</p>
                )}
                <p className="text-xs text-stone-500 mt-2 font-mono">Semaine du {semaineData.date_debut_semaine}</p>
              </div>
              <PDFBtn semaine={semaineData} classe={classe} label="PDF semaine" />
            </div>

            {/* Résumé heures par matière */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {Object.entries(semaineData.heures_par_matiere).map(([mat, h]) => {
                const c = getColor(mat);
                return (
                  <span key={mat} className={`text-xs px-2 py-0.5 rounded-full font-medium ${c.badge}`}>
                    {mat} · {h}
                  </span>
                );
              })}
            </div>
          </div>

          {/* 5 jours */}
          <div className="space-y-3">
            {semaineData.jours.map((jour, i) => (
              <JourView key={i} jour={jour} semaine={semaineData} classe={classe} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-40 bg-stone-50 rounded-xl border border-dashed border-stone-200">
          <p className="text-sm text-stone-400">Aucune répartition disponible pour cette semaine.</p>
        </div>
      )}
    </div>
  );
}
