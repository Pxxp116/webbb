import { MessageCircle, Mail, Phone } from "lucide-react";
import { useState } from "react";
import FooterLegal from "./FooterLegal"; // 👈 se importa el modal

const Footer = () => {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<"privacy" | "terms">("privacy");

  // 🔵 Texto literal de tu documento (resumido aquí, pero puedes pegarlo entero)
  const PRIVACY_TEXT = `
1. IDENTIFICACIÓN DEL RESPONSABLE DEL TRATAMIENTO
En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (en adelante, "RGPD"), y de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (en adelante, "LOPDGDD"), se informa de lo siguiente:
Responsable del tratamiento:
PX Corporation
Titulares: Alejandro Mata Ortega y Nicolás Díaz Corominas
Domicilio: España
Correo electrónico de contacto: pxservices@pxcorporation.org                   
Ámbito territorial: Unión Europea
La presente Política de Privacidad se aplica a todos los productos y servicios ofrecidos por Fluxo Services, incluyendo específicamente:
•	Fluxo Services (plataforma corporativa y marca principal)
•	GastroBot (chatbot de automatización para restaurantes: gestión de reservas, pagos y comunicación con clientes)
•	Split-QR (sistema de pagos individualizados mediante códigos QR)
________________________________________
2. DATOS PERSONALES RECOGIDOS
Fluxo Services puede recoger y tratar las siguientes categorías de datos personales de los usuarios finales y clientes de los negocios que utilizan nuestros servicios:
2.1. Datos de identificación y contacto
•	Número de teléfono
•	Dirección de correo electrónico
2.2. Datos de actividad y transaccionales
•	Mensajes enviados y recibidos a través de los chatbots
•	Historial de reservas realizadas
•	Historial de transacciones y pagos efectuados
•	Datos de uso de la plataforma y los servicios
2.3. Datos proporcionados voluntariamente
•	Cualquier información adicional que el usuario decida proporcionar durante su interacción con nuestros sistemas
No recogemos datos sensibles (origen racial o étnico, opiniones políticas, convicciones religiosas o filosóficas, datos de salud, orientación sexual) salvo que sea estrictamente necesario para la prestación del servicio y siempre con el consentimiento explícito del interesado.
________________________________________
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
a) Consentimiento del interesado (artículo 6.1.a RGPD): Al utilizar nuestros servicios, el usuario otorga su consentimiento informado para el tratamiento de sus datos personales con las finalidades descritas.
b) Ejecución de un contrato (artículo 6.1.b RGPD): El tratamiento es necesario para la ejecución del contrato de prestación de servicios entre Fluxo Services y los negocios clientes, así como para la prestación efectiva del servicio a los usuarios finales.
c) Interés legítimo (artículo 6.1.f RGPD): En determinados casos, como la mejora de nuestros servicios y la prevención de fraude, el tratamiento se basa en el interés legítimo del responsable.
d) Cumplimiento de obligaciones legales (artículo 6.1.c RGPD): Cuando el tratamiento sea necesario para cumplir con obligaciones fiscales, contables o de otra índole impuestas por la normativa aplicable.
________________________________________
4. CESIÓN A TERCEROS Y TRANSFERENCIAS INTERNACIONALES
4.1. Comunicación de datos a terceros
Fluxo Services podrá comunicar los datos personales a terceros prestadores de servicios que actúan como encargados del tratamiento, necesarios para la prestación de nuestros servicios:
4.1.1. Supabase
•	Finalidad: Infraestructura de base de datos y servicios de autenticación
•	Naturaleza del tratamiento: Almacenamiento y gestión de datos
•	Ubicación: Estados Unidos (con garantías adecuadas conforme al RGPD)
•	Garantías: Supabase cumple con las cláusulas contractuales tipo aprobadas por la Comisión Europea y el Marco de Privacidad de Datos UE-EE.UU. (EU-U.S. Data Privacy Framework)
4.1.2. Stripe
•	Finalidad: Procesamiento de pagos y gestión de transacciones económicas
•	Naturaleza del tratamiento: Gestión de cobros, verificación de pagos y prevención de fraude
•	Ubicación: Estados Unidos y Unión Europea
•	Garantías: Stripe cumple con el RGPD y el Marco de Privacidad de Datos UE-EE.UU., implementando medidas de seguridad certificadas (PCI-DSS Level 1)
4.1.3. Gumroad
•	Finalidad: Venta de licencias y suscripciones exclusivamente para el producto Fluxo Services (no para datos de clientes finales de los negocios)
•	Naturaleza del tratamiento: Gestión de pagos y licencias
•	Ubicación: Estados Unidos
•	Garantías: Gumroad aplica salvaguardas adecuadas conforme a la normativa de protección de datos
4.2. Transferencias internacionales de datos
Algunos de los encargados del tratamiento mencionados están ubicados en países fuera del Espacio Económico Europeo. En todos los casos, Fluxo Services garantiza que dichas transferencias se realizan con arreglo a los mecanismos legalmente previstos:
•	Cláusulas contractuales tipo aprobadas por la Comisión Europea
•	Certificación bajo el Marco de Privacidad de Datos UE-EE.UU. (EU-U.S. Data Privacy Framework)
•	Decisiones de adecuación adoptadas por la Comisión Europea
•	Otras garantías apropiadas conforme al Capítulo V del RGPD
4.3. No cesión a terceros con fines comerciales
Fluxo Services no vende, alquila ni cede datos personales a terceros para finalidades comerciales o publicitarias ajenas a la prestación del servicio contratado.
4.4. Comunicaciones por obligación legal
Los datos personales podrán ser comunicados a autoridades públicas, jueces y tribunales cuando exista una obligación legal de hacerlo conforme a la normativa aplicable.
________________________________________
5. PLAZO DE CONSERVACIÓN DE LOS DATOS
5.1. Criterio general de conservación
Los datos personales se conservarán durante el tiempo estrictamente necesario para cumplir con las finalidades para las que fueron recogidos, aplicando los siguientes criterios:
a) Durante la prestación del servicio: Los datos se mantendrán activos mientras el usuario o el negocio cliente utilice nuestros servicios.
b) Eliminación a solicitud del usuario: Los datos serán eliminados cuando el usuario final o el negocio cliente solicite expresamente su supresión, ejercitando su derecho de supresión conforme al artículo 17 del RGPD.
c) Eliminación manual: Los usuarios y negocios clientes tienen la posibilidad de eliminar sus datos de forma manual a través de las funcionalidades habilitadas en nuestras plataformas.
5.2. Conservación por obligaciones legales
Una vez finalizada la relación contractual o eliminados los datos a petición del interesado, Fluxo Services podrá conservar los datos personales debidamente bloqueados durante los plazos establecidos por la legislación aplicable para atender posibles responsabilidades derivadas del tratamiento, incluyendo:
•	Obligaciones fiscales y contables: hasta 6 años desde la última anotación (conforme al Código de Comercio y normativa tributaria)
•	Datos de facturación y transacciones: conforme a la normativa fiscal aplicable
•	Información necesaria para la defensa frente a reclamaciones: hasta la prescripción de las posibles acciones legales
5.3. Eliminación segura
Transcurridos los plazos de conservación aplicables, los datos personales serán eliminados de forma segura y definitiva, mediante procedimientos que garanticen su destrucción irreversible.
________________________________________
6. DERECHOS DEL USUARIO
De conformidad con el RGPD y la LOPDGDD, los usuarios tienen reconocidos y pueden ejercitar los siguientes derechos:
6.1. Derecho de acceso (artículo 15 RGPD)
Obtener confirmación de si Fluxo Services está tratando datos personales que le conciernen y, en tal caso, obtener información sobre los datos concretos objeto de tratamiento y las condiciones del tratamiento.
6.2. Derecho de rectificación (artículo 16 RGPD)
Obtener la rectificación de los datos personales inexactos o incompletos que le conciernen.
6.3. Derecho de supresión o "derecho al olvido" (artículo 17 RGPD)
Obtener la supresión de los datos personales cuando concurra alguna de las circunstancias previstas en el RGPD, incluyendo cuando los datos ya no sean necesarios para los fines para los que fueron recogidos.
6.4. Derecho de limitación del tratamiento (artículo 18 RGPD)
Obtener la limitación del tratamiento de los datos cuando se cumpla alguna de las condiciones establecidas en el RGPD.
6.5. Derecho a la portabilidad (artículo 20 RGPD)
Recibir los datos personales que le incumban en un formato estructurado, de uso común y lectura mecánica, y transmitirlos a otro responsable cuando el tratamiento esté basado en el consentimiento o en un contrato y se realice por medios automatizados.
6.6. Derecho de oposición (artículo 21 RGPD)
Oponerse al tratamiento de sus datos personales cuando el tratamiento esté basado en el interés legítimo del responsable o en el interés público.
6.7. Derecho a no ser objeto de decisiones individuales automatizadas (artículo 22 RGPD)
No ser objeto de una decisión basada únicamente en el tratamiento automatizado, incluida la elaboración de perfiles, que produzca efectos jurídicos o le afecte significativamente de modo similar.
6.8. Derecho a retirar el consentimiento
Cuando el tratamiento esté basado en el consentimiento, el usuario tiene derecho a retirarlo en cualquier momento, sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.
6.9. Ejercicio de los derechos
Para ejercitar cualquiera de estos derechos, el usuario puede dirigirse a Fluxo Services mediante:
•	Correo electrónico: pxservices@pxcorporation.org
•	Solicitud escrita indicando claramente el derecho que desea ejercitar, acompañada de copia del DNI/NIE o documento identificativo equivalente
Fluxo Services responderá a las solicitudes en el plazo máximo de un mes desde la recepción, pudiendo prorrogarse dos meses más en caso de solicitudes complejas, informando al interesado de dicha prórroga.
6.10. Derecho a reclamar ante la autoridad de control
Si el usuario considera que el tratamiento de sus datos personales vulnera la normativa de protección de datos, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD):
•	Sede electrónica: www.aepd.es
•	Dirección postal: C/ Jorge Juan, 6, 28001 Madrid
•	Teléfono: 901 100 099 / 91 266 35 17
________________________________________
7. SEGURIDAD DE LOS DATOS
Fluxo Services se compromete a garantizar la seguridad de los datos personales y ha implementado las medidas técnicas y organizativas apropiadas para proteger los datos contra la destrucción accidental o ilícita, la pérdida, alteración, comunicación o acceso no autorizados, conforme a lo establecido en el artículo 32 del RGPD.
7.1. Medidas técnicas de seguridad
•	Cifrado de datos: Tanto en tránsito (mediante protocolos TLS/SSL) como en reposo en las bases de datos
•	Control de acceso: Sistemas de autenticación robusta y gestión de permisos basada en roles
•	Firewalls y protección perimetral: Para prevenir accesos no autorizados a los sistemas
•	Copias de seguridad: Realizadas periódicamente y almacenadas de forma cifrada
•	Monitorización continua: Detección de actividades anómalas y posibles incidentes de seguridad
•	Actualizaciones de seguridad: Mantenimiento actualizado de todos los sistemas y componentes
7.2. Medidas organizativas
•	Política de privacidad y seguridad: Documentación interna y procedimientos de actuación
•	Formación del personal: Capacitación continua en materia de protección de datos
•	Acuerdos de confidencialidad: Con todo el personal que tiene acceso a datos personales
•	Evaluación de riesgos: Análisis periódico de los riesgos para la seguridad de los datos
•	Plan de respuesta ante incidentes: Procedimientos establecidos para la gestión de brechas de seguridad
7.3. Proveedores de servicios
Fluxo Services garantiza que todos sus encargados del tratamiento (Supabase, Stripe, Gumroad) cumplen con estándares de seguridad equivalentes y ofrecen garantías suficientes para aplicar medidas técnicas y organizativas apropiadas conforme al RGPD.
7.4. Notificación de brechas de seguridad
En caso de que se produjera una violación de la seguridad de los datos personales que entrañe un riesgo para los derechos y libertades de los interesados, Fluxo Services:
•	Notificará la brecha a la Agencia Española de Protección de Datos en el plazo de 72 horas
•	Comunicará la incidencia a los usuarios afectados cuando exista un alto riesgo para sus derechos y libertades
•	Documentará internamente todas las brechas de seguridad, sus efectos y las medidas adoptadas
________________________________________
8. MODIFICACIONES DE LA POLÍTICA DE PRIVACIDAD
Fluxo Services se reserva el derecho de modificar la presente Política de Privacidad para adaptarla a novedades legislativas, jurisprudenciales, o cambios en las prácticas de tratamiento de datos.
8.1. Comunicación de cambios
Cualquier modificación de esta Política será publicada en la página web de Fluxo Services (www.fluxoservices.com) y en las plataformas de cada producto (GastroBot, Split-QR), indicando claramente la fecha de la última actualización.
8.2. Cambios sustanciales
Cuando se produzcan cambios sustanciales que afecten significativamente a los derechos de los usuarios, Fluxo Services:
•	Informará a los usuarios mediante notificación por correo electrónico u otros medios de comunicación habituales
•	Solicitará, cuando sea legalmente necesario, un nuevo consentimiento para el tratamiento de datos conforme a las nuevas condiciones
8.3. Aceptación de las modificaciones
El uso continuado de los servicios de Fluxo Services tras la publicación de las modificaciones constituye la aceptación de las mismas. Si el usuario no está de acuerdo con los cambios introducidos, deberá cesar en el uso de los servicios y podrá ejercitar su derecho de supresión de datos.
________________________________________
9. CONTACTO Y DELEGADO DE PROTECCIÓN DE DATOS
9.1. Información y consultas
Para cualquier duda, aclaración o solicitud relacionada con la presente Política de Privacidad o con el tratamiento de sus datos personales, puede contactar con Fluxo Services a través de:
Correo electrónico: pxservices@pxcorporation.org
Asunto recomendado: "Protección de Datos - [indicar motivo de la consulta]"
9.2. Datos de contacto del responsable
Fluxo Services
Titulares: Alejandro Mata Ortega y Nicolás Díaz Corominas
Correo electrónico general: pxservices@pxcorporation.org 
Sitio web: www.fluxoservices.com
9.3. Compromiso con la privacidad
Fluxo Services se compromete a responder todas las consultas y solicitudes relacionadas con la protección de datos en el menor tiempo posible y, en todo caso, dentro de los plazos legalmente establecidos.
________________________________________
10. LEGISLACIÓN APLICABLE
La presente Política de Privacidad se rige por la legislación española y europea en materia de protección de datos personales, específicamente:
•	Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016 (RGPD)
•	Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD)
•	Legislación complementaria española y europea aplicable en materia de privacidad y protección de datos
________________________________________
11. CONSENTIMIENTO INFORMADO
Al utilizar los servicios de Fluxo Services, GastroBot o Split-QR, el usuario declara:
•	Haber leído y comprendido la presente Política de Privacidad
•	Conocer sus derechos en materia de protección de datos personales
•	Otorgar su consentimiento libre, informado, específico e inequívoco para el tratamiento de sus datos personales conforme a lo establecido en este documento
El usuario puede retirar su consentimiento en cualquier momento mediante el procedimiento establecido en el apartado 6 de esta Política.
________________________________________
Fecha de última actualización: 9 de octubre de 2025
Fluxo Services
Automatización inteligente para tu negocio
  `;

  const TERMS_TEXT = `
TÉRMINOS Y CONDICIONES DE USO
Fluxo Services (marca comercial de PX Corporation)
Última actualización: 9 de octubre de 2025
________________________________________
1. OBJETO Y ACEPTACIÓN
Los presentes Términos y Condiciones regulan el acceso y uso de los servicios de software ofrecidos bajo la marca Fluxo Services, propiedad de PX Corporation, incluyendo los productos GastroBot y Split-QR (en adelante, "los Servicios").
El acceso y utilización de los Servicios implica la aceptación plena y sin reservas de todos los términos aquí establecidos. Si no está de acuerdo con estos términos, le rogamos que no utilice nuestros Servicios.
Estos Términos y Condiciones están disponibles de forma permanente en la sección legal de nuestro sitio web y podrán ser almacenados y reproducidos por el usuario.
________________________________________
2. IDENTIFICACIÓN DEL TITULAR
Denominación social: PX Corporation
Marca comercial: Fluxo Services
Representantes legales: Alejandro Mata Ortega y Nicolás Díaz Corominas
Domicilio social: España
CIF: 
Contacto: pxservices@pxcorporation.org
Sitio web: www.fluxoservices.com
PX Corporation es una empresa española de tecnología y automatización que opera diversas marcas de software. Fluxo Services constituye su división especializada en soluciones SaaS basadas en inteligencia artificial para la automatización de procesos empresariales.
________________________________________
3. DESCRIPCIÓN DE LOS SERVICIOS
Fluxo Services ofrece software como servicio (SaaS) para empresas del sector de restauración y hostelería, mediante los siguientes productos:
3.1. GastroBot
Sistema de chatbot automatizado basado en inteligencia artificial que permite a los negocios:
•	Gestionar reservas de forma automatizada
•	Procesar pagos online
•	Ofrecer atención al cliente mediante conversación automatizada
•	Integrar funcionalidades de CRM (gestión de relaciones con clientes)
3.2. Split-QR
Módulo complementario que facilita:
•	División de pagos entre múltiples comensales
•	Generación de códigos QR únicos para cada transacción
•	Procesamiento individual de pagos fraccionados
3.3. Modelo operativo
Los Servicios se ofrecen bajo modelo SaaS a empresas registradas (en adelante, "Negocios Cliente" o "Cliente"). Los usuarios finales (comensales, clientes de los restaurantes) interactúan con los chatbots y funcionalidades proporcionadas, pero no mantienen relación contractual directa con Fluxo Services ni con PX Corporation.
Los Servicios se prestan exclusivamente a través de plataformas digitales accesibles mediante conexión a internet, sin distribución de software para instalación local.
________________________________________
4. ACCESO Y REGISTRO
4.1. Capacidad legal
Para registrarse como Negocio Cliente, es necesario ser persona física mayor de edad con capacidad legal para contratar, o persona jurídica debidamente constituida y representada. El registro implica la declaración expresa de que se cumplen estos requisitos.
4.2. Proceso de registro
El acceso a los Servicios requiere completar el proceso de registro proporcionando información veraz, exacta y actualizada, incluyendo:
•	Denominación social o nombre comercial del negocio
•	CIF/NIF
•	Datos de contacto (correo electrónico, teléfono)
•	Información de facturación
•	Cualquier otra información requerida para la prestación del servicio
4.3. Credenciales de acceso
El Cliente será responsable de mantener la confidencialidad de sus credenciales de acceso (usuario y contraseña). Cualquier uso de la cuenta será responsabilidad del titular registrado. El Cliente debe notificar inmediatamente cualquier uso no autorizado de su cuenta.
4.4. Verificación
PX Corporation se reserva el derecho de verificar la identidad y legitimidad de los Clientes registrados, pudiendo solicitar documentación adicional y suspender temporalmente el servicio hasta completar dicha verificación.
________________________________________
5. OBLIGACIONES DE USUARIOS Y NEGOCIOS
5.1. Obligaciones del Negocio Cliente
Los Clientes se comprometen a:
a) Uso conforme a derecho: Utilizar los Servicios de conformidad con la legislación vigente, estos Términos y Condiciones, y las buenas prácticas comerciales.
b) Veracidad de la información: Proporcionar información veraz, completa y actualizada durante el registro y uso de los Servicios.
c) Cumplimiento normativo: Cumplir con toda la normativa aplicable en materia de protección de datos (RGPD, LOPDGDD), protección al consumidor, comercio electrónico y cualquier otra que resulte aplicable a su actividad.
d) Información a usuarios finales: Informar adecuadamente a sus propios clientes (usuarios finales) sobre el uso de sistemas automatizados, tratamiento de datos personales y condiciones de servicio aplicables.
e) Responsabilidad sobre contenidos: Ser responsable exclusivo de los contenidos, mensajes, información y comunicaciones que configure en los Servicios para interactuar con sus clientes.
f) Seguridad: Implementar medidas de seguridad adecuadas en su organización y mantener la confidencialidad de sus credenciales de acceso.
5.2. Usos prohibidos
Queda expresamente prohibido:
•	Utilizar los Servicios para fines ilícitos, fraudulentos o contrarios a estos Términos
•	Realizar actividades que vulneren derechos de terceros o de PX Corporation
•	Intentar acceder a áreas restringidas de los sistemas o interferir con su funcionamiento
•	Realizar ingeniería inversa, descompilar o desensamblar el software
•	Utilizar los Servicios para distribuir malware, spam o contenido nocivo
•	Manipular o alterar el funcionamiento de los Servicios
•	Ceder, revender o sublicenciar el acceso a los Servicios sin autorización expresa
•	Utilizar sistemas automatizados para extraer datos (scraping) sin consentimiento
•	Suplantar la identidad de terceros o proporcionar información falsa
5.3. Consecuencias del incumplimiento
El incumplimiento de estas obligaciones podrá dar lugar a la suspensión temporal o definitiva del servicio, sin perjuicio del derecho de PX Corporation a ejercitar las acciones legales que correspondan y a reclamar la indemnización por daños y perjuicios causados.
________________________________________
6. RESPONSABILIDADES DE FLUXO SERVICES / PX CORPORATION
6.1. Prestación del servicio
PX Corporation se compromete a:
a) Disponibilidad: Mantener los Servicios operativos y accesibles, si bien no garantiza una disponibilidad ininterrumpida del 100% debido a posibles tareas de mantenimiento, actualizaciones o circunstancias técnicas.
b) Funcionalidad: Procurar que los Servicios funcionen conforme a las especificaciones descritas y documentadas.
c) Soporte técnico: Proporcionar asistencia técnica razonable a través de los canales habilitados.
d) Seguridad: Implementar medidas técnicas y organizativas apropiadas para proteger la seguridad de los sistemas y datos tratados.
6.2. Mantenimiento y actualizaciones
PX Corporation podrá realizar:
•	Mantenimientos programados, notificando previamente cuando sea posible
•	Actualizaciones y mejoras de los Servicios sin previo aviso
•	Modificaciones en las funcionalidades para adaptarse a cambios normativos o tecnológicos
Durante los períodos de mantenimiento programado, los Servicios podrán estar temporalmente no disponibles. PX Corporation procurará realizar estas operaciones en horarios de menor impacto.
6.3. Relación con usuarios finales
PX Corporation no mantiene relación contractual directa con los usuarios finales (clientes de los Negocios Cliente). La relación contractual se establece exclusivamente entre:
•	PX Corporation y el Negocio Cliente
•	El Negocio Cliente y sus propios clientes (usuarios finales)
El Negocio Cliente actúa como responsable del tratamiento de datos de sus clientes finales y es responsable de cumplir con todas las obligaciones legales derivadas de dicha relación.
________________________________________
7. PROPIEDAD INTELECTUAL E INDUSTRIAL
7.1. Titularidad
Todos los derechos de propiedad intelectual e industrial sobre los Servicios, incluyendo pero no limitándose a software, código fuente, diseño, estructura, marcas, logotipos, nombres comerciales, bases de datos, contenidos y documentación, son propiedad exclusiva de PX Corporation o de sus licenciantes.
Las marcas Fluxo Services, GastroBot y Split-QR son propiedad de PX Corporation y están protegidas por la legislación española y europea sobre marcas y propiedad industrial.
7.2. Licencia de uso
PX Corporation otorga al Cliente una licencia de uso no exclusiva, intransferible, limitada y revocable para acceder y utilizar los Servicios conforme a estos Términos, exclusivamente para los fines comerciales legítimos del Cliente.
Esta licencia no implica cesión alguna de derechos de propiedad intelectual o industrial.
7.3. Restricciones
El Cliente no podrá:
•	Copiar, modificar, adaptar o crear obras derivadas de los Servicios
•	Realizar ingeniería inversa o intentar extraer el código fuente
•	Eliminar o alterar avisos de propiedad intelectual o industrial
•	Utilizar las marcas de PX Corporation sin autorización expresa y por escrito
•	Comercializar, sublicenciar o distribuir los Servicios a terceros
7.4. Contenidos del Cliente
Los contenidos, datos y configuraciones introducidos por el Cliente en los Servicios permanecen bajo su titularidad. El Cliente otorga a PX Corporation una licencia limitada para procesar, almacenar y utilizar dichos contenidos exclusivamente para la prestación de los Servicios contratados.
7.5. Feedback y sugerencias
Cualquier comentario, sugerencia o feedback proporcionado por el Cliente sobre los Servicios podrá ser utilizado libremente por PX Corporation sin obligación de compensación o reconocimiento.
________________________________________
8. CONDICIONES ECONÓMICAS Y PAGOS
8.1. Modelo de precios
Los Servicios se ofrecen mediante modelo de suscripción o pago recurrente según los planes y tarifas publicados en el sitio web de Fluxo Services o comunicados al Cliente durante el proceso de contratación.
PX Corporation se reserva el derecho a modificar sus tarifas, notificando al Cliente con antelación razonable. Las modificaciones no afectarán a períodos de suscripción ya pagados.
8.2. Facturación
La facturación se realizará conforme a la periodicidad contratada (mensual, anual u otra). El Cliente recibirá las facturas correspondientes en formato electrónico a la dirección de correo facilitada.
Las facturas emitidas cumplirán con los requisitos establecidos en la normativa fiscal española vigente.
8.3. Medios de pago
Los pagos se procesarán a través de Stripe, proveedor de servicios de pago certificado PCI DSS. PX Corporation no almacena directamente datos completos de tarjetas de crédito de los Clientes.
Para la adquisición de licencias de Fluxo Services también se utiliza Gumroad como plataforma de venta autorizada.
8.4. Pagos automatizados
En caso de suscripciones recurrentes, el Cliente autoriza el cargo automático en el medio de pago designado en cada período de facturación.
8.5. Impagos y suspensión
El impago de las cuotas debidas en plazo podrá conllevar:
•	Suspensión temporal del acceso a los Servicios tras notificación
•	Aplicación de intereses de demora conforme a la Ley 3/2004
•	Resolución del contrato y baja definitiva del servicio
•	Ejercicio de acciones legales para el cobro de las cantidades adeudadas
8.6. Comisiones de terceros
Los Servicios procesan pagos de usuarios finales (clientes de los Negocios Cliente) a través de Stripe. Las comisiones aplicadas por Stripe serán transparentes y se informarán al Cliente. PX Corporation no obtiene beneficio adicional sobre dichas comisiones de procesamiento.
8.7. Reembolsos
Las políticas de reembolso, cuando apliquen, se especificarán en las condiciones particulares de cada plan contratado. Con carácter general, los pagos realizados por períodos de servicio ya iniciados no son reembolsables, salvo en casos de incumplimiento grave imputable a PX Corporation.
________________________________________
9. LIMITACIÓN DE RESPONSABILIDAD
9.1. Exclusiones generales
En la máxima medida permitida por la legislación aplicable, PX Corporation no será responsable de:
a) Uso inadecuado: Daños derivados del uso indebido, negligente o contrario a estos Términos por parte del Cliente o terceros.
b) Contenidos de terceros: Contenidos, informaciones o comunicaciones generadas por el Cliente o usuarios finales a través de los Servicios.
c) Servicios de terceros: Fallos, interrupciones o problemas derivados de servicios de terceros integrados (Supabase, Stripe, Gumroad, proveedores de conectividad, etc.).
d) Fuerza mayor: Interrupciones causadas por eventos de fuerza mayor, casos fortuitos, ataques cibernéticos, fallos de infraestructura de internet, cortes de suministro eléctrico o cualquier circunstancia ajena al control razonable de PX Corporation.
e) Decisiones empresariales: Decisiones comerciales adoptadas por el Cliente basándose en información o funcionalidades de los Servicios.
f) Pérdida de datos: Pérdida de datos cuando el Cliente no haya mantenido copias de seguridad propias, sin perjuicio de las medidas de respaldo implementadas por PX Corporation.
9.2. Limitación cuantitativa
En ningún caso la responsabilidad total de PX Corporation, por cualquier concepto y en conjunto, excederá del importe total abonado por el Cliente durante los doce (12) meses inmediatamente anteriores al evento que originó la reclamación.
9.3. Exclusión de daños indirectos
PX Corporation no será responsable de daños indirectos, lucro cesante, pérdida de oportunidades de negocio, daño reputacional, pérdida de datos o cualquier otro perjuicio indirecto o consecuencial, aun cuando hubiera sido advertida de su posibilidad.
9.4. Garantías
Los Servicios se prestan "tal cual" y "según disponibilidad". Sin perjuicio de las garantías legales imperativas, PX Corporation no garantiza:
•	Funcionamiento ininterrumpido o libre de errores
•	Resultados específicos o aumento de ventas para el Cliente
•	Compatibilidad con todos los dispositivos, navegadores o sistemas operativos
•	Ausencia total de vulnerabilidades de seguridad
9.5. Obligación de mitigar daños
El Cliente se compromete a adoptar medidas razonables para mitigar cualquier daño que pudiera sufrir, incluyendo la notificación inmediata de incidencias a PX Corporation.
9.6. Indemnización por el Cliente
El Cliente mantendrá indemne a PX Corporation frente a cualquier reclamación, demanda, pérdida o gasto (incluyendo honorarios legales razonables) derivados de:
•	Incumplimiento de estos Términos por parte del Cliente
•	Uso ilícito de los Servicios
•	Vulneración de derechos de terceros
•	Incumplimiento de normativa aplicable en relación con usuarios finales
________________________________________
10. PROTECCIÓN DE DATOS PERSONALES
10.1. Responsables del tratamiento
En el marco de la prestación de los Servicios se producen diferentes tratamientos de datos personales:
a) PX Corporation como Responsable: Trata datos personales del Negocio Cliente (datos de registro, facturación, contacto) para la gestión de la relación contractual.
b) Negocio Cliente como Responsable: Es responsable del tratamiento de datos de sus propios clientes (usuarios finales) que interactúan con los chatbots y funcionalidades.
c) PX Corporation como Encargado del Tratamiento: En relación con los datos de usuarios finales, PX Corporation actúa como encargado del tratamiento por cuenta del Negocio Cliente, limitándose a procesar dichos datos según las instrucciones del Cliente y conforme a la legislación aplicable.
10.2. Normativa aplicable
Todos los tratamientos de datos se realizan en cumplimiento de:
•	Reglamento (UE) 2016/679 (RGPD)
•	Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD)
•	Ley 34/2002, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE)
10.3. Información detallada
La información completa sobre el tratamiento de datos personales, incluyendo finalidades, legitimación, destinatarios, plazos de conservación, derechos de los interesados y medidas de seguridad, se encuentra disponible en la Política de Privacidad de Fluxo Services, accesible en [enlace a Política de Privacidad].
Dicha Política de Privacidad forma parte integrante de estos Términos y Condiciones.
10.4. Obligaciones del Cliente
El Negocio Cliente se compromete a:
a) Cumplir con el RGPD y la LOPDGDD en el tratamiento de datos de sus propios clientes.
b) Informar adecuadamente a los usuarios finales sobre el tratamiento de sus datos, incluyendo la intervención de PX Corporation como encargado del tratamiento.
c) Obtener las bases de legitimación necesarias (consentimiento, ejecución contractual, etc.) para el tratamiento de datos de usuarios finales.
d) Facilitar el ejercicio de derechos (acceso, rectificación, supresión, etc.) de los usuarios finales, coordinándose con PX Corporation cuando sea necesario.
e) No tratar categorías especiales de datos (datos sensibles) a través de los Servicios sin autorización expresa de PX Corporation y sin implementar las garantías legales exigibles.
f) Notificar a PX Corporation cualquier brecha de seguridad que afecte a datos tratados en el marco de los Servicios.
10.5. Servicios de terceros
PX Corporation utiliza los siguientes subencargados del tratamiento:
•	Supabase: Almacenamiento y gestión de bases de datos
•	Stripe: Procesamiento de pagos
•	Gumroad: Venta de licencias
Estos proveedores cumplen con el RGPD y mantienen medidas de seguridad adecuadas. El Cliente autoriza expresamente la subcontratación de estos servicios.
10.6. Transferencias internacionales
En caso de que los servicios de terceros impliquen transferencias internacionales de datos fuera del Espacio Económico Europeo, PX Corporation garantiza que dichas transferencias se realizan con las garantías adecuadas previstas en el RGPD (cláusulas contractuales tipo, decisiones de adecuación, etc.).
10.7. Conservación de datos
Los datos se conservarán durante el tiempo necesario para cumplir con las finalidades del tratamiento y, posteriormente, durante los plazos legales de prescripción aplicables (generalmente 6 años en materia contractual y fiscal).
Tras la finalización del contrato, PX Corporation procederá a la supresión o devolución de los datos del Cliente conforme a lo acordado, salvo obligación legal de conservación.
________________________________________
11. MODIFICACIONES DE LOS TÉRMINOS
11.1. Derecho de modificación
PX Corporation se reserva el derecho a modificar estos Términos y Condiciones en cualquier momento, con el fin de adaptarlos a:
•	Cambios legislativos o regulatorios
•	Evolución tecnológica de los Servicios
•	Nuevas funcionalidades o características
•	Mejoras en la seguridad o privacidad
•	Decisiones organizativas o comerciales
11.2. Notificación
Las modificaciones se notificarán a los Clientes con una antelación mínima de treinta (30) días naturales a su entrada en vigor, mediante:
•	Publicación en el sitio web de Fluxo Services
•	Comunicación al correo electrónico registrado del Cliente
•	Notificación en el panel de usuario del Servicio
En caso de modificaciones sustanciales que afecten de manera significativa a los derechos u obligaciones del Cliente, el plazo de notificación será de sesenta (60) días naturales.
11.3. Aceptación o derecho de resolución
El uso continuado de los Servicios tras la entrada en vigor de las modificaciones constituye la aceptación de los nuevos Términos.
Si el Cliente no estuviera de acuerdo con las modificaciones, podrá resolver el contrato comunicándolo por escrito antes de la fecha de entrada en vigor, sin penalización alguna. En tal caso:
•	Se procederá al cese del servicio
•	No se devolverán importes correspondientes al período en curso ya iniciado
•	Se facilitará la exportación de datos del Cliente cuando sea técnicamente posible
11.4. Versión vigente
La versión vigente de los Términos y Condiciones será siempre la publicada en el sitio web de Fluxo Services, donde constará la fecha de última actualización.
Se recomienda a los Clientes revisar periódicamente estos Términos para estar informados de cualquier cambio.
________________________________________
12. DURACIÓN Y RESOLUCIÓN DEL CONTRATO
12.1. Duración
El contrato tendrá la duración del período de suscripción contratado (mensual, anual u otro) y se renovará automáticamente por períodos equivalentes, salvo manifestación en contrario de cualquiera de las partes.
12.2. Resolución por el Cliente
El Cliente podrá resolver el contrato en cualquier momento mediante notificación escrita a través de los canales habilitados, con los siguientes efectos:
a) Resolución anticipada: Si el Cliente resuelve antes de finalizar el período de suscripción pagado, no tendrá derecho a reembolso proporcional, salvo incumplimiento grave imputable a PX Corporation.
b) No renovación: Si el Cliente desea no renovar al finalizar el período en curso, deberá comunicarlo con al menos siete (7) días de antelación a la fecha de renovación.
c) Baja efectiva: El servicio permanecerá activo hasta la finalización del período pagado.
12.3. Resolución por PX Corporation
PX Corporation podrá resolver el contrato de forma inmediata en los siguientes supuestos:
a) Incumplimiento grave: Incumplimiento grave o reiterado de estos Términos por parte del Cliente.
b) Uso ilícito: Utilización de los Servicios para fines ilícitos o fraudulentos.
c) Impago: Falta de pago de las cantidades adeudadas tras requerimiento.
d) Riesgo para el sistema: Conductas que pongan en riesgo la seguridad, estabilidad o integridad de los Servicios.
e) Cesación del servicio: Decisión empresarial de cesar la prestación de los Servicios, notificando con al menos noventa (90) días de antelación.
12.4. Efectos de la resolución
Tras la resolución del contrato:
a) Acceso: El Cliente perderá el acceso inmediato a los Servicios.
b) Datos: PX Corporation facilitará la exportación de datos del Cliente durante un plazo razonable (no inferior a 30 días) tras la resolución, siempre que no exista incumplimiento grave por parte del Cliente.
c) Supresión: Transcurrido el plazo de exportación, PX Corporation procederá a la supresión de los datos conforme a su política de retención, salvo obligación legal de conservación.
d) Obligaciones pendientes: La resolución no exime del cumplimiento de obligaciones pendientes (pagos adeudados, responsabilidades por incumplimientos previos, etc.).
________________________________________
13. LEGISLACIÓN APLICABLE Y JURISDICCIÓN
13.1. Legislación aplicable
Estos Términos y Condiciones se rigen por la legislación española, en particular:
•	Código Civil español
•	Ley 7/1998, sobre Condiciones Generales de la Contratación
•	Ley 34/2002, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE)
•	Reglamento (UE) 2016/679 (RGPD) y Ley Orgánica 3/2018 (LOPDGDD)
•	Real Decreto Legislativo 1/2007, de defensa de consumidores y usuarios (cuando aplique)
•	Cualquier otra normativa española o europea que resulte aplicable
13.2. Resolución de conflictos
Para Clientes que sean consumidores (personas físicas que actúen fuera de su actividad comercial o profesional):
Conforme a la normativa de consumo, podrá acudir a los sistemas de resolución alternativa de conflictos:
•	Plataforma europea de resolución de litigios en línea: https://ec.europa.eu/consumers/odr
•	Juntas Arbitrales de Consumo u otros órganos de mediación oficiales
Para Clientes empresas o profesionales:
En caso de controversia, las partes se comprometen a intentar una solución amistosa de buena fe. Si no fuera posible, se someterán a mediación antes de acudir a la vía judicial.
13.3. Jurisdicción
Con renuncia expresa a cualquier otro fuero que pudiera corresponder, las partes se someten a la jurisdicción de los Juzgados y Tribunales de [Ciudad, España], salvo que la ley establezca imperativamente otra jurisdicción.
Para Clientes consumidores, será aplicable el fuero del domicilio del consumidor cuando la normativa así lo establezca.
________________________________________
14. DISPOSICIONES GENERALES
14.1. Integridad del acuerdo
Estos Términos y Condiciones, junto con la Política de Privacidad y cualquier condición particular aplicable al plan contratado, constituyen el acuerdo completo entre las partes, sustituyendo cualquier acuerdo previo oral o escrito.
14.2. Nulidad parcial
Si cualquier disposición de estos Términos fuera declarada nula o inaplicable por resolución judicial o administrativa, dicha nulidad no afectará a la validez del resto de disposiciones, que permanecerán en pleno vigor.
14.3. Renuncia
La falta de ejercicio o el retraso en el ejercicio de cualquier derecho por parte de PX Corporation no constituirá renuncia al mismo, salvo manifestación expresa y por escrito.
14.4. Cesión
El Cliente no podrá ceder, transferir o sublicenciar sus derechos u obligaciones derivados de estos Términos sin consentimiento previo y por escrito de PX Corporation.
PX Corporation podrá ceder el contrato a cualquier entidad de su grupo empresarial o a terceros en caso de operaciones de reestructuración, fusión o adquisición, notificándolo al Cliente.
14.5. Notificaciones
Todas las notificaciones relevantes entre las partes se realizarán mediante:
•	Correo electrónico a las direcciones registradas
•	Notificación en el panel de usuario del Servicio
•	Comunicación certificada al domicilio social (cuando sea legalmente necesario)
El Cliente es responsable de mantener actualizada su dirección de correo electrónico de contacto.
14.6. Idioma
Estos Términos y Condiciones están redactados en español. En caso de traducción a otros idiomas, prevalecerá siempre la versión en español ante cualquier discrepancia interpretativa.
14.7. Títulos
Los títulos de las secciones se incluyen únicamente por comodidad y no afectan a la interpretación de las disposiciones.
________________________________________
15. CONTACTO Y ATENCIÓN AL CLIENTE
Para cualquier consulta, solicitud, reclamación o ejercicio de derechos relacionados con estos Términos y Condiciones, puede contactar con PX Corporation - Fluxo Services a través de:
Correo electrónico: [correo de soporte/legal]
Sitio web: [URL del sitio web]
Domicilio social: [Dirección completa]
PX Corporation se compromete a responder a las consultas en un plazo razonable, generalmente no superior a diez (10) días hábiles.
________________________________________
16. ACEPTACIÓN Y CONSTANCIA
El acceso y uso de los Servicios de Fluxo Services implica que el Cliente:
✓ Ha leído íntegramente estos Términos y Condiciones
✓ Los comprende y acepta sin reservas
✓ Tiene capacidad legal suficiente para obligarse
✓ Acepta quedar vinculado por todas las disposiciones aquí establecidas
La aceptación se manifiesta mediante:
•	Marcación de la casilla de aceptación durante el registro
•	Uso continuado de los Servicios tras su puesta a disposición
•	Cualquier otra acción que inequívocamente manifieste el consentimiento
________________________________________
Última actualización: 9 de octubre de 2025
© 2025 PX Corporation. Todos los derechos reservados.
Fluxo Services, GastroBot y Split-QR son marcas comerciales de PX Corporation.
________________________________________
  `;

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Fluxo</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Software inteligente para negocios. Tu negocio, sin pausas.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>Gastrobot</li>
              <li>Split QR</li>
              <li>Softwares</li>
              <li>Soluciones personalizadas</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/34633885686"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/80 hover:underline"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:pxservices@pxcorporation.org"
                className="flex items-center gap-3 text-primary-foreground/80 hover:underline"
              >
                <Mail className="w-4 h-4" />
                <span>pxservices@pxcorporation.org</span>
              </a>
              <a
                href="tel:+34633885686"
                className="flex items-center gap-3 text-primary-foreground/80 hover:underline"
              >
                <Phone className="w-4 h-4" />
                <span>+34 633 885 686</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Fluxo, Powered by Velarium. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            {/* ✅ Activados los botones */}
            <button
              onClick={() => {
                setTab("privacy");
                setOpen(true);
              }}
              className="hover:text-primary-foreground transition-colors"
            >
              Política de Privacidad
            </button>
            <button
              onClick={() => {
                setTab("terms");
                setOpen(true);
              }}
              className="hover:text-primary-foreground transition-colors"
            >
              Términos de Servicio
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Modal legal */}
      <FooterLegal
        open={open}
        onClose={() => setOpen(false)}
        content={tab === "privacy" ? PRIVACY_TEXT : TERMS_TEXT}
        title={
          tab === "privacy"
            ? "Política de Privacidad"
            : "Términos y Condiciones"
        }
      />
    </footer>
  );
};

export default Footer;
