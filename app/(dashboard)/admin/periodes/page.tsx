import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import PeriodesClient from "./PeriodesClient";

export default async function PeriodesPage() {
  const session = await auth();
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
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Périodes d&apos;évaluation</h1>
        <p className="text-slate-500 text-sm mt-1">Trimestres et semestres</p>
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
