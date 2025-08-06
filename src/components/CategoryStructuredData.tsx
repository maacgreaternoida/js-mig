import Script from 'next/script';
import type { CourseCategory } from '@/data/course-data';
import type { FAQItem } from '@/data/faq-data';

interface CategoryStructuredDataProps {
  category: CourseCategory;
  faqs?: FAQItem[];
}

export default function CategoryStructuredData({ category, faqs }: CategoryStructuredDataProps) {
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
    switch (category.courses[0]?.level) {
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

  // CollectionPage structured data for the category page
  const collectionPageData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${category.name} Courses`,
    "description": category.description,
    "url": `https://maacgreaternoida.com/courses/${category.slug}`,
    "mainEntity": {
      "@type": "ItemList",
      "name": `${category.name} Course Collection`,
      "numberOfItems": category.courses.length,
      "itemListElement": category.courses.map((course, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Course",
          "name": course.fullName || course.name,
          "description": course.description,
          "url": `https://maacgreaternoida.com/courses/${category.slug}/${course.slug}`,
          "provider": {
            "@type": "EducationalOrganization",
            "name": "MAAC Greater Noida",
            "url": "https://maacgreaternoida.com"
          },
          "educationalLevel": "Professional",
          "timeRequired": course.duration,
          "courseMode": "OnSite",
          "coursePrerequisites": "12th standard or equivalent",
          "educationalCredentialAwarded": "Certificate/Diploma",
          "teaches": course.highlights,
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
        "item": "https://maacgreaternoida.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Courses",
        "item": "https://maacgreaternoida.com/courses"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": category.name,
        "item": `https://maacgreaternoida.com/courses/${category.slug}`
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
        id="collection-page-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionPageData),
        }}
      />
      <Script
        id="breadcrumb-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />
      {faqData && (
        <Script
          id="category-faq-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqData),
          }}
        />
      )}
    </>
  );
} 