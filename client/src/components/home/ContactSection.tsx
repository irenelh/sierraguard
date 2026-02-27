import { MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
      <section className="py-20 bg-gray-50">
         <div className="container mx-auto border border-gray-200 p-6 sm:p-8 rounded-sm shadow-sm bg-white max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {/* Columna Izquierda: Contacto Directo */}
              <div className="flex flex-col gap-4">
                <div className="text-center md:text-left mb-4">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">¿Dónde estamos? Visítanos</h2>
                  <p className="text-gray-600">Estamos en el corazón de Segovia, listos para acudir a tu llamada.</p>
                </div>

                {/* Card 1: Teléfono */}
                <a href="tel:+34921234567" className="group block">
                  <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-full text-blue-600 mt-1">
                      <Phone size={24} />
                    </div>
                    <div>
                       <span className="block text-lg font-bold text-gray-900 mb-1">Teléfono de contacto</span>
                       <span className="block text-xl font-bold text-blue-600 mb-1">+34 921 234 567</span>
                       <span className="block text-xs font-bold text-orange-500 uppercase tracking-wider">ATENCIÓN 24 HORAS</span>
                    </div>
                  </div>
                </a>

                {/* Card 2: Email */}
                <a href="mailto:contacto@controldeplagassegovia.com" className="group block">
                  <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex items-start gap-4">
                     <div className="bg-orange-50 p-3 rounded-full text-orange-600 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                     </div>
                     <div className="overflow-hidden">
                        <span className="block text-lg font-bold text-gray-900 mb-1">Escríbenos</span>
                        <span className="block text-gray-600 truncate mb-1">contacto@controldeplagassegovia.com</span>
                        <span className="block text-xs font-bold text-emerald-600 uppercase tracking-wider">Respuesta &lt; 24h</span>
                     </div>
                  </div>
                </a>

                {/* Card 3: Horario */}
                <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex items-start gap-4">
                    <div className="bg-emerald-50 p-3 rounded-full text-emerald-900 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <div>
                       <span className="block text-lg font-bold text-gray-900 mb-1">Horario de Atención</span>
                       <span className="block text-gray-600 mb-1">Lunes a Domingo: 24 Horas</span>
                       <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Sábados y festivos incluidos</span>
                    </div>
                </div>

                {/* Card 4: Dirección */}
                <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex items-start gap-4">
                    <div className="bg-gray-50 p-3 rounded-full text-gray-600 mt-1">
                        <MapPin size={24} />
                    </div>
                    <div>
                       <span className="block text-lg font-bold text-gray-900 mb-1">Dirección</span>
                       <span className="block text-gray-600 mb-1">C. de José Zorrilla, 132, 40002 Segovia</span>
                       <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Oficina Central</span>
                    </div>
                </div>
              </div>

              {/* Columna Derecha: Mapa de Segovia General */}
              <div className="w-full h-full min-h-[400px] rounded-[16px] overflow-hidden shadow-md bg-gray-200">
                <iframe 
                  src="https://maps.google.com/maps?q=Segovia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de cobertura en Segovia"
                />
              </div>
            </div>
         </div>
      </section>
  );
}
