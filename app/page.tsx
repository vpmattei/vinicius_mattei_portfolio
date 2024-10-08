"use client";

import CustomImage from "./components/CustomImage";
import useIntersectionObserver from "./hooks/useIntersectionObserver";

export default function Page() {
  useIntersectionObserver(".fade-in-element");

  return (
    <section className="prose ml-8 mr-8">
      <div className="mt-48 mb-32 flex flex-col items-center gap-16">
        <div className="mb-64 text-center fade-in-element opacity-0">
          <p className="font-anton text-8xl md:text-9xl">HEY, I'M</p>
          <p className="font-fraunces-thin-i text-8xl md:text-9xl">
            Vinícius
          </p>
        </div>
        <p className="font-fraunces-thin-i text-5xl md:text-7xl text-center fade-in-element opacity-0">
          Game Designer
        </p>
        <p className="font-fraunces-thin-i text-5xl md:text-7xl text-center fade-in-element opacity-0">
          Game Developer
        </p>
        <p className="font-fraunces-thin-i text-5xl md:text-7xl text-center fade-in-element opacity-0">
          Visual Artist
        </p>
        <p className="text-md sm:text-xl md:text-3xl xl:text-4xl text-center text-balance leading-loose fade-in-element opacity-0">
          I help bring people's visions to fruition by combining my technical
          skills with my artistic perspective. This allows me to create unique,
          creative, and technically robust video games.
        </p>
      </div>

      <div className="m-8 md:m-16 lg:m-48 flex flex-col items-center gap-32">
        <div className="self-start">
          <CustomImage
            src="https://i.ibb.co/19SxrGF/paravoile.png"
            alt="Hebald Forest"
            link="/works/hebald-forest"
            maxWidth="40rem"
          />
          <a href="/works/hebald-forest">
            <h2>Hebald Forest</h2>
            <p>Open world adventure game – Unreal Engine 5</p>
          </a>
        </div>

        <div className="self-end">
          <CustomImage
            src="https://ludhic.fr/wp-content/uploads/2023/01/anamnesis02.webp"
            alt="Anamnesis"
            link="/works/anamnesis"
            maxWidth="40rem"
          />
          <a href="/works/anamnesis">
            <h2>Anamnesis</h2>
            <p>Narrative VR Game – Unity</p>
          </a>
        </div>

        <div className="self-start">
          <CustomImage
            src="https://i.pinimg.com/564x/77/e2/c2/77e2c23bd4a54c852e15c146079e4b7c.jpg"
            alt="Tangled Tales"
            link="/works/tangled-tales"
            maxWidth="40rem"
          />
          <a href="/works/tangled-tales">
            <h2>Tangled Tales</h2>
            <p>2D Platformer – Unity</p>
          </a>
        </div>

        <div className="self-end">
          <CustomImage
            src="https://i.ibb.co/GPvMSqy/Captura-de-Tela-2024-09-13-s-12-00-21.png"
            alt="Kentyou"
            link="/works/kentyou"
            maxWidth="40rem"
          />
          <a href="/works/kentyou">
            <h2>Kentyou Website Design</h2>
            <p>Web Design of Kentyou's website using Figma</p>
          </a>
        </div>
      </div>
    </section>
  );
}
