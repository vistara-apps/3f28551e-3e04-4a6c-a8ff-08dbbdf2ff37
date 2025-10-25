'use client';

import { CTAButton } from './CTAButton';

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Main Circle with Glow */}
        <div className="relative inline-block mb-8">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-accent flex items-center justify-center glow-effect">
            <h1 className="text-5xl md:text-7xl font-bold text-fg font-display">
              Zolan
            </h1>
          </div>
        </div>

        {/* Tagline */}
        <h2 className="text-2xl md:text-4xl font-semibold text-fg mb-6 font-display">
          Intelligent AI for Modern Solutions
        </h2>

        <p className="text-lg md:text-xl text-secondary mb-8 max-w-2xl mx-auto">
          Co-create and build onchain reputation with your personalized AI companion, directly within Farcaster
        </p>

        {/* CTA Button */}
        <CTAButton size="lg">
          Start Now
        </CTAButton>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div>
            <div className="text-3xl font-bold text-accent mb-2">10K+</div>
            <div className="text-sm text-secondary">Active Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">50K+</div>
            <div className="text-sm text-secondary">Co-Creations</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">100K+</div>
            <div className="text-sm text-secondary">Interactions</div>
          </div>
        </div>
      </div>
    </section>
  );
}
