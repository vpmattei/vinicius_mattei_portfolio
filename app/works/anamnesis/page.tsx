import React from "react";
import ArrowIcon from "app/components/ArrowIcon";
import ImageDisplay from "app/components/ImageDisplay";

export const metadata = {
  title: "Anamnesis",
  description: "Immersive VR experience developed in Unity.",
};

const anamnesisImages = {
  gallery: [
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/work-pages-redesign/assets/anamnesis_images/1.webp",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/work-pages-redesign/assets/anamnesis_images/2.webp",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/work-pages-redesign/assets/anamnesis_images/3.webp",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/work-pages-redesign/assets/anamnesis_images/4.webp",
  ],
};

const teleportingGif = {
  gif: "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/work-pages-redesign/assets/anamnesis_images/teleporting.gif?raw=true"
};

const bedroomLevelImages = {
  gallery: [
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/work-pages-redesign/assets/anamnesis_images/bedroom_level_01.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/work-pages-redesign/assets/anamnesis_images/bedroom_level_02.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/work-pages-redesign/assets/anamnesis_images/bedroom_level_03.png?raw=true"
  ]
};

const bedroomItemsImages = {
  gallery: [
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/work-pages-redesign/assets/anamnesis_images/bedroom_items_level_01.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/work-pages-redesign/assets/anamnesis_images/bedroom_items_level_02.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/work-pages-redesign/assets/anamnesis_images/bedroom_items_01_level_03.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/work-pages-redesign/assets/anamnesis_images/bedroom_items_02_level_03.png?raw=true",
  ]
};

const handInteractionCompilationGif = {
  gif: "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/work-pages-redesign/assets/anamnesis_images/hand_interaction_compilation.gif?raw=true"
};

const colossusInteractionImages = {
  gallery: [
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/work-pages-redesign/assets/anamnesis_images/colossus_chain_interaction_01.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/work-pages-redesign/assets/anamnesis_images/colossus_chain_interaction_02.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/work-pages-redesign/assets/anamnesis_images/colossus_unchained_left.png?raw=true",
  ]
};

const colossusGif = {
  gif: "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/work-pages-redesign/assets/anamnesis_images/colossus_unchaining_and_opening_hand.gif?raw=true"
};

const memoriesImages = {
  gallery: [
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/work-pages-redesign/assets/anamnesis_images/memory_first_01.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/work-pages-redesign/assets/anamnesis_images/memory_first_guitar.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/work-pages-redesign/assets/anamnesis_images/memory_first_final.png?raw=true",
  ]
};

const memoryFinalActivatingGif = {
  gif: "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/work-pages-redesign/assets/anamnesis_images/memory_final_activating.gif?raw=true"
};

const mainLevelImages = {
  gallery: [
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/work-pages-redesign/assets/anamnesis_images/main_level_01.png?raw=true",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/work-pages-redesign/assets/anamnesis_images/main_level_02.png?raw=true",
  ]
};

