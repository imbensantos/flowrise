import clsx from "clsx";
import React from "react";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  className?: string;
  children: React.ReactNode;
};

function Heading({
  as: Comp = "h2",
  className,
  children,
  size = "lg",
}: HeadingProps) {
  return (
    <Comp
      className={clsx(
        "text-slate-700 font-display font-bold",
        size === "xl" && "text-5xl md:text-7xl leading-[3.75rem] md:leading-[5rem]",
        size === "lg" && "text-4xl md:text-5xl",
        size === "md" && "text-3xl md:text-4xl",
        size === "sm" && "text-2xl md:text-3xl",
        className
      )}
    >
      {children}
    </Comp>
  );
}

export default Heading;
