import { useState, useEffect } from "react";

const useImageModal = (images: string[]) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index); // Set the active image index
    setIsModalOpen(true); // Show the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Hide the modal
  };

  const showNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPreviousImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    if (isModalOpen) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "ArrowRight") {
            showNextImage();
        } else if (event.key === "ArrowLeft") {
          showPreviousImage();
        }
      };

      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        // Close the modal if the click is outside the image
        if (target.classList.contains("modal-background")) {
          console.log("close image !!")
          closeModal();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("click", handleClickOutside);

      // Cleanup the event listener when the modal closes
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("click", handleClickOutside);
      };
    }
  }, [isModalOpen, images.length]);

  return {
    isModalOpen,
    currentIndex,
    openModal,
    closeModal,
    showNextImage,
    showPreviousImage,
  };
};

export default useImageModal;
