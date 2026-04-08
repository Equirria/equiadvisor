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
      className={`bg-white rounded-xl border-2 transition-all duration-200 ${
        selected ? 'border-indigo shadow-lg ring-2 ring-indigo/20' : 'border-gray-mid shadow-sm'
      } ${hoverable || onClick ? 'cursor-pointer hover:shadow-md hover:border-indigo/50' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
