import { WhatWeOffer } from "@/components";
import { Banner, BestSellingProducts } from "@/features/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const HomePage = () => {
  return (
    <main>
      <Banner />
      <WhatWeOffer />
      <BestSellingProducts />
    </main>
  );
};

export default HomePage;
