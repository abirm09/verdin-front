import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Title = ({ className, children }: { className?: string; children: ReactNode }) => {
  return <h2 className={cn("font-bold text-primary md:text-xl", className)}>{children}</h2>;
};

export default Title;
