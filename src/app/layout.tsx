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
  title: "WeWandr — beta waitlist",
  description:
    "Discover amazing places and experiences around the world. Join our beta waitlist to be among the first to explore.",
  keywords: ["travel", "experiences", "waitlist", "beta", "WeWandr"],
  authors: [{ name: "WeWandr" }],
  openGraph: {
    title: "WeWandr — beta waitlist",
    description:
      "Discover amazing places and experiences around the world. Join our beta waitlist to be among the first to explore.",
    type: "website",
    locale: "en_US",
    siteName: "WeWandr",
  },
  twitter: {
    card: "summary_large_image",
    title: "WeWandr — beta waitlist",
    description:
      "Discover amazing places and experiences around the world. Join our beta waitlist to be among the first to explore.",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${ptSerif.className} antialiased`}>{children}</body>
    </html>
  );
}
