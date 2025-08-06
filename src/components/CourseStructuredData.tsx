import Script from 'next/script';
import type { Course, CourseCategory } from '@/data/course-data';
import type { FAQItem } from '@/data/faq-data';

interface CourseStructuredDataProps {
  course: Course;
  category: CourseCategory;
  faqs?: FAQItem[];
}

export default function CourseStructuredData({ course, category, faqs }: CourseStructuredDataProps) {
  // Helper function to convert duration to workload format
  const getCourseWorkload = (duration: string) => {
    // Extract number from duration (e.g., "24 Months", "18 Months", "12 Months")
    const match = duration.match(/(\d+)/);
    if (match) {
      const months = parseInt(match[1]);
      // Calculate hours based on typical course workload:
      // - 20 hours per week (4 hours per day, 5 days per week)
      // - 4 weeks per month
      const hoursPerMonth = 80; // 20 hours/week * 4 weeks/month
      const totalHours = months * hoursPerMonth;
      return `PT${totalHours}H`; // ISO 8601 duration format for hours
    }
    
    // Fallback values based on course level
    switch (course.level) {
      case 'Advanced':
        return "PT1920H"; // 24 months * 80 hours = 1920 hours
      case 'Intermediate':
        return "PT1440H"; // 18 months * 80 hours = 1440 hours
      case 'Foundation':
        return "PT960H";  // 12 months * 80 hours = 960 hours
      default:
        return "PT1440H"; // Default to intermediate level
    }
  };

  // Course structured data
  const courseData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.fullName || course.name,
    "description": course.description,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "MAAC Greater Noida",
      "url": "https://maacgreaternoida.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Greater Noida",
        "addressRegion": "Uttar Pradesh",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
        "contactType": "customer service"
      }
    },
    "courseMode": "OnSite",
    "educationalLevel": "Professional",
    "timeRequired": course.duration,
    "coursePrerequisites": "12th standard or equivalent",
    "educationalCredentialAwarded": "Certificate/Diploma",
    "teaches": course.highlights,
    "about": {
      "@type": "Thing",
      "name": `${category.name} Course`
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "OnSite",
      "courseWorkload": getCourseWorkload(course.duration),
      "location": {
        "@type": "Place",
        "name": "MAAC Greater Noida",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Greater Noida",
          "addressRegion": "Uttar Pradesh",
          "addressCountry": "IN"
        }
      }
    },
    "offers": {
      "@type": "Offer",
      "category": "Educational Course",
      "availability": "https://schema.org/InStock"
    }
  };

  // FAQ structured data
  const faqData = faqs && faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <>
      <Script
        id="course-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseData),
        }}
      />
      {faqData && (
        <Script
          id="faq-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqData),
          }}
        />
      )}
    </>
  );
} 