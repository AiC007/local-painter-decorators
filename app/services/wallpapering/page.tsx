import Link from 'next/link';
import { Metadata } from 'next';
import { siteConfig, locations } from '@/lib/config';
import CTABanner from '@/components/ui/CTABanner';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { generateBreadcrumbSchema, generateServiceSchema, generateFAQSchema } from '@/lib/schema';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Wallpapering Services North London | Professional Wallpaper Hanging',
  description: 'Expert wallpapering in North London. Pattern matching, feature walls, all wallpaper types. Professional surface preparation and hanging. Free quotes.',
  alternates: {
    canonical: '/services/wallpapering',
  },
};

const faqs = [
  {
    question: 'How much does wallpapering cost compared to painting?',
    answer: 'Wallpapering is typically more expensive than painting due to the material costs and skilled labour required. Budget wallpaper might cost £15-30 per roll, mid-range £30-60, and designer papers £60-150+. Labour costs reflect the precision required for pattern matching and seamless hanging. A feature wall is often a cost-effective way to enjoy premium wallpaper.'
  },
  {
    question: 'How long does it take to wallpaper a room?',
    answer: 'A standard bedroom feature wall typically takes half a day to a full day depending on the pattern complexity. A complete room takes 1-2 days including preparation. Large patterns, high ceilings, or intricate designs requiring precise matching take longer. We\'ll give you an accurate timeline during the quote based on your specific paper and room.'
  },
  {
    question: 'Do you need to prepare the walls before wallpapering?',
    answer: 'Yes, proper preparation is essential. Walls must be clean, dry, and smooth. We fill holes and cracks, sand rough patches, and often apply lining paper to create the perfect surface. Any imperfections will show through wallpaper, especially with expensive or delicate papers. We also remove old wallpaper if necessary and treat any damp issues.'
  },
  {
    question: 'Can you hang any type of wallpaper?',
    answer: 'Yes, we hang all types: traditional paste-the-wall papers, paste-the-paper, non-woven, vinyl, textured, grasscloth, and specialist fabrics. Each type requires different techniques and adhesives. We\'re experienced with large-repeat patterns, delicate silks, and heavy embossed papers. We\'ll advise on the best type for your room\'s conditions.'
  },
  {
    question: 'How do you remove old wallpaper?',
    answer: 'We score the surface, apply wallpaper stripper solution, let it soak, then scrape off using professional tools. Stubborn papers might need a steam stripper. We protect floors and fixtures throughout. Once removed, we wash walls to remove paste residue and assess what preparation is needed before hanging new paper. This typically adds 1-2 days to a project.'
  },
];

