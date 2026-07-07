"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "./LanguageContext";

export function SiteNavbar() {
  const { lang, setLang, t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/a-propos", label: t.nav.about },
    { href: "/actualites", label: t.nav.news },
  ];

  return (
    <nav
      style={{ borderBottom: "3px solid #F2B705" }}
      className="sticky top-0 z-50 bg-white"
    >
      <div className="max-w-[980px] mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-[60px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/LogoHenitsoa.png"
              alt="Logo Henitsoa"
              width={36}
              height={36}
              className="rounded-full"
            />
            <div className="leading-none">
              <div
                className="text-[10px] font-bold tracking-[0.1em] uppercase"
                style={{ color: "#2B3A2A", opacity: 0.45 }}
              >
                École Privée
              </div>
              <div
                className="text-[15px] tracking-tight mt-0.5"
                style={{ fontFamily: "var(--font-baloo), 'Baloo 2', sans-serif", color: "#C43B2C" }}
              >
                Henitsoa
              </div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-all duration-150 font-bold text-[13px] px-4 py-1.5 rounded-full"
                  style={{
                    fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                    background: pathname === link.href ? "#3E8FC1" : "transparent",
                    color: pathname === link.href ? "#fff" : "#2B3A2A",
                  }}
                  onMouseEnter={(e) => {
                    if (pathname !== link.href) {
                      (e.currentTarget as HTMLElement).style.background = "#3E8FC1";
                      (e.currentTarget as HTMLElement).style.color = "#fff";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (pathname !== link.href) {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                      (e.currentTarget as HTMLElement).style.color = "#2B3A2A";
                    }
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop right — lang switcher + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language toggle */}
            <div
              className="flex items-center rounded-full p-0.5"
              style={{ background: "rgba(43,58,42,0.07)" }}
            >
              {(["fr", "mg"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide transition-all duration-150"
                  style={{
                    fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                    background: lang === l ? "#fff" : "transparent",
                    color: lang === l ? "#2B3A2A" : "rgba(43,58,42,0.45)",
                    boxShadow: lang === l ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
                  }}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/inscription"
              className="text-[13px] font-bold px-5 py-2 rounded-full transition-all duration-150"
              style={{
                fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                background: "#F2B705",
                color: "#213B26",
                boxShadow: "0 3px 0 #B98E04",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 5px 0 #B98E04";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 3px 0 #B98E04";
              }}
            >
              {t.nav.admission}
            </Link>
            <Link
              href="/login"
              className="text-[13px] font-bold px-5 py-2 rounded-full text-white transition-all duration-150"
              style={{
                fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                background: "#C43B2C",
                boxShadow: "0 3px 0 #8B2A1F",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 5px 0 #8B2A1F";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 3px 0 #8B2A1F";
              }}
            >
              {t.nav.portal}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-[5px]"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            {([0, 1, 2] as const).map((i) => (
              <span
                key={i}
                className={`block h-[2px] rounded-full transition-all duration-300 ${
                  i === 0 ? (menuOpen ? "w-5 rotate-45 translate-y-[7px]" : "w-5") :
                  i === 1 ? (menuOpen ? "w-5 opacity-0" : "w-3.5") :
                              (menuOpen ? "w-5 -rotate-45 -translate-y-[7px]" : "w-5")
                }`}
                style={{ background: "#2B3A2A" }}
              />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-80 pb-5" : "max-h-0"
          }`}
        >
          <div
            className="border-t pt-3 flex flex-col gap-1"
            style={{ borderColor: "rgba(43,58,42,0.1)" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-[14px] font-bold transition-all duration-150"
                style={{
                  fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                  color: pathname === link.href ? "#C43B2C" : "rgba(43,58,42,0.7)",
                  background: "transparent",
                }}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-3 pt-2 flex flex-col gap-2">
              <Link
                href="/inscription"
                onClick={() => setMenuOpen(false)}
                className="block text-center py-2.5 rounded-full text-[14px] font-bold transition-colors duration-150"
                style={{
                  fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                  background: "#F2B705",
                  color: "#213B26",
                }}
              >
                {t.nav.admission}
              </Link>
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="block text-center py-2.5 rounded-full text-[14px] font-bold text-white transition-colors duration-150"
                style={{
                  fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                  background: "#C43B2C",
                }}
              >
                {t.nav.portal}
              </Link>
            </div>
            <div className="px-3 pt-2 flex gap-2">
              {(["fr", "mg"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className="flex-1 py-1.5 rounded-full text-[12px] font-bold transition-all duration-150"
                  style={{
                    fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                    background: lang === l ? "#2B3A2A" : "rgba(43,58,42,0.08)",
                    color: lang === l ? "#fff" : "rgba(43,58,42,0.5)",
                  }}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
