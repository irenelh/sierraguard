export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4">Sierra Guard</h4>
            <p className="text-gray-300 text-sm">
              Control profesional de plagas en Segovia. Certificados CEPA.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="/desinsectacion" className="hover:text-white transition">
                  Desinsectación
                </a>
              </li>
              <li>
                <a href="/desratizacion" className="hover:text-white transition">
                  Desratización
                </a>
              </li>
              <li>
                <a href="/desinfeccion" className="hover:text-white transition">
                  Desinfección
                </a>
              </li>
            </ul>
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
            <h4 className="font-bold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="/blog" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="/barrios" className="hover:text-white transition">
                  Barrios
                </a>
              </li>
              <li>
                <a href="/servicios" className="hover:text-white transition">
                  Servicios
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
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
