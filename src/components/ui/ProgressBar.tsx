import { TOTAL_STEPS } from '../../types/quiz';
import { CheckIcon } from './Icons';

interface ProgressBarProps {
  currentStep: number;
}

export default function ProgressBar({ currentStep }: ProgressBarProps) {
  return (
    <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-10">
      {Array.from({ length: TOTAL_STEPS }, (_, i) => (
        <div key={i} className="flex items-center gap-1.5 sm:gap-2">
          <div
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${
              i < currentStep
                ? 'bg-gradient-to-br from-green to-green/80 text-white shadow-md shadow-green/25'
                : i === currentStep
                  ? 'bg-gradient-to-br from-indigo to-indigo-light text-white shadow-lg shadow-indigo/30 scale-110'
                  : 'bg-gray-light text-gray-text border border-gray-mid/50'
            }`}
          >
            {i < currentStep ? <CheckIcon className="w-4 h-4" /> : i + 1}
          </div>
          {i < TOTAL_STEPS - 1 && (
            <div className={`w-6 sm:w-10 h-1 rounded-full transition-all duration-500 ${i < currentStep ? 'bg-gradient-to-r from-green to-green/60' : 'bg-gray-mid/40'}`} />
          )}
        </div>
      ))}
    </div>
  );
}
