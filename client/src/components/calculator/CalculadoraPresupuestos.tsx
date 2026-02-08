'use client';

import { useState } from 'react';
import { CalculatorState, CalculoResultado } from '@/types/calculator';
import { calcularPresupuesto } from '@/utils/calculoPresupuesto';
import PasoTipoPropiedad from './PasoTipoPropiedad';
import PasoSeleccionPlaga from './PasoSeleccionPlaga';
import PasoAreaAfectada from './PasoAreaAfectada';
import PasoUbicacion from './PasoUbicacion';
import PasoNivelInfestacion from './PasoNivelInfestacion';
import PasoUrgencia from './PasoUrgencia';
import PasoServiciosAdicionales from './PasoServiciosAdicionales';
import PasoContacto from './PasoContacto';
import ResumenPresupuesto from './ResumenPresupuesto';

export default function CalculadoraPresupuestos() {
  const [paso, setPaso] = useState(1);
  const [state, setState] = useState<CalculatorState>({
    tipoPropiedad: '',
    tipoplaga: '',
    area: 0,
    ubicacion: '',
    nivelInfestacion: '',
    urgencia: '',
    extras: [],
    nombre: '',
    email: '',
    telefono: '',
  });
  const [resultado, setResultado] = useState<CalculoResultado | null>(null);
  const [error, setError] = useState('');

  const handleNext = () => {
    setError('');

    // Validar paso actual
    if (paso === 1 && !state.tipoPropiedad) {
      setError('Por favor selecciona un tipo de propiedad');
      return;
    }
    if (paso === 2 && !state.tipoplaga) {
      setError('Por favor selecciona un tipo de plaga');
      return;
    }
    if (paso === 3 && state.area < 10) {
      setError('El área debe ser mínimo 10 m²');
      return;
    }
    if (paso === 4 && !state.ubicacion) {
      setError('Por favor selecciona una ubicación');
      return;
    }
    if (paso === 5 && !state.nivelInfestacion) {
      setError('Por favor selecciona el nivel de infestación');
      return;
    }
    if (paso === 6 && !state.urgencia) {
      setError('Por favor selecciona la urgencia del servicio');
      return;
    }

    if (paso < 7) {
      setPaso(paso + 1);
    } else {
      // Calcular presupuesto
      try {
        const calc = calcularPresupuesto(state);
        setResultado(calc);
      } catch (error) {
        setError('Error al calcular el presupuesto. Por favor intenta de nuevo.');
        console.error('Error al calcular:', error);
      }
    }
  };

  const handlePrev = () => {
    if (paso > 1) {
      setPaso(paso - 1);
      setError('');
    }
  };

  const handleStateChange = (updates: Partial<CalculatorState>) => {
    setState({ ...state, ...updates });
    setError('');
  };

  if (resultado) {
    return (
      <ResumenPresupuesto
        resultado={resultado}
        state={state}
        onStateChange={handleStateChange}
        onVolver={() => {
          setResultado(null);
          setPaso(1);
          setState({
            tipoPropiedad: '',
            tipoplaga: '',
            area: 0,
            ubicacion: '',
            nivelInfestacion: '',
            urgencia: '',
            extras: [],
            nombre: '',
            email: '',
            telefono: '',
          });
        }}
      />
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      {/* Indicador de progreso */}
      <div className="mb-8">
        {/* Círculos numerados (ocultos en móvil para evitar overflow) */}
        <div className="hidden md:flex justify-between mb-2">
          {[1, 2, 3, 4, 5, 6, 7].map((num) => (
            <div
              key={num}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                num <= paso
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {num}
            </div>
          ))}
        </div>
        
        {/* Barra de progreso (visible siempre) */}
        <div className="w-full bg-gray-200 h-2 rounded mt-2 md:mt-0">
          <div
            className="bg-green-600 h-2 rounded transition-all"
            style={{ width: `${(paso / 7) * 100}%` }}
          />
        </div>
        
        {/* Texto de paso móvil */}
        <div className="md:hidden text-center mt-2 text-sm font-medium text-gray-600">
          Paso {paso} de 7
        </div>
      </div>

      {/* Contenido del paso */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
        {paso === 1 && (
          <PasoTipoPropiedad
            value={state.tipoPropiedad}
            onChange={(tipoPropiedad) => handleStateChange({ tipoPropiedad })}
          />
        )}
        {paso === 2 && (
          <PasoSeleccionPlaga
            value={state.tipoplaga}
            onChange={(tipoplaga) => handleStateChange({ tipoplaga })}
          />
        )}
        {paso === 3 && (
          <PasoAreaAfectada
            value={state.area}
            onChange={(area) => handleStateChange({ area })}
          />
        )}
        {paso === 4 && (
          <PasoUbicacion
            value={state.ubicacion}
            onChange={(ubicacion) => handleStateChange({ ubicacion })}
          />
        )}
        {paso === 5 && (
          <PasoNivelInfestacion
            value={state.nivelInfestacion}
            onChange={(nivelInfestacion) =>
              handleStateChange({ nivelInfestacion })
            }
          />
        )}
        {paso === 6 && (
          <PasoUrgencia
            value={state.urgencia}
            onChange={(urgencia) => handleStateChange({ urgencia })}
          />
        )}
        {paso === 7 && (
          <PasoServiciosAdicionales
            value={state.extras}
            onChange={(extras) => handleStateChange({ extras })}
          />
        )}

        {/* Mensaje de error */}
        {error && (
          <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-sm text-red-800">
              <strong>⚠️ Error:</strong> {error}
            </p>
          </div>
        )}
      </div>

      {/* Botones de navegación */}
      <div className="flex gap-4">
        <button
          onClick={handlePrev}
          disabled={paso === 1}
          className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
        >
          Atrás
        </button>
        <button
          onClick={handleNext}
          className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
        >
          {paso === 7 ? 'Calcular Presupuesto' : 'Siguiente'}
        </button>
      </div>

      {/* Indicador de paso */}
      <p className="text-center text-gray-600 text-sm mt-4">
        Paso {paso} de 7
      </p>
    </div>
  );
}
