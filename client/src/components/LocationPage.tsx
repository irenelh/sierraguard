import { Button } from "@/components/ui/button";
import { 
  Phone, 
  CheckCircle2, 
  MapPin, 
  Shield, 
  Zap, 
  Award, 
  ArrowRight, 
  Calculator,
  Bug,
  Search,
  Home,
  AlertTriangle,
  Target,
  PawPrint,
  Wind,
  ShieldAlert
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import FaqSection from "@/components/FaqSection";
import { serviceCategoriesData } from "@/lib/serviceCategoriesData";

const getServiceIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("cucaracha") || t.includes("insecto")) return <Bug className="w-8 h-8 text-emerald-600" />;
  if (t.includes("chinche")) return <Search className="w-8 h-8 text-emerald-600" />;
  if (t.includes("termita") || t.includes("madera") || t.includes("carcoma")) return <Home className="w-8 h-8 text-emerald-600" />;
  if (t.includes("avispa") || t.includes("velutina")) return <AlertTriangle className="w-8 h-8 text-emerald-600" />;
  if (t.includes("hormiga")) return <Target className="w-8 h-8 text-emerald-600" />;
  if (t.includes("pulga") || t.includes("garrapata") || t.includes("ácaro")) return <PawPrint className="w-8 h-8 text-emerald-600" />;
  if (t.includes("mosquito") || t.includes("aire") || t.includes("conductos") || t.includes("legionella")) return <Wind className="w-8 h-8 text-emerald-600" />;
  if (t.includes("araña")) return <ShieldAlert className="w-8 h-8 text-emerald-600" />;
  if (t.includes("rat") || t.includes("rodent")) return <ShieldAlert className="w-8 h-8 text-emerald-600" />;
  return <Shield className="w-8 h-8 text-emerald-600" />;
};

/**
 * Componente LocationPage Reutilizable
 * 
 * Renderiza páginas de ubicación dinámicamente con contenido hiper-local
 * Estructura: /control-de-plagas-[barrio]
 */

