import SectionTitle from "./SectionTitle";
import Accordion from "./Accordion";
import { servicesAccordionData } from "../data/accordionData";
import Button from "./Button";
import { FiArrowUpRight } from "react-icons/fi";
import { contentData, whatsappComercial } from "../data/texts";

export default function ServicesAccordionSection() {
  return (
    <section className="py-16 lg:py-24 flex  flex-col lg:flex-row gap-10">
      <div className="lg:max-w-xl space-y-6">
        <SectionTitle
          title={contentData.servicesAccordionSection.heading}
          subtitle={contentData.servicesAccordionSection.subtitle}
        />

        <div className="flex justify-center lg:justify-start">
          <Button
            variant="featured"
            iconRight={<FiArrowUpRight className="w-5 h-5" />}
            href={whatsappComercial}
            openInNewTab
          >
            {contentData.servicesAccordionSection.startProjectButton}
          </Button>
        </div>
      </div>
      <Accordion 
        items={servicesAccordionData}
        allowMultipleOpen={false}
      />
    </section>
  );
}