'use client';

import { type ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-surface rounded-lg p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
      <div className="text-accent mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-fg mb-2 font-display">
        {title}
      </h3>
      <p className="text-secondary text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
