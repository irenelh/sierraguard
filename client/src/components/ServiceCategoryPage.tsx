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
  Calculator
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
      {/* ===== HERO SECTION ===== */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-primary/5 border-b border-border">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text */}
            <div className="text-left">
              <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {service.h1}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {service.intro}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-bold text-lg h-14 px-8 rounded-lg"
                  onClick={() => {
                    const form = document.getElementById("contact-form");
                    form?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <Phone className="mr-2" size={20} />
                  {service.cta}
                </Button>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="relative h-[300px] lg:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
              {service.image ? (
                <img 
                  src={service.image} 
                  alt={service.h1}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="w-32 h-32 text-primary/20" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICIOS ESPECÍFICOS ===== */}
      <section className="py-20 bg-gray-50/50">
        <div className="container max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Soluciones Específicas para Cada Plaga</h2>
            <p className="text-lg text-muted-foreground">
              Identificamos y tratamos cada tipo de infestación con protocolos específicos y productos certificados.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.servicios.map((servicio, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50 overflow-hidden relative h-full flex flex-col">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                     {getServiceIcon(servicio.titulo)}
                  </div>
                  <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {servicio.titulo}
                  </CardTitle>
                  <CardDescription className="text-base line-clamp-2">
                    {servicio.descripcion}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {servicio.items.slice(0, 3).map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                    {servicio.items.length > 3 && (
                      <li className="text-xs text-primary font-medium pt-2 pl-7 flex items-center gap-1">
                        <Star size={12} className="fill-current" />
                        <span>{servicio.items.length - 3} características más</span>
                      </li>
                    )}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CALCULADORA CTA ===== */}
      <section className="py-12 bg-primary text-white">
        <div className="container max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">¿Quieres saber cuánto cuesta tu tratamiento de {service.nombre.toLowerCase()}?</h2>
            <p className="text-white/90 text-lg">
              Obtén un presupuesto estimado en menos de 1 minuto con nuestra calculadora online.
            </p>
          </div>
          <Link href="/calculadora">
            <Button size="lg" variant="secondary" className="font-bold text-primary hover:text-primary/90 min-w-[200px] h-14 text-lg shadow-lg">
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
            Más que un servicio, <span className="text-green-200">tranquilidad garantizada</span>
          </h2>
          <p className="text-sm md:text-base font-light leading-relaxed text-white">
            "{service.bloqueConfianza}"
          </p>
        </div>
      </section>
      */}

    {/* ===== BENEFICIOS / POR QUÉ ELEGIRNOS ===== */}
      <section className="py-16 bg-primary/5">
        <div className="container max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Por qué elegir nuestro servicio de {service.nombre} en Segovia?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.text}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CÓMO LO HACEMOS ===== */}
      <section className="py-24 bg-gray-50/50 border-y border-border overflow-hidden">
        <div className="container max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestro Proceso de Trabajo</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un sistema probado y eficaz para eliminar tu problema de raíz y prevenir futuras reapariciones.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              {service.proceso.map((paso, index) => (
                <div key={paso.paso} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-24 h-24 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-primary/30 group-hover:shadow-lg transition-all duration-300">
                    <span className="text-3xl font-bold text-primary">{paso.paso}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {paso.titulo}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {paso.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIOS ===== */}
      {service.testimonios.length > 0 && (
        <section className="py-24 bg-white">
          <div className="container max-w-6xl">
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
                        <p className="text-xs text-muted-foreground">{testimonio.empresa}</p>
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
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 bg-gray-50/50">
          <div className="container max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Preguntas Frecuentes</h2>
              <p className="text-lg text-muted-foreground">
                Resolvemos tus dudas sobre nuestro servicio de {service.nombre.toLowerCase()}.
              </p>
            </div>
            
            <Accordion type="single" collapsible className="w-full bg-white rounded-xl shadow-sm border border-gray-100 px-6 py-2">
              {service.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b-gray-100 last:border-0">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* ===== CTA FINAL ===== */}
      <section className="py-12 bg-primary text-white relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
        
        <div className="container max-w-4xl text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Listo para Resolver tu Problema?</h2>
          <p className="text-lg md:text-xl text-green-100 mb-6 max-w-2xl mx-auto leading-relaxed">
            Llámanos ahora y recibe una consulta gratis. <br/>Respuesta garantizada en 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 font-bold text-lg h-12 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => {
                const form = document.getElementById("contact-form");
                form?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Phone className="mr-2" size={20} />
              {service.cta}
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
