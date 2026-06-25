import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
import type { SemaineData, Seance, EtapeDeveloppement, Exercice } from '@/lib/repartition';

// ─── Styles ──────────────────────────────────────────────────────────────────

const S = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 9,
    paddingTop: 24,
    paddingBottom: 30,
    paddingHorizontal: 24,
    color: '#1c1917',
    backgroundColor: '#ffffff',
  },

  // En-tête page
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#c9a84c',
  },
  headerLeft: { flexDirection: 'column', gap: 2 },
  headerTitle: { fontSize: 13, fontFamily: 'Helvetica-Bold', color: '#1c1917' },
  headerSub: { fontSize: 8, color: '#78716c' },
  headerBadge: {
    backgroundColor: '#fef3c7',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
    fontSize: 8,
    color: '#92400e',
    fontFamily: 'Helvetica-Bold',
    alignSelf: 'flex-start',
  },

  // Bloc séance
  seanceBlock: {
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#e7e5e4',
    borderRadius: 4,
  },
  seanceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    padding: 6,
    backgroundColor: '#f5f5f4',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  seanceTime: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 8,
    color: '#57534e',
    width: 72,
  },
  seanceMat: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 3,
  },
  seanceTitre: { fontSize: 9, fontFamily: 'Helvetica-Bold', color: '#1c1917', flex: 1 },
  seanceBody: { padding: 8, gap: 8 },

  // Section
  section: { marginBottom: 6 },
  sectionLabel: {
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 3,
  },
  sectionContent: { fontSize: 8.5, color: '#292524', lineHeight: 1.4 },

  // Intro
  miseSit: { fontSize: 8.5, color: '#292524', lineHeight: 1.4, fontStyle: 'italic', marginBottom: 5 },
  objectifsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 3, marginBottom: 4 },
  objBadge: {
    backgroundColor: '#eff6ff',
    borderWidth: 1,
    borderColor: '#bfdbfe',
    borderRadius: 3,
    paddingHorizontal: 5,
    paddingVertical: 2,
    fontSize: 7.5,
    color: '#1e40af',
  },
  materielRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 3 },
  matBadge: {
    backgroundColor: '#fff7ed',
    borderWidth: 1,
    borderColor: '#fed7aa',
    borderRadius: 3,
    paddingHorizontal: 5,
    paddingVertical: 2,
    fontSize: 7.5,
    color: '#9a3412',
  },

  // Développement
  etapeRow: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f4',
  },
  etapeNumBox: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#c9a84c',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginTop: 1,
  },
  etapeNum: { fontSize: 7.5, fontFamily: 'Helvetica-Bold', color: '#ffffff' },
  etapeBody: { flex: 1 },
  etapeTitreDuree: { flexDirection: 'row', gap: 6, alignItems: 'center', marginBottom: 2 },
  etapeTitre: { fontSize: 8.5, fontFamily: 'Helvetica-Bold', color: '#1c1917' },
  etapeDuree: {
    fontSize: 7,
    color: '#78716c',
    backgroundColor: '#f5f5f4',
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 2,
  },
  ensLabel: { fontSize: 7, fontFamily: 'Helvetica-Bold', color: '#7c3aed', marginBottom: 1 },
  ensText: { fontSize: 8, color: '#292524', lineHeight: 1.4, marginBottom: 3 },
  tableauBox: {
    backgroundColor: '#fafaf9',
    borderWidth: 1,
    borderColor: '#d6d3d1',
    borderRadius: 3,
    padding: 5,
    fontFamily: 'Courier',
    fontSize: 8,
    color: '#1c1917',
    marginBottom: 3,
    lineHeight: 1.5,
  },
  elevesLabel: { fontSize: 7, fontFamily: 'Helvetica-Bold', color: '#059669', marginBottom: 1 },
  elevesText: { fontSize: 8, color: '#292524', lineHeight: 1.4 },

  // Exercices
  exoRow: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 6,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f4',
  },
  exoNumBox: {
    width: 16,
    height: 16,
    borderRadius: 3,
    backgroundColor: '#6d28d9',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginTop: 1,
  },
  exoNum: { fontSize: 7.5, fontFamily: 'Helvetica-Bold', color: '#ffffff' },
  exoBody: { flex: 1 },
  exoEnonce: { fontSize: 8.5, color: '#1c1917', lineHeight: 1.4, marginBottom: 3 },
  correctionBox: {
    backgroundColor: '#f0fdf4',
    borderLeftWidth: 2,
    borderLeftColor: '#22c55e',
    paddingLeft: 6,
    paddingVertical: 3,
    marginBottom: 2,
  },
  corrLabel: { fontSize: 7, fontFamily: 'Helvetica-Bold', color: '#16a34a', marginBottom: 1 },
  corrText: { fontSize: 8, color: '#166534', lineHeight: 1.4 },
  diffBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 3,
    fontSize: 6.5,
    fontFamily: 'Helvetica-Bold',
  },

  // Évaluation
  evalBox: {
    backgroundColor: '#fefce8',
    borderWidth: 1,
    borderColor: '#fde68a',
    borderRadius: 4,
    padding: 8,
  },
  evalQ: { fontSize: 8.5, fontFamily: 'Helvetica-Bold', color: '#713f12', marginBottom: 4 },
  evalReponse: { fontSize: 8, color: '#451a03', lineHeight: 1.4, marginBottom: 5 },
  critereRow: { flexDirection: 'row', gap: 4, alignItems: 'flex-start', marginBottom: 2 },
  critereDot: { width: 5, height: 5, borderRadius: 2.5, backgroundColor: '#eab308', marginTop: 2 },
  critereText: { fontSize: 8, color: '#713f12', flex: 1, lineHeight: 1.4 },

  // Footer
  footer: {
    position: 'absolute',
    bottom: 12,
    left: 24,
    right: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e7e5e4',
    paddingTop: 6,
  },
  footerText: { fontSize: 7, color: '#a8a29e' },

  // Séparateur
  divider: { height: 1, backgroundColor: '#f5f5f4', marginVertical: 6 },
});

