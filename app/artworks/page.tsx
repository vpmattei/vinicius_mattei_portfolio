import React from "react";
import FullScreenGallery from "app/components/FullScreenGallery";
import ArrowIcon from "app/components/ArrowIcon";

export const metadata = {
  title: "Artworks",
  description: "Drawings.",
};

const images = [
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

const Page: React.FC = () => {
  return (
    <section className="prose mt-32 ml-8 mr-8 flex flex-col items-center">
      <h1>Artworks</h1>
      <a
        className="mb-8 flex items-center transition-all hover:text-neutral-300"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.artstation.com/viniciusmattei"
      >
        <h2>Drawings</h2>
        <p className="ml-2">
          <ArrowIcon size={24} />
        </p>
      </a>
      <FullScreenGallery images={images} />
    </section>
  );
};

export default Page;
