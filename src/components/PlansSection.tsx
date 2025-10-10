"use client";

import { useState, type SVGProps } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  LayoutDashboard,
  QrCode,
  CheckCircle2,
} from "lucide-react";
import PlanCheckoutDialog from "./PlanCheckoutDialog";

type IconType = React.ComponentType<SVGProps<SVGSVGElement>>;

type Plan = {
  name: string;
  icon: IconType;
  monthly: {
    price: string;
    activation?: string;
    commission?: string;
  };
  annual: {
    price: string;
    activation?: string;
    total?: string;
    commission?: string;
  };
  subtitle?: string;
  features: string[];
  visuals: { icon: IconType; title: string; desc: string }[];
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Split QR",
    icon: QrCode,
    monthly: {
      price: "14,99 € + IVA / mes",
      commission: "1 % por transacción",
    },
    annual: {
      price: "9,99 € + IVA / mes",
      commission: "1 % por transacción",
    },
    subtitle: "Ideal para cafeterías, bares y panaderías",
    features: [
      "Pagos divididos automáticos por QR",
      "Panel de transacciones básico",
      "Soporte por correo",
      "Sin permanencia",
    ],
    visuals: [
      {
        icon: QrCode,
        title: "SplitQR",
        desc: "División automática de cuentas mediante código QR",
      },
    ],
  },
  {
    name: "Basic",
    icon: MessageCircle,
    monthly: {
      price: "79 € / mes (IVA incl.)",
      activation: "Activación: 199 € (IVA incl.)",
    },
    annual: {
      price: "65,20 € / mes (IVA incl.)",
      activation: "Activación: 189 € (IVA incl.)",
      total: "971,40 € / año",
    },
    subtitle: "Chatbot con reservas",
    features: [
      "ChatBot informativo 24/7",
      "FAQ, horarios y contacto",
      "Panel de control esencial",
      "Reservas automáticas",
      "Dashboard completo con estadísticas",
      "Soporte y actualizaciones",
      "Sin permanencia",
    ],
    visuals: [
      {
        icon: MessageCircle,
        title: "GastroBot con Dashboard",
        desc: "Asistente virtual completo con panel de control para atención al cliente",
      },
    ],
  },
  {
    name: "Profesional",
    icon: LayoutDashboard,
    monthly: {
      price: "99 € / mes (IVA incl.)",
      activation: "Activación: 249 € (IVA incl.)",
      commission: "0,3 % por transacción",
    },
    annual: {
      price: "77,50 € / mes (IVA incl.)",
      activation: "Activación: 220 € (IVA incl.)",
      total: "1.150 € / año",
      commission: "0,3 % por transacción",
    },
    subtitle: "GastroBot con reservas y dashboard + Split QR integrado",
    features: [
      "Configuración personalizada",
      "Integración con Chatbot",
      "Respuestas automáticas inteligentes",
      "Gestión de reservas y citas",
      "SplitQR para dividir cuentas",
      "Análisis y reportes",
      "Soporte técnico incluido",
      "Actualizaciones mensuales",
      "Sin permanencia",
    ],
    visuals: [
      {
        icon: MessageCircle,
        title: "Chatbot",
        desc: "Asistente virtual completo con panel de control para atención al cliente",
      },
      {
        icon: LayoutDashboard,
        title: "Panel de Control",
        desc: "Dashboard integral para gestionar tu negocio en tiempo real",
      },
      {
        icon: QrCode,
        title: "SplitQR",
        desc: "División automática de cuentas mediante código QR integrado",
      },
    ],
    popular: true,
  },
];

