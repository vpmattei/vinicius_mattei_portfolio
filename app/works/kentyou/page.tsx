import React from "react";
import FullScreenGallery from "app/components/FullScreenGallery";
import ArrowIcon from "app/components/ArrowIcon";

export const metadata = {
  title: "Kentyou",
  description: "Kentyou work.",
};

const images = [
  "https://i.ibb.co/GPvMSqy/Captura-de-Tela-2024-09-13-s-12-00-21.png",
  "https://i.ibb.co/BgFDSmh/Captura-de-Tela-2024-09-13-s-12-00-09.png",
  "https://i.ibb.co/3drXmZP/Captura-de-Tela-2024-09-13-s-12-00-34.png",
  "https://i.ibb.co/Hxfy1Pv/Captura-de-Tela-2024-09-13-s-12-00-39.png",
  "https://i.ibb.co/JHqPKMT/Captura-de-Tela-2024-09-13-s-12-00-48.png",
  "https://i.ibb.co/hR0LZbN/Captura-de-Tela-2024-09-13-s-12-01-29.png",
  "https://i.ibb.co/2k5HGzh/Captura-de-Tela-2024-09-13-s-12-01-34.png",
];

const Page: React.FC = () => {
  return (
    <section className="prose ml-8 mr-8 flex flex-col items-center gap-16">
      <div className="w-[100%] flex flex-col items-center">
        <img
          src="https://pbs.twimg.com/profile_images/1328342235038048263/gHLzQIHN_400x400.png"
          alt="Kentyou Logo"
          style={{ width: 250 }}
        />
        <h2 className="mb-16">Kentyou</h2>
        <a
          className="mb-8 flex items-center transition-all hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.figma.com/proto/pBTikcvwgShCHDAPnP5tvN/kentyou-ui-library__core--client?node-id=3414-13558&starting-point-node-id=646%3A17244&t=BXHG4WbblYkKL9N9-1"
        >
          <h3>Kentyou UI Prototype</h3>
          <p className="ml-2">
            <ArrowIcon size={18} />
          </p>
        </a>
        <p className="text-xl indent-8 text-justify">
          During my internship at Kentyou, a startup where I worked as a UI/UX
          Designer and Developer, I redesigned their dashboard overview. One key
          feature I introduced was an edit toggle button that allows users to
          easily switch between viewing and editing their dashboard.
          Additionally, I designed a profile settings page that enables users to
          update their profile name, change their password, and adjust various
          other settings. All designs were created using Figma.
        </p>
      </div>
      <FullScreenGallery images={images} />

      <div className="previous-next-work-buttons">
        <a className="previous-work" href="/works">
          All works
        </a>
        <a className="next-work" href="/works/tangled-tales">
          Tangled Tales
        </a>
      </div>
    </section>
  );
};

export default Page;
