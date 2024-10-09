import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu"; // Import the HamburgerMenu component

export function Navbar() {
  return (
    <aside className="fixed top-0 w-full z-20 px-8">
      <div className="lg:sticky lg:top-20 flex justify-between items-center">
        {/* Logo */}
        <Link className="flex flex-row flex-wrap mt-6 mb-2" key="/" href="/">
          <h1 className="poppins bold text-3xl text-neutral-200">VINI</h1>
          <h1 className="font-fraunces-light-i text-3xl text-neutral-200">
            MATTEI
          </h1>
        </Link>

        {/* Hamburger Menu */}
        <HamburgerMenu />
      </div>
    </aside>
  );
}
