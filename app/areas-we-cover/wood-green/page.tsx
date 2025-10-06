import Link from 'next/link';
import { Metadata } from 'next';
import { siteConfig, services, locations } from '@/lib/config';
import CTABanner from '@/components/ui/CTABanner';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '@/lib/schema';
import { ArrowRight, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Painters & Decorators Wood Green | Local Painter N22',
  description: 'Professional painters and decorators in Wood Green N22. Expert painting services for terraced houses, mansion flats, commercial properties. Free quotes, fully insured.',
  alternates: {
    canonical: '/areas-we-cover/wood-green',
  },
};

const testimonials = [
  {
    name: "Michael B.",
    area: "Wood Green N22",
    jobType: "Commercial – café refresh",
    rating: 5,
    quote: "Completed overnight with minimal disruption. Customers noticed immediately."
  }
];

const faqs = [
  {
    question: 'Do you work on commercial properties in Wood Green?',
    answer: 'Yes, we have extensive experience with commercial decorating across Wood Green, including shops along The Broadway and High Road, cafés, offices, and retail units. We can work outside business hours to minimise disruption – evenings, weekends, or overnight where necessary. We understand the importance of quick turnarounds and professional finishes that reflect well on your business.'
  },
  {
    question: 'Can you handle ex-local authority properties and estates?',
    answer: 'Absolutely. Wood Green has significant ex-local authority housing stock, and we regularly work on these properties for both owner-occupiers and housing associations. We\'re familiar with the robust finishes needed for communal areas, the specifications required for council-approved works, and how to deliver cost-effective solutions without compromising on quality.'
  },
  {
    question: 'How do you manage access and parking near The Broadway?',
    answer: 'Wood Green\'s town centre location means parking can be challenging, particularly around The Broadway shopping area. We typically use the multi-storey car parks or arrive early to find street parking on residential roads. For commercial work, we coordinate with business owners to use loading bays or arrange temporary parking permits where needed. We\'re experienced at working efficiently in busy urban environments.'
  },
  {
    question: 'What\'s the typical timeline for painting a Wood Green flat?',
    answer: 'A standard 2-bed flat interior usually takes 4-6 days including preparation, two coats throughout, and allowing for drying time. Ex-local authority properties with textured ceilings or wall coverings may need additional prep time. Rental turnarounds can be faster if we\'re just refreshing with minimal prep – we\'ll discuss realistic timelines during your quote based on the property\'s condition.'
  },
  {
    question: 'Do you work with landlords and letting agents?',
    answer: 'Yes, we work with many landlords and letting agents across Wood Green, particularly for void period refurbishments between tenancies. We provide detailed invoices suitable for tax purposes, can work to tight timescales, and understand the neutral, durable finishes that work best for rental properties. We\'re happy to liaise directly with agents and provide all necessary documentation.'
  }
];

