"use client";

import useIntersectionObserver from "./hooks/useIntersectionObserver";

export default function Page() {
  useIntersectionObserver(".fade-in-element");

  return (
    <section className="prose ml-8 mr-8">
      <div className="mt-48 mb-32 flex flex-col items-center gap-16">
        <div className="mb-64 text-center fade-in-element opacity-0">
          <p className="font-anton text-8xl md:text-9xl">HEY, I'M</p>
          <p className="font-bodoni-moda-i italic text-8xl md:text-9xl">
            Vinícius
          </p>
        </div>
        <p className="font-bodoni-moda text-5xl md:text-7xl text-center italic fade-in-element opacity-0">
          GAME DESIGNER
        </p>
        <p className="font-bodoni-moda text-5xl md:text-7xl text-center italic fade-in-element opacity-0">
          GAME DEVELOPER
        </p>
        <p className="font-bodoni-moda text-5xl md:text-7xl text-center italic fade-in-element opacity-0">
          VISUAL ARTIST
        </p>
        <p className="text-md sm:text-xl md:text-3xl xl:text-4xl text-center text-balance leading-loose fade-in-element opacity-0">
          I help bring people's visions to fruition by combining my technical
          skills with my artistic perspective. This allows me to create unique,
          creative, and technically robust video games.
        </p>
      </div>
      <br></br>
      <hr className="border-t border-gray-300 my-6" />
      <br></br>

      
    </section>
  );
}
