"use client";

import React from 'react';
import useFullScreen from '../useFullScreenGallery';

interface FullScreenImageProps {
  src: string;
  alt?: string;
}

const FullScreenImage: React.FC<FullScreenImageProps> = ({ src, alt = 'Image' }) => {
  const { imgRef, toggleFullScreen } = useFullScreen();

  return (
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-[500px] cursor-pointer transition-transform duration-300 hover:scale-90"
        onClick={toggleFullScreen}
      />
  );
};

export default FullScreenImage;
