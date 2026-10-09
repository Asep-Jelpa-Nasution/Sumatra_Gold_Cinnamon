"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 bg-cream">
      <div className="container-x grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-gold-400/10 to-transparent rounded-3xl blur-2xl" />
          <div
            className="relative aspect-[4/5] rounded-3xl bg-cover bg-center shadow-2xl shadow-wood-900/10 ring-1 ring-wood-200/50"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1581600140682-d4e68c8cde32?auto=format&fit=crop&w=1200&q=85')",
            }}
          />
          <div className="absolute -bottom-6 -right-6 md:-right-10 bg-cream rounded-2xl p-6 shadow-xl ring-1 ring-wood-100 max-w-[200px]">
            <div className="text-4xl font-serif font-semibold text-wood-800">
              AA
            </div>
            <div className="text-xs uppercase tracking-[0.15em] text-wood-500 mt-1">
              Export Grade
            </div>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold mb-4">
            About Us
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-wood-900 leading-tight">
            {t.about.title}
          </h2>

          <div className="mt-8 space-y-5 text-wood-700/85 leading-relaxed">
            <p className="text-lg font-light">{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-wood-100">
            {[
              { value: "100%", label: "Organic" },
              { value: "20+", label: "Countries" },
              { value: "500+", label: "Farmers" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-serif text-3xl md:text-4xl font-medium text-wood-900">
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-[0.15em] text-wood-500 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}