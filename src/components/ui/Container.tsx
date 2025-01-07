
import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

const Container = ({
  children,
  className,
  ...props
}: PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) => {
  return (
    <div
      className={cn("mx-auto px-4 sm:px-16", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
