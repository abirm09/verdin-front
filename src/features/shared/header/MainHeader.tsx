"use client";

import { Container } from "@/components";
import { Button, HoverCard, HoverCardContent, HoverCardTrigger, ScrollArea } from "@/components/ui";
import { ChevronDown, ChevronUp, LayoutGrid } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ActiveLink from "./ActiveLink";
import { TNavLinks } from "./Header";

export type TCategory = {
  id: string;
  name: string;
  slug: string;
  image: string;
};

export const categories: TCategory[] = [
  {
    id: "1",
    name: "Plant Growing Kits",
    slug: "plant-growing-kits",
    image: "https://res.cloudinary.com/djb6gdw6k/image/upload/v1754413517/fertilizer_rlj7sb.png",
  },
  {
    id: "2",
    name: "Seeds & Bulbs",
    slug: "seeds-&-bulbs",
    image: "https://res.cloudinary.com/djb6gdw6k/image/upload/v1754413517/seed-bag_zesbdo.png",
  },
  {
    id: "3",
    name: "Planters & Pots",
    slug: "planters-&-pots",
    image: "https://res.cloudinary.com/djb6gdw6k/image/upload/v1754413517/planter_rqaxsp.png",
  },
  {
    id: "4",
    name: "Grow Lights",
    slug: "grow-lights-&-environment",
    image: "https://res.cloudinary.com/djb6gdw6k/image/upload/v1754413517/lightbulb_xf9o4h.png",
  },
  {
    id: "5",
    name: "Tools",
    slug: "tools",
    image: "https://res.cloudinary.com/djb6gdw6k/image/upload/v1754413518/settings_lujyft.png",
  },
  {
    id: "6",
    name: "Gadgets",
    slug: "gadgets",
    image: "https://res.cloudinary.com/djb6gdw6k/image/upload/v1754661615/gadget_qebpvt.png",
  },
];

const MainHeader = ({ navLinks }: { navLinks: TNavLinks[] }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 70);
  };

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`hidden md:block border-b border-border w-full left-0 bg-background z-50 transition-all duration-300 ${
          isScrolled ? "fixed top-0 shadow-sm py-3" : "relative py-2"
        }`}
      >
        <Container>
          <div className="flex justify-between items-center">
            {/* Categories */}
            <div>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button className="w-48 active:scale-100">
                    <LayoutGrid />
                    Categories
                    <ChevronDown />
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-fit">
                  <ScrollArea className="h-[300px] pr-3">
                    <div className="flex flex-col gap-2">
                      {categories?.map((category) => (
                        <Link
                          href={`/shop?category=${category?.slug}`}
                          key={category?.id}
                          className="flex gap-2 border border-border p-2.5 items-center rounded-md hover:border-primary transition-all group duration-300"
                        >
                          <Image
                            src={category?.image}
                            alt={category?.name}
                            width={40}
                            height={40}
                            className="w-8 h-8 object-cover"
                          />
                          <p className="whitespace-nowrap group-hover:text-primary transition-all duration-300">
                            {category?.name}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </ScrollArea>
                </HoverCardContent>
              </HoverCard>
            </div>

            {/* Nav links */}
            <nav>
              <ul className="flex flex-wrap">
                {navLinks?.map((navLink) => (
                  <ActiveLink navLink={navLink} key={navLink.title} />
                ))}
              </ul>
            </nav>
          </div>
        </Container>
      </div>
      <div
        className={`fixed right-5 md:right-10 transition-all duration-300 ${isScrolled ? "bottom-5 md:bottom-10 opacity-100" : "-bottom-9 opacity-0"}`}
      >
        <Button onClick={scrollToTop}>
          <ChevronUp />
        </Button>
      </div>
    </>
  );
};

export default MainHeader;
