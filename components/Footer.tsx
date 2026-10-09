"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-wood-900 text-wood-200 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute -top-40 left-1/4 w-[30rem] h-[30rem] rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />

      <div className="relative container-x pt-20 pb-10">
        {/* Top: brand + columns */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-wood-800">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 via-gold-500 to-wood-600 ring-1 ring-gold-300/30" />
              <div className="leading-none">
                <div className="font-serif text-lg font-semibold text-cream">
                  Sumatra Gold
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-wood-400 mt-0.5">
                  Cinnamon Co.
                </div>
              </div>
            </div>
            <p className="text-wood-300/70 leading-relaxed max-w-sm font-light">
              {t.footer.tagline}
            </p>
          </div>

          {/* Navigate */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-6">
              Navigate
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                ["/about", t.nav.about],
                ["/products", t.nav.products],
                ["/specifications", t.nav.specs],
                ["/request-sample", t.nav.sample],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-1 text-wood-300/80 hover:text-gold-400 transition-colors"
                  >
                    {label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-gold-400/70 flex-shrink-0" />
                <span className="text-wood-300/80">
                  admin@sumatragoldcinnamon.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-gold-400/70 flex-shrink-0" />
                <span className="text-wood-300/80">+62 882 1258 6046</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-gold-400/70 flex-shrink-0" />
                <span className="text-wood-300/80">
                  Padang, West Sumatra, Indonesia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-wood-400/70">
          <p>
            © {year} Sumatra Gold Cinnamon. {t.footer.rights}
          </p>
          <p className="uppercase tracking-[0.2em] text-[10px]">
            Premium Grade AA · Since 2015
          </p>
        </div>
      </div>
    </footer>
  );
}