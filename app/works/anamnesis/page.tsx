import React from "react";
import ArrowIcon from "app/components/ArrowIcon";
import ImageDisplay from "app/components/ImageDisplay";
import WorksNav from "app/components/WorksNav";

export const metadata = {
  title: "Anamnesis",
  description: "Immersive VR experience developed in Unity.",
};

const anamnesisImageGallery = {
  gallery: [
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/1.webp",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/2.webp",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/3.webp",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/4.webp",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/bedroom_level_01.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/bedroom_level_02.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/bedroom_level_03.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/bedroom_items_level_01.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/bedroom_items_level_02.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/bedroom_items_01_level_03.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/bedroom_items_02_level_03.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/colossus_chain_interaction_01.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/colossus_chain_interaction_02.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/colossus_unchained_left.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/memory_first_01.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/memory_first_guitar.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/memory_final.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/main_level_01.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/main_level_02.png?raw=true",
  ],
};

const teleportingGif = {
  gif: "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/teleporting.gif?raw=true"
};

const bedroomLevelImages = {
  gallery: [
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/bedroom_level_01.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/bedroom_level_02.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/bedroom_level_03.png?raw=true"
  ]
};

const bedroomItemsImages = {
  gallery: [
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/bedroom_items_level_01.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/bedroom_items_level_02.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/bedroom_items_01_level_03.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/bedroom_items_02_level_03.png?raw=true",
  ]
};

const handInteractions = {
  gallery: [
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/hand_interaction_grab.gif?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/hand_interaction_physics.gif?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/hand_interaction_bed.gif?raw=true",
  ]
};

const colossusInteractionImages = {
  gallery: [
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/colossus_chain_interaction_01.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/colossus_chain_interaction_02.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/colossus_unchained_left.png?raw=true",
  ]
};

const colossusGif = {
  gif: "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/colossus_unchaining_and_opening_hand.gif?raw=true"
};

const memoriesImages = {
  gallery: [
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/memory_first_01.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/memory_first_guitar.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/memory_final.png?raw=true",
  ]
};

const memoryFinalActivatingGif = {
  gif: "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/memory_final_activating.gif?raw=true"
};

const mainLevelImages = {
  gallery: [
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/main_level_01.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/main_level_02.png?raw=true",
  ]
};

const youtubeUrls = {
  playingGuitar: "https://www.youtube.com/embed/Jervw3-ECQ4",
  playingWithBamboos: "https://www.youtube.com/embed/7Ci6SC4PAvE",
  fullGameplay: "https://www.youtube.com/embed/cF1cw1gyCxU"
};

