import Link from 'next/link';
import { Metadata } from 'next';
import { siteConfig, locations, services } from '@/lib/config';
import CTABanner from '@/components/ui/CTABanner';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '@/lib/schema';
import { ArrowRight, MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Painters & Decorators Enfield | Local Painter EN1',
  description: 'Trusted painters and decorators in Enfield EN1. Interior & exterior painting, period property specialists, fast quotes, fully insured. Serving Bush Hill Park, Oakwood, Winchmore Hill.',
  alternates: {
    canonical: '/areas-we-cover/enfield',
  },
};

const faqs = [
  {
    question: 'Do you cover all of Enfield Borough?',
    answer: 'Yes. We handle projects across Enfield Town, Bush Hill Park, Winchmore Hill, Oakwood, Southgate and the eastern A10 corridor. Because our team is local we can schedule quotes quickly and start work without long lead times.'
  },
  {
    question: 'Can you work on listed or conservation properties?',
    answer: 'Enfield has several conservation pockets such as Gentlemen’s Row and Chase Side. We understand the additional preparation, breathability requirements and paint specifications that these properties demand and will liaise with building control where required.'
  },
  {
    question: 'How do you manage access and parking in the town centre?',
    answer: 'We arrange visitor permits when needed and often arrive early to secure free bays near Church Street or Genotin Road. For longer projects we coordinate with you to ensure deliveries and scaffold have the correct permissions so there is no disruption.'
  },
  {
    question: 'What exterior services do you provide in Enfield?',
    answer: 'From repainting rendered facades on Victorian villas to repairing pebble-dash semis, we clean, treat and prime every surface. We also refresh masonry walls, fencing, soffits and timber sash windows to withstand North London weather.'
  },
  {
    question: 'How quickly can you start my project?',
    answer: 'Typical lead time is 1–2 weeks, but we keep emergency capacity for urgent landlord or insurance work. Provide your preferred dates on the quote form and we will confirm the closest slot.'
  }
];

export default function EnfieldPage() {
  const location = locations.find((loc) => loc.slug === 'enfield')!;
  const nearbyAreas = locations.filter((loc) =>
    ['wood-green', 'muswell-hill', 'finchley'].includes(loc.slug)
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Areas We Cover', url: `${siteConfig.url}/areas-we-cover` },
    { name: 'Enfield', url: `${siteConfig.url}/areas-we-cover/enfield` },
  ]);

  const localBusinessSchema = {
    ...generateLocalBusinessSchema(),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Enfield',
      addressRegion: 'Greater London',
      postalCode: 'EN1',
      addressCountry: 'United Kingdom',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng,
    },
    areaServed: {
      '@type': 'City',
      name: 'Enfield',
    },
  };

  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, localBusinessSchema, faqSchema]),
        }}
      />

      <article className="bg-gray-50">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-blue-100 mb-4">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Enfield {location.postcode}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Painters & Decorators in Enfield
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Reliable painting and decorating for Enfield’s period terraces, suburban semis and modern developments. Detailed prep, premium materials and tidy workmanship across EN1.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get a Free Quote
                </Link>
                <a
                  href={`tel:${siteConfig.business.phone}`}
                  className="px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  {siteConfig.business.phoneFormatted}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-sm">
              <h2 className="text-3xl font-bold mb-6">Decorators Who Know Enfield</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Enfield blends historic market-town streets around Church Street with newer estates stretching towards Forty Hill, Oakwood and Brimsdown. That means every project is different: lime-plaster cottages near Chase Green require breathable paints, while 1930s semis off the Great Cambridge Road need durable, wipeable finishes for busy family life.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our decorators live and work in North London, so we understand the quirks of Enfield homes—from timber sash restoration on Gentlemen’s Row to colour-accurate refreshes for modern flats near the station. We protect every surface, communicate daily and leave your property spotless.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Common Projects in Enfield</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong>Victorian & Georgian terraces</strong>
                    <span className="block text-gray-600 text-sm">Sensitive prep for cornicing, sash windows and original doors</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong>Suburban semis & bungalows</strong>
                    <span className="block text-gray-600 text-sm">Hard-wearing paints for hallways, loft conversions and kitchens</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong>Rental refreshes</strong>
                    <span className="block text-gray-600 text-sm">Fast turnarounds between tenancies in Bush Hill Park and Southgate</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong>Exterior restoration</strong>
                    <span className="block text-gray-600 text-sm">Render repairs, masonry coatings and woodwork protection for Enfield Town facades</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                <h4 className="font-semibold text-blue-900 mb-2">Neighbourhoods we frequently serve:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Enfield Town, Bush Hill Park, Forty Hill and Gordon Hill</li>
                  <li>• Winchmore Hill, Grange Park and Oakwood</li>
                  <li>• Brimsdown, Ponders End and along the Great Cambridge Road</li>
                  <li>• New River Village and modern developments near Enfield Chase</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Why Enfield Clients Choose Us</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'Local team with quick response times',
                  'Detailed written quotes and timelines',
                  'Premium Dulux Trade, Crown Trade & Johnstone’s paints',
                  'Full insurance and tidy daily clean-downs',
                ].map((benefit) => (
                  <div key={benefit} className="flex gap-3 items-start">
                    <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                    <p className="text-gray-600">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Services in Enfield</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <span className="text-2xl">{service.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-semibold group-hover:text-blue-600">{service.name}</h3>
                      <p className="text-sm text-gray-600">{service.shortDescription}</p>
                    </div>
                    <ArrowRight className="text-gray-400 group-hover:text-blue-600 flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions – Enfield</h2>
              <FAQAccordion faqs={faqs} />
            </div>

            <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Nearby Areas We Also Cover</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {nearbyAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas-we-cover/${area.slug}`}
                    className="flex items-center gap-2 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <MapPin className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                    <div>
                      <div className="font-semibold group-hover:text-blue-600">{area.name}</div>
                      <div className="text-sm text-gray-500">{area.postcode}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <CTABanner
              title="Need a decorator in Enfield?"
              subtitle="Book a fast, detailed quote from our North London team"
            />
          </div>
        </div>
      </article>
    </>
  );
}
