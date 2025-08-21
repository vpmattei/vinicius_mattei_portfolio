import React from "react";
import ArrowIcon from "app/components/ArrowIcon";
import ImageDisplay from "app/components/ImageDisplay";

export const metadata = {
  title: "Procedural Walk Animation",
  description: "Insect/robot-like stepping logic built in Unity.",
};

const plaImages = {
  gallery: [
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/procedural-walk-animation_img/pwa_title.png?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/procedural-walk-animation_img/PLA_InEditor_01.jpeg?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/procedural-walk-animation_img/PLA_InEditor_02.jpeg?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/procedural-walk-animation_img/PLA_InEditor_03.jpeg?raw=true",
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/procedural-walk-animation_img/PLA_InEditor_04.jpeg?raw=true",
  ],
};

const plaGif =
  "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/procedural-walk-animation_img/gifs/ezgif-36801abcdb5bab.gif?raw=true";

const Page: React.FC = () => {
  return (
    <section className="prose mx-6 sm:mx-8 md:mx-16 lg:mx-24 flex flex-col items-center gap-16">
      <div className="w-full flex flex-col items-start gap-4 md:gap-16">
        {/* Title and Main Image */}
        <div className="w-full flex flex-row items-end gap-2">
          {/* LEFT */}
          <div className="w-3/8 flex items-start">
            <div className="flex flex-col items-start">
              <h1 className="mt-4 mb-2">Procedural Leg Animation</h1>
              <h3 className="mt-0 mb-2">Project Breakdown</h3>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-5/8">
            <div className="flex flex-col items-center">
              <ImageDisplay src={plaImages.gallery[0]} />
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="w-full flex flex-row items-start gap-2">
          {/* LEFT */}
          <div className="w-2/8">
            {/* Info */}
            <div className="p-2 md:p-4 shadow-xl">
              <ul>
                <li>Platform: PC (<i>no build</i>)</li>
                <li>Engine: Unity</li>
                <li>Duration: 3 months</li>
              </ul>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-6/8">
            {/* Brief */}
            <div className="p-2 md:p-4 shadow-xl">
              <h4>Brief</h4>
              <p>
                A fully <b>procedural stepping system</b> for insect/robot-like legs in <b>Unity 6</b>. Legs are split into two groups (A/B) and compute a <b>priority score</b> based on distance to their target; when a group’s total overtakes the other and individual leg priority exceeds a threshold, those legs step—no baked animations.
              </p>
            </div>

            {/* Project Goals */}
            <div className="p-2 md:p-4 shadow-xl">
              <h4>Project Goals</h4>
              <p>
                Build a <b>publisher-facing prototype</b> that proves the viability of <b>procedural locomotion</b>: clear group coordination, stable foot placement, and responsive stepping logic suitable for future IK integration.
              </p>
              <br />
              <div className="w-full flex flex-row">
                <div className="w-1/2">
                  <h6 className="mb-2">Primary responsibilities</h6>
                  <ul>
                    <li>Stepping Priority Algorithm</li>
                    <li>Group Coordination Logic (A/B)</li>
                    <li>Physics & Threshold Tuning</li>
                    <li>Debug/Visualization Tools</li>
                  </ul>
                </div>
                <div className="w-1/2">
                  <h6 className="mb-2">Other hats</h6>
                  <ul>
                    <li>Prototype Integration</li>
                    <li>IK Planning & Roadmap</li>
                    <li><i>N/A</i></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Takeaways */}
            <div className="p-2 md:p-4 shadow-xl">
              <h4>Takeaways</h4>
              <p>
                Robust procedural motion hinges on <b>clean heuristics</b> and <b>good debug tooling</b>. Visualizing distances/targets and iterating thresholds quickly improved stability and readability of the system.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features (mirrors “Game Mechanics”) */}
      <div className="w-full flex flex-col items-start gap-4 md:gap-16">
        <h2>Key Features</h2>

        {/* Stepping Logic */}
        <div className="w-full flex flex-col items-start p-2 md:p-4 shadow-2xl md:gap-8">
          <h3>1. Priority-Based Stepping</h3>

          <div className="w-full mt-4 flex flex-col md:flex-row items-start gap-2">
            <div className="w-full md:w-1/3 flex flex-row md:flex-col items-center gap-2">
              <div className="w-3/5 md:w-full">
                <ImageDisplay src={plaImages.gallery[1]} gallery={plaImages.gallery} index={1} />
              </div>
              <div className="w-2/5 md:w-full">
                <p className="md:text-center">
                  Legs compute distance-based priority toward a moving target; high-priority legs are candidates to step.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/3 flex flex-row md:flex-col items-center gap-2">
              <div className="w-3/5 md:w-full">
                <ImageDisplay src={plaImages.gallery[2]} gallery={plaImages.gallery} index={2} />
              </div>
              <div className="w-2/5 md:w-full">
                <p className="md:text-center">
                  Two groups (A/B) compete via summed priorities; the leading group triggers steps for its eligible legs.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/3 flex flex-row md:flex-col items-center gap-2">
              <div className="w-3/5 md:w-full">
                <ImageDisplay src={plaImages.gallery[3]} gallery={plaImages.gallery} index={3} />
              </div>
              <div className="w-2/5 md:w-full">
                <p className="md:text-center">
                  Fully procedural—no baked anims—tuned for responsiveness and future IK foot placement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Demo GIF */}
        <div className="w-full flex flex-col items-start p-2 md:p-4 shadow-2xl md:gap-8">
          <h3>2. Live Demo</h3>
          <div className="w-full flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-2/3">
              <ImageDisplay src={plaGif} />
            </div>
            <div className="w-full md:w-1/3 flex items-center">
              <p className="md:text-center">
                Prototype shown with cube legs; IK rigging is planned next to improve realism and foot placement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Video */}
      <div className="w-full flex flex-col items-start p-4 gap-4 md:gap-16 shadow-2xl">
        <h2>How it works video</h2>
        <div className="self-center w-full aspect-video max-w-4xl">
          <iframe
            className="w-full h-full rounded"
            src="https://www.youtube.com/embed/xotQjLULcAw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Footer Nav */}
      <div className="px-8 flex md:flex-row flex-col justify-between w-[100vw]">
        <div className="flex flex-col items-start w-[100%]">
          <a
            className="font-fraunces-light-i text-pink-200 hover:text-3xl hover:text-pink-400 text-2xl flex flex-row items-center gap-3 min-w-[10rem]"
            href="/works/tic-tac-toe"
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
            href="/works/anamnesis"
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