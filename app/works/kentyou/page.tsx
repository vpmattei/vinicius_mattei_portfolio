import React from "react";
import ArrowIcon from "app/components/ArrowIcon";
import FullScreenGallery from "app/components/FullScreenGallery";

export const metadata = {
  title: "Kentyou",
  description: "Kentyou work.",
};

const kentyouImages = {
  logo: "https://pbs.twimg.com/profile_images/1328342235038048263/gHLzQIHN_400x400.png",
  gallery: [
    "https://i.ibb.co/GPvMSqy/Captura-de-Tela-2024-09-13-s-12-00-21.png",
    "https://i.ibb.co/BgFDSmh/Captura-de-Tela-2024-09-13-s-12-00-09.png",
    "https://i.ibb.co/3drXmZP/Captura-de-Tela-2024-09-13-s-12-00-34.png",
    "https://i.ibb.co/Hxfy1Pv/Captura-de-Tela-2024-09-13-s-12-00-39.png",
    "https://i.ibb.co/JHqPKMT/Captura-de-Tela-2024-09-13-s-12-00-48.png",
    "https://i.ibb.co/hR0LZbN/Captura-de-Tela-2024-09-13-s-12-01-29.png",
    "https://i.ibb.co/2k5HGzh/Captura-de-Tela-2024-09-13-s-12-01-34.png",
  ],
};

const Page: React.FC = () => {
  return (
    <section className="prose lg:mx-64 md:mx-12 mx-8 flex flex-col items-center gap-16">
      {/* Logo and Header */}
      <div className="w-full flex flex-col items-center text-center">
        <img
          src={kentyouImages.logo}
          alt="Kentyou Logo"
          style={{ width: "250px", height: "250px" }}
        />
        <h2 className="text-3xl font-bold mt-4">Kentyou</h2>
        <h3 className="text-xl font-medium mt-2">🚀 Empowering Smart Cities</h3>
      </div>

      {/* About Section */}
      <div className="w-full text-justify">
        <h3 className="text-2xl font-bold">📃 About</h3>
        <p>
          During my internship at Kentyou, I worked as both a UI/UX Designer and
          Developer. I redesigned their dashboard overview, adding a toggle
          button to switch between editing and viewing modes. Additionally, I
          created a profile settings page where users can update their profile,
          change passwords, and configure settings.
        </p>
      </div>

      <FullScreenGallery images={kentyouImages.gallery} useGrid={true} />

      {/* Features Section */}
      <div className="w-full">
        <h3 className="text-2xl font-bold">✨ Features</h3>
        <ul className="list-disc list-inside">
          <li>🛠️ Edit/view toggle for dashboards</li>
          <li>📋 List of KPI Targets and an option to edit/delete each KPI</li>
          <li>🔑 Profile settings for customization</li>
        </ul>
      </div>

      {/* Technologies Section */}
      <div className="w-full">
        <h3 className="text-2xl font-bold">🚀 Technologies</h3>
        <p>
          Kentyou leverages cutting-edge tools and technologies to deliver smart
          city solutions:
        </p>
        <ul className="list-disc list-inside">
          <li>
            ⚛️ <strong>VueJS</strong> for building the UI
          </li>
          <li>
            🌐 <strong>Next.js</strong> for server-side rendering and routing
          </li>
          <li>
            💻 <strong>TypeScript</strong> for type safety
          </li>
          <li>
            🎨 <strong>Figma</strong> for UI/UX design
          </li>
        </ul>
      </div>

      <div className="px-8 flex md:flex-row flex-col justify-between w-[100vw]">
        <div className="flex flex-col items-start w-[100%]">
          <a
            className="font-fraunces-light-i text-pink-200 hover:text-3xl hover:text-pink-400 text-2xl flex flex-row items-center gap-3 min-w-[10rem]"
            href="/works/podcastr"
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
            href="/works/pokedex-app"
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
