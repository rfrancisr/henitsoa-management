"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import type { TypeEvenement } from "@/app/generated/prisma/enums";

async function requireAdminOrDirecteur() {
  const session = await auth();
  if (!session || !["ADMIN", "DIRECTEUR"].includes(session.user.role)) {
    throw new Error("Accès refusé");
  }
  return session;
}

export async function createEvenement(data: {
  titre: string;
  description?: string;
  dateDebut: string;
  dateFin: string;
  type: TypeEvenement;
}) {
  const session = await requireAdminOrDirecteur();

  await prisma.evenementCalendrier.create({
    data: {
      titre: data.titre,
      description: data.description ?? null,
      dateDebut: new Date(data.dateDebut),
      dateFin: new Date(data.dateFin),
      type: data.type,
      createdById: session.user.id,
    },
  });

  revalidatePath("/calendrier");
  return { success: true };
}

export async function updateEvenement(
  id: string,
  data: {
    titre: string;
    description?: string;
    dateDebut: string;
    dateFin: string;
    type: TypeEvenement;
  }
) {
  await requireAdminOrDirecteur();

  await prisma.evenementCalendrier.update({
    where: { id },
    data: {
      titre: data.titre,
      description: data.description ?? null,
      dateDebut: new Date(data.dateDebut),
      dateFin: new Date(data.dateFin),
      type: data.type,
    },
  });

  revalidatePath("/calendrier");
  return { success: true };
}

export async function deleteEvenement(id: string) {
  await requireAdminOrDirecteur();
  await prisma.evenementCalendrier.delete({ where: { id } });
  revalidatePath("/calendrier");
  return { success: true };
}
