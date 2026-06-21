'use client';

export default function Features() {
  const features = [
    {
      icon: '🔒',
      title: '100% Private Processing',
      description: 'All AI inference runs locally on your device. Your photos never touch any server or cloud service.',
      gradient: 'from-primary/20 to-primary/5',
      borderColor: 'border-primary/30',
    },
    {
      icon: '⚡',
      title: 'Lightning-Fast Speed',
      description: 'Remove backgrounds in under 1 second using optimized TFLite and ONNX models on your GPU/NPU.',
      gradient: 'from-accent/20 to-accent/5',
      borderColor: 'border-accent/30',
    },
    {
      icon: '✈️',
      title: 'Works Offline',
      description: 'No internet connection required. Perfect for editing on-the-go without consuming cellular data.',
      gradient: 'from-primary/20 to-primary/5',
      borderColor: 'border-primary/30',
    },
    {
      icon: '🎨',
      title: 'Smart Edge Detection',
      description: 'Advanced ML models provide precise subject isolation with intelligent edge detection and anti-aliasing.',
      gradient: 'from-accent/20 to-accent/5',
      borderColor: 'border-accent/30',
    },
    {
      icon: '📱',
      title: 'Android Native',
      description: 'Optimized for Android devices with support for NPU acceleration on compatible hardware.',
      gradient: 'from-primary/20 to-primary/5',
      borderColor: 'border-primary/30',
    },
    {
      icon: '🔄',
      title: 'Batch Processing',
      description: 'Process multiple photos efficiently. Edit entire albums in minutes instead of hours.',
      gradient: 'from-accent/20 to-accent/5',
      borderColor: 'border-accent/30',
    },
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/20 via-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-semibold text-primary">
            ✨ Key Features
          </div>
          <h2 className="mb-4 text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Powerful Features Built for Privacy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Enterprise-grade AI technology in your pocket. No servers. No data collection. Just pure privacy.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl border ${feature.borderColor} bg-gradient-to-br ${feature.gradient} backdrop-blur-sm hover:${feature.borderColor.replace('/30', '/50')} hover:shadow-lg transition-all duration-300 group cursor-pointer animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Privacy Badge Section */}
        <div className="mt-12 pt-12 border-t border-muted/30">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-2">
                Privacy-First Architecture
              </h3>
              <p className="text-muted-foreground">
                No servers, no accounts, no tracking. Your data is yours alone.
              </p>
            </div>
            <div className="flex gap-4 flex-wrap justify-center sm:justify-end">
              <div className="px-6 py-3 bg-primary/20 border border-primary/30 rounded-lg text-center hover:bg-primary/30 transition-colors">
                <div className="font-semibold text-primary">🛡️ GDPR</div>
                <div className="text-xs text-muted-foreground">Compliant</div>
              </div>
              <div className="px-6 py-3 bg-accent/20 border border-accent/30 rounded-lg text-center hover:bg-accent/30 transition-colors">
                <div className="font-semibold text-accent">📖 Open</div>
                <div className="text-xs text-muted-foreground">Source Ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
