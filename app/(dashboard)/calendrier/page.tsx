import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import CalendrierClient from "./CalendrierClient";

export default async function CalendrierPage() {
  const session = await auth();
  if (!session) redirect("/login");

  const canEdit = ["ADMIN", "DIRECTEUR"].includes(session.user.role);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Calendrier scolaire</h1>
        <p className="text-slate-500 text-sm mt-1">
          Événements, examens et vacances
        </p>
      </div>
      <CalendrierClient canEdit={canEdit} />
    </div>
  );
}
