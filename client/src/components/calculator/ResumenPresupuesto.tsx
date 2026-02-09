import { CalculatorState, CalculoResultado } from '@/types/calculator';
import { PLAGAS_DISPONIBLES, UBICACIONES_DISPONIBLES, EXTRAS_DISPONIBLES } from '@/utils/calculoPresupuesto';
import { useState } from 'react';
import PasoContacto from './PasoContacto';

interface ResumenPresupuestoProps {
  resultado: CalculoResultado;
  state: CalculatorState;
  onStateChange: (updates: Partial<CalculatorState>) => void;
  onVolver: () => void;
}

export default function ResumenPresupuesto({
  resultado,
  state,
  onStateChange,
  onVolver,
}: ResumenPresupuestoProps) {
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const nombrePlaga = PLAGAS_DISPONIBLES.find((p) => p.id === state.tipoplaga)?.nombre || state.tipoplaga;
  const nombreUbicacion = UBICACIONES_DISPONIBLES.find((u) => u.id === state.ubicacion)?.nombre || state.ubicacion;
  const nombreTipoPropiedad = state.tipoPropiedad === 'vivienda' ? 'Vivienda' : 'Negocio';

  const handleContactar = async () => {
    setEnviando(true);
    try {
      const datos = {
        tipoplaga: state.tipoplaga,
        area: state.area,
        ubicacion: state.ubicacion,
        presupuesto: resultado.precioTotal,
        nombre: state.nombre,
        email: state.email,
        telefono: state.telefono,
        timestamp: new Date().toISOString(),
      };

      // Guardar en localStorage como demo
      const presupuestos = JSON.parse(localStorage.getItem('presupuestos') || '[]');
      presupuestos.push(datos);
      localStorage.setItem('presupuestos', JSON.stringify(presupuestos));

      setEnviado(true);
      setTimeout(() => setEnviando(false), 2000);
    } catch (error) {
      console.error('Error:', error);
      setEnviando(false);
    }
  };

  if (enviado) {
    return (
      <div className="w-full max-w-2xl mx-auto p-6">
        <div className="bg-emerald-50 border-2 border-emerald-600 rounded-lg p-8 text-center">
          <div className="text-5xl mb-4">✓</div>
          <h2 className="text-3xl font-bold text-emerald-900 mb-2">
            ¡Presupuesto Enviado!
          </h2>
          <p className="text-emerald-700 mb-6">
            Nos contactaremos pronto para confirmar los detalles del servicio.
          </p>
          <button
            onClick={onVolver}
            className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700"
          >
            Calcular Otro Presupuesto
          </button>
        </div>
      </div>
    );
  }

  // Vista 2: Formulario de Contacto
  if (mostrarFormulario) {
    return (
      <div className="w-full max-w-2xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <button
            onClick={() => setMostrarFormulario(false)}
            className="text-sm text-gray-500 hover:text-gray-700 mb-6 flex items-center gap-1"
          >
            ← Volver al presupuesto
          </button>
          
          <PasoContacto state={state} onChange={onStateChange} />
          
          <div className="mt-8 flex gap-4">
            <button
              onClick={() => setMostrarFormulario(false)}
              className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button
              onClick={handleContactar}
              disabled={!state.nombre || !state.email || !state.telefono || enviando}
              className="flex-1 px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {enviando ? 'Enviando...' : 'Confirmar Solicitud'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Vista 1: Resumen de Presupuesto
  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-lg shadow-lg p-8 text-white mb-6">
        <h2 className="text-3xl font-bold mb-2">Tu Presupuesto Estimado</h2>
        <p className="text-emerald-100 mb-6">Basado en los datos proporcionados</p>

        {/* Precio Principal */}
        <div className="bg-white rounded-lg p-6 mb-6">
          <p className="text-gray-600 text-sm mb-2">Presupuesto Total</p>
          <p className="text-5xl font-bold text-gray-900">€{resultado.precioTotal.toFixed(2)}</p>
        </div>

        {/* Desglose */}
        <div className="bg-white rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Desglose del Presupuesto</h3>

          <div className="space-y-3 text-sm text-gray-800">
            <div className="flex justify-between">
              <span>Tratamiento base:</span>
              <span>€{resultado.desglose.tratamiento.toFixed(2)}</span>
            </div>

            {Object.entries(resultado.desglose.extras).map(([extra, precio]) => {
              const extraInfo = EXTRAS_DISPONIBLES.find((e) => e.id === extra);
              return (
                <div key={extra} className="flex justify-between">
                  <span>{extraInfo?.nombre || extra}:</span>
                  <span>€{precio.toFixed(2)}</span>
                </div>
              );
            })}

            <div className="border-t border-gray-300 pt-3 flex justify-between font-bold text-lg text-gray-900">
              <span>Total:</span>
              <span>€{resultado.precioTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Información del Servicio */}
        <div className="bg-white rounded-lg p-6 mb-6 text-sm text-gray-800">
          <h3 className="font-semibold mb-3 text-gray-900">Información del Servicio</h3>
          <div className="space-y-2">
            <p>
              <strong>Tipo de propiedad:</strong> {nombreTipoPropiedad}
            </p>
            <p>
              <strong>Tipo de plaga:</strong> {nombrePlaga}
            </p>
            <p>
              <strong>Área:</strong> {state.area} m²
            </p>
            <p>
              <strong>Ubicación:</strong> {nombreUbicacion}
            </p>
            <p>
              <strong>Nivel de infestación:</strong> {state.nivelInfestacion}
            </p>
            <p>
              <strong>Urgencia:</strong> {state.urgencia}
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4">
          <p className="text-yellow-900 text-sm font-semibold mb-2">Importante</p>
          <p className="text-yellow-800 text-xs leading-relaxed">
            Este es un presupuesto estimado basado en los datos proporcionados. El precio final puede variar según la inspección profesional, la complejidad del tratamiento y las condiciones específicas de la propiedad. Nos contactaremos para confirmar el presupuesto definitivo antes de iniciar cualquier trabajo.
          </p>
        </div>
      </div>

      {/* Botones de Acción */}
      <div className="flex gap-4">
        <button
          onClick={onVolver}
          className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50"
        >
          Volver a Calcular
        </button>
        <button
          onClick={() => setMostrarFormulario(true)}
          className="flex-1 px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 shadow-lg hover:shadow-xl transition-all"
        >
          Solicitar Presupuesto Formal
        </button>
      </div>
    </div>
  );
}
