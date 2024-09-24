import React from "react";
import GamePageSection from "../../components/GamePageSection";

export const metadata = {
  title: "Hebald Forest",
};

const Page: React.FC = () => {
  return (
    <section className="prose ml-8 mr-8 flex flex-col items-center gap-16">
      <GamePageSection
        title={{
          url: "https://jessymonrocq.itch.io/hebald-forest",
          text: "Hebald Forest",
        }}
        mainImage={{
          src: "https://ludhic.fr/wp-content/uploads/2024/03/HebaldForest_Logo.png",
          alt: "Hebald Forest Logo",
          width: 800,
        }}
        content={[
          <p key="paragraph1">
            During my second year in the MAJIC program (Management of Video
            Games, Image, and Creativity) at Université Côte d'Azur, I had the
            opportunity to contribute to the creation of Hebald Forest, an
            expansive open-world game. This project was a testament to the
            capabilities of Unreal Engine 5, utilizing cutting-edge features
            such as Lumen and Nanite, among other advanced technologies, to
            bring our visionary world to life.
          </p>,

          <p key="paragraph2">
            The development of Hebald Forest was a collaborative endeavor
            involving 19 talented individuals across various disciplines,
            including development, 2D/3D art, game design, level design, sound
            design, UI design, and more. My role in this project was
            multifaceted, allowing me to engage with nearly every aspect of game
            development.
          </p>,

          <ul key="list1">
            <li>
              <b>Project Manager:</b> Leading the team to ensure the project's
              vision was realized efficiently and effectively.
            </li>
            <li>
              <b>Sound Designer:</b> Implementing the auditory experience using
              Wwise, from ambient sounds to the dynamic soundtrack.
            </li>
            <li>
              <b>Game Designer:</b> Ensuring the game feel was right and
              fine-tuning mechanics with developers.
            </li>
            <li>
              <b>Level Designer:</b> Constructing the base of the level and
              modifying specific locations within the level.
            </li>
            <li>
              <b>Developer:</b> Implementing a few minor mechanics, specifically
              used in a puzzle.
            </li>
          </ul>,

          <p key="paragraph3">
            Hebald Forest was not just a project; it was a comprehensive
            platform for me to apply and expand my skills in game development,
            showcasing the potential of collaborative creativity powered by
            Unreal Engine 5.
          </p>,
        ]}
        images={[
          "https://i.ibb.co/1GXQFmf/affiche-HBF.jpg",
          "https://i.ibb.co/N7gm58n/village.png",
          "https://i.ibb.co/JRdQbw0/image.png",
          "https://i.ibb.co/2dHDpX1/cave2.png",
          "https://i.ibb.co/27dJvMv/cave.png",
          "https://i.ibb.co/Z1QsQdR/cave-pierre.png",
          "https://i.ibb.co/nzMK2Cv/aymir.png",
          "https://i.ibb.co/q9NNN4p/asian.png",
          "https://i.ibb.co/mvVWHmf/carnet.png",
          "https://i.ibb.co/19SxrGF/paravoile.png",
          "https://i.ibb.co/6tcfB3h/village2.png",
        ]}
      />

      <div className="previous-next-work-buttons">
        <a className="previous-work" href="/works/anamnesis">
          Anamnesis
        </a>
        <a className="next-work" href="/works">
          All works
        </a>
      </div>
    </section>
  );
};

export default Page;
