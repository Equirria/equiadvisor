import CalculatorContainer from '../components/calculator/CalculatorContainer';

export default function CalculatorPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-dark">Kalkulator Rozmiaru</h1>
        <p className="text-dark/60 mt-2">Dobierz idealny rozmiar na podstawie swoich wymiarów</p>
      </div>
      <CalculatorContainer />
    </div>
  );
}
