import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - CutOut AI',
  description: 'Privacy policy for CutOut AI background removal app',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-muted/30 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-sm text-primary hover:text-secondary mb-6 inline-block">
            ← Back to home
          </Link>
          <h1 className="text-4xl font-bold mb-3">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p>
              CutOut AI (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates with a strong commitment to protecting your privacy. This Privacy Policy explains how we handle your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. On-Device Processing</h2>
            <p>
              CutOut AI processes all images locally on your device using on-device AI. Your photos are never transmitted to our servers or any third-party servers. All image processing occurs entirely on your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Data We Collect</h2>
            <p className="mb-3">
              We collect minimal data:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>App usage analytics (non-identifying)</li>
              <li>Device type and OS version for compatibility</li>
              <li>Crash reports to improve stability</li>
            </ul>
            <p className="mt-3">
              We do not collect, store, or access any of your photos or personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Your Rights</h2>
            <p>
              You have the right to request information about what data we collect, access that data, and request its deletion. Contact us at cutoutai.support@gmail.com for any privacy-related requests.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Security</h2>
            <p>
              We take security seriously. All on-device processing is encrypted, and we regularly update our app to address security vulnerabilities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the updated policy in the app or on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 p-4 rounded-lg bg-primary/10 border border-primary/20">
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
