import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import ServicesAccordionSection from "../components/ServicesAccordionSection";
import ContactSection from "../components/ContactSection";
import Projects from "../components/Projects";
import Clients from "../components/Clients";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <Projects />
      <ServicesAccordionSection />
      <Clients />
      <ContactSection />
    </div>
  );
}
