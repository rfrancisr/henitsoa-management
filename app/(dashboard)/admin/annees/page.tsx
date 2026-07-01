import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import AnneesClient from "./AnneesClient";
import BackLink from "@/components/ui/BackLink";

export default async function AnneesPage() {
  const session = await getSession();
  if (session?.user.role !== "ADMIN") redirect("/");

  const annees = await prisma.anneeScolaire.findMany({
    orderBy: { dateDebut: "desc" },
    include: {
      _count: { select: { classes: true, periodes: true } },
    },
  });

  return (
    <div>
      <BackLink />
      <div style={{ marginBottom: 28 }}>
        <p style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "var(--inkLt)", marginBottom: 6 }}>
          Administration — Début d&apos;année
        </p>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 28, fontWeight: 400, color: "var(--ink)", marginBottom: 4 }}>
          Années scolaires
        </h1>
        <p style={{ fontSize: 14, color: "var(--inkLt)" }}>
          {annees.length} année{annees.length !== 1 ? "s" : ""} enregistrée{annees.length !== 1 ? "s" : ""} ·
          Créez l&apos;année en cours avant de commencer la rentrée
        </p>
      </div>
      <AnneesClient annees={annees} />
    </div>
  );
}
