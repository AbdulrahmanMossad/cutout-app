'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        </div>

        {/* Badge */}
        <div className="inline-block mb-6 px-4 py-2 bg-muted border border-primary/30 rounded-full text-sm font-semibold text-primary">
          🔒 100% Privacy-First AI
        </div>

        {/* Main Heading */}
        <h1 className="mb-6 animate-fade-in-up">
          Remove Backgrounds{' '}
          <span className="gradient-text">Offline & On-Device</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          CutOut AI removes image backgrounds in under a second with military-grade encryption. 
          Your photos never leave your device. No cloud. No tracking. No data leaks.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-in-right">
          <a
            href="https://play.google.com/store/apps/details?id=com.abdulrahman.cutoutai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-background font-bold rounded-lg transition-transform duration-300 hover:scale-105 shadow-lg"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.6915026,0.154282163 C17.4744481,0.0154282163 17.2159288,0 16.9572386,0 C16.5160396,0 16.0748407,0.184563758 15.8577862,0.523454157 L0.705224852,21.2987549 C0.488270676,21.5316822 0.379289941,21.8614624 0.379289941,22.1912425 L0.379289941,23.1001027 C0.379289941,23.4298829 0.596244117,23.6628102 0.923720394,23.6628102 L2.94240087,23.6628102 C3.27015502,23.6628102 3.48710919,23.4298829 3.69797153,23.091992 L18.8505694,2.31668613 C19.0676239,2.08375891 19.176604,1.75398866 19.176604,1.42421841 C19.176604,1.09444816 19.0676239,0.754842187 18.8505694,0.523454157 C18.6335148,0.284533118 18.3110195,0.154282163 17.9892604,0.154282163 Z" />
            </svg>
            Download on Google Play
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary hover:bg-primary/10 font-bold rounded-lg transition-colors duration-300"
          >
            Learn More
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-16 pt-12 border-t border-muted/30">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-2xl md:text-3xl font-bold text-primary">0ms</div>
            <p className="text-sm text-muted-foreground mt-1">Cloud Latency</p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-2xl md:text-3xl font-bold text-accent">&lt;1s</div>
            <p className="text-sm text-muted-foreground mt-1">Processing Speed</p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-2xl md:text-3xl font-bold text-primary">100%</div>
            <p className="text-sm text-muted-foreground mt-1">Private</p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-2xl md:text-3xl font-bold text-accent">1K+</div>
            <p className="text-sm text-muted-foreground mt-1">Active Users</p>
          </div>
        </div>
      </div>
    </section>
  );
}
