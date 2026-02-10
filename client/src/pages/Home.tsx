import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, MapPin, Shield, Zap, Award, Bug, ShieldAlert, Sparkles, Feather, Hammer, ArrowRight, ClipboardCheck, PhoneCall, BadgeCheck, Building2, Home as HomeIcon, ShieldCheck, Star, Calculator } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";
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
  const [location] = useLocation();

  // Handle hash navigation on mount and location change
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

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
        className="relative min-h-[550px] lg:min-h-[650px] flex items-center overflow-hidden py-12 lg:py-0 group"
        style={{
          backgroundImage: "url('/images/control-de-plagas-en-segovia-imagen.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
        }}
      >
        {/* Overlay Mejorado: Gradiente para mejor legibilidad del texto sin tapar toda la foto */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-transparent backdrop-blur-[1px]"></div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texto Hero */}
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              
              {/* Badge Superior */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">Servicio de Urgencia 24h</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-lg tracking-tight">
                Control de plagas en Segovia | Servicio profesional y urgente
              </h1>
              
              <p className="text-lg lg:text-xl text-slate-200 leading-relaxed max-w-xl drop-shadow-md">
                Eliminamos cucarachas, ratas, chinches y avispas en viviendas y negocios. Atención rápida en Segovia y alrededores.
              </p>

              {/* CTA Magnético */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg h-14 px-8 rounded-xl shadow-xl shadow-emerald-900/20 hover:scale-105 transition-all transform"
                  onClick={() => {
                    const form = document.getElementById("contact-form");
                    form?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <Phone className="mr-2 h-5 w-5 animate-bounce" />
                  Llamar ahora
                </Button>
                <Link href="/calculadora">
                  <Button
                    size="lg"
                    className="bg-white/10 hover:bg-white/20 border-2 border-white/20 text-white font-bold text-lg h-14 px-8 rounded-xl backdrop-blur-sm transition-all"
                  >
                    <Calculator className="mr-2 h-5 w-5" />
                    Calcular Presupuesto
                  </Button>
                </Link>
              </div>

              {/* Trust Badges / Social Proof */}
              <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                 <div className="flex items-center gap-2">
                    <div className="flex -space-x-1">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white font-bold text-sm leading-none">4.9/5</span>
                        <span className="text-slate-400 text-xs">Google Reviews</span>
                    </div>
                 </div>
                 <div className="h-8 w-px bg-white/10"></div>
                 <div className="flex items-center gap-2 text-slate-200">
                    <ShieldCheck size={18} className="text-emerald-500" />
                    <span className="text-sm font-medium">Garantía Certificada</span>
                 </div>
              </div>
            </div>

            {/* Espacio para imagen (responsive) */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>



      {/* ===== SERVICIOS PRINCIPALES - REDISEÑADO ===== */}
      <section id="servicios" className="py-24 bg-gradient-to-b from-gray-50 to-white scroll-mt-32 relative overflow-hidden">
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
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 left-8 bg-white p-4 rounded-2xl shadow-lg border border-gray-50 z-20 group-hover:scale-110 transition-transform duration-300">
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



      {/* ===== CALCULADORA CTA ===== */}
      <section className="py-12 bg-primary text-white">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">¿Quieres saber cuánto cuesta tu tratamiento?</h2>
            <p className="text-white/90 text-lg">
              Obtén un presupuesto estimado en menos de 1 minuto con nuestra calculadora online.
            </p>
          </div>
          <Link href="/calculadora">
            <Button size="lg" variant="secondary" className="font-bold text-white hover:text-white/90 min-w-[200px] h-14 text-lg shadow-lg">
              <Calculator className="mr-2 h-6 w-6" />
              Calcular Presupuesto
            </Button>
          </Link>
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
      <section id="zonas-servicio" className="py-8 md:py-12 bg-emerald-900">
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

      {/* ===== POR QUÉ ELEGIRNOS (NUEVO DISEÑO) ===== */}
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
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
              </div>
              
              {/* Decorative Background Element */}
              <div className="absolute -z-10 top-12 -right-12 w-full h-full bg-emerald-50 rounded-[2rem] transform rotate-3"></div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== CÓMO CONTRATAR (PROCESO) ===== */}
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

      {/* ===== CONTACTO ===== */}
      <section id="contact-form" className="py-20 bg-gray-50">
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

      {/* ===== FAQ SECTION ===== */}
      <FaqSection
        title="Preguntas frecuentes sobre Control de plagas en Segovia"
        description="Resolvemos tus dudas sobre nuestros servicios de control de plagas."
        bgColor="bg-gray-50"
        faqs={[
          {
            question: "¿Cuánto tiempo tarda en responder Sierra Guard?",
            answer: "Garantizamos respuesta en menos de 24 horas. Para emergencias urgentes (avispas, plagas activas), respondemos en 2-4 horas.",
          },
          {
            question: "¿Utilizáis químicos tóxicos?",
            answer: "No. Utilizamos métodos profesionales certificados CEPA. Para chinches, ofrecemos tratamiento térmico sin químicos. Para otras plagas, usamos cebos de baja toxicidad seguros para familias y mascotas.",
          },
          {
            question: "¿Ofrecéis garantía?",
            answer: "Sí. Garantía 100% - Si ves plagas después de nuestro tratamiento, repetimos sin coste adicional.",
          },
          {
            question: "¿Cuál es el precio?",
            answer: "Los precios varían según el tipo de plaga y tamaño del espacio. Ofrecemos presupuesto gratuito por teléfono sin compromiso.",
          },
          {
            question: "¿Trabajáis en fin de semana?",
            answer: "Sí, disponibles 24/7 incluyendo festivos. Servicio urgente garantizado.",
          },
          {
            question: "¿Cubríis todos los barrios de Segovia?",
            answer: "Sí. Cobertura total en Segovia. Desde Centro Histórico hasta Peñuelas, llegamos a todos los barrios.",
          },
        ]}
      />


      <Footer />
    </div>
  );
}
