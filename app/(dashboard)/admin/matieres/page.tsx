import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import MatieresClient from "./MatieresClient";
import BackLink from "@/components/ui/BackLink";

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
      <BackLink />
      <div style={{ marginBottom: 28 }}>
        <p style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "var(--inkLt)", marginBottom: 6 }}>
          Administration — Début d&apos;année
        </p>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 28, fontWeight: 400, color: "var(--ink)", marginBottom: 4 }}>
          Matières
        </h1>
        <p style={{ fontSize: 14, color: "var(--inkLt)" }}>
          {matieres.length} matière{matieres.length !== 1 ? "s" : ""} configurée{matieres.length !== 1 ? "s" : ""} ·
          Ajoutez ou modifiez les matières enseignées dans l&apos;école
        </p>
      </div>
      <MatieresClient matieres={matieres} niveaux={niveaux} />
    </div>
  );
}
