import Link from 'next/link';
import { Metadata } from 'next';
import { siteConfig, locations } from '@/lib/config';
import CTABanner from '@/components/ui/CTABanner';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { generateBreadcrumbSchema, generateServiceSchema, generateFAQSchema } from '@/lib/schema';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Woodwork & Trim Painting North London | Doors, Skirting, Windows',
  description: 'Expert woodwork and trim painting in North London. Doors, skirting boards, window frames, stairs. Professional preparation, gloss and satinwood finishes. Free quotes.',
  alternates: {
    canonical: '/services/woodwork-and-trim',
  },
};

const faqs = [
  {
    question: 'How much preparation is involved in painting woodwork?',
    answer: 'Preparation is typically 60-70% of woodwork painting time. We sand existing paint to create a key, fill holes and dents, treat knots in bare wood with knotting solution, apply primer to bare areas, and use caulk to fill gaps between wood and walls. Proper prep is what separates a professional finish from a DIY one – it\'s time-consuming but essential.'
  },
  {
    question: 'Should I choose gloss or satinwood finish?',
    answer: 'Satinwood (satin finish) has become more popular than traditional gloss in recent years. It offers a softer, contemporary look that hides imperfections better and doesn\'t yellow as much over time. Gloss provides a harder, more traditional finish with higher sheen. Both are durable – the choice is mainly aesthetic. We\'ll show you samples to help decide.'
  },
  {
    question: 'Can you paint over existing gloss without stripping?',
    answer: 'Yes, if the existing finish is sound. We sand it thoroughly to create a key for new paint to adhere to, ensuring proper preparation. If old paint is flaking badly, unstable, or has many layers built up, stripping back to bare wood gives better long-term results. We assess condition and recommend the best approach during the quote.'
  },
  {
    question: 'How long does woodwork painting take?',
    answer: 'A standard room (doors, skirting, architraves, window) takes 1-2 days including prep and two coats. Whole-house woodwork for a 3-bed property typically takes 5-7 days. Intricate details like spindles on staircases or panelled doors take longer. We allow proper drying time between coats for durability.'
  },
  {
    question: 'What is the difference between undercoat and top coat?',
    answer: 'Undercoat provides opacity (colour coverage), fills minor imperfections, and creates the right surface for the top coat to adhere to. Top coat (gloss or satinwood) provides the colour, sheen, and durability. Using proper undercoat ensures better coverage, richer colour, and longer-lasting results than applying multiple top coats directly.'
  },
];

