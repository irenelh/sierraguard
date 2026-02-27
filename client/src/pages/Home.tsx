import { Button } from "@/components/ui/button";
import { Phone, Calculator, Star, ShieldCheck, Sparkles } from "lucide-react";
import { useEffect, useState, lazy, Suspense } from "react";
import { Link, useLocation } from "wouter";
import Header from "@/components/Header";

const Footer = lazy(() => import("@/components/Footer"));
const FaqSection = lazy(() => import("@/components/FaqSection"));
const ServicesSection = lazy(() => import("@/components/home/ServicesSection"));
const CalculatorCTASection = lazy(() => import("@/components/home/CalculatorCTASection"));
const CustomerTypesSection = lazy(() => import("@/components/home/CustomerTypesSection"));
const ZonesSection = lazy(() => import("@/components/home/ZonesSection"));
const WhyChooseUsSection = lazy(() => import("@/components/home/WhyChooseUsSection"));
const ProcessSection = lazy(() => import("@/components/home/ProcessSection"));
const ContactSection = lazy(() => import("@/components/home/ContactSection"));

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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>

      {/* ===== HERO SECTION ===== */}
      <section
        className="relative min-h-[550px] lg:min-h-[650px] flex items-center overflow-hidden py-12 lg:py-0 group isolate"
      >
        <img
          src="/images/control-de-plagas-en-segovia-imagen.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover -z-10 object-[center_20%]"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width="1920"
          height="1080"
        />
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

      {/* ===== SERVICIOS PRINCIPALES ===== */}
      <div id="servicios" className="scroll-mt-32">
        <Suspense fallback={<div className="min-h-[800px] bg-gray-50" />}>
          <ServicesSection />
        </Suspense>
      </div>

      {/* ===== CALCULADORA CTA ===== */}
      <Suspense fallback={<div className="min-h-[200px] bg-primary" />}>
        <CalculatorCTASection />
      </Suspense>

      {/* ===== NEGOCIOS Y PARTICULARES ===== */}
      <Suspense fallback={<div className="min-h-[600px] bg-primary/5" />}>
        <CustomerTypesSection />
      </Suspense>

      {/* ===== ZONAS DE SERVICIO (PREMIUM GRID) ===== */}
      <div id="zonas-servicio">
        <Suspense fallback={<div className="min-h-[400px] bg-emerald-900" />}>
          <ZonesSection />
        </Suspense>
      </div>

      {/* ===== POR QUÉ ELEGIRNOS ===== */}
      <Suspense fallback={<div className="min-h-[600px] bg-white" />}>
        <WhyChooseUsSection />
      </Suspense>

      {/* ===== CÓMO CONTRATAR (PROCESO) ===== */}
      <Suspense fallback={<div className="min-h-[500px] bg-emerald-900" />}>
        <ProcessSection />
      </Suspense>

      {/* ===== CONTACTO ===== */}
      <div id="contact-form">
        <Suspense fallback={<div className="min-h-[600px] bg-gray-50" />}>
          <ContactSection />
        </Suspense>
      </div>

      {/* ===== FAQ SECTION ===== */}
      <Suspense fallback={<div className="min-h-[400px]" />}>
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
      </Suspense>

      </main>
      <Suspense fallback={<div className="min-h-[300px]" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
