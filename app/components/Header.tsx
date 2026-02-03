"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { NavItem } from "./NavItem";

const navLinks = [
    { label: "Sobre nós", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Clientes", href: "#clientes" },
    { label: "Contato", href: "#contato" },
];

export default function Header() {
    return (
        <header className="flex items-center justify-between mt-4">
            <Link href="/" className="flex items-center">
                <Image
                    src="/logo.svg"
                    alt="Caltech Logo"
                    width={180}
                    height={50}
                    priority
                    className="h-10 w-auto md:h-10"
                />
            </Link>

            <nav className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <NavItem key={link.href} href={link.href}>
                        {link.label}
                    </NavItem>
                ))}
            </nav>

            <Button variant="primary" size="sm">
                Entre em contato
            </Button>
        </header>
    );
}
