"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    console.log("Contact form:", form);
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  const inputCls =
    "w-full px-4 py-3 rounded-lg border border-wood-200 bg-white text-wood-800 placeholder:text-wood-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition";

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-10">
        {/* Info Kontak */}
        <aside className="md:col-span-2 space-y-6">
          <h2 className="font-serif-display text-3xl font-bold text-wood-800 mb-6">
            {t.contact.title}
          </h2>

          <InfoCard
            icon={<Mail className="w-5 h-5 text-gold-600" />}
            label={t.contact.emailLabel}
            value="hello@sumatragoldcinnamon.com"
          />
          <InfoCard
            icon={<Phone className="w-5 h-5 text-gold-600" />}
            label={t.contact.phoneLabel}
            value="+62 812 3456 7890"
          />
          <InfoCard
            icon={<MapPin className="w-5 h-5 text-gold-600" />}
            label={t.contact.addressLabel}
            value="Padang, West Sumatra, Indonesia"
          />
          <InfoCard
            icon={<Clock className="w-5 h-5 text-gold-600" />}
            label={t.contact.hoursLabel}
            value={t.contact.hours}
          />
        </aside>

        {/* Form Kontak */}
        <div className="md:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="bg-wood-50 rounded-2xl p-8 border border-wood-100 shadow-md space-y-4"
          >
            {sent && (
              <div className="flex items-center gap-2 p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm">
                <CheckCircle2 className="w-5 h-5" />
                {t.contact.success}
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-4">
              <input
                className={inputCls}
                placeholder={t.contact.namePlaceholder}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                type="email"
                className={inputCls}
                placeholder={t.contact.emailPlaceholder}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <input
              className={inputCls}
              placeholder={t.contact.subjectPlaceholder}
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
            />
            <textarea
              rows={5}
              className={inputCls}
              placeholder={t.contact.messagePlaceholder}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-600 text-wood-900 font-bold transition shadow-md"
            >
              <Send className="w-4 h-4" />
              {t.contact.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-4 p-4 rounded-xl bg-wood-50 border border-wood-100">
      <div className="w-10 h-10 rounded-full bg-gold-500/15 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold text-wood-500 uppercase tracking-wider">
          {label}
        </p>
        <p className="text-wood-800 font-medium mt-0.5">{value}</p>
      </div>
    </div>
  );
}