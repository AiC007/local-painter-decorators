'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Filter, ImageIcon } from 'lucide-react';
import { GalleryItem, GalleryCategory } from '@/types/gallery';

interface GalleryGridProps {
  items: GalleryItem[];
  categories: GalleryCategory[];
}

export default function GalleryGrid({ items, categories }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems =
    activeCategory === 'all' ? items : items.filter((item) => item.category === activeCategory);

  return (
    <>
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
              aria-pressed={activeCategory === category.id}
            >
              {category.name}
              {typeof category.count === 'number' && (
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              )}
            </button>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <div className="mb-4 text-gray-600">
          Showing{' '}
          <strong className="text-gray-900">
            {filteredItems.length} {filteredItems.length === 1 ? 'project' : 'projects'}
          </strong>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105 card-hover"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full capitalize">
                  {item.category.replace('-', ' ')}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>

              {item.link && (
                <Link
                  href={item.link}
                  className="absolute inset-0 focus-visible:outline-none"
                  aria-label={`View details for ${item.title}`}
                />
              )}

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
    </>
  );
}
