import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Subtitle = ({ className, children }: { className?: string; children: ReactNode }) => {
  return (
    <p className={cn("text-xs md:text-sm font-semibold text-muted-foreground", className)}>
      {children}
    </p>
  );
};

export default Subtitle;
