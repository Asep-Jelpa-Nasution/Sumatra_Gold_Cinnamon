import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import PageHeader from "@/components/PageHeader";
import AboutHeader from "@/components/AboutHeader";
import VisionMission from "@/components/VisionMission";
import Timeline from "@/components/Timeline";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHeader />
        <About />
        <VisionMission />
        <Timeline />
      </main>
      <Footer />
    </>
  );
}