import {createClient} from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
export default async function Header() {
    const client = createClient();
    const Setting = await client.getSingle("setting");

    return (
        <header className="flex justify-around w-full p-4 border-b  ">
            <Link href="/" className="text-xl font-bold ">
                {Setting.data.site_title}
            </Link>
            <nav>
                <ul className="flex gap-6 text-md font-bold mr-6 ">
                    {Setting.data.navigation.map(({link,label}) => (
                        <li key={label} className="hover:underline">
                            <PrismicNextLink field={link}> {label}  </PrismicNextLink>
                            </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}