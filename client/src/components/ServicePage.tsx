import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, Zap, Award, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import Header from "@/components/Header";

/**
 * Componente ServicePage Reutilizable
 * 
 * Renderiza páginas de servicio dinámicamente con contenido profesional
 * Incluye Schema Markup Service JSON-LD
 */

interface ServicePageProps {
  h1: string;
  metaDescription: string;
  h2Beneficios: string;
  contenidoBeneficios: string;
  h2Diferenciacion: string;
  contenidoDiferenciacion: string;
  h3Proceso: string;
  pasos: Array<{
    titulo: string;
    contenido: string;
  }>;
  publicosObjetivo?: Array<{
    titulo: string;
    descripcion: string;
    items: string[];
  }>;
  ctaText: string;
  ctaUrgencia?: boolean;
  schemaMarkup: Record<string, any>;
}

export default function ServicePage({
  h1,
  metaDescription,
  h2Beneficios,
  contenidoBeneficios,
  h2Diferenciacion,
  contenidoDiferenciacion,
  h3Proceso,
  pasos,
  publicosObjetivo,
  ctaText,
  ctaUrgencia = false,
  schemaMarkup,
}: ServicePageProps) {
  // Actualizar meta tags dinámicamente
  useEffect(() => {
    document.title = `${h1.split("|")[0].trim()} | Sierra Guard`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", metaDescription);
    }

    // Agregar Schema Markup JSON-LD
    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.textContent = JSON.stringify(schemaMarkup);
    document.head.appendChild(schemaScript);

    return () => {
      document.head.removeChild(schemaScript);
    };
  }, [h1, metaDescription, schemaMarkup]);

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HEADER ===== */}
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[500px] flex items-center pt-8 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-6">
              {h1}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {metaDescription}
            </p>

            {/* CTA Magnético */}
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
        </div>
      </section>

      {/* ===== BENEFICIOS RÁPIDOS ===== */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-bold text-foreground mb-6">{h2Beneficios}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {contenidoBeneficios}
          </p>
        </div>
      </section>

      {/* ===== DIFERENCIACIÓN ===== */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            {h2Diferenciacion}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {contenidoDiferenciacion}
          </p>
        </div>
      </section>

      {/* ===== PROCESO PASO A PASO ===== */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            {h3Proceso}
          </h2>

          <div className="space-y-8 mt-12">
            {pasos.map((paso, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white font-bold text-lg">
                    {idx + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {paso.titulo}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {paso.contenido}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PÚBLICOS OBJETIVO ===== */}
      {publicosObjetivo && publicosObjetivo.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
              Servicios Especializados por Público
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {publicosObjetivo.map((publico, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-white rounded-lg border-l-4 border-primary shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {publico.titulo}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {publico.descripcion}
                  </p>
                  <ul className="space-y-2">
                    {publico.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-primary mt-0.5 flex-shrink-0"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== FORMULARIO DE CONTACTO ===== */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="container max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Solicita tu Consulta Gratis
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
              Solicitar Consulta Gratis
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Protegemos tu privacidad. Nunca compartimos tus datos.
            </p>
          </form>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-foreground text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Sierra Guard</h4>
              <p className="text-gray-300 text-sm">
                Control profesional de plagas en Segovia y alrededores.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="tel:+34921234567" className="hover:text-white transition">
                    +34 921 234 567
                  </a>
                </li>
                <li>
                  <a href="mailto:info@sierraguard.es" className="hover:text-white transition">
                    info@sierraguard.es
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="/servicios/desinsectacion-cucarachas" className="hover:text-white transition">
                    Desinsectación
                  </a>
                </li>
                <li>
                  <a href="/servicios/desratizacion-ratas" className="hover:text-white transition">
                    Desratización
                  </a>
                </li>
                <li>
                  <a href="/servicios/desinfeccion-legionella" className="hover:text-white transition">
                    Desinfección
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-sm text-gray-400">
              © 2026 Sierra Guard. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
