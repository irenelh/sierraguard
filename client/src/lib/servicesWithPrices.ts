export interface Service {
  id: string;
  name: string;
  icon: string;
  shortDescription: string;
  priceRange: string;
  features: string[];
  urgency?: string;
}

export interface ServiceCategory {
  id: string;
  slug: string;
  name: string;
  description: string;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "desinsectacion",
    slug: "desinsectacion",
    name: "Desinsectación",
    description: "Control profesional de insectos: cucarachas, chinches, termitas, avispas, mosquitos y más.",
    services: [
      {
        id: "cucarachas",
        name: "Control de Cucarachas",
        icon: "🪳",
        shortDescription: "Eliminación completa de cucarachas",
        priceRange: "Desde 90€",
        features: ["Inspección completa", "Tratamiento con productos certificados", "Seguimiento 30 días", "Garantía 100%"],
        urgency: "24-48 horas"
      },
      {
        id: "chinches",
        name: "Control de Chinches",
        icon: "🛏️",
        shortDescription: "Tratamiento térmico sin químicos",
        priceRange: "Desde 150€",
        features: ["Tratamiento térmico", "Sin residuos químicos", "Efectivo en todas las etapas", "Garantía 6 meses"],
        urgency: "48-72 horas"
      },
      {
        id: "termitas",
        name: "Control de Termitas",
        icon: "🪵",
        shortDescription: "Protección de estructuras de madera",
        priceRange: "Desde 200€",
        features: ["Inspección estructural", "Sistemas de cebo", "Barreras químicas", "Garantía 2 años"],
        urgency: "Preventivo"
      },
      {
        id: "avispas",
        name: "Control de Avispas",
        icon: "🐝",
        shortDescription: "Retirada segura de nidos",
        priceRange: "Desde 120€",
        features: ["Retirada segura de nidos", "Disponible 24/7", "Protección de mascotas", "Garantía 100%"],
        urgency: "2 horas"
      },
      {
        id: "hormigas",
        name: "Control de Hormigas",
        icon: "🐜",
        shortDescription: "Eliminación de colonias",
        priceRange: "Desde 80€",
        features: ["Identificación de especie", "Cebos especializados", "Eliminación de reina", "Seguimiento 30 días"],
        urgency: "24-48 horas"
      },
      {
        id: "mosquitos",
        name: "Control de Mosquitos",
        icon: "🦟",
        shortDescription: "Tratamientos estacionales",
        priceRange: "Desde 100€",
        features: ["Nebulización profesional", "Larvicidas", "Prevención de reproducción", "Garantía 30 días"],
        urgency: "48 horas"
      },
      {
        id: "pulgas-acaros",
        name: "Control de Pulgas y Ácaros",
        icon: "🔍",
        shortDescription: "Tratamiento de plagas microscópicas",
        priceRange: "Desde 90€",
        features: ["Tratamiento de mascotas", "Desinfección ambiental", "Productos seguros", "Garantía 30 días"],
        urgency: "24-48 horas"
      },
      {
        id: "aranas",
        name: "Control de Arañas",
        icon: "🕷️",
        shortDescription: "Eliminación de arañas",
        priceRange: "Desde 70€",
        features: ["Tratamiento preventivo", "Eliminación de telarañas", "Seguro para mascotas", "Garantía 30 días"],
        urgency: "24-48 horas"
      }
    ]
  },
  {
    id: "desratizacion",
    slug: "desratizacion",
    name: "Desratización",
    description: "Control profesional de ratas y ratones con sistemas inteligentes 24/7.",
    services: [
      {
        id: "ratas",
        name: "Control de Ratas",
        icon: "🐀",
        shortDescription: "Eliminación de ratas con smart traps",
        priceRange: "Desde 120€",
        features: ["Smart traps con monitoreo 24/7", "Sellado de puntos de entrada", "Gestión de residuos", "Garantía 60 días"],
        urgency: "24-48 horas"
      },
      {
        id: "ratones",
        name: "Control de Ratones",
        icon: "🐭",
        shortDescription: "Eliminación de ratones",
        priceRange: "Desde 100€",
        features: ["Trampas profesionales", "Cebos especializados", "Prevención de reproducción", "Garantía 30 días"],
        urgency: "24-48 horas"
      }
    ]
  },
  {
    id: "desinfeccion",
    slug: "desinfeccion",
    name: "Desinfección",
    description: "Desinfección profesional: legionella, bioseguridad, superficies y ambientes.",
    services: [
      {
        id: "legionella",
        name: "Control de Legionella",
        icon: "🦠",
        shortDescription: "Auditoría y desinfección de torres de refrigeración",
        priceRange: "Desde 300€",
        features: ["Auditoría de riesgo", "Cultivos microbiológicos", "Desinfección profesional", "Certificado de cumplimiento"],
        urgency: "Preventivo"
      },
      {
        id: "bioseguridad",
        name: "Bioseguridad y Desinfección",
        icon: "🛡️",
        shortDescription: "Desinfección de patógenos",
        priceRange: "Desde 150€",
        features: ["Desinfección de superficies", "Eliminación de patógenos", "Productos certificados", "Garantía 30 días"],
        urgency: "24 horas"
      },
      {
        id: "superficies",
        name: "Desinfección de Superficies",
        icon: "🧼",
        shortDescription: "Limpieza y desinfección profesional",
        priceRange: "Desde 100€",
        features: ["Limpieza profunda", "Desinfectantes profesionales", "Seguro para alimentos", "Garantía 30 días"],
        urgency: "24-48 horas"
      },
      {
        id: "ambientes",
        name: "Desinfección de Ambientes",
        icon: "💨",
        shortDescription: "Nebulización desinfectante",
        priceRange: "Desde 120€",
        features: ["Nebulización profesional", "Cobertura completa", "Seguro para ocupantes", "Garantía 30 días"],
        urgency: "24-48 horas"
      },
      {
        id: "conductos-aire",
        name: "Limpieza de Conductos de Aire",
        icon: "🌬️",
        shortDescription: "Higienización de sistemas HVAC",
        priceRange: "Desde 250€",
        features: ["Inspección con cámara", "Limpieza profunda", "Desinfección", "Mejora de calidad de aire"],
        urgency: "Preventivo"
      }
    ]
  },
  {
    id: "control-de-aves",
    slug: "control-de-aves",
    name: "Control de Aves",
    description: "Control de palomas, instalación de pinchos y redes de protección.",
    services: [
      {
        id: "palomas",
        name: "Control de Palomas",
        icon: "🕊️",
        shortDescription: "Ahuyentamiento de palomas",
        priceRange: "Desde 150€",
        features: ["Sistemas de ahuyentamiento", "Instalación de pinchos", "Redes de protección", "Garantía 1 año"],
        urgency: "48-72 horas"
      },
      {
        id: "pinchos-antipalomas",
        name: "Instalación de Pinchos Antipalomas",
        icon: "📍",
        shortDescription: "Protección física contra palomas",
        priceRange: "Desde 200€",
        features: ["Pinchos de acero inoxidable", "Instalación profesional", "Durabilidad 10+ años", "Garantía 5 años"],
        urgency: "Instalación"
      },
      {
        id: "redes-proteccion",
        name: "Instalación de Redes de Protección",
        icon: "🕸️",
        shortDescription: "Redes anti-aves",
        priceRange: "Desde 300€",
        features: ["Redes de alta resistencia", "Instalación profesional", "Durabilidad 15+ años", "Garantía 5 años"],
        urgency: "Instalación"
      }
    ]
  },
  {
    id: "tratamientos-de-madera",
    slug: "tratamientos-de-madera",
    name: "Tratamientos de la Madera",
    description: "Protección de estructuras de madera: carcoma, termitas y xilófagos.",
    services: [
      {
        id: "carcoma",
        name: "Tratamiento contra Carcoma",
        icon: "🪲",
        shortDescription: "Eliminación de carcoma",
        priceRange: "Desde 150€",
        features: ["Inyección de productos", "Tratamiento superficial", "Prevención de reproducción", "Garantía 2 años"],
        urgency: "Preventivo"
      },
      {
        id: "termitas-madera",
        name: "Tratamiento contra Termitas en Madera",
        icon: "🪵",
        shortDescription: "Protección de estructuras",
        priceRange: "Desde 200€",
        features: ["Barreras químicas", "Sistemas de cebo", "Inspección estructural", "Garantía 2 años"],
        urgency: "Preventivo"
      }
    ]
  },
  {
    id: "higiene-ambiental",
    slug: "higiene-ambiental",
    name: "Higiene Ambiental",
    description: "Higienización de espacios, gestión de residuos y contenedores.",
    services: [
      {
        id: "higienizacion",
        name: "Higienización de Espacios",
        icon: "🧹",
        shortDescription: "Limpieza y desinfección integral",
        priceRange: "Desde 120€",
        features: ["Limpieza profunda", "Desinfección", "Gestión de residuos", "Garantía 30 días"],
        urgency: "24-48 horas"
      },
      {
        id: "bacteriostáticos",
        name: "Gestión de Bacteriostáticos",
        icon: "🧬",
        shortDescription: "Control de bacterias",
        priceRange: "Desde 100€",
        features: ["Aplicación de bacteriostáticos", "Prevención de crecimiento", "Seguro para alimentos", "Garantía 30 días"],
        urgency: "24-48 horas"
      },
      {
        id: "contenedores",
        name: "Gestión de Contenedores Higiénicos",
        icon: "🗑️",
        shortDescription: "Limpieza y desinfección de contenedores",
        priceRange: "Desde 80€",
        features: ["Limpieza profesional", "Desinfección", "Prevención de plagas", "Garantía 30 días"],
        urgency: "Periódico"
      }
    ]
  },
  {
    id: "inspeccion-y-prevencion",
    slug: "inspeccion-y-prevencion",
    name: "Inspección y Prevención",
    description: "Auditorías, inspecciones y programas de prevención de plagas.",
    services: [
      {
        id: "inspeccion-general",
        name: "Inspección General de Plagas",
        icon: "🔍",
        shortDescription: "Auditoría completa",
        priceRange: "Desde 100€",
        features: ["Inspección visual completa", "Identificación de riesgos", "Informe detallado", "Recomendaciones"],
        urgency: "48 horas"
      },
      {
        id: "inspeccion-termitas",
        name: "Inspección de Termitas",
        icon: "🪵",
        shortDescription: "Auditoría especializada",
        priceRange: "Desde 150€",
        features: ["Inspección estructural", "Detección de daños", "Análisis de riesgo", "Plan de tratamiento"],
        urgency: "Preventivo"
      },
      {
        id: "programas-prevencion",
        name: "Programas de Prevención de Plagas",
        icon: "🛡️",
        shortDescription: "Mantenimiento periódico",
        priceRange: "Desde 50€/mes",
        features: ["Inspecciones trimestrales", "Tratamientos preventivos", "Monitoreo 24/7", "Garantía continua"],
        urgency: "Periódico"
      },
      {
        id: "planes-mantenimiento",
        name: "Planes de Mantenimiento Periódico",
        icon: "📅",
        shortDescription: "Protección anual",
        priceRange: "Desde 40€/mes",
        features: ["Inspecciones mensuales", "Tratamientos según estación", "Seguimiento continuo", "Garantía anual"],
        urgency: "Periódico"
      }
    ]
  }
];

export function getServiceCategory(slug: string): ServiceCategory | undefined {
  return serviceCategories.find(cat => cat.slug === slug);
}

export function getService(categorySlug: string, serviceId: string): Service | undefined {
  const category = getServiceCategory(categorySlug);
  return category?.services.find(svc => svc.id === serviceId);
}
