import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { HomePage } from "@/components/site/HomePage";
import { prisma } from "@/lib/prisma";
import { formatMoisAnnee, getStripeColor } from "@/lib/site-content";

export default async function RootPage() {
  const session = await auth();

  if (!session) {
    const [newsRows, eventRows] = await Promise.all([
      prisma.actualite.findMany({ orderBy: { datePublication: "desc" }, take: 3 }),
      prisma.dateAVenir.findMany({
        where: { date: { gte: new Date() } },
        orderBy: { date: "asc" },
        take: 4,
      }),
    ]);

    const news = newsRows.map((a) => ({
      date: formatMoisAnnee(a.datePublication),
      category: a.categorie,
      title: a.titre,
      excerpt: a.extrait,
      stripe: getStripeColor(a.categorie),
    }));

    const events = eventRows.map((d) => ({
      month: d.date.toLocaleDateString("fr-FR", { month: "short" }).replace(".", ""),
      day: String(d.date.getDate()),
      title: d.titre,
      desc: d.description,
    }));

    return <HomePage news={news} events={events} />;
  }

  const role = session.user.role;
  if (role === "ADMIN") redirect("/admin");
  if (role === "DIRECTEUR") redirect("/directeur");
  if (role === "ENSEIGNANT") redirect("/enseignant");
  if (role === "PARENT") redirect("/parent");

  redirect("/login");
}
