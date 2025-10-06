import Link from 'next/link';
import { Metadata } from 'next';
import { siteConfig, locations } from '@/lib/config';
import CTABanner from '@/components/ui/CTABanner';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { generateBreadcrumbSchema, generateServiceSchema, generateFAQSchema } from '@/lib/schema';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Plaster & Repair Services North London | Wall & Ceiling Repairs',
  description: 'Expert plaster and repair services in North London. Crack repair, skim coating, patch repairs, hole filling. Preparing walls for painting. Free quotes.',
  alternates: {
    canonical: '/services/plaster-and-repairs',
  },
};

const faqs = [
  {
    question: 'How long does plaster take to dry before painting?',
    answer: 'Fresh plaster typically needs 4-6 weeks to dry completely before decorating, though this varies with room temperature, ventilation, and humidity. We can test moisture levels with a meter. For quick turnarounds, we use fast-drying compounds or apply mist coats (watered-down emulsion) that allow plaster to breathe while providing some protection.'
  },
  {
    question: 'When do I need plastering before painting?',
    answer: 'You need plastering if walls have significant cracks, holes larger than a nail, uneven surfaces, damaged areas from removed fittings, or old flaking plaster. Minor imperfections can be filled and sanded, but if more than 20% of the wall needs attention, skim coating the entire surface often gives better results and costs little more than extensive patching.'
  },
  {
    question: 'How much do plaster repairs cost?',
    answer: 'Small patch repairs (holes, cracks) typically cost £80-150 depending on extent. Skim coating a room varies by size: small bedroom around £300-400, living room £400-600. Full re-plastering costs more. We provide detailed quotes after assessing the damage. Often bundled with painting for better value.'
  },
  {
    question: 'Can you repair cracks that keep coming back?',
    answer: 'Recurring cracks usually indicate movement – either settlement (normal in older properties) or ongoing structural issues. We use flexible fillers and scrim tape for minor movement cracks. For serious cracks (wider than 5mm, growing, or with other structural signs), we recommend a structural survey before repair. Cosmetic repairs on active cracks won\'t last.'
  },
  {
    question: 'Do you fix damp-damaged plaster?',
    answer: 'Yes, but we must address the damp source first. We hack off damaged plaster, let the wall dry, apply damp-proof treatments if needed, then re-plaster with appropriate materials. Plastering over damp just moves the problem. We work with damp specialists when required and can recommend trusted partners for serious issues.'
  },
];

