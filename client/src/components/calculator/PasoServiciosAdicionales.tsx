import { EXTRAS_DISPONIBLES } from '@/utils/calculoPresupuesto';

interface PasoServiciosAdicionalesProps {
  value: string[];
  onChange: (extras: string[]) => void;
}

export default function PasoServiciosAdicionales({
  value,
  onChange,
}: PasoServiciosAdicionalesProps) {
  const handleToggle = (id: string) => {
    if (value.includes(id)) {
      onChange(value.filter((item) => item !== id));
    } else {
      onChange([...value, id]);
    }
  };

  const totalExtras = EXTRAS_DISPONIBLES.filter((extra) =>
    value.includes(extra.id)
  ).reduce((sum, extra) => sum + extra.precio, 0);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          ¿Desea servicios adicionales?
        </h2>
        <p className="text-gray-600">
          Selecciona los servicios complementarios que necesites (opcional)
        </p>
      </div>

      <div className="space-y-3">
        {EXTRAS_DISPONIBLES.map((extra) => (
          <label
            key={extra.id}
            className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
              value.includes(extra.id)
                ? 'border-emerald-600 bg-emerald-50'
                : 'border-gray-200 bg-white hover:border-emerald-300'
            }`}
          >
            <input
              type="checkbox"
              checked={value.includes(extra.id)}
              onChange={() => handleToggle(extra.id)}
              className="w-4 h-4 text-emerald-600 rounded"
            />
            <div className="ml-3 flex-1">
              <p className="font-medium text-gray-900">{extra.nombre}</p>
            </div>
            <span className="text-sm font-semibold text-emerald-600">
              +€{extra.precio}
            </span>
          </label>
        ))}
      </div>

      {totalExtras > 0 && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
          <p className="text-sm text-emerald-900">
            <strong>Servicios adicionales seleccionados:</strong> €{totalExtras}
          </p>
        </div>
      )}

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-900">
          <strong>💡 Recomendación:</strong> La inspección previa es muy recomendada
          para obtener un diagnóstico preciso antes del tratamiento.
        </p>
      </div>
    </div>
  );
}
