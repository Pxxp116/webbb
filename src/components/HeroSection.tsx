import { ArrowRight, Bot, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* === Fondo animado Kling — fix definitivo iOS === */}
      <div
        className="absolute inset-0 -z-10 overflow-hidden"
        style={{ transform: "scale(1.05)", filter: "brightness(1.05)" }}
      >
        <video
          id="fluxo-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          tabIndex={-1}
          className="w-full h-full object-cover pointer-events-none select-none"
          style={{
            objectFit: "cover",
            WebkitTransform: "translateZ(0)",
            WebkitAppearance: "none",
            backgroundColor: "transparent",
            display: "block",
          }}
          onLoadedData={(e) => {
            const vid = e.currentTarget;
            vid.setAttribute("playsinline", "true");
            vid.muted = true;
            vid.play().catch(() => {});
          }}
        >
          <source src="/backgrounds/fluxo-bg-animated.mp4" type="video/mp4" />
        </video>

        {/* fallback estático */}
        <noscript>
          <img
            src="/backgrounds/fluxo-bg.webp"
            alt="Fluxo background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </noscript>
      </div>

      {/* === Tinte de color suave para integrar la marca === */}
      <div
        className="absolute inset-0 -z-10 opacity-60 mix-blend-soft-light"
        style={{
          background:
            "radial-gradient(1200px 800px at 30% 40%, rgba(0,140,255,0.25), transparent 60%), radial-gradient(1000px 700px at 70% 60%, rgba(255,120,0,0.18), transparent 55%)",
        }}
      />

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
              de optimización de tareas que ayudarán a tu negocio a trabajar de
              forma más eficiente e inteligente.
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
