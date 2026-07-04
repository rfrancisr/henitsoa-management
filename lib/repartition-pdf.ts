import type { SemaineRepartition, MatiereRepartition } from '@/lib/repartition-types';
import { resolveMatiereSelection } from '@/lib/repartition-types';

// PDF is printed in black & white — every subject uses the same neutral gray/black palette
// (no per-subject color; only the school logo keeps its own colors).
const NEUTRAL_HEX = { accent: '#57534e', bg: '#f5f5f4', text: '#1a1a18', badgeBg: '#e7e5e4' };

function getHex(_matiere: string) {
  return NEUTRAL_HEX;
}

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderMatiereContent(mat: MatiereRepartition, c: ReturnType<typeof getHex>, subLabel: boolean): string {
  return `
    <div style="padding: 16px 18px; background: #fff;">

      ${subLabel ? `
      <div style="margin-bottom: 10px;">
        <span style="background: ${c.badgeBg}; color: #1a1a18; padding: 2px 10px; border-radius: 100px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;">${esc(mat.matiere)}</span>
      </div>` : ''}

      <div style="margin-bottom: 14px;">
        <div class="label">Sujet / Topic</div>
        <div style="font-size: 14px; font-weight: 600; color: #1a1a18; line-height: 1.4;">${esc(mat.topic)}</div>
      </div>

      <div style="margin-bottom: 14px; padding: 12px 14px; background: #fafaf9; border-radius: 6px; border: 1px solid #f0efee;">
        <div class="label">Comment aborder ce sujet</div>
        <div style="font-size: 13px; color: #1a1a18; line-height: 1.65;">${esc(mat.approche)}</div>
      </div>

      ${mat.transmission.length > 0 ? `
      <div style="margin-bottom: 14px;">
        <div class="label">Comment transmettre</div>
        ${mat.transmission.map((t, i) => `
        <div style="display: flex; align-items: flex-start; gap: 10px; margin-bottom: 7px;">
          <span style="flex-shrink: 0; width: 22px; height: 22px; border-radius: 50%; background: ${c.badgeBg}; color: #1a1a18; font-size: 11px; font-weight: 700; display: flex; align-items: center; justify-content: center; line-height: 22px; text-align: center;">${i + 1}</span>
          <span style="font-size: 13px; color: #1a1a18; line-height: 1.55; padding-top: 3px;">${esc(t)}</span>
        </div>`).join('')}
      </div>` : ''}

      ${mat.exercices.length > 0 ? `
      <div style="padding: 12px 14px; background: #fafaf9; border-radius: 6px; border: 1px solid #f0efee;">
        <div class="label">Exercices d&apos;assimilation</div>
        ${mat.exercices.map((ex, i) => `
        <div style="display: flex; align-items: flex-start; gap: 10px; margin-bottom: 6px;">
          <span style="flex-shrink: 0; font-size: 11px; font-family: 'Courier New', monospace; color: #1a1a18; padding-top: 2px; min-width: 18px;">${i + 1}.</span>
          <span style="font-size: 13px; color: #1a1a18; line-height: 1.55;">${esc(ex)}</span>
        </div>`).join('')}
      </div>` : ''}

    </div>`;
}

function renderWeek(sem: SemaineRepartition, matiereNames: string[], c: ReturnType<typeof getHex>): string {
  const trouvees = matiereNames
    .map(name => sem.matieres.find(m => m.matiere === name))
    .filter((m): m is MatiereRepartition => Boolean(m));

  const grouped = trouvees.length > 1;

  const matContent = trouvees.length > 0
    ? trouvees
        .map(mat => renderMatiereContent(mat, getHex(mat.matiere), grouped))
        .join('<div style="height: 1px; background: #f0efee; margin: 10px 18px;"></div>')
    : `
    <div style="padding: 20px 18px; text-align: center; color: #a8a29e; font-size: 13px; font-style: italic; background: #fff;">
      Aucun contenu enregistré pour cette matière cette semaine.
    </div>`;

  return `
  <div style="break-inside: avoid; margin-bottom: 20px; border: 1px solid #e7e5e4; border-radius: 8px; overflow: hidden;">
    <div style="border-left: 5px solid ${c.accent}; background: ${c.bg}; padding: 13px 16px;">
      <span style="font-size: 12px; font-weight: 700; color: #1a1a18; text-transform: uppercase; letter-spacing: 0.05em;">Semaine ${sem.semaine}</span>
    </div>
    ${matContent}
  </div>`;
}

export function renderRepartitionPDF(
  semaines: SemaineRepartition[],
  matiere: string,
  classeLabel: string,
  mois: string,
  logoBase64?: string,
  classeSlug?: string,
): string {
  const matiereNames = classeSlug ? resolveMatiereSelection(classeSlug, matiere) : [matiere];
  const c = getHex(matiere);
  const logoTag = logoBase64
    ? `<img src="data:image/png;base64,${logoBase64}" style="height: 56px; width: auto; flex-shrink: 0;" alt="Logo">`
    : '';

  const nbSemaines = semaines.length;
  const weekBlocks = semaines.map(sem => renderWeek(sem, matiereNames, c)).join('');

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
      color: #1a1a18;
      background: #fff;
      font-size: 13px;
    }
    .label {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #a8a29e;
      margin-bottom: 6px;
    }
    /* flex shim for Puppeteer */
    [style*="display: flex"] { display: -webkit-box; display: flex; }
  </style>
</head>
<body>

  <!-- HEADER -->
  <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 28px; padding-bottom: 18px; border-bottom: 2.5px solid #1a1a18;">
    ${logoTag}
    <div style="flex: 1;">
      <div style="font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #78716c; margin-bottom: 6px;">Répartition mensuelle</div>
      <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
        <span style="background: #f5f5f4; color: #1a1a18; border: 1px solid #1a1a18; padding: 3px 12px; border-radius: 100px; font-size: 13px; font-weight: 700;">${esc(matiere)}</span>
      </div>
      <div style="font-size: 14px; color: #1a1a18;">
        <strong style="color: #1a1a18;">${esc(classeLabel)}</strong>
        &nbsp;&nbsp;·&nbsp;&nbsp;
        ${esc(mois)}
        &nbsp;&nbsp;·&nbsp;&nbsp;
        ${nbSemaines} semaine${nbSemaines > 1 ? 's' : ''}
      </div>
    </div>
  </div>

  <!-- WEEKS -->
  ${weekBlocks}

  <!-- FOOTER -->
  <div style="margin-top: 28px; padding-top: 12px; border-top: 1px solid #e7e5e4; display: flex; justify-content: space-between; font-size: 11px; color: #a8a29e;">
    <span>École Noted &mdash; ${esc(classeLabel)} &mdash; ${esc(mois)}</span>
    <span>${esc(matiere)}</span>
  </div>

</body>
</html>`;
}
