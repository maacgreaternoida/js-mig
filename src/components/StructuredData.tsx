"use client";

import { useEffect } from 'react';
import type { Course, CourseCategory } from '@/data/course-data';
import type { FAQItem } from '@/data/faq-data';

interface CourseStructuredDataProps {
  course?: Course;
  category?: CourseCategory;
  faqs?: FAQItem[];
  type: 'course' | 'organization' | 'faq';
}

interface StructuredDataSchema {
  "@context": string;
  "@type": string;
  [key: string]: unknown;
}

export default function StructuredData({ course, category, faqs, type }: CourseStructuredDataProps) {
  useEffect(() => {
    let structuredData: StructuredDataSchema | null = null;

    switch (type) {
      case 'course':
        if (course && category) {
          structuredData = {
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
          } as StructuredDataSchema;
        }
        break;

      case 'organization':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "MAAC Greater Noida",
          "alternateName": "MAAC Animation Academy Greater Noida",
          "description": "Leading institute for animation, VFX, gaming, and design courses in Greater Noida. Offering professional training with 100% placement assistance.",
          "url": "https://maacgreaternoida.com",
          "logo": "https://maacgreaternoida.com/maac-logo-hero.webp",
          "image": "https://maacgreaternoida.com/maac-logo-hero.webp",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "MAAC Greater Noida",
            "addressLocality": "Greater Noida",
            "addressRegion": "Uttar Pradesh",
            "postalCode": "201310",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-XXXXXXXXXX",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi"]
          },
          "sameAs": [
            "https://www.facebook.com/maacgreaternoida",
            "https://www.instagram.com/maacgreaternoida",
            "https://www.linkedin.com/company/maac-greater-noida"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Animation and VFX Courses",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Course",
                  "name": "3D Animation Courses"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Course",
                  "name": "VFX Courses"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Course",
                  "name": "Gaming Courses"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Course",
                  "name": "Design Courses"
                }
              }
            ]
          }
        } as StructuredDataSchema;
        break;

      case 'faq':
        if (faqs && faqs.length > 0) {
          structuredData = {
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
          } as StructuredDataSchema;
        }
        break;
    }

    // Remove existing structured data script if any
    const existingScript = document.querySelector(`script[data-structured-data="${type}"]`);
    if (existingScript) {
      existingScript.remove();
    }

    // Create and append new structured data script
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-structured-data', type);
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup on unmount
      const scriptToRemove = document.querySelector(`script[data-structured-data="${type}"]`);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [course, category, faqs, type]);

  return null; // This component doesn't render anything
} 