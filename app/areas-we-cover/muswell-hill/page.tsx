import Link from 'next/link';
import { Metadata } from 'next';
import { siteConfig, services, locations } from '@/lib/config';
import CTABanner from '@/components/ui/CTABanner';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '@/lib/schema';
import { ArrowRight, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Painters & Decorators Muswell Hill | Local Painter N10',
  description: 'Professional painters and decorators in Muswell Hill N10. Expert painting services for Edwardian homes, period properties and family houses. Free quotes, fully insured.',
  alternates: {
    canonical: '/areas-we-cover/muswell-hill',
  },
};

const testimonials = [
  {
    name: "Laura T.",
    area: "Muswell Hill N10",
    jobType: "Plaster & Repairs – hallway and stairs",
    rating: 5,
    quote: "Repairs are invisible and the paint finish is flawless."
  }
];

const faqs = [
  {
    question: 'Do you specialise in Edwardian properties in Muswell Hill?',
    answer: 'Yes, Edwardian properties are particularly common in Muswell Hill, and we work on them regularly. These homes typically feature high ceilings, decorative cornicing, bay windows, original timber doors and skirting, and other period details that require careful, skilled handling. We understand the preparation techniques needed for old plaster, how to preserve decorative features, and the appropriate finishes that enhance rather than hide the original character.'
  },
  {
    question: 'Can you handle both interior and exterior painting?',
    answer: 'Absolutely. We provide complete interior and exterior painting services across Muswell Hill. Interior work includes walls, ceilings, woodwork, staircases, and decorative features. Exterior projects cover rendered facades, painted brickwork, window frames, doors, bargeboards, fascias, and soffits. We can arrange scaffolding for larger exterior jobs and use weather-resistant paints designed for the British climate.'
  },
  {
    question: 'How do you manage parking and access in Muswell Hill?',
    answer: 'Muswell Hill has a mix of parking situations – controlled zones on many residential streets, but also properties with driveways and off-street parking. We plan ahead based on the specific location, arriving early for street parking where needed, using client driveways where available, or arranging permits for longer projects. We\'re experienced at working efficiently regardless of parking constraints.'
  },
  {
    question: 'What\'s involved in painting a hallway and staircase?',
    answer: 'Hallways and staircases are high-traffic areas that need durable finishes and careful access planning. We use appropriate access equipment for high walls and stairwells, protect flooring and banisters thoroughly, apply scrubbable paints suitable for heavy use, and ensure all woodwork receives proper preparation and multiple coats. These areas set the tone for the whole house, so we take particular care with the finish quality.'
  },
  {
    question: 'Do you work with families in occupied homes?',
    answer: 'Yes, most of our Muswell Hill work is in occupied family homes. We\'re experienced at minimising disruption – working room-by-room, protecting furniture and belongings, maintaining tidy work areas, respecting family routines and school schedules, and cleaning up thoroughly each day. We understand that your home needs to remain functional and comfortable throughout the project.'
  }
];

