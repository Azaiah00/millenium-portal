import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

/**
 * Never use Netlify's `URL` (or `DEPLOY_PRIME_URL`) for this app's metadata.
 * Those vars resolve to the site's *primary* domain. If themilleniumcorp.com is
 * set as primary on the same Netlify site, `URL` becomes that domain — then
 * metadataBase, og:url, and canonical all advertise the public site. iMessage,
 * SMS, Slack, etc. then preview/link to themilleniumcorp.com even when the user
 * shared millenium-portal.netlify.app.
 *
 * Optional: set PORTAL_CANONICAL_URL in Netlify if you later use a dedicated
 * portal hostname (must stay the URL you actually share).
 */
const portalOrigin = (
  process.env.PORTAL_CANONICAL_URL || "https://millenium-portal.netlify.app"
).replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(`${portalOrigin}/`),
  title: {
    default: "Millenium Client Portal | Couture House Co.",
    template: "%s | Millenium Client Portal",
  },
  description:
    "Private strategy and proposal portal for The Millenium Corp (Couture House Co.). Not the public company website.",
  alternates: {
    canonical: `${portalOrigin}/`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${portalOrigin}/`,
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
