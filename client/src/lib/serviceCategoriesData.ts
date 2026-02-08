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
    image: "/images/servicio-desinsectacion-en-segovia.png",
    nombre: "Desinsectación",
    h1: "Desinsectación Profesional en Segovia | Control de Cucarachas, Chinches, Termitas y Avispas",
    metaDescription: "Desinsectación profesional en Segovia. Control de cucarachas, chinches, termitas, avispas, hormigas, pulgas y mosquitos. Métodos seguros, certificados CEPA. Respuesta en 24h.",
    intro: "Servicio líder de desinsectación en Segovia. Eliminamos todo tipo de plagas: cucarachas, chinches, termitas, hormigas y avispas. Garantizamos resultados definitivos con tratamientos rápidos, seguros para tu familia y mascotas, y certificados por sanidad. Recupera hoy mismo la tranquilidad de tu hogar o negocio.",
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
    cta: "Llama ahora",
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
        question: "¿Cuánto tiempo tarda la desinsectación de cucarachas?",
        answer: "La desinsectación de cucarachas muestra resultados en 24-48 horas. Sin embargo, el tratamiento completo dura 2-3 semanas con múltiples aplicaciones. Las cucarachas tienen ciclos de reproducción rápidos, por lo que es necesario eliminar tanto adultos como huevos. Realizamos seguimientos a los 7 y 14 días. La mayoría de clientes notan eliminación del 90% en la primera semana."
      },
      {
        question: "¿Por qué aparecen cucarachas en casa si está limpia?",
        answer: "Las cucarachas no son signo de suciedad. Pueden entrar desde el exterior a través de grietas, tuberías, desagües o incluso en cajas de compras. Buscan agua y calor más que comida. Una sola cucaracha puede reproducirse y crear una infestación en 2-3 meses. Si ves una cucaracha, es probable que haya más. Recomendamos inspección profesional inmediata para identificar puntos de entrada."
      },
      {
        question: "¿Es efectivo el tratamiento de cucarachas en una sola visita?",
        answer: "No recomendamos tratamientos de una sola visita. Las cucarachas requieren múltiples aplicaciones (2-3 visitas) porque tienen ciclos de reproducción complejos. Un tratamiento único solo elimina adultos, pero los huevos eclosionan después. Nuestro protocolo incluye: Visita 1 (Tratamiento inicial), Visita 2 (7 días después), Visita 3 (14 días después). Esto garantiza eliminación total."
      },
      {
        question: "¿Cuál es el precio de desinsectación de cucarachas?",
        answer: "El precio de desinsectación de cucarachas en Segovia es €180-350 para viviendas de 100 m². Incluye inspección, tratamiento químico, sellado de grietas, seguimiento a 7 días y garantía de 30 días. Locales comerciales y restaurantes tienen precios especiales desde €250/mes con servicio preventivo mensual. Solicita presupuesto personalizado sin compromiso."
      }
    ]
  },
  {
    id: "desratizacion",
    slug: "desratizacion",
    image: "/images/servicio-desratizacion-en-segovia.png",
    nombre: "Desratización",
    h1: "Desratización Profesional en Segovia | Control Integral y Rodent Proofing",
    metaDescription: "Desratización profesional en Segovia. Control integral de roedores, rodent proofing permanente. Control de ratas y ratones. Certificado CEPA. Garantía 100%.",
    intro: "Expertos en desratización en Segovia. Eliminamos ratas y ratones mediante estrategias de control integral y sellado estructural definitivo (Rodent Proofing). Solución rápida, discreta y 100% eficaz. Evita riesgos sanitarios y daños materiales con nuestra garantía de eliminación certificada.",
    servicios: [
      {
        titulo: "Control Integral",
        descripcion: "Sistemas de control seguros y eficaces",
        items: ["Inspección detallada", "Estaciones de seguridad", "Control de actividad", "Reportes de seguimiento"],
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
    bloqueConfianza: "Las empresas de retail y logística en Azoguejo enfrentan auditorías constantes y presión regulatoria. La competencia regional ofrece soluciones estándar que a menudo son insuficientes. Sierra Guard revoluciona con sistemas de control integral y seguimiento detallado. Nuestro equipo CEPA realiza auditorías estructurales completas, identifica y sella todos los puntos de entrada. Resultado: reducción de 95% en 30 días, con documentación para auditorías.",
    beneficios: [
      "Reducción de 95% en 30 días",
      "Sistemas de control de alta seguridad",
      "Rodent proofing permanente",
      "Documentación detallada para auditorías",
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
        titulo: "Instalación de sistemas de control",
        descripcion: "Colocamos estaciones de seguridad en zonas estratégicas"
      },
      {
        paso: 3,
        titulo: "Sellado permanente",
        descripcion: "Cerramos todos los accesos con materiales profesionales"
      },
      {
        paso: 4,
        titulo: "Seguimiento",
        descripcion: "Realizamos revisiones periódicas de actividad"
      },
      {
        paso: 5,
        titulo: "Reportes",
        descripcion: "Generamos documentación para auditorías sanitarias"
      }
    ],
    cta: "Llama ahora",
    testimonios: [
      {
        nombre: "Carlos Fernández",
        empresa: "Almacén Logístico Azoguejo",
        texto: "El sistema de control de Sierra Guard revolucionó nuestro control de plagas. Eficacia total, reducción de 95% en 30 días. Excelente inversión.",
        rating: 5
      },
      {
        nombre: "Ana Martínez",
        empresa: "Tienda de Alimentación",
        texto: "Ratas en el almacén. Sierra Guard hizo auditoría, selló todo, instaló estaciones de control. Problema resuelto. Muy profesional.",
        rating: 5
      },
      {
        nombre: "Luis García",
        empresa: "Vivienda Antigua Segovia",
        texto: "Ratones en casa. Sierra Guard identificó puntos de entrada, selló todo, instaló trampas. Ahora duermo tranquilo.",
        rating: 5
      }
    ],
    faqs: [
      {
        question: "¿Cuánto tiempo tarda la desratización en hacer efecto?",
        answer: "La desratización profesional comienza a mostrar resultados entre 3-7 días. Sin embargo, el proceso completo puede durar 2-4 semanas dependiendo del nivel de infestación. Realizamos inspecciones de seguimiento a los 7, 14 y 21 días para garantizar la eliminación total. En casos severos, pueden ser necesarios tratamientos adicionales. Nuestro objetivo es eliminar 100% de la población de roedores."
      },
      {
        question: "¿Es segura la desratización para mascotas y niños?",
        answer: "Sí, utilizamos métodos profesionales seguros para familias con mascotas y niños. Empleamos cebos en estaciones cerradas que solo los roedores pueden acceder. Los productos que usamos están certificados y cumplen con normativas europeas (UE 528/2012). Recomendamos mantener a mascotas y niños alejados de las áreas de tratamiento durante 24 horas. Todos nuestros técnicos están capacitados en protocolos de seguridad."
      },
      {
        question: "¿Cuál es el precio de una desratización en Segovia?",
        answer: "El precio de desratización en Segovia varía entre €150-400 según el tamaño del área y nivel de infestación. Una vivienda de 100 m² cuesta aproximadamente €200-250. Incluye inspección inicial, colocación de cebos, seguimiento a 7 días y garantía de 30 días. Ofrecemos presupuestos personalizados sin compromiso. Usa nuestra calculadora online para obtener un presupuesto estimado en 2 minutos."
      },
      {
        question: "¿Cuántas visitas necesita una desratización?",
        answer: "Una desratización típica requiere 2-3 visitas: Visita 1 (Inspección y colocación de cebos), Visita 2 (Seguimiento a 7-10 días), Visita 3 (Verificación final a 21 días). En casos de infestación severa, pueden ser necesarias 4-5 visitas. Cada visita dura 30-45 minutos. Proporcionamos un plan de tratamiento personalizado después de la inspección inicial."
      },
      {
        question: "¿Cómo prevenir una infestación de roedores?",
        answer: "La prevención es clave. Sella grietas y agujeros en paredes (especialmente alrededor de tuberías), elimina fuentes de alimento (basura, comida expuesta), mantén la higiene, sella grietas en el sótano y ático, instala guardapolvos en puertas exteriores, y realiza inspecciones regulares. Recomendamos tratamientos preventivos trimestrales en zonas de riesgo. Nuestro servicio de mantenimiento preventivo cuesta €50/mes y evita infestaciones futuras."
      }
    ]
  },
  {
    id: "desinfeccion",
    slug: "desinfeccion",
    image: "/images/servicio-desinfectacion-en-segovia.png",
    nombre: "Desinfección",
    h1: "Desinfección Profesional en Segovia | Legionella, Bioseguridad y Patógenos",
    metaDescription: "Desinfección profesional en Segovia. Auditoría de legionella, desinfección de patógenos, purificación de aire UV-C. Hospitales, clínicas, gimnasios. Certificado CEPA.",
    intro: "Desinfección profesional y bioseguridad en Segovia. Especialistas en control de Legionella, purificación de aire y eliminación de patógenos en clínicas, gimnasios y espacios públicos. Ofrecemos auditorías técnicas, tratamientos con tecnología UV-C y certificación sanitaria oficial para garantizar un entorno seguro, saludable y libre de virus.",
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
    cta: "Llama ahora",
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
    image: "/images/servicio-control-aves-en-segovia.png",
    nombre: "Control de Aves",
    h1: "Control de Aves en Segovia | Palomas, Pinchos Antipalomas y Redes de Protección",
    metaDescription: "Control de aves en Segovia. Retirada de palomas, instalación de pinchos antipalomas y redes de protección. Métodos humanitarios. Certificado CEPA. Garantía 100%.",
    intro: "Control de aves y palomas en Segovia. Protege la fachada de tu edificio con instalación de redes, pinchos antipalomas y sistemas disuasorios invisibles. Soluciones éticas, duraderas y sin mantenimiento para evitar daños estructurales y riesgos sanitarios. Solicita tu inspección gratuita y presupuesto sin compromiso.",
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
    cta: "Llama ahora",
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
    image: "/images/servicio-tratamientos-madera-en-segovia.png",
    nombre: "Tratamientos de Madera",
    h1: "Tratamientos de Madera en Segovia | Carcoma y Termitas en Estructuras",
    metaDescription: "Tratamientos de madera en Segovia. Control de carcoma, tratamiento contra termitas en madera. Protección de estructuras. Certificado CEPA. Garantía 100%.",
    intro: "Tratamientos especializados para madera en Segovia. Eliminamos carcoma y termitas de forma definitiva en vigas, muebles y estructuras históricas. Utilizamos inyecciones de alta presión y geles de absorción profunda sin dañar el patrimonio. Garantía de protección a largo plazo y certificación para edificaciones.",
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
    cta: "Llama ahora",
    testimonios: [],
  },
  {
    id: "higiene-ambiental",
    slug: "higiene-ambiental",
    image: "/images/servicio-higiene-ambiental-en-segovia.png",
    nombre: "Higiene Ambiental",
    h1: "Higiene Ambiental en Segovia | Higienización de Espacios y Gestión de Contenedores",
    metaDescription: "Higiene ambiental en Segovia. Higienización de espacios, gestión de contenedores higiénicos, bacteriostáticos. Comercios, industrias, viviendas. Certificado CEPA.",
    intro: "Soluciones integrales de higiene ambiental en Segovia. Mantenimiento de espacios saludables con gestión de contenedores higiénicos, bacteriostáticos y purificación de aire. Servicio adaptado a normativas sanitarias para oficinas, hostelería y centros educativos. Mejora la imagen y seguridad de tu negocio.",
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
    cta: "Llama ahora",
    testimonios: [],
  },
  {
    id: "inspeccion-y-prevencion",
    slug: "inspeccion-y-prevencion",
    image: "/images/servicio-inspeccion-y-prevencion-control-plagas-segovia.png",
    nombre: "Inspección y Prevención",
    h1: "Inspección y Prevención de Plagas en Segovia | Auditorías y Planes de Mantenimiento",
    metaDescription: "Inspección y prevención de plagas en Segovia. Auditorías completas, inspección de termitas, programas de prevención. Planes de mantenimiento periódico. Certificado CEPA.",
    intro: "Auditorías y planes de prevención de plagas en Segovia. Detectamos riesgos antes de que se conviertan en infestaciones costosas. Inspecciones técnicas detalladas, monitoreo continuo y certificados oficiales para cumplimiento de normativas de sanidad. Protege tu inversión con un mantenimiento proactivo y profesional.",
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
    cta: "Llama ahora",
    testimonios: [],
  }
];
