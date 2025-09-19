import type { Metadata } from "next";
import { Geist, Geist_Mono ,Poppins } from "next/font/google";
import "./globals.css";
import { createClient } from "@/prismicio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const Setting = await client.getSingle("setting");
  return {
    title: Setting.data.site_title || "My site",
    description:
      Setting.data.meta_description ||
      "My site description for my prismic site",
    openGraph: { images: [Setting.data.profile_image.url || ""] },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${poppins.variable} antialiased flex  justify-center  min-h-screen font-poppins bg-[#FBF8CC]`}
      >
        <div className="w-full max-w-7xl">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
