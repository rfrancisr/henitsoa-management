import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  const { searchParams } = req.nextUrl;
  const start = searchParams.get("start");
  const end = searchParams.get("end");

  const evenements = await prisma.evenementCalendrier.findMany({
    where: {
      ...(start && end
        ? { dateDebut: { gte: new Date(start), lte: new Date(end) } }
        : {}),
    },
    orderBy: { dateDebut: "asc" },
  });

  // Format compatible FullCalendar
  const events = evenements.map((e) => ({
    id: e.id,
    title: e.titre,
    start: e.dateDebut.toISOString(),
    end: e.dateFin.toISOString(),
    extendedProps: {
      description: e.description,
      type: e.type,
    },
    color: typeColor(e.type),
  }));

  return NextResponse.json(events);
}

function typeColor(type: string): string {
  const colors: Record<string, string> = {
    COURS: "#3b82f6",
    EXAMEN: "#ef4444",
    REUNION: "#8b5cf6",
    VACANCES: "#10b981",
    AUTRE: "#6b7280",
  };
  return colors[type] ?? "#6b7280";
}
