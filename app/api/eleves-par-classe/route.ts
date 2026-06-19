import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  const classeId = req.nextUrl.searchParams.get("classeId");
  if (!classeId) return NextResponse.json({ error: "classeId requis" }, { status: 400 });

  const eleveClasses = await prisma.eleveClasse.findMany({
    where: { classeId },
    include: {
      eleve: { select: { id: true, nom: true, prenom: true, actif: true } },
    },
    orderBy: { eleve: { nom: "asc" } },
  });

  const eleves = eleveClasses
    .filter((ec) => ec.eleve.actif)
    .map((ec) => ec.eleve);

  return NextResponse.json({ eleves });
}
