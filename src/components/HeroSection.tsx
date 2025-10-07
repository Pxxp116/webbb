import { ArrowRight, Bot, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative bg-gradient-subtle min-h-screen flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-hero text-primary mb-6">
              Automatizar y optimizar tareas repetitivas implementando sistemas en negocios.
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              En Fluxo Services construimos sistemas que eliminan el trabajo manual, 
              mejoran la experiencia del cliente y conectan tus operaciones en tiempo real.
            </p>

            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <a href="#productos" className="btn-primary rounded-full px-6 py-3 inline-flex items-center gap-2">
                Ver Productos <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#plans" className="btn-outline rounded-full px-6 py-3">
                Planes
              </a>
            </div>
          </div>

          {/* Side cards (mantiene estética, quitar WhatsApp Business) */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0">
            <div className="card-feature p-6">
              <div className="icon-circle mb-4">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">GastroBot</h3>
              <p className="text-muted-foreground text-center">
                Un chatbot único por restaurante, totalmente editable desde su Dashboard, 
                que actualiza reservas y pedidos en tiempo real.
              </p>
            </div>
            <div className="card-feature p-6">
              <div className="icon-circle mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Split QR</h3>
              <p className="text-muted-foreground text-center">
                Pagos ágiles por mesa: cada comensal paga lo suyo o se divide la cuenta. 
                Compatible con tarjeta y efectivo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
