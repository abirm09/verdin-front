import { Banner } from "@/features/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const HomePage = () => {
  return (
    <main>
      <Banner />
    </main>
  );
};

export default HomePage;
