'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Upload } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import NAP from '@/components/layout/NAP';

const propertyTypes = [
  'Flat/Apartment',
  'Terraced House',
  'Semi-Detached House',
  'Detached House',
  'Commercial Property',
  'Other',
];

const openingHours = [
  { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
  { day: 'Sunday', hours: 'Closed (Emergency calls only)' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    postcode: '',
    propertyType: '',
    rooms: '',
    preferredDate: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          postcode: '',
          propertyType: '',
          rooms: '',
          preferredDate: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
        name: 'Contact',
        item: `${siteConfig.url}/contact`,
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
            <li className="text-gray-900 font-medium">Contact</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="mb-12 max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get Your Free Quote Today
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Ready to transform your space? Fill out the form below or give us a call. We'll
            get back to you within 24 hours with a free, no-obligation quote.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Request a Free Quote
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="07400 123456"
                    />
                  </div>
                </div>

                {/* Email and Postcode */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="postcode"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Postcode <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="postcode"
                      name="postcode"
                      required
                      value={formData.postcode}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="N1 2AB"
                    />
                  </div>
                </div>

                {/* Property Type */}
                <div>
                  <label
                    htmlFor="propertyType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Property Type <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    required
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select property type...</option>
                    {propertyTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Rooms/Areas */}
                <div>
                  <label
                    htmlFor="rooms"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Rooms/Areas to be Decorated
                  </label>
                  <input
                    type="text"
                    id="rooms"
                    name="rooms"
                    value={formData.rooms}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="e.g., Living room, 2 bedrooms, hallway"
                  />
                </div>

                {/* Preferred Date */}
                <div>
                  <label
                    htmlFor="preferredDate"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Preferred Start Date (if known)
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell us about your project... What surfaces need painting? Any specific colours or finishes? Any repairs needed?"
                  />
                </div>

                {/* File Upload Placeholder */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Photos (Coming Soon)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                    <p className="text-sm text-gray-600 mb-1">
                      Photo upload feature coming soon
                    </p>
                    <p className="text-xs text-gray-500">
                      For now, please email photos to {siteConfig.business.email}
                    </p>
                  </div>
                </div>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 font-medium">
                      ✓ Thank you! Your quote request has been submitted successfully.
                    </p>
                    <p className="text-green-700 text-sm mt-1">
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-800 font-medium">
                      ✗ Something went wrong. Please try again or call us directly.
                    </p>
                    <p className="text-red-700 text-sm mt-1">
                      Phone: {siteConfig.business.phoneFormatted}
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors focus:ring-4 focus:ring-blue-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Request Free Quote'}
                  </button>
                  <p className="text-sm text-gray-600 mt-3">
                    We'll get back to you within 24 hours
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-6">
            {/* NAP Block */}
            <NAP variant="default" />

            {/* Opening Hours */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-lg text-gray-900">Opening Hours</h3>
              </div>
              <div className="space-y-3">
                {openingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <span className="text-sm font-medium text-gray-700">
                      {schedule.day}
                    </span>
                    <span className="text-sm text-gray-600 text-right">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Prefer to Talk?
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                Give us a call for immediate assistance or to discuss your project in detail.
              </p>
              <a
                href={`tel:${siteConfig.business.phone}`}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {siteConfig.business.phoneFormatted}
              </a>
            </div>

            {/* Service Areas */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-lg text-gray-900">We Cover</h3>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-700">North London including:</p>
                <div className="flex flex-wrap gap-2">
                  {['N1', 'N3', 'N6', 'N8', 'N10', 'N22'].map((postcode) => (
                    <span
                      key={postcode}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
                    >
                      {postcode}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Service Area</h2>
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 rounded-lg p-12 md:p-16 text-center">
            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Map Integration Coming Soon
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
              An interactive map showing our North London service area will be added here.
              We cover all six postcodes: Islington N1, Finchley N3, Wood Green N22,
              Crouch End N8, Highgate N6, and Muswell Hill N10.
            </p>
          </div>
        </section>

        {/* Alternative Contact Methods */}
        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Other Ways to Reach Us
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                <a
                  href={`tel:${siteConfig.business.phone}`}
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {siteConfig.business.phoneFormatted}
                </a>
                <p className="text-sm text-gray-600 mt-1">
                  Mon-Fri 8am-6pm, Sat 9am-4pm
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <a
                  href={`mailto:${siteConfig.business.email}`}
                  className="text-blue-600 hover:text-blue-700 transition-colors break-all text-sm"
                >
                  {siteConfig.business.email}
                </a>
                <p className="text-sm text-gray-600 mt-1">
                  We respond within 24 hours
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Service Area</h3>
                <p className="text-gray-700">{siteConfig.business.serviceArea}</p>
                <Link
                  href="/areas-we-cover"
                  className="text-sm text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center gap-1 mt-1"
                >
                  See all areas <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
