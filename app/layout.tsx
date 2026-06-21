import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CutOut AI - Privacy-First Offline Background Remover',
  description: 'Remove image backgrounds 100% offline and on-device. Fast, private, and secure background removal for Android with zero cloud uploads.',
  keywords: ['background remover', 'offline AI', 'privacy', 'image editing', 'Android app'],
  authors: [{ name: 'Abdulrahman Mossad' }],
  creator: 'Abdulrahman Mossad',
  publisher: 'CutOut AI',
  robots: 'index, follow',
  verification: {
    google: '1JnJwWlRv4ZBiJemRxPPXCRNhBiFvBBPo8cCwJOE_rs',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cutout-ai.com',
    title: 'CutOut AI - Privacy-First Offline Background Remover',
    description: 'Remove image backgrounds 100% offline and on-device. Fast, private, and secure.',
    siteName: 'CutOut AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CutOut AI - Privacy-First Offline Background Remover',
    description: 'Remove image backgrounds 100% offline and on-device.',
    creator: '@CutOutAI',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  metadataBase: new URL('https://cutout-ai.com'),
  alternates: {
    canonical: 'https://cutout-ai.com',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0f172a',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'CutOut AI',
              description: 'Privacy-focused offline background remover for Android',
              applicationCategory: 'Multimedia',
              operatingSystem: 'Android',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              downloadUrl: 'https://play.google.com/store/apps/details?id=com.abdulrahman.cutoutai',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '1250',
              },
            }),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
