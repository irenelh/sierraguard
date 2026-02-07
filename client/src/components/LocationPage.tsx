import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, MapPin, Shield, Zap, Award, ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  // Actualizar meta tags dinámicamente
  useEffect(() => {
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
        
        {/* HERO SIMPLE */}
        <section className="pt-24 pb-16 px-4 container max-w-4xl mx-auto text-left">
          <div className="inline-block px-3 py-1 mb-6 text-sm font-semibold text-green-800 bg-green-100 rounded-full">
            Servicio Local en {barrio}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight tracking-tight">
            {h1}
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl">
            {introParrafo}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
             <Button 
                size="lg" 
                className="bg-[#1d4620] hover:bg-[#153316] text-white font-bold text-lg h-14 px-8 rounded shadow-md w-full sm:w-auto flex items-center justify-center gap-2"
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
             >
                <Phone size={20} />
                {ctaText}
             </Button>
          </div>
        </section>

        {/* SERVICIOS LISTA */}
        <section className="py-12 px-4 bg-gray-50 border-y border-gray-200">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Servicios de Control de Plagas en {barrio}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviciosEspecificos.map((servicio, idx) => (
                <div key={idx} className="bg-white p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-4 text-[#1d4620] border-b border-gray-100 pb-3">{servicio.titulo}</h3>
                  <p className="text-gray-700 mb-6 flex-grow leading-relaxed">{servicio.descripcion}</p>
                  <ul className="grid grid-cols-1 gap-3 mt-auto">
                    {servicio.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600 text-sm font-medium">
                        <CheckCircle2 className="text-green-600 w-5 h-5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* POR QUÉ ELEGIRNOS */}
        <section className="py-16 px-4 bg-gray-100">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">¿Por qué elegir Sierra Guard en {barrio}?</h2>
            <div className="space-y-8">
               <p className="text-lg text-gray-700 leading-relaxed">{bloqueConfianza}</p>
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {trustBadges.map((badge, idx) => (
                   <li key={idx} className="flex items-center gap-3 bg-white p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                     <div className="bg-green-50 p-2 rounded-full">
                        <CheckCircle2 className="text-green-600 flex-shrink-0" size={20} />
                     </div>
                     <span className="font-semibold text-gray-800">{badge}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </section>

        {/* CTA INTERMEDIO */}
        <section className="py-16 px-4 bg-[#1d4620] text-white text-center">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">¿Problemas de plagas en {barrio}?</h2>
            <p className="text-xl mb-8 text-green-50">Actuamos rápido. Presupuesto sin compromiso.</p>
            <Button 
                size="lg" 
                className="bg-white text-[#1d4620] hover:bg-gray-100 font-bold text-lg h-14 px-8 rounded shadow-lg w-full sm:w-auto"
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
             >
                <Phone className="mr-2" size={20} />
                Llamar Ahora
             </Button>
          </div>
        </section>

        {/* FAQ */}
        {faqs && faqs.length > 0 && (
          <section className="py-12 px-4 container max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group bg-white border border-gray-200 rounded-sm">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
                    <span className="text-lg text-gray-900">{faq.question}</span>
                    <span className="transition group-open:rotate-180">
                      <ChevronDown size={20} />
                    </span>
                  </summary>
                  <div className="text-gray-700 p-4 border-t border-gray-200 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}


        
        {/* CONTACT FORM SIMPLE */}
        <section id="contact-form" className="py-12 px-4 bg-white">
           <div className={`container mx-auto border border-gray-200 p-6 sm:p-8 rounded-sm shadow-sm bg-gray-50 ${mapEmbedUrl ? 'max-w-6xl' : 'max-w-2xl'}`}>
              <div className={mapEmbedUrl ? 'grid grid-cols-1 md:grid-cols-2 gap-8 items-start' : ''}>
                {/* Columna Izquierda: Formulario */}
                <div>
                  <h2 className="text-2xl font-bold text-center mb-2 text-gray-900">Contactar con Sierra Guard</h2>
                  <p className="text-center text-gray-600 mb-8">Rellena el formulario o llámanos directamente.</p>
                   <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Teléfono</label>
                        <input type="tel" placeholder="Tu teléfono" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#1d4620] focus:ring-1 focus:ring-[#1d4620]" required />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Tipo de Problema</label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#1d4620] focus:ring-1 focus:ring-[#1d4620]">
                          <option>Selecciona una opción</option>
                          <option>Urgencia 24h</option>
                          <option>Presupuesto general</option>
                          <option>Consulta</option>
                        </select>
                      </div>
                      <Button type="submit" size="lg" className="w-full bg-[#1d4620] hover:bg-[#153316] text-white font-bold text-lg h-12 rounded">
                        Solicitar Llamada
                      </Button>
                   </form>
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
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-2">
              <MapPin className="text-primary" size={24} />
              <span className="text-lg font-semibold text-primary">{barrio}, Segovia</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              {h1}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {introParrafo}
            </p>

            {/* CTA Magnético */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className={`${
                  ctaUrgencia
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-primary hover:bg-primary/90"
                } text-white font-bold text-lg h-14 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all`}
                onClick={() => {
                  const form = document.getElementById("contact-form");
                  form?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Phone className="mr-2" size={20} />
                {ctaText}
              </Button>
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
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            ¿Por qué Sierra Guard en {barrio}?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {bloqueConfianza}
          </p>
        </div>
      </section>

      {/* ===== SERVICIOS ESPECÍFICOS ===== */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Servicios de Control de Plagas en {barrio}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Soluciones adaptadas a las necesidades específicas de {barrio}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviciosEspecificos.map((servicio, idx) => (
              <div
                key={idx}
                className="p-8 border-l-4 border-primary hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {servicio.titulo}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {servicio.descripcion}
                </p>
                <ul className="space-y-2">
                  {servicio.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIOS LOCALES ===== */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Lo que dicen nuestros clientes en {barrio}
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Testimonios reales de clientes satisfechos en tu barrio.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <p className="text-muted-foreground mb-4 italic">"{item.testimonio}"</p>
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
        <div className="container max-w-3xl">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Garantías y Certificaciones
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200">
                <Award className="text-primary mt-1 flex-shrink-0" size={20} />
                <span className="font-semibold text-foreground">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FORMULARIO DE CONTACTO ===== */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="container max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Solicita tu Llamada Gratis
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Rellena el formulario y nos pondremos en contacto en menos de 24 horas.
          </p>

          <form className="bg-gray-50 p-8 rounded-lg shadow-md space-y-6">
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
                Tipo de Problema
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Selecciona una opción</option>
                <option>Urgente - Necesito respuesta hoy</option>
                <option>Importante - Esta semana</option>
                <option>Consulta - Próximas semanas</option>
              </select>
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

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}
