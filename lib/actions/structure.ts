"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import type { TypePeriode } from "@/app/generated/prisma/enums";

async function requireAdminOrDirecteur() {
  const session = await auth();
  if (!session || !["ADMIN", "DIRECTEUR"].includes(session.user.role)) {
    throw new Error("Accès refusé");
  }
}

async function requireAdmin() {
  const session = await auth();
  if (session?.user.role !== "ADMIN") throw new Error("Accès refusé");
}

// ─── Classes ──────────────────────────────────────────────────────────────────

export async function createClasse(data: {
  libelle: string;
  niveauId: string;
  anneeScolaireId: string;
}) {
  await requireAdminOrDirecteur();
  await prisma.classe.create({ data });
  revalidatePath("/admin/classes");
  return { success: true };
}

export async function updateClasse(id: string, libelle: string) {
  await requireAdminOrDirecteur();
  await prisma.classe.update({ where: { id }, data: { libelle } });
  revalidatePath("/admin/classes");
  return { success: true };
}

export async function deleteClasse(id: string) {
  await requireAdmin();
  await prisma.classe.delete({ where: { id } });
  revalidatePath("/admin/classes");
  return { success: true };
}

// ─── Matières ─────────────────────────────────────────────────────────────────

export async function createMatiere(data: {
  libelle: string;
  coefficient: number;
  niveauId: string;
}) {
  await requireAdminOrDirecteur();
  await prisma.matiere.create({ data });
  revalidatePath("/admin/matieres");
  return { success: true };
}

export async function updateMatiere(
  id: string,
  data: { libelle: string; coefficient: number }
) {
  await requireAdminOrDirecteur();
  await prisma.matiere.update({ where: { id }, data });
  revalidatePath("/admin/matieres");
  return { success: true };
}

export async function deleteMatiere(id: string) {
  await requireAdmin();
  await prisma.matiere.delete({ where: { id } });
  revalidatePath("/admin/matieres");
  return { success: true };
}

// ─── Affectations enseignants ─────────────────────────────────────────────────

export async function affecterEnseignant(data: {
  userId: string;
  matiereId: string;
  classeId: string;
}) {
  await requireAdminOrDirecteur();
  await prisma.enseignement.upsert({
    where: {
      userId_matiereId_classeId: data,
    },
    update: {},
    create: data,
  });
  revalidatePath("/admin/classes");
  return { success: true };
}

export async function retirerEnseignant(data: {
  userId: string;
  matiereId: string;
  classeId: string;
}) {
  await requireAdminOrDirecteur();
  await prisma.enseignement.delete({
    where: { userId_matiereId_classeId: data },
  });
  revalidatePath("/admin/classes");
  return { success: true };
}

// ─── Périodes d'évaluation ────────────────────────────────────────────────────

export async function createPeriode(data: {
  libelle: string;
  type: TypePeriode;
  dateDebut: string;
  dateFin: string;
  anneeScolaireId: string;
}) {
  await requireAdmin();
  await prisma.periodeEvaluation.create({
    data: {
      libelle: data.libelle,
      type: data.type,
      dateDebut: new Date(data.dateDebut),
      dateFin: new Date(data.dateFin),
      anneeScolaireId: data.anneeScolaireId,
    },
  });
  revalidatePath("/admin/periodes");
  return { success: true };
}

export async function cloturerPeriode(id: string) {
  await requireAdminOrDirecteur();
  await prisma.periodeEvaluation.update({
    where: { id },
    data: { close: true },
  });
  revalidatePath("/admin/periodes");
  revalidatePath("/directeur");
  return { success: true };
}

export async function rouvrirPeriode(id: string) {
  await requireAdmin();
  await prisma.periodeEvaluation.update({
    where: { id },
    data: { close: false },
  });
  revalidatePath("/admin/periodes");
  return { success: true };
}
