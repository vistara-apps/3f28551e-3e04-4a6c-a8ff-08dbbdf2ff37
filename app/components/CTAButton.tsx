'use client';

import { type ReactNode } from 'react';

interface CTAButtonProps {
  children: ReactNode;
  size?: 'md' | 'lg';
  onClick?: () => void;
}

export function CTAButton({ children, size = 'md', onClick }: CTAButtonProps) {
  const sizeClasses = size === 'lg' 
    ? 'px-8 py-4 text-lg' 
    : 'px-6 py-3 text-base';

  return (
    <button
      onClick={onClick}
      className={`${sizeClasses} bg-accent text-white font-semibold rounded-lg hover:bg-secondary transition-all duration-200 shadow-lg hover:shadow-glow transform hover:scale-105`}
    >
      {children}
    </button>
  );
}
