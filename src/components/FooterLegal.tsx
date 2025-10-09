import { useEffect, useState } from "react";

type Tab = "privacy" | "terms";

const PRIVACY_TEXT = `POLÍTICA DE PRIVACIDAD

1. IDENTIFICACIÓN DEL RESPONSABLE DEL TRATAMIENTO

En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (en adelante, "RGPD"), y de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (en adelante, "LOPDGDD"), se informa de lo siguiente:

Responsable del tratamiento:
PX Corporation
Titulares: Alejandro Mata Ortega y Nicolás Díaz Corominas
Domicilio: España
Correo electrónico de contacto: pxservices@pxcorporation.org
Ámbito territorial: Unión Europea

La presente Política de Privacidad se aplica a todos los productos y servicios ofrecidos por Fluxo Services, incluyendo específicamente:
• Fluxo Services (plataforma corporativa y marca principal)
• GastroBot (chatbot de automatización para restaurantes: gestión de reservas, pagos y comunicación con clientes)
• Split-QR (sistema de pagos individualizados mediante códigos QR)

2. DATOS PERSONALES RECOGIDOS

Fluxo Services puede recoger y tratar las siguientes categorías de datos personales de los usuarios finales y clientes de los negocios que utilizan nuestros servicios:

2.1. Datos de identificación y contacto
• Número de teléfono
• Dirección de correo electrónico

2.2. Datos de actividad y transaccionales
• Mensajes enviados y recibidos a través de los chatbots
• Historial de reservas realizadas
• Historial de transacciones y pagos efectuados
• Datos de uso de la plataforma y los servicios

2.3. Datos proporcionados voluntariamente
Cualquier información adicional que el usuario decida proporcionar durante su interacción con nuestros sistemas

No recogemos datos sensibles (origen racial o étnico, opiniones políticas, convicciones religiosas o filosóficas, datos de salud, orientación sexual) salvo que sea estrictamente necesario para la prestación del servicio y siempre con el consentimiento explícito del interesado.

3. FINALIDAD Y LEGITIMACIÓN DEL TRATAMIENTO

3.1. Finalidades del tratamiento
Los datos personales recogidos serán tratados con las siguientes finalidades:
a) Prestación del servicio contratado: Automatizar y optimizar la relación entre los negocios suscritos y sus clientes finales mediante sistemas de inteligencia artificial y chatbots.
b) Gestión de reservas: Procesar, confirmar y gestionar las reservas realizadas por los usuarios a través de GastroBot.
c) Procesamiento de pagos: Facilitar las transacciones económicas mediante Split-QR y otros módulos de pago integrados.
d) Gestión de comunicaciones: Enviar y recibir mensajes en tiempo real entre los negocios y sus clientes a través de nuestros sistemas automatizados.
e) Soporte técnico y atención al cliente: Proporcionar asistencia técnica y resolver incidencias relacionadas con el uso de nuestros servicios.
f) Funcionalidad de CRM: Ofrecer herramientas de gestión de relaciones con clientes a los negocios suscritos, permitiendo un mejor conocimiento y seguimiento de sus clientes.
g) Mejora y desarrollo de servicios: Analizar el uso de nuestras plataformas para optimizar su funcionamiento y desarrollar nuevas funcionalidades.
h) Cumplimiento de obligaciones legales: Conservar información necesaria para el cumplimiento de obligaciones fiscales, contables y regulatorias.

Fluxo Services no utiliza los datos personales recogidos con fines publicitarios externos ni los comparte con terceros para campañas de marketing ajenas a nuestros servicios.

3.2. Base jurídica del tratamiento
El tratamiento de sus datos personales se fundamenta en las siguientes bases jurídicas conforme al artículo 6 del RGPD:
a) Consentimiento del interesado (art. 6.1.a)
b) Ejecución de un contrato (art. 6.1.b)
c) Interés legítimo (art. 6.1.f)
d) Cumplimiento de obligaciones legales (art. 6.1.c)

4. CESIÓN A TERCEROS Y TRANSFERENCIAS INTERNACIONALES

4.1. Comunicación de datos a terceros
Fluxo Services podrá comunicar los datos personales a terceros prestadores de servicios que actúan como encargados del tratamiento, necesarios para la prestación de nuestros servicios:

4.1.1. Supabase
Finalidad: Infraestructura de base de datos y servicios de autenticación
Naturaleza: Almacenamiento y gestión de datos
Ubicación: Estados Unidos (con garantías adecuadas conforme al RGPD)
Garantías: Cláusulas contractuales tipo y/o EU-U.S. Data Privacy Framework

4.1.2. Stripe
Finalidad: Procesamiento de pagos y prevención de fraude
Ubicación: Estados Unidos y Unión Europea
Garantías: Cumplimiento RGPD y PCI-DSS Level 1

4.1.3. Gumroad
Finalidad: Venta de licencias y suscripciones exclusivamente para Fluxo Services
Ubicación: Estados Unidos
Garantías: Salvaguardas adecuadas conforme a la normativa

4.2. Transferencias internacionales
Se realizarán con garantías legales: cláusulas tipo, DPF UE-EE.UU., decisiones de adecuación u otras del Capítulo V RGPD.

4.3. No cesión a terceros con fines comerciales
No vendemos ni cedemos datos para fines publicitarios ajenos al servicio.

4.4. Comunicaciones por obligación legal
A autoridades públicas, jueces y tribunales cuando sea exigible.

5. PLAZO DE CONSERVACIÓN DE LOS DATOS
Criterio general: durante la prestación del servicio; supresión a solicitud; eliminación manual disponible en la plataforma. Conservación adicional por obligaciones legales (p.ej., fiscales/contables hasta 6 años). Eliminación segura tras los plazos.

6. DERECHOS DEL USUARIO
Acceso, rectificación, supresión, limitación, portabilidad, oposición, no ser objeto de decisiones automatizadas, y retirar consentimiento. Ejercicio vía pxservices@pxcorporation.org, con respuesta en 1 mes (prorrogable 2 meses). Reclamación posible ante la AEPD (www.aepd.es).

7. SEGURIDAD DE LOS DATOS
Medidas técnicas (cifrado, control de acceso, firewalls, backups, monitorización, actualizaciones) y organizativas (políticas, formación, confidencialidad, evaluación de riesgos, plan de incidentes). Notificación de brechas a la AEPD en 72h cuando proceda y a interesados en caso de alto riesgo.

8. MODIFICACIONES DE LA POLÍTICA
Se publicarán en la web y plataformas, con fecha de última actualización y, si son sustanciales, se informará y se recabará consentimiento cuando sea necesario.

9. CONTACTO Y DPO
Contacto: pxservices@pxcorporation.org

10. LEGISLACIÓN APLICABLE
RGPD, LOPDGDD y normativa española/europea aplicable.

11. CONSENTIMIENTO INFORMADO
El uso de los servicios implica la aceptación de esta Política. El consentimiento puede retirarse según el apartado 6.

Fecha de última actualización: 9 de octubre de 2025
Fluxo Services — Automatización inteligente para tu negocio
`;

