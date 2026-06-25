import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import {
  PERIODES,
  getSemaine,
  CLASSES_AVEC_REPARTITION,
  classeSlugFromLibelle,
} from "@/lib/repartition";
import RepartitionViewer from "@/components/RepartitionViewer";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function EnseignantRepartitionPage({
  searchParams,
}: {
  searchParams: Promise<{ periode?: string; semaine?: string; classe?: string }>;
}) {
  const session = await getSession();
  if (session?.user.role !== "ENSEIGNANT") redirect("/");

  const anneeScolaireActive = await prisma.anneeScolaire.findFirst({
    where: { active: true },
  });

  const enseignements = await prisma.enseignement.findMany({
    where: { userId: session.user.id },
    include: {
      classe: { include: { niveau: true, anneeScolaire: true } },
    },
  });

  const ensActifs = enseignements.filter(
    (e) => e.classe.anneeScolaireId === anneeScolaireActive?.id
  );

  // Trouver les classes de l'enseignant qui ont une répartition disponible
  const classesDisponibles: { slug: string; label: string; classeNom: string }[] = [];
  for (const e of ensActifs) {
    const slug = classeSlugFromLibelle(e.classe.niveau.libelle);
    if (slug && !classesDisponibles.find((c) => c.slug === slug)) {
      classesDisponibles.push({
        slug,
        label: CLASSES_AVEC_REPARTITION[slug],
        classeNom: e.classe.libelle,
      });
    }
  }

  if (classesDisponibles.length === 0) {
    return (
      <div>
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-stone-900 tracking-tight">
            Répartition annuelle
          </h1>
          <p className="text-stone-400 text-sm mt-1">
            Programme hebdomadaire détaillé
          </p>
        </div>
        <div
          className="bg-white rounded-2xl px-6 py-16 text-center"
          style={{ border: "1px solid rgba(232,212,138,0.3)" }}
        >
          <div className="text-4xl mb-4">📋</div>
          <p className="text-stone-600 font-medium">
            Aucune répartition disponible pour vos classes
          </p>
          <p className="text-stone-400 text-sm mt-2">
            La répartition annuelle est disponible pour les classes 11ème et 10ème.
            {ensActifs.length > 0 && (
              <>
                {" "}Vos classes assignées :{" "}
                {ensActifs.map((e) => e.classe.niveau.libelle).join(", ")}.
              </>
            )}
          </p>
        </div>
      </div>
    );
  }

  const params = await searchParams;
  const classeParam = params.classe;
  const activeClasse =
    classeParam && classesDisponibles.find((c) => c.slug === classeParam)
      ? classeParam
      : classesDisponibles[0].slug;

  const periodeNum = Math.max(1, Math.min(5, parseInt(params.periode ?? "1") || 1));
  const semaineNum = Math.max(1, parseInt(params.semaine ?? "1") || 1);

  const data = getSemaine(periodeNum, semaineNum, activeClasse);
  const activeClasseInfo = classesDisponibles.find((c) => c.slug === activeClasse)!;

  return (
    <div>
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-stone-900 tracking-tight">
          Répartition annuelle — {activeClasseInfo.classeNom}
        </h1>
        <p className="text-stone-400 text-sm mt-1">
          Programme hebdomadaire détaillé · Année scolaire 2024-2025
        </p>
      </div>

      {/* Sélecteur de classe si plusieurs disponibles */}
      {classesDisponibles.length > 1 && (
        <div className="flex gap-2 mb-4 flex-wrap">
          {classesDisponibles.map(({ slug, label }) => (
            <Link
              key={slug}
              href={`/enseignant/repartition?classe=${slug}&periode=1&semaine=1`}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                activeClasse === slug
                  ? 'bg-stone-900 text-white border-stone-900'
                  : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}

      <RepartitionViewer
        periodes={PERIODES}
        selectedPeriode={periodeNum}
        selectedSemaine={semaineNum}
        semaineData={data}
        basePath={`/enseignant/repartition?classe=${activeClasse}`}
        classe={activeClasse}
      />
    </div>
  );
}
