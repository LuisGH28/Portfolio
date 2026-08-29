"use client";

import { Github, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { links } from "@/data/site";
import type { Locale, Messages } from "@/data/i18n";

type NavbarProps = {
  locale: Locale;
  messages: Messages;
};

export function Navbar({ locale, messages }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("work");
  const pathname = usePathname();

  const navItems = useMemo(
    () => [
      { label: messages.nav.projects, href: "#work", id: "work" },
      { label: messages.nav.experience, href: "#experience", id: "experience" },
      { label: messages.nav.education, href: "#education", id: "education" },
      { label: messages.nav.research, href: "#research", id: "research" },
      { label: messages.nav.about, href: "#about", id: "about" },
      { label: messages.nav.contact, href: "#contact", id: "contact" }
    ],
    [messages]
  );

  const otherLocale = locale === "en" ? "es" : "en";
  const localizedPath = pathname.replace(/^\/(en|es)/, "") || "";
  const languageHref = `/${otherLocale}${localizedPath}`;

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.35, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navItems]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.04] bg-ink/74 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10 lg:px-16">
        <Link
          href={`/${locale}`}
          className="font-mono text-2xl font-extrabold tracking-normal text-white outline-none transition focus-visible:text-accent"
          aria-label="Luis González"
        >
          L<span className="text-accent">G</span>.
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              className="group relative py-3 outline-none transition hover:text-white focus-visible:text-white"
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-accent transition-all ${
                  active === item.id ? "w-8 shadow-[0_0_14px_rgba(47,128,255,0.9)]" : "w-0"
                }`}
              />
            </Link>
          ))}
          <Link
            href={languageHref}
            className="font-mono text-xs text-zinc-400 outline-none transition hover:text-white focus-visible:text-white"
          >
            {locale.toUpperCase()} / {otherLocale.toUpperCase()}
          </Link>
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 text-white outline-none transition hover:text-accent focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={messages.nav.github}
          >
            <Github size={23} />
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-white outline-none transition hover:border-accent focus-visible:ring-2 focus-visible:ring-accent md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="sr-only">{messages.nav.menu}</span>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen ? (
        <nav
          id="mobile-menu"
          className="border-t border-line bg-ink px-6 py-5 text-sm text-zinc-300 md:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className="py-2 outline-none transition hover:text-white focus-visible:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={languageHref}
              className="py-2 font-mono text-xs text-zinc-400"
              onClick={() => setIsOpen(false)}
            >
              {locale.toUpperCase()} / {otherLocale.toUpperCase()}
            </Link>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 py-2 text-white"
            >
              <Github size={18} />
              {messages.nav.github}
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
