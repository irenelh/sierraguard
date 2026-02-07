export interface ServiceCategory {
  id: string;
  slug: string;
  nombre: string;
  h1: string;
  metaDescription: string;
  intro: string;
  servicios: {
    titulo: string;
    descripcion: string;
    items: string[];
    servicePageSlug?: string;
  }[];
  bloqueConfianza: string;
  beneficios: string[];
  proceso: {
    paso: number;
    titulo: string;
    descripcion: string;
  }[];
  cta: string;
  testimonios: {
    nombre: string;
    empresa: string;
    texto: string;
    rating: number;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  image?: string;
}

export const serviceCategoriesData: ServiceCategory[] = [
  {
    id: "desinsectacion",
    slug: "desinsectacion",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/pJ5hSiXSQku5X6UXcVcPGG/sandbox/7wk4ZxCsNdaMYgmx2lJ94m-img-2_1770374055000_na1fn_c2VydmljZS1kZXNpbnNlY3RhY2lvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcEo1aFNpWFNRa3U1WDZVWGNWY1BHRy9zYW5kYm94Lzd3azRaeENzTmRhTVlnbXgybEo5NG0taW1nLTJfMTc3MDM3NDA1NTAwMF9uYTFmbl9jMlZ5ZG1salpTMWtaWE5wYm5ObFkzUmhZMmx2YmcucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=N3-KoWdiBl5ZxJgTNB9matMq9vyS7KxqdIgpMKfh5rUXMf~zJAtzSyOW0RDYbYUbOxXluxe8nJxOUmrqvuGPMosv58EBW3H1xH1QO5F~kRwXwy8E~9qOicDGKH0lUFzAqLezg8lkx50R1pN46yqsyhpAMT0BkBB3QXLFOlkfQmLSBgFjLVeWpW78J4fj23svkz3tBIOW3Iz8xHB9R-0Z6Uef8i8LFEEyRQ0oiJJf-XRf~ig5-TktqR21FkviqvbfbsPy-A6RUnBvlNFBB5v2ane7B2W~SRLDKT5yIzke4OLGwGaDkLZfQeBV1ku3CiWcFRpWMo9d8QOxSLkxeLIypw__",
    nombre: "Desinsectación",
    h1: "Desinsectación Profesional en Segovia | Control de Cucarachas, Chinches, Termitas y Avispas",
    metaDescription: "Desinsectación profesional en Segovia. Control de cucarachas, chinches, termitas, avispas, hormigas, pulgas y mosquitos. Métodos seguros, certificados CEPA. Respuesta en 24h.",
    intro: "Expertos en desinsectación en Segovia. Eliminamos cucarachas, chinches, termitas y avispas de forma definitiva. Protege tu hogar o negocio con tratamientos rápidos, seguros y garantizados por profesionales certificados.",
    servicios: [
      {
        titulo: "Control de Cucarachas",
        descripcion: "Desinsectación de cocinas industriales con métodos de bajo impacto químico",
        items: ["Desinsectación de cocinas industriales", "Sellado estructural permanente", "Cebos de baja toxicidad", "Monitorización preventiva"],
        servicePageSlug: "desinsectacion-cucarachas"
      },
      {
        titulo: "Control de Chinches",
        descripcion: "Tratamiento térmico sin químicos para eliminación garantizada",
        items: ["Tratamiento térmico sin químicos (56°C)", "Inspección de habitaciones", "Eliminación garantizada en 1-2 semanas", "Seguro para huéspedes"]
      },
      {
        titulo: "Control de Termitas",
        descripcion: "Inspección estructural y tratamientos profesionales",
        items: ["Inspección estructural completa", "Tratamientos químicos profesionales", "Protección preventiva de madera", "Reportes técnicos detallados"]
      },
      {
        titulo: "Control de Avispas",
        descripcion: "Retirada urgente de nidos con respuesta en 2 horas",
        items: ["Retirada urgente de nidos (respuesta en 2h)", "Equipo profesional con protección extrema", "Prevención de anidación", "Garantía de no retorno"],
        servicePageSlug: "control-de-avispas"
      },
      {
        titulo: "Control de Hormigas",
        descripcion: "Identificación de especies y tratamiento de colonias",
        items: ["Identificación de especies", "Tratamiento de colonias", "Sellado de puntos de entrada", "Planes de mantenimiento"]
      },
      {
        titulo: "Control de Pulgas y Ácaros",
        descripcion: "Tratamiento de mascotas y ambientes con métodos seguros",
        items: ["Tratamiento de mascotas y ambientes", "Desinfección de textiles", "Prevención de reinfestación", "Seguro para familias"]
      },
      {
        titulo: "Control de Mosquitos",
        descripcion: "Tratamiento de criaderos y nebulización preventiva",
        items: ["Tratamiento de criaderos", "Nebulización preventiva", "Protección estacional", "Métodos ecológicos disponibles"]
      },
      {
        titulo: "Control de Arañas",
        descripcion: "Eliminación y prevención con métodos no tóxicos",
        items: ["Eliminación de telarañas", "Tratamiento preventivo", "Métodos no tóxicos", "Monitorización periódica"]
      }
    ],
    bloqueConfianza: "Los hoteles, restaurantes y viviendas de Segovia enfrentan presión constante: auditorías de salud pública, clientes exigentes, y responsabilidad legal por infestaciones. La competencia regional ofrece tratamientos genéricos con químicos agresivos. Sierra Guard diferencia con métodos especializados: tratamiento térmico para chinches (sin residuos químicos), sellado estructural permanente para cucarachas, y retirada urgente de avispas en menos de 2 horas. Contamos con experiencia comprobada en 200+ establecimientos de Segovia, reportes técnicos para auditorías, y garantía 100% de eliminación.",
    beneficios: [
      "Respuesta en menos de 24 horas",
      "Métodos seguros para familias y mascotas",
      "Certificado CEPA",
      "Garantía 100% de eliminación"
    ],
    proceso: [
      {
        paso: 1,
        titulo: "Inspección profesional",
        descripcion: "Identificamos la especie, nivel de infestación y puntos de entrada"
      },
      {
        paso: 2,
        titulo: "Plan personalizado",
        descripcion: "Diseñamos tratamiento específico según el tipo de plaga y entorno"
      },
      {
        paso: 3,
        titulo: "Tratamiento especializado",
        descripcion: "Aplicamos métodos de bajo impacto químico (térmico, sellado, cebos)"
      },
      {
        paso: 4,
        titulo: "Monitorización",
        descripcion: "Instalamos trampas inteligentes para detectar reinfestación"
      },
      {
        paso: 5,
        titulo: "Seguimiento",
        descripcion: "Realizamos inspecciones periódicas y mantenimiento preventivo"
      }
    ],
    cta: "Te Llamamos Gratis en 24 Horas",
    testimonios: [
      {
        nombre: "María García",
        empresa: "Hotel Segovia Plaza",
        texto: "Sierra Guard eliminó el problema de chinches en 2 semanas. El tratamiento térmico fue profesional y sin daños. Nuestros huéspedes están satisfechos.",
        rating: 5
      },
      {
        nombre: "Juan López",
        empresa: "Restaurante El Mesón",
        texto: "Llevábamos meses con cucarachas. Sierra Guard identificó los puntos de entrada, selló todo y ahora no tenemos problemas. Muy recomendable.",
        rating: 5
      },
      {
        nombre: "Carmen Rodríguez",
        empresa: "Vivienda Azoguejo",
        texto: "Avispas en el balcón. Llamé a Sierra Guard y en 2 horas estaban aquí. Profesionales, rápidos y seguros. Excelente servicio.",
        rating: 5
      },
      {
        nombre: "Pedro Martínez",
        empresa: "Almacén Logístico",
        texto: "Auditoría de plagas completa. Sierra Guard identificó riesgos que otros no vieron. Ahora tenemos plan preventivo y monitorización. Muy satisfecho.",
        rating: 5
      }
    ],
    faqs: [
      {
        question: "¿Es seguro para mis mascotas y niños?",
        answer: "Sí, utilizamos productos de última generación y geles específicos que son seguros. En tratamientos que requieren plazo de seguridad, te informaremos detalladamente para garantizar la protección de tu familia y mascotas."
      },
      {
        question: "¿Cuánto tiempo tarda en hacer efecto?",
        answer: "Depende de la plaga. Para cucarachas, notarás una reducción drástica en 24-48 horas. En tratamientos térmicos para chinches, el efecto es inmediato. Nuestros técnicos te darán una estimación precisa según tu caso."
      },
      {
        question: "¿Ofrecen garantía en el servicio?",
        answer: "Absolutamente. Todos nuestros tratamientos de desinsectación incluyen garantía por escrito y certificado CEPA. Si el problema persiste dentro del periodo garantizado, realizamos tratamientos adicionales sin coste."
      },
      {
        question: "¿Debo preparar la casa antes del tratamiento?",
        answer: "Te proporcionaremos una lista de verificación sencilla antes de nuestra visita. Generalmente implica facilitar el acceso a zonas clave y guardar alimentos expuestos. No es necesario mover muebles pesados."
      }
    ]
  },
  {
    id: "desratizacion",
    slug: "desratizacion",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/pJ5hSiXSQku5X6UXcVcPGG/sandbox/7wk4ZxCsNdaMYgmx2lJ94m-img-3_1770374054000_na1fn_c2VydmljZS1kZXNyYXRpemFjaW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcEo1aFNpWFNRa3U1WDZVWGNWY1BHRy9zYW5kYm94Lzd3azRaeENzTmRhTVlnbXgybEo5NG0taW1nLTNfMTc3MDM3NDA1NDAwMF9uYTFmbl9jMlZ5ZG1salpTMWtaWE55WVhScGVtRmphVzl1LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Gi~Z0ppOFlU23Y9VsY926BnbY5j~Sv7QSqq5OW87OrTyc89Q-ulvku~4RRxN-syk0KFEA33qZS1mG2u~E7uMiIDieqvyfrj4wagGfGs-s8fHsMQ2hP04CndT2K9yfX4yn79I~14BbonBjRdes1SPUmwg952RVHfagzSXlO5KHLJMo1X0KjLnZONMys6~m~Qwef93jUL~IeukCWBGSGB-Y0PPOOtdhJmGQiIxScv2Ak31vP20iOcXCmo4iRI9bF0uEqSveACH4NDLWv7m54sqbfz92S89qABNpMvnaLmaCEwGAr5WGz-WVp1tasGaOzJaG8~5txovZLXWZvy10FRwCQ__",
    nombre: "Desratización",
    h1: "Desratización Profesional en Segovia | Smart Traps 24/7 y Rodent Proofing",
    metaDescription: "Desratización profesional en Segovia. Smart traps con alertas en tiempo real, rodent proofing permanente. Control de ratas y ratones. Certificado CEPA. Garantía 100%.",
    intro: "Protege tu hogar o negocio en Segovia de ratas y ratones con tecnología avanzada. Ofrecemos desratización inteligente con monitorización 24/7 y sellado definitivo de accesos (Rodent Proofing). Soluciones rápidas, seguras y con certificado CEPA para garantizar espacios libres de roedores.",
    servicios: [
      {
        titulo: "Smart Traps 24/7",
        descripcion: "Monitorización en tiempo real con alertas instantáneas",
        items: ["Monitorización en tiempo real", "Alertas instantáneas a teléfono", "Dashboard online", "Reportes automáticos"],
        servicePageSlug: "desratizacion-ratas"
      },
      {
        titulo: "Rodent Proofing",
        descripcion: "Sellado estructural permanente de puntos de entrada",
        items: ["Auditoría de puntos de entrada", "Sellado estructural permanente", "Cierre de grietas y tuberías", "Protección a largo plazo"]
      },
      {
        titulo: "Desratización Residencial",
        descripcion: "Inspecciones regulares y métodos seguros para mascotas",
        items: ["Inspecciones regulares", "Trampas discretas", "Métodos seguros para mascotas", "Soporte continuo"]
      },
      {
        titulo: "Desratización Industrial",
        descripcion: "Auditoría completa y reportes técnicos para cumplimiento normativo",
        items: ["Auditoría completa de almacenes", "Tratamiento de zonas de riesgo", "Reportes técnicos", "Cumplimiento normativo"]
      }
    ],
    bloqueConfianza: "Las empresas de retail y logística en Azoguejo enfrentan auditorías constantes y presión regulatoria. La competencia regional ofrece trampas pasivas que requieren revisión manual. Sierra Guard revoluciona con smart traps conectadas a nube, que envían alertas instantáneas. Nuestro equipo CEPA realiza auditorías estructurales completas, identifica y sella todos los puntos de entrada. Resultado: reducción de 95% en 30 días, con documentación para auditorías.",
    beneficios: [
      "Reducción de 95% en 30 días",
      "Smart traps con alertas en tiempo real",
      "Rodent proofing permanente",
      "Reportes automáticos para auditorías",
      "Garantía 100%"
    ],
    proceso: [
      {
        paso: 1,
        titulo: "Auditoría estructural",
        descripcion: "Identificamos todos los puntos de entrada (grietas, tuberías, conductos)"
      },
      {
        paso: 2,
        titulo: "Instalación de smart traps",
        descripcion: "Colocamos trampas conectadas a nube en zonas estratégicas"
      },
      {
        paso: 3,
        titulo: "Sellado permanente",
        descripcion: "Cerramos todos los accesos con materiales profesionales"
      },
      {
        paso: 4,
        titulo: "Monitorización",
        descripcion: "Recibimos alertas instantáneas de actividad"
      },
      {
        paso: 5,
        titulo: "Reportes",
        descripcion: "Generamos documentación para auditorías sanitarias"
      }
    ],
    cta: "Auditoría Gratis + Llamada en 24 Horas",
    testimonios: [
      {
        nombre: "Carlos Fernández",
        empresa: "Almacén Logístico Azoguejo",
        texto: "Smart traps de Sierra Guard revolucionaron nuestro control de plagas. Alertas en tiempo real, reducción de 95% en 30 días. Excelente inversión.",
        rating: 5
      },
      {
        nombre: "Ana Martínez",
        empresa: "Tienda de Alimentación",
        texto: "Ratas en el almacén. Sierra Guard hizo auditoría, selló todo, instaló smart traps. Problema resuelto. Muy profesional.",
        rating: 5
      },
      {
        nombre: "Luis García",
        empresa: "Vivienda Antigua Segovia",
        texto: "Ratones en casa. Sierra Guard identificó puntos de entrada, selló todo, instaló trampas. Ahora duermo tranquilo.",
        rating: 5
      }
    ]
  },
  {
    id: "desinfeccion",
    slug: "desinfeccion",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/pJ5hSiXSQku5X6UXcVcPGG/sandbox/7wk4ZxCsNdaMYgmx2lJ94m-img-4_1770374055000_na1fn_c2VydmljZS1kZXNpbmZlY2Npb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcEo1aFNpWFNRa3U1WDZVWGNWY1BHRy9zYW5kYm94Lzd3azRaeENzTmRhTVlnbXgybEo5NG0taW1nLTRfMTc3MDM3NDA1NTAwMF9uYTFmbl9jMlZ5ZG1salpTMWtaWE5wYm1abFkyTnBiMjQucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Ut4WPLfxSvSZy9ZDUa2tRp~y9iSAUbEqhLBHCW9k7~ySV9LekZSLDa5qtP2PKFM2n6KFoUrLswZCGJSdCiJvBwtJmgN77h6E6tTkr12dyquMQI-b1TtgTvFQdVm6-aKpca6jP1zTIjDffcOiCLTHe3A18LmajwbmMxufFX8dojvDOLzUeNi0g7PPT4vrhV482lVcFb6XHLDLqnUZ7ZnPcS9DyHpezFPDXUNWfIxk5CLYz9zXe8arPPnSSyB~RhWEKRDGoEyyUtGlYJrOJCybK8FbnkMeuBelGcoqasY7R1QvUKR4HMk6lks~2S0fZNlfDDd~WhsCf0SRNt665tQ6jg__",
    nombre: "Desinfección",
    h1: "Desinfección Profesional en Segovia | Legionella, Bioseguridad y Patógenos",
    metaDescription: "Desinfección profesional en Segovia. Auditoría de legionella, desinfección de patógenos, purificación de aire UV-C. Hospitales, clínicas, gimnasios. Certificado CEPA.",
    intro: "La desinfección es esencial en Segovia para clínicas, hospitales, gimnasios y espacios de salud pública. La legionella en torres de refrigeración, patógenos aéreos en sistemas HVAC, y contaminación de superficies representan riesgos epidemiológicos graves. Sierra Guard ofrece auditorías especializadas de legionella, desinfección de patógenos mediante tecnología UV-C, y purificación de aire profesional.",
    servicios: [
      {
        titulo: "Auditoría de Legionella",
        descripcion: "Inspección de torres de refrigeración e identificación de biofilm",
        items: ["Inspección de torres de refrigeración", "Identificación de biofilm", "Análisis microbiológico", "Reportes técnicos"],
        servicePageSlug: "desinfeccion-legionella"
      },
      {
        titulo: "Desinfección de Patógenos",
        descripcion: "Desinfección de quirófanos y áreas críticas con UV-C",
        items: ["Desinfección de quirófanos", "Tratamiento de áreas críticas", "Purificación de aire UV-C", "Métodos sin residuos químicos"]
      },
      {
        titulo: "Desinfección de Superficies",
        descripcion: "Tratamiento de vestuarios, piscinas y áreas comunes",
        items: ["Desinfección de vestuarios", "Tratamiento de piscinas", "Limpieza de áreas comunes", "Protocolos hospitalarios"]
      },
      {
        titulo: "Desinfección de Ambientes",
        descripcion: "Tratamiento de sistemas HVAC y purificación de aire",
        items: ["Tratamiento de sistemas HVAC", "Purificación de aire", "Monitorización de calidad", "Planes preventivos"]
      },
      {
        titulo: "Limpieza de Conductos de Aire",
        descripcion: "Inspección y limpieza profesional con desinfección UV-C",
        items: ["Inspección de conductos", "Limpieza profesional", "Desinfección UV-C", "Mejora de calidad de aire"]
      }
    ],
    bloqueConfianza: "Los centros sanitarios en Segovia enfrentan auditorías constantes y responsabilidad legal por contaminación. La competencia regional ofrece servicios genéricos de desinfección que no abordan legionella ni patógenos aéreos. Sierra Guard es especialista en bioseguridad hospitalaria. Realizamos auditorías completas de torres de refrigeración, identificamos biofilm, ejecutamos limpiezas químicas profundas con biocidas certificados. Nuestro sistema de purificación de aire mediante UV-C elimina virus y bacterias en tiempo real, sin residuos químicos.",
    beneficios: [
      "Auditoría de legionella según normativa europea",
      "Purificación de aire con tecnología UV-C",
      "Reportes técnicos para inspecciones sanitarias",
      "Métodos sin residuos químicos",
      "Experiencia en clínicas y hospitales"
    ],
    proceso: [
      {
        paso: 1,
        titulo: "Auditoría completa",
        descripcion: "Inspeccionamos torres, sistemas HVAC y áreas críticas"
      },
      {
        paso: 2,
        titulo: "Análisis microbiológico",
        descripcion: "Identificamos patógenos y biofilm"
      },
      {
        paso: 3,
        titulo: "Limpieza profesional",
        descripcion: "Ejecutamos desinfección química profunda"
      },
      {
        paso: 4,
        titulo: "Purificación de aire",
        descripcion: "Instalamos UV-C para eliminación de patógenos aéreos"
      },
      {
        paso: 5,
        titulo: "Reportes técnicos",
        descripcion: "Generamos documentación para auditorías sanitarias"
      }
    ],
    cta: "Auditoría Técnica Gratis + Llamada en 24 Horas",
    testimonios: [
      {
        nombre: "Dr. Miguel Sánchez",
        empresa: "Clínica San Juan",
        texto: "Auditoría de legionella de Sierra Guard fue completa y profesional. Identificaron problemas que otros no vieron. Ahora tenemos sistema de purificación UV-C. Muy satisfecho.",
        rating: 5
      },
      {
        nombre: "Isabel Ruiz",
        empresa: "Gimnasio Fitness Plus",
        texto: "Desinfección de vestuarios y piscina. Sierra Guard utilizó métodos profesionales sin residuos químicos. Nuestros clientes notan la diferencia.",
        rating: 5
      }
    ]
  },
  {
    id: "control-de-aves",
    slug: "control-de-aves",
    image: "https://placehold.co/600x400?text=Control+de+Aves",
    nombre: "Control de Aves",
    h1: "Control de Aves en Segovia | Palomas, Pinchos Antipalomas y Redes de Protección",
    metaDescription: "Control de aves en Segovia. Retirada de palomas, instalación de pinchos antipalomas y redes de protección. Métodos humanitarios. Certificado CEPA. Garantía 100%.",
    intro: "El control de aves es cada vez más demandado en Segovia, especialmente en zonas comerciales y residenciales. Las palomas y otras aves generan acumulación de heces, daños a estructuras, contaminación de espacios, y transmisión de enfermedades. Sierra Guard ofrece control humanitario de aves con métodos no invasivos: instalación de pinchos antipalomas, redes de protección, y sistemas de ahuyentamiento.",
    servicios: [
      {
        titulo: "Control de Palomas",
        descripcion: "Métodos humanitarios para retirada de palomas",
        items: ["Identificación de puntos de anidación", "Métodos humanitarios", "Prevención de retorno", "Limpieza de heces"]
      },
      {
        titulo: "Pinchos Antipalomas",
        descripcion: "Instalación profesional con garantía de 5 años",
        items: ["Instalación profesional", "Materiales de alta durabilidad", "Protección permanente", "Garantía 5 años"]
      },
      {
        titulo: "Redes de Protección",
        descripcion: "Instalación en balcones y terrazas con materiales resistentes",
        items: ["Instalación en balcones y terrazas", "Materiales resistentes", "Protección completa", "Mantenimiento incluido"]
      },
      {
        titulo: "Sistemas de Ahuyentamiento",
        descripcion: "Dispositivos ultrasónicos y luces estroboscópicas",
        items: ["Dispositivos ultrasónicos", "Luces estroboscópicas", "Métodos no invasivos", "Efectividad comprobada"]
      }
    ],
    bloqueConfianza: "Los propietarios de comercios y viviendas en Segovia enfrentan problemas recurrentes con palomas. La competencia regional ofrece métodos inefectivos o inhumanos. Sierra Guard utiliza sistemas profesionales: pinchos antipalomas de alta durabilidad, redes de protección resistentes, y dispositivos de ahuyentamiento. Resultado: protección permanente sin daño animal, con garantía de 5 años.",
    beneficios: [
      "Métodos humanitarios",
      "Protección permanente",
      "Garantía 5 años",
      "Instalación profesional",
      "Mantenimiento incluido"
    ],
    proceso: [
      {
        paso: 1,
        titulo: "Inspección",
        descripcion: "Identificamos puntos de anidación y rutas de vuelo"
      },
      {
        paso: 2,
        titulo: "Diseño personalizado",
        descripcion: "Seleccionamos solución óptima (pinchos, redes, ahuyentamiento)"
      },
      {
        paso: 3,
        titulo: "Instalación profesional",
        descripcion: "Colocamos sistemas con precisión"
      },
      {
        paso: 4,
        titulo: "Pruebas",
        descripcion: "Verificamos efectividad"
      },
      {
        paso: 5,
        titulo: "Mantenimiento",
        descripcion: "Realizamos seguimiento periódico"
      }
    ],
    cta: "Inspección Gratis + Llamada en 24 Horas",
    testimonios: [
      {
        nombre: "Roberto Díaz",
        empresa: "Comercio Centro Histórico",
        texto: "Palomas en la terraza. Sierra Guard instaló pinchos antipalomas. Problema resuelto sin dañar animales. Excelente solución.",
        rating: 5
      }
    ]
  },
  {
    id: "tratamientos-de-madera",
    slug: "tratamientos-de-madera",
    image: "https://placehold.co/600x400?text=Tratamientos+de+Madera",
    nombre: "Tratamientos de Madera",
    h1: "Tratamientos de Madera en Segovia | Carcoma y Termitas en Estructuras",
    metaDescription: "Tratamientos de madera en Segovia. Control de carcoma, tratamiento contra termitas en madera. Protección de estructuras. Certificado CEPA. Garantía 100%.",
    intro: "Los tratamientos de madera son críticos en Segovia, especialmente en edificios históricos y viviendas antiguas. La carcoma y las termitas dañan estructuras de madera, comprometiendo la integridad de vigas, puertas y muebles. Sierra Guard ofrece tratamientos especializados con métodos de bajo impacto químico, inyecciones profesionales, y protección preventiva.",
    servicios: [
      {
        titulo: "Tratamiento contra Carcoma",
        descripcion: "Inyecciones profesionales y protección preventiva",
        items: ["Inspección de daño", "Inyecciones profesionales", "Protección preventiva", "Garantía de eliminación"]
      },
      {
        titulo: "Tratamiento contra Termitas en Madera",
        descripcion: "Identificación de especie y tratamiento especializado",
        items: ["Identificación de especie", "Tratamiento químico especializado", "Protección de estructuras", "Monitorización periódica"]
      },
      {
        titulo: "Protección Preventiva",
        descripcion: "Tratamiento de madera nueva y sellado de grietas",
        items: ["Tratamiento de madera nueva", "Sellado de grietas", "Prevención de infestación", "Planes de mantenimiento"]
      }
    ],
    bloqueConfianza: "Los propietarios de edificios históricos en Segovia enfrentan dilema: necesitan proteger madera sin dañar patrimonio. Sierra Guard utiliza métodos respetuosos: inyecciones precisas sin perforaciones invasivas, tratamientos químicos de bajo impacto, y monitorización periódica. Experiencia comprobada en edificios históricos de Segovia.",
    beneficios: [
      "Métodos respetuosos con patrimonio",
      "Inyecciones precisas sin perforaciones",
      "Protección a largo plazo",
      "Garantía 100%",
      "Experiencia en edificios históricos"
    ],
    proceso: [
      {
        paso: 1,
        titulo: "Inspección detallada",
        descripcion: "Identificamos tipo de plaga y nivel de daño"
      },
      {
        paso: 2,
        titulo: "Análisis de estructura",
        descripcion: "Evaluamos integridad de madera"
      },
      {
        paso: 3,
        titulo: "Tratamiento especializado",
        descripcion: "Aplicamos inyecciones o tratamientos químicos"
      },
      {
        paso: 4,
        titulo: "Protección preventiva",
        descripcion: "Sellamos grietas y aplicamos protectores"
      },
      {
        paso: 5,
        titulo: "Monitorización",
        descripcion: "Realizamos inspecciones periódicas"
      }
    ],
    cta: "Inspección Gratis + Llamada en 24 Horas",
    testimonios: [],
  },
  {
    id: "higiene-ambiental",
    slug: "higiene-ambiental",
    nombre: "Higiene Ambiental",
    h1: "Higiene Ambiental en Segovia | Higienización de Espacios y Gestión de Contenedores",
    metaDescription: "Higiene ambiental en Segovia. Higienización de espacios, gestión de contenedores higiénicos, bacteriostáticos. Comercios, industrias, viviendas. Certificado CEPA.",
    intro: "La higiene ambiental es fundamental en Segovia para mantener espacios limpios, seguros y libres de contaminación. Sierra Guard ofrece servicios de higienización integral: limpieza de espacios, gestión de contenedores higiénicos, y aplicación de bacteriostáticos. Nuestro enfoque combina desinfección química con métodos ecológicos, adaptados a cada sector: comercios, industrias alimentarias, y viviendas.",
    servicios: [
      {
        titulo: "Higienización de Espacios",
        descripcion: "Limpieza profunda y desinfección de superficies",
        items: ["Limpieza profunda", "Desinfección de superficies", "Tratamiento de áreas críticas", "Métodos ecológicos disponibles"]
      },
      {
        titulo: "Gestión de Bacteriostáticos",
        descripcion: "Aplicación de protectores antimicrobianos",
        items: ["Aplicación de protectores antimicrobianos", "Tratamiento de textiles", "Protección de superficies", "Duración prolongada"]
      },
      {
        titulo: "Gestión de Contenedores Higiénicos",
        descripcion: "Limpieza, desinfección y mantenimiento periódico",
        items: ["Limpieza y desinfección", "Mantenimiento periódico", "Prevención de olores", "Cumplimiento normativo"]
      }
    ],
    bloqueConfianza: "Los comercios e industrias en Segovia necesitan higiene ambiental profesional para cumplir normativas y mantener confianza de clientes. Sierra Guard ofrece servicios integrales: limpieza profunda, desinfección química, y aplicación de bacteriostáticos. Métodos ecológicos disponibles para empresas sostenibles.",
    beneficios: [
      "Higiene profesional integral",
      "Métodos ecológicos disponibles",
      "Cumplimiento normativo",
      "Mantenimiento periódico",
      "Prevención de contaminación"
    ],
    proceso: [
      {
        paso: 1,
        titulo: "Auditoría de higiene",
        descripcion: "Evaluamos espacios e identificamos áreas críticas"
      },
      {
        paso: 2,
        titulo: "Limpieza profunda",
        descripcion: "Ejecutamos desinfección completa"
      },
      {
        paso: 3,
        titulo: "Aplicación de bacteriostáticos",
        descripcion: "Protegemos superficies"
      },
      {
        paso: 4,
        titulo: "Gestión de contenedores",
        descripcion: "Limpiamos y desinfectamos"
      },
      {
        paso: 5,
        titulo: "Monitorización",
        descripcion: "Realizamos inspecciones periódicas"
      }
    ],
    cta: "Auditoría Gratis + Llamada en 24 Horas",
    testimonios: [],
  },
  {
    id: "inspeccion-y-prevencion",
    slug: "inspeccion-y-prevencion",
    nombre: "Inspección y Prevención",
    h1: "Inspección y Prevención de Plagas en Segovia | Auditorías y Planes de Mantenimiento",
    metaDescription: "Inspección y prevención de plagas en Segovia. Auditorías completas, inspección de termitas, programas de prevención. Planes de mantenimiento periódico. Certificado CEPA.",
    intro: "La inspección y prevención es la estrategia más efectiva para evitar infestaciones costosas. Sierra Guard ofrece auditorías completas de plagas, inspecciones especializadas de termitas, y programas de prevención personalizados. Nuestro enfoque proactivo detecta problemas antes de que se conviertan en crisis, ahorrando tiempo y dinero a empresas y viviendas de Segovia.",
    servicios: [
      {
        titulo: "Inspección General de Plagas",
        descripcion: "Auditoría completa de instalaciones e identificación de riesgos",
        items: ["Auditoría completa de instalaciones", "Identificación de riesgos", "Reportes detallados", "Recomendaciones personalizadas"]
      },
      {
        titulo: "Inspección de Termitas",
        descripcion: "Búsqueda especializada e identificación de daño",
        items: ["Búsqueda especializada", "Identificación de daño", "Análisis de riesgo estructural", "Reportes técnicos"]
      },
      {
        titulo: "Programas de Prevención de Plagas",
        descripcion: "Diseño personalizado con monitorización regular",
        items: ["Diseño personalizado", "Monitorización regular", "Tratamientos preventivos", "Documentación completa"]
      },
      {
        titulo: "Planes de Mantenimiento Periódico",
        descripcion: "Inspecciones mensuales/trimestrales con tratamientos preventivos",
        items: ["Inspecciones mensuales/trimestrales", "Tratamientos preventivos", "Alertas tempranas", "Reportes automáticos"]
      }
    ],
    bloqueConfianza: "Las empresas de Segovia necesitan estrategia proactiva de prevención para evitar infestaciones. Sierra Guard ofrece auditorías completas, inspecciones especializadas, y programas de prevención personalizados. Nuestro equipo CEPA detecta problemas antes de que se conviertan en crisis, con reportes técnicos para auditorías.",
    beneficios: [
      "Detección temprana de problemas",
      "Ahorro de costos",
      "Reportes técnicos para auditorías",
      "Monitorización regular",
      "Garantía de prevención"
    ],
    proceso: [
      {
        paso: 1,
        titulo: "Auditoría inicial",
        descripcion: "Realizamos inspección completa de instalaciones"
      },
      {
        paso: 2,
        titulo: "Identificación de riesgos",
        descripcion: "Detectamos puntos vulnerables"
      },
      {
        paso: 3,
        titulo: "Diseño de programa",
        descripcion: "Creamos plan personalizado de prevención"
      },
      {
        paso: 4,
        titulo: "Monitorización",
        descripcion: "Realizamos inspecciones regulares"
      },
      {
        paso: 5,
        titulo: "Reportes",
        descripcion: "Generamos documentación para auditorías"
      }
    ],
    cta: "Auditoría Gratis + Llamada en 24 Horas",
    testimonios: [],
  }
];
