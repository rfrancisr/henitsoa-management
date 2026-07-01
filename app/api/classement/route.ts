import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { moyennePonderee } from "@/lib/notes-utils";

export async function GET(request: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  if (!["ADMIN", "DIRECTEUR"].includes(session.user.role)) {
    return NextResponse.json({ error: "Accès refusé" }, { status: 403 });
  }

  const { searchParams } = new URL(request.url);
  const classeId = searchParams.get("classeId");
  const periodeId = searchParams.get("periodeId");

  if (!classeId || !periodeId) {
    return NextResponse.json({ error: "Paramètres manquants" }, { status: 400 });
  }

  const [eleveClasses, enseignements] = await Promise.all([
    prisma.eleveClasse.findMany({
      where: { classeId },
      include: {
        eleve: {
          include: {
            notes: {
              where: { periodeId },
              include: { matiere: { select: { id: true, libelle: true, coefficient: true } } },
            },
          },
        },
      },
    }),
    prisma.enseignement.findMany({
      where: { classeId },
      include: { matiere: { select: { id: true, libelle: true, coefficient: true } } },
    }),
  ]);

  // Dédupliquer les matières via les enseignements
  const matieresMap = new Map<string, { id: string; libelle: string; coefficient: number }>();
  for (const e of enseignements) {
    if (!matieresMap.has(e.matiere.id)) {
      matieresMap.set(e.matiere.id, e.matiere);
    }
  }
  const matieres = Array.from(matieresMap.values());

  // Calcul des moyennes et construction du classement
  const students = eleveClasses
    .filter((ec) => ec.eleve.actif)
    .map((ec) => {
      const { eleve } = ec;
      const noteParMatiere: Record<string, number> = {};
      for (const n of eleve.notes) {
        noteParMatiere[n.matiereId] = n.valeur;
      }
      const moyenne = moyennePonderee(
        eleve.notes.map((n) => ({ valeur: n.valeur, coefficient: n.matiere.coefficient }))
      );
      return { id: eleve.id, nom: eleve.nom, prenom: eleve.prenom, moyenne, noteParMatiere };
    })
    .sort((a, b) => {
      if (a.moyenne === null && b.moyenne === null) return 0;
      if (a.moyenne === null) return 1;
      if (b.moyenne === null) return -1;
      return b.moyenne - a.moyenne;
    });

  return NextResponse.json({ students, matieres });
}
