import CustomImage from "app/components/CustomImage";
import React from "react";

export const metadata = {
  title: "Works",
  description: "Works done in Companies and in the University.",
};

const Page: React.FC = () => {
  return (
    <section className="prose mt-32 mx-8 flex flex-col items-center">
      <h1>Works</h1>

      {/* Hebald Forest */}
      <div className="flex flex-row justify-center gap-4">
        <div className="w-1/3 flex justify-end">
            <CustomImage
              src="https://i.ibb.co/19SxrGF/paravoile.png"
              alt="Hebald Forest"
              link="/works/hebald-forest"
              maxWidth="40rem"
            />
        </div>
        <div className="w-[2px] h-[40vh] bg-white mx-4"></div>
        <div className="w-1/3 flex justify-start">
          <a href="/works/hebald-forest">
            <h2 className="transition-all hover:text-neutral-400">
              Hebald Forest
            </h2>
          </a>
        </div>
      </div>

      {/* Anamnesis */}
      <div className="flex flex-row justify-center gap-16">
        <div className="w-1/3 flex justify-end">
            <CustomImage
              src="https://ludhic.fr/wp-content/uploads/2023/01/anamnesis02.webp"
              alt="Anamnesis"
              link="/works/anamnesis"
              maxWidth="40rem"
            />
        </div>
        <div className="w-[2px] h-[40vh] bg-white mx-auto"></div>
        <div className="w-1/3 flex justify-start">
          <a href="/works/anamnesis">
            <h2 className="transition-all hover:text-neutral-100">Anamnesis</h2>
          </a>
        </div>
      </div>

      {/* Tangled Tales */}
      <div className="flex flex-row justify-center gap-16">
        <div className="w-1/3 flex justify-end">
          <a href="/works/tangled-tales">
            <img
              src="https://i.ibb.co/PcBZMtb/livretangledtales2.png"
              alt="Tangled Tales Logo"
              style={{ width: 350 }}
            />
          </a>
        </div>
        <div className="w-[2px] h-[40vh] bg-white mx-auto"></div>
        <div className="w-1/3 flex justify-start">
          <a href="/works/tangled-tales">
            <h2 className="transition-all hover:text-neutral-100">
              Tangled Tales
            </h2>
          </a>
        </div>
      </div>

      {/* Kentyou */}
      <div className="flex flex-row justify-center gap-16">
        <div className="w-1/3 flex justify-end">
          <a href="/works/kentyou">
            <img
              src="https://pbs.twimg.com/profile_images/1328342235038048263/gHLzQIHN_400x400.png"
              alt="Kentyou Logo"
              style={{ width: 350 }}
            />
          </a>
        </div>
        <div className="w-[2px] h-[40vh] bg-white mx-auto"></div>
        <div className="w-1/3 flex justify-start">
          <a href="/works/kentyou">
            <h2 className="transition-all hover:text-neutral-100">Kentyou</h2>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Page;
