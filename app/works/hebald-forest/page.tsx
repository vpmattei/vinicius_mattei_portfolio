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
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/work-pages-redesign/assets/hebald_forest_images/affiche-HBF.jpg?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/work-pages-redesign/assets/hebald_forest_images/village.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/work-pages-redesign/assets/hebald_forest_images/tower_after.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/work-pages-redesign/assets/hebald_forest_images/cave2.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/work-pages-redesign/assets/hebald_forest_images/cave.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/work-pages-redesign/assets/hebald_forest_images/cave-pierre.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/work-pages-redesign/assets/hebald_forest_images/aymir.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/work-pages-redesign/assets/hebald_forest_images/asian.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/work-pages-redesign/assets/hebald_forest_images/carnet.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/work-pages-redesign/assets/hebald_forest_images/paravoile.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/work-pages-redesign/assets/hebald_forest_images/village2.png?raw=true",
  ]
}

const notebookImages = {
  gallery: [
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/work-pages-redesign/assets/hebald_forest_images/carnet_unlocking_escalade_nage.gif?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/work-pages-redesign/assets/hebald_forest_images/carnet_map.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/work-pages-redesign/assets/hebald_forest_images/carnet_tips_02.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/work-pages-redesign/assets/hebald_forest_images/carnet_tips_01.png?raw=true",
  ]
}

const climbing = {
  gallery: [
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/work-pages-redesign/assets/hebald_forest_images/climbing_plank_01.jpeg?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/work-pages-redesign/assets/hebald_forest_images/climbing_wall_02.gif?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/work-pages-redesign/assets/hebald_forest_images/climbing_plank_02.jpeg?raw=true",
  ]
}

const swimming = {
  image: "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/work-pages-redesign/assets/hebald_forest_images/swimming.jpeg?raw=true"
}

const beforeAndAfterTowerImages = {
  gallery: [
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/work-pages-redesign/assets/hebald_forest_images/tower_before_01.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/work-pages-redesign/assets/hebald_forest_images/tower_after_02.png?raw=true",

  ],
};

const beforeAndAfterCaveImages = {
  gallery: [
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/work-pages-redesign/assets/hebald_forest_images/cave_before.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/work-pages-redesign/assets/hebald_forest_images/cave2.png?raw=true",
  ],
};

const beforeAndAfterFoxStatue = {
  gallery: [
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/work-pages-redesign/assets/hebald_forest_images/fox_statue_activating_before.gif?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/work-pages-redesign/assets/hebald_forest_images/fox_statue_activating_after.gif?raw=true",
  ],
};

