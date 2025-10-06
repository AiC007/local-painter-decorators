import Link from 'next/link';
import { Metadata } from 'next';
import { siteConfig, services, locations } from '@/lib/config';
import CTABanner from '@/components/ui/CTABanner';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '@/lib/schema';
import { ArrowRight, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Painters & Decorators Crouch End | Local Painter N8',
  description: 'Professional painters and decorators in Crouch End N8. Expert painting services for Victorian properties, Edwardian conversions and period homes. Free quotes, fully insured.',
  alternates: {
    canonical: '/areas-we-cover/crouch-end',
  },
};

const testimonials = [
  {
    name: "Priya R.",
    area: "Crouch End N8",
    jobType: "Wallpapering – feature wall",
    rating: 5,
    quote: "Crisp seams and perfect pattern match. Exactly what we wanted."
  }
];

const faqs = [
  {
    question: 'Do you have experience with Crouch End\'s period properties?',
    answer: 'Absolutely. Crouch End is renowned for its Victorian and Edwardian architecture, and the majority of our work here involves period properties with original features. We\'re skilled at working with high ceilings, decorative cornicing, timber sash windows, picture rails, and other period details. We understand the importance of sympathetic restoration and using the right preparation techniques for old plaster and woodwork.'
  },
  {
    question: 'Can you recommend colour schemes for period homes?',
    answer: 'Yes, we\'re happy to offer colour consultation as part of our service. Crouch End residents often appreciate advice on historically appropriate colours or contemporary schemes that complement period features. We can discuss paint finishes, accent walls, and how to balance original character with modern living. We\'ll always bring sample pots for testing before committing to full rooms.'
  },
  {
    question: 'How do you handle parking in Crouch End?',
    answer: 'Crouch End has controlled parking zones on most residential streets, typically operating Monday to Saturday. We\'re familiar with the local restrictions and plan accordingly – arriving early to find street parking, using the small car parks near Broadway or Topsfield Parade when available, or arranging visitor permits for longer projects. We\'re experienced at working efficiently in these conditions.'
  },
  {
    question: 'What\'s your experience with wallpapering in period properties?',
    answer: 'We have extensive wallpapering experience, particularly with the feature walls and decorative papers popular in Crouch End homes. Pattern matching on period properties can be challenging due to uneven walls and old plaster, but proper preparation and skilled hanging ensures crisp seams and perfect alignment. We work with everything from traditional florals to contemporary geometrics and specialist wallcoverings.'
  },
  {
    question: 'Can you work around families and occupied homes?',
    answer: 'Yes, most of our Crouch End projects are in occupied family homes. We work room-by-room to minimise disruption, protect furniture and flooring properly, maintain tidy work areas, and clean up thoroughly each day. We\'re mindful of school runs, nap times, and family routines. Many clients tell us they barely noticed we were there – which is exactly what we aim for.'
  }
];

