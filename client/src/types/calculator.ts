export interface CalculatorState {
  tipoPropiedad: string;
  tipoplaga: string;
  area: number;
  ubicacion: string;
  nivelInfestacion: string;
  urgencia: string;
  extras: string[];
  nombre: string;
  email: string;
  telefono: string;
}

export interface PrecioConfig {
  precioBase: number;
  rangoMinimo: number;
  rangoMaximo: number;
}

export interface CalculoResultado {
  precioBase: number;
  precioConArea: number;
  precioConUbicacion: number;
  precioConUrgencia: number;
  precioExtras: number;
  precioTotal: number;
  desglose: {
    tratamiento: number;
    extras: { [key: string]: number };
  };
}

export interface PlaguaOption {
  id: string;
  nombre: string;
  descripcion: string;
  icono: string;
}

export interface UbicacionOption {
  id: string;
  nombre: string;
  factor: number;
}
