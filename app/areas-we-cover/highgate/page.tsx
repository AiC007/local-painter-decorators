import Link from 'next/link';
import { Metadata } from 'next';
import { siteConfig, services, locations } from '@/lib/config';
import CTABanner from '@/components/ui/CTABanner';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '@/lib/schema';
import { ArrowRight, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Painters & Decorators Highgate | Local Painter N6',
  description: 'Professional painters and decorators in Highgate N6. Expert painting services for Georgian properties, Victorian villas and prestigious period homes. Free quotes, fully insured.',
  alternates: {
    canonical: '/areas-we-cover/highgate',
  },
};

const testimonials = [
  {
    name: "Alex P.",
    area: "Highgate N6",
    jobType: "Woodwork & Trim – doors and skirting",
    rating: 5,
    quote: "Beautifully smooth finishes and clean lines throughout."
  }
];

const faqs = [
  {
    question: 'Do you have experience with high-value period properties in Highgate?',
    answer: 'Yes, we have extensive experience working on Highgate\'s prestigious period properties, including Georgian townhouses, Victorian villas, and Arts and Crafts homes. We understand the importance of exceptional craftsmanship, sympathetic restoration techniques, and the highest standards of finish that these valuable properties demand. Our work is often coordinated with architects, interior designers, and specialist contractors on larger renovation projects.'
  },
  {
    question: 'Can you restore and finish original woodwork to a high standard?',
    answer: 'Absolutely. Original woodwork – including panelled doors, decorative architraves, window shutters, and ornate skirting – is a defining feature of many Highgate properties. We specialise in careful preparation, expert filling and sanding, appropriate primers, and flawless paint application that enhances rather than obscures the craftsmanship. We can also arrange specialist timber restoration where needed before finishing.'
  },
  {
    question: 'How do you handle coordination with other high-end contractors?',
    answer: 'We regularly work as part of larger renovation teams involving architects, interior designers, specialist plasterers, and other trades. We\'re experienced at coordinating schedules, maintaining site standards, protecting completed work, and ensuring our finishes complement other elements of the project. Clear communication and professional collaboration are essential on high-end projects, and we prioritise both.'
  },
  {
    question: 'What premium paint finishes do you offer?',
    answer: 'We work with premium trade paints including Farrow & Ball, Little Greene, Papers and Paints, and specialist products from Paint & Paper Library. These offer superior depth of colour, exceptional coverage, and beautiful finishes – from traditional estate eggshell to contemporary dead flat emulsions. We\'re happy to discuss which products best suit your project and can arrange sample pots for testing.'
  },
  {
    question: 'How do you ensure minimal disruption in occupied homes?',
    answer: 'Highgate projects often involve occupied family homes where discretion and minimal disruption are essential. We work room-by-room with careful protection, maintain immaculate work areas, respect family routines and privacy, and clean up thoroughly each day. Many clients tell us they barely noticed our presence – which reflects the professional, considerate approach we bring to every project.'
  }
];

