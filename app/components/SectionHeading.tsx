import React from 'react';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    light?: boolean;
    size?: 'md' | 'lg';
    className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, light, className, size = 'lg' }) => {
    const titleSizeClasses = size === 'md' 
        ? 'text-2xl sm:text-3xl md:text-4xl lg:text-4xl' 
        : 'text-3xl sm:text-4xl md:text-5xl lg:text-5xl';
    
    const subtitleSizeClasses = size === 'md'
        ? 'text-sm sm:text-base'
        : 'text-base sm:text-lg';

    return (
        <div className={`flex flex-col gap-3 sm:gap-4 text-center lg:text-start ${className}`}>
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
