'use client';

export default function CallToAction() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-muted">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-6 gradient-text">Ready to Reclaim Your Privacy?</h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Join thousands of users who trust CutOut AI to keep their photos private. 
          Download the app today and experience lightning-fast, on-device background removal.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            Learn More About Privacy
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 pt-12 border-t border-muted/30 flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-muted-foreground">No Server Storage</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-muted-foreground">No Account Required</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-muted-foreground">GDPR Compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
}
