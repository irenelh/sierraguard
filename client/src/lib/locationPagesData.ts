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
        items: ["Trampas de alta seguridad", "Rodent proofing", "Garantía 100%"],
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
  },

  "control-de-plagas-sepulveda": {
    barrio: "Sepúlveda",
    slug: "control-de-plagas-sepulveda",
    h1: "Control de Plagas en Sepúlveda | Protección de Patrimonio y Hostelería",
    metaDescription: "Control de plagas en Sepúlveda. Especialistas en protección de edificios históricos y hostelería. Termitas, roedores, avispas. Servicio rápido y discreto.",
    introParrafo: "Sepúlveda, joya medieval y turística de Segovia, requiere un cuidado especial en el control de plagas. La conservación de sus edificios históricos y la calidad de su oferta gastronómica dependen de un entorno libre de plagas. Sierra Guard ofrece servicios especializados para Sepúlveda, combinando la protección del patrimonio contra xilófagos (termitas y carcoma) con soluciones de higiene avanzadas para restaurantes y casas rurales.",
    bloqueConfianza: "Conocemos los desafíos únicos de Sepúlveda: muros de piedra que pueden ocultar nidos, estructuras de madera vulnerables y la necesidad de discreción en zonas turísticas. Nuestro equipo técnico aplica tratamientos que respetan la estética y la integridad de los edificios, utilizando productos de última generación y mínima toxicidad. Garantizamos la tranquilidad de residentes y visitantes con intervenciones rápidas y efectivas.",
    layoutVariant: "simple",
    mapEmbedUrl: "https://maps.google.com/maps?q=Sepulveda+Segovia&t=&z=13&ie=UTF8&iwloc=&output=embed",
    faqs: [
      { question: "¿Ofrecéis servicios para casas rurales en Sepúlveda?", answer: "Sí, tenemos planes específicos para alojamientos rurales que garantizan habitaciones libres de chinches y zonas comunes seguras, protegiendo sus reseñas online." },
      { question: "¿Cómo tratáis las plagas de madera en edificios históricos?", answer: "Realizamos inspecciones no invasivas y tratamientos curativos/preventivos especializados (inyección, cebos) que detienen el deterioro sin dañar la estructura original." },
      { question: "¿Atendéis urgencias de avispas en Sepúlveda?", answer: "Sí, retiramos nidos de avispas de forma urgente y segura, algo vital en zonas con afluencia de turistas y actividades al aire libre." }
    ],
    serviciosEspecificos: [
      {
        titulo: "Protección del Patrimonio (Madera)",
        descripcion: "Expertos en termitas y carcoma",
        items: [
          "Detección acústica de actividad",
          "Tratamientos de inyección en vigas",
          "Sistema de cebos anti-termitas",
          "Garantía certificada de tratamiento"
        ]
      },
      {
        titulo: "Hostelería y Turismo Seguro",
        descripcion: "Control para restaurantes y hoteles",
        items: [
          "Prevención de cucarachas y roedores",
          "Certificados para sanidad",
          "Control de chinches en alojamientos",
          "Servicio discreto y flexible"
        ]
      },
      {
        titulo: "Control Ambiental General",
        descripcion: "Soluciones para el entorno rural",
        items: [
          "Control de roedores en exteriores",
          "Tratamientos contra moscas y mosquitos",
          "Retirada de nidos de avispas",
          "Desinfección de espacios"
        ]
      }
    ],
    ctaText: "Pedir Presupuesto Gratuito",
    trustBadges: [
      "Especialistas en Patrimonio",
      "Servicio Urgente Hostelería",
      "Garantía por Escrito",
      "Cobertura Total en Sepúlveda"
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
