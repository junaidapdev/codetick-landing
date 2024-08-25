import type { Metadata } from "next";
import { Inter, Calistoga } from 'next/font/google'
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Header } from "@/sections/Header";

const inter = Inter ({subsets: ['latin'], variable:"--font-sans"})
const calistoga = Calistoga ({subsets: ['latin'], variable:"--font-serif", weight: ['400']})

export const metadata: Metadata = {
  title: "codetick",
  description: "learn to code in Malayalam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white antialiase font-sans")}>
      {/* <Header /> */}
        {children}
        </body>
    </html>
  );
}
