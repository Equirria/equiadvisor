import QuizContainer from '../components/quiz/QuizContainer';

export default function AdvisorPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-dark">Doradca Sprzętowy</h1>
        <p className="text-dark/60 mt-2">Odpowiedz na kilka pytań, a pomożemy Ci dobrać idealny sprzęt</p>
      </div>
      <QuizContainer />
    </div>
  );
}
