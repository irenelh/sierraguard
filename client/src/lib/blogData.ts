

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
      "image": "/images/plagas-comunes-en-segovia.png",
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
    content: `Las plagas en Segovia afectan al 65% de los hogares según datos de 2024. El clima continental, con inviernos fríos y veranos calurosos, empuja a muchas especies a buscar refugio en el interior de viviendas y negocios. Identificar la plaga correctamente es el primer paso para eliminarla de forma efectiva y segura.

En este artículo, analizamos en profundidad las 5 plagas más frecuentes en nuestra provincia, detallando sus características, cómo detectarlas a tiempo y las mejores estrategias de control.

## Las 5 Plagas Más Comunes en Segovia

A continuación, presentamos una comparativa rápida de las plagas que más afectan a los segovianos:

| Plaga | Porcentaje | Tiempo |
| :--- | :--- | :--- |
| **Cucarachas** | 35% | 24-48h |
| **Roedores** | 30% | 3-7 días |
| **Termitas** | 15% | 1-2 semanas |
| **Hormigas** | 12% | 1-2 semanas |
| **Mosquitos** | 8% | 1-2 semanas |

## 1. Cucarachas (35% de infestaciones)
Las cucarachas son, con diferencia, la plaga más común y persistente en Segovia. Su capacidad de adaptación y reproducción rápida las convierte en un enemigo formidable.

### Identificación: ¿Cómo son?
No todas son iguales. En nuestra zona predominan la **cucaracha alemana** (pequeña y rubia, habitual en cocinas) y la **cucaracha oriental** (grande y negra, común en alcantarillas y sótanos).
*   **Tamaño:** Oscilan entre 1 y 3 cm.
*   **Color:** Marrón claro a negro brillante.
*   **Ciclo de vida:** Viven 1-2 años, pero su tasa reproductiva es explosiva.
*   **Reproducción:** Una hembra puede generar de 20 a 40 ninfas cada 6-8 semanas.

### Síntomas de Alarma
A menudo, no verás a los insectos hasta que la infestación es grave, ya que son nocturnos. Fíjate en:
*   **Excrementos:** Pequeños puntos negros similares a pimienta molida o posos de café en esquinas y cajones.
*   **Olor:** Un olor rancio y dulzón (almendrado) característico en infestaciones grandes.
*   **Avistamientos diurnos:** Si ves una de día, significa que los nidos están superpoblados.
*   **Ootecas:** Cápsulas de huevos vacías en rincones oscuros.

### Solución y Tratamiento
*   **DIY (Hazlo tú mismo):** Los sprays de supermercado matan al contacto pero dispersan la plaga. (Efectividad baja: 30-50%).
*   **Profesional:** El uso de geles biocidas con efecto cascada es la única solución definitiva. (Efectividad: 95-99%).
*   **Tiempo de eliminación:** 24-48 horas para notar una reducción drástica.

## 2. Roedores (30% de infestaciones)
Ratas y ratones buscan calor y comida, especialmente en otoño e invierno. Son peligrosos por las enfermedades que transmiten y los daños materiales que causan.

### Identificación
El ratón doméstico y la rata gris son los visitantes más indeseados.
*   **Tamaño:** Desde 7 cm (ratones) hasta 25 cm (ratas), sin contar la cola.
*   **Comportamiento:** Son neofóbicos (recelan de lo nuevo), lo que dificulta su captura.
*   **Reproducción:** Una pareja puede dar lugar a una colonia de 200 individuos en un año.

### Síntomas en el Hogar
*   **Ruidos:** Rasguños o correteos en falsos techos y paredes por la noche.
*   **Excrementos:** De 5-10 mm, oscuros y terminados en punta (ratón) o romos (rata).
*   **Daños:** Cables roídos, bolsas de comida rotas y madera mordisqueada.
*   **Manchas:** Marcas de grasa (sebo) en los rodapiés por donde pasan habitualmente.

### Solución
*   **DIY:** Trampas mecánicas o pegamento. A menudo insuficientes para colonias. (Efectividad: 40-60%).
*   **Profesional:** Estaciones de cebo seguras y sellado de puntos de entrada. (Efectividad: 90-95%).
*   **Tiempo:** 3-7 días para control total.

## 3. Termitas (15% de infestaciones)
La "plaga invisible". Las termitas subterráneas son devastadoras en el casco histórico de Segovia, afectando a vigas y estructuras antiguas.

### Identificación
A menudo se confunden con hormigas aladas.
*   **Apariencia:** Insectos blancos y blandos (obreras) o negros con alas (reproductoras).
*   **Diferencia clave:** Tienen el cuerpo recto, sin la "cintura de avispa" de las hormigas.
*   **Colonia:** Pueden tener millones de individuos y extenderse por varios edificios.

### Síntomas (Difíciles de ver)
*   **Madera hueca:** Al golpear marcos o vigas, suenan a vacío.
*   **Canales de barro:** Túneles marrones que suben por paredes o cimientos.
*   **Enjambrazón:** Aparición repentina de cientos de insectos alados en primavera.

### Solución
*   **DIY:** Totalmente desaconsejado. Los sprays no llegan al termitero.
*   **Profesional:** Sistema de cebos (sentri-tech) que elimina la colonia o barreras químicas. (Garantía 5 años).
*   **Tiempo:** 1-2 semanas para control inicial, meses para eliminación total de colonia.

## 4. Hormigas (12% de infestaciones)
Aunque parecen inofensivas, una invasión de hormigas puede contaminar alimentos y ser muy molesta.

### Identificación
*   **Especies:** Hormiga negra de jardín y hormiga de pavimento son las más comunes aquí.
*   **Comportamiento:** Forman hileras muy definidas hacia fuentes de comida dulce o proteica.

### Síntomas
*   **Hileras:** Caminos visibles de hormigas entrando por ventanas o bajo puertas.
*   **Montoncitos de tierra:** Pequeños volcanes de tierra o arena en rodapiés o grietas.

### Solución
*   **DIY:** Trampas de cebo de supermercado. Funcionan si la infestación es leve.
*   **Profesional:** Gel insecticida de alta apetencia que las obreras llevan a la reina.

## 5. Mosquitos (8% de infestaciones)
Estacionales pero muy molestos, especialmente cerca de zonas húmedas o jardines con riego.

### Identificación
*   **Especies:** Mosquito común y, cada vez más, presencia de mosquito tigre (agresivo y diurno).
*   **Ciclo:** Necesitan agua estancada para sus larvas.

### Síntomas
*   **Picaduras:** Ronchas que pican, a menudo múltiples.
*   **Zumbidos:** El característico sonido agudo al intentar dormir.

### Solución
*   **DIY:** Mosquiteras y repelentes eléctricos.
*   **Profesional:** Nebulización de jardines y tratamiento larvicida en imbornales.

## Calendario Estacional de Plagas en Segovia

| Estación | Plagas Comunes | Acciones Recomendadas |
| :--- | :--- | :--- |
| **Primavera** | Cucarachas, hormigas, procesionaria | Inicio de tratamientos preventivos en perímetro. |
| **Verano** | Mosquitos, avispas, hormigas | Vigilancia máxima. Instalación de trampas de avispas. |
| **Otoño** | Roedores, chinches, cucarachas | Sellado de grietas ante la bajada de temperaturas. |
| **Invierno** | Roedores, xilófagos (termitas) | Mantenimiento interior y revisión de aislamientos. |

## Conclusión

Identificar la plaga correctamente es solo el primer paso. Si detectas señales de actividad, actuar rápido es crucial para evitar que una pequeña molestia se convierta en una infestación costosa.

¿No estás seguro de qué plaga tienes o cuánto costaría eliminarla?
Usa nuestra **calculadora de presupuesto online** para obtener una estimación inmediata sin compromiso.`,
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
        respuesta: "El costo varía según la gravedad de la infestación y el tipo de plaga. Ofrecemos inspección y presupuesto gratuito sin compromiso para darte un precio exacto."
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
    image: "/images/plagas-comunes-en-segovia.png"
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
    image: "/images/como-prevenir-plagas-en-casa-segovia.jpeg",
    faqs: [
      {
        pregunta: "¿Cuál es el mejor método de prevención?",
        respuesta: "Eliminar agua estancada (70-80% efectividad), sellar grietas (60-70%), mantener limpieza (50-60%), ventilación (40-50%)."
      },
      {
        pregunta: "¿Cuesta mucho prevenir plagas?",
        respuesta: "Prevención básica: Gratis (solo tiempo). Tratamiento preventivo: Mucho más económico que eliminar infestación."
      },
      {
        pregunta: "¿Cuándo debo hacer prevención?",
        respuesta: "Prevención continua todo el año. Intensifica en primavera (abril-mayo) y verano (junio-agosto). Especial atención en otoño (entrada a casa)."
      },
      {
        pregunta: "¿Funcionan los métodos caseros?",
        respuesta: "Sí, para prevención. Efectividad: 40-70%. Para infestación activa, necesitas profesionales (90-95% efectividad)."
      }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Cómo Prevenir Plagas en Casa | 10 Consejos Efectivos",
      "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": [
          {"@type": "Question", "name": "¿Cuál es el mejor método de prevención?", "acceptedAnswer": {"@type": "Answer", "text": "Eliminar agua estancada (70-80% efectividad), sellar grietas (60-70%), mantener limpieza (50-60%), ventilación (40-50%)."}},
          {"@type": "Question", "name": "¿Cuesta mucho prevenir plagas?", "acceptedAnswer": {"@type": "Answer", "text": "Prevención básica: Gratis (solo tiempo). Tratamiento preventivo: Mucho más económico que eliminar infestación."}},
          {"@type": "Question", "name": "¿Cuándo debo hacer prevención?", "acceptedAnswer": {"@type": "Answer", "text": "Prevención continua todo el año. Intensifica en primavera (abril-mayo) y verano (junio-agosto). Especial atención en otoño (entrada a casa)."}},
          {"@type": "Question", "name": "¿Funcionan los métodos caseros?", "acceptedAnswer": {"@type": "Answer", "text": "Sí, para prevención. Efectividad: 40-70%. Para infestación activa, necesitas profesionales (90-95% efectividad)."}}
        ]
      }
    }
  },
  {
    id: "3",
    slug: "plagas-invierno-segovia",
    title: "Plagas de Invierno en Segovia | Prevención y Control",
    metaDescription: "Plagas más comunes en invierno en Segovia. Prevención, síntomas y tratamiento. Guía estacional completa.",
    excerpt: "El invierno en Segovia trae consigo un aumento en las infestaciones de plagas.",
    content: `En invierno, las plagas no desaparecen; simplemente cambian de estrategia. Buscan calor en interiores, convirtiendo tu hogar o negocio en su refugio ideal. Este artículo cubre las plagas más comunes en invierno en Segovia y cómo prevenirlas eficazmente.

| Mes | Plagas Activas | Tarea Principal |
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
    image: "/images/plagas-de-invierno-en-segovia.png"
  },
  {
    id: "4",
    slug: "termitas-segovia",
    title: "Termitas en Segovia | Detección, Tratamiento y Prevención",
    metaDescription: "Detecta termitas en Segovia. Síntomas, daños, tratamiento profesional. Garantía 1 año. Presupuesto gratis.",
    excerpt: "Las termitas son plagas silenciosas que pueden causar daños estructurales graves.",
    content: `Las termitas son conocidas como las "plagas silenciosas" porque pueden devorar la estructura de tu hogar durante años sin que te des cuenta. En Segovia, donde muchas viviendas y edificios históricos dependen de vigas de madera, el riesgo es aún mayor. Una sola colonia de termitas puede causar daños significativos en un periodo de 5 años si no se detecta a tiempo.

La detección temprana no es solo una recomendación; es la única forma de evitar reformas integrales costosas y peligros de derrumbe.

## Ciclo de Vida de las Termitas

Entender a tu enemigo es el primer paso para vencerlo. Las termitas tienen un ciclo de vida complejo y altamente organizado.

| Fase | Duración | Detalles |
| :--- | :--- | :--- |
| **Huevo** | 2-4 semanas | Protegidos dentro de la cámara real, cuidados por obreras. |
| **Ninfa** | 6-12 meses | Pasan por múltiples mudas hasta definir su casta (obrera, soldado o reproductora). |
| **Adulto** | 15-30 años | Las reinas son extremadamente longevas, viviendo hasta 30 años en condiciones ideales. |
| **Reproducción** | Continua | Una reina madura es una máquina biológica capaz de poner más de **1.000 huevos al día**. |

## Síntomas de Termitas: ¿Cómo saber si tengo termitas?

Las señales suelen ser sutiles al principio. Si detectas cualquiera de estos síntomas, es probable que la infestación ya esté avanzada.

### 1. Daños en Madera (La Señal Invisible)
A simple vista, la madera puede parecer perfecta, pero el interior puede estar hueco.
*   **Galerías internas:** Túneles que siguen la veta de la madera.
*   **Madera hueca:** Al golpear marcos de puertas o vigas, el sonido es seco y hueco (como papel).
*   **Superficie intacta:** A menudo dejan una fina capa exterior de pintura o barniz intacta, ocultando el desastre interior.

### 2. Alas Desprendidas
La prueba definitiva de que hay un nido cerca reproduciéndose.
*   **Enjambrazón:** En primavera, las termitas aladas salen para fundar nuevas colonias.
*   **Alas en el suelo:** Pierden las alas poco después de aterrizar. Si ves montones de alas translúcidas cerca de ventanas, ¡alerta roja!

### 3. Olor a Humedad
No siempre es culpa de una tubería rota.
*   **Olor "musty":** Un olor característico a cerrado o moho.
*   **Indicador de actividad:** Las termitas necesitan humedad alta para sobrevivir y la generan activamente en sus nidos.

### 4. Tuberías de Barro
Autopistas seguras para evitar la luz y el aire seco.
*   **Estructuras marrones:** Pequeños túneles del grosor de un lápiz que suben por cimientos de hormigón o paredes.
*   **Conexión:** Unen el nido subterráneo con la fuente de comida (tu casa).

## Tratamiento Profesional: La Única Solución Real

Los remedios caseros (vinagre, gasoil) son inútiles contra una colonia subterránea de millones de insectos. Necesitas tecnología profesional.

*   **Precio:** El tratamiento varía dependiendo del tamaño de la propiedad y la gravedad de la infestación.
*   **Efectividad:** Los sistemas de cebos modernos tienen una tasa de eliminación del **95-99%**.
*   **Garantía:** En Sierra Guard ofrecemos garantías de **1 a 5 años** post-tratamiento.
*   **Tiempo:** La eliminación total de la colonia lleva de **1 a 2 semanas** (tratamientos químicos) o varios meses (cebos biológicos), pero el cese de daños es inmediato.
*   **Proceso:**
    1.  **Inspección:** Uso de detectores acústicos y térmicos.
    2.  **Tratamiento:** Instalación de estaciones de cebo o inyección de barrera.
    3.  **Seguimiento:** Visitas periódicas para confirmar la eliminación de la reina.

## Conclusión

Las termitas son una amenaza seria para el patrimonio y la seguridad de tu hogar. No ignores las señales. Si sospechas que puedes tener "inquilinos" no deseados en tus vigas, **solicita una inspección profesional gratuita** hoy mismo. Más vale prevenir que reconstruir.

[[CTA: /tratamientos-de-madera | Ver servicio Tratamiento termitas]]`,
    faqs: [
      {
        pregunta: "¿Cuánto daño pueden causar las termitas?",
        respuesta: "Mucho. Una colonia madura puede causar daños estructurales graves en 5 años, llegando a comprometer la estabilidad de la vivienda."
      },
      {
        pregunta: "¿Cómo puedo detectar si tengo termitas?",
        respuesta: "Busca madera que suena hueca, alas desprendidas en ventanas, olor a humedad sin causa aparente, y túneles de barro en los cimientos."
      },
      {
        pregunta: "¿Cuál es el precio del tratamiento?",
        respuesta: "Varía según el caso. Incluye inspección avanzada, tratamiento completo y garantía de eliminación de 1 a 5 años."
      }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Termitas en Segovia | Detección, Tratamiento y Prevención",
      "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": [
          {"@type": "Question", "name": "¿Cuánto daño pueden causar las termitas?", "acceptedAnswer": {"@type": "Answer", "text": "Mucho. Una colonia madura puede causar daños estructurales graves en 5 años, llegando a comprometer la estabilidad de la vivienda."}},
          {"@type": "Question", "name": "¿Cómo puedo detectar si tengo termitas?", "acceptedAnswer": {"@type": "Answer", "text": "Busca madera que suena hueca, alas desprendidas en ventanas, olor a humedad sin causa aparente, y túneles de barro en los cimientos."}},
          {"@type": "Question", "name": "¿Cuál es el precio del tratamiento?", "acceptedAnswer": {"@type": "Answer", "text": "Varía según el caso. Incluye inspección avanzada, tratamiento completo y garantía de eliminación de 1 a 5 años."}}
        ]
      }
    },
    author: "Sierra Guard",
    date: "2026-02-03",
    readTime: 5,
    category: "Plagas",
    tags: ["termitas", "madera", "daños", "tratamiento"],
    image: "/images/termitas en segovia-deteccion-y-tratamiento.png"
  },
  {
    id: "5",
    slug: "avispas-velutinas-segovia",
    title: "Avispas Velutinas en Segovia | Identificación y Eliminación Segura",
    metaDescription: "Guía completa de avispas velutinas en Segovia. Identificación, peligros y eliminación segura. Método humanitario.",
    excerpt: "La avispa velutina, originaria de Asia, se ha convertido en una plaga creciente en España.",
    content: `Las avispas velutinas son invasoras asiáticas que amenazan tanto a las poblaciones de abejas locales como a la seguridad de las personas. En Segovia, su presencia ha aumentado notablemente, convirtiéndose en una preocupación prioritaria cada verano y otoño. La identificación correcta es la clave para una eliminación segura y eficaz, evitando confusiones con especies autóctonas protegidas.

Esta guía te ayudará a distinguir al enemigo y actuar con rapidez.

## Características de Avispas Velutinas: Conoce al Invasor

A diferencia de la avispa común (*Vespula vulgaris*) o el avispón europeo (*Vespa crabro*), la velutina tiene rasgos muy específicos.

| Aspecto | Detalles | Comparativa (Avispa Común) |
| :--- | :--- | :--- |
| **Tamaño** | 3-5 cm (Reinas hasta 5cm) | Mucho más pequeña (1.5 cm) |
| **Color** | Cuerpo oscuro/negro, cabeza amarilla, **bandas amarillas** en el abdomen | Amarilla y negra a rayas |
| **Patas** | Extremidades amarillas (muy característico) | Amarillas |
| **Ciclo de vida** | 1 año (la reina hiberna y funda nueva colonia) | Similar |
| **Nido** | Papel gris, forma de balón, 2-3 metros altura (o más) | Pequeños, en aleros o suelo |
| **Dieta** | **Abejas (60-80%)**, insectos, frutas | Azúcar, carne, insectos |
| **Peligro** | Picaduras múltiples, veneno potente, agresividad | Molesta, pero menos agresiva |

## Síntomas de Infestación: ¿Están cerca?

Si detectas alguno de estos signos, es muy probable que tengas un nido activo cerca de tu propiedad.

*   **Nido visible:** Una estructura de "papel maché" grisáceo con forma de balón. Pueden estar en árboles altos, aleros de tejados o incluso muros.
*   **Avispas cazando abejas:** Si ves avispas grandes "patrullando" frente a colmenas o flores, esperando para atacar.
*   **Zumbido intenso:** El sonido de un nido activo es mucho más fuerte y grave que el de las avispas comunes.
*   **Actividad inusual:** Múltiples avispas grandes volando en una zona específica de tu jardín o fachada.

## ¿Qué hacer si te pican? (Primeros Auxilios)

El veneno de la velutina es potente y puede causar reacciones graves.

1.  **Aléjate:** Si te pican cerca del nido, corre. Liberan feromonas que incitan al ataque masivo.
2.  **Lava la zona:** Agua y jabón para evitar infecciones.
3.  **Hielo:** Aplica frío para reducir la inflamación.
4.  **Atención médica:** Si sientes mareos, dificultad para respirar o hinchazón excesiva, ve a urgencias inmediatamente (riesgo de shock anafiláctico).

## Eliminación Profesional: Seguridad ante todo

**Nunca intentes eliminar un nido de velutina tú mismo.** Son extremadamente defensivas y pueden atacar en enjambre.

*   **Precio:** El servicio de retirada depende de la accesibilidad (altura, ubicación) y el tamaño del nido.
*   **Método Humanitario:** En Sierra Guard priorizamos métodos que no dañen al resto de la fauna. Usamos inyecciones localizadas dentro del nido para neutralizar la colonia sin dispersar biocidas en el medio ambiente.
*   **Tiempo:** La intervención suele durar **1-2 horas**.
*   **Garantía:** Ofrecemos una garantía de **30 días**. Si el nido muestra actividad de nuevo (algo muy raro), volvemos gratis.
*   **Urgencia:** Atendemos estos casos con prioridad absoluta debido al riesgo para la salud pública.

[[CTA: /desinsectacion | Ver Servicio de Desinsectación]]

## Conclusión

Las avispas velutinas son peligrosas y destructivas para nuestro ecosistema. No corras riesgos innecesarios. Si ves un nido o sospechas de su presencia, **llama a profesionales inmediatamente**. Protege a tu familia y a las abejas de Segovia.

[[CTA: tel:+34921234567 | Solicitar Retirada Urgente de Nido]]`,
    faqs: [
      {
        pregunta: "¿Son peligrosas las avispas velutinas?",
        respuesta: "Sí, muy peligrosas. Su picadura es potente y pueden picar múltiples veces. En personas alérgicas, el riesgo de reacción grave o muerte es real."
      },
      {
        pregunta: "¿Cómo se eliminan los nidos?",
        respuesta: "Solo profesionales deben hacerlo. Usamos pértigas para inyectar un producto específico dentro del nido o lo retiramos mecánicamente con trajes de protección especial. Nunca intentes métodos caseros (fuego, agua, disparos); es muy peligroso."
      },
      {
        pregunta: "¿Cuál es el precio de la retirada?",
        respuesta: "Varía según el nido. Incluye desplazamiento, retirada segura, gestión de residuos y garantía. Damos presupuesto gratis sin compromiso."
      },
      {
        pregunta: "¿Atacan a las personas?",
        respuesta: "Sí, si se sienten amenazadas o si te acercas a menos de 5 metros del nido. Son mucho más agresivas que las avispas autóctonas."
      }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Avispas Velutinas en Segovia | Identificación y Eliminación Segura",
      "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": [
          {"@type": "Question", "name": "¿Son peligrosas las avispas velutinas?", "acceptedAnswer": {"@type": "Answer", "text": "Sí, muy peligrosas. Su picadura es potente y pueden picar múltiples veces. En personas alérgicas, el riesgo de reacción grave o muerte es real."}},
          {"@type": "Question", "name": "¿Cómo se eliminan los nidos?", "acceptedAnswer": {"@type": "Answer", "text": "Solo profesionales deben hacerlo. Usamos pértigas para inyectar un producto específico dentro del nido o lo retiramos mecánicamente con trajes de protección especial."}},
          {"@type": "Question", "name": "¿Cuál es el precio de la retirada?", "acceptedAnswer": {"@type": "Answer", "text": "Varía según el nido. Incluye desplazamiento, retirada segura, gestión de residuos y garantía."}},
          {"@type": "Question", "name": "¿Atacan a las personas?", "acceptedAnswer": {"@type": "Answer", "text": "Sí, si se sienten amenazadas o si te acercas a menos de 5 metros del nido. Son mucho más agresivas que las avispas autóctonas."}}
        ]
      }
    },
    author: "Sierra Guard",
    date: "2026-02-02",
    readTime: 4,
    category: "Plagas",
    tags: ["avispas", "velutina", "seguridad", "urgente"],
    image: "/images/avispas-velutinas-en-segovia.png"
  },
  {
    id: "6",
    slug: "desinsectacion-profesional-vs-diy",
    title: "Desinsectación Profesional vs DIY | Comparativa Completa",
    metaDescription: "Comparativa: desinsectación profesional vs DIY. Costos, efectividad, seguridad. ¿Cuál elegir? Análisis completo.",
    excerpt: "Muchas personas intenta resolver problemas de plagas por su cuenta usando productos disponibles en tiendas.",
    content: `¿Alguna vez has gastado dinero en sprays del supermercado solo para ver cómo las cucarachas vuelven a la semana siguiente? No estás solo. Es la historia más común que escuchamos en Sierra Guard.

Existe la creencia de que "hacerlo uno mismo" (DIY) es siempre más barato. Pero cuando hablamos de plagas, **lo barato sale caro**. Este artículo no es solo una comparativa; es una explicación honesta de por qué los remedios caseros suelen fallar y cuándo es imprescindible llamar a un experto.

## El "Efecto Iceberg": Por qué fallan los Sprays

El problema principal de los productos domésticos es que solo atacan lo que ves.
*   **La punta del iceberg:** Cuando ves una cucaracha en la cocina, hay decenas o cientos escondidas en grietas, motores de electrodomésticos y falsos techos.
*   **El error del spray:** Al rociar insecticida, matas a las que tocas. Pero el resto de la colonia detecta el peligro y **se dispersa**, haciendo que la plaga se extienda a otras habitaciones.
*   **Resistencia:** Muchas plagas han desarrollado resistencia a los químicos de venta libre (piretroides básicos). Literalmente, se ríen de tu spray.

## Comparativa Real: Datos que Importan

Más allá del precio inicial, analicemos el valor real.

| Aspecto | Método Casero (DIY) | Tratamiento Profesional (Sierra Guard) |
| :--- | :--- | :--- |
| **Potencia** | Baja (diluida por ley para uso público) | Alta (Biocidas de uso exclusivo profesional) |
| **Estrategia** | "Matar lo que veo" | "Eliminar el nido y la causa" |
| **Duración** | Efecto de minutos u horas | Efecto residual de semanas o meses |
| **Seguridad** | Alto riesgo por mal uso (niños/mascotas) | Aplicación controlada y segura |
| **Garantía** | Ninguna (si falla, pagas de nuevo) | Total (si vuelven, volvemos gratis) |

## La Verdad sobre la Seguridad

Irónicamente, **los tratamientos caseros suelen ser más peligrosos** para tu salud que los profesionales.
¿Por qué? Porque el usuario promedio tiende a "echar mucho para que muera bien". Esto llena tu cocina de tóxicos innecesarios.
Un profesional usa **geles cebo** y productos específicos en puntos estratégicos, lejos del alcance de niños y mascotas, usando la dosis exacta necesaria. Mínimo riesgo, máxima eficacia.

## Casos Reales de Clientes en Segovia

### El caso de la "Invasión Silenciosa" (Restaurante local)

Un dueño de bar intentó controlar una [plaga de cucarachas](/blog/plagas-comunes-segovia) con bombas de humo compradas online.
*   **Resultado:** Las cucarachas no murieron, sino que huyeron hacia el salón comedor y la barra.
*   **Consecuencia:** Clientes vieron insectos, mala reseña en Google, riesgo de cierre sanitario.
*   **Solución Sierra Guard:** En 24 horas eliminamos el foco con gel profesional sin cerrar el local.

### El caso de las Hormigas Recurrentes (Chalet en La Lastrilla)

Una familia gastó una cantidad considerable en un verano comprando trampas y sprays. Las [hormigas](/blog/hormigas-segovia) siempre volvían por otro lado.
*   **Diagnóstico:** El hormiguero estaba en los cimientos, no en el jardín.
*   **Solución:** Un solo tratamiento perimetral profesional acabó con el problema para todo el año.

## ¿Cuándo puedes intentarlo tú mismo?

No siempre necesitas un profesional. El DIY es válido si:

1.  Es un insecto aislado que entró por la ventana.
2.  Son moscas o mosquitos puntuales.
3.  Tienes un presupuesto extremadamente bajo y estás dispuesto a luchar durante semanas (con riesgo de fallar).

## ¿Cuándo DEBES llamar a Sierra Guard?

1.  **Cucarachas o Chinches:** Jamás intentes esto solo. Se reproducen más rápido de lo que puedes matar.
2.  **Ratas o Ratones:** Riesgo de enfermedades grave. Si tienes un negocio, el [control de plagas profesional](/blog/control-plagas-negocios-segovia) es obligatorio.
3.  **Hay niños, ancianos o mascotas:** Necesitas seguridad certificada.
4.  **Negocios:** Por ley y por reputación, no te la juegues.

## Conclusión

La tranquilidad no tiene precio. Si bien es vital saber [cómo prevenir plagas en casa](/blog/prevenir-plagas-hogar), cuando la infestación ya existe, puedes seguir luchando cada semana contra los insectos o solucionarlo de raíz hoy mismo.

[[CTA: tel:+34921234567 | Solicitar Diagnóstico Gratuito || /desinsectacion | Ver Servicio de Desinsectación]]`,
    faqs: [
      {
        pregunta: "¿Funcionan los métodos DIY?",
        respuesta: "Sí, para infestación leve (30-50% efectividad). Para moderada/severa, profesionales son necesarios."
      },
      {
        pregunta: "¿Cuál es el costo-beneficio?",
        respuesta: "DIY (riesgo de fallo). Profesional (garantizado). Mejor invertir en profesional."
      },
      {
        pregunta: "¿Es seguro DIY para niños y mascotas?",
        respuesta: "Riesgo moderado-alto. Profesionales usan productos certificados y seguros."
      }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Desinsectación Profesional vs DIY | Comparativa Completa",
      "description": "Comparativa: desinsectación profesional vs DIY. Costos, efectividad, seguridad. ¿Cuál elegir? Análisis completo.",
      "image": "/images/desinsectacion-profesiona-o-DIY.jpeg",
      "datePublished": "2026-02-01",
      "author": { "@type": "Organization", "name": "SierraGuard" },
      "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": [
          {"@type": "Question", "name": "¿Funcionan los métodos DIY?", "acceptedAnswer": {"@type": "Answer", "text": "Sí, para infestación leve (30-50% efectividad). Para moderada/severa, profesionales son necesarios."}},
          {"@type": "Question", "name": "¿Cuál es el costo-beneficio?", "acceptedAnswer": {"@type": "Answer", "text": "DIY (riesgo de fallo). Profesional (garantizado). Mejor invertir en profesional."}},
          {"@type": "Question", "name": "¿Es seguro DIY para niños y mascotas?", "acceptedAnswer": {"@type": "Answer", "text": "Riesgo moderado-alto. Profesionales usan productos certificados y seguros."}}
        ]
      }
    },
    author: "Sierra Guard",
    date: "2026-02-01",
    readTime: 5,
    category: "Tratamiento",
    tags: ["profesional", "DIY", "comparación", "eficacia"],
    image: "/images/desinsectacion-profesiona-o-DIY.jpeg"
  },
  {
    id: "7",
    slug: "control-plagas-negocios-segovia",
    title: "Control de Plagas en Negocios | Normativa y Seguridad",
    metaDescription: "Control de plagas integral para empresas en Segovia. Cumplimiento APPCC, desratización y desinsectación certificada. Evita multas.",
    excerpt: "Una plaga en tu negocio no es solo una molestia: es un riesgo legal y reputacional. Cumple con Sanidad y protege tu inversión.",
    content: `Para cualquier restaurante, hotel o comercio en Segovia, el control de plagas no es opcional: es un **imperativo legal y sanitario**. El Reglamento 852/2004 no distingue entre una [cucaracha](/blog/plagas-comunes-segovia) o una [rata](/blog/plagas-comunes-segovia): la tolerancia es cero.

En este artículo explicamos la normativa APPCC, por qué los [remedios caseros](/blog/desinsectacion-profesional-vs-diy) están prohibidos y cómo proteger tu licencia de actividad frente a todo tipo de plagas.

## Normativa APPCC: Tu Obligación Legal

El sistema de Análisis de Peligros y Puntos de Control Crítico (APPCC) exige a todo negocio con riesgo sanitario tener un **Plan de Control de Plagas** activo.

**¿Qué te van a pedir en una inspección?**
*   **Contrato de Mantenimiento:** Con una empresa inscrita en el ROESB (como Sierra Guard).
*   **Diagnóstico de Situación:** Informe técnico de los riesgos de tu local.
*   **Certificado de Tratamiento:** Documento oficial tras cada visita.
*   **Planos de Cebos y Monitores:** Ubicación exacta de trampas.

**IMPORTANTE:** El uso de [sprays domésticos](/blog/desinsectacion-profesional-vs-diy) o "bombas de humo" compradas en internet es **ILEGAL** en locales públicos. Solo personal cualificado puede aplicar biocidas profesionales.

## Riesgos Reales: Más allá de las Multas

Una plaga mal gestionada puede destruir tu negocio en días.

| Tipo de Plaga | Riesgo Principal | Consecuencia |
| :--- | :--- | :--- |
| [**Cucarachas**](/blog/plagas-comunes-segovia) | Contaminación de alimentos (Salmonella) | Intoxicación de clientes y demandas |
| [**Roedores**](/blog/plagas-comunes-segovia) | Daños estructurales (cables, tuberías) | Incendios o fugas de agua |
| [**Hormigas**](/blog/hormigas-segovia) | Invasión de zonas estériles/cocina | Mala imagen y pérdida de género |
| [**Moscas/Avispas**](/blog/mosquitos-segovia) | Molestia visual y picaduras | Reseñas negativas en Google |

### El Coste de la Inacción

*   **Multas:** Desde €3.001 por infracciones graves.
*   **Cierre Cautelar:** Sanidad puede precintar tu local hasta que se certifique la eliminación total.
*   **Reputación:** Una foto de una cucaracha en TripAdvisor es imborrable.

## Solución Integral Sierra Guard

Ofrecemos un servicio de "Carpeta Sanitaria" que cubre todas las necesidades legales y operativas.

*   **Auditoría Inicial:** Detectamos puntos de entrada (grietas, desagües).
*   **Monitoreo 24/7:** Trampas inteligentes para roedores e insectos rastreros.
*   **Documentación al Día:** Te despreocupas de los papeles ante una inspección.
*   **Urgencias 24h:** Si tienes una incidencia, estamos ahí.

## Casos Reales en Segovia

### El Bar de Tapas (Cucarachas)
**Situación:** Quejas de clientes por ver "bichos" en la barra.

*   **Problema:** Infestación de Cucaracha Alemana en motores de neveras. Uso de insecticida doméstico que empeoró la plaga (dispersión).
*   **Solución:** Cebos en gel profesionales sin plazo de seguridad (el bar no tuvo que cerrar).
*   **Resultado:** Eliminación total en 2 semanas y certificado de sanidad en regla.

### El Almacén Textil (Roedores)
**Situación:** Ropa dañada y olor fuerte en el almacén.

*   **Problema:** Ratones entrando por falsos techos desde el edificio colindante.
*   **Solución:** Sellado de vías de acceso y trampeo mecánico en altura.
*   **Resultado:** Cero pérdidas de stock y protección a largo plazo.



## Protege tu Negocio Hoy

No esperes a la inspección o a la mala reseña. La prevención es tu mejor inversión.

[[CTA: tel:+34921234567 | Solicitar Auditoría Gratuita || mailto:contacto@controldeplagassegovia.com | Contactar por Email]]`,
    author: "Sierra Guard",
    date: "2026-02-08",
    readTime: 6,
    category: "Plagas",
    tags: ["control de plagas", "empresas", "normativa", "APPCC", "segovia", "hostelería"],
    image: "/images/control-plagas-en-negocios-segovia.jpeg",
    faqs: [
      {
        pregunta: "¿Es obligatorio el control de plagas en todos los negocios?",
        respuesta: "Sí, especialmente en hostelería y alimentación (Reglamento 852/2004). Otros negocios también deben garantizar condiciones higiénico-sanitarias por Ley de Prevención de Riesgos Laborales."
      },
      {
        pregunta: "¿Qué pasa si uso insecticidas domésticos en mi local?",
        respuesta: "Es ilegal y sancionable. Además, suelen ser ineficaces contra plagas establecidas y pueden contaminar alimentos."
      },
      {
        pregunta: "¿Cuánto cuesta el mantenimiento mensual?",
        respuesta: "Depende del tamaño y riesgo, pero nuestros planes comienzan desde tarifas muy accesibles, mucho menores que el coste de una sanción."
      }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Control de Plagas en Negocios | Normativa y Seguridad",
      "description": "Control de plagas integral para empresas en Segovia. Cumplimiento APPCC, desratización y desinsectación certificada. Evita multas.",
      "image": "/images/control-plagas-segovia-imagen.png",
      "datePublished": "2026-02-08",
      "author": { "@type": "Organization", "name": "SierraGuard" },
      "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": [
          {"@type": "Question", "name": "¿Es obligatorio el control de plagas en todos los negocios?", "acceptedAnswer": {"@type": "Answer", "text": "Sí, especialmente en hostelería y alimentación (Reglamento 852/2004). Otros negocios también deben garantizar condiciones higiénico-sanitarias por Ley de Prevención de Riesgos Laborales."}},
          {"@type": "Question", "name": "¿Qué pasa si uso insecticidas domésticos en mi local?", "acceptedAnswer": {"@type": "Answer", "text": "Es ilegal y sancionable. Además, suelen ser ineficaces contra plagas establecidas y pueden contaminar alimentos."}},
          {"@type": "Question", "name": "¿Cuánto cuesta el mantenimiento mensual?", "acceptedAnswer": {"@type": "Answer", "text": "Depende del tamaño y riesgo, pero nuestros planes comienzan desde tarifas muy accesibles, mucho menores que el coste de una sanción."}}
        ]
      }
    }
  },
  {
    id: "10",
    slug: "hormigas-segovia",
    title: "Hormigas en Segovia | Tipos Comunes y Control",
    metaDescription: "Guía completa sobre hormigas en Segovia. Identificación de especies, riesgos y métodos de control profesional. Elimina el hormiguero de raíz.",
    excerpt: "Ver una fila de hormigas en la cocina es solo la punta del iceberg. Descubre cómo combatir las especies más comunes en Segovia y por qué los sprays suelen fallar.",
    content: `Con la llegada de la primavera y el verano a Segovia, las hormigas despiertan de su letargo invernal. Lo que empieza con una o dos "exploradoras" en la encimera de la cocina puede convertirse en una invasión masiva en cuestión de días.

El **control de hormigas** es uno de los desafíos más subestimados por los propietarios. ¿La razón? Su compleja estructura social. Matar a las que ves no sirve de nada si la reina sigue poniendo huevos en el nido.

En este artículo, analizaremos las especies que habitan en nuestra provincia, los riesgos que suponen y, lo más importante, cómo eliminarlas de forma definitiva.

## Tipos de Hormigas en Segovia

No todas las hormigas son iguales, y cada una requiere una estrategia distinta. En Segovia, nos encontramos principalmente con tres tipos:

[[GRID_CARDS]]
Hormiga Negra de Jardín (*Lasius niger*)|Es la más habitual en hogares. Buscan sustancias dulces.|Bug|**Apariencia:** Negra brillante, 3-5mm|**Ubicación:** Jardines y patios
Hormiga Carpintera (*Camponotus*)|Preocupa por daños estructurales en madera.|AlertTriangle|**Apariencia:** Grande (1.5cm)|**Peligro:** Excava galerías en madera
Hormiga de Pavimento (*Tetramorium*)|Comunes en chalets y urbanizaciones.|MapPin|**Apariencia:** Marrón oscuro|**Ubicación:** Bajo losas y cimientos
[[/GRID_CARDS]]

## Identificación: ¿Hormiga o Termita?

En primavera, es común ver "hormigas con alas". Esto es el vuelo nupcial, donde reinas y machos salen a fundar nuevas colonias. Es vital no confundirlas con las termitas aladas, ya que el tratamiento es totalmente diferente.

| Característica | Hormiga Alada | Termita Alada |
| :--- | :--- | :--- |
| **Cintura** | Estrecha ("cintura de avispa") | Ancha y recta (sin cintura) |
| **Antenas** | Acodadas (en forma de L) | Rectas |
| **Alas** | Las delanteras son más largas que las traseras | Las 4 alas son del mismo tamaño |
| **Cuerpo** | Duro y oscuro | Blando y claro |

Si tienes dudas, envíanos una foto. Un error en el diagnóstico puede salir muy caro.

## Daños Causados por las Hormigas

Aunque a menudo se ven como una simple molestia, las hormigas conllevan riesgos reales:

*   **Contaminación de Alimentos:** Caminan sobre basura, heces de animales y desagües antes de subir a tu encimera. Pueden portar bacterias como *E. coli* o *Salmonella*.
*   **Daños Estructurales:** Como mencionamos, la hormiga carpintera puede debilitar vigas y marcos de puertas.
*   **Daños en Jardines:** Protegen a los pulgones de sus depredadores naturales para alimentarse de su melaza, dañando tus plantas y cultivos.
*   **Problemas Eléctricos:** Algunas especies diminutas tienden a meterse en enchufes e interruptores, provocando cortocircuitos.

## Métodos de Control: ¿Por qué fallan los remedios caseros?

Es la historia de siempre: compras un spray en el supermercado, rocías la hilera de hormigas, mueren al instante... y dos días después, vuelven a aparecer por otro lado.

**¿Por qué sucede esto?**

1.  **Solo matas obreras:** La reina, segura en el nido, puede poner cientos de huevos al día. Repone las bajas rápidamente.
2.  **Efecto Repelente:** Los sprays las asustan. Detectan el químico y simplemente cambian de ruta o, peor aún, **dividen la colonia** (gemación), creando múltiples hormigueros satélite.
3.  **Resistencia:** Las hormigas aprenden a evitar zonas tratadas con productos básicos.

### La Solución Profesional: Cebos Biocidas

En Sierra Guard, utilizamos una estrategia basada en la biología del insecto: **Cebos en Gel de Transferencia**.

*   **No matan al contacto:** Son un alimento irresistible con un insecticida de acción lenta.
*   **Efecto "Caballo de Troya":** Las obreras comen el cebo, lo llevan al hormiguero y alimentan a la reina y a las larvas (trofalaxia).
*   **Colapso Total:** En unos días, el veneno se activa y elimina la colonia entera desde dentro. Sin olores, sin desalojar la casa y con seguridad total.

## Prevención: 5 Pasos Clave

Si quieres evitar que entren, sigue estos consejos de [prevención en el hogar](/blog/prevenir-plagas-hogar):

1.  **Sellado Hermético:** Tapa grietas en fachadas y marcos de ventanas con silicona. Las hormigas entran por agujeros milimétricos.
2.  **Limpieza de "Rastros":** Si ves una hilera, límpiala con agua y vinagre para borrar el rastro de feromonas que guía a las demás.
3.  **Alimentos Cerrados:** Guarda azúcar, miel y galletas en botes herméticos.
4.  **Gestión de Residuos:** Cubos de basura siempre cerrados y limpios por fuera.
5.  **Perímetro:** Poda ramas que toquen la fachada; las usan como puentes para entrar por las ventanas de pisos superiores.

## ¿Hormigas en tu Negocio?

Si tienes un bar, restaurante o industria alimentaria, la tolerancia es cero. Una sola hormiga en un plato puede arruinar tu reputación. Consulta nuestro servicio de desinsectación para cumplir con la normativa de Sanidad.

## Conclusión

No dejes que las hormigas tomen el control de tu cocina. Si los remedios caseros no han funcionado, es hora de cambiar de estrategia.

[[CTA: tel:+34921234567 | Pedir Presupuesto Gratuito || /desinsectacion | Ver Servicio de Desinsectación]]`,
    faqs: [
      {
        pregunta: "¿Cuánto tarda en desaparecer una plaga de hormigas?",
        respuesta: "Con tratamiento profesional de cebos, la actividad suele cesar en 3-7 días, tiempo necesario para que el producto llegue a la reina."
      },
      {
        pregunta: "¿Son peligrosos los geles para mis mascotas?",
        respuesta: "No. Se aplican en gotas minúsculas en lugares inaccesibles (grietas, detrás de muebles/enchufes) y tienen amargantes para evitar la ingesta accidental."
      },
      {
        pregunta: "¿Por qué salen hormigas con alas?",
        respuesta: "Es el vuelo nupcial. Ocurre en primavera/verano (especialmente tras lluvias) cuando las nuevas reinas salen a fundar colonias. Indica que hay un nido maduro cerca."
      },
      {
        pregunta: "¿Cuánto cuesta un tratamiento de hormigas en Segovia?",
        respuesta: "El precio varía dependiendo de la gravedad y garantía contratada. Solicita presupuesto sin compromiso."
      }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Hormigas en Segovia | Tipos Comunes y Control",
      "description": "Guía completa sobre hormigas en Segovia. Identificación de especies, riesgos y métodos de control profesional.",
      "image": "/images/control-plagas-en-segovia.jpeg",
      "datePublished": "2026-02-09",
      "author": { "@type": "Organization", "name": "SierraGuard" },
      "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": [
          {"@type": "Question", "name": "¿Cuánto tarda en desaparecer una plaga de hormigas?", "acceptedAnswer": {"@type": "Answer", "text": "Con tratamiento profesional de cebos, la actividad suele cesar en 3-7 días, tiempo necesario para que el producto llegue a la reina."}},
          {"@type": "Question", "name": "¿Son peligrosos los geles para mis mascotas?", "acceptedAnswer": {"@type": "Answer", "text": "No. Se aplican en gotas minúsculas en lugares inaccesibles (grietas, detrás de muebles/enchufes) y tienen amargantes para evitar la ingesta accidental."}},
          {"@type": "Question", "name": "¿Por qué salen hormigas con alas?", "acceptedAnswer": {"@type": "Answer", "text": "Es el vuelo nupcial. Ocurre en primavera/verano (especialmente tras lluvias) cuando las nuevas reinas salen a fundar colonias. Indica que hay un nido maduro cerca."}},
          {"@type": "Question", "name": "¿Cuánto cuesta un tratamiento de hormigas en Segovia?", "acceptedAnswer": {"@type": "Answer", "text": "El precio varía dependiendo de la gravedad y garantía contratada. Solicita presupuesto sin compromiso."}}
        ]
      }
    },
    author: "Sierra Guard",
    date: "2026-02-09",
    readTime: 8,
    category: "Plagas",
    tags: ["hormigas", "control de plagas", "segovia", "jardín", "cocina"],
    image: "/images/control-de-hormigas-en-segovia.png"
  },
  {
    id: "11",
    slug: "eliminar-cucarachas-segovia",
    title: "Eliminar Cucarachas en Segovia | Guía Definitiva y Solución Profesional",
    metaDescription: "Cómo eliminar cucarachas en Segovia de forma definitiva. Tratamientos profesionales, precios y consejos de prevención. ¡Acaba con la plaga hoy!",
    excerpt: "¿Cucarachas en casa? No estás solo. Descubre por qué aparecen en Segovia, por qué los insecticidas comunes fallan y cómo nuestro tratamiento profesional las elimina para siempre.",
    content: `Encontrar una cucaracha en la cocina o el baño es una de las experiencias más desagradables para cualquier propietario en Segovia. Y lo peor es que, por cada una que ves, puede haber docenas escondidas.

Las cucarachas no son solo un problema estético; son un grave riesgo para la salud. En este artículo, te explicamos cómo identificar la plaga, por qué es tan difícil de erradicar y cuál es la única solución que garantiza resultados a largo plazo.

## Tipos de Cucarachas en Segovia

En nuestra provincia, nos enfrentamos principalmente a dos especies invasoras:

### 1. Cucaracha Alemana (*Blattella germanica*)
Es la plaga reina en interiores, especialmente en cocinas y bares.

*   **Apariencia:** Pequeña (1-1.5 cm), color marrón claro con dos franjas oscuras en la cabeza.
*   **Ubicación:** Lugares cálidos y húmedos: motores de electrodomésticos (nevera, lavavajillas), cafeteras y bajo el fregadero.
*   **Comportamiento:** Reproducción explosiva. Se vuelven inmunes rápidamente a los insecticidas de supermercado.

### 2. Cucaracha Oriental (*Blatta orientalis*)
Más común en zonas bajas, sótanos y alcantarillado.

*   **Apariencia:** Grande (2-3 cm), color negro brillante o marrón muy oscuro.
*   **Ubicación:** Sótanos, garajes, sumideros y zonas de tuberías. Entran desde la calle o desagües.
*   **Peligro:** Transitan por alcantarillas antes de entrar en tu casa, portando patógenos peligrosos.

## Los Riesgos para tu Salud

Convivir con cucarachas no es una opción segura. Estos insectos son vectores mecánicos de enfermedades:

*   **Enfermedades:** Salmonelosis, E. coli, disentería y gastroenteritis.
*   **Alergias:** Sus excrementos y restos de piel mudada son potentes alérgenos que pueden desencadenar asma, especialmente en niños y ancianos.
*   **Contaminación:** Caminan sobre tu comida y cepillos de dientes por la noche.

## ¿Por qué los remedios caseros NO funcionan?

Es frustrante: compras un spray, rocías, ves algunas muertas... y a la semana siguiente hay más. ¿Por qué?

1.  **Resistencia Genética:** Las cucarachas de Segovia han desarrollado resistencia a los piretroides comunes de los aerosoles comerciales.
2.  **Solo matas lo que ves:** El spray no llega al nido, donde están la mayoría de las ninfas y las ootecas (huevos).
3.  **Efecto Repelente:** Muchos insecticidas las "asustan", haciendo que se dispersen a otras habitaciones, empeorando el problema.

## La Solución Profesional: Desinsectación sin Desalojo

En Sierra Guard, utilizamos un enfoque clínico y moderno que no requiere que abandones tu casa ni vacíes los armarios.

### Cebos en Gel de Alta Apetencia
Utilizamos geles profesionales con feromonas que atraen a las cucarachas irresistiblemente.

*   **Efecto Dominó:** La cucaracha come el gel, regresa al nido y muere. Las otras cucarachas se alimentan de ella (canibalismo), ingiriendo también el veneno.
*   **Seguridad Total:** Se aplica en gotas milimétricas en zonas inaccesibles para niños y mascotas. No huele ni mancha.
*   **Ciclo Completo:** Contiene reguladores de crecimiento (IGR) que impiden que las ninfas se reproduzcan.

## Garantía en Segovia

¿Cuánto cuesta tu tranquilidad?

Todos nuestros tratamientos incluyen **garantía por escrito**. Si vuelven, nosotros también (gratis).

## Conclusión

No dejes que las cucarachas ganen terreno. Actuar rápido es clave para evitar una plaga masiva.

[[CTA: tel:+34921234567 | Pedir Presupuesto Sin Compromiso || /desinsectacion | Ver Servicio de Desinsectación]]`,
    faqs: [
      {
        pregunta: "¿Tengo que vaciar la cocina antes del tratamiento?",
        respuesta: "No. Con nuestro sistema de gel no es necesario vaciar armarios ni limpiar después. Es limpio y seguro."
      },
      {
        pregunta: "¿Son peligrosos los productos para mi perro/gato?",
        respuesta: "No. Aplicamos el producto en zonas donde tu mascota no puede llegar (bisagras, motores, grietas). Además, contienen amargantes de seguridad."
      },
      {
        pregunta: "¿Cuánto tarda en desaparecer la plaga?",
        respuesta: "Verás una reducción drástica en 24-48 horas. La eliminación total suele tomar 15-21 días debido al ciclo de eclosión de los huevos."
      },
      {
        pregunta: "¿Por qué veo cucarachas pequeñas después del tratamiento?",
        respuesta: "Es normal. Son huevos que han eclosionado. Al nacer, comerán el gel que hemos dejado y morirán, rompiendo el ciclo definitivamente."
      }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Eliminar Cucarachas en Segovia | Guía Definitiva",
      "description": "Guía completa para eliminar cucarachas en Segovia. Tratamientos profesionales, identificación de especies.",
      "image": "/images/servicio-desinsectacion-en-segovia.png",
      "datePublished": "2026-02-09",
      "author": { "@type": "Organization", "name": "SierraGuard" },
      "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": [
          {"@type": "Question", "name": "¿Tengo que vaciar la cocina?", "acceptedAnswer": {"@type": "Answer", "text": "No. Con nuestro sistema de gel no es necesario vaciar armarios ni limpiar después."}},
          {"@type": "Question", "name": "¿Son peligrosos los productos para mascotas?", "acceptedAnswer": {"@type": "Answer", "text": "No. Aplicamos el producto en zonas inaccesibles y contienen amargantes."}},
          {"@type": "Question", "name": "¿Cuánto tarda en desaparecer?", "acceptedAnswer": {"@type": "Answer", "text": "Reducción en 24-48h. Eliminación total en 15-21 días."}}
        ]
      }
    },
    author: "Sierra Guard",
    date: "2026-02-09",
    readTime: 6,
    category: "Plagas",
    tags: ["cucarachas", "desinsectación", "segovia", "cocina", "salud"],
    image: "/images/servicio-desinsectacion-en-segovia.png"
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
    image: "/images/mantenimiento-preventivo-control-plagas-en-segovia.jpeg"
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