export default function HighgatePage() {
  const location = locations.find(loc => loc.slug === 'highgate')!;
  const nearbyAreas = locations.filter(loc =>
    ['crouch-end', 'muswell-hill', 'islington'].includes(loc.slug)
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Areas We Cover', url: `${siteConfig.url}/areas-we-cover` },
    { name: 'Highgate', url: `${siteConfig.url}/areas-we-cover/highgate` },
  ]);

  const localBusinessSchema = {
    ...generateLocalBusinessSchema(),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Highgate',
      addressRegion: 'Greater London',
      postalCode: 'N6',
      addressCountry: 'United Kingdom',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng,
    },
    areaServed: {
      '@type': 'City',
      name: 'Highgate',
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
                <span className="font-medium">Highgate {location.postcode}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Painters & Decorators in Highgate
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Professional painting and decorating services for Highgate's prestigious period properties. Expert restoration and high-end finishes across N6.
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
              <h2 className="text-3xl font-bold mb-6">Your Local Highgate Painters & Decorators</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Highgate stands as one of London's most prestigious and architecturally significant areas, with a history stretching back centuries and a housing stock that reflects the wealth and taste of successive generations. From the elegant Georgian terraces around <strong>Highgate Village</strong> to substantial Victorian villas on tree-lined roads, the area commands respect for both its heritage and the exceptional quality of its properties.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                We've been privileged to work on many of Highgate's finest properties, bringing the specialist skills, meticulous attention to detail, and high standards of craftsmanship that these homes deserve. Whether restoring original features in a Grade II listed townhouse, refreshing a substantial family home near Hampstead Heath, or coordinating decoration as part of a larger renovation project, we approach every job with the care and professionalism that Highgate residents expect.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Highgate's Architectural Heritage</h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                Highgate's architectural character is defined by centuries of high-quality residential development. The historic village centre retains many Georgian properties – elegant townhouses and terraces with classical proportions, sash windows, decorative ironwork, and internal features like shutters, panelling, and ornate plasterwork. These properties often have listed status, requiring appropriate materials and sympathetic restoration techniques.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                The Victorian era brought substantial villas and semi-detached properties to Highgate's wider streets, many designed by notable architects for wealthy merchants and professionals. These homes feature generous proportions, elaborate cornicing and ceiling roses, decorative fireplaces, and high-quality joinery throughout. The woodwork alone – doors, architraves, skirting boards, window frames – represents significant craftsmanship and deserves expert preparation and finishing.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The early 20th century added Arts and Crafts houses and Edwardian properties that bring their own distinctive character, often featuring oak panelling, leaded windows, inglenook fireplaces, and built-in furniture. More recent development has been limited and carefully controlled, preserving Highgate's essential character while occasionally introducing sympathetic contemporary architecture.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                <h4 className="font-semibold text-blue-900 mb-2">Common Highgate Property Types We Work On:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Georgian townhouses & terraces</strong> – listed properties requiring sympathetic restoration and appropriate materials</li>
                  <li><strong>Victorian villas</strong> – substantial properties with elaborate plasterwork, high-quality joinery, period details</li>
                  <li><strong>Arts and Crafts houses</strong> – oak panelling, decorative features, specialist finishes required</li>
                  <li><strong>Edwardian family homes</strong> – generous proportions, original features, often extended and modernised</li>
                  <li><strong>Period conversions</strong> – larger properties sensitively divided into substantial flats</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mb-4 mt-8">High-End Decorating Projects</h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                The work we undertake in Highgate typically demands the highest standards of craftsmanship and finish. These are valuable properties where residents expect – and deserve – exceptional results. Projects often involve complete house redecoration coordinated with other renovation work, careful restoration of original features, and premium materials specified by homeowners or their interior designers.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Original woodwork restoration is a significant part of our Highgate work. Period properties contain beautiful joinery – panelled doors, decorative architraves, window shutters, ornate skirting, staircase balustrades – that requires expert preparation, appropriate primers, and flawless paint application. We work with traditional undercoats and top coats, specialist eggshell finishes, and premium products from ranges like Farrow & Ball and Little Greene when specified.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Decorative plasterwork – cornicing, ceiling roses, corbels, ceiling panels – is another defining feature of Highgate properties. We take great care to preserve detail during preparation, use appropriate filling techniques, and apply paint with methods that enhance rather than obscure the craftsmanship. Where plasterwork has been damaged, we coordinate with specialist plasterers to ensure proper restoration before finishing.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Many projects involve working as part of larger teams including architects, interior designers, specialist contractors, and other trades. Clear communication, professional coordination, and respect for the overall project standards are essential. We're experienced at working in these environments, maintaining site standards, protecting completed work, and ensuring our finishes complement other elements of the renovation.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Local Knowledge: Working in Highgate</h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                Highgate's elevated position and village character make it one of North London's most distinctive locations. Parking can be challenging on residential streets with controlled zones and limited space, but we're familiar with the local arrangements and plan accordingly – using resident permits where arranged, arriving early for street parking, or coordinating with clients who have driveways or garage access.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Highgate Village</strong> itself retains a remarkable village atmosphere despite being within London, with the historic High Street, independent shops, traditional pubs, and The Flask creating a genuine community centre. Properties here are often listed and require particular care and appropriate materials.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                The areas surrounding <strong>Hampstead Heath</strong> and <strong>Highgate Woods</strong> offer some of London's most desirable residential locations, with large properties on generous plots enjoying green outlooks and peaceful settings. These homes often feature extensive original woodwork, decorative plasterwork, and period details throughout.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Access to some Highgate properties involves steep hills and narrow lanes, particularly around the older village streets. We factor this into planning, ensuring we have appropriate equipment and vehicles for the location, and coordinate deliveries and waste removal efficiently.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Why Highgate Residents Choose Us</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Exceptional Craftsmanship</strong>
                    <span className="text-gray-600 text-sm">The highest standards of preparation and finish for prestigious period properties</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Period Property Specialists</strong>
                    <span className="text-gray-600 text-sm">Expert restoration of Georgian, Victorian, and Arts and Crafts features</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Premium Materials</strong>
                    <span className="text-gray-600 text-sm">Farrow & Ball, Little Greene, specialist finishes – whatever the project demands</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Project Coordination</strong>
                    <span className="text-gray-600 text-sm">Seamless collaboration with architects, designers, and specialist contractors</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Discreet Service</strong>
                    <span className="text-gray-600 text-sm">Minimal disruption, respect for privacy, and professional conduct throughout</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Listed Building Experience</strong>
                    <span className="text-gray-600 text-sm">Understanding of conservation requirements and appropriate restoration techniques</span>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-gray-100 border border-gray-200 rounded-lg p-8 mb-8 text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600">
                  {/* Map embed would go here showing Highgate N6 service area */}
                  Serving all of Highgate N6 and surrounding areas
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Our Services in Highgate</h2>
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
                <h2 className="text-2xl font-bold mb-6">What Our Highgate Customers Say</h2>
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
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions – Highgate</h2>
              <FAQAccordion faqs={faqs} />
            </div>

            {/* Nearby areas */}
            <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Nearby Areas We Cover</h2>
              <p className="text-gray-700 mb-6">
                We also provide painting and decorating services in areas close to Highgate:
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
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Highgate Property?</h2>
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
                  Professional Painters & Decorators serving Highgate and North London
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
