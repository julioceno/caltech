"use client";

import { FiArrowUpRight } from "react-icons/fi";
import NotchCard from "./NotchCard";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    link?: string;
    className?: string;
}

const MAX_DESCRIPTION_LENGTH = 110;



export default function ProjectCard({
    title,
    description,
    image,
    link,
    className = "",
}: ProjectCardProps) {
    return (
        <Link href={link || "#"} className={`group hover:-translate-y-1 transition-transform duration-300 ${className}`}>
            <NotchCard
                className="w-[300px] h-[350px] md:w-[320px] md:h-[380px] lg:w-[350px] lg:h-[400px]"
                notchBgClassName="bg-neutral-900"
                notchSquareClassName="bg-secondary"
                notchIcon={<FiArrowUpRight className="w-5 h-5 text-white" />}
            >
                <div className="h-full flex flex-col bg-neutral-800 text-white">
                    <div className="relative w-full h-50">
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
                            <p className="text-sm leading-relaxed text-gray-400 line-clamp-3">
                                {description}
                            </p>
                        </div>

                        {link && (
                            <p
                                className="text-sm text-white underline mt-3 group-hover:text-orange-400 transition-colors duration-300"
                            >
                                Clique e saiba mais
                            </p>
                        )}
                    </div>
                </div>
            </NotchCard>
        </Link>
    );
}
