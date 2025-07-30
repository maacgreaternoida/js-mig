import { MetadataRoute } from 'next';
import { courseCategories } from '@/data/course-data';

export default function sitemap(): MetadataRoute.Sitemap {
  // IMPORTANT: Replace this with your actual website domain
  const baseUrl = 'https://www.maacgreaternoida.com';

  // 1. URLs for your static pages
  const staticRoutes = [
    '/',
    '/courses',
    '/degree-bvoc',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    priority: route === '/' ? 1.0 : 0.8, // Give homepage highest priority
  }));

  // 2. URLs for your dynamic course category pages (e.g., /courses/3d-animation)
  const categoryRoutes = courseCategories.map((category) => ({
    url: `${baseUrl}/courses/${category.slug}`,
    lastModified: new Date().toISOString(),
    priority: 0.7,
  }));

  // 3. URLs for your dynamic individual course detail pages
  const courseDetailRoutes = courseCategories.flatMap((category) =>
    category.courses.map((course) => ({
      url: `${baseUrl}/courses/${category.slug}/${course.slug}`,
      lastModified: new Date().toISOString(),
      priority: 0.6,
    }))
  );

  // Combine all routes into a single sitemap array
  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...courseDetailRoutes,
  ];
}
