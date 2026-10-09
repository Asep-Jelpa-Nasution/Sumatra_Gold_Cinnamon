"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function Timeline() {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-serif-display text-3xl md:text-4xl font-bold text-wood-800 text-center mb-14">
          {t.about.timelineTitle}
        </h2>
        <div className="relative border-l-2 border-gold-400 pl-8 space-y-10">
          {t.about.timeline.map((item, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[42px] w-5 h-5 rounded-full bg-gold-500 border-4 border-cream" />
              <p className="text-sm font-bold text-gold-600 tracking-wider">
                {item.year}
              </p>
              <h3 className="font-bold text-wood-800 mt-1">{item.title}</h3>
              <p className="text-wood-600 text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}