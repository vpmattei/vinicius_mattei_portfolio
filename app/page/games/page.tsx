import React from "react";
import GamePages from "../../components/GamePages";

export const metadata = {
  title: "Games",
  description: "Games developed.",
};

const Page: React.FC = () => {
  return (
    <section>
      <GamePages />
    </section>
  );
};

export default Page;
