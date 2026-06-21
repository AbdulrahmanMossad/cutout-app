import Hero from '@/components/hero';
import Features from '@/components/features';
import HowItWorks from '@/components/how-it-works';
import CallToAction from '@/components/call-to-action';
import Footer from '@/components/footer';
import Header from '@/components/header';

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </main>
  );
}
