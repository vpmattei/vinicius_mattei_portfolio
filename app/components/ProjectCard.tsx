// app/components/ProjectCard.tsx
import Link from "next/link";
import React from "react";

type ProjectCardProps = {
    /** Left or right side for the media box */
    imageSide?: "left" | "right";
    /** 16:9 image or video (use an <img> src or an iframe) */
    media: React.ReactNode;
    /** Small square/rect logo above the title */
    logoSrc?: string;
    title: string;
    role?: string;
    kicker?: string; // short one-liner under role
    summary?: string; // 2–3 sentence blurb
    meta?: Array<{ label: string; value: string }>;
    bullets?: string[];
    cta?: { label: string; href: string };
    badgeSrc?: string; // e.g. Steam badge
    href?: string; // click-through for title
};

export default function ProjectCard({
    imageSide = "right",
    media,
    logoSrc,
    title,
    role,
    kicker,
    summary,
    meta,
    bullets,
    cta,
    badgeSrc,
    href,
}: ProjectCardProps) {
    return (
        <section className="w-full max-w-[80rem] flex items-stretch gap-4 p-4 shadow-xl rounded-lg bg-[#171415]/60">
            {/* Media – fixed, fluid width; never grows */}
            <div className="w-[clamp(220px,40vw,420px)] shrink-0">
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
                    {/* img / iframe */}
                    <img src="..." alt="" className="absolute inset-0 w-full h-full object-cover" />
                </div>
            </div>

            {/* Text Block */}
            <div className="flex-1 min-w-0 flex flex-col justify-between">
                <div className="min-w-0">
                    {logoSrc ? (
                        <img src={logoSrc} alt="" className="h-12 mb-2 pointer-events-none select-none" />
                    ) : null}

                    {href ? (
                        <Link href={href}>
                            <h3 className="text-2xl leading-tight hover:opacity-90 transition-opacity">{title}</h3>
                        </Link>
                    ) : (
                        <h3 className="text-2xl leading-tight">{title}</h3>
                    )}

                    {role ? <p className="opacity-80">{role}</p> : null}
                    {kicker ? <p className="mt-2 font-medium">{kicker}</p> : null}
                    {summary ? <p className="mt-2">{summary}</p> : null}

                    {meta?.length ? (
                        <ul className="mt-3 space-y-1">
                            {meta.map((m, i) => (
                                <li key={i}>
                                    <b>{m.label}:</b> {m.value}
                                </li>
                            ))}
                        </ul>
                    ) : null}

                    {bullets?.length ? (
                        <ul className="mt-3 list-disc list-inside space-y-1">
                            {bullets.map((b, i) => (
                                <li key={i}>{b}</li>
                            ))}
                        </ul>
                    ) : null}
                </div>

                {/* CTA / Badge row */}
                {(badgeSrc || cta) && (
                    <div className="mt-4 flex items-center justify-between">
                        {badgeSrc ? <img src={badgeSrc} alt="" className="h-8 opacity-90" /> : <span />}
                        {cta ? (
                            <a
                                href={cta.href}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/15 hover:border-white/30 transition-colors"
                            >
                                {cta.label}
                                <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-80">
                                    <path fill="currentColor" d="m13 5l7 7l-7 7l-1.4-1.4l4.6-4.6H4v-2h12.2l-4.6-4.6z" />
                                </svg>
                            </a>
                        ) : null}
                    </div>
                )}
            </div>
        </section>
    );
}