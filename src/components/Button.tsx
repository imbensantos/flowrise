import { PrismicNextLink, PrismicNextLinkProps } from '@prismicio/next'
import clsx from 'clsx'

function Button ({className, ...props}: PrismicNextLinkProps) {
  return (
    <PrismicNextLink
      className={clsx("block w-fit mx-auto px-14 py-3 rounded-full text-white bg-cyan-700 hover:bg-cyan-800 font-display text-[1rem] font-bold leading-normal tracking-wider transition-colors duration-200 ease-in-out", className)}
      {...props}
    />
  )
}

export default Button