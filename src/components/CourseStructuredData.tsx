import Script from 'next/script';
import type { Course, CourseCategory } from '@/data/course-data';
import type { FAQItem } from '@/data/faq-data';

interface CourseStructuredDataProps {
  course: Course;
  category: CourseCategory;
  faqs?: FAQItem[];
}

export default function CourseStructuredData({ course, category, faqs }: CourseStructuredDataProps) {
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