import { Zap, Target, TrendingUp } from "lucide-react";

const SolutionsSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Automatización Inteligente",
      description: "Herramientas que trabajan por ti mientras te enfocas en hacer crecer tu negocio."
    },
    {
      icon: Target,
      title: "Soluciones Personalizadas",
      description: "Adaptamos cada herramienta a las necesidades específicas de tu sector y negocio."
    },
    {
      icon: TrendingUp,
      title: "Resultados Medibles",
      description: "Aumenta tus ventas, mejora la atención al cliente y optimiza tus operaciones."
    }
  ];

  return (
    <section id="solutions" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-20">
          <h2 className="text-section-title text-primary mb-6">
            Soluciones que llevarán tu negocio al siguiente nivel.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Diseñamos, desarrollamos e implementamos herramientas de automatización que te ayudarán a trabajar de forma más inteligente.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-benefit text-center">
              <div className="w-16 h-16 bg-accent-orange-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-orange transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-accent-orange group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;