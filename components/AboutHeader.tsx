"use client";
import PageHeader from "./PageHeader";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutHeader() {
  const { t } = useLanguage();
  return (
    <PageHeader
      title={t.nav.about}
      subtitle={t.about.p1.slice(0, 120) + "..."}
      image="/images/hero-cinnamon.jpg"
    />
  );
}