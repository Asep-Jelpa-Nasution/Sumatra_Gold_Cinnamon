import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SpecsTable from "@/components/SpecsTable";
import SpecsHighlights from "@/components/SpecsHighlights";

export default function SpecificationsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Specifications"
          subtitle="Grade AA Cinnamon Sticks — Technical Details & Quality Standards"
          image="https://images.unsplash.com/photo-1581600140682-d4e68c8cde32?auto=format&fit=crop&w=1920&q=85"
        />
        <SpecsHighlights />
        <SpecsTable />
      </main>
      <Footer />
    </>
  );
}