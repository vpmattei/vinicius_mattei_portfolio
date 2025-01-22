"use client";

import React from "react";
import useImageModal from "../hooks/useImageModal";

interface FullScreenGalleryProps {
  images: string[];
  useGrid?: boolean;
}

const FullScreenGallery: React.FC<FullScreenGalleryProps> = ({
  images,
  useGrid = false,
}) => {
  const {
    isModalOpen,
    currentIndex,
    openModal,
    closeModal,
    showNextImage,
    showPreviousImage,
  } = useImageModal(images);

  return (
    <div className="">
      {/* Image Display */}
      {useGrid ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden transition-all duration-1000 ease-in-out hover:scale-98 cursor-object-contain cursor-pointer transition-transform duration-1000 hover:scale-110 mx-auto"
              onClick={() => openModal(index)}
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="object-contain cursor-pointer transition-transform duration-1000 hover:scale-110 mx-auto"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col flex-wrap justify-center items-center gap-16">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden transition-all duration-1000 ease-in-out hover:scale-98 cursor-object-contain cursor-pointer transition-transform duration-1000 hover:scale-110 mx-auto"
              onClick={() => openModal(index)}
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="object-contain cursor-pointer transition-transform duration-1000 hover:scale-110 mx-auto"
              />
            </div>
          ))}
        </div>
      )}

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 modal-background">
          <div className="relative">
            {/* Image */}
            <img
              src={images[currentIndex]}
              alt={`Gallery Image ${currentIndex + 1}`}
              className="max-h-[95vh] max-w-[90vw] cursor-pointer"
              onClick={(e) => {
                const { clientX, target } = e;
                const windowWidth = window.innerWidth;

                // Ensure the click was on the image
                if (target instanceof HTMLImageElement) {
                  // If the click is on the right half of the screen, go to the next image
                  if (clientX > windowWidth / 2) {
                    showNextImage();
                  } else {
                    // If the click is on the left half of the screen, go to the previous image
                    showPreviousImage();
                  }
                }
              }}
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
