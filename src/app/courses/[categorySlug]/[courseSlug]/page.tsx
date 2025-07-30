import { notFound } from 'next/navigation';
import { courseCategories } from '@/data/course-data';
import CourseDetailPageClient from '@/components/CourseDetailPageClient';
import type { Metadata } from 'next';

// This interface defines the shape of the params object from the URL
interface PageProps {
  params: Promise<{
    categorySlug: string;
    courseSlug: string;
  }>;
}

// --- DYNAMIC SEO METADATA ---
// This function generates unique SEO tags for each individual course page.
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { categorySlug, courseSlug } = await params;
  const category = courseCategories.find(cat => cat.slug === categorySlug);
  const course = category?.courses.find(c => c.slug === courseSlug);

  if (!course) {
    return { title: 'Course Not Found' };
  }

  return {
    title: `${course.fullName || course.name} | MAAC Greater Noida`,
    description: course.description,
    openGraph: {
      title: `${course.fullName || course.name} | MAAC Greater Noida`,
      description: course.description,
    },
  };
}

// --- THE PAGE COMPONENT ---
// This is a Server Component that fetches data and passes it to the client component.
export default async function CourseDetailPage({ params }: PageProps) {
  const { categorySlug, courseSlug } = await params;
  const category = courseCategories.find(cat => cat.slug === categorySlug);
  const course = category?.courses.find(c => c.slug === courseSlug);

  // If the course or category doesn't exist, show a 404 page.
  if (!category || !course) {
    notFound();
  }

  return <CourseDetailPageClient category={category} course={course} />;
}
