import React from "react";
import ClientPage from "../components/ClientPage";

export const metadata = {
  title: "Games",
  description: "Games developed.",
};

const Page: React.FC = () => {
  return (
    <section>
      <ClientPage />
    </section>
  );
};

export default Page;
