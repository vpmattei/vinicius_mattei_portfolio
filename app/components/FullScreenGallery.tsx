"use client";

import React from "react";
import useImageModal from "../hooks/useImageModal";

interface FullScreenGalleryProps {
  images: string[];
}

const FullScreenGallery: React.FC<FullScreenGalleryProps> = ({ images }) => {
  const {
    isModalOpen,
    currentIndex,
    openModal,
    closeModal,
    showNextImage,
    showPreviousImage,
  } = useImageModal(images);

  return (
    <div>
      {/* Image grid */}
      <div className="grid grid-cols-1 gap-4 place-content-center">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className="rounded-lg cursor-pointer transition-transform duration-300 hover:scale-90"
            onClick={() => openModal(index)} // Open modal with the clicked image
          />
        ))}
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85">
          <div className="relative">
            {/* Image */}
            <img
              src={images[currentIndex]}
              alt={`Gallery Image ${currentIndex + 1}`}
              className="max-h-[80vh] max-w-full"
            />
          </div>
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 text-white text-5xl cursor-pointer"
            onClick={closeModal}
          >
            &times;
          </button>
          {/* Left and Right Navigation Outside the Image */}
          <button
            onClick={showPreviousImage}
            className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-gray-800/50 p-2 rounded-full cursor-pointer"
          >
            &#10094;
          </button>
          <button
            onClick={showNextImage}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-gray-800/50 p-2 rounded-full cursor-pointer"
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
};

export default FullScreenGallery;
