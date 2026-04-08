import { HELMET_SIZES, BOOT_SIZES, CALF_TYPES, SADDLE_SIZES, VEST_SIZES, VEST_LENGTHS } from '../data/sizeCharts';
import type { HelmetMeasurement, BootMeasurement, SaddleMeasurement, VestMeasurement, SizeResult } from '../types/calculator';

export function calculateHelmetSize(m: HelmetMeasurement): SizeResult {
  const c = m.headCircumference;

  for (let i = 0; i < HELMET_SIZES.length; i++) {
    const entry = HELMET_SIZES[i];
    if (c >= entry.min && c <= entry.max) {
      return {
        size: entry.size,
        sizeLabel: entry.label,
        confidence: 'exact',
        recommendations: [],
        tips: ['Zmierz obwód głowy nad uszami i brwiami', 'Kask powinien siedzieć ciasno, ale nie uciskać'],
      };
    }
    if (i < HELMET_SIZES.length - 1) {
      const next = HELMET_SIZES[i + 1];
      if (c > entry.max && c < next.min) {
        return {
          size: next.size,
          sizeLabel: `Pomiędzy ${entry.label} a ${next.label}`,
          confidence: 'between',
          alternateSize: entry.size,
          recommendations: [],
          tips: ['Twój wymiar jest na granicy dwóch rozmiarów', 'Zalecamy przymierzenie obu rozmiarów', 'W razie wątpliwości wybierz większy rozmiar'],
        };
      }
    }
  }

  if (c < HELMET_SIZES[0].min) {
    return { size: 'XS', sizeLabel: 'Poniżej zakresu - XS lub rozmiar dziecięcy', confidence: 'between', recommendations: [], tips: ['Sprawdź kaski w rozmiarach dziecięcych'] };
  }
  const last = HELMET_SIZES[HELMET_SIZES.length - 1];
  return { size: last.size, sizeLabel: `Powyżej zakresu - ${last.size} lub większy`, confidence: 'between', recommendations: [], tips: ['Skontaktuj się z nami w celu dobrania odpowiedniego rozmiaru'] };
}

export function calculateBootSize(m: BootMeasurement): SizeResult {
  let euSize = '';
  let confidence: 'exact' | 'between' = 'exact';
  let alternateSize: string | undefined;

  for (let i = 0; i < BOOT_SIZES.length; i++) {
    const entry = BOOT_SIZES[i];
    if (m.footLength >= entry.minLength && m.footLength <= entry.maxLength) {
      euSize = entry.eu;
      break;
    }
    if (i < BOOT_SIZES.length - 1) {
      const next = BOOT_SIZES[i + 1];
      if (m.footLength > entry.maxLength && m.footLength < next.minLength) {
        euSize = next.eu;
        alternateSize = entry.eu;
        confidence = 'between';
        break;
      }
    }
  }

  if (!euSize) {
    euSize = m.footLength < 23 ? '35' : '44';
    confidence = 'between';
  }

  let calfType = 'Standardowa cholewka';
  if (m.calfCircumference < 34) calfType = CALF_TYPES[0].label;
  else if (m.calfCircumference > 38) calfType = CALF_TYPES[2].label;

  const tips = [
    'Mierz stopę wieczorem, gdy jest największa',
    `Typ cholewki: ${calfType}`,
    'Nowe skórzane buty rozchodzą się o ok. 0.5 rozmiaru',
  ];

  return {
    size: `EU ${euSize}`,
    sizeLabel: `EU ${euSize} / ${calfType}`,
    confidence,
    alternateSize: alternateSize ? `EU ${alternateSize}` : undefined,
    recommendations: [],
    tips,
  };
}

export function calculateSaddleSize(m: SaddleMeasurement): SizeResult {
  let weightRange: string;
  if (m.riderWeight < 55) weightRange = 'below-55';
  else if (m.riderWeight < 70) weightRange = '55-70';
  else if (m.riderWeight < 85) weightRange = '70-85';
  else if (m.riderWeight < 100) weightRange = '85-100';
  else weightRange = 'above-100';

  const size = SADDLE_SIZES[weightRange][m.horseType];

  return {
    size,
    sizeLabel: `Rozmiar siedziska: ${size}`,
    confidence: 'exact',
    recommendations: [],
    tips: [
      'Rozmiar siodła to rozmiar siedziska mierzony w calach',
      'Do ujeżdżenia wybierz pół rozmiaru mniejszy dla lepszego kontaktu',
      'Do skoków pół rozmiaru większy dla swobody ruchów',
      'Zawsze sprawdź dopasowanie siodła do konia z siodlarzem',
    ],
  };
}

export function calculateVestSize(m: VestMeasurement): SizeResult {
  let vestSize = '';
  let vestLabel = '';

  for (const entry of VEST_SIZES) {
    if (m.chestCircumference >= entry.min && m.chestCircumference <= entry.max) {
      vestSize = entry.size;
      vestLabel = entry.label;
      break;
    }
  }

  if (!vestSize) {
    if (m.chestCircumference < VEST_SIZES[0].min) {
      vestSize = 'XS';
      vestLabel = 'Poniżej zakresu - sprawdź rozmiary dziecięce';
    } else {
      vestSize = 'XL';
      vestLabel = 'Powyżej zakresu - skontaktuj się z nami';
    }
  }

  let lengthLabel = 'Standardowa';
  for (const entry of VEST_LENGTHS) {
    if (m.height >= entry.minHeight && m.height < entry.maxHeight) {
      lengthLabel = entry.label;
      break;
    }
  }

  return {
    size: vestSize,
    sizeLabel: `${vestLabel} / Długość: ${lengthLabel}`,
    confidence: 'exact',
    recommendations: [],
    tips: [
      'Mierz obwód klatki piersiowej pod pachami',
      `Rekomendowana długość kamizelki: ${lengthLabel}`,
      'Kamizelka powinna ściśle przylegać, ale nie ograniczać ruchów',
    ],
  };
}
