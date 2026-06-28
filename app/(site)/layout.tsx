"use client";
import { LangProvider } from "@/components/site/LanguageContext";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { SiteFooter } from "@/components/site/SiteFooter";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <SiteNavbar />
      <main className="pt-[68px]">{children}</main>
      <SiteFooter />
    </LangProvider>
  );
}
