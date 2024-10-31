export default function Page() {
  return (
    <section className="prose lg:mx-64 md:mx-12 mx-8 flex flex-col flex-wrap items-start gap-16">
      <div className="w-[100%]">
        <h1 className="text-balance">Experiences</h1>
        <div className="flex flex-row justify-between flex-wrap gap-8">
          {/* ---------------------------- GRAPE HAWK ---------------------------- */}
          <div className="w-[10rem] lg:w-[15rem] h-[20rem] flex flex-col justify-between">
            <div>
              <h4 className="text-neutral-300">
                GrapeHawk <i className="text-lg text-neutral-400">(Remote)</i>
              </h4>
              <div className="h-[1px] w-[100%] bg-neutral-500"></div>
              <br />
              <h5 className="text-neutral-400">Developer</h5>
              <h5 className="text-neutral-400 italic">05.24 - present</h5>
            </div>

            <a
              className="italic underline text-pink-300"
              target="_blank"
              rel="noopener noreferrer"
              href="https://grapehawk.com"
            >
              <img
                className="max-w-[130px] max-h-[130px]"
                src="https://static.wixstatic.com/media/40394b_082b5d3b5c134c7bad866569494c890b~mv2.jpg"
              ></img>
            </a>
          </div>

          {/* ---------------------------- CENTRAL TEST ---------------------------- */}
          <div className="w-[10rem] lg:w-[15rem] h-[20rem] flex flex-col justify-between">
            <div>
              <h3 className="text-neutral-300">
                Central Test{" "}
                <i className="text-lg text-neutral-400">(Paris, FR)</i>
              </h3>
              <div className="h-[1px] w-[100%] bg-neutral-500"></div>
              <br />
              <h5 className="text-neutral-400">Game Designer / Developer</h5>
              <h5 className="text-neutral-400 italic">05.23 - 09.23</h5>
            </div>

            <a
              className="italic underline text-pink-300"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.centraltest.fr"
            >
              <img
                className="max-w-[130px] max-h-[130px]"
                src="https://pbs.twimg.com/profile_images/1255054057414295552/yjzIrCMz_400x400.jpg"
              ></img>
            </a>
          </div>

          {/* ---------------------------- KENTYOU ---------------------------- */}
          <div className="w-[10rem] lg:w-[15rem] h-[20rem] flex flex-col justify-between">
            <div>
              <h3 className="text-neutral-300">
                Kentyou{" "}
                <i className="text-lg text-neutral-400">(Grenoble, FR)</i>
              </h3>
              <div className="h-[1px] w-[100%] bg-neutral-500"></div>
              <br />
              <h5 className="text-neutral-400">
                UI/UX Web Designer / Developer
              </h5>
              <h5 className="text-neutral-400 italic">06.22 - 09.22</h5>
            </div>

            <a
              className="italic underline text-pink-300"
              target="_blank"
              rel="noopener noreferrer"
              href="http://kentyou.com"
            >
              <img
                className="max-w-[130px] max-h-[130px]"
                src="https://pbs.twimg.com/profile_images/1328342235038048263/gHLzQIHN_400x400.png"
              ></img>
            </a>
          </div>

          {/* ---------------------------- HOLOLAB ---------------------------- */}
          <div className="w-[10rem] lg:w-[15rem] h-[20rem] flex flex-col justify-between">
            <div>
              <h3 className="text-neutral-300">
                HoloLab{" "}
                <i className="text-lg text-neutral-400">(Florianópolis, BR)</i>
              </h3>
              <div className="h-[1px] w-[100%] bg-neutral-500"></div>
              <br />
              <h5 className="text-neutral-400">Game Designer</h5>
              <h5 className="text-neutral-400 italic">08.19 - 09.19</h5>
            </div>

            <a
              className="italic underline text-pink-300"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.hololab.com.br/en"
            >
              <img
                className="max-w-[130px] max-h-[130px]"
                src="https://media.licdn.com/dms/image/v2/D4D0BAQGyOtuUpnJVWw/company-logo_200_200/company-logo_200_200/0/1698412314269/hololab_tech_logo?e=2147483647&v=beta&t=z2QAVuVKBv6TF30jjXOrEaz1L8Wx63texxh06ZpzQPc"
              ></img>
            </a>
          </div>
        </div>
      </div>

      {/* ---------------------------- SCHOOLING ---------------------------- */}
      <div className="w-[100%]">
        <h1 className="text-balance">Schooling</h1>
        <div className="flex md:flex-row flex-col justify-between gap-8">
          <div className="flex flex-col gap-2">
            <div>
              <h4 className="text-neutral-300">
                Université Côte d'Azur{" "}
                <i className="text-lg text-neutral-400">(Cannes, FR)</i>
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
                src="https://univ-cotedazur.fr/medias/photo/vignette-2-lignes2_1668693930108-jpg?ID_FICHE=1167756"
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
                src="https://faculte-sciences.univ-grenoble-alpes.fr/medias/photo/logo-dlst_1676552384171-jpg"
              ></img>
            </a>
          </div>
        </div>
      </div>

      {/* ---------------------------- GAME ENGINES ---------------------------- */}
      <div className="w-[100%]">
        <h1 className="text-balance">Game Engines</h1>
        <div className="lg:m-16 md:m-8 m-4 flex flex-row flex-wrap items-center justify-between gap-16 md:gap-x-32">
          <a
            className="italic underline text-pink-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://unity.com"
          >
            <img
              className="max-w-[150px] max-h-[150px]
                        md:max-w-[200px] md:max-h-[200px]
                        lg:max-w-[300px] lg:max-h-[300px]"
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
                        md:max-w-[150px] md:max-h-[150px]
                        lg:max-w-[200px] lg:max-h-[200px]"
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
                        md:max-w-[200px] md:max-h-[200px]
                        lg:max-w-[300px] lg:max-h-[300px]"
              src="https://upload.wikimedia.org/wikipedia/commons/a/ac/GD-logo-big.png?20200730084519"
            />
          </a>
        </div>
      </div>

      {/* ---------------------------- ART TOOLS ---------------------------- */}
      <div className="w-[100%]">
        <h1 className="text-balance">Art Tools</h1>
        <div className="lg:m-16 md:m-8 m-4 flex flex-row items-center justify-between gap-16 md:gap-x-32 lg:gap-x-64 flex-wrap">
          <img
            className="max-w-[100px] max-h-[100px] md:max-w-[120px] md:max-h-[120px] lg:max-w-[140px] lg:max-h-[140px]"
            src="https://download.blender.org/branding/community/blender_community_badge_white.png"
          />
          <img
            className="max-w-[100px] max-h-[100px] md:max-w-[120px] md:max-h-[120px] lg:max-w-[140px] lg:max-h-[140px]"
            src="https://www.altam.fr/wp-content/uploads/2024/01/autodesk-3ds-max-small-social-400.png"
          />
          <img
            className="max-w-[100px] max-h-[100px] md:max-w-[120px] md:max-h-[120px] lg:max-w-[140px] lg:max-h-[140px]"
            src="https://www.altam.fr/wp-content/uploads/2024/01/autodesk-maya-small-social-400.png"
          />
          <img
            className="max-w-[100px] max-h-[100px] md:max-w-[120px] md:max-h-[120px] lg:max-w-[140px] lg:max-h-[140px]"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png"
          />
          <img
            className="max-w-[100px] max-h-[100px] md:max-w-[120px] md:max-h-[120px] lg:max-w-[140px] lg:max-h-[140px]"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1051px-Adobe_Illustrator_CC_icon.svg.png"
          />
          <img
            className="max-w-[100px] max-h-[100px] md:max-w-[120px] md:max-h-[120px] lg:max-w-[140px] lg:max-h-[140px]"
            src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
          />
        </div>
      </div>

      {/* ---------------------------- PROGRAMMING ---------------------------- */}
      <h1 className="text-balance">Languages - Programming</h1>
      <div className="lg:m-16 md:m-8 m-4 flex flex-row items-center justify-between gap-16 md:gap-32 lg:gap-48 flex-wrap">
        <img
          className="max-w-[100px] max-h-[100px] md:max-w-[120px] md:max-h-[120px] lg:max-w-[140px] lg:max-h-[140px]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png"
        />
        <img
          className="max-w-[100px] max-h-[100px] md:max-w-[120px] md:max-h-[120px] lg:max-w-[140px] lg:max-h-[140px]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"
        />
        <img
          className="max-w-[100px] max-h-[100px] md:max-w-[120px] md:max-h-[120px] lg:max-w-[140px] lg:max-h-[140px]"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png"
        />
        <img
          className="max-w-[100px] max-h-[100px] md:max-w-[120px] md:max-h-[120px] lg:max-w-[140px] lg:max-h-[140px]"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        />
        <img
          className="max-w-[100px] max-h-[100px] md:max-w-[120px] md:max-h-[120px] lg:max-w-[140px] lg:max-h-[140px]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
        />
        <img
          className="max-w-[100px] max-h-[100px] md:max-w-[120px] md:max-h-[120px] lg:max-w-[140px] lg:max-h-[140px]"
          src="https://static-00.iconduck.com/assets.00/sql-database-generic-icon-1521x2048-d0vdpxpg.png"
        />
        <img
          className="max-w-[100px] max-h-[100px] md:max-w-[120px] md:max-h-[120px] lg:max-w-[140px] lg:max-h-[140px]"
          src="https://cdn-icons-png.flaticon.com/512/9496/9496555.png"
        />
      </div>

      {/* ---------------------------- OTHER TOOLS ---------------------------- */}
      <div className="w-[100%]">
        <h1 className="text-balance">Other Tools</h1>
        <div className="lg:m-16 md:m-8 m-4 flex flex-row items-center justify-around gap-16 md:gap-32 lg:gap-48 flex-wrap">
          <img
            className="max-w-[130px] max-h-[130px] md:max-w-[170px] md:max-h-[170px] lg:max-w-[200px] lg:max-h-[200px]"
            src="https://images.squarespace-cdn.com/content/v1/56576da6e4b0acafe10c53bb/1682136103428-A4BP43QWKDC8JLMK6XZZ/WWISE+LOGO+%2B+TAG_WHITE.png?format=500w"
          />
          <img
            className="max-w-[130px] max-h-[130px] md:max-w-[170px] md:max-h-[170px] lg:max-w-[200px] lg:max-h-[200px]"
            src="https://freelogopng.com/images/all_img/1681039182chatgpt-logo-with-name.png"
          />
        </div>
      </div>

      {/* ---------------------------- SPOKEN LANGUAGES ---------------------------- */}
      <div className="w-[100%]">
        <h1 className="text-balance">Languages - Spoken</h1>
        <div className="lg:m-16 md:m-8 m-4 flex flex-row items-start justify-between gap-16 md:gap-x-32 flex-wrap">
          <div className="flex flex-row items-end gap-8 md:w-[30rem] w-[20rem]">
            <img
              src="https://github.com/vpmattei/vinicius_mattei_portfolio/blob/portfolio-redesign/assets/flag-icons/brazil.png?raw=true"
              style={{ maxHeight: 50, maxWidth: 50 }}
            />
            <h2>Portuguese (Brazil)</h2>
            <i className="text-gray-400">Native language</i>
          </div>
          <div className="flex flex-row items-end gap-8 w-[20rem]">
            <img
              src="https://github.com/vpmattei/vinicius_mattei_portfolio/blob/portfolio-redesign/assets/flag-icons/france.png?raw=true"
              style={{ maxHeight: 50, maxWidth: 50 }}
            />
            <h2>French</h2>
            <i className="text-gray-400">Fluent</i>
          </div>
          <div className="flex flex-row items-end gap-8 w-[20rem]">
            <img
              src="https://github.com/vpmattei/vinicius_mattei_portfolio/blob/portfolio-redesign/assets/flag-icons/united-kingdom.png?raw=true"
              style={{ maxHeight: 50, maxWidth: 50 }}
            />
            <h2>English</h2>
            <i className="text-gray-400">Fluent</i>
          </div>
          <div className="flex flex-row items-end gap-8 w-[20rem]">
            <img
              src="https://github.com/vpmattei/vinicius_mattei_portfolio/blob/portfolio-redesign/assets/flag-icons/spain.png?raw=true"
              style={{ maxHeight: 50, maxWidth: 50 }}
            />
            <h2>Spanish</h2>
            <i className="text-gray-400">Conversational level</i>
          </div>
        </div>
      </div>
    </section>
  );
}
