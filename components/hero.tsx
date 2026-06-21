'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-gradient-to-b from-background via-background to-muted/10">
      <div className="max-w-7xl mx-auto w-full">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/40 rounded-full text-sm font-semibold text-primary hover:border-primary/60 transition-colors cursor-default">
              🔒 Privacy-First AI Technology
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up">
              Remove Backgrounds{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-gradient">
                Instantly & Offline
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
              CutOut AI removes image backgrounds in under a second with military-grade encryption. Your photos never leave your device. No cloud. No tracking. No data leaks.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
              <a
                href="https://play.google.com/store/apps/details?id=com.abdulrahman.cutoutai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-background font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.6915026,0.154282163 C17.4744481,0.0154282163 17.2159288,0 16.9572386,0 C16.5160396,0 16.0748407,0.184563758 15.8577862,0.523454157 L0.705224852,21.2987549 C0.488270676,21.5316822 0.379289941,21.8614624 0.379289941,22.1912425 L0.379289941,23.1001027 C0.379289941,23.4298829 0.596244117,23.6628102 0.923720394,23.6628102 L2.94240087,23.6628102 C3.27015502,23.6628102 3.48710919,23.4298829 3.69797153,23.091992 L18.8505694,2.31668613 C19.0676239,2.08375891 19.176604,1.75398866 19.176604,1.42421841 C19.176604,1.09444816 19.0676239,0.754842187 18.8505694,0.523454157 C18.6335148,0.284533118 18.3110195,0.154282163 17.9892604,0.154282163 Z" />
                </svg>
                Download on Google Play
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary hover:bg-primary/10 font-bold rounded-xl transition-all duration-300 hover:border-accent hover:text-accent"
              >
                Explore Features
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">0ms</div>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">Cloud Latency</p>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">&lt;1s</div>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">Process Time</p>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">100%</div>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">Private</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-sm aspect-[9/11]">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl -z-10"></div>
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300">
                <Image
                  src="/assets/5d2121fa-9ff3-491f-88ac-652f87962b5d_thumbnail_with_bgc.png"
                  alt="CutOut AI App Preview"
                  fill
                  className="object-cover animate-fade-in-up"
                  priority
                  style={{ animationDelay: '0.2s' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
