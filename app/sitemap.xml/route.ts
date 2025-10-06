import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://www.localpainterdecorators.co.uk';
  const currentDate = new Date().toISOString();

  // Define all service pages
  const services = [
    'interior-painting',
    'exterior-painting',
    'wallpapering',
    'commercial-decorating',
    'specialist-coatings',
    'property-maintenance',
  ];

  // Define all location pages
  const locations = [
    'london',
    'manchester',
    'birmingham',
    'leeds',
    'bristol',
    'edinburgh',
  ];

  // Define all static pages
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'weekly' }, // Homepage
    { url: '/gallery', priority: '0.8', changefreq: 'weekly' },
    { url: '/testimonials', priority: '0.8', changefreq: 'weekly' },
    { url: '/about', priority: '0.7', changefreq: 'monthly' },
    { url: '/faqs', priority: '0.7', changefreq: 'monthly' },
    { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  ];

  // Define legal pages
  const legalPages = [
    { url: '/legal/privacy', priority: '0.3', changefreq: 'yearly' },
    { url: '/legal/terms', priority: '0.3', changefreq: 'yearly' },
    { url: '/legal/cookies', priority: '0.3', changefreq: 'yearly' },
  ];

  // Build the sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

  <!-- Static Pages -->
${staticPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}

  <!-- Service Pages -->
${services
  .map(
    (service) => `  <url>
    <loc>${baseUrl}/services/${service}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`
  )
  .join('\n')}

  <!-- Location Pages -->
${locations
  .map(
    (location) => `  <url>
    <loc>${baseUrl}/locations/${location}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`
  )
  .join('\n')}

  <!-- Legal Pages -->
${legalPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}

</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