export default function MuswellHillPage() {
  const location = locations.find(loc => loc.slug === 'muswell-hill')!;
  const nearbyAreas = locations.filter(loc =>
    ['highgate', 'crouch-end', 'finchley'].includes(loc.slug)
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Areas We Cover', url: `${siteConfig.url}/areas-we-cover` },
    { name: 'Muswell Hill', url: `${siteConfig.url}/areas-we-cover/muswell-hill` },
  ]);

  const localBusinessSchema = {
    ...generateLocalBusinessSchema(),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Muswell Hill',
      addressRegion: 'Greater London',
      postalCode: 'N10',
      addressCountry: 'United Kingdom',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng,
    },
    areaServed: {
      '@type': 'City',
      name: 'Muswell Hill',
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
                <span className="font-medium">Muswell Hill {location.postcode}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Painters & Decorators in Muswell Hill
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Professional painting and decorating services for Muswell Hill homes and businesses. Expert care for Edwardian properties and family homes across N10.
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
              <h2 className="text-3xl font-bold mb-6">Your Local Muswell Hill Painters & Decorators</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Muswell Hill is one of North London's most desirable residential areas, combining Edwardian elegance with a thriving village atmosphere and strong community spirit. From the vibrant <strong>Muswell Hill Broadway</strong> with its independent shops and restaurants to the wide, tree-lined residential streets radiating outward, the area offers an attractive blend of period architecture, green spaces, and excellent local amenities that makes it hugely popular with families.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                We've been providing professional painting and decorating services across Muswell Hill for many years, working on the area's characteristic Edwardian homes, substantial family houses, and converted properties. We understand what these homes need – from the careful restoration of original features to durable, family-friendly finishes in high-traffic areas. Whether you're refreshing a period home near Alexandra Palace, renovating a family house in the Queens Avenue conservation area, or preparing a property for sale, we deliver the quality workmanship and reliable service that Muswell Hill residents expect.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Muswell Hill's Edwardian Character</h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                Muswell Hill's development occurred primarily in the Edwardian era, creating the remarkably consistent architectural character that defines the area today. The majority of properties date from the early 1900s when the arrival of the tramway and then the Underground made the area accessible to middle-class Londoners seeking spacious homes away from the city centre.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                These Edwardian houses were built to a good standard with solid construction, generous room sizes, and attractive details. Typical features include high ceilings with decorative cornicing and ceiling roses, bay windows (often on two floors), timber sash windows with decorative glazing bars, original internal doors with brass or ceramic handles, picture rails, and quality joinery throughout. Many properties also feature decorative external details – rendered facades, terracotta tiles, stained glass panels, and ornamental brickwork.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The area includes several conservation areas protecting its architectural heritage, particularly around Queens Avenue, Princes Avenue, and the residential streets near Alexandra Palace. Properties here often retain a high degree of original character, and residents are typically keen to preserve and enhance period features through sympathetic decoration and restoration.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                <h4 className="font-semibold text-blue-900 mb-2">Common Muswell Hill Property Types We Work On:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Edwardian terraced houses</strong> – 3-4 bedrooms, bay windows, original features, family-sized gardens</li>
                  <li><strong>Edwardian semi-detached homes</strong> – substantial properties with generous proportions and period details</li>
                  <li><strong>Detached family houses</strong> – larger properties on wider roads, often with multiple reception rooms</li>
                  <li><strong>Period conversions</strong> – larger houses divided into flats, typically retaining original features</li>
                  <li><strong>Extended properties</strong> – period homes with modern rear extensions, loft conversions, or side returns</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Family-Friendly Decorating Projects</h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                Muswell Hill is predominantly a family area, and much of our work reflects that – durable finishes for high-traffic areas, child-friendly paint specifications, and projects that need to be completed with minimal disruption to family life. We're experienced at working in occupied homes, protecting belongings, maintaining tidy work areas, and respecting school runs, nap times, and family routines.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Hallways and staircases are particular priorities in Muswell Hill homes – these spaces see heavy daily use and need robust finishes that maintain their appearance. We use scrubbable paints suitable for regular cleaning, apply proper preparation and multiple coats to woodwork, and ensure all surfaces are properly protected. These areas also require careful access planning for high walls and stairwells, which we handle with appropriate equipment and safe working practices.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Whole-house redecoration is common, often following a purchase or coordinated with other renovation work like kitchen replacements, bathroom refits, or extensions. These projects allow us to create cohesive colour schemes throughout while tailoring finishes to each room's use – from hard-wearing paints in kitchens and family rooms to more delicate finishes in bedrooms and reception rooms.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Period feature restoration is frequently requested – careful painting of original doors, skirting, and architraves to preserve detail; restoration of decorative cornicing and ceiling roses; and sympathetic treatment of bay windows and other character elements. These features define Muswell Hill's appeal, and residents rightly want them properly cared for.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Local Knowledge: Working in Muswell Hill</h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                Muswell Hill benefits from a mix of parking arrangements – many properties have driveways or off-street parking, making material handling straightforward, while residential streets typically have controlled parking zones operating during weekdays. We're familiar with the local parking systems and plan accordingly, coordinating with clients who have driveway access or arranging permits for street parking where needed.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Muswell Hill Broadway</strong> forms the commercial centre, with a thriving high street of independent shops, cafés, restaurants, and local businesses. This creates a genuine village atmosphere despite being well within London, and residents often have strong connections to the local community. Properties near the Broadway are typically terraced houses and conversion flats, often with commercial premises at ground level.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                The residential streets running towards <strong>Alexandra Palace</strong> and <strong>Highgate Wood</strong> contain some of Muswell Hill's most substantial and attractive properties – wide roads with tree planting, generous front gardens, and well-maintained Edwardian houses. The <strong>Queens Avenue conservation area</strong> is particularly notable for its architectural consistency and high level of original character.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Proximity to <strong>Alexandra Palace</strong> and its parkland is one of Muswell Hill's great attractions, offering families easy access to extensive green space, sports facilities, and stunning views across London. Properties with outlooks towards the park or palace are particularly prized, and maintaining their external appearance through quality painting and decoration helps preserve both individual property value and the area's overall appeal.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Why Muswell Hill Residents Choose Us</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Edwardian Property Specialists</strong>
                    <span className="text-gray-600 text-sm">Expert care for period features, original woodwork, and decorative plasterwork</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Family-Friendly Service</strong>
                    <span className="text-gray-600 text-sm">Minimal disruption, safe working practices, respect for family routines and occupied homes</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Durable Finishes</strong>
                    <span className="text-gray-600 text-sm">Hard-wearing paints and proper preparation for high-traffic family areas</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Interior & Exterior Expertise</strong>
                    <span className="text-gray-600 text-sm">Complete decoration services including scaffold coordination for larger external projects</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Quality Materials</strong>
                    <span className="text-gray-600 text-sm">Premium trade paints from Dulux, Crown, and Johnstone's as standard</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Reliable, Professional Service</strong>
                    <span className="text-gray-600 text-sm">Clear communication, honest pricing, tidy work practices – the basics done exceptionally well</span>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-gray-100 border border-gray-200 rounded-lg p-8 mb-8 text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600">
                  {/* Map embed would go here showing Muswell Hill N10 service area */}
                  Serving all of Muswell Hill N10 and surrounding areas
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Our Services in Muswell Hill</h2>
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
            {testimonials.length > 0 && (
              <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">What Our Muswell Hill Customers Say</h2>
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
            )}

            {/* FAQs */}
            <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions – Muswell Hill</h2>
              <FAQAccordion faqs={faqs} />
            </div>

            {/* Nearby areas */}
            <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Nearby Areas We Cover</h2>
              <p className="text-gray-700 mb-6">
                We also provide painting and decorating services in areas close to Muswell Hill:
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
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Muswell Hill Property?</h2>
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
                  Professional Painters & Decorators serving Muswell Hill and North London
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
