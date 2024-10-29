export default function Page() {
  return (
    <section className="prose flex flex-col flex-wrap items-center">
      <h1 className="text-balance">Experiences</h1>
      <div className="flex flex-row justify-between flex-wrap gap-32 lg:gap-x-64">
        {/* ---------------------------- GRAPE HAWK ---------------------------- */}
        <div className="w-[20rem] lg:w-[30rem]">
          <h2>GrapeHawk</h2>
          <h3>Internship – Developer</h3>
          <h4 className="italic">05.24 - 10.24</h4>
          <a
            className="italic underline text-pink-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://grapehawk.com"
          >
            <img
              className="max-w-[200px] max-h-[200px]"
              src="https://static.wixstatic.com/media/40394b_082b5d3b5c134c7bad866569494c890b~mv2.jpg"
            ></img>
          </a>
        </div>

        {/* ---------------------------- CENTRAL TEST ---------------------------- */}
        <div className="w-[20rem] lg:w-[30rem]">
          <h2>Central Test</h2>
          <h3>Internship – Game Designer / Developer</h3>
          <h4 className="italic">05.23 - 09.23</h4>
          <a
            className="italic underline text-pink-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.centraltest.fr"
          >
            <img
              className="max-w-[200px] max-h-[200px]"
              src="https://pbs.twimg.com/profile_images/1255054057414295552/yjzIrCMz_400x400.jpg"
            ></img>
          </a>
        </div>

        {/* ---------------------------- KENTYOU ---------------------------- */}
        <div className="w-[20rem] lg:w-[30rem]">
          <h2>Kentyou</h2>
          <h3>Internship – UI/UX Web Designer / Developer</h3>
          <h4 className="italic">06.22 - 09.22</h4>
          <a
            className="italic underline text-pink-300"
            target="_blank"
            rel="noopener noreferrer"
            href="http://kentyou.com"
          >
            <img
              className="max-w-[200px] max-h-[200px]"
              src="https://pbs.twimg.com/profile_images/1328342235038048263/gHLzQIHN_400x400.png"
            ></img>
          </a>
        </div>

        {/* ---------------------------- HOLOLAB ---------------------------- */}
        <div className="w-[20rem] lg:w-[30rem]">
          <h2>HoloLab</h2>
          <h3>Internship – Game Designer</h3>
          <h4 className="italic">08.19 - 09.19</h4>
          <a
            className="italic underline text-pink-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.hololab.com.br/en"
          >
            <img
              className="max-w-[200px] max-h-[200px]"
              src="https://media.licdn.com/dms/image/v2/D4D0BAQGyOtuUpnJVWw/company-logo_200_200/company-logo_200_200/0/1698412314269/hololab_tech_logo?e=2147483647&v=beta&t=z2QAVuVKBv6TF30jjXOrEaz1L8Wx63texxh06ZpzQPc"
            ></img>
          </a>
        </div>
      </div>

      <br></br>
      <hr className="border-t border-gray-300 my-6" />
      <br></br>
      {/* ---------------------------- SCHOOLING ---------------------------- */}
      <h1 className="text-balance">Schooling</h1>
      <div className="flex md:flex-row flex-col justify-between md:gap-0 gap-24">
        <div className="flex flex-col mr-8 ml-8 gap-2">
          <h2>Université Côte d'Azur</h2>
          <h3>Management of Video Games, Image and Creativity (MAJIC)</h3>
          <h4>Master's Degree</h4>
          <h4 className="italic">09.22 - 09.24</h4>
          <a
            className="italic underline text-pink-300"
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

        <div className="flex flex-col mr-8 ml-8 gap-2">
          <h2>Université Grenoble Alpes</h2>
          <h3>Computer Science Methods for Business Management (MIAGE)</h3>
          <h4>Bachelor's Degree</h4>
          <h4 className="italic">09.17 - 09.22</h4>
          <a
            className="italic underline text-pink-300"
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

      <br />
      <hr className="border-t border-gray-300 my-6" />
      <br />
      {/* ---------------------------- GAME ENGINES ---------------------------- */}
      <h1 className="text-balance">Game Engines</h1>
      <div className="flex flex-col flex-wrap items-center gap-8">
        <div className="w-[100%] flex flex-row flex-wrap items-center justify-around gap-32 m-16">
          <a
            className="italic underline text-pink-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://unity.com"
          >
            <img
              className="max-w-[300px] max-h-[300px]"
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
              className="max-w-[200px] max-h-[200px]"
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
              className="max-w-[300px] max-h-[300px]"
              src="https://upload.wikimedia.org/wikipedia/commons/a/ac/GD-logo-big.png?20200730084519"
            />
          </a>
        </div>
      </div>
      <br />
      <hr className="border-t border-gray-300 my-6" />
      <br />
      {/* ---------------------------- ART TOOLS ---------------------------- */}
      <h1 className="text-balance">Art Tools</h1>
      <div className="flex flex-col flex-wrap items-center gap-8">
        <div className="flex flex-row items-center justify-around gap-16 md:gap-x-32 lg:gap-x-64 flex-wrap">
          <img
            className="max-w-[100px] max-h-[100px] md:max-w-[160px] md:max-h-[160px] lg:max-w-[220px] lg:max-h-[220px]"
            src="https://download.blender.org/branding/community/blender_community_badge_white.png"
          />
          <img
            className="max-w-[100px] max-h-[100px] md:max-w-[160px] md:max-h-[160px] lg:max-w-[220px] lg:max-h-[220px]"
            src="https://www.altam.fr/wp-content/uploads/2024/01/autodesk-3ds-max-small-social-400.png"
          />
          <img
            className="max-w-[100px] max-h-[100px] md:max-w-[160px] md:max-h-[160px] lg:max-w-[220px] lg:max-h-[220px]"
            src="https://www.altam.fr/wp-content/uploads/2024/01/autodesk-maya-small-social-400.png"
          />
          <img
            className="max-w-[100px] max-h-[100px] md:max-w-[160px] md:max-h-[160px] lg:max-w-[220px] lg:max-h-[220px]"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png"
          />
          <img
            className="max-w-[100px] max-h-[100px] md:max-w-[160px] md:max-h-[160px] lg:max-w-[220px] lg:max-h-[220px]"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1051px-Adobe_Illustrator_CC_icon.svg.png"
          />
          <img
            className="max-w-[100px] max-h-[100px] md:max-w-[160px] md:max-h-[160px] lg:max-w-[220px] lg:max-h-[220px]"
            src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
          />
        </div>
      </div>
      <br />
      <hr className="border-t border-gray-300 my-6" />
      <br />
      {/* ---------------------------- OTHER TOOLS ---------------------------- */}
      <h1 className="text-balance">Other Tools</h1>
      <div className="flex flex-col flex-wrap items-center gap-8">
        <div className="m-16 flex flex-row items-center justify-around gap-64 flex-wrap">
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
      <br />
      <h1 className="text-balance">Languages - Programming</h1>
      <div className="flex flex-col flex-wrap items-center gap-8">
        <div className="m-16 flex flex-row items-center justify-around gap-32 md:gap-x-64 flex-wrap">
          <img
            className="max-w-[150px] max-h-[150px] lg:max-w-[175px] lg:max-h-[175px]"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png"
          />
          <img
            className="max-w-[150px] max-h-[150px] lg:max-w-[175px] lg:max-h-[175px]"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"
          />
          <img
            className="max-w-[200px] max-h-[200px] lg:max-w-[250px] lg:max-h-[250px]"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png"
          />
          <img
            className="max-w-[150px] max-h-[150px] lg:max-w-[175px] lg:max-h-[175px]"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          />
          <img
            className="max-w-[150px] max-h-[150px] lg:max-w-[175px] lg:max-h-[175px]"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
          />
          <img
            className="max-w-[150px] max-h-[150px] lg:max-w-[175px] lg:max-h-[175px]"
            src="https://static-00.iconduck.com/assets.00/sql-database-generic-icon-1521x2048-d0vdpxpg.png"
          />
          <img
            className="max-w-[150px] max-h-[150px] lg:max-w-[175px] lg:max-h-[175px]"
            src="https://cdn-icons-png.flaticon.com/512/9496/9496555.png"
          />
        </div>
      </div>

      {/* ---------------------------- SPOKEN LANGUAGES ---------------------------- */}
      <br />
      <hr className="border-t border-gray-300 my-6" />
      <br />
      <h1 className="text-balance">Languages - Spoken</h1>
      <div className="flex flex-col flex-wrap items-center gap-8">
        <div className="m-16 flex flex-row items-start justify-between gap-16 md:gap-x-32 flex-wrap">
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
