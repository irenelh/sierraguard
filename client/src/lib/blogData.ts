import { Button } from "@/components/ui/button";

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  content: string;
  faqs?: { pregunta: string; respuesta: string }[];
  author: string;
  date: string;
  readTime: number;
  category: string;
  tags: string[];
  image?: string;
  schema?: object;
}

export const blogArticles: BlogArticle[] = [
  {
    id: "1",
    slug: "plagas-comunes-segovia",
    title: "Plagas Comunes en Segovia | Guía Completa 2026",
    metaDescription: "Descubre las plagas más comunes en Segovia. Identificación, síntomas, soluciones profesionales.",
    excerpt: "Segovia, con su clima continental y patrimonio histórico, es un lugar donde ciertas plagas encuentran condiciones ideales para proliferar.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Plagas Comunes en Segovia | Guía Completa 2026",
      "description": "Descubre las plagas más comunes en Segovia. Identificación, síntomas, soluciones profesionales.",
      "image": "https://loremflickr.com/800/600/insect,pest?lock=1",
      "datePublished": "2026-02-09",
      "author": { "@type": "Organization", "name": "SierraGuard" },
      "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Cuáles son las plagas más comunes en Segovia?",
            "acceptedAnswer": { "@type": "Answer", "text": "Las 5 plagas más comunes son: 1) Cucarachas (35%), 2) Roedores (30%), 3) Termitas (15%), 4) Hormigas (12%), 5) Mosquitos (8%)." }
          },
          {
            "@type": "Question",
            "name": "¿Cuándo aparecen las plagas?",
            "acceptedAnswer": { "@type": "Answer", "text": "Primavera (abril-mayo): inicio. Verano (junio-agosto): máximo. Otoño (septiembre-octubre): disminuye. Invierno: baja actividad pero persisten en interiores." }
          },
          {
            "@type": "Question",
            "name": "¿Cuál es el costo de eliminar plagas?",
            "acceptedAnswer": { "@type": "Answer", "text": "Cucarachas: €150-300. Roedores: €150-300. Termitas: €800-2.500. Hormigas: €100-200. Mosquitos: €100-150. Presupuesto gratis sin compromiso." }
          },
          {
            "@type": "Question",
            "name": "¿Cómo sé si tengo plagas?",
            "acceptedAnswer": { "@type": "Answer", "text": "Señales: excrementos, olor desagradable, ruidos, daños en estructuras, plagas vivas/muertas. Si ves una, probablemente hay más." }
          },
          {
            "@type": "Question",
            "name": "¿Cuándo llamar a profesionales?",
            "acceptedAnswer": { "@type": "Answer", "text": "Llama si: 1) Ves plagas vivas, 2) Encuentras excrementos, 3) Hueles olor desagradable, 4) Hay daños en estructuras. Mejor prevenir que curar." }
          }
        ]
      }
    },
    content: `Las plagas en Segovia afectan al 65% de los hogares según datos de 2024. Identificar la plaga correctamente es el primer paso para eliminarla. Este artículo cubre las 5 plagas más comunes, sus características, síntomas y soluciones.

## Las 5 Plagas Más Comunes en Segovia

| Plaga | Porcentaje | Búsquedas/mes | Precio | Tiempo |
| :--- | :--- | :--- | :--- | :--- |
| **Cucarachas** | 35% | 80-120 | €150-300 | 24-48h |
| **Roedores** | 30% | 60-100 | €150-300 | 3-7 días |
| **Termitas** | 15% | 60-100 | €800-2.500 | 1-2 semanas |
| **Hormigas** | 12% | 40-70 | €100-200 | 1-2 semanas |
| **Mosquitos** | 8% | 50-100 | €100-150 | 1-2 semanas |

## 1. Cucarachas (35% de infestaciones)

### Identificación
*   **Tamaño:** 1-3 cm
*   **Color:** Marrón oscuro, negro
*   **Ciclo de vida:** 1-2 años
*   **Reproducción:** 20-40 ninfas cada 6-8 semanas

### Síntomas
*   Excrementos pequeños (1-3mm)
*   Olor almendrado
*   Cucarachas vivas de noche
*   Cápsulas de huevos (ootecas)

### Solución
*   **DIY:** €20-50 (30-50% efectividad)
*   **Profesional:** €150-300 (95-99% efectividad)
*   **Tiempo:** 24-48 horas

## 2. Roedores (30% de infestaciones)

### Identificación
*   **Tamaño:** 7-25 cm (según especie)
*   **Ciclo de vida:** 1-3 años
*   **Reproducción:** 8-12 crías cada 6-8 semanas

### Síntomas
*   Excrementos alargados (5-10mm)
*   Ruidos en paredes y ático
*   Daños en cables y estructuras
*   Olor desagradable

### Solución
*   **DIY:** €30-80 (40-60% efectividad)
*   **Profesional:** €150-300 (90-95% efectividad)
*   **Tiempo:** 3-7 días

## 3. Termitas (15% de infestaciones)

### Identificación
*   **Tamaño:** 5-10mm
*   **Ciclo de vida:** 15-30 años (colonia)
*   **Reproducción:** Reina produce 1.000+ huevos/día

### Síntomas
*   Daños en madera
*   Galerías en estructuras
*   Olor a humedad
*   Alas desprendidas

### Solución
*   **DIY:** No recomendado
*   **Profesional:** €800-2.500 (garantía 1-2 años)
*   **Tiempo:** 1-2 semanas

## 4. Hormigas (12% de infestaciones)

### Identificación
*   **Tamaño:** 2-5mm
*   **Ciclo de vida:** 1-3 años
*   **Reproducción:** Reina produce 1.000+ huevos/día

### Síntomas
*   Caminos de hormigas
*   Nidos en grietas
*   Daños en alimentos
*   Picaduras

### Solución
*   **DIY:** €10-30 (50-70% efectividad)
*   **Profesional:** €100-200 (90-95% efectividad)
*   **Tiempo:** 1-2 semanas

## 5. Mosquitos (8% de infestaciones)

### Identificación
*   **Tamaño:** 3-6mm
*   **Ciclo de vida:** 7-21 días
*   **Reproducción:** Rápida en agua estancada

### Síntomas
*   Picaduras
*   Zumbidos de noche
*   Agua estancada
*   Larvas en agua

### Solución
*   **DIY:** €20-50 (30-50% efectividad)
*   **Profesional:** €100-150 (90-95% efectividad)
*   **Tiempo:** 1-2 semanas

## Calendario Estacional de Plagas

| Estación | Plagas Principales | Acción |
| :--- | :--- | :--- |
| **Primavera** | Cucarachas, hormigas, mosquitos | Comienza prevención |
| **Verano** | Mosquitos, avispas, hormigas | Máxima vigilancia |
| **Otoño** | Roedores, cucarachas | Sella grietas |
| **Invierno** | Roedores, cucarachas (interiores) | Mantenimiento |

## Conclusión
Identifica la plaga correctamente y actúa rápido. Usa nuestra calculadora para presupuesto estimado.`,
    faqs: [
      {
        pregunta: "¿Cuáles son las plagas más comunes en Segovia?",
        respuesta: "Las 5 plagas más comunes son: 1) Cucarachas (35%), 2) Roedores (30%), 3) Termitas (15%), 4) Hormigas (12%), 5) Mosquitos (8%)."
      },
      {
        pregunta: "¿Cuándo aparecen las plagas?",
        respuesta: "Primavera (abril-mayo): inicio. Verano (junio-agosto): máximo. Otoño (septiembre-octubre): disminuye. Invierno: baja actividad pero persisten en interiores."
      },
      {
        pregunta: "¿Cuál es el costo de eliminar plagas?",
        respuesta: "Cucarachas: €150-300. Roedores: €150-300. Termitas: €800-2.500. Hormigas: €100-200. Mosquitos: €100-150. Presupuesto gratis sin compromiso."
      },
      {
        pregunta: "¿Cómo sé si tengo plagas?",
        respuesta: "Señales: excrementos, olor desagradable, ruidos, daños en estructuras, plagas vivas/muertas. Si ves una, probablemente hay más."
      },
      {
        pregunta: "¿Cuándo llamar a profesionales?",
        respuesta: "Llama si: 1) Ves plagas vivas, 2) Encuentras excrementos, 3) Hueles olor desagradable, 4) Hay daños en estructuras. Mejor prevenir que curar."
      }
    ],
    author: "Sierra Guard",
    date: "2026-02-06",
    readTime: 12,
    category: "Plagas",
    tags: ["cucarachas", "ratas", "termitas", "avispas", "segovia"],
    image: "https://loremflickr.com/800/600/insect,pest?lock=1"
  },
  {
    id: "2",
    slug: "prevenir-plagas-hogar",
    title: "Cómo Prevenir Plagas en Casa | 10 Consejos Efectivos 2026",
    metaDescription: "10 consejos prácticos para prevenir plagas en tu hogar. Métodos efectivos, económicos y seguros. Guía completa de prevención.",
    excerpt: "La prevención es la estrategia más efectiva y económica para evitar infestaciones de plagas.",
    content: `Mantener tu hogar libre de plagas no tiene por qué ser una batalla constante. La prevención es la herramienta más poderosa (y económica) que tienes a tu disposición. En Segovia, donde los cambios de estación impulsan a insectos y roedores a buscar refugio en el interior, aplicar unas sencillas rutinas puede marcar la diferencia entre un hogar sano y una infestación.

Aquí tienes los 10 consejos de oro de Sierra Guard para blindar tu casa este 2026:

## 1. La Cocina: El "Restaurante" de las Plagas
La mayoría de las infestaciones empiezan aquí.

*   **Limpieza Profunda:** No basta con barrer. Limpia regularmente detrás y debajo de electrodomésticos (nevera, horno) donde se acumulan migas y grasa.
*   **Almacenamiento Hermético:** Olvida las cajas de cartón y las bolsas abiertas. Guarda cereales, harinas, pastas y azúcar en recipientes de vidrio o plástico duro con cierre hermético. Las polillas y gorgojos no podrán entrar (ni salir).
*   **Gestión de Residuos:** La basura orgánica debe estar siempre en un cubo con tapa ajustada. Sácala a diario, especialmente en verano.

## 2. Bloquea el Acceso: Tu Casa es una Fortaleza
Si no pueden entrar, no pueden molestar.

*   **Sellado de Grietas:** Revisa los rodapiés, los marcos de las ventanas y los puntos donde las tuberías entran en la pared. Usa silicona o masilla para sellar cualquier hueco mayor de 3 milímetros.
*   **Puertas y Ventanas:** Instala burletes bajo las puertas de entrada y asegúrate de que las mosquiteras no tengan agujeros. Un ratón puede colarse por el espacio que hay debajo de una puerta mal ajustada.

## 3. Control de Humedad: El Oasis que Debes Secar
El agua atrae más plagas que la comida.

*   **Repara Fugas:** Un grifo que gotea o una tubería con condensación son un imán para cucarachas, hormigas y lepismas (pececillos de plata).
*   **Ventilación:** Ventila bien baños y sótanos para evitar la acumulación de humedad y moho, que sirve de alimento a pequeños insectos.

## 4. Exteriores y Jardín: La Primera Línea de Defensa
El perímetro de tu casa es crucial.

*   **Poda la Vegetación:** Mantén ramas y arbustos recortados y separados al menos 50 cm de la fachada. Las ramas que tocan la casa actúan como "puentes" para hormigas y roedores.
*   **Leña y Escombros:** Nunca apiles leña directamente contra la pared de la casa. Mantenla elevada y alejada para evitar que aniden roedores o termitas.

## 5. Hábitos Inteligentes
Pequeños cambios en tu rutina diaria.

*   **Mascotas:** No dejes el comedero de tu perro o gato con comida toda la noche. Recoge lo que sobre y limpia el cuenco.
*   **Orden General:** Evita acumular cajas de cartón y periódicos viejos en trasteros o garajes. Son el escondite y material de anidación perfecto para cucarachas y roedores.

## 6. Iluminación Estratégica
Los insectos se sienten atraídos por la luz.

*   **Luces Amarillas:** Sustituye las bombillas blancas de las entradas exteriores por luces amarillas (vapor de sodio) o LEDs cálidos. Atraen significativamente menos insectos voladores que la luz blanca brillante.
*   **Sensores de Movimiento:** Instala sensores para que las luces no estén encendidas toda la noche, reduciendo el "efecto faro" para polillas y mosquitos.

## 7. Inspecciona lo "Invisible"
Áticos, sótanos y falsos techos son el paraíso de las plagas porque nadie los molesta.

*   **Revisión Trimestral:** Sube al ático o baja al sótano cada cambio de estación. Busca excrementos, madera roída o nidos de avispas.
*   **Cajas de Cartón:** Si almacenas cosas aquí, usa cajas de plástico duro. El cartón en zonas húmedas y oscuras es comida para pececillos de plata y termitas.

## 8. Cuidado con lo que Traes a Casa
A veces, invitamos a las plagas sin querer.

*   **Maletas:** Al volver de viaje, no dejes la maleta sobre la cama. Revisa las costuras en busca de chinches antes de guardar la ropa.
*   **Paquetes y Compra:** Las cucarachas a menudo entran escondidas en cajas de cartón de supermercados o almacenes. Desecha los embalajes externos inmediatamente en el contenedor de reciclaje fuera de casa.

## 9. Plantas de Interior: Naturaleza Bajo Control
Tus plantas pueden albergar inquilinos indeseados.

*   **Riego Moderado:** El exceso de agua en las macetas crea el ambiente perfecto para la mosca del sustrato. Deja que la tierra se seque entre riegos.
*   **Inspección:** Revisa el envés de las hojas regularmente en busca de pulgones o cochinillas antes de que se conviertan en una plaga mayor.

## 10. Mantenimiento Profesional: La Mejor Inversión
La prevención proactiva es más barata que la curación reactiva.

*   **Inspección Anual:** Al igual que revisas tu coche o tu caldera, una inspección anual de plagas por expertos como Sierra Guard puede detectar problemas incipientes (como termitas en los cimientos) antes de que causen daños estructurales costosos.

## ¿Cuándo llamar a un profesional?
Estos consejos son excelentes para prevenir, pero si ya ves señales de actividad (excrementos, ruidos nocturnos, o insectos vivos durante el día), los remedios caseros pueden no ser suficientes.

En **Sierra Guard**, ofrecemos inspecciones preventivas para identificar puntos débiles en tu hogar que quizás hayas pasado por alto. La tranquilidad de saber que tu casa está protegida no tiene precio.`,
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
    title: "Plagas de Invierno en Segovia | Prevención y Control",
    metaDescription: "Plagas más comunes en invierno en Segovia. Prevención, síntomas y tratamiento. Guía estacional completa.",
    excerpt: "El invierno en Segovia trae consigo un aumento en las infestaciones de plagas.",
    content: `En invierno, las plagas no desaparecen; simplemente cambian de estrategia. Buscan calor en interiores, convirtiendo tu hogar o negocio en su refugio ideal. Este artículo cubre las plagas más comunes en invierno en Segovia y cómo prevenirlas eficazmente.

| Mes | Plagas Principales | Acción Recomendada |
| :--- | :--- | :--- |
| **Octubre** | Roedores, cucarachas | Sella grietas y revisa aislamientos |
| **Noviembre** | Roedores, cucarachas | Aumenta la vigilancia en sótanos y áticos |
| **Diciembre** | Roedores, cucarachas | Máxima prevención (pico de actividad en interiores) |
| **Enero** | Roedores, cucarachas | Mantén tratamientos y revisa trampas |
| **Febrero** | Roedores, cucarachas | Continúa prevención y limpieza profunda |
| **Marzo** | Roedores, cucarachas | Prepara la casa para la primavera |

## Plagas Principales en Invierno

### 1. Roedores (Ratas y Ratones)
Son los invasores más comunes durante los meses fríos.

*   **Comportamiento:** Buscan desesperadamente calor y comida en interiores.
*   **Daños:** Roen cables eléctricos (riesgo de incendio), aislamiento y estructuras.
*   **Riesgos de Salud:** Transmiten enfermedades graves como Hantavirus, Salmonelosis y Leptospirosis.
*   **Solución:** Sellado hermético de entradas + desratización profesional.

### 2. Cucarachas
A diferencia de lo que se cree, siguen activas todo el año si encuentran un ambiente propicio.

*   **Preferencia:** Buscan temperaturas entre 20-30°C, exactamente la temperatura de un hogar con calefacción.
*   **Ubicación:** Se concentran en cocinas (detrás de neveras/hornos) y baños.
*   **Solución:** Desinsectación con geles específicos + limpieza rigurosa (sin migas ni grasa).

### 3. Hormigas
Aunque son menos visibles, no siempre desaparecen por completo.

*   **Estado:** Suelen hibernar en grietas profundas o bajo los cimientos.
*   **Alerta:** Si ves hormigas en invierno, es señal de que el nido está DENTRO de la estructura de tu casa.
*   **Solución:** Tratamientos de barrera y prevención para evitar su reaparición masiva en primavera.

## 4. El Peligro de la Leña y Chimeneas
En Segovia, la leña es un elemento básico del invierno, pero también un "Caballo de Troya" para las plagas.

*   **El transporte:** La carcoma y las hormigas carpinteras a menudo entran en casa ocultas en los troncos.
*   **Consejo:** Almacena la leña fuera de casa, elevada del suelo y cubierta. Introduce solo la que vayas a consumir en el día.
*   **Inspección:** Golpea la leña contra el suelo antes de entrarla para desprender cualquier insecto.

## 5. Segundas Residencias: Un Blanco Fácil
Muchas casas en la provincia de Segovia permanecen cerradas durante semanas en invierno.

*   **El problema:** El agua de los sifones se evapora o congela, permitiendo que las cucarachas y ratas entren por los desagües sin resistencia.
*   **Solución:** Si vas a estar fuera tiempo, deja los tapones de lavabos y fregaderos puestos y vierte un poco de aceite vegetal en los desagües para evitar la evaporación del agua.

## Conclusión
El invierno es un momento crítico para la prevención. No bajes la guardia: una pequeña señal de actividad puede indicar una infestación mayor buscando refugio del frío. Si detectas indicios, llama a profesionales inmediatamente.`,
    faqs: [
      {
        pregunta: "¿Por qué hay más plagas en el interior durante el invierno?",
        respuesta: "Porque buscan calor. Las temperaturas exteriores en Segovia (a menudo bajo cero) son letales para ellas, mientras que tu casa calefaccionada es un paraíso de supervivencia."
      },
      {
        pregunta: "¿Cuándo comienza la \"invasión invernal\"?",
        respuesta: "Empieza en octubre-noviembre con las primeras heladas. El pico máximo de detección en interiores suele ser entre diciembre y enero."
      },
      {
        pregunta: "¿Cómo puedo prevenir estas plagas?",
        respuesta: "Sella grietas (revisa rodapiés y marcos de ventanas), elimina humedad (repara fugas), mantén la limpieza (sin restos de comida) y realiza inspecciones mensuales en zonas poco transitadas."
      }
    ],
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
