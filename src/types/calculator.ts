import type { Product } from './product';

export interface HelmetMeasurement {
  headCircumference: number;
}

export interface BootMeasurement {
  footLength: number;
  calfCircumference: number;
}

export interface SaddleMeasurement {
  riderWeight: number;
  horseType: 'narrow' | 'medium' | 'wide';
}

export interface VestMeasurement {
  chestCircumference: number;
  height: number;
}

export interface SizeResult {
  size: string;
  sizeLabel: string;
  confidence: 'exact' | 'between';
  alternateSize?: string;
  recommendations: Product[];
  tips: string[];
}
