"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/products", label: t.nav.products },
    { href: "/specifications", label: t.nav.specs },
    { href: "/request-sample", label: t.nav.sample },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/80 backdrop-blur-xl border-b border-wood-100 shadow-[0_1px_0_rgba(0,0,0,0.02)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 via-gold-500 to-wood-600 shadow-md ring-1 ring-gold-300/50 group-hover:scale-105 transition-transform" />
          <div className="leading-none">
            <div className="font-serif text-lg font-semibold text-wood-800 tracking-tight">
              Sumatra Gold
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-wood-500 mt-0.5">
              Cinnamon Co.
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative px-4 py-2 text-sm font-medium text-wood-700 hover:text-wood-900 transition-colors group"
            >
              {l.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gold-500 group-hover:w-6 transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Language toggle — pill */}
          <div className="hidden sm:flex items-center rounded-full border border-wood-200 bg-white/60 backdrop-blur p-0.5 text-xs font-semibold">
            <button
              onClick={() => setLang("id")}
              className={`px-3 py-1.5 rounded-full transition-all ${
                lang === "id"
                  ? "bg-wood-800 text-cream shadow-sm"
                  : "text-wood-600 hover:text-wood-800"
              }`}
            >
              ID
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 rounded-full transition-all ${
                lang === "en"
                  ? "bg-wood-800 text-cream shadow-sm"
                  : "text-wood-600 hover:text-wood-800"
              }`}
            >
              EN
            </button>
          </div>

          {/* Mobile menu */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-wood-800 hover:bg-wood-100 rounded-full transition"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-cream border-t border-wood-100 px-6 py-6 space-y-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-wood-700 hover:text-wood-900 font-medium border-b border-wood-50 last:border-0"
            >
              {l.label}
            </Link>
          ))}
          {/* Mobile lang toggle */}
          <div className="sm:hidden flex gap-2 pt-4">
            <button
              onClick={() => setLang("id")}
              className={`flex-1 py-2 rounded-full text-sm font-semibold transition ${
                lang === "id"
                  ? "bg-wood-800 text-cream"
                  : "bg-wood-100 text-wood-700"
              }`}
            >
              Indonesia
            </button>
            <button
              onClick={() => setLang("en")}
              className={`flex-1 py-2 rounded-full text-sm font-semibold transition ${
                lang === "en"
                  ? "bg-wood-800 text-cream"
                  : "bg-wood-100 text-wood-700"
              }`}
            >
              English
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}