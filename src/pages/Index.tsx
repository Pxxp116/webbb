import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import SolutionsSection from "@/components/SolutionsSection";
import AutomationSection from "@/components/AutomationSection";
import BenefitsSection from "@/components/BenefitsSection";
import PlansSection from "@/components/PlansSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <HeroSection />
        <ProductsSection /> {/* 👈 Justo debajo del Hero */}
        <SolutionsSection />
        <AutomationSection />
        <BenefitsSection />
        <PlansSection />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
