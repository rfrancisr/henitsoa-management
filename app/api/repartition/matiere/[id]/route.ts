import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  const role = session.user.role;
  if (role !== 'ADMIN' && role !== 'DIRECTEUR' && role !== 'ENSEIGNANT') {
    return NextResponse.json({ error: 'Accès refusé' }, { status: 403 });
  }

  const { id } = await params;
  const body = await req.json() as {
    topic?: string;
    approche?: string;
    transmission?: string[];
    exercices?: string[];
  };

  const updated = await prisma.repartitionMatiere.update({
    where: { id },
    data: {
      ...(body.topic        !== undefined && { topic: body.topic }),
      ...(body.approche     !== undefined && { approche: body.approche }),
      ...(body.transmission !== undefined && { transmission: JSON.stringify(body.transmission) }),
      ...(body.exercices    !== undefined && { exercices: JSON.stringify(body.exercices) }),
    },
  });

  return NextResponse.json({
    id: updated.id,
    matiere: updated.matiere,
    topic: updated.topic,
    approche: updated.approche,
    transmission: JSON.parse(updated.transmission) as string[],
    exercices: JSON.parse(updated.exercices) as string[],
  });
}
