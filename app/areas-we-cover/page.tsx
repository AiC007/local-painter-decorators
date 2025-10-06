import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, CheckCircle, Clock, Shield } from 'lucide-react';
import { locations, siteConfig } from '@/lib/config';
import CTABanner from '@/components/ui/CTABanner';

export const metadata: Metadata = {
  title: 'Areas We Cover | North London Painters & Decorators',
  description: `Professional painting and decorating services across North London including ${locations.map(l => l.name).join(', ')}. Local expertise, fast response times, and reliable service.`,
  openGraph: {
    title: 'Areas We Cover | North London Painters & Decorators',
    description: 'Serving Islington, Finchley, Wood Green, Crouch End, Highgate, and Muswell Hill with professional painting services.',
    url: `${siteConfig.url}/areas-we-cover`,
  },
};

export default function AreasWeCoverPage() {
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
        name: 'Areas We Cover',
        item: `${siteConfig.url}/areas-we-cover`,
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
            <li className="text-gray-900 font-medium">Areas We Cover</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="mb-12 max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Professional Painting & Decorating Across North London
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            We provide expert painting and decorating services throughout North London.
            Our local presence means faster response times, competitive pricing, and decorators
            who understand the unique character of your area.
          </p>
        </header>

        {/* Why Choose Local */}
        <section className="bg-blue-50 border border-blue-100 rounded-lg p-6 md:p-8 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Why Choose a Local Decorator?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Fast Response Times</h3>
                <p className="text-gray-700">
                  Being local means we can visit for quotes quickly and start work sooner.
                  No long waits or scheduling conflicts with jobs across the city.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Local Knowledge</h3>
                <p className="text-gray-700">
                  We know North London properties inside and out—from Victorian terraces to modern
                  flats. We understand the specific challenges and opportunities of your home.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Reputation Matters</h3>
                <p className="text-gray-700">
                  Our business thrives on local recommendations and repeat customers.
                  We take pride in every job because our reputation depends on it.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Community Focused</h3>
                <p className="text-gray-700">
                  We're part of the community we serve. Supporting local means supporting
                  your neighbours and investing back into the area.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Our North London Coverage Area
          </h2>
          <p className="text-gray-700 mb-8 max-w-3xl leading-relaxed">
            We're proud to serve residents and businesses across these six North London areas.
            Click through to learn more about our services in your specific location.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/areas-we-cover/${location.slug}`}
                className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {location.name}
                    </h3>
                    <p className="text-sm text-gray-600">{location.postcode}</p>
                  </div>
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  Professional painting and decorating services in {location.name}.
                  Fast quotes, quality work, and local expertise.
                </p>

                <div className="flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all">
                  <span>View {location.name} services</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Coverage Details */}
        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Comprehensive Coverage Across All Six Areas
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Our team covers the entire North London region, with particular expertise in
              Islington (N1), Finchley (N3), Wood Green (N22), Crouch End (N8), Highgate (N6),
              and Muswell Hill (N10). We understand the architectural diversity across these
              areas and tailor our approach accordingly.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you're in a converted flat in Islington, a Victorian terrace in
              Crouch End, or a detached property in Highgate, we have the experience and
              local knowledge to deliver exceptional results. Our vans are regularly in your
              neighbourhood, which means we can combine site visits efficiently and pass
              those savings on to you.
            </p>
          </div>
        </section>

        {/* Services in Your Area */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Services Available in All Areas
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Interior Painting</h3>
                <p className="text-sm text-gray-600">Walls, ceilings, and feature walls</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Exterior Painting</h3>
                <p className="text-sm text-gray-600">Facades, render, and brickwork</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Wallpapering</h3>
                <p className="text-sm text-gray-600">Hanging and pattern matching</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Woodwork & Trim</h3>
                <p className="text-sm text-gray-600">Doors, skirting, and frames</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Plaster Repairs</h3>
                <p className="text-sm text-gray-600">Cracks, holes, and preparation</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Commercial Work</h3>
                <p className="text-sm text-gray-600">Offices, shops, and venues</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          title="Ready to Get Started in Your Area?"
          subtitle="Fast quotes, local expertise, and quality workmanship across North London"
        />
      </div>
    </>
  );
}
