import React from "react";
import ArrowIcon from "app/components/ArrowIcon";
import ImageDisplay from "app/components/ImageDisplay";

export const metadata = {
  title: "Hebald Forest",
  description: "Open-world game developed with Unreal Engine 5.",
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
      <div className="w-full mt-32 flex flex-col items-start">
        <h2>Cave Rework</h2>
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
    </section>
  );
};

export default Page;
