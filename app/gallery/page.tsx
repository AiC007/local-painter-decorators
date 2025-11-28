import Link from 'next/link';
import { Metadata } from 'next';
import CTABanner from '@/components/ui/CTABanner';
import { siteConfig } from '@/lib/config';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { GalleryItem, GalleryCategory } from '@/types/gallery';

const galleryItems: GalleryItem[] = [
  { id: 1, category: 'interior', title: 'Enfield Townhouse Lounge', image: '/gallery/interior-modern-lounge.jpg', description: 'Calming neutral palette with crisp white woodwork and a durable scrubbable finish.' },
  { id: 2, category: 'interior', title: 'Highgate Master Bedroom', image: '/gallery/interior-bedroom-feature.jpg', description: 'Deep navy feature wall with colour-matched satin woodwork for added drama.' },
  { id: 3, category: 'interior', title: 'Muswell Hill Kitchen Refresh', image: '/gallery/interior-kitchen-green.jpg', description: 'Hand-painted shaker cabinets using moisture-resistant trade enamel.' },
  { id: 4, category: 'interior', title: 'Camden Creative Studio', image: '/gallery/interior-office.jpg', description: 'Gallery-white walls and accent ceiling for a light-filled creative workspace.' },
  { id: 5, category: 'interior', title: 'Wood Green Staircase', image: '/gallery/interior-staircase.jpg', description: 'Two-tone hallway with durable eggshell finish for busy family traffic.' },
  { id: 6, category: 'exterior', title: 'Crouch End Facade', image: '/gallery/exterior-townhouse.jpg', description: 'Full render repair and breathable masonry coating on a Victorian terrace.' },
  { id: 7, category: 'exterior', title: 'Islington Front Door', image: '/gallery/exterior-front-door.jpg', description: 'Gloss finish heritage blue door with restored brass hardware.' },
  { id: 8, category: 'exterior', title: 'Garden Room in Finchley', image: '/gallery/exterior-garden-room.jpg', description: 'Satin black exterior protecting timber cladding and aluminium windows.' },
  { id: 9, category: 'wallpapering', title: 'Golders Green Botanical Wall', image: '/gallery/wallpaper-botanical.jpg', description: 'Large-scale botanical print with seamless pattern matching.' },
  { id: 10, category: 'wallpapering', title: 'Camden Geometric Feature', image: '/gallery/wallpaper-geometric.jpg', description: 'Bold geometric wallpaper aligned perfectly around bespoke shelving.' },
  { id: 11, category: 'commercial', title: 'Camden Town Retail Unit', image: '/gallery/commercial-retail.jpg', description: 'Brand-led colour blocking completed overnight to avoid trading downtime.' },
  { id: 12, category: 'commercial', title: 'Highgate Office Suite', image: '/gallery/commercial-office.jpg', description: 'Fresh, bright office repaint with durable finishes for high-traffic corridors.' },
];

const categories: GalleryCategory[] = [
  { id: 'all', name: 'All Projects', count: galleryItems.length },
  { id: 'interior', name: 'Interior Painting', count: galleryItems.filter((i) => i.category === 'interior').length },
  { id: 'exterior', name: 'Exterior Painting', count: galleryItems.filter((i) => i.category === 'exterior').length },
  { id: 'wallpapering', name: 'Wallpapering', count: galleryItems.filter((i) => i.category === 'wallpapering').length },
  { id: 'commercial', name: 'Commercial Projects', count: galleryItems.filter((i) => i.category === 'commercial').length },
];

export const metadata: Metadata = {
  title: 'Project Gallery | North London Painters & Decorators',
  description:
    'Browse recent painting and decorating projects across Enfield, Finchley, Highgate, Islington, Crouch End, Wood Green, Camden Town, Muswell Hill and Golders Green.',
  alternates: {
    canonical: '/gallery',
  },
};

export default function GalleryPage() {
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

        <header className="mb-12 max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Work Gallery
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Explore recent painting and decorating projects across North London. From sash-window
            townhouses to contemporary commercial spaces, every finish is prepared and delivered by
            our in-house team.
          </p>
        </header>

        <GalleryGrid items={galleryItems} categories={categories} />

        <section className="bg-blue-50 border border-blue-100 rounded-lg p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll See in Our Gallery</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Before & After Inspiration</h3>
              <p className="text-gray-700 leading-relaxed">
                See the difference between tired interiors and freshly painted rooms with crisp
                lines, smooth finishes and thoughtful colour choices.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Range of Property Types</h3>
              <p className="text-gray-700 leading-relaxed">
                We feature Victorian terraces, Edwardian semis, garden suburb homes, modern flats and
                commercial refurbishments so you can picture what’s possible in your space.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Craftsmanship Details</h3>
              <p className="text-gray-700 leading-relaxed">
                Close-up images highlight the prep work you don’t always see—filled woodwork,
                wallpaper joints and perfectly sharp cutting-in.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Real North London Projects</h3>
              <p className="text-gray-700 leading-relaxed">
                Every shot represents a real customer project across Enfield, Finchley, Highgate,
                Islington, Crouch End, Wood Green, Camden Town, Muswell Hill or Golders Green.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 border border-blue-100 rounded-lg p-6 md:p-8 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-3">💡 Managing Your Own Images</h2>
          <p className="text-gray-700 leading-relaxed">
            These showcase photos live inside <code className="text-sm bg-gray-100 px-2 py-1 rounded">/public/gallery</code>. Replace them
            with your own compressed JPGs (ideally 1600px wide) and update the <code className="text-sm bg-gray-100 px-2 py-1 rounded">galleryItems</code>
            array in <code className="text-sm bg-gray-100 px-2 py-1 rounded">app/gallery/page.tsx</code> to keep titles and descriptions accurate.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Featured in Our Gallery</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link
              href="/services/interior-painting"
              className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Interior Painting</h3>
              <p className="text-sm text-gray-600">Walls, ceilings, feature walls and trim.</p>
            </Link>
            <Link
              href="/services/exterior-painting"
              className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Exterior Painting</h3>
              <p className="text-sm text-gray-600">Facades, render, sash windows and doors.</p>
            </Link>
            <Link
              href="/services/wallpapering"
              className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Wallpapering</h3>
              <p className="text-sm text-gray-600">Specialist papers, mural installs and pattern matching.</p>
            </Link>
            <Link
              href="/services/woodwork-and-trim"
              className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Woodwork & Trim</h3>
              <p className="text-sm text-gray-600">Doors, skirting, banisters and cabinetry.</p>
            </Link>
            <Link
              href="/services/plaster-and-repairs"
              className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Plaster & Repairs</h3>
              <p className="text-sm text-gray-600">Crack repairs, skim coats and surface prep.</p>
            </Link>
            <Link
              href="/services/commercial-painting"
              className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Commercial Decorating</h3>
              <p className="text-sm text-gray-600">Shops, offices, hospitality and clinics.</p>
            </Link>
          </div>
        </section>

        <CTABanner
          title="Want Results Like These?"
          subtitle="Get a free quote for your painting and decorating project"
        />
      </div>
    </>
  );
}
