'use client';

import { useEffect, useState } from 'react';
import { Sparkles, Zap, Trophy, Users } from 'lucide-react';
import { HeroSection } from './components/HeroSection';
import { FeatureCard } from './components/FeatureCard';
import { CTAButton } from './components/CTAButton';
import { Navigation } from './components/Navigation';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen bg-bg">
      <Navigation />
      
      <HeroSection />

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-fg mb-4 font-display">
            Powerful Features
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Experience the future of AI-powered onchain interactions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<Sparkles className="w-8 h-8" />}
            title="Personalized AI"
            description="Engage with Zolan in unique, tailored conversations that evolve with you"
          />
          <FeatureCard
            icon={<Zap className="w-8 h-8" />}
            title="Co-Creation"
            description="Collaborate with Zolan to create content and mint it onchain"
          />
          <FeatureCard
            icon={<Trophy className="w-8 h-8" />}
            title="Onchain Reputation"
            description="Build verifiable reputation through your interactions and creations"
          />
          <FeatureCard
            icon={<Users className="w-8 h-8" />}
            title="Social Native"
            description="Share your creations seamlessly within Farcaster"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 sm:px-8 lg:px-12">
        <div className="bg-surface rounded-lg p-12 text-center shadow-card">
          <h2 className="text-3xl font-bold text-fg mb-4 font-display">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
            Join thousands of creators building their onchain reputation with Zolan AI
          </p>
          <CTAButton size="lg">
            Launch Zolan App
          </CTAButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-surface mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-secondary text-sm">
              © 2024 Zolan AI. Built on Base.
            </div>
            <div className="flex gap-6 text-sm text-secondary">
              <a href="#" className="hover:text-accent transition-colors duration-200">About</a>
              <a href="#" className="hover:text-accent transition-colors duration-200">Features</a>
              <a href="#" className="hover:text-accent transition-colors duration-200">Contact</a>
              <a href="#" className="hover:text-accent transition-colors duration-200">Blog</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
