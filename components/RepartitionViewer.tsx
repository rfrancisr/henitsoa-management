'use client';
import { useState, useCallback } from 'react';
import type { SemaineRepartition, MatiereRepartition, MoisRepartitionInfo } from '@/lib/repartition-types';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(26,26,24,.5)", backdropFilter: "blur(3px)" }}>
      <div className="w-full max-w-2xl max-h-[90vh] flex flex-col" style={{ background: "var(--white)", borderRadius: "2px 12px 12px 12px", border: "1px solid var(--borderLt)", boxShadow: "0 8px 40px rgba(0,0,0,.14)" }}>
        {/* Header */}
        <div className={`flex items-center justify-between px-6 py-4 rounded-t-xl ${c.bg}`} style={{ borderBottom: "1px solid var(--borderLt)" }}>
          <div className="flex items-center gap-3">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.badge}`}>
              {mat.matiere}
            </span>
            <span className="text-sm font-medium" style={{ color: "var(--inkMd)" }}>Modifier le contenu</span>
          </div>
          <button onClick={onClose} style={{ color: "var(--inkLt)" }} className="text-xl leading-none">✕</button>
        </div>

        {/* Corps */}
        <div className="overflow-y-auto flex-1 px-6 py-5 space-y-5">
          <div>
            <label className="section-label" style={{ display: "block", marginBottom: "6px" }}>Sujet / Topic</label>
            <input
              value={form.topic}
              onChange={e => setForm(f => ({ ...f, topic: e.target.value }))}
              style={{ width: "100%", padding: "9px 12px", border: "1px solid var(--border)", borderRadius: "6px", fontSize: "14px", fontFamily: "var(--font-sans)", color: "var(--ink)", background: "var(--white)", outline: "none" }}
              onFocus={e => { e.currentTarget.style.outline = "2px solid var(--forest)"; e.currentTarget.style.outlineOffset = "1px"; }}
              onBlur={e => { e.currentTarget.style.outline = "none"; }}
            />
          </div>

          <div>
            <label className="section-label" style={{ display: "block", marginBottom: "6px" }}>Comment aborder ce sujet</label>
            <textarea
              value={form.approche}
              onChange={e => setForm(f => ({ ...f, approche: e.target.value }))}
              rows={4}
              style={{ width: "100%", padding: "9px 12px", border: "1px solid var(--border)", borderRadius: "6px", fontSize: "14px", fontFamily: "var(--font-sans)", color: "var(--ink)", background: "var(--white)", outline: "none", resize: "none" }}
              onFocus={e => { e.currentTarget.style.outline = "2px solid var(--forest)"; e.currentTarget.style.outlineOffset = "1px"; }}
              onBlur={e => { e.currentTarget.style.outline = "none"; }}
            />
          </div>

          <div>
            <label className="section-label" style={{ display: "block", marginBottom: "4px" }}>Comment le transmettre</label>
            <p className="text-xs mb-1.5" style={{ color: "var(--inkLt)" }}>Une méthode par ligne</p>
            <textarea
              value={form.transmission}
              onChange={e => setForm(f => ({ ...f, transmission: e.target.value }))}
              rows={4}
              style={{ width: "100%", padding: "9px 12px", border: "1px solid var(--border)", borderRadius: "6px", fontSize: "14px", fontFamily: "var(--font-sans)", color: "var(--ink)", background: "var(--white)", outline: "none", resize: "none" }}
              onFocus={e => { e.currentTarget.style.outline = "2px solid var(--forest)"; e.currentTarget.style.outlineOffset = "1px"; }}
              onBlur={e => { e.currentTarget.style.outline = "none"; }}
            />
          </div>

          <div>
            <label className="section-label" style={{ display: "block", marginBottom: "4px" }}>Exercices d&apos;assimilation</label>
            <p className="text-xs mb-1.5" style={{ color: "var(--inkLt)" }}>Un exercice par ligne</p>
            <textarea
              value={form.exercices}
              onChange={e => setForm(f => ({ ...f, exercices: e.target.value }))}
              rows={5}
              style={{ width: "100%", padding: "9px 12px", border: "1px solid var(--border)", borderRadius: "6px", fontSize: "14px", fontFamily: "var(--font-sans)", color: "var(--ink)", background: "var(--white)", outline: "none", resize: "none" }}
              onFocus={e => { e.currentTarget.style.outline = "2px solid var(--forest)"; e.currentTarget.style.outlineOffset = "1px"; }}
              onBlur={e => { e.currentTarget.style.outline = "none"; }}
            />
          </div>

          {error && <p className="text-sm" style={{ color: "var(--red)" }}>{error}</p>}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-6 py-4 rounded-b-xl" style={{ borderTop: "1px solid var(--borderLt)", background: "var(--stoneLt)" }}>
          <button onClick={onClose} className="btn-secondary px-4 py-2 text-sm">Annuler</button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="btn-primary px-5 py-2 text-sm"
            style={saving ? { opacity: 0.5 } : {}}
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
    <div className={`paper-card border-l-4 ${c.border} overflow-hidden`}>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-start justify-between gap-3 px-4 py-3.5 text-left"
        style={{ background: "transparent" }}
      >
        <div className="flex items-start gap-3 min-w-0">
          <span className={`shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full mt-0.5 ${c.badge}`}>
            {mat.matiere}
          </span>
          <span className="text-sm font-medium leading-snug" style={{ color: "var(--ink)" }}>{mat.topic}</span>
        </div>
        <span className={`shrink-0 text-xs mt-1 transition-transform ${open ? 'rotate-180' : ''}`} style={{ color: "var(--inkLt)" }}>▾</span>
      </button>

      {open && (
        <div className="px-4 pb-4 space-y-4 pt-3" style={{ borderTop: "1px solid var(--borderLt)" }}>
          <div>
            <p className="section-label">Comment aborder</p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--inkMd)" }}>{mat.approche}</p>
          </div>

          {mat.transmission.length > 0 && (
            <div>
              <p className="section-label">Comment transmettre</p>
              <ul className="space-y-1">
                {mat.transmission.map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "var(--inkMd)" }}>
                    <span className={`shrink-0 w-5 h-5 rounded-full text-xs flex items-center justify-center font-medium mt-0.5 ${c.badge}`}>{i + 1}</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {mat.exercices.length > 0 && (
            <div>
              <p className="section-label">Exercices d&apos;assimilation</p>
              <ul className="space-y-1.5">
                {mat.exercices.map((ex, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="shrink-0 font-mono text-xs mt-0.5" style={{ color: "var(--inkLt)" }}>{i + 1}.</span>
                    <span style={{ color: "var(--inkMd)" }}>{ex}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {canEdit && (
            <div className="pt-1">
              <button onClick={() => onEdit(mat)} className="btn-secondary text-xs px-3 py-1.5">
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
  mois: MoisRepartitionInfo[];
  moisActif: string;
  semaineActive: number;
  classeSlug: string;
  classeLabel: string;
  canEdit?: boolean;
  basePath: string;
};

export default function RepartitionViewer({
  semaine: initialSemaine,
  mois,
  moisActif,
  semaineActive,
  classeSlug,
  classeLabel,
  canEdit = false,
  basePath,
}: Props) {
  const [semaine, setSemaine] = useState(initialSemaine);
  const [editingMat, setEditingMat] = useState<MatiereRepartition | null>(null);

  const moisInfo = mois.find(m => m.libelle === moisActif)!;
  const moisIndex = mois.findIndex(m => m.libelle === moisActif);

  const handleSave = useCallback((updated: MatiereRepartition) => {
    setSemaine(s => s ? {
      ...s,
      matieres: s.matieres.map(m => m.id === updated.id ? updated : m),
    } : s);
  }, []);

  function navUrl(m: string, s: number) {
    return `${basePath}?classe=${classeSlug}&mois=${encodeURIComponent(m)}&semaine=${s}`;
  }

  const prevUrl = semaineActive > 1
    ? navUrl(moisActif, semaineActive - 1)
    : moisIndex > 0
      ? navUrl(mois[moisIndex - 1].libelle, mois[moisIndex - 1].nbSemaines)
      : null;

  const nextUrl = semaineActive < moisInfo.nbSemaines
    ? navUrl(moisActif, semaineActive + 1)
    : moisIndex < mois.length - 1
      ? navUrl(mois[moisIndex + 1].libelle, 1)
      : null;

  return (
    <div className="space-y-6">
      {/* Navigation mois / semaine */}
      <div className="paper-card p-4">
        {/* Mois */}
        <div className="flex flex-wrap gap-2 mb-4">
          {mois.map(m => (
            <a
              key={m.libelle}
              href={navUrl(m.libelle, 1)}
              style={
                m.libelle === moisActif
                  ? { background: "var(--forest)", color: "var(--stoneLt)" }
                  : { background: "var(--stoneLt)", color: "var(--inkMd)" }
              }
              className="px-3 py-1.5 rounded text-sm font-medium"
            >
              {m.libelle}
            </a>
          ))}
        </div>

        {/* Semaines du mois actif */}
        <div className="flex flex-wrap gap-1.5">
          {Array.from({ length: moisInfo.nbSemaines }, (_, i) => i + 1).map(s => (
            <a
              key={s}
              href={navUrl(moisActif, s)}
              style={
                s === semaineActive
                  ? { background: "rgba(28,61,46,.12)", color: "var(--forest)", outline: "2px solid var(--forest)", outlineOffset: "1px" }
                  : { background: "var(--stoneLt)", color: "var(--inkMd)" }
              }
              className="px-3 h-9 flex items-center justify-center rounded text-sm font-medium"
            >
              Semaine {s}
            </a>
          ))}
        </div>
      </div>

      {/* En-tête de la semaine */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="page-eyebrow">{moisActif} · Semaine {semaineActive}</span>
            <span className="text-xs" style={{ color: "var(--stoneDk)" }}>·</span>
            <span className="text-xs" style={{ color: "var(--inkLt)" }}>{classeLabel}</span>
          </div>
          {semaine ? (
            <>
              <h2 style={{ fontSize: "20px", color: "var(--ink)" }}>{semaine.theme}</h2>
              {semaine.sousTheme && (
                <p className="text-sm mt-0.5" style={{ color: "var(--inkMd)" }}>{semaine.sousTheme}</p>
              )}
            </>
          ) : (
            <p className="italic text-sm" style={{ color: "var(--inkLt)" }}>Aucun contenu pour cette semaine.</p>
          )}
        </div>

        {/* Prev / Next */}
        <div className="flex items-center gap-2 shrink-0">
          {prevUrl ? (
            <a href={prevUrl} className="btn-secondary px-3 py-1.5 text-sm">← Préc.</a>
          ) : (
            <span className="px-3 py-1.5 text-sm" style={{ color: "var(--stoneDk)" }}>←</span>
          )}
          {nextUrl ? (
            <a href={nextUrl} className="btn-secondary px-3 py-1.5 text-sm">Suiv. →</a>
          ) : (
            <span className="px-3 py-1.5 text-sm" style={{ color: "var(--stoneDk)" }}>→</span>
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
        <div className="text-center py-16" style={{ color: "var(--inkLt)" }}>
          <p className="text-4xl mb-3">📋</p>
          <p className="text-sm">Contenu non encore généré pour cette semaine.</p>
          <p className="text-xs mt-1">Lancez le script de génération pour remplir la base.</p>
        </div>
      )}

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
