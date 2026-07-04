import type { SemaineRepartition, MatiereRepartition } from '@/lib/repartition-types';
import { resolveMatiereSelection } from '@/lib/repartition-types';

// Hex equivalents of the Tailwind colors used in MAT_COLORS
const MAT_HEX: Record<string, { accent: string; bg: string; text: string; badgeBg: string }> = {
  'ARITHMÉTIQUE':       { accent: '#3b82f6', bg: '#eff6ff', text: '#1d4ed8', badgeBg: '#dbeafe' },
  'MESURE':             { accent: '#06b6d4', bg: '#ecfeff', text: '#0e7490', badgeBg: '#cffafe' },
  'GÉOMÉTRIE':          { accent: '#6366f1', bg: '#eef2ff', text: '#4338ca', badgeBg: '#e0e7ff' },
  'PROBLÈME':           { accent: '#8b5cf6', bg: '#f5f3ff', text: '#6d28d9', badgeBg: '#ede9fe' },
  'SCIENCES':           { accent: '#0ea5e9', bg: '#f0f9ff', text: '#0369a1', badgeBg: '#e0f2fe' },
  'SVT':                { accent: '#0ea5e9', bg: '#f0f9ff', text: '#0369a1', badgeBg: '#e0f2fe' },
  'GÉOGRAPHIE':         { accent: '#65a30d', bg: '#f7fee7', text: '#4d7c0f', badgeBg: '#ecfccb' },
  'TANTARA':            { accent: '#f59e0b', bg: '#fffbeb', text: '#b45309', badgeBg: '#fef3c7' },
  'MALAGASY':           { accent: '#f87171', bg: '#fff1f2', text: '#b91c1c', badgeBg: '#fee2e2' },
  'FRANÇAIS':           { accent: '#fb923c', bg: '#fff7ed', text: '#c2410c', badgeBg: '#ffedd5' },
  'ANGLAIS':            { accent: '#eab308', bg: '#fefce8', text: '#854d0e', badgeBg: '#fef9c3' },
  'FFMOM':              { accent: '#c084fc', bg: '#faf5ff', text: '#7e22ce', badgeBg: '#f3e8ff' },
  'EPS':                { accent: '#14b8a6', bg: '#f0fdfa', text: '#0f766e', badgeBg: '#ccfbf1' },
  'KAJY':               { accent: '#22c55e', bg: '#f0fdf4', text: '#15803d', badgeBg: '#dcfce7' },
  'CALCUL':             { accent: '#22c55e', bg: '#f0fdf4', text: '#15803d', badgeBg: '#dcfce7' },
  'HETSIKA':            { accent: '#fb923c', bg: '#fff7ed', text: '#c2410c', badgeBg: '#ffedd5' },
  'TSIANJERY':          { accent: '#e879f9', bg: '#fdf4ff', text: '#a21caf', badgeBg: '#fae8ff' },
  'ARTS':               { accent: '#818cf8', bg: '#eef2ff', text: '#4338ca', badgeBg: '#e0e7ff' },
  'SARY':               { accent: '#2dd4bf', bg: '#f0fdfa', text: '#0f766e', badgeBg: '#ccfbf1' },
  'CU':                 { accent: '#0ea5e9', bg: '#f0f9ff', text: '#0369a1', badgeBg: '#e0f2fe' },
  'HYGIÈNE':            { accent: '#fb7185', bg: '#fff1f2', text: '#be123c', badgeBg: '#ffe4e6' },
  'I.C':                { accent: '#1d4ed8', bg: '#eff6ff', text: '#1e3a8a', badgeBg: '#bfdbfe' },
  'MORAL':              { accent: '#f59e0b', bg: '#fffbeb', text: '#b45309', badgeBg: '#fef3c7' },
  'CONTE':              { accent: '#ca8a04', bg: '#fefce8', text: '#713f12', badgeBg: '#fef9c3' },
  'LECTURE-ÉCRITURE':   { accent: '#10b981', bg: '#ecfdf5', text: '#065f46', badgeBg: '#d1fae5' },
  'NUMÉRATION':         { accent: '#0284c7', bg: '#f0f9ff', text: '#075985', badgeBg: '#bae6fd' },
  'MATHS':              { accent: '#2563eb', bg: '#eff6ff', text: '#1e40af', badgeBg: '#bfdbfe' },
  'LANGAGE':            { accent: '#fb923c', bg: '#fff7ed', text: '#c2410c', badgeBg: '#ffedd5' },
  'VAKITENY':           { accent: '#f87171', bg: '#fff1f2', text: '#b91c1c', badgeBg: '#fee2e2' },
  'ENVIRONNEMENT':      { accent: '#84cc16', bg: '#f7fee7', text: '#4d7c0f', badgeBg: '#ecfccb' },
  'DESSIN':             { accent: '#f472b6', bg: '#fdf2f8', text: '#9d174d', badgeBg: '#fce7f3' },
  'CHANT':              { accent: '#818cf8', bg: '#eef2ff', text: '#4338ca', badgeBg: '#e0e7ff' },
  'RÉCITATION':         { accent: '#d946ef', bg: '#fdf4ff', text: '#86198f', badgeBg: '#fae8ff' },
  'T.M':                { accent: '#a8a29e', bg: '#fafaf9', text: '#57534e', badgeBg: '#f5f5f4' },
  'GRAPHISME':          { accent: '#f472b6', bg: '#fdf2f8', text: '#9d174d', badgeBg: '#fce7f3' },
  'PRE-LECTURE':        { accent: '#10b981', bg: '#ecfdf5', text: '#065f46', badgeBg: '#d1fae5' },
  'PRE-ECRITURE':       { accent: '#14b8a6', bg: '#f0fdfa', text: '#0f766e', badgeBg: '#ccfbf1' },
  'PRE-CALCUL':         { accent: '#3b82f6', bg: '#eff6ff', text: '#1d4ed8', badgeBg: '#dbeafe' },
  'PRE-MATHS':          { accent: '#06b6d4', bg: '#ecfeff', text: '#0e7490', badgeBg: '#cffafe' },
  'ESPACE PHYSIQUE':    { accent: '#14b8a6', bg: '#f0fdfa', text: '#0f766e', badgeBg: '#ccfbf1' },
  'ESPACE SENSORIEL':   { accent: '#eab308', bg: '#fefce8', text: '#854d0e', badgeBg: '#fef9c3' },
  'EXERCICE SENSORIEL': { accent: '#eab308', bg: '#fefce8', text: '#854d0e', badgeBg: '#fef9c3' },
  'ART PLASTIQUE':      { accent: '#fb7185', bg: '#fff1f2', text: '#be123c', badgeBg: '#ffe4e6' },
  'TRAVAIL MANUEL':     { accent: '#a8a29e', bg: '#fafaf9', text: '#57534e', badgeBg: '#f5f5f4' },
  'DESSIN COLORIAGE':   { accent: '#ec4899', bg: '#fdf2f8', text: '#9d174d', badgeBg: '#fce7f3' },
  'LES COULEURS':       { accent: '#fb923c', bg: '#fff7ed', text: '#c2410c', badgeBg: '#ffedd5' },
  'LECTURE':            { accent: '#059669', bg: '#ecfdf5', text: '#064e3b', badgeBg: '#a7f3d0' },
  'ÉCRITURE':           { accent: '#14b8a6', bg: '#f0fdfa', text: '#0f766e', badgeBg: '#ccfbf1' },
  'PRE-MATH':           { accent: '#06b6d4', bg: '#ecfeff', text: '#0e7490', badgeBg: '#cffafe' },
  'MORALE':             { accent: '#8b5cf6', bg: '#f5f3ff', text: '#6d28d9', badgeBg: '#ede9fe' },
  'RECITATION':         { accent: '#e879f9', bg: '#fdf4ff', text: '#a21caf', badgeBg: '#fae8ff' },
  'TRAVAUX MANUELS':    { accent: '#a8a29e', bg: '#fafaf9', text: '#57534e', badgeBg: '#f5f5f4' },
};

