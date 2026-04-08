import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yogi Aditya - Portfolio",
  description: "Welcome to my portfolio website! I'm Yogi Aditya, a passionate Developer dedicated to crafting visually stunning and user-friendly digital experiences. Explore my projects, skills, and contact information to see how I can bring your ideas to life.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a]">
        <Navbar />
        <Hero />
        <main>{children}</main>
      </body>
    </html>
  );
}
