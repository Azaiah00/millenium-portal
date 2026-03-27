import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

/**
 * Netlify sets URL / DEPLOY_PRIME_URL at build time so Open Graph and canonical
 * URLs always match this deployment (not localhost). Fallback keeps link previews
 * correct when env vars are missing (e.g. some local builds).
 */
const siteUrl =
  process.env.URL ||
  process.env.DEPLOY_PRIME_URL ||
  "https://millenium-portal.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Millenium Client Portal | Couture House Co.",
    template: "%s | Millenium Client Portal",
  },
  description:
    "Private strategy and proposal portal for The Millenium Corp (Couture House Co.). Not the public company website.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Millenium Client Portal",
    title: "Millenium Client Portal | Couture House Co.",
    description:
      "Private digital strategy portal — proposals, mock site preview, and growth roadmap. Opens at this link only; not themilleniumcorp.com.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Millenium Client Portal | Couture House Co.",
    description:
      "Private Couture House Co. portal for The Millenium Corp. Not the public website.",
  },
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
