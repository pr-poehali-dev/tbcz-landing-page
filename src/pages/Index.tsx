import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import TariffsSection from '@/components/sections/TariffsSection';
import FaqSection from '@/components/sections/FaqSection';
import ContactsSection from '@/components/sections/ContactsSection';
import Footer from '@/components/sections/Footer';

export default function Index() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Header scrollToSection={scrollToSection} />
      <HeroSection />
      <AboutSection />
      <TariffsSection />
      <FaqSection />
      <ContactsSection />
      <Footer />
    </div>
  );
}
