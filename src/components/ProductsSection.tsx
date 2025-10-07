import React from "react";

const ProductsSection = () => {
  return (
    <section id="productos" className="py-20 bg-gray-50 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
        Nuestros productos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">

        {/* GastroBot */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
          <img
            src="/images/gastrobot.png"
            alt="GastroBot"
            className="w-24 h-24 mb-4"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            GastroBot
          </h3>
          <p className="text-gray-600 mb-4">
            Chatbot con dashboard propio para restaurantes. Gestiona reservas, pedidos y clientes desde un panel intuitivo y sin necesidad de WhatsApp.
          </p>
          <a
            href="https://fluxoservices.com/gastrobot"
            className="text-blue-600 hover:underline font-medium"
          >
            Ver más →
          </a>
        </div>

        {/* SplitQR */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
          <img
            src="/images/splitqr.png"
            alt="SplitQR"
            className="w-24 h-24 mb-4"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            SplitQR
          </h3>
          <p className="text-gray-600 mb-4">
            Sistema de pagos inteligentes que permite dividir cuentas o cobrar fácilmente mediante QR, integrado con tus métodos de pago preferidos.
          </p>
          <a
            href="https://fluxoservices.com/splitqr"
            className="text-blue-600 hover:underline font-medium"
          >
            Ver más →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

