"use client";

import Link from "next/link";
import CustomImage from "./components/CustomImage";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import CustomButton from "./components/CustomButton";

export default function Page() {
  useIntersectionObserver(".fade-in-element");

  return (
    <section className="prose ml-8 mr-8">
      <div className="mt-48 mb-32 flex flex-col items-center gap-4">
        <div className="mb-8 text-center fade-in-element opacity-0">
          <div className="title poppins bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            HEY, I'M
          </div>
          <div className="title font-fraunces-thin-i text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            VINÍCIUS
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
        <Link href={"/works"}>
          <button className="green-style cursor-pointer mt-8 bg-transparent text-neutral-200 hover:text-[#171415] transition-all duration-300 rounded-full px-10 py-5 text-xl">
            SEE MY WORK
          </button>
        </Link>
      </div>

      <div className="m-8 md:m-16 lg:m-48 flex flex-col items-center gap-32">
        <div className="self-start">
          <CustomImage
            src="https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/paravoile.png?raw=true"
            alt="Hebald Forest"
            link="/works/hebald-forest"
            maxWidth="40rem"
          />
          <Link href={"/works/hebald-forest"}>
            <h2>3D Open World Adventure Game</h2>
            <p>Hebald Forest – Unreal Engine 5</p>
          </Link>
        </div>

        <div className="self-end">
          <CustomImage
            src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/work-pages-redesign/assets/anamnesis_images/main_level_01.png?raw=true"
            alt="Anamnesis"
            link="/works/anamnesis"
            maxWidth="40rem"
          />
          <Link href={"/works/anamnesis"}>
            <h2>VR Narrative Game Experience</h2>
            <p>Anamnesis - Unity</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
