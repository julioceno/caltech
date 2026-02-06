import TopLeftNotchCard from "./TopLeftNotchCard";

export default function AboutSection() {
  return (

    <TopLeftNotchCard
      label={<span className="text-secondary font-semibold text-xs sm:text-sm">Sobre nós</span>}
      className="mt-24"
    >
      <p className=" font-medium text-base sm:text-lg md:text-xl sm:leading-relaxed text-center sm:text-left">
        Especialista em manutenção e montagens industriais de alta complexidade, a Caltech entrega soluções que maximizam a confiabilidade e a segurança operacional. Com sólida atuação nos setores alimentício, químico e agronegócio , destacamo-nos pela excelência em soldagens sanitárias para linhas de processo , garantindo integridade metalúrgica e acabamento rigoroso em aço inox. Nossa operação é pautada pelo cumprimento estrito das normas NR-12 e NR-13 , com equipes certificadas e processos rastreáveis que asseguram a continuidade produtiva e a conformidade legal de seus ativos.
      </p>
    </TopLeftNotchCard>
  );
}