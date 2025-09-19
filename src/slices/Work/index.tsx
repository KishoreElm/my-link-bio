import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type WorkProps = SliceComponentProps<Content.WorkSlice>;

const Work: FC<WorkProps> = ({ slice }) => {
  return (
    <>
      {slice.variation === "default" && (
        <section
          // className="w-full  mx-auto px-6"
          className="max-w-5xl mx-auto px-6 py-16"
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          {/* Section Title + Description */}
          <div className="mb-12 max-w-200  flex flex-col gap-4">
            <PrismicRichText
              field={slice.primary.work_title}
              components={{
                heading1: ({ children }) => (
                  <h2 className="text-6xl sm:text-7xl  font-extrabold text-[#F5EE84]">
                    {children}.
                  </h2>
                ),
              }}
            />
            <PrismicRichText
              field={slice.primary.work_description}
              components={{
                paragraph: ({ children }) => (
                  <p className="mt-4 text-lg text-[#03045E]">{children}</p>
                ),
              }}
            />
          </div>

          {/* Work Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 text-[#03045E] gap-8">
            {/* <div className="grid grid-cols-2 gap-8"> */}
            {slice.primary.work_list?.map((item, i) => (
              <div
                key={i}
                className="p-2 rounded-lg  shadow-md hover:shadow-xl transition "
              >
                {/* Image */}
                <div className="overflow-hidden rounded-lg ">
                  <PrismicNextImage
                    field={item.project_image}
                    className="w-full h-56 object-cover  transform group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-4">
                  {/* Project Title */}
                  <PrismicRichText
                    field={item.project_title}
                    components={{
                      heading2: ({ children }) => (
                        <h2 className="mt-4 text-2xl font-semibold">
                          {children}
                        </h2>
                      ),
                    }}
                  />

                  {/* Project Description */}
                  <PrismicRichText
                    field={item.project_description}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="mt-2text-sm ">{children}</p>
                      ),
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* {varation === "workVariation"} */}

      {slice.variation === "workVariation" && (
        <section
          className="max-w-5xl mx-auto px-6 py-16"
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          {/* Section Title + Description */}
          <div className="mb-12 max-w-200  flex flex-col gap-4">
            <PrismicRichText
              field={slice.primary.work_title}
              components={{
                heading1: ({ children }) => (
                  <h2 className="text-6xl sm:text-7xl  font-extrabold text-[#F5EE84]">
                    {children}.
                  </h2>
                ),
              }}
            />
            <PrismicRichText
              field={slice.primary.work_description}
              components={{
                paragraph: ({ children }) => (
                  <p className="mt-4 text-lg text-[#03045E]">{children}</p>
                ),
              }}
            />
          </div>

          {/* Work Items Grid */}
          <div className="grid grid-cols-1  text-[#03045E] gap-8">
            {/* <div className="grid grid-cols-2 gap-8"> */}
            {slice.primary.work_list?.map((item, i) => (
              <div
                key={i}
                className="flex flex-col justify-around w-full items-start p-4
                rounded-lg  shadow-md sm:flex-row "
              >
                {/* Image */}
                <div className="w-full h-80 rounded-lg overflow-hidden">
                  <PrismicNextImage
                    field={item.project_image}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className=" w-full p-8">
                  {/* Project Title */}
                  <PrismicRichText
                    field={item.project_title}
                    components={{
                      heading2: ({ children }) => (
                        <h2 className="mt-4 text-3xl font-bold">{children}</h2>
                      ),
                    }}
                  />

                  {/* Project Description */}
                  <PrismicRichText
                    field={item.project_description}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="mt-2 text-lg">{children}</p>
                      ),
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Work;
