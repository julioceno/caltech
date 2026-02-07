import { FaWhatsapp } from "react-icons/fa";
import Button from "./Button";

interface ContactCardProps {
  title?: string;
  subtitle?: string;
  phone: string;
  email: string;
  whatsappLink: string;
  buttonText?: string;
}

export default function ContactCard({
  title = "Falar com Comercial",
  subtitle = "Solicitar Orçamento Comercial",
  phone,
  email,
  whatsappLink,
  buttonText = "Entre em contato",
}: ContactCardProps) {
  return (
    <div className="flex flex-col  items-center text-center md:items-start md:text-left">
      <h3 className="text-xl font-bold text-primary">{title}</h3>
      <div className="w-12 h-0.5 bg-primary mb-2"></div>
      <p className="text-primary italic font-light text-sm">{subtitle}</p>
      <p className="text-primary text-sm">{phone}</p>
      <a
        href={`mailto:${email}`}
        className="text-primary text-sm underline hover:text-gray-600 transition-colors mb-5"
      >
        {email}
      </a>
      <Button
        variant="primary"
        href={whatsappLink}
        iconRight={<FaWhatsapp className="w-5 h-5" />}
        openInNewTab
      >
        {buttonText}
      </Button>
    </div>
  );
}