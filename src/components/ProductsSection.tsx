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
            className="w-28 h-28 object-contain mb-4"
          />
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">GastroBot</h3>
          <p className="text-gray-600 mb-4 max-w-md">
            Un chatbot único para cada restaurante, totalmente configurable desde un Dashboard que damos a cada cliente.
            Desde ahí controlan todo lo que dice el bot, y el chatbot actualiza el dashboard con reservas, pedidos y más.
          </p>
          <a
            href="https://fluxoservices.com/gastrobot"
            className="text-blue-600 hover:underline font-medium"
          >
            Ver más →
          </a>
        </div>

        {/* Split QR */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
          <img
            src="/images/splitqr.png"
            alt="Split QR"
            className="w-28 h-28 object-contain mb-4"
          />
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Split QR</h3>
          <p className="text-gray-600 mb-4 max-w-md">
            Asigna un QR a cada mesa; cuando está activado con los productos de la mesa, los comensales lo escanean y pagan:
            cada uno lo suyo o dividiendo la cuenta, con tarjeta o en efectivo. Se vende por separado o junto a GastroBot.
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
