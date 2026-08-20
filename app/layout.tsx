import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Serif, Inter } from "next/font/google";

import MobileCtaBar from "@/components/mobile-cta-bar";
import Reveal from "@/components/reveal";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { SITE_URL } from "@/lib/site";
import { organisationSchema } from "@/lib/seo";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "QLAND Property | Buyer's Agency & House and Land, Brisbane",
    template: "%s",
  },
  description:
    "Brisbane buyer's agency and house and land specialists. Fixed-price, turnkey homes and buying support for first home buyers and investors. Book a free strategy call.",
  alternates: { canonical: "/" },
  openGraph: {
    siteName: "QLAND Property",
    type: "website",
    locale: "en_AU",
    title: "QLAND Property | Buyer's Agency & House and Land, Brisbane",
    description:
      "A buyer-centric agency guiding you through buying, building, renting and managing property in Brisbane.",
    images: [
      {
        url: "https://static.wixstatic.com/media/4dd231_9107fd8303ec498082da860349c92824~mv2.jpg/v1/fill/w_1200,h_630,al_c,q_85/og.jpg",
        width: 1200,
        height: 630,
        alt: "A completed QLAND Property home in Brisbane",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-AU"
      className={`${inter.variable} ${instrumentSerif.variable} ${plexMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organisationSchema),
          }}
        />
        <div className="page-shell">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
        <MobileCtaBar />
        <Reveal />
      </body>
    </html>
  );
}
