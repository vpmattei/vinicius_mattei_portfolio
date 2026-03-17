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
                            Beyond implementing the NPC behavior itself, I focused on making the patrol system
                            <b> fully configurable without touching any code</b>. In a game jam with a tight deadline,
                            the Level Designer needed to be able to place patrol routes, tweak timings, and iterate
                            quickly, so I built a set of custom Unity Inspector components that exposed all the
                            relevant controls directly in the editor.
                        </p>
                        <p>
                            Each point along a patrol route is a <b>Patrol Spot</b>, a standalone component
                            I created with its own Inspector settings. The designer can set exactly <b>how many
                            seconds the Mother NPC idles</b> at that spot before moving on, and customize the
                            editor gizmo's <b>color and radius</b> so patrol points are easy to identify and
                            distinguish in the scene view at a glance.
                        </p>
                        <p>
                            The route itself is managed by a <b>Mother Patrol Controller</b> component, where
                            the designer assigns any number of Patrol Spots in order and configures two key
                            behaviors: the <b>Patrol Type</b>, either <b>Linear</b> (the NPC cycles through
                            spots in order: 1 → 2 → 3 → 1 → 2 → 3…) or <b>Ping Pong</b> (the NPC reverses
                            direction at each end: 1 → 2 → 3 → 2 → 1 → 2 → 3…), and the <b>Looping</b>{" "}
                            behavior, whether the patrol runs indefinitely, stops after a set number of cycles,
                            or plays through only once. This gave the designer <b>full creative control</b> over
                            the NPC's movement with no programming required.
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
                                The <b>Patrol Spot</b> component Inspector, each waypoint exposes a <b>Wait For Seconds</b> slider
                                controlling how long the NPC idles at that point, plus <b>Gizmo Color</b> and <b>Gizmo Radius</b> so 
                                the designer can visually distinguish patrol points directly in the scene view.
                            </p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col md:flex-row items-center gap-4 my-8">
                        <div className="w-full md:w-1/3">
                            <p className="md:text-center">
                                <ImageDisplay src={patrolPathsParameters01.image} />
                                The <b>Patrol Type</b> dropdown on the <b>Mother Patrol Controller</b>, set to <b>Linear</b> here
                                (1 → 2 → 3 → 1 → 2 → 3…). Switching to <b>Ping Pong</b> makes the NPC reverse at each
                                end instead (1 → 2 → 3 → 2 → 1 → 2 → 3…).
                            </p>
                        </div>
                        <div className="w-full md:w-1/3">
                            <p className="md:text-center">
                                <ImageDisplay src={patrolPathsParameters02.image} />
                                The <b>Looping</b> dropdown, available for both patrol types, lets the designer choose
                                between <b>Do Not Loop</b>, <b>Loop N Times</b>, or <b>Loop Infinitely</b>,
                                controlling whether the patrol runs once, a fixed number of cycles, or forever.
                            </p>
                        </div>
                        <div className="w-full md:w-1/3">
                            <p className="md:text-center">
                                <ImageDisplay src={patrolPathsParameters03.image} />
                                Selecting <b>Loop N Times</b> reveals a <b>Loops (cycles)</b> field, here set to 3, so the
                                designer can specify exactly how many full patrol cycles the NPC completes before stopping,
                                without writing a single line of code.
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
                <h2>Play our Game! :)</h2>
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