'use client';

export default function CallToAction() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/15 via-accent/15 to-primary/15 border-y border-primary/30">
      <div className="max-w-5xl mx-auto">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/20 border border-primary/40 rounded-full text-sm font-semibold text-primary hover:border-primary/60 transition-colors">
            ⭐ Join Thousands of Privacy-Conscious Users
          </div>

          <h2 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
            Ready to Reclaim Your Privacy?
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Download CutOut AI today and experience lightning-fast, on-device background removal with zero data collection. Your photos are yours alone.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary hover:bg-primary/10 hover:border-accent hover:text-accent font-bold rounded-xl transition-all duration-300"
            >
              Learn More About Privacy
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-12 border-t border-primary/20 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg hover:border-primary/40 transition-colors">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-foreground">No Server Storage</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-accent/10 border border-accent/20 rounded-lg hover:border-accent/40 transition-colors">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-foreground">No Account Required</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg hover:border-primary/40 transition-colors">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-foreground">GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
