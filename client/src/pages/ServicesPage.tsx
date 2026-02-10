import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ArrowRight, ShieldCheck, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";

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

      {/* ===== HERO SECTION (Premium Dark) ===== */}
      <section className="relative pt-16 pb-8 lg:pt-12 lg:pb-6 overflow-hidden bg-slate-900">
        {/* Background Gradient & Blobs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        </div>

        <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Text (58% width -> col-span-7) */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Control de Plagas en Segovia
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                Nuestros Servicios
              </h1>
              
              <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
                Soluciones profesionales de control de plagas adaptadas a cada necesidad. Desde desinsectación especializada hasta bioseguridad hospitalaria.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+34921234567" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg h-14 px-8 rounded-xl shadow-lg shadow-emerald-500/20 transition-all hover:scale-105"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Llamar ahora
                  </Button>
                </a>
                
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-lg h-14 px-8 rounded-xl backdrop-blur-sm transition-all hover:scale-105"
                  onClick={() => {
                    const form = document.getElementById("contact-form");
                    form?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Pedir Presupuesto
                </Button>
              </div>
            </div>

            {/* Right Column: Image (42% width -> col-span-5) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800/50 group">
                {/* Glass overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10" />
                
                <img 
                  src="/images/control-plagas-en-segovia.jpeg" 
                  alt="Servicios de Control de Plagas"
                  className="w-full h-[350px] lg:h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-500 rounded-lg">
                      <ShieldCheck className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Garantía Total</p>
                      <p className="text-emerald-400 text-xs">Certificado Oficial</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      <Footer />

      {/* Sticky Call Button for Mobile */}
      <StickyCallButton />
    </div>
  );
}
