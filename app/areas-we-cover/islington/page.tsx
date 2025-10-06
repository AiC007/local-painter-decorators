import Link from 'next/link';
import { Metadata } from 'next';
import { siteConfig, services, locations } from '@/lib/config';
import CTABanner from '@/components/ui/CTABanner';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '@/lib/schema';
import { ArrowRight, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Painters & Decorators Islington | Local Painter N1',
  description: 'Professional painters and decorators in Islington N1. Expert painting services for Victorian terraces, Georgian conversions and modern flats. Free quotes, fully insured.',
  alternates: {
    canonical: '/areas-we-cover/islington',
  },
};

const testimonials = [
  {
    name: "Sarah M.",
    area: "Islington N1",
    jobType: "Interior Painting – 2-bed flat",
    rating: 5,
    quote: "Immaculate finish and zero mess. They worked around our schedule and were done ahead of time."
  },
  {
    name: "Helen W.",
    area: "Islington N1",
    jobType: "Interior Painting – loft conversion",
    rating: 5,
    quote: "Great advice on durable paints and a bright, even finish."
  }
];

const faqs = [
  {
    question: 'Do you have experience with Victorian and Georgian properties in Islington?',
    answer: 'Absolutely. A large proportion of our Islington work involves period properties with high ceilings, cornicing, sash windows, and original features. We understand how to prepare and paint these surfaces properly – from dealing with old lime plaster to restoring decorative mouldings without losing detail.'
  },
  {
    question: 'How do you handle parking and access in Islington?',
    answer: 'We\'re very familiar with Islington\'s parking restrictions and residents\' permit zones. We typically arrive early to secure parking on side streets or use pay-and-display where needed. For larger jobs requiring scaffold or extended parking, we can arrange permits through the council. Access to mansion blocks and estates is straightforward – we\'re used to working with building managers and coordinating service lifts.'
  },
  {
    question: 'Can you work around tenants in rental properties?',
    answer: 'Yes, we work with many Islington landlords and letting agents for void period refurbishments and tenant turnarounds. We can work to tight timescales between tenancies and provide all documentation needed for deposit schemes. We\'re also happy to work evenings and weekends to minimise disruption if properties are occupied.'
  },
  {
    question: 'What\'s the typical cost for painting a flat in Islington?',
    answer: 'A standard 2-bed flat interior refresh typically ranges from £1,800-£3,500 depending on size, condition, and specification. Period conversions with high ceilings and detailed cornicing may cost more due to additional prep and access requirements. We provide detailed written quotes with no hidden costs, and we\'re always transparent about pricing before work begins.'
  },
  {
    question: 'How quickly can you start work in Islington?',
    answer: 'We usually have availability within 1-2 weeks for most projects. For urgent work – such as void periods or pre-sale touch-ups – we can often accommodate shorter notice. Contact us to discuss your timeline and we\'ll do our best to fit your schedule.'
  }
];

