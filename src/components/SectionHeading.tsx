import React from 'react';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    light?: boolean;
    className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, light, className }) => {
    const titleSizeClasses = 'text-3xl sm:text-4xl md:text-5xl lg:text-5xl';
    const subtitleSizeClasses = 'text-base sm:text-lg';

    return (
        <div className={`flex flex-col gap-3 sm:gap-4  lg:text-start ${className}`}>
            <h2 className={`${titleSizeClasses} leading-tight font-bold ${light ? "text-white" : "text-primary"}`}>
                {title}
            </h2>
            {subtitle && (
                <p className={`${subtitleSizeClasses} font-inter leading-relaxed ${light ? "text-gray-300" : "text-gray-600"}`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeading;
