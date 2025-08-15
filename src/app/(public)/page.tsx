import { WhatWeOffer } from "@/components";
import { Banner, BestSellingProducts, HighlightedProduct, NewArrivals } from "@/features/home";
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
      <NewArrivals />
      <HighlightedProduct />
    </main>
  );
};

export default HomePage;
