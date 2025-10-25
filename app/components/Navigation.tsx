'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-bg/80 backdrop-blur-lg border-b border-surface">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-fg font-display">Zolan</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-fg hover:text-accent transition-colors duration-200">
              About
            </a>
            <a href="#features" className="text-fg hover:text-accent transition-colors duration-200">
              Features
            </a>
            <a href="#contact" className="text-fg hover:text-accent transition-colors duration-200">
              Contact
            </a>
            <a href="#blog" className="text-fg hover:text-accent transition-colors duration-200">
              Blog
            </a>
            <button className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-secondary transition-colors duration-200">
              Start Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-fg"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#about" className="block text-fg hover:text-accent transition-colors duration-200">
              About
            </a>
            <a href="#features" className="block text-fg hover:text-accent transition-colors duration-200">
              Features
            </a>
            <a href="#contact" className="block text-fg hover:text-accent transition-colors duration-200">
              Contact
            </a>
            <a href="#blog" className="block text-fg hover:text-accent transition-colors duration-200">
              Blog
            </a>
            <button className="w-full px-6 py-2 bg-accent text-white rounded-lg hover:bg-secondary transition-colors duration-200">
              Start Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
