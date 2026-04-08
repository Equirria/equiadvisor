import { useReducer, useCallback } from 'react';
import type { QuizState, QuizAction } from '../types/quiz';

const initialState: QuizState = {
  currentStep: 0,
  answers: {},
  isComplete: false,
};

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'SET_RIDER_LEVEL':
      return { ...state, answers: { ...state.answers, riderLevel: action.payload } };
    case 'SET_DISCIPLINE':
      return { ...state, answers: { ...state.answers, discipline: action.payload } };
    case 'SET_EQUIPMENT':
      return { ...state, answers: { ...state.answers, equipment: action.payload } };
    case 'SET_BUDGET':
      return { ...state, answers: { ...state.answers, budgetMin: action.payload.min, budgetMax: action.payload.max } };
    case 'SET_SPECIAL_NEEDS':
      return { ...state, answers: { ...state.answers, specialNeeds: action.payload } };
    case 'NEXT_STEP':
      if (state.currentStep >= 4) {
        return { ...state, isComplete: true };
      }
      return { ...state, currentStep: state.currentStep + 1 };
    case 'PREV_STEP':
      return { ...state, currentStep: Math.max(0, state.currentStep - 1) };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export function useQuiz() {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const canProceed = useCallback((): boolean => {
    const { answers, currentStep } = state;
    switch (currentStep) {
      case 0: return !!answers.riderLevel;
      case 1: return !!answers.discipline;
      case 2: return !!answers.equipment && answers.equipment.length > 0;
      case 3: return answers.budgetMin !== undefined && answers.budgetMax !== undefined;
      case 4: return true;
      default: return false;
    }
  }, [state]);

  return { state, dispatch, canProceed };
}