export default function WoodGreenPage() {
  const location = locations.find(loc => loc.slug === 'wood-green')!;
  const nearbyAreas = locations.filter(loc =>
    ['crouch-end', 'muswell-hill', 'highgate'].includes(loc.slug)
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Areas We Cover', url: `${siteConfig.url}/areas-we-cover` },
    { name: 'Wood Green', url: `${siteConfig.url}/areas-we-cover/wood-green` },
  ]);

  const localBusinessSchema = {
    ...generateLocalBusinessSchema(),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Wood Green',
      addressRegion: 'Greater London',
      postalCode: 'N22',
      addressCountry: 'United Kingdom',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng,
    },
    areaServed: {
      '@type': 'City',
      name: 'Wood Green',
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
                <span className="font-medium">Wood Green {location.postcode}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Painters & Decorators in Wood Green
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Professional painting and decorating services for Wood Green homes and businesses. Residential and commercial expertise across N22.
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
              <h2 className="text-3xl font-bold mb-6">Your Local Wood Green Painters & Decorators</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Wood Green is a vibrant, diverse area at the heart of North London's transport network. Centred around <strong>The Broadway</strong> shopping centre and the busy High Road, it's an area of contrasts – bustling commercial streets alongside quiet residential roads, modern apartment blocks next to Victorian terraces, and a genuinely mixed community that gives Wood Green its distinctive character.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                We've been providing painting and decorating services across Wood Green for many years, working on everything from small flat refreshes to large commercial projects. We understand the area's particular mix of housing – from ex-local authority estates to period conversions, from rental properties needing quick turnarounds to family homes requiring careful, detailed work. Whatever your property type or project scale, we deliver the same professional standards and reliable service.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Wood Green's Housing Mix</h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                Wood Green's property landscape reflects over a century of London development. The area has substantial Victorian and Edwardian terraced housing, particularly on streets running off the main roads, often now converted into flats. These properties typically feature high ceilings, sash windows, and original details, though many have been modernised over the years with varying degrees of sensitivity.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                There's also a significant amount of ex-local authority housing – purpose-built estates from the post-war period through to the 1980s. These range from low-rise blocks to tower developments, and we work regularly with both owner-occupiers who've bought under Right to Buy and housing associations managing rental stock. These properties often need robust, durable finishes and we're familiar with the specifications and standards expected.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                More recently, Wood Green has seen considerable new development, particularly around <strong>Wood Green station</strong> and the <strong>Sky City development</strong>. Modern apartment blocks with contemporary specifications are changing the area's profile, attracting young professionals and investors. These properties typically need clean, efficient decoration with quick turnarounds.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                <h4 className="font-semibold text-blue-900 mb-2">Common Wood Green Property Types We Work On:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Victorian terraced houses & conversions</strong> – period features, high ceilings, often divided into flats</li>
                  <li><strong>Ex-local authority flats & estates</strong> – robust construction, communal areas, cost-effective solutions needed</li>
                  <li><strong>Purpose-built mansion blocks</strong> – solid Edwardian and inter-war apartment buildings</li>
                  <li><strong>Modern apartment developments</strong> – contemporary finishes, efficient access, quick project turnaround</li>
                  <li><strong>Commercial units</strong> – shops, cafés, offices along The Broadway and High Road</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Residential & Commercial Decorating</h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                Our Wood Green work splits roughly between residential and commercial projects. On the residential side, we handle everything from single-room refreshes to complete flat refurbishments. A lot of our work comes from landlords and letting agents who need reliable, cost-effective decoration for rental properties – neutral colours, durable finishes, and quick turnarounds between tenancies are the priorities.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                For owner-occupiers, we often work on more detailed projects – restoring period features in converted terraces, decorating after loft conversions or extensions, or simply refreshing family homes to a high standard. Wood Green residents tend to be practical and value-conscious, appreciating quality work at fair prices without unnecessary extras.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Commercial work in Wood Green includes shop fronts and retail units along The Broadway and High Road, cafés and restaurants, small offices, and service businesses. These jobs often need to be completed outside business hours – evenings, weekends, or overnight – to avoid disrupting trade. We're experienced at working efficiently in these situations, delivering professional results with minimal fuss.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Local Knowledge: Working in Wood Green</h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                Wood Green's town centre location means parking can be more challenging than quieter residential areas. The main roads have loading restrictions and residents' parking zones, so we plan accordingly – using the multi-storey car parks near The Broadway, arriving early to find street parking, or coordinating with clients who have off-street parking or secure loading areas.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>The Broadway</strong> and surrounding streets form the commercial heart of the area, with Shopping City (now rebranded) and numerous retail units. Access to flats above shops often involves separate entrances and narrow staircases – we're used to navigating these and protecting communal areas properly.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                The residential streets running north towards <strong>Alexandra Palace</strong> and west towards <strong>Turnpike Lane</strong> tend to be quieter and more residential in character. These areas contain some of Wood Green's most attractive Victorian and Edwardian properties, often with residents who've lived there for years and have strong connections to the local community.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Wood Green benefits from excellent transport links – the Piccadilly Line, extensive bus routes, and proximity to the North Circular. This connectivity makes it popular with renters and investors, which drives demand for efficient, cost-effective decorating that maintains rental standards without excessive spending.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Why Wood Green Residents Choose Us</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Commercial Experience</strong>
                    <span className="text-gray-600 text-sm">Retail units, cafés, offices – we work efficiently around business hours with minimal disruption</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Landlord Specialists</strong>
                    <span className="text-gray-600 text-sm">Quick turnarounds, neutral finishes, detailed invoicing for tax purposes and letting agents</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Estate Experience</strong>
                    <span className="text-gray-600 text-sm">Familiar with ex-local authority specifications and the robust finishes they require</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Period Property Skills</strong>
                    <span className="text-gray-600 text-sm">Sympathetic restoration of Victorian and Edwardian features in converted terraces</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Value for Money</strong>
                    <span className="text-gray-600 text-sm">Fair pricing, cost-effective solutions, no unnecessary extras – quality work at sensible rates</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="block mb-1">Reliable Service</strong>
                    <span className="text-gray-600 text-sm">Turn up on time, work efficiently, clean up properly – the basics done well, every time</span>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-gray-100 border border-gray-200 rounded-lg p-8 mb-8 text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600">
                  {/* Map embed would go here showing Wood Green N22 service area */}
                  Serving all of Wood Green N22 and surrounding areas
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Our Services in Wood Green</h2>
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
                <h2 className="text-2xl font-bold mb-6">What Our Wood Green Customers Say</h2>
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
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions – Wood Green</h2>
              <FAQAccordion faqs={faqs} />
            </div>

            {/* Nearby areas */}
            <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Nearby Areas We Cover</h2>
              <p className="text-gray-700 mb-6">
                We also provide painting and decorating services in areas close to Wood Green:
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
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Wood Green Property?</h2>
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
                  Professional Painters & Decorators serving Wood Green and North London
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
