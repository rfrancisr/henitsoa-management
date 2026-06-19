import { prisma } from "@/lib/prisma";

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
    const ns = toutesNotes.filter((n) => n.eleveId === eId);
    if (ns.length === 0) return null;
    const total = ns.reduce((s, n) => s + n.valeur * n.matiere.coefficient, 0);
    const coeff = ns.reduce((s, n) => s + n.matiere.coefficient, 0);
    return coeff === 0 ? null : Math.round((total / coeff) * 100) / 100;
  }

  // Moyennes de la classe par matière
  function moyenneClasseParMatiere(matiereId: string): number | null {
    const ns = toutesNotes.filter((n) => n.matiereId === matiereId);
    if (ns.length === 0) return null;
    return Math.round((ns.reduce((s, n) => s + n.valeur, 0) / ns.length) * 100) / 100;
  }

  // Rang de l'élève
  const moyennesParEleve = tousEleveIds
    .map((id) => ({ id, moy: calcMoyenne(id) }))
    .filter((x): x is { id: string; moy: number } => x.moy !== null)
    .sort((a, b) => b.moy - a.moy);

  const rang = moyennesParEleve.findIndex((x) => x.id === eleveId) + 1 || null;
  const moyenneClasseGenerale =
    moyennesParEleve.length > 0
      ? Math.round(
          (moyennesParEleve.reduce((s, x) => s + x.moy, 0) / moyennesParEleve.length) * 100
        ) / 100
      : null;

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

export function renderBulletinHTML(data: BulletinData): string {
  const fmt = (d: Date) => new Date(d).toLocaleDateString("fr-FR");
  const fmtNote = (n: number | null) => (n !== null ? n.toFixed(2) : "—");
  const moyColor = (m: number | null) =>
    m === null ? "#94a3b8" : m >= 14 ? "#16a34a" : m >= 10 ? "#2563eb" : "#dc2626";

  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', Arial, sans-serif; font-size: 12px; color: #1e293b; background: white; padding: 32px; }
  h1 { font-size: 22px; font-weight: 700; color: #1e40af; }
  h2 { font-size: 14px; font-weight: 600; margin-bottom: 8px; }
  .header { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 3px solid #1e40af; padding-bottom: 16px; margin-bottom: 20px; }
  .school { font-size: 10px; color: #64748b; margin-top: 2px; }
  .badge { display: inline-block; background: #eff6ff; color: #1e40af; font-weight: 600; padding: 4px 10px; border-radius: 20px; font-size: 11px; }
  .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 20px; }
  .info-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; }
  .info-label { font-size: 10px; color: #64748b; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
  .info-value { font-size: 13px; font-weight: 600; color: #0f172a; }
  table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
  th { background: #1e40af; color: white; padding: 8px 10px; text-align: left; font-size: 11px; }
  th:not(:first-child) { text-align: center; }
  td { padding: 7px 10px; border-bottom: 1px solid #f1f5f9; }
  td:not(:first-child) { text-align: center; }
  tr:nth-child(even) td { background: #f8fafc; }
  .moyenne-row td { background: #eff6ff !important; font-weight: 700; border-top: 2px solid #1e40af; }
  .appr-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 16px; }
  .mention { text-align: center; font-size: 13px; font-weight: 700; color: #1e40af; margin-top: 8px; }
  .signature { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 30px; }
  .sig-box { border-top: 1px solid #cbd5e1; padding-top: 8px; font-size: 10px; color: #94a3b8; }
  .footer { text-align: center; color: #94a3b8; font-size: 9px; margin-top: 20px; border-top: 1px solid #e2e8f0; padding-top: 8px; }
</style>
</head>
<body>
  <div class="header">
    <div>
      <h1>EcoleManager</h1>
      <div class="school">Bulletin scolaire officiel</div>
    </div>
    <div style="text-align:right">
      <div class="badge">${data.periode.libelle}</div>
      <div style="color:#64748b;font-size:10px;margin-top:4px">${data.anneeScolaire.libelle}</div>
    </div>
  </div>

  <div class="info-grid">
    <div class="info-box">
      <div class="info-label">Élève</div>
      <div class="info-value">${data.eleve.prenom} ${data.eleve.nom}</div>
      <div style="color:#64748b;font-size:10px;margin-top:2px">Né(e) le ${fmt(data.eleve.dateNaissance)}</div>
    </div>
    <div class="info-box">
      <div class="info-label">Classe</div>
      <div class="info-value">${data.classe.libelle}</div>
      <div style="color:#64748b;font-size:10px;margin-top:2px">${data.classe.niveau.libelle}</div>
    </div>
    <div class="info-box">
      <div class="info-label">Rang dans la classe</div>
      <div class="info-value" style="color:${moyColor(data.moyenneGenerale)}">
        ${data.rang ? `${data.rang}e / ${data.totalEleves}` : "—"}
      </div>
    </div>
    <div class="info-box">
      <div class="info-label">Moyenne générale</div>
      <div class="info-value" style="font-size:18px;color:${moyColor(data.moyenneGenerale)}">
        ${fmtNote(data.moyenneGenerale)}<span style="font-size:12px;font-weight:400"> /20</span>
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
        <td>${n.coefficient}</td>
        <td style="font-weight:600;color:${moyColor(n.note)}">${fmtNote(n.note)}</td>
        <td style="color:#64748b">${fmtNote(n.moyenneClasse)}</td>
      </tr>`
        )
        .join("")}
      <tr class="moyenne-row">
        <td colspan="2">Moyenne générale pondérée</td>
        <td style="color:${moyColor(data.moyenneGenerale)};font-size:14px">${fmtNote(data.moyenneGenerale)}</td>
        <td style="color:#64748b">${fmtNote(data.moyenneClasse)}</td>
      </tr>
    </tbody>
  </table>

  <div class="appr-box">
    <h2>Appréciation du conseil de classe</h2>
    <p style="color:#374151;line-height:1.6">${data.appreciation || "Pas d'appréciation saisie."}</p>
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
