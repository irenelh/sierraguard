interface PasoNivelInfestacionProps {
  value: string;
  onChange: (nivel: string) => void;
}

export default function PasoNivelInfestacion({
  value,
  onChange,
}: PasoNivelInfestacionProps) {
  const niveles = [
    {
      id: 'leve',
      nombre: 'Leve',
      descripcion: 'Primeros signos, pocos insectos visibles',
      icono: '🟢',
    },
    {
      id: 'moderada',
      nombre: 'Moderada',
      descripcion: 'Visible en varias áreas, infestación establecida',
      icono: '🟡',
    },
    {
      id: 'severa',
      nombre: 'Severa',
      descripcion: 'Infestación avanzada, requiere tratamiento intensivo',
      icono: '🔴',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          ¿Cuál es el nivel de infestación?
        </h2>
        <p className="text-gray-600">
          Esto nos ayuda a estimar la intensidad del tratamiento necesario
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {niveles.map((nivel) => (
          <button
            key={nivel.id}
            onClick={() => onChange(nivel.id)}
            className={`p-4 rounded-lg border-2 transition-all text-left ${
              value === nivel.id
                ? 'border-emerald-600 bg-emerald-50'
                : 'border-gray-200 bg-white hover:border-emerald-300'
            }`}
          >
            <div className="text-3xl mb-2">{nivel.icono}</div>
            <h3 className="font-semibold text-gray-900 mb-1">{nivel.nombre}</h3>
            <p className="text-sm text-gray-600">{nivel.descripcion}</p>
          </button>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-900">
          <strong>💡 Consejo:</strong> Si no está seguro del nivel de infestación,
          seleccione "Leve" y solicite una inspección previa gratuita en el siguiente paso.
        </p>
      </div>
    </div>
  );
}