interface LocationPageProps {
  barrio: string;
  h1: string;
  metaDescription: string;
  introParrafo: string;
  bloqueConfianza: string;
  serviciosEspecificos: Array<{
    titulo: string;
    descripcion: string;
    items: string[];
  }>;
  ctaText: string;
  ctaUrgencia?: boolean;
  trustBadges: string[];
  layoutVariant?: 'modern' | 'simple';
  textoSeo?: string;
  seoSections?: Array<{ title: string; content: string; icon?: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  zonasCercanas?: Array<{ nombre: string; slug: string }>;
  mapEmbedUrl?: string;
}

export default function LocationPage({
  barrio,
  h1,
  metaDescription,
  introParrafo,
  bloqueConfianza,
  serviciosEspecificos,
  ctaText,
  ctaUrgencia = false,
  trustBadges,
  layoutVariant = 'modern',
  textoSeo,
  seoSections,
  faqs,
  zonasCercanas,
  mapEmbedUrl,
}: LocationPageProps) {
  // Obtener todos los servicios del sistema para mostrar el catálogo completo
  // Filtramos para mostrar solo los 6-9 más relevantes y evitar una lista excesiva
  const priorityServices = [
    "Control de Cucarachas",
    "Control de Chinches", 
    "Control de Termitas",
    "Control de Avispas",
    "Desratización Integral",
    "Control de Hormigas",
    "Desinfección de Patógenos",
    "Auditoría de Legionella",
    "Control de Pulgas y Ácaros"
  ];

  const allServices = serviceCategoriesData
    .flatMap(category => category.servicios)
    .filter(service => priorityServices.includes(service.titulo))
    .sort((a, b) => priorityServices.indexOf(a.titulo) - priorityServices.indexOf(b.titulo));

  // Actualizar meta tags dinámicamente y resetear scroll
  useEffect(() => {
    // Scroll al inicio al cargar la página
    window.scrollTo(0, 0);

    document.title = `${h1} | Sierra Guard`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", metaDescription);
    }

    // Schema Markup JSON-LD LocalBusiness
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: `Sierra Guard - Control de Plagas en ${barrio}`,
      description: metaDescription,
      url: `https://sierraguard.es/control-de-plagas-${barrio.toLowerCase().replace(/\s+/g, "-")}`,
      telephone: "+34921234567",
      address: {
          "@type": "PostalAddress",
          streetAddress: "C. de José Zorrilla, 132",
          postalCode: "40002",
          addressLocality: barrio,
          addressRegion: "Segovia",
          addressCountry: "ES",
        },
      areaServed: {
        "@type": "City",
        name: barrio,
      },
      priceRange: "$$",
    };

    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.textContent = JSON.stringify(schema);
    document.head.appendChild(schemaScript);

    return () => {
      document.head.removeChild(schemaScript);
    };
  }, [h1, metaDescription, barrio]);

  if (layoutVariant === 'simple') {
    return (
      <div className="min-h-screen bg-white font-sans text-gray-900">
        <Header />
        
        {/* HERO SIMPLE REDISEÑADO - UX OPTIMIZADO */}
        <section className="relative pt-8 lg:pt-24 pb-20 px-4 overflow-hidden bg-gradient-to-br from-white via-emerald-50/30 to-white">
          {/* Elemento decorativo de fondo */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
          
          <div className="container max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Columna de Texto (7 cols) */}
              <div className="lg:col-span-7 text-left flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold text-emerald-800 bg-emerald-100 rounded-full w-fit shadow-sm">
                  <MapPin size={16} className="text-emerald-700" />
                  <span>Servicio Prioritario en {barrio}</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 text-gray-900 leading-[1.1] tracking-tight">
                  {h1}
                </h1>
                
                <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                  {introParrafo}
                </p>

                {/* Puntos de dolor / Beneficios Clave - UX Booster */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  <div className="flex items-center gap-3">
                    <div className="p-1 rounded-full bg-emerald-100 text-emerald-700">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="font-medium text-gray-800">Presupuesto Cerrado sin Sorpresas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-1 rounded-full bg-emerald-100 text-emerald-700">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="font-medium text-gray-800">Técnicos Certificados en Segovia</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-1 rounded-full bg-emerald-100 text-emerald-700">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="font-medium text-gray-800">Garantía de Eliminación</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-1 rounded-full bg-emerald-100 text-emerald-700">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="font-medium text-gray-800">Urgencias 24h Disponibles</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                   <a 
                      href="tel:+34921234567"
                      className="w-full sm:w-auto"
                   >
                      <Button 
                        size="lg" 
                        className="w-full bg-emerald-900 hover:bg-emerald-950 text-white font-bold text-lg lg:text-xl h-14 lg:h-16 px-8 lg:px-10 rounded-xl shadow-lg hover:shadow-emerald-900/20 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1"
                      >
                        <Phone size={22} />
                        Llamar Ahora
                      </Button>
                   </a>

                   <Link href="/calculadora">
                      <Button 
                        size="lg"
                        variant="outline"
                        className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 h-14 lg:h-16 rounded-xl border-2 border-gray-200 hover:border-emerald-700 hover:bg-emerald-50 text-gray-700 hover:text-emerald-800 font-bold text-lg transition-all"
                      >
                        <Calculator size={22} />
                        Calculadora de Presupuestos
                      </Button>
                   </Link>
                </div>
                
                <p className="mt-4 text-sm text-gray-500 flex items-center gap-2">
                  <span className="flex text-yellow-500">★★★★★</span>
                  <span className="font-medium">4.9/5</span> valorado por clientes en Segovia
                </p>
              </div>
              
              {/* Columna de Imagen (5 cols) */}
              <div className="lg:col-span-5 relative mt-10 lg:mt-0">
                <div className="relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <img 
                    src="/images/como-prevenir-plagas-en-casa-segovia.jpeg" 
                    alt={`Control de Plagas en ${barrio}`}
                    className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Badge Flotante sobre Imagen */}
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50 flex items-center gap-4">
                      <div className="bg-emerald-100 p-3 rounded-full text-emerald-700">
                         <Shield size={24} />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg">Protección Total</p>
                        <p className="text-sm text-gray-600">Servicio activo en {barrio}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Elemento decorativo detrás de la imagen */}
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-emerald-200 rounded-3xl -z-10 hidden lg:block"></div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICIOS LISTA - PREMIUM DESIGN */}
        <section className="py-20 px-4 bg-gray-50/50 border-y border-gray-200">
          <div className="container max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-12 text-gray-900 text-center">Servicios de Control de Plagas en {barrio}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allServices.map((servicio, idx) => (
                <Card key={idx} className="group bg-white hover:bg-gradient-to-b hover:from-white hover:to-emerald-50/30 transition-all duration-500 border-slate-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 overflow-hidden relative h-full flex flex-col hover:-translate-y-1">
                  
                  {/* Decorative top accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardHeader className="pb-4 relative">
                    {/* Icon Container with Glass/Gradient feel */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-emerald-500/10 transition-all duration-500">
                       {getServiceIcon(servicio.titulo)}
                    </div>
                    
                    <CardTitle className="text-xl lg:text-2xl font-bold mb-3 text-slate-800 group-hover:text-emerald-700 transition-colors">
                      {servicio.titulo}
                    </CardTitle>
                    
                    <CardDescription className="text-base lg:text-lg text-slate-600 group-hover:text-slate-700">
                      {servicio.descripcion}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 relative mt-auto">
                    <ul className="space-y-3">
                      {servicio.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm lg:text-base text-slate-500 group-hover:text-slate-600 transition-colors">
                          <div className="mt-0.5 min-w-[18px] h-[18px] rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 size={12} className="text-emerald-600" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/#servicios">
                <Button 
                  variant="outline" 
                  className="group relative border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white font-bold text-lg lg:text-xl px-10 lg:px-12 py-6 lg:py-8 h-auto rounded-xl transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex items-center gap-3 mx-auto"
                >
                  Ver todos los servicios
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>



        {/* POR QUÉ ELEGIRNOS */}
        <section className="py-16 px-4 bg-gray-100">
          <div className="container max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-gray-900">¿Por qué elegir nuestra empresa de control de plagas en {barrio}?</h2>
            <div className="space-y-8">
               <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">{bloqueConfianza}</p>
               <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                 {trustBadges.map((badge, idx) => (
                   <li key={idx} className="flex items-center gap-3 bg-white p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                     <div className="bg-emerald-50 p-2 rounded-full">
                        <CheckCircle2 className="text-emerald-600 flex-shrink-0" size={20} />
                     </div>
                     <span className="font-semibold text-gray-800">{badge}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </section>

        {/* CTA INTERMEDIO */}
        <section className="py-16 px-4 bg-emerald-900 text-white text-center">
          <div className="container max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">¿Problemas de plagas en {barrio}?</h2>
            <p className="text-xl lg:text-2xl mb-8 text-emerald-50">Actuamos rápido. Presupuesto sin compromiso.</p>
            <a href="tel:+34921234567">
              <Button 
                  size="lg" 
                  className="bg-white text-emerald-900 hover:bg-gray-100 font-bold text-lg lg:text-xl h-14 lg:h-16 px-8 lg:px-10 rounded shadow-lg w-full sm:w-auto"
               >
                  <Phone className="mr-2" size={20} />
                  Llamar Ahora
               </Button>
            </a>
          </div>
        </section>

        {/* FAQ */}
        <FaqSection 
          faqs={faqs || []} 
          bgColor="bg-white"
        />

        {/* CONTACT FORM SIMPLE */}
        <section id="contact-form" className="py-12 px-4 bg-white">
           <div className={`container mx-auto border border-gray-200 p-6 sm:p-8 rounded-sm shadow-sm bg-gray-50 ${mapEmbedUrl ? 'max-w-7xl' : 'max-w-4xl'}`}>
              <div className={mapEmbedUrl ? 'grid grid-cols-1 md:grid-cols-2 gap-8 items-start' : ''}>
                {/* Columna Izquierda: Contacto Directo */}
                <div className="flex flex-col gap-6">
                  <div className="text-center md:text-left mb-2">
                    <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-2">Contactar con Sierra Guard</h2>
                    <p className="text-gray-600 lg:text-lg">Estamos disponibles para atenderte.</p>
                  </div>

                  {/* Sección Teléfono */}
                  <a href="tel:+34921234567" className="group block">
                    <div className="bg-white border-2 border-emerald-900 rounded-xl p-4 shadow-sm hover:shadow-md transition-all group-hover:-translate-y-1 flex items-center gap-4">
                      <div className="bg-emerald-900 p-3 rounded-full text-white">
                        <Phone size={24} />
                      </div>
                      <div className="text-left">
                         <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Llámanos Ahora</span>
                         <span className="block text-xl sm:text-2xl font-bold text-emerald-900">+34 921 234 567</span>
                      </div>
                    </div>
                  </a>

                  {/* Sección Email */}
                  <a href="mailto:contacto@controldeplagassegovia.com" className="group block">
                    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all group-hover:-translate-y-1 flex items-center gap-4">
                       <div className="bg-gray-100 p-3 rounded-full text-gray-600 group-hover:bg-emerald-900 group-hover:text-white transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                       </div>
                       <div className="text-left overflow-hidden">
                          <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Escríbenos un Email</span>
                          <span className="block text-base sm:text-lg font-bold text-gray-800 truncate">contacto@controldeplagassegovia.com</span>
                       </div>
                    </div>
                  </a>
                </div>

                {/* Columna Derecha: Mapa (si existe) */}
                {mapEmbedUrl && (
                  <div className="w-full h-[300px] md:h-[400px] rounded-[16px] overflow-hidden shadow-md bg-gray-200">
                    <iframe 
                      src={mapEmbedUrl}
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Mapa de ubicación en ${barrio}`}
                    />
                  </div>
                )}
              </div>
           </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[500px] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container max-w-7xl relative z-10">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-2">
              <MapPin className="text-primary" size={24} />
              <span className="text-lg lg:text-xl font-semibold text-primary">{barrio}, Segovia</span>
            </div>

            <h1 className="text-3xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              {h1}
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
              {introParrafo}
            </p>

            {/* CTA Magnético */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                 href="tel:+34921234567"
                 className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className={`w-full ${
                    ctaUrgencia
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-emerald-600 hover:bg-emerald-700"
                  } text-white font-bold text-lg lg:text-xl h-14 lg:h-16 px-8 lg:px-10 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1`}
                >
                  <Phone className="mr-2" size={20} />
                  Llamar Ahora
                </Button>
              </a>

              <Link href="/calculadora">
                <Button 
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 h-14 lg:h-16 rounded-xl border-2 border-emerald-600/20 hover:border-emerald-600 hover:bg-emerald-50 text-emerald-900 font-bold text-lg transition-all"
                >
                  <Calculator size={20} />
                  Calculadora
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-8">
              {trustBadges.slice(0, 2).map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 size={20} className="text-primary" />
                  <span className="font-semibold text-sm">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== BLOQUE DE CONFIANZA ===== */}
      <section className="py-16 bg-primary/5 border-t-4 border-primary/20">
        <div className="container max-w-7xl">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            ¿Por qué elegir nuestra empresa de control de plagas en {barrio}?
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            {bloqueConfianza}
          </p>
        </div>
      </section>

      {/* ===== SERVICIOS ESPECÍFICOS ===== */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground">
            Servicios de Control de Plagas en {barrio}
          </h2>
          <p className="text-center text-muted-foreground lg:text-xl mb-12 max-w-2xl mx-auto">
            Soluciones integrales para todo tipo de plagas en {barrio}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((servicio, idx) => (
              <Card key={idx} className="group bg-white hover:bg-gradient-to-b hover:from-white hover:to-emerald-50/30 transition-all duration-500 border-slate-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 overflow-hidden relative h-full flex flex-col hover:-translate-y-1">
                
                {/* Decorative top accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="pb-4 relative">
                  {/* Icon Container with Glass/Gradient feel */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-emerald-500/10 transition-all duration-500">
                      {getServiceIcon(servicio.titulo)}
                  </div>
                  
                  <CardTitle className="text-xl lg:text-2xl font-bold mb-3 text-slate-800 group-hover:text-emerald-700 transition-colors">
                    {servicio.titulo}
                  </CardTitle>
                  
                  <CardDescription className="text-base lg:text-lg text-slate-600 group-hover:text-slate-700">
                    {servicio.descripcion}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 relative mt-auto">
                  <ul className="space-y-3">
                    {servicio.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm lg:text-base text-slate-500 group-hover:text-slate-600 transition-colors">
                        <div className="mt-0.5 min-w-[18px] h-[18px] rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 size={12} className="text-emerald-600" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/#servicios">
              <Button 
                variant="outline" 
                className="group relative border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white font-bold text-lg lg:text-xl px-10 lg:px-12 py-6 lg:py-8 h-auto rounded-xl transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex items-center gap-3 mx-auto"
              >
                Ver todos los servicios
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIOS LOCALES ===== */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground">
            Lo que dicen nuestros clientes en {barrio}
          </h2>
          <p className="text-center text-muted-foreground lg:text-xl mb-12">
            Testimonios reales de clientes satisfechos en tu barrio.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                nombre: "María García",
                ubicacion: barrio,
                testimonio: "Excelente servicio. Llegaron rápido y resolvieron el problema de cucarachas en mi cocina. Muy profesionales.",
                rating: 5,
              },
              {
                nombre: "Carlos López",
                ubicacion: barrio,
                testimonio: "Llevaba meses con plagas y Sierra Guard las eliminó completamente. Garantía cumplida al 100%.",
                rating: 5,
              },
              {
                nombre: "Ana Martínez",
                ubicacion: barrio,
                testimonio: "Muy discretos, sin olores químicos. Mi familia y mascotas están seguros. Los recomiendo.",
                rating: 5,
              },
              {
                nombre: "Juan Rodríguez",
                ubicacion: barrio,
                testimonio: "Certificados CEPA, precio transparente, sin sorpresas. Así es como debe ser el servicio profesional.",
                rating: 5,
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground lg:text-lg mb-4 italic">"{item.testimonio}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground">{item.nombre}</span>
                  <span className="text-sm text-muted-foreground">{item.ubicacion}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUST BADGES COMPLETO ===== */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-7xl">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
            Garantías y Certificaciones
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200">
                <Award className="text-primary mt-1 flex-shrink-0" size={20} />
                <span className="font-semibold text-foreground lg:text-lg">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACTO DIRECTO ===== */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground">
            Contactar con Sierra Guard
          </h2>
          <p className="text-center text-muted-foreground lg:text-xl mb-12">
            Estamos disponibles para atenderte.
          </p>

          <div className="flex flex-col gap-6">
            {/* Sección Teléfono */}
            <a href="tel:+34921234567" className="group block">
              <div className="bg-white border-2 border-emerald-900 rounded-xl p-4 shadow-sm hover:shadow-md transition-all group-hover:-translate-y-1 flex items-center gap-4">
                <div className="bg-emerald-900 p-3 rounded-full text-white">
                  <Phone size={24} />
                </div>
                <div className="text-left">
                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Llámanos Ahora</span>
                    <span className="block text-xl sm:text-2xl lg:text-3xl font-bold text-emerald-900">+34 921 234 567</span>
                </div>
              </div>
            </a>

            {/* Sección Email */}
            <a href="mailto:contacto@controldeplagassegovia.com" className="group block">
              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all group-hover:-translate-y-1 flex items-center gap-4">
                  <div className="bg-gray-100 p-3 rounded-full text-gray-600 group-hover:bg-emerald-900 group-hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div className="text-left overflow-hidden">
                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Escríbenos un Email</span>
                    <span className="block text-base sm:text-lg lg:text-xl font-bold text-gray-800 truncate">contacto@controldeplagassegovia.com</span>
                  </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}
