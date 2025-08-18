import type { Metadata } from "next";
import { Inter, Instrument_Sans } from "next/font/google";
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
    <html lang="en" className={`${inter.variable} ${instrumentSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Knewave&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
