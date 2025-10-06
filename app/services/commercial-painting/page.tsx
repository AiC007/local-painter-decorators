import Link from 'next/link';
import { Metadata } from 'next';
import { siteConfig, locations } from '@/lib/config';
import CTABanner from '@/components/ui/CTABanner';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { generateBreadcrumbSchema, generateServiceSchema, generateFAQSchema } from '@/lib/schema';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Commercial Painting Services North London | Office & Retail Painters',
  description: 'Professional commercial painting in North London. Offices, shops, restaurants, cafés. Out-of-hours work, minimal disruption, fast turnaround. Free quotes.',
  alternates: {
    canonical: '/services/commercial-painting',
  },
};

const faqs = [
  {
    question: 'Can you work out of hours to avoid disrupting our business?',
    answer: 'Absolutely. We regularly work evenings, weekends, and overnight to minimise disruption to your business operations. This is particularly common for retail units, restaurants, and busy offices. We\'ll schedule work around your requirements – whether that\'s evenings only, weekends, or a complete night shift. Out-of-hours rates may apply for unsociable hours.'
  },
  {
    question: 'How much disruption should we expect?',
    answer: 'We minimise disruption through careful planning and professional execution. For occupied spaces, we work area by area, use low-odour paints, protect furnishings thoroughly, and clean up daily. Many clients continue trading during work. For more extensive projects, we recommend scheduling during quieter periods or closure days. We\'ll discuss the best approach during our site survey.'
  },
  {
    question: 'How long does commercial painting take?',
    answer: 'This varies greatly depending on size and complexity. A small retail unit might take 2-3 days, a café or restaurant 3-5 days, and a multi-room office 1-2 weeks. We can accelerate timelines by deploying larger teams if you have a tight deadline. After surveying your premises, we\'ll provide a detailed schedule showing exactly when each area will be complete.'
  },
  {
    question: 'Do you have insurance and health & safety documentation?',
    answer: 'Yes, we carry full public liability insurance (£5 million) and employers\' liability insurance. We provide method statements and risk assessments (RAMS) before starting work, comply with all CDM regulations, and follow strict health & safety protocols. Our team are trained in working at height, COSHH, and fire safety. Documentation is available on request for your facilities management team.'
  },
  {
    question: 'Can you help with colour consultation for our brand?',
    answer: 'Yes. We understand commercial spaces need to reflect your brand identity and create the right atmosphere for customers or staff. We can work from your brand guidelines, recommend colours that complement your industry (calming tones for healthcare, energising colours for gyms, professional schemes for offices), and provide sample boards. We\'ve worked with designers and brand consultants on numerous commercial fit-outs.'
  },
];

