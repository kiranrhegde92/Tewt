import type { Metadata } from "next";
import "./globals.css";
import GlobalSearch from "@/components/layout/GlobalSearch";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { buildSearchIndex } from "@/lib/search";

export const metadata: Metadata = {
  title: "DevPlay - Learn to Code the Fun Way",
  description:
    "Master programming languages, algorithms, data structures, and more through stories, games, and visual learning.",
};

const searchItems = buildSearchIndex();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 pt-[var(--nav-height)] pb-16 sm:pb-0">
          <GlobalSearch items={searchItems} />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
