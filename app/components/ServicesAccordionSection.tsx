import SectionHeading from "./SectionHeading";
import Accordion from "./Accordion";
import { servicesAccordionData } from "../../data/accordionData";

export default function ServicesAccordionSection() {
  return (
    <section className="py-16 lg:py-24">
          <Accordion 
            items={servicesAccordionData}
            allowMultipleOpen={false}
          />
    </section>
  );
}