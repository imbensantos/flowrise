import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

function Bounded({as: Comp = "section", className, children, ...props}: BoundedProps) {
  return (
    <Comp className={clsx("max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-14 lg:py-16 items-center justify-center text-center", className)} {...props}>
      {children}
    </Comp>
  )
}

export default Bounded