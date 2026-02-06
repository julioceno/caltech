import SectionHeading from "./SectionHeading";
import Accordion from "./Accordion";
import { servicesAccordionData } from "../../data/accordionData";
import Button from "./Button";
import { FiArrowUpRight } from "react-icons/fi";

export default function ServicesAccordionSection() {
  return (
    <section className="py-16 lg:py-24 flex  flex-col lg:flex-row gap-10">
      <div className="lg:max-w-xl space-y-6">
        <SectionHeading title="Por que as empresas confiam na Caltech?" subtitle="Com vasta experiência no setor industrial, entregamos soluções de alta performance em manutenção, montagens e serviços especializados. Nossa equipe técnica é certificada e treinada para atuar sob rigorosos padrões de segurança e conformidade com as normas NR-12 e NR-13. Garantimos a continuidade operacional e a integridade do seu patrimônio com processos padronizados e foco total em resultados sustentáveis."/>
        <Button variant="featured" iconRight={<FiArrowUpRight className="w-5 h-5" />}>Comece seu projeto</Button>
      </div>
      <Accordion 
        items={servicesAccordionData}
        allowMultipleOpen={false}
      />
    </section>
  );
}