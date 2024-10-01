"use client";

import useIntersectionObserver from "./hooks/useIntersectionObserver";

export default function Page() {
  useIntersectionObserver(".fade-in-element");

  return (
    <section className="prose ml-8 mr-8">
      <div className="mt-48 mb-32 flex flex-col items-center gap-8">
        <div className="mb-64 text-8xl text-center fade-in-element opacity-0">
          <p className="font-anton">HEY, I'M</p>
          <p className="font-bodoni-moda-i italic">Vinícius</p>
        </div>
        <p className="font-bodoni-moda text-5xl text-center italic fade-in-element opacity-0">
          GAME DESIGNER
        </p>
        <p className="font-bodoni-moda text-5xl text-center italic fade-in-element opacity-0">
          GAME DEVELOPER
        </p>
        <p className="font-bodoni-moda text-5xl text-center italic fade-in-element opacity-0">
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
      <div className="flex flex-col items-center gap-8">
        <h1>Tools</h1>
        {/* ---------------------------- GAME ENGINES ---------------------------- */}
        <h2>Game Engines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 w-[100%] gap-16">
          <img
            src="https://alexdunn.org/wp-content/uploads/2017/05/unity-logo-white.png"
            style={{ height: 100 }}
          />
          <img
            src="https://cdn2.unrealengine.com/ue-logotype-2023-vertical-white-1686x2048-bbfded26daa7.png"
            style={{ maxHeight: 150, maxWidth: 200 }}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/ac/GD-logo-big.png?20200730084519"
            style={{ height: 90 }}
          />
        </div>
        {/* ---------------------------- ART ---------------------------- */}
        <h2>Art</h2>
        <h3>Blender</h3>
        <h3>3DS Max</h3>
        <h3>Maya</h3>
        <h3>Adobe Photoshop</h3>
        <h3>Adobe Illustrator</h3>
        <h3>Figma</h3>
        {/* ---------------------------- OTHERS ---------------------------- */}
        <h2>Others</h2>
        <h3>Wwise</h3>
        <h3>ChatGPT</h3>
      </div>

      {/* ---------------------------- PROGRAMMING ---------------------------- */}
      <br />
      <hr className="border-t border-gray-300 my-6" />
      <h2>Languages - Programming</h2>
      <ul className="text-gray-700 dark:text-gray-400">
        <li>C#</li>
        <li>C++</li>
        <li>Blueprint (Unreal Engine)</li>
        <li>JavaScript / TypeScript</li>
        <li>SQL</li>
        <li>XML</li>
      </ul>

      {/* ---------------------------- SPOKEN LANGUAGES ---------------------------- */}
      <br />
      <hr className="border-t border-gray-300 my-6" />
      <h2>Languages - Spoken</h2>
      <h3>Portuguese (Brazil)</h3>
      <p className="text-gray-700 dark:text-gray-400">Native language</p>
      <h3>French</h3>
      <p className="text-gray-700 dark:text-gray-400">Fluent</p>
      <h3>English</h3>
      <p className="text-gray-700 dark:text-gray-400">Fluent</p>
      <h3>Spanish</h3>
      <p className="text-gray-700 dark:text-gray-400">Conversational level</p>
    </section>
  );
}
