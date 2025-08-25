import React from "react";
import ContactForm from "./ContactForm";

export const metadata = {
    title: "Contact Me",
    description: "Send a message to Vinícius Mattei.",
};

const Page = () => {
    return (
        <section className="prose mx-8 sm:mx-12 md:mx-16 lg:mx-32 mt-32 flex flex-col items-center gap-12 px-8">
            <h1>Contact me</h1>
            <div className="flex flex-row items-end gap-16">
                <a
                    className="flex flex-col items-center gap-2 transition-colors text-white/95 hover:text-pink-400"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/viniciuspmattei/"
                >
                    <img
                        className="max-w-[3rem] sm:max-w-[4rem] md:max-w-[5rem]"
                        src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/work-pages-redesign/assets/logos/websites/linkedin.png?raw=true"
                        alt="LinkedIn"
                    />
                    <div>LinkedIn</div>
                </a>
                <a
                    className="flex flex-col items-center gap-2 transition-colors text-white/95 hover:text-pink-400"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/vpmattei"
                >
                    <img
                        className="max-w-[4rem] sm:max-w-[5rem] md:max-w-[6rem]"
                        src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/work-pages-redesign/assets/logos/websites/github.png?raw=true"
                        alt="GitHub"
                    />
                    <div>GitHub</div>
                </a>

            </div>
            <h2 className="text-center text-4xl font-bold">Send me a message</h2>
            <ContactForm />
        </section>
    );
};

export default Page;