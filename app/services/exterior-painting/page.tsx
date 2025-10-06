import Link from 'next/link';
import { Metadata } from 'next';
import { siteConfig, locations } from '@/lib/config';
import CTABanner from '@/components/ui/CTABanner';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { generateBreadcrumbSchema, generateServiceSchema, generateFAQSchema } from '@/lib/schema';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Exterior Painting Services North London | Professional Exterior Painters',
  description: 'Expert exterior painting in North London. Weather-resistant finishes for brick, render, and wood. Specialist masonry paints, thorough preparation. Free quotes.',
  alternates: {
    canonical: '/services/exterior-painting',
  },
};

const faqs = [
  {
    question: 'What time of year is best for exterior painting?',
    answer: 'Late spring through early autumn (April to September) offers the most reliable weather in the UK. We need dry conditions with temperatures above 5°C for paint to cure properly. We monitor weather forecasts closely and can work around brief showers, but persistent rain will delay the project.'
  },
  {
    question: 'How often should I repaint the exterior of my house?',
    answer: 'Most London homes need repainting every 5-8 years, though this varies with exposure to weather, paint quality, and surface type. Render typically lasts longer than wood. South and west-facing walls weather faster due to sun and rain exposure. We\'ll assess your specific situation during the survey.'
  },
  {
    question: 'How long does exterior painting take?',
    answer: 'A typical 3-bedroom terraced house takes 5-7 days depending on the amount of preparation needed and weather conditions. This includes washing down, repairs, priming, and two coats. Larger detached properties or those requiring extensive prep may take 10-14 days.'
  },
  {
    question: 'Do you need scaffolding or can you use ladders?',
    answer: 'For anything above first-floor windows, we use scaffolding for safety and quality. It allows us to work efficiently and reach all areas properly. We arrange scaffolding hire as part of the project. For ground floor and accessible first-floor work, professional ladders and towers are sufficient.'
  },
  {
    question: 'What preparation is involved for exterior painting?',
    answer: 'Preparation is crucial for durability. We pressure wash all surfaces, scrape off flaking paint, repair cracks and damaged areas, treat bare wood with primer and knotting solution, fill gaps around windows, and apply stabilising solution to powdery masonry. Proper prep is 60% of a successful exterior job.'
  },
];

