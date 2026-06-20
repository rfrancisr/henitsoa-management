import { prisma } from "@/lib/prisma";
import { moyennePonderee, moyenneSimple } from "@/lib/notes-utils";

export type BulletinData = {
  eleve: {
    id: string;
    nom: string;
    prenom: string;
    dateNaissance: Date;
    sexe: string;
  };
  classe: { libelle: string; niveau: { libelle: string } };
  anneeScolaire: { libelle: string };
  periode: { libelle: string; type: string };
  notes: {
    matiere: string;
    coefficient: number;
    note: number | null;
    moyenneClasse: number | null;
  }[];
  moyenneGenerale: number | null;
  moyenneClasse: number | null;
  rang: number | null;
  totalEleves: number;
  appreciation: string;
  mention: string;
};

export async function getBulletinData(
  eleveId: string,
  classeId: string,
  periodeId: string
): Promise<BulletinData | null> {
  const [eleve, classe, periode] = await Promise.all([
    prisma.eleve.findUnique({ where: { id: eleveId } }),
    prisma.classe.findUnique({
      where: { id: classeId },
      include: { niveau: true, anneeScolaire: true },
    }),
    prisma.periodeEvaluation.findUnique({ where: { id: periodeId } }),
  ]);

  if (!eleve || !classe || !periode) return null;

  const matieres = await prisma.matiere.findMany({
    where: { niveauId: classe.niveauId },
    orderBy: { libelle: "asc" },
  });

  // Notes de tous les élèves de la classe pour calculer les moyennes
  const tousEleves = await prisma.eleveClasse.findMany({
    where: { classeId },
    select: { eleveId: true },
  });
  const tousEleveIds = tousEleves.map((e) => e.eleveId);

  const toutesNotes = await prisma.note.findMany({
    where: { periodeId, eleveId: { in: tousEleveIds } },
    include: { matiere: true },
  });

  // Calcul de la moyenne pondérée pour un élève
  function calcMoyenne(eId: string): number | null {
    return moyennePonderee(
      toutesNotes
        .filter((n) => n.eleveId === eId)
        .map((n) => ({ valeur: n.valeur, coefficient: n.matiere.coefficient }))
    );
  }

  // Moyennes de la classe par matière
  function moyenneClasseParMatiere(matiereId: string): number | null {
    return moyenneSimple(
      toutesNotes.filter((n) => n.matiereId === matiereId).map((n) => n.valeur)
    );
  }

  // Rang de l'élève
  const moyennesParEleve = tousEleveIds
    .map((id) => ({ id, moy: calcMoyenne(id) }))
    .filter((x): x is { id: string; moy: number } => x.moy !== null)
    .sort((a, b) => b.moy - a.moy);

  const rang = moyennesParEleve.findIndex((x) => x.id === eleveId) + 1 || null;
  const moyenneClasseGenerale = moyenneSimple(moyennesParEleve.map((x) => x.moy));

  const appreciation = await prisma.appreciationClasse.findUnique({
    where: { eleveId_classeId_periodeId: { eleveId, classeId, periodeId } },
  });

  const mentionLabel: Record<string, string> = {
    FELICITATIONS: "Félicitations du conseil de classe",
    ENCOURAGEMENTS: "Encouragements du conseil de classe",
    AUCUNE: "",
  };

  return {
    eleve,
    classe,
    anneeScolaire: classe.anneeScolaire,
    periode,
    notes: matieres.map((m) => {
      const note = toutesNotes.find(
        (n) => n.eleveId === eleveId && n.matiereId === m.id
      );
      return {
        matiere: m.libelle,
        coefficient: m.coefficient,
        note: note?.valeur ?? null,
        moyenneClasse: moyenneClasseParMatiere(m.id),
      };
    }),
    moyenneGenerale: calcMoyenne(eleveId),
    moyenneClasse: moyenneClasseGenerale,
    rang: rang || null,
    totalEleves: tousEleveIds.length,
    appreciation: appreciation?.texte ?? "",
    mention: mentionLabel[appreciation?.mention ?? "AUCUNE"],
  };
}

