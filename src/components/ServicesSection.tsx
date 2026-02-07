"use client";

import ServiceCard from "./ServiceCard";

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
                <div className="mb-16 xlg:max-w-xl">
                   <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-tight font-bold text-primary text-center xlg:text-left`}>
                        Nossa experiência em construção industrial
                    </h2>
                </div>
                
                <div className="mt-12 flex flex-col md:flex-row gap-8 justify-center items-center flex-wrap xlg:flex-nowrap">
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