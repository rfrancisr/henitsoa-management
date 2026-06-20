import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import CalendrierWrapper from "./CalendrierWrapper";

export default async function CalendrierPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  const canEdit = ["ADMIN", "DIRECTEUR"].includes(session.user.role);

  return (
    <div>
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
