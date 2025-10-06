import Link from 'next/link';
import { Metadata } from 'next';
import { siteConfig, services, locations } from '@/lib/config';
import CTABanner from '@/components/ui/CTABanner';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '@/lib/schema';
import { ArrowRight, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Painters & Decorators Finchley | Local Painter N3',
  description: 'Professional painters and decorators in Finchley N3. Expert painting services for Edwardian homes, semi-detached houses and modern properties. Free quotes, fully insured.',
  alternates: {
    canonical: '/areas-we-cover/finchley',
  },
};

const testimonials = [
  {
    name: "Daniel K.",
    area: "Finchley N3",
    jobType: "Exterior Painting – Victorian terrace",
    rating: 5,
    quote: "Careful prep and great attention to detail. The frontage looks brand new."
  },
  {
    name: "Tom & Elise",
    area: "Finchley Central N3",
    jobType: "Exterior & Woodwork – windows and fascia",
    rating: 5,
    quote: "Prepped properly and sealed everything. Looks sharp and should last."
  }
];

const faqs = [
  {
    question: 'Do you work on both period and modern properties in Finchley?',
    answer: 'Yes, absolutely. Finchley has a wonderful mix of Edwardian and Victorian properties alongside post-war builds and modern developments. We have extensive experience with all types – from original timber sash windows and decorative brickwork on period homes to the rendered facades and UPVC details on newer properties. Each requires different techniques and materials, and we tailor our approach accordingly.'
  },
  {
    question: 'Can you handle exterior painting including scaffolding?',
    answer: 'Yes, we regularly handle full exterior painting projects in Finchley, including arranging scaffolding where needed. We work with trusted scaffolding contractors and coordinate the entire process – from initial survey and planning to final completion. This is particularly common for the semi-detached and detached properties in Finchley where access to upper floors and gable ends requires proper scaffold.'
  },
  {
    question: 'How do you manage parking on residential streets in Finchley?',
    answer: 'Most of Finchley has resident parking schemes or limited waiting restrictions during weekdays. We\'re familiar with the local parking zones and plan accordingly – usually arriving early to find suitable parking nearby, or using pay-and-display where available. For driveways on larger properties, we can park on-site with your permission, which makes material handling much easier.'
  },
  {
    question: 'What\'s involved in painting an Edwardian house exterior?',
    answer: 'Edwardian properties typically need thorough preparation including cleaning, scraping loose paint, treating any timber rot, filling cracks, and priming bare wood. The front elevations often feature decorative render or pebbledash, painted window bays, timber bargeboards, and iron railings – all requiring specific products and techniques. We use breathable masonry paints, flexible exterior wood paints, and appropriate metal primers to ensure long-lasting protection.'
  },
  {
    question: 'Do you provide guarantees on exterior paintwork?',
    answer: 'Yes, we provide guarantees on all our work. Exterior paintwork longevity depends on proper preparation and quality materials – when done correctly, you should expect 5-8 years before needing a full refresh. We use premium Dulux Weathershield, Sandtex, and similar trade-grade products, and we\'ll happily discuss expected lifespan and maintenance during your quote.'
  }
];

