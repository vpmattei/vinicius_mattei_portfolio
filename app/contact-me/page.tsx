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
            <div className="flex flex-row items-end gap-8">
                <img
                    src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/work-pages-redesign/assets/logos/websites/linkedin.png?raw=true"
                    alt="LinkedIn"
                />
                <p>LinkedIn</p>
                <img
                    src="https://raw.githubusercontent.com/vpmattei/vinicius_mattei_portfolio/refs/heads/work-pages-redesign/assets/logos/websites/github.png?raw=true"
                    alt="GitHub"
                />
                <p>GitHub</p>

            </div>
            <h2 className="text-center text-4xl font-bold">Send me a message</h2>
            <ContactForm />
        </section>
    );
};

export default Page;