import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Qué tipo de soluciones crea Fluxo Services?",
      answer: "Desarrollamos software inteligente y adaptable para optimizar tareas, procesos y comunicación dentro de cualquier negocio. Desde sistemas internos hasta herramientas para clientes, cada solución se diseña a medida según tus objetivos y tu forma de trabajar."
    },
    {
      question: "¿Trabajan solo con algunos sectores o cualquier tipo de empresa?",
      answer: "Trabajamos con todo tipo de empresas: desde negocios locales y pymes hasta compañías con operaciones más amplias. Nuestras soluciones se adaptan al tamaño y las necesidades de cada cliente, sin importar el sector."
    },
    {
      question: "¿Cómo funciona el proceso si quiero un software personalizado?",
      answer: "Analizamos contigo los puntos clave de tu negocio y diseñamos una propuesta técnica clara, con objetivos medibles. A partir de ahí, construimos la solución paso a paso, te la mostramos en funcionamiento y la dejamos lista para usar. Sin tecnicismos, sin complicaciones."
    },
    {
      question: "¿Hay permanencia o puedo cancelar cuando quiera?",
      answer: "No hay permanencia. Puedes cancelar el servicio cuando quieras. Eso sí, recomendamos darle al menos 2-3 meses para ver todos los beneficios, ya que los clientes necesitan tiempo para acostumbrarse al nuevo sistema."
    },
    {
      question: "¿Qué beneficios concretos obtengo al trabajar con Fluxo Services?",
      answer: "Reducción de tareas repetitivas, mayor control de tus operaciones, información en tiempo real y una mejora visible en la experiencia del cliente. En resumen: más tiempo para lo importante y un negocio que avanza solo."
    },
    {
      question: "¿Qué diferencia a Fluxo Services de otras empresas tecnológicas?",
      answer: "Creamos microsoluciones inteligentes, no sistemas genéricos. Nuestras herramientas son ligeras, rápidas y hechas a medida. No vendemos productos cerrados: construimos tecnología que entiende y se adapta a tu negocio."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-20">
          <h2 className="text-section-title text-primary mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros servicios de automatización.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-border rounded-2xl bg-card overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-primary-light/50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-primary pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-accent-orange" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <div className="pt-4 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
