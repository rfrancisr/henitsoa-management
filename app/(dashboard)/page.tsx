import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function RootDashboardPage() {
  const session = await auth();
  if (!session) redirect("/login");

  const role = session.user.role;

  if (role === "ADMIN") redirect("/admin");
  if (role === "DIRECTEUR") redirect("/directeur");
  if (role === "ENSEIGNANT") redirect("/enseignant");
  if (role === "PARENT") redirect("/parent");

  redirect("/login");
}
