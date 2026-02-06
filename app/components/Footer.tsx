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
  return (
    <footer>
        <PolygonCard
          className="w-full"
          cardBgColor="bg-primary"
          notchWidth={180}
          notchHeight={60}
          notchContent={<SocialIcons />}
        >
            <div className="p-8 h-40 text-white">
                {/* conteúdo do footer */}
            </div>
        </PolygonCard>
    </footer>
  );
}
