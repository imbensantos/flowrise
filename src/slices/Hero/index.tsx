import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Button from "@/components/Button";

/**
 * Custom PrismicRichText Components Map
 */
const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h1" size="xl" className="md:mb-2 mb-4 mt-12 balance">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="mx-auto text-slate-600 font-body self-stretch text-2xl font-normal leading-10 balance">
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
    <>
      {slice.variation === "default" ? (
        <Bounded
          as="header"
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className="flex flex-col text-center"
        >
          <div
            className="w-[min(49.15rem,84vw)] mx-auto"
            data-aos="fade-down"
          >
            <PrismicRichText
              field={slice.primary.heading}
              components={components}
            />
            <PrismicRichText
              field={slice.primary.body}
              components={components}
            />
            <Button field={slice.primary.button_link} className="mt-8">
              {slice.primary.button_text}
            </Button>
          </div>
          <PrismicNextImage
            field={slice.primary.image}
            className="max-w-[58.5rem] w-full drop-shadow-xl mt-4 md:mt-[6.5rem]"
            data-aos="fade-up"
          />
        </Bounded>
      ) : null}

      {slice.variation === "horizontal" ? (
        <Bounded
          as="header"
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className="flex flex-col-reverse md:flex-row gap-4 lg:gap-16 lg:px-[4.75rem]"
        >
          <div
            className="w-11/12 mx-auto text-center md:text-left"
            data-aos="fade-right"
          >
            <PrismicRichText
              field={slice.primary.heading}
              components={components}
            />
            <PrismicRichText
              field={slice.primary.body}
              components={components}
            />
            <Button field={slice.primary.button_link} className="mt-6 md:mx-0">
              {slice.primary.button_text}
            </Button>
          </div>
          <PrismicNextImage
            field={slice.primary.image}
            className="min-w-[15rem] max-w-[36.44rem] max-h-[27.75rem] object-fill w-full drop-shadow-xl rounded-2xl"
            data-aos="fade-left"
          />
        </Bounded>
      ) : null}
    </>
  );
};

export default Hero;
