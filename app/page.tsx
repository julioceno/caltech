import NotchCard from "./components/NotchCard";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import TopLeftNotchCard from "./components/TopLeftNotchCard";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Hero />
      <TopLeftNotchCard
        className="w-full h-[400px]"
        label={<span className="text-secondary font-semibold text-sm">Sobre nós</span>}
      >
        <p className="text-foreground">
          Especializada em manutenção e montagens industriais...
        </p>
      </TopLeftNotchCard>
      <ServicesSection />
    </div>
  );
}
