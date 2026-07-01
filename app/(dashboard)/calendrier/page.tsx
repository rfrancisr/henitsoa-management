import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import CalendrierWrapper from "./CalendrierWrapper";
import BackLink from "@/components/ui/BackLink";

const HOME: Record<string, string> = { ADMIN: "/admin", DIRECTEUR: "/directeur", ENSEIGNANT: "/enseignant", PARENT: "/parent" };

export default async function CalendrierPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  const canEdit = ["ADMIN", "DIRECTEUR"].includes(session.user.role);

  return (
    <div>
      <BackLink href={HOME[session.user.role] ?? "/"} />
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-stone-900">Calendrier scolaire</h1>
        <p className="text-stone-500 text-sm mt-1">
          Événements, examens et vacances
        </p>
      </div>
      <CalendrierWrapper canEdit={canEdit} />
    </div>
  );
}
