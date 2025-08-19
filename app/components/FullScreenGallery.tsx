"use client";

import React from "react";
import ImageDisplay from "./ImageDisplay";

interface FullScreenGalleryProps {
  images: string[];
  useGrid?: boolean;
}

/**
 * FullScreenGallery uses ImageDisplay for each thumbnail.
 * ImageDisplay handles its own modal via a portal, so it always fills the viewport.
 */
const FullScreenGallery: React.FC<FullScreenGalleryProps> = ({
  images,
  useGrid = false,
}) => {
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) =>
    useGrid ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
        {children}
      </div>
    ) : (
      <div className="flex flex-col flex-wrap justify-center items-center gap-16">
        {children}
      </div>
    );

  return (
    <div>
      <Wrapper>
        {images.map((image, index) => (
          <div key={index} className="mx-auto">
            <ImageDisplay
              src={image}
              gallery={images}
              index={index}
              containerClassName="relative overflow-hidden rounded-lg transition-all duration-700 ease-in-out hover:scale-98"
              imageClassName="w-full h-full transition-transform duration-700 ease-in-out hover:scale-110"
              coverThumbnail
            />
          </div>
        ))}
      </Wrapper>
    </div>
  );
};

export default FullScreenGallery;