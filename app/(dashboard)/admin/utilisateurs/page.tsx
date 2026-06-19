import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import UtilisateursClient from "./UtilisateursClient";

export default async function UtilisateursPage() {
  const session = await auth();
  if (session?.user.role !== "ADMIN") redirect("/");

  const utilisateurs = await prisma.user.findMany({
    orderBy: [{ role: "asc" }, { nom: "asc" }],
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Utilisateurs</h1>
          <p className="text-slate-500 text-sm mt-1">{utilisateurs.length} compte(s)</p>
        </div>
      </div>
      <UtilisateursClient utilisateurs={utilisateurs} />
    </div>
  );
}
