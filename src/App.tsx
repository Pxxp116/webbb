import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SolutionsSection from "./components/SolutionsSection";
import AutomationSection from "./components/AutomationSection";
import SplitQRSection from "./components/SplitQRSection";
import BenefitsSection from "./components/BenefitsSection";
import PlansSection from "./components/PlansSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import ProductsSection from "./components/ProductsSection";


function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <SolutionsSection />
      <AutomationSection />
      <SplitQRSection />
      <BenefitsSection />
      <PlansSection />
      <FAQSection />
      <Footer />
      <ProductsSection />
    </div>
  );
}

export default App;
