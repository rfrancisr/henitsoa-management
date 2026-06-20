import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import AnneesClient from "./AnneesClient";

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
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-stone-900">Années scolaires</h1>
        <p className="text-stone-500 text-sm mt-1">{annees.length} année(s) enregistrée(s)</p>
      </div>
      <AnneesClient annees={annees} />
    </div>
  );
}
