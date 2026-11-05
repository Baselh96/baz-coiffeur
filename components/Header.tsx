// src/components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { useTheme } from "next-themes";
import { SALON_DATA } from "@/data/salonData";
import { useLanguage } from "./LanguageContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { locale, setLocale, t } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const [activeHash, setActiveHash] = useState("");

  const isOverHero = pathname === "/";

  useEffect(() => {
    setMounted(true);
    const el = document.getElementById("services");
    if (!el || pathname !== "/") return;
    const obs = new IntersectionObserver(
      ([entry]) => setActiveHash(entry.isIntersecting ? "#services" : ""),
      { threshold: 0.1, rootMargin: "-80px 0px -60% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [pathname]);

  const navLinks = [
    { name: t("header.home"), href: "/" },
    { name: t("header.services"), href: "/#services" },
    { name: t("header.gallery"), href: "/galerien" },
    { name: t("header.contact"), href: "/kontakt" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" && activeHash === "";
    if (href === "/#services") return activeHash === "#services";
    return pathname === href;
  };

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);

    if (pathname !== "/") {
      router.push("/#services");
      return;
    }

    const el = document.getElementById("services");
    if (el) {
      const headerOffset = 80;
      const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      window.history.pushState(null, "", "#services");
      setActiveHash("#services");
    }
  };

  return (
    <header
      className={`top-0 z-50 w-full ${isOverHero ? "absolute bg-transparent" : "sticky bg-white/80 dark:bg-neutral-950/80 backdrop-blur-2xl border-b border-black/[0.06] dark:border-white/[0.06]"}`}
    >
      <div className="max-w-5xl mx-auto px-6 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <div className="relative h-26 w-15 -my-2">
            <Image
              src="/images/logo.png"
              alt={SALON_DATA.name}
              fill
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => {
            const rawHref = idx === 0 ? "/" : idx === 1 ? "/#services" : idx === 2 ? "/galerien" : "/kontakt";
            const active = isActive(rawHref);
            const isServices = rawHref === "/#services";

            return isServices ? (
              <a
                key={link.name}
                href={rawHref}
                onClick={handleServicesClick}
                className={`relative py-2 text-[13.5px] font-medium tracking-wide transition-colors group cursor-pointer
                  ${isOverHero ? (active ? "text-white" : "text-white/70 hover:text-white") : "text-black dark:text-white"}`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-0.5 h-[2px] bg-gold-custom transition-all duration-500 ${active ? "w-full opacity-100 shadow-[0_0_8px_rgba(212,175,55,0.6)]" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-60"}`}
                />
              </a>
            ) : (
              <Link
                key={link.name}
                href={rawHref}
                className={`relative py-2 text-[13.5px] font-medium tracking-wide transition-colors group
                  ${isOverHero ? (active ? "text-white" : "text-white/70 hover:text-white") : "text-black dark:text-white"}`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-0.5 h-[2px] bg-gold-custom transition-all duration-500 ${active ? "w-full opacity-100 shadow-[0_0_8px_rgba(212,175,55,0.6)]" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-60"}`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop Controls (Theme Switcher & Language Dropdown) */}
        <div className="hidden md:flex items-center gap-3">
          {mounted && (
            <>
              {/* Language Switcher */}
              <button
                onClick={() => setLocale(locale === "de" ? "en" : "de")}
                className={`px-3 h-8 rounded-full flex items-center gap-1.5 text-xs font-semibold border transition ${
                  isOverHero
                    ? "bg-white/10 text-white border-white/10 hover:bg-white/20"
                    : "bg-black/[0.05] dark:bg-white/[0.08] border-black/[0.08] text-black dark:text-white hover:bg-black/[0.08]"
                }`}
                title="Sprache wechseln / Change language"
              >
                <Globe className="w-3.5 h-3.5 text-gold-custom" />
                <span>{locale.toUpperCase()}</span>
              </button>

              {/* Theme Switcher */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`w-8 h-8 rounded-full flex items-center justify-center border transition ${isOverHero ? "bg-white/10 text-white border-white/10" : "bg-black/[0.05] dark:bg-white/[0.08] border-black/[0.08] text-black dark:text-white"}`}
              >
                {theme === "dark" ? (
                  <Sun className="w-3.5 h-3.5" />
                ) : (
                  <Moon className="w-3.5 h-3.5" />
                )}
              </button>
            </>
          )}
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          {mounted && (
            <>
              {/* Mobile Language Switcher */}
              <button
                onClick={() => setLocale(locale === "de" ? "en" : "de")}
                className={`px-2.5 h-8 rounded-full flex items-center gap-1 text-xs font-semibold border ${
                  isOverHero
                    ? "text-white border-white/20 bg-white/10 backdrop-blur-md"
                    : "text-black dark:text-white border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.06]"
                }`}
              >
                <Globe className="w-3.5 h-3.5 text-gold-custom" />
                <span>{locale.toUpperCase()}</span>
              </button>

              {/* Mobile Theme Switcher */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`w-8 h-8 rounded-full flex items-center justify-center border ${isOverHero ? "text-white border-white/20 bg-white/10 backdrop-blur-md" : "text-black dark:text-white border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.06]"}`}
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>
            </>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 -mr-2 bg-transparent"
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${isOverHero ? "text-white" : "text-black dark:text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isOverHero ? "text-white" : "text-black dark:text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-[68px] inset-x-3 bg-white dark:bg-neutral-900 rounded-[24px] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-black/5 dark:border-white/10">
          {navLinks.map((link, idx) => {
            const rawHref = idx === 0 ? "/" : idx === 1 ? "/#services" : idx === 2 ? "/galerien" : "/kontakt";
            const active = isActive(rawHref);
            const isServices = rawHref === "/#services";

            return isServices ? (
              <a
                key={link.name}
                href={rawHref}
                onClick={handleServicesClick}
                className={`relative flex items-center px-5 py-3.5 text-[15px] font-medium rounded-full transition cursor-pointer ${active ? "text-black dark:text-white bg-black/[0.04] dark:bg-white/[0.06]" : "text-black/70 dark:text-white/70"}`}
              >
                {link.name}
                {active && (
                  <span className="absolute left-5 bottom-2 w-8 h-[2px] bg-gold-custom shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                )}
              </a>
            ) : (
              <Link
                key={link.name}
                href={rawHref}
                onClick={() => setIsOpen(false)}
                className={`relative flex items-center px-5 py-3.5 text-[15px] font-medium rounded-full transition ${active ? "text-black dark:text-white bg-black/[0.04] dark:bg-white/[0.06]" : "text-black/70 dark:text-white/70"}`}
              >
                {link.name}
                {active && (
                  <span className="absolute left-5 bottom-2 w-8 h-[2px] bg-gold-custom shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                )}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}

