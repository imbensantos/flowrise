import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

/**
 * Custom PrismicRichText Components Map
 */
const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h1" size="xl" className="md:mb-2">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="max-w-xl mx-auto text-slate-600 font-body text-base md:text-2xl font-normal leading-7 md:leading-10 text-center">
      {children}
    </p>
  ),
};

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="md:px-44"
    >
      <PrismicRichText field={slice.primary.heading} components={components} />
      <PrismicRichText field={slice.primary.body} components={components} />
      <Button field={slice.primary.button_link} className="mt-6 md:mt-8">
        {slice.primary.button_text}
      </Button>
      <PrismicNextImage
        field={slice.primary.image}
        className="max-w-4xl w-full drop-shadow-xl mt-20 md:mt-[6.5rem]"
      />
    </Bounded>
  );
};

export default Hero;
