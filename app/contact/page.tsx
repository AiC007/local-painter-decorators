import Link from 'next/link';
import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteConfig, locations } from '@/lib/config';
import NAP from '@/components/layout/NAP';
import ContactForm from '@/components/contact/ContactForm';

const propertyTypes = [
  'Flat/Apartment',
  'Terraced House',
  'Semi-Detached House',
  'Detached House',
  'Commercial Property',
  'Other',
];

const openingHours = [
  { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
  { day: 'Sunday', hours: 'Closed (Emergency calls only)' },
];

export const metadata: Metadata = {
  title: 'Contact Our North London Decorators | Free Quote in 24H',
  description:
    'Request a free painting & decorating quote for Enfield, Finchley, Highgate, Islington, Crouch End, Wood Green, Camden Town, Muswell Hill or Golders Green.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
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
        name: 'Contact',
        item: `${siteConfig.url}/contact`,
      },
    ],
  };

  const coverageBadges = locations.map((location) => `${location.name} ${location.postcode}`);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container mx-auto px-4 py-8 md:py-12">
        <nav className="text-sm mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-gray-600">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">Contact</li>
          </ol>
        </nav>

        <header className="mb-12 max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get Your Free Quote Today
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Ready to transform your space? Share the details below or call us directly. We'll respond
            within 24 hours with a detailed, no-obligation quote.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Request a Free Quote</h2>
              <ContactForm propertyTypes={propertyTypes} />
            </div>
          </div>

          <div className="space-y-6">
            <NAP variant="default" />

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-lg text-gray-900">Opening Hours</h3>
              </div>
              <div className="space-y-3">
                {openingHours.map((schedule) => (
                  <div key={schedule.day} className="flex justify-between items-start">
                    <span className="text-sm font-medium text-gray-700">{schedule.day}</span>
                    <span className="text-sm text-gray-600 text-right">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">Prefer to Talk?</h3>
              <p className="text-sm text-gray-700 mb-4">
                Call us for immediate assistance or to discuss your decorating plans in detail.
              </p>
              <a
                href={`tel:${siteConfig.business.phone}`}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {siteConfig.business.phoneFormatted}
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-lg text-gray-900">We Cover</h3>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                North London including Enfield, Finchley, Highgate, Islington, Crouch End, Wood
                Green, Camden Town, Muswell Hill and Golders Green.
              </p>
              <div className="flex flex-wrap gap-2">
                {coverageBadges.map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Service Area</h2>
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 rounded-lg p-12 md:p-16 text-center">
            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Interactive coverage map coming soon
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
              We currently serve Enfield, Finchley, Highgate, Islington, Crouch End, Wood Green,
              Camden Town, Muswell Hill and Golders Green. Tell us your postcode and we'll confirm
              availability straight away.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Ways to Reach Us</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                <a
                  href={`tel:${siteConfig.business.phone}`}
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {siteConfig.business.phoneFormatted}
                </a>
                <p className="text-sm text-gray-600 mt-1">Mon–Fri 8am-6pm, Sat 9am-4pm</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <a
                  href={`mailto:${siteConfig.business.email}`}
                  className="text-blue-600 hover:text-blue-700 transition-colors break-all text-sm"
                >
                  {siteConfig.business.email}
                </a>
                <p className="text-sm text-gray-600 mt-1">We respond within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Service Area</h3>
                <p className="text-gray-700">{siteConfig.business.serviceArea}</p>
                <Link
                  href="/areas-we-cover"
                  className="text-sm text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center gap-1 mt-1"
                >
                  See all areas <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
