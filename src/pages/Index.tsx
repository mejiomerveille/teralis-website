import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EngagementsSection from "@/components/EngagementsSection";
import ProductsSection from "@/components/ProductsSection";
import ArticulationsSection from "@/components/ArticulationsSection";
import B2BSection from "@/components/B2BSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <EngagementsSection />
    <ProductsSection />
    <ArticulationsSection />
    <B2BSection />
    <FAQSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
