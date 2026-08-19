import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/navigation/Navbar";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url ?? "http://localhost:3000"),
  title: {
    default: "Irawan Aji Pangestu — Developer & Product Thinker",
    template: "%s — Irawan Aji Pangestu",
  },
  description:
    "Personal portfolio of Irawan Aji Pangestu, showcasing digital products, technology, problem solving, and creative thinking.",
  openGraph: {
    title: "Irawan Aji Pangestu — Developer & Product Thinker",
    description:
      "Personal portfolio of Irawan Aji Pangestu, showcasing digital products, technology, problem solving, and creative thinking.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Irawan Aji Pangestu — Developer & Product Thinker",
    description:
      "Personal portfolio of Irawan Aji Pangestu, showcasing digital products, technology, problem solving, and creative thinking.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-black focus:px-4 focus:py-2 focus:text-[15px] focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Navbar />
          <main id="main-content" className="flex-1 pt-16 lg:pt-20">
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
