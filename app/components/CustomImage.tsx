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
}) => {
  return (
    <a href={link}>
      <div
        className="relative overflow-hidden transition-all duration-1000 ease-in-out hover:scale-98"
        style={{
          width: width,
          height: height,
          maxWidth: maxWidth,
          maxHeight: maxHeight,
          minWidth: minWidth,
          minHeight: minHeight,
        }}
      >
        <img
          src={src}
          alt={alt}
          className="object-cover w-full h-full transition-transform duration-1000 ease-in-out hover:scale-110"
        />
      </div>
    </a>
  );
};

export default CustomImage;
