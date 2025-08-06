"use client";

import { Badge, Button } from "@/components/ui";
import { Heart, ShoppingCart } from "lucide-react";
import TopHeaderUserAccount from "./TopHeaderUserAccount";

const TopHeaderRight = () => {
  return (
    <div className="flex gap-1 items-center">
      <Button variant={"ghost"} className="rounded-full relative">
        <Heart />
      </Button>
      <Button variant={"ghost"} className="rounded-full relative">
        <ShoppingCart />
        <Badge className="absolute rounded-full size-4 md:size-5 -top-1 -right-1 md:-top-2 md:-right-2 ring">
          9
        </Badge>
      </Button>
      <div className="hidden md:block">
        <TopHeaderUserAccount />
      </div>
    </div>
  );
};

export default TopHeaderRight;
