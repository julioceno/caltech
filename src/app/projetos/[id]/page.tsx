import { Metadata } from "next";
import Button from "@/src/components/Button";
import BackToHomeLink from "@/src/components/BackToHomeLink";
import { BsWhatsapp } from "react-icons/bs";
import SectionHeading from "@/src/components/SectionHeading";
import ProjectGallery from "@/src/components/ProjectGallery";
import { contentData, whatsappComercial } from "@/src/data/texts";
import { projectsData as projects } from "@/src/data/projectsData";
import { getProjectImages } from "@/src/utils/getProjectImages";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: contentData.projectPage.notFound.title,
      description: contentData.projectPage.notFound.description,
    };
  }

  return {
    title: project.title,
    description: project.paragraph,
    openGraph: {
      images: [{ url: project.image, alt: project.title }],
    },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: Props) {
    const { id } = await params;
	const project = projects.find((p) => p.id === id);

	if (!project) {
	return (
		<div className="flex flex-col items-center justify-center text-center py-20">
			<h1 className="text-4xl font-bold mb-4">{contentData.projectPage.notFound.title}</h1>
			<p className="text-lg text-gray-600 mb-8">{contentData.projectPage.notFound.description}</p>
			<BackToHomeLink href="/#servicos" />
		</div>
	);
	}

  const imagePaths = await getProjectImages(project.folder.replace(/^\//, ""));

  return (
    <div>
		<div className="lg:max-w-4xl space-y-4 mb-4">
			<BackToHomeLink href="/#servicos" />
			<SectionHeading 
				title={contentData.projectPage.heading}
				align="left"
			/>
			<Button
				href={whatsappComercial}
				variant='green'
				className=""
				iconLeft={<BsWhatsapp size={20} />}
			>
				{contentData.projectPage.requestQuoteButton}
			</Button>
		</div>
		<ProjectGallery imagePaths={imagePaths} />
    </div>
  );
}
