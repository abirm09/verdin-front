"use client";

import logo from "@/assets/logo.png";
import { Container } from "@/components";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ActiveLink from "./ActiveLink";
import { TNavLinks } from "./Header";
import TopHeaderRight from "./TopHeaderRight";
import TopHeaderUserAccount from "./TopHeaderUserAccount";

const TopHeader = ({ navLinks }: { navLinks: TNavLinks[] }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`border-b border-border w-full left-0 bg-background z-50 transition-all duration-300 ${
        isScrolled ? "fixed md:static top-0 shadow-sm py-2 md:py-3" : "relative py-3"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center gap-5">
          <Sheet>
            <SheetTrigger className="block md:hidden">
              {/* <Button variant={"secondary"}> */}
              <Menu />
              {/* </Button> */}
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader className="border-b border-border">
                <SheetTitle className="hidden">Mobile menu</SheetTitle>
                <SheetDescription className="hidden">Menu for small screen</SheetDescription>
                <Link href={"/"} className="mx-auto">
                  <Image
                    src={logo}
                    alt="Site logo"
                    width={250}
                    height={61.5}
                    className="w-[100px] h-[24.6px] md:w-[125px] md:h-[30.75]"
                    priority
                  />
                </Link>
              </SheetHeader>
              <div className="px-2">
                <nav>
                  <ul className="space-y-2">
                    {navLinks?.map((navLink) => (
                      <ActiveLink navLink={navLink} key={navLink.title} />
                    ))}
                  </ul>
                </nav>
              </div>
              <SheetFooter>
                <TopHeaderUserAccount />
              </SheetFooter>
            </SheetContent>
          </Sheet>
          <Link href={"/"}>
            <Image
              src={logo}
              alt="Site logo"
              width={250}
              height={61.5}
              className="w-[100px] h-[24.6px] md:w-[125px] md:h-[30.75]"
              priority
            />
          </Link>
          <TopHeaderRight />
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
