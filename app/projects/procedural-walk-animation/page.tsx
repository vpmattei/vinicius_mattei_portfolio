import React from "react";
import ArrowIcon from "app/components/ArrowIcon";
import ImageDisplay from "app/components/ImageDisplay";
import WorksNav from "app/components/WorksNav";

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
                A fully <b>procedural stepping system</b> for insect/robot-like legs in <b>Unity 6</b>.
                Legs are split into two groups (A/B) and compute a <b>priority score</b> based on distance
                to their target; when a group’s total overtakes the other and individual leg priority
                exceeds a threshold, those legs step—no baked animations.
              </p>
            </div>

            {/* Project Goals */}
            <div className="p-2 md:p-4 shadow-xl">
              <h4>Project Goals</h4>
              <p>
                Build a <b>prototype</b> that shows the viability of a <b>procedural leg locomotion</b>:
                clear group coordination, stable foot placement, and responsive stepping logic. A system
                that is suitable for a <b>future IK integration</b> in another game.
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
                  Legs compute <b>distance-based priority</b> toward a moving target, shown by the <b>white sphere</b>, the{" "}
                  <i>predicted target</i> and a <b>red line</b>, <i>distance to target</i>; high-priority legs are candidates to step.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/3 flex flex-row md:flex-col items-center gap-2">
              <div className="w-3/5 md:w-full">
                <ImageDisplay src={plaImages.gallery[2]} gallery={plaImages.gallery} index={2} />
              </div>
              <div className="w-2/5 md:w-full">
                <p className="md:text-center">
                  <b>Two leg groups</b> (A/B) compete via <b>summed priorities</b>; the leading group triggers steps for its eligible legs.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/3 flex flex-row md:flex-col items-center gap-2">
              <div className="w-3/5 md:w-full">
                <ImageDisplay src={plaImages.gallery[3]} gallery={plaImages.gallery} index={3} />
              </div>
              <div className="w-2/5 md:w-full">
                <p className="md:text-center">
                  Fully procedural, no baked animations, tuned for responsiveness and future IK foot placement.
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
      <WorksNav currentSlug="procedural-walk-animation" />
    </section>
  );
};

export default Page;