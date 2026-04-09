import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  selected?: boolean;
  hoverable?: boolean;
}

export default function Card({ children, className = '', onClick, selected, hoverable = false }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-2xl border transition-all duration-300 ${
        selected
          ? 'border-indigo shadow-[0_4px_20px_rgba(43,40,123,0.15)] ring-1 ring-indigo/20 scale-[1.02]'
          : 'border-gray-mid/60 shadow-[0_2px_8px_rgba(0,0,0,0.04)]'
      } ${hoverable || onClick ? 'cursor-pointer hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:border-indigo/30 hover:-translate-y-0.5' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