export default function WallpaperingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Services', url: `${siteConfig.url}/services` },
    { name: 'Wallpapering', url: `${siteConfig.url}/services/wallpapering` },
  ]);

  const serviceSchema = generateServiceSchema({
    name: 'Wallpapering',
    description: 'Professional wallpapering services for homes and businesses across North London',
    url: `${siteConfig.url}/services/wallpapering`,
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
                Wallpapering in {siteConfig.business.serviceArea}
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Transform your space with professional wallpaper hanging. Expert pattern matching, seamless finishes, and meticulous attention to detail.
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
              <h2 className="text-3xl font-bold mb-6">Professional Wallpapering Services</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Wallpaper has made a significant comeback in recent years, and it's easy to see why. Modern wallpapers offer textures, patterns, and visual depth that paint simply cannot match. From subtle textured designs that add warmth to dramatic feature walls that become the focal point of a room, wallpaper transforms spaces in ways that feel both timeless and contemporary.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                But wallpapering is a skilled trade that demands precision, patience, and experience. Poor hanging shows immediately – misaligned patterns, visible seams, bubbles, and wonky edges ruin even the most expensive paper. We've been hanging wallpaper across {siteConfig.business.serviceArea} for years, working with everything from budget-friendly vinyls to delicate designer silks, and we know how to achieve seamless, professional results every time.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Whether you're after a single feature wall in your bedroom, a complete room transformation, or period-appropriate papers for a Victorian terrace, we handle every aspect: removing old wallpaper, preparing surfaces to perfection, precise pattern matching, and flawless hanging using the correct adhesives and techniques for your chosen paper type.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Feature Walls</strong>
                    <span className="text-gray-600 text-sm">Single wall transformations with statement papers</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Whole Rooms</strong>
                    <span className="text-gray-600 text-sm">Complete room papering with perfect continuity</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Pattern Matching</strong>
                    <span className="text-gray-600 text-sm">Precise alignment for complex repeating designs</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Old Wallpaper Removal</strong>
                    <span className="text-gray-600 text-sm">Complete stripping and surface cleaning</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Lining Paper</strong>
                    <span className="text-gray-600 text-sm">Creating smooth surfaces for premium papers</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Specialist Papers</strong>
                    <span className="text-gray-600 text-sm">Textured, metallic, grasscloth, and fabric wallcoverings</span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Our Preparation & Hanging Process</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Professional wallpapering requires meticulous preparation and technique. We follow a proven process that ensures beautiful, long-lasting results:
              </p>
              <ol className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">1.</span>
                  <div>
                    <strong>Room Preparation</strong> – Furniture moved, floors protected with dustsheets, electrical outlets isolated, radiators removed if necessary for full coverage
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">2.</span>
                  <div>
                    <strong>Old Wallpaper Removal</strong> – If present, old paper scored, soaked with stripper, and carefully removed. Stubborn areas treated with steam stripper
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">3.</span>
                  <div>
                    <strong>Surface Preparation</strong> – Walls washed to remove paste residue, holes and cracks filled, rough areas sanded smooth, minor repairs completed
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">4.</span>
                  <div>
                    <strong>Lining Paper</strong> – For premium papers or uneven walls, we hang lining paper horizontally to create a perfect surface and prevent joints showing through
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">5.</span>
                  <div>
                    <strong>Sizing</strong> – Walls sealed with wallpaper size to control adhesive absorption and allow for positioning adjustments
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">6.</span>
                  <div>
                    <strong>Wallpaper Hanging</strong> – Paper cut with pattern matching, correct paste applied (or paste-the-wall method used), carefully positioned, smoothed, and trimmed with precision
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">7.</span>
                  <div>
                    <strong>Finishing</strong> – Seams rolled, edges trimmed perfectly, excess paste wiped away, final inspection under different lighting
                  </div>
                </li>
              </ol>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Wallpaper Types We Work With</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Different wallpapers require different handling techniques and adhesives. We're experienced with all types:
              </p>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li><strong>Paste-the-Wall:</strong> Modern papers where adhesive is applied directly to the wall. Quick to hang, easy to position, minimal mess. Ideal for straightforward projects and DIY-quality upgrades.</li>
                <li><strong>Traditional Paste-the-Paper:</strong> Classic method where paste is applied to the paper backing. Requires soaking time and careful handling. Used for many mid-range and designer papers.</li>
                <li><strong>Non-Woven:</strong> Dimensionally stable papers that don't expand when wet. Excellent for pattern matching. Often paste-the-wall. Strong and easy to remove when redecorating.</li>
                <li><strong>Vinyl:</strong> Washable and durable, perfect for kitchens, bathrooms, and high-traffic areas. Available in various weights and textures. Requires specific vinyl adhesives.</li>
                <li><strong>Textured & Embossed:</strong> Papers with raised patterns that add depth and hide minor wall imperfections. Need careful smoothing to avoid crushing the texture.</li>
                <li><strong>Grasscloth & Natural Fabrics:</strong> Luxury papers made from natural fibres. Delicate to handle, require specialist pastes, and show unique variations that add character.</li>
                <li><strong>Metallic & Foil:</strong> Reflective papers that create dramatic effects. Demand perfect wall preparation as they highlight every imperfection.</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Adhesives & Materials</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We use appropriate adhesives for each wallpaper type. Standard wallpaper paste for traditional papers, heavy-duty paste for thick or vinyl papers, overlap adhesive for seams, and specialist pastes for grasscloth or fabric papers. We source professional-grade products from trade suppliers, including <strong>Dulux Trade</strong> wallpaper adhesives and primers that ensure optimal adhesion and workability.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Typical Timeline</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Wallpapering timelines depend on room size, paper complexity, and whether old wallpaper needs removing:
              </p>
              <ul className="space-y-2 mb-8 text-gray-700">
                <li><strong>Feature wall (no removal needed):</strong> 0.5-1 day</li>
                <li><strong>Single bedroom (four walls):</strong> 1-2 days</li>
                <li><strong>Living room (standard):</strong> 2-3 days</li>
                <li><strong>Hallway & stairs:</strong> 2-3 days (depending on access)</li>
                <li><strong>Old wallpaper removal:</strong> Add 1-2 days depending on layers and adhesion</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                Complex patterns with large repeats take longer due to careful matching. We never rush – precision is everything with wallpaper.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Aftercare & Maintenance</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Look after your new wallpaper to keep it looking fresh:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>Allow paste to dry fully (usually 48 hours) before touching or cleaning</li>
                <li>Keep rooms well-ventilated during drying to prevent mould</li>
                <li>Dust regularly with a soft brush or vacuum with upholstery attachment</li>
                <li>For washable papers, clean marks gently with a damp cloth – test in an inconspicuous area first</li>
                <li>Avoid hanging heavy items on wallpapered walls where possible, or use appropriate fixings</li>
                <li>Keep leftover rolls for future repairs – we'll note the batch number in case you need more</li>
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
                    <p className="text-sm text-gray-600">Perfect wall preparation for wallpaper</p>
                  </div>
                  <ArrowRight className="ml-auto text-gray-400 group-hover:text-blue-600" />
                </Link>
                <Link
                  href="/services/interior-painting"
                  className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <span className="text-2xl">🎨</span>
                  <div>
                    <h3 className="font-semibold group-hover:text-blue-600">Interior Painting</h3>
                    <p className="text-sm text-gray-600">Complement wallpaper with painted walls</p>
                  </div>
                  <ArrowRight className="ml-auto text-gray-400 group-hover:text-blue-600" />
                </Link>
              </div>
            </div>

            {/* Service areas */}
            <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Wallpapering Services Serving {siteConfig.business.serviceArea}</h2>
              <p className="text-gray-700 mb-6">
                We provide professional wallpapering throughout North London, including:
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
              title="Transform Your Walls with Professional Wallpapering"
              subtitle="Get a free, detailed quote for your wallpapering project"
            />
          </div>
        </div>
      </article>
    </>
  );
}
