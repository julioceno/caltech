"use client";

import ServiceCard from "./ServiceCard";
import { contentData } from "../data/texts";

export default function ServicesSection() {
    const services = contentData.servicesSection.services;

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 xlg:max-w-xl">
                   <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-tight font-bold text-primary text-center xlg:text-left`}>
                        {contentData.servicesSection.heading}
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