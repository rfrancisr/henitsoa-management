import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { getSemaine } from '@/lib/repartition';

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });

  const { searchParams } = req.nextUrl;
  const classe  = searchParams.get('classe');
  const mois    = searchParams.get('mois');
  const semaine = Number(searchParams.get('semaine'));

  if (!classe || !mois || !semaine) {
    return NextResponse.json({ error: 'Paramètres manquants' }, { status: 400 });
  }

  const data = await getSemaine(classe, mois, semaine);
  if (!data) return NextResponse.json({ error: 'Semaine introuvable' }, { status: 404 });

  return NextResponse.json(data);
}
