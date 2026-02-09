interface PasoAreaAfectadaProps {
  value: number;
  onChange: (area: number) => void;
}

export default function PasoAreaAfectada({
  value,
  onChange,
}: PasoAreaAfectadaProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numValue = parseInt(e.target.value) || 0;
    if (numValue >= 0 && numValue <= 10000) {
      onChange(numValue);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          ¿Cuál es el área afectada?
        </h2>
        <p className="text-gray-600">
          Ingresa los metros cuadrados aproximados que necesita tratar
        </p>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <input
            type="number"
            value={value || ''}
            onChange={handleChange}
            placeholder="Ingresa el área en m²"
            min="10"
            max="10000"
            className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-emerald-600 focus:outline-none"
          />
          <span className="absolute right-4 top-3 text-lg text-gray-600">m²</span>
        </div>

        {value > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-900">
              <strong>Área ingresada:</strong> {value} m²
            </p>
            {value <= 50 && (
              <p className="text-xs text-blue-700 mt-2">
                ✓ Pequeño espacio - Precio estándar
              </p>
            )}
            {value > 50 && value <= 200 && (
              <p className="text-xs text-blue-700 mt-2">
                ✓ Espacio medio - Descuento aplicado (5-10%)
              </p>
            )}
            {value > 200 && (
              <p className="text-xs text-blue-700 mt-2">
                ✓ Espacio grande - Descuento importante (15-25%)
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-3 gap-2 pt-4">
          <button
            onClick={() => onChange(50)}
            className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded text-sm font-medium"
          >
            50 m²
          </button>
          <button
            onClick={() => onChange(100)}
            className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded text-sm font-medium"
          >
            100 m²
          </button>
          <button
            onClick={() => onChange(200)}
            className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded text-sm font-medium"
          >
            200 m²
          </button>
        </div>
      </div>
    </div>
  );
}
