import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import PageHeader from "@/components/PageHeader";
import ProductGallery from "@/components/ProductGallery";

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Products"
          subtitle="Premium Grade AA Cinnamon Sticks & Derivatives"
          image="https://images.unsplash.com/photo-1622798337764-259682f03741?auto=format&fit=crop&w=1920&q=85"
        />
        <Products />
        <ProductGallery />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
}