"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 75); // adjust as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      className={`
        fixed top-0 z-20 w-full px-8
        bg-neutral-900/40 backdrop-blur-lg
        border-b border-white/10
        transition-all duration-500 ease-in-out
        ${scrolled ? "h-10" : "h-20"}
      `}
    >
      <div className="flex items-center justify-between h-full">
        {/* Logo with fade transition */}
        <Link className="flex items-baseline" key="/" href="/">
          {/* Large */}
          <h1 className={`poppins bold text-neutral-200 text-3xl transition-opacity duration-500 ${scrolled ? "opacity-0 absolute" : "opacity-100"}`}>VINI</h1>
          <h1 className={`font-fraunces-light-i text-neutral-200 text-3xl transition-opacity duration-500 ${scrolled ? "opacity-0 absolute" : "opacity-100"}`}>MATTEI</h1>

          {/* Shrink */}
          <h1 className={`poppins bold text-neutral-200 text-2xl transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0 absolute"}`}>V</h1>
          <h1 className={`font-fraunces-light-i text-neutral-200 text-2xl transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0 absolute"}`}>M</h1>
        </Link>

        {/* Hamburger Menu */}
        <HamburgerMenu />
      </div>
    </aside>
  );
}