// ─── Couleurs par matière ─────────────────────────────────────────────────────

const MAT_COLORS: Record<string, { bg: string; text: string }> = {
  MALAGASY:   { bg: '#fef2f2', text: '#991b1b' },
  FRANÇAIS:   { bg: '#eff6ff', text: '#1e3a8a' },
  KAJY:       { bg: '#f0fdf4', text: '#14532d' },
  CALCUL:     { bg: '#f0fdf4', text: '#14532d' },
  FFMOM:      { bg: '#faf5ff', text: '#581c87' },
  HETSIKA:    { bg: '#fff7ed', text: '#7c2d12' },
  TSIANJERY:  { bg: '#fdf4ff', text: '#701a75' },
  ARTS:       { bg: '#eef2ff', text: '#312e81' },
  SARY:       { bg: '#f0fdfa', text: '#134e4a' },
  EPS:        { bg: '#ecfeff', text: '#164e63' },
  TANTARA:    { bg: '#fffbeb', text: '#78350f' },
  GÉOGRAPHIE: { bg: '#f7fee7', text: '#365314' },
  CU:         { bg: '#f0f9ff', text: '#0c4a6e' },
};

function getDiffBadgeStyle(d: Exercice['difficulte']) {
  if (d === 'facile') return { backgroundColor: '#dcfce7', color: '#15803d' };
  if (d === 'moyen')  return { backgroundColor: '#fef9c3', color: '#a16207' };
  return { backgroundColor: '#fee2e2', color: '#b91c1c' };
}

// ─── Composants PDF ──────────────────────────────────────────────────────────

function EtapeView({ e }: { e: EtapeDeveloppement }) {
  return (
    <View style={S.etapeRow} wrap={false}>
      <View style={S.etapeNumBox}>
        <Text style={S.etapeNum}>{e.etape}</Text>
      </View>
      <View style={S.etapeBody}>
        <View style={S.etapeTitreDuree}>
          <Text style={S.etapeTitre}>{e.titre}</Text>
          <Text style={S.etapeDuree}>{e.duree}</Text>
        </View>
        <Text style={S.ensLabel}>ENSEIGNANT</Text>
        <Text style={S.ensText}>{e.enseignant}</Text>
        {e.tableau ? (
          <Text style={S.tableauBox}>{e.tableau}</Text>
        ) : null}
        <Text style={S.elevesLabel}>ÉLÈVES</Text>
        <Text style={S.elevesText}>{e.eleves}</Text>
      </View>
    </View>
  );
}

function ExoView({ ex }: { ex: Exercice }) {
  return (
    <View style={S.exoRow} wrap={false}>
      <View style={S.exoNumBox}>
        <Text style={S.exoNum}>{ex.numero}</Text>
      </View>
      <View style={S.exoBody}>
        <Text style={S.exoEnonce}>{ex.enonce}</Text>
        <View style={S.correctionBox}>
          <Text style={S.corrLabel}>CORRECTION</Text>
          <Text style={S.corrText}>{ex.correction}</Text>
        </View>
        <View style={[S.diffBadge, getDiffBadgeStyle(ex.difficulte)]}>
          <Text>{ex.difficulte.toUpperCase()}</Text>
        </View>
      </View>
    </View>
  );
}

