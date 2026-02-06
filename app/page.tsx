import NotchCard from "./components/NotchCard";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Hero />
      <AboutSection />
      <ServicesSection />
    </div>
  );
}
