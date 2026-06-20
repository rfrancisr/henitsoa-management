import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import EnseignantsClient from "./EnseignantsClient";

export default async function EnseignantsPage() {
  const session = await getSession();
  if (session?.user.role !== "ADMIN" && session?.user.role !== "DIRECTEUR") redirect("/");

  const enseignants = await prisma.user.findMany({
    where: { role: "ENSEIGNANT" },
    orderBy: [{ nom: "asc" }, { prenom: "asc" }],
    include: {
      profil: true,
      enseignements: {
        include: {
          classe: {
            include: {
              niveau: true,
              anneeScolaire: true,
            },
          },
          matiere: true,
        },
        orderBy: { classe: { anneeScolaire: { dateDebut: "desc" } } },
      },
    },
  });

  const isAdmin = session?.user.role === "ADMIN";

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-stone-900">Enseignants</h1>
        <p className="text-stone-500 text-sm mt-1">
          {enseignants.filter((e) => e.actif).length} enseignant(s) actif(s)
        </p>
      </div>
      <EnseignantsClient enseignants={enseignants} isAdmin={isAdmin} />
    </div>
  );
}
