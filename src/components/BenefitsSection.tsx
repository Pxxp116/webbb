import { Users, Award, Settings, HeadphonesIcon, Smartphone, Clock } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Users,
      number: "01",
      title: "Gana más clientes",
      description: "Con herramientas como GastroBot o SplitQR, conviertes cada punto de contacto en una oportunidad real. Estás presente donde tus clientes ya están, sin perder ninguna venta por falta de respuesta o agilidad."
    },
    {
      icon: Award,
      number: "02", 
      title: "Mejora tu imagen profesional",
      description: "Tus sistemas reflejan innovación y confianza. Desde asistentes digitales hasta paneles de gestión visuales, cada solución de Fluxo Services eleva la percepción de tu marca y la hace más competitiva."
    },
    {
      icon: Settings,
      number: "03",
      title: "Personalización total",
      description: "Diseñamos tecnología que se adapta a tu negocio, no al revés. Ajustamos procesos, lenguaje y diseño para que cada herramienta —como GastroBot o tus sistemas internos— proyecte tu identidad."
    },
    {
      icon: HeadphonesIcon,
      number: "04",
      title: "Soporte y evolución constante",
      description: "No entregamos y desaparecemos. Te acompañamos con mejoras continuas, soporte técnico y optimización constante para que tus soluciones crezcan junto a tu empresa."
    },
    {
      icon: Smartphone,
      number: "05",
      title: "Fácil y familiar para tus clientes",
      description: "Nuestras soluciones funcionan sin fricción: tus clientes interactúan directamente, sin apps ni complicaciones. Todo es claro, accesible y pensado para mejorar la experiencia de uso."
    },
    {
      icon: Clock,
      number: "06",
      title: "Ahorra tiempo y trabajo repetitivo",
      description: "Delegas las tareas repetitivas y el trabajo manual en sistemas inteligentes. Evitas perder clientes y ganas tiempo para centrarte en lo que realmente importa: hacer crecer tu negocio."
    }
  ];

  return (
    <section id="benefits" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-20">
          <h2 className="text-section-title text-primary mb-6">
            Beneficios clave para tu negocio.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre cómo Fluxo puede transformar la forma en que tu negocio se comunica con los clientes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="card-benefit relative overflow-hidden">
              {/* Number badge */}
              <div className="absolute top-6 right-6 w-8 h-8 bg-accent-orange-light rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-accent-orange">
                  {benefit.number}
                </span>
              </div>
              
              {/* Icon */}
              <div className="w-14 h-14 bg-primary-light rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-orange transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-primary mb-4">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