const buttonActivatedDoor = {
  gallery: [
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/work-pages-redesign/assets/hebald_forest_images/button_activation_fixed.gif?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/work-pages-redesign/assets/hebald_forest_images/button_closed_and_open_door.png?raw=true",
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
                src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/work-pages-redesign/assets/hebald_forest_images/logo.webp"
                alt="Hebald Forest Logo"
              />
              <h1 className="mt-4 mb-2">Hebald Forest</h1>
              <h3 className="mt-0 mb-2">Project Breakdown</h3>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-5/8">
            <div className="flex flex-col items-center">
              <ImageDisplay src="https://github.com/vpmattei/vinicius_mattei_portfolio/blob/work-pages-redesign/assets/hebald_forest_images/affiche-HBF.jpg?raw=true" />
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="w-full flex flex-row items-start gap-2 bg-gray-700">

          {/* LEFT */}
          <div className="w-2/8">

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
                The team consisted of <b>19 members</b>:
                <ul>
                  <li>4 Developers</li>
                  <li>2 3D Artists</li>
                  <li>2 2D Artists</li>
                  <li>1 VFX Artist</li>
                  <li>1 UI Programmer</li>
                  <li>1 Level Designer</li>
                  <li>1 Narrative Designer</li>
                  <li>5 Sound Designers</li>
                  <li>3 Coordinators (<i>me included</i>)</li>
                </ul>
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-6/8">

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

          <div className="w-full mt-4 flex flex-col md:flex-row items-start shadow-xl bg-gray-700 gap-2">
            <div className="w-full md:w-1/3 flex flex-row md:flex-col items-center bg-gray-600 gap-2">
              <div className="w-4/5 md:w-full">
                <ImageDisplay
                  src={notebookImages.gallery[0]}
                  gallery={notebookImages.gallery}
                  index={0}
                />
              </div>
              <div className="w-1/5 md:w-full">
                <p className="md:text-center">
                  <b>Unlocking skills</b>: You unlock skills like swimming or climbing by typing each one of them
                  on your notebook. The skills are only able to be unlocked once you have spoken to the right NPC
                  and they have spoken the specific word, like climb or swim, which are always annotated in <b>red</b>.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-row md:flex-col items-center bg-gray-500 gap-2">
              <div className="w-4/5 md:w-full">
                <ImageDisplay
                  src={notebookImages.gallery[1]}
                  gallery={notebookImages.gallery}
                  index={1}
                />
              </div>
              <div className="w-1/5 md:w-full">
                <p className="md:text-center">
                  A sketch of the <b>map</b> can also be found in one of the pages, this helps (<i>somewhat</i>) the player
                  navigate through the game.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-row md:flex-col items-center bg-gray-400 gap-2">
              <div className="w-4/5 md:w-full">
                <ImageDisplay
                  src={notebookImages.gallery[2]}
                  gallery={notebookImages.gallery}
                  index={2}
                />
              </div>
              <div className="w-1/5 md:w-full">
                <p className="md:text-center">
                  Some game <b>tips and clues</b> can also be found in the notebook, these tips help the player find out where{" "}
                  and how to collect the <b>spheres</b>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Climbing */}
        <div className="w-full mt-4 flex flex-col items-start p-2 md:p-4 shadow-xl bg-gray-800">
          <h3>2. Climbing</h3>

          <div className="w-full mt-4 flex flex-col md:flex-row items-start shadow-xl bg-gray-700 gap-2">
            <div className="w-full md:w-1/3 flex flex-row md:flex-col items-center gap-2">
              <div className="w-4/5 md:w-full">
                <ImageDisplay
                  src={climbing.gallery[0]}
                  gallery={climbing.gallery}
                  index={0}
                />
              </div>
              <div className="w-1/5 md:w-full">
                <p className="md:text-center">
                  With the <b>Climb skill</b> unlocked, the player can move sideways along walls before releasing and dropping down.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-row md:flex-col items-center gap-2">
              <div className="w-4/5 md:w-full">
                <ImageDisplay
                  src={climbing.gallery[1]}
                  gallery={climbing.gallery}
                  index={1}
                />
              </div>
              <div className="w-1/5 md:w-full">
                <p className="md:text-center">
                  The <b>Climb skill</b> also allows the player to scale walls upward, reaching the top and continuing on foot.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-row md:flex-col items-center gap-2">
              <div className="w-4/5 md:w-full">
                <ImageDisplay
                  src={climbing.gallery[2]}
                  gallery={climbing.gallery}
                  index={2}
                />
              </div>
              <div className="w-1/5 md:w-full">
                <p className="md:text-center">
                  Even without unlocking <b>Climb</b>, the player can still grab onto ledges or planks to pull themselves up.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Swimming */}
        <div className="w-full mt-4 flex flex-col items-start p-2 md:p-4 shadow-xl bg-gray-800">
          <h3>3. Swimming</h3>

          <div className="w-full flex flex-col md:flex-row items-center gap-4">
            {/* LEFT - Video */}
            <div className="w-full md:w-2/3 aspect-video bg-gray-600">
              <ImageDisplay
                src={swimming.image}
              />
            </div>

            {/* RIGHT - Text */}
            <div className="w-full md:w-1/3 flex flex-col items-center bg-gray-500 gap-4 p-4">
              <p>
                The <b>swimming</b> skill is unlocked after speaking with an NPC near the lake and writing the word in the <b>Notebook</b>.
                Once unlocked, the player can swim using a stamina bar that gradually depletes. If the bar runs out, the player <i>drowns</i>
                and respawns near the spot of death. Without the skill, jumping into the water immediately causes the player to <i>drown</i>.
              </p>
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
                <b><u>Problem:</u></b> The old puzzle was <b>too simple</b> and had <b>no clear objective</b>, nor
                was it clear on how to get to the objective, plus it being in the middle of the map was one of
                the first things players would go after, leading to a <b>weak first impression</b>.
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
                <b><u>Solution:</u></b> Reworked the whole area completely by removing all the previous woden towers
                and replacing them with a tall and flashy tower. Its size immediately <b>catches the attention</b> of
                the player and makes him feel an <b>urge to climb</b> to the top of the tower and find out
                what's inside it.
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
                <b><u>Problem:</u></b> There was <b>no feedback</b> for activating the Fox Statue, leaving
                the player wondering if he activated it correctly or not.
              </p>
            </div>
            <div className="w-3/5 flex flex-col items-start bg-gray-500">
              <img
                className="w-[100vw]"
                src={beforeAndAfterFoxStatue.gallery[0]}
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
                <b><u>Solution:</u></b> Added <b>visual and audio effects</b> after activating the Fox Statue,
                clearly showing an output for activating the fox correctly.
              </p>
            </div>
            <div className="w-3/5 flex flex-col items-start bg-gray-500">
              <img
                className="w-[100vw]"
                src={beforeAndAfterFoxStatue.gallery[1]}
              />
              <p className="mt-2 self-center"><i>AFTER</i></p>
            </div>
          </div>
        </div>

        {/* Butterfly Puzzle */}
        <div className="w-full mt-4 flex flex-col items-start p-2 md:p-4 shadow-xl bg-gray-800 gap-2">
          <h3>4. Improved VFX & SFX for the Butterfly Puzzle</h3>

          <div className="w-full flex flex-col md:flex-row items-center gap-4">
            {/* LEFT - Video */}
            <div className="w-full md:w-2/3 aspect-video bg-gray-600">
              <iframe
                className="w-full h-full rounded"
                src="https://www.youtube.com/embed/FLSQJRue0SU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            {/* RIGHT - Text */}
            <div className="w-full md:w-1/3 flex flex-col items-center bg-gray-500 gap-4 p-4">
              <p>
                <b><u>Problem:</u></b> <b>No sound or visual feedback</b>, the player was left <b>not knowing</b> if anything had
                even happened, sometimes the player would <b>not</b> even <b>know</b> that he had triggered the butterfly puzzle.
              </p>

              <svg
                className="h-6 w-6 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
              </svg>

              <p>
                <b><u>Solution:</u></b> Added <b>audio and visual feedback</b>, when triggering one of the three butterfly placements,
                a <b>sound</b> + a <b>visual</b> effect plays. The <b>pitch</b> also <b>increases</b> as the player "collects" more butterflies,
                signaling that he is <b>progressing</b> through the puzzle.
              </p>
            </div>
          </div>
        </div>

        {/* Button Activated Door */}
        <div className="w-full mt-4 flex flex-col items-start p-2 md:p-4 shadow-xl bg-gray-800 gap-2">
          <h3>5. Button Activated Door</h3>

          {/* BEFORE */}
          <div className="w-full mt-4 flex flex-col md:flex-row items-start shadow-xl bg-gray-700 gap-2">
            <div className="w-full md:w-1/2 flex flex-row md:flex-col items-center bg-gray-600 gap-2">
              <div className="w-4/5 md:w-full">
                <ImageDisplay
                  src={buttonActivatedDoor.gallery[0]}
                  gallery={buttonActivatedDoor.gallery}
                  index={0}
                />
              </div>
              <div className="w-1/5 md:w-full">
                <p className="md:text-center">
                  <b>Unlocking skills</b>: You unlock skills like swimming or climbing by typing each one of them
                  on your notebook. The skills are only able to be unlocked once you have spoken to the right NPC
                  and they have spoken the specific word, like climb or swim, which are always annotated in <b>red</b>.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-row md:flex-col items-center bg-gray-500 gap-2">
              <div className="w-4/5 md:w-full">
                <ImageDisplay
                  src={buttonActivatedDoor.gallery[1]}
                  gallery={buttonActivatedDoor.gallery}
                  index={1}
                />
              </div>
              <div className="w-1/5 md:w-full">
                <p className="md:text-center">
                  A sketch of the <b>map</b> can also be found in one of the pages, this helps (<i>somewhat</i>) the player
                  navigate through the game.
                </p>
              </div>
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
