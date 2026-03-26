import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Millenium | Professional Private Security Solutions",
  description: "Highly structured, corporate security.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-obsidian text-crisp antialiased min-h-screen flex flex-col overflow-x-hidden`}>
        <Navbar />
        <main className="min-h-0 min-w-0 flex flex-1 flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
