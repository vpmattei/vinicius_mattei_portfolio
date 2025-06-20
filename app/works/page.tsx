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
            src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/1.webp"
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

      {/* Side Game Projects */}
      <h2 className="text-center pb-8">Side Game Projects</h2>
      <div className="flex flex-row flex-wrap justify-center gap-12 mb-16">
        <div className="flex flex-col items-center">
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
        </div>
      </div>
    </section>
  );
};

export default Page;
