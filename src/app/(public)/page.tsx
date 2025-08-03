import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const HomePage = () => {
  return (
    <div>
      <h2 className="text-center font-bold">Welcome to verdin</h2>
    </div>
  );
};

export default HomePage;
