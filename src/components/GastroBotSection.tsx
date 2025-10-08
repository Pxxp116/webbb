import { MessageCircle, CalendarCheck, Clock, CheckCircle } from "lucide-react";

const GastroBotSection = () => {
  const features = [
    { icon: MessageCircle, text: "Atiende automáticamente a tus clientes por WhatsApp y web" },
    { icon: CalendarCheck, text: "Gestiona reservas y confirma disponibilidad en tiempo real" },
    { icon: Clock, text: "Ahorra tiempo y reduce errores humanos en el proceso" },
  ];

  const benefits = [
    "Sin llamadas manuales",
    "Reservas confirmadas al instante",
    "Atención 24/7 sin esfuerzo",
    "Más tiempo para tus clientes",
  ];

  return (
    <section id="gastrobot" className="section-container py-24 bg-gradient-subtle">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Izquierda: texto y bullets */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary">
            Automatiza tus reservas con GastroBot
          </h2>
          <p className="mt-4 text-muted-foreground max-w-prose">
            GastroBot permite a tu restaurante gestionar reservas y pedidos de forma automática.
            Atiende mensajes, confirma mesas y responde consultas mientras tú te concentras en tu negocio.
          </p>

          <div className="mt-8 space-y-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-accent-orange" />
                </div>
                <span className="font-medium text-foreground/90">{f.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((t, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-accent-orange" />
                <span>{t}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="https://wa.me/message/YC7W3UVLEHFKB1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              ¡Ya disponible!
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Derecha: mockup igual al de SplitQR */}
        <div className="relative">
          <div className="card-elevated bg-white/80 rounded-3xl p-6 border border-border shadow-sm">
            <div className="bg-gradient-to-br from-primary-light to-accent-orange-light p-8 rounded-2xl">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                  <MessageCircle className="w-10 h-10 text-primary" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-primary text-center mb-4">
                GastroBot
              </h3>

              <div className="space-y-3 text-sm">
                <div className="bg-white/70 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Usuario</span>
                    <span className="text-gray-600">“Reserva para 4 mañana a las 20:00”</span>
                  </div>
                </div>
                <div className="bg-white/70 p-3 rounded-lg">
                  <div className="flex justify-between items-start">
                    <span className="font-medium text-gray-700">GastroBot</span>
                    <span className="text-gray-600 text-right">
                      Perfecto, mesa confirmada para 4 mañana a las 20:00. <br />
                      ¿Nombre y teléfono, por favor?
                    </span>
                  </div>
                </div>
                <div className="bg-accent-orange text-white p-3 rounded-lg font-medium text-center">
                  Reserva confirmada ✅
                </div>
              </div>
            </div>
          </div>

          {/* Decoraciones flotantes idénticas a SplitQR */}
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
