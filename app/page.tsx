import Hero from '@/components/Hero';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import UseCases from '@/components/UseCases';
import Pricing from '@/components/Pricing';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <HowItWorks />
      <UseCases />
      <Pricing />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
