"use client";

import { useState } from "react";
import Image from "next/image";
import ImageModal from "./ImageModal";

interface ProjectGalleryProps {
  imagePaths: string[];
}

export default function ProjectGallery({ imagePaths }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 mb-8">
        {imagePaths.map((path, index) => (
          <div
            key={`${path}-${index}`}
            className="mb-4 break-inside-avoid cursor-pointer"
            onClick={() => setSelectedImage(path)}
          >
            <Image
              src={path}
              alt={`Imagem ${index + 1} do projeto`}
              width={500}
              height={500}
              className="w-full h-auto rounded-lg hover:opacity-90 transition-opacity duration-200"
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <ImageModal
          src={selectedImage}
          alt={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}
