import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import UtilisateursClient from "./UtilisateursClient";
import BackLink from "@/components/ui/BackLink";

export default async function UtilisateursPage() {
  const session = await getSession();
  if (session?.user.role !== "ADMIN") redirect("/");

  const utilisateurs = await prisma.user.findMany({
    orderBy: [{ role: "asc" }, { nom: "asc" }],
  });

  const actifs = utilisateurs.filter((u) => u.actif).length;

  return (
    <div>
      <BackLink />
      <div style={{ marginBottom: 28 }}>
        <p style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "var(--inkLt)", marginBottom: 6 }}>
          Administration — Comptes
        </p>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 28, fontWeight: 400, color: "var(--ink)", marginBottom: 4 }}>
          Comptes utilisateurs
        </h1>
        <p style={{ fontSize: 14, color: "var(--inkLt)" }}>
          {actifs} compte{actifs !== 1 ? "s" : ""} actif{actifs !== 1 ? "s" : ""} sur {utilisateurs.length} ·
          Créez les accès à l&apos;application pour les enseignants, les parents et les directeurs
        </p>
      </div>
      <UtilisateursClient utilisateurs={utilisateurs} />
    </div>
  );
}
