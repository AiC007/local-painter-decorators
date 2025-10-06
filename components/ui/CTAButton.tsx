import { siteConfig } from '@/lib/config';
import { Phone, MessageSquare, FileText } from 'lucide-react';

interface CTAButtonProps {
  variant?: 'call' | 'whatsapp' | 'quote';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  fullWidth?: boolean;
}

export default function CTAButton({
  variant = 'call',
  size = 'md',
  className = '',
  fullWidth = false
}: CTAButtonProps) {
  const { business, whatsapp } = siteConfig;

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const baseClasses = `inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md ${fullWidth ? 'w-full' : ''} ${sizeClasses[size]}`;

  if (variant === 'call') {
    return (
      <a
        href={`tel:${business.phone}`}
        className={`${baseClasses} bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 ${className}`}
      >
        <Phone className="w-5 h-5" />
        Call Now
      </a>
    );
  }

  if (variant === 'whatsapp' && whatsapp.enabled) {
    return (
      <a
        href={`https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.defaultMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} bg-green-600 text-white hover:bg-green-700 focus:ring-4 focus:ring-green-200 ${className}`}
      >
        <MessageSquare className="w-5 h-5" />
        WhatsApp
      </a>
    );
  }

  // Quote variant
  return (
    <a
      href="/contact"
      className={`${baseClasses} bg-orange-600 text-white hover:bg-orange-700 focus:ring-4 focus:ring-orange-200 ${className}`}
    >
      <FileText className="w-5 h-5" />
      Get a Fast Quote
    </a>
  );
}
