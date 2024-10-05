"use client";

import useIntersectionObserver from "./hooks/useIntersectionObserver";

export default function Page() {
  useIntersectionObserver(".fade-in-element");

  return (
    <section className="prose ml-8 mr-8">
      <div className="mt-48 mb-32 flex flex-col items-center gap-16">
        <div className="mb-64 text-center fade-in-element opacity-0">
          <p className="font-anton text-8xl md:text-9xl">HEY, I'M</p>
          <p className="font-bodoni-moda-i italic text-8xl md:text-9xl">
            Vinícius
          </p>
        </div>
        <p className="font-bodoni-moda text-5xl md:text-7xl text-center italic fade-in-element opacity-0">
          GAME DESIGNER
        </p>
        <p className="font-bodoni-moda text-5xl md:text-7xl text-center italic fade-in-element opacity-0">
          GAME DEVELOPER
        </p>
        <p className="font-bodoni-moda text-5xl md:text-7xl text-center italic fade-in-element opacity-0">
          VISUAL ARTIST
        </p>
        <p className="text-md sm:text-xl md:text-3xl xl:text-4xl text-center text-balance leading-loose fade-in-element opacity-0">
          I help bring people's visions to fruition by combining my technical
          skills with my artistic perspective. This allows me to create unique,
          creative, and technically robust video games.
        </p>
      </div>
      <br></br>
      <hr className="border-gray-300" />
      <br></br>

      <div className="flex flex-col items-center gap-8">
        <h1>Experiences</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 w-[100%] justify-between flex-wrap">
          {/* ---------------------------- GRAPE HAWK ---------------------------- */}
          <div className=" mr-8 ml-8">
            <h2>GrapeHawk</h2>
            <h3>Internship – Developer</h3>
            <h4 className="italic">05.24 - 10.24</h4>
            <a
              className="italic underline text-pink-400 dark:text-pink-300"
              target="_blank"
              rel="noopener noreferrer"
              href="https://grapehawk.com"
            >
              <img
                src="https://static.wixstatic.com/media/40394b_082b5d3b5c134c7bad866569494c890b~mv2.jpg"
                style={{ minWidth: 150, height: 150 }}
              ></img>
            </a>
          </div>

          {/* ---------------------------- CENTRAL TEST ---------------------------- */}
          <div className=" mr-8 ml-8">
            <h2>Central Test</h2>
            <h3>Internship – Game Designer / Developer</h3>
            <h4 className="italic">05.23 - 09.23</h4>
            <a
              className="italic underline text-pink-400 dark:text-pink-300"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.centraltest.fr"
            >
              <img
                src="https://pbs.twimg.com/profile_images/1255054057414295552/yjzIrCMz_400x400.jpg"
                style={{ maxHeight: 150, maxWidth: 200 }}
              ></img>
            </a>
          </div>

          {/* ---------------------------- KENTYOU ---------------------------- */}
          <div className="mr-8 ml-8">
            <h2>Kentyou</h2>
            <h3>Internship – UI/UX Web Designer / Developer</h3>
            <h4 className="italic">06.22 - 09.22</h4>
            <a
              className="italic underline text-pink-400 dark:text-pink-300"
              target="_blank"
              rel="noopener noreferrer"
              href="http://kentyou.com"
            >
              <img
                src="https://pbs.twimg.com/profile_images/1328342235038048263/gHLzQIHN_400x400.png"
                style={{ height: 150 }}
              ></img>
            </a>
          </div>

          {/* ---------------------------- HOLOLAB ---------------------------- */}
          <div className="mr-8 ml-8">
            <h2>HoloLab</h2>
            <h3>Internship – Game Designer</h3>
            <h4 className="italic">08.19 - 09.19</h4>
            <a
              className="italic underline text-pink-400 dark:text-pink-300"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.hololab.com.br/en"
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D4D0BAQGyOtuUpnJVWw/company-logo_200_200/company-logo_200_200/0/1698412314269/hololab_tech_logo?e=2147483647&v=beta&t=z2QAVuVKBv6TF30jjXOrEaz1L8Wx63texxh06ZpzQPc"
                style={{ height: 150 }}
              ></img>
            </a>
          </div>
        </div>
      </div>

      <br></br>
      <hr className="border-gray-300" />
      <br></br>
      {/* ---------------------------- SCHOOLING ---------------------------- */}
      <div className="flex flex-col items-center gap-8">
        <h1>Schooling</h1>
        <div className="flex md:flex-row flex-col w-[100%] justify-between">
          <div className="mr-8 ml-8">
            <h2>Université Côte d'Azur</h2>
            <h3>Management of Video Games, Image and Creativity (MAJIC)</h3>
            <h4>Master's Degree</h4>
            <h4 className="italic">09.22 - 09.24</h4>
            <a
              className="italic underline text-pink-400 dark:text-pink-300"
              target="_blank"
              rel="noopener noreferrer"
              href="https://univ-cotedazur.fr"
            >
              <img
                src="https://univ-cotedazur.fr/medias/photo/vignette-2-lignes2_1668693930108-jpg?ID_FICHE=1167756"
                style={{ height: 150 }}
              ></img>
            </a>
          </div>

          <div className="mr-8 ml-8">
            <h2>Université Grenoble Alpes</h2>
            <h3>Computer Science Methods for Business Management (MIAGE)</h3>
            <h4>Bachelor's Degree</h4>
            <h4 className="italic">09.17 - 09.22</h4>
            <a
              className="italic underline text-pink-400 dark:text-pink-300"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.univ-grenoble-alpes.fr"
            >
              <img
                src="https://faculte-sciences.univ-grenoble-alpes.fr/medias/photo/logo-dlst_1676552384171-jpg"
                style={{ maxHeight: 150, maxWidth: 200 }}
              ></img>
            </a>
          </div>
        </div>
      </div>

      {/* ---------------------------- TOOLS ---------------------------- */}
      <br />
      <hr className="border-t border-gray-300 my-6" />
      <div className="m-16 flex flex-col items-center gap-8">
        <h1>Game Engines</h1>
        <div className="flex flex-row items-center gap-32 m-16">
          {/* ---------------------------- GAME ENGINES ---------------------------- */}
          <a
            className="italic underline text-pink-400 dark:text-pink-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://unity.com"
          >
            <img
              src="https://alexdunn.org/wp-content/uploads/2017/05/unity-logo-white.png"
              style={{ maxHeight: 300, maxWidth: 450 }}
            />
          </a>
          <a
            className="italic underline text-pink-400 dark:text-pink-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://unrealengine.com"
          >
            <img
              src="https://cdn2.unrealengine.com/ue-logotype-2023-vertical-white-1686x2048-bbfded26daa7.png"
              style={{ maxHeight: 300, maxWidth: 300 }}
            />
          </a>
          <a
            className="italic underline text-pink-400 dark:text-pink-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://gdevelop.io"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/ac/GD-logo-big.png?20200730084519"
              style={{ maxHeight: 300, maxWidth: 450 }}
            />
          </a>
        </div>
      </div>
      <br />
      <hr className="border-t border-gray-300 my-6" />
      {/* ---------------------------- ART TOOLS ---------------------------- */}
      <div className="m-16 flex flex-col items-center gap-8">
        <h1>Art Tools</h1>
        <div className="flex flex-row items-center justify-around gap-32 flex-wrap">
          <img
            src="https://download.blender.org/branding/community/blender_community_badge_white.png"
            style={{ maxHeight: 300, maxWidth: 300 }}
          />
          <img
            src="https://www.altam.fr/wp-content/uploads/2024/01/autodesk-3ds-max-small-social-400.png"
            style={{ maxHeight: 300, maxWidth: 300 }}
          />
          <img
            src="https://www.altam.fr/wp-content/uploads/2024/01/autodesk-maya-small-social-400.png"
            style={{ maxHeight: 300, maxWidth: 300 }}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png"
            style={{ maxHeight: 300, maxWidth: 300 }}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1051px-Adobe_Illustrator_CC_icon.svg.png"
            style={{ maxHeight: 300, maxWidth: 300 }}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
            style={{ maxHeight: 300, maxWidth: 300 }}
          />
        </div>
      </div>
      <br />
      <hr className="border-t border-gray-300 my-6" />
      {/* ---------------------------- OTHERS ---------------------------- */}
      <div className="m-16 flex flex-col items-center gap-8">
        <h1>Others</h1>
        <div className="m-16 flex flex-row items-center gap-64 flex-wrap">
          <img
            src="https://images.squarespace-cdn.com/content/v1/56576da6e4b0acafe10c53bb/1682136103428-A4BP43QWKDC8JLMK6XZZ/WWISE+LOGO+%2B+TAG_WHITE.png?format=500w"
            style={{ maxHeight: 300, maxWidth: 300 }}
          />
          <img
            src="https://freelogopng.com/images/all_img/1681039182chatgpt-logo-with-name.png"
            style={{ maxHeight: 300, maxWidth: 300 }}
          />
        </div>
      </div>

      {/* ---------------------------- PROGRAMMING ---------------------------- */}
      <br />
      <hr className="border-t border-gray-300 my-6" />
      <div className="m-16 flex flex-col items-center gap-8">
        <h1>Languages - Programming</h1>
        <div className="m-16 flex flex-row items-center gap-64 flex-wrap">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png"
            style={{ maxHeight: 200, maxWidth: 200 }}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"
            style={{ maxHeight: 200, maxWidth: 200 }}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            style={{ maxHeight: 200, maxWidth: 200 }}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
            style={{ maxHeight: 200, maxWidth: 200 }}
          />
          <img
            src="https://static-00.iconduck.com/assets.00/sql-database-generic-icon-1521x2048-d0vdpxpg.png"
            style={{ maxHeight: 200, maxWidth: 200 }}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/9496/9496555.png"
            style={{ maxHeight: 200, maxWidth: 200 }}
          />
        </div>
      </div>

      {/* ---------------------------- SPOKEN LANGUAGES ---------------------------- */}
      <br />
      <hr className="border-t border-gray-300 my-6" />
      <div className="m-16 flex flex-col items-center gap-8">
        <h1>Languages - Spoken</h1>
        <div className="m-16 flex flex-row items-center gap-64 flex-wrap">
          <div className="flex flex-row items-center gap-8">
            <img
              src="assets/flag-icons/brazil.png"
              style={{ maxHeight: 50, maxWidth: 50 }}
            />
            <h2>Portuguese (Brazil)</h2>
            <i className="text-gray-700 dark:text-gray-400">Native language</i>
          </div>
          <div className="flex flex-row items-center gap-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png"
              style={{ maxHeight: 50, maxWidth: 50 }}
            />
            <h2>French</h2>
            <i className="text-gray-700 dark:text-gray-400">Fluent</i>
          </div>
          <div className="flex flex-row items-center gap-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png"
              style={{ maxHeight: 50, maxWidth: 50 }}
            />
            <h2>English</h2>
            <i className="text-gray-700 dark:text-gray-400">Fluent</i>
          </div>
          <div className="flex flex-row items-center gap-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png"
              style={{ maxHeight: 50, maxWidth: 50 }}
            />
            <h2>Spanish</h2>
            <i className="text-gray-700 dark:text-gray-400">
              Conversational level
            </i>
          </div>
        </div>
      </div>
    </section>
  );
}
