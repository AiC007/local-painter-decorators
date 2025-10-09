import { siteConfig } from './config';

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'PaintingCompany',
    '@id': `${siteConfig.url}#organization`,
    name: siteConfig.business.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    telephone: siteConfig.business.phone,
    email: siteConfig.business.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.business.address.city,
      addressRegion: siteConfig.business.address.region,
      addressCountry: siteConfig.business.address.country,
    },
    areaServed: {
      '@type': 'City',
      name: 'North London',
    },
    priceRange: '££',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.trust.averageRating.toString(),
      reviewCount: siteConfig.trust.reviewsCount.toString(),
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}#localbusiness`,
    name: siteConfig.business.name,
    image: `${siteConfig.url}/logo.png`,
    telephone: siteConfig.business.phone,
    email: siteConfig.business.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.business.address.city,
      addressRegion: siteConfig.business.address.region,
      addressCountry: siteConfig.business.address.country,
    },
    priceRange: '££',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '15:00',
      },
    ],
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@id': `${siteConfig.url}#organization`,
    },
    areaServed: {
      '@type': 'City',
      name: 'North London',
    },
    description: service.description,
    url: service.url,
  };
}

export function generateReviewSchema(review: {
  name: string;
  rating: number;
  quote: string;
  jobType: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'LocalBusiness',
      '@id': `${siteConfig.url}#organization`,
      name: siteConfig.business.name,
      image: `${siteConfig.url}/og-image.jpg`,
      telephone: siteConfig.business.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: siteConfig.business.address.city,
        addressRegion: siteConfig.business.address.region,
        addressCountry: siteConfig.business.address.country,
      },
    },
    author: {
      '@type': 'Person',
      name: review.name,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    reviewBody: review.quote,
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
