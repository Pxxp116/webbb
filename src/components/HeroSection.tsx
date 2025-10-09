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
            <h1 className="text-hero text-primary mb-6">Software inteligente para negocios.</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
              Fluxo. Tu negocio, sin pausas.
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-xl">
              Diseñamos, desarrollamos e implementamos herramientas y softwares de optimización de tareas que ayudarán a tu negocio a trabajar de forma más eficiente e inteligente.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://wa.me/message/YC7W3UVLEHFKB1" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">Contactar<ArrowRight className="w-5 h-5" /></a>
              <a href="https://preview--gatrobot-999-lunes6-77548-81865-64714-11392.lovable.app/chatbot/a6697f05-6811-48dc-adc5-bdf585925c30" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2">Probar Demo<Bot className="w-5 h-5" /></a>
            </div>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="card-elevated bg-gradient-to-br from-white to-primary-light p-12 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-orange rounded-2xl flex items-center justify-center shadow-lg">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                Chatbot propio
              </h3>
              <p className="text-muted-foreground text-center">
                Chatbots inteligentes que atienden a tus clientes 24/7, automatizan reservas y gestionan consultas al instante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
