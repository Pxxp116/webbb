import { Users, Award, Settings, HeadphonesIcon, Smartphone, Clock } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Users,
      number: "01",
      title: "Gana más clientes",
      description: "Al estar disponible 24/7 en tu propio chat integrado, nunca pierdes una oportunidad de venta. Tus clientes pueden contactarte cuando quieran."
    },
    {
      icon: Award,
      number: "02", 
      title: "Mejora tu imagen profesional",
      description: "Ofrece una atención rápida, clara y coherente que impresiona a tus clientes y te diferencia de la competencia."
    },
    {
      icon: Settings,
      number: "03",
      title: "Personalización total",
      description: "Adaptamos el chatbot a tu tipo de negocio, tu vocabulario y tus procesos específicos para que refleje tu marca."
    },
    {
      icon: HeadphonesIcon,
      number: "04",
      title: "Soporte y evolución constante",
      description: "Incluimos asistencia continua y actualizaciones mensuales para que tu bot mejore constantemente."
    },
    {
      icon: Smartphone,
      number: "05",
      title: "Fácil y familiar para tus clientes",
      description: "Tu asistente funciona independientemente, sin apps raras. No necesitan descargar nada nuevo."
    },
    {
      icon: Clock,
      number: "06",
      title: "Ahorra tiempo y trabajo repetitivo",
      description: "Automatiza respuestas frecuentes, reservas y consultas básicas mientras te enfocas en tareas más importantes."
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
