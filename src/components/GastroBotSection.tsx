import React from "react";
import { QrCode, MessageCircle, Clock, Zap } from "lucide-react";

const GastroBotSection = () => {
  return (
    <section id="gastrobot" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* 🧠 Texto explicativo */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Gestiona reservas y pedidos sin esfuerzo
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            GastroBot automatiza la atención de tu restaurante. Atiende mensajes,
            toma reservas, confirma pedidos y responde consultas en tiempo real —
            todo mientras te concentras en tus clientes y tu negocio.
          </p>

          <ul className="space-y-4 text-left mb-8">
            <li className="flex items-center gap-3">
              <MessageCircle className="text-orange-500" />
              <span>Atiende a tus clientes por WhatsApp y web automáticamente</span>
            </li>
            <li className="flex items-center gap-3">
              <QrCode className="text-orange-500" />
              <span>Integra menús, reservas y pedidos desde un solo sistema</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="text-orange-500" />
              <span>Reduce tiempos de espera y errores en las reservas</span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-4 text-gray-700">
            <div className="flex items-center gap-2">
              <Zap className="text-orange-500" /> Automatización total
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-orange-500" /> Ahorro de tiempo
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="text-orange-500" /> Comunicación fluida
            </div>
          </div>

          <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-colors">
            🚀 Disponible ahora
          </button>
        </div>

        {/* 💬 Simulación de chat */}
        <div className="relative bg-white rounded-3xl shadow-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">GastroBot</h3>
            <p className="text-gray-600 mb-4">
              “Hola 👋 Soy tu asistente virtual. ¿Quieres reservar una mesa?”
            </p>

            <div className="rounded-xl border border-gray-200 p-4 text-left">
              <p className="text-gray-700 mb-2">🧍 Usuario: Me gustaría reservar para 4 personas mañana a las 20:00</p>
              <p className="text-gray-700 mb-2">🤖 GastroBot: Perfecto, he registrado tu reserva para mañana a las 20:00 🍽️</p>
              <p className="text-gray-500 text-sm">Reserva confirmada ✅</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GastroBotSection;
