import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { locationPagesData } from "@/lib/locationPagesData";

export default function ZonesSection() {
  return (
      <section className="py-8 md:py-12 bg-emerald-900">
        <div className="container max-w-[1280px] mx-auto px-4">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 md:mb-3 leading-tight">
              Zonas en las que trabajamos en Segovia
            </h2>
            <p className="text-[#C9D1D9] text-sm md:text-base max-w-2xl mx-auto">
              Conocemos la ciudad y actuamos rápido en Segovia capital y alrededores.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 max-w-[1100px] mx-auto">
            {[
              "La Lastrilla", "El Espinar", "San Rafael", "Villacastín", 
              "Ituero y Lama", "Otero de Herreros", "Navas de San Antonio", 
              "Prádena", "Turégano", "Pedraza", "Sepúlveda", "Boceguillas", 
              "Cuéllar", "Palazuelos de Eresma", "Trescasas", "Torrecaballeros", 
              "Hontoria", "Coca", "San Cristobal de Segovia", 
              "Real Sitio de San Ildefonso (La Granja)", "Hontanares de Eresma", 
              "Revenga", "Valseca", "Ortigosa del Monte"
            ].map((zona) => {
              const page = Object.values(locationPagesData).find(p => p.barrio === zona);
              const slug = page ? page.slug : null;
              
              const chipClass = "h-[40px] md:h-[60px] px-4 md:px-6 rounded-[10px] bg-white/5 border border-white/10 flex items-center justify-center text-white text-sm md:text-lg font-medium transition-all hover:bg-white/10 hover:border-white/20 w-full";

              if (slug) {
                return (
                  <Link key={zona} href={`/${slug}`}>
                    <span className={`${chipClass} cursor-pointer`}>
                      {zona}
                    </span>
                  </Link>
                );
              }
              
              return (
                <span key={zona} className={`${chipClass} cursor-default`}>
                  {zona}
                </span>
              );
            })}
          </div>

          <p className="text-center text-emerald-100/60 text-sm mt-6 italic max-w-2xl mx-auto">
            * Los desplazamientos fuera de la zona de cobertura principal pueden requerir tarifa mínima o viaje.
          </p>

          <div className="mt-10 text-center">
            <Button
              size="lg"
              className="bg-white text-emerald-900 hover:bg-gray-100 font-bold text-lg h-auto py-4 px-6 md:px-10 rounded-lg shadow-lg transition-all hover:scale-105 whitespace-normal"
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              ¿No encuentras tu ubicación? Escribenos
            </Button>
          </div>
        </div>
      </section>
  );
}
