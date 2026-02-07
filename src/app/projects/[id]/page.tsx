import Image from "next/image";
import { Metadata } from "next";
import Button from "@/src/components/Button";
import BackToHomeLink from "@/src/components/BackToHomeLink";
import { BsWhatsapp } from "react-icons/bs";
import SectionHeading from "@/src/components/SectionHeading";
import { contentData } from "@/src/data/texts";


const imagePaths = ["/project-example.png", "/project-example.png", "/project-example.png", "/project-example.png", "/project-example.png", "/project-example.png", "/project-example.png", "/project-example.png"];

export default function ProjectPage() {
  return (
    <div>
		<div className="lg:max-w-4xl space-y-4 mb-4">
			<BackToHomeLink />
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
			{imagePaths.map((path) => (
				<div key={path} className="mb-4 break-inside-avoid">
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
