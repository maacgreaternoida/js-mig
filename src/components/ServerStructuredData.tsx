import Script from 'next/script';

interface ServerStructuredDataProps {
  type: 'organization';
}

export default function ServerStructuredData({ type }: ServerStructuredDataProps) {
  if (type === 'organization') {
    const organizationData = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "MAAC Greater Noida",
      "alternateName": "MAAC Animation Academy Greater Noida",
      "description": "Leading institute for animation, VFX, gaming, and design courses in Greater Noida. Offering professional training with 100% placement assistance.",
      "url": "https://www.maacgreaternoida.com",
      "logo": "https://www.maacgreaternoida.com/maac-logo-hero.webp",
      "image": "https://www.maacgreaternoida.com/maac-logo-hero.webp",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office No 601, 6th Floor, OM Tower, Alpha 1 Commercial Belt",
        "addressLocality": "Greater Noida",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201310",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-8048052804",
        "contactType": "customer service",
        "areaServed": ["IN", "Delhi NCR", "Greater Noida", "Noida", "Ghaziabad"],
        "availableLanguage": ["English", "Hindi"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "28.4744",
        "longitude": "77.5040"
      },
      "areaServed": {
        "@type": "City",
        "name": "Greater Noida"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Animation & VFX Courses"
      },
      "sameAs": [
        "https://www.facebook.com/maacgreaternoida",
        "https://www.instagram.com/maacgreaternoida",
        "https://www.linkedin.com/company/maac-greater-noida"
      ]
    };

    return (
      <Script
        id="organization-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
    );
  }

  return null;
} 