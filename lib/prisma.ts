import { PrismaClient } from "@/app/generated/prisma/client";
import path from "path";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

// Turbopack bundles import.meta.url to the chunk path, breaking Prisma's
// __dirname-based SQLite resolution. Resolve to an absolute path from
// process.cwd() (always the project root) to bypass this.
function resolveDbUrl(): string | undefined {
  const url = process.env.DATABASE_URL;
  if (!url) return undefined;
  const rel = url.match(/^file:(\..*)/)?.[1];
  if (rel) return `file:${path.resolve(process.cwd(), rel)}`;
  return url;
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({ log: ["error"], datasources: { db: { url: resolveDbUrl() } } });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
