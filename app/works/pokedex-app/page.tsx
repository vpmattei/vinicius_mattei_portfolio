import React from "react";
import Link from "next/link";
import ArrowIcon from "app/components/ArrowIcon";
import FullScreenGallery from "app/components/FullScreenGallery";

export const metadata = {
  title: "Pokédex App",
  description: "Pokédex Android App made with Jetpack Compose.",
};

const pokedexImages = {
  logo: "https://raw.githubusercontent.com/vpmattei/pokedex-app/main/Showcase/Final%20Export/MainPhotoPokedexShowcase.png",
  gallery: [
    "https://raw.githubusercontent.com/vpmattei/pokedex-app/main/Showcase/Final%20Export/PokemonListShowcase.png",
    "https://raw.githubusercontent.com/vpmattei/pokedex-app/main/Showcase/Final%20Export/VenusaurShowcase.png",
    "https://raw.githubusercontent.com/vpmattei/pokedex-app/main/Showcase/Final%20Export/CharizardShowcase.png",
    "https://raw.githubusercontent.com/vpmattei/pokedex-app/main/Showcase/Final%20Export/BlastoiseShowcase.png",
    "https://raw.githubusercontent.com/vpmattei/pokedex-app/main/Showcase/Final%20Export/SeachbarShowcase.png",
  ],
};

const Page: React.FC = () => {
  return (
    <section className="prose mx-12 sm:mx-16 md:mx-20 lg:mx-32 flex flex-col items-center gap-16">
      {/* Logo and Header */}
      <div className="w-full flex flex-col items-center text-center">
        <img
          src={pokedexImages.logo}
          alt="Pokédex Logo"
          style={{ width: "1000px", height: "auto" }}
        />
        <h2 className="text-3xl font-bold mt-4">Pokédex App</h2>
        <h3 className="text-xl font-medium mt-2">
          📈 Gotta catch 'em all!
        </h3>
        <a
          className="mb-8 flex items-center transition-all hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/vpmattei/pokedex-app"
        >
          <h3>Github Repository</h3>
          <p className="ml-2">
            <ArrowIcon size={18} />
          </p>
        </a>
      </div>

      {/* About Section */}
      <div className="w-full text-justify">
        <h3 className="text-2xl font-bold">📃 About
        </h3>
        <p>
          <strong>Pokédex App</strong> is a sleek and modern Android application built with <strong>Jetpack Compose</strong>. It allows users to browse, search, and view Pokémon stats using data fetched from the <strong>PokéAPI</strong>. Built with responsiveness and performance in mind, it uses <strong>Hilt</strong> for Dependency Injection and <strong>Coil</strong> for image loading.
        </p>
      </div>

      <FullScreenGallery images={pokedexImages.gallery} useGrid={true} />

      {/* Features Section */}
      <div className="w-full">
        <h3 className="text-2xl font-bold">✨ Features</h3>
        <ul className="list-disc list-inside">
          <li>🔍 Search Pokémon by name</li>
          <li>📜 Paginated list of Pokémons</li>
          <li>🎨 Jetpack Compose UI with Material 3</li>
          <li>🔄 Smooth navigation between detail views</li>
          <li>🚀 Modern and responsive design</li>
        </ul>
      </div>

      {/* Technologies Section */}
      <div className="w-full">
        <h3 className="text-2xl font-bold">🚀 Technologies</h3>
        <p>The Pokédex App was built using modern Android technologies:</p>
        <ul className="list-disc list-inside">
          <li>📱 <strong>Jetpack Compose</strong> - Declarative UI framework for Android</li>
          <li>🛠️ <strong>Hilt</strong> - Dependency injection</li>
          <li>🌄 <strong>Coil</strong> - Kotlin image loading library</li>
          <li>✨ <strong>Material 3</strong> - Latest Material Design components</li>
          <li>📁 <strong>PokéAPI</strong> - Open source Pokémon API</li>
        </ul>
      </div>

      {/* Navigation to Previous and Next Projects */}
      <div className="px-8 flex md:flex-row flex-col justify-between w-[100vw]">
        <div className="flex flex-col items-start w-[100%]">
          <a
            className="font-fraunces-light-i text-pink-200 hover:text-3xl hover:text-pink-400 text-2xl flex flex-row items-center gap-3 min-w-[10rem]"
            href="/works/kentyou"
          >
            <img
              className="h-[50px]"
              src="https://cdn.prod.website-files.com/63ea7102bccb5ef39bb53f01/640f47a0e5c6852030f01aef_arrow%20svg%20left.svg"
              loading="lazy"
              alt="Previous"
            />
            PREVIOUS PROJECT
          </a>
        </div>

        <div className="flex flex-col items-end w-[100%]">
          <a
            className="font-fraunces-light-i text-green-300 hover:text-3xl hover:text-green-500 text-2xl flex flex-row items-center gap-3 min-w-[7rem]"
            href="/works/past-self-gmtk-2025"
          >
            NEXT PROJECT
            <img
              className="h-[50px]"
              src="https://cdn.prod.website-files.com/63ea7102bccb5ef39bb53f01/640f4647eec4474635c0cee7_arrow%20svg%20right.svg"
              loading="lazy"
              alt="Next"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Page;