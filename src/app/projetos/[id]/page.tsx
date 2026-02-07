import Image from "next/image";
import { Metadata } from "next";
import Button from "@/src/components/Button";
import BackToHomeLink from "@/src/components/BackToHomeLink";
import { BsWhatsapp } from "react-icons/bs";
import SectionHeading from "@/src/components/SectionHeading";
import { contentData } from "@/src/data/texts";
import { projectsData as projects } from "@/src/data/projectsData";
import Link from "next/link";

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

const imagePaths = ["/project-example.png", "/project-example.png", "/project-example.png", "/project-example.png", "/project-example.png", "/project-example.png", "/project-example.png", "/project-example.png"];

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
  return (
    <div>
		<div className="lg:max-w-4xl space-y-4 mb-4">
			<BackToHomeLink href="/#servicos" />
			<SectionHeading 
				title={contentData.projectPage.heading}
			/>
			<Button
				href="https://wa.me/5516993259020"
				variant='green'
				className=""
				iconLeft={<BsWhatsapp size={20} />}
			>
				{contentData.projectPage.requestQuoteButton}
			</Button>
		</div>

		   <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4  gap-4 mb-8">
			{imagePaths.map((path, index) => (
				<div key={`${path}-${index}`} className="mb-4 break-inside-avoid">
					<Image
						src={path}
						alt={path}
						width={500}
						height={500}
						className="w-full h-auto rounded-lg"
					/>
				</div>
				))}
			</div>
    </div>
  );
}
