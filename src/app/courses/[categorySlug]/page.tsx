import { notFound } from 'next/navigation';
import { courseCategories } from '@/data/course-data';
import CourseCategoryPageClient from '@/components/CourseCategoryPageClient';
import type { Metadata } from 'next';

// This interface defines the shape of the params object
interface PageProps {
  params: {
    categorySlug: string;
  };
}

// --- DYNAMIC SEO METADATA ---
// This function generates unique SEO tags for each category page.
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const category = courseCategories.find(cat => cat.slug === params.categorySlug);

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
export default function CourseCategoryPage({ params }: PageProps) { // FIX: Corrected the type name here
  const { categorySlug } = params;
  const category = courseCategories.find(cat => cat.slug === categorySlug);

  // If no category matches the slug in the URL, show a 404 page.
  if (!category) {
    notFound();
  }

  return <CourseCategoryPageClient category={category} />;
}
