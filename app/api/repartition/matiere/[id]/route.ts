import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { diffRepartitionMatiere } from '@/lib/repartition-log';

const ROLES_AUTORISES = ['ADMIN', 'DIRECTEUR', 'ENSEIGNANT'];

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  if (!ROLES_AUTORISES.includes(session.user.role)) {
    return NextResponse.json({ error: 'Accès refusé' }, { status: 403 });
  }

  const { id } = await params;
  const logs = await prisma.repartitionMatiereLog.findMany({
    where: { matiereId: id },
    orderBy: { updatedAt: 'desc' },
    include: { user: { select: { nom: true, prenom: true } } },
  });

  return NextResponse.json(logs.map(log => ({
    id: log.id,
    champ: log.champ,
    ancienneValeur: log.champ === 'transmission' || log.champ === 'exercices'
      ? JSON.parse(log.ancienneValeur) as string[]
      : log.ancienneValeur,
    updatedAt: log.updatedAt,
    auteur: `${log.user.prenom} ${log.user.nom}`,
  })));
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  if (!ROLES_AUTORISES.includes(session.user.role)) {
    return NextResponse.json({ error: 'Accès refusé' }, { status: 403 });
  }

  const { id } = await params;
  const body = await req.json() as {
    topic?: string;
    approche?: string;
    transmission?: string[];
    exercices?: string[];
  };

  const existant = await prisma.repartitionMatiere.findUniqueOrThrow({ where: { id } });

  const patch = {
    ...(body.topic        !== undefined && { topic: body.topic }),
    ...(body.approche     !== undefined && { approche: body.approche }),
    ...(body.transmission !== undefined && { transmission: JSON.stringify(body.transmission) }),
    ...(body.exercices    !== undefined && { exercices: JSON.stringify(body.exercices) }),
  };

  const changements = diffRepartitionMatiere(existant, patch);

  const updated = await prisma.repartitionMatiere.update({ where: { id }, data: patch });

  if (changements.length > 0) {
    await prisma.repartitionMatiereLog.createMany({
      data: changements.map(c => ({
        matiereId: id,
        userId: session.user.id,
        champ: c.champ,
        ancienneValeur: c.ancienneValeur,
      })),
    });
  }

  return NextResponse.json({
    id: updated.id,
    matiere: updated.matiere,
    topic: updated.topic,
    approche: updated.approche,
    transmission: JSON.parse(updated.transmission) as string[],
    exercices: JSON.parse(updated.exercices) as string[],
  });
}
