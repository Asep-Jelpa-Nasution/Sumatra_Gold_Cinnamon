"use client";

import { useLanguage } from "@/context/LanguageContext";

const products = [
{
key: "sticks",
image:
"https://images.unsplash.com/photo-1720806239923-05ea6c227595?auto=format&fit=crop&w=1000&q=85",
emoji: "🌿",
alt: "Batang kayu manis",
},
{
key: "powder",
image:
"https://images.unsplash.com/photo-1689157582456-2e17233e97f4?auto=format&fit=crop&w=1000&q=85",
emoji: "🥄",
alt: "Kayu manis dan bubuk rempah",
},
{
key: "broken",
image:
"https://images.unsplash.com/photo-1581600140682-d4e68c8cde32?auto=format&fit=crop&w=1000&q=85",
emoji: "🪵",
alt: "Aneka rempah di atas permukaan kayu",
},
] as const;

export default function ProductGallery() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-cream">
      <div className="container-x">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-wood-800 text-center mb-4">
          {t.productGallery.title}
        </h2>
        <p className="text-center text-wood-600 max-w-2xl mx-auto mb-14">
          {t.productGallery.subtitle}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => {
            const info = t.productGallery.items[p.key];
            return (
              <article
                key={p.key}
                className="group rounded-2xl overflow-hidden bg-wood-50 border border-wood-100 hover:shadow-xl transition"
              >
                <div
                  className="aspect-[4/3] bg-cover bg-center group-hover:scale-105 transition duration-500"
                  style={{ backgroundImage: `url('${p.image}')` }}
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{p.emoji}</span>
                    <h3 className="font-bold text-wood-800 text-lg">
                      {info.name}
                    </h3>
                  </div>
                  <p className="text-sm text-wood-600 leading-relaxed">
                    {info.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}