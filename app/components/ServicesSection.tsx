"use client";

import ServiceCard from "./ServiceCard";
import SectionHeading from "./SectionHeading";

export default function ServicesSection() {
    const services = [
        {
            title: "Contratação geral",
            description: "Gerenciamos todo o processo de construção, garantindo que cada projeto seja concluído no prazo, dentro do orçamento e com os mais altos padrões.",
            icon: "blueprint-ruler.svg",
        },
        {
            title: "Projetar e construir",
            description: "Nossa abordagem integrada de projeto e construção agiliza a construção, lidando com o planejamento arquitetônico e um fluxo de trabalho tranquilo, desde o conceito até a conclusão.",
            icon: "building-3d.svg",
        },
        {
            title: "Project management",
            description: "Cuidamos de todos os detalhes, desde o orçamento e agendamento até a gestão de riscos e controle de qualidade.",
            icon: "construction.svg",
        },
    ];

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 lg:max-w-xl">
                    <SectionHeading title="Nossa experiência em construção industrial" />
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 justify-center lg:justify-start items-center md:items-stretch flex-wrap">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}