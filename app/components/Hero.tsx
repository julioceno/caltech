import Image from "next/image";
import Button from "./Button";
import SectionHeading from "./SectionHeading";
import { FiArrowUpRight } from "react-icons/fi";

export default function Hero() {
    return (
        <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-16">
            <div className="flex-1 max-w-2xl flex flex-col items-center lg:items-start order-1">
                <SectionHeading
                    title={`Construindo excelência\nUm projeto de cada vez`}
                    subtitle="Caltech oferece serviços de construção comercial de alto nível em todo o Brasil, transformando projetos em realidade com precisão e experiência."
                />

                <div className="mt-8">
                    <Button
                        variant="featured"
                        iconRight={<FiArrowUpRight className="w-5 h-5" />}
                    >
                        Iniciar projeto
                    </Button>
                </div>
            </div>

            <div className="w-full lg:flex-1 flex justify-center lg:justify-end order-2 relative">
                <div className="relative w-full max-w-[500px] aspect-square">
                    <div className="absolute inset-4 rounded-2xl overflow-hidden z-10">
                        <Image
                            src="/main.svg"
                            alt="Construção Caltech"
                            fill
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}