import React from "react";
import ArrowIcon from "app/components/ArrowIcon";
import ImageDisplay from "app/components/ImageDisplay";
import FullScreenGallery from "app/components/FullScreenGallery";
import WorksNav from "app/components/WorksNav";

export const metadata = {
  title: "Hebald Forest",
  description: "Open-world game developed with Unreal Engine 5.",
};

const hebaldForestImages =
{
  gallery: [
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/affiche-HBF.jpg?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/village.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/tower_after_03.png?raw=true",
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
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/carnet_unlocking_escalade_nage.gif?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/carnet_map.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/carnet_tips_02.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/carnet_tips_01.png?raw=true",
  ]
}

const climbing = {
  gallery: [
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/climbing_wall_02.gif?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/climbing_plank_01.jpeg?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/climbing_plank_02.jpeg?raw=true",
  ]
}

const swimming = {
  image: "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/swimming.jpeg?raw=true"
}

const beforeAndAfterTowerImages = {
  gallery: [
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/tower_before_01.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/tower_after_02.png?raw=true",

  ],
};

const beforeAndAfterCaveImages = {
  gallery: [
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/cave_before.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/cave2.png?raw=true",
  ],
};

const beforeAndAfterFoxStatue = {
  gallery: [
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/fox_statue_activating_before.gif?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/fox_statue_activating_after.gif?raw=true",
  ],
};

const buttonActivatedDoor = {
  gallery: [
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/button_activation_fixed.gif?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/button_closed_and_open_door.png?raw=true",
  ],
};

