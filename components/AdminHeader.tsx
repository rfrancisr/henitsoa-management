"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import type { Role } from "@/app/generated/prisma/enums";

const ROLE_LABELS: Record<Role, string> = {
  ADMIN:      "Administrateur",
  DIRECTEUR:  "Directeur",
  ENSEIGNANT: "Enseignant",
  PARENT:     "Parent",
};

const HOME_BY_ROLE: Record<Role, string> = {
  ADMIN:      "/admin",
  DIRECTEUR:  "/directeur",
  ENSEIGNANT: "/enseignant",
  PARENT:     "/parent",
};

export default function AdminHeader({
  user,
}: {
  user: { name: string; email: string; role: Role };
}) {
  const initials = user.name
    .split(" ")
    .slice(0, 2)
    .map((w) => w.charAt(0).toUpperCase())
    .join("");

  return (
    <header className="admin-top-header">
      <Link href={HOME_BY_ROLE[user.role]} className="admin-top-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/LogoHenitsoa.png"
          alt=""
          style={{ width: "32px", height: "32px", objectFit: "contain", flexShrink: 0 }}
        />
        <div>
          <p className="admin-top-school-sub">École Privée</p>
          <p className="admin-top-school-name">Henitsoa</p>
        </div>
      </Link>

      <div className="admin-top-user">
        <div
          className="avatar avatar-forest"
          style={{ width: "32px", height: "32px", fontSize: "12px" }}
        >
          {initials}
        </div>
        <div className="admin-top-user-info">
          <p className="admin-top-user-name">{user.name}</p>
          <p className="admin-top-user-role">{ROLE_LABELS[user.role]}</p>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="admin-top-logout"
        >
          Se déconnecter
        </button>
      </div>
    </header>
  );
}
