import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, MapPin, Shield, Zap, Award, Bug, ShieldAlert, Sparkles, Feather, Hammer, ArrowRight, ClipboardCheck, PhoneCall, BadgeCheck, Building2, Home as HomeIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { locationPagesData } from "@/lib/locationPagesData";
import { serviceCategoriesData } from "@/lib/serviceCategoriesData";

/**
 * Sierra Guard - Control de Plagas Segovia
 * Página de inicio optimizada para CRO (Conversion Rate Optimization)
 * Diseño: Minimalismo Técnico + Autoridad Profesional
 * 
 * Secciones:
 * 1. Hero con CTA magnético
 * 2. Por qué nosotros (basado en debilidades de competencia)
 * 3. Servicios principales
 * 4. Mapa de barrios
 * 5. Footer legal/SEO
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section
        className="relative min-h-[calc(100vh-140px)] flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/control-plagas-segovia-imagen.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay oscuro para legibilidad */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Texto Hero */}
            <div className="space-y-6 lg:col-span-2">
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Control de plagas en Segovia | Servicio profesional y urgente
              </h1>
              <p className="text-xl text-gray-100 leading-relaxed">
                Eliminamos cucarachas, ratas, chinches y avispas en viviendas y negocios. Atención rápida en Segovia y alrededores.
              </p>

              {/* CTA Magnético */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-bold text-lg h-14 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
                  onClick={() => {
                    const form = document.getElementById("contact-form");
                    form?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <Phone className="mr-2" size={20} />
                  Te Llamamos Gratis
                </Button>
                <Link href="/calculadora">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8 rounded-lg w-full"
                  >
                    Calcular Presupuesto Online
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-white">
                  <Award size={20} className="text-primary" />
                  <span className="font-semibold">Certificado CEPA</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Shield size={20} className="text-primary" />
                  <span className="font-semibold">Garantía 100%</span>
                </div>
              </div>
            </div>

            {/* Espacio para imagen (responsive) */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>



      {/* ===== SERVICIOS PRINCIPALES ===== */}
      <section id="servicios" className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Servicios de control de plagas en Segovia
            </h2>
            <p className="text-lg text-gray-600">
              Soluciones profesionales y rápidas para cada problema de plagas en Segovia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategoriesData.map((service) => {
              // Icon mapping
              const icons: any = {
                "desinsectacion": <Bug className="w-10 h-10 text-primary mb-4" />,
                "desratizacion": <ShieldAlert className="w-10 h-10 text-primary mb-4" />,
                "desinfeccion": <Sparkles className="w-10 h-10 text-primary mb-4" />,
                "control-de-aves": <Feather className="w-10 h-10 text-primary mb-4" />,
                "tratamientos-de-madera": <Hammer className="w-10 h-10 text-primary mb-4" />,
              };

              // Short descriptions mapping
              const shortDescs: any = {
                "desinsectacion": "Eliminación eficaz de cucarachas, chinches y hormigas.",
                "desratizacion": "Control de roedores con monitoreo inteligente 24/7.",
                "desinfeccion": "Ambientes libres de patógenos y bacterias.",
                "control-de-aves": "Sistemas discretos para proteger tu fachada.",
                "tratamientos-de-madera": "Protección estructural contra termitas y carcoma."
              };

              return (
                <a
                  key={service.id}
                  href={`/${service.slug}`}
                  className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-primary/20 flex flex-col items-start h-full"
                >
                  <div className="bg-primary/5 p-3 rounded-xl mb-6 group-hover:bg-primary/10 transition-colors">
                    {icons[service.id] || <Shield className="w-8 h-8 text-primary" />}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {service.nombre}
                  </h3>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                    {shortDescs[service.id] || service.metaDescription.split('.')[0] + '.'}
                  </p>
                  
                  <div className="flex items-center text-primary font-bold text-sm group-hover:translate-x-1 transition-transform mt-auto">
                    Ver servicio <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SERVICIOS ADICIONALES ===== */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Servicios Adicionales de Control de Plagas en Segovia
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategoriesData.flatMap(category => 
              category.servicios.map(subService => ({
                ...subService,
                categorySlug: category.slug,
                categoryName: category.nombre
              }))
            )
            .filter(item => item.servicePageSlug)
            .map((item, index) => (
              <Link key={index} href={`/servicios/${item.servicePageSlug}`}>
                <div className="p-6 border border-gray-100 rounded-xl hover:shadow-md transition-shadow bg-gray-50/50 cursor-pointer h-full group">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 className="text-primary shrink-0" size={20} />
                    <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">{item.titulo}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{item.descripcion}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="text-xs text-primary font-semibold uppercase tracking-wide">
                      {item.categoryName}
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEGOCIOS Y PARTICULARES ===== */}
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

      {/* ===== ZONAS DE SERVICIO (PREMIUM GRID) ===== */}
      <section id="zonas-servicio" className="py-8 md:py-12 bg-[#1d4620]">
        <div className="container max-w-[1280px] mx-auto px-4">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 md:mb-3 leading-tight">
              Zonas en las que trabajamos en Segovia
            </h2>
            <p className="text-[#C9D1D9] text-sm md:text-base max-w-2xl mx-auto">
              Conocemos la ciudad y actuamos rápido en Segovia capital y alrededores.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 max-w-[1100px] mx-auto">
            {[
              "Centro Histórico", "San Marcos", "Clamores", "San Lorenzo", 
              "Nueva Segovia", "Zamarramala", "La Lastrilla", "San Millán", 
              "El Carmen", "La Albuera", "Estación", "El Espinar", 
              "San Rafael", "Villacastín", "Ituero y Lama", "Otero de Herreros", 
              "Navas de San Antonio", "Prádena", "Turégano", "Pedraza", 
              "Sepúlveda", "Boceguillas", "Cuéllar", "Palazuelos de Eresma", 
              "Trescasas", "Torrecaballeros", "Hontoria", "Coca"
            ].map((zona) => {
              const page = Object.values(locationPagesData).find(p => p.barrio === zona);
              const slug = page ? page.slug : null;
              
              const chipClass = "h-[40px] px-4 rounded-[10px] bg-white/5 border border-white/10 flex items-center justify-center text-white text-sm font-medium transition-all hover:bg-white/10 hover:border-white/20 w-full";

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
        </div>
      </section>

      {/* ===== POR QUÉ ELEGIRNOS (NUEVO DISEÑO) ===== */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              ¿Por Qué Elegirnos como tu Empresa de <span className="text-primary">Control de Plagas en Segovia</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Más que exterminadores, somos tus vecinos expertos en protección ambiental.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Card 1: Experiencia Local */}
            <div className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 rotate-12">
                <MapPin size={120} className="text-primary" />
              </div>
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary group-hover:text-white">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">Expertos en Segovia</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Conocemos cada rincón, desde el Acueducto hasta los nuevos barrios. Tratamientos adaptados a la arquitectura local.
              </p>
            </div>

            {/* Card 2: Rapidez */}
            <div className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 rotate-12">
                <Zap size={120} className="text-primary" />
              </div>
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary group-hover:text-white">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">Respuesta Inmediata</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Sabemos que las plagas no esperan. Actuamos en menos de 24h y atendemos urgencias fines de semana.
              </p>
            </div>

            {/* Card 3: Seguridad (Eco) */}
            <div className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 rotate-12">
                <Sparkles size={120} className="text-primary" />
              </div>
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary group-hover:text-white">
                <Sparkles size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">Seguridad Total</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Biocidas de última generación seguros para niños y mascotas. Tu salud es nuestra prioridad innegociable.
              </p>
            </div>

            {/* Card 4: Garantía */}
            <div className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 rotate-12">
                <Shield size={120} className="text-primary" />
              </div>
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary group-hover:text-white">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">Garantía por Escrito</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Si la plaga persiste, nosotros también. Ofrecemos garantía de post-servicio certificada y seguimiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CÓMO CONTRATAR (PROCESO) ===== */}
      <section className="py-20 bg-[#1d4620] text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Cómo contratar nuestro servicio de control de plagas en Segovia?
            </h2>
            <p className="text-green-100 text-lg">
              Un proceso simple, transparente y eficaz en 4 pasos para recuperar tu tranquilidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-green-800/50 -z-0 transform translate-y-4"></div>

            {/* Paso 1 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-green-900 border-4 border-[#1d4620] rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:bg-white group-hover:text-[#1d4620] transition-all duration-300">
                <PhoneCall size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Contacto</h3>
              <p className="text-green-100/80 text-sm leading-relaxed">
                Llámanos o escríbenos. Te atendemos de inmediato para entender tu urgencia.
              </p>
            </div>

            {/* Paso 2 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-green-900 border-4 border-[#1d4620] rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:bg-white group-hover:text-[#1d4620] transition-all duration-300">
                <ClipboardCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Diagnóstico</h3>
              <p className="text-green-100/80 text-sm leading-relaxed">
                Evaluamos la situación y te damos un presupuesto cerrado y sin sorpresas.
              </p>
            </div>

            {/* Paso 3 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-green-900 border-4 border-[#1d4620] rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:bg-white group-hover:text-[#1d4620] transition-all duration-300">
                <ShieldAlert size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Tratamiento</h3>
              <p className="text-green-100/80 text-sm leading-relaxed">
                Nuestros técnicos certificados aplican la solución más segura y efectiva.
              </p>
            </div>

            {/* Paso 4 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-green-900 border-4 border-[#1d4620] rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:bg-white group-hover:text-[#1d4620] transition-all duration-300">
                <BadgeCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">4. Garantía</h3>
              <p className="text-green-100/80 text-sm leading-relaxed">
                Certificamos el servicio y realizamos seguimiento para asegurar el éxito.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button 
              size="lg" 
              className="bg-white text-[#1d4620] hover:bg-gray-100 font-bold text-lg h-14 px-10 rounded-lg shadow-lg"
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Empezar Ahora
            </Button>
          </div>
        </div>
      </section>

      {/* ===== FORMULARIO DE CONTACTO ===== */}
      <section id="contact-form" className="py-20 bg-gray-50">
        <div className="container max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Solicita tu Llamada Gratis
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Rellena el formulario y nos pondremos en contacto en menos de 24 horas.
          </p>

          <form className="bg-white p-8 rounded-lg shadow-md space-y-6">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                placeholder="+34 xxx xxx xxx"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Tipo de Plaga
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Selecciona una opción</option>
                <option>Cucarachas</option>
                <option>Ratas/Ratones</option>
                <option>Avispas</option>
                <option>Chinches</option>
                <option>Otra</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Barrio/Zona
              </label>
              <input
                type="text"
                placeholder="Ej: Centro Histórico"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg h-12"
            >
              Solicitar Llamada Gratis
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Protegemos tu privacidad. Nunca compartimos tus datos.
            </p>
          </form>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Preguntas Frecuentes
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Resolvemos tus dudas sobre nuestros servicios de control de plagas.
          </p>

          <div className="space-y-6">
            {[
              {
                pregunta: "¿Cuánto tiempo tarda en responder Sierra Guard?",
                respuesta: "Garantizamos respuesta en menos de 24 horas. Para emergencias urgentes (avispas, plagas activas), respondemos en 2-4 horas.",
              },
              {
                pregunta: "¿Utilizáis químicos tóxicos?",
                respuesta: "No. Utilizamos métodos profesionales certificados CEPA. Para chinches, ofrecemos tratamiento térmico sin químicos. Para otras plagas, usamos cebos de baja toxicidad seguros para familias y mascotas.",
              },
              {
                pregunta: "¿Ofrecéis garantía?",
                respuesta: "Sí. Garantía 100% - Si ves plagas después de nuestro tratamiento, repetimos sin coste adicional.",
              },
              {
                pregunta: "¿Cuál es el precio?",
                respuesta: "Los precios varían según el tipo de plaga y tamaño del espacio. Ofrecemos presupuesto gratuito por teléfono sin compromiso.",
              },
              {
                pregunta: "¿Trabajáis en fin de semana?",
                respuesta: "Sí, disponibles 24/7 incluyendo festivos. Servicio urgente garantizado.",
              },
              {
                pregunta: "¿Cubríis todos los barrios de Segovia?",
                respuesta: "Sí. Cobertura total en Segovia. Desde Centro Histórico hasta Peñuelas, llegamos a todos los barrios.",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-foreground mb-3">{item.pregunta}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.respuesta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
