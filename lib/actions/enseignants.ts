"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { hash } from "bcryptjs";
import type { TypeContrat, StatutEnseignant, Sexe } from "@/app/generated/prisma/enums";

async function requireAdmin() {
  const session = await auth();
  if (session?.user.role !== "ADMIN") throw new Error("Accès refusé");
}

async function requireAdminOrDirecteur() {
  const session = await auth();
  if (!session || !["ADMIN", "DIRECTEUR"].includes(session.user.role)) {
    throw new Error("Accès refusé");
  }
}

function nextMatricule(existing: string[]): string {
  const year = new Date().getFullYear();
  const nums = existing
    .map((m) => {
      const match = m.match(/^ENS-\d{4}-(\d+)$/);
      return match ? parseInt(match[1]) : 0;
    })
    .filter(Boolean);
  const next = nums.length > 0 ? Math.max(...nums) + 1 : 1;
  return `ENS-${year}-${String(next).padStart(3, "0")}`;
}

export async function createEnseignant(data: {
  // Compte
  email: string;
  password: string;
  nom: string;
  prenom: string;
  // Profil
  matricule?: string;
  dateNaissance?: string;
  lieuNaissance?: string;
  sexe?: Sexe;
  telephone?: string;
  adresse?: string;
  dateEmbauche: string;
  typeContrat: TypeContrat;
  diplome?: string;
  specialite?: string;
  salaireBase?: string;
  numeroCNAPS?: string;
  numeroCompte?: string;
}) {
  await requireAdmin();

  const existing = await prisma.profilEnseignant.findMany({
    select: { matricule: true },
  });
  const matricule = data.matricule?.trim() || nextMatricule(existing.map((e) => e.matricule));

  await prisma.$transaction(async (tx) => {
    const user = await tx.user.create({
      data: {
        email: data.email,
        passwordHash: await hash(data.password, 12),
        role: "ENSEIGNANT",
        nom: data.nom,
        prenom: data.prenom,
      },
    });
    await tx.profilEnseignant.create({
      data: {
        userId: user.id,
        matricule,
        dateNaissance: data.dateNaissance ? new Date(data.dateNaissance) : null,
        lieuNaissance: data.lieuNaissance || null,
        sexe: data.sexe || null,
        telephone: data.telephone || null,
        adresse: data.adresse || null,
        dateEmbauche: new Date(data.dateEmbauche),
        typeContrat: data.typeContrat,
        diplome: data.diplome || null,
        specialite: data.specialite || null,
        salaireBase: data.salaireBase ? parseFloat(data.salaireBase) : null,
        numeroCNAPS: data.numeroCNAPS || null,
        numeroCompte: data.numeroCompte || null,
      },
    });
  });

  revalidatePath("/admin/enseignants");
  return { success: true };
}

export async function updateEnseignant(
  userId: string,
  data: {
    nom: string;
    prenom: string;
    telephone?: string;
    adresse?: string;
    dateNaissance?: string;
    lieuNaissance?: string;
    sexe?: Sexe;
    dateEmbauche: string;
    typeContrat: TypeContrat;
    diplome?: string;
    specialite?: string;
    salaireBase?: string;
    numeroCNAPS?: string;
    numeroCompte?: string;
  }
) {
  await requireAdmin();

  await prisma.$transaction([
    prisma.user.update({
      where: { id: userId },
      data: { nom: data.nom, prenom: data.prenom },
    }),
    prisma.profilEnseignant.update({
      where: { userId },
      data: {
        telephone: data.telephone || null,
        adresse: data.adresse || null,
        dateNaissance: data.dateNaissance ? new Date(data.dateNaissance) : null,
        lieuNaissance: data.lieuNaissance || null,
        sexe: data.sexe || null,
        dateEmbauche: new Date(data.dateEmbauche),
        typeContrat: data.typeContrat,
        diplome: data.diplome || null,
        specialite: data.specialite || null,
        salaireBase: data.salaireBase ? parseFloat(data.salaireBase) : null,
        numeroCNAPS: data.numeroCNAPS || null,
        numeroCompte: data.numeroCompte || null,
      },
    }),
  ]);

  revalidatePath("/admin/enseignants");
  return { success: true };
}

export async function changerStatutEnseignant(userId: string, statut: StatutEnseignant) {
  await requireAdminOrDirecteur();
  const actif = statut === "ACTIF";
  await prisma.$transaction([
    prisma.profilEnseignant.update({ where: { userId }, data: { statut } }),
    prisma.user.update({ where: { id: userId }, data: { actif } }),
  ]);
  revalidatePath("/admin/enseignants");
  return { success: true };
}
