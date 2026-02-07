import { useRoute } from "wouter";
import ServiceCategoryPage from "@/components/ServiceCategoryPage";
import LocationPage from "@/components/LocationPage";
import NotFound from "./NotFound";
import { serviceCategoriesData } from "@/lib/serviceCategoriesData";
import { locationPagesData } from "@/lib/locationPagesData";

export default function CatchAllRoute() {
  const [match, params] = useRoute("/:slug");

  if (!match) return null;

  const slug = params?.slug as string;

  // 1. Intentar buscar como Categoría de Servicio
  const service = serviceCategoriesData.find((s) => s.slug === slug);
  if (service) {
    return (
      <ServiceCategoryPage service={service} />
    );
  }

  // 2. Intentar buscar como Location Page (Barrio)
  if (slug.startsWith("control-de-plagas")) {
    const locationData = locationPagesData[slug];
    if (locationData) {
      return (
        <LocationPage
          barrio={locationData.barrio}
          h1={locationData.h1}
          metaDescription={locationData.metaDescription}
          introParrafo={locationData.introParrafo}
          bloqueConfianza={locationData.bloqueConfianza}
          serviciosEspecificos={locationData.serviciosEspecificos}
          ctaText={locationData.ctaText}
          ctaUrgencia={locationData.ctaUrgencia}
          trustBadges={locationData.trustBadges}
          layoutVariant={locationData.layoutVariant}
          textoSeo={locationData.textoSeo}
          seoSections={locationData.seoSections}
          faqs={locationData.faqs}
          zonasCercanas={locationData.zonasCercanas}
          mapEmbedUrl={locationData.mapEmbedUrl}
        />
      );
    }
  }

  // 3. Si no coincide con ninguno, mostrar 404
  return <NotFound />;
}