function SeancePage({
  s,
  semaine,
  classe,
  pageIndex,
}: {
  s: Seance;
  semaine: SemaineData;
  classe: string;
  pageIndex: number;
}) {
  const matColor = MAT_COLORS[s.matiere] ?? { bg: '#f5f5f4', text: '#57534e' };

  return (
    <Page size="A4" style={S.page}>
      {/* En-tête */}
      <View style={S.header} fixed>
        <View style={S.headerLeft}>
          <Text style={S.headerTitle}>Fiche de Préparation — {s.matiere}</Text>
          <Text style={S.headerSub}>
            {classe.replace('eme', 'ème')} · {semaine.libelle} · Semaine {semaine.numero_semaine} · {s.heure_debut}–{s.heure_fin}
          </Text>
          <Text style={S.headerSub}>{semaine.theme_semaine}</Text>
        </View>
        <Text style={[S.headerBadge, { backgroundColor: matColor.bg, color: matColor.text }]}>
          {s.matiere}
        </Text>
      </View>

      {/* Titre séance */}
      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontSize: 11, fontFamily: 'Helvetica-Bold', color: '#1c1917' }}>
          {s.titre}
        </Text>
      </View>

      {/* Introduction */}
      <View style={S.section}>
        <Text style={[S.sectionLabel, { color: '#0369a1' }]}>Introduction — Mise en situation</Text>
        <Text style={S.miseSit}>{s.introduction.mise_en_situation}</Text>

        <Text style={[S.sectionLabel, { color: '#0369a1', marginTop: 4 }]}>Objectifs</Text>
        <View style={S.objectifsRow}>
          {s.introduction.objectifs.map((o, i) => (
            <View key={i} style={S.objBadge}><Text>{o}</Text></View>
          ))}
        </View>

        <Text style={[S.sectionLabel, { color: '#0369a1', marginTop: 2 }]}>Matériel</Text>
        <View style={S.materielRow}>
          {s.introduction.materiel.map((m, i) => (
            <View key={i} style={S.matBadge}><Text>{m}</Text></View>
          ))}
        </View>
      </View>

      <View style={S.divider} />

      {/* Développement */}
      <View style={S.section}>
        <Text style={[S.sectionLabel, { color: '#7c3aed', marginBottom: 5 }]}>Déroulement de la séance</Text>
        {s.developpement.map((e) => (
          <EtapeView key={e.etape} e={e} />
        ))}
      </View>

      <View style={S.divider} />

      {/* Exercices */}
      <View style={S.section}>
        <Text style={[S.sectionLabel, { color: '#6d28d9', marginBottom: 5 }]}>
          Exercices ({s.exercices.length} exercices — avec corrections)
        </Text>
        {s.exercices.map((ex) => (
          <ExoView key={ex.numero} ex={ex} />
        ))}
      </View>

      <View style={S.divider} />

      {/* Évaluation */}
      <View style={S.section}>
        <Text style={[S.sectionLabel, { color: '#a16207', marginBottom: 5 }]}>Évaluation de fin de séance</Text>
        <View style={S.evalBox}>
          <Text style={S.evalQ}>Question : {s.evaluation.question}</Text>
          <Text style={[{ fontSize: 7, fontFamily: 'Helvetica-Bold', color: '#a16207', marginBottom: 2 }]}>
            RÉPONSE ATTENDUE
          </Text>
          <Text style={S.evalReponse}>{s.evaluation.reponse_attendue}</Text>
          <Text style={[{ fontSize: 7, fontFamily: 'Helvetica-Bold', color: '#a16207', marginBottom: 3 }]}>
            CRITÈRES DE RÉUSSITE
          </Text>
          {s.evaluation.criteres_reussite.map((c, i) => (
            <View key={i} style={S.critereRow}>
              <View style={S.critereDot} />
              <Text style={S.critereText}>{c}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Footer */}
      <View style={S.footer} fixed>
        <Text style={S.footerText}>École Henitsoa · Fiche de préparation · 2024-2025</Text>
        <Text style={S.footerText} render={({ pageNumber, totalPages }) =>
          `Page ${pageNumber} / ${totalPages}`
        } />
      </View>
    </Page>
  );
}

// ─── Document complet ─────────────────────────────────────────────────────────

type Props = {
  semaine: SemaineData;
  classe: string;
  /** Si fourni, génère uniquement les fiches pour cette matière */
  matiere?: string;
  /** Si fourni, génère uniquement les fiches pour ce jour (0=Lundi…4=Vendredi) */
  jourIndex?: number;
};

export function FicheDocument({ semaine, classe, matiere, jourIndex }: Props) {
  const jours = jourIndex !== undefined
    ? semaine.jours.filter((_, i) => i === jourIndex)
    : semaine.jours;

  const seances: { s: Seance; pageIdx: number }[] = [];
  let idx = 0;
  for (const jour of jours) {
    for (const s of jour.seances) {
      if (s.matiere === 'Récréation') continue;
      if (matiere && s.matiere !== matiere) continue;
      seances.push({ s, pageIdx: idx++ });
    }
  }

  return (
    <Document
      title={`Fiche de préparation — ${classe} — Semaine ${semaine.numero_semaine}`}
      author="École Henitsoa"
      subject={semaine.theme_semaine}
    >
      {seances.map(({ s, pageIdx }) => (
        <SeancePage
          key={pageIdx}
          s={s}
          semaine={semaine}
          classe={classe}
          pageIndex={pageIdx}
        />
      ))}
    </Document>
  );
}
