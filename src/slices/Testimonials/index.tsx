import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";

import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { PrismicNextImage } from "@prismicio/next";


const components: JSXMapSerializer = {
  heading2: ({children}) => (
    <Heading className="text-slate-700 font-display text-[2.5rem] font-semibold leading-[3.5rem] mb-9">
      {children}
    </Heading>
  ),
  paragraph: ({children}) => (
    <p className="text-slate-600 font-body text-xl md:text-2xl leading-10 mb-8 balance lg:text-left">
      {children}
    </p>
  )
}

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = async ({ slice }: TestimonialsProps): Promise<JSX.Element> => {

  const client = createClient()

  const testimonials = await Promise.all(
    slice.items.map(item => {
      if(isFilled.contentRelationship(item.testimonial) && item.testimonial.uid){
        return client.getByUID("testimonial", item.testimonial.uid)
      }
    })
  )

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} components={components} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => testimonial ? (
          <article key={index} className="grid justify-items-center lg:justify-items-start lg:items-start content-between px-8 md:px-14 py-10 md:py-16 rounded-lg border border-slate-50 bg-white drop-shadow-xl">
            <PrismicRichText field={testimonial.data.quote} components={components} />
            <footer className="flex gap-4 items-center">
              <PrismicNextImage field={testimonial.data.avatar} width={56} height={56} className="rounded-full" imgixParams={{ar: "1:1", fit:"crop"}} />
              <div>
                <p className="text-slate-700 font-medium font-body text-base text-left">{testimonial.data.name}</p>
                <p className="text-slate-500 font-body text-base text-left">{testimonial.data.job_title}</p>
              </div>
            </footer>
          </article>
        ) : null)}
      </div>
    </Bounded>
  );
};

export default Testimonials;
