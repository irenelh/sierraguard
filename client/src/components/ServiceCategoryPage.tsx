import { 
  Phone, 
  CheckCircle2, 
  Star,
  Bug, 
  ShieldAlert, 
  Home, 
  AlertTriangle, 
  PawPrint, 
  Wind, 
  Target, 
  Search,
  Shield,
  Quote,
  ShieldCheck,
  Award,
  Clock,
  BadgeCheck,
  Calculator,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FaqSection from "@/components/FaqSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import { ServiceCategory } from "@/lib/serviceCategoriesData";
import { useEffect } from "react";
import { Link } from "wouter";

const getServiceIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("cucaracha") || t.includes("insecto")) return <Bug className="w-8 h-8 text-primary" />;
  if (t.includes("chinche")) return <Search className="w-8 h-8 text-primary" />;
  if (t.includes("termita") || t.includes("madera") || t.includes("carcoma")) return <Home className="w-8 h-8 text-primary" />;
  if (t.includes("avispa") || t.includes("velutina")) return <AlertTriangle className="w-8 h-8 text-primary" />;
  if (t.includes("hormiga")) return <Target className="w-8 h-8 text-primary" />;
  if (t.includes("pulga") || t.includes("garrapata") || t.includes("ácaro")) return <PawPrint className="w-8 h-8 text-primary" />;
  if (t.includes("mosquito")) return <Wind className="w-8 h-8 text-primary" />;
  if (t.includes("araña")) return <ShieldAlert className="w-8 h-8 text-primary" />;
  if (t.includes("rat")) return <ShieldAlert className="w-8 h-8 text-primary" />;
  return <Shield className="w-8 h-8 text-primary" />;
};

interface ServiceCategoryPageProps {
  service: ServiceCategory;
}

