
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StickyCallButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40 md:hidden animate-in slide-in-from-bottom-10 fade-in duration-700">
      <a href="tel:+34921234567" aria-label="Llamar ahora">
        <Button 
          size="lg" 
          className="h-14 w-14 rounded-full bg-emerald-500 hover:bg-emerald-600 shadow-xl shadow-emerald-500/30 border-2 border-white/20 p-0 flex items-center justify-center relative overflow-hidden group"
        >
          {/* Pulse effect */}
          <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75 duration-1000"></span>
          
          <Phone className="h-6 w-6 text-white relative z-10 animate-pulse" />
        </Button>
      </a>
    </div>
  );
}
