import React from "react";

export const metadata = {
  title: "Works",
  description: "Works done in Companies and in the University.",
};

const Page: React.FC = () => {
  return (
    <section className="prose ml-8 mr-8 flex flex-col items-center gap-16">
      <h1>Works</h1>
      <div>
        <a
          className="flex flex-row items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          href="/works/hebald-forest"
        >
          <img
            src="https://ludhic.fr/wp-content/uploads/2024/03/HebaldForest_Logo.png"
            alt="Hebald Forest Logo"
            style={{ width: 500 }}
          />
          <h2>Hebald Forest</h2>
        </a>
      </div>
      <div>
        <a
          className="flex flex-row items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          href="/works/anamnesis"
        >
          <img
            src="https://ludhic.fr/wp-content/uploads/2023/01/Anamnesis.webp"
            alt="Anamnesis Logo"
            style={{ width: 350 }}
          />
          <h2>Anamnesis</h2>
        </a>
      </div>
      <div>
        <a
          className="flex flex-row items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          href="/works/tangled-tales"
        >
          <img
            src="https://i.ibb.co/PcBZMtb/livretangledtales2.png"
            alt="Anamnesis Logo"
            style={{ width: 350 }}
          />
          <h2>Tangled Tales</h2>
        </a>
      </div>
      <div>
        <a
          className="flex flex-row items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          href="/works/kentyou"
        >
          <img
            src="https://pbs.twimg.com/profile_images/1328342235038048263/gHLzQIHN_400x400.png"
            alt="Kentyou Logo"
            style={{ width: 300 }}
          />
          <h2>Kentyou</h2>
        </a>
      </div>
    </section>
  );
};

export default Page;
