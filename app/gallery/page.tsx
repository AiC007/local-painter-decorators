'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ImageIcon, Filter } from 'lucide-react';
import CTABanner from '@/components/ui/CTABanner';
import { siteConfig } from '@/lib/config';

const categories = [
  { id: 'all', name: 'All Projects', count: 0 },
  { id: 'interior', name: 'Interior Painting', count: 0 },
  { id: 'exterior', name: 'Exterior Painting', count: 0 },
  { id: 'commercial', name: 'Commercial Projects', count: 0 },
  { id: 'wallpapering', name: 'Wallpapering', count: 0 },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');

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
        name: 'Gallery',
        item: `${siteConfig.url}/gallery`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
          <li className="text-gray-900 font-medium">Gallery</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <header className="mb-12 max-w-3xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Our Work Gallery
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Explore our portfolio of completed painting and decorating projects across
          North London. From period property restorations to modern interior makeovers,
          see the quality and attention to detail we bring to every job.
        </p>
      </header>

      {/* Category Filters */}
      <section className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Filter className="w-5 h-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-900">Filter by Category</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
              aria-label={`Filter by ${category.name}`}
              aria-pressed={activeCategory === category.id}
            >
              {category.name}
              {category.count > 0 && (
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid - Placeholder */}
      <section className="mb-12">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-12 md:p-16 text-center">
          <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Gallery Images Coming Soon
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed mb-6">
            We're currently curating high-quality before and after photos from our recent
            projects. This gallery will showcase interior painting, exterior work, wallpapering,
            and commercial projects across North London.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
            {/* Placeholder image boxes */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-white border border-gray-200 rounded-lg flex items-center justify-center"
              >
                <ImageIcon className="w-8 h-8 text-gray-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-blue-50 border border-blue-100 rounded-lg p-6 md:p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          What You'll See in Our Gallery
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900">
              Before & After Transformations
            </h3>
            <p className="text-gray-700 leading-relaxed">
              See the dramatic difference professional painting and decorating makes.
              From tired, dated interiors to fresh, modern spaces.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900">
              Variety of Projects
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Residential and commercial projects including full house painting, single
              room refreshes, exterior work, and wallpapering installations.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900">
              Detail & Craftsmanship
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Close-up shots highlighting our attention to detail—crisp lines, smooth
              finishes, and perfect pattern matching on wallpaper.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900">
              North London Properties
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Real projects from across our service areas: Victorian terraces, Edwardian
              semis, modern flats, and commercial spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Note About Adding Images */}
      <section className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Adding Your Own Project Images
        </h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>For the site owner:</strong> To add images to this gallery, you'll need to:
          </p>
          <ol className="text-gray-700 space-y-2 ml-6 list-decimal">
            <li>
              Create an <code className="text-sm bg-gray-100 px-2 py-1 rounded">/public/gallery</code> folder
              and organize images by category
            </li>
            <li>
              Create a <code className="text-sm bg-gray-100 px-2 py-1 rounded">data/gallery.json</code> file
              with image metadata (path, category, title, description)
            </li>
            <li>
              Consider using Next.js Image component for optimized loading
            </li>
            <li>
              Add a lightbox component for full-screen image viewing
            </li>
            <li>
              Ensure images are properly optimized (WebP format, appropriate sizing)
            </li>
          </ol>
          <p className="text-gray-700 leading-relaxed mt-4">
            Recommended image specifications: 1200x900px minimum, compressed to under 200KB each.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Services Featured in Our Gallery
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link
            href="/services/interior-painting"
            className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Interior Painting</h3>
            <p className="text-sm text-gray-600">
              Walls, ceilings, and feature walls in homes and businesses
            </p>
          </Link>

          <Link
            href="/services/exterior-painting"
            className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Exterior Painting</h3>
            <p className="text-sm text-gray-600">
              Facades, render, woodwork, and weather protection
            </p>
          </Link>

          <Link
            href="/services/wallpapering"
            className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Wallpapering</h3>
            <p className="text-sm text-gray-600">
              Professional hanging with precise pattern matching
            </p>
          </Link>

          <Link
            href="/services/woodwork-and-trim"
            className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Woodwork & Trim</h3>
            <p className="text-sm text-gray-600">
              Doors, skirting boards, window frames, and more
            </p>
          </Link>

          <Link
            href="/services/plaster-and-repairs"
            className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Plaster & Repairs</h3>
            <p className="text-sm text-gray-600">
              Surface preparation and repair before painting
            </p>
          </Link>

          <Link
            href="/services/commercial-painting"
            className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Commercial Projects</h3>
            <p className="text-sm text-gray-600">
              Offices, shops, and venues with minimal disruption
            </p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Want Results Like These?"
        subtitle="Get a free quote for your painting and decorating project"
      />
      </div>
    </>
  );
}
