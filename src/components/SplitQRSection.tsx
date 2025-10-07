import { QrCode, Users, CreditCard, CheckCircle } from "lucide-react";

const SplitQRSection = () => {
  const features = [
    { icon: QrCode, text: "Escanea el código QR de la mesa" },
    { icon: Users, text: "Selecciona qué elementos has pedido" },
    { icon: CreditCard, text: "Paga solo tu parte o divide la cuenta al instante" },
  ];

  const benefits = [
    "Sin cálculos complicados",
    "Pagos instantáneos",
    "Experiencia sin fricción",
    "Reducción de tiempo de espera"
  ];

  return (
    <section id="splitqr" className="section-container py-24 bg-gradient-subtle">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: copy & features */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary">Divide cuentas sin complicaciones</h2>
          <p className="mt-4 text-muted-foreground max-w-prose">
            SplitQR permite a tus clientes dividir la cuenta de forma automática. 
            Solo escanean el QR, seleccionan sus productos y pagan su parte directamente desde el móvil.
          </p>

          <div className="mt-8 space-y-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-accent-orange" />
                </div>
                <span className="font-medium text-foreground/90">{f.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((t, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-accent-orange" />
                <span>{t}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a 
              href="https://wa.me/message/YC7W3UVLEHFKB1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              ¡Ya disponible!
              <QrCode className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right: device mockup */}
        <div className="relative">
          <div className="card-elevated bg-white/80 rounded-3xl p-6 border border-border shadow-sm">
            <div className="bg-gradient-to-br from-primary-light to-accent-orange-light p-8 rounded-2xl">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                  <QrCode className="w-10 h-10 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary text-center mb-4">
                Mesa 5 - Restaurante
              </h3>
              <div className="space-y-3 text-sm">
                <div className="bg-white/70 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span>Pizza Margherita</span>
                    <span className="font-medium">12€</span>
                  </div>
                </div>
                <div className="bg-white/70 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span>Ensalada César</span>
                    <span className="font-medium">8€</span>
                  </div>
                </div>
                <div className="bg-accent-orange text-white p-3 rounded-lg font-medium text-center">
                  Tu parte: 20€
                </div>
              </div>
            </div>
          </div>

          {/* Floating decorations */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent-orange rounded-2xl flex items-center justify-center shadow-lg">
            <CreditCard className="w-8 h-8 text-white" />
          </div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
            <Users className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitQRSection;
