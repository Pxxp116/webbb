import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/HeroSection";
import Productos from "./components/ProductsSection";
import Automatizacion from "./components/AutomationSection";
import Beneficios from "./components/BenefitsSection";
import FAQ from "./components/FAQSection";
import MicroSolutionsRequest from "./components/MicroSolutionsRequest"; // 🧠 Nueva sección


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <section id="inicio">
            <Hero />
          </section>

          <section id="productos">
            <Productos />
          </section>

          {/* 💡 Nueva sección: Microsoluciones personalizadas */}
          <section id="microsoluciones">
            <MicroSolutionsRequest />
          </section>

          {/* 👇 Solo una vez esta sección */}
          <section id="automatizacion">
            <Automatizacion />
          </section>

          <section id="beneficios">
            <Beneficios />
          </section>



          <section id="faq">
            <FAQ />
          </section>
        </main>

        <Footer />
        {/* ❌ Eliminado <FooterLegal /> porque ahora se gestiona desde el footer azul */}
      </div>
    </Router>
  );
}

export default App;
