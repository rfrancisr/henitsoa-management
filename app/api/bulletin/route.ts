import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { auth } from "@/lib/auth";
import { getBulletinData, renderBulletinHTML } from "@/lib/bulletin";
import puppeteer from "puppeteer";

function loadLogoBase64(): string | undefined {
  try {
    const logoPath = path.join(process.cwd(), "public", "LogoHenitsoa.png");
    return fs.readFileSync(logoPath).toString("base64");
  } catch {
    return undefined;
  }
}

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  const { searchParams } = req.nextUrl;
  const eleveId = searchParams.get("eleveId");
  const classeId = searchParams.get("classeId");
  const periodeId = searchParams.get("periodeId");

  if (!eleveId || !classeId || !periodeId) {
    return NextResponse.json({ error: "Paramètres manquants" }, { status: 400 });
  }

  // Vérification d'accès : un parent ne peut voir que les bulletins de ses enfants
  if (session.user.role === "PARENT") {
    const { prisma } = await import("@/lib/prisma");
    const lien = await prisma.parentEleve.findUnique({
      where: { userId_eleveId: { userId: session.user.id, eleveId } },
    });
    if (!lien) return NextResponse.json({ error: "Accès refusé" }, { status: 403 });
  }

  const data = await getBulletinData(eleveId, classeId, periodeId);
  if (!data) return NextResponse.json({ error: "Données introuvables" }, { status: 404 });

  const logoBase64 = loadLogoBase64();
  const html = renderBulletinHTML(data, logoBase64);

  if (searchParams.get("format") === "html") {
    return new NextResponse(html, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "domcontentloaded" });
    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: "0mm", right: "0mm", bottom: "0mm", left: "0mm" },
    });

    const nom = `bulletin-${data.eleve.nom}-${data.periode.libelle}.pdf`
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-_.]/g, "");

    return new NextResponse(Buffer.from(pdf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${nom}"`,
      },
    });
  } finally {
    await browser.close();
  }
}