const Page: React.FC = () => {
  return (
    <section className="prose mx-6 sm:mx-8 md:mx-16 lg:mx-24 flex flex-col items-center gap-16">
      <div className="w-full flex flex-col items-start gap-4 md:gap-16">

        {/* Title and Main Image */}
        <div className="w-full flex flex-row items-end gap-2 ">

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
        <div className="w-full flex flex-row items-start gap-2 ">

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
              <div>
                <p>The team consisted of <b>19 members</b>:</p>
                <ul>
                  <li>3 Coordinators</li>
                  <li>4 Developers</li>
                  <li>2 3D Artists</li>
                  <li>2 2D Artists</li>
                  <li>1 VFX Artist</li>
                  <li>1 Level Designer</li>
                  <li>1 Narrative Designer</li>
                  <li>5 Sound Designers</li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-6/8">

            {/* Brief */}
            <div className="p-2 md:p-4 shadow-xl">
              <h4>Brief</h4>
              <p>
                <b>Hebald Forest</b> is <b>open-world exploration game</b> developed
                during my second year of my Masters Degree at Université Côte d'Azur
                in Cannes, France, built with a <b>team of 19</b> in <b>Unreal Engine 5</b>.
              </p>
            </div>

            {/* My Goals */}
            <div className="p-2 md:p-4 shadow-xl">
              <h4>My Goals</h4>
              <p>
                My primary goal was to <b>guide</b> and <b>organize</b> the team in order to have a working and <b>playable demo of Hebald Forest</b> for the International Games Festival {" "}
                (<b>FIJ</b>) in Cannes, France.
              </p>
              <br />
              <p>
                I separated tasks for <b>Programmers</b>, Designers, Level Designers and Sound Designers to guide them and give them a clear objective. Having previous
                experience in these fields, I was able to guide them and help them figure out the best approach to the problems we faced.
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
          </div>
        </div>
      </div>

      {/* Gameplay Video */}
      <div className="w-full flex flex-col items-start p-4 gap-4 md:gap-16 shadow-2xl">
        <h2>Gameplay</h2>
        <div className="self-center w-full aspect-video max-w-4xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/ODJmCASHLy4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* My Contribution */}
      <div className="w-full flex flex-col items-start p-4 gap-4 md:gap-16">
        <h2>My Contributions</h2>

        {/* Tower */}
        <div className="w-full flex flex-col items-start p-2 md:p-4 shadow-2xl md:gap-8">
          <h3>1. Tower Rework</h3>

          {/* BEFORE */}
          <div className="w-full flex flex-row gap-2">
            <div className="w-2/5 flex flex-row items-center ">
              <p>
                <b><u>Problem:</u></b> The old puzzle was <b>too simple</b> and had <b>no clear objective</b>, nor
                was it clear on how to get to the objective, plus it being in the middle of the map was one of
                the first things players would go after, leading to a <b>weak first impression</b>.
              </p>
            </div>
            <div className="w-3/5 flex flex-col items-start ">
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
            <div className="w-2/5 flex flex-col items-start ">
            </div>
            <div className="w-3/5 flex flex-col items-start ">
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
            <div className="w-2/5 flex flex-row items-center ">
              <p>
                <b><u>Solution:</u></b> Reworked the whole area completely by removing all the previous woden towers
                and replacing them with a tall and flashy tower. Its size immediately <b>catches the attention</b> of
                the player and makes him feel an <b>urge to climb</b> to the top of the tower and find out
                what's inside it.
              </p>
            </div>
            <div className="w-3/5 flex flex-col items-start ">
              <ImageDisplay
                src={beforeAndAfterTowerImages.gallery[1]}
                gallery={beforeAndAfterTowerImages.gallery}
                index={1}
              />
              <p className="mt-2 self-center"><i>AFTER</i></p>
            </div>
          </div>
        </div>

        {/* Cave */}
        <div className="w-full flex flex-col items-start p-2 md:p-4 shadow-2xl md:gap-8">
          <h3>2. Cave Rework</h3>

          {/* BEFORE */}
          <div className="w-full flex flex-row gap-2">
            <div className="w-3/5 flex flex-col items-start ">
              <ImageDisplay
                src={beforeAndAfterCaveImages.gallery[0]}
                gallery={beforeAndAfterCaveImages.gallery}
                index={0}
              />
              <p className="mt-2 self-center"><i>BEFORE</i></p>

            </div>
            <div className="w-2/5 flex flex-row items-center ">
              <p>
                <b><u>Problem:</u></b> The old cave was <b>too messy</b> with <b>no clear direction</b> of where to go.
                The main objective that was collecting the gem was poorly designed and had no feedback whatsoever,
                leaving the player confused after leaving the cave, not knowing if he had <b>completed</b> or <b>not</b> this level.
              </p>
            </div>
          </div>

          {/* ARROW */}
          <div className="w-full flex flex-row gap-2">
            <div className="w-3/5 flex flex-col items-start ">
              <svg
                className="mt-2 self-center h-[5vh] w-[5vw] text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
              </svg>
            </div>
            <div className="w-2/5 flex flex-col items-start ">
            </div>
          </div>

          {/* AFTER */}
          <div className="w-full flex flex-row gap-2">
            <div className="w-3/5 flex flex-col items-start ">
              <ImageDisplay
                src={beforeAndAfterCaveImages.gallery[1]}
                gallery={beforeAndAfterCaveImages.gallery}
                index={1}
              />
              <p className="mt-2 self-center"><i>AFTER</i></p>
            </div>
            <div className="w-2/5 flex flex-row items-center ">
              <p><b><u>Solution:</u></b> A complete overhaul and rework of the cave, with clear objective of where to go right
                off the bat after entering the cave. A short path on the left takes the player to a closed door, signaling
                that he should try and get the door open. And the longer but more difficult path on the right with puzzles and
                platforms to jump on.</p>
            </div>
          </div>
        </div>

        {/* Fox Statues */}
        <div className="w-full flex flex-col items-start p-2 md:p-4 shadow-2xl md:gap-8">
          <h3>3. Improved VFX & SFX for the Fox Statues</h3>

          {/* BEFORE */}
          <div className="w-full flex flex-row gap-2">
            <div className="w-2/5 flex flex-row items-center ">
              <p>
                <b><u>Problem:</u></b> There was <b>no feedback</b> for activating the Fox Statue, leaving
                the player wondering if he activated it correctly or not.
              </p>
            </div>
            <div className="w-3/5 flex flex-col items-start ">
              <img
                className="w-[100vw]"
                src={beforeAndAfterFoxStatue.gallery[0]}
              />
              <p className="mt-2 self-center"><i>BEFORE</i></p>
            </div>
          </div>

          {/* ARROW */}
          <div className="w-full flex flex-row gap-2">
            <div className="w-2/5 flex flex-col items-start ">
            </div>
            <div className="w-3/5 flex flex-col items-start ">
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
            <div className="w-2/5 flex flex-row items-center ">
              <p>
                <b><u>Solution:</u></b> Added <b>visual and audio effects</b> after activating the Fox Statue,
                clearly showing an output for activating the fox correctly.
              </p>
            </div>
            <div className="w-3/5 flex flex-col items-start ">
              <img
                className="w-[100vw]"
                src={beforeAndAfterFoxStatue.gallery[1]}
              />
              <p className="mt-2 self-center"><i>AFTER</i></p>
            </div>
          </div>
        </div>

        {/* Butterfly Puzzle */}
        <div className="w-full flex flex-col items-start p-2 md:p-4 shadow-2xl md:gap-8">
          <h3>4. Improved VFX & SFX for the Butterfly Puzzle</h3>

          <div className="w-full flex flex-col md:flex-row items-center gap-4">
            {/* LEFT - Video */}
            <div className="w-full md:w-2/3 aspect-video ">
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
            <div className="w-full md:w-1/3 flex flex-col items-center  gap-4 p-4">
              <p>
                <b>Problem:</b> The puzzle gave no sound or visual feedback, leaving players unsure if they had triggered
                it or made any progress.
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
                <b>Solution:</b> Added audio and visual cues for each butterfly placement, with the sound’s pitch rising
                as the player collected more butterflies to signal progress.
              </p>
            </div>
          </div>
        </div>

        {/* Button Activated Door */}
        <div className="w-full flex flex-col items-start p-2 md:p-4 shadow-2xl md:gap-8">
          <h3>5. Button Activated Door</h3>

          <div className="w-full mt-4 flex flex-col items-start gap-2 md:gap-8">

            {/* GIF */}
            <div className="w-full flex flex-row items-center  gap-2">
              <div className="w-3/5">
                <ImageDisplay
                  src={buttonActivatedDoor.gallery[0]}
                  gallery={buttonActivatedDoor.gallery}
                  index={0}
                />
              </div>
              <div className="w-2/5">
                <p className="md:text-center">
                  <b>GIF</b> showing the <b>button activation system working</b>, this button could be connected to any sort of door or
                  activation, like a platform going up and down for example, or any object that has 2 states.
                </p>
              </div>
            </div>

            {/* IMAGE */}
            <div className="w-full flex flex-row items-center  gap-2">
              <div className="w-3/5 flex items-center">
                <ImageDisplay
                  imageClassName="max-h-[60vh]"
                  src={buttonActivatedDoor.gallery[1]}
                  gallery={buttonActivatedDoor.gallery}
                  index={1}
                />
              </div>
              <div className="w-2/5">
                <p className="md:text-center">
                  <b>Objects</b> could also be placed on top in order to <b>activate</b> the button and <b>open the door</b>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Post Mortem */}
      <div className="p-2 md:p-4 shadow-xl">
        <h4>Post Mortem</h4>
        <p>
          Reflecting on my first experience as <b>Project Coordinator</b> and <b>Scrum Master</b>, my primary takeaway 
          is the importance of a dedicated pre-production phase. I realized that I should have invested more time 
          in <b>foundational design</b> rather than rushing into active development.
          <br />
          <br />
          Our most significant challenges arose from <b>scope creep</b>. We fell into the trap of adding new mechanics 
          weekly without a defined ceiling, which led to a ballooning bug list. This lack of a 
          clear <b>technical roadmap</b> eventually overwhelmed the team and obscured our development priorities.
        </p>
        <br />
        <h4>Proactive Solutions & Growth</h4>
        <p>
          Today, I prioritize a structured design-first approach. Before a single line of code is written, 
          I would facilitate a <b>collaborative brainstorming session</b> to align the team on the game's core vision.
          <br />
          <br />
          My role would then be to <b>curate and prune</b> these ideas, eliminating over-ambitious mechanics that 
          don't serve the core loop. I would then implement a 'Design Week' where <b>designers</b> create 
          <b>low-fidelity prototypes</b> or documentation (via Miro or GDDs) for each feature.
          <br />
          <br />
          By introducing a <b>peer-review cycle</b> before implementation, we ensure that every mechanic 
          is vetted for feasibility and fun. This synchronization doesn't just prevent technical debt; 
          it ensures the entire team feels <b>ownership</b> over the project and remains aligned on our milestones.
        </p>
      </div>

      <div className="w-full flex flex-col items-start p-4 gap-4 md:gap-16 shadow-2xl">
        <h2>Image Gallery</h2>

        <ImageDisplay
          src={hebaldForestImages.gallery[0]}
          gallery={hebaldForestImages.gallery}
          index={0}
        />
      </div>

      {/* Footer Nav */}
      <WorksNav currentSlug="hebald-forest" />
    </section>
  );
};

export default Page;
