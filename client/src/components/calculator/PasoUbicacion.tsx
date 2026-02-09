import { UBICACIONES_DISPONIBLES } from '@/utils/calculoPresupuesto';

interface PasoUbicacionProps {
  value: string;
  onChange: (ubicacion: string) => void;
}

export default function PasoUbicacion({
  value,
  onChange,
}: PasoUbicacionProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          ¿Dónde está ubicada la propiedad?
        </h2>
        <p className="text-gray-600">
          Selecciona la ubicación para ajustar el presupuesto según desplazamiento
        </p>
      </div>

      <div className="space-y-2">
        {UBICACIONES_DISPONIBLES.map((ubicacion) => (
          <label
            key={ubicacion.id}
            className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
              value === ubicacion.id
                ? 'border-emerald-600 bg-emerald-50'
                : 'border-gray-200 bg-white hover:border-emerald-300'
            }`}
          >
            <input
              type="radio"
              name="ubicacion"
              value={ubicacion.id}
              checked={value === ubicacion.id}
              onChange={(e) => onChange(e.target.value)}
              className="w-4 h-4 text-emerald-600"
            />
            <span className="ml-3 font-medium text-gray-900">
              {ubicacion.nombre}
            </span>
            {ubicacion.id === 'segovia-capital' && (
              <span className="ml-auto text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded">
                Precio base
              </span>
            )}
            {(ubicacion.id === 'pedraza' ||
              ubicacion.id === 'coca' ||
              ubicacion.id === 'sepulveda' ||
              ubicacion.id === 'ayllon' ||
              ubicacion.id === 'riaza' ||
              ubicacion.id === 'maderuelo') && (
              <span className="ml-auto text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                +10%
              </span>
            )}
            {(ubicacion.id === 'cuellar' ||
              ubicacion.id === 'el-espinar' ||
              ubicacion.id === 'cantalejo') && (
              <span className="ml-auto text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                +5%
              </span>
            )}
            {ubicacion.id === 'otro' && (
              <span className="ml-auto text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                +15%
              </span>
            )}
          </label>
        ))}
      </div>
    </div>
  );
}
