import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import EnseignantsClient from "./EnseignantsClient";
import BackLink from "@/components/ui/BackLink";

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
  const actifs = enseignants.filter((e) => e.actif).length;

  return (
    <div>
      <BackLink />
      <div style={{ marginBottom: 28 }}>
        <p style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "var(--inkLt)", marginBottom: 6 }}>
          Administration — Rentrée
        </p>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 28, fontWeight: 400, color: "var(--ink)", marginBottom: 4 }}>
          Enseignants
        </h1>
        <p style={{ fontSize: 14, color: "var(--inkLt)" }}>
          {actifs} enseignant{actifs !== 1 ? "s" : ""} actif{actifs !== 1 ? "s" : ""} ·
          Consultez la liste et affectez les matières à chaque enseignant
        </p>
      </div>
      <EnseignantsClient enseignants={enseignants} isAdmin={isAdmin} />
    </div>
  );
}
