import CoursesPageClient from '../../components/CoursesPageClient';
import { courseCategories } from '../../data/course-data'; // We'll store data separately for cleanliness

// This is the main Server Component for the /courses route.
// It fetches or defines data and passes it to the client component.
export default function CoursesPage() {
  // In a real app, you might fetch this data from a CMS.
  // For now, we import it from a local file.
  const totalCourses = courseCategories.reduce((total, cat) => total + cat.totalCourses, 0);

  return (
    <CoursesPageClient 
      courseCategories={courseCategories}
      totalCourses={totalCourses}
    />
  );
}
