import Script from 'next/script';
import type { CourseCategory } from '@/data/course-data';
import type { FAQItem } from '@/data/faq-data';

interface CoursesPageStructuredDataProps {
  courseCategories: CourseCategory[];
  faqs?: FAQItem[];
}

export default function CoursesPageStructuredData({ courseCategories, faqs }: CoursesPageStructuredDataProps) {
  // Helper function to convert duration to workload format
  const getCourseWorkload = (duration: string) => {
    const match = duration.match(/(\d+)/);
    if (match) {
      const months = parseInt(match[1]);
      const hoursPerMonth = 80; // 20 hours/week * 4 weeks/month
      const totalHours = months * hoursPerMonth;
      return `PT${totalHours}H`;
    }
    return "PT1440H"; // Default fallback
  };

  // CollectionPage structured data for the main courses page
  const collectionPageData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Courses at MAAC Greater Noida",
    "description": "Discover world-class programs designed to transform your passion into a successful career. Learn from industry experts and master the tools used by professionals worldwide.",
    "url": "https://www.maacgreaternoida.com/courses",
    "mainEntity": {
      "@type": "ItemList",
      "name": "MAAC Course Categories",
      "numberOfItems": courseCategories.length,
      "itemListElement": courseCategories.map((category, categoryIndex) => ({
        "@type": "ListItem",
        "position": categoryIndex + 1,
        "item": {
          "@type": "Course",
          "name": `${category.name} Courses`,
          "description": category.description,
          "url": `https://www.maacgreaternoida.com/courses/${category.slug}`,
          "provider": {
            "@type": "EducationalOrganization",
             "name": "MAAC Greater Noida",
             "url": "https://www.maacgreaternoida.com"
          },
          "educationalLevel": "Professional",
          "courseMode": "OnSite",
          "coursePrerequisites": "12th standard or equivalent",
          "educationalCredentialAwarded": "Certificate/Diploma",
          "teaches": category.courses.flatMap(course => course.highlights || []),
          "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "OnSite",
            "courseWorkload": getCourseWorkload(category.courses[0]?.duration || "18 Months"),
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
        }
      }))
    }
  };

  // BreadcrumbList structured data
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.maacgreaternoida.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Courses",
        "item": "https://www.maacgreaternoida.com/courses"
      }
    ]
  };

  // FAQ structured data (if FAQs are available)
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
        id="courses-page-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionPageData),
        }}
      />
      <Script
        id="courses-breadcrumb-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />
      {faqData && (
        <Script
          id="courses-faq-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqData),
          }}
        />
      )}
    </>
  );
} 