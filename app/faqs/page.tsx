import { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTABanner from '@/components/ui/CTABanner';

export const metadata: Metadata = {
  title: 'FAQs | Painting & Decorating Questions Answered',
  description: 'Common questions about our painting and decorating services in North London. Learn about pricing, process, materials, timings and more.',
  openGraph: {
    title: 'Frequently Asked Questions | Local Painter & Decorators',
    description: 'Get answers to common questions about professional painting and decorating services in North London.',
    url: `${siteConfig.url}/faqs`,
  },
};

const faqCategories = [
  {
    category: 'General Questions',
    questions: [
      {
        question: 'What areas do you cover in North London?',
        answer: 'We provide professional painting and decorating services across six North London areas: Islington (N1), Finchley (N3), Wood Green (N22), Crouch End (N8), Highgate (N6), and Muswell Hill (N10). We\'re local to these areas, which means faster response times and competitive pricing.',
      },
      {
        question: 'Are you insured and do you guarantee your work?',
        answer: 'Yes, we carry comprehensive public liability insurance up to £5 million and provide workmanship guarantees on all projects. If there\'s any issue with our work, we\'ll return to fix it at no extra cost. Your peace of mind is important to us.',
      },
      {
        question: 'Do you work on both residential and commercial properties?',
        answer: 'Absolutely. We handle everything from single rooms in flats to entire houses, as well as commercial spaces like offices, shops, and restaurants. We can work around your schedule and minimize disruption to your business or daily routine.',
      },
      {
        question: 'How experienced is your team?',
        answer: 'We have over 10 years of experience in painting and decorating across North London. Our decorators are fully qualified, time-served professionals who take pride in their craft. We\'ve completed hundreds of projects and maintain a 4.9-star average rating.',
      },
    ],
  },
  {
    category: 'Pricing & Quotes',
    questions: [
      {
        question: 'How much does painting and decorating cost?',
        answer: 'Costs vary depending on the size of the project, condition of surfaces, materials used, and specific requirements. As a rough guide, a standard room might cost £300-600, while larger projects are priced per square metre or day rate. We provide detailed written quotes with no hidden costs.',
      },
      {
        question: 'Do you offer free quotes?',
        answer: 'Yes, all our quotes are completely free with no obligation. We\'ll visit your property at a time that suits you, assess the work required, discuss your preferences, and provide a detailed written quote. There\'s no pressure and no hidden costs.',
      },
      {
        question: 'What\'s included in your quotes?',
        answer: 'Our quotes include all labour, materials (paint, primers, fillers, dust sheets, etc.), surface preparation, and cleanup. We break down costs clearly so you know exactly what you\'re paying for. Any additional work needed is discussed and agreed before we proceed.',
      },
      {
        question: 'Do you require a deposit?',
        answer: 'For larger projects, we typically request a small deposit (usually 25-30%) to secure your dates and purchase materials. The remaining balance is due upon completion when you\'re completely satisfied with the work. We never ask for full payment upfront.',
      },
    ],
  },
  {
    category: 'Process & Preparation',
    questions: [
      {
        question: 'How long will my project take?',
        answer: 'A standard room typically takes 1-2 days, while larger projects like whole houses can take 5-10 days depending on the scope. We provide realistic timescales in our quotes and always aim to finish on or ahead of schedule. We\'ll keep you informed throughout the project.',
      },
      {
        question: 'Do I need to move all my furniture?',
        answer: 'You don\'t need to move everything. We\'re happy to help move furniture to the centre of the room and cover it with dust sheets. For smaller items, ornaments, and valuables, we recommend moving them beforehand. We\'ll discuss the specifics during our site visit.',
      },
      {
        question: 'How do you prepare surfaces before painting?',
        answer: 'Proper preparation is key to a lasting finish. We fill cracks and holes, sand surfaces smooth, remove loose paint, clean walls to remove dust and grease, and apply appropriate primers. We never skip prep work—it\'s what separates a good job from a great one.',
      },
      {
        question: 'Will you protect my floors and furniture?',
        answer: 'Absolutely. We use heavy-duty dust sheets to protect floors, furniture, and fixtures. We\'re meticulous about keeping work areas clean and tidy, and we clean up thoroughly at the end of each day and when the job is complete.',
      },
    ],
  },
  {
    category: 'Materials & Paint',
    questions: [
      {
        question: 'What brands of paint do you use?',
        answer: 'We use premium trade brands like Dulux Trade, Crown Trade, and Farrow & Ball, depending on your budget and requirements. Trade paints offer better coverage, durability, and finish than retail versions. We\'re happy to discuss specific brands and finishes during your quote.',
      },
      {
        question: 'Can I choose any colour I want?',
        answer: 'Yes! We can match any colour you like. Bring us a paint swatch, colour code, or even a fabric sample, and we can match it. We also offer colour consultation if you\'re unsure, helping you choose shades that work with your lighting and furnishings.',
      },
      {
        question: 'Do you use eco-friendly or low-VOC paints?',
        answer: 'Yes, we can use low-VOC (Volatile Organic Compounds) and eco-friendly paints on request. These are ideal for nurseries, bedrooms, or homes with allergies. They have minimal odour and are better for indoor air quality, though they may cost slightly more than standard paints.',
      },
      {
        question: 'What finish should I choose - matt, silk, or gloss?',
        answer: 'It depends on the room and surface. Matt emulsion is popular for ceilings and walls as it hides imperfections. Silk/satin is durable and wipeable, ideal for kitchens and hallways. Gloss or eggshell suits woodwork and high-traffic areas. We\'ll advise based on your specific needs.',
      },
    ],
  },
  {
    category: 'Timing & Scheduling',
    questions: [
      {
        question: 'How quickly can you start?',
        answer: 'We can often start within 1-2 weeks, depending on our current schedule and the size of your project. For urgent work, we\'ll do our best to accommodate you sooner. Being local to North London means we can be flexible with scheduling and site visits.',
      },
      {
        question: 'Do you work weekends or evenings?',
        answer: 'We can arrange weekend or evening work for commercial clients or if it better suits your schedule. There may be a small premium for out-of-hours work, but we\'re happy to discuss options that minimize disruption to your routine.',
      },
      {
        question: 'What happens if it rains during exterior painting?',
        answer: 'We monitor weather forecasts closely for exterior work. If rain is forecast, we\'ll reschedule that portion of work. Exterior paint needs dry conditions to cure properly, so we never compromise quality by working in unsuitable weather. We build flexibility into our schedule.',
      },
    ],
  },
];

export default function FAQsPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteConfig.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'FAQs',
        item: `${siteConfig.url}/faqs`,
      },
    ],
  };

  // Generate FAQ schema for each question
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqCategories.flatMap((category) =>
      category.questions.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      }))
    ),
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-gray-600">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">FAQs</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="mb-12 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="w-10 h-10 text-blue-600" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Frequently Asked Questions
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Get answers to common questions about our painting and decorating services in
            North London. Can't find what you're looking for? Give us a call or send us a message.
          </p>
        </header>

        {/* Quick Links */}
        <section className="mb-12 bg-blue-50 border border-blue-100 rounded-lg p-6">
          <h2 className="font-semibold text-lg text-gray-900 mb-3">Jump to:</h2>
          <div className="flex flex-wrap gap-3">
            {faqCategories.map((category, index) => (
              <a
                key={index}
                href={`#${category.category.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 hover:border-blue-600 transition-colors"
              >
                {category.category}
              </a>
            ))}
          </div>
        </section>

        {/* FAQ Categories */}
        {faqCategories.map((category, categoryIndex) => (
          <section
            key={categoryIndex}
            id={category.category.toLowerCase().replace(/\s+/g, '-')}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {category.category}
            </h2>
            <FAQAccordion faqs={category.questions} />
          </section>
        ))}

        {/* Still Have Questions */}
        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Still Have Questions?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you can't find the answer you're looking for, we're here to help. Give us a call,
            send an email, or request a free quote and we'll discuss your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${siteConfig.business.phone}`}
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              Call {siteConfig.business.phoneFormatted}
            </a>
            <a
              href={`mailto:${siteConfig.business.email}`}
              className="inline-flex items-center justify-center px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
            >
              Email Us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
            >
              Contact Form
            </Link>
          </div>
        </section>

        {/* Helpful Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Helpful Links
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link
              href="/services"
              className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all group"
            >
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                Our Services
              </h3>
              <p className="text-sm text-gray-600">
                Learn about all our painting and decorating services
              </p>
            </Link>

            <Link
              href="/areas-we-cover"
              className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all group"
            >
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                Areas We Cover
              </h3>
              <p className="text-sm text-gray-600">
                Check if we cover your North London area
              </p>
            </Link>

            <Link
              href="/testimonials"
              className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all group"
            >
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                Customer Reviews
              </h3>
              <p className="text-sm text-gray-600">
                Read what our customers say about us
              </p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          title="Ready to Get Started?"
          subtitle="Request your free, no-obligation quote today"
        />
      </div>
    </>
  );
}
