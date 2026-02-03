import Button from "./Button";
import SectionHeading from "./SectionHeading";

export default function Hero() {
    return (
        <section >
            <SectionHeading
                title={`Construindo excelência\nUm projeto de cada vez`}
                subtitle="Caltech oferece serviços de construção comercial de alto nível em todo o Brasil, transformando projetos em realidade com precisão e experiência."
            />
            <Button>Entre em contato</Button>
        </section>
    )
}