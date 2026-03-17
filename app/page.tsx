import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Philosophy />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
