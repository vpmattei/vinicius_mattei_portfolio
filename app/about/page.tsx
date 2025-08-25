import Link from "next/link";

export default function Page() {
  return (
    <section className="prose lg:mx-32 md:mx-24 mx-16 flex flex-col flex-wrap items-start gap-16">
      <div className="w-[100%]">
        <h1 className="text-balance">About me</h1>
        {/* TODO: Modify my description */}
        <p>
          I’m a dedicated <b>game developer</b> with over <b>8 years</b> of hands-on work in Unity and C#. I specialize in designing and developing
          game mechanics and interactions, with a focus on NPC behaviour and interactions, as well as AI and
          Large Language Models integration.
        </p>
        <br />
        <p>
          I've worked on countless projects, from solo projects, to university projects with over 10+ people on a single project, ranging from
          developers to musicians and sound designers. This helped me gain good experience to know how to effectively communicate ideas with
          a wide range of different areas of work. My <Link className="transition-colors text-white/95 hover:text-pink-400" key="/artworks" href="/artworks">artistic background</Link> has also helped me navigate through this, as I am a musician and a
          visual artist myself.
        </p>

        <h2 className="text-balance">Experiences</h2>
        <div className="flex flex-row justify-start flex-wrap gap-x-8 gap-y-8">
          {/* ---------------------------- Freelance ---------------------------- */}
          <div className="w-[6rem] sm:w-[8rem] md:w-[10.5rem] lg:w-[12rem] h-[20rem] flex flex-col justify-between">
            <div>
              <h6 className="text-neutral-300 mt-4">
                Freelancer{" "}
                <i className="text-neutral-400">(Remote)</i>
              </h6>
              <div className="h-[1px] w-[100%] bg-neutral-500"></div>
              <p className="text-neutral-400 italic">06.25 - Present</p>
              <p className="text-neutral-400">
                Game Development
                <br />
                AI & API Integration
              </p>
            </div>

            <a
              className="italic underline text-pink-300"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.ellipticdata.com"
            >
              <img
                className="max-w-[80px] max-h-[80px] md:max-w-[100px] md:max-h-[100px] lg:max-w-[130px] lg:max-h-[130px]"
                src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/logos/experiences/ED_Logo_black.png"
              ></img>
            </a>
          </div>

          {/* ---------------------------- GRAPE HAWK ---------------------------- */}
          <div className="w-[6rem] sm:w-[8rem] md:w-[10.5rem] lg:w-[12rem] h-[20rem] flex flex-col justify-between">
            <div>
              <h6 className="text-neutral-300 mt-4">
                GrapeHawk{" "}
                <i className="text-neutral-400">(Cannes, FR)</i>
              </h6>
              <div className="h-[1px] w-[100%] bg-neutral-500"></div>
              <p className="text-neutral-400 italic">05.24 - 11.24</p>
              <p className="text-neutral-400">
                Software Developer
              </p>
            </div>

            <a
              className="italic underline text-pink-300"
              target="_blank"
              rel="noopener noreferrer"
              href="https://grapehawk.com"
            >
              <img
                className="max-w-[80px] max-h-[80px] md:max-w-[100px] md:max-h-[100px] lg:max-w-[130px] lg:max-h-[130px]"
                src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/logos/experiences/grapehawk_logo.jpg"
              ></img>
            </a>
          </div>

          {/* ---------------------------- CENTRAL TEST ---------------------------- */}
          <div className="w-[6rem] sm:w-[8rem] md:w-[10.5rem] lg:w-[12rem] h-[20rem] flex flex-col justify-between">
            <div>
              <h6 className="text-neutral-300 mt-4">
                Central Test{" "}
                <i className="text-neutral-400">(Paris, FR)</i>
              </h6>
              <div className="h-[1px] w-[100%] bg-neutral-500"></div>
              <p className="text-neutral-400 italic">05.23 - 09.23</p>
              <p className="text-neutral-400">
                Game Designer / Developer
              </p>
            </div>

            <a
              className="italic underline text-pink-300"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.centraltest.fr"
            >
              <img
                className="max-w-[80px] max-h-[80px] md:max-w-[100px] md:max-h-[100px] lg:max-w-[130px] lg:max-h-[130px]"
                src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/logos/experiences/central_test_logo.png"
              ></img>
            </a>
          </div>

          {/* ---------------------------- KENTYOU ---------------------------- */}
          <div className="w-[6rem] sm:w-[8rem] md:w-[10.5rem] lg:w-[12rem] h-[20rem] flex flex-col justify-between">
            <div>
              <h6 className="text-neutral-300 mt-4">
                Kentyou{" "}
                <i className="text-neutral-400">(Grenoble, FR)</i>
              </h6>
              <div className="h-[1px] w-[100%] bg-neutral-500"></div>
              <p className="text-neutral-400 italic">06.22 - 09.22</p>
              <p className="text-neutral-400">
                UI/UX Web Designer / Developer
              </p>
            </div>

            <a
              className="italic underline text-pink-300"
              target="_blank"
              rel="noopener noreferrer"
              href="http://kentyou.com"
            >
              <img
                className="max-w-[80px] max-h-[80px] md:max-w-[100px] md:max-h-[100px] lg:max-w-[130px] lg:max-h-[130px]"
                src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/logos/experiences/kentyou_logo.png"
              ></img>
            </a>
          </div>

          {/* ---------------------------- HOLOLAB ---------------------------- */}
          <div className="w-[6rem] sm:w-[8rem] md:w-[10.5rem] lg:w-[12rem] h-[20rem] flex flex-col justify-between">
            <div>
              <h6 className="text-neutral-300 mt-4">
                HoloLab{" "}
                <i className="text-neutral-400">(Florianópolis, BR)</i>
              </h6>
              <div className="h-[1px] w-[100%] bg-neutral-500"></div>
              <p className="text-neutral-400 italic">08.19 - 09.19</p>
              <p className="text-neutral-400">Game Designer</p>
            </div>

            <a
              className="italic underline text-pink-300"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.hololab.com.br/en"
            >
              <img
                className="max-w-[80px] max-h-[80px] md:max-w-[100px] md:max-h-[100px] lg:max-w-[130px] lg:max-h-[130px]"
                src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/logos/experiences/hololab_logo.jpeg"
              ></img>
            </a>
          </div>
        </div>
      </div>

      {/* ---------------------------- SCHOOLING ---------------------------- */}
      <div className="w-[100%]">
        <h2 className="text-balance">Schooling</h2>
        <div className="flex md:flex-row flex-col justify-between gap-8">
          <div className="flex flex-col gap-2">
            <div>
              <h4 className="text-neutral-300">
                Université Côte d'Azur{" "}
                <i className="text-neutral-400">(Cannes, FR)</i>
              </h4>
              <div className="h-[1px] w-[100%] bg-neutral-500"></div>
              <br />
              <h5 className="text-neutral-400">
                Management of Video Games, Image and Creativity (MAJIC)
              </h5>
              <h5 className="text-neutral-400">Master's Degree</h5>
              <h5 className="text-neutral-400 italic">09.22 - 09.24</h5>
            </div>
            <a
              className="italic underline text-pink-300"
              target="_blank"
              rel="noopener noreferrer"
              href="https://univ-cotedazur.fr"
            >
              <img
                className="max-h-[6rem]"
                src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/logos/uca_logo.jpg"
              ></img>
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <div>
              <h4 className="text-neutral-300">
                Université Grenoble Alpes
                <i className="text-lg text-neutral-400"> (Grenoble, FR)</i>
              </h4>
              <div className="h-[1px] w-[100%] bg-neutral-500"></div>
              <br />
              <h5 className="text-neutral-400">
                Computer Science Methods for Business Management (MIAGE)
              </h5>
              <h5 className="text-neutral-400">Bachelor's Degree</h5>
              <h5 className="text-neutral-400 italic">09.17 - 09.22</h5>
            </div>
            <a
              className="italic underline text-pink-300"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.univ-grenoble-alpes.fr"
            >
              <img
                className="max-h-[6rem]"
                src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/logos/uga_logo.jpg"
              ></img>
            </a>
          </div>
        </div>
      </div>

      {/* ---------------------------- GAME ENGINES ---------------------------- */}
      <div className="w-[100%]">
        <h2 className="text-balance">Game Engines</h2>
        <div className="md:mt-32 mt-24 flex flex-row flex-wrap justify-between sm:gap-16">
          <a
            className="italic underline text-pink-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://unity.com"
          >
            <img
              className="max-w-[150px] max-h-[150px]
                        md:max-w-[170px] md:max-h-[170px]
                        lg:max-w-[190px] lg:max-h-[190px]"
              src="https://alexdunn.org/wp-content/uploads/2017/05/unity-logo-white.png"
            />
          </a>
          <a
            className="italic underline text-pink-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://unrealengine.com"
          >
            <img
              className="max-w-[100px] max-h-[100px]
                        md:max-w-[120px] md:max-h-[120px]
                        lg:max-w-[140px] lg:max-h-[140px]"
              src="https://cdn2.unrealengine.com/ue-logotype-2023-vertical-white-1686x2048-bbfded26daa7.png"
            />
          </a>
          <a
            className="italic underline text-pink-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://gdevelop.io"
          >
            <img
              className="max-w-[150px] max-h-[150px]
                        md:max-w-[170px] md:max-h-[170px]
                        lg:max-w-[190px] lg:max-h-[190px]"
              src="https://upload.wikimedia.org/wikipedia/commons/a/ac/GD-logo-big.png?20200730084519"
            />
          </a>
        </div>
      </div>

      {/* ---------------------------- ART TOOLS ---------------------------- */}
      <div className="w-[100%]">
        <h2 className="text-balance">Art Tools</h2>
        <div className="md:mt-32 mt-24 flex flex-row justify-between flex-wrap gap-16">
          <img
            className="max-w-[70px] max-h-[70px] md:max-w-[80px] md:max-h-[80px] lg:max-w-[90px] lg:max-h-[90px]"
            src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/logos/art-tools/blender_community_badge_white.png"
            title="Blender"
          />
          <img
            className="max-w-[70px] max-h-[70px] md:max-w-[80px] md:max-h-[80px] lg:max-w-[90px] lg:max-h-[90px]"
            src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/logos/art-tools/autodesk-3ds-max-small-social-400.png"
            title="Autodesk 3ds Max"
          />
          <img
            className="max-w-[70px] max-h-[70px] md:max-w-[80px] md:max-h-[80px] lg:max-w-[90px] lg:max-h-[90px]"
            src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/logos/art-tools/autodesk-maya-small-social-400.png"
            title="Autodesk Maya"
          />
          <img
            className="max-w-[70px] max-h-[70px] md:max-w-[80px] md:max-h-[80px] lg:max-w-[90px] lg:max-h-[90px]"
            src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/logos/art-tools/Adobe_Photoshop_CC_icon.svg.png"
            title="Adobe Photoshop"
          />
          <img
            className="max-w-[70px] max-h-[70px] md:max-w-[80px] md:max-h-[80px] lg:max-w-[90px] lg:max-h-[90px]"
            src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/logos/art-tools/Adobe_Illustrator_CC_icon.svg.png"
            title="Adobe Illustrator"
          />
          <img
            className="max-w-[70px] max-h-[70px] md:max-w-[80px] md:max-h-[80px] lg:max-w-[90px] lg:max-h-[90px]"
            src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/logos/art-tools/Figma-logo.svg"
            title="Figma"
          />
        </div>
      </div>

      {/* ---------------------------- PROGRAMMING ---------------------------- */}
      <div className="w-[100%]">
        <h2 className="text-balance">Languages - Programming</h2>
        <div className="md:mt-32 mt-24 flex flex-row justify-between flex-wrap gap-16">
          <img
            className="max-w-[70px] max-h-[70px] md:max-w-[80px] md:max-h-[80px] lg:max-w-[90px] lg:max-h-[90px]"
            src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/logos/programming-languages/Logo_C_sharp.svg.png"
            title="C#"
          />
          <img
            className="max-w-[70px] max-h-[70px] md:max-w-[80px] md:max-h-[80px] lg:max-w-[90px] lg:max-h-[90px]"
            src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/logos/programming-languages/Logo_C++.svg.png"
            title="C++"
          />
          <img
            className="max-w-[70px] max-h-[70px] md:max-w-[80px] md:max-h-[80px] lg:max-w-[90px] lg:max-h-[90px]"
            src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/logos/programming-languages/Logo_Java.svg.png"
            title="Java"
          />
          <img
            className="max-w-[70px] max-h-[70px] md:max-w-[80px] md:max-h-[80px] lg:max-w-[90px] lg:max-h-[90px]"
            src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/logos/programming-languages/Logo_JavaScript.png"
            title="JavaScript"
          />
          <img
            className="max-w-[70px] max-h-[70px] md:max-w-[80px] md:max-h-[80px] lg:max-w-[90px] lg:max-h-[90px]"
            src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/logos/programming-languages/Logo_TypeScript.svg.png"
            title="TypeScript"
          />
          <img
            className="max-w-[70px] max-h-[70px] md:max-w-[80px] md:max-h-[80px] lg:max-w-[90px] lg:max-h-[90px]"
            src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/logos/programming-languages/logoazuresql.png"
            title="SQL"
          />
          <img
            className="max-w-[70px] max-h-[70px] md:max-w-[80px] md:max-h-[80px] lg:max-w-[90px] lg:max-h-[90px]"
            src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/logos/programming-languages/Logo_XML.png"
            title="XML"
          />
          <img
            className="max-w-[70px] max-h-[70px] md:max-w-[80px] md:max-h-[80px] lg:max-w-[90px] lg:max-h-[90px]"
            src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/logos/programming-languages/Logo_Python.svg.png"
            title="Python"
          />
        </div>
      </div>

      {/* ---------------------------- FRAMEWORKS ---------------------------- */}
      <div className="w-[100%]">
        <h2 className="text-balance">Frameworks</h2>
        <div className="md:mt-32 mt-24 flex flex-row justify-between flex-wrap gap-16">
          <img
            className="max-w-[70px] max-h-[70px] md:max-w-[80px] md:max-h-[80px] lg:max-w-[90px] lg:max-h-[90px]"
            src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/logos/frameworks/React-icon.svg.png"
            title="React"
          />
          <img
            className="max-w-[70px] max-h-[70px] md:max-w-[80px] md:max-h-[80px] lg:max-w-[90px] lg:max-h-[90px]"
            src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/logos/frameworks/Logo_VueJS.webp"
            title="VueJS"
          />
          <img
            className="max-w-[70px] max-h-[70px] md:max-w-[80px] md:max-h-[80px] lg:max-w-[90px] lg:max-h-[90px]"
            src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/logos/frameworks/Logo_AngularJS.svg.png"
            title="Angular"
          />
          <img
            className="max-w-[70px] max-h-[70px] md:max-w-[80px] md:max-h-[80px] lg:max-w-[90px] lg:max-h-[90px]"
            src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/logos/frameworks/Logo_Django.svg"
            title="Django"
          />
          <img
            className="max-w-[70px] max-h-[70px] md:max-w-[80px] md:max-h-[80px] lg:max-w-[90px] lg:max-h-[90px]"
            src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/logos/frameworks/Logo_NextJS.png"
            title="Next.js"
          />
          <img
            className="max-w-[70px] max-h-[70px] md:max-w-[80px] md:max-h-[80px] lg:max-w-[90px] lg:max-h-[90px]"
            src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/logos/frameworks/Logo_SpringBoot.png"
            title="Spring Boot"
          />
        </div>
      </div>

      {/* ---------------------------- OTHER TOOLS ---------------------------- */}
      <div className="w-[100%]">
        <h1 className="text-balance">Other Tools</h1>
        <div className="md:mt-32 mt-24 flex flex-row items-center justify-between gap-16 flex-wrap">
          <img
            className="max-w-[130px] max-h-[130px] md:max-w-[170px] md:max-h-[170px] lg:max-w-[200px] lg:max-h-[200px]"
            src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/logos/others/Logo_Wwise.png.webp"
          />
          <img
            className="max-w-[130px] max-h-[130px] md:max-w-[170px] md:max-h-[170px] lg:max-w-[200px] lg:max-h-[200px]"
            src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/main/assets/logos/others/Logo_ChatGPT.png"
          />
        </div>
      </div>

      {/* ---------------------------- SPOKEN LANGUAGES ---------------------------- */}
      <div className="w-[100%]">
        <h2 className="text-balance">Languages - Spoken</h2>
        <div className="md:mt-24 mt-16 flex flex-row items-center justify-between gap-16 flex-wrap">
          <div className="flex flex-row items-end gap-4 md:w-[30rem] w-[20rem]">
            <img
              className="max-h-[35px] max-w-[35px] md:max-h-[40px] md:max-w-[40px] lg:max-h-[45px] lg:max-w-[45px]"
              src="https://github.com/vpmattei/vinicius_mattei_portfolio/blob/portfolio-redesign/assets/flag-icons/brazil.png?raw=true"
            />
            <h4 className="text-neutral-300">Portuguese (Brazil)</h4>
            <h4 className="italic text-gray-400">Native language</h4>
          </div>
          <div className="flex flex-row items-end gap-4 w-[20rem]">
            <img
              className="max-h-[35px] max-w-[35px] md:max-h-[40px] md:max-w-[40px] lg:max-h-[45px] lg:max-w-[45px]"
              src="https://github.com/vpmattei/vinicius_mattei_portfolio/blob/portfolio-redesign/assets/flag-icons/france.png?raw=true"
            />
            <h4 className="text-neutral-300">French</h4>
            <h4 className="italic text-gray-400">Fluent</h4>
          </div>
          <div className="flex flex-row items-end gap-4 w-[20rem]">
            <img
              className="max-h-[35px] max-w-[35px] md:max-h-[40px] md:max-w-[40px] lg:max-h-[45px] lg:max-w-[45px]"
              src="https://github.com/vpmattei/vinicius_mattei_portfolio/blob/portfolio-redesign/assets/flag-icons/united-kingdom.png?raw=true"
            />
            <h4 className="text-neutral-300">English</h4>
            <h4 className="italic text-gray-400">Fluent</h4>
          </div>
          <div className="flex flex-row items-end gap-4 w-[20rem]">
            <img
              className="max-h-[35px] max-w-[35px] md:max-h-[40px] md:max-w-[40px] lg:max-h-[45px] lg:max-w-[45px]"
              src="https://github.com/vpmattei/vinicius_mattei_portfolio/blob/portfolio-redesign/assets/flag-icons/spain.png?raw=true"
            />
            <h4 className="text-neutral-300">Spanish</h4>
            <h4 className="italic text-gray-400">Conversational level</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
