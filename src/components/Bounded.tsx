import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

function Bounded({as: Comp = "section", className, children, ...props}: BoundedProps) {
  return (
    <Comp className={clsx("flex flex-col px-4 py-10 md:px-32 md:py-20 items-center justify-center", className)} {...props}>{children}</Comp>
  )
}

export default Bounded