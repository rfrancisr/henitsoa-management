"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";
import { revalidatePath } from "next/cache";
import type { Role } from "@/app/generated/prisma/enums";

async function requireAdmin() {
  const session = await auth();
  if (session?.user.role !== "ADMIN") throw new Error("Accès refusé");
  return session;
}

export async function createUser(data: {
  email: string;
  password: string;
  role: Role;
  nom: string;
  prenom: string;
}) {
  await requireAdmin();

  const existing = await prisma.user.findUnique({ where: { email: data.email } });
  if (existing) return { error: "Cet email est déjà utilisé." };

  await prisma.user.create({
    data: {
      email: data.email,
      passwordHash: await hash(data.password, 12),
      role: data.role,
      nom: data.nom,
      prenom: data.prenom,
    },
  });

  revalidatePath("/admin/utilisateurs");
  return { success: true };
}

export async function updateUser(
  id: string,
  data: { nom: string; prenom: string; role: Role; actif: boolean; email: string }
) {
  await requireAdmin();
  await prisma.user.update({ where: { id }, data });
  revalidatePath("/admin/utilisateurs");
  return { success: true };
}

export async function resetUserPassword(id: string, newPassword: string) {
  await requireAdmin();
  await prisma.user.update({
    where: { id },
    data: { passwordHash: await hash(newPassword, 12) },
  });
  return { success: true };
}

export async function toggleUserActif(id: string, actif: boolean) {
  await requireAdmin();
  await prisma.user.update({ where: { id }, data: { actif } });
  revalidatePath("/admin/utilisateurs");
  return { success: true };
}
