export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4">Sierra Guard</h4>
            <p className="text-gray-300 text-sm">
              Control profesional de plagas en Segovia. Expertos en desinsectación, desratización y tratamientos de madera. Certificados CEPA.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <a href="/desinsectacion" className="text-white hover:text-gray-200 transition">
                  Desinsectación
                </a>
              </li>
              <li>
                <a href="/desratizacion" className="text-white hover:text-gray-200 transition">
                  Desratización
                </a>
              </li>
              <li>
                <a href="/desinfeccion" className="text-white hover:text-gray-200 transition">
                  Desinfección
                </a>
              </li>
              <li>
                <a href="/control-de-aves" className="text-white hover:text-gray-200 transition">
                  Control de Aves
                </a>
              </li>
              <li>
                <a href="/tratamientos-de-madera" className="text-white hover:text-gray-200 transition">
                  Tratamientos de Madera
                </a>
              </li>
              <li>
                <a href="/higiene-ambiental" className="text-white hover:text-gray-200 transition">
                  Higiene Ambiental
                </a>
              </li>
              <li>
                <a href="/inspeccion-y-prevencion" className="text-white hover:text-gray-200 transition">
                  Inspección y Prevención
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Cobertura en Segovia</h4>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-2 text-sm text-white">
              <li>
                <a href="/control-de-plagas-coca" className="text-white hover:text-gray-200 transition flex items-center">
                  <span className="mr-1">•</span> Coca
                </a>
              </li>
              <li>
                <a href="/control-de-plagas-cuéllar" className="text-white hover:text-gray-200 transition flex items-center">
                  <span className="mr-1">•</span> Cuéllar
                </a>
              </li>
              <li>
                <a href="/control-de-plagas-el-espinar" className="text-white hover:text-gray-200 transition flex items-center">
                  <span className="mr-1">•</span> El Espinar
                </a>
              </li>
              <li>
                <a href="/control-de-plagas-la-lastrilla" className="text-white hover:text-gray-200 transition flex items-center">
                  <span className="mr-1">•</span> La Lastrilla
                </a>
              </li>
              <li>
                <a href="/control-de-plagas-pedraza" className="text-white hover:text-gray-200 transition flex items-center">
                  <span className="mr-1">•</span> Pedraza
                </a>
              </li>
              <li>
                <a href="/control-de-plagas-sepulveda" className="text-white hover:text-gray-200 transition flex items-center">
                  <span className="mr-1">•</span> Sepúlveda
                </a>
              </li>
              <li>
                <span className="flex items-center text-white cursor-default">
                  <span className="mr-1">•</span> Azoguejo
                </span>
              </li>
              <li>
                <span className="flex items-center text-white cursor-default">
                  <span className="mr-1">•</span> Boceguillas
                </span>
              </li>
              <li>
                <span className="flex items-center text-white cursor-default">
                  <span className="mr-1">•</span> Canonjía
                </span>
              </li>
              <li>
                <span className="flex items-center text-white cursor-default">
                  <span className="mr-1">•</span> Centro Histórico
                </span>
              </li>
              <li>
                <span className="flex items-center text-white cursor-default">
                  <span className="mr-1">•</span> Clamores
                </span>
              </li>
              <li>
                <span className="flex items-center text-white cursor-default">
                  <span className="mr-1">•</span> Ituero y Lama
                </span>
              </li>
              <li>
                <span className="flex items-center text-white cursor-default">
                  <span className="mr-1">•</span> Peñuelas
                </span>
              </li>
              <li>
                <span className="flex items-center text-white cursor-default">
                  <span className="mr-1">•</span> Pozuelo
                </span>
              </li>
              <li>
                <span className="flex items-center text-white cursor-default">
                  <span className="mr-1">•</span> Prádena
                </span>
              </li>
              <li>
                <span className="flex items-center text-white cursor-default">
                  <span className="mr-1">•</span> San Marcos
                </span>
              </li>
              <li>
                <span className="flex items-center text-white cursor-default">
                  <span className="mr-1">•</span> Turégano
                </span>
              </li>
              <li>
                <span className="flex items-center text-white cursor-default">
                  <span className="mr-1">•</span> Vera Cruz
                </span>
              </li>
              <li>
                <span className="flex items-center text-white cursor-default">
                  <span className="mr-1">•</span> Villacastín
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-white mb-6">
              <li>
                <a href="tel:+34921234567" className="text-white hover:text-gray-200 transition">
                  +34 921 234 567
                </a>
              </li>
              <li>
                <a href="mailto:info@sierraguard.es" className="text-white hover:text-gray-200 transition">
                  info@sierraguard.es
                </a>
              </li>
            </ul>

            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <a href="/blog" className="text-white hover:text-gray-200 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200 transition">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200 transition">
                  Términos de Servicio
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-400">
            © 2026 Sierra Guard. Todos los derechos reservados. | Segovia, España
          </p>

          {/* Schema Markup JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "Sierra Guard",
                image:
                  "https://private-us-east-1.manuscdn.com/sessionFile/pJ5hSiXSQku5X6UXcVcPGG/sandbox/7wk4ZxCsNdaMYgmx2lJ94m-img-1_1770374059000_na1fn_aGVyby1iYWNrZ3JvdW5k.png",
                description:
                  "Control profesional de plagas en Segovia. Certificados CEPA. Desinsectación, desratización y desinfección.",
                telephone: "+34921234567",
                email: "info@sierraguard.es",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Segovia",
                  addressCountry: "ES",
                },
                areaServed: {
                  "@type": "City",
                  name: "Segovia",
                },
                priceRange: "$$",
                serviceType: [
                  "Desinsectación",
                  "Desratización",
                  "Desinfección",
                  "Control de Aves",
                  "Tratamientos de Madera",
                  "Higiene Ambiental",
                  "Inspección y Prevención",
                ],
                sameAs: [
                  "https://www.facebook.com/sierraguard",
                  "https://www.instagram.com/sierraguard",
                ],
              }),
            }}
          />
        </div>
      </div>
    </footer>
  );
}
