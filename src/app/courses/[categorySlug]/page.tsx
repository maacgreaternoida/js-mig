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

  return {
    title: `${category.name} Courses | MAAC Greater Noida`,
    description: category.description,
    openGraph: {
      title: `${category.name} Courses | MAAC Greater Noida`,
      description: category.description,
      images: [{ url: `/courses/${category.slug}-og.jpg` }], // Assumes you create an OG image for each category
    },
  };
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
