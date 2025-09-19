import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export default async function Footer() {
  const client = createClient();
  const Setting = await client.getSingle("setting");
  return (
    <footer className="flex justify-around w-full p-4 items-center gap-6 mb-10 font-poppins text-[#03045E] border-t bottom-0">
      <div className="font-extrabold text-3xl">{Setting.data.site_title}</div>
      <Link href="/" className="font-poppins text-md hover:underline font-bold">
        <p>
          © {new Date().getFullYear()} {Setting.data.site_title}. All
          rightsreserved.
        </p>
      </Link>
      <ul className="flex gap-6 text-md font-bold mr-6 ">
        {Setting.data.navigation.map(({ link, label }) => (
          <li key={label} className="hover:underline">
            <PrismicNextLink field={link}> {label} </PrismicNextLink>
          </li>
        ))}
      </ul>
    </footer>
  );
}
