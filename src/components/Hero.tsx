import Image from "next/image";
import Button from "./Button";
import SectionTitle from "./SectionTitle";
import { FiArrowUpRight } from "react-icons/fi";
import { contentData, whatsappComercialLink } from "../data/texts";

export default function Hero() {
    const MainButton = () => (
        <Button variant="featured" iconRight={<FiArrowUpRight className="w-5 h-5" />} href={whatsappComercialLink} openInNewTab>
            {contentData.hero.startProjectButton}
        </Button>
    );

    return (
        <section className="max-w-7xl mx-auto flex flex-col lg:flex-row  lg:items-center gap-3 md:gap-6 lg:gap-16 w-full">
            <div className="flex-1 flex flex-col order-1">
                <SectionTitle
                    title={contentData.hero.title}
                    subtitle={contentData.hero.subtitle}
                />
                <div className="hidden lg:flex mt-8 flex-wrap  gap-4">
                    <MainButton />
                </div>
            </div>

            <div className="w-full lg:flex-1 flex justify-center lg:justify-end order-2 lg:order-2 relative">
                <div className="w-full lg:flex-1 flex justify-center lg:justify-end order-2 lg:order-2">
                    <div className="relative w-70 h-84 sm:w-72 sm:h-87.5 md:w-80 md:h-96 lg:w-105 lg:h-125  overflow-hidden shrink-0">
                        <Image
                            src="/main.webp"
                            alt="Construção Caltech"
                            fill
                            priority
                        />
                    </div>
                </div>
            </div>

            <div className="flex lg:hidden flex-wrap justify-center gap-4 order-3 w-full">
                <MainButton />
            </div>
        </section>
    );
}