"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavItem } from "./NavItem";
import { HamburgerButton } from "./HamburgerButton";
import Button from "./Button";

const navLinks = [
    { label: "Sobre nós", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Clientes", href: "#clientes" },
    { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="w-full">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
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

        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavItem key={link.href} href={link.href}>
              {link.label}
            </NavItem>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="primary">
            Entre em contato
          </Button>
        </div>

        <HamburgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      />

      <nav
        className={`fixed right-0 top-0 z-40 flex h-full w-64 flex-col gap-6 bg-white px-6 pt-20 shadow-xl transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <NavItem key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </NavItem>
        ))}
        
        <div className="mt-4">
          <Button variant="primary">
            Entre em contato
          </Button>
        </div>
        
      </nav>
    </header>
  );
}