export default function WoodworkAndTrimPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Services', url: `${siteConfig.url}/services` },
    { name: 'Woodwork & Trim', url: `${siteConfig.url}/services/woodwork-and-trim` },
  ]);

  const serviceSchema = generateServiceSchema({
    name: 'Woodwork & Trim Painting',
    description: 'Professional woodwork and trim painting services for homes and businesses across North London',
    url: `${siteConfig.url}/services/woodwork-and-trim`,
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
                Woodwork & Trim Painting in {siteConfig.business.serviceArea}
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Flawless finishes for doors, skirting, architraves, and window frames. Professional preparation and premium paint systems for lasting beauty.
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
              <h2 className="text-3xl font-bold mb-6">Expert Woodwork & Trim Painting</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Woodwork makes or breaks a room's appearance. Beautifully painted skirting boards, crisp door frames, and immaculate window surrounds provide the finishing touches that elevate decoration from acceptable to exceptional. Conversely, poorly prepared or badly painted woodwork – with visible brush marks, drips, or uneven coverage – undermines even the most expensive wall treatments.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Painting woodwork properly is a skill that demands patience, precision, and the right products. It's far more involved than painting walls. Wood is a living material that expands and contracts with humidity. It has knots that can bleed through paint. It gets handled, knocked, and cleaned more than walls. All this means woodwork needs thorough preparation, appropriate primers and undercoats, and durable top coats that can withstand daily wear.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Working across {siteConfig.business.serviceArea}, we paint all types of interior woodwork – from original Victorian panelled doors and ornate cornicing to modern MDF skirting and hollow-core doors. We understand how different timbers and manufactured boards behave, what preparation each requires, and how to achieve that perfect, glass-smooth finish that looks elegant and lasts for years.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Doors</strong>
                    <span className="text-gray-600 text-sm">Interior and exterior doors, frames, and thresholds</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Skirting Boards</strong>
                    <span className="text-gray-600 text-sm">All profiles and heights, including intricate period designs</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Architraves</strong>
                    <span className="text-gray-600 text-sm">Door and window surrounds with mitred corners</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Window Frames</strong>
                    <span className="text-gray-600 text-sm">Sills, frames, and opening sashes (interior side)</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Stairs & Banisters</strong>
                    <span className="text-gray-600 text-sm">Handrails, spindles, newel posts, and string boards</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Built-in Furniture</strong>
                    <span className="text-gray-600 text-sm">Shelving, cupboards, and fitted wardrobes</span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Our Preparation Process</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Professional woodwork painting is at least 60% preparation. We never skip this stage because it's what determines the quality and longevity of the finish:
              </p>
              <ol className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">1.</span>
                  <div>
                    <strong>Cleaning</strong> – All surfaces cleaned to remove grease, dirt, and handling marks that prevent paint adhesion. We use sugar soap or degreaser as appropriate
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">2.</span>
                  <div>
                    <strong>Sanding</strong> – Existing paint sanded to create a key for new coats. We use appropriate grits depending on condition – typically 120-180 grit for smooth finishes
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">3.</span>
                  <div>
                    <strong>Filling</strong> – Holes from screws, nails, or damage filled with appropriate wood filler. Dents and scratches made good. Once dry, filled areas sanded flush
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">4.</span>
                  <div>
                    <strong>Knotting & Priming</strong> – For bare wood or exposed knots, we apply knotting solution to prevent resin bleed, then appropriate primer for the timber type
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">5.</span>
                  <div>
                    <strong>Caulking</strong> – Gaps between woodwork and walls filled with decorators' caulk for seamless appearance. This makes a huge difference to the professional look
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">6.</span>
                  <div>
                    <strong>Undercoat</strong> – One or two coats of appropriate undercoat applied, providing opacity and the right surface for top coat adhesion
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">7.</span>
                  <div>
                    <strong>Light Sanding</strong> – After undercoat dries, we lightly sand to remove any nibs or imperfections, creating the perfect surface for final coats
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">8.</span>
                  <div>
                    <strong>Top Coats</strong> – Two coats of gloss or satinwood applied using professional techniques – brush for cut-in and details, roller for larger flat areas when appropriate
                  </div>
                </li>
              </ol>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Paint Systems & Finishes</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use premium trade paint systems designed specifically for woodwork. These offer superior flow, levelling, and durability compared to retail products:
              </p>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li><strong>Satinwood (Satin):</strong> Our most popular finish. Provides a soft sheen that's contemporary and elegant. Less prone to showing brush marks than gloss, and doesn't yellow as much over time. Excellent durability. Available in any colour. We use <strong>Dulux Trade Satinwood</strong>, <strong>Crown Trade Fastflow</strong>, or <strong>Johnstone's Aqua Satin</strong>.</li>
                <li><strong>Gloss:</strong> Traditional high-sheen finish offering a hard, durable surface. Creates that classic painted look. More resistant to knocks but shows imperfections more readily. We typically use water-based gloss for lower odour and less yellowing than traditional oil-based.</li>
                <li><strong>Eggshell:</strong> Lower sheen than satinwood, offering a very subtle finish. Popular for period properties and contemporary minimalist schemes. Slightly less durable than satinwood but very attractive.</li>
                <li><strong>Primers & Undercoats:</strong> We select appropriate primers for the substrate – wood primer for bare timber, MDF primer for manufactured boards, aluminium wood primer for resinous woods. Undercoats are matched to the top coat system for optimal compatibility.</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Specialist Techniques</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Different woodwork requires different approaches. Panelled doors need careful brush work in mouldings before larger panels. Spindles on staircases require patience and a steady hand. Window frames need extra care where glass meets wood. We've mastered these techniques through years of experience, ensuring every detail receives the attention it deserves.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Typical Timeline</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Woodwork painting takes time because of the preparation and drying stages:
              </p>
              <ul className="space-y-2 mb-8 text-gray-700">
                <li><strong>Single room (doors, skirting, architraves, window):</strong> 1-2 days</li>
                <li><strong>Whole flat (2-bed):</strong> 3-4 days</li>
                <li><strong>Whole house (3-bed):</strong> 5-7 days</li>
                <li><strong>Staircase with spindles:</strong> 2-3 days</li>
                <li><strong>Front door (external, detailed prep):</strong> 1-2 days</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                We allow proper drying time between coats – rushing compromises durability. Most woodwork projects are done as part of full room decoration, with walls painted between woodwork coats for efficiency.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Aftercare & Durability</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Well-painted woodwork should last 5-8 years in most homes. To maximise lifespan:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>Allow paint to cure fully (2-4 weeks) before cleaning or heavy use</li>
                <li>Avoid closing doors hard or dragging furniture against skirting during curing period</li>
                <li>Clean with soft, damp cloth and mild detergent – avoid abrasive cleaners</li>
                <li>Touch up chips and scratches promptly to prevent moisture getting to bare wood</li>
                <li>Maintain good ventilation in kitchens and bathrooms to reduce moisture stress on paint</li>
                <li>We provide leftover paint labelled by room/area for future touch-ups</li>
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
                  href="/services/interior-painting"
                  className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <span className="text-2xl">🎨</span>
                  <div>
                    <h3 className="font-semibold group-hover:text-blue-600">Interior Painting</h3>
                    <p className="text-sm text-gray-600">Complete room decoration with walls & woodwork</p>
                  </div>
                  <ArrowRight className="ml-auto text-gray-400 group-hover:text-blue-600" />
                </Link>
                <Link
                  href="/services/exterior-painting"
                  className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <span className="text-2xl">🏠</span>
                  <div>
                    <h3 className="font-semibold group-hover:text-blue-600">Exterior Painting</h3>
                    <p className="text-sm text-gray-600">External doors, windows, and fascias</p>
                  </div>
                  <ArrowRight className="ml-auto text-gray-400 group-hover:text-blue-600" />
                </Link>
              </div>
            </div>

            {/* Service areas */}
            <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Woodwork Painting Serving {siteConfig.business.serviceArea}</h2>
              <p className="text-gray-700 mb-6">
                We provide woodwork and trim painting throughout North London, including:
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
              title="Elevate Your Interior with Perfect Woodwork"
              subtitle="Get a free, detailed quote for your woodwork painting project"
            />
          </div>
        </div>
      </article>
    </>
  );
}
