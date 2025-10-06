'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import CTAButton from '@/components/ui/CTAButton';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
      <div className="container mx-auto px-4">
        {/* Top bar with tagline */}
        <div className="hidden md:block py-2 text-sm text-gray-600 text-center border-b border-gray-100 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
          <span className="font-medium">Professional Painters & Decorators Serving {siteConfig.business.serviceArea}</span> • {siteConfig.values.join(' • ')}
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex flex-col group">
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
              {siteConfig.business.name}
            </span>
            <span className="text-xs md:text-sm text-gray-600">{siteConfig.business.tagline}</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>

            {/* Services dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                <Link href="/services" className="block px-4 py-3 hover:bg-gray-50 font-medium border-b border-gray-100">
                  All Services
                </Link>
                <Link href="/services/interior-painting" className="block px-4 py-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 text-sm hover:text-blue-600 transition-all">
                  Interior Painting
                </Link>
                <Link href="/services/exterior-painting" className="block px-4 py-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 text-sm hover:text-blue-600 transition-all">
                  Exterior Painting
                </Link>
                <Link href="/services/wallpapering" className="block px-4 py-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 text-sm hover:text-blue-600 transition-all">
                  Wallpapering
                </Link>
                <Link href="/services/plaster-and-repairs" className="block px-4 py-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 text-sm hover:text-blue-600 transition-all">
                  Plaster & Repairs
                </Link>
                <Link href="/services/woodwork-and-trim" className="block px-4 py-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 text-sm hover:text-blue-600 transition-all">
                  Woodwork & Trim
                </Link>
                <Link href="/services/commercial-painting" className="block px-4 py-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 text-sm hover:text-blue-600 transition-all">
                  Commercial Painting
                </Link>
              </div>
            </div>

            {/* Areas dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Areas
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                <Link href="/areas-we-cover" className="block px-4 py-3 hover:bg-gray-50 font-medium border-b border-gray-100">
                  All Areas
                </Link>
                <Link href="/areas-we-cover/islington" className="block px-4 py-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 text-sm hover:text-blue-600 transition-all">
                  Islington
                </Link>
                <Link href="/areas-we-cover/finchley" className="block px-4 py-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 text-sm hover:text-blue-600 transition-all">
                  Finchley
                </Link>
                <Link href="/areas-we-cover/wood-green" className="block px-4 py-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 text-sm hover:text-blue-600 transition-all">
                  Wood Green
                </Link>
                <Link href="/areas-we-cover/crouch-end" className="block px-4 py-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 text-sm hover:text-blue-600 transition-all">
                  Crouch End
                </Link>
                <Link href="/areas-we-cover/highgate" className="block px-4 py-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 text-sm hover:text-blue-600 transition-all">
                  Highgate
                </Link>
                <Link href="/areas-we-cover/muswell-hill" className="block px-4 py-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 text-sm hover:text-blue-600 transition-all">
                  Muswell Hill
                </Link>
              </div>
            </div>

            <Link href="/gallery" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Gallery
            </Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Reviews
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <CTAButton variant="call" size="sm" />
            <CTAButton variant="quote" size="sm" />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-3">
              <Link href="/" className="py-2 text-gray-700 hover:text-blue-600 font-medium">
                Home
              </Link>

              {/* Services accordion */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="pl-4 mt-2 flex flex-col gap-2">
                    <Link href="/services" className="py-1 text-sm text-gray-600 hover:text-blue-600">
                      All Services
                    </Link>
                    <Link href="/services/interior-painting" className="py-1 text-sm text-gray-600 hover:text-blue-600">
                      Interior Painting
                    </Link>
                    <Link href="/services/exterior-painting" className="py-1 text-sm text-gray-600 hover:text-blue-600">
                      Exterior Painting
                    </Link>
                    <Link href="/services/wallpapering" className="py-1 text-sm text-gray-600 hover:text-blue-600">
                      Wallpapering
                    </Link>
                    <Link href="/services/plaster-and-repairs" className="py-1 text-sm text-gray-600 hover:text-blue-600">
                      Plaster & Repairs
                    </Link>
                    <Link href="/services/woodwork-and-trim" className="py-1 text-sm text-gray-600 hover:text-blue-600">
                      Woodwork & Trim
                    </Link>
                    <Link href="/services/commercial-painting" className="py-1 text-sm text-gray-600 hover:text-blue-600">
                      Commercial Painting
                    </Link>
                  </div>
                )}
              </div>

              {/* Areas accordion */}
              <div>
                <button
                  onClick={() => setAreasOpen(!areasOpen)}
                  className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  Areas
                  <ChevronDown className={`w-4 h-4 transition-transform ${areasOpen ? 'rotate-180' : ''}`} />
                </button>
                {areasOpen && (
                  <div className="pl-4 mt-2 flex flex-col gap-2">
                    <Link href="/areas-we-cover" className="py-1 text-sm text-gray-600 hover:text-blue-600">
                      All Areas
                    </Link>
                    <Link href="/areas-we-cover/islington" className="py-1 text-sm text-gray-600 hover:text-blue-600">
                      Islington
                    </Link>
                    <Link href="/areas-we-cover/finchley" className="py-1 text-sm text-gray-600 hover:text-blue-600">
                      Finchley
                    </Link>
                    <Link href="/areas-we-cover/wood-green" className="py-1 text-sm text-gray-600 hover:text-blue-600">
                      Wood Green
                    </Link>
                    <Link href="/areas-we-cover/crouch-end" className="py-1 text-sm text-gray-600 hover:text-blue-600">
                      Crouch End
                    </Link>
                    <Link href="/areas-we-cover/highgate" className="py-1 text-sm text-gray-600 hover:text-blue-600">
                      Highgate
                    </Link>
                    <Link href="/areas-we-cover/muswell-hill" className="py-1 text-sm text-gray-600 hover:text-blue-600">
                      Muswell Hill
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/gallery" className="py-2 text-gray-700 hover:text-blue-600 font-medium">
                Gallery
              </Link>
              <Link href="/testimonials" className="py-2 text-gray-700 hover:text-blue-600 font-medium">
                Reviews
              </Link>
              <Link href="/about" className="py-2 text-gray-700 hover:text-blue-600 font-medium">
                About
              </Link>
              <Link href="/contact" className="py-2 text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </Link>

              <div className="pt-3 border-t border-gray-200 flex flex-col gap-3">
                <CTAButton variant="call" fullWidth />
                <CTAButton variant="quote" fullWidth />
              </div>
            </div>
          </nav>
        )}
      </div>

      {/* Sticky mobile call button */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-r from-white via-blue-50 to-white border-t border-gray-200 shadow-2xl z-40 backdrop-blur-sm">
        <CTAButton variant="call" fullWidth size="lg" className="btn-glow shadow-xl" />
      </div>
    </header>
  );
}
