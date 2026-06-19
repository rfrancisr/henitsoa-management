import "dotenv/config";
import { PrismaClient } from "../app/generated/prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Créer le compte administrateur initial
  const adminEmail = process.env.ADMIN_EMAIL ?? "admin@ecole.mg";
  const adminPassword = process.env.ADMIN_PASSWORD ?? "Admin1234!";

  const existing = await prisma.user.findUnique({ where: { email: adminEmail } });
  if (!existing) {
    await prisma.user.create({
      data: {
        email: adminEmail,
        passwordHash: await hash(adminPassword, 12),
        role: "ADMIN",
        nom: "Administrateur",
        prenom: "Système",
      },
    });
    console.log(`✅ Compte admin créé : ${adminEmail}`);
  } else {
    console.log(`ℹ️  Compte admin déjà existant : ${adminEmail}`);
  }

  // Année scolaire de démonstration
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

  // Niveaux
  const niveaux = [
    { libelle: "6ème", ordre: 1 },
    { libelle: "5ème", ordre: 2 },
    { libelle: "4ème", ordre: 3 },
    { libelle: "3ème", ordre: 4 },
  ];

  for (const n of niveaux) {
    await prisma.niveau.upsert({
      where: { libelle: n.libelle },
      update: {},
      create: n,
    });
  }
  console.log(`✅ ${niveaux.length} niveaux créés`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
