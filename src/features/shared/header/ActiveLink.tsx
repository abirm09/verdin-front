"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ navLink }: { navLink?: { title?: string; path?: string } }) => {
  const pathName = usePathname();
  return (
    <li
      className={`${pathName === navLink?.path ? "text-primary" : ""} font-semibold capitalize hover:text-primary transition-all duration-300`}
    >
      <Link href={navLink?.path || ""} className="px-2">
        {navLink?.title}
      </Link>
    </li>
  );
};

export default ActiveLink;
