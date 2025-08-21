import React from "react";
import ArrowIcon from "app/components/ArrowIcon";
import ImageDisplay from "app/components/ImageDisplay";

export const metadata = {
  title: "Anamnesis",
  description: "Immersive VR experience developed in Unity.",
};

const anamnesisImages = {
  gallery: [
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/1.webp",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/2.webp",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/3.webp",
    "https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/4.webp",
  ],
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
                <b>Anamnesis</b> is an <b>immersive VR experience</b> developed during my first year in the MAJIC program at Université Côte d’Azur, built in <b>Unity</b>. I focused on core VR mechanics and interaction systems while also supporting level design and 3D content.
              </p>
            </div>

            {/* Project Goals */}
            <div className="p-2 md:p-4 shadow-xl">
              <h4>Project Goals</h4>
              <p>
                Deliver a <b>publisher-facing VR demo</b> that clearly showcases intuitive <b>hand interactions</b>, <b>robust object handling</b> (grab/throw/push/pull), and <b>comfortable locomotion</b> via teleportation—presented as a polished, <b>cohesive prototype</b>.
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
            {/* TODO modify this text */}
            <div className="p-2 md:p-4 shadow-xl">
              <h4>Takeaways</h4>
              <p>
                Building for VR demanded tight <b>interaction fidelity</b> and <b>player comfort</b>. Iterating on physics feel, affordances, and teleport rules was key to reducing friction and increasing immersion.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features (mirrors “Game Mechanics”) */}
      <div className="w-full flex flex-col items-start gap-4 md:gap-16">
        <h2>Key Features</h2>

        {/* Hands & Interaction */}
        <div className="w-full flex flex-col items-start p-2 md:p-4 shadow-2xl md:gap-8">
          <h3>1. Hand Interaction & Physics</h3>
          <div className="w-full mt-4 flex flex-col md:flex-row items-start gap-2">
            <div className="w-full md:w-1/3 flex flex-row md:flex-col items-center gap-2">
              <div className="w-3/5 md:w-full">
                <ImageDisplay src={anamnesisImages.gallery[1]} gallery={anamnesisImages.gallery} index={1} />
              </div>
              <div className="w-2/5 md:w-full">
                <p className="md:text-center">
                  Realistic hand presence with stable grabbing, throwing, and object manipulation tuned for VR comfort.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-row md:flex-col items-center gap-2">
              <div className="w-3/5 md:w-full">
                <ImageDisplay src={anamnesisImages.gallery[2]} gallery={anamnesisImages.gallery} index={2} />
              </div>
              <div className="w-2/5 md:w-full">
                <p className="md:text-center">
                  Interaction affordances and physics values iterated to reduce jitter and improve user feedback.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-row md:flex-col items-center gap-2">
              <div className="w-3/5 md:w-full">
                <ImageDisplay src={anamnesisImages.gallery[3]} gallery={anamnesisImages.gallery} index={3} />
              </div>
              <div className="w-2/5 md:w-full">
                <p className="md:text-center">
                  Integrated interaction across props and environment for a cohesive, tactile experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Locomotion */}
        <div className="w-full flex flex-col items-start p-2 md:p-4 shadow-2xl md:gap-8">
          <h3>2. Teleportation Locomotion</h3>
          <div className="w-full mt-4 flex flex-col md:flex-row items-start gap-2">
            <div className="w-full md:w-2/3">
              <ImageDisplay src={anamnesisImages.gallery[0]} gallery={anamnesisImages.gallery} index={0} />
            </div>
            <div className="w-full md:w-1/3 flex items-center">
              <p className="md:text-center">
                Comfort-first teleport rules with clear targeting and post-teleport orientation to minimize motion sickness.
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
            poster="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/anamnesis_images/1.webp"
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