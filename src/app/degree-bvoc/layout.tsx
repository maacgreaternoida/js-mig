import type { Metadata } from 'next';

// This file handles all the SEO metadata for the /degree-bvoc page route.
export const metadata: Metadata = {
  title: 'B.Voc Degree in Animation & VFX | MAAC Greater Noida',
  description: 'Learn about the UGC-certified 3-year Bachelor of Vocation (B.Voc) degree in Animation & VFX at MAAC Greater Noida. A perfect blend of academic knowledge and industry-ready skills.',
  keywords: 'B.Voc degree, animation degree, VFX degree, bachelor of vocation, UGC certified course, MAAC degree, creative degree, Greater Noida',
  
  openGraph: {
    title: 'B.Voc Degree in Animation & VFX | MAAC Greater Noida',
    description: 'A UGC-certified 3-year degree program for a successful career in the creative industry.',
    type: 'website',
    url: 'https://maacgreaternoida.com/degree-bvoc', // Replace with your actual domain
    images: [
      {
        url: 'https://maacgreaternoida.com/og-image-bvoc.jpg', // Create a specific OG image for this page
        width: 1200,
        height: 630,
        alt: 'B.Voc Degree at MAAC Greater Noida',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'B.Voc Degree in Animation & VFX | MAAC Greater Noida',
    description: 'A UGC-certified 3-year degree program for a successful career in the creative industry.',
    images: ['https://maacgreaternoida.com/og-image-bvoc.jpg'], // Use the same specific image
  },

  alternates: {
    canonical: 'https://maacgreaternoida.com/degree-bvoc', // Replace with your actual domain
  },
};

export default function BvocLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}