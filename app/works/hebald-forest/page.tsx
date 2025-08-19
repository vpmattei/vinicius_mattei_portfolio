import React from "react";
import ArrowIcon from "app/components/ArrowIcon";
import ImageDisplay from "app/components/ImageDisplay";

export const metadata = {
  title: "Hebald Forest",
  description: "Open-world game developed with Unreal Engine 5.",
};

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
                  className="flex gap-1 items-center transition-all hover:text-neutral-100"
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
            className="flex gap-1 items-center transition-colors text-white/95 hover:text-pink-400"
            rel="noopener noreferrer"
            href="/works/hebald-forest/tower-rework"
          >
            <h3>
              1. Tower Rework
            </h3>
          </a>
          <div className="w-full mt-8 flex flex-row items-center">
            <div className="w-3/8 flex flex-col items-start">
              <ImageDisplay
                src={beforeAndAfterTowerImages.gallery[0]}
                gallery={beforeAndAfterTowerImages.gallery}
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
                src={beforeAndAfterTowerImages.gallery[1]}
                gallery={beforeAndAfterTowerImages.gallery}
                index={1}
              />
            </div>
          </div>
          <div className="w-full mt-8 flex flex-row items-start">
            <div className="w-3/8 flex flex-col items-start">
              <p className="self-center mb-8"><i>BEFORE</i></p>
              <p>
                <b>Problem:</b> The old puzzle was <b>too simple</b> and had <b>no clear objective</b>, nor
                was it clear on how to get to the objective, plus it being in the middle of the map was one of
                the first things players would go after.
              </p>
            </div>
            <div className="w-2/8 flex flex-col items-center">
            </div>
            <div className="w-3/8 flex flex-col items-start">
              <p className="self-center mb-8"><i>AFTER</i></p>
              <p>
                <b>Solution:</b> Reworked the whole area completely by removing all the previous woden towers
                and replacing them with a tall and flashy tower. Its size immediately <b>catches the attention</b> of
                the player and makes him feel an <b>urge to climb</b> to the top of the tower and find out
                what's inside it.
              </p>
            </div>
          </div>
        </div>

        {/* Cave */}
        <div className="w-full mt-16 flex flex-col items-start">
          <h3>2. Cave Rework</h3>
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
                <b>Problem:</b> The old puzzle was <b>too simple</b> and had <b>no clear objective</b>, nor did
                was it clear how to get to the objective, plus it was in the middle of the map.
              </p>
            </div>
            <div className="w-2/8 flex flex-col items-center">
            </div>
            <div className="w-3/8 flex flex-col items-start">
              <p className="self-center mb-8"><i>AFTER</i></p>
              <p>
                <b>Solution:</b> I added a tall and flashy tower in the middle of the map that immediately catches
                the attention of the player and urges him to go to the top of the tower and find out
                what's hiding at its peak.
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
