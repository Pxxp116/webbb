
import { MessageSquare, Clock, Users, CheckCircle } from "lucide-react";

const AutomationSection = () => {
  const benefits = [
    { icon: MessageSquare, text: "Respuestas automáticas en WhatsApp" },
    { icon: Clock, text: "Disponible 24 horas, 7 días a la semana" },
    { icon: Users, text: "Gestión de múltiples conversaciones" },
  ];

  const checkpoints = [
    "Respuestas inteligentes y rápidas",
    "Reservas y citas automatizadas",
    "Integración sin complicaciones",
  ];

  return (
    <section id="automation" className="section-container py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: copy & bullets */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary">Automatiza tareas repetitivas</h2>
          <p className="mt-4 text-muted-foreground max-w-prose">
            Nuestros chatbots funcionan en WhatsApp, responden al instante,
            gestionan reservas y atienden a tus clientes incluso cuando no estás.
          </p>

          <div className="mt-8 space-y-4">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center">
                  <b.icon className="w-5 h-5 text-accent-orange" />
                </div>
                <span className="font-medium text-foreground/90">{b.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {checkpoints.map((t, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-accent-orange" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: device card with GIF */}
        <div className="relative">
          <div className="card-elevated bg-white/80 rounded-3xl p-4 border border-border shadow-sm">
            <img
              src="/assets/whatsapp-demo.gif"
              alt="Demostración de conversación en WhatsApp"
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* Floating deco */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent-orange rounded-2xl flex items-center justify-center shadow-lg">
            <Clock className="w-8 h-8 text-white" />
          </div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
            <Users className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;
