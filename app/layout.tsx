import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "United Beings Foundation — Youth-Led. Impact-First.",
  description:
    "United Beings Foundation is a youth-led Section 8 non-profit bridging India's opportunity gap through STEM education, creative arts, leadership development, and environmental action.",
  keywords: [
    "UBF",
    "United Beings Foundation",
    "youth-led",
    "non-profit",
    "STEM education",
    "India",
    "Section 8",
    "creative arts",
    "environmental action",
    "leadership development",
  ],
  authors: [{ name: "United Beings Foundation" }],
  creator: "United Beings Foundation",
  publisher: "United Beings Foundation",
  metadataBase: new URL("https://ubfngo.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "United Beings Foundation — Youth-Led. Impact-First.",
    description:
      "A youth-led Section 8 non-profit empowering the next generation through STEM education, creative arts, leadership, and environmental action.",
    url: "https://ubfngo.org",
    siteName: "United Beings Foundation",
    images: [
      {
        url: "/ubf-logo.png",
        width: 800,
        height: 600,
        alt: "United Beings Foundation Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "United Beings Foundation — Youth-Led. Impact-First.",
    description:
      "A youth-led Section 8 non-profit empowering the next generation through STEM education, creative arts, leadership, and environmental action.",
    images: ["/ubf-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/ubf-favicon-32.png",
    apple: "/ubf-favicon-512.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#2563EB",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${spaceMono.variable}`}
    >
      <body style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
