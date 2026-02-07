import React from 'react';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    light?: boolean;
    className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, light, className }) => {
    return (
        <div className={`flex flex-col gap-3 sm:gap-4 text-center lg:text-start ${className}`}>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-tight font-bold ${light ? "text-white" : "text-primary"}`}>
                {title}
            </h2>
            {subtitle && (
                <p className={`text-base sm:text-lg font-inter leading-relaxed ${light ? "text-gray-300" : "text-gray-600"}`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeading;
