import { siteConfig } from '@/lib/config';
import { Phone, Mail } from 'lucide-react';

export default function NAP({ variant = 'default' }: { variant?: 'default' | 'compact' | 'footer' }) {
  const { business } = siteConfig;

  if (variant === 'compact') {
    return (
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
        <a
          href={`tel:${business.phone}`}
          className="flex items-center gap-2 text-sm hover:text-blue-600 transition-colors"
        >
          <Phone className="w-4 h-4" />
          <span>{business.phoneFormatted}</span>
        </a>
        <a
          href={`mailto:${business.email}`}
          className="flex items-center gap-2 text-sm hover:text-blue-600 transition-colors"
        >
          <Mail className="w-4 h-4" />
          <span className="hidden sm:inline">{business.email}</span>
          <span className="sm:hidden">Email us</span>
        </a>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className="space-y-3">
        <h3 className="font-semibold text-lg">{business.name}</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <p>{business.serviceArea}</p>
          <a
            href={`tel:${business.phone}`}
            className="block hover:text-blue-600 transition-colors"
          >
            <strong>Tel:</strong> {business.phoneFormatted}
          </a>
          <a
            href={`mailto:${business.email}`}
            className="block hover:text-blue-600 transition-colors break-all"
          >
            <strong>Email:</strong> {business.email}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h3 className="font-semibold text-xl mb-4">{business.name}</h3>
      <div className="space-y-3">
        <div>
          <p className="text-sm text-gray-600">Serving</p>
          <p className="font-medium">{business.serviceArea}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Phone</p>
          <a
            href={`tel:${business.phone}`}
            className="font-medium text-blue-600 hover:text-blue-700 transition-colors text-lg"
          >
            {business.phoneFormatted}
          </a>
        </div>
        <div>
          <p className="text-sm text-gray-600">Email</p>
          <a
            href={`mailto:${business.email}`}
            className="font-medium text-blue-600 hover:text-blue-700 transition-colors break-all"
          >
            {business.email}
          </a>
        </div>
      </div>
    </div>
  );
}
