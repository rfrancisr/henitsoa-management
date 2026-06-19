"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import type { Sexe } from "@/app/generated/prisma/enums";

async function requireAdminOrDirecteur() {
  const session = await auth();
  if (!session || !["ADMIN", "DIRECTEUR"].includes(session.user.role)) {
    throw new Error("Accès refusé");
  }
}

export async function createEleve(data: {
  nom: string;
  prenom: string;
  dateNaissance: string;
  sexe: Sexe;
  adresse: string;
}) {
  await requireAdminOrDirecteur();

  const eleve = await prisma.eleve.create({
    data: {
      nom: data.nom,
      prenom: data.prenom,
      dateNaissance: new Date(data.dateNaissance),
      sexe: data.sexe,
      adresse: data.adresse,
    },
  });

  revalidatePath("/admin/eleves");
  return { success: true, id: eleve.id };
}

export async function updateEleve(
  id: string,
  data: { nom: string; prenom: string; dateNaissance: string; sexe: Sexe; adresse: string }
) {
  await requireAdminOrDirecteur();
  await prisma.eleve.update({
    where: { id },
    data: {
      nom: data.nom,
      prenom: data.prenom,
      dateNaissance: new Date(data.dateNaissance),
      sexe: data.sexe,
      adresse: data.adresse,
    },
  });
  revalidatePath("/admin/eleves");
  return { success: true };
}

export async function toggleEleveActif(id: string, actif: boolean) {
  await requireAdminOrDirecteur();
  await prisma.eleve.update({ where: { id }, data: { actif } });
  revalidatePath("/admin/eleves");
  return { success: true };
}

export async function linkParent(eleveId: string, userId: string) {
  await requireAdminOrDirecteur();
  await prisma.parentEleve.upsert({
    where: { userId_eleveId: { userId, eleveId } },
    update: {},
    create: { userId, eleveId },
  });
  revalidatePath("/admin/eleves");
  return { success: true };
}

export async function unlinkParent(eleveId: string, userId: string) {
  await requireAdminOrDirecteur();
  await prisma.parentEleve.delete({
    where: { userId_eleveId: { userId, eleveId } },
  });
  revalidatePath("/admin/eleves");
  return { success: true };
}

export async function affecterEleveClasse(
  eleveId: string,
  classeId: string,
  anneeScolaireId: string
) {
  await requireAdminOrDirecteur();
  await prisma.eleveClasse.upsert({
    where: { eleveId_anneeScolaireId: { eleveId, anneeScolaireId } },
    update: { classeId },
    create: { eleveId, classeId, anneeScolaireId },
  });
  revalidatePath("/admin/eleves");
  return { success: true };
}