const DEFAULT_HEX = { accent: '#a8a29e', bg: '#fafaf9', text: '#57534e', badgeBg: '#f5f5f4' };

function getHex(matiere: string) {
  return MAT_HEX[matiere] ?? DEFAULT_HEX;
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
        <span style="background: ${c.badgeBg}; color: ${c.text}; padding: 2px 10px; border-radius: 100px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;">${esc(mat.matiere)}</span>
      </div>` : ''}

      <div style="margin-bottom: 14px;">
        <div class="label">Sujet / Topic</div>
        <div style="font-size: 14px; font-weight: 600; color: #1a1a18; line-height: 1.4;">${esc(mat.topic)}</div>
      </div>

      <div style="margin-bottom: 14px; padding: 12px 14px; background: #fafaf9; border-radius: 6px; border: 1px solid #f0efee;">
        <div class="label">Comment aborder ce sujet</div>
        <div style="font-size: 13px; color: #44403c; line-height: 1.65;">${esc(mat.approche)}</div>
      </div>

      ${mat.transmission.length > 0 ? `
      <div style="margin-bottom: 14px;">
        <div class="label">Comment transmettre</div>
        ${mat.transmission.map((t, i) => `
        <div style="display: flex; align-items: flex-start; gap: 10px; margin-bottom: 7px;">
          <span style="flex-shrink: 0; width: 22px; height: 22px; border-radius: 50%; background: ${c.badgeBg}; color: ${c.text}; font-size: 11px; font-weight: 700; display: flex; align-items: center; justify-content: center; line-height: 22px; text-align: center;">${i + 1}</span>
          <span style="font-size: 13px; color: #44403c; line-height: 1.55; padding-top: 3px;">${esc(t)}</span>
        </div>`).join('')}
      </div>` : ''}

      ${mat.exercices.length > 0 ? `
      <div style="padding: 12px 14px; background: #fafaf9; border-radius: 6px; border: 1px solid #f0efee;">
        <div class="label">Exercices d&apos;assimilation</div>
        ${mat.exercices.map((ex, i) => `
        <div style="display: flex; align-items: flex-start; gap: 10px; margin-bottom: 6px;">
          <span style="flex-shrink: 0; font-size: 11px; font-family: 'Courier New', monospace; color: #a8a29e; padding-top: 2px; min-width: 18px;">${i + 1}.</span>
          <span style="font-size: 13px; color: #44403c; line-height: 1.55;">${esc(ex)}</span>
        </div>`).join('')}
      </div>` : ''}

    </div>`;
}