export default function PlansSection() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="plans"
      className="relative py-24 bg-gradient-to-b from-white to-[#f8fafc] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center mb-16 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-[#0b2545]"
        >
          Planes diseñados para hacer crecer tu negocio
        </motion.h2>
        <p className="text-[#6b7a90] mt-3 text-lg">
          Tecnología premium, experiencia fluida y soporte cercano. Elige el
          plan que mejor encaje contigo.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {plans.map((plan, idx) => {
          const Icon = plan.icon;
          const pricing = isAnnual ? plan.annual : plan.monthly;

          return (
            <motion.div
              key={plan.name}
              onMouseEnter={() => setHovered(plan.name)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative flex flex-col border rounded-[26px] p-8 bg-white transition-all duration-500 cursor-pointer ${
                hovered === plan.name ? "shadow-2xl scale-[1.03]" : "shadow-sm"
              } ${
                plan.popular
                  ? "border-[#ff7a00] shadow-[0_0_25px_rgba(255,122,0,0.25)]"
                  : "border-[#e6ebf1]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 right-6 animate-pulse bg-[#ff7a00] text-white text-sm font-semibold px-4 py-1 rounded-b-lg shadow-[0_6px_0_rgba(0,0,0,0.06)]">
                  Más popular ⭐
                </div>
              )}

              <div className="flex flex-col items-center">
                <Icon className="w-12 h-12 text-[#ff7a00] mb-3 drop-shadow-sm" />
                <h3 className="text-2xl font-bold text-[#0b2545]">
                  {plan.name}
                </h3>
              </div>

              {/* Switch dentro de la tarjeta */}
              <div className="mt-6 flex items-center justify-center gap-3">
                <span
                  className={`text-sm font-medium ${
                    !isAnnual ? "text-[#0b2545]" : "text-gray-400"
                  }`}
                >
                  Mensual
                </span>
                <button
                  onClick={() => setIsAnnual((prev) => !prev)}
                  className={`relative inline-flex h-6 w-12 items-center rounded-full transition ${
                    isAnnual ? "bg-[#ff7a00]" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${
                      isAnnual ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
                <span
                  className={`text-sm font-medium ${
                    isAnnual ? "text-[#0b2545]" : "text-gray-400"
                  }`}
                >
                  Anual
                </span>
              </div>

              {/* Precio */}
              <div className="flex flex-col items-center mt-4">
                <span className="text-[36px] font-extrabold text-[#ff7a00] leading-none text-center">
                  {pricing.price}
                </span>

                {pricing.activation && (
                  <p className="text-sm mt-2 font-medium text-[#0b2545]">
                    {pricing.activation}
                  </p>
                )}
                {pricing.commission && (
                  <p className="text-sm mt-1 text-[#0b2545]">
                    {pricing.commission}
                  </p>
                )}
                {pricing.total && (
                  <p className="text-xs mt-1 text-gray-500">
                    Total anual: {pricing.total}
                  </p>
                )}
                {plan.subtitle && (
                  <p className="mt-3 text-sm text-[#6b7a90] text-center max-w-[240px]">
                    {plan.subtitle}
                  </p>
                )}
              </div>

              {/* Bloques visuales (debajo del precio) */}
              <div className="mt-6 space-y-3">
                {plan.visuals.map((v, i) => {
                  const VIcon = v.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-gray-50 rounded-xl p-3 shadow-sm hover:shadow-md transition"
                    >
                      <VIcon className="w-8 h-8 text-[#ff7a00] flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#0b2545]">{v.title}</p>
                        <p className="text-sm text-[#6b7a90]">{v.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Features */}
              <ul className="mt-6 space-y-3 text-left text-[#0b2545]">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#ff7a00] mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* Botón naranja */}
              <div className="mt-8">
                <PlanCheckoutDialog planName={plan.name}>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full rounded-xl px-5 py-3 font-semibold bg-[#ff7a00] text-white hover:bg-[#e96e00] transition"
                  >
                    {isAnnual
                      ? `Elegir plan anual`
                      : `Elegir plan mensual`}
                  </motion.button>
                </PlanCheckoutDialog>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,122,0,0.04)_0%,transparent_70%)] blur-3xl" />
    </section>
  );
}
