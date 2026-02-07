import ProjectCard from "./ProjectCard";
import { projectsData } from "@/src/data/projectsData";
import { contentData } from "../data/texts";

export default function Projects() {
    return (
        <section id="servicos" className="bg-neutral-900 py-16 px-8 rounded-3xl">
            <div className="max-w-7xl mx-auto">
                <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl leading-tight font-bold text-white text-center xlg:text-left xlg:max-w-2xl`}>
                    {contentData.projects.heading}
                </h2>

                <div className="mt-12 flex flex-col md:flex-row gap-8 justify-center items-center flex-wrap xlg:flex-nowrap">
                    {projectsData.map((project) => (
                        <ProjectCard
                            key={project.slug}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            link={'/projetos/' + project.slug}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}