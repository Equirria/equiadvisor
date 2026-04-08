export const HELMET_SIZES = [
  { min: 51, max: 52, size: 'XS', label: 'XS (51-52 cm)' },
  { min: 53, max: 54, size: 'S', label: 'S (53-54 cm)' },
  { min: 55, max: 56, size: 'M', label: 'M (55-56 cm)' },
  { min: 57, max: 58, size: 'L', label: 'L (57-58 cm)' },
  { min: 59, max: 61, size: 'XL', label: 'XL (59-61 cm)' },
] as const;

export const BOOT_SIZES = [
  { minLength: 23.0, maxLength: 23.6, eu: '36' },
  { minLength: 23.7, maxLength: 24.3, eu: '37' },
  { minLength: 24.4, maxLength: 25.0, eu: '38' },
  { minLength: 25.1, maxLength: 25.7, eu: '39' },
  { minLength: 25.8, maxLength: 26.4, eu: '40' },
  { minLength: 26.5, maxLength: 27.1, eu: '41' },
  { minLength: 27.2, maxLength: 27.8, eu: '42' },
  { minLength: 27.9, maxLength: 28.5, eu: '43' },
] as const;

export const CALF_TYPES = [
  { min: 0, max: 34, type: 'slim' as const, label: 'Wąska cholewka' },
  { min: 34, max: 38, type: 'regular' as const, label: 'Standardowa cholewka' },
  { min: 38, max: 99, type: 'wide' as const, label: 'Szeroka cholewka' },
] as const;

export const SADDLE_SIZES: Record<string, Record<string, string>> = {
  'below-55': { narrow: '16"', medium: '16"', wide: '16.5"' },
  '55-70': { narrow: '16.5"', medium: '16.5"', wide: '17"' },
  '70-85': { narrow: '17"', medium: '17"', wide: '17.5"' },
  '85-100': { narrow: '17.5"', medium: '17.5"', wide: '18"' },
  'above-100': { narrow: '18"', medium: '18"', wide: '18"' },
};

export const VEST_SIZES = [
  { min: 76, max: 83, size: 'XS', label: 'XS (76-83 cm)' },
  { min: 84, max: 91, size: 'S', label: 'S (84-91 cm)' },
  { min: 92, max: 99, size: 'M', label: 'M (92-99 cm)' },
  { min: 100, max: 107, size: 'L', label: 'L (100-107 cm)' },
  { min: 108, max: 115, size: 'XL', label: 'XL (108-115 cm)' },
] as const;

export const VEST_LENGTHS = [
  { minHeight: 0, maxHeight: 160, length: 'Short', label: 'Krótka' },
  { minHeight: 160, maxHeight: 175, length: 'Regular', label: 'Standardowa' },
  { minHeight: 175, maxHeight: 999, length: 'Long', label: 'Długa' },
] as const;
