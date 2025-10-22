import { useRef } from "react";
import { ArrowRight, Bot, MessageCircle } from "lucide-react";

const HeroSection = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* === Fondo base: misma imagen === */}
      <div
        ref={bgRef}
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: "url('/backgrounds/fluxo-bg.webp') center/cover no-repeat",
          transform: "scale(1.03)",
          filter: "brightness(1.03)",
        }}
      />

      {/* === Tinte de color suave para integrar marca === */}
      <div
        className="absolute inset-0 -z-10 opacity-60 mix-blend-soft-light"
        style={{
          background:
            "radial-gradient(1200px 800px at 30% 40%, rgba(0,140,255,0.25), transparent 60%), radial-gradient(1000px 700px at 70% 60%, rgba(255,120,0,0.18), transparent 55%)",
        }}
      />

      {/* === OLAS animadas === */}
      <div className="hero-waves pointer-events-none" aria-hidden="true">
        {/* Capa 1 - Azul suave */}
        <svg className="wave wave-1" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="rgba(0,140,255,0.15)"
            d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,133.3C672,117,768,107,864,128C960,149,1056,203,1152,224C1248,245,1344,235,1392,229.3L1440,224L1440,0L0,0Z"
          ></path>
        </svg>

        {/* Capa 2 - Azul más visible */}
        <svg className="wave wave-2" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="rgba(0,140,255,0.25)"
            d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,160C840,160,960,192,1080,197.3C1200,203,1320,181,1380,170.7L1440,160L1440,0L0,0Z"
          ></path>
        </svg>

        {/* Capa 3 - Toque naranja marca */}
        <svg className="wave wave-3" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="rgba(255,122,0,0.16)"
            d="M0,192L80,197.3C160,203,320,213,480,218.7C640,224,800,224,960,202.7C1120,181,1280,139,1360,117.3L1440,96L1440,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* === Contenido principal === */}
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-hero text-primary mb-6">
              Software inteligente para negocios.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
              Fluxo. Tu negocio, sin pausas.
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-xl">
              Diseñamos, desarrollamos e implementamos herramientas y softwares
              que ayudan a tu negocio a trabajar de forma más eficiente e inteligente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/message/YC7W3UVLEHFKB1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Contactar <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://fluxogastrobot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2"
              >
                Probar Demo <Bot className="w-5 h-5" />
              </a>
            </div>
          </div>

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
                Chatbots inteligentes que atienden a tus clientes 24/7,
                automatizan reservas y gestionan consultas al instante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
