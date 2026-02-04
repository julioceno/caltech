"use client";

import { ReactNode, useState, useEffect } from "react";

interface ClipCardProps {
    children?: ReactNode;
    className?: string;
    mobileWidth?: number;
    mobileHeight?: number;
    tabletWidth?: number;
    tabletHeight?: number;
    desktopWidth?: number;
    desktopHeight?: number;
}

export default function ClipCard({
    children,
    className = "",
    mobileWidth = 180,
    mobileHeight = 220,
    tabletWidth = 220,
    tabletHeight = 280,
    desktopWidth = 280,
    desktopHeight = 330,
}: ClipCardProps) {
    const [dimensions, setDimensions] = useState({ width: mobileWidth, height: mobileHeight });

    useEffect(() => {
        const updateDimensions = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth >= 1024) {
                setDimensions({ width: desktopWidth, height: desktopHeight });
            } else if (screenWidth >= 768) {
                setDimensions({ width: tabletWidth, height: tabletHeight });
            } else {
                setDimensions({ width: mobileWidth, height: mobileHeight });
            }
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);

        return () => window.removeEventListener("resize", updateDimensions);
    }, [mobileWidth, mobileHeight, tabletWidth, tabletHeight, desktopWidth, desktopHeight]);

    const { width, height } = dimensions;
    const r = 10;
    const notchWidth = 50;
    const notchHeight = 50;

    const clipPath = `path("M ${r},0 L ${width - r},0 A ${r},${r} 0,0,1 ${width},${r} L ${width},${height - notchHeight - r} A ${r},${r} 0,0,1 ${width - r},${height - notchHeight} L ${width - notchWidth + r},${height - notchHeight} A ${r},${r} 0,0,0 ${width - notchWidth},${height - notchHeight + r} L ${width - notchWidth},${height - r} A ${r},${r} 0,0,1 ${width - notchWidth - r},${height} L ${r},${height} A ${r},${r} 0,0,1 0,${height - r} L 0,${r} A ${r},${r} 0,0,1 ${r},0 Z")`;

    return (
        <div className={`relative ${className}`} style={{ width: `${width}px`, height: `${height}px` }}>
            <div
                className="absolute inset-0 bg-secondary"
                style={{
                    clipPath,
                    overflow: "hidden",
                }}
            >
                {children}
            </div>

            <div
                className="absolute bg-primary rounded-lg"
                style={{
                    width: `${notchWidth - 8}px`,
                    height: `${notchHeight - 8}px`,
                    right: 4,
                    bottom: 4,
                }}
            />
        </div>
    );
}
