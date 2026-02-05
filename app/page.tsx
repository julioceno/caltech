import NotchCard from "./components/NotchCard";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Hero />
      <ServicesSection />
    </div>
  );
}
