import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import { contentData } from "../data/texts";

interface BackToHomeLinkProps {
    href?: string;
}


export default function BackToHomeLink({ href = "/" }: BackToHomeLinkProps) {
    return (
        <Link 
            href={href} 
            className="inline-flex w-fit items-center gap-2 text-secondary font-inter font-bold underline hover:-translate-x-2 transition-all duration-200"
        >
            <IoIosArrowRoundBack size={24} className="text-secondary" />
            <span>{contentData.backToHome.label}</span>
        </Link>

    );
}