import Link from 'next/link';
import { siteConfig, services, locations } from '@/lib/config';
import NAP from './NAP';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company info & NAP */}
          <div>
            <NAP variant="footer" />
            <div className="mt-6 space-y-2 text-sm">
              {siteConfig.values.map((value, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Areas We Cover</h3>
            <ul className="space-y-2 text-sm">
              {locations.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/areas-we-cover/${location.slug}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-blue-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-blue-400 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-blue-400 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Service area chips */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="text-sm font-semibold text-white mb-3">
            Painters & Decorators Serving:
          </h4>
          <div className="flex flex-wrap gap-2">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/areas-we-cover/${location.slug}`}
                className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-full text-xs transition-colors"
              >
                {location.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>
            © {currentYear} {siteConfig.business.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/legal/privacy" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/legal/terms" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/legal/cookies" className="hover:text-blue-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
