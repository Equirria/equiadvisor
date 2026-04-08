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
        <div className="w-16 h-16 bg-indigo/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">📧</span>
        </div>
        <h3 className="text-xl font-bold text-dark">Twoje wyniki są gotowe!</h3>
        <p className="text-dark/60 text-sm mt-2">
          Podaj email, a wyślemy Ci spersonalizowane rekomendacje wraz z kuponem rabatowym.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="twoj@email.pl"
          className="w-full px-4 py-3 border-2 border-gray-mid rounded-lg text-dark focus:border-indigo focus:outline-none transition-colors"
          required
        />
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={newsletter}
            onChange={(e) => setNewsletter(e.target.checked)}
            className="w-4 h-4 accent-indigo"
          />
          <span className="text-sm text-dark/70">Chcę otrzymywać newsletter z promocjami i poradami</span>
        </label>
        <Button type="submit" className="w-full" size="lg">
          Pokaż wyniki i odbierz kupon
        </Button>
      </form>
      <button
        onClick={onSkip}
        className="w-full text-center text-sm text-dark/40 mt-3 hover:text-dark/60 transition-colors cursor-pointer bg-transparent border-none"
      >
        Pomiń i przejdź do wyników
      </button>
    </Modal>
  );
}
