import type { Category } from '../types/product';

export interface SpecialNeedOption {
  id: string;
  label: string;
}

export const SPECIAL_NEEDS: Record<Category, SpecialNeedOption[]> = {
  helmet: [
    { id: 'ventilated', label: 'Ważna wentylacja (jazda w upale)' },
    { id: 'lightweight', label: 'Jak najlżejszy kask' },
    { id: 'visor', label: 'Potrzebuję daszka' },
    { id: 'mips', label: 'System MIPS (dodatkowa ochrona)' },
  ],
  saddle: [
    { id: 'back-problems', label: 'Mam problemy z kręgosłupem' },
    { id: 'wide-horse', label: 'Koń o szerokim grzbiecie' },
    { id: 'changeable-gullet', label: 'Wymienny łęk' },
    { id: 'synthetic', label: 'Preferuję materiał syntetyczny' },
  ],
  boots: [
    { id: 'wide-feet', label: 'Szerokie stopy' },
    { id: 'wide-calf', label: 'Szerokie łydki' },
    { id: 'waterproof', label: 'Wodoodporność' },
    { id: 'zipper', label: 'Z zamkiem błyskawicznym' },
  ],
  vest: [
    { id: 'flexible', label: 'Ważna elastyczność / swoboda ruchów' },
    { id: 'airbag', label: 'Zainteresowany/a kamizelką air-bag' },
    { id: 'lightweight-vest', label: 'Jak najlżejsza kamizelka' },
  ],
  'horse-equipment': [
    { id: 'sensitive-skin', label: 'Koń ma wrażliwą skórę' },
    { id: 'young-horse', label: 'Młody koń (do 5 lat)' },
    { id: 'winter', label: 'Sprzęt na zimę' },
    { id: 'competition', label: 'Na zawody' },
  ],
};
