"use client";

import Link from "next/link";
import CustomImage from "./components/CustomImage";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import CustomButton from "./components/CustomButton";

export default function Page() {
  useIntersectionObserver(".fade-in-element");

  return (
    <section className="prose ml-8 mr-8">
      <div className="mt-48 mb-32 flex flex-col items-center gap-8">
        <div className="mb-8 text-center fade-in-element opacity-0">
          <p className="title poppins bold text-7xl sm:text-8xl md:text-9xl lg:text-[190px]">
            HEY, I'M
          </p>
          <p className="title font-fraunces-thin-i text-7xl sm:text-8xl md:text-9xl lg:text-[190px]">
            VINÍCIUS
          </p>
        </div>
        <p className="title font-fraunces-thin-i text-5xl md:text-7xl lg:text-8xl text-center fade-in-element opacity-0">
          GAME DEVELOPER
        </p>
        <p className="title font-fraunces-thin-i text-5xl md:text-7xl lg:text-8xl text-center fade-in-element opacity-0">
          GAME DESIGNER
        </p>
        <p className="max-w-[50rem] min-w-[18rem] mx-8 md:text-xl fade-in-element opacity-0">
          I help bring people's visions to fruition by combining my{" "}
          <b>technical skills</b> with my <b>artistic perspective</b>. This
          allows me to create <b>unique</b>, <b>creative</b>, and technically{" "}
          <b>robust</b> video games.
        </p>
        <Link href={"/works"}>
          {/* <CustomButton
            buttonText="SEE MY WORK"
            bgColor="white" // Default background color of the screen
            hoverBgColor="#171415" // Background color when hovering
          /> */}
          <button className="green-style cursor-pointer mt-8 bg-transparent text-neutral-200 hover:text-[#171415] transition-all duration-300 rounded-full px-10 py-5 text-xl">
            SEE MY WORK
          </button>
        </Link>
      </div>

      <div className="m-8 md:m-16 lg:m-48 flex flex-col items-center gap-32">
        <div className="self-start">
          <CustomImage
            src="https://i.ibb.co/19SxrGF/paravoile.png"
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
            src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/1.webp"
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
