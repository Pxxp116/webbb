import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="container mx-auto px-6 py-32 md:py-40 flex flex-col md:flex-row items-center justify-between">
        {/* Texto principal */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Automatización inteligente <br /> para negocios.
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-xl">
            Fluxo. Tu negocio, sin pausas. <br />
            Diseñamos, desarrollamos e implementamos herramientas de
            automatización que te ayudarán a trabajar de forma más inteligente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contacto"
              className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors inline-flex items-center justify-center gap-2"
            >
              Contactar <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#demo"
              className="border border-gray-300 px-6 py-3 rounded-full font-semibold text-gray-800 hover:bg-gray-100 transition-colors"
            >
              Probar Demo
            </a>
          </div>
        </div>

        {/* Imagen lateral (mantén tu imagen original) */}
        <div className="flex-1 flex justify-center mt-16 md:mt-0">
          <img
            src="/images/hero-illustration.png"
            alt="Automatización Inteligente"
            className="max-w-md w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
