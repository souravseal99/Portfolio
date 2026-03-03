import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sourav Seal - Full-Stack Developer",
  description:
    "Full-Stack Developer at CloudKaptan with 3+ years experience building scalable web applications using React, Next.js, Node.js, and cloud technologies.",
  openGraph: {
    title: "Sourav Seal - Full-Stack Developer",
    description:
      "Full-Stack Developer at CloudKaptan with 3+ years experience building scalable web applications.",
    url: "https://souravseal.vercel.app",
    siteName: "Sourav Seal Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourav Seal - Full-Stack Developer",
    description:
      "Full-Stack Developer at CloudKaptan building scalable web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
