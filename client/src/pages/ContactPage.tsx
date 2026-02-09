import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "wouter";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24 relative">
          <div className="container mx-auto px-4">
            {/* Breadcrumbs */}
            <div className="absolute top-6 left-0 w-full px-4">
               <div className="container mx-auto max-w-6xl">
                 <nav className="flex items-center text-xs sm:text-sm text-primary-foreground/60 space-x-2">
                   <Link href="/" className="hover:text-primary-foreground transition-colors">Inicio</Link>
                   <span>/</span>
                   <span className="text-primary-foreground">Contacto</span>
                 </nav>
               </div>
            </div>

            <div className="text-center mt-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contacta con nosotros</h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
                Estamos disponibles 24/7 para resolver tus problemas de plagas en Segovia.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            
            <div className="space-y-16">
              
              {/* Top Section: Info Cards + Image */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                 
                 {/* Left Column: Info Cards Grid */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 content-start">
                    {/* Phone */}
                    <a href="tel:+34921234567" className="group">
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-all h-full">
                        <div className="bg-muted p-3 rounded-full text-primary shrink-0">
                          <Phone size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg mb-1">Llámanos</h3>
                          <p className="text-primary font-bold text-xl mb-1">+34 921 234 567</p>
                          <span className="text-xs font-bold text-destructive uppercase tracking-wider">Atención 24h</span>
                        </div>
                      </div>
                    </a>

                    {/* Email */}
                    <a href="mailto:contacto@controldeplagassegovia.com" className="group">
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-all h-full">
                        <div className="bg-destructive/10 p-3 rounded-full text-destructive shrink-0">
                          <Mail size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg mb-1">Escríbenos</h3>
                          <p className="text-gray-600 mb-1 break-all">contacto@controldeplagassegovia.com</p>
                          <span className="text-xs font-bold text-secondary uppercase tracking-wider">Respuesta &lt; 24h</span>
                        </div>
                      </div>
                    </a>

                    {/* Hours */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 h-full">
                      <div className="bg-secondary/10 p-3 rounded-full text-secondary shrink-0">
                        <Clock size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1">Horario</h3>
                        <p className="text-gray-600 mb-1">Lunes a Domingo: 24 Horas</p>
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Incluido festivos</span>
                      </div>
                    </div>

                     {/* Location */}
                     <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 h-full">
                      <div className="bg-gray-100 p-3 rounded-full text-gray-600 shrink-0">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1">Ubicación</h3>
                        <p className="text-gray-600 mb-1">Segovia, España</p>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Oficina Central</span>
                      </div>
                    </div>
                 </div>

                 {/* Right Column: Image */}
                 <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200 min-h-[300px] lg:h-auto">
                    <img 
                      src="/images/control-de-plagas-en-segovia-imagen.jpeg"
                      alt="Control de plagas profesional en Segovia - Sierra Guard"
                      className="w-full h-full object-cover"
                    />
                 </div>
              </div>

              {/* Bottom Section: Map */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 text-center">Donde estamos</h2>
                <div className="bg-gray-200 rounded-xl overflow-hidden shadow-sm h-[450px] border border-gray-200">
                   <iframe 
                      src="https://maps.google.com/maps?q=Segovia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Mapa de ubicación"
                    />
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}