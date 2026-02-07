import { contentData } from "../data/texts";
import TopLeftNotchCard from "./TopLeftNotchCard";

export default function AboutSection() {
  return (
    <TopLeftNotchCard
      label={<span className="text-secondary font-semibold text-xs sm:text-sm">{contentData.about.label}</span>}
      className="mt-24"
    >
      <p className=" font-medium text-base sm:text-lg md:text-xl sm:leading-relaxed text-center sm:text-left">
        {contentData.about.description}
      </p>
    </TopLeftNotchCard>
  );
}