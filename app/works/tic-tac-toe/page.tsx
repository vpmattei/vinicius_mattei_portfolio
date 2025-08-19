import React from "react";
import Link from "next/link";
import ArrowIcon from "app/components/ArrowIcon";
import FullScreenGallery from "app/components/FullScreenGallery";

export const metadata = {
  title: "Tic Tac Toe Multiplayer",
  description: "Tic Tac Toe Multiplayer game built with Unity and Netcode.",
};

const ticTacToeImages = {
  logo: "https://raw.githubusercontent.com/vpmattei/TicTacToe-Multiplayer-Game/main/Assets/ReadmeImages/TicTacToe_MainScene.png",
  gallery: [
    "https://raw.githubusercontent.com/vpmattei/TicTacToe-Multiplayer-Game/main/Assets/ReadmeImages/TypingName.png",
    "https://raw.githubusercontent.com/vpmattei/TicTacToe-Multiplayer-Game/main/Assets/ReadmeImages/CreatingLobby.png",
    "https://raw.githubusercontent.com/vpmattei/TicTacToe-Multiplayer-Game/main/Assets/ReadmeImages/LobbyList.png",
    "https://raw.githubusercontent.com/vpmattei/TicTacToe-Multiplayer-Game/main/Assets/ReadmeImages/Lobby.png",
    "https://raw.githubusercontent.com/vpmattei/TicTacToe-Multiplayer-Game/main/Assets/ReadmeImages/Won.png",
    "https://raw.githubusercontent.com/vpmattei/TicTacToe-Multiplayer-Game/main/Assets/ReadmeImages/Lost.png",
    "https://raw.githubusercontent.com/vpmattei/TicTacToe-Multiplayer-Game/main/Assets/ReadmeImages/Tie.png",
  ],
};

const Page: React.FC = () => {
  return (
    <section className="prose mx-12 sm:mx-16 md:mx-20 lg:mx-32 flex flex-col items-center gap-16">
      {/* Header */}
      <div className="w-full flex flex-col items-center text-center">
        <img
          src={ticTacToeImages.logo}
          alt="Tic Tac Toe Game"
          style={{ width: "600px", height: "auto" }}
        />
        <h2 className="text-3xl font-bold mt-4">Multiplayer Tic Tac Toe</h2>
        <h3 className="text-xl font-medium mt-2">🕹️ Real-time Online Game</h3>
        <a
          className="mb-8 flex items-center transition-all hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/vpmattei/TicTacToe-Multiplayer-Game"
        >
          <h3>GitHub Repository</h3>
          <p className="ml-2">
            <ArrowIcon size={18} />
          </p>
        </a>
      </div>

      {/* About */}
      <div className="w-full text-justify">
        <h3 className="text-2xl font-bold">📃 About</h3>
        <p>
          This project is a fully functional <strong>multiplayer Tic Tac Toe game</strong> built with <strong>Unity</strong> using <strong>Netcode for GameObjects</strong>, <strong>Unity Lobby</strong>, and <strong>Relay services</strong>.
          It showcases real-time matchmaking, turn-based logic, synced states, and a clean modular UI.
        </p>
        <p>
          Developed as an educational prototype following Code Monkey's tutorial on multiplayer game development in Unity.
        </p>
      </div>

      {/* Gallery */}
      <FullScreenGallery images={ticTacToeImages.gallery} useGrid={true} />

      {/* Features */}
      <div className="w-full">
        <h3 className="text-2xl font-bold">✨ Features</h3>
        <ul className="list-disc list-inside">
          <li>🎮 Turn-based multiplayer gameplay</li>
          <li>🌐 Unity Lobby + Relay for network connectivity</li>
          <li>📡 State sync using NetworkVariables and RPCs</li>
          <li>🏆 Win, tie, and loss detection</li>
          <li>🔁 Rematch system with score tracking</li>
          <li>🔊 SFX and BGM integrated</li>
          <li>🧩 Clean UI & game flow</li>
        </ul>
      </div>

      {/* Technologies */}
      <div className="w-full">
        <h3 className="text-2xl font-bold">🚀 Technologies</h3>
        <ul className="list-disc list-inside">
          <li>🎮 <strong>Unity 6</strong></li>
          <li>🌐 <strong>Netcode for GameObjects</strong></li>
          <li>📶 <strong>Unity Lobby & Relay Services</strong></li>
          <li>🧠 <strong>C# Events, Delegates, GameManager</strong></li>
          <li>🎛️ <strong>AudioSource & UI Toolkit</strong></li>
        </ul>
      </div>

      {/* Navigation */}
      <div className="px-8 flex md:flex-row flex-col justify-between w-[100vw]">
        <div className="flex flex-col items-start w-[100%]">
          <a
            className="font-fraunces-light-i text-pink-200 hover:text-3xl hover:text-pink-400 text-2xl flex flex-row items-center gap-3 min-w-[10rem]"
            href="/works/starfox-game"
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
            href="/works/procedural-walk-animation"
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