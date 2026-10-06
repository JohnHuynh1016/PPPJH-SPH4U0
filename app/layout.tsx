import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
//import Navbar from '@/components/Navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JohnH PPP",
  description: "John Huynh",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/*1. Navbar renders here at the top of every page*/}

        {/*2. Main content takes up the remaining vertical space*/}
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