const Page: React.FC = () => {
  return (
    <section className="prose mx-6 sm:mx-8 md:mx-16 lg:mx-24 flex flex-col items-center gap-16">
      <div className="w-full flex flex-col items-start gap-4 md:gap-16">
        {/* Title and Main Image */}
        <div className="w-full flex flex-row items-end gap-2">
          {/* LEFT */}
          <div className="w-3/8 flex items-start">
            <div className="flex flex-col items-start">
              <img
                className="max-w-[100%] sm:max-w-[70%] md:max-w-[60%]"
                src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/logo.webp"
                alt="Anamnesis Logo"
              />
              <h1 className="mt-4 mb-2">Anamnesis</h1>
              <h3 className="mt-0 mb-2">Project Breakdown</h3>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-5/8">
            <div className="flex flex-col items-center">
              <ImageDisplay src={anamnesisImageGallery.gallery[17]} />
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
                <li>Platform: PC</li>
                <li>Engine: Unity</li>
                <li>Team Size: 9</li>
                <li>Duration: 5 Months</li>
                <li>
                  <a
                    className="flex gap-1 items-center transition-colors text-white/95 hover:text-pink-400"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.ludhic.fr/games/anamnesis"
                  >
                    Project Page <ArrowIcon size={12} />
                  </a>
                </li>
              </ul>
            </div>

            {/* Team */}
            <div className="p-2 md:p-4 shadow-xl">
              <h4>Team</h4>
              <div>
                <p>The team consisted of <b>9 members</b>:</p>
                <ul>
                  <li>2 Coordinators</li>
                  <li>1 Developer</li>
                  <li>1 Level Designer</li>
                  <li>1 Narrative Designer</li>
                  <li>1 3D Artist</li>
                  <li>3 Sound Designers</li>
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
                <b>Anamnesis</b> is an <b>immersive VR experience</b> in
                which the protagonist has forgotten his identity and seeks
                to recover it by reliving his lost dreams. The game was
                developed during my first year of the Master’s program at
                Université Côte d’Azur in Cannes, France, created in{" "}
                <b>Unity</b> with a <b>team of nine</b>.
              </p>
            </div>

            {/* Project Goals */}
            <div className="p-2 md:p-4 shadow-xl">
              <h4>Project Goals</h4>
              <p>
                The demo featured <b>five playable levels</b>: the <b>player’s
                  bedroom</b>, shown in three different versions that changed
                and evolved in look and feel over time; a <b>main playground
                  level</b>, designed as a dreamlike space for exploration and
                interaction; and <b>two additional levels</b> representing the
                player’s forgotten memories, which was the inspiration behind
                the game’s title, <b>Anamnesis</b>.
              </p>
              <br />
              <div className="w-full flex flex-row">
                <div className="w-1/2">
                  <h6 className="mb-2">Primary responsibilities</h6>
                  <ul>
                    <li><b>VR Interaction Systems</b> (hands, objects & physics)</li>
                    <li><b>Teleportation</b> Locomotion</li>
                    <li><b>UI</b> / <b>UX</b></li>
                  </ul>
                </div>
                <div className="w-1/2">
                  <h6 className="mb-2">Other hats</h6>
                  <ul>
                    <li>Level Design</li>
                    <li>Prototype Integration</li>
                    <li><b>3D Modeling</b> (Blender)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Takeaways */}
            {/* <div className="p-2 md:p-4 shadow-xl">
              <h4>Takeaways</h4>
              <p>
                Building for VR demanded tight <b>interaction fidelity</b> and <b>player comfort</b>.
                Iterating on physics feel, affordances, and teleport rules was key to reducing friction
                and increasing immersion.
              </p>
            </div> */}
          </div>
        </div>
      </div>

      {/* Key Features (mirrors “Game Mechanics”) */}
      <div className="w-full flex flex-col items-start gap-8 md:gap-16">
        <h2>Key Features</h2>

        {/* A. Bedroom Progression */}
        <div className="w-full flex flex-col items-start p-2 md:p-4 shadow-2xl md:gap-8">
          <h3>1. Bedroom Progression</h3>

          <p className="text-start">
            The bedroom evolves across three versions, reflecting memory recovery and tonal shifts as the story progresses.
          </p>
          <div className="w-full mt-4 flex flex-col md:flex-row items-start gap-8 md:gap-2">


            {/* START */}
            <div className="w-full md:w-1/3 flex flex-col items-center gap-2">

              {/* TEXT */}
              <div className="w-full md:h-1/3">
                <p className="text-center">
                  <i>START OF THE GAME.</i>
                </p>
                <p className="text-center">
                  The bedroom opens with a <b>grim</b> atmosphere and <b>gray tones</b>, setting a{" "}
                  <b>bleak, monotonous</b> mood.
                </p>

              </div>

              {/* IMAGES */}
              <div className="w-full md:h-2/3 flex flex-col gap-2">
                <ImageDisplay src={bedroomLevelImages.gallery[0]} gallery={bedroomLevelImages.gallery} index={0} />
                <ImageDisplay src={bedroomItemsImages.gallery[0]} gallery={bedroomItemsImages.gallery} index={0} />
              </div>
            </div>

            {/* MIDDLE */}
            <div className="w-full md:w-1/3 flex flex-col items-center gap-2">

              {/* TEXT */}
              <div className="w-full md:h-1/3">
                <p className="text-center">
                  <i>MIDDLE OF THE GAME.</i>
                </p>
                <p className="text-center">
                  Warmer colors emerge, and memories resurface, like the <b>girl’s album</b>, bringing{" "}
                  <b>hope</b> into the room, though it remains incomplete.
                </p>
              </div>

              {/* IMAGES */}
              <div className="w-full md:h-2/3 flex flex-col gap-2">
                <ImageDisplay src={bedroomLevelImages.gallery[1]} gallery={bedroomLevelImages.gallery} index={1} />
                <ImageDisplay src={bedroomItemsImages.gallery[1]} gallery={bedroomItemsImages.gallery} index={1} />
              </div>
            </div>

            {/* END */}
            <div className="w-full md:w-1/3 flex flex-col items-center gap-2">

              {/* TEXT */}
              <div className="w-full md:h-1/3">
                <p className="text-center">
                  <i>END OF THE GAME.</i>
                </p>
                <p className="text-center">
                  Finally, the space transforms into a <b>warm, inviting</b> scene with a blue sky outside{" "}
                  and the last memory revealed: a <b>pink rose in a flask</b>.
                </p>
              </div>

              {/* IMAGES */}
              <div className="w-full md:h-2/3 flex flex-col gap-2">
                <ImageDisplay src={bedroomLevelImages.gallery[2]} gallery={bedroomLevelImages.gallery} index={2} />
                <ImageDisplay src={bedroomItemsImages.gallery[2]} gallery={bedroomItemsImages.gallery} index={2} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* My Contributions */}
      <div className="w-full flex flex-col items-start gap-8 md:gap-16">
        <h2>My Contributions</h2>

        {/* Teleportation */}
        <div className="w-full flex flex-col items-start p-2 md:p-4 shadow-2xl md:gap-4">
          <h3>1. Teleportation Locomotion</h3>
          <div className="w-full flex flex-col md:flex-row items-center gap-2">
            <div className="w-full md:w-3/5">
              <ImageDisplay src={teleportingGif.gif} />
            </div>
            <div className="w-full md:w-2/5 flex text-center">
              <p>
                Designed and implemented a <b>comfort-first</b> teleport system with clear targeting and
                post-teleport orientation to reduce motion sickness. Also integrated <b>sound design cues</b>{" "}
                to distinguish between states such as <i>aiming</i>, <i>successful teleport</i>, and{" "}
                <i>impossible to teleport</i>.
              </p>
            </div>
          </div>
        </div>

        {/* Hand Interactions */}
        <div className="w-full flex flex-col items-start p-2 md:p-4 shadow-2xl md:gap-8">
          <h3>2. Hand Interactions</h3>

          <div className="w-full mt-4 flex flex-col md:flex-row items-start gap-2">
            <div className="w-full md:w-1/3 flex flex-row md:flex-col items-center gap-2">
              <div className="w-3/5 md:w-full">
                <ImageDisplay
                  src={handInteractions.gallery[0]}
                  gallery={handInteractions.gallery}
                  index={0}
                />
              </div>
              <div className="w-2/5 md:w-full">
                <p className="text-center">
                  Built a <b>grab</b> mechanic for basic <b>VR interactions</b> like viewing objects.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-row md:flex-col items-center  gap-2">
              <div className="w-3/5 md:w-full">
                <ImageDisplay
                  src={handInteractions.gallery[1]}
                  gallery={handInteractions.gallery}
                  index={1}
                />
              </div>
              <div className="w-2/5 md:w-full">
                <p className="text-center">
                  Physics-based reactions for props like <b>bamboos</b> and <b>bells</b>.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-row md:flex-col items-center gap-2">
              <div className="w-3/5 md:w-full">
                <ImageDisplay
                  src={handInteractions.gallery[2]}
                  gallery={handInteractions.gallery}
                  index={2}
                />
              </div>
              <div className="w-2/5 md:w-full">
                <p className="text-center">
                  <b>Bed interactions</b> like sleeping, the same system logic was later used to{" "}
                  <b>interact</b> with the <b>colossus</b>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Colossus */}
        <div className="w-full flex flex-col items-start p-2 md:p-4 shadow-2xl md:gap-4">
          <h3>3. Colossus – Unchaining & Hand Opening</h3>
          <div className="w-full flex flex-col md:flex-row items-center gap-2">
            <div className="w-full md:w-3/5">
              <ImageDisplay src={colossusGif.gif} />
            </div>
            <div className="w-full md:w-2/5 flex text-center">
              <p>
                Implemented the full interaction logic to <b>release chains</b> and trigger the <b>hand-opening animation</b>,
                which <b>unlocked</b> one of the two dreams for the player to explore.
              </p>
            </div>
          </div>
        </div>

        {/* Playing Guitar Mechanic */}
        <div className="w-full flex flex-col items-start p-2 md:p-4 shadow-2xl md:gap-4">
          <h3>4. Playing Guitar Mechanic</h3>
          <div className="w-full flex flex-col md:flex-row items-center gap-2">
            <div className="w-full aspect-video md:w-3/5">
              <iframe
                className="w-full h-full rounded"
                src={youtubeUrls.playingGuitar}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="w-full md:w-2/5 flex text-center">
              <p>
                Built the <b>velocity-to-pitch</b> mapping: faster hand motion raises pitch, slower lowers it; holding the <b>target speed</b> stabilizes pitch and <b>unlocks the memory</b>.
              </p>
            </div>
          </div>
        </div>

        {/* Bamboo Interaction */}
        <div className="w-full flex flex-col items-start p-2 md:p-4 shadow-2xl md:gap-4">
          <h3>5. Bamboo Interaction</h3>
          <div className="w-full flex flex-col md:flex-row items-center gap-2">
            <div className="w-full aspect-video md:w-3/5">
              <iframe
                className="w-full h-full rounded"
                src={youtubeUrls.playingWithBamboos}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="w-full md:w-2/5 flex text-center">
              <p>
                A <b>simple</b> yet <b>fun interaction</b> with bamboos. As the bamboos touch each other, they <b>emit a sound</b>{" "}
                with <b>different pitches</b> depending on their <b>height and thickness</b>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gameplay Video */}
      <div className="w-full flex flex-col items-start p-4 gap-4 md:gap-16 shadow-2xl">
        <h2>Gameplay</h2>
        <div className="w-full aspect-video">
          <iframe
            className="w-full h-full rounded"
            src={youtubeUrls.fullGameplay}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="w-full flex flex-col items-start p-4 gap-4 md:gap-16 shadow-2xl">
        <h2>Image Gallery</h2>
        <ImageDisplay src={anamnesisImageGallery.gallery[0]} gallery={anamnesisImageGallery.gallery} index={0} />
      </div>

      {/* Footer Nav */}
      <WorksNav currentSlug="anamnesis" />
    </section>
  );
};

export default Page;