import { useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';

interface Props {
  isOpen: boolean;
  onSubmit: (email: string, newsletter: boolean) => void;
  onSkip: () => void;
}

export default function LeadCaptureModal({ isOpen, onSubmit, onSkip }: Props) {
  const [email, setEmail] = useState('');
  const [newsletter, setNewsletter] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@')) {
      onSubmit(email, newsletter);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onSkip}>
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-indigo to-indigo-light rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-indigo/25">
          <svg className="w-8 h-8 text-white" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
        </div>
        <h3 className="text-2xl font-bold text-dark">Twoje wyniki są gotowe!</h3>
        <p className="text-gray-text text-sm mt-2 leading-relaxed">
          Podaj email, a wyślemy Ci spersonalizowane rekomendacje wraz z <span className="font-semibold text-red">kuponem rabatowym 10%</span>.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="twoj@email.pl"
          className="w-full px-4 py-3.5 border-2 border-gray-mid/60 rounded-xl text-dark focus:border-indigo focus:outline-none focus:ring-4 focus:ring-indigo/10 transition-all text-base"
          required
        />
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={newsletter}
            onChange={(e) => setNewsletter(e.target.checked)}
            className="w-4 h-4 accent-indigo mt-0.5"
          />
          <span className="text-sm text-gray-text leading-snug">Chcę otrzymywać newsletter z promocjami i poradami jeździeckimi</span>
        </label>
        <Button type="submit" className="w-full" size="lg">
          Pokaż wyniki i odbierz kupon
        </Button>
      </form>
      <button
        onClick={onSkip}
        className="w-full text-center text-sm text-gray-text/60 mt-4 hover:text-gray-text transition-colors cursor-pointer bg-transparent border-none py-1"
      >
        Pomiń i przejdź do wyników
      </button>
    </Modal>
  );
}
