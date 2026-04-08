import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AdvisorPage from './pages/AdvisorPage';
import CalculatorPage from './pages/CalculatorPage';
import ResultsPage from './pages/ResultsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/doradca" element={<AdvisorPage />} />
          <Route path="/kalkulator" element={<CalculatorPage />} />
          <Route path="/wyniki" element={<ResultsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
