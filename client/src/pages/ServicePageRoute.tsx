import { useParams } from "wouter";
import ServicePage from "@/components/ServicePage";
import NotFound from "./NotFound";
import { getServicePageData } from "@/lib/servicePagesData";

/**
 * Página de ruta dinámica para páginas de servicio
 * URL: /servicios/:slug
 * Ejemplo: /servicios/desinsectacion-cucarachas
 */

export default function ServicePageRoute() {
  const params = useParams<{ slug: string }>();

  if (!params.slug) {
    return <NotFound />;
  }

  // Obtener datos de la página de servicio
  const pageData = getServicePageData(params.slug);

  if (!pageData) {
    return <NotFound />;
  }

  return (
    <ServicePage
      h1={pageData.h1}
      metaDescription={pageData.metaDescription}
      h2Beneficios={pageData.h2Beneficios}
      contenidoBeneficios={pageData.contenidoBeneficios}
      h2Diferenciacion={pageData.h2Diferenciacion}
      contenidoDiferenciacion={pageData.contenidoDiferenciacion}
      h3Proceso={pageData.h3Proceso}
      pasos={pageData.pasos}
      publicosObjetivo={pageData.publicosObjetivo}
      ctaText={pageData.ctaText}
      ctaUrgencia={pageData.ctaUrgencia}
      schemaMarkup={pageData.schemaMarkup}
    />
  );
}
