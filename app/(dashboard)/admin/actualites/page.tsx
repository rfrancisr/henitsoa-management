import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ActualitesClient from "./ActualitesClient";
import BackLink from "@/components/ui/BackLink";

export default async function ActualitesAdminPage() {
  const session = await getSession();
  if (session?.user.role !== "ADMIN" && session?.user.role !== "DIRECTEUR") redirect("/");

  const actualites = await prisma.actualite.findMany({
    orderBy: { datePublication: "desc" },
  });

  return (
    <div>
      <BackLink />
      <div style={{ marginBottom: 28 }}>
        <p style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "var(--inkLt)", marginBottom: 6 }}>
          Administration — Site public
        </p>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 28, fontWeight: 400, color: "var(--ink)", marginBottom: 4 }}>
          Actualités
        </h1>
        <p style={{ fontSize: 14, color: "var(--inkLt)" }}>
          {actualites.length} actualité{actualites.length !== 1 ? "s" : ""} publiée{actualites.length !== 1 ? "s" : ""}
        </p>
      </div>
      <ActualitesClient actualites={actualites} />
    </div>
  );
}
