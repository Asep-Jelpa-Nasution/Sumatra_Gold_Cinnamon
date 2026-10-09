"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type FormData = {
  fullName: string;
  companyName: string;
  businessType: string;
  email: string;
  phone: string;
  address: string;
  message: string;
};

export default function SampleForm() {
  const { t } = useLanguage();
  const [data, setData] = useState<FormData>({
    fullName: "",
    companyName: "",
    businessType: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (k: keyof FormData, v: string) => {
    setData((prev) => ({ ...prev, [k]: v }));
    setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof FormData, string>> = {};
    (["fullName", "companyName", "businessType", "email", "phone", "address"] as const).forEach(
      (k) => {
        if (!data[k].trim()) e[k] = t.form.errors.required;
      }
    );
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      e.email = t.form.errors.email;
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    // Simulasi API call
    console.log("Sample request:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto bg-cream rounded-2xl p-12 text-center shadow-lg border border-gold-400/40">
        <CheckCircle2 className="w-16 h-16 text-gold-500 mx-auto mb-4" />
        <p className="text-xl font-semibold text-wood-800">{t.form.success}</p>
        <button
          onClick={() => {
            setSubmitted(false);
            setData({
              fullName: "",
              companyName: "",
              businessType: "",
              email: "",
              phone: "",
              address: "",
              message: "",
            });
          }}
          className="mt-6 text-sm font-semibold text-gold-600 hover:underline"
        >
          ← {t.form.submit}
        </button>
      </div>
    );
  }

  const inputCls =
    "w-full px-4 py-3 rounded-lg border border-wood-200 bg-white text-wood-800 placeholder:text-wood-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition";

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-2xl mx-auto bg-cream rounded-2xl p-8 md:p-10 shadow-lg border border-wood-100 space-y-5"
      noValidate
    >
      <div>
        <h2 className="font-serif-display text-2xl md:text-3xl font-bold text-wood-800">
          {t.form.title}
        </h2>
        <p className="text-wood-600 mt-2 text-sm">{t.form.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <Field label={t.form.fullName} error={errors.fullName}>
          <input
            className={inputCls}
            value={data.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            placeholder="John Doe"
          />
        </Field>
        <Field label={t.form.companyName} error={errors.companyName}>
          <input
            className={inputCls}
            value={data.companyName}
            onChange={(e) => update("companyName", e.target.value)}
            placeholder="PT. Example"
          />
        </Field>
      </div>

      <Field label={t.form.businessType} error={errors.businessType}>
        <select
          className={inputCls}
          value={data.businessType}
          onChange={(e) => update("businessType", e.target.value)}
        >
          <option value="">—</option>
          <option value="distributor">{t.form.businessOptions.distributor}</option>
          <option value="manufacturer">{t.form.businessOptions.manufacturer}</option>
          <option value="retailer">{t.form.businessOptions.retailer}</option>
          <option value="other">{t.form.businessOptions.other}</option>
        </select>
      </Field>

      <div className="grid md:grid-cols-2 gap-5">
        <Field label={t.form.email} error={errors.email}>
          <input
            type="email"
            className={inputCls}
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@company.com"
          />
        </Field>
        <Field label={t.form.phone} error={errors.phone}>
          <input
            className={inputCls}
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+62 ..."
          />
        </Field>
      </div>

      <Field label={t.form.address} error={errors.address}>
        <textarea
          rows={3}
          className={inputCls}
          value={data.address}
          onChange={(e) => update("address", e.target.value)}
          placeholder="Street, City, Country, ZIP"
        />
      </Field>

      <Field label={t.form.message}>
        <textarea
          rows={3}
          className={inputCls}
          value={data.message}
          onChange={(e) => update("message", e.target.value)}
        />
      </Field>

      <button
        type="submit"
        className="w-full py-3.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-600 text-wood-900 font-bold transition shadow-md"
      >
        {t.form.submit}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-wood-700 mb-1.5">{label}</span>
      {children}
      {error && <span className="block text-xs text-red-500 mt-1">{error}</span>}
    </label>
  );
}