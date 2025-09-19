import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { Button } from "@/components/Bounded";

/**
 * Props for `Profile`.
 */
export type ProfileProps = SliceComponentProps<Content.ProfileSlice>;

/**
 * Component for "Profile" Slices.
 */
const Profile: FC<ProfileProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex justify-around w-full mt-10 items-center p-4"
    >
      <div className="flex flex-col  max-w-90 gap-10">
        <div className="text-[#03045E]">
          <PrismicRichText
            field={slice.primary.profile_name}
            components={{
              heading3: ({ children }) => (
                <h1 className=" text-lg font-bold ">{children}</h1>
              ),
            }}
          />

          <PrismicRichText
            field={slice.primary.profile_role}
            components={{
              heading1: ({ children }) => (
                <h1 className=" text-7xl font-extrabold py-1">{children}</h1>
              ),
            }}
          />

          <PrismicRichText
            field={slice.primary.profile_location}
            components={{
              heading3: ({ children }) => (
                <h1 className="text-xl font-semibold">{children}</h1>
              ),
            }}
          />
        </div>

        <PrismicNextLink
          field={slice.primary.profile_resume_link}
          className="w-fit border text-xl font-bold border-black text-[#474306] py-2 px-6 rounded bg-[#F5EE84] 
             shadow-[inset_5px_5px_1px_#FBF8CC,5px_5px_1px_#F5EE84]"
        >
          {slice.primary.profile_resume}
        </PrismicNextLink>
      </div>
      <div
  className="p-1 border border-[#FBF8CC]"
style={{ clipPath: "ellipse(65% 50% at 50% 50%)" }}
>
  <PrismicNextImage
    field={slice.primary.profile_image}
    className="w-80 h-80 object-cover rounded-full"
  />
</div>

    </section>
  );
};

export default Profile;
