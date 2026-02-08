import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 border-t border-gray-800 shadow-2xl relative overflow-hidden">
      {/* Decorative top highlight */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-bold text-xl mb-6 text-primary-foreground flex items-center gap-2">
              <span className="bg-primary/20 p-2 rounded-lg text-primary">SG</span>
              Sierra Guard
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Control profesional de plagas en Segovia. Expertos en desinsectación, desratización y tratamientos de madera. 
              <br/><br/>
              <span className="text-primary font-semibold">Certificados CEPA.</span>
            </p>

            {/* Contacto rápido */}
            <div className="flex flex-col gap-3 mt-6">
              <a href="tel:+34921234567" className="flex items-center gap-3 text-white hover:text-primary transition-colors group">
                <div className="bg-white/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Phone size={16} className="text-primary" />
                </div>
                <span className="font-medium">+34 921 234 567</span>
              </a>
              <a href="mailto:info@sierraguard.es" className="flex items-center gap-3 text-white hover:text-primary transition-colors group">
                <div className="bg-white/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Mail size={16} className="text-primary" />
                </div>
                <span className="font-medium">info@sierraguard.es</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-primary">Servicios</h4>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <a href="/desinsectacion" className="text-white hover:text-primary transition-colors duration-200">
                  Desinsectación en Segovia
                </a>
              </li>
              <li>
                <a href="/desinsectacion" className="text-white hover:text-primary transition-colors duration-200">
                  Eliminar cucarachas Segovia
                </a>
              </li>
              <li>
                <a href="/desratizacion" className="text-white hover:text-primary transition-colors duration-200">
                  Desratización en Segovia
                </a>
              </li>
              <li>
                <a href="/desinfeccion" className="text-white hover:text-primary transition-colors duration-200">
                  Desinfección en Segovia
                </a>
              </li>
              <li>
                <a href="/control-de-aves" className="text-white hover:text-primary transition-colors duration-200">
                  Control de palomas en Segovia
                </a>
              </li>
              <li>
                <a href="/tratamientos-de-madera" className="text-white hover:text-primary transition-colors duration-200">
                  Tratamientos de Madera
                </a>
              </li>
              <li>
                <a href="/higiene-ambiental" className="text-white hover:text-primary transition-colors duration-200">
                  Higiene Ambiental Segovia
                </a>
              </li>
              <li>
                <a href="/inspeccion-y-prevencion" className="text-white hover:text-primary transition-colors duration-200">
                  Inspección de plagas en Segovia
                </a>
              </li>
              <li>
                <a href="/inspeccion-y-prevencion" className="text-white hover:text-primary transition-colors duration-200">
                  Prevención de plagas de Segovia
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-primary">Cobertura en Segovia</h4>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-2 text-sm text-white">
              <li>
                <a href="/control-de-plagas-coca" className="text-white hover:text-primary transition-colors duration-200 flex items-center">
                  <span className="mr-1">•</span> Coca
                </a>
              </li>
              <li>
                <a href="/control-de-plagas-cuéllar" className="text-white hover:text-primary transition-colors duration-200 flex items-center">
                  <span className="mr-1">•</span> Cuéllar
                </a>
              </li>
              <li>
                <a href="/control-de-plagas-el-espinar" className="text-white hover:text-primary transition-colors duration-200 flex items-center">
                  <span className="mr-1">•</span> El Espinar
                </a>
              </li>
              <li>
                <a href="/control-de-plagas-la-lastrilla" className="text-white hover:text-primary transition-colors duration-200 flex items-center">
                  <span className="mr-1">•</span> La Lastrilla
                </a>
              </li>
              <li>
                <a href="/control-de-plagas-pedraza" className="text-white hover:text-primary transition-colors duration-200 flex items-center">
                  <span className="mr-1">•</span> Pedraza
                </a>
              </li>
              <li>
                <a href="/control-de-plagas-sepulveda" className="text-white hover:text-primary transition-colors duration-200 flex items-center">
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
            <h4 className="font-bold mb-4 text-primary">Empresa</h4>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <a href="/blog" className="text-white hover:text-primary transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="/calculadora" className="text-white hover:text-primary transition-colors duration-200">
                  Calculadora de Presupuesto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <p className="text-center md:text-left text-sm text-gray-500">
              © 2026 Sierra Guard. Todos los derechos reservados. | Segovia, España
            </p>
            <div className="flex gap-4 text-sm text-gray-500">
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-primary transition-colors">Términos de Servicio</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs text-gray-500 font-medium tracking-wider uppercase">Sistemas Operativos</span>
          </div>

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
