import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { auth } from '@/lib/auth';
import { getMoisComplet, CLASSES_LABELS } from '@/lib/repartition';
import { renderRepartitionPDF } from '@/lib/repartition-pdf';

function loadLogoBase64(): string | undefined {
  try {
    const logoPath = path.join(process.cwd(), 'public', 'LogoHenitsoa.png');
    return fs.readFileSync(logoPath).toString('base64');
  } catch {
    return undefined;
  }
}

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  if (session.user.role !== 'ADMIN') return NextResponse.json({ error: 'Accès refusé' }, { status: 403 });

  const { searchParams } = req.nextUrl;
  const classe  = searchParams.get('classe');
  const mois    = searchParams.get('mois');
  const matiere = searchParams.get('matiere');

  if (!classe || !mois || !matiere) {
    return NextResponse.json({ error: 'Paramètres manquants' }, { status: 400 });
  }

  const semaines = await getMoisComplet(classe, mois);
  if (semaines.length === 0) {
    return NextResponse.json({ error: 'Mois invalide ou aucune donnée' }, { status: 404 });
  }

  const classeLabel = CLASSES_LABELS[classe as keyof typeof CLASSES_LABELS] ?? classe;
  const logoBase64 = loadLogoBase64();
  const html = renderRepartitionPDF(semaines, matiere, classeLabel, mois, logoBase64);

  if (searchParams.get('format') === 'html') {
    return new NextResponse(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'domcontentloaded' });
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '18mm', right: '16mm', bottom: '18mm', left: '16mm' },
    });

    const nom = `repartition-${classeLabel}-${mois}-${matiere}.pdf`
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9\-_.]/g, '');

    return new NextResponse(Buffer.from(pdf), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${nom}"`,
      },
    });
  } finally {
    await browser.close();
  }
}
