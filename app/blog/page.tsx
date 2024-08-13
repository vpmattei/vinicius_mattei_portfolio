import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Games",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section className="prose ml-8 mr-8">
      <h1>Games</h1>
      <h2>Hebald Forest</h2>
      <p className="text-xl indent-8 text-justify">
      {`During my second year in the MAJIC program (Management of Video Games, Image, and Creativity)
        at Université Côte d'Azur, I had the opportunity to contribute to the creation of Hebald Forest, 
        an expansive open-world game. This project was a testament to the capabilities of Unreal Engine 5, 
        utilizing cutting-edge features such as Lumen and Nanite, among other advanced technologies, 
        to bring our visionary world to life.`}
      </p>
      <p className="text-xl indent-8 text-justify">
      {`The development of Hebald Forest was a collaborative endeavor involving 19 talented individuals 
        across various disciplines, including development, 2D/3D art, game design, level design, 
        sound design, UI design, and more. My role in this project was multifaceted, allowing me to engage 
        with nearly every aspect of game development. My contributions ranged from modeling 3D assets and 
        implementing sound effects and music, to designing portions of the game level and enhancing puzzle 
        mechanics through UE5's blueprint system.`}
      </p>
      <p className="text-xl indent-8 text-justify">
      {`In addition to my hands-on work in game development, I played a crucial leadership role, managing 
        the project alongside two colleagues. My responsibilities included coordinating meetings, 
        delegating tasks, monitoring progress, and steering the overall direction of the project.`}
      </p>

      <p className="text-xl indent-8 text-justify">
      {`My involvement in Hebald Forest spanned several key roles:`}
      </p>
      
      <ul className="text-xl indent-8 text-justify">
        <li>Project Manager: Leading the team to ensure the project's vision came to fruition efficiently and effectively.</li>
        <li>Sound Designer: Implementing the auditory experience using Wwise, from ambient sounds to the dynamic soundtrack.</li>
        <li>Game Designer: Making sure the game feel was right and talking constantly with the developers to fine tune some mechanics.</li>
        <li>Level Designer: Constructing the base of the level and modifying a few more specific locations in the level.</li>
        <li>Developer: Implementing a few minor mechanics, specifically one used in a puzzle.</li>
      </ul>

      <p className="text-xl indent-8 text-justify">
        {`Hebald Forest was not just a project; it was a comprehensive platform for me to apply and expand my skills in game development, showcasing the potential of collaborative creativity powered by Unreal Engine 5.`}
      </p>
      <BlogPosts />
    </section>
  );
}
