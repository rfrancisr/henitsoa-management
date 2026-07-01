import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import PeriodesClient from "./PeriodesClient";
import BackLink from "@/components/ui/BackLink";

export default async function PeriodesPage() {
  const session = await getSession();
  if (session?.user.role !== "ADMIN" && session?.user.role !== "DIRECTEUR") redirect("/");

  const [periodes, anneesScolaires] = await Promise.all([
    prisma.periodeEvaluation.findMany({
      include: { anneeScolaire: true },
      orderBy: [{ anneeScolaire: { dateDebut: "desc" } }, { dateDebut: "asc" }],
    }),
    prisma.anneeScolaire.findMany({ orderBy: { dateDebut: "desc" } }),
  ]);

  const anneeScolaireActiveId = anneesScolaires.find((a) => a.active)?.id ?? null;

  return (
    <div>
      <BackLink />
      <div style={{ marginBottom: 28 }}>
        <p style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "var(--inkLt)", marginBottom: 6 }}>
          Administration — Début d&apos;année
        </p>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 28, fontWeight: 400, color: "var(--ink)", marginBottom: 4 }}>
          Périodes d&apos;évaluation
        </h1>
        <p style={{ fontSize: 14, color: "var(--inkLt)" }}>
          {periodes.length} période{periodes.length !== 1 ? "s" : ""} configurée{periodes.length !== 1 ? "s" : ""} ·
          Définissez les trimestres ou semestres de l&apos;année scolaire
        </p>
      </div>
      <PeriodesClient
        periodes={periodes}
        anneesScolaires={anneesScolaires}
        anneeScolaireActiveId={anneeScolaireActiveId}
        isAdmin={session?.user.role === "ADMIN"}
      />
    </div>
  );
}
