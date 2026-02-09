import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";

/**
 * Página de Servicios
 * URL: /servicios
 * Listado completo de todos los servicios de Sierra Guard
 */

export default function ServicesPage() {
  const servicios = [
    {
      titulo: "Desinsectación",
      descripcion: "Eliminación profesional de cucarachas, chinches, termitas, avispas y otros insectos.",
      slug: "desinsectacion",
      beneficios: [
        "Tratamiento químico y térmico",
        "Inspección preventiva",
        "Sellado de conductos",
      ],
    },
    {
      titulo: "Desratización",
      descripcion: "Sistemas de monitoreo 24/7 y rodent proofing permanente.",
      slug: "desratizacion",
      beneficios: [
        "Trampas de alta seguridad",
        "Rodent proofing",
        "Dashboard online",
      ],
    },
    {
      titulo: "Desinfección",
      descripcion: "Auditoría de legionella, desinfección de patógenos y purificación de aire UV-C.",
      slug: "desinfeccion",
      beneficios: [
        "Auditoría completa",
        "Limpieza química",
        "Reportes técnicos",
      ],
    },
    {
      titulo: "Control de Aves",
      descripcion: "Retirada de palomas, instalación de pinchos antipalomas y redes de protección.",
      slug: "control-de-aves",
      beneficios: [
        "Respuesta en 2 horas",
        "Equipo profesional",
        "Garantía de no retorno",
      ],
      urgente: true,
    },
    {
      titulo: "Tratamientos de Madera",
      descripcion: "Control de carcoma, termitas en madera y protección preventiva de estructuras.",
      slug: "tratamientos-de-madera",
      beneficios: [
        "Tratamiento térmico",
        "Sin químicos",
        "Discreto y seguro",
      ],
    },
    {
      titulo: "Inspección y Prevención",
      descripcion: "Auditorías completas, inspección de termitas y programas de prevención personalizados.",
      slug: "inspeccion-y-prevencion",
      beneficios: [
        "Inspección estructural",
        "Tratamiento preventivo",
        "Protección a largo plazo",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HEADER ===== */}
      <Header />

      {/* ===== HERO ===== */}
      <section className="pt-12 pb-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container max-w-4xl">
          <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Soluciones profesionales de control de plagas adaptadas a cada necesidad. Desde desinsectación especializada hasta bioseguridad hospitalaria.
          </p>
        </div>
      </section>

      {/* ===== SERVICIOS GRID ===== */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicios.map((servicio, idx) => (
              <a
                key={idx}
                href={`/${servicio.slug}`}
                className={`p-8 rounded-lg border-2 hover:shadow-lg transition-all group ${
                  servicio.urgente
                    ? "border-red-500 hover:border-red-600 bg-red-50"
                    : "border-gray-200 hover:border-primary bg-white"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition">
                    {servicio.titulo}
                  </h3>
                  <ArrowRight
                    size={24}
                    className={`flex-shrink-0 transition-transform group-hover:translate-x-2 ${
                      servicio.urgente ? "text-red-600" : "text-primary"
                    }`}
                  />
                </div>

                <p className="text-muted-foreground lg:text-lg mb-6 leading-relaxed">
                  {servicio.descripcion}
                </p>

                <ul className="space-y-2 mb-6">
                  {servicio.beneficios.map((beneficio, bidx) => (
                    <li key={bidx} className="flex items-start gap-2 text-sm lg:text-base text-muted-foreground">
                      <CheckCircle2
                        size={16}
                        className={`mt-0.5 flex-shrink-0 ${
                          servicio.urgente ? "text-red-600" : "text-primary"
                        }`}
                      />
                      <span>{beneficio}</span>
                    </li>
                  ))}
                </ul>

                <span className={`font-semibold text-sm lg:text-base ${
                  servicio.urgente ? "text-red-600" : "text-primary"
                }`}>
                  Ver detalles →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 bg-primary text-white">
        <div className="container max-w-3xl text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            ¿Necesitas un servicio urgente?
          </h2>
          <p className="text-lg lg:text-xl mb-8 text-primary/90">
            Disponibles 24/7. Respuesta garantizada en menos de 24 horas.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 font-bold text-lg lg:text-xl h-14 lg:h-16 px-8 lg:px-10"
            onClick={() => window.location.href = "tel:+34921234567"}
          >
            <Phone className="mr-2" size={20} />
            Llamar Ahora +34 921 234 567
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
