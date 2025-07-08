import React from "react";
import ArrowIcon from "app/components/ArrowIcon";
import FullScreenGallery from "app/components/FullScreenGallery";

export const metadata = {
  title: "Starfox Laser Defender Game",
  description: "Gameplay prototype inspired by Starfox.",
};

const starfoxImages = {
  gallery: [
    "https://raw.githubusercontent.com/vpmattei/Starfox-laser-defender-game/main/Assets/GameImages/starfox-gameplay.png",
    "https://raw.githubusercontent.com/vpmattei/Starfox-laser-defender-game/main/Assets/GameImages/starfox-game-concept.png",
  ],
  sprites: [
    {
      label: "Asteroids",
      url: "https://raw.githubusercontent.com/vpmattei/Starfox-laser-defender-game/refs/heads/main/Assets/Sprites/Asteroids.png",
    },
    {
      label: "Airwing",
      url: "https://raw.githubusercontent.com/vpmattei/Starfox-laser-defender-game/refs/heads/main/Assets/Entities/Player/PlayerShip.png",
    },
    {
      label: "Catspawn",
      url: "https://raw.githubusercontent.com/vpmattei/Starfox-laser-defender-game/refs/heads/main/Assets/Sprites/Catspawn.png",
    },
    {
      label: "Cornerian Fighter",
      url: "https://raw.githubusercontent.com/vpmattei/Starfox-laser-defender-game/refs/heads/main/Assets/Sprites/Cornerian%20Fighter.png",
    },
    {
      label: "Invader III",
      url: "https://raw.githubusercontent.com/vpmattei/Starfox-laser-defender-game/refs/heads/main/Assets/Sprites/Invader%20III.png",
    },
    {
      label: "Coin",
      url: "https://raw.githubusercontent.com/vpmattei/Starfox-laser-defender-game/refs/heads/main/Assets/Sprites/Coin.png",
    },
    {
      label: "Blue Laser",
      url: "https://raw.githubusercontent.com/vpmattei/Starfox-laser-defender-game/refs/heads/main/Assets/Sprites/Blue%20Laser.png",
    },
    {
      label: "Green Laser",
      url: "https://raw.githubusercontent.com/vpmattei/Starfox-laser-defender-game/refs/heads/main/Assets/Sprites/Green%20Laser.png",
    },
    {
      label: "Purple Laser",
      url: "https://raw.githubusercontent.com/vpmattei/Starfox-laser-defender-game/refs/heads/main/Assets/Sprites/Purple%20Laser.png",
    },
    {
      label: "Red Laser",
      url: "https://raw.githubusercontent.com/vpmattei/Starfox-laser-defender-game/refs/heads/main/Assets/Sprites/Red%20Laser.png",
    },
  ],
};

const Page: React.FC = () => {
  return (
    <section className="prose lg:mx-64 md:mx-12 mx-8 flex flex-col items-center gap-16">
      {/* Header */}
      <div className="w-full flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold mt-4">🚀 Starfox Laser Defender Game</h2>
        <h3 className="text-xl font-medium mt-2">
          A pixel-art, arcade-style laser shooter prototype
        </h3>
        <a
          className="mb-8 flex items-center transition-all hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/vpmattei/Starfox-laser-defender-game"
        >
          <h3>Github Repository</h3>
          <p className="ml-2">
            <ArrowIcon size={18} />
          </p>
        </a>
      </div>

      {/* About */}
      <div className="w-full text-justify">
        <h3 className="text-2xl font-bold">🎮 Gameplay</h3>
        <p>
          You control a Cornerian fighter ship and must eliminate enemy invaders while avoiding incoming asteroids. The game includes:
        </p>
        <ul className="list-disc list-inside">
          <li>💥 Shoot-to-destroy enemy fighters</li>
          <li>🪨 Randomly spawning destructible asteroids</li>
          <li>🪙 Collectible coins</li>
          <li>🤖 Basic AI enemy behaviors</li>
          <li>🔊 Custom SFX</li>
        </ul>
      </div>

      <FullScreenGallery images={starfoxImages.gallery} useGrid={true} />

      <div className="w-full text-justify">
        <h3 className="text-2xl font-bold">✨ Concept</h3>
        <p>
          This project was developed as a <strong>demo</strong>, showcasing a potential arcade game mechanic system. It is <strong>not a complete game</strong>, but rather a proof-of-concept exploring:
        </p>
        <ul className="list-disc list-inside">
          <li>Pixel-perfect collisions</li>
          <li>Enemy spawns</li>
          <li>Shooting systems</li>
          <li>Score tracking</li>
        </ul>
      </div>

      <div className="w-full">
        <h3 className="text-2xl font-bold">🚀 Technologies</h3>
        <ul className="list-disc list-inside">
          <li>Unity 6</li>
          <li>C#</li>
          <li>2D Physics & Rigidbody System</li>
          <li>Sprite Animator</li>
          <li>AudioSource</li>
          <li>Custom Art (Pixel)</li>
        </ul>
      </div>

      <div className="w-full">
        <h3 className="text-2xl font-bold">🎨 Sprites</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {starfoxImages.sprites.map(({ label, url }, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={url}
                alt={label}
                className="rounded-lg shadow-md max-w-full"
              />
              <p className="mt-2 font-semibold text-center">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-8 flex md:flex-row flex-col justify-between w-[100vw]">
        <div className="flex flex-col items-start w-[100%]">
          <a
            className="font-fraunces-light-i text-pink-200 hover:text-3xl hover:text-pink-400 text-2xl flex flex-row items-center gap-3 min-w-[10rem]"
            href="/works/pokedex-app"
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
            href="/works/tic-tac-toe"
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