import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://YOUR-DOMAIN.com"),

  title: {
    default: "DownHub - Free Online Video Downloader",
    template: "%s | DownHub",
  },

  description:
    "DownHub is a free online video downloader for supported YouTube, TikTok, Instagram, Facebook and Snapchat media.",

  keywords: [
    "video downloader",
    "online video downloader",
    "free video downloader",
    "social media video downloader",
    "YouTube video downloader",
    "TikTok video downloader",
    "Instagram video downloader",
    "Facebook video downloader",
    "Snapchat video downloader",
    "download videos online",
  ],

  authors: [{ name: "David Ayomide" }],

  creator: "David Ayomide",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    title: "DownHub - Free Online Video Downloader",
    description:
      "Download supported online videos with DownHub.",
    siteName: "DownHub",
  },

  twitter: {
    card: "summary_large_image",
    title: "DownHub - Free Online Video Downloader",
    description:
      "A simple online video downloader for supported platforms.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}