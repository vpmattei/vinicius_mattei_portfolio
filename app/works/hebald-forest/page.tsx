import React from "react";
import ArrowIcon from "app/components/ArrowIcon";
import ImageDisplay from "app/components/ImageDisplay";
import FullScreenGallery from "app/components/FullScreenGallery";

export const metadata = {
  title: "Hebald Forest",
  description: "Open-world game developed with Unreal Engine 5.",
};

const hebaldForestImages =
{
  gallery: [
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/affiche-HBF.jpg?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/village.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/tower_after.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/cave2.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/cave.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/cave-pierre.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/aymir.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/asian.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/carnet.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/paravoile.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/village2.png?raw=true",
  ]
}

const beforeAndAfterTowerImages = {
  gallery: [
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/tower_before_01.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/tower_after.png?raw=true",

  ],
};

const beforeAndAfterCaveImages = {
  gallery: [
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/cave_before.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/cave2.png?raw=true",
  ],
};

const Page: React.FC = () => {
  return (
    <section className="prose mx-12 sm:mx-16 md:mx-20 lg:mx-36 flex flex-col items-center gap-16">
      {/* Description */}
      <div className="w-full flex flex-col items-start">
        <div className="w-full flex flex-row items-end gap-8 sm:gap-4 md:gap-0">
          <div className="w-3/8 flex items-start">
            <div className="flex flex-col items-start">
              <img
                className="max-w-[100%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[60%]"
                src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/hebald_forest_images/logo.webp"
                alt="Hebald Forest Logo"
              />
              <h2 className="mt-4">Hebald Forest</h2>
            </div>
          </div>
          <div className="w-5/8 flex items-start">
            <div className="flex flex-col items-start">
              <div className="max-w-[80%]">
                <ImageDisplay src="https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/paravoile.png?raw=true" />
              </div>
              <h3 className="mt-8">Description</h3>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row items-start gap-8 sm:gap-4 md:gap-0">
          <div className="w-3/8">
            <ul>
              <li>Platform: PC</li>
              <li>Engine: Unreal Engine 5</li>
              <li>Team Size: 19</li>
              <li>Duration: 5 months</li>
              <li>
                <a
                  className="flex gap-1 items-center transition-colors text-white/95 hover:text-pink-400"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://jessymonrocq.itch.io/hebald-forest"
                >
                  Build: Itch.io <ArrowIcon size={12} />
                </a>
              </li>
            </ul>
          </div>

          <div className="w-5/8">
            <p>
              <b>Hebald Forest</b> is <b>open-world exploration game</b> developed
              During my second year of my Masters Degree at Université Côte d'Azur in Cannes, France.
              This project was a collaborative game built with <b>Unreal Engine 5</b>.

            </p>
            <br />
            <p>
              The team consisted of <b>19 members</b>, including 4 Developers, 2 3D Artists, 2 2D Artists,
              1 VFX Artist, 1 UI Programmer, 1 Level Designer, 1 Narrative Designer, 5 Sound Designers.
              I served as one of the <b>3 Coordinators</b> of the project while also taking on multiple roles:{" "}
              <b>Development</b>, <b>Game Design</b>, <b>Sound Design and Integration</b>, and later <b>Level Design</b>.
            </p>
            <br />
            <p>
              The game made use of cutting-edge technologies such as <b>Lumen</b> and <b>Nanite</b>.
              However, these innovations often proved to be more of a challenge than a benefit, introducing{" "}
              <b>performance issues</b>, unexpected bugs, and forcing us to rapidly adapt our workflow to these new systems.
            </p>
          </div>
        </div>
      </div>

      {/* My Contribution */}
      <div className="w-full mt-16 flex flex-col items-start">
        <h2>My Contributions</h2>
        {/* Tower */}
        <div className="w-full mt-16 flex flex-col items-start">
          <a
            className="w-full flex flex-row gap-1 items-center transition-colors text-white/95 hover:text-pink-400"
            rel="noopener noreferrer"
            href="/works/hebald-forest/tower-rework"
          >
            <h3>
              1. Tower Rework
            </h3>
          </a>
          <div className="w-full mt-8 flex flex-row items-center">
            <div className="w-6/15 flex flex-col items-start">
              <ImageDisplay
                src={beforeAndAfterTowerImages.gallery[0]}
                gallery={beforeAndAfterTowerImages.gallery}
                index={0}
              />
            </div>
            <div className="w-3/15 flex flex-col items-center">
              <img
                className="max-w-[60%]"
                src="https://cdn.prod.website-files.com/63ea7102bccb5ef39bb53f01/640f4647eec4474635c0cee7_arrow%20svg%20right.svg"
                alt="Next"
              />
            </div>
            <div className="w-6/15 flex flex-col items-start">
              <ImageDisplay
                src={beforeAndAfterTowerImages.gallery[1]}
                gallery={beforeAndAfterTowerImages.gallery}
                index={1}
              />
            </div>
          </div>
          <div className="w-full mt-8 flex flex-row items-start">
            <div className="w-6/15 flex flex-col items-center">
              <p className="self-center mb-8"><i>BEFORE</i></p>
              <p>
                Weak puzzle with <b>no clear goal</b>.
              </p>
            </div>
            <div className="w-3/15 flex flex-col items-center">
            </div>
            <div className="w-6/15 flex flex-col items-center">
              <p className="self-center mb-8"><i>AFTER</i></p>
              <p>
                Eye-catching tower creates <b>urge to climb</b>.
              </p>
              <br />
              <div className="w-full flex flex-col items-end">
                <a
                  className="w-auto flex flex-row gap-1 items-center transition-colors text-white/95 hover:text-pink-400 px-2 py-1"
                  rel="noopener noreferrer"
                  href="/works/hebald-forest/tower-rework"
                >
                  <span>See more</span>
                  <img
                    className="w-4 h-4"  // better than max-w-vw, scales consistently
                    src="https://cdn.prod.website-files.com/63ea7102bccb5ef39bb53f01/640f4647eec4474635c0cee7_arrow%20svg%20right.svg"
                    alt="Next"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="w-full mt-32 border-gray-500" />

        {/* Cave */}
        <div className="w-full mt-32 flex flex-col items-start">
          <a
            className="flex gap-1 items-center transition-colors text-white/95 hover:text-pink-400"
            rel="noopener noreferrer"
            href="/works/hebald-forest/cave-rework"
          >
            <h3>2. Cave Rework</h3>
          </a>
          <div className="w-full mt-8 flex flex-row items-center">
            <div className="w-3/8 flex flex-col items-start">
              <ImageDisplay
                src={beforeAndAfterCaveImages.gallery[0]}
                gallery={beforeAndAfterCaveImages.gallery}
                index={0}
              />
            </div>
            <div className="w-2/8 flex flex-col items-center">
              <img
                className="max-w-[50%]"
                src="https://cdn.prod.website-files.com/63ea7102bccb5ef39bb53f01/640f4647eec4474635c0cee7_arrow%20svg%20right.svg"
                alt="Next"
              />
            </div>
            <div className="w-3/8 flex flex-col items-start">
              <ImageDisplay
                src={beforeAndAfterCaveImages.gallery[1]}
                gallery={beforeAndAfterCaveImages.gallery}
                index={1}
              />
            </div>
          </div>
          <div className="w-full mt-8 flex flex-row items-start">
            <div className="w-3/8 flex flex-col items-start">
              <p className="self-center mb-8"><i>BEFORE</i></p>
              <p>
                <b><u>Problem:</u></b> The old cave was <b>too messy</b> with <b>no clear direction</b> of where to go.
                The main objective that was collecting the gem was poorly designed and had no feedback whatsoever,
                leaving the player confused at the after leaving the cave, not knowing if he had completed the cave.
              </p>
            </div>
            <div className="w-2/8 flex flex-col items-center">
            </div>
            <div className="w-3/8 flex flex-col items-start">
              <p className="self-center mb-8"><i>AFTER</i></p>
              <p>
                <b><u>Solution:</u></b> A complete overhaul and rework of the cave, with clear objective of where to go right
                off the bat after entering the cave. A short path on the left takes the player to a closed door, signaling
                that he should try and get the door open. And the longer but more difficult path on the right with puzzles and
                platforms to jump on.
              </p>
            </div>
          </div>
        </div>
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

      <FullScreenGallery images={hebaldForestImages.gallery} useGrid={true} />

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
            href="/works/podcastr"
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