export default function CommercialPaintingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Services', url: `${siteConfig.url}/services` },
    { name: 'Commercial Painting', url: `${siteConfig.url}/services/commercial-painting` },
  ]);

  const serviceSchema = generateServiceSchema({
    name: 'Commercial Painting',
    description: 'Professional commercial painting services for businesses across North London',
    url: `${siteConfig.url}/services/commercial-painting`,
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
                Commercial Painting in {siteConfig.business.serviceArea}
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Professional painting for offices, retail, hospitality, and commercial properties. Minimal disruption, flexible scheduling, and quality finishes that reflect your brand.
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
              <h2 className="text-3xl font-bold mb-6">Professional Commercial Painting Services</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Your commercial premises make a powerful first impression on customers, clients, and employees. Fresh, well-maintained decoration conveys professionalism, attention to detail, and pride in your business. Conversely, tired, marked, or poorly painted spaces suggest neglect and can undermine even the best businesses.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                We specialise in commercial painting across {siteConfig.business.serviceArea}, working with businesses of all types and sizes. From small retail units and cafés to multi-room offices and restaurant fit-outs, we understand that commercial work demands different skills and approaches to residential projects. You need reliable contractors who turn up on time, work efficiently, minimise disruption, and deliver professional results to tight deadlines.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                We've built our commercial reputation on flexibility, reliability, and quality. We work around your business requirements – whether that means painting outside normal hours, completing projects in phases to keep you trading, or deploying larger teams to meet tight deadlines. We provide all necessary insurance, health and safety documentation, and work to commercial standards that satisfy landlords, facilities managers, and health inspectors.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Our commercial clients include independent retailers, office spaces, restaurants and cafés, medical practices, gyms and studios, estate agents, salons, and professional services firms. We handle everything from routine maintenance decoration to complete fit-out painting for new premises, refurbishments, and rebrand projects.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Commercial Sectors We Serve</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Offices</strong>
                    <span className="text-gray-600 text-sm">Co-working spaces, corporate offices, serviced offices</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Retail</strong>
                    <span className="text-gray-600 text-sm">Shops, boutiques, showrooms, galleries</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Hospitality</strong>
                    <span className="text-gray-600 text-sm">Restaurants, cafés, bars, hotels</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Healthcare</strong>
                    <span className="text-gray-600 text-sm">Surgeries, dental practices, clinics, therapy rooms</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Leisure & Fitness</strong>
                    <span className="text-gray-600 text-sm">Gyms, yoga studios, sports facilities</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div>
                    <strong className="block">Professional Services</strong>
                    <span className="text-gray-600 text-sm">Estate agents, accountants, legal practices, consultancies</span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Our Commercial Process</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Commercial projects require careful planning and execution to minimise business disruption:
              </p>
              <ol className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">1.</span>
                  <div>
                    <strong>Site Survey & Consultation</strong> – We visit your premises to assess scope, discuss your requirements, understand any constraints (access, timing, sensitive equipment), and provide detailed quotation
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">2.</span>
                  <div>
                    <strong>Scheduling & Planning</strong> – We create a detailed schedule showing exactly when each area will be worked on, how long it will take, and any business impact. We're flexible and work around your trading hours
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">3.</span>
                  <div>
                    <strong>Documentation</strong> – We provide method statements, risk assessments (RAMS), insurance certificates, and any other documentation required by your landlord or facilities team
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">4.</span>
                  <div>
                    <strong>Preparation & Protection</strong> – Equipment, stock, and furniture protected with dustsheets, floors covered, thorough masking of fixtures, and clear work areas established
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">5.</span>
                  <div>
                    <strong>Professional Execution</strong> – Our experienced team works efficiently with minimal disruption, using low-odour paints where premises are occupied, maintaining clean and safe work areas
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">6.</span>
                  <div>
                    <strong>Daily Clean-up</strong> – At the end of each shift, we clean thoroughly, remove debris, and leave premises secure and presentable for the next day's business
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">7.</span>
                  <div>
                    <strong>Final Handover</strong> – Complete clean and inspection, snagging any minor issues, removing all equipment, and returning premises to full operational status
                  </div>
                </li>
              </ol>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Minimising Business Disruption</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We understand that every hour of disruption potentially costs you business. Our approach to minimising impact includes:
              </p>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li><strong>Flexible Scheduling:</strong> We work evenings, weekends, and overnight when required. Many retail and hospitality clients prefer us to work after closing, completing projects while they're shut.</li>
                <li><strong>Phased Work:</strong> For larger premises, we work room by room or area by area, allowing you to continue operating in other parts of the building.</li>
                <li><strong>Fast Turnaround:</strong> We can deploy larger teams to compress timelines when you have hard deadlines – whether that's a grand opening, inspection, or seasonal peak period.</li>
                <li><strong>Low-Odour Products:</strong> We use water-based, low-VOC paints as standard, minimising smell and allowing occupied spaces to be decorated with less disruption.</li>
                <li><strong>Efficient Workflow:</strong> Commercial work demands efficiency. Our teams are experienced in working quickly without compromising quality, understanding that time really is money in commercial settings.</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Commercial-Grade Materials</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Commercial environments demand robust, durable finishes that withstand heavier wear than domestic spaces:
              </p>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li><strong>Contract Emulsions:</strong> We use commercial-grade paints from <strong>Dulux Trade</strong>, <strong>Crown Trade</strong>, and <strong>Johnstone's Trade</strong> specifically formulated for high-traffic commercial use. These offer superior scrubbability, stain resistance, and durability.</li>
                <li><strong>Specialist Coatings:</strong> For specific environments, we use appropriate products – anti-bacterial paints for healthcare settings, moisture-resistant formulations for kitchens and bathrooms, fire-rated coatings where required.</li>
                <li><strong>Hard-Wearing Finishes:</strong> Commercial woodwork gets heavy use. We use durable satinwood and gloss systems designed to resist knocks, scratches, and frequent cleaning.</li>
                <li><strong>Quick-Drying Products:</strong> Where speed is essential, we can use fast-drying products that reduce downtime, though we'll always recommend the best balance of speed and durability.</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Health & Safety Compliance</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Commercial work requires strict adherence to health and safety regulations. We're fully compliant with all relevant legislation, carry appropriate insurance, and provide all necessary documentation. Our team are trained in working safely in occupied commercial premises, including work at height, COSHH regulations, fire safety, and emergency procedures. We conduct risk assessments before starting work and maintain safe working practices throughout.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Typical Project Timelines</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Commercial timelines vary significantly based on size, complexity, and whether we can work during business hours:
              </p>
              <ul className="space-y-2 mb-8 text-gray-700">
                <li><strong>Small retail unit or office:</strong> 2-4 days</li>
                <li><strong>Café or restaurant:</strong> 3-7 days (depending on size and trading schedule)</li>
                <li><strong>Multi-room office suite:</strong> 1-2 weeks</li>
                <li><strong>Complete office floor:</strong> 2-4 weeks</li>
                <li><strong>Shop fit-out (full decoration):</strong> 1-3 weeks</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                We can often accelerate these timelines by deploying larger teams or working extended hours if you have specific deadline requirements.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Maintenance Contracts</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                For businesses requiring regular maintenance decoration, we offer planned maintenance contracts. These provide scheduled visits to touch up high-wear areas, keep your premises looking fresh, and address any issues before they become major problems. Regular maintenance is more cost-effective than complete redecoration and ensures your business always looks its best.
              </p>
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
                    <p className="text-sm text-gray-600">Professional finishes for commercial interiors</p>
                  </div>
                  <ArrowRight className="ml-auto text-gray-400 group-hover:text-blue-600" />
                </Link>
                <Link
                  href="/services/plaster-and-repairs"
                  className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <span className="text-2xl">🔧</span>
                  <div>
                    <h3 className="font-semibold group-hover:text-blue-600">Plaster & Repairs</h3>
                    <p className="text-sm text-gray-600">Prepare commercial spaces for decoration</p>
                  </div>
                  <ArrowRight className="ml-auto text-gray-400 group-hover:text-blue-600" />
                </Link>
              </div>
            </div>

            {/* Service areas */}
            <div className="bg-white rounded-lg p-8 md:p-12 mb-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Commercial Painting Serving {siteConfig.business.serviceArea}</h2>
              <p className="text-gray-700 mb-6">
                We provide commercial painting services throughout North London, including:
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
              title="Ready to Refresh Your Commercial Space?"
              subtitle="Get a free, detailed quote for your commercial painting project"
            />
          </div>
        </div>
      </article>
    </>
  );
}
