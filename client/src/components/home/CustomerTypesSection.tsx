import { Building2, CheckCircle2, Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CustomerTypesSection() {
  return (
      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Protección Total para Tu Hogar y Tu Negocio
            </h2>
            <p className="text-lg text-gray-600">
              Adaptamos nuestros protocolos de actuación según el tipo de instalación para garantizar la máxima eficacia y seguridad de tu vivienda o negocio en Segovia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card Particulares */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <HomeIcon size={40} className="text-primary group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Particulares y Comunidades</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Protegemos tu vivienda con tratamientos seguros para niños y mascotas. Actuamos con discreción y rapidez para que recuperes tu tranquilidad.
              </p>
              <ul className="space-y-3 text-left w-full max-w-xs mx-auto mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                  <span>Seguridad infantil y mascotas</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                  <span>Sin plazos de seguridad largos</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                  <span>Coches y vehículos discretos</span>
                </li>
              </ul>
              <Button 
                className="mt-auto bg-primary text-white hover:bg-primary/90"
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Solicitar Presupuesto Hogar
              </Button>
            </div>

            {/* Card Negocios */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Building2 size={40} className="text-primary group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Negocios y Empresas</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Cumple con la normativa de Sanidad y protege tu reputación. Planes de mantenimiento preventivo y control de plagas para hostelería y comercio.
              </p>
              <ul className="space-y-3 text-left w-full max-w-xs mx-auto mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                  <span>Certificado oficial de Sanidad</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                  <span>Auditorías y monitorización</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                  <span>Horarios flexibles</span>
                </li>
              </ul>
              <Button 
                variant="outline"
                className="mt-auto border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Plan para Empresas
              </Button>
            </div>
          </div>
        </div>
      </section>
  );
}
