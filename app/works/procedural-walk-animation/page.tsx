import React from "react";
import Link from "next/link";
import ArrowIcon from "app/components/ArrowIcon";
import FullScreenGallery from "app/components/FullScreenGallery";

export const metadata = {
  title: "Procedural Walk Animation",
  description: "Insect|Robot-like Animation done in Unity.",
};

const podcastrImages = {
  //"https://github.com/vpmattei/vinicius_mattei_portfolio"
  logo: "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/app/assets/procedural-walk-animation_img/pwa_title.png",
  gallery: [
    "https://raw.githubusercontent.com/vpmattei/pokedex-app/main/Showcase/Final%20Export/PokemonListShowcase.png",
  ],
  playingDark: "https://i.ibb.co/6r8R6yH/podcastr-playing-dark.png",
  detailsDark: "https://i.ibb.co/QbHsPWM/podcastr-details-dark.png",
  mobileScreens: "https://i.ibb.co/Fnt5JLX/podcastr-mobile-screens.png",
};

const Page: React.FC = () => {
  return (
    <section className="prose lg:mx-64 md:mx-12 mx-8 flex flex-col items-center gap-16">
      {/* Logo and Header */}
      <div className="w-full flex flex-col items-center text-center">
        <img
          src={podcastrImages.logo}
          alt="Podcastr Logo"
          style={{ width: "600px", height: "300px" }}
        />
        <h2 className="text-3xl font-bold mt-4">Podcastr</h2>
        <h3 className="text-xl font-medium mt-2">
          🎧 The best for you to listen, always
        </h3>
        <a
          className="mb-8 flex items-center transition-all hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/vpmattei/podcastrnext"
        >
          <h3>Github Repository</h3>
          <p className="ml-2">
            <ArrowIcon size={18} />
          </p>
        </a>
      </div>

      {/* About Section */}
      <div className="w-full text-justify">
        <h3 className="text-2xl font-bold">📃 About</h3>
        <p>
          <strong>Podcastr</strong> is a modern web application developed during
          Rocketseat's <strong>Next Level Week</strong> React track. Its main
          goal is to deliver an immersive podcast experience, featuring detailed
          episode information and a custom audio player. 🚀
        </p>
      </div>

      <FullScreenGallery images={podcastrImages.gallery} useGrid={true} />

      {/* Features Section */}
      <div className="w-full">
        <h3 className="text-2xl font-bold">✨ Features</h3>
        <ul className="list-disc list-inside">
          <li>🆕 List of the latest episodes</li>
          <li>📄 Detailed episode pages</li>
          <li>📅 Display of the current date</li>
          <li>🎛️ Audio player with shuffle, repeat, and playback controls</li>
          <li>🌗 Responsive layout with dark and light mode</li>
        </ul>
      </div>

      {/* Technologies Section */}
      <div className="w-full">
        <h3 className="text-2xl font-bold">🚀 Technologies</h3>
        <p>
          Podcastr leverages the following technologies to provide a seamless
          user experience:
        </p>
        <ul className="list-disc list-inside">
          <li>
            ⚛️ <strong>React</strong> for building the UI
          </li>
          <li>
            🌐 <strong>Next.js</strong> for server-side rendering and routing
          </li>
          <li>
            💻 <strong>TypeScript</strong> for type safety
          </li>
          <li>
            🎨 <strong>Sass</strong> for styling
          </li>
        </ul>
      </div>

      <div className="px-8 flex md:flex-row flex-col justify-between w-[100vw]">
        <div className="flex flex-col items-start w-[100%]">
          <a
            className="font-fraunces-light-i text-pink-200 hover:text-3xl hover:text-pink-400 text-2xl flex flex-row items-center gap-3 min-w-[10rem]"
            href="/works/hebald-forest"
          >
            <img
              className="h-[50px]"
              src="https://cdn.prod.website-files.com/63ea7102bccb5ef39bb53f01/640f47a0e5c6852030f01aef_arrow%20svg%20left.svg"
              loading="lazy"
            ></img>
            PREVIOUS PROJECT
          </a>
        </div>

        <div className="flex flex-col items-end w-[100%]">
          <a
            className="font-fraunces-light-i text-green-300 hover:text-3xl hover:text-green-500 text-2xl flex flex-row items-center gap-3 min-w-[7rem]"
            href="/works/kentyou"
          >
            NEXT PROJECT
            <img
              className="h-[50px]"
              src="https://cdn.prod.website-files.com/63ea7102bccb5ef39bb53f01/640f4647eec4474635c0cee7_arrow%20svg%20right.svg"
              loading="lazy"
            ></img>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Page;
