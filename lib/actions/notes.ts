"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

async function requireEnseignant() {
  const session = await auth();
  if (!session || !["ADMIN", "DIRECTEUR", "ENSEIGNANT"].includes(session.user.role)) {
    throw new Error("Accès refusé");
  }
  return session;
}

export async function upsertNote(data: {
  eleveId: string;
  matiereId: string;
  periodeId: string;
  classeId: string;
  valeur: number;
  commentaire?: string;
}) {
  const session = await requireEnseignant();

  // Vérifier que la période n'est pas clôturée
  const periode = await prisma.periodeEvaluation.findUnique({
    where: { id: data.periodeId },
  });
  if (!periode) throw new Error("Période introuvable");
  if (periode.close && session.user.role !== "ADMIN") {
    throw new Error("Cette période est clôturée.");
  }

  // Vérifier que l'enseignant a bien accès à cette matière/classe (sauf admin/directeur)
  if (session.user.role === "ENSEIGNANT") {
    const enseignement = await prisma.enseignement.findUnique({
      where: {
        userId_matiereId_classeId: {
          userId: session.user.id,
          matiereId: data.matiereId,
          classeId: data.classeId,
        },
      },
    });
    if (!enseignement) throw new Error("Accès non autorisé à cette matière/classe.");
  }

  if (data.valeur < 0 || data.valeur > 20) {
    throw new Error("La note doit être entre 0 et 20.");
  }

  await prisma.note.upsert({
    where: {
      eleveId_matiereId_periodeId: {
        eleveId: data.eleveId,
        matiereId: data.matiereId,
        periodeId: data.periodeId,
      },
    },
    update: {
      valeur: data.valeur,
      commentaire: data.commentaire ?? null,
      createdById: session.user.id,
    },
    create: {
      eleveId: data.eleveId,
      matiereId: data.matiereId,
      periodeId: data.periodeId,
      valeur: data.valeur,
      commentaire: data.commentaire ?? null,
      createdById: session.user.id,
    },
  });

  revalidatePath("/enseignant/notes");
  return { success: true };
}

export async function deleteNote(eleveId: string, matiereId: string, periodeId: string) {
  const session = await requireEnseignant();

  const periode = await prisma.periodeEvaluation.findUnique({ where: { id: periodeId } });
  if (periode?.close && session.user.role !== "ADMIN") {
    throw new Error("Cette période est clôturée.");
  }

  await prisma.note.delete({
    where: { eleveId_matiereId_periodeId: { eleveId, matiereId, periodeId } },
  });

  revalidatePath("/enseignant/notes");
  return { success: true };
}

export async function upsertAppreciation(data: {
  eleveId: string;
  classeId: string;
  periodeId: string;
  texte: string;
  mention: "FELICITATIONS" | "ENCOURAGEMENTS" | "AUCUNE";
}) {
  const session = await requireEnseignant();

  await prisma.appreciationClasse.upsert({
    where: {
      eleveId_classeId_periodeId: {
        eleveId: data.eleveId,
        classeId: data.classeId,
        periodeId: data.periodeId,
      },
    },
    update: { texte: data.texte, mention: data.mention, userId: session.user.id },
    create: {
      eleveId: data.eleveId,
      classeId: data.classeId,
      periodeId: data.periodeId,
      texte: data.texte,
      mention: data.mention,
      userId: session.user.id,
    },
  });

  revalidatePath("/enseignant/notes");
  return { success: true };
}
