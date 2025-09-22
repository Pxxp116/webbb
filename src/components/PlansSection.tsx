import { CheckCircle2, MessageCircle, PhoneCall, LayoutDashboard, QrCode } from "lucide-react";
import PlanCheckoutDialog from "./PlanCheckoutDialog";

const PlansSection = () => {
  const featuresLeft = [
    { icon: MessageCircle, title: "Chatbot de WhatsApp", desc: "Asistente virtual completo para atención al cliente" },
    { icon: PhoneCall, title: "Asistente de Voz", desc: "Respuestas automáticas por llamada telefónica" },
    { icon: LayoutDashboard, title: "Panel de Control", desc: "Dashboard integral para gestionar tu negocio" },
  ];

  const includes = [
    "Configuración personalizada",
    "Integración con WhatsApp Business",
    "Respuestas automáticas inteligentes",
    "Gestión de reservas y citas",
    "Análisis y reportes",
    "Soporte técnico incluido",
    "Actualizaciones mensuales",
    "Sin permanencia",
  ];

  return (
    <section id="plans" className="section-container py-24">
      <div className="max-w-6xl mx-auto">
        {/* Plan Principal */}
        <div className="relative grid lg:grid-cols-2 gap-10 bg-white rounded-[26px] border border-[#e6ebf1] shadow-sm overflow-visible p-6 md:p-8 mb-12">
          {/* Badge Plan Recomendado */}
          <div className="hidden md:block absolute -top-3 right-10">
            <div className="bg-[#ff7a00] text-white text-sm font-semibold px-4 py-1 rounded-b-lg shadow-[0_6px_0_rgba(0,0,0,0.06)]">
              Plan Recomendado
            </div>
          </div>

          {/* Left column */}
          <div className="px-2 md:px-4">
            <h3 className="text-[36px] leading-tight font-extrabold text-[#0b2545]">Professional</h3>

            <div className="flex items-end gap-2 mt-3">
              <div className="text-[56px] font-extrabold leading-none text-[#ff7a00]">€79</div>
              <div className="text-[#6b7a90] mb-1 text-lg">/mes</div>
            </div>

            <div className="text-sm text-[#6b7a90] mt-1">
              Pago inicial/activación de <span className="font-medium">€199</span> (IVA incluido)
            </div>

            <p className="text-[#0b2545cc] mt-6 leading-7 max-w-prose">
              El Plan Profesional de Fluxo te ofrece un asistente virtual por WhatsApp y voz,
              junto con un panel de control integral para gestionar tu negocio desde un solo lugar.
              Perfecto para restaurantes y comercios que buscan automatizar tareas, atender a más
              clientes y aumentar sus ventas sin esfuerzo.
            </p>

            <div className="mt-8 space-y-4">
              {featuresLeft.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#ffe7d6] flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-[#ff7a00]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0b2545]">{f.title}</div>
                    <div className="text-sm text-[#6b7a90]">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <PlanCheckoutDialog plan="Professional" triggerClassName="w-full md:w-auto px-6 py-3 rounded-2xl bg-[#ff7a00] hover:bg-[#e96f00] text-white font-semibold shadow-sm transition">
                Empezar con este plan
              </PlanCheckoutDialog>
            </div>
          </div>

          {/* Right column: includes */}
          <div className="px-2 md:px-4">
            <div className="bg-[#eaf3ff] rounded-[20px] p-6 md:p-8 border border-[#d7e6ff]">
              <h4 className="text-[20px] font-bold text-[#0b2545] mb-5">¿Qué incluye?</h4>
              <div className="space-y-3">
                {includes.map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="text-[#ff7a00]">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-[#0b2545]">{text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <span className="inline-block text-xs font-semibold text-[#ff7a00] bg-white px-3 py-1 rounded-xl border border-[#ffd2b1]">
                  Sin permanencia. Cancela cuando quieras.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* SplitQR - Próximamente */}
        <div className="bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-[26px] border border-[#e6ebf1] shadow-sm p-6 md:p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-[#ff7a00] to-[#e96f00] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <QrCode className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-[32px] leading-tight font-extrabold text-[#0b2545] mb-4">SplitQR</h3>
            <p className="text-[#6b7a90] text-lg mb-6 leading-relaxed">
              La herramienta definitiva para dividir cuentas sin complicaciones. Tus clientes escanean un QR, 
              seleccionan sus productos y pagan su parte al instante.
            </p>
            
            <div className="inline-block bg-[#fff4e6] border border-[#ffd2b1] rounded-xl px-4 py-2 mb-6">
              <span className="text-sm font-semibold text-[#ff7a00]">🚀 Próximamente disponible</span>
            </div>
            
            <div className="space-y-3 text-left max-w-md mx-auto mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#ff7a00]" />
                <span className="text-[#0b2545]">División automática de cuentas</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#ff7a00]" />
                <span className="text-[#0b2545]">Pagos instantáneos por QR</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#ff7a00]" />
                <span className="text-[#0b2545]">Integración perfecta con tu TPV</span>
              </div>
            </div>
            
            <a 
              href="mailto:info@fluxoservices.com?subject=Interés en SplitQR - Lista de espera&body=Hola,%0D%0A%0D%0AMe interesa conocer más sobre SplitQR y formar parte de la lista de espera para cuando esté disponible.%0D%0A%0D%0ANombre del negocio:%0D%0ATipo de negocio:%0D%0ATeléfono de contacto:%0D%0A%0D%0AGracias."
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#ff7a00] hover:bg-[#e96f00] text-white font-semibold shadow-sm transition-colors"
            >
              Únete a la lista de espera
              <QrCode className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
