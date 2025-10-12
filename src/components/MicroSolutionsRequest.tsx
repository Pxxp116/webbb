import { useState } from "react";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  description: string;
  features: string;
  budget: string;
  deadline: string;
  consent: boolean;
  honeypot: string; // hidden anti-spam
};

export default function MicroSolutionsRequest() {
  const [state, setState] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    description: "",
    features: "",
    budget: "",
    deadline: "",
    consent: false,
    honeypot: "",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; msg: string } | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as any;
    if (type === "checkbox") {
      setState((s) => ({ ...s, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setState((s) => ({ ...s, [name]: value }));
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const resp = await fetch("/api/send-micro-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });
      const data = await resp.json();
      if (data.ok) {
        setResult({ ok: true, msg: "Solicitud enviada. Te contactaremos muy pronto." });
        setState({
          name: "",
          company: "",
          email: "",
          phone: "",
          description: "",
          features: "",
          budget: "",
          deadline: "",
          consent: false,
          honeypot: "",
        });
      } else {
        setResult({ ok: false, msg: data.error || "No se pudo enviar la solicitud" });
      }
    } catch (err) {
      setResult({ ok: false, msg: "Error de red o servidor" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="microsoluciones" className="w-full bg-neutral-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Microsoluciones y Software Inteligente a Medida
          </h2>
          <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">
            Cuéntanos tu necesidad: automatizaciones, chatbots, integraciones, analítica o módulos a medida.
            Te contactamos para concretar el alcance y enviarte una propuesta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Lado izquierdo: bullets/beneficios */}
          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl border p-5 bg-white shadow-sm">
              <h3 className="font-semibold text-lg">¿Qué entregamos?</h3>
              <ul className="mt-3 list-disc list-inside text-neutral-700 space-y-1">
                <li>Automatización de flujos y procesos</li>
                <li>Chatbots/Asistentes a medida</li>
                <li>Integraciones con APIs y CRMs</li>
                <li>Módulos de analítica e informes</li>
                <li>Microapps o funciones específicas</li>
              </ul>
            </div>

            <div className="rounded-2xl border p-5 bg-white shadow-sm">
              <h3 className="font-semibold text-lg">Proceso</h3>
              <ol className="mt-3 list-decimal list-inside text-neutral-700 space-y-1">
                <li>Nos envías tu solicitud</li>
                <li>Te contactamos y definimos alcance</li>
                <li>Presupuesto cerrado y plan</li>
                <li>Desarrollo ágil y entrega</li>
              </ol>
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-3">
            <form onSubmit={onSubmit} className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
              {/* Honeypot */}
              <input
                type="text"
                name="honeypot"
                value={state.honeypot}
                onChange={onChange}
                className="hidden"
                autoComplete="off"
                tabIndex={-1}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Nombre *</label>
                  <input
                    name="name"
                    value={state.name}
                    onChange={onChange}
                    required
                    className="w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/10"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Empresa</label>
                  <input
                    name="company"
                    value={state.company}
                    onChange={onChange}
                    className="w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/10"
                    placeholder="Tu empresa"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={onChange}
                    required
                    className="w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/10"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Teléfono</label>
                  <input
                    name="phone"
                    value={state.phone}
                    onChange={onChange}
                    className="w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/10"
                    placeholder="+34 ..."
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium mb-1">Descripción del proyecto *</label>
                <textarea
                  name="description"
                  value={state.description}
                  onChange={onChange}
                  required
                  rows={4}
                  className="w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/10"
                  placeholder="Cuéntanos el problema, objetivo y contexto..."
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium mb-1">Funcionalidades deseadas</label>
                <textarea
                  name="features"
                  value={state.features}
                  onChange={onChange}
                  rows={3}
                  className="w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/10"
                  placeholder="Ej.: Chatbot de reservas, integración con Stripe/CRM, dashboard de KPIs..."
                />
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Presupuesto estimado</label>
                  <select
                    name="budget"
                    value={state.budget}
                    onChange={onChange}
                    className="w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/10"
                  >
                    <option value="">Selecciona rango</option>
                    <option value="<1000">&lt; €1.000</option>
                    <option value="1000-5000">€1.000 – €5.000</option>
                    <option value="5000-20000">€5.000 – €20.000</option>
                    <option value=">20000">&gt; €20.000</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Plazo estimado</label>
                  <input
                    name="deadline"
                    value={state.deadline}
                    onChange={onChange}
                    className="w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/10"
                    placeholder="Ej.: antes de 30/11"
                  />
                </div>
              </div>

              <div className="mt-4 flex items-start gap-2">
                <input
                  id="consent"
                  type="checkbox"
                  name="consent"
                  checked={state.consent}
                  onChange={onChange}
                  className="mt-1"
                  required
                />
                <label htmlFor="consent" className="text-sm text-neutral-700">
                  Acepto que Fluxo use estos datos para contactarme sobre esta solicitud.
                </label>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-2.5 text-white font-medium hover:bg-black/90 disabled:opacity-50"
                >
                  {loading ? 'Enviando…' : 'Enviar solicitud'}
                </button>
                {result && (
                  <span className={`text-sm ${result.ok ? 'text-emerald-700' : 'text-red-700'}`}>
                    {result.msg}
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
