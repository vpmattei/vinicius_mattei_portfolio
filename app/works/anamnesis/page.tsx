import React from "react";
import Link from "next/link";
import ArrowIcon from "app/components/ArrowIcon";

export const metadata = {
  title: "Anamnesis",
  description: "Immersive VR Game developed in Unity.",
};

const Page: React.FC = () => {
  return (
    <section className="prose lg:mx-64 md:mx-12 mx-8 flex flex-col items-center gap-16">
      {/* Header */}
      <div className="w-full flex flex-col items-center text-center">
        <img
          src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/logo.webp"
          alt="Anamnesis Logo"
          style={{ width: "300px", height: "auto" }}
        />
        <h2 className="text-3xl font-bold mt-4">Anamnesis</h2>
        <h3 className="text-xl font-medium mt-2">
          🧠 Immersive VR Experience Built in Unity
        </h3>
        <a
          className="mb-8 flex items-center transition-all hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://ludhic.fr/anamnesis/"
        >
          <h3>Project Page</h3>
          <p className="ml-2">
            <ArrowIcon size={18} />
          </p>
        </a>
      </div>

      <div className="w-full max-w-4xl">
        <video
          controls
          className="w-full rounded-lg"
          poster="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/1.webp"
        >
          <source
            src="https://www.ludhic.fr/games/anamnesis/video.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Description */}
      <div className="w-full text-justify">
        <h3 className="text-2xl font-bold">📃 Overview</h3>
        <p>
          In 2023, during my inaugural year in the MAJIC program (Management of
          Video Games, Image, and Creativity) at Université Côte d'Azur, I
          embarked on a journey to contribute to the development of Anamnesis,
          an immersive VR game.
        </p>
        <p>
          My main focus was engineering core mechanics specifically tailored for
          VR:
        </p>
        <ul className="list-disc list-inside">
          <li>🖐️ Realistic hand physics and intuitive interaction</li>
          <li>🎯 Robust object interaction (grab, throw, push, pull)</li>
          <li>🚶 Teleportation mechanics for smooth VR navigation</li>
          <li>🗿 Modeled a 3D human colossus using Blender</li>
        </ul>
        <p>
          I also supported level design, helped populate the environment with
          interactive elements, and designed a massive stone colossus for the
          game world. This project helped me strengthen my skills in VR
          development, interactive systems, 3D modeling, and Unity engineering.
        </p>
      </div>

      {/* Gallery */}
      <div className="w-full">
        <h3 className="text-2xl font-bold">🖼️ Visual Showcase</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img
            src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/1.webp"
            alt="Screenshot 1"
            className="rounded-lg"
          />
          <img
            src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/2.webp"
            alt="Screenshot 2"
            className="rounded-lg"
          />
          <img
            src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/3.webp"
            alt="Screenshot 3"
            className="rounded-lg"
          />
          <img
            src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/4.webp"
            alt="Screenshot 4"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Footer Nav */}
      <div className="px-8 flex md:flex-row flex-col justify-between w-[100vw]">
        <div className="flex flex-col items-start w-[100%]">
          <a
            className="font-fraunces-light-i text-pink-200 hover:text-3xl hover:text-pink-400 text-2xl flex flex-row items-center gap-3 min-w-[10rem]"
            href="/works/procedural-walk-animation"
          >
            <img
              className="h-[50px]"
              src="https://cdn.prod.website-files.com/63ea7102bccb5ef39bb53f01/640f47a0e5c6852030f01aef_arrow%20svg%20left.svg"
              alt="Previous"
            />
            PREVIOUS PROJECT
          </a>
        </div>

        <div className="flex flex-col items-end w-[100%]">
          <a
            className="font-fraunces-light-i text-green-300 hover:text-3xl hover:text-green-500 text-2xl flex flex-row items-center gap-3 min-w-[7rem]"
            href="/works/hebald-forest"
          >
            NEXT PROJECT
            <img
              className="h-[50px]"
              src="https://cdn.prod.website-files.com/63ea7102bccb5ef39bb53f01/640f4647eec4474635c0cee7_arrow%20svg%20right.svg"
              alt="Next"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Page;
