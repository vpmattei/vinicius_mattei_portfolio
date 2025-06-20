import React from "react";
import ArrowIcon from "app/components/ArrowIcon";

export const metadata = {
  title: "Hebald Forest",
  description: "Open-world game developed with Unreal Engine 5.",
};

const Page: React.FC = () => {
  return (
    <section className="prose lg:mx-64 md:mx-12 mx-8 flex flex-col items-center gap-16">
      {/* Header */}
      <div className="w-full flex flex-col items-center text-center">
        <img
          src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/hebald_forest_images/logo.webp"
          alt="Hebald Forest Logo"
          style={{ width: "400px", height: "300px" }}
        />
        <h2 className="text-3xl font-bold mt-4">Hebald Forest</h2>
        <h3 className="text-xl font-medium mt-2">
          🌲 An Unreal Engine 5 open-world adventure
        </h3>
        <a
          className="mb-8 flex items-center transition-all hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://jessymonrocq.itch.io/hebald-forest"
        >
          <h3>Play on Itch.io</h3>
          <p className="ml-2">
            <ArrowIcon size={18} />
          </p>
        </a>
      </div>

      {/* YouTube Video */}
      <div className="w-full aspect-video max-w-4xl">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/ODJmCASHLy4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      {/* Description */}
      <div className="w-full text-justify">
        <h3 className="text-2xl font-bold">📃 About</h3>
        <p>
          Hebald Forest is a collaborative open-world game developed with Unreal
          Engine 5 during the second year of the MAJIC program (Management of
          Video Games, Image, and Creativity) at Université Côte d'Azur.
          Featuring cutting-edge technologies like Lumen and Nanite, this
          project served as a hands-on learning platform for mastering UE5.
        </p>
        <p>
          With a team of 19 multidisciplinary members, the development process
          touched all areas of game creation. My personal contributions
          included:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <b>Project Manager:</b> Coordinated development to align with the
            project vision
          </li>
          <li>
            <b>Sound Designer:</b> Created immersive audio using Wwise
          </li>
          <li>
            <b>Game Designer:</b> Balanced mechanics and enhanced gameplay feel
          </li>
          <li>
            <b>Level Designer:</b> Structured the game world and refined
            environments
          </li>
          <li>
            <b>Developer:</b> Programmed puzzle-related mechanics
          </li>
        </ul>
        <p>
          Hebald Forest represents a significant step in my journey as a game
          developer, showcasing technical versatility and teamwork.
        </p>
      </div>

      {/* Gallery */}
      <div className="w-full">
        <h3 className="text-2xl font-bold">🖼️ Screenshots</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {[
            "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/affiche-HBF.jpg?raw=true",
            "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/village.png?raw=true",
            "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/image.png?raw=true",
            "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/cave2.png?raw=true",
            "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/cave.png?raw=true",
            "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/cave-pierre.png?raw=true",
            "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/aymir.png?raw=true",
            "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/asian.png?raw=true",
            "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/carnet.png?raw=true",
            "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/paravoile.png?raw=true",
            "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/village2.png?raw=true",
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Hebald Forest ${index + 1}`}
              className="rounded-lg"
            />
          ))}
        </div>
      </div>

      {/* Footer Nav */}
      <div className="px-8 flex md:flex-row flex-col justify-between w-[100vw]">
        <div className="flex flex-col items-start w-[100%]">
          <a
            className="font-fraunces-light-i text-pink-200 hover:text-3xl hover:text-pink-400 text-2xl flex flex-row items-center gap-3 min-w-[10rem]"
            href="/works/anamnesis"
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
            href="/works/starfox-game"
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
