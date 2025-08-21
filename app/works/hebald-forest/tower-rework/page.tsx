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

const Page: React.FC = () => {
  return (
    <section className="prose mx-12 sm:mx-16 md:mx-20 lg:mx-36 flex flex-col items-center gap-16">
      {/* Tower */}
      <div className="w-full mt-16 flex flex-col items-start">
        <h2>Tower Rework</h2>
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
              <b><u>Problem:</u></b> The old puzzle was <b>too simple</b> and had <b>no clear objective</b>, nor
              was it clear on how to get to the objective, plus it being in the middle of the map was one of
              the first things players would go after.
            </p>
          </div>
          <div className="w-2/8 flex flex-col items-center">
          </div>
          <div className="w-3/8 flex flex-col items-start">
            <p className="self-center mb-8"><i>AFTER</i></p>
            <p>
              <b><u>Solution:</u></b> Reworked the whole area completely by removing all the previous woden towers
              and replacing them with a tall and flashy tower. Its size immediately <b>catches the attention</b> of
              the player and makes him feel an <b>urge to climb</b> to the top of the tower and find out
              what's inside it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
