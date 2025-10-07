import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/HeroSection";
import Productos from "./components/ProductsSection";
import Soluciones from "./components/AutomationSection";
import Automatizacion from "./components/AutomationSection";
import Beneficios from "./components/BenefitsSection";
import Planes from "./components/PlansSection";
import FAQ from "./components/FAQSection";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <section id="inicio">
            <Hero />
          </section>

          {/* 👇 Sección Productos movida justo debajo del Hero */}
          <section id="productos">
            <Productos />
          </section>

          <section id="soluciones">
            <Soluciones />
          </section>

          <section id="automatizacion">
            <Automatizacion />
          </section>

          <section id="beneficios">
            <Beneficios />
          </section>

          <section id="planes">
            <Planes />
          </section>

          <section id="faq">
            <FAQ />
          </section>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
