import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface CarouselNavButtonProps {
  direction: "prev" | "next";
  className?: string;
  ariaLabel?: string;
  size?: number;
}

export default function CarouselNavButton({
  direction,
  className = "",
  ariaLabel,
  size = 32,
}: CarouselNavButtonProps) {
  const isPrev = direction === "prev";
  const Icon = isPrev ? FiChevronLeft : FiChevronRight;
  const defaultClass = isPrev
    ? "swiper-button-prev-custom"
    : "swiper-button-next-custom";
  const positionClass = isPrev ? "left-0" : "right-0";

  return (
    <button
      className={`${defaultClass} absolute ${positionClass} top-1/2 -translate-y-3/4 z-10 p-3 text-gray-400 hover:text-gray-600 transition-colors ${className}`}
      aria-label={ariaLabel}
    >
      <Icon size={size} />
    </button>
  );
}
