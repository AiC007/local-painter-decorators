import Link from 'next/link';
import { Metadata } from 'next';
import { siteConfig, locations } from '@/lib/config';
import CTABanner from '@/components/ui/CTABanner';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { generateBreadcrumbSchema, generateServiceSchema, generateFAQSchema } from '@/lib/schema';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Interior Painting Services North London | Expert Interior Painters',
  description: 'Professional interior painting in North London. Transform your rooms with expert painters. Quality finishes, minimal disruption, fully insured. Free quotes.',
  alternates: {
    canonical: '/services/interior-painting',
  },
};

const faqs = [
  {
    question: 'How long does it take to paint a room?',
    answer: 'A standard bedroom typically takes 1-2 days including preparation, two coats, and drying time. Larger rooms or those requiring extensive prep work may take 2-3 days. We\'ll give you an accurate timeline during the quote.'
  },
  {
    question: 'Do I need to move all my furniture?',
    answer: 'We can work around most furniture by moving it to the centre of the room and protecting it with dustsheets. For best results and easier access, we recommend removing smaller items and clearing wall spaces where possible.'
  },
  {
    question: 'What paint brands do you use?',
    answer: 'We use premium trade paints from trusted brands including Dulux Trade, Crown Trade, and Johnstone\'s Trade. These offer superior coverage, durability, and finish compared to retail paints. We\'re happy to discuss specific product recommendations for your project.'
  },
  {
    question: 'Can you match an existing colour?',
    answer: 'Yes. If you have the original paint tin or colour code, we can match it exactly. Alternatively, we can take a sample to a trade supplier for colour matching. We always recommend testing colours on your wall before committing to a full room.'
  },
  {
    question: 'Is the paint smell strong? How long does it last?',
    answer: 'Modern water-based paints have very low odour and are safe for occupied homes. Any smell typically dissipates within a few hours. We use low-VOC paints as standard and can provide odour-free options for sensitive environments.'
  },
];

export default function InteriorPaintingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Services', url: `${siteConfig.url}/services` },
    { name: 'Interior Painting', url: `${siteConfig.url}/services/interior-painting` },
  ]);

  const serviceSchema = generateServiceSchema({
    name: 'Interior Painting',
    description: 'Professional interior painting services for homes and businesses across North London',
    url: `${siteConfig.url}/services/interior-painting`,
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
                Interior Painting in {siteConfig.business.serviceArea}
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Transform your living spaces with professional interior painting. Flawless finishes, premium materials, and minimal disruption.
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
              <h2 className="text-3xl font-bold mb-6">Expert Interior Painting Services</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Interior painting is more than just applying colour to walls – it's about creating beautiful, lasting finishes that enhance your home. Our experienced painters deliver immaculate results across all types of interior spaces, from single bedrooms to whole-house renovations, using professional techniques and premium trade materials.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Based in {siteConfig.business.serviceArea}, we understand the unique challenges of painting London homes, from Victorian terraces with high ceilings and ornate cornices to modern flats requiring quick turnarounds with minimal disruption. Every project receives meticulous preparation, precise application, and thorough finishing touches.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Walls & Ceilings</strong>
                    <span className="text-gray-600 text-sm">Emulsion painting with superior coverage</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Woodwork</strong>
                    <span className="text-gray-600 text-sm">Doors, skirting, architraves, window frames</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Feature Walls</strong>
                    <span className="text-gray-600 text-sm">Accent colours and specialist finishes</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Staircases & Halls</strong>
                    <span className="text-gray-600 text-sm">Including high-access areas</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Kitchen & Bathrooms</strong>
                    <span className="text-gray-600 text-sm">Moisture-resistant specialist paints</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Radiators & Pipes</strong>
                    <span className="text-gray-600 text-sm">Heat-resistant finishes</span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Our Preparation Process</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Professional preparation is the foundation of any quality paint job. We never cut corners on prep work because we know it's what separates a good finish from a great one:
              </p>
              <ol className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">1.</span>
                  <div>
                    <strong>Protection & Setup</strong> – Furniture moved or covered with dustsheets, floors protected, fixtures masked with precision tape
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">2.</span>
                  <div>
                    <strong>Surface Preparation</strong> – Cracks filled, holes made good, imperfections smoothed, old flaking paint removed
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">3.</span>
                  <div>
                    <strong>Sanding</strong> – Surfaces sanded to create the perfect key for paint adhesion
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">4.</span>
                  <div>
                    <strong>Priming</strong> – Appropriate primers applied to ensure even coverage and long-lasting results
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">5.</span>
                  <div>
                    <strong>Painting</strong> – Two coats minimum using professional application techniques
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">6.</span>
                  <div>
                    <strong>Inspection & Touch-ups</strong> – Final check under different lighting, any imperfections corrected
                  </div>
                </li>
              </ol>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Materials & Paint Quality</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We exclusively use premium trade paints that offer superior performance over standard retail products. Trade paints provide better coverage (often needing fewer coats), more durable finishes, richer colours, and longer-lasting results.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our preferred brands include <strong>Dulux Trade</strong>, <strong>Crown Trade</strong>, and <strong>Johnstone's Trade</strong>. We'll recommend the right product for each surface – from moisture-resistant bathroom paints to scrubbable finishes for hallways and family rooms. All our standard paints are low-VOC (volatile organic compounds), making them safe for occupied homes and better for indoor air quality.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Typical Timeline</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most interior painting projects follow this general timeline, though we'll give you exact dates during your quote:
              </p>
              <ul className="space-y-2 mb-8 text-gray-700">
                <li><strong>Single bedroom:</strong> 1-2 days</li>
                <li><strong>Living room (standard):</strong> 2-3 days</li>
                <li><strong>Kitchen or bathroom:</strong> 2-3 days (including prep and specialist paints)</li>
                <li><strong>Whole flat (2-bed):</strong> 5-7 days</li>
                <li><strong>Whole house (3-bed):</strong> 7-10 days</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Aftercare Advice</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your newly painted surfaces need a little care in the first few weeks:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>Allow paint to cure fully (usually 2-4 weeks) before washing or scrubbing</li>
                <li>Ventilate rooms well for the first 48 hours to help paint cure</li>
                <li>Avoid placing furniture directly against walls for a few days</li>
                <li>Clean any marks gently with a soft, damp cloth and mild detergent once fully cured</li>
                <li>Keep leftover paint for future touch-ups (we'll label it clearly for you)</li>
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
                    <p className="text-sm text-gray-600">Fix damage before painting</p>
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
                    <p className="text-sm text-gray-600">Perfect finishes for doors & skirting</p>
                  </div>
                  <ArrowRight className="ml-auto text-gray-400 group-hover:text-blue-600" />
                </Link>
              </div>
            </div>

            {/* Service areas */}
            <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Interior Painters Serving {siteConfig.business.serviceArea}</h2>
              <p className="text-gray-700 mb-6">
                We provide interior painting services throughout North London, including:
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
              title="Ready for a Fresh New Look?"
              subtitle="Get a free, detailed quote for your interior painting project"
            />
          </div>
        </div>
      </article>
    </>
  );
}