export default function CrouchEndPage() {
  const location = locations.find(loc => loc.slug === 'crouch-end')!;
  const nearbyAreas = locations.filter(loc =>
    ['highgate', 'muswell-hill', 'wood-green'].includes(loc.slug)
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Areas We Cover', url: `${siteConfig.url}/areas-we-cover` },
    { name: 'Crouch End', url: `${siteConfig.url}/areas-we-cover/crouch-end` },
  ]);

  const localBusinessSchema = {
    ...generateLocalBusinessSchema(),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Crouch End',
      addressRegion: 'Greater London',
      postalCode: 'N8',
      addressCountry: 'United Kingdom',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng,
    },
    areaServed: {
      '@type': 'City',
      name: 'Crouch End',
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
                <span className="font-medium">Crouch End {location.postcode}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Painters & Decorators in Crouch End
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Professional painting and decorating services for Crouch End's beautiful period properties. Expert care for Victorian and Edwardian homes across N8.
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
              <h2 className="text-3xl font-bold mb-6">Your Local Crouch End Painters & Decorators</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Crouch End is one of North London's most characterful neighbourhoods, with a village-like atmosphere that sets it apart from the wider city. Centred around the iconic <strong>Crouch End Broadway</strong> clock tower and lined with independent shops, cafés, and restaurants, the area has a strong community feel and attracts residents who appreciate quality, character, and craft.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The housing here reflects that appreciation for quality – predominantly Victorian and Edwardian properties with generous proportions, original features, and the kind of details that reward careful, skilled decoration. We've been working in Crouch End for years, helping homeowners restore and refresh these beautiful properties with the respect and attention they deserve. From terraced houses on residential streets to grand semi-detached homes with bay windows and period details, we understand what Crouch End properties need and how to deliver lasting, beautiful results.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Crouch End's Architectural Character</h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                Crouch End's appeal lies largely in its consistent period architecture. The majority of properties date from the late Victorian and Edwardian eras, built during the suburban expansion of North London when the area transformed from farmland to a desirable residential district. These homes were built to a good standard with solid construction, high ceilings, and decorative details that still define the area's character today.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Victorian terraces dominate many streets, typically featuring three or four storeys including basements, with original sash windows, decorative brickwork, and internal details like ceiling roses, cornicing, and picture rails. Many retain their original floor plans, though plenty have been opened up and extended to suit modern family living. The woodwork in these properties – doors, skirting boards, architraves, window frames – is often original and deserves careful preparation and finishing.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Edwardian properties, particularly the substantial semi-detached and detached houses found on wider roads, tend to have even more generous proportions. Large bay windows, decorative tile paths, stained glass details, and Arts and Crafts influences are common. These properties often appeal to families who want space and character, and they're willing to invest in quality decoration that enhances rather than hides the original features.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                <h4 className="font-semibold text-blue-900 mb-2">Common Crouch End Property Types We Work On:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Victorian terraced houses</strong> – 3-4 storeys, high ceilings, original sash windows and internal features</li>
                  <li><strong>Edwardian semi-detached homes</strong> – bay windows, decorative brickwork, generous room sizes</li>
                  <li><strong>Period conversions</strong> – larger properties divided into flats, retaining original details</li>
                  <li><strong>Extended family homes</strong> – period properties with modern rear extensions and loft conversions</li>
                  <li><strong>Purpose-built mansion flats</strong> – solid Edwardian apartment buildings with good original features</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Typical Decorating Projects in Crouch End</h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                The work we're asked to do in Crouch End tends to be more detailed and considered than in some other areas. Residents here often have strong aesthetic sensibilities and want decoration that complements their homes' period character while reflecting contemporary taste. That might mean carefully chosen heritage colours for woodwork, feature walls with quality wallpaper, or meticulous restoration of original plasterwork and cornicing.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Whole-house redecoration is common, often following a purchase or coordinated with other renovation work. These projects allow us to create a cohesive look throughout, balancing period details with modern living spaces. We work room-by-room to minimise disruption, protecting furniture and floors, and maintaining tidy work areas – particularly important in occupied family homes with children and pets.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Wallpapering is popular in Crouch End, particularly feature walls in living rooms, dining rooms, and bedrooms. The uneven walls and old plaster common in period properties can make pattern matching challenging, but proper preparation and skilled hanging ensures perfect results. We work with everything from traditional William Morris designs to contemporary geometrics and specialist textured papers.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Extensions and loft conversions are increasingly common as families look to create more space without moving. We're often brought in to integrate new spaces with existing decoration, matching colours and finishes so extensions feel like natural parts of the home rather than obvious additions. The junction between old and new construction requires careful attention to ensure seamless results.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Local Knowledge: Working in Crouch End</h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                Crouch End's residential streets operate controlled parking zones during weekdays, which requires planning but is manageable with local knowledge. We typically arrive early to find street parking nearby, or use the small car parks around the Broadway and Topsfield Parade when working in the central area. For longer projects, we can arrange visitor permits through the council if needed.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Crouch End Broadway</strong> forms the heart of the neighbourhood, with the distinctive clock tower and surrounding independent businesses creating a genuine village centre. Properties here are often mixed-use with commercial premises below and residential above, accessed via separate entrances and internal stairs.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                The streets radiating from the Broadway – <strong>Park Road</strong>, <strong>Middle Lane</strong>, <strong>Tottenham Lane</strong>, and quieter residential roads – contain some of North London's most attractive period housing. These tend to be family homes with engaged, design-conscious owners who appreciate quality workmanship and thoughtful finishes.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Parkland Walk</strong>, the green corridor running along the old railway line towards Finsbury Park and Highgate, provides a distinctive feature of the area. Properties backing onto the Parkland Walk often need exterior painting that considers the wooded backdrop and ensures good protection against moisture from the surrounding greenery.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Why Crouch End Residents Choose Us</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Period Property Expertise</strong>
                    <span className="text-gray-600 text-sm">Skilled restoration of Victorian and Edwardian features with respect for original details</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Colour Consultation</strong>
                    <span className="text-gray-600 text-sm">Thoughtful advice on schemes that complement period character and contemporary style</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Wallpapering Specialists</strong>
                    <span className="text-gray-600 text-sm">Perfect pattern matching and crisp seams, even on challenging period walls</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Minimal Disruption</strong>
                    <span className="text-gray-600 text-sm">Tidy, considerate working – particularly important in occupied family homes</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Premium Finishes</strong>
                    <span className="text-gray-600 text-sm">Trade-quality paints and materials delivering beautiful, long-lasting results</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Trusted Reputation</strong>
                    <span className="text-gray-600 text-sm">Built through years of quality work and satisfied customers across Crouch End</span>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-gray-100 border border-gray-200 rounded-lg p-8 mb-8 text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600">
                  {/* Map embed would go here showing Crouch End N8 service area */}
                  Serving all of Crouch End N8 and surrounding areas
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Our Services in Crouch End</h2>
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
                <h2 className="text-2xl font-bold mb-6">What Our Crouch End Customers Say</h2>
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
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions – Crouch End</h2>
              <FAQAccordion faqs={faqs} />
            </div>

            {/* Nearby areas */}
            <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Nearby Areas We Cover</h2>
              <p className="text-gray-700 mb-6">
                We also provide painting and decorating services in areas close to Crouch End:
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
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Crouch End Property?</h2>
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
                  Professional Painters & Decorators serving Crouch End and North London
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
