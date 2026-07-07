import type { NextAuthConfig } from "next-auth";
import type { Role } from "@/app/generated/prisma/enums";

// Config allégée compatible Edge Runtime (pas de Prisma, pas de bcryptjs)
// Utilisée par le middleware pour vérifier les sessions JWT uniquement.
export const authConfig = {
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  providers: [],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isPublic =
        nextUrl.pathname === "/" ||
        nextUrl.pathname.startsWith("/a-propos") ||
        nextUrl.pathname.startsWith("/actualites") ||
        nextUrl.pathname.startsWith("/inscription") ||
        nextUrl.pathname.startsWith("/login") ||
        nextUrl.pathname.startsWith("/api/auth");
      if (isPublic) return true;
      if (!isLoggedIn) return Response.redirect(new URL("/login", nextUrl));
      return true;
    },
    jwt({ token, user }) {
      if (user) {
        token.role = (user as { role: Role }).role;
        token.id = user.id ?? "";
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as Role;
        session.user.id = token.id as string;
      }
      return session;
    },
  },
} satisfies NextAuthConfig;
