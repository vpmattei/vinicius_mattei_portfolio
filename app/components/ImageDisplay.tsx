"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ImageDisplayProps = {
    src: string;
    alt?: string;
    gallery?: string[];
    index?: number;
    maxHeightClass?: string;
    maxWidthClass?: string;
    containerClassName?: string;
    imageClassName?: string;
    coverThumbnail?: boolean;
};

const ImageDisplay: React.FC<ImageDisplayProps> = ({
    src,
    alt = "Image",
    gallery,
    index = 0,
    maxHeightClass = "max-h-[95vh]",
    maxWidthClass = "max-w-[90vw]",
    containerClassName = "relative overflow-hidden transition-all duration-1000 ease-in-out hover:scale-98",
    imageClassName = "w-full h-full transition-transform duration-1000 ease-in-out hover:scale-110",
    coverThumbnail = true,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(index);

    const images = gallery ?? [src];
    const hasGallery = images.length > 1;

    const openModal = () => {
        setCurrentIndex(index);
        setIsOpen(true);
    };
    const closeModal = () => setIsOpen(false);

    const showNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const showPrev = () =>
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

    const handleImageClick: React.MouseEventHandler<HTMLImageElement> = (e) => {
        if (!hasGallery) return;
        const { clientX } = e;
        const windowWidth = window.innerWidth;
        if (clientX > windowWidth / 2) {
            showNext();
        } else {
            showPrev();
        }
    };

    // Prevent background scroll while modal is open
    useEffect(() => {
        if (!isOpen) return;
        const original = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = original;
        };
    }, [isOpen]);

    // Keyboard navigation (Esc, Left, Right)
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
            if (e.key === "ArrowRight") showNext();
            if (e.key === "ArrowLeft") showPrev();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    const modal = isOpen ? (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85"
            onMouseDown={(e) => {
                if (e.target === e.currentTarget) closeModal();
            }}
        >
            <div className="relative">
                <img
                    src={images[currentIndex]}
                    alt={`Gallery Image ${currentIndex + 1}`}
                    className={`${maxHeightClass} ${maxWidthClass} cursor-pointer`}
                    onClick={handleImageClick}
                />
                <button
                    aria-label="Close"
                    className="fixed top-[1%] right-[1%] text-white text-5xl cursor-pointer"
                    onClick={closeModal}
                >
                    &times;
                </button>
            </div>

            {hasGallery && (
                <>
                    <button
                        onClick={showPrev}
                        aria-label="Previous image"
                        className="absolute left-8 top-1/2 -translate-y-1/2 text-white text-3xl bg-gray-800/50 p-2 rounded-full cursor-pointer"
                    >
                        &#10094;
                    </button>
                    <button
                        onClick={showNext}
                        aria-label="Next image"
                        className="absolute right-8 top-1/2 -translate-y-1/2 text-white text-3xl bg-gray-800/50 p-2 rounded-full cursor-pointer"
                    >
                        &#10095;
                    </button>
                </>
            )}
        </div>
    ) : null;

    return (
        <>
            {/* Thumbnail / Trigger with hover effect */}
            <div
                className={`${containerClassName} cursor-pointer mx-auto`}
                onClick={openModal}
            >
                <img
                    src={src}
                    alt={alt}
                    className={`${imageClassName} ${coverThumbnail ? "object-cover" : "object-contain"
                        }`}
                />
            </div>

            {isOpen &&
                typeof window !== "undefined" &&
                createPortal(modal!, document.body)}
        </>
    );
};

export default ImageDisplay;