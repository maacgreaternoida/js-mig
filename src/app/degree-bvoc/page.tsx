import DegreeBvocPageClient from '../../components/DegreeBvocPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'B.Voc in Animation & VFX in Greater Noida | UGC Degree with Placement | MAAC',
  description:
    'Earn a UGC-recognized B.Voc in Animation & VFX at MAAC Greater Noida. Learn Maya, Nuke, Unreal Engine with project-based training and 100% placement support across Delhi NCR.',
  keywords: [
    'B.Voc Animation Greater Noida',
    'B.Voc VFX Noida',
    'UGC degree animation',
    'animation and VFX degree Delhi NCR',
    'Unreal Engine course degree',
    'Nuke compositing degree',
    'Maya training degree program',
    'animation degree with placement',
  ],
  alternates: { canonical: '/degree-bvoc' },
  openGraph: {
    title: 'B.Voc in Animation & VFX in Greater Noida | MAAC Greater Noida',
    description:
      'UGC-recognized B.Voc in Animation & VFX with training on Maya, Nuke, Unreal Engine. 100% placement support in Delhi NCR. Apply now.',
    type: 'website',
    url: 'https://www.maacgreaternoida.com/degree-bvoc',
    images: [{ url: 'https://www.maacgreaternoida.com/maac-logo-hero.webp', width: 1200, height: 630 }],
  },
};

// This is the main Server Component for the /degree-bvoc route.
// It simply renders the client component that holds the page's interactive content.
export default function DegreeBvocPage() {
  return <DegreeBvocPageClient />;
}
