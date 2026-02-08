import React from 'react';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    light?: boolean;
    className?: string;
    align?: 'left' | 'center' | 'default';
}

const getAlignmentClasses = (align: 'left' | 'center' | 'default'): string => {
    switch (align) {
        case 'left':
            return 'text-start';
        case 'center':
            return 'text-center';
        case 'default':
        default:
            return 'text-center lg:text-start';
    }
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, light, className, align = 'default' }) => {
    return (
        <div className={`flex flex-col gap-3 sm:gap-4 ${getAlignmentClasses(align)} ${className}`}>
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

export default SectionTitle;
