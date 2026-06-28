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
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-16">

          {/* Identity */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/LogoHenitsoa.png"
                alt="Logo Henitsoa"
                width={48}
                height={48}
                className="rounded-full opacity-85"
              />
              <div className="leading-tight">
                <div className="text-xs font-medium text-white/35 tracking-wide">École Privée</div>
                <div className="text-sm font-bold text-[#C9A84C] mt-0.5">Henitsoa</div>
              </div>
            </div>
            <p className="text-sm text-white/35 italic leading-[1.65] mb-3">
              &ldquo;{t.footer.tagline}&rdquo;
            </p>
            <p className="text-xs text-white/20">{t.footer.founded}</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/28 mb-6">
              {t.footer.links}
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/28 mb-6">
              {t.footer.contact}
            </h3>
            <p className="text-sm text-white/25 italic leading-[1.65]">{t.footer.contact_placeholder}</p>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8">
          <p className="text-xs text-white/20 text-center">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
