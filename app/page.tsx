import Link from 'next/link';
import { siteConfig, services, locations } from '@/lib/config';
import CTAButton from '@/components/ui/CTAButton';
import CTABanner from '@/components/ui/CTABanner';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { CheckCircle, Shield, Clock, Award, Star } from 'lucide-react';
import testimonials from '@/data/testimonials.json';
import { generateBreadcrumbSchema } from '@/lib/schema';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Professional Painters & Decorators ${siteConfig.business.serviceArea} | ${siteConfig.business.name}`,
  description: `Expert painting and decorating services across ${siteConfig.business.serviceArea}. Interior & exterior painting, wallpapering, plaster repairs. Tidy, reliable, insured. Call ${siteConfig.business.phoneFormatted} for a free quote.`,
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  const featuredTestimonials = testimonials.slice(0, 3);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional Painters & Decorators in {siteConfig.business.serviceArea}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Transform your home or business with expert painting and decorating services.
              Tidy, reliable, and built to last.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <CTAButton variant="call" size="lg" className="!bg-white !text-blue-600 hover:!bg-gray-100" />
              <CTAButton variant="quote" size="lg" />
              {siteConfig.whatsapp.enabled && <CTAButton variant="whatsapp" size="lg" />}
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span>
                  <strong className="text-white">{siteConfig.trust.averageRating}</strong> ({siteConfig.trust.reviewsCount} reviews)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>
                  <strong className="text-white">{siteConfig.trust.yearsExperience}+</strong> years experience
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Fully <strong className="text-white">Insured</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>Work <strong className="text-white">Guaranteed</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-step process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Survey</h3>
              <p className="text-gray-600">
                We visit your property, discuss your requirements, and provide a clear, detailed quote with no hidden costs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Prep</h3>
              <p className="text-gray-600">
                Professional preparation is key. We protect your furniture, fill cracks, sand surfaces, and prime properly.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Paint & Perfect</h3>
              <p className="text-gray-600">
                We apply quality materials with expert technique, inspect every detail, and leave your space immaculate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Painting & Decorating Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From single rooms to complete property transformations, we deliver exceptional results across all types of decorating work.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                <span className="text-blue-600 font-medium group-hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose {siteConfig.business.name}?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Tidy & Reliable</h3>
                <p className="text-gray-600">
                  We protect your home with dustsheets, clean as we go, and always arrive on time. Your property is treated with complete respect.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Quality Materials</h3>
                <p className="text-gray-600">
                  We use premium trade paints and materials from trusted brands. You'll get durability, brilliant colour, and long-lasting results.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Clear, Fixed Quotes</h3>
                <p className="text-gray-600">
                  Our quotes are detailed, transparent, and fixed. No surprises, no hidden extras – just honest pricing and professional service.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Insured & Guaranteed</h3>
                <p className="text-gray-600">
                  Fully insured for your peace of mind, and all our work comes with a guarantee. We're confident in our craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">
              Real reviews from real customers across {siteConfig.business.serviceArea}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                area={testimonial.area}
                jobType={testimonial.jobType}
                rating={testimonial.rating}
                quote={testimonial.quote}
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/testimonials"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas We Cover in {siteConfig.business.serviceArea}</h2>
            <p className="text-lg text-gray-600">
              Professional painting and decorating services throughout North London
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/areas-we-cover/${location.slug}`}
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:bg-blue-50 hover:border-blue-300 transition-all group text-center"
              >
                <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
                  {location.name}
                </h3>
                <p className="text-sm text-gray-600">{location.postcode}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/areas-we-cover"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Areas
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <CTABanner />
        </div>
      </section>
    </>
  );
}
