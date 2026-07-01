"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import type { Role } from "@/app/generated/prisma/enums";

type NavItem = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const ROLE_LABELS: Record<Role, string> = {
  ADMIN: "Administrateur",
  DIRECTEUR: "Directeur",
  ENSEIGNANT: "Enseignant",
  PARENT: "Parent",
};

function navByRole(role: Role): NavItem[] {
  const common: NavItem[] = [
    {
      href: "/calendrier",
      label: "Calendrier",
      icon: <CalendarIcon />,
    },
  ];

  if (role === "ADMIN") {
    return [
      { href: "/admin", label: "Tableau de bord", icon: <HomeIcon /> },
      { href: "/admin/annees", label: "Années scolaires", icon: <YearIcon /> },
      { href: "/admin/periodes", label: "Périodes", icon: <PeriodIcon /> },
      { href: "/admin/matieres", label: "Matières", icon: <BookIcon /> },
      { href: "/admin/classes", label: "Classes", icon: <ClassIcon /> },
      { href: "/admin/utilisateurs", label: "Utilisateurs", icon: <UsersIcon /> },
      { href: "/admin/enseignants", label: "Enseignants", icon: <TeacherIcon /> },
      { href: "/admin/eleves", label: "Élèves", icon: <StudentIcon /> },
      { href: "/admin/repartition", label: "Répartition", icon: <RepartitionIcon /> },
      { href: "/enseignant/notes", label: "Saisie des notes", icon: <GradeIcon /> },
      { href: "/performance", label: "Performance", icon: <TrendIcon /> },
      ...common,
    ];
  }

  if (role === "DIRECTEUR") {
    return [
      { href: "/directeur", label: "Tableau de bord", icon: <HomeIcon /> },
      { href: "/directeur/eleves", label: "Élèves", icon: <StudentIcon /> },
      { href: "/directeur/classes", label: "Classes", icon: <ClassIcon /> },
      { href: "/directeur/bulletins", label: "Bulletins", icon: <BulletinIcon /> },
      ...common,
    ];
  }

  if (role === "ENSEIGNANT") {
    return [
      { href: "/enseignant", label: "Tableau de bord", icon: <HomeIcon /> },
      { href: "/enseignant/notes", label: "Saisie des notes", icon: <GradeIcon /> },
      { href: "/enseignant/repartition", label: "Répartition", icon: <RepartitionIcon /> },
      { href: "/performance", label: "Performance élèves", icon: <TrendIcon /> },
      ...common,
    ];
  }

  // PARENT
  return [
    { href: "/parent", label: "Mes enfants", icon: <StudentIcon /> },
    { href: "/performance", label: "Performance", icon: <TrendIcon /> },
    { href: "/parent/bulletins", label: "Bulletins", icon: <BulletinIcon /> },
    ...common,
  ];
}

export default function Sidebar({
  user,
}: {
  user: { name: string; email: string; role: Role };
}) {
  const pathname = usePathname();
  const navItems = navByRole(user.role);

  const initials = user.name
    .split(" ")
    .slice(0, 2)
    .map((w) => w.charAt(0).toUpperCase())
    .join("");

  return (
    <aside
      className="w-64 flex flex-col h-full shrink-0"
      style={{ background: "var(--white)", borderRight: "1px solid var(--borderLt)" }}
    >
      {/* Logo */}
      <div
        className="px-5 py-5 flex items-center gap-3"
        style={{ borderBottom: "1px solid var(--borderLt)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/LogoHenitsoa.png"
          alt=""
          style={{ width: "36px", height: "36px", objectFit: "contain", flexShrink: 0 }}
        />
        <div className="min-w-0">
          <p
            className="text-sm leading-tight"
            style={{ color: "var(--inkLt)", fontFamily: "var(--font-sans)", fontWeight: 400 }}
          >
            École Privée
          </p>
          <p
            className="leading-tight"
            style={{ color: "var(--ink)", fontFamily: "var(--font-serif)", fontSize: "16px" }}
          >
            Henitsoa
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-3 overflow-y-auto space-y-0.5 px-2">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className="action-tile"
              style={
                isActive
                  ? {
                      background: "var(--forest)",
                      borderLeftColor: "var(--forest)",
                      color: "var(--stoneLt)",
                    }
                  : undefined
              }
              onMouseEnter={(e) => {
                if (!isActive) {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--forest)";
                  el.style.borderLeftColor = "var(--forest)";
                  el.style.color = "var(--stoneLt)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "";
                  el.style.borderLeftColor = "var(--stoneDk)";
                  el.style.color = "var(--inkMd)";
                }
              }}
            >
              <span
                className="tile-icon"
                style={{ color: "inherit" }}
              >
                {item.icon}
              </span>
              <span className="tile-label">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* User profile */}
      <div
        className="px-2 py-3"
        style={{ borderTop: "1px solid var(--borderLt)" }}
      >
        <div className="flex items-center gap-3 px-3 py-2 mb-1">
          <div
            className="avatar avatar-forest w-8 h-8 shrink-0"
            style={{ fontSize: "13px" }}
          >
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <p
              className="text-sm truncate"
              style={{ color: "var(--ink)", fontFamily: "var(--font-sans)", fontWeight: 500 }}
            >
              {user.name}
            </p>
            <p
              className="text-xs"
              style={{ color: "var(--inkLt)" }}
            >
              {ROLE_LABELS[user.role]}
            </p>
          </div>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors"
          style={{ color: "var(--inkLt)" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = "var(--red)";
            (e.currentTarget as HTMLElement).style.background = "rgba(139,42,42,.06)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = "var(--inkLt)";
            (e.currentTarget as HTMLElement).style.background = "";
          }}
        >
          <LogoutIcon />
          Se déconnecter
        </button>
      </div>
    </aside>
  );
}

// ─── SVG Icons (28×28, strokeWidth 1.6) ──────────────────────────────────────

function HomeIcon() {
  return (
    <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}
function UsersIcon() {
  return (
    <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}
function TrendIcon() {
  return (
    <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}
function TeacherIcon() {
  return (
    <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
function StudentIcon() {
  return (
    <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}
function ClassIcon() {
  return (
    <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}
function BookIcon() {
  return (
    <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}
function GradeIcon() {
  return (
    <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  );
}
function BulletinIcon() {
  return (
    <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  );
}
function PeriodIcon() {
  return (
    <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}
function YearIcon() {
  return (
    <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}
function RepartitionIcon() {
  return (
    <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  );
}
function LogoutIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
  );
}
