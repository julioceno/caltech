import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/projectsData";

export default function Projects() {
    return (
        <section className="bg-neutral-900 py-16 px-8 rounded-3xl">
            <div className="max-w-7xl mx-auto">
                <SectionHeading
                    title="Resultados comprovados em construção comercial"
                    size="md"
                    light
                    className="lg:max-w-2xl"
                />

                <div className="mt-12 flex flex-col md:flex-row gap-8 justify-center lg:justify-start items-center md:items-stretch flex-wrap">
                    {projectsData.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}