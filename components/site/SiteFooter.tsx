"use client";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "./LanguageContext";

export function SiteFooter() {
  const { t } = useLang();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/a-propos", label: t.nav.about },
    { href: "/actualites", label: t.nav.news },
    { href: "/login", label: t.nav.portal },
  ];

  return (
    <footer style={{ background: "#2C2C3A", color: "rgba(255,255,255,0.8)" }}>
      <div className="max-w-[980px] mx-auto px-6 sm:px-10 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Identity */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/LogoHenitsoa.png"
                alt="Logo Henitsoa"
                width={44}
                height={44}
                className="rounded-full"
                style={{ opacity: 0.9 }}
              />
              <div className="leading-tight">
                <div className="text-[11px] font-bold tracking-wide uppercase" style={{ color: "rgba(255,255,255,0.38)" }}>
                  École Privée
                </div>
                <div
                  className="text-[18px] mt-0.5"
                  style={{ fontFamily: "var(--font-fredoka), 'Fredoka One', cursive", color: "#FFD54F" }}
                >
                  Henitsoa
                </div>
              </div>
            </div>
            <p className="text-[13px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.45)" }}>
              {t.footer.tagline}
            </p>
            <p className="text-[11px] mt-2" style={{ color: "rgba(255,255,255,0.22)" }}>
              {t.footer.founded}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h5
              className="text-[11px] font-bold tracking-[0.12em] uppercase mb-5"
              style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
            >
              {t.footer.links}
            </h5>
            <ul className="space-y-3 list-none">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] transition-colors duration-150 hover:text-[#FFD54F]"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pedagogy */}
          <div>
            <h5
              className="text-[11px] font-bold tracking-[0.12em] uppercase mb-5"
              style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
            >
              {t.footer.pedagogy}
            </h5>
            <ul className="space-y-3 list-none">
              {t.footer.pedagogy_links.map((label) => (
                <li key={label}>
                  <span className="text-[14px]" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5
              className="text-[11px] font-bold tracking-[0.12em] uppercase mb-5"
              style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-nunito), 'Nunito', sans-serif" }}
            >
              {t.footer.contact}
            </h5>
            <p className="text-[14px] italic leading-[1.65]" style={{ color: "rgba(255,255,255,0.35)" }}>
              {t.footer.contact_placeholder}
            </p>
          </div>
        </div>

        <div className="border-t pt-6 text-center" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.25)" }}>
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