export default function PlasterAndRepairsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Services', url: `${siteConfig.url}/services` },
    { name: 'Plaster & Repairs', url: `${siteConfig.url}/services/plaster-and-repairs` },
  ]);

  const serviceSchema = generateServiceSchema({
    name: 'Plaster & Repairs',
    description: 'Professional plastering and repair services for homes and businesses across North London',
    url: `${siteConfig.url}/services/plaster-and-repairs`,
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
                Plaster & Repairs in {siteConfig.business.serviceArea}
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Expert wall and ceiling repairs to create perfect surfaces for decoration. From minor patches to full skim coats, we prepare your walls properly.
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
              <h2 className="text-3xl font-bold mb-6">Professional Plaster & Repair Services</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Perfect decoration starts with perfect surfaces. You can use the most expensive paint or wallpaper available, but if the wall underneath is damaged, uneven, or poorly prepared, the finish will look substandard. That's where our plastering and repair expertise comes in – we create smooth, sound surfaces that provide the ideal canvas for decoration.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Working across {siteConfig.business.serviceArea}, we see the full range of issues that affect London homes. Victorian and Edwardian properties often have lime plaster that's cracked with age or damaged by inappropriate modern repairs. Post-war homes might have failing plasterboard or settlement cracks. Modern flats can have holes from previous fittings or damaged corners from moving furniture.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                We handle everything from filling a few screw holes to completely re-skimming rooms, repairing structural cracks, and dealing with damp-damaged plasterwork. Most of our plastering work is done in conjunction with painting and decorating projects, ensuring seamless integration between repairs and finishing. We understand how plaster needs to be prepared for different decorative finishes – what works for emulsion paint differs from what's needed for premium wallpaper.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Crack Repair</strong>
                    <span className="text-gray-600 text-sm">Filling and reinforcing cracks in walls and ceilings</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Hole Filling</strong>
                    <span className="text-gray-600 text-sm">Fixing damage from fixings, impacts, or removed fittings</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Skim Coating</strong>
                    <span className="text-gray-600 text-sm">Applying thin plaster layer for smooth finish</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Patch Repairs</strong>
                    <span className="text-gray-600 text-sm">Replacing sections of damaged plaster or plasterboard</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Ceiling Repairs</strong>
                    <span className="text-gray-600 text-sm">Fixing cracks, sagging, and water damage</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Coving & Cornice</strong>
                    <span className="text-gray-600 text-sm">Installing and repairing decorative plasterwork</span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Common Problems We Fix</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                London homes, particularly older properties, develop characteristic problems that need addressing before decoration:
              </p>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li><strong>Settlement Cracks:</strong> Diagonal or stepped cracks, especially around doors and windows in older properties. These are often historical and stable, requiring filling with flexible filler and scrim tape to prevent reappearance.</li>
                <li><strong>Ceiling Cracks:</strong> Common in Victorian homes with lath and plaster ceilings. May need bonding, scrim reinforcement, or in serious cases, replacement with plasterboard.</li>
                <li><strong>Blown Plaster:</strong> Areas where plaster has lost adhesion to the wall, sounding hollow when tapped. Must be removed and replaced – patching over fails quickly.</li>
                <li><strong>Damp Damage:</strong> Plaster affected by leaks, rising damp, or condensation becomes friable and discoloured. Needs removing, wall drying out, and replastering with appropriate materials.</li>
                <li><strong>Poor Previous Repairs:</strong> Amateur filler work that's shrunk, cracked, or not been sanded properly. We remove and redo these properly.</li>
                <li><strong>Artex & Textured Ceilings:</strong> Can be skimmed over to create smooth surfaces for modern decoration.</li>
                <li><strong>Damaged Corners:</strong> Particularly common in narrow hallways and on stair walls where furniture impacts edges. We rebuild and reinforce these.</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Our Repair Process</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Professional repairs require proper technique and the right materials for each situation:
              </p>
              <ol className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">1.</span>
                  <div>
                    <strong>Assessment</strong> – We inspect damage thoroughly, identify causes (especially recurring cracks or damp issues), and determine the appropriate repair method
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">2.</span>
                  <div>
                    <strong>Preparation</strong> – Loose or blown plaster removed, cracks opened up slightly to key properly, surfaces cleaned and dampened if necessary
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">3.</span>
                  <div>
                    <strong>Base Coat</strong> – For larger repairs, bonding or browning plaster applied first to build up depth and create solid foundation
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">4.</span>
                  <div>
                    <strong>Reinforcement</strong> – Scrim tape or fibreglass mesh applied over cracks and joints to prevent reappearance
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">5.</span>
                  <div>
                    <strong>Finishing Coat</strong> – Final skim of multi-finish plaster trowelled to smooth finish, feathered into surrounding areas for seamless repair
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">6.</span>
                  <div>
                    <strong>Sanding & Preparation</strong> – Once dry, repairs sanded smooth and primed ready for decoration
                  </div>
                </li>
              </ol>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Materials We Use</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Different repairs require different materials. We select the right products for each job:
              </p>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li><strong>Multi-Finish Plaster:</strong> Our standard finishing plaster for skim coats and final layers. Provides smooth, durable surface for painting or wallpapering.</li>
                <li><strong>Bonding & Browning:</strong> Base coat plasters for building up depth on solid backgrounds or filling deep holes.</li>
                <li><strong>Board Finish:</strong> Specifically formulated for plasterboard surfaces, including patch repairs.</li>
                <li><strong>Flexible Fillers:</strong> For cracks subject to minor movement. These remain slightly flexible when dry, preventing re-cracking.</li>
                <li><strong>One-Coat Plaster:</strong> For small repairs where speed is important – dries faster than traditional multi-finish.</li>
                <li><strong>Damp-Resistant Plasters:</strong> Containing waterproofers for bathrooms, kitchens, or areas with previous damp issues.</li>
                <li><strong>Scrim & Fibreglass Mesh:</strong> Reinforcement materials that bridge cracks and prevent reappearance.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                We source professional-grade materials from trade suppliers, including products from <strong>British Gypsum</strong>, <strong>Thistle</strong>, and <strong>Knauf</strong> – trusted brands that provide consistent quality and workability.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Typical Timeline</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Repair timelines depend on extent and drying requirements:
              </p>
              <ul className="space-y-2 mb-8 text-gray-700">
                <li><strong>Minor filling (holes/cracks):</strong> 1 day including drying and sanding</li>
                <li><strong>Patch repairs (multiple areas):</strong> 1-2 days</li>
                <li><strong>Skim coat single room:</strong> 1 day plastering + 2-3 days drying before painting</li>
                <li><strong>Skim coat multiple rooms:</strong> 2-3 days plastering + drying time</li>
                <li><strong>Major repairs (extensive damage):</strong> 3-5 days + appropriate drying</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                We can use fast-drying compounds for quick turnarounds, but traditional plaster generally provides the best long-term results. Most repair work is scheduled as the first stage of a painting project, with decoration following once surfaces are ready.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Aftercare & Drying</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Plaster needs proper drying for best results:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>Keep rooms well-ventilated while plaster dries – open windows but avoid draughts directly on fresh work</li>
                <li>Don't use artificial heat (radiators, heaters) for at least 48 hours – this causes cracking</li>
                <li>Fresh plaster changes from dark to light pink as it dries – this is normal</li>
                <li>Small hairline cracks may appear during drying – these are usually surface tension cracks and fill easily</li>
                <li>For painting, fresh plaster needs a mist coat (watered-down emulsion) before full coats</li>
                <li>For wallpapering, plaster must be completely dry – typically 4-6 weeks, though moisture meters can confirm</li>
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
                    <p className="text-sm text-gray-600">Paint your repaired surfaces perfectly</p>
                  </div>
                  <ArrowRight className="ml-auto text-gray-400 group-hover:text-blue-600" />
                </Link>
                <Link
                  href="/services/wallpapering"
                  className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <span className="text-2xl">📐</span>
                  <div>
                    <h3 className="font-semibold group-hover:text-blue-600">Wallpapering</h3>
                    <p className="text-sm text-gray-600">Smooth walls for perfect wallpaper hanging</p>
                  </div>
                  <ArrowRight className="ml-auto text-gray-400 group-hover:text-blue-600" />
                </Link>
              </div>
            </div>

            {/* Service areas */}
            <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Plaster & Repair Services Serving {siteConfig.business.serviceArea}</h2>
              <p className="text-gray-700 mb-6">
                We provide plastering and repair services throughout North London, including:
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
              title="Get Perfect Walls Ready for Decoration"
              subtitle="Get a free, detailed quote for your plastering and repair work"
            />
          </div>
        </div>
      </article>
    </>
  );
}
