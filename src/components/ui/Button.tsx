import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

const variants = {
  primary: 'bg-gradient-to-r from-navy to-indigo text-white hover:from-indigo hover:to-indigo-light shadow-md shadow-navy/20 hover:shadow-lg hover:shadow-indigo/30 btn-glow',
  secondary: 'bg-gradient-to-r from-red to-red-light text-white hover:shadow-lg hover:shadow-red/25',
  outline: 'border-2 border-navy/20 text-navy hover:border-indigo hover:bg-indigo/5',
  ghost: 'text-gray-text hover:text-dark hover:bg-gray-light',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3.5 text-base',
};

export default function Button({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
