import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServerStructuredData from "@/components/ServerStructuredData";

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
  metadataBase: new URL('https://www.maacgreaternoida.com'),
  // 1. Updated Title with Primary Keywords
  title: "MAAC Greater Noida | Best Animation, VFX & Gaming Institute",
  
  // 2. Updated Description with Long-tail Keywords
  description: "Join MAAC Greater Noida, the leading institute for career courses in 3D Animation, VFX, Game Design, and Multimedia. Located at Office No 601, 6th Floor, OM Tower, Alpha 1 Commercial Belt. Call 08048052804 for admission. Get 100% placement support and learn from expert faculty.",
  
  // 3. Comprehensive Keywords List
  keywords: [
    "MAAC Greater Noida",
    "animation institute Greater Noida", 
    "VFX course Noida",
    "game design course Greater Noida",
    "graphic design course Noida",
    "animation training center",
    "visual effects institute",
    "gaming institute Noida",
    "3D animation course Greater Noida",
    "animation course with placement guarantee",
    "best animation institute in Delhi NCR",
    "MAAC animation course",
    "VFX institute Delhi NCR",
    "Unity game development course",
    "Adobe Creative Suite training",
    "MAAC Greater Noida OM Tower",
    "MAAC Greater Noida Alpha 1 Commercial Belt"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0LDPJDPBC1"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0LDPJDPBC1');
            `,
          }}
        />
        
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
        <ServerStructuredData type="organization" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}