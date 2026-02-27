import { ArrowRight, Bug, Feather, Hammer, Shield, ShieldAlert, Sparkles } from "lucide-react";
import { serviceCategoriesData } from "@/lib/serviceCategoriesData";

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white scroll-mt-32 relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 -left-24 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles size={12} />
              <span>Soluciones Integrales</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Servicios de control de plagas en Segovia
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Soluciones profesionales, rápidas y garantizadas para proteger tu hogar o negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {serviceCategoriesData.map((service) => {
              // Icon mapping
              const icons: any = {
                "desinsectacion": <Bug className="w-7 h-7 text-primary" />,
                "desratizacion": <ShieldAlert className="w-7 h-7 text-primary" />,
                "desinfeccion": <Sparkles className="w-7 h-7 text-primary" />,
                "control-de-aves": <Feather className="w-7 h-7 text-primary" />,
                "tratamientos-de-madera": <Hammer className="w-7 h-7 text-primary" />,
              };

              // Short descriptions mapping
              const shortDescs: any = {
                "desinsectacion": "Elimina cucarachas, chinches y hormigas. Tratamientos seguros sin abandonar tu vivienda.",
                "desratizacion": "Solución definitiva para ratas y ratones. Monitorización inteligente y sellado de accesos.",
                "desinfeccion": "Desinfección certificada de virus y bacterias. Cumplimiento de normativa sanitaria.",
                "control-de-aves": "Ahuyentadores de palomas discretos. Protege tu edificio sin dañar su estética.",
                "tratamientos-de-madera": "Expertos en termitas y carcoma. Tratamientos curativos con garantía certificada.",
                "higiene-ambiental": "Control de calidad del aire y legionella. Auditorías para cumplimiento normativo.",
                "inspeccion-y-prevencion": "Diagnóstico técnico preventivo. Identificamos y corregimos riesgos antes de la plaga."
              };

              return (
                <a
            key={service.id}
            href={`/${service.slug}`}
            className="group bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-primary/20 flex flex-col h-full overflow-hidden hover:-translate-y-2"
          >
            {service.image && (
              <div className="relative">
                <div className="w-full h-48 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <img 
                    src={service.image} 
                    alt={service.nombre}
                    width="400"
                    height="300"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 left-8 bg-white p-4 rounded-2xl shadow-lg border border-gray-50 z-20 group-hover:scale-105 transition-transform duration-300">
                  {icons[service.id] || <Shield className="w-7 h-7 text-primary" />}
                </div>
              </div>
            )}

            <div className={`flex flex-col flex-grow w-full ${service.image ? 'pt-12 px-8 pb-8' : 'p-8'}`}>
              {!service.image && (
                <div className="bg-primary/5 p-4 rounded-2xl mb-6 w-fit group-hover:bg-primary/10 transition-colors">
                  {icons[service.id] || <Shield className="w-7 h-7 text-primary" />}
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                {service.nombre}
              </h3>
              
              <p className="text-gray-600 mb-8 leading-relaxed flex-grow text-[17px]">
                {shortDescs[service.id] || service.metaDescription.split('.')[0] + '.'}
              </p>
              
              <div className="mt-auto pt-6 border-t border-gray-50 w-full">
                <span className="flex items-center justify-between w-full px-5 py-4 bg-emerald-50 text-emerald-700 font-bold rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-emerald-600/25">
                  <span>Ver detalles</span>
                  <div className="bg-white/20 p-1 rounded-full">
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </span>
              </div>
            </div>
          </a>
              );
            })}
          </div>
        </div>
      </section>
  );
}
