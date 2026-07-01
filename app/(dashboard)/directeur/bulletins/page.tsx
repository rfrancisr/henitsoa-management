import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import BulletinsClient from "./BulletinsClient";
import BackLink from "@/components/ui/BackLink";

export default async function BulletinsPage() {
  const session = await getSession();
  if (!session || !["ADMIN", "DIRECTEUR"].includes(session.user.role)) redirect("/");

  const anneeScolaireActive = await prisma.anneeScolaire.findFirst({ where: { active: true } });

  const [classes, periodes] = await Promise.all([
    anneeScolaireActive
      ? prisma.classe.findMany({
          where: { anneeScolaireId: anneeScolaireActive.id },
          include: { niveau: true },
          orderBy: [{ niveau: { ordre: "asc" } }, { libelle: "asc" }],
        })
      : Promise.resolve([]),
    anneeScolaireActive
      ? prisma.periodeEvaluation.findMany({
          where: { anneeScolaireId: anneeScolaireActive.id },
          orderBy: { dateDebut: "asc" },
        })
      : Promise.resolve([]),
  ]);

  return (
    <div>
      <BackLink href={session.user.role === "ADMIN" ? "/admin" : "/directeur"} label="Retour à l'accueil" />
      <div style={{ marginBottom: 28 }}>
        <p style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "var(--inkLt)", marginBottom: 6 }}>
          Direction
        </p>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 28, fontWeight: 400, color: "var(--ink)", marginBottom: 4 }}>
          Bulletins scolaires
        </h1>
        <p style={{ fontSize: 14, color: "var(--inkLt)" }}>
          {anneeScolaireActive?.libelle ?? "Aucune année scolaire active"}
        </p>
      </div>
      <BulletinsClient classes={classes} periodes={periodes} />
    </div>
  );
}
