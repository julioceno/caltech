"use client";

import { useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";


interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageModal({ src, alt, onClose }: ImageModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-hidden"
    >
      <div
        className="
          fixed inset-0 z-50
          flex items-center justify-center
          bg-black/80 backdrop-blur-sm
          p-4 sm:p-8 md:p-12
          transition-opacity duration-300
        "
        onClick={onClose}
      >
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Fechar modal"
          className="
            absolute top-4 right-4 z-50
            flex items-center justify-center
            w-10 h-10 rounded-full
            text-white hover:text-secondary
            transition-colors duration-200
            cursor-pointer
          "
        >
          <IoClose size={32} />
        </button>
        <div
          className="
            relative
            w-full h-full
            max-w-[90vw] max-h-[85vh]
            sm:max-w-[85vw] sm:max-h-[80vh]
            md:max-w-[80vw] md:max-h-[80vh]
          "
          onClick={handleContentClick}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 90vw, (max-width: 768px) 85vw, 80vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}
