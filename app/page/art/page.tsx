import React from "react";
import FullScreenGallery from "app/components/FullScreenGallery";
import ArrowIcon from "app/components/ArrowIcon";

export const metadata = {
  title: "Art",
  description: "Drawings.",
};

const drawings = [
  "https://cdna.artstation.com/p/assets/images/images/033/880/002/large/vinicius-mattei-viagem-de-chihiro.jpg?1610809149",
  "https://cdna.artstation.com/p/assets/images/images/034/102/748/large/vinicius-mattei-eu.jpg?1611406156",
  "https://cdna.artstation.com/p/assets/images/images/034/593/376/large/vinicius-mattei-soul-fanart.jpg?1612716655",
  "https://cdnb.artstation.com/p/assets/images/images/035/239/137/large/vinicius-mattei-moonwind-sketch.jpg?1614462646",
  "https://cdnb.artstation.com/p/assets/images/images/035/731/179/large/vinicius-mattei-joao-macaco-outline.jpg?1615751904",
  "https://cdnb.artstation.com/p/assets/images/images/036/360/461/large/vinicius-mattei-cara-indigena-assinatura.jpg?1617459579",
  "https://cdnb.artstation.com/p/assets/images/images/036/759/741/large/vinicius-mattei-princess-girl.jpg?1618527940",
  "https://cdnb.artstation.com/p/assets/images/images/036/991/265/large/vinicius-mattei-martita.jpg?1619173152",
  "https://cdnb.artstation.com/p/assets/images/images/037/314/421/large/vinicius-mattei-kakashi-thiago-assinatura.jpg?1620068100",
  "https://cdnb.artstation.com/p/assets/images/images/037/823/297/large/vinicius-mattei-race-concept-natehiti.jpg?1621414775",
  "https://cdna.artstation.com/p/assets/images/images/038/641/884/large/vinicius-mattei-natehitizin.jpg?1623671754",
  "https://cdna.artstation.com/p/assets/images/images/043/613/702/large/vinicius-mattei-erica-e-juan.jpg?1637765132",
  "https://cdnb.artstation.com/p/assets/images/images/059/048/687/large/vinicius-mattei-steam-punk-king.jpg?1675520600",
];
const UI = [
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
    <section className="prose ml-8 mr-8 flex flex-col items-center">
      <h1>Art</h1>
      <a
        className="mb-8 flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.artstation.com/viniciusmattei"
      >
        <h2>Drawings</h2>
        <p className="ml-2">
          <ArrowIcon size={24} />
        </p>
      </a>
      <FullScreenGallery images={drawings} />

      <br></br>
      <hr className="mt-8 border-gray-300 w-full" />
      <br></br>

      <h2 className="mb-16">UI / UX Designs</h2>
      <br></br>
      <a
        className="mb-8 flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.figma.com/proto/pBTikcvwgShCHDAPnP5tvN/kentyou-ui-library__core--client?node-id=3517-20340&starting-point-node-id=646%3A17244&t=7nw9pOpX3YavvDe8-1"
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
        easily switch between viewing and editing their dashboard. Additionally,
        I designed a profile settings page that enables users to update their
        profile name, change their password, and adjust various other settings.
        All designs were created using Figma.
      </p>
      <FullScreenGallery images={UI} />
    </section>
  );
};

export default Page;
