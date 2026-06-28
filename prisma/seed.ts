import "dotenv/config";
import { PrismaClient } from "../app/generated/prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // ── Comptes ──────────────────────────────────────────────────────────────

  const adminEmail = process.env.ADMIN_EMAIL ?? "admin@ecole.mg";
  const existing = await prisma.user.findUnique({ where: { email: adminEmail } });
  if (!existing) {
    await prisma.user.create({
      data: {
        email: adminEmail,
        passwordHash: await hash(process.env.ADMIN_PASSWORD ?? "Admin1234!", 12),
        role: "ADMIN",
        nom: "Administrateur",
        prenom: "Système",
      },
    });
    console.log(`✅ Compte admin créé : ${adminEmail}`);
  } else {
    console.log(`ℹ️  Admin : ${adminEmail}`);
  }

  if (!process.env.SEED_DEMO) {
    console.log("ℹ️  Mode production : données de démo ignorées (utiliser SEED_DEMO=true pour les inclure)");
    return;
  }

  // Enseignant
  let profUser = await prisma.user.findUnique({ where: { email: "prof@ecole.mg" } });
  if (!profUser) {
    profUser = await prisma.user.create({
      data: {
        email: "prof@ecole.mg",
        passwordHash: await hash("Prof1234!", 12),
        role: "ENSEIGNANT",
        nom: "Rakoto",
        prenom: "Jean",
      },
    });
    console.log("✅ Enseignant : prof@ecole.mg / Prof1234!");
  } else {
    console.log("ℹ️  Enseignant : prof@ecole.mg");
  }

  const existingProfil = await prisma.profilEnseignant.findUnique({ where: { userId: profUser.id } });
  if (!existingProfil) {
    await prisma.profilEnseignant.create({
      data: {
        userId: profUser.id,
        matricule: "ENS-2025-001",
        dateNaissance: new Date("1985-03-15"),
        lieuNaissance: "Antananarivo",
        sexe: "MASCULIN",
        telephone: "+261 34 00 000 01",
        adresse: "Lot II A 45, Antananarivo",
        dateEmbauche: new Date("2015-09-01"),
        typeContrat: "PERMANENT",
        diplome: "Master",
        specialite: "Mathématiques",
        statut: "ACTIF",
        salaireBase: 650000,
        numeroCNAPS: "123456789",
      },
    });
    console.log("✅ Profil enseignant créé");
  }

  // Parent
  let parentUser = await prisma.user.findUnique({ where: { email: "parent@ecole.mg" } });
  if (!parentUser) {
    parentUser = await prisma.user.create({
      data: {
        email: "parent@ecole.mg",
        passwordHash: await hash("Parent1234!", 12),
        role: "PARENT",
        nom: "Randria",
        prenom: "Hanta",
      },
    });
    console.log("✅ Parent : parent@ecole.mg / Parent1234!");
  } else {
    console.log("ℹ️  Parent : parent@ecole.mg");
  }

  // ── Année scolaire ────────────────────────────────────────────────────────

  const annee = await prisma.anneeScolaire.upsert({
    where: { libelle: "2025-2026" },
    update: {},
    create: {
      libelle: "2025-2026",
      dateDebut: new Date("2025-09-01"),
      dateFin: new Date("2026-06-30"),
      active: true,
    },
  });
  console.log(`✅ Année scolaire : ${annee.libelle}`);

  // ── Niveaux ───────────────────────────────────────────────────────────────

  const niveauxDef = [
    { libelle: "Jardin d'enfant", ordre: 1 },
    { libelle: "Maternelle",      ordre: 2 },
    { libelle: "12ème",           ordre: 3 },
    { libelle: "11ème",           ordre: 4 },
    { libelle: "10ème",           ordre: 5 },
    { libelle: "9ème",            ordre: 6 },
    { libelle: "8ème",            ordre: 7 },
    { libelle: "7ème",            ordre: 8 },
    { libelle: "6ème",            ordre: 9 },
    { libelle: "5ème",            ordre: 10 },
    { libelle: "4ème",            ordre: 11 },
    { libelle: "3ème",            ordre: 12 },
  ];
  for (const n of niveauxDef) {
    await prisma.niveau.upsert({ where: { libelle: n.libelle }, update: {}, create: n });
  }
  const niveaux = await prisma.niveau.findMany();
  const niveau6 = niveaux.find((n) => n.libelle === "6ème")!;
  const niveau3 = niveaux.find((n) => n.libelle === "3ème")!;
  console.log(`✅ ${niveauxDef.length} niveaux`);

  // ── Matières ──────────────────────────────────────────────────────────────

  const matieresDef = [
    // 6ème
    { libelle: "Mathématiques",    coefficient: 4, niveauId: niveau6.id },
    { libelle: "Français",         coefficient: 4, niveauId: niveau6.id },
    { libelle: "Histoire-Géo",     coefficient: 3, niveauId: niveau6.id },
    { libelle: "Sciences",         coefficient: 3, niveauId: niveau6.id },
    { libelle: "Anglais",          coefficient: 2, niveauId: niveau6.id },
    { libelle: "EPS",              coefficient: 1, niveauId: niveau6.id },
    // 3ème
    { libelle: "Mathématiques",    coefficient: 5, niveauId: niveau3.id },
    { libelle: "Français",         coefficient: 5, niveauId: niveau3.id },
    { libelle: "Histoire-Géo",     coefficient: 4, niveauId: niveau3.id },
    { libelle: "Sciences Physiques", coefficient: 4, niveauId: niveau3.id },
    { libelle: "SVT",              coefficient: 3, niveauId: niveau3.id },
    { libelle: "Anglais",          coefficient: 3, niveauId: niveau3.id },
    { libelle: "EPS",              coefficient: 1, niveauId: niveau3.id },
  ];
  for (const m of matieresDef) {
    await prisma.matiere.upsert({
      where: { libelle_niveauId: { libelle: m.libelle, niveauId: m.niveauId } },
      update: {},
      create: m,
    });
  }
  const matieres = await prisma.matiere.findMany({ include: { niveau: true } });
  const mat6 = (l: string) => matieres.find((m) => m.libelle === l && m.niveau.libelle === "6ème")!;
  const mat3 = (l: string) => matieres.find((m) => m.libelle === l && m.niveau.libelle === "3ème")!;
  console.log(`✅ ${matieresDef.length} matières`);

  // ── Classes ───────────────────────────────────────────────────────────────

  const classe6A = await prisma.classe.upsert({
    where: { libelle_anneeScolaireId: { libelle: "6ème A", anneeScolaireId: annee.id } },
    update: {},
    create: { libelle: "6ème A", niveauId: niveau6.id, anneeScolaireId: annee.id },
  });
  const classe3B = await prisma.classe.upsert({
    where: { libelle_anneeScolaireId: { libelle: "3ème B", anneeScolaireId: annee.id } },
    update: {},
    create: { libelle: "3ème B", niveauId: niveau3.id, anneeScolaireId: annee.id },
  });
  console.log("✅ 2 classes (6ème A, 3ème B)");

  // ── Affectation enseignant → Maths 6ème A ────────────────────────────────

  await prisma.enseignement.upsert({
    where: { userId_matiereId_classeId: { userId: profUser.id, matiereId: mat6("Mathématiques").id, classeId: classe6A.id } },
    update: {},
    create: { userId: profUser.id, matiereId: mat6("Mathématiques").id, classeId: classe6A.id },
  });
  await prisma.enseignement.upsert({
    where: { userId_matiereId_classeId: { userId: profUser.id, matiereId: mat6("Sciences").id, classeId: classe6A.id } },
    update: {},
    create: { userId: profUser.id, matiereId: mat6("Sciences").id, classeId: classe6A.id },
  });
  console.log("✅ Enseignant affecté : Mathématiques + Sciences en 6ème A");

  // ── Périodes ──────────────────────────────────────────────────────────────

  const t1 = await prisma.periodeEvaluation.upsert({
    where: { id: "periode-t1-2025" },
    update: {},
    create: {
      id: "periode-t1-2025",
      libelle: "1er Trimestre",
      type: "TRIMESTRE",
      dateDebut: new Date("2025-09-01"),
      dateFin: new Date("2025-12-20"),
      anneeScolaireId: annee.id,
    },
  });
  const t2 = await prisma.periodeEvaluation.upsert({
    where: { id: "periode-t2-2025" },
    update: {},
    create: {
      id: "periode-t2-2025",
      libelle: "2ème Trimestre",
      type: "TRIMESTRE",
      dateDebut: new Date("2026-01-05"),
      dateFin: new Date("2026-03-28"),
      anneeScolaireId: annee.id,
    },
  });
  const t3 = await prisma.periodeEvaluation.upsert({
    where: { id: "periode-t3-2025" },
    update: {},
    create: {
      id: "periode-t3-2025",
      libelle: "3ème Trimestre",
      type: "TRIMESTRE",
      dateDebut: new Date("2026-04-06"),
      dateFin: new Date("2026-06-27"),
      anneeScolaireId: annee.id,
    },
  });
  console.log("✅ 3 périodes (trimestres)");

  // ── Élèves ────────────────────────────────────────────────────────────────

  async function upsertEleve(data: {
    id: string; nom: string; prenom: string;
    dateNaissance: Date; sexe: "MASCULIN" | "FEMININ"; adresse: string;
  }) {
    return prisma.eleve.upsert({
      where: { id: data.id },
      update: {},
      create: { ...data, actif: true },
    });
  }

  const marie = await upsertEleve({
    id: "eleve-marie-randria",
    nom: "Randria", prenom: "Marie",
    dateNaissance: new Date("2013-04-10"),
    sexe: "FEMININ", adresse: "Lot IV B 12, Antananarivo",
  });
  const jeanpaul = await upsertEleve({
    id: "eleve-jeanpaul-rasolofo",
    nom: "Rasolofo", prenom: "Jean-Paul",
    dateNaissance: new Date("2013-07-22"),
    sexe: "MASCULIN", adresse: "Rue des Flamboyants 7, Antananarivo",
  });
  const hery = await upsertEleve({
    id: "eleve-hery-andriamahefa",
    nom: "Andriamahefa", prenom: "Hery",
    dateNaissance: new Date("2010-01-15"),
    sexe: "MASCULIN", adresse: "Cité Ampefiloha B3, Antananarivo",
  });
  const sofia = await upsertEleve({
    id: "eleve-sofia-ratsimba",
    nom: "Ratsimba", prenom: "Sofia",
    dateNaissance: new Date("2010-09-03"),
    sexe: "FEMININ", adresse: "Villa Pervenche, Ivandry",
  });
  console.log("✅ 4 élèves");

  // ── Affectation élèves → classes ──────────────────────────────────────────

  async function upsertEleveClasse(eleveId: string, classeId: string) {
    await prisma.eleveClasse.upsert({
      where: { eleveId_anneeScolaireId: { eleveId, anneeScolaireId: annee.id } },
      update: {},
      create: { eleveId, classeId, anneeScolaireId: annee.id },
    });
  }

  await upsertEleveClasse(marie.id, classe6A.id);
  await upsertEleveClasse(jeanpaul.id, classe6A.id);
  await upsertEleveClasse(hery.id, classe3B.id);
  await upsertEleveClasse(sofia.id, classe3B.id);
  console.log("✅ Élèves affectés aux classes");

  // ── Lien parent → Marie ───────────────────────────────────────────────────

  await prisma.parentEleve.upsert({
    where: { userId_eleveId: { userId: parentUser.id, eleveId: marie.id } },
    update: {},
    create: { userId: parentUser.id, eleveId: marie.id },
  });
  console.log("✅ Parent Hanta Randria lié à Marie Randria");

  // ── Notes ─────────────────────────────────────────────────────────────────

  const admin = await prisma.user.findUnique({ where: { email: adminEmail } });

  async function upsertNote(eleveId: string, matiereId: string, periodeId: string, valeur: number) {
    await prisma.note.upsert({
      where: { eleveId_matiereId_periodeId: { eleveId, matiereId, periodeId } },
      update: {},
      create: { eleveId, matiereId, periodeId, valeur, createdById: admin!.id },
    });
  }

  // Marie Randria — 6ème A — élève sérieuse, progression constante
  const notesM = [
    [mat6("Mathématiques").id,  14, 15, 16],
    [mat6("Français").id,       15, 14, 15],
    [mat6("Histoire-Géo").id,   12, 13, 14],
    [mat6("Sciences").id,       13, 14, 15],
    [mat6("Anglais").id,        16, 16, 17],
    [mat6("EPS").id,            18, 17, 18],
  ] as [string, number, number, number][];
  for (const [mid, v1, v2, v3] of notesM) {
    await upsertNote(marie.id, mid, t1.id, v1);
    await upsertNote(marie.id, mid, t2.id, v2);
    await upsertNote(marie.id, mid, t3.id, v3);
  }

  // Jean-Paul Rasolofo — 6ème A — en difficulté, légère amélioration
  const notesJP = [
    [mat6("Mathématiques").id,   7,  8,  9],
    [mat6("Français").id,        9, 10, 11],
    [mat6("Histoire-Géo").id,   10,  9, 11],
    [mat6("Sciences").id,        8,  9, 10],
    [mat6("Anglais").id,        11, 12, 13],
    [mat6("EPS").id,            15, 14, 16],
  ] as [string, number, number, number][];
  for (const [mid, v1, v2, v3] of notesJP) {
    await upsertNote(jeanpaul.id, mid, t1.id, v1);
    await upsertNote(jeanpaul.id, mid, t2.id, v2);
    await upsertNote(jeanpaul.id, mid, t3.id, v3);
  }

  // Hery Andriamahefa — 3ème B — niveau moyen, en déclin
  const notesH = [
    [mat3("Mathématiques").id,    13, 12, 11],
    [mat3("Français").id,         12, 11, 10],
    [mat3("Histoire-Géo").id,     14, 13, 12],
    [mat3("Sciences Physiques").id, 11, 10,  9],
    [mat3("SVT").id,              13, 12, 11],
    [mat3("Anglais").id,          10,  9,  8],
    [mat3("EPS").id,              16, 15, 14],
  ] as [string, number, number, number][];
  for (const [mid, v1, v2, v3] of notesH) {
    await upsertNote(hery.id, mid, t1.id, v1);
    await upsertNote(hery.id, mid, t2.id, v2);
    await upsertNote(hery.id, mid, t3.id, v3);
  }

  // Sofia Ratsimba — 3ème B — excellente, stable au top
  const notesS = [
    [mat3("Mathématiques").id,    18, 17, 18],
    [mat3("Français").id,         17, 18, 17],
    [mat3("Histoire-Géo").id,     16, 17, 18],
    [mat3("Sciences Physiques").id, 18, 17, 19],
    [mat3("SVT").id,              17, 18, 17],
    [mat3("Anglais").id,          19, 18, 18],
    [mat3("EPS").id,              16, 17, 16],
  ] as [string, number, number, number][];
  for (const [mid, v1, v2, v3] of notesS) {
    await upsertNote(sofia.id, mid, t1.id, v1);
    await upsertNote(sofia.id, mid, t2.id, v2);
    await upsertNote(sofia.id, mid, t3.id, v3);
  }
  console.log("✅ Notes saisies pour 4 élèves × 3 trimestres");

  // ── Appréciations ─────────────────────────────────────────────────────────

  async function upsertApprec(eleveId: string, classeId: string, periodeId: string, texte: string, mention: "FELICITATIONS" | "ENCOURAGEMENTS" | "AUCUNE") {
    await prisma.appreciationClasse.upsert({
      where: { eleveId_classeId_periodeId: { eleveId, classeId, periodeId } },
      update: {},
      create: { eleveId, classeId, periodeId, texte, mention, userId: admin!.id },
    });
  }

  await upsertApprec(marie.id, classe6A.id, t1.id, "Très bon trimestre. Marie fait preuve de sérieux et de régularité dans son travail.", "FELICITATIONS");
  await upsertApprec(marie.id, classe6A.id, t2.id, "Excellent travail, Marie continue sa progression. À encourager.", "FELICITATIONS");
  await upsertApprec(marie.id, classe6A.id, t3.id, "Remarquable fin d'année. Élève exemplaire.", "FELICITATIONS");

  await upsertApprec(jeanpaul.id, classe6A.id, t1.id, "Des difficultés persistent. Jean-Paul doit fournir plus d'efforts, notamment en mathématiques.", "AUCUNE");
  await upsertApprec(jeanpaul.id, classe6A.id, t2.id, "Légère amélioration. Continuer les efforts.", "ENCOURAGEMENTS");
  await upsertApprec(jeanpaul.id, classe6A.id, t3.id, "Progrès encourageants en fin d'année. Bien.", "ENCOURAGEMENTS");

  await upsertApprec(hery.id, classe3B.id, t1.id, "Bon début d'année. Hery doit maintenir ce niveau.", "ENCOURAGEMENTS");
  await upsertApprec(hery.id, classe3B.id, t2.id, "Baisse des résultats inquiétante. Plus de travail nécessaire.", "AUCUNE");
  await upsertApprec(hery.id, classe3B.id, t3.id, "Résultats décevants. Un suivi est nécessaire pour la rentrée.", "AUCUNE");

  await upsertApprec(sofia.id, classe3B.id, t1.id, "Excellente élève. Sofia est un exemple pour la classe.", "FELICITATIONS");
  await upsertApprec(sofia.id, classe3B.id, t2.id, "Toujours au top niveau. Félicitations.", "FELICITATIONS");
  await upsertApprec(sofia.id, classe3B.id, t3.id, "Fin d'année brillante. Grande réussite.", "FELICITATIONS");
  console.log("✅ Appréciations saisies");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
