import { MessageCircle, Mail, Phone } from "lucide-react";

const Footer = () => {
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
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>Chatbot WhatsApp</li>
              <li>Asistente de Voz</li>
              <li>Panel de Control</li>
              <li>Automatización</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <a href="https://wa.me/34633885686" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary-foreground/80 hover:underline"><MessageCircle className="w-4 h-4" /><span>WhatsApp</span></a>
              <a href="mailto:pxservices@pxcorporation.org" className="flex items-center gap-3 text-primary-foreground/80 hover:underline"><Mail className="w-4 h-4" /><span>pxservices@pxcorporation.org</span></a>
              <a href="tel:+34633885686" className="flex items-center gap-3 text-primary-foreground/80 hover:underline"><Phone className="w-4 h-4" /><span>+34 633 885 686</span></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Fluxo. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;