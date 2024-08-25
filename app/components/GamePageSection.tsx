import React from "react";
import FullScreenGallery from "./FullScreenGallery";
import ArrowIcon from "./ArrowIcon";

interface PageSectionProps {
  mainImage?: {
    src: string;
    alt: string;
    width?: number;
  };
  title?: {
    url?: string;
    text: string;
  };
  content?: React.ReactNode[]; // Now accepts an array of any JSX elements
  images?: string[];
}

const PageSection: React.FC<PageSectionProps> = ({
  title = {
    url: "https://pudim.com.br",
    text: "Choose a Title",
  },
  mainImage,
  content = [
    <p key="paragraph1">Paragraph 1.</p>,

    <p key="paragraph2">Paragraph 2.</p>,

    <ul key="list1">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>,

    <p key="paragraph3">Final paragraph.</p>,
  ],
  images = [
    "https://www.pudim.com.br/pudim.jpg",
    "https://www.pudim.com.br/pudim.jpg",
    "https://www.pudim.com.br/pudim.jpg",
  ],
}) => {
  return (
    <section className="prose ml-8 mr-8 flex flex-col items-center">
      {/* Main Image */}
      {mainImage && (
        <img
          src={mainImage.src}
          alt={mainImage.alt}
          style={{ width: mainImage.width || 500 }}
        />
      )}

      {/* Title */}
      {title.url ? (
        <div className="flex flex-row mt-4">
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href={title.url}
          >
            <h2>{title.text}</h2>
            <p className="ml-2">
              <ArrowIcon size={24} />
            </p>
          </a>
        </div>
      ) : (
        <h2 className="mt-4">{title.text}</h2>
      )}

      {/* Dynamic Content */}
      <div className="mt-6">
        {content.map((item, index) => (
          <div key={index} className="text-xl indent-8 text-justify">
            {item}
          </div>
        ))}
      </div>

      {/* Full Screen Gallery */}
      {images && images.length > 0 && (
        <div className="mt-6">
          <FullScreenGallery images={images} />
        </div>
      )}
    </section>
  );
};

export default PageSection;
