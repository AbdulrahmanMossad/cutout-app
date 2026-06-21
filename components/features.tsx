'use client';

export default function Features() {
  const features = [
    {
      icon: '🔒',
      title: '100% Private Processing',
      description: 'All AI inference runs locally on your device. Your photos never touch any server or cloud service.',
    },
    {
      icon: '⚡',
      title: 'Lightning-Fast Speed',
      description: 'Remove backgrounds in under 1 second using optimized TFLite and ONNX models on your GPU/NPU.',
    },
    {
      icon: '✈️',
      title: 'Works Offline',
      description: 'No internet connection required. Perfect for editing on-the-go without consuming cellular data.',
    },
    {
      icon: '🎨',
      title: 'Smart Edge Detection',
      description: 'Advanced ML models provide precise subject isolation with intelligent edge detection and anti-aliasing.',
    },
    {
      icon: '📱',
      title: 'Android Native',
      description: 'Optimized for Android devices with support for NPU acceleration on compatible hardware.',
    },
    {
      icon: '🔄',
      title: 'Batch Processing',
      description: 'Process multiple photos efficiently. Edit entire albums in minutes instead of hours.',
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 gradient-text">Powerful Features Built for Privacy</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade AI technology in your pocket. No servers. No data collection. Just pure privacy.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-muted bg-background/50 hover:border-primary/50 hover:bg-background transition-all duration-300 group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Privacy Badge */}
        <div className="mt-16 pt-12 border-t border-muted/30 flex flex-col sm:flex-row items-center justify-between">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h3 className="text-lg font-bold text-primary mb-1">Privacy-First Architecture</h3>
            <p className="text-muted-foreground">
              No servers, no accounts, no tracking. Your data is yours alone.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="px-4 py-2 bg-muted rounded-lg text-center">
              <div className="text-sm font-semibold text-accent">GDPR</div>
              <div className="text-xs text-muted-foreground">Compliant</div>
            </div>
            <div className="px-4 py-2 bg-muted rounded-lg text-center">
              <div className="text-sm font-semibold text-primary">Open</div>
              <div className="text-xs text-muted-foreground">Source Ready</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
