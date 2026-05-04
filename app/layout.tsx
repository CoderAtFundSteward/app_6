import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

export const metadata: Metadata = {
  title: "app_6",
  description: "Next.js 14 App Router"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
