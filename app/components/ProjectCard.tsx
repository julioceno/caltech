"use client";

import NotchCard from "./NotchCard";
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    link?: string;
    className?: string;
}

export default function ProjectCard({
    title,
    description,
    image,
    link,
    className = "",
}: ProjectCardProps) {
    return (
        <div className={`hover:-translate-y-1 transition-transform duration-300 ${className}`}>
            <NotchCard
                className="w-[300px] h-[350px] md:w-[320px] md:h-[380px] lg:w-[350px] lg:h-[400px]"
                notchBgColor="bg-neutral-900"
            >
                <div className="h-full flex flex-col bg-neutral-800 text-white">
                    <div className="relative w-full h-[55%]">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex-1 p-6 flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg font-bold mb-2 leading-tight">
                                {title}
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-400">
                                {description}
                            </p>
                        </div>

                        {link && (
                            <a
                                href={link}
                                className="text-sm text-white underline mt-3 hover:text-orange-400 transition-colors duration-300"
                            >
                                Clique e saiba mais
                            </a>
                        )}
                    </div>
                </div>
            </NotchCard>
        </div>
    );
}
