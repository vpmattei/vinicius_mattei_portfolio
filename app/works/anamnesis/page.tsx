import React from "react";
import GamePageSection from "../../components/GamePageSection";

export const metadata = {
  title: "Anamnesis",
};

const Page: React.FC = () => {
  return (
    <section className="prose ml-8 mr-8 flex flex-col items-center">
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
    </section>
  );
};

export default Page;
