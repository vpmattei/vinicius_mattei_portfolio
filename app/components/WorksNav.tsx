"use client";

import React from "react";

type WorkItem = {
    slug: string;            // e.g. "hebald-forest"
    title: string;           // e.g. "Hebald Forest"
};

const WORKS_INDEX: WorkItem[] = [
    { slug: "hebald-forest", title: "Hebald Forest" },
    { slug: "anamnesis", title: "Anamnesis" },
    { slug: "procedural-walk-animation", title: "Procedural Leg Animation" },
    { slug: "past-self-gmtk-2025", title: "Past Self – GMTK 2025" },
    { slug: "pokedex-app", title: "Pokédex App" },
    { slug: "kentyou", title: "Kentyou Dashboard Redesign" },
    { slug: "podcastr", title: "Podcastr Platform" },
    // add/remove/reorder here only
];

type WorksNavProps = {
    /** current page slug, e.g. "hebald-forest" */
    currentSlug: string;
    /** wrap to first/last when at the ends */
    wrap?: boolean;
};

const LeftArrow = () => (
    <img
        className="h-[50px]"
        src="https://cdn.prod.website-files.com/63ea7102bccb5ef39bb53f01/640f47a0e5c6852030f01aef_arrow%20svg%20left.svg"
        alt="Previous"
    />
);

const RightArrow = () => (
    <img
        className="h-[50px]"
        src="https://cdn.prod.website-files.com/63ea7102bccb5ef39bb53f01/640f4647eec4474635c0cee7_arrow%20svg%20right.svg"
        alt="Next"
    />
);

export default function WorksNav({ currentSlug, wrap = true }: WorksNavProps) {
    const idx = WORKS_INDEX.findIndex(w => w.slug === currentSlug);

    // If not found, render nothing (or a simple back link if you prefer)
    if (idx === -1) return null;

    const prevIdx = idx - 1;
    const nextIdx = idx + 1;

    const prev =
        prevIdx >= 0
            ? WORKS_INDEX[prevIdx]
            : wrap
                ? WORKS_INDEX[WORKS_INDEX.length - 1]
                : null;

    const next =
        nextIdx < WORKS_INDEX.length
            ? WORKS_INDEX[nextIdx]
            : wrap
                ? WORKS_INDEX[0]
                : null;

    return (
        <div className="px-8 flex md:flex-row flex-col justify-between w-[100vw]">
            <div className="flex flex-col items-start w-[100%]">
                {prev ? (
                    <a
                        className="font-fraunces-light-i text-pink-200 hover:text-3xl hover:text-pink-400 text-2xl flex flex-row items-center gap-3 min-w-[10rem]"
                        href={`/works/${prev.slug}`}
                    >
                        <LeftArrow />
                        PREVIOUS PROJECT
                    </a>
                ) : (
                    <span className="opacity-40 select-none">—</span>
                )}
            </div>

            <div className="flex flex-col items-end w-[100%]">
                {next ? (
                    <a
                        className="font-fraunces-light-i text-green-300 hover:text-3xl hover:text-green-500 text-2xl flex flex-row items-center gap-3 min-w-[7rem]"
                        href={`/works/${next.slug}`}
                    >
                        NEXT PROJECT
                        <RightArrow />
                    </a>
                ) : (
                    <span className="opacity-40 select-none">—</span>
                )}
            </div>
        </div>
    );
}