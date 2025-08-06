import CoursesPageClient from '../../components/CoursesPageClient';
import CoursesPageStructuredData from '../../components/CoursesPageStructuredData';
import { courseCategories } from '../../data/course-data';
import { getFAQsByCategory } from '../../data/faq-data';

// This is the main Server Component for the /courses route.
// It fetches or defines data and passes it to the client component.
export default function CoursesPage() {
  // In a real app, you might fetch this data from a CMS.
  // For now, we import it from a local file.
  const totalCourses = courseCategories.reduce((total, cat) => total + cat.totalCourses, 0);

  // Get general FAQs for the courses page
  const faqs = getFAQsByCategory('general');

  return (
    <>
      <CoursesPageStructuredData 
        courseCategories={courseCategories}
        faqs={faqs}
      />
      <CoursesPageClient 
        courseCategories={courseCategories}
        totalCourses={totalCourses}
      />
    </>
  );
}
