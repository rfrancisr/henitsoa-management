import { prisma } from "@/lib/prisma";
import { formatMoisAnnee, getStripeColor } from "@/lib/site-content";
import ActualitesClient from "./ActualitesClient";

export default async function ActualitesPage() {
  const rows = await prisma.actualite.findMany({
    orderBy: { datePublication: "desc" },
  });

  const articles = rows.map((a, i) => ({
    id: a.id,
    category: a.categorie,
    date: formatMoisAnnee(a.datePublication),
    title: a.titre,
    excerpt: a.extrait,
    image: a.image,
    stripe: getStripeColor(a.categorie),
    featured: i === 0,
  }));

  return <ActualitesClient articles={articles} />;
}
