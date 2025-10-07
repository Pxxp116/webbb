import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Automatiza y optimiza tu negocio con Fluxo Services
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
        En Fluxo desarrollamos sistemas inteligentes para que tu negocio ahorre tiempo, mejore su gestión y ofrezca una experiencia moderna a sus clientes.
      </p>
      <a
        href="#productos"
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg transition"
      >
        Ver productos
      </a>
    </section>
  );
};

export default HeroSection;
