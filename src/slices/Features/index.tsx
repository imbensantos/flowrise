import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { CalendarIcon, BarsIcon, NetworkIcon, HourglassIcon } from "./Icons";

const Icons = {
  calendar: <CalendarIcon />,
  bars: <BarsIcon />,
  network: <NetworkIcon />,
  hourglass: <HourglassIcon />,
};

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="md" className="mb-11 font-semibold">
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading as="h3" size="sm" className="font-medium">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-slate-600 font-body text-base leading-8 text-center lg:text-left balance">
      {children}
    </p>
  ),
};

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="md:px-24"
    >
      <div
        data-aos="fade-down"
        id="features"
      >
        <PrismicRichText
          field={slice.primary.heading}
          components={components}
        />
      </div>
      <ul className="max-w-5xl grid sm:grid-cols-2 lg:grid-cols-4 mx-auto place-items-center lg:place-items-start gap-x-8 gap-y-12">
        {slice.items.map((item, index) => (
          <li
            key={index}
            className="max-w-xs grid place-items-center lg:place-items-start gap-5"
            data-aos="zoom-out"
            data-aos-delay={150 * (index + 1)}
            data-aos-anchor="#features"
          >
            {item.icon ? Icons[item.icon] : null}
            <PrismicRichText field={item.title} components={components} />
            <PrismicRichText field={item.description} components={components} />
          </li>
        ))}
      </ul>
    </Bounded>
  );
};

export default Features;
