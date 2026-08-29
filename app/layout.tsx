import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Luis González | Software Engineer",
  description: "Software engineer focused on backend development, Android and artificial intelligence.",
  authors: [{ name: "Luis González" }],
  metadataBase: new URL("https://luisgh28.dev"),
  icons: {
    icon: "/logos/logo_icon_white.webp"
  },
  openGraph: {
    title: "Luis González | Software Engineer",
    description: "Software engineer focused on backend development, Android and artificial intelligence.",
    type: "website",
    locale: "en_US",
    siteName: "Luis González"
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis González | Software Engineer",
    description: "Software engineer focused on backend development, Android and artificial intelligence."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetBrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
