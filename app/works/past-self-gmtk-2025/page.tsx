import React from "react";
import ArrowIcon from "app/components/ArrowIcon";
import FullScreenGallery from "app/components/FullScreenGallery";

export const metadata = {
    title: "Past Self – GMTK Game Jam 2025",
    description:
        "Platformer game where past runs help you reach the goal. Designed and developed in 4 days for the GMTK Game Jam 2025.",
};

const galleryImages = [
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/past_self_images/past_self_01.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/past_self_images/past_self_02.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/past_self_images/past_self_03.png?raw=true",
];

const Page: React.FC = () => {
    return (
        <section className="prose mx-12 sm:mx-16 md:mx-20 lg:mx-32 flex flex-col items-center gap-16">
            {/* Header */}
            <div className="w-full flex flex-col items-center text-center">
                <img
                    src="https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/past_self_images/past_self_main_image.png?raw=true"
                    alt="Pokédex Logo"
                    style={{ width: "1000px", height: "auto" }}
                />
                <h2 className="text-3xl font-bold mt-4">⏳ Past Self – GMTK 2025</h2>
                <h3 className="text-xl font-medium mt-2">
                    Platformer game made in 4 days for the GMTK Game Jam 2025
                </h3>
                <a
                    className="mb-8 flex items-center transition-all hover:text-neutral-100"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://hinoga.itch.io/past-self"
                >
                    <h3>Itch.io Page</h3>
                    <p className="ml-2">
                        <ArrowIcon size={18} />
                    </p>
                </a>
            </div>

            {/* About */}
            <div className="w-full text-justify">
                <h3 className="text-2xl font-bold">🎮 Gameplay</h3>
                <p>
                    You have a short amount of time (5 to 15 seconds) to reach the exit door,
                    but in order to reach it, a pressure button needs to be activated or one or
                    multiple keys need to be collected. Once the timer ends, the level restarts,
                    and your previous run is replayed as a "past self" that performs all the
                    actions you did—opening doors, activating buttons, etc. You then cooperate
                    with your past self to complete the level.
                </p>
                <ul className="list-disc list-inside">
                    <li>⏰ Time-loop platforming mechanic</li>
                    <li>🧠 Puzzle solving through cooperation with your past selves</li>
                    <li>🗝️ Key and inventory system</li>
                    <li>🎚️ UI Sliders for Music/SFX</li>
                    <li>🎵 Original background music composed for the game</li>
                </ul>
            </div>

            <FullScreenGallery images={galleryImages} useGrid={true} />

            <div className="w-full">
                <h3 className="text-2xl font-bold">👨‍💻 My Contributions</h3>
                <ul className="list-disc list-inside">
                    <li>Designed & implemented the key collection and inventory logic</li>
                    <li>Helped with the core player mechanics</li>
                    <li>Developed UI and in-game menu/settings</li>
                    <li>Created settings menu for adjusting Music/SFX volume</li>
                    <li>Composed and implemented the background music</li>
                    <li>Fixed various game-breaking bugs</li>
                </ul>
            </div>

            <div className="w-full">
                <h3 className="text-2xl font-bold">🛠️ Technologies</h3>
                <ul className="list-disc list-inside">
                    <li>Unity 6</li>
                    <li>C#</li>
                    <li>2D Physics & Animator</li>
                    <li>AudioSource & AudioMixer</li>
                </ul>
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
                        href="/works/starfox-game"
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