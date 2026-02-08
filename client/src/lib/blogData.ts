export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: number;
  category: string;
  tags: string[];
  image?: string;
}

export const blogArticles: BlogArticle[] = [
  {
    id: "1",
    slug: "plagas-comunes-segovia",
    title: "Plagas Comunes en Segovia - Guía Completa 2026",
    metaDescription: "Descubre las plagas más comunes en Segovia: cucarachas, ratas, termitas y avispas. Guía completa con síntomas y prevención.",
    excerpt: "Segovia, con su clima continental y patrimonio histórico, es un lugar donde ciertas plagas encuentran condiciones ideales para proliferar.",
    content: `Las cucarachas son probablemente la plaga más común, especialmente en cocinas y áreas de almacenamiento de alimentos. Estas plagas son nocturnas y se reproducen rápidamente, lo que hace que una infestación pequeña pueda convertirse en un problema grave en pocas semanas.

Las ratas y ratones son especialmente problemáticos en zonas residenciales y comerciales. Durante los meses más fríos (octubre a marzo), estas plagas buscan refugio en edificios, causando daños en estructuras, cables eléctricos y dejando un rastro de contaminación bacteriológica.

Las termitas, aunque menos visibles, representan una amenaza silenciosa para estructuras de madera. Segovia, con su patrimonio medieval y muchas viviendas con elementos de madera, es vulnerable a infestaciones de termitas que pueden causar daños estructurales significativos si no se detectan a tiempo.

Las avispas, especialmente la avispa velutina, son un problema creciente en primavera y verano. En zonas residenciales, los nidos de avispas en áticos y árboles representan un riesgo para familias y mascotas.`,
    author: "Sierra Guard",
    date: "2026-02-06",
    readTime: 5,
    category: "Plagas",
    tags: ["cucarachas", "ratas", "termitas", "avispas", "segovia"],
    image: "https://loremflickr.com/800/600/insect,pest?lock=1"
  },
  {
    id: "2",
    slug: "prevenir-plagas-hogar",
    title: "Cómo Prevenir Plagas en Tu Hogar - 10 Consejos Prácticos",
    metaDescription: "10 consejos prácticos para prevenir plagas en tu hogar en Segovia. Evita cucarachas, ratas y otros insectos.",
    excerpt: "La prevención es la estrategia más efectiva y económica para evitar infestaciones de plagas.",
    content: `La prevención es la estrategia más efectiva y económica para evitar infestaciones de plagas. En Sierra Guard, recomendamos estos diez pasos esenciales para mantener tu hogar libre de plagas.

Primero, mantén la cocina impecable. Las migas de comida y derrames atraen cucarachas y hormigas. Limpia regularmente bajo electrodomésticos y en grietas donde se acumula la suciedad.

Segundo, almacena alimentos en recipientes herméticos. Los cereales, harinas y otros productos secos deben guardarse en contenedores cerrados que las plagas no puedan penetrar.

Tercero, sella grietas y fisuras en paredes, pisos y alrededor de tuberías. Estos espacios son vías de entrada para insectos y roedores.

Cuarto, elimina fuentes de humedad. Las plagas requieren agua para sobrevivir, así que repara grifos que gotean y asegura una ventilación adecuada en baños y sótanos.

Quinto, no dejes comida para mascotas durante la noche. El alimento de perros y gatos atrae plagas.

Sexto, gestiona adecuadamente la basura. Usa contenedores cerrados y saca la basura regularmente.

Séptimo, inspecciona regularmente áticos, sótanos y espacios de difícil acceso donde las plagas pueden establecer colonias.

Octavo, mantén el jardín limpio. Retira hojas caídas, ramas muertas y maleza donde plagas pueden anidar.

Noveno, revisa regularmente plantas de interior en busca de plagas comunes como ácaros y moscas blancas.

Décimo, considera un programa de prevención profesional con Sierra Guard para inspecciones regulares y tratamientos preventivos.`,
    author: "Sierra Guard",
    date: "2026-02-05",
    readTime: 6,
    category: "Prevención",
    tags: ["prevención", "plagas", "hogar", "consejos"],
    image: "https://loremflickr.com/800/600/clean,home?lock=2"
  },
  {
    id: "3",
    slug: "plagas-invierno-segovia",
    title: "Plagas de Invierno en Segovia - Qué Esperar",
    metaDescription: "Plagas de invierno en Segovia: ratas, cucarachas y termitas. Cómo proteger tu hogar durante los meses fríos.",
    excerpt: "El invierno en Segovia trae consigo un aumento en las infestaciones de plagas.",
    content: `El invierno en Segovia trae consigo un aumento en las infestaciones de plagas. Cuando las temperaturas bajan, los roedores y otros insectos buscan refugio en edificios, creando un problema creciente para propietarios y negocios.

Las ratas y ratones son los principales culpables durante estos meses. Pueden entrar por pequeños agujeros (incluso de 6 milímetros) y se multiplican rápidamente en espacios cálidos como áticos, sótanos y paredes. Una pareja de ratones puede producir 8-10 camadas por año, resultando en cientos de individuos si no se controla.

Las cucarachas también se vuelven más activas en invierno, buscando el calor de cocinas y áreas cercanas a sistemas de calefacción. En edificios comerciales, donde hay múltiples unidades conectadas, las infestaciones pueden propagarse rápidamente.

Las termitas, aunque menos activas en invierno, continúan dañando estructuras de madera desde el interior. Es el momento perfecto para realizar inspecciones profesionales y tratamientos preventivos antes de que la primavera acelere su actividad.`,
    author: "Sierra Guard",
    date: "2026-02-04",
    readTime: 4,
    category: "Plagas",
    tags: ["invierno", "ratas", "cucarachas", "prevención"],
    image: "https://loremflickr.com/800/600/rat,winter?lock=3"
  },
  {
    id: "4",
    slug: "termitas-segovia",
    title: "Termitas en Segovia - Detección y Tratamiento",
    metaDescription: "Termitas en Segovia: cómo detectarlas, daños que causan y tratamientos efectivos. Protege tu hogar.",
    excerpt: "Las termitas son plagas silenciosas que pueden causar daños estructurales graves.",
    content: `Las termitas son plagas silenciosas que pueden causar daños estructurales graves antes de que te des cuenta de su presencia. En Segovia, especialmente en propiedades con elementos de madera antiguos, las termitas representan una amenaza significativa.

Existen varios signos de infestación por termitas. El más obvio es la presencia de galerías o túneles en madera. Las termitas construyen caminos dentro de la madera para protegerse de la luz y mantener la humedad. Si golpeas madera que suena hueca, es probable que haya termitas dentro.

Otro signo es la presencia de alas desechadas, que las termitas aladas dejan después de reproducirse. También puedes notar pequeñas bolitas de barro en las paredes, que son túneles que construyen para viajar.

Los daños por termitas pueden ser costosos. Una infestación no tratada puede comprometer la integridad estructural de una vivienda, afectando vigas, marcos de puertas y pisos. En propiedades históricas, los daños por termitas pueden ser particularmente graves debido a la antigüedad de las estructuras.

El tratamiento profesional es esencial. Sierra Guard utiliza métodos modernos como sistemas de cebo y barreras químicas para eliminar colonias de termitas. Los tratamientos preventivos son especialmente recomendados en propiedades con riesgo alto de infestación.`,
    author: "Sierra Guard",
    date: "2026-02-03",
    readTime: 5,
    category: "Plagas",
    tags: ["termitas", "madera", "daños", "tratamiento"],
    image: "https://loremflickr.com/800/600/termite,wood?lock=4"
  },
  {
    id: "5",
    slug: "avispas-velutinas-segovia",
    title: "Avispas Velutinas en Segovia - Guía de Seguridad",
    metaDescription: "Avispa velutina en Segovia: identificación, riesgos y cómo actuar. Servicio de retirada urgente 24/7.",
    excerpt: "La avispa velutina, originaria de Asia, se ha convertido en una plaga creciente en España.",
    content: `La avispa velutina, originaria de Asia, se ha convertido en una plaga creciente en España. En Segovia, especialmente durante los meses de agosto a octubre, los avistamientos de esta especie invasora aumentan significativamente.

La avispa velutina es más grande que la avispa común europea, con un tamaño de 2-3 centímetros. Tiene un cuerpo principalmente negro con un abdomen rojo-naranja y patas amarillas. A diferencia de las avispas comunes, la velutina es más agresiva y puede atacar sin provocación, especialmente cuando defiende su nido.

Los riesgos para la salud son significativos. Una picadura de avispa velutina es más dolorosa que la de una avispa común, y las personas alérgicas pueden experimentar reacciones graves. Además, estas avispas son depredadores de abejas, amenazando la población de polinizadores locales.

Si encuentras un nido de avispa velutina, no intentes retirarlo por tu cuenta. Contacta a Sierra Guard para un servicio de retirada urgente. Nuestro equipo está capacitado para identificar y eliminar nidos de manera segura, protegiendo tu familia y el medio ambiente.`,
    author: "Sierra Guard",
    date: "2026-02-02",
    readTime: 4,
    category: "Plagas",
    tags: ["avispas", "velutina", "seguridad", "urgente"],
    image: "https://loremflickr.com/800/600/wasp,insect?lock=5"
  },
  {
    id: "6",
    slug: "desinsectacion-profesional-vs-diy",
    title: "Desinsectación Profesional vs DIY - ¿Cuál Elegir?",
    metaDescription: "Desinsectación profesional vs tratamientos DIY. Ventajas de contratar a Sierra Guard para control de plagas.",
    excerpt: "Muchas personas intenta resolver problemas de plagas por su cuenta usando productos disponibles en tiendas.",
    content: `Muchas personas intenta resolver problemas de plagas por su cuenta usando productos disponibles en tiendas. Sin embargo, la desinsectación profesional ofrece ventajas significativas que los tratamientos DIY no pueden proporcionar.

Los tratamientos DIY tienen limitaciones. Los productos comerciales disponibles para consumidores tienen concentraciones reducidas de ingredientes activos por razones de seguridad. Además, requieren aplicación correcta, timing adecuado y seguimiento, lo que muchas personas no logran hacer correctamente.

Una aplicación incorrecta puede resultar en infestaciones parcialmente tratadas que resurgen después de semanas.

La desinsectación profesional, por otro lado, utiliza productos de grado comercial más efectivos, aplicados por técnicos capacitados que entienden el comportamiento de las plagas y cómo acceder a sus refugios. Los profesionales también pueden identificar la causa raíz de la infestación y recomendar medidas preventivas específicas.

En Sierra Guard, nuestros técnicos certificados realizan inspecciones completas, identifican puntos de entrada y aplican tratamientos personalizados. Ofrecemos garantías en nuestro trabajo y seguimiento para asegurar que el problema se resuelva completamente.`,
    author: "Sierra Guard",
    date: "2026-02-01",
    readTime: 5,
    category: "Tratamiento",
    tags: ["profesional", "DIY", "comparación", "eficacia"],
    image: "https://loremflickr.com/800/600/worker,protection?lock=6"
  },
  {
    id: "7",
    slug: "desratizacion-negocios-segovia",
    title: "Desratización en Negocios - Importancia para Restaurantes y Comercios",
    metaDescription: "Desratización en negocios: por qué es crítica para restaurantes y comercios en Segovia. Control de plagas profesional.",
    excerpt: "Para negocios en Segovia, especialmente restaurantes, cafeterías y tiendas de alimentos, el control de roedores es una prioridad crítica.",
    content: `Para negocios en Segovia, especialmente restaurantes, cafeterías y tiendas de alimentos, el control de roedores es una prioridad crítica. Una infestación de ratas puede resultar en cierre del negocio, multas de salud y daño irreparable a la reputación.

Las ratas en negocios de alimentos representan múltiples riesgos. Contaminan alimentos y superficies con bacterias como Salmonella y E. coli, causando enfermedades en clientes. Dañan estructuras, cables eléctricos y equipos, resultando en costosas reparaciones. Además, la presencia de ratas es motivo de cierre inmediato por autoridades de salud.

La prevención es especialmente importante en negocios. Sierra Guard recomienda un programa de desratización integral que incluya inspecciones regulares, instalación de trampas inteligentes con monitoreo 24/7, sellado de puntos de entrada y gestión de residuos.

Nuestros sistemas de monitoreo remoto permiten detectar actividad de roedores en tiempo real, permitiendo intervención rápida antes de que se desarrolle una infestación.`,
    author: "Sierra Guard",
    date: "2026-01-31",
    readTime: 4,
    category: "Negocios",
    tags: ["desratización", "restaurantes", "comercios", "higiene"],
    image: "https://loremflickr.com/800/600/restaurant,kitchen?lock=7"
  },
  {
    id: "8",
    slug: "legionella-segovia",
    title: "Legionella en Segovia - Riesgo en Torres de Refrigeración",
    metaDescription: "Legionella en Segovia: riesgos en torres de refrigeración y sistemas HVAC. Auditoría y desinfección profesional.",
    excerpt: "La legionella es una bacteria que crece en sistemas de agua cálida, especialmente en torres de refrigeración y sistemas HVAC.",
    content: `La legionella es una bacteria que crece en sistemas de agua cálida, especialmente en torres de refrigeración y sistemas HVAC. En Segovia, donde muchos edificios comerciales tienen estos sistemas, el riesgo de legionelosis es real.

La enfermedad del legionario es una neumonía grave causada por la inhalación de agua contaminada con legionella. Los síntomas incluyen fiebre alta, tos, dolor muscular y dificultad respiratoria. En casos graves, puede ser fatal, especialmente en personas mayores o inmunodeprimidas.

La prevención requiere mantenimiento regular y desinfección de sistemas de agua. Sierra Guard ofrece auditorías completas de riesgo de legionella, identificando sistemas vulnerables y realizando tratamientos de desinfección. Nuestros técnicos certificados aseguran que los sistemas cumplan con regulaciones de salud pública.`,
    author: "Sierra Guard",
    date: "2026-01-30",
    readTime: 4,
    category: "Desinfección",
    tags: ["legionella", "torres", "HVAC", "salud"],
    image: "https://loremflickr.com/800/600/water,pipe?lock=8"
  },
  {
    id: "9",
    slug: "chinches-segovia",
    title: "Chinches - Detección Temprana y Tratamiento Efectivo",
    metaDescription: "Chinches en Segovia: cómo detectarlas, prevención y tratamiento. Soluciones profesionales de Sierra Guard.",
    excerpt: "Los chinches son plagas que se alimentan de sangre humana, típicamente durante la noche.",
    content: `Los chinches son plagas que se alimentan de sangre humana, típicamente durante la noche. Aunque no transmiten enfermedades, sus picaduras causan picazón intensa y pueden resultar en infecciones por rascado. En Segovia, especialmente en hoteles y viviendas del Centro Histórico, los chinches son un problema creciente.

La detección temprana es crucial. Los signos de infestación incluyen manchas de sangre en sábanas, pequeñas manchas negras (heces) en colchones, y picaduras en patrón de línea en la piel. Los chinches se esconden en grietas de colchones, marcos de cama, y muebles durante el día.

El tratamiento profesional es más efectivo que los intentos DIY. Sierra Guard utiliza tratamiento térmico sin químicos, que es altamente efectivo contra chinches en todas las etapas de vida. Este método es seguro para familias y mascotas, y no deja residuos químicos.`,
    author: "Sierra Guard",
    date: "2026-01-29",
    readTime: 4,
    category: "Plagas",
    tags: ["chinches", "detección", "tratamiento", "hogar"],
    image: "https://loremflickr.com/800/600/bed,bedroom?lock=9"
  },
  {
    id: "10",
    slug: "hormigas-segovia",
    title: "Hormigas en Segovia - Tipos Comunes y Control",
    metaDescription: "Hormigas en Segovia: tipos comunes, daños y métodos de control. Soluciones profesionales de Sierra Guard.",
    excerpt: "Las hormigas son plagas comunes en Segovia, especialmente durante los meses cálidos.",
    content: `Las hormigas son plagas comunes en Segovia, especialmente durante los meses cálidos. Aunque generalmente no son peligrosas, pueden contaminar alimentos, dañar estructuras y ser simplemente molestas.

En Segovia, las especies más comunes incluyen la hormiga negra común, la hormiga roja (que puede picar), y la hormiga carpintera (que excava madera). Las hormigas carpinteras son particularmente problemáticas porque pueden dañar estructuras de madera, aunque no comen la madera como las termitas.

El control de hormigas requiere identificar y eliminar la colonia completa, incluyendo la reina. Los tratamientos superficiales solo eliminan hormigas obreras, permitiendo que la colonia continúe creciendo. Sierra Guard utiliza cebos especializados que las hormigas transportan a la colonia, eliminando la fuente del problema.`,
    author: "Sierra Guard",
    date: "2026-01-28",
    readTime: 4,
    category: "Plagas",
    tags: ["hormigas", "control", "cebos", "colonias"],
    image: "https://loremflickr.com/800/600/ant,insect?lock=10"
  },
  {
    id: "11",
    slug: "mosquitos-segovia",
    title: "Mosquitos en Segovia - Prevención en Primavera y Verano",
    metaDescription: "Mosquitos en Segovia: prevención y control en primavera y verano. Protege tu hogar y negocio.",
    excerpt: "Los mosquitos son plagas estacionales en Segovia, especialmente problemáticos en primavera y verano.",
    content: `Los mosquitos son plagas estacionales en Segovia, especialmente problemáticos en primavera y verano. Además de ser molestos, pueden transmitir enfermedades como dengue y virus del Nilo Occidental.

La prevención es la estrategia más efectiva. Elimina fuentes de agua estancada donde los mosquitos se reproducen: platos bajo macetas, canaletas obstruidas, y cualquier recipiente que retenga agua. Mantén el jardín limpio y podado, reduciendo lugares donde los mosquitos pueden descansar.

Para control profesional, Sierra Guard ofrece tratamientos de nebulización que eliminan mosquitos adultos y larvicidas que previenen reproducción en fuentes de agua. Estos tratamientos son especialmente recomendados antes de eventos al aire libre o en propiedades con áreas de agua.`,
    author: "Sierra Guard",
    date: "2026-01-27",
    readTime: 4,
    category: "Plagas",
    tags: ["mosquitos", "verano", "prevención", "control"],
    image: "https://loremflickr.com/800/600/mosquito,insect?lock=11"
  },
  {
    id: "12",
    slug: "mantenimiento-preventivo-plagas",
    title: "Mantenimiento Preventivo - Programa Anual de Control de Plagas",
    metaDescription: "Programa anual de mantenimiento preventivo de plagas. Protege tu hogar o negocio todo el año.",
    excerpt: "El mantenimiento preventivo es la estrategia más económica y efectiva para mantener tu propiedad libre de plagas.",
    content: `El mantenimiento preventivo es la estrategia más económica y efectiva para mantener tu propiedad libre de plagas. Sierra Guard ofrece programas personalizados que se adaptan a las necesidades específicas de tu hogar o negocio.

Un programa típico incluye inspecciones trimestrales, tratamientos preventivos según la estación, sellado de puntos de entrada, y recomendaciones de higiene y gestión de residuos. Durante inspecciones, nuestros técnicos identifican signos tempranos de infestación, permitiendo intervención rápida antes de que se desarrolle un problema grave.

Los beneficios del mantenimiento preventivo incluyen: protección continua contra plagas, detección temprana de problemas, reducción de costos a largo plazo, y paz mental sabiendo que tu propiedad está protegida.

Contacta a Sierra Guard para diseñar un programa de mantenimiento preventivo personalizado para tu propiedad.`,
    author: "Sierra Guard",
    date: "2026-01-26",
    readTime: 5,
    category: "Prevención",
    tags: ["mantenimiento", "preventivo", "programa", "anual"],
    image: "https://loremflickr.com/800/600/shield,protection?lock=12"
  }
];

export function getBlogArticle(slug: string): BlogArticle | undefined {
  return blogArticles.find(article => article.slug === slug);
}

export function getBlogArticlesByCategory(category: string): BlogArticle[] {
  return blogArticles.filter(article => article.category === category);
}

export function getAllBlogCategories(): string[] {
  return Array.from(new Set(blogArticles.map(article => article.category)));
}
