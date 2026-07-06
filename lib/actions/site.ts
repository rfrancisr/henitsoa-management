"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { randomUUID } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

async function requireAdminOrDirecteur() {
  const session = await auth();
  if (!session || !["ADMIN", "DIRECTEUR"].includes(session.user.role)) {
    throw new Error("Accès refusé");
  }
  return session;
}

const ALLOWED_IMAGE_TYPES: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};
const MAX_IMAGE_SIZE = 3 * 1024 * 1024;

async function saveActualiteImage(file: File): Promise<string> {
  const extension = ALLOWED_IMAGE_TYPES[file.type];
  if (!extension) {
    throw new Error("Format d'image non pris en charge (jpg, png ou webp uniquement)");
  }
  if (file.size > MAX_IMAGE_SIZE) {
    throw new Error("L'image dépasse la taille maximale autorisée (3 Mo)");
  }

  const uploadDir = path.join(process.cwd(), "public", "uploads", "actualites");
  await mkdir(uploadDir, { recursive: true });

  const filename = `${randomUUID()}.${extension}`;
  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(path.join(uploadDir, filename), buffer);

  return `/uploads/actualites/${filename}`;
}

function revalidateActualitesPaths() {
  revalidatePath("/admin/actualites");
  revalidatePath("/actualites");
  revalidatePath("/");
}

export async function createActualite(formData: FormData) {
  await requireAdminOrDirecteur();

  const image = formData.get("image") as File;
  const imagePath = await saveActualiteImage(image);

  await prisma.actualite.create({
    data: {
      titre: formData.get("titre") as string,
      categorie: formData.get("categorie") as string,
      extrait: formData.get("extrait") as string,
      datePublication: new Date(formData.get("datePublication") as string),
      image: imagePath,
    },
  });

  revalidateActualitesPaths();
  return { success: true };
}

export async function updateActualite(id: string, formData: FormData) {
  await requireAdminOrDirecteur();

  const image = formData.get("image") as File | null;
  const imagePath = image && image.size > 0 ? await saveActualiteImage(image) : undefined;

  await prisma.actualite.update({
    where: { id },
    data: {
      titre: formData.get("titre") as string,
      categorie: formData.get("categorie") as string,
      extrait: formData.get("extrait") as string,
      datePublication: new Date(formData.get("datePublication") as string),
      ...(imagePath ? { image: imagePath } : {}),
    },
  });

  revalidateActualitesPaths();
  return { success: true };
}

export async function deleteActualite(id: string) {
  await requireAdminOrDirecteur();
  await prisma.actualite.delete({ where: { id } });
  revalidateActualitesPaths();
  return { success: true };
}

function revalidateDatesAVenirPaths() {
  revalidatePath("/admin/dates-avenir");
  revalidatePath("/");
}

export async function createDateAVenir(data: { titre: string; description: string; date: string }) {
  await requireAdminOrDirecteur();

  await prisma.dateAVenir.create({
    data: {
      titre: data.titre,
      description: data.description,
      date: new Date(data.date),
    },
  });

  revalidateDatesAVenirPaths();
  return { success: true };
}

export async function updateDateAVenir(
  id: string,
  data: { titre: string; description: string; date: string }
) {
  await requireAdminOrDirecteur();

  await prisma.dateAVenir.update({
    where: { id },
    data: {
      titre: data.titre,
      description: data.description,
      date: new Date(data.date),
    },
  });

  revalidateDatesAVenirPaths();
  return { success: true };
}

export async function deleteDateAVenir(id: string) {
  await requireAdminOrDirecteur();
  await prisma.dateAVenir.delete({ where: { id } });
  revalidateDatesAVenirPaths();
  return { success: true };
}
