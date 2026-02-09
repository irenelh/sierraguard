import { Button } from "@/components/ui/button";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import Header from "@/components/Header";

/**
 * Página de Barrios
 * URL: /barrios
 * Listado completo de todos los barrios de Segovia
 */

export default function BarriosPage() {
  const barrios = [
    {
      nombre: "Centro Histórico",
      slug: null,
      descripcion: "Patrimonio de la Humanidad. Hoteles, restaurantes y comercios históricos.",
      caracteristicas: ["Zona turística", "Hoteles de lujo", "Restaurantes renombrados"],
    },
    {
      nombre: "Azoguejo",
      slug: null,
      descripcion: "Zona comercial moderna con retail, oficinas y almacenes logísticos.",
      caracteristicas: ["Zona comercial", "Retail", "Almacenes"],
    },
    {
      nombre: "San Marcos",
      slug: null,
      descripcion: "Servicios sanitarios y bienestar. Clínicas, centros de fisioterapia y gimnasios.",
      caracteristicas: ["Hospitales", "Clínicas", "Centros de bienestar"],
    },
    {
      nombre: "Vera Cruz",
      slug: null,
      descripcion: "Zona residencial de chalets. Vulnerable a nidos de avispa velutina.",
      caracteristicas: ["Residencial", "Chalets", "Áreas verdes"],
    },
    {
      nombre: "Clamores",
      slug: null,
      descripcion: "Barrio residencial y comercial con hoteles, pensiones y viviendas.",
      caracteristicas: ["Residencial", "Pequeños hoteles", "Comercios"],
    },
    {
      nombre: "Canonjía",
      slug: null,
      descripcion: "Zona residencial con viviendas unifamiliares y pequeños negocios.",
      caracteristicas: ["Residencial", "Viviendas", "Pequeños negocios"],
    },
    {
      nombre: "Pozuelo",
      slug: null,
      descripcion: "Barrio en expansión con desarrollo inmobiliario y comercial.",
      caracteristicas: ["En expansión", "Nuevas construcciones", "Comercios"],
    },
    {
      nombre: "Peñuelas",
      slug: null,
      descripcion: "Zona residencial tranquila con parques y espacios verdes.",
      caracteristicas: ["Residencial", "Parques", "Espacios verdes"],
    },
    {
      nombre: "La Lastrilla",
      slug: "la-lastrilla",
      descripcion: "Pueblo residencial cercano a Segovia con viviendas y pequeños negocios.",
      caracteristicas: ["Residencial", "Pueblo cercano", "Viviendas"],
    },
    {
      nombre: "El Espinar",
      slug: "el-espinar",
      descripcion: "Pueblo industrial y residencial con almacenes y viviendas.",
      caracteristicas: ["Industrial", "Almacenes", "Residencial"],
    },
    {
      nombre: "Cuéllar",
      slug: "cuéllar",
      descripcion: "Pueblo histórico de Segovia con patrimonio medieval.",
      caracteristicas: ["Histórico", "Medieval", "Patrimonio"],
    },
    {
      nombre: "Turégano",
      slug: null,
      descripcion: "Pueblo histórico con castillo medieval y patrimonio cultural.",
      caracteristicas: ["Histórico", "Castillo", "Patrimonio"],
    },
    {
      nombre: "Sepúlveda",
      slug: null,
      descripcion: "Pueblo medieval con vistas panorámicas y arquitectura histórica.",
      caracteristicas: ["Medieval", "Vistas", "Histórico"],
    },
    {
      nombre: "Pedraza",
      slug: null,
      descripcion: "Pueblo medieval fortificado con encanto y patrimonio cultural.",
      caracteristicas: ["Medieval", "Fortificado", "Turístico"],
    },
    {
      nombre: "Boceguillas",
      slug: null,
      descripcion: "Pueblo rural en la comarca de Segovia con viviendas y pequeños negocios.",
      caracteristicas: ["Rural", "Viviendas", "Pequeños negocios"],
    },
    {
      nombre: "Prádena",
      slug: null,
      descripcion: "Pueblo rural con cuevas de interés geológico y patrimonio natural.",
      caracteristicas: ["Rural", "Naturaleza", "Cuevas"],
    },
    {
      nombre: "Villacastín",
      slug: null,
      descripcion: "Pueblo residencial en la provincia de Segovia.",
      caracteristicas: ["Residencial", "Pueblo", "Viviendas"],
    },
    {
      nombre: "Ituero y Lama",
      slug: null,
      descripcion: "Pueblo rural pequeño en la comarca de Segovia.",
      caracteristicas: ["Rural", "Pequeño", "Viviendas"],
    },

  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HEADER ===== */}
      <Header />

      {/* ===== HERO ===== */}
      <section className="pt-12 pb-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container max-w-4xl">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Cobertura en Segovia y Alrededores
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Llegamos a los principales barrios de Segovia y pueblos con mayor demanda. Control profesional de plagas adaptado a cada zona.
          </p>
        </div>
      </section>

      {/* ===== BARRIOS GRID ===== */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {barrios.map((barrio, idx) => {
              const isClickable = barrio.slug !== null;
              const Component = isClickable ? 'a' : 'div';
              return (
              <Component
                key={idx}
                {...(isClickable && { href: `/control-de-plagas-${barrio.slug}` })}
                className={`p-8 rounded-lg border-2 transition-all ${
                  isClickable
                    ? 'border-gray-200 hover:border-primary hover:shadow-lg group cursor-pointer'
                    : 'border-gray-300 bg-gray-50 opacity-75'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={24} className="text-primary mt-1 flex-shrink-0" />
                  <h3 className={`text-2xl font-bold ${
                    isClickable ? 'text-foreground group-hover:text-primary' : 'text-muted-foreground'
                  } transition`}>
                    {barrio.nombre}
                  </h3>
                </div>
                {isClickable && (
                  <ArrowRight
                    size={24}
                    className="text-primary flex-shrink-0 transition-transform group-hover:translate-x-2"
                  />
                )}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {barrio.descripcion}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {barrio.caracteristicas.map((caracteristica, cidx) => (
                    <span
                      key={cidx}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold"
                    >
                      {caracteristica}
                    </span>
                  ))}
                </div>

                {isClickable && (
                  <span className="font-semibold text-sm text-primary">
                    Ver cobertura →
                  </span>
                )}
              </Component>
            );
            })}
          </div>
        </div>
      </section>

      {/* ===== MAPA SECTION ===== */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Cobertura Total en Segovia
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Disponibles en todos los barrios de Segovia. Respuesta garantizada en menos de 24 horas.
          </p>

          <div className="bg-white p-12 rounded-lg shadow-md text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Desde el Centro Histórico hasta Peñuelas, cubrimos toda la ciudad.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold text-lg h-14 px-8"
              onClick={() => window.location.href = "tel:+34921234567"}
            >
              <Phone className="mr-2" size={20} />
              Consultar Disponibilidad
            </Button>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 bg-primary text-white">
        <div className="container max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Necesitas control de plagas en tu barrio?
          </h2>
          <p className="text-lg mb-8 text-primary/90">
            Llama ahora y consulta la disponibilidad para tu zona.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 font-bold text-lg h-14 px-8"
            onClick={() => window.location.href = "tel:+34921234567"}
          >
            <Phone className="mr-2" size={20} />
            Llamar +34 921 234 567
          </Button>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-foreground text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Sierra Guard</h4>
              <p className="text-gray-300 text-sm">
                Control profesional de plagas en Segovia.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Navegación</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="/" className="hover:text-white transition">Inicio</a></li>
                <li><a href="/servicios" className="hover:text-white transition">Servicios</a></li>
                <li><a href="/barrios" className="hover:text-white transition">Barrios</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="tel:+34921234567" className="hover:text-white transition">+34 921 234 567</a></li>
                <li><a href="mailto:contacto@controldeplagassegovia.com" className="hover:text-white transition">contacto@controldeplagassegovia.com</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-sm text-gray-400">
              © 2026 Sierra Guard. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
