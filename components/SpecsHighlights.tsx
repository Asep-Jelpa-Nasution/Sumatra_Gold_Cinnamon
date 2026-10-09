"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function SpecsHighlights() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-cream">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {t.specsHighlights.map((h, i) => (
          <div
            key={i}
            className="text-center p-6 rounded-2xl bg-wood-50 border border-wood-100"
          >
            <p className="text-3xl md:text-4xl font-bold text-gold-600">
              {h.value}
            </p>
            <p className="text-sm text-wood-600 mt-2 font-medium">{h.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}