export default function IslingtonPage() {
  const location = locations.find(loc => loc.slug === 'islington')!;
  const nearbyAreas = locations.filter(loc =>
    ['highgate', 'crouch-end', 'finchley'].includes(loc.slug)
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Areas We Cover', url: `${siteConfig.url}/areas-we-cover` },
    { name: 'Islington', url: `${siteConfig.url}/areas-we-cover/islington` },
  ]);

  const localBusinessSchema = {
    ...generateLocalBusinessSchema(),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Islington',
      addressRegion: 'Greater London',
      postalCode: 'N1',
      addressCountry: 'United Kingdom',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng,
    },
    areaServed: {
      '@type': 'City',
      name: 'Islington',
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
                <span className="font-medium">Islington {location.postcode}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Painters & Decorators in Islington
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Expert painting and decorating services for Islington homes and businesses. From period properties to modern conversions, we deliver exceptional results across N1.
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
              <h2 className="text-3xl font-bold mb-6">Your Local Islington Painters & Decorators</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Islington is one of North London's most distinctive areas, combining elegant period architecture with a vibrant, cosmopolitan atmosphere. From the bustling restaurants and independent shops of Upper Street to the quieter residential squares tucked behind Barnsbury and Canonbury, the borough offers a diverse mix of property types and decorating challenges that require local knowledge and specialist skills.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                We've been providing professional painting and decorating services across Islington for years, working on everything from grand Victorian terraces to compact studio conversions. Whether you're refreshing a family home in Barnsbury, preparing a rental flat for new tenants near Angel, or renovating a period conversion in Canonbury, we bring the same meticulous attention to detail and respect for your property that has made us a trusted choice for Islington residents.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Islington's Property Landscape</h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                Islington's housing stock is wonderfully varied, but it's the abundance of period properties that really defines the area's character. The borough is particularly known for its Georgian and Victorian architecture, with long terraces of elegant townhouses featuring original sash windows, decorative cornicing, ceiling roses, and other period details that require careful, knowledgeable handling.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Many of these larger properties have been converted into flats over the decades, creating the mansion blocks and split-level maisonettes that are now characteristic of areas like Barnsbury, Canonbury, and around Highbury Fields. These conversions often retain beautiful original features – high ceilings, picture rails, stripped floorboards – but they also present specific decorating challenges, from managing access in shared buildings to coordinating with freeholders and dealing with older plaster and woodwork that needs expert preparation.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                <h4 className="font-semibold text-blue-900 mb-2">Common Islington Property Types We Work On:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Victorian & Georgian terraces</strong> – period features, high ceilings, sash windows requiring specialist attention</li>
                  <li><strong>Mansion block flats</strong> – purpose-built conversions with original cornicing and solid construction</li>
                  <li><strong>Modern apartment developments</strong> – newer builds around King's Cross and Caledonian Road with contemporary finishes</li>
                  <li><strong>Split-level maisonettes</strong> – converted townhouses with staircases and multiple levels</li>
                  <li><strong>Ex-local authority estates</strong> – solid mid-century blocks requiring durable, cost-effective solutions</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Typical Decorating Needs in Islington</h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                The type of work we're asked to do in Islington varies widely depending on the property and the owner's situation. For period properties, we often handle full redecoration projects that involve careful preparation of old plaster surfaces, restoration of decorative cornicing and ceiling roses, and specialist painting of original timber sash windows and internal woodwork. These jobs require patience, proper preparation, and an understanding of traditional materials and techniques – rushing or cutting corners simply doesn't work with period features.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Landlords and letting agents contact us regularly for void period refurbishments between tenancies. These jobs typically run to tight timescales – often needing completion within a week or two to minimise rental void periods. We're experienced at working efficiently while maintaining high standards, refreshing walls, woodwork, and common areas to a neutral, lettable standard that appeals to prospective tenants.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                For owner-occupiers, we handle everything from single-room refreshes to whole-house renovations, loft conversion finishing, and external facade painting. Many Islington residents appreciate quality craftsmanship and are willing to invest in premium finishes – we're always happy to discuss paint specifications, colour choices, and decorative details to achieve exactly the look you're after.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Local Knowledge: Working in Islington</h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                Anyone who works regularly in Islington knows that parking and access require planning. The borough operates controlled parking zones throughout most residential areas, with restrictions typically running Monday to Saturday. We're familiar with these systems and usually arrive early to secure parking on nearby streets or use pay-and-display bays where available. For longer projects, we can arrange visitors' permits through the council if needed.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Upper Street</strong> is the borough's main artery, running from Angel to Highbury Corner, lined with restaurants, bars, and independent shops. Properties here are often mixed-use – commercial on the ground floor with residential above – and access can involve narrow staircases and coordinating with business owners below.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Barnsbury</strong> and <strong>Canonbury</strong> are among Islington's most desirable residential areas, characterised by elegant squares (Barnsbury Square, Lonsdale Square, Canonbury Square) and long Georgian terraces. These properties command premium prices and residents expect premium results – attention to detail is everything.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Angel and King's Cross</strong> have seen significant regeneration in recent years, with new apartment developments sitting alongside older housing stock. The area around <strong>Chapel Market</strong> retains a grittier, more authentic feel, with ex-local authority estates and traditional market traders creating a different atmosphere from the more gentrified streets further north.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Why Islington Residents Choose Us</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Period Property Expertise</strong>
                    <span className="text-gray-600 text-sm">We understand how to work with Victorian and Georgian features without causing damage or losing original detail</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Minimal Disruption</strong>
                    <span className="text-gray-600 text-sm">Tidy work practices, respect for shared spaces, and careful coordination in mansion blocks and terraces</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Flexible Scheduling</strong>
                    <span className="text-gray-600 text-sm">Evening and weekend work available, quick turnarounds for void periods, accommodation of your schedule</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Transparent Pricing</strong>
                    <span className="text-gray-600 text-sm">Clear written quotes with no hidden costs, honest advice about what's needed and what isn't</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Fully Insured</strong>
                    <span className="text-gray-600 text-sm">Public liability insurance and proper trade qualifications give you complete peace of mind</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Premium Materials</strong>
                    <span className="text-gray-600 text-sm">Dulux Trade, Crown Trade, and Johnstone's Trade paints as standard – better coverage and longer-lasting results</span>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-gray-100 border border-gray-200 rounded-lg p-8 mb-8 text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600">
                  {/* Map embed would go here showing Islington N1 service area */}
                  Serving all of Islington N1 and surrounding areas
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Our Services in Islington</h2>
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
              <h2 className="text-2xl font-bold mb-6">What Our Islington Customers Say</h2>
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
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions – Islington</h2>
              <FAQAccordion faqs={faqs} />
            </div>

            {/* Nearby areas */}
            <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Nearby Areas We Cover</h2>
              <p className="text-gray-700 mb-6">
                We also provide painting and decorating services in areas close to Islington:
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
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Islington Property?</h2>
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
                  Professional Painters & Decorators serving Islington and North London
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
