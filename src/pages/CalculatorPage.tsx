import CalculatorContainer from '../components/calculator/CalculatorContainer';
import { RulerIcon } from '../components/ui/Icons';

export default function CalculatorPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <div className="w-14 h-14 bg-gradient-to-br from-navy to-indigo rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg shadow-navy/25">
          <RulerIcon className="w-7 h-7" />
        </div>
        <h1 className="text-3xl font-bold text-dark">Kalkulator Rozmiaru</h1>
        <p className="text-gray-text mt-2 max-w-md mx-auto">Dobierz idealny rozmiar na podstawie swoich wymiarów</p>
      </div>
      <CalculatorContainer />
    </div>
  );
}
