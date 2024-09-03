import React from "react";
import { BlogPosts } from "app/components/posts";
import ArrowIcon from "../components/ArrowIcon";
import FullScreenGallery from "../components/FullScreenGallery";
import GamePageSection from "../components/GamePageSection";

export const metadata = {
  title: "Games",
  description: "Games developed.",
};

const images = [
  "https://img.itch.zone/aW1hZ2UvMjg2MzIzNS8xNzExNTc4NS5wbmc=/original/WBVXpO.png",
  "https://img.itch.zone/aW1hZ2UvMjg2MzIzNS8xNzExNTc2NS5wbmc=/original/yXh2qu.png",
  "https://img.itch.zone/aW1hZ2UvMjg2MzIzNS8xNzExNTc2Ni5wbmc=/original/KacFle.png",
];

const Page: React.FC = () => {
  return (
    <section className="prose ml-8 mr-8 flex flex-col items-center">
      <h1>Games</h1>

      <GamePageSection
        title={{
          url: "https://jessymonrocq.itch.io/hebald-forest",
          text: "Hebald Forest",
        }}
        mainImage={{
          src: "https://ludhic.fr/wp-content/uploads/2024/03/HebaldForest_Logo.png",
          alt: "Hebald Forest Logo",
          width: 500,
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
      <br></br>
      <hr className="border-gray-300 w-full" />
      <br></br>
      <GamePageSection
        title={{
          url: "https://ludhic.fr/anamnesis/",
          text: "Anamnesis",
        }}
        mainImage={{
          src: "https://ludhic.fr/wp-content/uploads/2023/01/Anamnesis.webp",
          alt: "Frogmnesis",
          width: 300,
        }}
        content={[
          <p key="paragraph1">
            In 2023, during my inaugural year in the MAJIC program (Management
            of Video Games, Image, and Creativity) at Université Côte d'Azur, I
            embarked on a journey to contribute to the development of Anamnesis,
            an immersive VR game.
          </p>,

          <p key="paragraph2">
            As a key member of the Anamnesis development team, my primary focus
            was on the engineering of the game's core mechanics, specifically
            tailored for the VR environment. My contributions were fundamental
            in realizing the tactile and interactive essence of the VR world.
            This included:
          </p>,

          <ul key="list1">
            <li>
              <b>Implementing</b> realistic hand physics to facilitate a natural
              and intuitive interaction model for players.
            </li>
            <li>
              <b>Engineering</b> a robust system for object interaction,
              enabling players to grab, throw, push, and pull objects.
            </li>
            <li>
              <b>Developing</b> teleportation mechanics, allowing players to
              navigate the virtual space effortlessly and intuitively.
            </li>
            <li>
              <b>Modeling</b> a 3D human colossus in Blender.
            </li>
          </ul>,

          <p key="paragraph3">
            Beyond my technical contributions, I also played a role in the
            creative aspects of the game, assisting in the level design to
            ensure a coherent and engaging environment. Furthermore, I took part
            in designing and implementing a variety of entertaining objects,
            enhancing the overall playfulness and interactivity of the game
            experience.
          </p>,

          <p key="paragraph4">
            A particularly notable achievement was my work in 3D modeling, where
            I crafted a human figure that was used as the giant stone colossus
            within the game. This creation not only served as a primordial
            element within the game's world but also demonstrated my ability to
            blend artistic skill with technical development to contribute
            significantly to the game's immersive environment.
          </p>,

          <p key="paragraph5">
            My work on Anamnesis was an enriching chapter in my academic and
            professional journey, allowing me to dive deep into the intricacies
            of VR development. Through this project, I honed my skills in:
          </p>,

          <ul key="list2">
            <li>
              VR Development: Building the foundation for immersive VR
              experiences through Unity.
            </li>
            <li>
              Level Design: Contributing to the spatial and narrative design of
              the game world.
            </li>
            <li>
              Interactive Design: Creating fun and engaging objects for player
              interaction, enriching the virtual environment.
            </li>
            <li>
              3D Modeling: Modeling a human stone colossus, adding depth to the
              game.
            </li>
          </ul>,

          <p key="paragraph6">
            Anamnesis stands as a testament to the immersion potential of VR
            gaming, and my involvement in its development was a pivotal
            experience that expanded my expertise in the realm of virtual
            reality technologies.
          </p>,
        ]}
        images={[
          "https://ludhic.fr/wp-content/uploads/2023/01/anamnesis04-1024x576.webp",
          "https://ludhic.fr/wp-content/uploads/2023/01/anamnesis01.webp",
          "https://ludhic.fr/wp-content/uploads/2023/01/anamnesis03.webp",
          "https://ludhic.fr/wp-content/uploads/2023/01/anamnesis02.webp",
        ]}
      />
      <br></br>
      <hr className="border-gray-300 w-full" />
      <br></br>
      <GamePageSection
        title={{ url: "", text: "Tangled Tales" }}
        mainImage={{
          src: "https://i.ibb.co/PcBZMtb/livretangledtales2.png",
          alt: "Tangled Tales Logo",
          width: 450,
        }}
        content={[
          <p key="p1">
            During the first year of my Masters in the MAJIC program (Management
            of Video Games, Image, and Creativity) at Université Côte d'Azur, I
            had the privilege to work with a compact team of seven in developing
            Tangled Tales, a 2D platformer game, over the span of one month.
            This project allowed us to explore the robust features of Unity 2D,
            crafting a game that was both engaging and visually appealing.
          </p>,

          <p key="p2">
            As the lead developer of Tangled Tales, my role was pivotal in
            laying down the foundational mechanics that drove gameplay. My
            responsibilities extended beyond coding to include level design and
            fine-tuning the game's overall balance, ensuring a cohesive and
            enjoyable experience for players.
          </p>,

          <p key="p3">
            Working on Tangled Tales was an intensive process, demanding
            creativity and technical skill to bring our ideas to life within a
            tight timeframe. My involvement spanned various aspects of game
            development:
          </p>,

          <ul key="list1">
            <li>
              <b>Lead Developer:</b> Spearheading the development process, from
              conceptualization to implementation, using Unity.
            </li>
            <li>
              <b>Level Designer:</b> Shaping the game's environment to provide
              challenging and intriguing gameplay.
            </li>
            <li>
              <b>Gameplay Balancer:</b> Adjusting mechanics and gameplay
              elements to achieve the desired game feel.
            </li>
          </ul>,
        ]}
        images={[
          "https://i.pinimg.com/564x/18/c5/ee/18c5eeb378025e1a78ad0b26aed9ba1d.jpg",
          "https://i.pinimg.com/564x/b5/82/85/b5828579a55aa495998d812d33696207.jpg",
          "https://i.pinimg.com/564x/e2/d3/5b/e2d35b89c4cad7d2cd9af4b48c1ffa5c.jpg",
          "https://i.pinimg.com/564x/77/e2/c2/77e2c23bd4a54c852e15c146079e4b7c.jpg",
          "https://i.pinimg.com/564x/f2/ec/93/f2ec93ee6d3ae30c3fb37ab700993040.jpg",
          "https://i.pinimg.com/564x/b1/6b/2f/b16b2f587ccb7ae3a9ce88178f2474a4.jpg",
        ]}
      />
    </section>
  );
};

export default Page;
