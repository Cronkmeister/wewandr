import type { Metadata } from "next";
import Script from "next/script";
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
  metadataBase: new URL("https://wewandr.co"),
  title: "WeWandr | Family Travel Guides by Parents",
  description:
    "WeWandr is a community-powered platform where parents turn real family trips into downloadable travel guides. Discover kid-friendly tips and earn when families use your guide.",
  keywords: ["travel", "experiences", "waitlist", "beta", "WeWandr", "family travel", "travel guides", "kid-friendly", "parents", "family trips"],
  authors: [{ name: "WeWandr" }],
  openGraph: {
    title: "WeWandr | Family Travel Guides by Parents",
    description:
      "WeWandr is a community-powered platform where parents turn real family trips into downloadable travel guides. Discover kid-friendly tips and earn when families use your guide.",
    url: "https://wewandr.co",
    siteName: "WeWandr",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WeWandr - Family Travel Guides by Parents",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WeWandr | Family Travel Guides by Parents",
    description:
      "WeWandr is a community-powered platform where parents turn real family trips into downloadable travel guides. Discover kid-friendly tips and earn when families use your guide.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://wewandr.co",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "WeWandr",
      url: "https://wewandr.co",
      logo: "https://wewandr.co/icon.png",
      description:
        "A community-powered platform where parents turn real family trips into downloadable travel guides.",
    },
    {
      "@type": "WebSite",
      name: "WeWandr",
      url: "https://wewandr.co",
    },
  ],
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BPYF1ENS49"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BPYF1ENS49');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${ptSerif.className} antialiased`}>{children}</body>
    </html>
  );
}
