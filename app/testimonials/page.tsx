import { Metadata } from 'next';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import TestimonialCard from '@/components/ui/TestimonialCard';
import CTABanner from '@/components/ui/CTABanner';
import testimonialsData from '@/data/testimonials.json';

export const metadata: Metadata = {
  title: 'Customer Reviews & Testimonials | Local Painter & Decorators',
  description: 'Read genuine reviews from our North London customers. See why homeowners across Islington, Finchley, and beyond trust us for quality painting and decorating.',
  openGraph: {
    title: 'Customer Reviews & Testimonials',
    description: 'Genuine customer reviews from painting and decorating projects across North London.',
    url: `${siteConfig.url}/testimonials`,
  },
};

export default function TestimonialsPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteConfig.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Testimonials',
        item: `${siteConfig.url}/testimonials`,
      },
    ],
  };

  // Generate Review schema for each testimonial
  const reviewSchemas = testimonialsData.map((testimonial, index) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    '@id': `${siteConfig.url}/testimonials#review-${testimonial.id}`,
    itemReviewed: {
      '@type': 'LocalBusiness',
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
    reviewRating: {
      '@type': 'Rating',
      ratingValue: testimonial.rating,
      bestRating: 5,
      worstRating: 1,
    },
    author: {
      '@type': 'Person',
      name: testimonial.name,
    },
    reviewBody: testimonial.quote,
    description: `${testimonial.jobType} in ${testimonial.area}`,
  }));

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {reviewSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-gray-600">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">Testimonials</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="mb-12 max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Customer Reviews & Testimonials
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Don't just take our word for it. Read what our customers across North London
            have to say about our painting and decorating services. Every review represents
            a real project and a satisfied customer.
          </p>
        </header>

        {/* Trust Indicators */}
        <section className="bg-blue-50 border border-blue-100 rounded-lg p-6 md:p-8 mb-12">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-3xl font-bold text-gray-900">{siteConfig.trust.averageRating}</p>
              <p className="text-sm text-gray-600">Average Rating</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-gray-900">{siteConfig.trust.reviewsCount}+</p>
              <p className="text-sm text-gray-600">Customer Reviews</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-gray-900">{siteConfig.trust.yearsExperience}+</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
          </div>
        </section>

        {/* Why Our Reviews Matter */}
        <section className="mb-12 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Why Customer Reviews Matter
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              We understand that inviting tradespeople into your home is a big decision.
              That's why we let our work—and our customers—speak for themselves. Every
              testimonial on this page comes from a real North London project.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our reputation is built on word-of-mouth recommendations and repeat business.
              We take pride in maintaining the highest standards on every job, whether it's
              a single room refresh or a complete property makeover.
            </p>
          </div>
        </section>

        {/* Filter/Sort Options (Placeholder) */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-sm font-medium text-gray-700">Filter by:</span>
            <button
              className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
              aria-label="Show all reviews"
            >
              All Reviews
            </button>
            <button
              className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 transition-colors"
              aria-label="Filter by interior painting"
            >
              Interior Painting
            </button>
            <button
              className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 transition-colors"
              aria-label="Filter by exterior painting"
            >
              Exterior Painting
            </button>
            <button
              className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 transition-colors"
              aria-label="Filter by wallpapering"
            >
              Wallpapering
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Note: Filters will be functional in the next update
          </p>
        </div>

        {/* Testimonials Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsData.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                area={testimonial.area}
                jobType={testimonial.jobType}
                rating={testimonial.rating}
                quote={testimonial.quote}
              />
            ))}
          </div>
        </section>

        {/* Leave a Review Section */}
        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Recently Completed a Project?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We'd love to hear about your experience. Your feedback helps us improve our
            service and helps other North London homeowners make informed decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`mailto:${siteConfig.business.email}?subject=Review for Recent Project`}
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              Share Your Experience
            </a>
            <a
              href={siteConfig.social.google || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
            >
              Review on Google
            </a>
          </div>
        </section>

        {/* Service Areas Mentioned in Reviews */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Serving Customers Across North London
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our reviews come from satisfied customers in all our service areas:
          </p>
          <div className="flex flex-wrap gap-2">
            {['Islington N1', 'Finchley N3', 'Wood Green N22', 'Crouch End N8', 'Highgate N6', 'Muswell Hill N10'].map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200"
              >
                {area}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          title="Join Our Satisfied Customers"
          subtitle="Experience the quality and service that earns us 5-star reviews"
        />
      </div>
    </>
  );
}
