"use client";

import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-wood-900 via-wood-800 to-wood-700" />
      <div
        className="absolute inset-0 opacity-25 bg-cover bg-center"
        style={{
          backgroundImage:
             "url('https://images.unsplash.com/photo-1720806239923-05ea6c227595?auto=format&fit=crop&w=1920&q=85')",
        }}
      />
      <div className="absolute top-1/4 -right-40 w-[36rem] h-[36rem] rounded-full bg-gold-400/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-gold-500/10 blur-3xl" />

      <div className="relative container-x py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-400/30 bg-gold-400/5 backdrop-blur-sm mb-8">
            <Award className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-xs font-medium text-gold-300 tracking-[0.2em] uppercase">
              Premium Grade AA
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-cream leading-[1.05]">
            {t.hero.title}
          </h1>

          <p className="mt-8 text-lg md:text-xl text-wood-200/80 leading-relaxed max-w-2xl font-light">
            {t.hero.subtitle}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold-500 hover:bg-gold-400 text-wood-900 font-semibold text-sm tracking-wide transition-all hover:shadow-2xl hover:shadow-gold-500/20"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/request-sample"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-cream/20 text-cream hover:bg-cream/10 backdrop-blur-sm font-semibold text-sm tracking-wide transition-all"
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 text-xs text-wood-300/70 uppercase tracking-[0.15em]">
            <span>100% Organic</span>
            <span className="w-1 h-1 rounded-full bg-gold-400/50" />
            <span>Hand-Harvested</span>
            <span className="w-1 h-1 rounded-full bg-gold-400/50" />
            <span>Export Certified</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}