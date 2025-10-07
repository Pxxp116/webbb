import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Productos from "./components/sections/Productos";
import Soluciones from "./components/sections/Soluciones";
import Automatizacion from "./components/sections/Automatizacion";
import Beneficios from "./components/sections/Beneficios";
import Planes from "./components/sections/Planes";
import FAQ from "./components/sections/FAQ";
import Contacto from "./components/sections/Contacto";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Secciones principales en el orden correcto */}
        <main className="flex-grow">
          <section id="inicio">
            <Hero />
          </section>

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

          <section id="contacto">
            <Contacto />
          </section>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
