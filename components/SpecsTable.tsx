"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function SpecsTable() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-wood-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-serif-display text-3xl md:text-4xl font-bold text-wood-800 text-center mb-4">
          {t.specs.title}
        </h2>
        <p className="text-center text-wood-600 mb-12">{t.specs.subtitle}</p>

        <div className="overflow-hidden rounded-2xl border border-wood-200 bg-cream shadow-md">
          <table className="w-full">
            <thead className="bg-wood-800 text-cream">
              <tr>
                <th className="text-left px-6 py-4 font-semibold text-sm uppercase tracking-wider">
                  {t.specs.columnParam}
                </th>
                <th className="text-left px-6 py-4 font-semibold text-sm uppercase tracking-wider">
                  {t.specs.columnValue}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-wood-100">
              {t.specs.rows.map((row, i) => (
                <tr
                  key={i}
                  className="hover:bg-wood-50 transition"
                >
                  <td className="px-6 py-4 font-semibold text-wood-700">
                    {row.param}
                  </td>
                  <td className="px-6 py-4 text-wood-600">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Certifications */}
        <div className="mt-12 text-center">
          <h3 className="font-serif-display text-2xl font-bold text-wood-800 mb-6">
            {t.specs.certTitle}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {t.specs.certifications.map((c, i) => (
              <span
                key={i}
                className="px-5 py-2.5 rounded-full bg-gold-500/15 border border-gold-400/40 text-gold-600 text-sm font-semibold"
              >
                ✓ {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}