"use client";

import React from "react";
import GamePageSection from "../../components/GamePageSection";

const Page: React.FC = () => {
  return (
    <section className="prose ml-8 mr-8 flex flex-col items-center">
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