export function renderBulletinHTML(data: BulletinData, logoBase64?: string): string {
  const fmt = (d: Date) => new Date(d).toLocaleDateString("fr-FR");
  const fmtNote = (n: number | null) => (n !== null ? n.toFixed(2) : "—");
  const moyColor = (m: number | null) =>
    m === null ? "#a8a29e" : m >= 14 ? "#15803d" : m >= 10 ? "#9A7428" : "#dc2626";

  const logoHtml = logoBase64
    ? `<img src="data:image/png;base64,${logoBase64}" alt="Logo EcoleManager" style="height:52px;width:auto;object-fit:contain;" />`
    : "";

  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', Arial, sans-serif; font-size: 12px; color: #1a1a1a; background: white; padding: 32px; }
  h2 { font-size: 11px; font-weight: 700; margin-bottom: 8px; color: #0a0a0a; text-transform: uppercase; letter-spacing: 0.07em; }
  .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid #C9A84C; padding-bottom: 16px; margin-bottom: 20px; }
  .school-info { display: flex; align-items: center; gap: 12px; }
  .school-name { font-size: 20px; font-weight: 800; color: #0a0a0a; letter-spacing: -0.02em; }
  .school-sub { font-size: 9px; color: #78716c; margin-top: 3px; text-transform: uppercase; letter-spacing: 0.08em; }
  .badge { display: inline-block; background: #C9A84C; color: #000000; font-weight: 700; padding: 4px 12px; border-radius: 20px; font-size: 11px; }
  .annee { color: #78716c; font-size: 10px; margin-top: 5px; text-align: right; }
  .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 20px; }
  .info-box { background: #FAF8F1; border: 1px solid #E8D48A; border-radius: 8px; padding: 12px; }
  .info-label { font-size: 9px; color: #78716c; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px; }
  .info-value { font-size: 13px; font-weight: 700; color: #0a0a0a; }
  table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
  th { background: #0a0a0a; color: #C9A84C; padding: 9px 10px; text-align: left; font-size: 10px; text-transform: uppercase; letter-spacing: 0.06em; }
  th:not(:first-child) { text-align: center; }
  td { padding: 7px 10px; border-bottom: 1px solid #f5f5f4; font-size: 12px; }
  td:not(:first-child) { text-align: center; }
  tr:nth-child(even) td { background: #FAFAF8; }
  .moyenne-row td { background: #FAF8F1 !important; font-weight: 700; border-top: 2px solid #C9A84C; }
  .appr-box { background: #FAF8F1; border: 1px solid #E8D48A; border-radius: 8px; padding: 16px; margin-bottom: 16px; }
  .mention { text-align: center; font-size: 12px; font-weight: 700; color: #9A7428; margin-top: 10px; padding-top: 10px; border-top: 1px dashed #E8D48A; }
  .signature { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 30px; }
  .sig-box { border-top: 2px solid #C9A84C; padding-top: 8px; font-size: 10px; color: #78716c; }
  .footer { text-align: center; color: #a8a29e; font-size: 9px; margin-top: 20px; border-top: 1px solid #E8D48A; padding-top: 8px; }
</style>
</head>
<body>
  <div class="header">
    <div class="school-info">
      ${logoHtml}
      <div>
        <div class="school-name">EcoleManager</div>
        <div class="school-sub">Bulletin scolaire officiel</div>
      </div>
    </div>
    <div style="text-align:right">
      <div class="badge">${data.periode.libelle}</div>
      <div class="annee">${data.anneeScolaire.libelle}</div>
    </div>
  </div>

  <div class="info-grid">
    <div class="info-box">
      <div class="info-label">Élève</div>
      <div class="info-value">${data.eleve.prenom} ${data.eleve.nom}</div>
      <div style="color:#78716c;font-size:10px;margin-top:2px">Né(e) le ${fmt(data.eleve.dateNaissance)}</div>
    </div>
    <div class="info-box">
      <div class="info-label">Classe</div>
      <div class="info-value">${data.classe.libelle}</div>
      <div style="color:#78716c;font-size:10px;margin-top:2px">${data.classe.niveau.libelle}</div>
    </div>
    <div class="info-box">
      <div class="info-label">Rang dans la classe</div>
      <div class="info-value" style="color:${moyColor(data.moyenneGenerale)}">
        ${data.rang ? `${data.rang}${data.rang === 1 ? "er" : "e"} / ${data.totalEleves}` : "—"}
      </div>
    </div>
    <div class="info-box">
      <div class="info-label">Moyenne générale</div>
      <div class="info-value" style="font-size:18px;color:${moyColor(data.moyenneGenerale)}">
        ${fmtNote(data.moyenneGenerale)}<span style="font-size:12px;font-weight:400;color:#78716c"> /20</span>
      </div>
    </div>
  </div>

  <table>
    <thead>
      <tr>
        <th>Matière</th>
        <th>Coeff.</th>
        <th>Note /20</th>
        <th>Moy. classe</th>
      </tr>
    </thead>
    <tbody>
      ${data.notes
        .map(
          (n) => `
      <tr>
        <td>${n.matiere}</td>
        <td style="color:#78716c">${n.coefficient}</td>
        <td style="font-weight:700;color:${moyColor(n.note)}">${fmtNote(n.note)}</td>
        <td style="color:#78716c">${fmtNote(n.moyenneClasse)}</td>
      </tr>`
        )
        .join("")}
      <tr class="moyenne-row">
        <td colspan="2">Moyenne générale pondérée</td>
        <td style="color:${moyColor(data.moyenneGenerale)};font-size:14px">${fmtNote(data.moyenneGenerale)}</td>
        <td style="color:#78716c">${fmtNote(data.moyenneClasse)}</td>
      </tr>
    </tbody>
  </table>

  <div class="appr-box">
    <h2>Appréciation du conseil de classe</h2>
    <p style="color:#374151;line-height:1.6;margin-top:6px">${data.appreciation || "Pas d'appréciation saisie."}</p>
    ${data.mention ? `<div class="mention">${data.mention}</div>` : ""}
  </div>

  <div class="signature">
    <div class="sig-box">Signature du/de la directeur(trice)</div>
    <div class="sig-box">Signature des parents</div>
  </div>

  <div class="footer">
    Bulletin généré par EcoleManager · ${new Date().toLocaleDateString("fr-FR")}
  </div>
</body>
</html>`;
}
