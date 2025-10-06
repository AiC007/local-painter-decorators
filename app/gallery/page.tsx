'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ImageIcon, Filter } from 'lucide-react';
import CTABanner from '@/components/ui/CTABanner';
import { siteConfig } from '@/lib/config';

// Gallery images with Unsplash placeholders for painting & decorating
const galleryItems = [
  // Interior Painting
  { id: 1, category: 'interior', title: 'Modern Living Room Refresh', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80', description: 'Contemporary grey and white living room in Islington' },
  { id: 2, category: 'interior', title: 'Bedroom Feature Wall', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80', description: 'Deep blue accent wall with crisp white trim' },
  { id: 3, category: 'interior', title: 'Kitchen Cabinet Painting', image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80', description: 'Transformed kitchen with fresh sage green cabinets' },
  { id: 4, category: 'interior', title: 'Period Property Restoration', image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80', description: 'Victorian hallway with restored cornicing in Highgate' },
  { id: 5, category: 'interior', title: 'Nursery Transformation', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80', description: 'Soft pastels and murals in Wood Green' },
  { id: 6, category: 'interior', title: 'Home Office Makeover', image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&q=80', description: 'Productive space with calming neutral tones' },

  // Exterior Painting
  { id: 7, category: 'exterior', title: 'Victorian Facade Refresh', image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&q=80', description: 'Complete exterior repaint in Muswell Hill' },
  { id: 8, category: 'exterior', title: 'Front Door Restoration', image: 'https://images.unsplash.com/photo-1585128719878-e59c7b8b5e97?w=800&q=80', description: 'Period door restored to original glory' },
  { id: 9, category: 'exterior', title: 'Render & Paint', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80', description: 'Modern exterior with fresh white render' },
  { id: 10, category: 'exterior', title: 'Garden Room Exterior', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80', description: 'Garden office painted in contemporary charcoal' },

  // Wallpapering
  { id: 11, category: 'wallpapering', title: 'Feature Wall Botanical Print', image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80', description: 'Statement wallpaper with perfect pattern matching' },
  { id: 12, category: 'wallpapering', title: 'Dining Room Elegance', image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80', description: 'Luxury textured wallpaper in Crouch End' },
  { id: 13, category: 'wallpapering', title: 'Modern Geometric Design', image: 'https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?w=800&q=80', description: 'Contemporary wallpaper installation' },
  { id: 14, category: 'wallpapering', title: 'Period Property Wallpaper', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80', description: 'Traditional print in Victorian property' },

  // Commercial
  { id: 15, category: 'commercial', title: 'Office Space Transformation', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80', description: 'Corporate office painted in brand colors' },
  { id: 16, category: 'commercial', title: 'Retail Shop Refresh', image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80', description: 'Boutique shop with fresh modern finish' },
  { id: 17, category: 'commercial', title: 'Restaurant Interior', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80', description: 'Dining space with feature walls in Finchley' },
  { id: 18, category: 'commercial', title: 'Reception Area', image: 'https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=800&q=80', description: 'Professional entrance with premium finish' },
];

const categories = [
  { id: 'all', name: 'All Projects', count: galleryItems.length },
  { id: 'interior', name: 'Interior Painting', count: galleryItems.filter(i => i.category === 'interior').length },
  { id: 'exterior', name: 'Exterior Painting', count: galleryItems.filter(i => i.category === 'exterior').length },
  { id: 'wallpapering', name: 'Wallpapering', count: galleryItems.filter(i => i.category === 'wallpapering').length },
  { id: 'commercial', name: 'Commercial Projects', count: galleryItems.filter(i => i.category === 'commercial').length },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter images based on active category
  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

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

      {/* Gallery Grid */}
      <section className="mb-12">
        <div className="mb-4 text-gray-600">
          Showing <strong className="text-gray-900">{filteredItems.length}</strong> {filteredItems.length === 1 ? 'project' : 'projects'}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105 card-hover"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Category badge */}
                <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {categories.find(c => c.id === item.category)?.name.replace(' Projects', '').replace(' Painting', '')}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <p className="text-white text-sm font-medium">View Project Details</p>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-12 text-center">
            <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-600">No projects found in this category.</p>
          </div>
        )}
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

      {/* Note About Images */}
      <section className="bg-blue-50 border border-blue-100 rounded-lg p-6 md:p-8 mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          💡 About These Gallery Images
        </h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Note:</strong> These are representative placeholder images from Unsplash to showcase the gallery layout and functionality.
          To use your own project photos, simply update the <code className="text-sm bg-gray-100 px-2 py-1 rounded">galleryItems</code> array
          in <code className="text-sm bg-gray-100 px-2 py-1 rounded">app/gallery/page.tsx</code> with paths to your images stored in the
          <code className="text-sm bg-gray-100 px-2 py-1 rounded">/public</code> folder (e.g., <code className="text-sm bg-gray-100 px-2 py-1 rounded">/gallery/project-1.jpg</code>).
        </p>
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