export default function ExteriorPaintingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Services', url: `${siteConfig.url}/services` },
    { name: 'Exterior Painting', url: `${siteConfig.url}/services/exterior-painting` },
  ]);

  const serviceSchema = generateServiceSchema({
    name: 'Exterior Painting',
    description: 'Professional exterior painting services for homes and businesses across North London',
    url: `${siteConfig.url}/services/exterior-painting`,
  });

  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, serviceSchema, faqSchema]),
        }}
      />

      <article className="bg-gray-50">
        {/* Hero */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Exterior Painting in {siteConfig.business.serviceArea}
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Protect and transform your property with professional exterior painting. Weather-resistant finishes, thorough preparation, and long-lasting results.
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
                  className="px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors"
                >
                  Call {siteConfig.business.phoneFormatted}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Main content */}
            <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-sm">
              <h2 className="text-3xl font-bold mb-6">Expert Exterior Painting Services</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Exterior painting is your property's first line of defence against British weather. It's not just about improving kerb appeal – though a fresh coat certainly does that – it's about protecting your brickwork, render, and woodwork from rain, frost, and UV damage that can lead to costly structural problems down the line.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Working across {siteConfig.business.serviceArea}, we specialise in painting London homes of all ages and types. Whether you have a Victorian terrace with original sash windows and timber fascias, a 1930s semi with rendered walls, or a modern property with mixed materials, we have the expertise and products to deliver a finish that looks superb and lasts for years.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Exterior work demands different skills and materials to interior painting. We use specialist masonry paints, flexible coatings for render, and high-performance wood protection systems designed to withstand everything the climate throws at them. Every project starts with thorough surface preparation – because no paint system, however premium, will perform well on poorly prepared surfaces.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Masonry & Render</strong>
                    <span className="text-gray-600 text-sm">Specialist paints for brick, pebbledash, and smooth render</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Woodwork</strong>
                    <span className="text-gray-600 text-sm">Windows, doors, fascias, soffits, and barge boards</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Metal Work</strong>
                    <span className="text-gray-600 text-sm">Gutters, downpipes, railings, and gates</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Front Doors</strong>
                    <span className="text-gray-600 text-sm">High-quality gloss or satinwood finishes</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Garden Walls</strong>
                    <span className="text-gray-600 text-sm">Boundary walls and decorative features</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Outbuildings</strong>
                    <span className="text-gray-600 text-sm">Sheds, garages, and garden structures</span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Our Preparation & Painting Process</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Exterior preparation is demanding work, but it's absolutely essential. We allocate proper time for this stage because we know that 60% of a successful exterior job is the preparation:
              </p>
              <ol className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">1.</span>
                  <div>
                    <strong>Site Setup & Protection</strong> – Scaffolding erected if needed, pathways protected, plants and garden features covered, windows masked
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">2.</span>
                  <div>
                    <strong>Pressure Washing</strong> – All surfaces power-washed to remove dirt, algae, loose paint, and pollutants that prevent paint adhesion
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">3.</span>
                  <div>
                    <strong>Scraping & Preparation</strong> – Flaking paint removed, cracks filled, damaged render repaired, rotten wood replaced if necessary
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">4.</span>
                  <div>
                    <strong>Wood Treatment</strong> – Bare timber treated with knotting solution and wood primer, ensuring maximum protection and paint adhesion
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">5.</span>
                  <div>
                    <strong>Stabilising & Priming</strong> – Masonry stabiliser applied to powdery surfaces, appropriate primers used for different materials
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">6.</span>
                  <div>
                    <strong>Application</strong> – Minimum two coats of premium exterior paint applied in suitable weather conditions, allowing proper drying between coats
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">7.</span>
                  <div>
                    <strong>Final Inspection</strong> – Thorough check of all areas, touch-ups where needed, site cleaned and scaffolding removed
                  </div>
                </li>
              </ol>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Materials & Paint Systems</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use only proven exterior paint systems designed for UK weather conditions. Different surfaces require different products, and we select the right specification for each:
              </p>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li><strong>Masonry & Render:</strong> We use masonry paints from <strong>Dulux Trade Weathershield</strong>, <strong>Crown Trade Sandtex</strong>, and <strong>Johnstone's Trade Stormshield</strong>. These are breathable, flexible, and contain fungicides to resist algae growth. They come in smooth, textured, and pliolite formulations depending on your substrate.</li>
                <li><strong>Woodwork:</strong> Timber needs protection from moisture and UV. We apply wood primer, undercoat, and top coats using systems like Dulux Trade High Gloss or satinwood finishes. For previously painted wood in good condition, we use flexible exterior eggshell that moves with the timber.</li>
                <li><strong>Metal:</strong> Gutters, downpipes, and railings get specialist metal primers and high-gloss top coats that resist rust and corrosion.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                All our exterior paints are specifically formulated for trade use – they contain higher levels of pigment and resin than retail equivalents, providing superior coverage, colour retention, and longevity.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Typical Timeline</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Exterior projects depend heavily on weather, but here are typical durations for dry conditions:
              </p>
              <ul className="space-y-2 mb-8 text-gray-700">
                <li><strong>Small terraced house (front only):</strong> 3-4 days</li>
                <li><strong>Mid-terrace (front and rear):</strong> 5-7 days</li>
                <li><strong>Semi-detached house:</strong> 7-10 days</li>
                <li><strong>Detached house:</strong> 10-14 days</li>
                <li><strong>Large Victorian property:</strong> 14-21 days</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                We build in some weather contingency and will never rush a job just to hit a deadline – quality and durability come first.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Aftercare & Maintenance</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your new exterior finish should last 6-8 years with minimal maintenance:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>Allow paint to cure for at least two weeks before any contact or washing</li>
                <li>Clean rendered walls annually with a soft brush or low-pressure wash to prevent dirt build-up</li>
                <li>Check woodwork joints and seals annually – touch up any chips or scratches promptly to prevent water ingress</li>
                <li>Keep gutters clear to prevent overflow staining on walls</li>
                <li>Inspect areas around windows and doors where movement can cause cracking</li>
                <li>We provide leftover paint for future touch-ups, clearly labelled by area and product</li>
              </ul>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-sm">
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <FAQAccordion faqs={faqs} />
            </div>

            {/* Related services */}
            <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Related Services</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  href="/services/plaster-and-repairs"
                  className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <span className="text-2xl">🔧</span>
                  <div>
                    <h3 className="font-semibold group-hover:text-blue-600">Plaster & Repairs</h3>
                    <p className="text-sm text-gray-600">Fix exterior render and masonry damage</p>
                  </div>
                  <ArrowRight className="ml-auto text-gray-400 group-hover:text-blue-600" />
                </Link>
                <Link
                  href="/services/woodwork-and-trim"
                  className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <span className="text-2xl">🪵</span>
                  <div>
                    <h3 className="font-semibold group-hover:text-blue-600">Woodwork & Trim</h3>
                    <p className="text-sm text-gray-600">Windows, doors, and fascias</p>
                  </div>
                  <ArrowRight className="ml-auto text-gray-400 group-hover:text-blue-600" />
                </Link>
              </div>
            </div>

            {/* Service areas */}
            <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Exterior Painters Serving {siteConfig.business.serviceArea}</h2>
              <p className="text-gray-700 mb-6">
                We provide exterior painting services throughout North London, including:
              </p>
              <div className="grid sm:grid-cols-3 gap-3">
                {locations.map((location) => (
                  <Link
                    key={location.slug}
                    href={`/areas-we-cover/${location.slug}`}
                    className="text-blue-600 hover:underline"
                  >
                    {location.name}
                  </Link>
                ))}
              </div>
              <p className="mt-6 text-gray-700">
                <Link href="/areas-we-cover" className="text-blue-600 hover:underline font-medium">
                  View all areas we cover →
                </Link>
              </p>
            </div>

            {/* CTA */}
            <CTABanner
              title="Protect Your Property with Quality Exterior Painting"
              subtitle="Get a free, detailed quote for your exterior painting project"
            />
          </div>
        </div>
      </article>
    </>
  );
}
