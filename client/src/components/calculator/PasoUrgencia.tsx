interface PasoUrgenciaProps {
  value: string;
  onChange: (urgencia: string) => void;
}

export default function PasoUrgencia({
  value,
  onChange,
}: PasoUrgenciaProps) {
  const opciones = [
    {
      id: 'estandar',
      nombre: 'Estándar',
      plazo: '5-7 días',
      precio: '0%',
      descripcion: 'Servicio regular sin urgencia',
    },
    {
      id: 'rapido',
      nombre: 'Rápido',
      plazo: '24-48 horas',
      precio: '+25%',
      descripcion: 'Servicio prioritario',
    },
    {
      id: 'urgente',
      nombre: 'Urgente',
      plazo: 'Mismo día',
      precio: '+50%',
      descripcion: 'Servicio de emergencia',
    },
    {
      id: 'nocturno',
      nombre: 'Nocturno',
      plazo: 'Después de 20h',
      precio: '+35%',
      descripcion: 'Servicio fuera de horario',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          ¿Cuándo necesita el servicio?
        </h2>
        <p className="text-gray-600">
          Selecciona la urgencia del tratamiento
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {opciones.map((opcion) => (
          <button
            key={opcion.id}
            onClick={() => onChange(opcion.id)}
            className={`p-4 rounded-lg border-2 transition-all text-left ${
              value === opcion.id
                ? 'border-green-600 bg-green-50'
                : 'border-gray-200 bg-white hover:border-green-300'
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-gray-900">{opcion.nombre}</h3>
              <span
                className={`text-xs font-bold px-2 py-1 rounded ${
                  opcion.id === 'estandar'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-orange-100 text-orange-800'
                }`}
              >
                {opcion.precio}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{opcion.descripcion}</p>
            <p className="text-xs text-gray-500">
              ⏱️ {opcion.plazo}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
