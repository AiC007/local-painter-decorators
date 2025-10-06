import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Award, Users, MapPin, Clock } from 'lucide-react';
import { locations, siteConfig } from '@/lib/config';
import CTABanner from '@/components/ui/CTABanner';

export const metadata: Metadata = {
  title: 'About Us | Professional Painters & Decorators in North London',
  description: 'Learn about our 10+ years of painting and decorating experience in North London. Quality work, reliable service, and fully insured. Serving Islington to Muswell Hill.',
  openGraph: {
    title: 'About Us | Local Painter & Decorators',
    description: 'Professional painting and decorating services across North London since 2015. Quality, reliability, and customer satisfaction guaranteed.',
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
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
        name: 'About Us',
        item: `${siteConfig.url}/about`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

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
            <li className="text-gray-900 font-medium">About Us</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="mb-12 max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Professional Painters & Decorators Serving North London
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            With over {siteConfig.trust.yearsExperience} years of experience and {siteConfig.trust.reviewsCount}+ satisfied customers,
            we're the trusted choice for painting and decorating across North London.
          </p>
        </header>

        {/* Company Story */}
        <section className="mb-12 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Our Story
          </h2>
          <div className="prose prose-gray prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Founded in {siteConfig.business.establishedYear}, Local Painter & Decorators began with a simple mission: to provide
              North London homeowners and businesses with reliable, high-quality painting and decorating
              services at fair prices. What started as a small operation serving Islington has grown into
              a trusted name across six North London postcodes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our success comes from treating every project—whether it's a single room refresh or a
              complete property transformation—with the same level of care and attention to detail.
              We've built our reputation on word-of-mouth recommendations, repeat business, and a
              commitment to getting things right the first time.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Over the years, we've worked on hundreds of North London properties, from Victorian
              terraces in Crouch End to modern apartments in Wood Green. We understand the unique
              character of each neighbourhood and bring local knowledge to every job. Our team knows
              which materials work best in period properties, how to handle the quirks of older buildings,
              and what modern homeowners expect from their decorators.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we continue to grow through the same principles we started with: tidy, reliable
              workmanship, quality materials, clear communication, and guaranteed results. Being local
              isn't just about geography—it's about being part of the community we serve and taking
              pride in making North London homes and businesses look their best.
            </p>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-blue-50 border border-blue-100 rounded-lg p-6 md:p-8 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {siteConfig.values.map((value, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{value}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {index === 0 && "We respect your home and your time. Dust sheets, clean workspaces, and punctual service are standard."}
                    {index === 1 && "We use premium paints and materials that deliver lasting results. No cutting corners, no compromises."}
                    {index === 2 && "Transparent pricing with detailed written quotes. No hidden costs, no surprises at the end."}
                    {index === 3 && "Full public liability insurance and guarantees on all work. Your peace of mind is our priority."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Why Choose Local Painter & Decorators?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <Clock className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                {siteConfig.trust.yearsExperience}+ Years Experience
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Over a decade of professional painting and decorating across North London.
                We've seen it all and know how to handle any challenge.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <Award className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                {siteConfig.trust.averageRating} Star Rating
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Consistently highly rated across {siteConfig.trust.reviewsCount}+ customer reviews.
                Our reputation speaks for itself.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <Shield className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Fully Insured & Guaranteed
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Comprehensive public liability insurance and workmanship guarantees on every job.
                Complete peace of mind.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section (Placeholder) */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Our Team
          </h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <Users className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Skilled & Professional Decorators
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our team consists of experienced, time-served painters and decorators who take
                  pride in their craft. Each team member is carefully selected for their technical
                  skills, attention to detail, and professional approach to customer service.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We invest in ongoing training to stay current with the latest techniques, materials,
                  and health & safety standards. When we arrive at your property, you can expect
                  courteous, reliable professionals who respect your home and deliver exceptional results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Cover */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Areas We Cover
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We provide professional painting and decorating services across six North London areas:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/areas-we-cover/${location.slug}`}
                className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all group"
              >
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {location.name}
                  </p>
                  <p className="text-sm text-gray-600">{location.postcode}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/areas-we-cover"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              View all coverage areas
              <span className="ml-2">&rarr;</span>
            </Link>
          </div>
        </section>

        {/* Certifications & Insurance */}
        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Certifications & Insurance
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Public Liability Insurance
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We carry comprehensive public liability insurance up to £5 million, protecting
                  you, your property, and our team during every project.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Workmanship Guarantee
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  All our work is backed by a comprehensive guarantee. If there's an issue with
                  our workmanship, we'll make it right—no questions asked.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Trade Qualified
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our decorators are fully qualified with NVQ certifications and years of
                  hands-on experience in both residential and commercial settings.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Health & Safety Certified
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We maintain up-to-date health and safety certifications and follow industry
                  best practices on every job site.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          title="Ready to Work With North London's Trusted Decorators?"
          subtitle="Get your free, no-obligation quote today"
        />
      </div>
    </>
  );
}
