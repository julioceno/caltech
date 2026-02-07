"use client";

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function HamburgerButton({ isOpen, onClick }: HamburgerButtonProps) {
  return (
    <div
      className={`z-50 flex items-center gap-2 md:hidden ${
        isOpen ? "fixed right-4 top-3" : ""
      }`}
    >
      <span
        className={`text-secondary transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "opacity-0"
        }`}
      >
        CALTECH
        <span
          className={`absolute bottom-0 left-0 h-0.5 bg-main transition-all duration-300 ease-out ${
            isOpen ? "w-6/12 delay-300" : "w-0"
          }`}
        ></span>
      </span>
      <button
        onClick={onClick}
        className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
      >
        <span
          className={`h-0.5 w-6 bg-primary transition-all duration-300 ${
            isOpen ? "translate-y-2 rotate-45 bg-secondary" : ""
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-primary transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-primary transition-all duration-300 ${
            isOpen ? "-translate-y-2 -rotate-45 bg-secondary" : ""
          }`}
        />
      </button>
    </div>
  );
}