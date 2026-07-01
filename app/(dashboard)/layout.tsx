import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import AdminHeader from "@/components/AdminHeader";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (!session) redirect("/login");

  return (
    <div style={{ minHeight: "100vh", background: "var(--stone)", overflowX: "hidden" }}>
      <div className="top-accent-line" />
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(18px, 4vw, 64px) 80px" }}>
        <AdminHeader user={session.user} />
        <main>{children}</main>
      </div>
    </div>
  );
}
