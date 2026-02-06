import Image from "next/image";
import PolygonCard from "./PolygonCard";
import { NavItem } from "./NavItem";
import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";

function SocialIcons() {
  return (
    <div className="flex items-center gap-3">
      <a
        href="#"
        aria-label="LinkedIn"
        className="bg-white rounded-lg p-2 text-primary hover:opacity-80 transition-opacity"
      >
        <FaLinkedinIn size={18} />
      </a>
      <a
        href="#"
        aria-label="Instagram"
        className="bg-white rounded-lg p-2 text-primary hover:opacity-80 transition-opacity"
      >
        <FaInstagram size={18} />
      </a>
      <a
        href="#"
        aria-label="X"
        className="bg-white rounded-lg p-2 text-primary hover:opacity-80 transition-opacity"
      >
        <FaXTwitter size={18} />
      </a>
    </div>
  );
}

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <PolygonCard
                className="w-full"
                cardBgColor="bg-primary"
                notchWidth={180}
                notchHeight={40}
                notchContent={<SocialIcons />}
            >
            <div className="px-8 pt-10 md:pt-20 pb-4 md:pb-8 text-white flex flex-col justify-center gap-5 md:gap-8">
                <div className="flex flex-col md:flex-row items-center md:items-start  justify-between gap-3">
                    <p className="text-sm font-medium text-center md:text-left">
                        Construindo o futuro com excelência
                    </p>

                    <nav className="flex items-center gap-4 md:gap-10">
                        <NavItem href="#about" light>Sobre nós</NavItem>
                        <NavItem href="#services" light>Serviços</NavItem>
                        <NavItem href="#projects" light>Projetos</NavItem>
                        <NavItem href="#contact" light>Contato</NavItem>
                    </nav>
                </div>
                <div className="flex flex-col md:flex-row justify-between text-center md:text-left items-center md:items-start gap-2 md:gap-5">
                    <Image
                        src="/logo.svg"
                        alt="Caltech Logo"
                        className="invert"
                        width={100}
                        height={100}
                    />
                    <h3 className="text-xs font-medium text-white">
                        Copyright © {currentYear} Caltech | 00.000.000/0000-00
                    </h3>
                </div>
            </div>
            </PolygonCard>
        </footer>
    );
}
