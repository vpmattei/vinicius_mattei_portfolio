import React from "react";
import ArrowIcon from "app/components/ArrowIcon";
import ImageDisplay from "app/components/ImageDisplay";
import WorksNav from "app/components/WorksNav";

export const metadata = {
    title: "Where the Cookies At?",
    description: "Stealth game made for Brackeys Game Jam 2025.2",
};

const heroImage = {
    image: "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/where_the_cookies_at/hero_image.png?raw=true"
};

const motherMovementGif = {
    gif: "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/where_the_cookies_at/mother_movement.gif?raw=true",
};

const motherFovGif = {
    gif: "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/where_the_cookies_at/mother_fov_detection.gif?raw=true",
};

const motherPlayerDetectionGif = {
    gif: "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/where_the_cookies_at/mother_player_detection.gif?raw=true",
};

const cookiesInteractionGif = {
    gif: "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/where_the_cookies_at/cookies_interaction_UI.gif?raw=true",
};

const gameplayImage = {
    image: "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/where_the_cookies_at/gameplay.gif?raw=true",
};

// Patrol Paths/Spots Screenshots

const patrolSpotParameters = {
    image: "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/where_the_cookies_at/patrol_spot_parameters.png?raw=true"
}

const patrolPathsParameters01 = {
    image: "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/where_the_cookies_at/patrol_paths_parameters_01.png?raw=true"
}

const patrolPathsParameters02 = {
    image: "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/where_the_cookies_at/patrol_paths_parameters_02.png?raw=true"
}

const patrolPathsParameters03 = {
    image: "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/where_the_cookies_at/patrol_paths_parameters_03.png?raw=true"
}

const patrolSpotsInGame = {
    image: "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/where_the_cookies_at/patrol_spots_in_game.png?raw=true"
}

