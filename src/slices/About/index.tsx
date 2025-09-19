import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type AboutProps = SliceComponentProps<Content.AboutSlice>;

const About: FC<AboutProps> = ({ slice }) => {
  // Format date to show only year
  const formatYear = (dateString: string | null) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.getFullYear();
  };

  return (
    <section
      className="max-w-5xl mx-auto px-6 py-16"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* Heading */}
      <div className="mb-12 max-w-200  flex flex-col gap-4">
        <PrismicRichText
          field={slice.primary.about_heading}
          components={{
            heading1: ({ children }) => (
              <h2 className="text-7xl font-extrabold text-[#F5EE84] ">
                {children}.
              </h2>
            ),
          }}
        />
        <PrismicRichText
          field={slice.primary.about_description}
          components={{
            paragraph: ({ children }) => (
              <p className="mt-4 text-lg text-[#03045E]">{children}</p>
            ),
          }}
        />
      </div>

      {/* Timeline */}
      <div className="space-y-12 ml-35">
        {slice.primary.time_line?.map((item, i) => (
          <div key={i} className="relative  pl-6 max-w-2xl text-[#03045E] ">
            <div className="absolute -left-3 top-1 w-4 h-4 bg-[#03045E] rounded-full "></div>
            {/* Date */}
            <p className="text-md font-semibold">
              {formatYear(item.start_date)} - {formatYear(item.end_date)}
            </p>

            {/* Description */}
            <PrismicRichText
              field={item.title_description}
              components={{
                paragraph: ({ children }) => (
                  <p className="mt-2  text-md">{children}</p>
                ),
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
