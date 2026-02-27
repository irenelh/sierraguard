import { Award, MapPin, ShieldCheck, Zap } from "lucide-react";

export default function WhyChooseUsSection() {
  return (
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Content */}
            <div>
              <div className="mb-10 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  ¿Por Qué Elegirnos como tu Empresa de <span className="text-emerald-600">Control de Plagas en Segovia</span>?
                </h2>
                <p className="text-lg text-slate-600">
                  No somos una franquicia ni un intermediario. Somos vecinos expertos comprometidos con la protección ambiental de nuestra ciudad.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-10">
                {/* Item 1: Experiencia Local */}
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Expertos en Segovia</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Conocemos cada rincón, desde el Acueducto hasta los nuevos barrios. Tratamientos adaptados a la zona.
                  </p>
                </div>

                {/* Item 2: Rapidez */}
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Respuesta Inmediata</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Llegamos volando a cualquier punto. Actuamos en menos de 24h y atendemos urgencias.
                  </p>
                </div>

                {/* Item 3: Seguridad (Eco) */}
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Seguridad Total</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Biocidas de última generación seguros para niños y mascotas. Tu salud es prioritaria.
                  </p>
                </div>

                {/* Item 4: Garantía */}
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
                    <Award size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Garantía por Escrito</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Precio cerrado sin sorpresas. Si la plaga persiste, nosotros también hasta eliminarla.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="relative">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100">
                <img 
                  src="/images/control-plagas-en-segovia.jpeg" 
                  alt="Técnico experto en control de plagas" 
                  className="w-full h-full object-cover aspect-[4/5] md:aspect-square lg:aspect-[4/5]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  width="800"
                  height="1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
              </div>
              
              {/* Decorative Background Element */}
              <div className="absolute -z-10 top-12 -right-12 w-full h-full bg-emerald-50 rounded-[2rem] transform rotate-3"></div>
            </div>

          </div>
        </div>
      </section>
  );
}
