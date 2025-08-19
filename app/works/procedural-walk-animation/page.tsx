import React from "react";
import Link from "next/link";
import ArrowIcon from "app/components/ArrowIcon";

export const metadata = {
  title: "Procedural Walk Animation",
  description: "Insect|Robot-like Animation done in Unity.",
};

const Page: React.FC = () => {
  return (
    <section className="prose mx-12 sm:mx-16 md:mx-20 lg:mx-32 flex flex-col items-center gap-16">
      {/* Header */}
      <div className="w-full flex flex-col items-center text-center">
        <img
          src="https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/procedural-walk-animation_img/pwa_title.png?raw=true"
          alt="Procedural Walk Animation Title"
          style={{ width: "600px", height: "300px" }}
        />
        <h2 className="text-3xl font-bold mt-4">Procedural Leg Animation</h2>
        <h3 className="text-xl font-medium mt-2">
          🦿 Robot-Style Stepping Logic with Unity 6
        </h3>
      </div>

      {/* GIF */}
      <div className="w-full flex-col justify-center">
        <h3 className="text-2xl font-bold center pb-4">🌀 Demo</h3>
        <img
          src="https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/procedural-walk-animation_img/gifs/ezgif-36801abcdb5bab.gif?raw=true"
          alt="Demo GIF"
          className="mx-auto rounded-lg w-full flex justify-center"
        />
      </div>

      {/* Description */}
      <div className="w-full text-justify">
        <h3 className="text-2xl font-bold">📃 Overview</h3>
        <p>
          This procedural walking animation system was developed as a foundation
          for insect- or robot-like movement using Unity 6. Legs are divided
          into two groups (A and B), each calculating a stepping priority from 0
          to 1 based on distance to a target point. If a group’s total score
          exceeds 2 and beats the opposing team, legs in that group with
          priority above 1 will step.
        </p>
        <p>
          It’s a prototype system, currently using cubes as placeholders for
          legs, with an IK rig planned for the next iterations. All logic is
          fully procedural, responsive, and uses no baked animations.
        </p>
      </div>

      {/* YouTube Video */}
      <div className="w-full aspect-video max-w-4xl">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/xotQjLULcAw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      {/* Editor Images */}
      <div className="w-full">
        <h3 className="text-2xl font-bold">🧠 In-Editor Visuals</h3>
        <p>
          Below are screenshots from Unity showing how leg distances are
          calculated with red lines, and target positions visualized with white
          spheres. Legs move when their group wins and individual priority is
          high enough.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img
            src="https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/procedural-walk-animation_img/PLA_InEditor_01.jpeg?raw=true"
            alt="Editor View 01"
            className="rounded-lg"
          />
          <img
            src="https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/procedural-walk-animation_img/PLA_InEditor_02.jpeg?raw=true"
            alt="Editor View 02"
            className="rounded-lg"
          />
          <img
            src="https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/procedural-walk-animation_img/PLA_InEditor_03.jpeg?raw=true"
            alt="Editor View 03"
            className="rounded-lg"
          />
          <img
            src="https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/procedural-walk-animation_img/PLA_InEditor_04.jpeg?raw=true"
            alt="Editor View 04"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Footer Nav */}
      <div className="px-8 flex md:flex-row flex-col justify-between w-[100vw]">
        <div className="flex flex-col items-start w-[100%]">
          <a
            className="font-fraunces-light-i text-pink-200 hover:text-3xl hover:text-pink-400 text-2xl flex flex-row items-center gap-3 min-w-[10rem]"
            href="/works/tic-tac-toe"
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
            href="/works/anamnesis"
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
