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
    <p className="max-w-xl mx-auto text-slate-600 font-body self-stretch text-2xl font-normal leading-10 text-center">
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
      as="header"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="w-11/12 mx-auto">
        <PrismicRichText field={slice.primary.heading} components={components} />
        <PrismicRichText field={slice.primary.body} components={components} />
        <Button field={slice.primary.button_link} className="mt-8">
          {slice.primary.button_text}
        </Button>
      </div>
      <PrismicNextImage
        field={slice.primary.image}
        className="max-w-[58.5rem] w-full drop-shadow-xl mt-4 md:mt-[6.5rem]"
      />
    </Bounded>
  );
};

export default Hero;
