// import { createClient } from "@/prismicio";
// import { PrismicNextLink } from "@prismicio/next";
// import Link from "next/link";
// export default async function Header() {
//   const client = createClient();
//   const Setting = await client.getSingle("setting");

//   return (
//     <header className="flex justify-around items-center w-full p-4 border-b text-[#03045E] font-poppins ">
//       <div className="text-4xl font-extrabold  ">
//         <Link href="/">
//           {/* {Setting.data.site_title} */}
//           {Setting.data.site_title}
//         </Link>
//       </div>

//       <div>
//         <ul className="flex gap-8 text-xl font-semibold ">
//           {Setting.data.navigation.map(({ link, label }) => (
//             <li key={label} className=" p-1 hover:bg-gray-200  rounded-full  ">
//               <PrismicNextLink field={link}> {label} </PrismicNextLink>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div>
//         <ul className="flex gap-4  ">
//           {Setting.data.nave_logo.map(({ nave_logo, nave_logo_link }) => (
//             <li
//               key={nave_logo.url}
//               className=" p-1 hover:bg-gray-300 rounded-full "
//             >
//               <PrismicNextLink field={nave_logo_link}>
//                 <img
//                   src={nave_logo.url || ""}
//                   alt={nave_logo.alt || "logo"}
//                   className="w-10 h-10"
//                 />
//               </PrismicNextLink>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </header>
//   );
// }


import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("setting");

  return (
    <header className="flex justify-between items-center w-full px-8 py-4 border-b  text-[#03045E] font-poppins">
      {/* Logo / Site Title */}
      <div className="text-2xl md:text-3xl font-extrabold">
        <Link href="/">{settings.data.site_title}</Link>
      </div>

      {/* Navigation Menu */}
      <nav>
        <ul className="flex gap-6 md:gap-10 text-lg font-semibold">
          {settings.data.navigation.map(({ link, label }) => (
            <li
              key={label}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <PrismicNextLink field={link}>{label}</PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social / Nav Logos */}
      <div>
        <ul className="flex gap-4">
          {settings.data.nave_logo.map(({ nave_logo, nave_logo_link }) => (
            <li key={nave_logo.url} className="hover:scale-105 transition">
              <PrismicNextLink field={nave_logo_link}>
                <img
                  src={nave_logo.url || ""}
                  alt={nave_logo.alt || "logo"}
                  className="w-8 h-8 md:w-10 md:h-10"
                />
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
