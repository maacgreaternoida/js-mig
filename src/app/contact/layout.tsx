import type { Metadata } from 'next';

// This file handles all the SEO metadata for the /contact page route.
export const metadata: Metadata = {
  title: 'Contact Us | MAAC Greater Noida',
  description: 'Get in touch with MAAC Greater Noida. Find our address, phone number, and contact form to start your journey in animation, VFX, and gaming today.',
  
  openGraph: {
    title: 'Contact Us | MAAC Greater Noida',
    description: 'Connect with us to learn more about our industry-leading creative courses.',
    url: 'https://maacgreaternoida.com/contact', // Replace with your actual domain
  },

  twitter: {
    title: 'Contact Us | MAAC Greater Noida',
    description: 'Connect with us to learn more about our industry-leading creative courses.',
  },

  alternates: {
    canonical: 'https://maacgreaternoida.com/contact', // Replace with your actual domain
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}