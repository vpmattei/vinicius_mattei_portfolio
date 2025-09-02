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
      </div>

      <div className="m-[clap(0, 2vw, 64)] flex flex-col items-center gap-32">

        {/* Project Card 1 - Left Image */}
        <div className="max-w-[80rem] flex flex-col md:flex-row items-stretch gap-8 p-4 shadow-xl bg-neutral-900 rounded-lg">

          {/* IMAGE LEFT (becomes the “tallest” column) */}
          <div className="md:basis-1/2 flex flex-col">
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
              <CustomImage
                src="https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/paravoile.png?raw=true"
                alt="Hebald Forest"
                link="/projects/hebald-forest"
                maxWidth="40rem"
              />
            </div>

            {/* Bottom action bar */}
            <a
              href="https://jessymonrocq.itch.io/hebald-forest"
              className="mt-3 flex items-center gap-2"
            >
              <img
                className="w-10 h-10"
                src="https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/logos/itchio_white_logo.png?raw=true"
                alt="itch.io"
              />
              <button className="text-[clamp(.5rem,2vw,1rem)] cursor-pointer flex items-center gap-2 border border-gray-300 px-6 py-2 rounded-lg transition-all duration-300 hover:bg-gray-200 hover:text-gray-900">
                Download
              </button>
            </a>
          </div>

          {/* TEXT RIGHT (stretches to match left) */}
          <div className="md:basis-1/2 flex flex-col min-w-0">
            {/* growing content */}
            <div className="flex-1">
              <img
                src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/work-pages-redesign/assets/hebald_forest_images/logo.webp"
                alt="Hebald Forest Logo"
                className="h-20 mb-3"
              />
              <h2 className="text-2xl">Hebald Forest</h2>
              <p className="opacity-90">
                <b>Coordinator, Developer, Level Designer</b> – Unreal Engine 5
              </p>
              <p className="mt-2">
                A collaborative student project built for the International Games Festival (FIJ) in Cannes,
                showcasing open-world exploration, puzzles, and interactive systems.
              </p>

              <ul className="mt-4 list-disc list-inside">
                <li>Engine: Unreal Engine 5</li>
                <li>Team Size: 19</li>
                <li>Duration: 5 months</li>
              </ul>
            </div>

            {/* pinned bottom button */}
            <a href="/projects/hebald-forest" className="mt-4 self-end">
              <button className="text-[clamp(.5rem,2vw,1rem)] cursor-pointer flex items-center gap-2 border border-gray-300 px-[clamp(.5rem,.5vw,2rem)] py-[clamp(.05rem,.5vw,.5rem)] rounded-lg transition-all duration-300 hover:bg-gray-200 hover:text-gray-900">
                Read more <span className="text-lg">›</span>
              </button>
            </a>
          </div>
        </div>

        {/* Project Card - RIGHT */}
        <div className="max-w-[80rem] flex flex-col md:flex-row-reverse items-stretch gap-8 p-4 shadow-xl bg-neutral-900 rounded-lg">

          {/* IMAGE RIGHT */}
          <div className="md:basis-1/2 flex flex-col">
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
              <CustomImage
                src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/main_level_01.png?raw=true"
                alt="Anamnesis"
                link="/projects/anamnesis"
                maxWidth="40rem"
              />
            </div>

            {/* Bottom action bar */}
            <a
              href="https://www.ludhic.fr/games/anamnesis"
              className="mt-3 flex items-center gap-2 self-end"
            >
              <img
                className="w-10 h-10"
                src="https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/logos/ludhic_logo.png?raw=true"
                alt="Project"
              />
              <button className="text-[clamp(.5rem,2vw,1rem)] cursor-pointer flex items-center gap-2 border border-gray-300 px-6 py-2 rounded-lg transition-all duration-300 hover:bg-gray-200 hover:text-gray-900">
                Project page
              </button>
            </a>
          </div>

          {/* TEXT LEFT */}
          <div className="md:basis-1/2 flex flex-col min-w-0">
            {/* Growing content */}
            <div className="flex-1">
              <img
                src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/logo.webp"
                alt="Anamnesis Logo"
                className="h-20 mb-3"
              />
              <h2 className="text-2xl">Anamnesis</h2>
              <p className="opacity-90">
                <b>Lead Developer, VR Interaction Systems</b> – Unity
              </p>
              <p className="mt-2">
                An immersive VR experience where players relive forgotten dreams to recover lost memories,
                featuring physics-based interaction, teleport locomotion, and narrative-driven design.
              </p>

              <ul className="mt-4 list-disc list-inside">
                <li>Engine: Unity</li>
                <li>Team Size: 9</li>
                <li>Duration: 5 months</li>
              </ul>
            </div>

            {/* pinned bottom button */}
            <a href="/projects/anamnesis" className="mt-4 self-end">
              <button className="text-[clamp(.5rem,2vw,1rem)] cursor-pointer flex items-center gap-2 border border-gray-300 px-[clamp(.5rem,.5vw,2rem)] py-[clamp(.05rem,.5vw,.5rem)] rounded-lg transition-all duration-300 hover:bg-gray-200 hover:text-gray-900">
                Read more <span className="text-lg">›</span>
              </button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
