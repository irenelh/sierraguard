import { useParams } from "wouter";
import LocationPage from "@/components/LocationPage";
import NotFound from "./NotFound";
import { getLocationPageData } from "@/lib/locationPagesData";

/**
 * Página de ruta dinámica para location pages
 * URL: /control-de-plagas-:slug
 * Ejemplo: /control-de-plagas-centro-historico
 */

export default function LocationPageRoute() {
  const params = useParams<{ slug: string }>();

  if (!params.slug) {
    return <NotFound />;
  }

  // Si el slug no comienza con "control-de-plagas", no es una location page
  if (!params.slug.startsWith("control-de-plagas")) {
    return <NotFound />;
  }

  // Obtener datos de la location page
  const pageData = getLocationPageData(params.slug);

  if (!pageData) {
    return <NotFound />;
  }

  return (
    <LocationPage
      barrio={pageData.barrio}
      h1={pageData.h1}
      metaDescription={pageData.metaDescription}
      introParrafo={pageData.introParrafo}
      bloqueConfianza={pageData.bloqueConfianza}
      serviciosEspecificos={pageData.serviciosEspecificos}
      ctaText={pageData.ctaText}
      ctaUrgencia={pageData.ctaUrgencia}
      trustBadges={pageData.trustBadges}
    />
  );
}
