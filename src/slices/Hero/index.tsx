import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { components } from "..";
import Bounded, { Button } from "@/components/Bounded";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-green-100"
    >
      <div className="flex flex-col items-center justify-center gap-6 py-12 md:py-24">
        <PrismicRichText
          field={slice.primary.hero_heading}
          components={{
            heading1: ({ children }) => (
              <h1 className=" text-4xl font-bold ">{children}</h1>
            ),
          }}
        />
        <PrismicRichText
          field={slice.primary.hero_discretion}
          components={{
            paragraph: ({ children }) => (
              <p className="text-lg text-gray-600 text-justify md:text-center ">
                {children}
              </p>
            ),
          }}
        />
        <Button
          field={slice.primary.hero_button_link}
          className="mt-4"

        >
          {slice.primary.hero_button_text}
        </Button>
{/* 
  <PrismicNextLink field={slice.primary.hero_button_link} className=" w-auto px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
      {slice.primary.hero_button_text}
  </PrismicNextLink> */}
 

        <PrismicNextImage
          field={slice.primary.hero_image}
          className="w-200 h-100 object-cover"
        />
      </div>
    </Bounded>
  );
};

export default Hero;
