interface PasoTipoPropiedadProps {
  value: string;
  onChange: (tipoPropiedad: string) => void;
}

export default function PasoTipoPropiedad({
  value,
  onChange,
}: PasoTipoPropiedadProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          ¿Qué tipo de propiedad necesita tratar?
        </h2>
        <p className="text-gray-600">
          Selecciona el tipo de propiedad para ajustar mejor el presupuesto
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button
          onClick={() => onChange('vivienda')}
          className={`p-6 rounded-lg border-2 transition-all text-center ${
            value === 'vivienda'
              ? 'border-emerald-600 bg-emerald-50'
              : 'border-gray-200 bg-white hover:border-emerald-300'
          }`}
        >
          <div className="text-5xl mb-4">🏠</div>
          <h3 className="font-semibold text-gray-900 mb-2 text-lg">Vivienda</h3>
          <p className="text-sm text-gray-600">
            Casa, apartamento o piso particular
          </p>
          <div className="mt-4 text-xs text-gray-500">
            Tratamientos estándar para hogares
          </div>
        </button>

        <button
          onClick={() => onChange('negocio')}
          className={`p-6 rounded-lg border-2 transition-all text-center ${
            value === 'negocio'
              ? 'border-emerald-600 bg-emerald-50'
              : 'border-gray-200 bg-white hover:border-emerald-300'
          }`}
        >
          <div className="text-5xl mb-4">🏢</div>
          <h3 className="font-semibold text-gray-900 mb-2 text-lg">Negocio</h3>
          <p className="text-sm text-gray-600">
            Restaurante, tienda, oficina u otro comercio
          </p>
          <div className="mt-4 text-xs text-gray-500">
            Tratamientos especializados para empresas
          </div>
        </button>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-900">
          <strong>ℹ️ Nota:</strong> La selección del tipo de propiedad afecta los
          precios y opciones de servicios disponibles.
        </p>
      </div>
    </div>
  );
}
