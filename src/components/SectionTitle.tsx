import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const SectionTitle = ({ className, children }: { className?: string; children: ReactNode }) => {
  return (
    <h2 className={cn("font-bold text-primary text-xl sm:text-2xl", className)}>{children}</h2>
  );
};

export default SectionTitle;
