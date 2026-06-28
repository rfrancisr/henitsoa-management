import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { HomePage } from "@/components/site/HomePage";

export default async function RootPage() {
  const session = await auth();

  if (!session) return <HomePage />;

  const role = session.user.role;
  if (role === "ADMIN") redirect("/admin");
  if (role === "DIRECTEUR") redirect("/directeur");
  if (role === "ENSEIGNANT") redirect("/enseignant");
  if (role === "PARENT") redirect("/parent");

  redirect("/login");
}
