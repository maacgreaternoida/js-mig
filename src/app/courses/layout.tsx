import type { Metadata } from 'next';

// This file handles all the SEO metadata for the /courses page route.
// Next.js automatically uses this for the <head> tag.
export const metadata: Metadata = {
  title: 'All Courses - Animation, VFX, Gaming & Design | MAAC Greater Noida',
  description: 'Explore our comprehensive range of animation, VFX, gaming, and design courses at MAAC Greater Noida. From 3D animation to game development, find the perfect course for your creative career.',
  keywords: 'animation courses, VFX courses, gaming courses, design courses, 3D animation, visual effects, game development, UI/UX design, graphic design, MAAC courses, Greater Noida',
  
  // Open Graph (for social sharing)
  openGraph: {
    title: 'All Courses - Animation, VFX, Gaming & Design | MAAC Greater Noida',
    description: 'Explore our comprehensive range of animation, VFX, gaming, and design courses.',
    type: 'website',
    url: 'https://maacgreaternoida.com/courses', // Replace with your actual domain
    images: [
      {
        url: 'https://maacgreaternoida.com/maac-logo-hero.webp', // Replace with your actual domain
        width: 800,
        height: 600,
        alt: 'MAAC Greater Noida',
      },
    ],
  },

  // Twitter Card (for Twitter sharing)
  twitter: {
    card: 'summary_large_image',
    title: 'All Courses - Animation, VFX, Gaming & Design | MAAC Greater Noida',
    description: 'Explore our comprehensive range of animation, VFX, gaming, and design courses.',
    images: ['https://maacgreaternoida.com/maac-logo-hero.webp'], // Replace with your actual domain
  },

  // Canonical URL
  alternates: {
    canonical: 'https://maacgreaternoida.com/courses', // Replace with your actual domain
  },
};

// This layout simply passes the children (your page.tsx) through.
export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}