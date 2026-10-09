"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Products() {
  const { t } = useLanguage();

  const specs = [
    { label: t.products.details.length, value: t.products.values.length },
    { label: t.products.details.moisture, value: t.products.values.moisture },
    { label: t.products.details.color, value: t.products.values.color },
    { label: t.products.details.aroma, value: t.products.values.aroma },
    { label: t.products.details.oil, value: t.products.values.oil },
    { label: t.products.details.packaging, value: t.products.values.packaging },
  ];

  return (
    <section id="products" className="py-24 md:py-32 bg-wood-50">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold mb-4">
            {t.products.title}
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-wood-900 leading-tight">
            {t.products.subtitle}
          </h2>
          <p className="mt-6 text-lg text-wood-700/85 leading-relaxed font-light">
            {t.products.desc}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-2 relative">
            <div
              className="aspect-[4/5] rounded-3xl bg-cover bg-center shadow-2xl shadow-wood-900/10 ring-1 ring-wood-200/50"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1622798337764-259682f03741?auto=format&fit=crop&w=1000&q=85')",
              }}
            />
          </div>

          <div className="lg:col-span-3">
            <div className="bg-cream rounded-2xl p-8 md:p-10 shadow-sm ring-1 ring-wood-100">
              <div className="text-xs uppercase tracking-[0.2em] text-wood-500 font-semibold mb-6">
                Technical Specifications
              </div>
              <dl className="divide-y divide-wood-100">
                {specs.map((s) => (
                  <div
                    key={s.label}
                    className="py-5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2"
                  >
                    <dt className="text-sm font-medium text-wood-600 uppercase tracking-wider">
                      {s.label}
                    </dt>
                    <dd className="text-wood-900 font-medium text-right">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}