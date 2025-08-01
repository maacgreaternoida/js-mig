import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['monospace'],
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
      <head>
        <link rel="preload" href="/maac-logo-hero.webp" as="image" type="image/webp" />
        <style dangerouslySetInnerHTML={{
          __html: `
            .heroLogo {
              width: auto !important;
              height: 80px !important;
              display: block !important;
              filter: drop-shadow(0 0 15px rgba(0, 212, 255, 0.3)) !important;
              flex-shrink: 0 !important;
              will-change: transform !important;
              transform: translateZ(0) !important;
              max-width: 100% !important;
            }
            .heroLogoWrapper {
              min-width: 0 !important;
            }
            @media (max-width: 768px) {
              .heroLogo {
                height: 60px !important;
                width: auto !important;
                max-width: 100% !important;
              }
              .heroLogoWrapper {
                width: 100% !important;
                max-width: 300px !important;
              }
            }
            @media (max-width: 480px) {
              .heroLogo {
                height: 50px !important;
                width: auto !important;
                max-width: 100% !important;
              }
              .heroLogoWrapper {
                width: 100% !important;
                max-width: 280px !important;
              }
            }
          `
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}