const TERMS_TEXT = `TÉRMINOS Y CONDICIONES DE USO
Fluxo Services (marca comercial de PX Corporation)
Última actualización: 9 de octubre de 2025

1. OBJETO Y ACEPTACIÓN
Regulan el acceso y uso de los servicios SaaS de Fluxo Services (GastroBot y Split-QR). El uso implica aceptación íntegra.

2. IDENTIFICACIÓN DEL TITULAR
PX Corporation — Marca: Fluxo Services
Representantes: Alejandro Mata Ortega y Nicolás Díaz Corominas
Domicilio: España — Contacto: pxservices@pxcorporation.org — Web: www.fluxoservices.com

3. DESCRIPCIÓN DE LOS SERVICIOS
3.1. GastroBot: reservas automatizadas, pagos online, atención al cliente, CRM.
3.2. Split-QR: división de pagos por comensal con QR y cobro individual.
3.3. Modelo SaaS para Negocios Cliente; usuarios finales interactúan sin relación contractual directa con PX.

4. ACCESO Y REGISTRO
Requiere capacidad legal, datos veraces y mantener confidenciales las credenciales. PX puede verificar identidad/documentación.

5. OBLIGACIONES DE USUARIOS Y NEGOCIOS
Uso conforme a derecho, veracidad, cumplimiento normativo (RGPD/LOPDGDD, consumo), información a usuarios finales, seguridad.
Usos prohibidos: fines ilícitos, intrusiones, ingeniería inversa, malware, scraping sin consentimiento, suplantación, etc.
Incumplimientos: suspensión y posibles acciones legales.

6. RESPONSABILIDADES DE FLUXO / PX
Disponibilidad razonable, soporte, medidas de seguridad. Relación contractual con el Negocio Cliente, no con usuarios finales.

7. PROPIEDAD INTELECTUAL
Titularidad de PX; licencia limitada, no exclusiva y revocable. Restricciones de uso de marcas y software. Feedback reutilizable.

8. CONDICIONES ECONÓMICAS Y PAGOS
Precios por suscripción; facturación electrónica; pagos por Stripe (PCI-DSS). Gumroad para licencias Fluxo Services. Impagos: suspensión y posibles intereses. Reembolsos según condiciones particulares.

9. LIMITACIÓN DE RESPONSABILIDAD
Exclusiones por uso indebido, terceros, fuerza mayor, etc. Límite máximo: lo pagado en los 12 meses previos. Sin daños indirectos garantizados.

10. PROTECCIÓN DE DATOS
PX Responsable para datos del Cliente; el Cliente Responsable para sus usuarios finales; PX Encargado para datos de usuarios finales. Detalles en la Política de Privacidad (parte integrante de estos Términos).

11. MODIFICACIONES
PX puede modificar Términos (notificación previa; 30/60 días si sustanciales). El uso continuado implica aceptación. Derecho del Cliente a resolver.

12. DURACIÓN Y RESOLUCIÓN
Renovación automática por períodos; resolución por cualquiera de las partes según condiciones. Exportación de datos tras baja, luego supresión.

13. LEGISLACIÓN Y JURISDICCIÓN
Derecho español y UE. Consumidores: mecanismos de resolución alternativa; empresas: mediación previa. Jurisdicción: Juzgados y Tribunales de [Ciudad, España] (o fuero imperativo).

14. DISPOSICIONES GENERALES
Integridad del acuerdo; nulidad parcial; no renuncia; cesión; notificaciones; idioma español prevalente; títulos sin efecto interpretativo.

15. CONTACTO
PX Corporation — Fluxo Services
Correo: [correo de soporte/legal] — Web: [URL del sitio web] — Domicilio: [Dirección completa]

16. ACEPTACIÓN
El registro/uso implica aceptación, capacidad legal y vinculación a estos Términos.
© 2025 PX Corporation. Todos los derechos reservados. Marcas: Fluxo Services, GastroBot, Split-QR.
`;

