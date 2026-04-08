import type { Category, Discipline, RiderLevel } from './product';

export interface QuizAnswers {
  riderLevel: RiderLevel;
  discipline: Discipline;
  equipment: Category[];
  budgetMin: number;
  budgetMax: number;
  specialNeeds: string[];
}

export interface QuizState {
  currentStep: number;
  answers: Partial<QuizAnswers>;
  isComplete: boolean;
}

export type QuizAction =
  | { type: 'SET_RIDER_LEVEL'; payload: RiderLevel }
  | { type: 'SET_DISCIPLINE'; payload: Discipline }
  | { type: 'SET_EQUIPMENT'; payload: Category[] }
  | { type: 'SET_BUDGET'; payload: { min: number; max: number } }
  | { type: 'SET_SPECIAL_NEEDS'; payload: string[] }
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }
  | { type: 'RESET' };

export const TOTAL_STEPS = 5;
