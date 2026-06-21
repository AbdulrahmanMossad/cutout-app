import Link from 'next/link';

export const metadata = {
  title: 'Documentation - CutOut AI',
  description: 'Learn how to use CutOut AI to remove backgrounds from your photos',
};

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-muted/30 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-sm text-primary hover:text-secondary mb-6 inline-block">
            ← Back to home
          </Link>
          <h1 className="text-4xl font-bold mb-3">Documentation</h1>
          <p className="text-lg text-muted-foreground">
            Learn how to use CutOut AI and get the most out of our background removal tool.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Getting Started */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Getting Started</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                CutOut AI is a privacy-first background removal tool powered by on-device AI. Your photos never leave your device, ensuring complete privacy and security.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6">Installation</h3>
              <p>
                Download CutOut AI from the Google Play Store. The app is available for Android devices and requires minimal storage space.
              </p>
            </div>
          </section>

          {/* How to Use */}
          <section>
            <h2 className="text-3xl font-bold mb-6">How to Use</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <ol className="list-decimal list-inside space-y-3">
                <li>Open the CutOut AI app on your device</li>
                <li>Select a photo from your gallery or take a new photo</li>
                <li>The app will automatically detect and remove the background</li>
                <li>Fine-tune the result using the editing tools if needed</li>
                <li>Save or share your edited photo</li>
              </ol>
            </div>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                <h3 className="font-semibold text-foreground mb-2">🔒 On-Device Processing</h3>
                <p className="text-sm text-muted-foreground">
                  All processing happens on your device. Your photos are never uploaded to our servers.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                <h3 className="font-semibold text-foreground mb-2">⚡ Fast Performance</h3>
                <p className="text-sm text-muted-foreground">
                  Get high-quality background removal results in seconds using advanced AI algorithms.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                <h3 className="font-semibold text-foreground mb-2">✨ Easy to Use</h3>
                <p className="text-sm text-muted-foreground">
                  Intuitive interface that makes background removal accessible to everyone.
                </p>
              </div>
            </div>
          </section>

          {/* Support */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
            <div className="p-6 rounded-lg bg-primary/10 border border-primary/20">
              <p className="text-muted-foreground mb-4">
                If you have any questions or need assistance, feel free to contact our support team:
              </p>
              <a href="mailto:cutoutai.support@gmail.com" className="text-primary hover:text-secondary font-semibold transition-colors">
                cutoutai.support@gmail.com
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
