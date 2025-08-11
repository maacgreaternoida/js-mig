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