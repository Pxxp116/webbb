import { MessageCircle, Mail, Phone } from "lucide-react";
import { useState } from "react";
import FooterLegal from "./FooterLegal";

const Footer = () => {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<"privacy" | "terms">("privacy");
  const [content, setContent] = useState<string>("");

  async function openLegal(which: "privacy" | "terms") {
    setTab(which);
    setOpen(true);
    const url = which === "privacy" ? "/legal/privacidad.txt" : "/legal/terminos.txt";
    try {
      const res = await fetch(url);
      const txt = await res.text();
      setContent(txt); // ← Texto literal del Word
    } catch {
      setContent(
        "No se pudo cargar el documento legal. Comprueba que existan /public/legal/privacidad.txt y /public/legal/terminos.txt"
      );
    }
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Fluxo</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Automatización inteligente para negocios. Tu negocio, sin pausas.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Productos</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground/50" />
                GastroBot
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground/50" />
                Split-QR
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                WhatsApp: +34 000 000 000
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                pxservices@pxcorporation.org
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +34 000 000 000
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-sm text-primary-foreground/60">© 2025 Fluxo. Todos los derechos reservados.</p>

          {/* ✅ Misma UI; ahora abren el panel legal */}
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openLegal("privacy");
              }}
              className="hover:text-primary-foreground transition-colors"
            >
              Política de Privacidad
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openLegal("terms");
              }}
              className="hover:text-primary-foreground transition-colors"
            >
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>

      {/* Panel legal (sin duplicar footer) */}
      <FooterLegal
        open={open}
        onClose={() => setOpen(false)}
        content={content}
        title={tab === "privacy" ? "Política de Privacidad" : "Términos y Condiciones"}
      />
    </footer>
  );
};

export default Footer;
