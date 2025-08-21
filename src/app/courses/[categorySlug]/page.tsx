import { notFound } from 'next/navigation';
import { courseCategories } from '@/data/course-data';
import CourseCategoryPageClient from '@/components/CourseCategoryPageClient';
import CategoryStructuredData from '@/components/CategoryStructuredData';
import { getFAQsByCategory } from '@/data/faq-data';
import type { Metadata } from 'next';

// This interface defines the shape of the params object
interface PageProps {
  params: Promise<{
    categorySlug: string;
  }>;
}

// --- STATIC PARAMS GENERATION ---
// This function generates all possible category slug combinations at build time.
// This is required for static export (output: export) in Next.js.
export async function generateStaticParams() {
  return courseCategories.map(category => ({
    categorySlug: category.slug,
  }));
}

// --- DYNAMIC SEO METADATA ---
// This function generates unique SEO tags for each category page.
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { categorySlug } = await params;
  const category = courseCategories.find(cat => cat.slug === categorySlug);

  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }

  // Generate SEO-friendly titles based on category
  let title: string;
  let description: string;

  switch (categorySlug) {
    case 'gaming-courses':
      title = 'Best gaming courses in NCR | Best game design institute in Greater Noida | MAAC';
      description = 'Find the best gaming courses in NCR at MAAC Greater Noida. Learn Unity, Unreal Engine, mobile gaming, and AR/VR development with 100% placement support.';
      break;
    
    case 'short-term-courses':
      title = 'Best short term animation courses in NCR | Best intensive training institute in Greater Noida | MAAC';
      description = 'Discover the best short term animation courses in NCR at MAAC Greater Noida. Master Maya, 3ds Max, compositing, and more in 72-192 hours with expert training.';
      break;
    
    case '3d-animation':
      title = 'Best animation courses in NCR | Best animation institute in Greater Noida | MAAC';
      description = 'Find the best animation courses in NCR at MAAC Greater Noida. Master Maya, ZBrush, and production workflows with industry experts and placement support.';
      break;
    
    case 'vfx-courses':
      title = 'Best VFX courses in NCR | Best visual effects institute in Greater Noida | MAAC';
      description = 'Discover the best VFX courses in NCR at MAAC Greater Noida. Master compositing, particle effects, and industry tools like Nuke and Fusion with hands-on training.';
      break;
    
    case 'multimedia-design-courses':
      title = 'Best graphic design courses in NCR | Best design institute in Greater Noida | MAAC';
      description = 'Find the best graphic design courses in NCR at MAAC Greater Noida. Master Photoshop, Illustrator, Figma, and responsive web development with expert training.';
      break;
    
    default:
      // For any other categories, use the generic format
      title = `Best ${category.name.toLowerCase()} in NCR | Best ${category.name.toLowerCase()} institute in Greater Noida | MAAC`;
      description = `Discover the best ${category.name.toLowerCase()} in NCR at MAAC Greater Noida. We train students from Noida, Ghaziabad, and across Delhi NCR.`;
  }

  return {
    title,
    description,
    keywords: generateKeywords(categorySlug, category.name),
    alternates: { canonical: `/courses/${category.slug}` },
    openGraph: {
      title,
      description,
      images: [{ url: `/courses/${category.slug}-og.jpg` }], // Assumes you create an OG image for each category
    },
  };
}

// Helper function to generate keywords for each category
function generateKeywords(categorySlug: string, categoryName: string): string {
  const baseKeywords = [
    `best ${categoryName.toLowerCase()} in NCR`,
    `best ${categoryName.toLowerCase()} in Greater Noida`,
    `best ${categoryName.toLowerCase()} institute in Greater Noida`,
    `best ${categoryName.toLowerCase()} courses in Delhi NCR`,
    `MAAC ${categoryName.toLowerCase()}`,
    `${categoryName.toLowerCase()} training in Greater Noida`
  ];

  const specificKeywords = {
    'gaming-courses': [
      'best gaming courses in NCR',
      'best game design institute in Greater Noida',
      'best Unity training in Delhi NCR',
      'best Unreal Engine course in Noida',
      'best mobile game development in Greater Noida',
      'best AR VR development course in NCR'
    ],
    'short-term-courses': [
      'best short term animation courses in NCR',
      'best intensive training institute in Greater Noida',
      'best Maya course in Delhi NCR',
      'best 3ds Max training in Noida',
      'best compositing course in Greater Noida',
      'best quick animation training in NCR'
    ],
    '3d-animation': [
      'best animation courses in NCR',
      'best animation institute in Greater Noida',
      'best Maya training in Delhi NCR',
      'best ZBrush course in Noida',
      'best character animation training in Greater Noida',
      'best 3D modeling course in NCR'
    ],
    'vfx-courses': [
      'best VFX courses in NCR',
      'best visual effects institute in Greater Noida',
      'best Nuke compositing course in Delhi NCR',
      'best Fusion training in Noida',
      'best particle effects course in Greater Noida',
      'best VFX institute in NCR'
    ],
    'multimedia-design-courses': [
      'best graphic design courses in NCR',
      'best design institute in Greater Noida',
      'best UI UX design training in Delhi NCR',
      'best web design course in Noida',
      'best Adobe Creative Suite training in Greater Noida',
      'best Photoshop course in NCR'
    ]
  };

  const categorySpecific = specificKeywords[categorySlug as keyof typeof specificKeywords] || [];
  
  return [...baseKeywords, ...categorySpecific].join(', ');
}

// --- THE PAGE COMPONENT ---
// This is a Server Component that fetches data and passes it to the client component.
export default async function CourseCategoryPage({ params }: PageProps) { // FIX: Corrected the type name here
  const { categorySlug } = await params;
  const category = courseCategories.find(cat => cat.slug === categorySlug);

  // If no category matches the slug in the URL, show a 404 page.
  if (!category) {
    notFound();
  }

  // Get FAQs for this category
  const faqs = getFAQsByCategory(categorySlug);

  return (
    <>
      <CategoryStructuredData category={category} faqs={faqs} />
      <CourseCategoryPageClient category={category} />
    </>
  );
}
