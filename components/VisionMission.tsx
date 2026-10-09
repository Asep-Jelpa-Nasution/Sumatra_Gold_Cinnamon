"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function VisionMission() {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-wood-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div className="bg-cream rounded-2xl p-8 shadow-md border border-wood-100">
          <div className="text-3xl mb-3">🎯</div>
          <h3 className="font-serif-display text-2xl font-bold text-wood-800 mb-3">
            {t.about.visionTitle}
          </h3>
          <p className="text-wood-700/90 leading-relaxed">{t.about.vision}</p>
        </div>
        <div className="bg-cream rounded-2xl p-8 shadow-md border border-wood-100">
          <div className="text-3xl mb-3">🌱</div>
          <h3 className="font-serif-display text-2xl font-bold text-wood-800 mb-3">
            {t.about.missionTitle}
          </h3>
          <ul className="space-y-3 text-wood-700/90">
            {t.about.mission.map((m, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-gold-600 font-bold">✓</span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}