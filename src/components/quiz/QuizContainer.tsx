import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuiz } from '../../hooks/useQuiz';
import { STEP_TITLES } from '../../data/quizOptions';
import ProgressBar from '../ui/ProgressBar';
import Button from '../ui/Button';
import StepRiderLevel from './StepRiderLevel';
import StepDiscipline from './StepDiscipline';
import StepEquipment from './StepEquipment';
import StepBudget from './StepBudget';
import StepSpecialNeeds from './StepSpecialNeeds';

export default function QuizContainer() {
  const { state, dispatch, canProceed } = useQuiz();
  const navigate = useNavigate();

  const handleNext = () => {
    if (state.currentStep >= 4) {
      navigate('/wyniki', { state: { answers: state.answers } });
    } else {
      dispatch({ type: 'NEXT_STEP' });
    }
  };

  const renderStep = () => {
    switch (state.currentStep) {
      case 0:
        return (
          <StepRiderLevel
            value={state.answers.riderLevel}
            onChange={(v) => dispatch({ type: 'SET_RIDER_LEVEL', payload: v })}
          />
        );
      case 1:
        return (
          <StepDiscipline
            value={state.answers.discipline}
            onChange={(v) => dispatch({ type: 'SET_DISCIPLINE', payload: v })}
          />
        );
      case 2:
        return (
          <StepEquipment
            value={state.answers.equipment || []}
            onChange={(v) => dispatch({ type: 'SET_EQUIPMENT', payload: v })}
          />
        );
      case 3:
        return (
          <StepBudget
            budgetMin={state.answers.budgetMin}
            budgetMax={state.answers.budgetMax}
            onChange={(min, max) => dispatch({ type: 'SET_BUDGET', payload: { min, max } })}
          />
        );
      case 4:
        return (
          <StepSpecialNeeds
            equipment={state.answers.equipment || []}
            value={state.answers.specialNeeds || []}
            onChange={(v) => dispatch({ type: 'SET_SPECIAL_NEEDS', payload: v })}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <ProgressBar currentStep={state.currentStep} />

      <h2 className="text-2xl font-bold text-center text-dark mb-6">
        {STEP_TITLES[state.currentStep]}
      </h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={state.currentStep}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.25 }}
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between mt-8">
        <Button
          variant="ghost"
          onClick={() => dispatch({ type: 'PREV_STEP' })}
          disabled={state.currentStep === 0}
        >
          &larr; Wstecz
        </Button>
        <Button
          onClick={handleNext}
          disabled={!canProceed()}
        >
          {state.currentStep >= 4 ? 'Zobacz wyniki' : 'Dalej'} &rarr;
        </Button>
      </div>
    </div>
  );
}
