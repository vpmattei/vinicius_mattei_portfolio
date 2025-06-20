import React from "react";
import Link from "next/link";
import ArrowIcon from "app/components/ArrowIcon";

export const metadata = {
  title: "Procedural Walk Animation",
  description: "Insect|Robot-like Animation done in Unity.",
};

const Page: React.FC = () => {
  return (
    <section className="prose lg:mx-64 md:mx-12 mx-8 flex flex-col items-center gap-16">
      {/* Logo and Header */}
      <div className="w-full flex flex-col items-center text-center">
        <img
          src="https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/procedural-walk-animation_img/pwa_title.png?raw=true"
          alt="Procedural Walk Animation Logo"
          style={{ width: "600px", height: "300px" }}
        />
        <h2 className="text-3xl font-bold mt-4">Procedural Leg Animation</h2>
        <h3 className="text-xl font-medium mt-2">
          🦿 Robot/Insect-style Procedural Movement in Unity
        </h3>
      </div>

      {/* Video Section */}
      <div className="w-full text-center">
        <h3 className="text-2xl font-bold">🎥 Video Showcase</h3>
        <div className="aspect-video w-full max-w-3xl mx-auto">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/xotQjLULcAw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full text-justify">
        <h3 className="text-2xl font-bold">📃 About</h3>
        <p>
          I’m working on a game prototype in Unity, and one of the features I’ve
          been exploring is procedural leg animation for multi-legged creatures.
          This system simulates realistic robot or insect-like walking, using
          logic-driven movement without baked animations.
        </p>
        <p>
          The key concept: each leg belongs to a group. Only one group moves at
          a time, keeping animation balanced and stable. This group-based
          alternating approach ensures natural transitions and responsive
          terrain adaptation.
        </p>
        <p>
          In the demo, cubes act as placeholder legs, each tracking a priority
          value between 0 and 1 based on their distance to a target point. When
          a group’s combined score exceeds a threshold, and outpaces the
          opposing group, the legs in that group move if their individual
          priority is high enough.
        </p>
        <p>
          This logic sets the groundwork for adding procedural animation using
          Inverse Kinematics (IK) next.
        </p>
      </div>

      {/* GIF Showcase */}
      <div className="w-full text-center">
        <h3 className="text-2xl font-bold">🌀 Animated Demo</h3>
        <img
          src="/assets/procedural-walk-animation_img/gifs/ezgif-36801abcdb5bab.gif"
          alt="Procedural Walk GIF"
          className="mx-auto rounded-lg"
        />
      </div>

      {/* Editor Views */}
      <div className="w-full">
        <h3 className="text-2xl font-bold">🧪 In-Editor Visualization</h3>
        <p>
          These screenshots illustrate the priority-based logic. The red lines
          represent the distance between a leg’s current position and its
          target. When that value passes a threshold, the leg is triggered to
          move.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img
            src="/assets/procedural-walk-animation_img/PLA_InEditor_01.jpeg"
            alt="In Editor 1"
            className="rounded-lg"
          />
          <img
            src="/assets/procedural-walk-animation_img/PLA_InEditor_02.jpeg"
            alt="In Editor 2"
            className="rounded-lg"
          />
          <img
            src="/assets/procedural-walk-animation_img/PLA_InEditor_03.jpeg"
            alt="In Editor 3"
            className="rounded-lg"
          />
          <img
            src="/assets/procedural-walk-animation_img/PLA_InEditor_04.jpeg"
            alt="In Editor 4"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Navigation to Other Projects */}
      <div className="px-8 flex md:flex-row flex-col justify-between w-[100vw]">
        <div className="flex flex-col items-start w-[100%]">
          <a
            className="font-fraunces-light-i text-pink-200 hover:text-3xl hover:text-pink-400 text-2xl flex flex-row items-center gap-3 min-w-[10rem]"
            href="/works/starfox-game"
          >
            <img
              className="h-[50px]"
              src="https://cdn.prod.website-files.com/63ea7102bccb5ef39bb53f01/640f47a0e5c6852030f01aef_arrow%20svg%20left.svg"
              alt="Previous"
              loading="lazy"
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
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Page;
