import Link from 'next/link';
import { siteConfig, services, locations } from '@/lib/config';
import CTAButton from '@/components/ui/CTAButton';
import CTABanner from '@/components/ui/CTABanner';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { CheckCircle, Shield, Clock, Award, Star, ArrowRight, MapPin } from 'lucide-react';
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
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-16 md:py-24 overflow-hidden">
        {/* Animated decorative blobs */}
        <div className="shape-blob absolute top-10 left-10 w-72 h-72 bg-purple-500" style={{ animationDelay: '0s' }}></div>
        <div className="shape-blob absolute bottom-10 right-10 w-96 h-96 bg-blue-400" style={{ animationDelay: '7s' }}></div>
        <div className="shape-blob absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500" style={{ animationDelay: '3s' }}></div>

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Professional Painters & Decorators in {siteConfig.business.serviceArea}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed drop-shadow-md">
              Transform your home or business with expert painting and decorating services.
              Tidy, reliable, and built to last.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <CTAButton variant="call" size="lg" className="btn-glow !bg-white !text-blue-600 hover:!bg-gray-100" />
              <CTAButton variant="quote" size="lg" className="btn-glow" />
              {siteConfig.whatsapp.enabled && <CTAButton variant="whatsapp" size="lg" className="btn-glow" />}
            </div>

            {/* Hero image */}
            <div className="mb-12 max-w-2xl mx-auto">
              <div className="relative h-[400px] rounded-2xl border-2 border-white/20 shadow-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&q=80"
                  alt="Professional painter on step ladder painting a living room wall"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              </div>
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
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
            {/* Connecting lines between steps */}
            <div className="hidden md:block absolute top-8 left-1/3 right-1/3 h-0.5 border-t-2 border-dashed border-gray-300 z-0"></div>
            <div className="hidden md:block absolute top-8 left-2/3 right-0 h-0.5 border-t-2 border-dashed border-gray-300 z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Survey</h3>
                <p className="text-gray-600">
                  We visit your property, discuss your requirements, and provide a clear, detailed quote with no hidden costs.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative z-10">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Prep</h3>
                <p className="text-gray-600">
                  Professional preparation is key. We protect your furniture, fill cracks, sand surfaces, and prime properly.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative z-10">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Paint & Perfect</h3>
                <p className="text-gray-600">
                  We apply quality materials with expert technique, inspect every detail, and leave your space immaculate.
                </p>
              </div>
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
            {services.map((service, index) => {
              const borderColors = [
                'border-t-blue-500',
                'border-t-purple-500',
                'border-t-pink-500',
                'border-t-indigo-500',
                'border-t-cyan-500',
                'border-t-violet-500',
              ];
              const gradientHovers = [
                'hover:bg-gradient-to-br hover:from-blue-50 hover:to-transparent',
                'hover:bg-gradient-to-br hover:from-purple-50 hover:to-transparent',
                'hover:bg-gradient-to-br hover:from-pink-50 hover:to-transparent',
                'hover:bg-gradient-to-br hover:from-indigo-50 hover:to-transparent',
                'hover:bg-gradient-to-br hover:from-cyan-50 hover:to-transparent',
                'hover:bg-gradient-to-br hover:from-violet-50 hover:to-transparent',
              ];

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={`bg-white border border-gray-200 border-t-4 ${borderColors[index % borderColors.length]} rounded-lg p-6 card-hover group ${gradientHovers[index % gradientHovers.length]} transition-all duration-300`}
                >
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                  <span className="text-blue-600 font-medium group-hover:underline inline-flex items-center gap-1">
                    Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%232563eb' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose {siteConfig.business.name}?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Benefit 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-md">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Tidy & Reliable</h3>
                  <p className="text-gray-600">
                    We protect your home with dustsheets, clean as we go, and always arrive on time. Your property is treated with complete respect.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Quality Materials</h3>
                  <p className="text-gray-600">
                    We use premium trade paints and materials from trusted brands. You'll get durability, brilliant colour, and long-lasting results.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Clear, Fixed Quotes</h3>
                  <p className="text-gray-600">
                    Our quotes are detailed, transparent, and fixed. No surprises, no hidden extras – just honest pricing and professional service.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center shadow-md">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Insured & Guaranteed</h3>
                  <p className="text-gray-600">
                    Fully insured for your peace of mind, and all our work comes with a guarantee. We're confident in our craftsmanship.
                  </p>
                </div>
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
