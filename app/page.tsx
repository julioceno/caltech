import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import ServicesAccordionSection from "./components/ServicesAccordionSection";
import ContactSection from "./components/ContactSection";
import PolygonCard from "./components/PolygonCard";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ServicesAccordionSection />
      <ContactSection />

      <PolygonCard className="w-full" cardBgColor="bg-primary">
  <div className="p-8 h-40 text-white">
    {/* conteúdo do footer */}
  </div>
</PolygonCard>

  
    </div>
  );
}
