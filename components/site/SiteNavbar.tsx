"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "./LanguageContext";

interface SiteNavbarProps {
  heroDark?: boolean;
}

export function SiteNavbar({ heroDark = false }: SiteNavbarProps) {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLight = heroDark && !scrolled && !menuOpen;

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/a-propos", label: t.nav.about },
    { href: "/actualites", label: t.nav.news },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-white/90 backdrop-blur-xl border-b border-[#1D1D1F]/8"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[980px] mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-[44px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/LogoHenitsoa.png"
              alt="Logo"
              width={28}
              height={28}
              className="rounded-full"
            />
            <div className="leading-none">
              <div className={`text-[9px] font-medium tracking-[0.12em] uppercase transition-colors duration-300 ${isLight ? "text-white/50" : "text-[#1D1D1F]/40"}`}>
                École Privée
              </div>
              <div className="text-[12px] font-bold text-[#C9A84C] tracking-tight mt-0.5">
                Henitsoa
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[12px] transition-colors duration-200 tracking-wide ${
                  pathname === link.href
                    ? "text-[#C9A84C] font-semibold"
                    : isLight
                    ? "text-white/65 hover:text-white"
                    : "text-[#1D1D1F]/55 hover:text-[#1D1D1F]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right */}
          <div className="hidden md:flex items-center gap-4">
            <div className={`flex items-center rounded-full p-0.5 ${isLight ? "bg-white/10" : "bg-[#1D1D1F]/6"}`}>
              {(["fr", "mg"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide transition-all duration-200 ${
                    lang === l
                      ? "bg-white text-[#1D1D1F] shadow-sm"
                      : isLight
                      ? "text-white/45 hover:text-white/75"
                      : "text-[#1D1D1F]/40 hover:text-[#1D1D1F]/70"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <Link
              href="/login"
              className={`text-[12px] font-medium px-4 py-1.5 rounded-full transition-all duration-200 ${
                isLight
                  ? "border border-white/25 text-white/80 hover:bg-white/15 hover:text-white"
                  : "bg-[#0071e3] text-white hover:bg-[#0077ed]"
              }`}
            >
              {t.nav.portal}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-[5px]"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block h-px rounded-full transition-all duration-300 ${
                  isLight ? "bg-white" : "bg-[#1D1D1F]"
                } ${
                  i === 0
                    ? menuOpen ? "w-5 rotate-45 translate-y-[6px]" : "w-5"
                    : i === 1
                    ? menuOpen ? "w-5 opacity-0" : "w-3.5"
                    : menuOpen ? "w-5 -rotate-45 -translate-y-[6px]" : "w-5"
                }`}
              />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-80 pb-5" : "max-h-0"
          }`}
        >
          <div className="border-t border-[#1D1D1F]/8 pt-3 flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-2.5 rounded-xl text-[13px] tracking-wide transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[#C9A84C] font-semibold"
                    : "text-[#1D1D1F]/65 hover:text-[#1D1D1F] hover:bg-[#1D1D1F]/4"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-3 pt-2 pb-1">
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="bg-[#0071e3] text-white block text-center py-2.5 rounded-full text-[13px] font-medium hover:bg-[#0077ed] transition-colors duration-200"
              >
                {t.nav.portal}
              </Link>
            </div>
            <div className="px-3 flex gap-2 pt-1.5">
              {(["fr", "mg"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-4 py-1.5 rounded-full text-[11px] font-bold transition-all duration-200 ${
                    lang === l ? "bg-[#1D1D1F] text-white" : "bg-[#1D1D1F]/8 text-[#1D1D1F]/50"
                  }`}
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
