import React from "react";
import { QrCode, MessageCircle } from "lucide-react";

const ProductsSection = () => {
  return (
    <section id="productos" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Servicios listos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* GastroBot */}
          <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-primary/5 flex items-center justify-center">
              <MessageCircle className="w-16 h-16 text-accent-orange" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              GastroBot
            </h3>
            <p className="text-gray-600 mb-4">
              Un chatbot único para cada restaurante, totalmente configurable
              desde su Dashboard. Controla todo lo que dice el bot y recibe en
              tiempo real las reservas y pedidos de tus clientes.
            </p>
          </div>

          {/* Split QR */}
          <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-primary/5 flex items-center justify-center">
              <QrCode className="w-16 h-16 text-accent-orange" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Split QR
            </h3>
            <p className="text-gray-600 mb-4">
              Asigna un QR a cada mesa y permite a los comensales escanearlo
              para pagar al instante. Cada persona puede abonar su parte o
              dividir la cuenta, ya sea con tarjeta o efectivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
