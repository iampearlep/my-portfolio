import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Template from "./Template";

const inter = Montserrat({ subsets: ["latin"] , weight: '400' });

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
      <body className={`bg-[#0d0d0d] ${inter.className}`}>
        <Template>{children}</Template>
        </body>
    </html>
  );
}