function Sheet({
  open,
  tab,
  onClose,
  setTab,
}: {
  open: boolean;
  tab: Tab;
  onClose: () => void;
  setTab: (t: Tab) => void;
}) {
  // Bloquear scroll de body cuando el panel esté abierto
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Cerrar con ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-title"
    >
      {/* Backdrop */}
      <button
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute inset-0 bg-black/40"
      />
      {/* Panel */}
      <div className="relative w-full sm:max-w-4xl bg-white rounded-t-2xl sm:rounded-2xl shadow-xl transform transition-all duration-300 translate-y-0 sm:translate-y-0 max-h-[85vh] overflow-hidden">
        {/* Tabs + acciones */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b bg-white/80 backdrop-blur">
          <div className="flex gap-2">
            <button
              onClick={() => setTab("privacy")}
              className={
                "px-3 py-1.5 rounded-full text-sm font-medium border " +
                (tab === "privacy"
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-foreground/80 border-border hover:bg-muted")
              }
            >
              Política de Privacidad
            </button>
            <button
              onClick={() => setTab("terms")}
              className={
                "px-3 py-1.5 rounded-full text-sm font-medium border " +
                (tab === "terms"
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-foreground/80 border-border hover:bg-muted")
              }
            >
              Términos y Condiciones
            </button>
          </div>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-full text-sm border border-border hover:bg-muted"
          >
            Cerrar
          </button>
        </div>

        {/* Contenido */}
        <div className="p-4 sm:p-6 overflow-y-auto h-[65vh] sm:h-[70vh]">
          {tab === "privacy" ? (
            <article className="text-sm leading-relaxed">
              <h2 id="legal-title" className="sr-only">
                Política de Privacidad
              </h2>
              <pre className="whitespace-pre-wrap font-sans">
                {PRIVACY_TEXT}
              </pre>
            </article>
          ) : (
            <article className="text-sm leading-relaxed">
              <h2 id="legal-title" className="sr-only">
                Términos y Condiciones
              </h2>
              <pre className="whitespace-pre-wrap font-sans">
                {TERMS_TEXT}
              </pre>
            </article>
          )}
        </div>
      </div>
    </div>
  );
}

export default function FooterLegal() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<Tab>("privacy");

  return (
    <>
      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-foreground/70 flex flex-col sm:flex-row gap-3 sm:gap-6 items-start sm:items-center justify-between">
          <p>© {new Date().getFullYear()} PX Corporation — Fluxo Services</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <button
              onClick={() => {
                setTab("privacy");
                setOpen(true);
              }}
              className="underline underline-offset-4 hover:text-primary"
            >
              Política de Privacidad
            </button>
            <span className="hidden sm:inline text-foreground/30">•</span>
            <button
              onClick={() => {
                setTab("terms");
                setOpen(true);
              }}
              className="underline underline-offset-4 hover:text-primary"
            >
              Términos y Condiciones
            </button>
          </div>
        </div>
      </footer>

      {/* Panel legal */}
      <Sheet open={open} tab={tab} setTab={setTab} onClose={() => setOpen(false)} />
    </>
  );
}
