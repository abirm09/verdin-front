import { WhatWeOffer } from "@/components";
import { Banner } from "@/features/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const HomePage = () => {
  return (
    <main>
      <Banner />
      <WhatWeOffer />
    </main>
  );
};

export default HomePage;
