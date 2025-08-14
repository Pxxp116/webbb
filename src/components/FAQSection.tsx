import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Qué hace exactamente el bot y cómo ayuda a mi negocio?",
      answer: "Nuestro chatbot funciona como un asistente virtual que atiende a tus clientes en WhatsApp las 24 horas. Puede responder preguntas frecuentes, tomar reservas, gestionar citas, proporcionar información sobre tus servicios y derivar consultas complejas a tu equipo humano. Esto te permite atender más clientes, reducir tiempo de respuesta y nunca perder una venta por no estar disponible."
    },
    {
      question: "¿Necesito tener conocimientos técnicos para usarlo?",
      answer: "No necesitas ningún conocimiento técnico. Nosotros nos encargamos de toda la configuración, integración y personalización. Solo necesitas tener WhatsApp Business y nosotros hacemos el resto. Además, incluimos formación para que sepas cómo sacar el máximo provecho de tu asistente virtual."
    },
    {
      question: "¿Qué incluye el servicio mensual de €39?",
      answer: "El plan mensual incluye el funcionamiento completo del chatbot, hosting en nuestros servidores, actualizaciones regulares, soporte técnico, análisis de conversaciones, backup automático y todas las mejoras que implementemos. También incluye hasta 1000 conversaciones mensuales, que es más que suficiente para la mayoría de negocios."
    },
    {
      question: "¿Hay permanencia o puedo cancelar cuando quiera?",
      answer: "No hay permanencia. Puedes cancelar el servicio cuando quieras y solo pagarás por el tiempo que lo hayas usado. Eso sí, recomendamos darle al menos 2-3 meses para ver todos los beneficios, ya que los clientes necesitan tiempo para acostumbrarse al nuevo sistema."
    },
    {
      question: "¿Cómo se personaliza para mi tipo de negocio?",
      answer: "Antes de activar tu bot, hacemos una sesión de configuración donde analizamos tu negocio, tus servicios, tu forma de hablar con los clientes y tus procesos. Programamos el bot para que use tu vocabulario, conozca tus horarios, precios y servicios, y pueda manejar las situaciones más comunes de tu sector."
    },
    {
      question: "¿Qué pasa si el bot no sabe responder algo?",
      answer: "Cuando el bot no puede resolver una consulta, automáticamente deriva la conversación a tu equipo humano y te notifica para que puedas responder personalmente. Además, registramos estas situaciones para mejorar las respuestas del bot en futuras actualizaciones."
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