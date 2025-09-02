"use client";

import Link from "next/link";
import CustomImage from "./components/CustomImage";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import CustomButton from "./components/CustomButton";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./contact-me/ContactForm";

export default function Page() {
  useIntersectionObserver(".fade-in-element");

  return (
    <section className="prose">
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
          NPC & AI PROGRAMMER
        </div>
        <p className="max-w-[50rem] min-w-[18rem] mx-8 text-sm md:text-base fade-in-element opacity-0">
          I am a <b>Game Developer</b> with <b>8+ years</b> of Unity experience, focused on creating <b>core gameplay systems</b>.
        </p>
        <p className="max-w-[50rem] min-w-[18rem] mx-8 text-sm md:text-base fade-in-element opacity-0">
          I <b>specialize</b> in designing and integrating <b>AI</b> and <b>NPC behaviors</b> that bring worlds to life.
        </p>
      </div>

      <div className="w-full flex flex-col items-center my-16 py-4 bg-neutral-900 shadow-xl">
        <h1>
          University Projects
        </h1>
      </div>

      <div className="mx-2 flex flex-col items-center gap-32">

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
              className="mt-3 flex items-center self-center md:self-start gap-2"
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
                src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/hebald_forest_images/logo.webp"
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
              className="mt-3 flex items-center gap-2 md:self-end self-center"
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

      <div className="w-full flex flex-col items-center my-16 py-4 bg-neutral-900 shadow-xl">
        <h1>
          Game Jams
        </h1>
      </div>

      <div className="mx-2 flex flex-col items-center gap-32">

        {/* Where the Cookies At - Left Image */}
        <div className="max-w-[80rem] flex flex-col md:flex-row items-stretch gap-8 p-4 shadow-xl bg-neutral-900 rounded-lg">

          {/* IMAGE LEFT (becomes the “tallest” column) */}
          <div className="md:basis-1/2 flex flex-col">
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
              <CustomImage
                src="https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/where_the_cookies_at/level_02.png?raw=true"
                alt="Where the Cookies At"
                link="/projects/where-the-cookies-at"
                maxWidth="40rem"
              />
            </div>

            {/* Bottom action bar */}
            <a
              href="https://hinoga.itch.io/where-the-cookies-at"
              className="mt-3 flex items-center self-center md:self-start gap-2"
            >
              <img
                className="w-10 h-10"
                src="https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/logos/itchio_white_logo.png?raw=true"
                alt="itch.io"
              />
              <button className="text-[clamp(.5rem,2vw,1rem)] cursor-pointer flex items-center gap-2 border border-gray-300 px-6 py-2 rounded-lg transition-all duration-300 hover:bg-gray-200 hover:text-gray-900">
                Play in Browser
              </button>
            </a>
          </div>

          {/* TEXT RIGHT (stretches to match left) */}
          <div className="md:basis-1/2 flex flex-col min-w-0">
            {/* growing content */}
            <div className="flex-1">
              <img
                src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/where_the_cookies_at/hero_image.png"
                alt="Where the Cookies At Logo"
                className="h-20 mb-3"
              />
              <h2 className="mt-2 text-2xl">Where the Cookies At</h2>
              <p className="opacity-90">
                <b>NPC Programmer, UI Programmer</b> – Unity
              </p>
              <p className="mt-2">
                <b>Where the Cookies At?</b> is a stealth game made for <b>Brackeys Game Jam 2025.2</b>,
                where the player sneaks cookies while avoiding the patrolling mother NPC. I designed and
                implemented the <b>NPC behavior</b> and added <b>UI feedback</b> for cookie interactions.
              </p>

              <ul className="mt-4 list-disc list-inside">
                <li>Engine: Unity 6.2</li>
                <li>Team Size: 5</li>
                <li>Duration: 1 week</li>
              </ul>
            </div>

            {/* pinned bottom button */}
            <a href="/projects/where-the-cookies-at" className="mt-4 self-end">
              <button className="text-[clamp(.5rem,2vw,1rem)] cursor-pointer flex items-center gap-2 border border-gray-300 px-[clamp(.5rem,.5vw,2rem)] py-[clamp(.05rem,.5vw,.5rem)] rounded-lg transition-all duration-300 hover:bg-gray-200 hover:text-gray-900">
                Read more <span className="text-lg">›</span>
              </button>
            </a>
          </div>
        </div>

        {/* Past Self - Right */}
        <div className="max-w-[80rem] flex flex-col md:flex-row-reverse items-stretch gap-8 p-4 shadow-xl bg-neutral-900 rounded-lg">

          {/* IMAGE RIGHT */}
          <div className="md:basis-1/2 flex flex-col">
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
              <CustomImage
                src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/past_self_images/past_self_01.png?raw=true"
                alt="Anamnesis"
                link="/projects/past-self"
                maxWidth="40rem"
              />
            </div>

            {/* Bottom action bar */}
            <a
              href="https://hinoga.itch.io/past-self"
              className="mt-3 flex items-center gap-2 self-center md:self-end"
            >
              <img
                className="w-10 h-10"
                src="https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/logos/itchio_white_logo.png?raw=true"
                alt="Project"
              />
              <button className="text-[clamp(.5rem,2vw,1rem)] cursor-pointer flex items-center gap-2 border border-gray-300 px-6 py-2 rounded-lg transition-all duration-300 hover:bg-gray-200 hover:text-gray-900">
                Play in Browser
              </button>
            </a>
          </div>

          {/* TEXT LEFT */}
          <div className="md:basis-1/2 flex flex-col min-w-0">
            {/* Growing content */}
            <div className="flex-1">
              <img
                src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/past_self_images/past_self_main_image.png"
                alt="Past Self Logo"
                className="h-20 mb-3"
              />
              <h2 className="text-2xl">Past Self</h2>
              <p className="opacity-90">
                <b>Core Loop & Level Scripting, Key & Inventory Systems, Sound Implementation</b> – Unity
              </p>
              <p className="mt-2">
                <b>Past Self</b> is a time-loop puzzle-platformer created for the <b>GMTK Game Jam 2025</b>, where short runs replay as past selves, letting players cooperate with their previous actions to press buttons, open doors, and collect keys to reach the exit.
              </p>

              <ul className="mt-4 list-disc list-inside">
                <li>Engine: Unity 6.2</li>
                <li>Team Size: 3</li>
                <li>Duration: 4 days</li>
              </ul>
            </div>

            {/* pinned bottom button */}
            <a href="/projects/past-self" className="mt-4 self-end">
              <button className="text-[clamp(.5rem,2vw,1rem)] cursor-pointer flex items-center gap-2 border border-gray-300 px-[clamp(.5rem,.5vw,2rem)] py-[clamp(.05rem,.5vw,.5rem)] rounded-lg transition-all duration-300 hover:bg-gray-200 hover:text-gray-900">
                Read more <span className="text-lg">›</span>
              </button>
            </a>
          </div>
        </div>

      </div>

      <div className="w-full flex flex-col items-center my-16 py-4 bg-neutral-900 shadow-xl">
        <h1>
          Game Prototypes
        </h1>
      </div>

      <div className="mx-2 flex flex-col items-center gap-32">

        {/* Procedural Leg Animation - Left Image */}
        <div className="max-w-[80rem] flex flex-col md:flex-row items-stretch gap-8 p-4 shadow-xl bg-neutral-900 rounded-lg">

          {/* IMAGE LEFT (becomes the “tallest” column) */}
          <div className="md:basis-1/2 flex flex-col">
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
              <CustomImage
                src="https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/procedural-walk-animation_img/pwa_title.png?raw=true"
                alt="Procedural Leg Animation"
                link="/projects/procedural-walk-animation"
                maxWidth="40rem"
              />
            </div>
          </div>

          {/* TEXT RIGHT (stretches to match left) */}
          <div className="md:basis-1/2 flex flex-col min-w-0">
            {/* growing content */}
            <div className="flex-1">
              <h2 className="mt-2 text-2xl">Procedural Leg Animation</h2>
              <p className="opacity-90">
                <b>Procedural Animation Programmer</b> – Unity
              </p>
              <p className="mt-2">
                A fully <b>procedural stepping system</b> built in <b>Unity 6</b> for insect or robot-like legs,
                where legs are split into two groups (A/B) and step dynamically based on priority scores relative
                to target distance, achieving natural movement with <b>no baked animations</b>.
              </p>

              <ul className="mt-4 list-disc list-inside">
                <li>Engine: Unity</li>
                <li>Team Size: 1 (myself)</li>
                <li>Duration: span of 3 months</li>
              </ul>
            </div>

            {/* pinned bottom button */}
            <a href="/projects/procedural-walk-animation" className="mt-4 self-end">
              <button className="text-[clamp(.5rem,2vw,1rem)] cursor-pointer flex items-center gap-2 border border-gray-300 px-[clamp(.5rem,.5vw,2rem)] py-[clamp(.05rem,.5vw,.5rem)] rounded-lg transition-all duration-300 hover:bg-gray-200 hover:text-gray-900">
                Read more <span className="text-lg">›</span>
              </button>
            </a>
          </div>
        </div>

      </div>

      <div className="w-full flex flex-col items-center my-16 py-4 bg-neutral-900 shadow-xl">
        <h1>
          Contact Me
        </h1>
      </div>

      <div className="mx-2 mb-16 flex flex-col items-center gap-8">
        <div className="flex flex-row items-end gap-32">
          <a
            className="flex flex-col items-center gap-2 transition-colors text-white/95 hover:text-pink-400"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/viniciuspmattei/"
          >
            <img
              className="max-w-[3rem] sm:max-w-[4rem] md:max-w-[5rem]"
              src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/logos/websites/linkedin.png?raw=true"
              alt="LinkedIn"
            />
            <div>LinkedIn</div>
          </a>
          <a
            className="flex flex-col items-center gap-2 transition-colors text-white/95 hover:text-pink-400"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/vpmattei"
          >
            <img
              className="max-w-[4rem] sm:max-w-[5rem] md:max-w-[6rem]"
              src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/logos/websites/github.png?raw=true"
              alt="GitHub"
            />
            <div>GitHub</div>
          </a>
        </div>

        <h2 className="text-center font-bold mt-16">Send me a message</h2>
        <div className="w-full max-w-[60rem]">
          <ContactForm />
        </div>
      </div>

    </section>
  );
}
