import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import DatesAvenirClient from "./DatesAvenirClient";
import BackLink from "@/components/ui/BackLink";

export default async function DatesAvenirAdminPage() {
  const session = await getSession();
  if (session?.user.role !== "ADMIN" && session?.user.role !== "DIRECTEUR") redirect("/");

  const dates = await prisma.dateAVenir.findMany({
    orderBy: { date: "asc" },
  });

  return (
    <div>
      <BackLink />
      <div style={{ marginBottom: 28 }}>
        <p style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "var(--inkLt)", marginBottom: 6 }}>
          Administration — Site public
        </p>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 28, fontWeight: 400, color: "var(--ink)", marginBottom: 4 }}>
          Dates à venir
        </h1>
        <p style={{ fontSize: 14, color: "var(--inkLt)" }}>
          {dates.length} date{dates.length !== 1 ? "s" : ""} · les 4 prochaines s&apos;affichent sur la page d&apos;accueil
        </p>
      </div>
      <DatesAvenirClient dates={dates} />
    </div>
  );
}
