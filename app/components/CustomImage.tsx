import React from "react";

interface CustomImageProps {
  src: string;
  alt: string;
  link: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  minWidth?: string;
  minHeight?: string;
  squareImage?: boolean;
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  link,
  width = "auto",
  height = "auto",
  maxWidth = "100%",
  maxHeight = "100%",
  minWidth = "100px",
  minHeight = "100px",
  squareImage = false,
}) => {
  const squareStyles = squareImage
    ? {
        aspectRatio: "1 / 1",
        objectFit: "cover" as const,
      }
    : {};

  return (
    <a href={link}>
      <div
        className="relative overflow-hidden transition-all duration-1000 ease-in-out hover:scale-98"
        style={{
          width,
          height,
          maxWidth,
          maxHeight,
          minWidth,
          minHeight,
          ...squareStyles,
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full transition-transform duration-1000 ease-in-out hover:scale-110"
          style={squareImage ? { objectFit: "cover" } : {}}
        />
      </div>
    </a>
  );
};

export default CustomImage;