const Page: React.FC = () => {
    return (
        <section className="prose mx-6 sm:mx-8 md:mx-16 lg:mx-24 flex flex-col items-center gap-16">
            <div className="w-full flex flex-col items-start gap-4 md:gap-16">
                {/* Title and Main Image */}
                <div className="w-full flex flex-row items-end gap-2">
                    {/* LEFT */}
                    <div className="w-4/8 flex items-start">
                        <div className="flex flex-col items-start">
                            <h1 className="mt-4 mb-2">Where the Cookies At?</h1>
                            <h3 className="mt-0 mb-2">Brackeys Game Jam 2025.2</h3>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="w-4/8">
                        <div className="flex flex-col items-center">
                            <ImageDisplay src={heroImage.image} />
                        </div>
                    </div>
                </div>

                {/* Project Description */}
                <div className="w-full flex flex-row items-start gap-2">
                    {/* LEFT */}
                    <div className="w-2/8">
                        {/* Info */}
                        <div className="p-2 md:p-4 shadow-xl">
                            <ul>
                                <li>Platform: PC</li>
                                <li>Engine: Unity 6.2</li>
                                <li>Team Size: 5</li>
                                <li>Duration: 7 Days</li>
                                <li>
                                    <a
                                        className="flex gap-1 items-center transition-colors text-white/95 hover:text-pink-400"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        href="https://itch.io/jam/brackeys-14/rate/3850002"
                                    >
                                        Game Jam Page <ArrowIcon size={12} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="w-6/8">
                        {/* Brief */}
                        <div className="p-2 md:p-4 shadow-xl">
                            <h4>Brief</h4>
                            <p>
                                <b>Where the Cookies At?</b> is a stealth game made for{" "}
                                <b>Brackeys Game Jam 2025.2</b>. The player must sneak to eat cookies
                                without being caught by the <b>mother NPC</b>, who patrols the
                                level and reacts to the player’s movements. My primary
                                contribution was <b>designing and implementing the NPC behavior</b>,
                                as well as adding <b>UI interaction feedback</b> for the cookies.
                            </p>
                        </div>

                        {/* Project Goals */}
                        <div className="p-2 md:p-4 shadow-xl">
                            <h4>Project Goals</h4>
                            <p>
                                Build a <b>playable stealth prototype</b> for the Brackeys Game Jam 2025.2 that focused on
                                <b> NPC behavior</b>, <b>cookie interaction</b>, and <b>player feedback</b>. The goal was to create
                                a short but complete loop where the player sneaks and tries to eat all the cookies while avoiding
                                the mother NPC, supported by clear UI, patrol logic, and detection states.
                            </p>
                            <br />
                            <div className="w-full flex flex-row">
                                <div className="w-1/2">
                                    <h6 className="mb-2">Primary responsibilities</h6>
                                    <ul>
                                        <li><b>NPC State Machine</b> (patrol, detection, catch, cooldown)</li>
                                        <li><b>Field of View</b> & Player Detection</li>
                                        <li><b>Visual Feedback</b> (icons, exclamation/question marks)</li>
                                        <li>Cookie Interaction <b>UI</b> & <b>Counter</b></li>
                                    </ul>
                                </div>
                                <div className="w-1/2">
                                    <h6 className="mb-2">Other hats</h6>
                                    <ul>
                                        <li>Gameplay Scripting & Integration</li>
                                        <li>Bug Fixing & Polish</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gameplay */}
            <div className="w-full flex flex-col items-start p-4 gap-4 md:gap-16 shadow-2xl">
                <h2>Gameplay</h2>
                <div className="self-center w-full aspect-video max-w-4xl">
                    <ImageDisplay src={gameplayImage.image} />
                </div>
            </div>

            {/* My Contributions */}
            <div className="w-full flex flex-col items-start gap-4 md:gap-16">
                <h2>My Contributions</h2>

                {/* NPC Movement */}
                <div className="w-full flex flex-col items-start p-2 md:p-4 shadow-2xl gap-16">
                    <h3>1. NPC Patrol Movement</h3>
                    <div className="w-full flex flex-col md:flex-row items-center gap-4">
                        <div className="w-full md:w-2/3">
                            <ImageDisplay src={motherMovementGif.gif} />
                        </div>
                        <div className="w-full md:w-1/3">
                            <p className="md:text-center">
                                Built the <b>NPC’s patrol system</b> using the NavMesh, with
                                flexible patrol patterns. The mother could either <b>ping-pong</b>{" "}
                                (1 → 2 → 3 → 2 → 1) or <b>loop</b> (1 → 2 → 3 → 1 → 2 → 3) along
                                waypoints.
                            </p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-4">
                        <h4>Helping the designer</h4>
                        <p>
                            When developing the AI for the Mother NPC, I wanted to create the system for placing each Patrol Spot and setting up
                            the Patrol Path as easy as possible for our Level Designer.
                        </p>
                        <p>
                            Therefore, I created an easy-to-implement Inspector, so that the Level Designer had full control of the AI movement 
                            and could easily change the Patrol Spots visuals as well, like changing the color, radius but also being able to control 
                            the amount of seconds the NPC would spend on each Spot.
                        </p>
                        <p>
                            I also enabled the Level Designer to change the order in which the NPC would loop the waypoints, like going in a ping-pong pattern 
                            or a in a linear pattern. This way, our Level Designer had <b>full creative control</b> on whatever he wanted to do next.
                        </p>
                    </div>

                    <div className="w-full h-[15rem] flex flex-col md:flex-row items-center gap-4 my-24">
                        <div className="w-full md:w-1/3 h-full">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/KcUYTIWLOS0?autoplay=1&mute=1&loop=1&playlist=KcUYTIWLOS0"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="w-full md:w-2/3">
                            <p className="md:text-center">
                                <ImageDisplay src={patrolSpotParameters.image} />
                                Patrol Spot Parameters where you could set the <b>amount of seconds</b> the Mother would spend idle on the spot,
                                the <b>radius</b> of the gizmo shown in the editor view and its <b>color</b>.
                            </p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col md:flex-row items-center gap-4 my-8">
                        <div className="w-full md:w-1/3">
                            <p className="md:text-center">
                                <ImageDisplay src={patrolPathsParameters01.image} />
                                I madeParameters
                            </p>
                        </div>
                        <div className="w-full md:w-1/3">
                            <p className="md:text-center">
                                <ImageDisplay src={patrolPathsParameters02.image} />
                                Bla bla bla bla bla bla
                            </p>
                        </div>
                        <div className="w-full md:w-1/3">
                            <p className="md:text-center">
                                <ImageDisplay src={patrolPathsParameters03.image} />
                                Bla bla bla bla bla bla
                            </p>
                        </div>
                    </div>
                </div>

                {/* NPC FOV Detection */}
                <div className="w-full flex flex-col items-start p-2 md:p-4 shadow-2xl gap-8">
                    <h3>2. Field of View Detection</h3>
                    <div className="w-full flex flex-col md:flex-row items-center gap-4">
                        <div className="w-full md:w-2/3">
                            <ImageDisplay src={motherFovGif.gif} />
                        </div>
                        <div className="w-full md:w-1/3">
                            <p className="md:text-center">
                                Implemented a <b>field of view system</b> that detects the
                                player within a radius and angle (e.g., 5m at 90°). After{" "}
                                <b>0.5s</b> of visibility, the player is considered <b>caught</b>,
                                leading to game over.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Player Detection Feedback */}
                <div className="w-full flex flex-col items-start p-2 md:p-4 shadow-2xl gap-8">
                    <h3>3. Player Detection Feedback</h3>
                    <div className="w-full flex flex-col md:flex-row items-center gap-4">
                        <div className="w-full md:w-2/3">
                            <ImageDisplay src={motherPlayerDetectionGif.gif} />
                        </div>
                        <div className="w-full md:w-1/3">
                            <p className="md:text-center">
                                Added <b>visual cues</b> when the mother detects the player:
                                an exclamation mark animates above her head, she rotates to face
                                the player, and her movement halts while she is in the{" "}
                                <b>detection state</b>.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Cookie Interaction UI */}
                <div className="w-full flex flex-col items-start p-2 md:p-4 shadow-2xl gap-8">
                    <h3>4. Cookie Interaction UI</h3>
                    <div className="w-full flex flex-col md:flex-row items-center gap-4">
                        <div className="w-full md:w-2/3">
                            <ImageDisplay src={cookiesInteractionGif.gif} />
                        </div>
                        <div className="w-full md:w-1/3">
                            <p className="md:text-center">
                                Improved <b>cookie interaction feedback</b> by displaying an{" "}
                                <b>E-button prompt</b> when near cookies, plus a{" "}
                                <b>cookie counter</b> that decreases from 13 to 0 with smooth
                                fade-in/out transitions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Play Our Game */}
            <a
                className="flex gap-1 items-center transition-colors text-white/95 hover:text-pink-400"
                rel="noopener noreferrer"
                target="_blank"
                href="https://hinoga.itch.io/where-the-cookies-at"
            >
                <h2><ArrowIcon size={18} />Play our Game!</h2>
            </a>

            {/* Post Mortem */}
            <div className="p-2 md:p-4 shadow-xl">
                <h4>Post Mortem</h4>
                <p>
                    The jam showed the importance of <b>scope control</b>. Even simple interactions like grabbing a
                    cookie required UI, counters, HUD elements, and sound effects, which added more work than
                    expected. While ambitious, the project reinforced how a <b>smaller scope with more mechanics</b>{" "}
                    can sometimes deliver stronger results. Still, the team delivered a <b>fun, cohesive prototype</b>{" "}
                    under time pressure.
                </p>
            </div>

            {/* Footer Nav */}
            <WorksNav currentSlug="where-the-cookies-at" />
        </section>
    );
};

export default Page;