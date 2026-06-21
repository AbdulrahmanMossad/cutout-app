'use client';

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Open an Image',
      description: 'Select any photo from your gallery or take a new picture in the app.',
    },
    {
      number: '2',
      title: 'AI Magic',
      description: 'Advanced ML models instantly detect and isolate the subject on your device.',
    },
    {
      number: '3',
      title: 'Save or Share',
      description: 'Download with transparent background or export to any format you need.',
    },
    {
      number: '4',
      title: 'Your Data Stays Safe',
      description: 'Everything stays on your device. No cloud, no tracking, no data collection.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 gradient-text">How CutOut AI Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                <div className="hidden lg:block absolute top-12 left-full w-full h-1 bg-gradient-to-r from-primary to-accent -translate-x-8" />
              )}

              {/* Step Card */}
              <div className="relative z-10">
                {/* Number circle */}
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-3xl font-bold text-background shadow-lg">
                  {step.number}
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>

              {/* Mobile connector */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center mt-8">
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
          <h3 className="text-center text-xl font-bold mb-8">Powered by Advanced ML Technology</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['TensorFlow Lite', 'ONNX Runtime', 'NPU Optimization', 'Quantized Models'].map((tech, i) => (
              <div
                key={i}
                className="p-4 bg-muted rounded-lg text-center border border-muted hover:border-primary/50 transition-colors"
              >
                <p className="font-semibold text-foreground">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
