import { CalculatorState, PrecioConfig, CalculoResultado } from '@/types/calculator';

// Configuración de precios base
const PRECIOS_BASE: { [key: string]: PrecioConfig } = {
  cucarachas: { precioBase: 3.0, rangoMinimo: 150, rangoMaximo: 2500 },
  roedores: { precioBase: 3.75, rangoMinimo: 200, rangoMaximo: 3000 },
  termitas: { precioBase: 6.5, rangoMinimo: 500, rangoMaximo: 5000 },
  chinches: { precioBase: 5.0, rangoMinimo: 300, rangoMaximo: 2000 },
  hormigas: { precioBase: 2.5, rangoMinimo: 100, rangoMaximo: 1500 },
  mosquitos: { precioBase: 2.0, rangoMinimo: 80, rangoMaximo: 1000 },
  avispas: { precioBase: 3.25, rangoMinimo: 150, rangoMaximo: 1500 },
  pulgas: { precioBase: 4.0, rangoMinimo: 200, rangoMaximo: 2000 },
};

// Factores por área
const FACTORES_AREA = (area: number): number => {
  if (area <= 50) return 1.0;
  if (area <= 100) return 0.95;
  if (area <= 200) return 0.9;
  if (area <= 500) return 0.85;
  if (area <= 1000) return 0.8;
  return 0.75;
};

// Factores por ubicación
const FACTORES_UBICACION: { [key: string]: number } = {
  'segovia-capital': 1.0,
  'pedraza': 1.1,
  'coca': 1.1,
  'sepulveda': 1.1,
  'ayllon': 1.1,
  'riaza': 1.1,
  'maderuelo': 1.1,
  'cuellar': 1.05,
  'el-espinar': 1.05,
  'cantalejo': 1.05,
  'otro': 1.15,
};

// Factores por urgencia
const FACTORES_URGENCIA: { [key: string]: number } = {
  'estandar': 1.0,
  'rapido': 1.25,
  'urgente': 1.5,
  'nocturno': 1.35,
};

// Precios de extras
const PRECIOS_EXTRAS: { [key: string]: number } = {
  'inspeccion': 50,
  'preventivo': 75,
  'sellado': 100,
  'desinfeccion': 150,
  'trampas': 50,
  'seguimiento': 40,
  'garantia': 100,
};

export function calcularPresupuesto(state: CalculatorState): CalculoResultado {
  // 1. Validar entrada
  if (!state.tipoplaga || state.area < 10 || state.area > 10000) {
    throw new Error('Datos inválidos');
  }

  // 2. Obtener precio base
  const config = PRECIOS_BASE[state.tipoplaga.toLowerCase()];
  if (!config) throw new Error('Tipo de plaga no válido');

  let precioBase = config.precioBase * state.area;

  // 3. Aplicar factor de área
  const factorArea = FACTORES_AREA(state.area);
  const precioConArea = precioBase * factorArea;

  // 4. Aplicar factor de ubicación
  const factorUbicacion = FACTORES_UBICACION[state.ubicacion] || 1.0;
  const precioConUbicacion = precioConArea * factorUbicacion;

  // 5. Aplicar factor de urgencia
  const factorUrgencia = FACTORES_URGENCIA[state.urgencia] || 1.0;
  const precioConUrgencia = precioConUbicacion * factorUrgencia;

  // 6. Calcular extras
  let precioExtras = 0;
  const desgloceExtras: { [key: string]: number } = {};

  state.extras.forEach((extra) => {
    const precio = PRECIOS_EXTRAS[extra] || 0;
    precioExtras += precio;
    desgloceExtras[extra] = precio;
  });

  // 7. Calcular total
  let precioTotal = precioConUrgencia + precioExtras;

  // 8. Aplicar límites (mínimo y máximo)
  precioTotal = Math.max(config.rangoMinimo, Math.min(config.rangoMaximo, precioTotal));

  return {
    precioBase,
    precioConArea,
    precioConUbicacion,
    precioConUrgencia,
    precioExtras,
    precioTotal,
    desglose: {
      tratamiento: precioConUrgencia,
      extras: desgloceExtras,
    },
  };
}

export const PLAGAS_DISPONIBLES = [
  { id: 'cucarachas', nombre: 'Cucarachas', descripcion: 'Control de cucarachas alemanas y americanas' },
  { id: 'roedores', nombre: 'Roedores', descripcion: 'Eliminación de ratas y ratones' },
  { id: 'termitas', nombre: 'Termitas', descripcion: 'Tratamiento especializado de termitas' },
  { id: 'chinches', nombre: 'Chinches', descripcion: 'Control de chinches de cama' },
  { id: 'hormigas', nombre: 'Hormigas', descripcion: 'Eliminación de hormigas' },
  { id: 'mosquitos', nombre: 'Mosquitos', descripcion: 'Control de mosquitos y zancudos' },
  { id: 'avispas', nombre: 'Avispas', descripcion: 'Eliminación segura de avispas y nidos' },
  { id: 'pulgas', nombre: 'Pulgas', descripcion: 'Control de pulgas en mascotas y hogar' },
];

export const UBICACIONES_DISPONIBLES = [
  { id: 'segovia-capital', nombre: 'Segovia Capital' },
  { id: 'pedraza', nombre: 'Pedraza' },
  { id: 'coca', nombre: 'Coca' },
  { id: 'sepulveda', nombre: 'Sepúlveda' },
  { id: 'ayllon', nombre: 'Ayllón' },
  { id: 'riaza', nombre: 'Riaza' },
  { id: 'maderuelo', nombre: 'Maderuelo' },
  { id: 'cuellar', nombre: 'Cuéllar' },
  { id: 'el-espinar', nombre: 'El Espinar' },
  { id: 'cantalejo', nombre: 'Cantalejo' },
  { id: 'otro', nombre: 'Otro municipio' },
];

export const EXTRAS_DISPONIBLES = [
  { id: 'inspeccion', nombre: 'Inspección previa', precio: 50 },
  { id: 'preventivo', nombre: 'Tratamiento preventivo', precio: 75 },
  { id: 'sellado', nombre: 'Sellado de grietas', precio: 100 },
  { id: 'desinfeccion', nombre: 'Desinfección profunda', precio: 150 },
  { id: 'trampas', nombre: 'Instalación de trampas', precio: 50 },
  { id: 'seguimiento', nombre: 'Seguimiento mensual', precio: 40 },
  { id: 'garantia', nombre: 'Garantía extendida 1 año', precio: 100 },
];
