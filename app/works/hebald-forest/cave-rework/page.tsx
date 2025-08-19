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
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/hebald_forest_images/image.png?raw=true",

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
    </section>
  );
};

export default Page;
