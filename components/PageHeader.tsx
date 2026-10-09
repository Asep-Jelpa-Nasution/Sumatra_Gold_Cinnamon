"use client";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export default function PageHeader({ title, subtitle, image }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-wood-900 via-wood-700 to-wood-500" />
      {image && (
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        />
      )}
      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-24 text-center">
        <h1 className="font-serif-display text-4xl md:text-5xl font-bold text-cream">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-wood-100/90 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="mt-8 h-0.5 w-24 bg-gold-500 mx-auto" />
      </div>
    </section>
  );
}