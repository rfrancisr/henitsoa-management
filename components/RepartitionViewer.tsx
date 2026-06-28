'use client';
import { useState, useCallback } from 'react';
import type { SemaineRepartition, MatiereRepartition, PeriodeInfo } from '@/lib/repartition-types';
import { getMatColor } from '@/lib/repartition-types';

// ─── Modal d'édition ──────────────────────────────────────────────────────────

type EditState = {
  topic: string;
  approche: string;
  transmission: string;
  exercices: string;
};

function EditModal({
  mat,
  onClose,
  onSave,
}: {
  mat: MatiereRepartition;
  onClose: () => void;
  onSave: (updated: MatiereRepartition) => void;
}) {
  const [form, setForm] = useState<EditState>({
    topic:        mat.topic,
    approche:     mat.approche,
    transmission: mat.transmission.join('\n'),
    exercices:    mat.exercices.join('\n'),
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  async function handleSave() {
    setSaving(true);
    setError('');
    try {
      const res = await fetch(`/api/repartition/matiere/${mat.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic:        form.topic,
          approche:     form.approche,
          transmission: form.transmission.split('\n').map(l => l.trim()).filter(Boolean),
          exercices:    form.exercices.split('\n').map(l => l.trim()).filter(Boolean),
        }),
      });
      if (!res.ok) throw new Error('Erreur serveur');
      const updated = await res.json() as MatiereRepartition;
      onSave(updated);
      onClose();
    } catch {
      setError('Impossible de sauvegarder. Réessayez.');
    } finally {
      setSaving(false);
    }
  }

  const c = getMatColor(mat.matiere);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className={`flex items-center justify-between px-6 py-4 border-b rounded-t-2xl ${c.bg}`}>
          <div className="flex items-center gap-3">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.badge}`}>
              {mat.matiere}
            </span>
            <span className="text-sm font-medium text-stone-700">Modifier le contenu</span>
          </div>
          <button onClick={onClose} className="text-stone-400 hover:text-stone-600 text-xl leading-none">✕</button>
        </div>

        {/* Corps */}
        <div className="overflow-y-auto flex-1 px-6 py-5 space-y-5">
          {/* Topic */}
          <div>
            <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">
              Sujet / Topic
            </label>
            <input
              value={form.topic}
              onChange={e => setForm(f => ({ ...f, topic: e.target.value }))}
              className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Approche */}
          <div>
            <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">
              Comment aborder ce sujet
            </label>
            <textarea
              value={form.approche}
              onChange={e => setForm(f => ({ ...f, approche: e.target.value }))}
              rows={4}
              className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            />
          </div>

          {/* Transmission */}
          <div>
            <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">
              Comment le transmettre
            </label>
            <p className="text-xs text-stone-400 mb-1.5">Une méthode par ligne</p>
            <textarea
              value={form.transmission}
              onChange={e => setForm(f => ({ ...f, transmission: e.target.value }))}
              rows={4}
              className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            />
          </div>

          {/* Exercices */}
          <div>
            <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">
              Exercices d&apos;assimilation
            </label>
            <p className="text-xs text-stone-400 mb-1.5">Un exercice par ligne</p>
            <textarea
              value={form.exercices}
              onChange={e => setForm(f => ({ ...f, exercices: e.target.value }))}
              rows={5}
              className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t bg-stone-50 rounded-b-2xl">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-stone-600 hover:text-stone-800"
          >
            Annuler
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-5 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {saving ? 'Sauvegarde…' : 'Sauvegarder'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Carte matière ────────────────────────────────────────────────────────────

function MatiereCard({
  mat,
  canEdit,
  onEdit,
}: {
  mat: MatiereRepartition;
  canEdit: boolean;
  onEdit: (mat: MatiereRepartition) => void;
}) {
  const [open, setOpen] = useState(false);
  const c = getMatColor(mat.matiere);

  return (
    <div className={`bg-white border border-stone-100 rounded-xl shadow-sm border-l-4 ${c.border} overflow-hidden`}>
      {/* En-tête de la carte */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-start justify-between gap-3 px-4 py-3.5 text-left hover:bg-stone-50 transition-colors"
      >
        <div className="flex items-start gap-3 min-w-0">
          <span className={`shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full mt-0.5 ${c.badge}`}>
            {mat.matiere}
          </span>
          <span className="text-sm font-medium text-stone-800 leading-snug">{mat.topic}</span>
        </div>
        <span className={`shrink-0 text-stone-400 text-xs mt-1 transition-transform ${open ? 'rotate-180' : ''}`}>▾</span>
      </button>

      {/* Détails dépliés */}
      {open && (
        <div className="px-4 pb-4 space-y-4 border-t border-stone-100 pt-3">
          {/* Approche */}
          <div>
            <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">Comment aborder</p>
            <p className="text-sm text-stone-700 leading-relaxed">{mat.approche}</p>
          </div>

          {/* Transmission */}
          {mat.transmission.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">Comment transmettre</p>
              <ul className="space-y-1">
                {mat.transmission.map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                    <span className={`shrink-0 w-5 h-5 rounded-full text-xs flex items-center justify-center font-medium mt-0.5 ${c.badge}`}>{i + 1}</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Exercices */}
          {mat.exercices.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1.5">Exercices d&apos;assimilation</p>
              <ul className="space-y-1.5">
                {mat.exercices.map((ex, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="shrink-0 text-stone-400 font-mono text-xs mt-0.5">{i + 1}.</span>
                    <span className="text-stone-700">{ex}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {canEdit && (
            <div className="pt-1">
              <button
                onClick={() => onEdit(mat)}
                className="text-xs px-3 py-1.5 rounded-lg border border-stone-200 text-stone-500 hover:border-blue-300 hover:text-blue-600 transition-colors"
              >
                ✏️ Modifier
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Composant principal ──────────────────────────────────────────────────────

type Props = {
  semaine: SemaineRepartition | null;
  periodes: PeriodeInfo[];
  periodeActive: number;
  semaineActive: number;
  classeSlug: string;
  classeLabel: string;
  canEdit?: boolean;
  basePath: string;   // "/admin/repartition" | "/enseignant/repartition"
};

export default function RepartitionViewer({
  semaine: initialSemaine,
  periodes,
  periodeActive,
  semaineActive,
  classeSlug,
  classeLabel,
  canEdit = false,
  basePath,
}: Props) {
  const [semaine, setSemaine] = useState(initialSemaine);
  const [editingMat, setEditingMat] = useState<MatiereRepartition | null>(null);

  const periodeInfo = periodes.find(p => p.num === periodeActive)!;

  const handleSave = useCallback((updated: MatiereRepartition) => {
    setSemaine(s => s ? {
      ...s,
      matieres: s.matieres.map(m => m.id === updated.id ? updated : m),
    } : s);
  }, []);

  function navUrl(p: number, s: number) {
    return `${basePath}?classe=${classeSlug}&periode=${p}&semaine=${s}`;
  }

  const prevSem = semaineActive > 1 ? navUrl(periodeActive, semaineActive - 1)
    : periodeActive > 1 ? navUrl(periodeActive - 1, periodes[periodeActive - 2].nbSemaines)
    : null;

  const nextSem = semaineActive < periodeInfo.nbSemaines ? navUrl(periodeActive, semaineActive + 1)
    : periodeActive < periodes.length ? navUrl(periodeActive + 1, 1)
    : null;

  return (
    <div className="space-y-6">
      {/* Navigation période / semaine */}
      <div className="bg-white border border-stone-100 rounded-xl shadow-sm p-4">
        {/* Périodes */}
        <div className="flex flex-wrap gap-2 mb-4">
          {periodes.map(p => (
            <a
              key={p.num}
              href={navUrl(p.num, 1)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                p.num === periodeActive
                  ? 'bg-blue-600 text-white'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              P{p.num}
            </a>
          ))}
        </div>

        {/* Semaines de la période active */}
        <div className="flex flex-wrap gap-1.5">
          {Array.from({ length: periodeInfo.nbSemaines }, (_, i) => i + 1).map(s => (
            <a
              key={s}
              href={navUrl(periodeActive, s)}
              className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                s === semaineActive
                  ? 'bg-blue-100 text-blue-700 ring-2 ring-blue-400'
                  : 'bg-stone-50 text-stone-600 hover:bg-stone-100'
              }`}
            >
              {s}
            </a>
          ))}
        </div>
      </div>

      {/* En-tête de la semaine */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
              {periodeInfo.libelle} · Semaine {semaineActive}
            </span>
            <span className="text-xs text-stone-300">·</span>
            <span className="text-xs text-stone-400">{classeLabel}</span>
          </div>
          {semaine ? (
            <>
              <h1 className="text-xl font-bold text-stone-800">{semaine.theme}</h1>
              {semaine.sousTheme && (
                <p className="text-sm text-stone-500 mt-0.5">{semaine.sousTheme}</p>
              )}
            </>
          ) : (
            <p className="text-stone-400 italic text-sm">Aucun contenu pour cette semaine.</p>
          )}
        </div>

        {/* Prev / Next */}
        <div className="flex items-center gap-2 shrink-0">
          {prevSem ? (
            <a href={prevSem} className="px-3 py-1.5 rounded-lg border border-stone-200 text-stone-500 hover:border-stone-300 text-sm">← Préc.</a>
          ) : (
            <span className="px-3 py-1.5 text-stone-300 text-sm">←</span>
          )}
          {nextSem ? (
            <a href={nextSem} className="px-3 py-1.5 rounded-lg border border-stone-200 text-stone-500 hover:border-stone-300 text-sm">Suiv. →</a>
          ) : (
            <span className="px-3 py-1.5 text-stone-300 text-sm">→</span>
          )}
        </div>
      </div>

      {/* Grille des matières */}
      {semaine ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {semaine.matieres.map(mat => (
            <MatiereCard
              key={mat.id}
              mat={mat}
              canEdit={canEdit}
              onEdit={setEditingMat}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-stone-400">
          <p className="text-4xl mb-3">📋</p>
          <p className="text-sm">Contenu non encore généré pour cette semaine.</p>
          <p className="text-xs mt-1">Lancez le script de génération pour remplir la base.</p>
        </div>
      )}

      {/* Modal édition */}
      {editingMat && (
        <EditModal
          mat={editingMat}
          onClose={() => setEditingMat(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
