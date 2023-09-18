import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import clsx from "clsx";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading className="text-slate-700 font-display lg:text-5xl font-bold leading-[3.5rem] mb-2">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-slate-500 font-body lg:text-2xl leading-10 balance">
      {children}
    </p>
  ),
};

/**
 * Props for `TextWithImage`.
 */
export type TextWithImageProps =
  SliceComponentProps<Content.TextWithImageSlice>;

/**
 * Component for "TextWithImage" Slices.
 */
const TextWithImage = ({ slice }: TextWithImageProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-32"
      data-aos={slice.variation === "imageRight" ? "fade-left" : "fade-right"}
    >
      <PrismicNextImage
        field={slice.primary.image}
        className={clsx(
          "w-full max-w-xl rounded-lg",
          slice.variation === "imageRight" && "md:order-2"
        )}
      />
      <hgroup
        className="text-left max-w-md"
      >
        <PrismicRichText
          field={slice.primary.heading}
          components={components}
        />
        <PrismicRichText field={slice.primary.body} components={components} />
      </hgroup>
    </Bounded>
  );
};

export default TextWithImage;
