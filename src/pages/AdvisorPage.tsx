import QuizContainer from '../components/quiz/QuizContainer';
import { TargetIcon } from '../components/ui/Icons';

export default function AdvisorPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <div className="w-14 h-14 bg-gradient-to-br from-indigo to-indigo-light rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg shadow-indigo/25">
          <TargetIcon className="w-7 h-7" />
        </div>
        <h1 className="text-3xl font-bold text-dark">Doradca Sprzętowy</h1>
        <p className="text-gray-text mt-2 max-w-md mx-auto">Odpowiedz na kilka pytań, a pomożemy Ci dobrać idealny sprzęt jeździecki</p>
      </div>
      <QuizContainer />
    </div>
  );
}
