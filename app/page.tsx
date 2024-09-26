export default function Page() {
  return (
    <section className="prose ml-8 mr-8">
      <div className="mt-48 mb-48 flex flex-col items-center gap-48">
        <p className="text-8xl text-center leading-relaxed">My name is</p>
        <p className="text-8xl text-center leading-relaxed">Vinícius Mattei</p>
        <p className="text-7xl text-center leading-relaxed">Game Designer</p>
        <p className="text-7xl text-center leading-relaxed">Game Developer</p>
        <p className="text-7xl text-center leading-relaxed">VisualArtist</p>
        <p className="m-32 text-4xl text-center text-balance leading-loose">
          I help bring peoples vision to fruition, by combining my technical
          skills alongside my artistic point of view, I create a unique,
          creative and technically robust video games.
        </p>
      </div>
      {/* <p className="text-2xl indent-8 text-justify">
        {`I became interested in game development very early on when
          I was a teenager, my interest only grew as time went on.
          Now I specialize mainly in Game Design and Development,
          being able to develop my own games as a solo developer,
          as well as doing all the 2D and 3D assets by myself.
          I am a fast learner and I am passionate about Video Games
          and its applications, I love all the new technologies growing
          in this new industry and I'm eager to learn new things.`}
      </p> */}
      <br></br>
      <hr className="border-gray-300" />
      <br></br>
      <h2>Experiences</h2>
      {/* ---------------------------- GRAPE HAWK ---------------------------- */}
      <h3>Internship - Developer</h3>
      <h4 className="italic">05.24 - Present</h4>
      <a
        className="italic underline text-pink-400 dark:text-pink-300"
        target="_blank"
        rel="noopener noreferrer"
        href="https://grapehawk.com"
      >
        Grape Hawk
      </a>
      <ul className="text-gray-700 dark:text-gray-400">
        <li>Web Development</li>
        <li>JavaScript</li>
        <li>
          3D Drone Simulation using :
          <ul>
            <li>Gazebo</li>
            <li>PX4</li>
            <li>QGroundControl</li>
          </ul>
        </li>
      </ul>
      {/* ---------------------------- CENTRAL TEST ---------------------------- */}
      <h3>Internship - Game Designer / Developer</h3>
      <h4 className="italic">04.23 - 09.23</h4>
      <a
        className="italic underline text-pink-400 dark:text-pink-300"
        target="_blank"
        rel="noopener noreferrer"
        href="http://centraltest.fr"
      >
        Central Test
      </a>
      <ul className="text-gray-700 dark:text-gray-400">
        <li>Game Design / Development</li>
        <li>JavaScript</li>
        <li>Figma</li>
        <li>Adobe Photoshop / Illustrator</li>
      </ul>
      {/* ---------------------------- KENTYOU ---------------------------- */}
      <h3>Internship - UI / UX and Web Developer</h3>
      <h4 className="italic">05.22 - 09.22</h4>
      <a
        className="italic underline text-pink-400 dark:text-pink-300"
        target="_blank"
        rel="noopener noreferrer"
        href="http://kentyou.com"
      >
        Kentyou
      </a>
      <ul className="text-gray-700 dark:text-gray-400">
        <li>Typescript</li>
        <li>Java</li>
        <li>NodeJS</li>
        <li>Figma</li>
        <li>Illustrator</li>
      </ul>
      {/* ---------------------------- HOLOLAB ---------------------------- */}
      <h3>Internship - Unity VR</h3>
      <h4 className="italic">08.19 - 09.19</h4>
      <a
        className="italic underline text-pink-400 dark:text-pink-300"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.hololab.com.br"
      >
        HoloLab - Laboratório de Inovações e Tecnologias
      </a>
      <ul className="text-gray-700 dark:text-gray-400">
        <li>Unity VR</li>
        <li>C#</li>
        <li>3DS Max</li>
      </ul>
      {/* ---------------------------- SOFTPLAN ---------------------------- */}
      <h3>Internship - Java</h3>
      <h4 className="italic">08.18 - 09.18</h4>
      <a
        className="italic underline text-pink-400 dark:text-pink-300"
        target="_blank"
        rel="noopener noreferrer"
        href="http://softplan.com.br"
      >
        Softplan
      </a>
      <ul className="text-gray-700 dark:text-gray-400">
        <li>Java</li>
      </ul>

      <br></br>
      <hr className="border-gray-300" />
      <br></br>
      {/* ---------------------------- SCHOOLING ---------------------------- */}
      <div className="flex flex-col items-center gap-8">
        <h1>Schooling</h1>
        <div className="flex flex-row w-[100%] justify-between">
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
            ></a>
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
              <img src="https://faculte-sciences.univ-grenoble-alpes.fr/medias/photo/logo-dlst_1676552384171-jpg"></img>
            </a>
          </div>
        </div>
      </div>

      {/* ---------------------------- TOOLS ---------------------------- */}
      <br />
      <hr className="border-t border-gray-300 my-6" />
      <h2>Tools</h2>
      {/* ---------------------------- GAME ENGINES ---------------------------- */}
      <h3>Game Engines</h3>
      <ul className="text-gray-700 dark:text-gray-400">
        <li>Unity</li>
        <li>Unreal Engine</li>
        <li>GDevelop</li>
      </ul>
      {/* ---------------------------- ART ---------------------------- */}
      <h3>Art</h3>
      <ul className="text-gray-700 dark:text-gray-400">
        <li>Blender</li>
        <li>3DS Max</li>
        <li>Maya</li>
        <li>Adobe Photoshop</li>
        <li>Adobe Illustrator</li>
        <li>Figma</li>
      </ul>
      {/* ---------------------------- OTHERS ---------------------------- */}
      <h3>Others</h3>
      <ul className="text-gray-700 dark:text-gray-400">
        <li>Wwise</li>
        <li>ChatGPT</li>
      </ul>

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
