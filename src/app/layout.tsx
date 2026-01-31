import type { Metadata } from "next";
import {
  Inter,
  Instrument_Sans,
  DM_Serif_Display,
  PT_Serif,
  Roboto,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif-display",
  display: "swap",
});

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-serif",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WeWandr",
  description:
    "Discover amazing places and experiences around the world. Join our Early Access to be among the first to explore.",
  keywords: ["travel", "experiences", "waitlist", "beta", "WeWandr"],
  authors: [{ name: "WeWandr" }],
  openGraph: {
    title: "WeWandr",
    description:
      "Discover amazing places and experiences around the world. Join our Early Access to be among the first to explore.",
    type: "website",
    locale: "en_US",
    siteName: "WeWandr",
  },
  twitter: {
    card: "summary_large_image",
    title: "WeWandr",
    description:
      "Discover amazing places and experiences around the world. Join our Early Access to be among the first to explore.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSans.variable} ${dmSerifDisplay.variable} ${ptSerif.variable} ${roboto.variable}`}
    >
      <body className={`${ptSerif.className} antialiased`}>{children}</body>
    </html>
  );
}
