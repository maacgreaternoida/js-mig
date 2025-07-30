import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- SEO METADATA ---
export const metadata: Metadata = {
  // 1. Updated Title
  title: "MAAC Greater Noida | Best Animation, VFX & Gaming Institute",
  
  // 2. Updated Description
  description: "Join MAAC Greater Noida, the leading institute for career courses in 3D Animation, VFX, Game Design, and Multimedia. Get 100% placement support and learn from expert faculty.",
  
  // 3. Added Keywords
  keywords: ["MAAC Greater Noida", "Animation Courses", "VFX Courses", "Game Design", "Multimedia", "3D Animation", "Visual Effects", "B.Voc Degree", "Graphic Design"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistSans.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
