"use client"

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

const navItems = {
  "/": {
    name: "Home",
  },
  "/projects": {
    name: "Works",
  },
  "/artworks": {
    name: "Artworks",
  },
  "/about": {
    name: "About me",
  },
  "/contact-me": {
    name: "Contact",
  },
};

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [animateOpen, setAnimateOpen] = useState(false);
  const [overlayKey, setOverlayKey] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    let rafId: number | null = null;
    let openTimeoutId: number | null = null;
    let closeTimeoutId: number | null = null;

    if (isOpen) {
      // Ensure the overlay is mounted
      setIsVisible(true);

      // Force a new overlay mount so CSS transitions always restart
      setOverlayKey((k) => k + 1);

      root.classList.add("overflow-hidden");
      setAnimateOpen(false);

      // Ensure layout is flushed before starting open animation
      openTimeoutId = window.setTimeout(() => {
        rafId = requestAnimationFrame(() => setAnimateOpen(true));
      }, 20);
    } else {
      // Trigger close animation (bottom-to-top)
      setAnimateOpen(false);

      // Wait for the CSS transition to finish before unmounting & re-enabling scroll
      closeTimeoutId = window.setTimeout(() => {
        setIsVisible(false);
        root.classList.remove("overflow-hidden");
      }, 520); // matches duration-500 with a tiny buffer
    }

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (openTimeoutId !== null) clearTimeout(openTimeoutId);
      if (closeTimeoutId !== null) clearTimeout(closeTimeoutId);
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="cursor-pointer text-neutral-200 focus:outline-none"
        onClick={toggleMenu}
      >
        <div className="space-y-1 hover:space-y-2">
          <span className="block w-7 h-[1px] bg-neutral-200 transition-all duration-300"></span>
          <span className="block w-7 h-[1px] bg-neutral-200 transition-all duration-300"></span>
          <span className="block w-7 h-[1px] bg-neutral-200 transition-all duration-300"></span>
        </div>
      </button>

      {/* Menu Overlay (full-screen, blurred, animated) */}
      {mounted && isVisible &&
        createPortal(
          <div key={overlayKey} className="fixed inset-0 z-[999]">
            {/* Animated backdrop: slides from top */}
            <div
              className={`absolute inset-0 bg-neutral-900/60 backdrop-blur-md transition-transform duration-500 ease-out transform ${
                animateOpen ? "translate-y-0" : "-translate-y-full"
              }`}
            />

            {/* Content layer */}
            <div
              className={`relative z-[1000] h-full w-full flex flex-col items-center justify-center transition-opacity duration-500 ${
                animateOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Close Button */}
              <button
                className="cursor-pointer absolute top-5 right-5 text-white/90 hover:text-white text-4xl"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                &times;
              </button>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-8">
                {Object.entries(navItems).map(([path, { name }]) => (
                  <Link
                    key={path}
                    href={path}
                    onClick={toggleMenu}
                    className="text-3xl md:text-4xl lg:text-5xl font-medium transition-colors text-white/95 hover:text-pink-400"
                  >
                    {name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default HamburgerMenu;
