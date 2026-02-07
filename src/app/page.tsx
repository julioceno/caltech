import { Metadata } from "next";

import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import ServicesAccordionSection from "../components/ServicesAccordionSection";
import ContactSection from "../components/ContactSection";
import Projects from "../components/Projects";
import Clients from "../components/Clients";

export const metadata: Metadata = {
  title: "Caltech — Construindo Excelência um Projeto de Cada Vez",
  description:
    "Especialista em manutenção industrial, montagens mecânicas, soldagem e fabricação, consultoria e projetos. Atuamos nos setores alimentício, químico e agronegócio com equipes certificadas NR-12 e NR-13, garantindo segurança, confiabilidade e continuidade operacional.",
  openGraph: {
    title: "Caltech — Construindo Excelência um Projeto de Cada Vez",
    description:
      "Manutenção corretiva e preventiva, montagens e instalações mecânicas, soldagem industrial, consultoria técnica. Soluções de alta performance com equipes certificadas para máxima confiabilidade.",
    images: [
      {
        url: "/logo.svg",
        alt: "Caltech Logo",
      },
    ],
  },
};

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
