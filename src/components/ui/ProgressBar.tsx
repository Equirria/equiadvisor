import { TOTAL_STEPS } from '../../types/quiz';

interface ProgressBarProps {
  currentStep: number;
}

export default function ProgressBar({ currentStep }: ProgressBarProps) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {Array.from({ length: TOTAL_STEPS }, (_, i) => (
        <div key={i} className="flex items-center gap-2">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
              i < currentStep
                ? 'bg-indigo text-cream'
                : i === currentStep
                  ? 'bg-navy text-cream scale-110'
                  : 'bg-gray-mid text-dark/40'
            }`}
          >
            {i < currentStep ? '✓' : i + 1}
          </div>
          {i < TOTAL_STEPS - 1 && (
            <div className={`w-8 h-0.5 transition-colors duration-300 ${i < currentStep ? 'bg-indigo' : 'bg-gray-mid'}`} />
          )}
        </div>
      ))}
    </div>
  );
}
