/**
 * Datos estructurados para Páginas de Servicio
 * Estructura: /servicios/[nombre-servicio]
 */

export interface ServicePageData {
  id: string;
  slug: string;
  h1: string;
  metaDescription: string;
  h2Beneficios: string;
  contenidoBeneficios: string;
  h2Diferenciacion: string;
  contenidoDiferenciacion: string;
  h3Proceso: string;
  pasos: Array<{
    titulo: string;
    contenido: string;
  }>;
  publicosObjetivo?: Array<{
    titulo: string;
    descripcion: string;
    items: string[];
  }>;
  ctaText: string;
  ctaUrgencia?: boolean;
  schemaMarkup: Record<string, any>;
}

export const servicePagesData: Record<string, ServicePageData> = {
  "desinsectacion-cucarachas": {
    id: "cucarachas",
    slug: "desinsectacion-cucarachas",
    h1: "Control de Cucarachas Profesional | Eliminación en Cocinas Industriales y Conductos",
    metaDescription:
      "Control profesional de cucarachas en cocinas industriales, conductos y espacios comerciales. Métodos seguros certificados. Garantía 100%. Llamada gratis.",
    h2Beneficios:
      "Elimina Cucarachas en 1-2 Semanas | Garantía 100% o Repetimos Sin Coste",
    contenidoBeneficios:
      "Las cucarachas son plagas altamente invasivas que se reproducen rápidamente en ambientes cálidos y húmedos. Un solo ejemplar puede generar 400+ descendientes en 3 meses. En cocinas industriales, conductos de ventilación y espacios de almacenamiento, representan un riesgo crítico de contaminación alimentaria y cierre de negocio. Sierra Guard utiliza técnicas de eliminación acelerada: (1) Identificación de puntos de reproducción mediante inspección térmica, (2) Aplicación de cebos de baja toxicidad en zonas estratégicas, (3) Sellado estructural permanente de grietas y conductos, (4) Monitorización con trampas adhesivas para verificar eliminación. Resultado: cucarachas eliminadas en 1-2 semanas, con documentación completa para auditorías sanitarias.",
    h2Diferenciacion:
      "¿Por Qué Sierra Guard es Mejor que Rentokil, EZSA y Anticimex?",
    contenidoDiferenciacion:
      "La competencia regional ofrece soluciones genéricas que no abordan los puntos críticos de infestación. Rentokil utiliza tratamientos químicos agresivos que requieren evacuación de personal; EZSA ofrece servicios lentos con reportes inconsistentes; Anticimex cobra precios premium sin garantía de eliminación. Sierra Guard es diferente: Inspección Térmica Avanzada con cámaras térmicas para identificar puntos ocultos, Cebos de Baja Toxicidad seguros para personal y clientes, Sellado Estructural Permanente para evitar reinvasión, Garantía 100% con repetición sin coste, Reportes Detallados para cumplimiento normativo (ISO 22000, HACCP).",
    h3Proceso: "Nuestro Proceso de Eliminación de Cucarachas en 4 Pasos",
    pasos: [
      {
        titulo: "Paso 1: Auditoría Térmica (Día 1)",
        contenido:
          "Inspección completa con cámara térmica para identificar puntos de reproducción, rutas de movimiento, y zonas de mayor concentración. Mapeamos todos los conductos, grietas y espacios inaccesibles.",
      },
      {
        titulo: "Paso 2: Tratamiento Acelerado (Días 2-7)",
        contenido:
          "Aplicación estratégica de cebos en puntos críticos. Los cebos contienen ingredientes activos que interrumpen el ciclo reproductivo. Sellado de grietas y conductos con masilla profesional.",
      },
      {
        titulo: "Paso 3: Monitorización (Semanas 2-4)",
        contenido:
          "Colocación de trampas adhesivas para verificar actividad residual. Inspecciones semanales para confirmar eliminación progresiva. Ajustes de tratamiento si es necesario.",
      },
      {
        titulo: "Paso 4: Prevención Permanente (Mes 2+)",
        contenido:
          "Sellado final de todos los puntos de entrada. Plan de mantenimiento mensual para evitar reinvasión. Documentación de cumplimiento normativo.",
      },
    ],
    publicosObjetivo: [
      {
        titulo: "Para Restaurantes y Cocinas Industriales",
        descripcion: "Servicios especializados para espacios de preparación de alimentos",
        items: [
          "Inspección de conductos de ventilación y sistemas HVAC",
          "Tratamiento de despensas, almacenes y áreas de preparación",
          "Reportes de cumplimiento para inspecciones sanitarias",
          "Planes de mantenimiento mensual",
        ],
      },
      {
        titulo: "Para Hoteles y Alojamientos",
        descripcion: "Tratamientos discretos sin impacto en la experiencia del huésped",
        items: [
          "Inspección discreta de habitaciones sin alertar a huéspedes",
          "Tratamiento nocturno para minimizar impacto operativo",
          "Garantía de cero plagas para mantener clasificación de estrellas",
        ],
      },
      {
        titulo: "Para Oficinas y Retail",
        descripcion: "Protección de espacios comerciales",
        items: [
          "Tratamiento sin interrupciones de horario comercial",
          "Cebos de baja toxicidad seguros para empleados",
          "Reportes de seguridad laboral",
        ],
      },
    ],
    ctaText: "Auditoría Térmica Gratis + Llamada en 24 Horas",
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Control de Cucarachas Profesional",
      description:
        "Eliminación profesional de cucarachas en cocinas industriales, conductos y espacios comerciales. Métodos seguros certificados. Garantía 100%.",
      provider: {
        "@type": "LocalBusiness",
        name: "Sierra Guard",
        telephone: "+34921234567",
        url: "https://sierraguard.es",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Segovia",
          addressCountry: "ES",
        },
      },
      areaServed: {
        "@type": "City",
        name: "Segovia",
      },
      serviceType: "Desinsectación - Control de Cucarachas",
      priceRange: "$$",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "24",
      },
    },
  },

  "desratizacion-ratas": {
    id: "ratas",
    slug: "desratizacion-ratas",
    h1: "Control de Ratas Inteligente 24/7 | Monitorización Smart Traps en Tiempo Real",
    metaDescription:
      "Desratización profesional con smart traps y monitorización 24/7. Rodent proofing (sellado estructural). Almacenes, logística, oficinas. Garantía 100%.",
    h2Beneficios:
      "Reduce Actividad de Ratas en 95% en 30 Días | Monitorización Inteligente Incluida",
    contenidoBeneficios:
      "Las ratas causan daños estructurales (roedura de tuberías, cables eléctricos), contaminación alimentaria, y riesgo de enfermedades. En almacenes y logística, una infestación no controlada puede resultar en cierre de operaciones y responsabilidad legal. Sierra Guard utiliza smart traps conectadas a nube que envían alertas instantáneas cuando detectan actividad. Nuestro equipo CEPA realiza auditoría estructural para identificar y sellar todos los puntos de entrada. Resultado: reducción de 95% en actividad de ratas en 30 días, con documentación automática para auditorías.",
    h2Diferenciacion: "Diferenciación vs. Competencia Regional",
    contenidoDiferenciacion:
      "La competencia ofrece trampas pasivas que requieren revisión manual y generan reportes inconsistentes. Sierra Guard revoluciona esto con smart traps que envían alertas en tiempo real, dashboard online para visualización de datos, rodent proofing permanente con sellado estructural, auditoría completa de puntos de entrada, y reportes automáticos para cumplimiento normativo (ISO 22000, HACCP, auditorías sanitarias).",
    h3Proceso: "Proceso de Desratización en 4 Fases",
    pasos: [
      {
        titulo: "Fase 1: Auditoría Estructural (Día 1)",
        contenido:
          "Inspección completa de la propiedad para identificar puntos de entrada, rutas de movimiento, y zonas de nidación. Mapeo de grietas, tuberías, conductos, y espacios inaccesibles.",
      },
      {
        titulo: "Fase 2: Instalación de Smart Traps (Días 2-3)",
        contenido:
          "Colocación estratégica de smart traps en puntos críticos. Configuración de alertas en tu teléfono. Activación de monitorización 24/7.",
      },
      {
        titulo: "Fase 3: Rodent Proofing (Semanas 2-4)",
        contenido:
          "Sellado permanente de todos los puntos de entrada con materiales profesionales (acero inoxidable, masilla epoxi). Refuerzo de tuberías y conductos.",
      },
      {
        titulo: "Fase 4: Monitorización Continua (Mes 2+)",
        contenido:
          "Revisión semanal de datos de actividad. Ajustes de estrategia si es necesario. Reportes automáticos para auditorías.",
      },
    ],
    ctaText: "Auditoría Gratis + Smart Monitoring Incluido",
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Desratización Inteligente 24/7",
      description:
        "Control profesional de ratas con smart traps y monitorización en tiempo real. Rodent proofing permanente. Garantía 100%.",
      provider: {
        "@type": "LocalBusiness",
        name: "Sierra Guard",
        telephone: "+34921234567",
        url: "https://sierraguard.es",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Segovia",
          addressCountry: "ES",
        },
      },
      areaServed: {
        "@type": "City",
        name: "Segovia",
      },
      serviceType: "Desratización",
      priceRange: "$$",
    },
  },

  "desinfeccion-legionella": {
    id: "legionella",
    slug: "desinfeccion-legionella",
    h1: "Control de Legionella Profesional | Auditoría y Limpieza de Torres de Refrigeración",
    metaDescription:
      "Auditoría de legionella y desinfección de torres de refrigeración. Bioseguridad hospitalaria. Hospitales, clínicas, industrias. Certificado CEPA. Llamada gratis.",
    h2Beneficios:
      "Cumple Normativa Europea de Legionella | Auditoría Técnica Completa Incluida",
    contenidoBeneficios:
      "La legionella es una bacteria que crece en sistemas de agua caliente (torres de refrigeración, sistemas HVAC, fuentes). Puede causar brotes epidemiológicos que cierren instalaciones y generen responsabilidad legal. La normativa europea (Directiva 2015/1188) exige auditorías anuales y limpieza preventiva. Sierra Guard ofrece auditorías completas: identificación de biofilm, análisis de agua, limpieza química profunda con biocidas certificados, y reportes técnicos para cumplimiento normativo.",
    h2Diferenciacion: "Diferenciación vs. Competencia",
    contenidoDiferenciacion:
      "La competencia ofrece servicios genéricos de desinfección que no abordan la legionella específicamente. Sierra Guard es especialista en bioseguridad con auditoría completa (inspección visual, análisis de agua, identificación de biofilm), limpieza química profunda con biocidas certificados, purificación de aire con tecnología UV-C, reportes técnicos para cumplimiento normativo (Directiva 2015/1188, ISO 14644), y certificación hospitalaria en protocolos de bioseguridad.",
    h3Proceso: "Proceso de Control de Legionella en 4 Pasos",
    pasos: [
      {
        titulo: "Paso 1: Auditoría Técnica (Día 1)",
        contenido:
          "Inspección visual de torres de refrigeración, sistemas HVAC, fuentes. Toma de muestras de agua para análisis de legionella. Identificación de biofilm y zonas de riesgo.",
      },
      {
        titulo: "Paso 2: Análisis de Laboratorio (Días 2-5)",
        contenido:
          "Análisis de muestras en laboratorio certificado. Identificación de cepas de legionella. Determinación de concentración de bacterias.",
      },
      {
        titulo: "Paso 3: Limpieza Química Profunda (Día 6-7)",
        contenido:
          "Aplicación de biocidas certificados en torres de refrigeración y sistemas HVAC. Desinfección de tuberías y conductos. Purificación de aire mediante UV-C.",
      },
      {
        titulo: "Paso 4: Monitorización y Reportes (Mes 2+)",
        contenido:
          "Análisis de seguimiento para verificar eliminación. Reportes técnicos para cumplimiento normativo. Plan de mantenimiento preventivo.",
      },
    ],
    ctaText: "Auditoría Técnica Gratis + Reporte Completo",
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Control de Legionella Profesional",
      description:
        "Auditoría de legionella y desinfección de torres de refrigeración. Bioseguridad hospitalaria. Cumplimiento normativo europeo.",
      provider: {
        "@type": "LocalBusiness",
        name: "Sierra Guard",
        telephone: "+34921234567",
        url: "https://sierraguard.es",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Segovia",
          addressCountry: "ES",
        },
      },
      areaServed: {
        "@type": "City",
        name: "Segovia",
      },
      serviceType: "Desinfección - Control de Legionella",
      priceRange: "$$$",
    },
  },

  "control-de-avispas": {
    id: "avispas",
    slug: "control-de-avispas",
    h1: "Retirada Urgente de Nidos de Avispa Velutina | Disponible 24/7 en Segovia",
    metaDescription:
      "Retirada profesional de nidos de avispa velutina. Respuesta en menos de 2 horas. Equipo de protección extrema. Garantía de no retorno. Llamada inmediata.",
    h2Beneficios:
      "Respuesta en Menos de 2 Horas | Cero Riesgo de Enjambres | Garantía de No Retorno",
    contenidoBeneficios:
      "La avispa velutina es una especie invasora que construye nidos de gran tamaño (30-40 cm) que pueden albergar 500+ avispas agresivas. Un nido activo representa un riesgo grave de ataques masivos y picaduras peligrosas. La retirada improvisada (fuego, insecticidas caseros) puede resultar en enjambres descontrolados. Sierra Guard ofrece retirada urgente 24/7 con equipo profesional: traje de apicultor, respirador, herramientas especializadas. Protocolo: (1) identificación de especie, (2) contención del área, (3) retirada segura del nido, (4) eliminación del nido, (5) sellado de puntos de anidación.",
    h2Diferenciacion: "Diferenciación vs. Competencia",
    contenidoDiferenciacion:
      "La competencia regional ofrece servicios lentos o peligrosos. Sierra Guard es diferente: Respuesta Rápida en menos de 2 horas desde la llamada, Equipo Profesional con traje de apicultor y respirador, Protocolo de Seguridad con contención del área y retirada segura sin enjambres, Garantía de No Retorno con repetición sin coste, Disponibilidad 24/7 incluso en fines de semana y festivos.",
    h3Proceso: "Proceso de Retirada de Avispas en 5 Pasos",
    pasos: [
      {
        titulo: "Paso 1: Identificación de Especie (Primeros 30 minutos)",
        contenido:
          "Confirmación de que se trata de avispa velutina (especie invasora). Evaluación del tamaño y ubicación del nido.",
      },
      {
        titulo: "Paso 2: Contención del Área (30-60 minutos)",
        contenido:
          "Establecimiento de perímetro de seguridad. Aviso a vecinos o personal. Preparación del equipo de protección.",
      },
      {
        titulo: "Paso 3: Retirada Segura del Nido (60-90 minutos)",
        contenido:
          "Uso de equipo profesional (traje de apicultor, respirador, herramientas especializadas). Retirada del nido sin provocar enjambres.",
      },
      {
        titulo: "Paso 4: Eliminación del Nido (Inmediato)",
        contenido:
          "Destrucción segura del nido en contenedor hermético. Eliminación de residuos de forma segura.",
      },
      {
        titulo: "Paso 5: Sellado de Puntos de Anidación (Posterior)",
        contenido:
          "Identificación y sellado de puntos donde el nido estaba adherido. Prevención de futuros nidos en el mismo lugar.",
      },
    ],
    ctaText: "¡URGENTE! Llamada Inmediata 24/7",
    ctaUrgencia: true,
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Retirada Urgente de Nidos de Avispa",
      description:
        "Retirada profesional de nidos de avispa velutina. Respuesta en menos de 2 horas. Disponible 24/7. Garantía de no retorno.",
      provider: {
        "@type": "LocalBusiness",
        name: "Sierra Guard",
        telephone: "+34921234567",
        url: "https://sierraguard.es",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Segovia",
          addressCountry: "ES",
        },
      },
      areaServed: {
        "@type": "City",
        name: "Segovia",
      },
      serviceType: "Control de Avispas - Retirada Urgente",
      priceRange: "$$",
    },
  },
};

/**
 * Función para obtener datos de una página de servicio
 */
export function getServicePageData(slug: string): ServicePageData | null {
  return servicePagesData[slug] || null;
}

/**
 * Función para obtener todas las páginas de servicio
 */
export function getAllServicePages(): ServicePageData[] {
  return Object.values(servicePagesData);
}

/**
 * Función para generar ruta de página de servicio
 */
export function generateServicePageRoute(slug: string): string {
  return `/servicios/${slug}`;
}
