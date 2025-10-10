"use client";

import { useState, type SVGProps } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  LayoutDashboard,
  QrCode,
  CheckCircle2,
  Info,
} from "lucide-react";
import PlanCheckoutDialog from "./PlanCheckoutDialog";

// ---- Tipos TS seguros (evita errores en deploy) ----
type IconType = React.ComponentType<SVGProps<SVGSVGElement>>;

type Plan = {
  name: "Split QR" | "Basic" | "Profesional" | string;
  price: string;
  period: string;
  subtitle?: string | null;
  activation?: string | null;
  commission?: string | null;
  annual?: { short: string; full: string } | null;
  features: string[];
  icon: IconType;
  button: string;
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Split QR",
    price: "14,99 €",
    period: "/mes",
    subtitle: "Precio sin IVA",
    activation: null,
    commission: "1 % por transacción",
    annual: {
      short: "Anual: 9,99 €/mes",
      full: "Pagando anual: 9,99 €/mes (119,88 €/año, sin IVA).",
    },
    features: [
      "Pagos divididos automáticos por QR",
      "Panel básico de transacciones",
      "Soporte por correo",
      "Ideal para cafeterías y panaderías",
    ],
    icon: QrCode,
    button: "Empezar con Split QR",
  },
  {
    name: "Basic",
    price: "65,20 €",
    period: "/mes",
    subtitle: "IVA incluido",
    activation: "Activación única: 199 € (IVA incl.)",
    commission: null,
    annual: null,
    features: [
      "Chatbot informativo (sin reservas)",
      "FAQ, horarios y contacto",
      "Branding básico",
      "Panel de control esencial",
    ],
    icon: MessageCircle,
    button: "Empezar con Basic",
  },
  {
    name: "Profesional",
    price: "77,50 €",
    period: "/mes",
    subtitle: "IVA incluido",
    activation: "Activación única: 249 € (IVA incl.)",
    commission: "0,3 % por transacción",
    annual: null,
    features: [
      "Reservas automáticas y recordatorios",
      "Dashboard completo con estadísticas",
      "Split QR integrado",
      "Soporte prioritario y actualizaciones",
    ],
    icon: LayoutDashboard,
    button: "Empezar con Profesional",
    popular: true,
  },
];

export default function PlansSection() {
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
          viewport={{ once: true }}
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
          const Icon = plan.icon; // <- TS-safe
          return (
            <motion.div
              key={plan.name}
              onMouseEnter={() => setHovered(plan.name)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
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

              <div className="flex flex-col items-center mt-4">
                <div className="flex items-end gap-1">
                  <span className="text-[48px] font-extrabold text-[#ff7a00] leading-none">
                    {plan.price}
                  </span>
                  <span className="text-lg text-[#6b7a90] mb-2">
                    {plan.period}
                  </span>
                </div>

                {plan.subtitle && (
                  <p className="text-sm text-[#6b7a90]">{plan.subtitle}</p>
                )}

                {/* Tooltip interactivo anual */}
                {plan.annual && (
                  <div className="mt-3 relative flex items-center gap-2 text-sm text-[#6b7a90]">
                    <span className="bg-gray-100 rounded px-2 py-1">
                      {plan.annual.short}
                    </span>
                    <div className="group relative flex">
                      <Info className="w-4 h-4 text-gray-400 group-hover:text-[#ff7a00] transition" />
                      <span className="absolute top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-white border border-gray-200 rounded-lg shadow-md px-3 py-2 text-xs text-gray-700 w-56 z-10">
                        {plan.annual.full}
                      </span>
                    </div>
                  </div>
                )}

                {plan.activation && (
                  <p className="mt-2 text-sm font-medium text-[#0b2545]">
                    {plan.activation}
                  </p>
                )}

                {plan.commission && (
                  <p className="mt-1 text-sm text-[#0b2545]">
                    {plan.commission}
                  </p>
                )}
              </div>

              <ul className="mt-6 space-y-3 text-left text-[#0b2545]">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#ff7a00] mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <PlanCheckoutDialog planName={plan.name}>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full rounded-xl px-5 py-3 font-semibold transition ${
                      plan.popular
                        ? "bg-[#ff7a00] text-white hover:bg-[#e96e00]"
                        : "bg-[#0b2545] text-white hover:bg-[#081a33]"
                    }`}
                  >
                    {plan.button}
                  </motion.button>
                </PlanCheckoutDialog>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Luz ambiental contenida en la sección (evita overlays globales en SSR) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,122,0,0.04)_0%,transparent_70%)] blur-3xl" />
    </section>
  );
}
