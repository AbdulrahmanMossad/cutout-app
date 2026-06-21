import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service - CutOut AI',
  description: 'Terms of Service for CutOut AI background removal app',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-muted/30 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-sm text-primary hover:text-secondary mb-6 inline-block">
            ← Back to home
          </Link>
          <h1 className="text-4xl font-bold mb-3">Terms of Service</h1>
          <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, and using CutOut AI, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use the app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. License Grant</h2>
            <p>
              We grant you a limited, non-exclusive, non-transferable license to use CutOut AI on your personal device. You may not redistribute, sell, or modify the app without our permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. User Responsibilities</h2>
            <p className="mb-3">
              You agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Use CutOut AI for legal purposes only</li>
              <li>Not violate any laws or regulations</li>
              <li>Not use the app to process copyrighted content without permission</li>
              <li>Not attempt to reverse-engineer or modify the app</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Disclaimer of Warranties</h2>
            <p>
              CutOut AI is provided &quot;as is&quot; without warranties of any kind. We do not guarantee the accuracy, quality, or reliability of the background removal results.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, we are not liable for any indirect, incidental, special, or consequential damages arising from your use of CutOut AI.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to CutOut AI at any time for violations of these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Changes to Terms</h2>
            <p>
              We may update these Terms of Service from time to time. Continued use of CutOut AI after changes constitutes your acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us at:
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
