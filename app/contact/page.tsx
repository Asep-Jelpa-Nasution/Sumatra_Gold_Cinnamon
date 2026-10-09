import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Contact"
          subtitle="Hubungi tim kami — kami siap membantu kebutuhan ekspor Anda."
          image="https://images.unsplash.com/photo-1689157582456-2e17233e97f4?auto=format&fit=crop&w=1920&q=85"
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}