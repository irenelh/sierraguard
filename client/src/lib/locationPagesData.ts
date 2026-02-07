/**
 * Datos estructurados para Location Pages
 * Estructura: /control-de-plagas-[barrio]
 * Ejemplo: /control-de-plagas-centro-historico
 */

export interface LocationPageData {
  barrio: string;
  slug: string;
  h1: string;
  metaDescription: string;
  introParrafo: string;
  bloqueConfianza: string;
  serviciosEspecificos: Array<{
    titulo: string;
    descripcion: string;
    items: string[];
  }>;
  ctaText: string;
  ctaUrgencia?: boolean;
  trustBadges: string[];
  layoutVariant?: 'modern' | 'simple';
  textoSeo?: string;
  seoSections?: Array<{ title: string; content: string; icon?: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  zonasCercanas?: Array<{ nombre: string; slug: string }>;
  mapEmbedUrl?: string;
}

export const locationPagesData: Record<string, LocationPageData> = {
  "control-de-plagas-centro-historico": {
    barrio: "Centro Histórico",
    slug: "control-de-plagas-centro-historico",
    h1: "Control de Plagas en Centro Histórico Segovia | Desinsectación, Desratización, Desinfección",
    metaDescription:
      "Control profesional de plagas en Centro Histórico. Desinsectación, desratización, desinfección. Hoteles, restaurantes, comercios. Certificado CEPA. Llamada gratis 24/7.",
    introParrafo:
      "El Centro Histórico de Segovia, declarado Patrimonio de la Humanidad, es el corazón comercial y turístico de la ciudad. Con sus plazas emblemáticas como la Plaza Mayor, sus monumentos históricos y la concentración de hoteles de lujo, restaurantes de renombre y tiendas especializadas, esta zona requiere estándares de higiene excepcionales. Las plagas—especialmente cucarachas en cocinas industriales, chinches en habitaciones de hotel, y roedores en almacenes—son una amenaza constante que puede comprometer la reputación de tu negocio en cuestión de horas. Sierra Guard ofrece control integral de plagas especializado para establecimientos del Centro Histórico, con tratamientos discretos que respetan la arquitectura histórica y garantizan cero impacto en la experiencia del cliente.",
    bloqueConfianza:
      "Los hoteles y restaurantes del Centro Histórico enfrentan un dilema: necesitan control de plagas riguroso, pero no pueden permitirse interrupciones operativas ni daños a la fachada histórica. La competencia regional ofrece soluciones genéricas que no respetan el contexto patrimonial. Sierra Guard es diferente. Nuestro equipo CEPA certificado realiza tratamientos nocturnos y discretos, utilizando técnicas de sellado estructural que no requieren perforaciones. Contamos con experiencia comprobada en edificios históricos (más de 150 establecimientos en Segovia), y nuestro sistema de monitorización remota permite detectar plagas antes de que se conviertan en crisis. Además, ofrecemos reportes detallados para cumplir con normativas de salud pública sin exponer tu marca.",
    layoutVariant: "simple",
    mapEmbedUrl: "https://maps.google.com/maps?q=Centro+Historico+Segovia&t=&z=13&ie=UTF8&iwloc=&output=embed",
    faqs: [
      { question: "¿Cobráis por el desplazamiento al Centro Histórico?", answer: "No. El desplazamiento está incluido en nuestros servicios para todo el Centro Histórico de Segovia." },
      { question: "¿Son peligrosos los productos para mis mascotas?", answer: "Utilizamos productos de uso profesional diseñados para ser seguros. Los portacebos son de seguridad (llave) y los geles se aplican en zonas de difícil acceso. Siempre damos pautas de seguridad claras." },
      { question: "¿Dáis garantía del servicio?", answer: "Sí, todos nuestros tratamientos tienen garantía por escrito. Si el problema persiste dentro del periodo de garantía, volvemos a realizar el tratamiento sin coste alguno." },
      { question: "¿Atendéis urgencias en fin de semana?", answer: "Sí, disponemos de un servicio de urgencias 24 horas para casos graves como nidos de avispas peligrosos, presencia de ratas en interior de vivienda o plagas que obliguen al cierre de negocios." }
    ],
    serviciosEspecificos: [
      {
        titulo: "Desinsectación Especializada",
        descripcion: "Control de cucarachas, chinches, termitas y avispas",
        items: [
          "Tratamiento térmico sin químicos para chinches (rotación rápida entre huéspedes)",
          "Inspección preventiva de habitaciones con alertas en tiempo real",
          "Desinsectación de cocinas industriales y conductos de ventilación",
          "Retirada urgente de nidos de avispa velutina (respuesta en 2 horas)",
        ],
      },
      {
        titulo: "Desratización Inteligente",
        descripcion: "Smart traps 24/7 y sellado estructural permanente",
        items: [
          "Monitorización inteligente con alertas en tiempo real",
          "Auditoría de puntos de entrada y sellado estructural",
          "Rodent proofing permanente sin reinvasión",
          "Reportes automáticos para auditorías sanitarias",
        ],
      },
      {
        titulo: "Desinfección y Bioseguridad",
        descripcion: "Control de legionella y patógenos",
        items: [
          "Auditoría de legionella en torres de refrigeración",
          "Desinfección de patógenos en aire y superficies",
          "Purificación de aire mediante UV-C",
          "Cumplimiento normativo europeo garantizado",
        ],
      },
    ],
    ctaText: "Te Llamamos Gratis en 24 Horas",
    trustBadges: [
      "Certificado CEPA (Confederación Europea de Empresas de Control de Plagas)",
      "Experiencia en 150+ establecimientos históricos de Segovia",
      "Garantía 100% - Si ves plagas, repetimos sin coste",
      "Métodos respetuosos con patrimonio histórico",
    ],
  },

  "control-de-plagas-azoguejo": {
    barrio: "Azoguejo",
    slug: "control-de-plagas-azoguejo",
    h1: "Control de Plagas en Azoguejo Segovia | Smart Traps 24/7 y Monitorización",
    metaDescription:
      "Control profesional de plagas en Azoguejo. Smart traps, desratización, desinsectación. Retail, almacenes, oficinas. Certificado CEPA. Respuesta en 24h.",
    introParrafo:
      "Azoguejo, la zona comercial moderna de Segovia, alberga centros de retail, oficinas corporativas y almacenes logísticos. Su proximidad a vías de tránsito y su densidad de negocios la hacen especialmente vulnerable a infestaciones de roedores y plagas. Las ratas no solo dañan infraestructuras y mercancía, sino que comprometen la seguridad alimentaria y la reputación corporativa. Las cucarachas pueden cerrar un negocio de retail en cuestión de días. Sierra Guard utiliza tecnología de monitorización inteligente (smart traps con alertas en tiempo real) para detectar actividad de plagas antes de que se conviertan en crisis. Nuestro enfoque de 'rodent proofing' (sellado estructural) cierra los puntos de entrada permanentemente, ofreciendo protección a largo plazo sin depender de venenos tóxicos.",
    bloqueConfianza:
      "Las empresas de retail y logística en Azoguejo enfrentan presión constante: auditorías de seguridad alimentaria, cumplimiento normativo, y la necesidad de mantener operaciones sin interrupciones. La competencia regional ofrece trampas pasivas que requieren revisión manual y generan reportes inconsistentes. Sierra Guard revoluciona esto con smart traps conectadas a nube, que envían alertas instantáneas a tu teléfono. Nuestro equipo CEPA realiza auditorías estructurales para identificar y sellar todos los puntos de entrada (grietas, tuberías, conductos). Resultado: reducción de 95% en actividad de plagas en 30 días, con documentación completa para auditorías.",
    layoutVariant: "simple",
    mapEmbedUrl: "https://maps.google.com/maps?q=Azoguejo+Segovia&t=&z=13&ie=UTF8&iwloc=&output=embed",
    faqs: [
      { question: "¿Cobráis por el desplazamiento a Azoguejo?", answer: "No. El desplazamiento está incluido en nuestros servicios para toda la zona de Azoguejo." },
      { question: "¿Son peligrosos los productos para mis mascotas?", answer: "Utilizamos productos de uso profesional diseñados para ser seguros. Los portacebos son de seguridad (llave) y los geles se aplican en zonas de difícil acceso. Siempre damos pautas de seguridad claras." },
      { question: "¿Dáis garantía del servicio?", answer: "Sí, todos nuestros tratamientos tienen garantía por escrito. Si el problema persiste dentro del periodo de garantía, volvemos a realizar el tratamiento sin coste alguno." },
      { question: "¿Atendéis urgencias en fin de semana?", answer: "Sí, disponemos de un servicio de urgencias 24 horas para casos graves como nidos de avispas peligrosos, presencia de ratas en interior de vivienda o plagas que obliguen al cierre de negocios." }
    ],
    serviciosEspecificos: [
      {
        titulo: "Desratización Inteligente",
        descripcion: "Monitorización profesional 24/7 con smart traps",
        items: [
          "Smart traps con alertas en tiempo real a tu teléfono",
          "Dashboard online para visualizar actividad de roedores",
          "Auditoría de puntos de entrada y sellado estructural",
          "Reportes automáticos para cumplimiento normativo",
        ],
      },
      {
        titulo: "Desinsectación Comercial",
        descripcion: "Protección sin interrupciones operativas",
        items: [
          "Inspección preventiva de espacios de almacenamiento",
          "Tratamiento discreto sin impacto en horario comercial",
          "Planes de mantenimiento mensual",
          "Cebos de baja toxicidad seguros para empleados",
        ],
      },
      {
        titulo: "Auditoría y Prevención",
        descripcion: "Seguridad integral para tu negocio",
        items: [
          "Auditoría completa de infraestructura",
          "Identificación de rutas de movimiento de plagas",
          "Sellado de conductos y tuberías",
          "Reportes de seguridad para empleados",
        ],
      },
    ],
    ctaText: "Auditoría Gratis + Llamada en 24 Horas",
    trustBadges: [
      "Smart Traps con alertas en tiempo real",
      "Rodent Proofing (sellado estructural permanente)",
      "Reducción de 95% en 30 días (garantizado)",
      "Reportes automáticos para auditorías",
    ],
  },

  "control-de-plagas-san-marcos": {
    barrio: "San Marcos",
    slug: "control-de-plagas-san-marcos",
    h1: "Control de Plagas en San Marcos Segovia | Bioseguridad y Control de Legionella",
    metaDescription:
      "Control profesional de plagas en San Marcos. Bioseguridad, legionella, desinfección. Hospitales, clínicas, gimnasios. Certificado CEPA. Llamada gratis.",
    introParrafo:
      "San Marcos, zona de servicios sanitarios y bienestar de Segovia, concentra clínicas, centros de fisioterapia, gimnasios y espacios de salud pública. Estos establecimientos enfrentan riesgos únicos: legionella en torres de refrigeración, patógenos en aire y superficies, y la necesidad de cumplir normativas de bioseguridad extremadamente rigurosas. La contaminación por legionella puede causar brotes epidemiológicos que cierren instalaciones y generen responsabilidad legal. Sierra Guard ofrece auditorías especializadas de legionella, desinfección de patógenos en aire mediante tecnología UV-C, y purificación de sistemas HVAC. Nuestro equipo está certificado en protocolos de bioseguridad y trabaja bajo estándares hospitalarios.",
    bloqueConfianza:
      "Los centros sanitarios en San Marcos enfrentan auditorías constantes y responsabilidad legal por contaminación. La competencia regional ofrece servicios genéricos de desinfección que no abordan la legionella ni los patógenos aéreos. Sierra Guard es especialista en bioseguridad hospitalaria. Realizamos auditorías completas de torres de refrigeración, identificamos biofilm (donde vive la legionella), y ejecutamos limpiezas químicas profundas con biocidas certificados. Nuestro sistema de purificación de aire mediante UV-C elimina virus y bacterias en tiempo real, sin generar residuos químicos. Contamos con experiencia en clínicas de Segovia que han pasado inspecciones de salud pública con calificación 'excelente'.",
    layoutVariant: "simple",
    mapEmbedUrl: "https://maps.google.com/maps?q=Barrio+San+Marcos+Segovia&t=&z=13&ie=UTF8&iwloc=&output=embed",
    faqs: [
      { question: "¿Cobráis por el desplazamiento a San Marcos?", answer: "No. El desplazamiento está incluido en nuestros servicios para todo el barrio de San Marcos." },
      { question: "¿Son peligrosos los productos para mis mascotas?", answer: "Utilizamos productos de uso profesional diseñados para ser seguros. Los portacebos son de seguridad (llave) y los geles se aplican en zonas de difícil acceso. Siempre damos pautas de seguridad claras." },
      { question: "¿Dáis garantía del servicio?", answer: "Sí, todos nuestros tratamientos tienen garantía por escrito. Si el problema persiste dentro del periodo de garantía, volvemos a realizar el tratamiento sin coste alguno." },
      { question: "¿Atendéis urgencias en fin de semana?", answer: "Sí, disponemos de un servicio de urgencias 24 horas para casos graves como nidos de avispas peligrosos, presencia de ratas en interior de vivienda o plagas que obliguen al cierre de negocios." }
    ],
    serviciosEspecificos: [
      {
        titulo: "Bioseguridad Hospitalaria",
        descripcion: "Cumplimiento de normativas europeas",
        items: [
          "Auditoría y limpieza de torres de refrigeración (control de legionella)",
          "Desinfección de quirófanos y áreas críticas",
          "Purificación de aire mediante UV-C",
          "Reportes técnicos para inspecciones sanitarias",
        ],
      },
      {
        titulo: "Desinfección de Espacios Compartidos",
        descripcion: "Protección de gimnasios y centros de bienestar",
        items: [
          "Desinfección de vestuarios, piscinas y áreas comunes",
          "Tratamiento de sistemas HVAC",
          "Monitorización de calidad de aire",
          "Planes de mantenimiento preventivo",
        ],
      },
      {
        titulo: "Control Integral de Plagas",
        descripcion: "Desinsectación y desratización en espacios sanitarios",
        items: [
          "Desinsectación de áreas de almacenamiento",
          "Desratización con métodos seguros para pacientes",
          "Higiene ambiental certificada",
          "Auditoría de cumplimiento normativo",
        ],
      },
    ],
    ctaText: "Auditoría Técnica Gratis + Llamada en 24 Horas",
    trustBadges: [
      "Auditoría de legionella según normativa europea",
      "Purificación de aire con tecnología UV-C",
      "Reportes técnicos para inspecciones sanitarias",
      "Experiencia en clínicas y hospitales de Segovia",
    ],
  },

  "control-de-plagas-vera-cruz": {
    barrio: "Vera Cruz",
    slug: "control-de-plagas-vera-cruz",
    h1: "Control de Plagas en Vera Cruz Segovia | Retirada de Avispas Urgente 24/7",
    metaDescription:
      "Control profesional de plagas en Vera Cruz. Retirada urgente de nidos de avispa velutina. Disponibles 24/7. Seguros, sin riesgo. Certificado CEPA. Llamada inmediata.",
    introParrafo:
      "Vera Cruz, zona residencial y de chalets de Segovia, es especialmente vulnerable a nidos de avispa velutina, una especie invasora que construye nidos de gran tamaño en árboles, cornisas y fachadas. Un nido activo puede albergar 500+ avispas agresivas, representando un riesgo grave para familias, mascotas y trabajadores. La retirada improvisada puede resultar en ataques masivos y picaduras peligrosas. Sierra Guard ofrece retirada urgente de nidos 24/7, con protocolos de seguridad extrema y eliminación del nido sin riesgo de enjambres. Nuestro equipo utiliza equipamiento profesional y técnicas de contención que minimizan el riesgo de ataque.",
    bloqueConfianza:
      "Los residentes de Vera Cruz enfrentan pánico cuando detectan un nido de avispa. La competencia regional ofrece servicios lentos o peligrosos (intentos de destrucción con fuego, insecticidas caseros). Sierra Guard responde en menos de 2 horas con equipo de protección profesional (traje de apicultor, respirador, herramientas especializadas). Nuestro protocolo: (1) identificación de la especie, (2) contención del área, (3) retirada segura del nido, (4) eliminación del nido y (5) sellado de puntos de anidación. Cero riesgo de enjambres. Trabajamos con chalets de Vera Cruz que nos recomiendan por nuestra rapidez y seguridad.",
    layoutVariant: "simple",
    mapEmbedUrl: "https://maps.google.com/maps?q=Iglesia+Vera+Cruz+Segovia&t=&z=13&ie=UTF8&iwloc=&output=embed",
    faqs: [
      { question: "¿Cobráis por el desplazamiento a Vera Cruz?", answer: "No. El desplazamiento está incluido en nuestros servicios para toda la zona de Vera Cruz." },
      { question: "¿Son peligrosos los productos para mis mascotas?", answer: "Utilizamos productos de uso profesional diseñados para ser seguros. Los portacebos son de seguridad (llave) y los geles se aplican en zonas de difícil acceso. Siempre damos pautas de seguridad claras." },
      { question: "¿Dáis garantía del servicio?", answer: "Sí, todos nuestros tratamientos tienen garantía por escrito. Si el problema persiste dentro del periodo de garantía, volvemos a realizar el tratamiento sin coste alguno." },
      { question: "¿Atendéis urgencias en fin de semana?", answer: "Sí, disponemos de un servicio de urgencias 24 horas para casos graves como nidos de avispas peligrosos, presencia de ratas en interior de vivienda o plagas que obliguen al cierre de negocios." }
    ],
    serviciosEspecificos: [
      {
        titulo: "Retirada de Nidos",
        descripcion: "Respuesta rápida y segura en menos de 2 horas",
        items: [
          "Respuesta en menos de 2 horas (24/7)",
          "Identificación de especie (velutina, común, etc.)",
          "Retirada segura con equipo profesional",
          "Cero riesgo de enjambres",
        ],
      },
      {
        titulo: "Prevención de Anidación",
        descripcion: "Evita futuros nidos",
        items: [
          "Sellado de puntos de anidación",
          "Instalación de trampas preventivas",
          "Monitorización estacional",
          "Garantía de no retorno",
        ],
      },
      {
        titulo: "Control de Plagas General",
        descripcion: "Desinsectación y desratización complementaria",
        items: [
          "Desinsectación de áreas exteriores",
          "Desratización de sótanos y áreas comunes",
          "Inspecciones mensuales en temporada alta",
          "Soporte 24/7 para emergencias",
        ],
      },
    ],
    ctaText: "¡URGENTE! Llamada Inmediata 24/7",
    ctaUrgencia: true,
    trustBadges: [
      "Respuesta en menos de 2 horas (24/7)",
      "Equipo profesional con protección extrema",
      "Garantía de no retorno",
      "Cero riesgo de enjambres",
    ],
  },

  "control-de-plagas-clamores": {
    barrio: "Clamores",
    slug: "control-de-plagas-clamores",
    h1: "Control de Plagas en Clamores Segovia | Desinsectación y Desratización",
    metaDescription:
      "Control profesional de plagas en Clamores. Cucarachas, chinches, termitas, ratas. Hoteles, restaurantes, viviendas. Certificado CEPA. Tratamiento térmico sin químicos.",
    introParrafo:
      "Clamores, barrio residencial y comercial de Segovia con alta densidad de pequeños hoteles, pensiones, restaurantes y viviendas, es una zona donde las plagas encuentran refugio ideal. La proximidad entre edificios, la antigüedad de algunas estructuras y la circulación constante de huéspedes crean condiciones perfectas para infestaciones de cucarachas y chinches. Sierra Guard ofrece desinsectación especializada con tratamiento térmico (sin químicos tóxicos) para chinches, y técnicas de sellado para cucarachas. Nuestro enfoque respeta la convivencia vecinal y es seguro para familias y mascotas.",
    bloqueConfianza:
      "Los propietarios de pequeños hoteles y viviendas en Clamores enfrentan un dilema: necesitan control de plagas discreto que no asuste a huéspedes o vecinos. La competencia regional ofrece tratamientos químicos agresivos con olores fuertes y riesgos para la salud. Sierra Guard utiliza tratamiento térmico para chinches (calentamiento controlado de habitaciones a 56°C que mata todos los estadios de vida), sin dejar residuos químicos. Para cucarachas, aplicamos sellado estructural + cebos de baja toxicidad. Resultado: plagas eliminadas en 1-2 semanas, sin olores, sin riesgo para huéspedes.",
    layoutVariant: "simple",
    mapEmbedUrl: "https://maps.google.com/maps?q=Valle+Clamores+Segovia&t=&z=13&ie=UTF8&iwloc=&output=embed",
    faqs: [
      { question: "¿Cobráis por el desplazamiento a Clamores?", answer: "No. El desplazamiento está incluido en nuestros servicios para toda la zona de Clamores." },
      { question: "¿Son peligrosos los productos para mis mascotas?", answer: "Utilizamos productos de uso profesional diseñados para ser seguros. Los portacebos son de seguridad (llave) y los geles se aplican en zonas de difícil acceso. Siempre damos pautas de seguridad claras." },
      { question: "¿Dáis garantía del servicio?", answer: "Sí, todos nuestros tratamientos tienen garantía por escrito. Si el problema persiste dentro del periodo de garantía, volvemos a realizar el tratamiento sin coste alguno." },
      { question: "¿Atendéis urgencias en fin de semana?", answer: "Sí, disponemos de un servicio de urgencias 24 horas para casos graves como nidos de avispas peligrosos, presencia de ratas en interior de vivienda o plagas que obliguen al cierre de negocios." }
    ],
    serviciosEspecificos: [
      {
        titulo: "Tratamiento Térmico para Chinches",
        descripcion: "Sin químicos, sin olores, sin residuos",
        items: [
          "Calentamiento controlado de habitaciones (56°C)",
          "Eliminación de todos los estadios de vida",
          "Sin químicos, sin olores, sin residuos",
          "Discreto y seguro para huéspedes",
        ],
      },
      {
        titulo: "Desinsectación de Cucarachas",
        descripcion: "Sellado permanente y cebos seguros",
        items: [
          "Sellado estructural de puntos de entrada",
          "Cebos de baja toxicidad",
          "Monitorización preventiva",
          "Planes de mantenimiento mensual",
        ],
      },
      {
        titulo: "Desratización Residencial",
        descripcion: "Protección a largo plazo",
        items: [
          "Inspecciones regulares",
          "Sellado de grietas y conductos",
          "Trampas discretas en áreas comunes",
          "Soporte continuo",
        ],
      },
    ],
    ctaText: "Inspección Gratis + Llamada en 24 Horas",
    trustBadges: [
      "Tratamiento térmico sin químicos para chinches",
      "Eliminación garantizada en 1-2 semanas",
      "Seguro para familias y mascotas",
      "Discreto y sin olores",
    ],
  },

  "control-de-plagas-la-lastrilla": {
    barrio: "La Lastrilla",
    slug: "control-de-plagas-la-lastrilla",
    h1: "Control de Plagas en La Lastrilla | Desinsectación y Desratización",
    metaDescription: "Control profesional de plagas en La Lastrilla. Certificado CEPA. Respuesta en 24 horas.",
    introParrafo: "La Lastrilla, pueblo residencial cercano a Segovia, requiere control de plagas profesional para proteger viviendas y pequeños negocios. Sierra Guard ofrece servicios especializados en desinsectación, desratización y desinfección con métodos seguros y certificados.",
    bloqueConfianza: "Somos especialistas en control de plagas para pueblos cercanos a Segovia. Nuestro equipo CEPA certificado responde rápidamente con soluciones adaptadas a cada necesidad.",
    layoutVariant: "simple",
    mapEmbedUrl: "https://maps.google.com/maps?q=La+Lastrilla+Segovia&t=&z=13&ie=UTF8&iwloc=&output=embed",
    faqs: [
      { question: "¿Cobráis por el desplazamiento a La Lastrilla?", answer: "No. El desplazamiento está incluido en nuestros servicios para La Lastrilla." },
      { question: "¿Son peligrosos los productos para mis mascotas?", answer: "Utilizamos productos de uso profesional diseñados para ser seguros. Los portacebos son de seguridad (llave) y los geles se aplican en zonas de difícil acceso. Siempre damos pautas de seguridad claras." },
      { question: "¿Dáis garantía del servicio?", answer: "Sí, todos nuestros tratamientos tienen garantía por escrito. Si el problema persiste dentro del periodo de garantía, volvemos a realizar el tratamiento sin coste alguno." },
      { question: "¿Atendéis urgencias en fin de semana?", answer: "Sí, disponemos de un servicio de urgencias 24 horas para casos graves como nidos de avispas peligrosos, presencia de ratas en interior de vivienda o plagas que obliguen al cierre de negocios." }
    ],
    serviciosEspecificos: [
      {
        titulo: "Desinsectación",
        descripcion: "Control de cucarachas, chinches y termitas",
        items: ["Tratamiento térmico sin químicos", "Sellado estructural", "Monitorización preventiva"],
      },
      {
        titulo: "Desratización",
        descripcion: "Eliminación de ratas y ratones",
        items: ["Smart traps con alertas", "Rodent proofing", "Garantía 100%"],
      },
    ],
    ctaText: "Te Llamamos Gratis en 24 Horas",
    trustBadges: ["Certificado CEPA", "Garantía 100%", "Respuesta rápida"],
  },

  "control-de-plagas-el-espinar": {
    barrio: "El Espinar",
    slug: "control-de-plagas-el-espinar",
    h1: "Control de Plagas en El Espinar (Segovia) | Servicio 24 Horas",
    metaDescription: "Empresa de Control de Plagas en El Espinar. Desratización, desinsectación y tratamientos de madera. Servicio urgente 24h. Precios económicos y garantía por escrito.",
    introParrafo: "Si buscas una empresa de control de plagas en El Espinar, Sierra Guard es tu solución local, rápida y eficaz. Ofrecemos servicios profesionales de desratización, desinsectación y desinfección para viviendas, comunidades de vecinos, chalets y negocios en todo el municipio de El Espinar, incluyendo San Rafael, La Estación y Los Ángeles de San Rafael. Actuamos con rapidez ante urgencias.",
    bloqueConfianza: "Somos la empresa de referencia en la zona porque ofrecemos trato directo, sin intermediarios. Nuestros técnicos conocen perfectamente la problemática de plagas en la zona de la sierra (roedores de campo, avispas, hormigas). Ofrecemos garantía total por escrito: si la plaga vuelve, nosotros también, sin coste adicional.",
    layoutVariant: "simple",
    mapEmbedUrl: "https://maps.google.com/maps?q=El+Espinar%2C+Segovia&t=&z=13&ie=UTF8&iwloc=&output=embed",
    seoSections: [
      {
        title: "Empresa de Control de Plagas en El Espinar Homologada",
        content: "Sierra Guard es una empresa inscrita en el Registro Oficial de Establecimientos y Servicios Biocidas (ROESB), lo que garantiza que cumplimos con todas las normativas sanitarias y de seguridad vigentes en Castilla y León. Nuestro equipo técnico cuenta con la titulación necesaria para la manipulación y aplicación de productos biocidas profesionales, asegurando la máxima eficacia sin poner en riesgo la salud de las personas ni el medio ambiente.",
        icon: "shield"
      },
      {
        title: "¿Por qué aparecen plagas en El Espinar?",
        content: "El municipio de El Espinar, por su ubicación en la sierra y su entorno natural, es propenso a ciertas plagas específicas. La abundancia de vegetación y las segundas residencias que permanecen cerradas durante periodos largos favorecen la anidación de roedores y la proliferación de insectos. En invierno, ratas y ratones buscan refugio y calor en el interior de las viviendas, mientras que en primavera y verano, las hormigas, avispas y procesionaria del pino son los problemas más habituales.",
        icon: "map"
      },
      {
        title: "Servicios de Desratización en El Espinar y San Rafael",
        content: "Los roedores son un problema serio de salud pública. No solo transmiten enfermedades, sino que pueden causar daños materiales importantes al roer cables eléctricos y tuberías. Nuestro servicio de desratización incluye una inspección minuciosa para detectar las vías de acceso, la colocación estratégica de portacebos de seguridad (inviolables para niños y mascotas) y medidas correctivas de sellado para evitar futuras infestaciones.",
        icon: "rat"
      },
      {
        title: "Eliminación de Cucarachas y Hormigas",
        content: "Utilizamos las técnicas más avanzadas del mercado, como los geles insecticidas de última generación. Estos productos actúan por ingestión y efecto cascada, logrando eliminar la colonia completa desde dentro. A diferencia de las fumigaciones tradicionales, nuestros tratamientos no requieren que abandones tu casa, no huelen y son totalmente seguros.",
        icon: "bug"
      },
      {
        title: "Tratamientos contra Xilófagos (Carcoma y Termitas)",
        content: "Muchas construcciones en El Espinar y núcleos cercanos cuentan con estructuras de madera. La carcoma y las termitas pueden comprometer la estabilidad de vigas y cubiertas. Realizamos diagnósticos precisos mediante tecnología de detección acústica y aplicamos tratamientos curativos y preventivos mediante inyección a presión, garantizando la protección de la madera a largo plazo.",
        icon: "tree"
      }
    ],
    faqs: [
      { question: "¿Cobráis por el desplazamiento a El Espinar?", answer: "No. El desplazamiento está incluido en nuestros servicios para todo el municipio de El Espinar, incluyendo San Rafael, La Estación y Los Ángeles de San Rafael." },
      { question: "¿Son peligrosos los productos para mis mascotas?", answer: "Utilizamos productos de uso profesional diseñados para ser seguros. Los portacebos son de seguridad (llave) y los geles se aplican en zonas de difícil acceso. Siempre damos pautas de seguridad claras." },
      { question: "¿Dáis garantía del servicio?", answer: "Sí, todos nuestros tratamientos tienen garantía por escrito. Si el problema persiste dentro del periodo de garantía, volvemos a realizar el tratamiento sin coste alguno." },
      { question: "¿Atendéis urgencias en fin de semana?", answer: "Sí, disponemos de un servicio de urgencias 24 horas para casos graves como nidos de avispas peligrosos, presencia de ratas en interior de vivienda o plagas que obliguen al cierre de negocios." }
    ],
    zonasCercanas: [
      { nombre: "Control de Plagas San Rafael", slug: "control-de-plagas-san-rafael" },
      { nombre: "Control de Plagas Los Ángeles de San Rafael", slug: "control-de-plagas-los-angeles-de-san-rafael" },
      { nombre: "Control de Plagas La Estación", slug: "control-de-plagas-la-estacion-el-espinar" },
      { nombre: "Control de Plagas Guadarrama", slug: "control-de-plagas-guadarrama" }
    ],
    serviciosEspecificos: [
      {
        titulo: "Desratización (Ratas y Ratones)",
        descripcion: "Eliminación de roedores en chalets, sótanos y jardines.",
        items: ["Inspección de puntos de entrada", "Trampas de seguridad para niños/mascotas", "Sellado de grietas", "Revisión garantizada"],
      },
      {
        titulo: "Desinsectación (Cucarachas y Hormigas)",
        descripcion: "Tratamientos efectivos contra insectos rastreros.",
        items: ["Gel insecticida sin olor", "Sin desalojar la vivienda", "Efecto barrera duradero", "Eliminación de nidos"],
      },
      {
        titulo: "Tratamientos de Madera (Termitas y Carcoma)",
        descripcion: "Protección estructural para vigas y muebles.",
        items: ["Diagnóstico gratuito", "Inyección y pulverización", "Garantía de hasta 10 años", "Certificado para hipotecas"],
      },
      {
        titulo: "Avispas y Velutina",
        descripcion: "Retirada urgente de avisperos.",
        items: ["Servicio de urgencia 24h", "Retirada segura sin riesgos", "Equipamiento especial", "Acceso a zonas altas"],
      }
    ],
    ctaText: "Pedir Presupuesto GRATIS",
    trustBadges: ["Presupuesto Cerrado", "Garantía por Escrito", "Técnicos Certificados", "Atención 24 Horas"],
  },

  "control-de-plagas-cuéllar": {
    barrio: "Cuéllar",
    slug: "control-de-plagas-cuéllar",
    h1: "Control de Plagas en Cuéllar | Desinsectación y Desratización",
    metaDescription: "Control profesional de plagas en Cuéllar. Certificado CEPA. Respuesta en 24 horas.",
    introParrafo: "Cuéllar, pueblo histórico de la provincia de Segovia, requiere control de plagas profesional para preservar su patrimonio y proteger viviendas. Sierra Guard ofrece servicios respetuosos con la arquitectura histórica.",
    bloqueConfianza: "Somos especialistas en control de plagas para pueblos históricos. Nuestros métodos respetan la arquitectura tradicional sin dañar estructuras.",
    layoutVariant: "simple",
    mapEmbedUrl: "https://maps.google.com/maps?q=Cuellar+Segovia&t=&z=13&ie=UTF8&iwloc=&output=embed",
    faqs: [
      { question: "¿Cobráis por el desplazamiento a Cuéllar?", answer: "No. El desplazamiento está incluido en nuestros servicios para Cuéllar." },
      { question: "¿Son peligrosos los productos para mis mascotas?", answer: "Utilizamos productos de uso profesional diseñados para ser seguros. Los portacebos son de seguridad (llave) y los geles se aplican en zonas de difícil acceso. Siempre damos pautas de seguridad claras." },
      { question: "¿Dáis garantía del servicio?", answer: "Sí, todos nuestros tratamientos tienen garantía por escrito. Si el problema persiste dentro del periodo de garantía, volvemos a realizar el tratamiento sin coste alguno." },
      { question: "¿Atendéis urgencias en fin de semana?", answer: "Sí, disponemos de un servicio de urgencias 24 horas para casos graves como nidos de avispas peligrosos, presencia de ratas en interior de vivienda o plagas que obliguen al cierre de negocios." }
    ],
    serviciosEspecificos: [
      {
        titulo: "Desinsectación Histórica",
        descripcion: "Métodos respetuosos con patrimonio",
        items: ["Sin perforaciones", "Tratamiento discreto", "Respeto a estructuras antiguas"],
      },
      {
        titulo: "Desratización",
        descripcion: "Protección de viviendas históricas",
        items: ["Sellado no invasivo", "Métodos seguros", "Garantía 100%"],
      },
    ],
    ctaText: "Te Llamamos Gratis en 24 Horas",
    trustBadges: ["Certificado CEPA", "Experiencia en patrimonio", "Métodos respetuosos"],
  },

  "control-de-plagas-pedraza": {
    barrio: "Pedraza",
    slug: "control-de-plagas-pedraza",
    h1: "Control de Plagas en Pedraza (Segovia) | Protección de Patrimonio",
    metaDescription: "Empresa de control de plagas en Pedraza. Expertos en tratamientos para edificios históricos, carcoma y termitas. Discreción total y respeto por la arquitectura.",
    introParrafo: "Pedraza, una de las villas medievales más bellas de España, requiere un cuidado especial en el control de plagas. Sierra Guard ofrece soluciones específicas para viviendas históricas, restaurantes y hoteles rurales en Pedraza, garantizando la eliminación de plagas sin dañar el patrimonio arquitectónico. Nuestros técnicos están formados en intervenciones no invasivas.",
    bloqueConfianza: "Entendemos la importancia de la discreción y el respeto por el entorno en una villa como Pedraza. Nuestros tratamientos son invisibles para los turistas y seguros para la estructura de los edificios centenarios.",
    layoutVariant: "simple",
    mapEmbedUrl: "https://maps.google.com/maps?q=Pedraza+Segovia&t=&z=14&ie=UTF8&iwloc=&output=embed",
    faqs: [
      { question: "¿Cobráis por el desplazamiento a Pedraza?", answer: "No. El desplazamiento está incluido en nuestros servicios para Pedraza y alrededores." },
      { question: "¿Cómo protegéis las estructuras antiguas?", answer: "Utilizamos técnicas de inyección y cebo que no requieren perforaciones visibles ni obras, respetando la piedra y madera originales." },
      { question: "¿Atendéis a casas rurales y hoteles?", answer: "Sí, tenemos planes de mantenimiento específicos para el sector turístico, garantizando la tranquilidad de sus huéspedes." },
      { question: "¿Dáis garantía?", answer: "Sí, ofrecemos garantía por escrito en todos nuestros tratamientos." }
    ],
    serviciosEspecificos: [
      {
        titulo: "Protección de Madera",
        descripcion: "Tratamientos contra carcoma y termitas en vigas antiguas.",
        items: ["Diagnóstico con tecnología acústica", "Tratamiento curativo y preventivo", "Garantía certificada", "Sin dañar la estética"],
      },
      {
        titulo: "Desratización Discreta",
        descripcion: "Control de roedores sin impacto visual.",
        items: ["Portacebos mimetizados", "Monitorización remota", "Sellado de accesos", "Seguro para mascotas"],
      },
      {
        titulo: "Control de Insectos",
        descripcion: "Eliminación de hormigas, avispas y moscas.",
        items: ["Trampas de luz discretas", "Geles sin olor", "Protección perimetral", "Servicio rápido"],
      }
    ],
    ctaText: "Solicitar Inspección Gratuita",
    trustBadges: ["Especialistas en Patrimonio", "Discreción Total", "Garantía por Escrito", "Atención Personalizada"],
  },
  "control-de-plagas-coca": {
    barrio: "Coca",
    slug: "control-de-plagas-coca",
    h1: "Control de Plagas en Coca | Desinsectación y Desratización Profesional",
    metaDescription: "Servicios de control de plagas en Coca. Especialistas en tratamientos para viviendas y negocios. Desinsectación, desratización y control de aves. Certificado CEPA.",
    introParrafo: "Coca, con su impresionante castillo y su riqueza histórica, es una de las localidades más importantes de la provincia. Sin embargo, las estructuras antiguas y el entorno rural pueden favorecer la aparición de plagas como roedores, termitas o avispas. En Sierra Guard, ofrecemos soluciones de control de plagas adaptadas a las necesidades específicas de Coca, protegiendo tanto el patrimonio como la salud de sus habitantes y negocios.",
    bloqueConfianza: "Entendemos la importancia de preservar la integridad de los edificios y la tranquilidad de los vecinos en Coca. Nuestros técnicos cualificados emplean métodos de control integrados que son efectivos contra las plagas pero respetuosos con el entorno. Ofrecemos tratamientos preventivos y curativos con total garantía, asegurando que tu propiedad esté libre de insectos y roedores no deseados.",
    layoutVariant: "simple",
    mapEmbedUrl: "https://maps.google.com/maps?q=Coca+Segovia&t=&z=13&ie=UTF8&iwloc=&output=embed",
    faqs: [
      { question: "¿Realizáis tratamientos contra termitas en estructuras antiguas?", answer: "Sí, somos expertos en el control de xilófagos (termitas y carcoma). Realizamos inspecciones detalladas y aplicamos tratamientos específicos para proteger la madera estructural." },
      { question: "¿Atendéis a negocios de hostelería en Coca?", answer: "Por supuesto. Ofrecemos planes de mantenimiento para bares y restaurantes, asegurando el cumplimiento de la normativa sanitaria y la ausencia de plagas." },
      { question: "¿Cuánto tardáis en llegar a Coca?", answer: "Damos servicio rápido en toda la provincia. Para urgencias, podemos estar en Coca en un plazo muy breve. Contáctanos para confirmar disponibilidad." }
    ],
    serviciosEspecificos: [
      {
        titulo: "Control de Roedores",
        descripcion: "Desratización segura para viviendas y naves",
        items: [
          "Inspección de puntos de acceso",
          "Colocación de portacebos de seguridad",
          "Monitorización y seguimiento",
          "Sellado de vías de entrada"
        ]
      },
      {
        titulo: "Desinsectación General",
        descripcion: "Eliminación de cucarachas, hormigas y avispas",
        items: [
          "Tratamientos con gel sin plazo de seguridad",
          "Retirada de nidos de avispas",
          "Fumigación perimetral",
          "Control de plagas estacionales"
        ]
      },
      {
        titulo: "Protección de la Madera",
        descripcion: "Tratamientos contra termitas y carcoma",
        items: [
          "Diagnóstico de patologías de la madera",
          "Tratamientos curativos y preventivos",
          "Sistemas de cebos para termitas",
          "Protección de vigas y estructuras"
        ]
      }
    ],
    ctaText: "Solicitar Inspección Gratuita",
    trustBadges: [
      "Técnicos Certificados",
      "Cobertura en toda la zona de Coca",
      "Tratamientos garantizados",
      "Presupuesto sin compromiso"
    ]
  }
};

/**
 * Función para obtener datos de una location page
 */
export function getLocationPageData(slug: string): LocationPageData | null {
  return locationPagesData[slug] || null;
}

/**
 * Función para obtener todas las location pages
 */
export function getAllLocationPages(): LocationPageData[] {
  return Object.values(locationPagesData);
}

/**
 * Función para generar ruta de location page
 */
export function generateLocationPageRoute(barrio: string): string {
  const barrioSlug = barrio.toLowerCase().replace(/\s+/g, "-");
  return `/control-de-plagas-${barrioSlug}`;
}
