import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//import components
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer/Footer";

import { IoArrowUpCircleOutline } from "react-icons/io5";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rhythm's Portfolio",
  description:
    "This is Rhythm's portfolio. He is a graduate software developer from Sydney.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " relative"}>
        <Header />
        {children}
        <a href="#" className="hidden lg:block lg:absolute lg:bottom-[110px] lg:right-4 lg:bg-primary lg:rounded-full">
          <IoArrowUpCircleOutline className="lg:size-14" color="white"/>
        </a>
        <Footer />
      </body>
    </html>
  );
}
