import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SampleForm from "@/components/SampleForm";

export default function RequestSamplePage() {
  return (
    <>
      <Navbar />
      <main className="py-16 md:py-24 bg-wood-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          <SampleForm />
        </div>
      </main>
      <Footer />
    </>
  );
}