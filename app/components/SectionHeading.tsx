import React from 'react';

interface SectionHeadingProps {
    title: string;
    subtitle: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
    return (
        <div className="flex flex-col gap-3 sm:gap-4 text-center lg:text-left items-center md:items-start">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-primary">
                {title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-inter leading-relaxed">
                {subtitle}
            </p>
        </div>
    );
};

export default SectionHeading;
