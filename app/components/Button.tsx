import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "featured" | "green";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: ButtonVariant;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    href?: string;
    openInNewTab?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
    primary: "bg-primary text-white hover:bg-neutral-900",
    secondary: "bg-secondary text-white hover:bg-secondary/90",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    featured: "bg-primary text-white shadow-md ",
    green: 'bg-green text-white hover:bg-green/90'
};

export default function Button({
    children,
    variant = "primary",
    className = "",
    iconLeft,
    iconRight,
    href,
    openInNewTab = false,
    onClick,
    ...props
}: ButtonProps) {
    const isFeatured = variant === "featured";

    const sizeClasses = isFeatured
        ? "px-6 py-3 text-base md:px-10 md:py-5 md:text-lg font-bold"
        : "px-4 py-2 text-sm md:px-6 md:py-3 text-base";

    const baseClasses = `inline-flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer gap-2 hover:-translate-y-0.5 ${variantStyles[variant]} ${sizeClasses} ${className}`;

    if (href) {
        return (
            <Link
                href={href}
                className={baseClasses}
                target={openInNewTab ? "_blank" : undefined}
                rel={openInNewTab ? "noopener noreferrer" : undefined}
            >
                {iconLeft}
                {children}
                {iconRight}
            </Link>
        );
    }

    return (
        <button
            className={baseClasses}
            onClick={onClick}
            {...props}
        >
            {iconLeft}
            {children}
            {iconRight}
        </button>
    );
}
