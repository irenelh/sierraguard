import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-900 relative overflow-hidden font-sans">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-900/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-slate-900/40 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Columna 1: Brand & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-8 pr-0 lg:pr-8">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-3 mb-5">
                <img 
                  src="/images/logo control de plagas.jpg" 
                  alt="Sierra Guard Logo" 
                  className="h-14 w-auto object-contain rounded-xl shadow-lg border border-slate-800/80"
                  width="140"
                  height="56"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white tracking-tight leading-none">Sierra Guard</span>
                  <span className="text-xs text-emerald-500 font-medium tracking-wide uppercase mt-1">Control de Plagas</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
                Expertos en protección ambiental y control de plagas en Segovia. Soluciones certificadas, seguras y eficaces para su hogar o negocio.
              </p>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-900/60 text-emerald-400 text-xs font-bold tracking-wide shadow-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Certificados CEPA
              </div>
            </div>

            {/* Contacto rápido - Rediseñado */}
            <div className="space-y-3">
              <a href="tel:+34921234567" className="flex items-center gap-4 p-3 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-emerald-500/30 hover:bg-slate-900/80 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform duration-300">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold group-hover:text-emerald-400 transition-colors">Atención 24h</span>
                  <span className="font-bold text-lg text-slate-200 group-hover:text-white tracking-tight">+34 921 234 567</span>
                </div>
              </a>
              
              <a href="mailto:contacto@controldeplagassegovia.com" className="flex items-center gap-4 p-3 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-emerald-500/30 hover:bg-slate-900/80 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform duration-300">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold group-hover:text-emerald-400 transition-colors">Correo Electrónico</span>
                  <span className="font-medium text-sm text-slate-300 group-hover:text-white break-all">contacto@controldeplagassegovia.com</span>
                </div>
              </a>
            </div>
          </div>

          {/* Columna 2: Servicios (3 cols) */}
          <div className="lg:col-span-3 lg:pl-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-6 pb-2 border-b border-slate-800 inline-block min-w-[60px]">
              Servicios
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Desinsectación", href: "/desinsectacion" },
                { label: "Eliminar cucarachas", href: "/desinsectacion" },
                { label: "Desratización", href: "/desratizacion" },
                { label: "Desinfección", href: "/desinfeccion" },
                { label: "Control de palomas", href: "/control-de-aves" },
                { label: "Tratamientos de Madera", href: "/tratamientos-de-madera" },
                { label: "Higiene Ambiental", href: "/higiene-ambiental" },
                { label: "Inspección de plagas", href: "/inspeccion-y-prevencion" },
                { label: "Prevención", href: "/inspeccion-y-prevencion" },
              ].map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="text-slate-400 hover:text-emerald-400 text-sm transition-all duration-300 flex items-center gap-2 group w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-emerald-500 transition-colors"></span>
                    <span className="group-hover:translate-x-1 transition-transform">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Cobertura (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-6 pb-2 border-b border-slate-800 inline-block min-w-[60px]">
              Cobertura en Segovia
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-2.5 text-xs">
              {[
                { name: "La Lastrilla", href: "/control-de-plagas-la-lastrilla" },
                { name: "El Espinar", href: "/control-de-plagas-el-espinar" },
                { name: "San Rafael", href: null },
                { name: "Villacastín", href: null },
                { name: "Ituero y Lama", href: null },
                { name: "Otero de Herreros", href: null },
                { name: "Navas de San Antonio", href: null },
                { name: "Prádena", href: null },
                { name: "Turégano", href: null },
                { name: "Pedraza", href: "/control-de-plagas-pedraza" },
                { name: "Sepúlveda", href: "/control-de-plagas-sepulveda" },
                { name: "Boceguillas", href: null },
                { name: "Cuéllar", href: "/control-de-plagas-cuéllar" },
                { name: "Palazuelos de Eresma", href: "/control-de-plagas-palazuelos-de-eresma" },
                { name: "Trescasas", href: null },
                { name: "Torrecaballeros", href: null },
                { name: "Hontoria", href: null },
                { name: "Coca", href: "/control-de-plagas-coca" },
                { name: "San Cristobal", href: null },
                { name: "La Granja", href: "/control-de-plagas-la-granja-san-ildefonso" },
                { name: "Hontanares", href: null },
                { name: "Revenga", href: null },
                { name: "Valseca", href: null },
                { name: "Ortigosa", href: null },
              ].map((loc, idx) => (
                <li key={idx}>
                  {loc.href ? (
                    <a href={loc.href} className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5 group">
                      <span className="text-emerald-500/40 group-hover:text-emerald-400 text-[10px]">●</span>
                      {loc.name}
                    </a>
                  ) : (
                    <span className="text-slate-600 cursor-default flex items-center gap-1.5">
                      <span className="text-slate-800 text-[10px]">●</span>
                      {loc.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Empresa (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-6 pb-2 border-b border-slate-800 inline-block min-w-[60px]">
              Empresa
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/blog" className="text-slate-400 hover:text-emerald-400 text-sm transition-all duration-300 flex items-center gap-2 group w-fit">
                   <span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-emerald-500 transition-colors"></span>
                   <span className="group-hover:translate-x-1 transition-transform">Blog</span>
                </a>
              </li>
              <li>
                <a href="/calculadora" className="text-slate-400 hover:text-emerald-400 text-sm transition-all duration-300 flex items-center gap-2 group w-fit">
                   <span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-emerald-500 transition-colors"></span>
                   <span className="group-hover:translate-x-1 transition-transform">Calculadora</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-center md:text-left text-xs text-slate-600 font-medium">
              © 2026 Sierra Guard. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-xs text-slate-500">
              <a href="/politica-privacidad" className="hover:text-emerald-400 transition-colors">Privacidad</a>
              <a href="/aviso-legal" className="hover:text-emerald-400 transition-colors">Aviso Legal</a>
              <a href="/politica-cookies" className="hover:text-emerald-400 transition-colors">Cookies</a>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-slate-900/30 px-3 py-1.5 rounded-lg border border-slate-800/50">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">Sistemas Operativos</span>
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
                email: "contacto@controldeplagassegovia.com",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "C. de José Zorrilla, 132",
                  postalCode: "40002",
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
