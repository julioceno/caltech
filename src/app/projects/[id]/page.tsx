import Image from "next/image";
import { Metadata } from "next";
import Button from "@/src/components/Button";
import BackToHomeLink from "@/src/components/BackToHomeLink";
import { BsWhatsapp } from "react-icons/bs";
import SectionHeading from "@/src/components/SectionHeading";


export default function ProjectPage() {
  return (
    <div>
		<div className="lg:max-w-4xl space-y-4">
			<BackToHomeLink />
			<SectionHeading 
				title="Resultados comprovados em construção comercial"
			/>
			<Button
				href="https://wa.me/5516993259020"
				variant='green'
				className=""
				iconLeft={<BsWhatsapp size={20} />}
			>
				Solicite um orçamento
			</Button>
		</div>
    </div>
  );
}
