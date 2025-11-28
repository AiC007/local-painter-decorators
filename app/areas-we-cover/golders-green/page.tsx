import Link from 'next/link';
import { Metadata } from 'next';
import { siteConfig, locations, services } from '@/lib/config';
import CTABanner from '@/components/ui/CTABanner';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '@/lib/schema';
import { ArrowRight, MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Painters & Decorators Golders Green | Local Painter NW11',
  description: 'Premium painters and decorators in Golders Green NW11. Heritage-grade finishes for Hampstead Garden Suburb homes plus tidy refreshes for flats and shops along Finchley Road.',
  alternates: {
    canonical: '/areas-we-cover/golders-green',
  },
};

const faqs = [
  {
    question: 'Do you understand Hampstead Garden Suburb guidelines?',
    answer: 'Yes. We have experience working within the Trust’s guidelines covering colour palettes, exterior prep and working hours. We use breathable coatings and provide sample approvals before commencing work.'
  },
  {
    question: 'Can you match existing woodwork and panelling?',
    answer: 'Golders Green properties often feature bespoke cabinetry and panelling. We take detailed colour readings, create sample boards and use durable satin or eggshell finishes for a seamless result.'
  },
  {
    question: 'Do you work with interior designers?',
    answer: 'We frequently collaborate with designers in Hampstead Garden Suburb, Temple Fortune and Childs Hill. We’re happy to work from specifications, mood boards or site meetings.'
  },
  {
    question: 'What about commercial spaces on Finchley Road?',
    answer: 'We repaint shopfronts, clinics, cafés and offices along Finchley Road and Golders Green Road. Work can be scheduled out of hours to keep trading uninterrupted.'
  },
  {
    question: 'Are you fully insured?',
    answer: 'Yes, we carry comprehensive public liability insurance and provide method statements when requested by managing agents or residents’ associations.'
  }
];

export default function GoldersGreenPage() {
  const location = locations.find((loc) => loc.slug === 'golders-green')!;
  const nearbyAreas = locations.filter((loc) =>
    ['finchley', 'muswell-hill', 'highgate'].includes(loc.slug)
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Areas We Cover', url: `${siteConfig.url}/areas-we-cover` },
    { name: 'Golders Green', url: `${siteConfig.url}/areas-we-cover/golders-green` },
  ]);

  const localBusinessSchema = {
    ...generateLocalBusinessSchema(),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Golders Green',
      addressRegion: 'Greater London',
      postalCode: 'NW11',
      addressCountry: 'United Kingdom',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng,
    },
    areaServed: {
      '@type': 'City',
      name: 'Golders Green',
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
                <span className="font-medium">Golders Green {location.postcode}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Painters & Decorators in Golders Green
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Discreet, meticulous decorating for Golders Green homes, from Edwardian villas near Hampstead Garden Suburb to apartments overlooking the Heath Extension.
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
              <h2 className="text-3xl font-bold mb-6">Specialists in NW11 Homes</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Golders Green homes often feature timber panelling, bespoke cabinetry and sophisticated colour palettes. We prepare every surface carefully—repairing cracks in lath and plaster ceilings, restoring decorative mouldings and filling decades-old picture rail fixings so walls look flawless before we paint.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                We use low-VOC paints to keep indoor air quality high and can source specialist finishes such as Farrow & Ball, Little Greene or designer wallpapers. Working in occupied homes is second nature: we protect floors with clean runners and leave each space usable at the end of the day.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Popular Services in Golders Green</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  'Full interior repaints for Hampstead Garden Suburb houses',
                  'Kitchen cabinet resprays and woodwork refinishing',
                  'Exterior painting including render, stucco and timber detailing',
                  'Wallpaper hanging in reception rooms, stairwells and loft conversions',
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <p className="text-gray-600">{item}</p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                <h4 className="font-semibold text-blue-900 mb-2">Neighbourhood focus:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Hampstead Garden Suburb and the Heath Extension</li>
                  <li>• Temple Fortune, Childs Hill and Hampstead Way</li>
                  <li>• Apartments and clinics along Finchley Road</li>
                  <li>• Detached homes near North End Road and Green Lane</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Services in Golders Green</h2>
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
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions – Golders Green</h2>
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
              title="Book skilled decorators in Golders Green"
              subtitle="Share your plans and we’ll create a tailored quote for your NW11 home"
            />
          </div>
        </div>
      </article>
    </>
  );
}
