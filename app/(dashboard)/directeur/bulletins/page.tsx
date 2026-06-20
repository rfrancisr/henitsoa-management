import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import BulletinsClient from "./BulletinsClient";

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
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-stone-900">Bulletins scolaires</h1>
        <p className="text-stone-500 text-sm mt-1">
          {anneeScolaireActive?.libelle ?? "Aucune année scolaire active"}
        </p>
      </div>
      <BulletinsClient classes={classes} periodes={periodes} />
    </div>
  );
}
