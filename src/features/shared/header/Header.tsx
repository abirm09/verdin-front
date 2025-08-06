import MainHeader from "./MainHeader";
import TopHeader from "./TopHeader";

export type TNavLinks = {
  title: string;
  path: string;
};

const navLinks: TNavLinks[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Shop",
    path: "/shop",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Track order",
    path: "/contact",
  },
];
const Header = () => {
  return (
    <header>
      <TopHeader navLinks={navLinks} />
      <MainHeader navLinks={navLinks} />
    </header>
  );
};

export default Header;
