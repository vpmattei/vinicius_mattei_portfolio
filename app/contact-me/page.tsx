import React from "react";
import ContactForm from "./ContactForm";

export const metadata = {
    title: "Contact Me",
    description: "Send a message to Vinícius Mattei.",
};

const Page = () => {
    return (
        <section className="prose mx-24 lg:mx-32 mt-32 flex flex-col items-center gap-12 px-8">
            <h1 className="text-center text-4xl font-bold">Contact Me</h1>
            <ContactForm />
        </section>
    );
};

export default Page;