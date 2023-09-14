import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
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
          <div className="w-[min(49.15rem,64vw)] mx-auto">
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
      ) : null}
      
      {slice.variation === "horizontal" ? (
        <Bounded
          as="header"
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className="flex flex-col-reverse md:flex-row gap-4 md:gap-32 md:px-[6.75rem]"
        >
          <div className="w-11/12 mx-auto text-left">
            <PrismicRichText field={slice.primary.heading} components={components} />
            <PrismicRichText field={slice.primary.body} components={components} />
            <Button field={slice.primary.button_link} className="mt-6 mx-0">
              {slice.primary.button_text}
            </Button>
          </div>
          <PrismicNextImage
            field={slice.primary.image}
            className="max-w-[36.44rem] max-h-[27.75rem] object-fill w-full drop-shadow-xl rounded-2xl"
          />
        </Bounded>
      ) : null}
    </>
  );
};

export default Hero;
