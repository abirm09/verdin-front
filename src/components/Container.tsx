import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Container = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={cn("max-w-7xl mx-auto px-2 md:px-5", className)}>{children}</div>;
};

export default Container;
