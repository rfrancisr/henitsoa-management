import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import MatieresClient from "./MatieresClient";

export default async function MatieresPage() {
  const session = await getSession();
  if (session?.user.role !== "ADMIN" && session?.user.role !== "DIRECTEUR") redirect("/");

  const [matieres, niveaux] = await Promise.all([
    prisma.matiere.findMany({
      include: { niveau: true },
      orderBy: [{ niveau: { ordre: "asc" } }, { libelle: "asc" }],
    }),
    prisma.niveau.findMany({ orderBy: { ordre: "asc" } }),
  ]);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-stone-900">Matières</h1>
        <p className="text-stone-500 text-sm mt-1">{matieres.length} matière(s)</p>
      </div>
      <MatieresClient matieres={matieres} niveaux={niveaux} />
    </div>
  );
}
