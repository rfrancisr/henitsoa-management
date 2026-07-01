import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ActionTile from "@/components/ActionTile";

/* ── Icons ── */
const I = {
  year: <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>,
  period: <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  book: <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>,
  class: <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>,
  student: <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  teacher: <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
  users: <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>,
  repartition: <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>,
  pen: <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
  report: <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  chart: <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>,
  calendar: <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
};

export default async function AdminDashboard() {
  const session = await getSession();
  if (session?.user.role !== "ADMIN") redirect("/");

  const [totalEleves, totalUtilisateurs, totalClasses] = await Promise.all([
    prisma.eleve.count({ where: { actif: true } }),
    prisma.user.count({ where: { actif: true } }),
    prisma.classe.count(),
  ]);

  const anneeScolaireActive = await prisma.anneeScolaire.findFirst({
    where: { active: true },
  });

  const prenom = session?.user?.name?.split(" ")[0] ?? "Administrateur";
  const dateJour = new Date().toLocaleDateString("fr-FR", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });

  return (
    <div>
      {/* ── Salutation ── */}
      <div style={{ marginBottom: 36 }}>
        <p className="page-eyebrow" style={{ marginBottom: 10 }}>
          École Henitsoa · Administration
        </p>
        <h1 style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400, color: "var(--ink)", fontSize: 38, lineHeight: 1.15, marginBottom: 6 }}>
          Bonjour, <em style={{ color: "var(--forest)" }}>{prenom}.</em>
        </h1>
        <p style={{ fontSize: 14, color: "var(--inkLt)" }}>{dateJour}</p>
        {anneeScolaireActive ? (
          <p style={{ fontSize: 13, color: "var(--inkLt)", marginTop: 4 }}>
            Année scolaire active : {anneeScolaireActive.libelle}
          </p>
        ) : (
          <p style={{ fontSize: 13, color: "var(--amber)", marginTop: 4, fontWeight: 500 }}>
            Aucune année scolaire active — commencez par en créer une ci-dessous
          </p>
        )}
      </div>

      {/* ── Stats ── */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        borderTop: "1px solid var(--border)",
        borderLeft: "1px solid var(--border)",
        marginBottom: 36, overflowX: "auto",
      }}>
        {[
          { val: totalEleves,      lbl: "Élèves inscrits" },
          { val: totalUtilisateurs, lbl: "Comptes actifs"  },
          { val: totalClasses,     lbl: "Classes"          },
        ].map((s) => (
          <div key={s.lbl} style={{
            background: "var(--white)",
            borderRight: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
            padding: "16px 18px",
          }}>
            <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 28, color: "var(--forest)", lineHeight: 1, marginBottom: 4 }}>
              {s.val}
            </div>
            <div style={{ fontSize: 11.5, color: "var(--inkLt)", fontWeight: 500, letterSpacing: 0.4, textTransform: "uppercase" }}>
              {s.lbl}
            </div>
          </div>
        ))}
      </div>

      {/* ── Section 1 : Configuration ── */}
      <SectionHeader label="Début d'année — configuration" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
        <ActionTile href="/admin/annees"     icon={I.year}    label="Créer une année scolaire"  sub="Définir les dates de début et de fin" />
        <ActionTile href="/admin/periodes"   icon={I.period}  label="Définir les périodes"      sub="Trimestres ou semestres" />
        <ActionTile href="/admin/matieres"   icon={I.book}    label="Gérer les matières"        sub="Ajouter ou modifier les matières enseignées" />
        <ActionTile href="/admin/classes"    icon={I.class}   label="Configurer les classes"    sub="Niveaux, groupes et affectations" />
      </div>

      {/* ── Section 2 : Rentrée ── */}
      <SectionHeader label="Rentrée — inscrire et affecter" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
        <ActionTile href="/admin/eleves"       icon={I.student}     label="Inscrire un élève"       sub="Ouvrir un dossier et affecter une classe" />
        <ActionTile href="/admin/enseignants"  icon={I.teacher}     label="Gérer les enseignants"   sub="Affecter les matières et les classes" />
        <ActionTile href="/admin/utilisateurs" icon={I.users}       label="Créer des comptes"        sub="Parents, enseignants, directeur" />
        <ActionTile href="/admin/repartition"  icon={I.repartition} label="Consulter le programme"   sub="Cours, activités et emploi du temps" />
      </div>

      {/* ── Section 3 : Suivi ── */}
      <SectionHeader label="En cours d'année — suivi et consultation" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <ActionTile href="/enseignant/notes"    icon={I.pen}      label="Saisir les notes"          sub="Mettre à jour les résultats par période" />
        <ActionTile href="/directeur/bulletins" icon={I.report}   label="Voir les bulletins"        sub="Classement et PDF par élève" />
        <ActionTile href="/performance"         icon={I.chart}    label="Consulter les résultats"   sub="Statistiques et moyennes par classe" />
        <ActionTile href="/calendrier"          icon={I.calendar} label="Gérer le calendrier"       sub="Événements, examens et vacances" />
      </div>
    </div>
  );
}

function SectionHeader({ label }: { label: string }) {
  return (
    <p style={{
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 1.4,
      textTransform: "uppercase",
      color: "var(--inkLt)",
      marginBottom: 14,
      paddingBottom: 8,
      borderBottom: "1px solid var(--borderLt)",
    }}>
      {label}
    </p>
  );
}
