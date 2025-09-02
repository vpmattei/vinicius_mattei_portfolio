import React from "react";
import ArrowIcon from "app/components/ArrowIcon";
import ImageDisplay from "app/components/ImageDisplay";
import WorksNav from "app/components/WorksNav";

export const metadata = {
    title: "Past Self – GMTK Game Jam 2025",
    description:
        "Platformer where your past runs help you reach the goal. Designed and developed in 4 days for GMTK 2025.",
};

const pastSelfHero =
    "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/past_self_images/past_self_main_image.png?raw=true";

const pastSelfImages = {
    gallery: [
        "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/past_self_images/past_self_01.png?raw=true",
        "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/past_self_images/past_self_02.png?raw=true",
        "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/past_self_images/past_self_03.png?raw=true",
    ],
};

const UIImages = {
    gallery: [
        "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/past_self_images/menu.png?raw=true",
        "https://github.com/vpmattei/vinicius_mattei_portfolio/blob/main/assets/past_self_images/settings.png?raw=true",
    ]
}

const Page: React.FC = () => {
    return (
        <section className="prose mx-6 sm:mx-8 md:mx-16 lg:mx-24 flex flex-col items-center gap-16">
            <div className="w-full flex flex-col items-start gap-4 md:gap-16">
                {/* Title and Main Image */}
                <div className="w-full flex flex-row items-end gap-2">
                    {/* LEFT */}
                    <div className="w-3/8 flex items-start">
                        <div className="flex flex-col items-start">
                            <img
                                className="max-w-[100%] sm:max-w-[70%] md:max-w-[60%]"
                                src={pastSelfHero}
                                alt="Past Self – Main"
                            />
                            <h1 className="mt-4 mb-2">Past Self</h1>
                            <h3 className="mt-0 mb-2">GMTK Game Jam 2025 – Project Breakdown</h3>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="w-5/8">
                        <div className="flex flex-col items-center">
                            <ImageDisplay src={pastSelfImages.gallery[0]} />
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
                                <li>Team Size: 3</li>
                                <li>Duration: 4 days (Jam)</li>
                                <li>
                                    <a
                                        className="flex gap-1 items-center transition-colors text-white/95 hover:text-pink-400"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        href="https://hinoga.itch.io/past-self"
                                    >
                                        Itch.io Page <ArrowIcon size={12} />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Team */}
                        <div className="p-2 md:p-4 shadow-xl">
                            <h4>Team</h4>
                            <div>
                                <p>The team consisted of <b>3</b> members:</p>
                                <ul>
                                    <li>2 Developers</li>
                                    <li>1 Level Designer</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="w-6/8">
                        {/* Brief */}
                        <div className="p-2 md:p-4 shadow-xl">
                            <h4>Brief</h4>
                            <p>
                                <b>Past Self</b> is a time‑loop <b>puzzle‑platformer</b> created for the <b>GMTK Game Jam 2025</b>. Each run lasts only a few seconds; when the timer ends, a ghost of your <b>past self</b> replays your actions, letting you cooperate with previous runs to open doors, press buttons, and collect keys to reach the exit.
                            </p>
                        </div>

                        {/* Project Goals */}
                        <div className="p-2 md:p-4 shadow-xl">
                            <h4>Project Goals</h4>
                            <p>
                                Deliver a <b>jam‑ready prototype</b> that clearly communicates the <b>time‑loop cooperation</b> mechanic, with a short, polished flow: readable goals, tight timers, simple inventory/keys, and fast iteration on level design.
                            </p>
                            <br />
                            <div className="w-full flex flex-row">
                                <div className="w-1/2">
                                    <h6 className="mb-2">Primary responsibilities</h6>
                                    <ul>
                                        <li>Core Loop & Level Scripting</li>
                                        <li>Key & Inventory Systems</li>
                                        <li>UI & Settings (Music/SFX)</li>
                                        <li>Music Composition & Integration</li>
                                    </ul>
                                </div>
                                <div className="w-1/2">
                                    <h6 className="mb-2">Other hats</h6>
                                    <ul>
                                        <li>Bug Fixing & Polish</li>
                                        <li>Player Feel Tuning</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Takeaways */}
                        <div className="p-2 md:p-4 shadow-xl">
                            <h4>Takeaways</h4>
                            <p>
                                Short jams reward <b>scope control</b> and <b>clear feedback</b>. Tight timers plus readable doors/buttons made the loop click; a simple audio mix and options helped keep the experience <b>cohesive</b> under time pressure.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Features (mirrors “Game Mechanics”) */}
            <div className="w-full flex flex-col items-start gap-4 md:gap-16">
                <h2>Key Features</h2>

                {/* Core Loop */}
                <div className="w-full flex flex-col items-start p-2 md:p-4 shadow-2xl md:gap-8">
                    <h3>1. Time‑Loop Cooperation</h3>

                    <div className="w-full mt-4 flex flex-col md:flex-row items-start gap-2">
                        <div className="w-full md:w-1/2 flex flex-row md:flex-col items-center gap-2">
                            <div className="w-3/5 md:w-full">
                                <ImageDisplay src={pastSelfImages.gallery[0]} gallery={pastSelfImages.gallery} index={0} />
                            </div>
                            <div className="w-2/5 md:w-full">
                                <p className="md:text-center">
                                    Short runs (5–15s) create a recording; your past self repeats actions to hold buttons or open paths.
                                </p>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 flex flex-row md:flex-col items-center gap-2">
                            <div className="w-3/5 md:w-full">
                                <ImageDisplay src={pastSelfImages.gallery[1]} gallery={pastSelfImages.gallery} index={1} />
                            </div>
                            <div className="w-2/5 md:w-full">
                                <p className="md:text-center">
                                    Keys and doors form simple goals; cooperation with previous runs solves otherwise impossible routes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* My Contributions */}
            <div className="w-full flex flex-col items-start p-4 gap-4 md:gap-16">
                <h2>My Contributions</h2>

                {/* UI */}
                <h3>1. UI Integration</h3>
                <div className="w-full flex flex-col items-start p-2 md:p-4 md:gap-8">
                    <div className="w-full mt-4 flex flex-col md:flex-row items-start gap-2">

                        <div className="w-full md:w-1/2 flex flex-row md:flex-col items-center gap-2">
                            <div className="w-3/5 md:w-full">
                                <ImageDisplay src={UIImages.gallery[0]} gallery={UIImages.gallery} index={0} />
                            </div>
                            <div className="w-2/5 md:w-full">
                                <p className="md:text-center">
                                    Main menu UI, with play, settings and quit buttons.
                                </p>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 flex flex-row md:flex-col items-center gap-2">
                            <div className="w-3/5 md:w-full">
                                <ImageDisplay src={UIImages.gallery[1]} gallery={UIImages.gallery} index={1} />
                            </div>
                            <div className="w-2/5 md:w-full">
                                <p className="md:text-center">
                                    Minimal UI with <b>Music/SFX sliders</b>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>2. Other stuff</h3>
                <div className="w-full flex flex-col items-start p-2 md:p-4 shadow-2xl">
                    <ul>
                        <li>Designed & implemented the <b>key collection</b> and <b>inventory</b> logic</li>
                        <li>Helped build and tune <b>core player mechanics</b></li>
                        <li>Composed and integrated the <b>background music</b></li>
                        <li>Fixed various <b>game‑breaking bugs</b> and added polish</li>
                    </ul>
                </div>
            </div>

            {/* Footer Nav */}
            <WorksNav currentSlug="past-self-gmtk-2025" />
        </section>
    );
};

export default Page;