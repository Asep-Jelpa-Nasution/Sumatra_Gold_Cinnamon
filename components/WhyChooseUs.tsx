"use client";

import { Leaf, Hand, Award, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [Leaf, Hand, Award, ShieldCheck];

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container-x">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold mb-4">
            Our Advantages
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-wood-900 leading-tight">
            {t.why.title}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.why.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={item.title}
                className="group relative p-8 rounded-2xl bg-wood-50 hover:bg-wood-900 transition-all duration-500 overflow-hidden"
              >
                {/* number watermark */}
                <div className="absolute -top-4 -right-2 font-serif text-7xl font-bold text-wood-900/[0.04] group-hover:text-gold-400/10 transition-colors">
                  0{i + 1}
                </div>

                <div className="relative w-12 h-12 rounded-xl bg-white group-hover:bg-gold-500/10 flex items-center justify-center mb-6 ring-1 ring-wood-200/50 group-hover:ring-gold-400/30 transition-all">
                  <Icon className="w-5 h-5 text-wood-700 group-hover:text-gold-400 transition-colors" />
                </div>

                <h3 className="relative font-serif text-xl font-semibold text-wood-900 group-hover:text-cream mb-3 transition-colors">
                  {item.title}
                </h3>
                <p className="relative text-sm text-wood-600 group-hover:text-wood-200/80 leading-relaxed transition-colors">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}