import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section (Premium Dark) */}
        <section className="relative pt-16 pb-12 lg:pt-20 lg:pb-16 overflow-hidden bg-slate-950">
           {/* Background Gradient & Blobs */}
           <div className="absolute inset-0 z-0 pointer-events-none">
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
           </div>

           <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Soporte 24/7
             </div>

             <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
               Contacta con <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Sierra Guard</span>
             </h1>
             
             <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
               Estamos disponibles las 24 horas para resolver cualquier urgencia. 
               Respuesta rápida, presupuesto sin compromiso y garantía total.
             </p>

             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+34921234567">
                  <Button size="lg" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-14 px-8 rounded-xl shadow-lg shadow-emerald-500/20 transition-all hover:scale-105">
                    <Phone className="mr-2 h-5 w-5" />
                    Llamar ahora
                  </Button>
                </a>
                <a href="mailto:contacto@controldeplagassegovia.com">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white font-medium h-14 px-8 rounded-xl bg-transparent transition-all hover:scale-105">
                    <Mail className="mr-2 h-5 w-5" />
                    Enviar Email
                  </Button>
                </a>
             </div>
           </div>
        </section>

        {/* Contact Info Cards & Map Section */}
        <section className="py-20 bg-white relative z-10 -mt-10">
          <div className="container mx-auto px-4 max-w-7xl">
            
            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
               {/* Card 1: Phone */}
               <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                    <Phone size={28} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-xl mb-2">Teléfono 24h</h3>
                  <p className="text-slate-500 mb-4 text-sm">Urgencias y presupuestos</p>
                  <a href="tel:+34921234567" className="text-lg font-bold text-emerald-600 hover:text-emerald-700">
                    +34 921 234 567
                  </a>
               </div>

               {/* Card 2: Email */}
               <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                    <Mail size={28} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-xl mb-2">Email</h3>
                  <p className="text-slate-500 mb-4 text-sm">Consultas generales</p>
                  <a href="mailto:contacto@controldeplagassegovia.com" className="text-base font-medium text-slate-600 hover:text-blue-600 break-all">
                    contacto@...
                  </a>
               </div>

               {/* Card 3: Location */}
               <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-14 h-14 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                    <MapPin size={28} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-xl mb-2">Oficina</h3>
                  <p className="text-slate-500 mb-4 text-sm">Sede Central</p>
                  <p className="text-base font-medium text-slate-600">
                    C. de José Zorrilla, 132<br/>40002 Segovia
                  </p>
               </div>

               {/* Card 4: Hours */}
               <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
                    <Clock size={28} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-xl mb-2">Horario</h3>
                  <p className="text-slate-500 mb-4 text-sm">Disponibilidad total</p>
                  <p className="text-base font-bold text-slate-800">
                    Lunes a Domingo<br/>24 Horas
                  </p>
               </div>
            </div>

            {/* Content Split: Image & Map */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               
               {/* Text & Image Side */}
               <div className="space-y-8">
                 <div>
                   <h2 className="text-3xl font-bold text-slate-900 mb-4">Estamos donde nos necesitas</h2>
                   <p className="text-slate-600 text-lg leading-relaxed">
                     Nuestro equipo técnico se desplaza a cualquier punto de Segovia y provincia. 
                     Desde el centro histórico hasta los pueblos de la sierra, garantizamos una respuesta rápida 
                     y discreta.
                   </p>
                 </div>
                 
                 <div className="rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 relative group">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10" />
                    <img 
                      src="/images/control-de-plagas-en-segovia-imagen.jpeg"
                      alt="Equipo Sierra Guard en Segovia"
                      className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-6 left-6 z-20">
                      <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg text-slate-900 font-bold shadow-lg">
                        <MapPin size={18} className="text-emerald-600" />
                        Cobertura Provincial
                      </div>
                    </div>
                 </div>
               </div>

               {/* Map Side */}
               <div className="h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 relative bg-slate-100">
                  <iframe 
                    src="https://maps.google.com/maps?q=C.+de+José+Zorrilla,+132,+40002+Segovia,+España&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa de ubicación Sierra Guard"
                    className="absolute inset-0 w-full h-full"
                  />
               </div>

            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
