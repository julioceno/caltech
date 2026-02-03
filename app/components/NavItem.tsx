"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface NavItemProps {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
}

export function NavItem({ href, children, onClick }: NavItemProps) {
    const pathname = usePathname();
    const router = useRouter();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (onClick) onClick();
        if (pathname !== "/") {
            e.preventDefault();
            router.push(`/${href.startsWith("#") ? href : ""}`);
        } else {
            const id = href.startsWith("#") ? href.substring(1) : href;
            if (id) {
                e.preventDefault();
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                } else {
                    window.location.hash = href;
                }
            }
        }
    };

    return (
        <Link
            href={href}
            onClick={handleClick}
            className="group relative font-urbanist text-sm font-semibold text-primary transition-colors hover:text-secondary"
        >
            {children}
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-secondary transition-all duration-300 ease-out group-hover:w-full"></span>
        </Link>
    );
}