import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/config";
import { generateOrganizationSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.business.name} | Professional Painters & Decorators in ${siteConfig.business.serviceArea}`,
    template: `%s | ${siteConfig.business.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "painters and decorators north london",
    "painter north london",
    "decorator north london",
    "local painter and decorator",
    "house painters north london",
    "painters near me",
    "commercial decorators north london",
    "interior painter north london",
    "exterior painter north london",
  ],
  authors: [{ name: siteConfig.business.name }],
  creator: siteConfig.business.name,
  publisher: siteConfig.business.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    siteName: siteConfig.business.name,
    title: `${siteConfig.business.name} | Professional Painters & Decorators in ${siteConfig.business.serviceArea}`,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.business.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.business.name} | Professional Painters & Decorators`,
    description: siteConfig.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased font-sans bg-gray-50`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />

        {/* ElevenLabs Conversational AI Widget */}
        <div dangerouslySetInnerHTML={{
          __html: '<elevenlabs-convai agent-id="agent_7801k6zbc7e6e9jahw7drdh87bzf"></elevenlabs-convai>'
        }} />

        <Script
          src="https://unpkg.com/@elevenlabs/convai-widget-embed"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
