import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Shield, X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem("cookies-accepted");
    if (!cookiesAccepted) {
      // Show banner after a small delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookies-accepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-full duration-500">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-slate-900/95 backdrop-blur-md border border-slate-800 p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row items-start md:items-center gap-6">
          
          <div className="p-3 bg-emerald-500/10 rounded-xl hidden sm:block">
            <Shield className="text-emerald-500 h-8 w-8" />
          </div>

          <div className="flex-1 space-y-2">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="sm:hidden text-emerald-500"><Shield size={18} /></span>
              Valoramos tu privacidad
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Utilizamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y personalizar el contenido. 
              Al hacer clic en "Aceptar", aceptas el uso de las cookies. Puedes consultar nuestra{" "}
              <Link href="/politica-cookies" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 transition-colors">
                Política de Cookies
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-row gap-3 w-full md:w-auto pt-2 md:pt-0">
            <Button 
              variant="outline" 
              className="flex-1 md:flex-none border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
              onClick={acceptCookies}
            >
              Cerrar
            </Button>
            <Button 
              className="flex-1 md:flex-none bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-lg shadow-emerald-900/20"
              onClick={acceptCookies}
            >
              Aceptar Cookies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
