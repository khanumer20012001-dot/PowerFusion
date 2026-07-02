import type { Metadata, Viewport } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Power Fusion | Electrical Contractor & Engineering Services in Karachi",
  description: "Power Fusion provides top-tier electrical construction, testing, commissioning, and maintenance services across Sindh. Industrial, residential, commercial & educational projects.",
  keywords: [
    "Electrical Contractor Karachi",
    "Industrial Engineering Services",
    "Electrical Construction Sindh",
    "Power Panel Installation",
    "Electrical Testing Commissioning",
    "Industrial Electrical Maintenance",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
