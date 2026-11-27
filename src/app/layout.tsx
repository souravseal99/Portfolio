import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { SITE_CONFIG } from "@/config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} (${SITE_CONFIG.handle}) - ${SITE_CONFIG.role}`,
  description: `${SITE_CONFIG.role} at ${SITE_CONFIG.company} with ${SITE_CONFIG.yearsExperience} experience building scalable web applications.`,
  openGraph: {
    title: `${SITE_CONFIG.name} (${SITE_CONFIG.handle}) - ${SITE_CONFIG.role}`,
    description: `${SITE_CONFIG.role} at ${SITE_CONFIG.company} with ${SITE_CONFIG.yearsExperience} experience building scalable web applications.`,
    url: "https://souravseal99.vercel.app",
    siteName: `${SITE_CONFIG.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} (${SITE_CONFIG.handle}) - ${SITE_CONFIG.role}`,
    description: `${SITE_CONFIG.hero.headline}`,
    creator: SITE_CONFIG.handle,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#07090E] text-slate-300`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
