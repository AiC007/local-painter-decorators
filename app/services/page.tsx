import Link from 'next/link';
import { Metadata } from 'next';
import { siteConfig, services } from '@/lib/config';
import CTABanner from '@/components/ui/CTABanner';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Our Painting & Decorating Services',
  description: `Professional painting and decorating services across ${siteConfig.business.serviceArea}. Interior painting, exterior painting, wallpapering, plaster repairs, woodwork and commercial decorating.`,
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Services', url: `${siteConfig.url}/services` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Painting & Decorating Services in {siteConfig.business.serviceArea}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From single-room refreshes to complete property transformations, we deliver exceptional results across all types of decorating work. Every project receives the same meticulous attention to detail, quality materials, and professional finish.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all group"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h2 className="text-2xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.shortDescription}
                </p>
                <span className="text-blue-600 font-medium group-hover:underline flex items-center gap-2">
                  View details →
                </span>
              </Link>
            ))}
          </div>

          {/* Why choose us for all services */}
          <div className="bg-white rounded-lg p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">What's Included in Every Project</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex gap-3">
                <span className="text-blue-600 font-bold text-lg">✓</span>
                <div>
                  <h3 className="font-semibold mb-1">Free, Detailed Quote</h3>
                  <p className="text-gray-600 text-sm">No-obligation site visit with transparent, itemised pricing</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-blue-600 font-bold text-lg">✓</span>
                <div>
                  <h3 className="font-semibold mb-1">Professional Preparation</h3>
                  <p className="text-gray-600 text-sm">Thorough surface prep, filling, sanding and priming</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-blue-600 font-bold text-lg">✓</span>
                <div>
                  <h3 className="font-semibold mb-1">Quality Trade Materials</h3>
                  <p className="text-gray-600 text-sm">Premium paints and materials from trusted brands</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-blue-600 font-bold text-lg">✓</span>
                <div>
                  <h3 className="font-semibold mb-1">Full Protection & Cleanup</h3>
                  <p className="text-gray-600 text-sm">Dustsheets, masking, and immaculate final cleanup</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-blue-600 font-bold text-lg">✓</span>
                <div>
                  <h3 className="font-semibold mb-1">Guaranteed Work</h3>
                  <p className="text-gray-600 text-sm">All work comes with our quality guarantee</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-blue-600 font-bold text-lg">✓</span>
                <div>
                  <h3 className="font-semibold mb-1">Fully Insured</h3>
                  <p className="text-gray-600 text-sm">Comprehensive public liability insurance</p>
                </div>
              </div>
            </div>
          </div>

          <CTABanner
            title="Ready to Get Started?"
            subtitle="Contact us for a free quote on any of our services"
          />
        </div>
      </div>
    </>
  );
}
