import Link from 'next/link';
import { Metadata } from 'next';
import { siteConfig, locations, services } from '@/lib/config';
import CTABanner from '@/components/ui/CTABanner';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '@/lib/schema';
import { ArrowRight, MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Painters & Decorators Camden Town | Local Painter NW1',
  description: 'Professional painters and decorators in Camden Town NW1. Feature walls, creative studios, landlord refreshes and exterior painting with tidy, insured teams.',
  alternates: {
    canonical: '/areas-we-cover/camden-town',
  },
};

const faqs = [
  {
    question: 'Do you work around Camden Market trading hours?',
    answer: 'Yes. We regularly decorate retail units and food outlets around the High Street and Stable Market. We can work overnight or early mornings to minimise disruption to shoppers and traders.'
  },
  {
    question: 'Can you handle creative interior finishes?',
    answer: 'Camden clients often request bold feature walls, mural-style finishes and colour blocking. We use premium paints, apply samples on site and can replicate brand palettes precisely.'
  },
  {
    question: 'Do you take on rental refurbishments?',
    answer: 'Absolutely. We collaborate with landlords and lettings teams in Camden Town, Primrose Hill and Kentish Town for fast turnarounds between tenants, including full repaints of HMOs and flat shares.'
  },
  {
    question: 'How do you protect communal areas in mansion blocks?',
    answer: 'We liaise with building managers, protect lifts and stairwells, and schedule noisy work during agreed hours. Residents receive notice boards so everyone knows when decorators are on-site.'
  },
  {
    question: 'What about scaffolding for exterior work?',
    answer: 'We partner with trusted scaffolders familiar with Camden permits. We handle licence applications where necessary and ensure pavement access is maintained around busy pedestrian routes.'
  }
];

export default function CamdenTownPage() {
  const location = locations.find((loc) => loc.slug === 'camden-town')!;
  const nearbyAreas = locations.filter((loc) =>
    ['islington', 'highgate', 'golders-green'].includes(loc.slug)
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Areas We Cover', url: `${siteConfig.url}/areas-we-cover` },
    { name: 'Camden Town', url: `${siteConfig.url}/areas-we-cover/camden-town` },
  ]);

  const localBusinessSchema = {
    ...generateLocalBusinessSchema(),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Camden Town',
      addressRegion: 'Greater London',
      postalCode: 'NW1',
      addressCountry: 'United Kingdom',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng,
    },
    areaServed: {
      '@type': 'City',
      name: 'Camden Town',
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
                <span className="font-medium">Camden Town {location.postcode}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Painters & Decorators in Camden Town
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Creative, detail-driven painting for Camden’s iconic townhouses, canal-side apartments and independent businesses. We balance character with durability so every finish stands up to city life.
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
              <h2 className="text-3xl font-bold mb-6">Decorating Camden’s Mix of Properties</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Camden Town blends heritage townhouses on Arlington Road, industrial lofts along the Regent’s Canal and creative studios near Chalk Farm. We tailor our approach to every space—whether you need an expressive feature wall in a music studio or a calm palette for a Primrose Hill townhouse.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Tight access and footfall are never an issue. We protect communal areas, use low-odour paints for apartments above shops and coordinate deliveries through narrow mews without blocking residents or venues.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Projects We Handle in Camden</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  'Gallery-white finishes for creative studios',
                  'High-impact feature walls for retail & hospitality',
                  'Rental refreshes for HMOs and flat shares',
                  'Exterior repainting for period terraces and shopfronts',
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <p className="text-gray-600">{item}</p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                <h4 className="font-semibold text-blue-900 mb-2">Regular hotspots:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Camden High Street, Stables Market and Inverness Street traders</li>
                  <li>• Canal-side apartments near Regent’s Park Road and Oval Road</li>
                  <li>• Mansion blocks on Gloucester Avenue and Parkway</li>
                  <li>• Live/work lofts near Chalk Farm, Mornington Crescent and Kentish Town</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Services in Camden Town</h2>
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
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions – Camden Town</h2>
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
              title="Ready to refresh your Camden property?"
              subtitle="Tell us about your space and we’ll craft a tailored decorating plan"
            />
          </div>
        </div>
      </article>
    </>
  );
}
