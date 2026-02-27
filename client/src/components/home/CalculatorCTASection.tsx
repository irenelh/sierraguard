import { Calculator } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function CalculatorCTASection() {
  return (
      <section className="py-12 bg-primary text-white">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">¿Quieres saber cuánto cuesta tu tratamiento?</h2>
            <p className="text-white/90 text-lg">
              Obtén un presupuesto estimado en menos de 1 minuto con nuestra calculadora online.
            </p>
          </div>
          <Link href="/calculadora">
            <Button size="lg" variant="secondary" className="font-bold text-white hover:text-white/90 min-w-[200px] h-14 text-lg shadow-lg">
              <Calculator className="mr-2 h-6 w-6" />
              Calcular Presupuesto
            </Button>
          </Link>
        </div>
      </section>
  );
}
