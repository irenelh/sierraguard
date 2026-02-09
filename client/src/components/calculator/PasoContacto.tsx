import { CalculatorState } from '@/types/calculator';

interface PasoContactoProps {
  state: CalculatorState;
  onChange: (updates: Partial<CalculatorState>) => void;
}

export default function PasoContacto({
  state,
  onChange,
}: PasoContactoProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Información de contacto
        </h2>
        <p className="text-gray-600">
          Proporciona tus datos para recibir el presupuesto formal (opcional)
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Nombre
          </label>
          <input
            type="text"
            value={state.nombre}
            onChange={(e) => onChange({ nombre: e.target.value })}
            placeholder="Tu nombre completo"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-600 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Email
          </label>
          <input
            type="email"
            value={state.email}
            onChange={(e) => onChange({ email: e.target.value })}
            placeholder="tu@email.com"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-600 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            value={state.telefono}
            onChange={(e) => onChange({ telefono: e.target.value })}
            placeholder="+34 600 000 000"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-600 focus:outline-none"
          />
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-900">
            <strong>ℹ️ Nota:</strong> Tu información será utilizada únicamente para
            contactarte con tu presupuesto. No compartimos tus datos con terceros.
          </p>
        </div>
      </div>
    </div>
  );
}
