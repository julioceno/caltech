import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function BackToHomeLink() {
    return (
        <Link 
            href="/" 
            className="inline-flex w-fit items-center gap-2 text-secondary font-inter font-bold underline hover:-translate-x-2 transition-all duration-200"
        >
            <IoIosArrowRoundBack size={24} className="text-secondary" />
            <span>Voltar para página inicial</span>
        </Link>

    );
}