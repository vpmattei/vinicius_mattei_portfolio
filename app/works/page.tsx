import CustomImage from "app/components/CustomImage";
import React from "react";

export const metadata = {
  title: "Works",
  description: "Works done in Companies and in the University.",
};

const Page: React.FC = () => {
  return (
    <section className="prose mt-32 mx-8 flex flex-col items-center">
      <h1 className="text-center">Works</h1>

      {/* Main Game Projects */}
      <h2 className="text-center pb-8">University Game Projects</h2>
      <div className="flex flex-row flex-wrap justify-center gap-12 mb-16">
        <div className="flex flex-col items-center">
          <CustomImage
            src="https://i.ibb.co/19SxrGF/paravoile.png"
            alt="Hebald Forest"
            link="/works/hebald-forest"
            maxWidth="12rem"
            maxHeight="12rem"
            squareImage={true}
          />
          <a href="/works/hebald-forest">
            <h4 className="transition-all hover:text-neutral-400 text-center mt-2">
              Hebald Forest
            </h4>
          </a>
        </div>

        <div className="flex flex-col items-center">
          <CustomImage
            src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/main_level_01.png?raw=true"
            alt="Anamnesis"
            link="/works/anamnesis"
            maxWidth="12rem"
            maxHeight="12rem"
            squareImage={true}
          />
          <a href="/works/anamnesis">
            <h4 className="transition-all hover:text-neutral-400 text-center mt-2">
              Anamnesis
            </h4>
          </a>
        </div>
      </div>

      <hr className="w-full border-gray-500 my-6" />

      {/* Solo Game Projects */}
      <h2 className="text-center pb-8">Solo Game Projects</h2>

      <div className="flex flex-row flex-wrap justify-center gap-12 mb-16">
        <div className="flex flex-col items-center">
          <CustomImage
            src="https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/procedural-walk-animation_img/pwa_title.png?raw=true"
            alt="Procedural Walk Animation"
            link="/works/procedural-walk-animation"
            maxWidth="12rem"
            maxHeight="12rem"
            squareImage={true}
          />
          <a href="/works/procedural-walk-animation">
            <h4 className="transition-all hover:text-neutral-400 text-center mt-2">
              Procedural Walk Animation
            </h4>
          </a>
        </div>

        {/* <div className="flex flex-col items-center">
          <CustomImage
            src="https://raw.githubusercontent.com/vpmattei/TicTacToe-Multiplayer-Game/main/Assets/ReadmeImages/TicTacToe_MainScene.png"
            alt="Tic Tac Toe"
            link="/works/tic-tac-toe"
            maxWidth="12rem"
            maxHeight="12rem"
            squareImage={true}
          />
          <a href="/works/tic-tac-toe">
            <h4 className="transition-all hover:text-neutral-400 text-center mt-2">
              Multiplayer Tic Tac Toe
            </h4>
          </a>
        </div>

        <div className="flex flex-col items-center">
          <CustomImage
            src="https://raw.githubusercontent.com/vpmattei/Starfox-laser-defender-game/main/Assets/GameImages/starfox-gameplay.png"
            alt="Starfox Laser Defender Game"
            link="/works/starfox-game"
            maxWidth="12rem"
            maxHeight="12rem"
            squareImage={true}
          />
          <a href="/works/starfox-game">
            <h4 className="transition-all hover:text-neutral-400 text-center mt-2">
              Starfox Laser Defender Game
            </h4>
          </a>
        </div> */}
      </div>

      <hr className="w-full border-gray-500 my-6" />

      {/* Game Jams */}
      <h2 className="text-center pb-8">Game Jams</h2>
      <div className="flex flex-row flex-wrap justify-center gap-12 mb-16">
        <div className="flex flex-col items-center">
          <CustomImage
            src="https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/past_self_images/past_self_main_image.png?raw=true"
            alt="Past Self – GMTK 2025"
            link="/works/past-self-gmtk-2025"
            maxWidth="12rem"
            maxHeight="12rem"
            squareImage={true}
          />
          <a href="/works/past-self">
            <h4 className="transition-all hover:text-neutral-400 text-center mt-2">
              Past Self – GMTK 2025
            </h4>
          </a>
        </div>
      </div>

      <hr className="w-full border-gray-500 my-6" />

      {/* Other Projects */}
      <h2 className="text-center pb-8">Other Projects</h2>
      <div className="flex flex-row flex-wrap justify-center gap-12 mb-16">
        <div className="flex flex-col items-center">
          <CustomImage
            src="https://raw.githubusercontent.com/vpmattei/pokedex-app/main/Showcase/Final%20Export/MainPhotoPokedexShowcase.png"
            alt="Pokédex App"
            link="/works/pokedex-app"
            maxWidth="12rem"
            maxHeight="12rem"
            squareImage={true}
          />
          <a href="/works/pokedex-app">
            <h4 className="transition-all hover:text-neutral-400 text-center mt-2">
              Pokédex App
            </h4>
          </a>
        </div>

        <div className="flex flex-col items-center">
          <CustomImage
            src="https://i.ibb.co/GPvMSqy/Captura-de-Tela-2024-09-13-s-12-00-21.png"
            alt="Kentyou"
            link="/works/kentyou"
            maxWidth="12rem"
            maxHeight="12rem"
            squareImage={true}
          />
          <a href="/works/kentyou">
            <h4 className="transition-all hover:text-neutral-400 text-center mt-2">
              Kentyou Dashboard Redesign
            </h4>
          </a>
        </div>

        <div className="flex flex-col items-center">
          <CustomImage
            src="https://i.ibb.co/QbHsPWM/podcastr-details-dark.png"
            alt="Podcastr"
            link="/works/podcastr"
            maxWidth="12rem"
            maxHeight="12rem"
            squareImage={true}
          />
          <a href="/works/podcastr">
            <h4 className="transition-all hover:text-neutral-400 text-center mt-2">
              Podcastr Platform
            </h4>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Page;
