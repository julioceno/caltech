import Image from "next/image";
import BottomRightNotchCard from "./BottomRightNotchCard";
import { NavItem } from "./NavItem";
import { contentData } from "../data/texts";
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
        <BottomRightNotchCard
          className="w-full"
          cardBgColor="bg-primary"
          notchWidth={180}
          notchHeight={40}
          notchContent={<SocialIcons />}
        >
          <div className="px-2 md:px-8 pt-10 md:pt-20 pb-4 md:pb-8 text-white flex flex-col justify-center gap-8">
            <div className="flex flex-col md:flex-row items-center md:items-start  justify-between gap-3">
              <p className="text-sm font-medium text-center md:text-left">
                {contentData.footer.slogan}
              </p>

              <nav className="flex items-center gap-4 md:gap-10">
                {contentData.navLinks.map((link) => (
                  <NavItem key={link.href} href={link.href} isFooter>{link.label}</NavItem>
                ))}
              </nav>
            </div>
                    
            <div className="flex flex-col gap-1">
              <div className="flex flex-col md:flex-row justify-between text-center md:text-left items-center md:items-start gap-2 md:gap-5">
                <Image
                  src="/logo.svg"
                  alt="Caltech Logo"
                  className="invert"
                  width={100}
                  height={100}
                />
                <div className="flex flex-col items-center md:items-end gap-1">
                  <h3 className="text-xs font-bold text-white">
                    Copyright © {currentYear} Caltech <span className="hidden md:inline">| {contentData.footer.cnpj}</span>
                  </h3>
                  <p className="text-xs font-medium text-white">
                    {contentData.footer.address}
                  </p>
                </div>
              </div>
              <p className="md:hidden text-center text-xs font-medium text-white">
                {contentData.footer.cnpj}
              </p>
            </div>
          </div>
        </BottomRightNotchCard>
      </footer>
    );
}