export default function FinchleyPage() {
  const location = locations.find(loc => loc.slug === 'finchley')!;
  const nearbyAreas = locations.filter(loc =>
    ['muswell-hill', 'highgate', 'wood-green'].includes(loc.slug)
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Areas We Cover', url: `${siteConfig.url}/areas-we-cover` },
    { name: 'Finchley', url: `${siteConfig.url}/areas-we-cover/finchley` },
  ]);

  const localBusinessSchema = {
    ...generateLocalBusinessSchema(),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Finchley',
      addressRegion: 'Greater London',
      postalCode: 'N3',
      addressCountry: 'United Kingdom',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng,
    },
    areaServed: {
      '@type': 'City',
      name: 'Finchley',
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
        {/* Hero */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-blue-100 mb-4">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Finchley {location.postcode}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Painters & Decorators in Finchley
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Professional painting and decorating services for Finchley homes and businesses. Specialists in period properties, modern homes, and exterior painting across N3.
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
            {/* Main content */}
            <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-sm">
              <h2 className="text-3xl font-bold mb-6">Your Local Finchley Painters & Decorators</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Finchley is one of North London's most established residential areas, known for its tree-lined streets, spacious family homes, and strong community feel. Stretching from East Finchley through Finchley Central to North Finchley, the area encompasses a rich variety of property styles – from elegant Edwardian semi-detached houses with bay windows and decorative brickwork to solid post-war builds and modern apartment developments near the High Road.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                We've been providing professional painting and decorating services throughout Finchley for many years, building a reputation for quality workmanship, reliability, and respect for both period features and modern finishes. Whether you're restoring the original character of an Edwardian home near Church End, refreshing a family house in Woodside Park, or preparing a flat for rental near Finchley Central station, we bring the expertise and attention to detail that Finchley homeowners expect.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Finchley's Property Character</h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                What makes Finchley distinctive is its strong stock of Edwardian and inter-war semi-detached and detached properties. These substantial family homes typically feature generous room sizes, high ceilings, original timber sash windows, decorative plasterwork, and well-proportioned gardens. Many retain period features like picture rails, panelled doors, and ornate cornicing, while others have been sensitively updated with modern extensions and loft conversions.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The area around <strong>North Finchley High Road</strong> and <strong>Ballards Lane</strong> includes post-war apartment blocks and newer residential developments, often appealing to young professionals and downsizers looking for manageable properties with good transport links. These tend to be more straightforward to decorate but still require professional standards – clean lines, durable finishes, and efficient project management to minimise disruption.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                <h4 className="font-semibold text-blue-900 mb-2">Common Finchley Property Types We Work On:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Edwardian semi-detached houses</strong> – period features, bay windows, decorative render, original woodwork</li>
                  <li><strong>1930s detached properties</strong> – curved bay windows, mock Tudor details, substantial gardens</li>
                  <li><strong>Victorian terraces</strong> – particularly around Church End and East Finchley, with high ceilings and original features</li>
                  <li><strong>Post-war apartment blocks</strong> – practical layouts, typically near transport hubs</li>
                  <li><strong>Modern townhouses and flats</strong> – newer developments with contemporary specifications</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Typical Decorating Projects in Finchley</h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                The majority of our Finchley work involves whole-house interior decoration – often coordinated with other renovation work like kitchen replacements, bathroom refits, or loft conversions. These projects require careful planning, proper protection of furnishings and flooring, and coordination with other trades to ensure everything comes together smoothly.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Exterior painting is particularly common in Finchley due to the prevalence of render, pebbledash, and painted woodwork on period properties. The front elevations of Edwardian houses often feature painted render or roughcast, decorative timber bargeboards, sash window frames, and ornamental ironwork – all needing regular maintenance to protect against weather and maintain kerb appeal. We handle the full process including scaffolding arrangement, thorough preparation, appropriate primers, and top-quality masonry and wood paints designed for the British climate.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Loft conversions are increasingly popular in Finchley as families seek to maximise space in these generous properties. We're often brought in at the finishing stage to paint newly plastered walls, apply specialist paints to sloped ceilings and Velux surrounds, and finish staircases and trim work. These spaces can be challenging due to restricted head height and awkward angles, but the results transform unused attic space into beautiful, functional rooms.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Local Knowledge: Working in Finchley</h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                Finchley's residential streets are generally quieter than more central areas, with many properties benefiting from driveways or off-street parking. Where we do need to park on-road, we're familiar with the controlled parking zones and resident permit areas – planning ahead to avoid restrictions and minimise inconvenience to neighbours.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Church End</strong> around Finchley Central retains the historic heart of the area, with the parish church and surrounding streets offering some of Finchley's oldest and most characterful properties. These homes often need sympathetic restoration, respecting original details while updating to modern living standards.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Woodside Park</strong> and the streets around <strong>Totteridge Lane</strong> feature some of Finchley's largest and most valuable properties – substantial detached houses with multiple reception rooms, extensive gardens, and often needing coordinated interior and exterior decoration. These projects require meticulous planning and the highest standards of finish.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>East Finchley</strong> has a slightly more bohemian character, with a mix of Victorian terraces, purpose-built flats, and a strong sense of local community. The area around <strong>East Finchley station</strong> and the High Road offers good access to independent shops and cafes, and residents often appreciate craft-quality work that enhances their homes' individual character.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Why Finchley Residents Choose Us</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Period Property Specialists</strong>
                    <span className="text-gray-600 text-sm">Expert handling of Edwardian and Victorian features, original woodwork, and decorative plasterwork</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Exterior Painting Expertise</strong>
                    <span className="text-gray-600 text-sm">Full exterior decoration including scaffolding coordination, render preparation, and weather-resistant finishes</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Family Home Experience</strong>
                    <span className="text-gray-600 text-sm">Minimal disruption, safe working practices, and consideration for occupied homes with children and pets</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Project Coordination</strong>
                    <span className="text-gray-600 text-sm">Working seamlessly with other trades during renovations, extensions, and loft conversions</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Premium Materials</strong>
                    <span className="text-gray-600 text-sm">Trade-quality paints from Dulux, Crown, and Johnstone's – superior coverage and durability</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Transparent Pricing</strong>
                    <span className="text-gray-600 text-sm">Detailed written quotes, honest advice, and no hidden costs – you'll know exactly what you're paying for</span>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-gray-100 border border-gray-200 rounded-lg p-8 mb-8 text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600">
                  {/* Map embed would go here showing Finchley N3 service area */}
                  Serving all of Finchley N3 and surrounding areas
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Our Services in Finchley</h2>
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

            {/* Testimonials */}
            <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">What Our Finchley Customers Say</h2>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-6 py-2">
                    <div className="flex gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-3">"{testimonial.quote}"</p>
                    <div className="text-sm text-gray-600">
                      <span className="font-semibold">{testimonial.name}</span> – {testimonial.area}
                      <br />
                      <span className="text-gray-500">{testimonial.jobType}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions – Finchley</h2>
              <FAQAccordion faqs={faqs} />
            </div>

            {/* Nearby areas */}
            <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Nearby Areas We Cover</h2>
              <p className="text-gray-700 mb-6">
                We also provide painting and decorating services in areas close to Finchley:
              </p>
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
              <p className="mt-6">
                <Link href="/areas-we-cover" className="text-blue-600 hover:underline font-medium">
                  View all areas we cover →
                </Link>
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Finchley Property?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get a free, detailed quote for your painting and decorating project. No obligation, no pressure – just honest advice and transparent pricing.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Request a Free Quote
                </Link>
                <a
                  href={`tel:${siteConfig.business.phone}`}
                  className="px-8 py-4 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  {siteConfig.business.phoneFormatted}
                </a>
              </div>
              <div className="border-t border-blue-500 pt-6">
                <p className="font-semibold mb-2">{siteConfig.business.name}</p>
                <p className="text-blue-100 text-sm">
                  Professional Painters & Decorators serving Finchley and North London
                  <br />
                  Phone: {siteConfig.business.phoneFormatted} | Email: {siteConfig.business.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
