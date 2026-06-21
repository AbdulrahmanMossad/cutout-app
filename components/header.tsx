'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-muted/50 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 text-xl font-bold gradient-text hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center overflow-hidden shadow-lg">
              <Image 
                src="/assets/icon.png" 
                alt="CutOut AI Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="hidden sm:inline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">CutOut AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-muted-foreground hover:text-foreground">
              Features
            </Link>
            <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground">
              How It Works
            </Link>
            <a
              href="https://play.google.com/store/apps/details?id=com.abdulrahman.cutoutai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-primary hover:bg-accent text-background rounded-lg font-semibold"
            >
              Download
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-muted">
            <Link href="#features" className="block py-2 text-muted-foreground hover:text-foreground">
              Features
            </Link>
            <Link href="#how-it-works" className="block py-2 text-muted-foreground hover:text-foreground">
              How It Works
            </Link>
            <a
              href="https://play.google.com/store/apps/details?id=com.abdulrahman.cutoutai"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 px-6 py-2 bg-primary hover:bg-accent text-background rounded-lg font-semibold text-center"
            >
              Download
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
