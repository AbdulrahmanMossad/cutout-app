'use client';

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Open an Image',
      description: 'Select any photo from your gallery or take a new picture in the app.',
      icon: '📸',
    },
    {
      number: '2',
      title: 'AI Magic',
      description: 'Advanced ML models instantly detect and isolate the subject on your device.',
      icon: '✨',
    },
    {
      number: '3',
      title: 'Save or Share',
      description: 'Download with transparent background or export to any format you need.',
      icon: '💾',
    },
    {
      number: '4',
      title: 'Your Data Stays Safe',
      description: 'Everything stays on your device. No cloud, no tracking, no data collection.',
      icon: '🔒',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm font-semibold text-accent">
            🚀 Simple Process
          </div>
          <h2 className="mb-4 text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            How CutOut AI Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Four simple steps to remove backgrounds with military-grade privacy.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-1 bg-gradient-to-r from-primary to-accent" />
              )}

              {/* Step Card */}
              <div className="relative z-10 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                {/* Icon and Number */}
                <div className="flex items-end gap-3 mb-6">
                  <div className="text-4xl">{step.icon}</div>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-xl font-bold text-background shadow-lg group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>

              {/* Mobile connector */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center mt-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-20 pt-12 border-t border-muted/30">
          <h3 className="text-center text-xl font-bold mb-8 gradient-text">Powered by Advanced ML Technology</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'TensorFlow Lite', emoji: '🧠' },
              { name: 'ONNX Runtime', emoji: '⚙️' },
              { name: 'NPU Optimization', emoji: '⚡' },
              { name: 'Quantized Models', emoji: '📦' }
            ].map((tech, i) => (
              <div
                key={i}
                className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl text-center border border-primary/20 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="text-3xl mb-2 group-hover:scale-125 transition-transform">{tech.emoji}</div>
                <p className="font-semibold text-foreground">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
