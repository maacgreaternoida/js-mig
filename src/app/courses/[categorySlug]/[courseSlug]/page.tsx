import { notFound } from 'next/navigation';
import { courseCategories } from '@/data/course-data';
import CourseDetailPageClient from '@/components/CourseDetailPageClient';
import CourseStructuredData from '@/components/CourseStructuredData';
import { getFAQsByCategory } from '@/data/faq-data';
import type { Metadata } from 'next';

// This interface defines the shape of the params object from the URL
interface PageProps {
  params: Promise<{
    categorySlug: string;
    courseSlug: string;
  }>;
}

// --- STATIC PARAMS GENERATION ---
// This function generates all possible category and course slug combinations at build time.
// This is required for static export (output: export) in Next.js.
export async function generateStaticParams() {
  const params: { categorySlug: string; courseSlug: string }[] = [];
  
  courseCategories.forEach(category => {
    category.courses.forEach(course => {
      params.push({
        categorySlug: category.slug,
        courseSlug: course.slug,
      });
    });
  });
  
  return params;
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

  // Compute key software (take up to 2 prominent tools)
  const keySoftware = (course.softwareCovered || []).slice(0, 2).map(s => s.name).join(', ');

  // Generate location-specific keywords
  const locationKeywords = [
    `${course.name.toLowerCase()} course in Greater Noida`,
    `${course.name.toLowerCase()} training in Noida`,
    `${course.name.toLowerCase()} institute in Delhi NCR`
  ];

  // Formula-based meta
  const title = `${course.fullName || course.name} in Greater Noida | Learn ${keySoftware || 'Industry Tools'} | MAAC`;
  const courseDescription = `Join our top-rated ${course.fullName || course.name} in Greater Noida. Master ${keySoftware || 'industry-standard tools'} and get 100% placement support. Inquire now to build your creative career!`;

  return {
    title,
    description: courseDescription,
    keywords: [
      `${course.name.toLowerCase()} course in Greater Noida`,
      `${course.name.toLowerCase()} training in Noida`,
      `${course.name.toLowerCase()} institute in Delhi NCR`,
      `MAAC ${course.name.toLowerCase()} course`,
      `${category?.name.toLowerCase()} course Greater Noida`,
      ...locationKeywords
    ].join(', '),
    alternates: { canonical: `/courses/${category?.slug}/${course.slug}` },
    openGraph: {
      title,
      description: courseDescription,
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

  // Get FAQs for this course category
  const faqs = getFAQsByCategory(categorySlug);

  return (
    <>
      <CourseStructuredData course={course} category={category} faqs={faqs} />
      <CourseDetailPageClient category={category} course={course} />
    </>
  );
}
