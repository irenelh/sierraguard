import CalculadoraPresupuestos from '@/components/calculator/CalculadoraPresupuestos';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CalculadoraPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Style Background for Title */}
      <div className="bg-emerald-900 py-16 text-center">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Calcula tu Presupuesto
          </h1>
          <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
            Obtén una estimación rápida y sin compromiso para tu problema de plagas en Segovia y alrededores
          </p>
          <div className="flex justify-center gap-8 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-xl">⚡</span>
              <span>Rápido y fácil</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🔒</span>
              <span>100% confidencial</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">✓</span>
              <span>Sin compromiso</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-12">
        <div className="container max-w-4xl mx-auto px-4">
          {/* Calculadora */}
          <CalculadoraPresupuestos />

          {/* Footer Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">📋 Presupuesto Estimado</h3>
              <p className="text-sm text-gray-600">
                Recibe una estimación basada en tus necesidades específicas
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">💬 Contacto Directo</h3>
              <p className="text-sm text-gray-600">
                Nuestro equipo se contactará para confirmar los detalles
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">🎯 Solución Personalizada</h3>
              <p className="text-sm text-gray-600">
                Tratamiento adaptado a tu situación específica
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
