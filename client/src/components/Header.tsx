import { Phone, Menu, X, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/#servicios", label: "Servicios" },
    { href: "/#zonas-servicio", label: "Zonas donde trabajamos" },
    { href: "/blog", label: "Blog" }
  ];

  const isActive = (path: string) => location === path;

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.substring(2);
      
      // If we are on mobile, close the menu first
      setIsMobileMenuOpen(false);

      if (location === "/") {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        setLocation("/");
        // Wait for navigation then scroll
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col shadow-md font-sans">
      {/* Top Bar - Información de contacto y urgencias */}
      <div className="bg-primary text-primary-foreground py-2 text-sm font-medium">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Izquierda: Email y Horario */}
          <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-center sm:justify-start">
            <a 
              href="mailto:info@sierraguard.es" 
              className="flex items-center gap-2 hover:text-white/90 transition-colors"
            >
              <Mail size={14} />
              <span className="hidden xs:inline">info@sierraguard.es</span>
            </a>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <Clock size={14} />
              <span>Servicio Urgente 24h</span>
            </div>
          </div>
          
          {/* Derecha: Teléfono destacado */}
          <a 
            href="tel:+34921234567" 
            className="flex items-center gap-2 bg-white text-primary hover:bg-white/90 px-3 py-1 rounded-full transition-colors font-bold shadow-sm"
          >
            <Phone size={14} />
            <span className="tracking-wide">+34 921 234 567</span>
          </a>
        </div>
      </div>

      {/* Menú Principal - Navegación y Logo */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="bg-primary p-1.5 rounded-lg group-hover:bg-primary/90 transition-colors">
                 {/* Icono simplificado o logo SVG aquí si existiera */}
                 <span className="font-bold text-white text-xl leading-none tracking-tighter">SG</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 leading-none tracking-tight group-hover:text-primary transition-colors">
                  Sierra Guard
                </span>
                <span className="text-[10px] text-gray-500 font-medium tracking-widest uppercase">
                  Control de Plagas
                </span>
              </div>
            </div>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                <span className={`text-sm font-semibold transition-colors hover:text-primary cursor-pointer ${
                  isActive(link.href) ? "text-primary" : "text-gray-600"
                }`}>
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* CTA y Botón Móvil */}
          <div className="flex items-center gap-4">
            <Link href="/calculadora">
              <div 
                className="hidden md:flex bg-primary text-white hover:bg-primary/90 px-5 py-2.5 rounded-md font-semibold text-sm transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 cursor-pointer"
              >
                Calcula tu presupuesto
              </div>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute top-full left-0 right-0 shadow-xl animate-in slide-in-from-top-2">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} onClick={(e) => {
                if (link.href.startsWith("/#")) {
                   handleNavClick(e, link.href);
                } else {
                   setIsMobileMenuOpen(false);
                }
              }}>
                <div 
                  className={`flex items-center justify-between p-3 rounded-md transition-colors cursor-pointer ${
                    isActive(link.href) ? "bg-primary/5 text-primary font-semibold" : "text-gray-600 hover:bg-gray-50"
                  }`}
                  // onClick handled by Link wrapper
                >
                  {link.label}
                </div>
              </Link>
            ))}
            <div className="h-px bg-gray-100 my-2"></div>
            <a
              href="tel:+34921234567"
              className="flex items-center justify-center gap-2 bg-primary text-white p-3 rounded-md font-bold"
            >
              <Phone size={18} />
              <span>Llamar Ahora</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
