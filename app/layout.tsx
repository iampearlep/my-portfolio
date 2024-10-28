import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css"
import { Navbar } from "@/components/Navbar";
const cabinetGrotesk = localFont({
  src: [
    {
      path: './fonts/CabinetGrotesk-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/CabinetGrotesk-Medium.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/CabinetGrotesk-Bold.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: "Princess",
  description: "Princess's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#0d0d0d] ${cabinetGrotesk.className}`}>
      <Navbar />
      {children}
        </body>
    </html>
  );
}
