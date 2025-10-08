import { MessageCircle, CalendarCheck, Clock, CheckCircle, QrCode } from "lucide-react";

const GastroBotSection = () => {
  const features = [
    { icon: MessageCircle, text: "Atiende a tus clientes por WhatsApp y web automáticamente" },
    { icon: CalendarCheck, text: "Gestiona reservas y confirma disponibilidad en tiempo real" },
    { icon: QrCode, text: "Integra menús, pedidos y reservas en un solo sistema" },
  ];

  const benefits = [
    "Menos llamadas y mensajes manuales",
    "Cero dobles reservas",
    "Respuestas instantáneas 24/7",
    "Ahorro de tiempo del personal",
  ];

  return (
    <section id="gastrobot" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Columna izquierda: textos (MISMA jerarquía visual que SplitQR) */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground/90 mb-4">
            Gestiona reservas sin fricción
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            GastroBot automatiza la atención de tu restaurante: responde dudas, toma y confirma reservas,
            y coordina pedidos en tiempo real, para que tu equipo se concentre en la experiencia del cliente.
          </p>

          {/* Lista de pasos/funcionalidades */}
          <ul className="space-y-4 text-left mb-8">
            {features.map(({ icon: Icon, text }, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground/90">{text}</span>
              </li>
            ))}
          </ul>

          {/* Beneficios en grid (misma composición que SplitQR) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-foreground/90">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent-orange" />
                <span>{b}</span>
              </div>
            ))}
          </div>

          <a
            href="#contacto"
            className="inline-flex mt-8 bg-accent-orange hover:bg-accent-orange/90 text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            🚀 Ya disponible
          </a>
        </div>

        {/* Columna derecha: mockup (estilo gemelo al de SplitQR) */}
        <div className="relative">
          <div className="relative bg-white rounded-3xl shadow-xl border border-border overflow-hidden">
            <div className="bg-gradient-to-br from-primary-light to-accent-orange-light h-24 w-full" />

            <div className="p-6 space-y-4">
              <div className="w-14 h-14 -mt-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg">
                <MessageCircle className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-semibold text-foreground/90">GastroBot</h3>
              <p className="text-muted-foreground">
                Asistente virtual para reservas y pedidos en tu restaurante.
              </p>

              {/* Tarjeta tipo conversación/confirmación, con el mismo look de tarjetas de SplitQR */}
              <div className="space-y-3">
                <div className="bg-white/80 p-3 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Usuario</div>
                  <div className="text-foreground/90">“Reserva para 4 mañana a las 20:00”</div>
                </div>
                <div className="bg-white/80 p-3 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">GastroBot</div>
                  <div className="text-foreground/90">
                    Perfecto, mesa confirmada para 4 mañana a las 20:00. ¿Nombre y teléfono, por favor?
                  </div>
                </div>
                <div className="bg-primary text-white p-3 rounded-lg font-medium text-center">
                  Reserva confirmada ✅
                </div>
              </div>
            </div>
          </div>

          {/* Decoraciones flotantes (mismo patrón que SplitQR) */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent-orange rounded-2xl flex items-center justify-center shadow-lg">
            <Clock className="w-8 h-8 text-white" />
          </div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
            <CalendarCheck className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GastroBotSection;