const youtubeUrls = {
  playingGuitar: "https://youtu.be/Jervw3-ECQ4",
  playingWithBamboos: "https://youtu.be/7Ci6SC4PAvE"
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
                src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/work-pages-redesign/assets/anamnesis_images/logo.webp"
                alt="Anamnesis Logo"
              />
              <h1 className="mt-4 mb-2">Anamnesis</h1>
              <h3 className="mt-0 mb-2">Project Breakdown</h3>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-5/8">
            <div className="flex flex-col items-center">
              <ImageDisplay src={anamnesisImages.gallery[0]} />
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
                    <li><b>VR Interaction Systems</b> (hands & objects)</li>
                    <li>Teleportation Locomotion</li>
                    <li>Physics Tuning & UX</li>
                  </ul>
                </div>
                <div className="w-1/2">
                  <h6 className="mb-2">Other hats</h6>
                  <ul>
                    <li>Level Design Support</li>
                    <li>Prototype Integration</li>
                    <li>3D Modeling (Blender)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Takeaways */}
            <div className="p-2 md:p-4 shadow-xl">
              <h4>Takeaways</h4>
              <p>
                Building for VR demanded tight <b>interaction fidelity</b> and <b>player comfort</b>.
                Iterating on physics feel, affordances, and teleport rules was key to reducing friction
                and increasing immersion.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features (mirrors “Game Mechanics”) */}
      <div className="w-full flex flex-col items-start gap-4 md:gap-16">
        <h2>Key Features</h2>

        {/* A. Bedroom Progression */}
        <div className="w-full flex flex-col items-start p-2 md:p-4 shadow-2xl md:gap-8">
          <h3>1. Bedroom Progression</h3>
          <div className="w-full mt-4 flex flex-col md:flex-row items-start gap-2">
            <div className="w-full md:w-1/3 flex flex-row md:flex-col items-center gap-2">
              <div className="w-3/5 md:w-full">
                <ImageDisplay src={bedroomLevelImages.gallery[0]} gallery={bedroomLevelImages.gallery} index={0} />
              </div>
              <div className="w-2/5 md:w-full">
                <p className="md:text-center">
                  The bedroom evolves across three versions, reflecting memory recovery and tonal shifts as the story progresses.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-row md:flex-col items-center gap-2">
              <div className="w-3/5 md:w-full">
                <ImageDisplay src={bedroomLevelImages.gallery[1]} gallery={bedroomLevelImages.gallery} index={1} />
              </div>
              <div className="w-2/5 md:w-full">
                <p className="md:text-center">
                  The bedroom evolves across three versions, reflecting memory recovery and tonal shifts as the story progresses.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-row md:flex-col items-center gap-2">
              <div className="w-3/5 md:w-full">
                <ImageDisplay src={bedroomLevelImages.gallery[2]} gallery={bedroomLevelImages.gallery} index={2} />
              </div>
              <div className="w-2/5 md:w-full">
                <p className="md:text-center">
                  The bedroom evolves across three versions, reflecting memory recovery and tonal shifts as the story progresses.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mt-4 flex flex-col md:flex-row items-start gap-2">
            <div className="w-full md:w-1/3 flex flex-row md:flex-col items-center gap-2">
              <div className="w-3/5 md:w-full">
                <ImageDisplay src={bedroomLevelImages.gallery[0]} gallery={bedroomLevelImages.gallery} index={0} />
              </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-row md:flex-col items-center gap-2">
              <div className="w-3/5 md:w-full">
                <ImageDisplay src={bedroomLevelImages.gallery[1]} gallery={bedroomLevelImages.gallery} index={1} />
              </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-row md:flex-col items-center gap-2">
              <div className="w-3/5 md:w-full">
                <ImageDisplay src={bedroomLevelImages.gallery[2]} gallery={bedroomLevelImages.gallery} index={2} />
              </div>
            </div>
          </div>
        </div>

        {/* B. Hand Interaction & Physics */}
        <div className="w-full flex flex-col items-start p-2 md:p-4 shadow-2xl md:gap-8">
          <h3>2. Hand Interaction & Physics</h3>
          <div className="w-full mt-4 flex flex-col md:flex-row items-start gap-2">
            {/* Compilation GIF */}
            <div className="w-full md:w-1/3 flex flex-row md:flex-col items-center gap-2">
              <div className="w-3/5 md:w-full">
                <ImageDisplay src={handInteractionCompilationGif.gif} />
              </div>
              <div className="w-2/5 md:w-full">
                <p className="md:text-center">
                  Stable grabbing, throwing, and tactile responses across props like <b>bamboos</b> and <b>bells</b>, tuned for VR comfort.
                </p>
              </div>
            </div>
            {/* Extra environment shots */}
            <div className="w-full md:w-1/3 flex flex-row md:flex-col items-center gap-2">
              <div className="w-3/5 md:w-full">
                <ImageDisplay src={anamnesisImages.gallery[1]} gallery={anamnesisImages.gallery} index={1} />
              </div>
              <div className="w-2/5 md:w-full">
                <p className="md:text-center">
                  Physics parameters and affordances iterated to reduce jitter and improve user feedback in hand-object interactions.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-row md:flex-col items-center gap-2">
              <div className="w-3/5 md:w-full">
                <ImageDisplay src={anamnesisImages.gallery[2]} gallery={anamnesisImages.gallery} index={2} />
              </div>
              <div className="w-2/5 md:w-full">
                <p className="md:text-center">
                  Consistent interaction rules across the world create a cohesive, learnable tactile language.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* C. Teleportation Locomotion */}
        <div className="w-full flex flex-col items-start p-2 md:p-4 shadow-2xl md:gap-8">
          <h3>3. Teleportation Locomotion</h3>
          <div className="w-full mt-4 flex flex-col md:flex-row items-start gap-2">
            <div className="w-full md:w-2/3">
              <ImageDisplay src={teleportingGif.gif} />
            </div>
            <div className="w-full md:w-1/3 flex items-center">
              <p className="md:text-center">
                Comfort-first teleport with clear targeting and post-teleport orientation. Designed to minimize motion sickness and friction.
              </p>
            </div>
          </div>
        </div>

        {/* D. Colossus Interaction (Chains & Hand Opening) */}
        <div className="w-full flex flex-col items-start p-2 md:p-4 shadow-2xl md:gap-8">
          <h3>4. Colossus Interaction</h3>
          <div className="w-full mt-4 flex flex-col md:flex-row items-start gap-2">
            {/* Stills */}
            <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-2">
              {colossusInteractionImages.gallery.slice(0, 3).map((img, i) => (
                <div key={i}>
                  <ImageDisplay src={img} gallery={colossusInteractionImages.gallery} index={i} />
                </div>
              ))}
            </div>
            {/* Description */}
            <div className="w-full md:w-1/3 flex items-center">
              <p className="md:text-center">
                Interactive sequence to <b>unchain</b> the colossus and trigger a <b>hand-opening animation</b> that reveals a new interaction space.
              </p>
            </div>
          </div>
          {/* GIF */}
          <div className="w-full mt-2">
            <ImageDisplay src={colossusGif.gif} />
          </div>
        </div>

        {/* E. Guitar Memory Mechanic (Pitch-Based) */}
        <div className="w-full flex flex-col items-start p-2 md:p-4 shadow-2xl md:gap-8">
          <h3>5. Guitar Memory Mechanic</h3>
          <div className="w-full mt-4 flex flex-col md:flex-row items-start gap-2">
            {/* Images */}
            <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-2">
              {memoriesImages.gallery.map((img, i) => (
                <div key={i}>
                  <ImageDisplay src={img} gallery={memoriesImages.gallery} index={i} />
                </div>
              ))}
            </div>
            {/* Text */}
            <div className="w-full md:w-1/3 flex items-center">
              <p className="md:text-center">
                Hand velocity in the “playing zone” drives <b>pitch</b>: move faster to raise pitch, slower to lower it.
                Maintain the <b>correct speed</b> to keep pitch stable and <b>unlock the memory</b>.
              </p>
            </div>
          </div>
          {/* Final activation GIF */}
          <div className="w-full mt-2">
            <ImageDisplay src={memoryFinalActivatingGif.gif} />
          </div>
        </div>
      </div>

      {/* My Contributions */}
      <div className="w-full flex flex-col items-start p-4 gap-4 md:gap-16">
        <h2>My Contributions</h2>

        {/* Colossus */}
        <div className="w-full flex flex-col items-start p-2 md:p-4 shadow-2xl md:gap-4">
          <h3>1. Colossus – Unchaining & Hand Opening</h3>
          <div className="w-full flex flex-col md:flex-row items-start gap-2">
            <div className="w-full md:w-3/5">
              <ImageDisplay src={colossusInteractionImages.gallery[4]} gallery={colossusInteractionImages.gallery} index={4} />
            </div>
            <div className="w-full md:w-2/5 flex items-center">
              <p>
                Implemented the full interaction logic to <b>release chains</b> and trigger the <b>hand-opening animation</b>, revealing a new area to explore.
              </p>
            </div>
          </div>
        </div>

        {/* Hands & Physics */}
        <div className="w-full flex flex-col items-start p-2 md:p-4 shadow-2xl md:gap-4">
          <h3>2. Hand Interaction & Physics Tuning</h3>
          <div className="w-full flex flex-col md:flex-row items-start gap-2">
            <div className="w-full md:w-3/5">
              <ImageDisplay src={handInteractionCompilationGif.gif} />
            </div>
            <div className="w-full md:w-2/5 flex items-center">
              <p>
                Built <b>grab/throw</b> systems and tuned physics-based reactions for props like <b>bamboos</b> and <b>bells</b> to feel weighty yet comfortable in VR.
              </p>
            </div>
          </div>
        </div>

        {/* Teleportation */}
        <div className="w-full flex flex-col items-start p-2 md:p-4 shadow-2xl md:gap-4">
          <h3>3. Teleportation Locomotion</h3>
          <div className="w-full flex flex-col md:flex-row items-start gap-2">
            <div className="w-full md:w-3/5">
              <ImageDisplay src={teleportingGif.gif} />
            </div>
            <div className="w-full md:w-2/5 flex items-center">
              <p>
                Designed and implemented a <b>comfort-first</b> teleport system with clear targeting and post-teleport orientation to reduce motion sickness.
              </p>
            </div>
          </div>
        </div>

        {/* Guitar Mechanic */}
        <div className="w-full flex flex-col items-start p-2 md:p-4 shadow-2xl md:gap-4">
          <h3>4. Guitar – Pitch-Based Memory Unlock</h3>
          <div className="w-full flex flex-col md:flex-row items-start gap-2">
            <div className="w-full md:w-3/5">
              <ImageDisplay src={memoriesImages.gallery[1]} gallery={memoriesImages.gallery} index={1} />
            </div>
            <div className="w-full md:w-2/5 flex items-center">
              <p>
                Built the <b>velocity-to-pitch</b> mapping: faster hand motion raises pitch, slower lowers it; holding the <b>target speed</b> stabilizes pitch and <b>unlocks the memory</b>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gameplay Video */}
      <div className="w-full flex flex-col items-start p-4 gap-4 md:gap-16 shadow-2xl">
        <h2>Gameplay</h2>
        <div className="self-center w-full aspect-video max-w-4xl">
          <video
            controls
            className="w-full h-full rounded"
            poster="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/work-pages-redesign/assets/anamnesis_images/1.webp"
          >
            <source src="https://www.ludhic.fr/games/anamnesis/video.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="w-full flex flex-col items-start p-4 gap-4 md:gap-16 shadow-2xl">
        <h2>Image Gallery</h2>
        <ImageDisplay src={anamnesisImages.gallery[0]} gallery={anamnesisImages.gallery} index={0} />
      </div>

      {/* Footer Nav */}
      <div className="px-8 flex md:flex-row flex-col justify-between w-[100vw]">
        <div className="flex flex-col items-start w-[100%]">
          <a
            className="font-fraunces-light-i text-pink-200 hover:text-3xl hover:text-pink-400 text-2xl flex flex-row items-center gap-3 min-w-[10rem]"
            href="/works/procedural-walk-animation"
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
            href="/works/hebald-forest"
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