function renderWeek(sem: SemaineRepartition, matiereNames: string[], c: ReturnType<typeof getHex>): string {
  const trouvees = matiereNames
    .map(name => sem.matieres.find(m => m.matiere === name))
    .filter((m): m is MatiereRepartition => Boolean(m));

  const matContent = trouvees.length > 0
    ? trouvees
        .map(mat => renderMatiereContent(mat, getHex(mat.matiere), matiereNames.length > 1))
        .join('<div style="height: 1px; background: #f0efee; margin: 0 18px;"></div>')
    : `
    <div style="padding: 20px 18px; text-align: center; color: #a8a29e; font-size: 13px; font-style: italic; background: #fff;">
      Aucun contenu enregistré pour cette matière cette semaine.
    </div>`;

  return `
  <div style="break-inside: avoid; margin-bottom: 20px; border: 1px solid #e7e5e4; border-radius: 8px; overflow: hidden;">
    <div style="border-left: 5px solid ${c.accent}; background: ${c.bg}; padding: 13px 16px;">
      <div style="margin-bottom: ${sem.theme && sem.theme !== '—' ? '5px' : '0'};">
        <span style="font-size: 12px; font-weight: 700; color: ${c.text}; text-transform: uppercase; letter-spacing: 0.05em;">Semaine ${sem.semaine}</span>
      </div>
      ${sem.theme && sem.theme !== '—' ? `
      <div style="font-size: 15px; font-weight: 600; color: #1a1a18; margin-bottom: ${sem.sousTheme ? '3px' : '0'};">${esc(sem.theme)}</div>
      ${sem.sousTheme ? `<div style="font-size: 12.5px; color: #57534e;">${esc(sem.sousTheme)}</div>` : ''}
      ` : `<div style="font-size: 13px; color: #a8a29e; font-style: italic;">Thème non renseigné</div>`}
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
  <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 28px; padding-bottom: 18px; border-bottom: 2.5px solid ${c.accent};">
    ${logoTag}
    <div style="flex: 1;">
      <div style="font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #a8a29e; margin-bottom: 6px;">Répartition mensuelle</div>
      <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
        <span style="background: ${c.badgeBg}; color: ${c.text}; padding: 3px 12px; border-radius: 100px; font-size: 13px; font-weight: 700;">${esc(matiere)}</span>
      </div>
      <div style="font-size: 14px; color: #57534e;">
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
