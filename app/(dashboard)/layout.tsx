import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (!session) redirect("/login");

  return (
    <div className="flex h-screen bg-white">
      <Sidebar user={session.user} />
      <main className="flex-1 overflow-auto" style={{ background: "rgba(250,248,241,0.4)" }}>
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
