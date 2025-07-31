'use client';

import { ReactNode } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function AnimatedButton({ children, onClick, className = '' }: AnimatedButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-8 py-4 bg-soft-pink text-gray-800 rounded-full font-medium text-lg
        glow-button hover:bg-accent-pink active:scale-95 transition-all duration-300
        ${className}
      `}
    >
      {children}
    </button>
  );
}