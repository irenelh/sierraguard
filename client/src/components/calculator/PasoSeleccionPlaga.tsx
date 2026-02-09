import { PLAGAS_DISPONIBLES } from '@/utils/calculoPresupuesto';

interface PasoSeleccionPlagaProps {
  value: string;
  onChange: (tipoplaga: string) => void;
}

export default function PasoSeleccionPlaga({
  value,
  onChange,
}: PasoSeleccionPlagaProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          ¿Qué tipo de plaga necesita eliminar?
        </h2>
        <p className="text-gray-600">
          Selecciona la plaga que está afectando tu propiedad
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PLAGAS_DISPONIBLES.map((plaga) => (
          <button
            key={plaga.id}
            onClick={() => onChange(plaga.id)}
            className={`p-4 rounded-lg border-2 transition-all text-left ${
              value === plaga.id
                ? 'border-emerald-600 bg-emerald-50'
                : 'border-gray-200 bg-white hover:border-emerald-300'
            }`}
          >
            <h3 className="font-semibold text-gray-900 mb-1">{plaga.nombre}</h3>
            <p className="text-sm text-gray-600">{plaga.descripcion}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
