// src/components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon, Phone } from "lucide-react";
import { SALON_DATA } from "@/data/salonData";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Initialisiere Dark Mode State & Klasse
  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setIsDarkMode(true);
    } else {
      // Standardmäßig Dark Mode setzen für edles Design
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Dienstleistungen", href: "/#services" },
    { name: "Galerien", href: "/galerien" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/75 dark:bg-neutral-950/75 border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-wider text-gold dark:text-gold-light">
            {SALON_DATA.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-neutral-700 dark:text-neutral-200 hover:text-gold dark:hover:text-gold transition-colors font-medium text-sm"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons & Theme Switcher */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Theme umschalten"
            className="p-2.5 rounded-full text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            {isDarkMode ? <Sun className="w-5 h-5 text-gold-light" /> : <Moon className="w-5 h-5" />}
          </button>

          <a
            href={`tel:${SALON_DATA.phone}`}
            className="bg-gold hover:bg-gold-dark text-black font-semibold text-sm px-4 py-2.5 rounded-lg transition flex items-center gap-2 shadow-sm"
          >
            <Phone className="w-4 h-4" />
            <span>{SALON_DATA.phone}</span>
          </a>
        </div>

        {/* Burger Button (Mobil) */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Theme umschalten"
            className="p-2 rounded-full text-neutral-700 dark:text-neutral-200"
          >
            {isDarkMode ? <Sun className="w-5 h-5 text-gold-light" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menü öffnen"
            className="p-2 rounded-lg text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menü */}
      {isOpen && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-lg px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-neutral-700 dark:text-neutral-200 hover:text-gold dark:hover:text-gold text-base font-medium py-1 transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800">
            <a
              href={`tel:${SALON_DATA.phone}`}
              onClick={() => setIsOpen(false)}
              className="w-full bg-gold hover:bg-gold-dark text-black font-semibold text-center py-3 rounded-lg transition flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Anrufen ({SALON_DATA.phone})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}