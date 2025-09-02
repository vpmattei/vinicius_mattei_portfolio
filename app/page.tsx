"use client";

import Link from "next/link";
import CustomImage from "./components/CustomImage";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import CustomButton from "./components/CustomButton";
import ProjectCard from "./components/ProjectCard";

export default function Page() {
  useIntersectionObserver(".fade-in-element");

  return (
    <section className="prose ml-8 mr-8">
      <div className="mt-48 mb-32 flex flex-col items-center gap-4">
        <div className="mb-8 text-center fade-in-element opacity-0">
          <div className="title poppins bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            HEY, I'M
          </div>
          <div className="mt-8 title font-fraunces-thin-i text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            VINÍCIUS MATTEI
          </div>
        </div>
        <div className="mb-4 title font-fraunces-thin-i text-3xl md:text-4xl lg:text-5xl text-center fade-in-element opacity-0">
          GAME DEVELOPER
        </div>
        <div className="mb-4 title font-fraunces-thin-i text-3xl md:text-4xl lg:text-5xl text-center fade-in-element opacity-0">
          GAME DESIGNER
        </div>
        <p className="max-w-[50rem] min-w-[18rem] mx-8 text-sm md:text-base fade-in-element opacity-0">
          I am a <b>Game Developer</b> and a <b>Game Designer</b> with <b>8+ years</b> of personal experience with <b>Unity</b>,
          I focus on building <b>core systems</b> for games.
        </p>
        <p className="max-w-[50rem] min-w-[18rem] mx-8 text-sm md:text-base fade-in-element opacity-0">
          I specialize in building game mechanics and interactions, with a focus on <b>integrating AIs</b> in games like
          with <b>NPCs</b> and their behaviour.
        </p>
        <Link href={"/projects"}>
          <button className="green-style cursor-pointer mt-8 bg-transparent text-neutral-200 hover:text-[#171415] transition-all duration-300 rounded-full px-10 py-5 text-xl">
            PROJECTS
          </button>
        </Link>
      </div>

      <div className="m-[clap(0, 2vw, 64)] flex flex-col items-center gap-32">

        {/* Project Card 1 - Left Image */}
        <div className="max-w-[80rem] flex items-center gap-8 p-4 shadow-xl bg-neutral-900 rounded-lg">

          {/* IMAGE LEFT */}
          <div className="w-1/2">
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
              <CustomImage
                src="https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/paravoile.png?raw=true"
                alt="Hebald Forest"
                link="/projects/hebald-forest"
                maxWidth="40rem"
              />
            </div>
            <div>
              <button
                className="cursor-pointer flex items-center gap-2 border border-gray-300 px-6 py-2 rounded-lg transition-all duration-300 hover:bg-gray-200 hover:text-gray-900">
                Download
              </button>
            </div>
          </div>

          {/* TEXT RIGHT */}
          <div className="w-1/2 flex-1 flex flex-col justify-between min-w-0">
            <div>
              <img
                src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/work-pages-redesign/assets/hebald_forest_images/logo.webp"
                alt="Hebald Forest Logo"
                className="h-20 mb-3"
              />
              <h2 className="text-2xl">Hebald Forest</h2>
              <p className="opacity-90"><b>Coordinator, Developer, Level Designer</b> – Unreal Engine 5</p>
              <p className="mt-2">
                A collaborative student project built for the International Games Festival (FIJ) in Cannes,
                showcasing open-world exploration, puzzles, and interactive systems.
              </p>
            </div>
            <ul className="mt-4 list-disc list-inside">
              <li>Engine: Unreal Engine 5</li>
              <li>Team Size: 19</li>
              <li>Duration: 5 months</li>
            </ul>
            <a className="self-end" href="/projects/hebald-forest">
              <button
                className="cursor-pointer flex items-center gap-2 border border-gray-300 px-6 py-2 rounded-lg transition-all duration-300 hover:bg-gray-200 hover:text-gray-900">
                Read more
                <span className="text-lg">›</span>
              </button>
            </a>
          </div>
        </div>

        {/* Project Card - RIGHT */}
        <div className="max-w-[80rem] flex items-stretch gap-8 p-4 shadow-xl bg-neutral-900 rounded-lg">

          {/* TEXT LEFT */}
          <div className="w-1/2 flex-1 flex flex-col justify-between min-w-0">
            <div>
              <img
                src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/logo.webp"
                alt="Anamnesis Logo"
                className="h-20 mb-3"
              />
              <h2 className="text-2xl">Anamnesis</h2>
              <p className="opacity-90"><b>Anamnesis</b> – Unity</p>
              <p className="mt-2">
                An immersive VR experience where players relive forgotten dreams to recover lost memories,
                featuring physics-based interaction, teleport locomotion, and narrative-driven design.
              </p>
            </div>
            <ul className="mt-4 list-disc list-inside">
              <li>Engine: Unity</li>
              <li>Team Size: 9</li>
              <li>Duration: 5 months</li>
            </ul>
          </div>

          {/* IMAGE RIGHT */}
          <div className="w-1/2">
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
              <CustomImage
                src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/main_level_01.png?raw=true"
                alt="Hebald Forest"
                link="/projects/anamnesis"
                maxWidth="40rem"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
