import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { HomePage } from "@/components/site/HomePage";
import { prisma } from "@/lib/prisma";
import { formatMoisAnnee } from "@/lib/site-content";

export default async function RootPage() {
  const session = await auth();

  if (!session) {
    const newsRows = await prisma.actualite.findMany({ orderBy: { datePublication: "desc" }, take: 3 });

    const news = newsRows.map((a) => ({
      date: formatMoisAnnee(a.datePublication),
      category: a.categorie,
      title: a.titre,
      excerpt: a.extrait,
    }));

    return <HomePage news={news} />;
  }

  const role = session.user.role;
  if (role === "ADMIN") redirect("/admin");
  if (role === "DIRECTEUR") redirect("/directeur");
  if (role === "ENSEIGNANT") redirect("/enseignant");
  if (role === "PARENT") redirect("/parent");

  redirect("/login");
}
