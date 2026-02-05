"use client";

import NotchCard from "./NotchCard";
import Image from "next/image";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
    className?: string;
}

export default function ServiceCard({
    title,
    description,
    icon,
    className = "",
}: ServiceCardProps) {
    return (
        <NotchCard 
            className={`w-[300px] h-[350px] md:w-[320px] md:h-[380px] lg:w-[350px] lg:h-[400px] ${className}`}
        >
            <div className="group p-8 h-full flex flex-col justify-between bg-gray-100 text-gray-800 hover:text-white hover:bg-orange-500 transition-colors duration-300">
                <div className="mb-6">
                    <div className="w-16 h-16 flex items-center justify-center">
                        <Image
                            src={`/assets/${icon}`}
                            alt={title}
                            width={48}
                            height={48}
                            className="filter brightness-0 group-hover:invert transition-all duration-300"
                        />
                    </div>
                </div>

                <div className="flex-1">
                    <h3 className="text-xl font-bold mb-4 leading-tight">
                        {title}
                    </h3>

                    <p className="text-sm leading-relaxed text-gray-600 group-hover:text-white transition-colors duration-300">
                        {description}
                    </p>
                </div>
            </div>
        </NotchCard>
    );
}