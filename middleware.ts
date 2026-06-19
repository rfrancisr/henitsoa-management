import NextAuth from "next-auth";
import { authConfig } from "@/lib/auth.config";

// Le middleware utilise uniquement la config Edge (sans Prisma ni Node.js modules)
export const { auth: middleware } = NextAuth(authConfig);
export default middleware;

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|public).*)"],
};