export default function ServiceCategoryPage({ service }: ServiceCategoryPageProps) {
  // Update meta tags dynamically
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    document.title = `${service.h1} | Sierra Guard`;
    
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", service.metaDescription);
    } else {
      const newMetaDesc = document.createElement('meta');
      newMetaDesc.name = "description";
      newMetaDesc.content = service.metaDescription;
      document.head.appendChild(newMetaDesc);
    }

    // Update keywords
    const keywords = `${service.nombre}, control de plagas, Segovia`;
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywords);
    }

    // Update OG tags
    const updateMeta = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (element) {
        element.setAttribute("content", content);
      } else {
        element = document.createElement('meta');
        element.setAttribute("property", property);
        element.setAttribute("content", content);
        document.head.appendChild(element);
      }
    };

    updateMeta("og:title", service.h1);
    updateMeta("og:description", service.metaDescription);
    updateMeta("og:type", "website");

    // Schema Markup JSON-LD
    const graph: any[] = [
      {
        "@type": "Service",
        serviceType: service.nombre,
        provider: {
          "@type": "LocalBusiness",
          name: "Sierra Guard",
          telephone: "+34921234567",
          address: {
              "@type": "PostalAddress",
              streetAddress: "C. de José Zorrilla, 132",
              postalCode: "40002",
              addressLocality: "Segovia",
              addressRegion: "Segovia",
              addressCountry: "ES"
          }
        },
        areaServed: {
          "@type": "City",
          name: "Segovia"
        },
        description: service.metaDescription,
        url: `https://sierraguard.es/servicios/${service.slug}`
      }
    ];

    if (service.faqs && service.faqs.length > 0) {
      graph.push({
        "@type": "FAQPage",
        mainEntity: service.faqs.map(faq => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      });
    }

    const schema = {
      "@context": "https://schema.org",
      "@graph": graph
    };

    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.textContent = JSON.stringify(schema);
    document.head.appendChild(schemaScript);

    return () => {
      document.head.removeChild(schemaScript);
    };

  }, [service]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* ===== HERO SECTION (Premium Dark) ===== */}
      <section className="relative pt-16 pb-8 lg:pt-12 lg:pb-6 overflow-hidden bg-slate-900">
        {/* Background Gradient & Blobs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        </div>

        <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Text (58% width -> col-span-7) */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Servicio Profesional en Segovia
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                {service.h1}
              </h1>
              
              <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
                {service.intro}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+34921234567" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg h-14 px-8 rounded-xl shadow-lg shadow-emerald-500/20 transition-all hover:scale-105"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Llamar ahora
                  </Button>
                </a>
                
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-lg h-14 px-8 rounded-xl backdrop-blur-sm transition-all hover:scale-105"
                  onClick={() => {
                    const form = document.getElementById("contact-form");
                    form?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Pedir Presupuesto
                </Button>
              </div>
            </div>

            {/* Right Column: Image (42% width -> col-span-5) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800/50 group">
                {/* Glass overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10" />
                
                {service.image ? (
                  <img 
                    src={service.image} 
                    alt={service.h1}
                    className="w-full h-[350px] lg:h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-[350px] lg:h-[400px] bg-slate-800 flex items-center justify-center">
                    <ShieldCheck className="w-32 h-32 text-slate-700" />
                  </div>
                )}
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-500 rounded-lg">
                      <ShieldCheck className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Garantía Total</p>
                      <p className="text-emerald-400 text-xs">Certificado Oficial</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICIOS ESPECÍFICOS ===== */}
      <section className="py-20 bg-gray-50/50">
        <div className="container max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">Soluciones Específicas de {service.nombre} para Cada Plaga</h2>
            <p className="text-lg lg:text-xl text-muted-foreground">
              Identificamos y tratamos cada tipo de infestación con protocolos específicos y productos certificados.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.servicios.map((servicio, index) => (
              <Card key={index} className="group bg-white hover:bg-gradient-to-b hover:from-white hover:to-emerald-50/30 transition-all duration-500 border-slate-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 overflow-hidden relative h-full flex flex-col hover:-translate-y-1">
                
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
                  
                  <CardDescription className="text-base lg:text-lg line-clamp-2 text-slate-600 group-hover:text-slate-700">
                    {servicio.descripcion}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 relative">
                  <ul className="space-y-3 mb-6">
                    {servicio.items.slice(0, 3).map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-sm lg:text-base text-slate-500 group-hover:text-slate-600 transition-colors">
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
        </div>
      </section>

      {/* ===== URGENCY CTA BANNER ===== */}
      <section className="bg-emerald-900 py-12 border-y border-emerald-800">
        <div className="container max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
             <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-sm font-bold animate-pulse mb-2">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  Servicio de Urgencias 24h
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white">¿Tienes una urgencia con {service.nombre.toLowerCase()}?</h3>
                <p className="text-emerald-100 text-lg">Nuestros técnicos están listos para actuar. Respuesta inmediata.</p>
             </div>
             <a href="tel:+34921234567" className="flex-shrink-0">
               <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-xl h-16 px-10 rounded-xl shadow-lg hover:shadow-white/10 transition-all transform hover:-translate-y-1">
                 <Phone className="mr-3 h-6 w-6 text-emerald-600" />
                 Llamar: 921 234 567
               </Button>
             </a>
          </div>
        </div>
      </section>

      {/* ===== CALCULADORA CTA ===== */}
      <section className="py-12 bg-primary text-white">
        <div className="container max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl lg:text-3xl font-bold mb-2">¿Quieres saber cuánto cuesta tu tratamiento de {service.nombre.toLowerCase()}?</h2>
            <p className="text-white/90 text-lg lg:text-xl">
              Obtén un presupuesto estimado en menos de 1 minuto con nuestra calculadora online.
            </p>
          </div>
          <Link href="/calculadora">
            <Button size="lg" variant="secondary" className="font-bold text-white hover:text-white/90 min-w-[200px] h-14 lg:h-16 text-lg lg:text-xl shadow-lg">
              <Calculator className="mr-2 h-6 w-6" />
              Calcular Presupuesto
            </Button>
          </Link>
        </div>
      </section>

      {/* ===== BLOQUE DE CONFIANZA ===== */}
      {/* SECCIÓN ELIMINADA POR PETICIÓN DEL USUARIO */}
      {/* 
      <section className="py-12 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <Shield className="w-96 h-96 absolute -top-20 -left-20 rotate-12" />
          <Shield className="w-96 h-96 absolute -bottom-20 -right-20 -rotate-12" />
        </div>
        <div className="container max-w-4xl relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
            <ShieldAlert className="w-6 h-6 text-white mr-3" />
            <span className="font-semibold tracking-wide uppercase text-xs">Garantía Sierra Guard</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-4 leading-tight">
            Más que un servicio, <span className="text-emerald-200">tranquilidad garantizada</span>
          </h2>
          <p className="text-sm md:text-base font-light leading-relaxed text-white">
            "{service.bloqueConfianza}"
          </p>
        </div>
      </section>
      */}

    {/* ===== BENEFICIOS / POR QUÉ ELEGIRNOS ===== */}
      <section className="py-16 bg-primary/5">
        <div className="container max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              ¿Por qué elegir nuestro servicio de {service.nombre} en Segovia?
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Nos diferenciamos por ofrecer un servicio integral que prioriza tu seguridad y resultados duraderos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: CheckCircle2, text: "Respuesta en menos de 24 horas" },
              { icon: ShieldCheck, text: "Métodos seguros para familias y mascotas" },
              { icon: Award, text: "Certificado CEPA" },
              { icon: Clock, text: "Horarios flexibles adaptados a ti" },
              { icon: BadgeCheck, text: "Técnicos cualificados y certificados" },
              { icon: Star, text: "Garantía 100% de eliminación" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-5 bg-white rounded-xl border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
                <div className="w-12 h-12 bg-primary/10 rounded-full shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base lg:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.text}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CÓMO LO HACEMOS (UX Mejorado) ===== */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white border-y border-gray-100 overflow-hidden">
        <div className="container max-w-7xl">
          <div className="text-center mb-20">
            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold tracking-wide uppercase mb-4">
              Metodología Sierra Guard
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Nuestro Proceso de Trabajo
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Un sistema científico y probado en 5 pasos para eliminar tu problema de raíz y prevenir futuras reapariciones.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop Only - LG+) */}
            <div className="hidden lg:block absolute top-12 left-[10%] w-[80%] h-0.5 bg-gradient-to-r from-transparent via-emerald-200 to-transparent -z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
              {service.proceso.map((paso, index) => (
                <div key={paso.paso} className="relative z-10 flex flex-col items-center text-center group">
                  {/* Number Badge */}
                  <div className="w-24 h-24 bg-white border-4 border-gray-50 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-emerald-500 group-hover:shadow-emerald-100 group-hover:shadow-xl transition-all duration-500 relative">
                    <span className="text-3xl font-extrabold text-slate-300 group-hover:text-emerald-600 transition-colors duration-300">
                      {paso.paso}
                    </span>
                    {/* Active Dot */}
                    <div className="absolute -bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-sm"></div>
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 w-full h-full flex flex-col items-center">
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                      {paso.titulo}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {paso.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIOS ===== */}
      {service.testimonios.length > 0 && (
        <section className="py-24 bg-white">
          <div className="container max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Lo Que Dicen Nuestros Clientes</h2>
              <p className="text-lg text-muted-foreground">La satisfacción de nuestros clientes es nuestra mejor garantía.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.testimonios.map((testimonio, index) => (
                <Card key={index} className="bg-gray-50 border-gray-100 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className="absolute top-4 right-6 text-primary/10 group-hover:text-primary/20 transition-colors">
                    <Quote size={60} />
                  </div>
                  <CardHeader className="pb-2 relative z-10">
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: testimonio.rating }).map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="pb-6 relative z-10">
                    <p className="text-foreground text-lg italic leading-relaxed">"{testimonio.texto}"</p>
                  </CardContent>
                  <CardFooter className="relative z-10 border-t border-gray-100 pt-4 mt-auto">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-10 w-10 border border-gray-200 bg-white">
                        <AvatarFallback className="bg-primary/10 text-primary font-bold">
                          {testimonio.nombre.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-foreground text-sm">{testimonio.nombre}</p>
                        <p className="text-xs text-muted-foreground">{testimonio.tipo}</p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== PREGUNTAS FRECUENTES ===== */}
      <FaqSection 
        faqs={service.faqs || []}
        description={`Resolvemos tus dudas sobre nuestro servicio de ${service.nombre.toLowerCase()}.`}
      />

      {/* ===== CTA FINAL ===== */}
      <section className="py-12 bg-primary text-white relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
        
        <div className="container max-w-4xl text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Listo para Resolver tu Problema?</h2>
          <p className="text-lg md:text-xl text-emerald-100 mb-6 max-w-2xl mx-auto leading-relaxed">
            Llámanos ahora y recibe una consulta gratis. <br/>Respuesta garantizada en 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+34921234567" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full bg-white text-emerald-600 hover:bg-emerald-50 font-bold text-lg h-14 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Phone className="mr-2" size={20} />
                Llamar: 921 234 567
              </Button>
            </a>
            
            <a href="mailto:contacto@controldeplagassegovia.com" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8 rounded-xl transition-all duration-300"
              >
                Pedir Presupuesto
              </Button>
            </a>
          </div>
        </div>
      </section>
      <Footer />
      
      {/* Sticky Call Button for Mobile */}
      <StickyCallButton />
    </div>
  );
}
