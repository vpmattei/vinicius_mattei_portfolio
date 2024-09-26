import { useEffect } from "react";

const useIntersectionObserver = (elementSelector) => {
  useEffect(() => {
    const elements = document.querySelectorAll(elementSelector);

    const fadeInObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Fade-in when the element is visible with a threshold and root margin
            entry.target.classList.add("animate-fade-up");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      {
        threshold: 0.5, // Fade-in threshold
        rootMargin: "-10% 0px -10% 0px", // Larger margin for fading in
      }
    );

    const fadeOutObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            // Fade-out when the element is out of view
            entry.target.classList.remove("animate-fade-up");
            entry.target.classList.add("opacity-0");
          }
        });
      },
      {
        threshold: 0.1, // Default threshold for fade-out
        rootMargin: "0px", // No margin for fading out
      }
    );

    elements.forEach((el) => {
      fadeInObserver.observe(el);
      fadeOutObserver.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        fadeInObserver.unobserve(el);
        fadeOutObserver.unobserve(el);
      });
    };
  }, [elementSelector]);
};

export default useIntersectionObserver;
