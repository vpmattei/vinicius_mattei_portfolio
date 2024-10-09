"use client"

import { useState } from "react";
import Link from "next/link";

const navItems = {
  "/": {
    name: "Home",
  },
  "/works": {
    name: "Works",
  },
  "/artworks": {
    name: "Artworks",
  },
  "/CV": {
    name: "CV",
  },
};

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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

      {/* Menu Overlay (shown when isOpen is true, for all screen sizes) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={toggleMenu}
          >
            &times;
          </button>

          {/* Navigation Links (shown when the menu is open) */}
          <nav className="flex flex-col space-y-8">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                onClick={toggleMenu} // Close the menu when clicking a link
                className="text-3xl transition-all text-white hover:text-pink-500"
              >
                {name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
