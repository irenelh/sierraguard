import { BadgeCheck, ClipboardCheck, PhoneCall, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProcessSection() {
  return (
      <section className="py-20 bg-emerald-900 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Cómo contratar nuestro servicio de control de plagas en Segovia?
            </h2>
            <p className="text-emerald-100 text-lg">
              Un proceso simple, transparente y eficaz en 4 pasos para recuperar tu tranquilidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-emerald-800/50 -z-0 transform translate-y-4"></div>

            {/* Paso 1 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-emerald-900 border-4 border-emerald-900 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:bg-white group-hover:text-emerald-900 transition-all duration-300">
                <PhoneCall size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Contacto</h3>
              <p className="text-emerald-100/80 text-sm leading-relaxed">
                Llámanos o escríbenos. Te atendemos de inmediato para entender tu urgencia.
              </p>
            </div>

            {/* Paso 2 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-emerald-900 border-4 border-emerald-900 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:bg-white group-hover:text-emerald-900 transition-all duration-300">
                <ClipboardCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Diagnóstico</h3>
              <p className="text-emerald-100/80 text-sm leading-relaxed">
                Evaluamos la situación y te damos un presupuesto cerrado y sin sorpresas.
              </p>
            </div>

            {/* Paso 3 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-emerald-900 border-4 border-emerald-900 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:bg-white group-hover:text-emerald-900 transition-all duration-300">
                <ShieldAlert size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Tratamiento</h3>
              <p className="text-emerald-100/80 text-sm leading-relaxed">
                Nuestros técnicos certificados aplican la solución más segura y efectiva.
              </p>
            </div>

            {/* Paso 4 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-emerald-900 border-4 border-emerald-900 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:bg-white group-hover:text-emerald-900 transition-all duration-300">
                <BadgeCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">4. Garantía</h3>
              <p className="text-emerald-100/80 text-sm leading-relaxed">
                Certificamos el servicio y realizamos seguimiento para asegurar el éxito.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button 
              size="lg" 
              className="bg-white text-emerald-900 hover:bg-gray-100 font-bold text-lg h-14 px-10 rounded-lg shadow-lg"
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Empezar Ahora
            </Button>
          </div>
        </div>
      </section>
  );
}
