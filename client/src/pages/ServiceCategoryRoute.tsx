import { useRoute } from "wouter";
import ServiceCategoryPage from "@/components/ServiceCategoryPage";
import { serviceCategoriesData } from "@/lib/serviceCategoriesData";
import NotFound from "./NotFound";

export default function ServiceCategoryRoute() {
  const [match, params] = useRoute("/:slug");

  if (!match) return null;

  const slug = params?.slug as string;
  const service = serviceCategoriesData.find((s) => s.slug === slug);

  // Si no es un servicio, retorna null para que se procese la siguiente ruta
  if (!service) {
    return null;
  }

  return (
    <ServiceCategoryPage service={service} />
  );
}
