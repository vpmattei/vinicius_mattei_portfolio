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

const notebookImages = {
  gallery: [
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/carnet.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/carnet.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/carnet.png?raw=true",
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
    <section className="prose mx-6 sm:mx-8 md:mx-16 lg:mx-24 flex flex-col items-center gap-16">
      <div className="w-full flex flex-col items-start gap-4">

        {/* Title and Main Image */}
        <div className="w-full flex flex-row items-end gap-2 bg-gray-800">

          {/* LEFT */}
          <div className="w-3/8 flex items-start">
            <div className="flex flex-col items-start">
              <img
                className="max-w-[100%] sm:max-w-[70%] md:max-w-[60%]"
                src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/hebald_forest_images/logo.webp"
                alt="Hebald Forest Logo"
              />
              <h1 className="mt-4 mb-2">Hebald Forest</h1>
              <h3 className="mt-0 mb-2">Project Breakdown</h3>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-5/8">
            <div className="flex flex-col items-center">
              <ImageDisplay src="https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/affiche-HBF.jpg?raw=true" />
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="w-full flex flex-row items-start gap-2 bg-gray-700">

          {/* LEFT */}
          <div className="w-3/8">

            {/* Info */}
            <div className="p-2 md:p-4 shadow-xl">
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

            {/* Team */}
            <div className="p-2 md:p-4 shadow-xl">
              <h4>Team</h4>
              <p>
                The team consisted of <b>19 members</b>, including 4 Developers, 2 3D Artists, 2 2D Artists,
                1 VFX Artist, 1 UI Programmer, 1 Level Designer, 1 Narrative Designer, 5 Sound Designers.
                I served as one of the <b>3 Coordinators</b> of the project while also taking on multiple roles:{" "}
                <b>Development</b>, <b>Game Design</b>, <b>Sound Design and Integration</b>, and later <b>Level Design</b>.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-5/8">

            {/* Brief */}
            <div className="p-2 md:p-4 shadow-xl">
              <h4>Brief</h4>
              <p>
                <b>Hebald Forest</b> is <b>open-world exploration game</b> developed
                During my second year of my Masters Degree at Université Côte d'Azur in Cannes, France.
                This project was a collaborative game built with <b>Unreal Engine 5</b>.

              </p>
            </div>

            {/* Project Goals */}
            <div className="p-2 md:p-4 shadow-xl">
              <h4>Project Goals</h4>
              <p>
                Our primary goal was to deliver a <b>playable demo of Hebald Forest</b> for the International Games Festival {" "}
                (<b>FIJ</b>) in Cannes, France.
              </p>
              <br />
              <p>
                The demo had to showcase a <b>functional tutorial</b>, a <b>village with NPCs and{" "}
                  quests</b>, and a <b>forest</b> for exploration and progression, while highlighting key systems like the{" "}
                <b>interactive journal</b>, <b>puzzles</b>, and <b>dynamic music</b>. The objective was to present a <b>festival-ready
                  prototype</b> that felt <b>cohesive</b>, <b>intuitive</b>, and showed the project’s potential.
              </p>
              <br />
              <div className="w-full flex flex-row">
                <div className="w-1/2">
                  <h6 className="mb-2">Primary responsibilities</h6>
                  <ul>
                    <li>Project Coordinator</li>
                    <li>Scrum Master</li>
                    <li>Lead Technical Designer</li>
                    <li>Sound & Music Integration</li>
                  </ul>
                </div>
                <div className="w-1/2">
                  <h6 className="mb-2">Other hats</h6>
                  <ul>
                    <li>Developer</li>
                    <li>Game Designer</li>
                    <li>Level Designer</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Takeaways */}
            <div className="p-2 md:p-4 shadow-xl">
              <h4>Takeaways</h4>
              <p>
                The game made use of cutting-edge technologies such as <b>Lumen</b> and <b>Nanite</b>.
                However, these innovations often proved to be more of a challenge than a benefit, introducing{" "}
                <b>performance issues</b>, unexpected bugs, and forcing us to rapidly adapt our workflow to these new systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Game Mechanics */}
      <div className="w-full flex flex-col items-start bg-gray-700 pb-4 shadow-xl">
        <h2>Game Mechanics</h2>

        {/* Notebook */}
        <div className="w-full mt-4 flex flex-col items-start p-2 md:p-4 shadow-xl bg-gray-800">
          <h3>1. Notebook</h3>

          <div className="w-full mt-4 flex flex-row items-start shadow-xl bg-gray-700 gap-2">
            <div className="w-1/3 flex flex-col items-center bg-gray-600">
              <ImageDisplay
                src={notebookImages.gallery[0]}
                gallery={notebookImages.gallery}
                index={0}
              />
              <p>description</p>
            </div>
            <div className="w-1/3 flex flex-col items-center bg-gray-500">
              <ImageDisplay
                src={notebookImages.gallery[1]}
                gallery={notebookImages.gallery}
                index={0}
              />
              <p>description</p>
            </div>
            <div className="w-1/3 flex flex-col items-center bg-gray-400">
              <ImageDisplay
                src={notebookImages.gallery[2]}
                gallery={notebookImages.gallery}
                index={0}
              />
              <p>description</p>
            </div>
          </div>
        </div>

        {/* Climbing */}
        <div className="w-full mt-4 flex flex-col items-start p-2 md:p-4 shadow-xl bg-gray-800">
          <h3>2. Climbing</h3>

          <div className="w-full mt-4 flex flex-row items-start shadow-xl bg-gray-700 gap-2">
            <div className="w-1/3 flex flex-col items-center bg-gray-600">
              <ImageDisplay
                src={notebookImages.gallery[0]}
                gallery={notebookImages.gallery}
                index={0}
              />
              <p>description</p>
            </div>
            <div className="w-1/3 flex flex-col items-center bg-gray-500">
              <ImageDisplay
                src={notebookImages.gallery[1]}
                gallery={notebookImages.gallery}
                index={0}
              />
              <p>description</p>
            </div>
            <div className="w-1/3 flex flex-col items-center bg-gray-400">
              <ImageDisplay
                src={notebookImages.gallery[2]}
                gallery={notebookImages.gallery}
                index={0}
              />
              <p>description</p>
            </div>
          </div>
        </div>

        {/* Swimming */}
        <div className="w-full mt-4 flex flex-col items-start p-2 md:p-4 shadow-xl bg-gray-800">
          <h3>3. Swimming</h3>

          <div className="w-full mt-4 flex flex-row items-start shadow-xl bg-gray-700 gap-2">
            <div className="w-1/3 flex flex-col items-center bg-gray-600">
              <ImageDisplay
                src={notebookImages.gallery[0]}
                gallery={notebookImages.gallery}
                index={0}
              />
              <p>description</p>
            </div>
            <div className="w-1/3 flex flex-col items-center bg-gray-500">
              <ImageDisplay
                src={notebookImages.gallery[1]}
                gallery={notebookImages.gallery}
                index={0}
              />
              <p>description</p>
            </div>
            <div className="w-1/3 flex flex-col items-center bg-gray-400">
              <ImageDisplay
                src={notebookImages.gallery[2]}
                gallery={notebookImages.gallery}
                index={0}
              />
              <p>description</p>
            </div>
          </div>
        </div>
      </div>

      {/* My Contribution */}
      <div className="w-full flex flex-col items-start bg-gray-700 pb-4 shadow-xl">
        <h2>My Contributions</h2>

        {/* Tower */}
        <div className="w-full mt-4 flex flex-col items-start p-2 md:p-4 shadow-xl bg-gray-800 gap-2">
          <h3>1. Tower Rework</h3>

          {/* BEFORE */}
          <div className="w-full flex flex-row gap-2">
            <div className="w-2/5 flex flex-row items-center bg-gray-600">
              <p>
                <b><u>Problem:</u></b> The puzzle was <b>too simple</b> with <b>no clear objective</b>.
                Its central location made it one of the first areas players rushed to, leading to a <b>weak
                  first impression</b>.
              </p>
            </div>
            <div className="w-3/5 flex flex-col items-start bg-gray-500">
              <ImageDisplay
                src={beforeAndAfterTowerImages.gallery[0]}
                gallery={beforeAndAfterTowerImages.gallery}
                index={0}
              />
              <p className="mt-2 self-center"><i>BEFORE</i></p>
            </div>
          </div>

          {/* ARROW */}
          <div className="w-full flex flex-row gap-2">
            <div className="w-2/5 flex flex-col items-start bg-gray-600">
            </div>
            <div className="w-3/5 flex flex-col items-start bg-gray-500">
              <svg
                className="mt-2 self-center h-[5vh] w-[5vw] text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
              </svg>
            </div>
          </div>

          {/* AFTER */}
          <div className="w-full flex flex-row gap-2">
            <div className="w-2/5 flex flex-row items-center bg-gray-600">
              <p>
                <b><u>Solution:</u></b> Replaced with a tall, eye-catching tower that creates a natural <b>urge
                  to climb</b> and discover what’s inside.
              </p>
            </div>
            <div className="w-3/5 flex flex-col items-start bg-gray-500">
              <ImageDisplay
                src={beforeAndAfterTowerImages.gallery[1]}
                gallery={beforeAndAfterTowerImages.gallery}
                index={0}
              />
              <p className="mt-2 self-center"><i>AFTER</i></p>
            </div>
          </div>
        </div>

        {/* Cave */}
        <div className="w-full mt-4 flex flex-col items-start p-2 md:p-4 shadow-xl bg-gray-800 gap-2">
          <h3>2. Cave Rework</h3>

          {/* BEFORE */}
          <div className="w-full flex flex-row gap-2">
            <div className="w-3/5 flex flex-col items-start bg-gray-600">
              <ImageDisplay
                src={beforeAndAfterCaveImages.gallery[0]}
                gallery={beforeAndAfterCaveImages.gallery}
                index={0}
              />
              <p className="mt-2 self-center"><i>BEFORE</i></p>

            </div>
            <div className="w-2/5 flex flex-row items-center bg-gray-500">
              <p>
                <b><u>Problem:</u></b> The old cave was <b>too messy</b> with <b>no clear direction</b> of where to go.
                The main objective that was collecting the gem was poorly designed and had no feedback whatsoever,
                leaving the player confused at the after leaving the cave, not knowing if he had completed the cave.
              </p>
            </div>
          </div>

          {/* ARROW */}
          <div className="w-full flex flex-row gap-2">
            <div className="w-3/5 flex flex-col items-start bg-gray-600">
              <svg
                className="mt-2 self-center h-[5vh] w-[5vw] text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
              </svg>
            </div>
            <div className="w-2/5 flex flex-col items-start bg-gray-500">
            </div>
          </div>

          {/* AFTER */}
          <div className="w-full flex flex-row gap-2">
            <div className="w-3/5 flex flex-col items-start bg-gray-600">
              <ImageDisplay
                src={beforeAndAfterCaveImages.gallery[1]}
                gallery={beforeAndAfterCaveImages.gallery}
                index={0}
              />
              <p className="mt-2 self-center"><i>AFTER</i></p>
            </div>
            <div className="w-2/5 flex flex-row items-center bg-gray-500">
              <p><b><u>Solution:</u></b> A complete overhaul and rework of the cave, with clear objective of where to go right
                off the bat after entering the cave. A short path on the left takes the player to a closed door, signaling
                that he should try and get the door open. And the longer but more difficult path on the right with puzzles and
                platforms to jump on.</p>
            </div>
          </div>
        </div>

        {/* Fox Statues */}
        <div className="w-full mt-4 flex flex-col items-start p-2 md:p-4 shadow-xl bg-gray-800 gap-2">
          <h3>3. Improved VFX & SFX for the Fox Statues</h3>

          {/* BEFORE */}
          <div className="w-full flex flex-row gap-2">
            <div className="w-2/5 flex flex-row items-center bg-gray-600">
              <p>
                <b><u>Problem:</u></b> The puzzle was <b>too simple</b> with <b>no clear objective</b>.
                Its central location made it one of the first areas players rushed to, leading to a <b>weak
                  first impression</b>.
              </p>
            </div>
            <div className="w-3/5 flex flex-col items-start bg-gray-500">
              <ImageDisplay
                src={beforeAndAfterTowerImages.gallery[0]}
                gallery={beforeAndAfterTowerImages.gallery}
                index={0}
              />
              <p className="mt-2 self-center"><i>BEFORE</i></p>
            </div>
          </div>

          {/* ARROW */}
          <div className="w-full flex flex-row gap-2">
            <div className="w-2/5 flex flex-col items-start bg-gray-600">
            </div>
            <div className="w-3/5 flex flex-col items-start bg-gray-500">
              <svg
                className="mt-2 self-center h-[5vh] w-[5vw] text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
              </svg>
            </div>
          </div>

          {/* AFTER */}
          <div className="w-full flex flex-row gap-2">
            <div className="w-2/5 flex flex-row items-center bg-gray-600">
              <p>
                <b><u>Solution:</u></b> Replaced with a tall, eye-catching tower that creates a natural <b>urge
                  to climb</b> and discover what’s inside.
              </p>
            </div>
            <div className="w-3/5 flex flex-col items-start bg-gray-500">
              <ImageDisplay
                src={beforeAndAfterTowerImages.gallery[1]}
                gallery={beforeAndAfterTowerImages.gallery}
                index={0}
              />
              <p className="mt-2 self-center"><i>AFTER</i></p>
            </div>
          </div>
        </div>

        {/* Butterfly Puzzle */}
        <div className="w-full mt-4 flex flex-col items-start p-2 md:p-4 shadow-xl bg-gray-800 gap-2">
          <h3>4. Improved VFX & SFX for the Butterfly Puzzle</h3>

          {/* BEFORE */}
          <div className="w-full flex flex-row gap-2">
            <div className="w-3/5 flex flex-col items-start bg-gray-600">
              <ImageDisplay
                src={beforeAndAfterCaveImages.gallery[0]}
                gallery={beforeAndAfterCaveImages.gallery}
                index={0}
              />
              <p className="mt-2 self-center"><i>BEFORE</i></p>

            </div>
            <div className="w-2/5 flex flex-row items-center bg-gray-500">
              <p>
                <b><u>Problem:</u></b> The old cave was <b>too messy</b> with <b>no clear direction</b> of where to go.
                The main objective that was collecting the gem was poorly designed and had no feedback whatsoever,
                leaving the player confused at the after leaving the cave, not knowing if he had completed the cave.
              </p>
            </div>
          </div>

          {/* ARROW */}
          <div className="w-full flex flex-row gap-2">
            <div className="w-3/5 flex flex-col items-start bg-gray-600">
              <svg
                className="mt-2 self-center h-[5vh] w-[5vw] text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
              </svg>
            </div>
            <div className="w-2/5 flex flex-col items-start bg-gray-500">
            </div>
          </div>

          {/* AFTER */}
          <div className="w-full flex flex-row gap-2">
            <div className="w-3/5 flex flex-col items-start bg-gray-600">
              <ImageDisplay
                src={beforeAndAfterCaveImages.gallery[1]}
                gallery={beforeAndAfterCaveImages.gallery}
                index={0}
              />
              <p className="mt-2 self-center"><i>AFTER</i></p>
            </div>
            <div className="w-2/5 flex flex-row items-center bg-gray-500">
              <p><b><u>Solution:</u></b> A complete overhaul and rework of the cave, with clear objective of where to go right
                off the bat after entering the cave. A short path on the left takes the player to a closed door, signaling
                that he should try and get the door open. And the longer but more difficult path on the right with puzzles and
                platforms to jump on.</p>
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
