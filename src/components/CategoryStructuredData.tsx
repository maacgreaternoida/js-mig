import Script from 'next/script';
import type { CourseCategory } from '@/data/course-data';
import type { FAQItem } from '@/data/faq-data';

interface CategoryStructuredDataProps {
  category: CourseCategory;
  faqs?: FAQItem[];
}

export default function CategoryStructuredData({ category, faqs }: CategoryStructuredDataProps) {
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
            "name": "MAAC Greater Noida"
          },
          "educationalLevel": "Professional",
          "timeRequired": course.duration
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